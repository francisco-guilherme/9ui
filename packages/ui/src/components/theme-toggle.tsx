"use client";

import { MonitorIcon, MoonIcon, RepeatIcon, SunIcon } from "lucide-react";
import { Button, cn } from "@nui/ui";

import { useTheme } from "../hooks/use-theme";

interface ThemeToggleProps {
  /** Show only mode toggle (light/dark/auto) */
  modeOnly?: boolean;
  /** Show only variant toggle (cycles through available variants) */
  variantOnly?: boolean;
  /** Show text labels instead of icons */
  showLabels?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Button size */
  size?: "sm" | "md" | "lg" | "icon-sm" | "icon" | "icon-lg";
  /** Button variant*/
  variant?: "default" | "outline" | "ghost" | "secondary";
}

const getModeIcon = (mode: string, isDark: boolean) => {
  if (mode === "auto") return MonitorIcon;
  if (mode === "dark" || isDark) return MoonIcon;
  return SunIcon;
};

const getModeLabel = (mode: string) => {
  switch (mode) {
    case "light":
      return "Light";
    case "dark":
      return "Dark";
    case "auto":
      return "Auto";
    default:
      return "Theme";
  }
};

/**
 * Theme toggle component that allows switching between light/dark modes and theme variants
 */
export function ThemeToggle({
  modeOnly = false,
  variantOnly = false,
  showLabels = false,
  className,
  size = "md",
  variant = "ghost",
}: ThemeToggleProps) {
  const {
    config: { mode, variant: currentVariant },
    isDark,
    availableVariants,
    toggleMode,
    cycleVariant,
  } = useTheme();

  // Mode only toggle
  if (modeOnly) {
    const ModeIcon = getModeIcon(mode, isDark);
    return (
      <Button
        variant={variant}
        size={size}
        onClick={toggleMode}
        className={cn("gap-2", className)}
        aria-label={`Switch to ${mode === "light" ? "dark" : mode === "dark" ? "auto" : "light"} mode`}
      >
        <ModeIcon className="size-4" />
        {showLabels && <span>{getModeLabel(mode)}</span>}
      </Button>
    );
  }

  // Variant only toggle
  if (variantOnly) {
    return (
      <Button
        variant={variant}
        size={size}
        onClick={() => cycleVariant(availableVariants)}
        className={cn("gap-2", className)}
        aria-label={`Switch theme variant (current: ${currentVariant})`}
      >
        <RepeatIcon className="size-4" />
        {showLabels && (
          <span>
            {currentVariant.charAt(0).toUpperCase() + currentVariant.slice(1)}
          </span>
        )}
      </Button>
    );
  }

  // Combined toggle - cycles through modes first, then variants
  const handleToggle = () => {
    // If we're not in auto mode, cycle through modes first
    if (mode !== "auto") {
      toggleMode();
    } else {
      // When in auto mode, cycle variants
      cycleVariant(availableVariants);
    }
  };

  const ModeIcon = getModeIcon(mode, isDark);

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleToggle}
      className={cn("gap-2", className)}
      aria-label={`Toggle theme (${getModeLabel(mode)} - ${currentVariant})`}
    >
      <ModeIcon className="size-4" />
      {showLabels && (
        <span>
          {getModeLabel(mode)}
          {availableVariants.length > 1 && ` • ${currentVariant}`}
        </span>
      )}
    </Button>
  );
}
