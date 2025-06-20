import { capitalCase } from "change-case";

/*
 * Converts a file path to a URL slug
 */
export const pathToSlug = (filePath: string): string =>
  filePath
    .replace(/^.*\/content\//, "")
    .replace(/\/index$/, "")
    .replace(/\.mdx$/, "");

/*
 * Extracts a component or file name from a path
 */
export const getNameFromPath = (path: string): string =>
  path
    .split("/")
    .pop()
    ?.replace(/\.(t|j)sx?$/, "") || "";

/*
 * Generates breadcrumb data from a slug
 */
export const generateBreadcrumbs = (slug: string) =>
  slug
    .split("/")
    .filter(Boolean)
    .map((segment, i, segments) => ({
      label: capitalCase(segment),
      path: "/" + segments.slice(0, i + 1).join("/"),
    }));
