import type { ThemeVariant } from "../types";

const DATA_THEME_SELECTOR = /\[data-theme="([a-zA-Z0-9-_]+)"\]/g;
const VALID_VARIANT_NAME = /^[a-zA-Z0-9-_]+$/;

/**
 * Extracts valid theme variant names from a selector string
 */
const extractVariants = (selector: string): string[] => {
  const variants: string[] = [];
  let match: RegExpExecArray | null;

  while ((match = DATA_THEME_SELECTOR.exec(selector))) {
    const variant = match[1];
    if (VALID_VARIANT_NAME.test(variant)) {
      variants.push(variant);
    }
  }

  return variants;
};

/**
 * Scans a stylesheet for valid theme variants
 */
const getVariantsFromStylesheet = (sheet: CSSStyleSheet): string[] => {
  try {
    // Skip cross-origin stylesheets
    if (sheet.href && !sheet.href.startsWith(window.location.origin)) {
      return [];
    }

    const rules = sheet.cssRules;
    if (!rules) return [];

    const variants: string[] = [];

    for (const rule of rules) {
      if (rule instanceof CSSStyleRule) {
        variants.push(...extractVariants(rule.selectorText));
      }
    }

    return variants;
  } catch {
    return []; // Silently skip inaccessible stylesheets
  }
};

/**
 * Detects theme variants defined using [data-theme="..."] selectors in stylesheets
 */
export function detectAvailableVariants(): ThemeVariant[] {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return ["default"];
  }

  const foundVariants = new Set<ThemeVariant>(["default"]);

  for (const sheet of Array.from(document.styleSheets)) {
    const variants = getVariantsFromStylesheet(sheet);
    variants.forEach((v) => foundVariants.add(v));
  }

  return Array.from(foundVariants).sort();
}
