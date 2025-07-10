import { PageMetadata } from "../types/metadata";
import { capitalCase } from "./string";

// Default values for metadata
const DEFAULT_METADATA = {
  description:
    "Beautiful, customizable components built with Base UI and Tailwind CSS.",
  keywords: [],
  baseUrl: "https://9ui.dev",
  defaultOgImage: "https://9ui.dev/og.jpg?v=3",
  ogType: "website",
  twitterCard: "summary_large_image",
};

/**
 * Creates a user-friendly title from a URL slug
 * Examples:
 * "/" → "Home"
 * "/getting-started" → "Getting Started"
 * "/components/button" → "Button"
 */
function createTitleFromSlug(slug: string): string {
  // Handle root/home case
  if (!slug || slug === "/") {
    return "Home";
  }

  // Split path and get the last meaningful segment
  const pathSegments = slug.split("/").filter((segment) => segment.length > 0);
  const lastSegment = pathSegments[pathSegments.length - 1] || "home";

  // Convert to title case (e.g., "getting-started" → "Getting Started")
  return capitalCase(lastSegment);
}

/**
 * Removes leading slashes from a slug to create clean URLs
 * Examples: "///getting-started" → "getting-started"
 */
function cleanSlugForUrl(slug: string): string {
  return slug.replace(/^\/+/, "");
}

/**
 * Builds the canonical URL for a page
 */
function buildCanonicalUrl(slug: string): string {
  const cleanSlug = cleanSlugForUrl(slug);
  return `${DEFAULT_METADATA.baseUrl}/${cleanSlug}`;
}

/**
 * Generates complete page metadata by combining frontmatter with sensible defaults
 */
export function generatePageMetadata(
  frontmatter: Partial<PageMetadata> = {},
  slug: string,
): PageMetadata {
  return {
    // Page title: use frontmatter or generate from slug
    title: frontmatter.title || createTitleFromSlug(slug),
    // Meta description for SEO
    description: frontmatter.description || DEFAULT_METADATA.description,
    // Keywords for SEO (empty array if not specified)
    keywords: frontmatter.keywords || DEFAULT_METADATA.keywords,
    // Optional author information
    author: frontmatter.author,
    // Canonical URL to prevent duplicate content issues
    canonical: frontmatter.canonical || buildCanonicalUrl(slug),
    // Open Graph image for social sharing
    ogImage: frontmatter.ogImage || DEFAULT_METADATA.defaultOgImage,
    // Open Graph content type
    ogType: frontmatter.ogType || DEFAULT_METADATA.ogType,
    // Twitter card type for Twitter sharing
    twitterCard: frontmatter.twitterCard || DEFAULT_METADATA.twitterCard,
  };
}
