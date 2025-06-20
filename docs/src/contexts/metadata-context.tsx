import { createContext } from "react";

export interface MetadataContextType {
  metadata: {
    title: string;
    description: string;
    keywords?: string[];
    author?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    twitterCard?: string;
  };
  frontmatter: Record<string, unknown>;
}

export const MetadataContext = createContext<MetadataContextType | null>(null);

export const MetadataProvider = MetadataContext.Provider;
