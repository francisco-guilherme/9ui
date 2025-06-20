import { useSource } from "./useSource";

export const useComponentSource = (
  name: string,
  mode: "preview" | "source" = "source",
) => {
  const source = useSource(name, mode === "preview" ? "demo" : "ui");

  return mode === "preview"
    ? {
        DemoComponent: source.Component,
        sourceCode: source.code,
        isLoading: source.loading,
        loadError: source.error,
      }
    : {
        code: source.code,
        loading: source.loading,
        error: source.error,
      };
};
