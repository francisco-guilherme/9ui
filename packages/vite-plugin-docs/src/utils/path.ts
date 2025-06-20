import path from "path";
import { normalizePath } from "vite";

/**
 * Converts a relative file path to a clean route path
 */
export const createRoutePath = (relativePath: string): string => {
  let route = "/" + relativePath.replace(/\.mdx$/, "").replace(/index$/, "");
  return route === "/" ? "/" : route.replace(/\/$/, "");
};

/**
 * Gets the relative path from pages directory to file
 */
export const getRelativePath = (filePath: string, pagesDir: string): string => {
  return normalizePath(path.relative(pagesDir, filePath));
};
