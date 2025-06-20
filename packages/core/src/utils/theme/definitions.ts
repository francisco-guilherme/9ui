import type { ThemeVariableDefinition } from "../../types/theme";

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
