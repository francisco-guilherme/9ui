import type { ThemeConfig } from "../types";

/**
 * Check if localStorage is available (handles SSR and disabled storage)
 */
const isStorageAvailable = (): boolean => {
  try {
    return typeof window !== "undefined" && "localStorage" in window;
  } catch {
    return false;
  }
};

export function getStoredTheme(key: string): Partial<ThemeConfig> {
  if (!isStorageAvailable()) return {};

  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : {};
  } catch {
    return {};
  }
}

export function persistTheme(config: ThemeConfig, key: string): void {
  if (!isStorageAvailable()) return;

  try {
    localStorage.setItem(key, JSON.stringify(config));
  } catch {
    // Silently fail - could be due to storage quota, private browsing, etc.
  }
}
