import type { ThemeConfig } from "../types/theme";

/**
 * Checks if `localStorage` is available.
 * Handles server-side rendering (SSR) and disabled storage scenarios.
 */
const isStorageAvailable = (): boolean => {
  try {
    return typeof window !== "undefined" && "localStorage" in window;
  } catch {
    return false;
  }
};

/**
 * Retrieves a stored theme configuration from `localStorage`.
 */
export function getStoredTheme(key: string): Partial<ThemeConfig> {
  if (!isStorageAvailable()) return {};

  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : {};
  } catch {
    return {};
  }
}

/**
 * Persists the theme configuration to `localStorage`.
 */
export function persistTheme(config: ThemeConfig, key: string): void {
  if (!isStorageAvailable()) return;

  try {
    localStorage.setItem(key, JSON.stringify(config));
  } catch {
    // Silently fail — may occur due to storage quota, private browsing, etc.
  }
}
