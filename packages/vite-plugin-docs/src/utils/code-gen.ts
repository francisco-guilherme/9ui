import { RouteData } from "../types";

/**
 * Generates a virtual module that exports all route components and metadata
 */
export const generateRouteMetaModule = (routes: RouteData[]): string => {
  const imports = routes
    .map((route, i) => `import Page${i} from ${JSON.stringify(route.file)};`)
    .join("\n");

  const routeObjects = routes
    .map(
      (route, i) => `  {
    path: ${JSON.stringify(route.path)},
    element: Page${i},
    meta: ${JSON.stringify(route.frontmatter || {})}
  }`,
    )
    .join(",\n");

  return `import React from "react";
${imports}

export const routes = [
${routeObjects}
];`;
};

/**
 * Generates a virtual module that exports sidebar items
 */
export const generateSidebarModule = (routes: RouteData[]): string => {
  const sidebarItems = routes
    .map(
      ({ path, frontmatter }) => `  {
    title: ${JSON.stringify(frontmatter.title || path)},
    path: ${JSON.stringify(path)}
  }`,
    )
    .join(",\n");

  return `export const sidebar = [
${sidebarItems}
];`;
};

/**
 * Generates a virtual CSS module with Tailwind configuration
 */
export const generateStylesModule = (tailwindSources: string[]): string => {
  const sources = tailwindSources
    .map((source) => `@source "${source}";`)
    .join("\n");

  return `@import "tailwindcss";

/* Configure content sources for Tailwind CSS v4 */
${sources}

/* Plugin-specific styles */
.docs-layout {
  /* Custom styles for docs layout */
}`;
};
