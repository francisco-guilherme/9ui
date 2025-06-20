import { useEffect, useState } from "react";

import { loadDemo } from "@/utils/loaders/demo";
import { loadSource } from "@/utils/loaders/source";

export interface SourceResult {
  Component?: React.ComponentType | null;
  code: string;
  loading: boolean;
  error: string | null;
}

export const useSource = (
  name: string,
  type: "demo" | "ui" = "demo",
): SourceResult => {
  const [result, setResult] = useState<SourceResult>({
    Component: null,
    code: "",
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    const fetch = async () => {
      setResult((prev) => ({ ...prev, loading: true, error: null }));

      try {
        const data =
          type === "demo" ? await loadDemo(name) : await loadSource(name);

        if (!cancelled) {
          setResult({
            Component: data?.Component || null,
            code: data?.code || "",
            loading: false,
            error: data ? null : `${type} source not found: ${name}`,
          });
        }
      } catch (err) {
        if (!cancelled) {
          setResult({
            Component: null,
            code: "",
            loading: false,
            error: err instanceof Error ? err.message : "Failed to load source",
          });
        }
      }
    };

    fetch();
    return () => {
      cancelled = true;
    };
  }, [name, type]);

  return result;
};

export const useDemo = (name: string): SourceResult => useSource(name, "demo");
export const useUISource = (name: string): SourceResult =>
  useSource(name, "ui");
export const usePreviewSource = (name: string): SourceResult =>
  useSource(name, "demo");
