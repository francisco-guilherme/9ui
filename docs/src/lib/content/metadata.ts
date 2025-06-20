import * as changeCase from "change-case";

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

export interface MetadataOptions {
  siteName?: string;
  defaultDescription?: string;
  defaultOgImage?: string;
  baseUrl?: string;
}

/**
 * Defaults applied across all pages unless overridden
 */
const defaultOptions: MetadataOptions = {
  siteName: "9ui",
  defaultDescription:
    "Beautiful, customizable components built with Base UI and Tailwind CSS.",
  defaultOgImage: "https://9ui.dev/og.jpg?v=3",
  baseUrl: "https://9ui.dev",
};

/**
 * Generates a page title from a slug by converting it to title case
 */
const generateTitleFromSlug = (slug: string): string => {
  if (!slug || slug === "/") return "Home";

  const segments = slug.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1];

  return changeCase.capitalCase(lastSegment);
};

/**
 * Generates the full page title with site name
 */
const generatePageTitle = (
  title: string,
  options: MetadataOptions = {},
): string => {
  const opts = { ...defaultOptions, ...options };
  return title === "Home"
    ? opts.siteName || title
    : `${title} - ${opts.siteName}`;
};

/**
 * Generates page metadata from frontmatter and slug
 */
export const generateMetadata = (
  frontmatter: Record<string, any> = {},
  slug: string,
  options: MetadataOptions = {},
): PageMetadata => {
  const opts = { ...defaultOptions, ...options };

  return {
    title: frontmatter.title || generateTitleFromSlug(slug),
    description: frontmatter.description || opts.defaultDescription || "",
    keywords: frontmatter.keywords || [],
    author: frontmatter.author,
    canonical:
      frontmatter.canonical || (opts.baseUrl && `${opts.baseUrl}/${slug}`),
    ogImage: frontmatter.ogImage || opts.defaultOgImage,
    ogType: frontmatter.ogType || "website",
    twitterCard: frontmatter.twitterCard || "summary_large_image",
  };
};

/**
 * Injects metadata tags into the HTML document head
 */
export const setDocumentMetadata = (
  metadata: PageMetadata,
  options: MetadataOptions = {},
): void => {
  const opts = { ...defaultOptions, ...options };

  document.title = generatePageTitle(metadata.title, opts);

  setMeta("description", metadata.description);
  if (metadata.keywords?.length) {
    setMeta("keywords", metadata.keywords.join(", "));
  }
  if (metadata.author) {
    setMeta("author", metadata.author);
  }
  if (metadata.canonical) {
    setLink("canonical", metadata.canonical);
  }

  // Open Graph
  setMetaProperty("og:title", metadata.title);
  setMetaProperty("og:description", metadata.description);
  setMetaProperty("og:type", metadata.ogType);
  setMetaProperty("og:image", metadata.ogImage);
  if (metadata.canonical) {
    setMetaProperty("og:url", metadata.canonical);
  }
  if (opts.siteName) {
    setMetaProperty("og:site_name", opts.siteName);
  }

  // Twitter
  setMeta("twitter:card", metadata.twitterCard);
  setMeta("twitter:title", metadata.title);
  setMeta("twitter:description", metadata.description);
  setMeta("twitter:image", metadata.ogImage);
};

/**
 * Clears all metadata added dynamically
 */
export const clearMetadata = (): void => {
  const metaSelectors = [
    'meta[name="description"]',
    'meta[name="keywords"]',
    'meta[name="author"]',
    'meta[property^="og:"]',
    'meta[name^="twitter:"]',
  ];
  metaSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => el.remove());
  });

  const canonical = document.querySelector('link[rel="canonical"]');
  canonical?.remove();
};

/**
 * Creates or updates a <meta name="..."> tag
 */
const setMeta = (name: string, content?: string): void => {
  if (!content) return;

  const meta = getOrCreateMeta(`meta[name="${name}"]`);
  meta.name = name;
  meta.content = content;
};

/**
 * Creates or updates a <meta property="..."> tag
 */
const setMetaProperty = (property: string, content?: string): void => {
  if (!content) return;

  const meta = getOrCreateMeta(`meta[property="${property}"]`);
  meta.setAttribute("property", property);
  meta.content = content;
};

/**
 * Creates or updates a <link rel="..."> tag
 */
const setLink = (rel: string, href?: string): void => {
  if (!href) return;

  const link = getOrCreateLink(`link[rel="${rel}"]`);
  link.rel = rel;
  link.href = href;
};

/**
 * Utility to get or create a <meta> element
 */
const getOrCreateMeta = (selector: string): HTMLMetaElement => {
  return (
    (document.querySelector(selector) as HTMLMetaElement) ??
    document.head.appendChild(document.createElement("meta"))
  );
};

/**
 * Utility to get or create a <link> element
 */
const getOrCreateLink = (selector: string): HTMLLinkElement => {
  return (
    (document.querySelector(selector) as HTMLLinkElement) ??
    document.head.appendChild(document.createElement("link"))
  );
};
