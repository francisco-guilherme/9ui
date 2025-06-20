export type ThemeMode = "light" | "dark" | "auto";
export type ThemeVariant = string;

/**
 * Global theme configuration.
 */
export interface ThemeConfig {
  mode: ThemeMode;
  variant: ThemeVariant;
}

/**
 * Definition of a single theme variable as declared in a theme.
 */
export interface ThemeVariableDefinition {
  /** The CSS custom property name (e.g. `--color-background`) */
  name: string;
  /** Default or initial value */
  value: string;
  /** Category used for grouping in UI */
  category: string;
  /** Optional description for documentation or UI hints */
  description?: string;
}

/**
 * A runtime theme variable, including state information.
 */
export interface ThemeVariable extends ThemeVariableDefinition {
  /** Value when the editor was first initialized */
  originalValue?: string;
  /** Whether the current value differs from the original */
  isModified: boolean;
}

/**
 * A single change in the theme variable history.
 */
export interface ThemeChange {
  id: string;
  timestamp: number;
  variable: string;
  oldValue: string;
  newValue: string;
  category: string;
}

/**
 * Captures the full state of the theme editor.
 */
export interface ThemeState {
  variables: ThemeVariable[];
  changes: ThemeChange[];
  currentChangeIndex: number;
}

/**
 * A group of theme variables, organized by category.
 */
export interface ThemeVariableGroup {
  category: string;
  variables: ThemeVariable[];
}
