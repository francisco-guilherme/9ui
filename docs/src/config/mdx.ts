import rehypeMdxCodeProps from "rehype-mdx-code-props";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

/**
 * Remark plugins – process Markdown before it becomes MDX
 */
export const remarkPlugins = [
  remarkFrontmatter,
  remarkGfm,
  remarkMdxFrontmatter,
];

/**
 * Rehype plugins – process HTML after Markdown
 */
export const rehypePlugins = [rehypeMdxCodeProps];

/**
 * MDX options used by bundlers like `@mdx-js/rollup` or `mdx-bundler`
 */
export const mdxOptions = {
  remarkPlugins,
  rehypePlugins,
  providerImportSource: "@mdx-js/react",
};

/**
 * File extensions that should be handled as MDX
 */
export const mdxExtensions = [".mdx"];
