import mdx from "@mdx-js/rollup"
import UnoCSS from "@unocss/vite"
import react from "@vitejs/plugin-react"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"
import { createHighlighter } from "shiki"
import { defineConfig } from "vite"
import Pages from "vite-plugin-pages"
import tsconfigPaths from "vite-tsconfig-paths"

import {
  rehypeCommandProperties,
  rehypeComponentPreview,
  rehypeComponentSource,
  rehypeRawString,
} from "./src/lib/rehype/component/index.mjs"

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
    mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypeRawString,
        rehypeComponentPreview,
        rehypeComponentSource,
        [
          rehypePrettyCode,
          {
            getHighlighter: () =>
              createHighlighter({
                themes: ["github-dark-default", "github-light-default"],
                langs: ["tsx", "bash", "css", "js", "json", "jsx", "ts"],
              }),
            theme: {
              light: "github-light-default",
              dark: "github-dark-default",
            },
            defaultLang: "tsx",
          },
        ],
        rehypeCommandProperties,
      ],
      providerImportSource: "@mdx-js/react",
    }),
    react(),
  ],
  build: {
    outDir: "dist",
    sourcemap: true,
  },
})
