import { createContext, useContext } from "react";

import { PageMetadata } from "../types/metadata";

export interface MetadataContextType {
  metadata: PageMetadata;
  frontmatter: Record<string, unknown>;
}

export const MetadataContext = createContext<MetadataContextType | null>(null);

export const MetadataProvider = MetadataContext.Provider;

export const useMetadata = (): MetadataContextType => {
  const context = useContext(MetadataContext);
  if (!context) {
    throw new Error("useMetadata must be used within a MetadataProvider");
  }
  return context;
};
