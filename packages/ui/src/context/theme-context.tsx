import { createContext } from "react";

import type { ThemeConfig, ThemeMode, ThemeVariant } from "../types";

export interface ThemeContextValue {
  config: ThemeConfig;
  isDark: boolean;
  availableVariants: ThemeVariant[];
  setConfig: (config: ThemeConfig) => void;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
  setVariant: (variant: ThemeVariant) => void;
  cycleVariant: (available: ThemeVariant[]) => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);
