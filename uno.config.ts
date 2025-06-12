import {
  defineConfig,
  presetTypography,
  presetWebFonts,
  presetWind3,
} from "unocss"

export default defineConfig({
  presets: [
    presetWind3(),
    presetTypography(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Inter",
        mono: "Geist Mono",
      },
    }),
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)"],
      mono: ["var(--font-geist-mono)"],
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
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
      border: "var(--border)",
      input: "var(--input)",
      ring: "var(--ring)",
      chart: {
        1: "var(--chart-1)",
        2: "var(--chart-2)",
        3: "var(--chart-3)",
        4: "var(--chart-4)",
        5: "var(--chart-5)",
      },
    },
    animation: {
      blink: "blink 1s infinite",
    },
    keyframes: {
      blink: {
        "0%, 100%": {
          opacity: "1",
        },
        "50%": {
          opacity: "0",
        },
      },
    },
  },
})
