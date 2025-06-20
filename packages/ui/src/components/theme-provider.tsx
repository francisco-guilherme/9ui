import * as React from "react";
import { useTheme, type UseThemeReturn } from "../hooks/use-theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = React.createContext<UseThemeReturn | undefined>(undefined);

/**
 * Theme provider component that manages theme state and provides theme utilities
 * to child components through React context
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = useTheme();

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

/**
 * Hook to access theme context
 * Must be used within a ThemeProvider
 */
export function useThemeContext(): UseThemeReturn {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }

  return context;
}
