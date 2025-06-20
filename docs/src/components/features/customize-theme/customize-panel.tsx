import {
  Button,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@9ui/ui";
import { AnimatePresence, motion } from "framer-motion";
import { capitalize } from "lodash";
import { CopyIcon, RotateCcwIcon } from "lucide-react";
import { forwardRef } from "react";

import { colors, PrimaryColor, Shade } from "@/config/colors";
import {
  primaryColorOptions,
  radiusOptions,
  shadeOptions,
  ThemeSettings,
} from "@/config/theme";

interface CustomizePanelProps {
  open: boolean;
  theme: ThemeSettings;
  setTheme: (theme: ThemeSettings) => void;
  onCopy: () => void;
}

export const CustomizePanel = forwardRef<HTMLDivElement, CustomizePanelProps>(
  ({ open, theme, setTheme, onCopy }, ref) => {
    const variant = "light";

    const updateTheme = (
      key: keyof ThemeSettings,
      value: ThemeSettings[keyof ThemeSettings],
    ) => setTheme({ ...theme, [key]: value });

    const handleReset = () => {
      setTheme({
        shade: "zinc",
        primaryColor: "neutral",
        radius: 0.5,
        flat: false,
      });
    };

    return (
      <AnimatePresence>
        {open && (
          <motion.div
            ref={ref}
            layoutId="wrapper"
            className="absolute h-auto w-[90%] rounded-md border bg-background p-4 shadow-sm outline-none sm:w-full sm:max-w-lg"
          >
            <div className="flex justify-between gap-2">
              <div>
                <motion.span className="font-semibold" layoutId="title">
                  Customize
                </motion.span>
                <p className="text-sm text-muted-foreground">
                  Make it the way you like it.
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon-sm" onClick={onCopy}>
                  <CopyIcon className="size-4" />
                </Button>
                <Button variant="outline" size="icon-sm" onClick={handleReset}>
                  <RotateCcwIcon className="size-4" />
                </Button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-x-2 gap-y-4">
              {/* Shade */}
              <div className="flex flex-col gap-2">
                <Label>Shade</Label>
                <Select
                  value={theme.shade}
                  onValueChange={(v) => updateTheme("shade", v as Shade)}
                >
                  <SelectTrigger>
                    <ColorItem
                      color={
                        colors.shades[theme.shade].cssVars[variant].secondary
                      }
                      name={capitalize(theme.shade)}
                    />
                    <SelectValue placeholder={capitalize(theme.shade)} />
                  </SelectTrigger>
                  <SelectContent>
                    {shadeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        <ColorItem
                          color={
                            colors.shades[option.value].cssVars[variant]
                              .secondary
                          }
                          name={option.name}
                        />
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Appearance */}
              <div className="flex flex-col gap-2">
                <Label>Appearance</Label>
                <Select
                  value={theme.flat.toString()}
                  onValueChange={(v) => updateTheme("flat", v === "true")}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={theme.flat ? "Flat" : "Faded"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="false">Faded</SelectItem>
                    <SelectItem value="true">Flat</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Primary Color */}
              <div className="flex flex-col gap-2">
                <Label>Primary Color</Label>
                <Select
                  value={theme.primaryColor}
                  onValueChange={(v) =>
                    updateTheme("primaryColor", v as PrimaryColor)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder={capitalize(theme.primaryColor)} />
                  </SelectTrigger>
                  <SelectContent>
                    {primaryColorOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        <ColorItem
                          color={
                            option.value === "neutral"
                              ? colors.shades[theme.shade].cssVars[variant]
                                  .primary
                              : colors.primary[option.value].cssVars[variant]
                                  .primary
                          }
                          name={option.name}
                        />
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Radius */}
              <div className="flex flex-col gap-2">
                <Label>Radius</Label>
                <Select
                  value={theme.radius.toString()}
                  onValueChange={(v) => updateTheme("radius", Number(v))}
                >
                  <SelectTrigger>
                    <SelectValue>
                      {() => (
                        <div className="flex items-center gap-2">
                          <span
                            className="size-3.5 border border-foreground/20 bg-background"
                            style={{
                              borderRadius: `${theme.radius / 2}rem`,
                            }}
                          />
                          <span>{theme.radius}rem</span>
                        </div>
                      )}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {radiusOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value.toString()}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="size-3.5 border border-foreground/20 bg-background"
                            style={{
                              borderRadius: `${option.value / 2}rem`,
                            }}
                          />
                          <span>{option.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
);

interface ColorItemProps {
  color: string;
  name: string;
}

const ColorItem = ({ color, name }: ColorItemProps) => (
  <div className="flex items-center gap-2">
    <span
      className="size-3.5 rounded border border-foreground/20"
      style={{ backgroundColor: color }}
    />
    <span>{name}</span>
  </div>
);
