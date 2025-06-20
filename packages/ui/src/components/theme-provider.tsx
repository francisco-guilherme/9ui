import { useMemo, useSyncExternalStore } from "react";

import { ThemeContext, ThemeContextValue } from "../context/theme-context";
import { useThemeControl } from "../hooks/use-theme-control";
import { useThemeSync } from "../hooks/use-theme-sync";
import type { ThemeConfig, ThemeVariant } from "../types";
import { detectAvailableVariants } from "../utils/variants";

interface ThemeProviderProps {
  children: React.ReactNode;
  storageKey?: string;
  disableStorage?: boolean;
  defaultTheme?: Partial<ThemeConfig>;
  availableVariants?: ThemeVariant[];
}

// Create a reusable media query subscriber factory
const createMediaQuerySubscriber =
  (query: string) => (onChange: () => void) => {
    const media = window.matchMedia(query);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  };

const darkModeMediaQuery = "(prefers-color-scheme: dark)";
const subscribeToDarkMode = createMediaQuerySubscriber(darkModeMediaQuery);

/**
 * Provides theme configuration and control logic via React context
 */
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

      return (
        typeof window !== "undefined" &&
        window.matchMedia(darkModeMediaQuery).matches
      );
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
