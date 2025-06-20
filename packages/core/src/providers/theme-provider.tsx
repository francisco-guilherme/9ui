import {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

import { useThemeControl } from "../hooks/use-theme-control";
import { useThemeSync } from "../hooks/use-theme-sync";
import type { ThemeConfig, ThemeMode, ThemeVariant } from "../types/theme";
import { prefersDarkMode, subscribeToDarkMode } from "../utils/media";
import { detectAvailableVariants } from "../utils/theme/variants";

interface ThemeProviderProps {
  children: React.ReactNode;
  storageKey?: string;
  disableStorage?: boolean;
  defaultTheme?: Partial<ThemeConfig>;
  availableVariants?: ThemeVariant[];
}

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

export function ThemeProvider({
  children,
  storageKey = "theme",
  disableStorage = false,
  defaultTheme = {},
  availableVariants,
}: ThemeProviderProps) {
  const themeControl = useThemeControl({
    defaultTheme,
    storageKey,
    disableStorage,
  });

  useThemeSync(themeControl.config, { storageKey, disableStorage });

  const variants = useMemo<ThemeVariant[]>(
    () => availableVariants ?? detectAvailableVariants(),
    [availableVariants],
  );

  const isDark = useSyncExternalStore(
    subscribeToDarkMode,
    () => {
      const { mode } = themeControl.config;
      if (mode === "dark") return true;
      if (mode === "light") return false;
      return prefersDarkMode();
    },
    () => false, // SSR fallback
  );

  const contextValue = useMemo<ThemeContextValue>(
    () => ({
      ...themeControl,
      isDark,
      availableVariants: variants,
    }),
    [themeControl, isDark, variants],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Access the theme context. Must be used within a ThemeProvider.
 */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
