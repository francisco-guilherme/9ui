import type { PluginOption, UserConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

interface BaseConfigOptions {
  plugins?: PluginOption[];
}

export function createBaseConfig(options: BaseConfigOptions = {}): UserConfig {
  return {
    plugins: [...(options.plugins || []), tsconfigPaths()],
  };
}
