import fs from "fs";
import fg from "fast-glob";
import matter from "gray-matter";

import { RouteData } from "../types";
import { createRoutePath, getRelativePath } from "./path";

/**
 * Reads a single MDX file and returns route metadata
 */
export const processRouteFile = (
  filePath: string,
  resolvedPagesDir: string,
): RouteData => {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter } = matter(raw);
  const relative = getRelativePath(filePath, resolvedPagesDir);
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
