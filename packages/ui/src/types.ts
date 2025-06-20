export type ThemeMode = "light" | "dark" | "auto";
export type ThemeVariant = string;

export interface ThemeConfig {
  mode: ThemeMode;
  variant: ThemeVariant;
}
