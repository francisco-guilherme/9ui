import { ContentMetadata, DemoMetaData } from "../types/metadata";

/**
 * Creates an import statement for a file.
 */
const createImport = (id: number, file: string) =>
  `import Page${id} from ${JSON.stringify(file)};`;

/**
 * Creates an import + raw import pair for a demo file.
 */
const createDemoImports = (id: number, file: string) => [
  `import Demo${id} from ${JSON.stringify(file)};`,
  `import Demo${id}Raw from ${JSON.stringify(file + "?raw")};`,
];

/**
 * Generates a virtual module that exports all content routes and metadata.
 */
export const generateContentsModule = (contents: ContentMetadata[]): string => {
  if (contents.length === 0) {
    return `import React from "react";\nexport const contents = [];`;
  }

  const imports = contents.map((c, i) => createImport(i, c.file)).join("\n");

  const contentExports = contents
    .map((c, i) => {
      const path = JSON.stringify(c.path);
      const meta = JSON.stringify(c.frontmatter || {});
      return `  { path: ${path}, element: Page${i}, meta: ${meta} }`;
    })
    .join(",\n");

  return `import React from "react";

${imports}

export const contents = [
${contentExports}
];
`;
};

/**
 * Generates a virtual module that provides a `loadDemo` function
 * to retrieve demo components and their raw source by name.
 */
export const generateDemosModule = (demos: DemoMetaData[]): string => {
  if (demos.length === 0) {
    return `export const loadDemo = async () => null;`;
  }

  const imports = demos
    .flatMap((d, i) => createDemoImports(i, d.file))
    .join("\n");

  const demoMapEntries = demos
    .map(
      (d, i) =>
        `  ${JSON.stringify(d.name)}: { Component: Demo${i}, code: Demo${i}Raw }`,
    )
    .join(",\n");

  return `${imports}

const demoMap = {
${demoMapEntries}
};

/**
 * Loads a demo component and its source code by name.
 * 
 * @param name - The unique name of the demo
 * @returns An object with the demo Component and raw source, or null if not found
 */
export const loadDemo = async (name) => {
  const demo = demoMap[name];
  if (!demo) return null;

  return {
    Component: demo.Component,
    code: demo.code?.replace("export default", "export") || "",
    loading: false,
    error: null,
  };
};
`;
};
