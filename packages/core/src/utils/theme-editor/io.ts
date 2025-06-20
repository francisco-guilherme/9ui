import type { ThemeVariable } from "../../types/theme";
import { applyThemeVariables } from "../theme/css-vars";
import { getCurrentThemeVariables } from "./state";

/**
 * Exports the current theme variables as a CSS string.
 */
export function exportThemeAsCSS(): string {
  const groups = getCurrentThemeVariables();
  let css = ":root {\n";

  for (const group of groups) {
    css += `  /* ${group.category} */\n`;
    for (const v of group.variables) {
      if (v.value) {
        css += `  ${v.name}: ${v.value};\n`;
      }
    }
    css += "\n";
  }

  return css + "}";
}

/**
 * Exports the current theme variables as a JSON string.
 */
export function exportThemeAsJSON(): string {
  const result: Record<string, string> = {};

  for (const group of getCurrentThemeVariables()) {
    for (const v of group.variables) {
      if (v.value) {
        result[v.name] = v.value;
      }
    }
  }

  return JSON.stringify(result, null, 2);
}

/**
 * Imports and applies theme variables from a JSON string.
 */
export function importThemeFromJSON(json: string): void {
  try {
    const obj = JSON.parse(json);
    const variables: ThemeVariable[] = Object.entries(obj).map(
      ([name, value]) => ({
        name,
        value: String(value),
        category: "Imported",
        isModified: false,
      }),
    );
    applyThemeVariables(variables);
  } catch (err) {
    console.error("Invalid theme JSON format", err);
    throw new Error("Invalid theme JSON format");
  }
}

/**
 * Triggers a file download for the given theme content.
 */
export function downloadTheme(
  content: string,
  filename: string,
  type: string,
): void {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}
