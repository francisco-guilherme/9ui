import * as React from "react";

import { cn } from "../../utils/cn";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Slider } from "./slider";

export interface OKLCHColor {
  l: number; // Lightness: 0-1
  c: number; // Chroma: 0-0.4 (typical range)
  h: number; // Hue: 0-360
}

interface ColorInputProps {
  label?: React.ReactNode;
  value: string; // OKLCH string like "oklch(0.5 0.2 180)"
  onChange: (value: string) => void;
  className?: string;
  compact?: boolean;
}

// Parse OKLCH string to components
function parseOKLCH(oklchString: string): OKLCHColor {
  const match = oklchString.match(
    /oklch\(\s*([0-9.]+)\s+([0-9.]+)\s+([0-9.]+)\s*\)/,
  );
  if (!match) {
    return { l: 0.5, c: 0.1, h: 0 };
  }

  const l = Math.max(0, Math.min(1, parseFloat(match[1])));
  const c = Math.max(0, Math.min(0.4, parseFloat(match[2])));
  const h = parseFloat(match[3]) % 360;

  return { l, c, h: h < 0 ? h + 360 : h };
}

// Validate OKLCH string
function isValidOKLCH(oklchString: string): boolean {
  const match = oklchString.match(
    /oklch\(\s*([0-9.]+)\s+([0-9.]+)\s+([0-9.]+)\s*\)/,
  );
  if (!match) return false;

  const l = parseFloat(match[1]);
  const c = parseFloat(match[2]);
  const h = parseFloat(match[3]);

  return l >= 0 && l <= 1 && c >= 0 && c <= 0.4 && h >= 0 && h <= 360;
}

// Convert OKLCH components to string
function formatOKLCH({ l, c, h }: OKLCHColor): string {
  return `oklch(${l.toFixed(3)} ${c.toFixed(3)} ${h.toFixed(1)})`;
}

