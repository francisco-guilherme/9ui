import mdx from "@mdx-js/rollup";
import UnoCSS from "@unocss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";
import tsconfigPaths from "vite-tsconfig-paths";

import { mdxOptions } from "./src/config/mdx";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    UnoCSS(),
    Pages({
      dirs: "src/pages",
      extensions: ["tsx"],
      resolver: "react",
      importMode: "async",
    }),
    mdx(mdxOptions),
    react(),
  ],
});
