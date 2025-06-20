import fs from "fs";
import path from "path";
import fg from "fast-glob";
import matter from "gray-matter";
import { normalizePath } from "vite";

import { RouteData } from "./types";

/**
 * Converts a relative file path to a clean route path
 */
const createRoutePath = (relativePath: string): string => {
  let route = "/" + relativePath.replace(/\.mdx$/, "").replace(/index$/, "");
  return route === "/" ? "/" : route.replace(/\/$/, "");
};

/**
 * Reads a single MDX file and returns route metadata
 */
const processRouteFile = (
  filePath: string,
  resolvedPagesDir: string,
): RouteData => {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter } = matter(raw);
  const relative = normalizePath(path.relative(resolvedPagesDir, filePath));
  const routePath = createRoutePath(relative);

  return {
    path: routePath,
    file: filePath,
    frontmatter,
  };
};

/**
 * Scans a directory for MDX pages and generates route metadata
 */
export const scanRoutes = async (
  resolvedPagesDir: string,
): Promise<RouteData[]> => {
  if (!fs.existsSync(resolvedPagesDir)) {
    console.warn(
      `[vite-plugin-docs] Pages directory not found: ${resolvedPagesDir}`,
    );
    return [];
  }

  const entries = await fg("**/*.mdx", {
    cwd: resolvedPagesDir,
    absolute: true,
  });

  if (entries.length === 0) {
    console.warn(
      `[vite-plugin-docs] No MDX files found in: ${resolvedPagesDir}`,
    );
    return [];
  }

  return entries.map((filePath) =>
    processRouteFile(filePath, resolvedPagesDir),
  );
};

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
  console.log("tailwindSources: ", tailwindSources);
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
