import { getNameFromPath } from "../path";

// Raw source modules for UI components
const uiRawModules = import.meta.glob(
  "../../../../packages/ui/src/components/**/*.tsx",
  { query: "?raw" },
);

type SourceResult = {
  code: string;
  loading: boolean;
  error: string | null;
} | null;

/**
 * Loads the raw source code for a UI component by name.
 */
export const loadSource = async (name: string): Promise<SourceResult> => {
  const match = Object.entries(uiRawModules).find(
    ([path]) => getNameFromPath(path) === name,
  );

  if (!match) return null;

  try {
    const rawMod = await match[1]();
    const code = (rawMod as { default?: string })?.default || "";

    return {
      code,
      loading: false,
      error: null,
    };
  } catch (err) {
    return {
      code: "",
      loading: false,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
};
