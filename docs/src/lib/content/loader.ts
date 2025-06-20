import * as changeCase from "change-case";

import { generateMetadata, PageMetadata } from "./metadata";

export interface ContentData {
  Component: React.ComponentType;
  source: string;
  slug: string;
  metadata: PageMetadata;
  frontmatter: Record<string, unknown>;
  breadcrumbs: Array<{ label: string; path: string }>;
  tableOfContents: Array<{ value: string; url: string; depth: number }>;
}

// Dynamically import all MDX content files
const contentModules = import.meta.glob("../../content/**/*.mdx", {
  eager: false,
});

/**
 * Converts a file path to a clean URL slug.
 */
const pathToSlug = (filePath: string): string => {
  return filePath
    .replace("../../content/", "")
    .replace(/\/index$/, "")
    .replace(/\.mdx$/, "");
};

/**
 * Builds a breadcrumb trail from a slug.
 */
const generateBreadcrumbs = (slug: string) =>
  slug
    .split("/")
    .filter(Boolean)
    .map((segment, index, segments) => ({
      label: changeCase.capitalCase(segment || "Home"),
      path: "/" + segments.slice(0, index + 1).join("/"),
    }));

/**
 * Loads and returns content data for a given slug.
 */
export const loadContent = async (
  slug: string,
): Promise<ContentData | null> => {
  const matchingPath = Object.keys(contentModules).find(
    (path) => pathToSlug(path) === slug,
  );

  if (!matchingPath) return null;

  try {
    const module = (await contentModules[matchingPath]()) as any;
    const {
      default: Component,
      frontmatter = {},
      tableOfContents = [],
    } = module;

    return {
      Component,
      source: "", // raw source not exposed in Vite
      slug,
      metadata: generateMetadata(frontmatter, slug),
      frontmatter,
      breadcrumbs: generateBreadcrumbs(slug),
      tableOfContents: tableOfContents || frontmatter.tableOfContents || [],
    };
  } catch (error) {
    console.error(`Failed to load content for slug: "${slug}"`, error);
    return null;
  }
};
