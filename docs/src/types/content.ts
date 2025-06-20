import { TocItem } from "./nav";

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

export interface ContentData {
  Component: React.ComponentType;
  source: string;
  slug: string;
  metadata: PageMetadata;
  frontmatter: Record<string, unknown>;
  breadcrumbs: Array<{ label: string; path: string }>;
  tableOfContents: TocItem[];
}
