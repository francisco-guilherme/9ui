import * as React from "react";

import { PageMetadata } from "./metadata";

/**
 * Context for MDX metadata (e.g., SEO, layout decisions, etc.)
 */
interface MetadataContextType {
  metadata: PageMetadata;
  frontmatter: Record<string, unknown>;
}

const MetadataContext = React.createContext<MetadataContextType | null>(null);

/**
 * Provides metadata context to MDX components.
 */
export const MetadataProvider = MetadataContext.Provider;

/**
 * Hook to access page metadata and frontmatter.
 */
export const useContentMetadata = (): MetadataContextType => {
  const context = React.useContext(MetadataContext);
  if (!context) {
    throw new Error(
      "useContentMetadata must be used within a MetadataProvider",
    );
  }
  return context;
};
