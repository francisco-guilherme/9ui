import { useCallback, useEffect, useState } from "react";

export type ThemeMode = "light" | "dark" | "auto";
export type ThemeVariant = "neutral" | "gray" | "slate" | "purple";

export interface ThemeConfig {
  mode: ThemeMode;
  variant: ThemeVariant;
}

export interface UseThemeReturn {
  mode: ThemeMode;
  variant: ThemeVariant;
  isDark: boolean;
  setMode: (mode: ThemeMode) => void;
  setVariant: (variant: ThemeVariant) => void;
  toggleMode: () => void;
  cycleVariant: () => void;
}

const STORAGE_KEY = "theme";
const DEFAULT_CONFIG: ThemeConfig = { mode: "auto", variant: "neutral" };

function getStoredConfig(): ThemeConfig {
  if (typeof window === "undefined") return DEFAULT_CONFIG;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored
      ? { ...DEFAULT_CONFIG, ...JSON.parse(stored) }
      : DEFAULT_CONFIG;
  } catch {
    return DEFAULT_CONFIG;
  }
}

function applyTheme(config: ThemeConfig) {
  if (typeof window === "undefined") return;

  const root = document.documentElement;
  const classes = Array.from(root.classList);

  // Remove existing theme classes
  classes.forEach((cls) => {
    if (cls === "light" || cls === "dark" || cls.startsWith("theme-")) {
      root.classList.remove(cls);
    }
  });

  // Apply variant
  if (config.variant !== "neutral") {
    root.classList.add(`theme-${config.variant}`);
  }

  // Apply mode
  if (config.mode !== "auto") {
    root.classList.add(config.mode);
  }
}

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function isDark(config: ThemeConfig): boolean {
  if (config.mode === "auto") {
    return getSystemTheme() === "dark";
  }
  return config.mode === "dark";
}

export function useTheme(): UseThemeReturn {
  const [config, setConfig] = useState<ThemeConfig>(getStoredConfig);

  const updateConfig = useCallback((newConfig: ThemeConfig) => {
    setConfig(newConfig);
    applyTheme(newConfig);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newConfig));
      } catch {
        // Ignore storage errors
      }
    }
  }, []);

  // Apply theme on mount and config changes
  useEffect(() => {
    applyTheme(config);
  }, [config]);

  const setMode = useCallback(
    (mode: ThemeMode) => {
      updateConfig({ ...config, mode });
    },
    [config, updateConfig]
  );

  const setVariant = useCallback(
    (variant: ThemeVariant) => {
      updateConfig({ ...config, variant });
    },
    [config, updateConfig]
  );

  const toggleMode = useCallback(() => {
    const modes: ThemeMode[] = ["light", "dark", "auto"];
    const currentIndex = modes.indexOf(config.mode);
    const nextMode = modes[(currentIndex + 1) % modes.length];
    setMode(nextMode);
  }, [config.mode, setMode]);

  const cycleVariant = useCallback(() => {
    const variants: ThemeVariant[] = ["neutral", "gray", "slate", "purple"];
    const currentIndex = variants.indexOf(config.variant);
    const nextVariant = variants[(currentIndex + 1) % variants.length];
    setVariant(nextVariant);
  }, [config.variant, setVariant]);

  return {
    mode: config.mode,
    variant: config.variant,
    isDark: isDark(config),
    setMode,
    setVariant,
    toggleMode,
    cycleVariant,
  };
}
