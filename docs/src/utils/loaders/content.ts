import { ContentData } from "@/types/content";
import { generateMetadata } from "@/utils/metadata";
import { generateBreadcrumbs, pathToSlug } from "@/utils/path";

// Lazy-loaded MDX modules from the content directory
const contentModules = import.meta.glob("../../content/**/*.mdx");

/**
 * Loads content metadata and component by slug.
 */
export const loadContent = async (
  slug: string,
): Promise<ContentData | null> => {
  const path = Object.keys(contentModules).find((p) => pathToSlug(p) === slug);

  if (!path) {
    console.warn(`Content not found for slug: "${slug}"`);
    return null;
  }

  try {
    const mod = (await contentModules[path]()) as {
      default: React.ComponentType;
      frontmatter?: Record<string, unknown>;
      tableOfContents?: Array<{ value: string; url: string; depth: number }>;
    };

    return {
      Component: mod.default,
      source: "", // Source code is not available via Vite by default
      slug,
      metadata: generateMetadata(mod.frontmatter, slug),
      frontmatter: mod.frontmatter || {},
      breadcrumbs: generateBreadcrumbs(slug),
      tableOfContents: mod.tableOfContents || [],
    };
  } catch (error) {
    console.error(`Failed to load content for slug: "${slug}"`, error);
    return null;
  }
};
