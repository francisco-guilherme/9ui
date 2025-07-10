import { defineConfig } from "vitest/config";

import { createBaseConfig } from "./.config/vite.base";

export default defineConfig({
  ...createBaseConfig({ plugins: [] }),
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
    include: ["packages/**/*.{test,spec}.{js,ts,tsx}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["packages/*/src/**"],
      exclude: ["**/*.test.*", "**/*.spec.*", "**/node_modules/**"],
    },
  },
});
