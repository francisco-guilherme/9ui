import { resolve } from "path";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import type { PluggableList } from "unified";
import type { Plugin } from "vite";

import { ContentMetadata, DemoMetaData } from "./types/metadata";
import { scanContents, scanDemos } from "./utils/content";
import { generateContentsModule, generateDemosModule } from "./utils/modules";

interface DocsPluginOptions {
  contentsDir?: string;
  demosDir?: string;
  verbose?: boolean;
  mdxPlugins?: {
    remarkPlugins?: PluggableList;
    rehypePlugins?: PluggableList;
  };
}

const VIRTUAL_MODULES = {
  "virtual:docs-contents": "\0virtual:docs-contents",
  "virtual:docs-demos": "\0virtual:docs-demos",
  "virtual:docs-app": resolve(__dirname, "./docs.tsx"),
} as const;

export default function docsPlugin(options: DocsPluginOptions = {}): Plugin[] {
  const {
    contentsDir = "contents",
    demosDir = "demos",
    verbose = false,
    mdxPlugins = {},
  } = options;

  let contents: ContentMetadata[] = [];
  let demos: DemoMetaData[] = [];

  const scanAndUpdate = async (configRoot: string) => {
    const [newContents, newDemos] = await Promise.all([
      scanContents(resolve(configRoot, contentsDir)),
      scanDemos(resolve(configRoot, demosDir)),
    ]);

    contents = newContents;
    demos = newDemos;

    if (verbose) {
      console.log(
        `[docs-plugin] Scanned ${contents.length} contents, ${demos.length} demos`,
      );
    }
  };

  return [
    mdx({
      providerImportSource: "@mdx-js/react",
      remarkPlugins: [
        remarkFrontmatter,
        [remarkMdxFrontmatter, { name: "frontmatter" }],
        ...(mdxPlugins.remarkPlugins ?? []),
      ],
      rehypePlugins: [...(mdxPlugins.rehypePlugins ?? [])],
    }),

    {
      name: "vite-plugin-docs",

      async configResolved(config) {
        await scanAndUpdate(config.root);
      },

      resolveId(id) {
        return VIRTUAL_MODULES[id as keyof typeof VIRTUAL_MODULES];
      },

      load(id) {
        switch (id) {
          case VIRTUAL_MODULES["virtual:docs-contents"]:
            return generateContentsModule(contents);
          case VIRTUAL_MODULES["virtual:docs-demos"]:
            return generateDemosModule(demos);
          default:
            return null;
        }
      },

      async handleHotUpdate(ctx) {
        if (ctx.file.includes(contentsDir) || ctx.file.includes(demosDir)) {
          // Re-scan when files change
          await scanAndUpdate(ctx.server.config.root);

          // Invalidate virtual modules
          const modules = Object.values(VIRTUAL_MODULES)
            .map((id) => ctx.server.moduleGraph.getModuleById(id))
            .filter((mod): mod is import("vite").ModuleNode => Boolean(mod));

          return modules;
        }
      },
    },
  ];
}
