import * as React from "react";
import { useTheme } from "../hooks/use-theme";
import { Button } from "./button";

export interface ThemeToggleProps {
  className?: string;
  /** Show only mode toggle (light/dark/auto) */
  modeOnly?: boolean;
  /** Show only variant toggle (neutral/gray/slate) */
  variantOnly?: boolean;
}

const getModeIcon = (mode: string): string => {
  switch (mode) {
    case "light":
      return "☀️";
    case "dark":
      return "🌙";
    case "auto":
      return "🔄";
    default:
      return "🔄";
  }
};

const getVariantIcon = (variant: string): string => {
  switch (variant) {
    case "neutral":
      return "⚪";
    case "gray":
      return "🔘";
    case "slate":
      return "🔵";
    default:
      return "🎨";
  }
};

/**
 * Simple theme toggle component
 */
export const ThemeToggle = React.forwardRef<
  HTMLButtonElement,
  ThemeToggleProps
>(({ className, modeOnly = false, variantOnly = false, ...props }, ref) => {
  const { mode, variant, toggleMode, cycleVariant } = useTheme();

  const modeToggle = (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleMode}
      title={`Current mode: ${mode}. Click to cycle modes.`}
    >
      {getModeIcon(mode)}
    </Button>
  );

  const variantToggle = (
    <Button
      ref={ref}
      variant="ghost"
      size="sm"
      onClick={cycleVariant}
      className={className}
      title={`Current variant: ${variant}. Click to cycle variants.`}
      {...props}
    >
      {getVariantIcon(variant)}
    </Button>
  );

  if (modeOnly) return modeToggle;
  if (variantOnly) return variantToggle;

  return (
    <div className="flex gap-1">
      {modeToggle}
      {variantToggle}
    </div>
  );
});

ThemeToggle.displayName = "ThemeToggle";
