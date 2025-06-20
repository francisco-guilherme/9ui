import type { Heading, Root } from "mdast";
import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";
import type { VFile } from "vfile";

interface TocItem {
  value: string;
  url: string;
  depth: number;
}

/**
 * Converts a heading value to a slug for anchor links
 */
const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // remove special characters
    .trim()
    .replace(/\s+/g, "-"); // convert spaces to dashes
};

/**
 * Remark plugin that extracts a table of contents from heading nodes
 * and attaches it to the file metadata.
 */
export const remarkToc = () => {
  return (tree: Root, file: VFile): void => {
    const toc: TocItem[] = [];

    visit(tree, "heading", (node: Heading) => {
      const value = toString(node);
      const slug = generateSlug(value);

      // Attach slug as ID to the heading node
      node.data ??= {};
      node.data.hProperties ??= {};
      node.data.hProperties.id = slug;

      toc.push({
        value,
        url: `#${slug}`,
        depth: node.depth,
      });
    });

    file.data ??= {};
    file.data.tableOfContents = toc;

    // Also attach to frontmatter for compatibility
    file.data.frontmatter ??= {};
    (file.data.frontmatter as Record<string, unknown>).tableOfContents = toc;
  };
};