// Convert OKLCH to RGB for preview (simplified approximation)
function oklchToRgb({ l, c, h }: OKLCHColor): string {
  // This is a simplified conversion for preview purposes
  // In a real implementation, you'd use a proper color space conversion library
  const hRad = (h * Math.PI) / 180;
  const a = c * Math.cos(hRad);
  const b = c * Math.sin(hRad);

  // Convert to RGB (very simplified approximation for preview)
  const r = Math.max(0, Math.min(1, l + a * 0.4));
  const g = Math.max(0, Math.min(1, l - a * 0.2 - b * 0.2));
  const blue = Math.max(0, Math.min(1, l - b * 0.4));

  return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(blue * 255)})`;
}

// Convert RGB to hex for native color input
function rgbToHex(rgb: string): string {
  const match = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!match) return "#000000";

  const r = parseInt(match[1]);
  const g = parseInt(match[2]);
  const b = parseInt(match[3]);

  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

// Convert hex to approximate OKLCH (very simplified)
function hexToOklch(hex: string): OKLCHColor {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  // Very simplified conversion - just for basic color picking
  const l = (r + g + b) / 3;
  const c = Math.sqrt((r - l) ** 2 + (g - l) ** 2 + (b - l) ** 2) * 0.5;
  const h = (Math.atan2(g - l, r - l) * 180) / Math.PI;

  return {
    l: Math.max(0, Math.min(1, l)),
    c: Math.max(0, Math.min(0.4, c)),
    h: h < 0 ? h + 360 : h,
  };
}

export function ColorInput({
  label,
  value,
  onChange,
  className,
  compact = false,
}: ColorInputProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(value);
  const color = parseOKLCH(value);
  const previewColor = oklchToRgb(color);

  // Sync input value with prop value
  React.useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleLightnessChange = (value: number | readonly number[]) => {
    const values = Array.isArray(value) ? value : [value];
    const newColor = { ...color, l: values[0] / 100 };
    onChange(formatOKLCH(newColor));
  };

  const handleChromaChange = (value: number | readonly number[]) => {
    const values = Array.isArray(value) ? value : [value];
    const newColor = { ...color, c: values[0] / 100 };
    onChange(formatOKLCH(newColor));
  };

  const handleHueChange = (value: number | readonly number[]) => {
    const values = Array.isArray(value) ? value : [value];
    const newColor = { ...color, h: values[0] };
    onChange(formatOKLCH(newColor));
  };

  const handleDirectInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    // Only call onChange if the value is valid
    if (!newValue || isValidOKLCH(newValue)) {
      onChange(newValue);
    }
  };

  const handleInputBlur = () => {
    // Reset to last valid value on blur if current input is invalid
    if (inputValue && !isValidOKLCH(inputValue)) {
      setInputValue(value);
    }
  };

  const handleColorPickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hex = e.target.value;
    const oklchColor = hexToOklch(hex);
    onChange(formatOKLCH(oklchColor));
  };

  if (compact) {
    return (
      <div className={cn("space-y-2", className)}>
        <Button
          variant="outline"
          size="sm"
          className="h-7 px-2 gap-2 justify-between min-w-0 w-full"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-2 min-w-0">
            <div
              className="size-3 rounded border border-border/50 flex-shrink-0"
              style={{ backgroundColor: previewColor }}
            />
            <span className="text-xs truncate">{label}</span>
          </div>
          <span className="text-xs font-mono text-muted-foreground w-24 text-right flex-shrink-0">
            {value.replace("oklch(", "").replace(")", "")}
          </span>
        </Button>

        {isExpanded && (
          <div className="space-y-2 p-2 bg-muted/30 rounded-md">
            <div className="flex items-center gap-2">
              <div
                className="size-4 rounded border border-border flex-shrink-0"
                style={{ backgroundColor: previewColor }}
              />
              <Input
                value={inputValue}
                onChange={handleDirectInput}
                onBlur={handleInputBlur}
                className={cn(
                  "font-mono text-xs h-7 flex-1",
                  inputValue && !isValidOKLCH(inputValue)
                    ? "border-red-500 focus:border-red-500"
                    : "",
                )}
                placeholder="oklch(0.5 0.2 180)"
              />
              <input
                type="color"
                value={rgbToHex(previewColor)}
                onChange={handleColorPickerChange}
                className="size-7 rounded border border-border cursor-pointer bg-transparent"
                title="Color picker"
              />
            </div>

            <div className="space-y-2">
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Lightness</span>
                  <span className="font-mono text-xs">
                    {(color.l * 100).toFixed(0)}%
                  </span>
                </div>
                <Slider
                  value={[color.l * 100]}
                  onValueChange={handleLightnessChange}
                  min={0}
                  max={100}
                  step={1}
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Chroma</span>
                  <span className="font-mono text-xs">
                    {(color.c * 100).toFixed(0)}%
                  </span>
                </div>
                <Slider
                  value={[color.c * 100]}
                  onValueChange={handleChromaChange}
                  min={0}
                  max={40}
                  step={1}
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Hue</span>
                  <span className="font-mono text-xs">
                    {color.h.toFixed(0)}°
                  </span>
                </div>
                <Slider
                  value={[color.h]}
                  onValueChange={handleHueChange}
                  min={0}
                  max={360}
                  step={1}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={cn("space-y-3", className)}>
      {label && <Label className="text-sm font-medium">{label}</Label>}

      <div className="flex items-center gap-3">
        <div
          className="size-8 rounded-md border border-border shadow-sm cursor-pointer hover:scale-105 transition-transform"
          style={{ backgroundColor: previewColor }}
          onClick={() => setIsExpanded(!isExpanded)}
        />
        <Input
          value={inputValue}
          onChange={handleDirectInput}
          onBlur={handleInputBlur}
          className={cn(
            "font-mono text-xs flex-1",
            inputValue && !isValidOKLCH(inputValue)
              ? "border-red-500 focus:border-red-500"
              : "",
          )}
          placeholder="oklch(0.5 0.2 180)"
        />
        <input
          type="color"
          value={rgbToHex(previewColor)}
          onChange={handleColorPickerChange}
          className="size-8 rounded-md border border-border cursor-pointer bg-transparent"
          title="Color picker"
        />
      </div>

      <div className="space-y-2">
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Lightness</span>
            <span className="font-mono text-xs">
              {(color.l * 100).toFixed(0)}%
            </span>
          </div>
          <Slider
            value={[color.l * 100]}
            onValueChange={handleLightnessChange}
            min={0}
            max={100}
            step={1}
          />
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Chroma</span>
            <span className="font-mono text-xs">
              {(color.c * 100).toFixed(0)}%
            </span>
          </div>
          <Slider
            value={[color.c * 100]}
            onValueChange={handleChromaChange}
            min={0}
            max={40}
            step={1}
          />
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Hue</span>
            <span className="font-mono text-xs">{color.h.toFixed(0)}°</span>
          </div>
          <Slider
            value={[color.h]}
            onValueChange={handleHueChange}
            min={0}
            max={360}
            step={1}
          />
        </div>
      </div>
    </div>
  );
}
