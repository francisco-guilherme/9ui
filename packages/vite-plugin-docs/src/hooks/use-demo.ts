import { useEffect, useState } from "react";
import { loadDemo as loadDemoFromVirtual } from "virtual:docs-demos";

/**
 * Represents the state of a loaded demo.
 */
export interface DemoState {
  Component: React.ComponentType | null;
  source: string;
  isLoading: boolean;
  error: string | null;
}

/**
 * React hook to load a demo component and its source code by name.
 */
export const useDemo = (name: string): DemoState => {
  const [state, setState] = useState<DemoState>({
    Component: null,
    source: "",
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    if (!name) {
      setState({
        Component: null,
        source: "",
        isLoading: false,
        error: "Missing demo name",
      });
      return;
    }

    let cancelled = false;

    const load = async () => {
      setState((s) => ({ ...s, isLoading: true, error: null }));

      try {
        const result = await loadDemoFromVirtual(name);

        if (cancelled) return;

        const { Component = null, code = "", error = null } = result || {};

        setState({
          Component,
          source: code,
          isLoading: false,
          error: error || (!result ? `Demo not found: ${name}` : null),
        });
      } catch (err) {
        if (!cancelled) {
          setState({
            Component: null,
            source: "",
            isLoading: false,
            error: err instanceof Error ? err.message : "Failed to load demo",
          });
        }
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, [name]);

  return state;
};
