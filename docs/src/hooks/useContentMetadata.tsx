import { useContext } from "react";

import {
  MetadataContext,
  MetadataContextType,
} from "@/contexts/metadata-context";

export const useContentMetadata = (): MetadataContextType => {
  const context = useContext(MetadataContext);
  if (!context) {
    throw new Error(
      "useContentMetadata must be used within a MetadataProvider",
    );
  }
  return context;
};
