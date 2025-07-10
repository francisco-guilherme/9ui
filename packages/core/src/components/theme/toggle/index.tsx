import * as React from "react";
import { MonitorIcon, MoonIcon, PaletteIcon, SunIcon } from "lucide-react";

import { useTheme } from "../../../providers/theme-provider";
import { cn } from "../../../utils/cn";
import { Button } from "../../ui";

export type ThemeToggleSize =
  | "sm"
  | "md"
  | "lg"
  | "icon-sm"
  | "icon"
  | "icon-lg";
export type ThemeToggleVariant = "default" | "outline" | "ghost" | "secondary";
export type ThemeToggleMode =
  | "mode-only"
  | "variant-only"
  | "combined"
  | "separate";

export interface ThemeToggleProps {
  /** Control what the toggle shows and does */
  mode?: ThemeToggleMode;
  /** Show text labels instead of/alongside icons */
  showLabels?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Button size */
  size?: ThemeToggleSize;
  /** Button variant */
  variant?: ThemeToggleVariant;
  /** Custom icon override */
  icon?: React.ComponentType<{ className?: string }>;
  /** Disable the toggle */
  disabled?: boolean;
  /** Custom tooltip text */
  tooltip?: string;
  /** Callback when theme changes */
  onThemeChange?: (mode: string, variant: string) => void;
}

const getModeIcon = (mode: string, isDark: boolean) => {
  if (mode === "auto") return MonitorIcon;
  if (mode === "dark" || isDark) return MoonIcon;
  return SunIcon;
};

const getModeLabel = (mode: string): string => {
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

const getNextModeLabel = (currentMode: string): string => {
  switch (currentMode) {
    case "light":
      return "dark";
    case "dark":
      return "auto";
    case "auto":
      return "light";
    default:
      return "dark";
  }
};

const capitalizeVariant = (variant: string): string => {
  return variant.charAt(0).toUpperCase() + variant.slice(1);
};

/**
 * Versatile theme toggle component that allows switching between light/dark modes and theme variants
 * with multiple display modes and customization options.
 */
export function ThemeToggle({
  mode = "combined",
  showLabels = false,
  className,
  size = "md",
  variant = "ghost",
  icon,
  disabled = false,
  tooltip,
  onThemeChange,
}: ThemeToggleProps) {
  const {
    config: { mode: currentMode, variant: currentVariant },
    isDark,
    availableVariants,
    toggleMode,
    cycleVariant,
  } = useTheme();

  // Notify parent of theme changes
  React.useEffect(() => {
    onThemeChange?.(currentMode, currentVariant);
  }, [currentMode, currentVariant, onThemeChange]);

  const commonProps = {
    showLabels,
    className,
    size,
    variant: variant as ThemeToggleVariant,
    disabled,
    tooltip,
  };

  switch (mode) {
    case "mode-only":
      return (
        <ThemeToggleModeOnly
          mode={currentMode}
          isDark={isDark}
          toggleMode={toggleMode}
          icon={icon}
          {...commonProps}
        />
      );

    case "variant-only":
      return (
        <ThemeToggleVariantOnly
          currentVariant={currentVariant}
          availableVariants={availableVariants}
          cycleVariant={cycleVariant}
          icon={icon}
          {...commonProps}
        />
      );

    case "separate":
      return (
        <ThemeToggleSeparate
          mode={currentMode}
          isDark={isDark}
          currentVariant={currentVariant}
          availableVariants={availableVariants}
          toggleMode={toggleMode}
          cycleVariant={cycleVariant}
          icon={icon}
          {...commonProps}
        />
      );

    case "combined":
    default:
      return (
        <ThemeToggleCombined
          mode={currentMode}
          isDark={isDark}
          currentVariant={currentVariant}
          availableVariants={availableVariants}
          toggleMode={toggleMode}
          cycleVariant={cycleVariant}
          icon={icon}
          {...commonProps}
        />
      );
  }
}

interface ThemeToggleBaseProps {
  showLabels: boolean;
  className?: string;
  size: ThemeToggleSize;
  variant: ThemeToggleVariant;
  disabled: boolean;
  tooltip?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

function ThemeToggleModeOnly({
  mode,
  isDark,
  toggleMode,
  showLabels,
  className,
  size,
  variant,
  disabled,
  tooltip,
  icon,
}: ThemeToggleBaseProps & {
  mode: string;
  isDark: boolean;
  toggleMode: () => void;
}) {
  const ModeIcon = icon || getModeIcon(mode, isDark);
  const nextMode = getNextModeLabel(mode);
  const ariaLabel = `Switch to ${nextMode} mode`;

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleMode}
      disabled={disabled}
      className={cn("gap-2 transition-all", className)}
      aria-label={ariaLabel}
      title={tooltip || ariaLabel}
    >
      <ModeIcon className="size-4" />
      {showLabels && <span>{getModeLabel(mode)}</span>}
    </Button>
  );
}

