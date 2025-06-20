export interface ThemeVariableDefinition {
  name: string;
  value: string;
  category: string;
  description?: string;
}

export interface ThemeVariable extends ThemeVariableDefinition {
  originalValue?: string;
  isModified: boolean;
}

export interface ThemeChange {
  id: string;
  timestamp: number;
  variable: string;
  oldValue: string;
  newValue: string;
  category: string;
}

export interface ThemeState {
  variables: ThemeVariable[];
  changes: ThemeChange[];
  currentChangeIndex: number;
}

export interface ThemeVariableGroup {
  category: string;
  variables: ThemeVariable[];
}

// Define theme variable categories and their variables
export const THEME_VARIABLE_DEFINITIONS: Record<
  string,
  ThemeVariableDefinition[]
> = {
  "Core Colors": [
    {
      name: "--color-background",
      value: "",
      category: "Core Colors",
      description: "Main background color",
    },
    {
      name: "--color-foreground",
      value: "",
      category: "Core Colors",
      description: "Main text color",
    },
    {
      name: "--color-border",
      value: "",
      category: "Core Colors",
      description: "Border color",
    },
    {
      name: "--color-input",
      value: "",
      category: "Core Colors",
      description: "Input background color",
    },
    {
      name: "--color-ring",
      value: "",
      category: "Core Colors",
      description: "Focus ring color",
    },
  ],
  "Primary Colors": [
    {
      name: "--color-primary",
      value: "",
      category: "Primary Colors",
      description: "Primary brand color",
    },
    {
      name: "--color-primary-foreground",
      value: "",
      category: "Primary Colors",
      description: "Text on primary color",
    },
  ],
  "Secondary Colors": [
    {
      name: "--color-secondary",
      value: "",
      category: "Secondary Colors",
      description: "Secondary color",
    },
    {
      name: "--color-secondary-foreground",
      value: "",
      category: "Secondary Colors",
      description: "Text on secondary color",
    },
  ],
  "Muted Colors": [
    {
      name: "--color-muted",
      value: "",
      category: "Muted Colors",
      description: "Muted background color",
    },
    {
      name: "--color-muted-foreground",
      value: "",
      category: "Muted Colors",
      description: "Muted text color",
    },
  ],
  "Accent Colors": [
    {
      name: "--color-accent",
      value: "",
      category: "Accent Colors",
      description: "Accent background color",
    },
    {
      name: "--color-accent-foreground",
      value: "",
      category: "Accent Colors",
      description: "Text on accent color",
    },
  ],
  "Status Colors": [
    {
      name: "--color-destructive",
      value: "",
      category: "Status Colors",
      description: "Destructive/error color",
    },
    {
      name: "--color-destructive-foreground",
      value: "",
      category: "Status Colors",
      description: "Text on destructive color",
    },
    {
      name: "--color-danger",
      value: "",
      category: "Status Colors",
      description: "Danger background color",
    },
    {
      name: "--color-danger-foreground",
      value: "",
      category: "Status Colors",
      description: "Danger text color",
    },
    {
      name: "--color-warning",
      value: "",
      category: "Status Colors",
      description: "Warning background color",
    },
    {
      name: "--color-warning-foreground",
      value: "",
      category: "Status Colors",
      description: "Warning text color",
    },
    {
      name: "--color-info",
      value: "",
      category: "Status Colors",
      description: "Info background color",
    },
    {
      name: "--color-info-foreground",
      value: "",
      category: "Status Colors",
      description: "Info text color",
    },
    {
      name: "--color-success",
      value: "",
      category: "Status Colors",
      description: "Success background color",
    },
    {
      name: "--color-success-foreground",
      value: "",
      category: "Status Colors",
      description: "Success text color",
    },
  ],
  "Surface Colors": [
    {
      name: "--color-card",
      value: "",
      category: "Surface Colors",
      description: "Card background color",
    },
    {
      name: "--color-card-foreground",
      value: "",
      category: "Surface Colors",
      description: "Card text color",
    },
    {
      name: "--color-popover",
      value: "",
      category: "Surface Colors",
      description: "Popover background color",
    },
    {
      name: "--color-popover-foreground",
      value: "",
      category: "Surface Colors",
      description: "Popover text color",
    },
  ],
  "Chart Colors": [
    {
      name: "--chart-1",
      value: "",
      category: "Chart Colors",
      description: "Chart color 1",
    },
    {
      name: "--chart-2",
      value: "",
      category: "Chart Colors",
      description: "Chart color 2",
    },
    {
      name: "--chart-3",
      value: "",
      category: "Chart Colors",
      description: "Chart color 3",
    },
    {
      name: "--chart-4",
      value: "",
      category: "Chart Colors",
      description: "Chart color 4",
    },
    {
      name: "--chart-5",
      value: "",
      category: "Chart Colors",
      description: "Chart color 5",
    },
  ],
};

/**
 * Get current CSS custom property value
 */
export function getCSSVariable(name: string): string {
  if (typeof window === "undefined") return "";

  const value = getComputedStyle(document.documentElement).getPropertyValue(
    name,
  );
  return value.trim();
}

/**
 * Set CSS custom property value
 */
export function setCSSVariable(name: string, value: string): void {
  if (typeof window === "undefined") return;

  document.documentElement.style.setProperty(name, value);
}

// Store original values for comparison
let originalThemeValues: Record<string, string> = {};

/**
 * Initialize original theme values
 */
