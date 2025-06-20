import type { ThemeVariableGroup } from "../../types/theme";
import { getCSSVariable } from "../theme/css-vars";
import { THEME_VARIABLE_DEFINITIONS } from "../theme/definitions";

let originalThemeValues: Record<string, string> = {};

/**
 * Captures the original CSS variable values from the DOM
 * and stores them for later comparison.
 */
export function initializeOriginalValues(): void {
  originalThemeValues = {};

  for (const variable of Object.values(THEME_VARIABLE_DEFINITIONS).flat()) {
    const value = getCSSVariable(variable.name);
    if (value) {
      originalThemeValues[variable.name] = value;
    }
  }
}

/**
 * Retrieves the current theme variables from the DOM,
 * grouped by category, and compares them with the originals.
 */
export function getCurrentThemeVariables(): ThemeVariableGroup[] {
  return Object.entries(THEME_VARIABLE_DEFINITIONS).map(
    ([category, variables]) => ({
      category,
      variables: variables.map((v) => {
        const currentValue = getCSSVariable(v.name) || v.value;
        const originalValue = originalThemeValues[v.name] || currentValue;

        return {
          ...v,
          value: currentValue,
          originalValue,
          isModified: currentValue !== originalValue,
        };
      }),
    }),
  );
}