function ThemeToggleVariantOnly({
  currentVariant,
  availableVariants,
  cycleVariant,
  showLabels,
  className,
  size,
  variant,
  disabled,
  tooltip,
  icon,
}: ThemeToggleBaseProps & {
  currentVariant: string;
  availableVariants: string[];
  cycleVariant: (variants: string[]) => void;
}) {
  const VariantIcon = icon || PaletteIcon;
  const ariaLabel = `Switch theme variant (current: ${currentVariant})`;
  const hasMultipleVariants = availableVariants.length > 1;

  return (
    <Button
      variant={variant}
      size={size}
      onClick={() => cycleVariant(availableVariants)}
      disabled={disabled || !hasMultipleVariants}
      className={cn("gap-2 transition-all", className)}
      aria-label={ariaLabel}
      title={tooltip || ariaLabel}
    >
      <VariantIcon className="size-4" />
      {showLabels && <span>{capitalizeVariant(currentVariant)}</span>}
    </Button>
  );
}

function ThemeToggleCombined({
  mode,
  isDark,
  currentVariant,
  availableVariants,
  toggleMode,
  cycleVariant,
  showLabels,
  className,
  size,
  variant,
  disabled,
  tooltip,
  icon,
}: ThemeToggleBaseProps & {
  mode: string;
  isDark: boolean;
  currentVariant: string;
  availableVariants: string[];
  toggleMode: () => void;
  cycleVariant: (variants: string[]) => void;
}) {
  const handleToggle = () => {
    // Cycle through modes first, then variants when in auto mode
    if (mode === "auto" && availableVariants.length > 1) {
      cycleVariant(availableVariants);
    } else {
      toggleMode();
    }
  };

  const ModeIcon = icon || getModeIcon(mode, isDark);
  const modeLabel = getModeLabel(mode);
  const hasMultipleVariants = availableVariants.length > 1;
  const ariaLabel = `Toggle theme (${modeLabel}${hasMultipleVariants ? ` - ${currentVariant}` : ""})`;

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleToggle}
      disabled={disabled}
      className={cn("gap-2 transition-all", className)}
      aria-label={ariaLabel}
      title={tooltip || ariaLabel}
    >
      <ModeIcon className="size-4" />
      {showLabels && (
        <span className="flex items-center gap-1">
          {modeLabel}
          {hasMultipleVariants && (
            <>
              <span className="text-muted-foreground">•</span>
              <span className="font-medium">
                {capitalizeVariant(currentVariant)}
              </span>
            </>
          )}
        </span>
      )}
    </Button>
  );
}

function ThemeToggleSeparate({
  mode,
  isDark,
  currentVariant,
  availableVariants,
  toggleMode,
  cycleVariant,
  showLabels,
  className,
  size,
  variant,
  disabled,
}: ThemeToggleBaseProps & {
  mode: string;
  isDark: boolean;
  currentVariant: string;
  availableVariants: string[];
  toggleMode: () => void;
  cycleVariant: (variants: string[]) => void;
}) {
  const ModeIcon = getModeIcon(mode, isDark);
  const nextMode = getNextModeLabel(mode);
  const hasMultipleVariants = availableVariants.length > 1;

  return (
    <div className={cn("flex gap-1", className)}>
      <Button
        variant={variant}
        size={size}
        onClick={toggleMode}
        disabled={disabled}
        className="gap-2 transition-all"
        aria-label={`Switch to ${nextMode} mode`}
        title={`Switch to ${nextMode} mode`}
      >
        <ModeIcon className="size-4" />
        {showLabels && <span>{getModeLabel(mode)}</span>}
      </Button>

      {hasMultipleVariants && (
        <Button
          variant={variant}
          size={size}
          onClick={() => cycleVariant(availableVariants)}
          disabled={disabled}
          className="gap-2 transition-all"
          aria-label={`Switch theme variant (current: ${currentVariant})`}
          title={`Switch theme variant (current: ${currentVariant})`}
        >
          <PaletteIcon className="size-4" />
          {showLabels && <span>{capitalizeVariant(currentVariant)}</span>}
        </Button>
      )}
    </div>
  );
}

// Export sub-components for advanced usage
export {
  ThemeToggleModeOnly,
  ThemeToggleVariantOnly,
  ThemeToggleCombined,
  ThemeToggleSeparate,
};
