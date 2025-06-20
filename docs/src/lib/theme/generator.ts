import { colors, PrimaryColor, Shade } from "@/config/colors";

/**
 * Helper to get CSS variable mappings
 */
const getCssVars = (
  shade: Shade,
  primaryColor: PrimaryColor,
  variant: "light" | "dark",
  radius: number,
): Record<string, string> => {
  const shadeColors = colors.shades[shade].cssVars[variant];
  const primaryColors =
    primaryColor === "neutral"
      ? shadeColors
      : colors.primary[primaryColor].cssVars[variant];

  return {
    "--background": shadeColors.background,
    "--foreground": shadeColors.foreground,
    "--card": shadeColors.card,
    "--card-foreground": shadeColors["card-foreground"],
    "--popover": shadeColors.popover,
    "--popover-foreground": shadeColors["popover-foreground"],
    "--primary": primaryColors.primary,
    "--primary-foreground": primaryColors["primary-foreground"],
    "--secondary": shadeColors.secondary,
    "--secondary-foreground": shadeColors["secondary-foreground"],
    "--muted": shadeColors.muted,
    "--muted-foreground": shadeColors["muted-foreground"],
    "--accent": shadeColors.accent,
    "--accent-foreground": shadeColors["accent-foreground"],
    "--destructive": shadeColors.destructive,
    "--destructive-foreground": shadeColors["destructive-foreground"],
    "--border": shadeColors.border,
    "--input": shadeColors.input,
    "--ring": primaryColors.ring || primaryColors.primary,
    "--radius": `${radius}rem`,
    "--chart-1": shadeColors["chart-1"] || "#8884d8",
    "--chart-2": shadeColors["chart-2"] || "#82ca9d",
    "--chart-3": shadeColors["chart-3"] || "#ffc658",
    "--chart-4": shadeColors["chart-4"] || "#ff7300",
    "--chart-5": shadeColors["chart-5"] || "#8dd1e1",
  };
};

/**
 * Converts a record of CSS variables to a CSS string block
 */
const cssVarsToString = (vars: Record<string, string>) =>
  Object.entries(vars)
    .map(([key, value]) => `    ${key}: ${value};`)
    .join("\n");

/**
 * Generate CSS theme variables based on theme settings
 */
export const generateTheme = (
  shade: Shade,
  primaryColor: PrimaryColor,
  radius: number,
): string => {
  const lightVars = getCssVars(shade, primaryColor, "light", radius);
  const darkVars = getCssVars(shade, primaryColor, "dark", radius);

  return `@layer base {
  :root {
${cssVarsToString(lightVars)}
  }

  .dark {
${cssVarsToString(darkVars)}
  }
}`;
};
