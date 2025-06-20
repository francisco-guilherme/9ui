import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*@(ts|tsx)"],
  format: ["esm"],
  treeshake: true,
  dts: true,
  bundle: false,
  clean: true,
  tsconfig: ".config/tsconfig.json",
});
