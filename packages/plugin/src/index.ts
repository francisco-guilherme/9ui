import path from "path";
import mdx from "@mdx-js/rollup";
import type { Plugin } from "vite";

import { RouteData } from "./types";
import {
  generateRouteMetaModule,
  generateSidebarModule,
  scanRoutes,
} from "./utils";

interface DocsPluginOptions {
  contentDir?: string;
  tailwindSources?: string[];
}

const virtualModuleMap = {
  "virtual:docs-route-meta": "\0virtual:docs-route-meta",
  "virtual:docs-sidebar": "\0virtual:docs-sidebar",
  "virtual:docs-layout": path.resolve(__dirname, "./components/Layout.tsx"),
  "virtual:docs-app": path.resolve(__dirname, "./components/Docs.tsx"),
} as const;

export default function docsPlugin(options: DocsPluginOptions = {}): Plugin[] {
  const contentDir = options.contentDir ?? "content";

  let routeData: RouteData[] = [];

  return [
    mdx({ jsxImportSource: "react" }),

    {
      name: "vite-plugin-docs",

      async configResolved(resolvedConfig) {
        const resolvedPagesDir = path.resolve(resolvedConfig.root, contentDir);
        routeData = await scanRoutes(resolvedPagesDir);
      },

      resolveId(id) {
        return virtualModuleMap[id as keyof typeof virtualModuleMap] ?? null;
      },

      load(id) {
        switch (id) {
          case virtualModuleMap["virtual:docs-route-meta"]:
            return generateRouteMetaModule(routeData);
          case virtualModuleMap["virtual:docs-sidebar"]:
            return generateSidebarModule(routeData);
          default:
            return null;
        }
      },
    },
  ];
}
