import type { ThemeConfig } from "../types/theme";

const THEME_DATA_ATTRIBUTES = ["data-theme"] as const;
const THEME_CLASSES = ["dark"] as const;

let isFirstApplication = true;

/**
 * Determines the preferred color mode based on user configuration or system settings.
 */
const getPreferredMode = (mode: ThemeConfig["mode"]): "dark" | "light" => {
  if (mode === "dark" || mode === "light") return mode;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

/**
 * Clears theme-related data attributes and CSS classes from an element.
 */
const clearThemeAttributes = (el: HTMLElement): void => {
  for (const attr of THEME_DATA_ATTRIBUTES) {
    el.removeAttribute(attr);
  }
  for (const cls of THEME_CLASSES) {
    el.classList.remove(cls);
  }
};

/**
 * Applies the theme configuration to the root HTML element.
 */
export function applyTheme(config: ThemeConfig): void {
  if (typeof document === "undefined") return;

  const root = document.documentElement;

  // Prevent transitions during first theme application
  if (isFirstApplication) {
    root.classList.add("no-transition");
    isFirstApplication = false;
  }

  clearThemeAttributes(root);

  const mode = getPreferredMode(config.mode);

  // Apply theme variant as data attribute
  if (config.variant && config.variant !== "default") {
    root.setAttribute("data-theme", config.variant);
  }

  // Apply dark mode as class
  if (mode === "dark") {
    root.classList.add("dark");
  }

  // Restore transitions
  if (root.classList.contains("no-transition")) {
    requestAnimationFrame(() => root.classList.remove("no-transition"));
  }
}
