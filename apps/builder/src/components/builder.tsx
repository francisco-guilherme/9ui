import { ThemeProvider } from "@nui/ui";

import { AIProvider } from "../context/ai-context";
import { CanvasProvider } from "../context/canvas-context";
import type { BuilderConfig } from "../types";
import { BuilderLayout } from "./layout/builder-layout";

interface BuilderProps {
  config?: Partial<BuilderConfig>;
  className?: string;
}

const defaultConfig: BuilderConfig = {
  canvas: {
    defaultZoom: 1,
    minZoom: 0.1,
    maxZoom: 5,
    gridSize: 20,
    snapToGrid: true,
  },
  ai: {
    provider: "mcp",
    temperature: 0.7,
    maxTokens: 2000,
  },
  export: {
    format: "react",
    includeStyles: true,
    minify: false,
  },
  ui: {
    theme: "slate",
    showGrid: true,
    showRulers: false,
    showGuides: true,
  },
};

export function Builder({ config, className }: BuilderProps) {
  const mergedConfig = { ...defaultConfig, ...config };

  return (
    <div className={`website-builder h-screen w-full ${className || ""}`}>
      <ThemeProvider defaultTheme={{ variant: mergedConfig.ui.theme }}>
        <AIProvider>
          <CanvasProvider
            initialState={{
              gridSize: mergedConfig.canvas.gridSize,
              snapToGrid: mergedConfig.canvas.snapToGrid,
              zoom: mergedConfig.canvas.defaultZoom,
            }}
          >
            <BuilderLayout config={mergedConfig} />
          </CanvasProvider>
        </AIProvider>
      </ThemeProvider>
    </div>
  );
}
