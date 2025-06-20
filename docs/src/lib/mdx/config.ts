import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

import { rehypeCodeTitle, remarkCodeTitle } from "./remark-code-title";
import { remarkToc } from "./remark-toc";

/**
 * Remark plugins – process Markdown before it becomes MDX
 */
export const remarkPlugins = [
  remarkFrontmatter, // Parse YAML frontmatter
  remarkGfm, // GitHub Flavored Markdown
  remarkToc, // Generate table of contents
  remarkCodeTitle, // Extract code block titles
  remarkMdxFrontmatter, // Export frontmatter to JS
];

/**
 * Rehype plugins – process HTML after Markdown
 */
export const rehypePlugins = [
  rehypeCodeTitle, // Pass code titles to components
];

/**
 * MDX options used by bundlers like `@mdx-js/rollup` or `mdx-bundler`
 */
export const mdxOptions = {
  remarkPlugins,
  rehypePlugins,
  providerImportSource: "@mdx-js/react",
  development: process.env.NODE_ENV === "development",
};

/**
 * File extensions that should be handled as MDX
 */
export const mdxExtensions = [".mdx"];

/**
 * Configuration for MDX content loading and organization
 */
export const contentConfig = {
  contentDir: "src/content",

  sections: ["docs", "components"] as const,

  patterns: {
    all: "**/*.mdx",
    docs: "docs/**/*.mdx",
    components: "components/**/*.mdx",
  },
} as const;
