import type { ThemeVariable } from "../../types/theme";

/**
 * Gets the computed value of a CSS variable from the root element.
 */
export function getCSSVariable(name: string): string {
  if (typeof window === "undefined") return "";
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}

/**
 * Sets a CSS variable on the root element.
 */
export function setCSSVariable(name: string, value: string): void {
  if (typeof window === "undefined") return;
  document.documentElement.style.setProperty(name, value);
}

/**
 * Removes CSS variables from the root element.
 */
export function resetCSSVariables(names: string[]): void {
  if (typeof window === "undefined") return;
  names.forEach((name) => {
    document.documentElement.style.removeProperty(name);
  });
}

/**
 * Applies a list of theme variables to the root element.
 */
export function applyThemeVariables(vars: ThemeVariable[]): void {
  for (const v of vars) {
    setCSSVariable(v.name, v.value);
  }
}
