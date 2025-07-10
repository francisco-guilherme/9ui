import { NavItem } from "../types/navigation";
import { capitalCase } from "./string";

type ContentItem = {
  path: string;
  meta: Record<string, unknown>;
};

/**
 * Extracts the top-level section from a content path.
 */
function extractSection(path: string): string {
  const segments = path.split("/").filter(Boolean);
  return segments[0] || "main";
}

/**
 * Gets the display title for a content item.
 *
 * Priority: `meta.title` → last path segment → empty string.
 */
function getTitle(content: ContentItem): string {
  if (typeof content.meta.title === "string") return content.meta.title;

  const segments = content.path.split("/").filter(Boolean);
  return segments.at(-1) || "";
}

/**
 * Groups items by top-level section (e.g., "components", "guides").
 */
function groupBySection<T extends { path: string }>(
  items: T[],
): Record<string, T[]> {
  return items.reduce<Record<string, T[]>>((acc, item) => {
    const section = extractSection(item.path);
    acc[section] ??= [];
    acc[section].push(item);
    return acc;
  }, {});
}

/**
 * Filters out `.tsx` demo files from the content list.
 */
function filterContentPages(contents: ContentItem[]): ContentItem[] {
  return contents.filter((item) => !item.path.endsWith(".tsx"));
}

/**
 * Creates top-level navigation items for the main header.
 * One item per section, excluding "main".
 */
export function createHeader(contents: ContentItem[]): NavItem[] {
  const seen = new Set<string>();
  const items: NavItem[] = [];

  for (const content of contents) {
    const section = extractSection(content.path);
    if (section === "main" || seen.has(section)) continue;

    seen.add(section);
    items.push({
      title: capitalCase(section),
      path: content.path,
    });
  }

  return items;
}

/**
 * Creates a grouped sidebar navigation structure.
 */
export function createSidebar(
  contents: ContentItem[],
): Record<string, NavItem[]> {
  const pages = filterContentPages(contents);
  const grouped = groupBySection(pages);

  return Object.fromEntries(
    Object.entries(grouped).map(([section, items]) => [
      section,
      items.map((item) => ({
        title: getTitle(item),
        path: item.path,
      })),
    ]),
  );
}

/**
 * Creates breadcrumb navigation from a URL slug.
 */
export function createBreadcrumbs(
  slug: string,
): Array<{ label: string; path: string }> {
  const segments = slug.split("/").filter(Boolean);

  return segments.map((segment, index) => ({
    label: capitalCase(segment),
    path: "/" + segments.slice(0, index + 1).join("/"),
  }));
}
