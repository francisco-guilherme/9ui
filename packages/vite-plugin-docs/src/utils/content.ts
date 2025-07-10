import fs from "fs";
import path from "path";
import fg from "fast-glob";
import matter from "gray-matter";
import { normalizePath } from "vite";

import { ContentMetadata, DemoMetaData } from "../types/metadata";

/**
 * Converts a file path like "docs/getting-started.mdx" to "/docs/getting-started"
 * Special cases: "index.mdx" becomes "/" and trailing slashes are removed
 */
function createRoutePath(relativePath: string): string {
  // Remove .mdx extension and replace index with empty string
  const withoutExtension = relativePath
    .replace(/\.mdx$/, "")
    .replace(/index$/, "");

  // Add leading slash
  const route = "/" + withoutExtension;

  // Handle root case and remove trailing slashes
  return route === "/" ? "/" : route.replace(/\/$/, "");
}

/**
 * Checks if a directory exists and logs a warning if not
 */
function checkDirectoryExists(dirPath: string, directoryName: string): boolean {
  const exists = fs.existsSync(dirPath);

  if (!exists) {
    console.warn(
      `[vite-plugin-docs] ${directoryName} directory not found: ${dirPath}`,
    );
  }

  return exists;
}

/**
 * Finds all files matching the given patterns in a directory
 */
async function findFiles(
  directory: string,
  filePatterns: string[],
): Promise<string[]> {
  const foundFiles = await fg(filePatterns, {
    cwd: directory,
    absolute: true,
  });

  if (foundFiles.length === 0) {
    console.warn(`[vite-plugin-docs] No files found in: ${directory}`);
  }

  return foundFiles;
}

/**
 * Processes a single content file (MDX) to extract metadata
 */
function processContentFile(
  filePath: string,
  baseDirectory: string,
): ContentMetadata {
  // Read the file content
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // Extract frontmatter using gray-matter
  const { data: frontmatter } = matter(fileContent);

  // Get relative path from base directory
  const relativePath = normalizePath(path.relative(baseDirectory, filePath));

  return {
    path: createRoutePath(relativePath),
    file: filePath,
    frontmatter,
  };
}

/**
 * Processes a single demo file (TSX) to extract metadata
 */
function processDemoFile(
  filePath: string,
  baseDirectory: string,
): DemoMetaData {
  // Get relative path from base directory
  const relativePath = normalizePath(path.relative(baseDirectory, filePath));

  // Extract filename without extension as the demo name
  const demoName = path.basename(filePath, path.extname(filePath));

  return {
    name: demoName,
    path: relativePath,
    file: filePath,
  };
}

/**
 * Scans contents directory for MDX and TSX files, returning metadata for each
 */
export async function scanContents(
  contentsDirectory: string,
): Promise<ContentMetadata[]> {
  // Check if directory exists
  if (!checkDirectoryExists(contentsDirectory, "Contents")) {
    return [];
  }

  // Find all MDX and TSX files
  const contentFiles = await findFiles(contentsDirectory, ["**/*.{mdx,tsx}"]);

  // Process each file to extract metadata
  const contentMetadata = contentFiles.map((filePath) =>
    processContentFile(filePath, contentsDirectory),
  );

  return contentMetadata;
}

/**
 * Scans demos directory for TSX files, returning metadata for each
 */
export async function scanDemos(
  demosDirectory: string,
): Promise<DemoMetaData[]> {
  // Check if directory exists
  if (!checkDirectoryExists(demosDirectory, "Demos")) {
    return [];
  }

  // Find all TSX files
  const demoFiles = await findFiles(demosDirectory, ["**/*.tsx"]);

  // Process each file to extract metadata
  const demoMetadata = demoFiles.map((filePath) =>
    processDemoFile(filePath, demosDirectory),
  );

  return demoMetadata;
}
