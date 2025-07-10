export interface ContentMetadata {
  path: string;
  file: string;
  frontmatter: Record<string, unknown>;
}

export interface DemoMetaData {
  name: string;
  path: string;
  file: string;
}

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
