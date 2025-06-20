import { getNameFromPath } from "../path";

// Demo modules and their raw source counterparts
const demoModules = import.meta.glob("../../demos/**/*.tsx");
const demoRawModules = import.meta.glob("../../demos/**/*.tsx", {
  query: "?raw",
});

type DemoLoadResult = {
  Component: React.ComponentType | null;
  code: string;
  loading: boolean;
  error: string | null;
} | null;

/**
 * Loads a demo component and its raw source code by name.
 */
export const loadDemo = async (name: string): Promise<DemoLoadResult> => {
  const matchByName = (modules: Record<string, () => Promise<unknown>>) =>
    Object.entries(modules).find(([path]) => getNameFromPath(path) === name);

  const componentEntry = matchByName(demoModules);
  const rawEntry = matchByName(demoRawModules);

  if (!componentEntry) return null;

  try {
    const [componentMod, rawMod] = await Promise.all([
      componentEntry[1](),
      rawEntry?.[1]?.() ?? Promise.resolve(null),
    ]);

    const Component =
      (componentMod as { default?: React.ComponentType })?.default || null;
    const rawCode = (rawMod as { default?: string })?.default || "";

    return {
      Component,
      code: rawCode.replace("export default", "export"),
      loading: false,
      error: null,
    };
  } catch (err) {
    return {
      Component: null,
      code: "",
      loading: false,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
};