export function initializeOriginalValues(): void {
  originalThemeValues = {};
  for (const variables of Object.values(THEME_VARIABLE_DEFINITIONS)) {
    for (const variable of variables) {
      const currentValue = getCSSVariable(variable.name);
      if (currentValue) {
        originalThemeValues[variable.name] = currentValue;
      }
    }
  }
}

/**
 * Get all current theme variables with their values and modification status
 */
export function getCurrentThemeVariables(): ThemeVariableGroup[] {
  const groups: ThemeVariableGroup[] = [];

  for (const [category, variables] of Object.entries(
    THEME_VARIABLE_DEFINITIONS,
  )) {
    const variablesWithValues = variables.map((variable) => {
      const currentValue = getCSSVariable(variable.name) || variable.value;
      const originalValue = originalThemeValues[variable.name] || currentValue;

      return {
        ...variable,
        value: currentValue,
        originalValue,
        isModified: currentValue !== originalValue,
      };
    });

    groups.push({
      category,
      variables: variablesWithValues,
    });
  }

  return groups;
}

// Change tracking
let changeHistory: ThemeChange[] = [];
let currentChangeIndex = -1;

/**
 * Generate unique ID for changes
 */
function generateChangeId(): string {
  return `change_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
}

/**
 * Record a theme change
 */
export function recordThemeChange(
  variableName: string,
  oldValue: string,
  newValue: string,
  category: string,
): void {
  // Remove any changes after current index (when undoing then making new changes)
  changeHistory = changeHistory.slice(0, currentChangeIndex + 1);

  const change: ThemeChange = {
    id: generateChangeId(),
    timestamp: Date.now(),
    variable: variableName,
    oldValue,
    newValue,
    category,
  };

  changeHistory.push(change);
  currentChangeIndex = changeHistory.length - 1;

  // Limit history to 50 changes
  if (changeHistory.length > 50) {
    changeHistory = changeHistory.slice(-50);
    currentChangeIndex = changeHistory.length - 1;
  }
}

/**
 * Apply theme variables to the document with change tracking
 */
export function applyThemeVariables(variables: ThemeVariable[]): void {
  variables.forEach((variable) => {
    setCSSVariable(variable.name, variable.value);
  });
}

/**
 * Apply a single theme variable with change tracking
 */
export function applyThemeVariable(
  variableName: string,
  newValue: string,
  category: string,
): void {
  const oldValue = getCSSVariable(variableName);

  if (oldValue !== newValue) {
    setCSSVariable(variableName, newValue);
    recordThemeChange(variableName, oldValue, newValue, category);
  }
}

/**
 * Undo last change
 */
export function undoLastChange(): boolean {
  if (currentChangeIndex < 0) return false;

  const change = changeHistory[currentChangeIndex];
  setCSSVariable(change.variable, change.oldValue);
  currentChangeIndex--;

  return true;
}

/**
 * Redo next change
 */
export function redoNextChange(): boolean {
  if (currentChangeIndex >= changeHistory.length - 1) return false;

  currentChangeIndex++;
  const change = changeHistory[currentChangeIndex];
  setCSSVariable(change.variable, change.newValue);

  return true;
}

/**
 * Get change history info
 */
export function getChangeHistory(): {
  changes: ThemeChange[];
  currentIndex: number;
  canUndo: boolean;
  canRedo: boolean;
} {
  return {
    changes: [...changeHistory],
    currentIndex: currentChangeIndex,
    canUndo: currentChangeIndex >= 0,
    canRedo: currentChangeIndex < changeHistory.length - 1,
  };
}

/**
 * Clear change history
 */
export function clearChangeHistory(): void {
  changeHistory = [];
  currentChangeIndex = -1;
}

/**
 * Reset theme variables to their original values
 */
export function resetThemeVariables(): void {
  if (typeof window === "undefined") return;

  // Remove all custom property overrides
  Object.values(THEME_VARIABLE_DEFINITIONS)
    .flat()
    .forEach((variable) => {
      document.documentElement.style.removeProperty(variable.name);
    });

  // Clear change history
  clearChangeHistory();
}

/**
 * Export current theme as CSS
 */
export function exportThemeAsCSS(): string {
  const groups = getCurrentThemeVariables();
  let css = ":root {\n";

  groups.forEach((group) => {
    css += `  /* ${group.category} */\n`;
    group.variables.forEach((variable) => {
      if (variable.value) {
        css += `  ${variable.name}: ${variable.value};\n`;
      }
    });
    css += "\n";
  });

  css += "}";
  return css;
}

/**
 * Export current theme as JSON
 */
export function exportThemeAsJSON(): string {
  const groups = getCurrentThemeVariables();
  const themeObject: Record<string, string> = {};

  groups.forEach((group) => {
    group.variables.forEach((variable) => {
      if (variable.value) {
        themeObject[variable.name] = variable.value;
      }
    });
  });

  return JSON.stringify(themeObject, null, 2);
}

/**
 * Import theme from JSON
 */
export function importThemeFromJSON(jsonString: string): void {
  try {
    const themeObject = JSON.parse(jsonString);
    const variables: ThemeVariable[] = [];

    for (const [name, value] of Object.entries(themeObject)) {
      if (typeof value === "string") {
        variables.push({
          name,
          value,
          category: "Imported",
          isModified: false,
        });
      }
    }

    applyThemeVariables(variables);
  } catch (error) {
    console.error("Failed to import theme:", error);
    throw new Error("Invalid theme JSON format");
  }
}

/**
 * Download theme as file
 */
export function downloadTheme(
  content: string,
  filename: string,
  mimeType: string,
): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
