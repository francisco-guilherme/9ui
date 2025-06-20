import { useEffect } from "react";

import type { ThemeConfig } from "../types";
import { applyTheme } from "../utils/dom";
import { persistTheme } from "../utils/presistence";

interface UseThemeSyncOptions {
  storageKey: string;
  disableStorage: boolean;
}

// Global state for system theme listener
let systemThemeQuery: MediaQueryList | null = null;
let systemThemeListener: (() => void) | null = null;

/**
 * Sets up a listener for system theme preference changes
 */
function listenToSystemTheme(callback: () => void): void {
  if (typeof window === "undefined") return;

  // Clean up existing listener first
  removeSystemThemeListener();

  systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  systemThemeListener = callback;
  systemThemeQuery.addEventListener("change", systemThemeListener);
}

/**
 * Removes the system theme preference listener
 */
function removeSystemThemeListener(): void {
  if (systemThemeQuery && systemThemeListener) {
    systemThemeQuery.removeEventListener("change", systemThemeListener);
    systemThemeQuery = null;
    systemThemeListener = null;
  }
}

/**
 * Syncs theme changes to DOM, storage, and system preferences.
 */
export function useThemeSync(
  config: ThemeConfig,
  { storageKey, disableStorage }: UseThemeSyncOptions,
) {
  // Apply theme to DOM and persist to storage
  useEffect(() => {
    applyTheme(config);

    // Only persist if storage is enabled
    if (!disableStorage) {
      persistTheme(config, storageKey);
    }
  }, [config, storageKey, disableStorage]);

  // Listen to system theme changes when in auto mode
  useEffect(() => {
    // Only listen to system theme changes in auto mode
    if (config.mode !== "auto") return;

    // Re-apply theme when system preference changes
    const handleSystemThemeChange = () => applyTheme(config);

    listenToSystemTheme(handleSystemThemeChange);

    // Cleanup listener on unmount or when mode changes
    return removeSystemThemeListener;
  }, [config.mode, config.variant]); // Only depend on relevant config parts
}
