import { capitalCase } from "change-case";

import { PageMetadata } from "@/types/content";

/**
 * Generates a human-readable title from a given slug.
 * Falls back to "Home" if the slug is empty or root.
 */
export const generateTitleFromSlug = (slug: string): string => {
  if (!slug || slug === "/") return "Home";

  const segments = slug.split("/").filter(Boolean);
  const last = segments.at(-1) ?? "Home";

  return capitalCase(last);
};

/**
 * Creates a complete PageMetadata object from frontmatter and slug.
 * Applies sensible defaults if values are missing.
 */
export const generateMetadata = (
  frontmatter: Partial<PageMetadata> = {},
  slug: string,
): PageMetadata => {
  const cleanSlug = slug.replace(/^\/+/, "");

  return {
    title: frontmatter.title || generateTitleFromSlug(slug),
    description:
      frontmatter.description ||
      "Beautiful, customizable components built with Base UI and Tailwind CSS.",
    keywords: frontmatter.keywords || [],
    author: frontmatter.author,
    canonical: frontmatter.canonical || `https://9ui.dev/${cleanSlug}`,
    ogImage: frontmatter.ogImage || "https://9ui.dev/og.jpg?v=3",
    ogType: frontmatter.ogType || "website",
    twitterCard: frontmatter.twitterCard || "summary_large_image",
  };
};

/**
 * Sets the document title based on metadata.
 */
export const setDocumentMetadata = (metadata: PageMetadata): void => {
  document.title =
    metadata.title === "Home" ? "9ui" : `${metadata.title} - 9ui`;
};
