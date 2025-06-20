import { Builder } from "./components/builder";
import type { BuilderConfig } from "./types";

const appConfig: Partial<BuilderConfig> = {
  ui: {
    theme: "slate",
    showGrid: true,
    showRulers: false,
    showGuides: true,
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
  canvas: {
    defaultZoom: 1,
    minZoom: 0.1,
    maxZoom: 5,
    gridSize: 20,
    snapToGrid: true,
  },
};

export function App() {
  return (
    <div className="app">
      <Builder config={appConfig} />
    </div>
  );
}
