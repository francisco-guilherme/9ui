import type { Element } from "hast";
import type { Code, Root } from "mdast";
import { visit } from "unist-util-visit";

/**
 * Remark plugin to extract metadata like title and command info from code blocks
 */
export const remarkCodeTitle = () => {
  return (tree: Root): void => {
    visit(tree, "code", (node: Code) => {
      if (!node.meta) return;

      const match = node.meta.match(/title=["']([^"']+)["']/);
      if (!match) return;

      const title = match[1];
      const value = node.value || "";
      const lang = node.lang || "";

      const isCommand =
        /(npm|yarn|pnpm|bun)(\s+add|\s+install|\s+dlx|x)/.test(value) ||
        /\bnpx\b|\bbunx\b/.test(value);

      const hProperties: Record<string, any> = {
        __title__: title,
        __rawString__: value,
        __lang__: lang,
      };

      if (isCommand) {
        hProperties.__isCommand__ = true;
      }

      // Attach properties to the node for rehype processing
      node.data ??= {};
      node.data.hProperties = {
        ...node.data.hProperties,
        ...hProperties,
      };
    });
  };
};

/**
 * Rehype plugin to pass code metadata (like title) from <code> to <pre>
 */
export const rehypeCodeTitle = () => {
  return (tree: Element): void => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName !== "pre") return;

      const code = node.children?.find(
        (child) => child.type === "element" && child.tagName === "code",
      ) as Element | undefined;

      if (code?.properties) {
        node.properties = {
          ...node.properties,
          ...code.properties,
        };
      }
    });
  };
};
