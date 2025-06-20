import { useCallback, useState } from "react";

import type { ThemeConfig, ThemeMode, ThemeVariant } from "../types";
import { getStoredTheme } from "../utils/presistence";

interface UseThemeControlOptions {
  defaultTheme?: Partial<ThemeConfig>;
  storageKey: string;
  disableStorage: boolean;
}

const THEME_MODES: readonly ThemeMode[] = ["light", "dark", "auto"];

const DEFAULT_CONFIG: ThemeConfig = {
  mode: "light",
  variant: "default",
};

const cycle = <T>(items: readonly T[], current: T): T => {
  const index = items.indexOf(current);
  return items[(index + 1) % items.length];
};

/**
 * Custom hook to manage theme mode and variant with optional persistence.
 */
export function useThemeControl({
  defaultTheme = {},
  storageKey,
  disableStorage,
}: UseThemeControlOptions) {
  const initialConfig = {
    ...DEFAULT_CONFIG,
    ...(!disableStorage && getStoredTheme(storageKey)),
    ...defaultTheme,
  };

  const [config, setConfig] = useState<ThemeConfig>(initialConfig);

  const updateConfig = useCallback(
    (
      updates:
        | Partial<ThemeConfig>
        | ((prev: ThemeConfig) => Partial<ThemeConfig>),
    ) => {
      setConfig((prev) => ({
        ...prev,
        ...(typeof updates === "function" ? updates(prev) : updates),
      }));
    },
    [],
  );

  const setMode = useCallback(
    (mode: ThemeMode) => updateConfig({ mode }),
    [updateConfig],
  );

  const toggleMode = useCallback(
    () => updateConfig((prev) => ({ mode: cycle(THEME_MODES, prev.mode) })),
    [updateConfig],
  );

  const setVariant = useCallback(
    (variant: ThemeVariant) => updateConfig({ variant }),
    [updateConfig],
  );

  const cycleVariant = useCallback(
    (variants: ThemeVariant[]) =>
      updateConfig((prev) => ({
        variant: cycle(variants, prev.variant),
      })),
    [updateConfig],
  );

  return {
    config,
    setConfig,
    setMode,
    toggleMode,
    setVariant,
    cycleVariant,
  } as const;
}
