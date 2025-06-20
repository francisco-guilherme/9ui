import { defineConfig, presetWebFonts, presetWind3 } from "unocss";

export default defineConfig({
  presets: [
    presetWind3(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Inter",
        mono: "Geist Mono",
      },
      timeouts: {
        warning: 10000,
        failure: 30000,
      },
    }),
  ],
  rules: [
    // Support opacity modifiers for CSS custom properties
    [
      /^bg-(\w+)\/(\d+)$/,
      ([, color, opacity]) => {
        const opacityValue = parseInt(opacity) / 100;
        return {
          "background-color": `oklch(from var(--${color}) l c h / ${opacityValue})`,
        };
      },
    ],
  ],
  shortcuts: {
    container: "px-4 md:px-6 mx-auto max-w-screen-2xl lg:px-10 w-full",
  },
  theme: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
      card: {
        DEFAULT: "var(--card)",
        foreground: "var(--card-foreground)",
      },
      popover: {
        DEFAULT: "var(--popover)",
        foreground: "var(--popover-foreground)",
      },
      primary: {
        DEFAULT: "var(--primary)",
        foreground: "var(--primary-foreground)",
      },
      secondary: {
        DEFAULT: "var(--secondary)",
        foreground: "var(--secondary-foreground)",
      },
      muted: {
        DEFAULT: "var(--muted)",
        foreground: "var(--muted-foreground)",
      },
      accent: {
        DEFAULT: "var(--accent)",
        foreground: "var(--accent-foreground)",
      },
      destructive: {
        DEFAULT: "var(--destructive)",
        foreground: "var(--destructive-foreground)",
      },
      danger: {
        DEFAULT: "var(--danger)",
        foreground: "var(--danger-foreground)",
        border: "var(--danger-border)",
      },
      warning: {
        DEFAULT: "var(--warning)",
        foreground: "var(--warning-foreground)",
        border: "var(--warning-border)",
      },
      info: {
        DEFAULT: "var(--info)",
        foreground: "var(--info-foreground)",
        border: "var(--info-border)",
      },
      success: {
        DEFAULT: "var(--success)",
        foreground: "var(--success-foreground)",
        border: "var(--success-border)",
      },
    },
  },
});
