import type { ThemeVariant } from "../../types/theme";

const DATA_THEME_SELECTOR = /\[data-theme="([a-zA-Z0-9-_]+)"\]/g;
const VALID_VARIANT_NAME = /^[a-zA-Z0-9-_]+$/;

/**
 * Extracts valid theme variant names from a CSS selector string.
 */
function extractVariants(selector: string): string[] {
  const variants: string[] = [];
  let match: RegExpExecArray | null;

  while ((match = DATA_THEME_SELECTOR.exec(selector))) {
    const variant = match[1];
    if (VALID_VARIANT_NAME.test(variant)) {
      variants.push(variant);
    }
  }

  return variants;
}

/**
 * Scans a stylesheet for [data-theme="..."] selectors and extracts valid variants.
 */
function getVariantsFromStylesheet(sheet: CSSStyleSheet): string[] {
  try {
    if (sheet.href && !sheet.href.startsWith(window.location.origin)) return [];

    const variants: string[] = [];
    for (const rule of Array.from(sheet.cssRules)) {
      if (rule instanceof CSSStyleRule) {
        variants.push(...extractVariants(rule.selectorText));
      }
    }

    return variants;
  } catch {
    // Skip inaccessible or cross-origin stylesheets silently
    return [];
  }
}

/**
 * Detects all theme variants used in stylesheets via [data-theme="..."] selectors.
 */
export function detectAvailableVariants(): ThemeVariant[] {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return ["default"];
  }

  const found = new Set<ThemeVariant>(["default"]);

  for (const sheet of Array.from(document.styleSheets)) {
    getVariantsFromStylesheet(sheet).forEach((v) => found.add(v));
  }

  return Array.from(found).sort();
}

/**
 * Sets the theme variant by modifying the `data-theme` attribute on <html>.
 */
export function setThemeVariant(variant: ThemeVariant): void {
  if (typeof document === "undefined") return;

  const el = document.documentElement;
  if (variant === "default") {
    el.removeAttribute("data-theme");
  } else {
    el.setAttribute("data-theme", variant);
  }
}

/**
 * Gets the currently active theme variant.
 */
export function getCurrentThemeVariant(): ThemeVariant {
  if (typeof document === "undefined") return "default";
  return document.documentElement.getAttribute("data-theme") || "default";
}

/**
 * Returns all theme variants detected in stylesheets.
 */
export function getThemeVariants(): ThemeVariant[] {
  return detectAvailableVariants();
}
