import type {
  CanvasPage,
  ComponentNodeData,
  ExportOptions,
  ExportResult,
} from "../types";

export async function exportToCode(
  nodes: ComponentNodeData[],
  pages: CanvasPage[],
  options: ExportOptions,
): Promise<ExportResult> {
  try {
    const files = [];

    // Filter pages if specified
    const pagesToExport = options.pageIds
      ? pages.filter((page) => options.pageIds!.includes(page.id))
      : pages;

    // Generate files for each page
    for (const page of pagesToExport) {
      const pageNodes = nodes.filter(
        (node) =>
          node.pageId === page.id &&
          (!options.componentIds || options.componentIds.includes(node.id)),
      );

      switch (options.format) {
        case "react":
          files.push(...generateReactFiles(page, pageNodes, options));
          break;
        case "html":
          files.push(...generateHTMLFiles(page, pageNodes, options));
          break;
        case "vue":
          files.push(...generateVueFiles(page, pageNodes, options));
          break;
        case "svelte":
          files.push(...generateSvelteFiles(page, pageNodes, options));
          break;
      }
    }

    // Add index file if multiple pages
    if (pagesToExport.length > 1) {
      files.push(generateIndexFile(pagesToExport, options));
    }

    return {
      success: true,
      files,
    };
  } catch (error) {
    return {
      success: false,
      files: [],
      error: error instanceof Error ? error.message : "Export failed",
    };
  }
}

function generateReactFiles(
  page: CanvasPage,
  nodes: ComponentNodeData[],
  options: ExportOptions,
) {
  const files = [];

  // Main component file
  const componentCode = generateReactComponent(page, nodes, options);
  files.push({
    name: `${sanitizeFileName(page.name)}.jsx`,
    content: options.minify ? minifyCode(componentCode) : componentCode,
    type: "component" as const,
  });

  // Styles file if requested
  if (options.includeStyles) {
    const stylesCode = generateReactStyles(page, nodes);
    files.push({
      name: `${sanitizeFileName(page.name)}.module.css`,
      content: options.minify ? minifyCSS(stylesCode) : stylesCode,
      type: "style" as const,
    });
  }

  return files;
}

function generateHTMLFiles(
  page: CanvasPage,
  nodes: ComponentNodeData[],
  options: ExportOptions,
) {
  const files = [];

  const htmlCode = generateHTMLPage(page, nodes, options);
  files.push({
    name: `${sanitizeFileName(page.name)}.html`,
    content: options.minify ? minifyHTML(htmlCode) : htmlCode,
    type: "component" as const,
  });

  return files;
}

function generateVueFiles(
  page: CanvasPage,
  nodes: ComponentNodeData[],
  options: ExportOptions,
) {
  const files = [];

  const vueCode = generateVueComponent(page, nodes, options);
  files.push({
    name: `${sanitizeFileName(page.name)}.vue`,
    content: options.minify ? minifyCode(vueCode) : vueCode,
    type: "component" as const,
  });

  return files;
}

function generateSvelteFiles(
  page: CanvasPage,
  nodes: ComponentNodeData[],
  options: ExportOptions,
) {
  const files = [];

  const svelteCode = generateSvelteComponent(page, nodes, options);
  files.push({
    name: `${sanitizeFileName(page.name)}.svelte`,
    content: options.minify ? minifyCode(svelteCode) : svelteCode,
    type: "component" as const,
  });

  return files;
}

function generateReactComponent(
  page: CanvasPage,
  nodes: ComponentNodeData[],
  options: ExportOptions,
): string {
  const imports = [
    "import React from 'react';",
    options.includeStyles
      ? `import styles from './${sanitizeFileName(page.name)}.module.css';`
      : "",
  ]
    .filter(Boolean)
    .join("\n");

  const components = nodes
    .map((node) => generateReactNode(node, options))
    .join("\n");

  return `${imports}

export default function ${pascalCase(page.name)}() {
  return (
    <div className={${options.includeStyles ? "styles.container" : '"page-container"'}} style={{
      position: 'relative',
      width: '${page.width}px',
      height: '${page.height}px',
      ${page.background ? `background: '${page.background}',` : ""}
    }}>
      ${components}
    </div>
  );
}`;
}

function generateReactNode(
  node: ComponentNodeData,
  options: ExportOptions,
): string {
  const { type, props, position, size } = node;
  const style = {
    position: "absolute" as const,
    left: position.x,
    top: position.y,
    width: size.width,
    height: size.height,
  };

  switch (type) {
    case "hero-section":
      return `      <div 
        style={{
          ...${JSON.stringify(style)},
          background: '${props.background || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}',
          color: '${props.textColor || "white"}',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '32px'
        }}
      >
        <div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px' }}>
            ${escapeString(props.title || "Welcome to Our Website")}
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '24px', opacity: 0.9 }}>
            ${escapeString(props.subtitle || "Create amazing experiences with AI")}
          </p>
          ${
            props.showButton
              ? `
          <button style={{ 
            padding: '12px 24px', 
            fontSize: '1rem', 
            backgroundColor: 'rgba(255,255,255,0.2)', 
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '6px',
            color: 'white',
            cursor: 'pointer'
          }}>
            ${escapeString(props.buttonText || "Get Started")}
          </button>`
              : ""
          }
        </div>
      </div>`;

    case "button":
      return `      <button 
        style={{
          ...${JSON.stringify(style)},
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px'
        }}
      >
        ${escapeString(props.text || "Button")}
      </button>`;

    case "text":
      return `      <div 
        style={{
          ...${JSON.stringify(style)},
          fontSize: '${props.fontSize || "16px"}',
          color: '${props.color || "inherit"}',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        ${escapeString(props.content || "Text content")}
      </div>`;

    default:
      return `      <div style={${JSON.stringify(style)}}>
        {/* ${type} component */}
      </div>`;
  }
}

function generateReactStyles(
  page: CanvasPage,
  nodes: ComponentNodeData[],
): string {
  return `.container {
  position: relative;
  width: ${page.width}px;
  height: ${page.height}px;
  ${page.background ? `background: ${page.background};` : ""}
}

.component {
  position: absolute;
}

.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 32px;
}

.button {
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}`;
}

function generateHTMLPage(
  page: CanvasPage,
  nodes: ComponentNodeData[],
  options: ExportOptions,
): string {
  const styles = options.includeStyles ? generateHTMLStyles(page, nodes) : "";
  const components = nodes.map((node) => generateHTMLNode(node)).join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeString(page.name)}</title>
  ${styles ? `<style>${styles}</style>` : ""}
</head>
<body>
  <div class="page-container" style="position: relative; width: ${page.width}px; height: ${page.height}px; ${page.background ? `background: ${page.background};` : ""}">
    ${components}
  </div>
</body>
</html>`;
}

function generateHTMLNode(node: ComponentNodeData): string {
  const { type, props, position, size } = node;
  const style = `position: absolute; left: ${position.x}px; top: ${position.y}px; width: ${size.width}px; height: ${size.height}px;`;

  switch (type) {
    case "hero-section":
      return `    <div class="hero-section" style="${style} background: ${props.background || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}; color: ${props.textColor || "white"}; display: flex; align-items: center; justify-content: center; text-align: center; padding: 32px;">
      <div>
        <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 16px;">
          ${escapeString(props.title || "Welcome to Our Website")}
        </h1>
        <p style="font-size: 1.25rem; margin-bottom: 24px; opacity: 0.9;">
          ${escapeString(props.subtitle || "Create amazing experiences with AI")}
        </p>
        ${
          props.showButton
            ? `
        <button style="padding: 12px 24px; font-size: 1rem; background-color: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.3); border-radius: 6px; color: white; cursor: pointer;">
          ${escapeString(props.buttonText || "Get Started")}
        </button>`
            : ""
        }
      </div>
    </div>`;

    case "button":
      return `    <button style="${style} background-color: #3b82f6; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px;">
      ${escapeString(props.text || "Button")}
    </button>`;

    case "text":
      return `    <div style="${style} font-size: ${props.fontSize || "16px"}; color: ${props.color || "inherit"}; display: flex; align-items: center;">
      ${escapeString(props.content || "Text content")}
    </div>`;

    default:
      return `    <div style="${style}">
      <!-- ${type} component -->
    </div>`;
  }
}

function generateHTMLStyles(
  page: CanvasPage,
  nodes: ComponentNodeData[],
): string {
  return `
  .page-container {
    position: relative;
    width: ${page.width}px;
    height: ${page.height}px;
    ${page.background ? `background: ${page.background};` : ""}
  }
  
  .component {
    position: absolute;
  }
  
  .hero-section {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 32px;
  }
  
  .button {
    background-color: #3b82f6;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
  }`;
}

function generateVueComponent(
  page: CanvasPage,
  nodes: ComponentNodeData[],
  options: ExportOptions,
): string {
  const components = nodes.map((node) => generateVueNode(node)).join("\n");

  return `<template>
  <div class="page-container" :style="containerStyle">
    ${components}
  </div>
</template>

<script>
export default {
  name: '${pascalCase(page.name)}',
  computed: {
    containerStyle() {
      return {
        position: 'relative',
        width: '${page.width}px',
        height: '${page.height}px',
        ${page.background ? `background: '${page.background}',` : ""}
      }
    }
  }
}
</script>

${
  options.includeStyles
    ? `<style scoped>
${generateVueStyles(page, nodes)}
</style>`
    : ""
}`;
}

function generateVueNode(node: ComponentNodeData): string {
  // Similar to React but with Vue template syntax
  return `    <!-- ${node.type} component -->
    <div :style="{ position: 'absolute', left: '${node.position.x}px', top: '${node.position.y}px', width: '${node.size.width}px', height: '${node.size.height}px' }">
      <!-- Component content -->
    </div>`;
}

function generateVueStyles(
  page: CanvasPage,
  nodes: ComponentNodeData[],
): string {
  return `.page-container {
  position: relative;
  width: ${page.width}px;
  height: ${page.height}px;
}`;
}

function generateSvelteComponent(
  page: CanvasPage,
  nodes: ComponentNodeData[],
  options: ExportOptions,
): string {
  const components = nodes.map((node) => generateSvelteNode(node)).join("\n");

  return `<div class="page-container" style="position: relative; width: ${page.width}px; height: ${page.height}px; ${page.background ? `background: ${page.background};` : ""}">
  ${components}
</div>

${
  options.includeStyles
    ? `<style>
${generateSvelteStyles(page, nodes)}
</style>`
    : ""
}`;
}

function generateSvelteNode(node: ComponentNodeData): string {
  return `  <!-- ${node.type} component -->
  <div style="position: absolute; left: ${node.position.x}px; top: ${node.position.y}px; width: ${node.size.width}px; height: ${node.size.height}px;">
    <!-- Component content -->
  </div>`;
}

function generateSvelteStyles(
  page: CanvasPage,
  nodes: ComponentNodeData[],
): string {
  return `.page-container {
  position: relative;
  width: ${page.width}px;
  height: ${page.height}px;
}`;
}

function generateIndexFile(pages: CanvasPage[], options: ExportOptions) {
  const imports = pages
    .map(
      (page) =>
        `import ${pascalCase(page.name)} from './${sanitizeFileName(page.name)}.${getFileExtension(options.format)}';`,
    )
    .join("\n");

  const exports = pages.map((page) => pascalCase(page.name)).join(", ");

  return {
    name: `index.${getFileExtension(options.format)}`,
    content: `${imports}

export { ${exports} };`,
    type: "index" as const,
  };
}

// Utility functions
function sanitizeFileName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function pascalCase(str: string): string {
  return str.replace(/(?:^|[\s-_])+(.)/g, (_, char) => char.toUpperCase());
}

function escapeString(str: string): string {
  return str.replace(/'/g, "\\'").replace(/"/g, '\\"');
}

function getFileExtension(format: string): string {
  switch (format) {
    case "react":
      return "jsx";
    case "html":
      return "html";
    case "vue":
      return "vue";
    case "svelte":
      return "svelte";
    default:
      return "js";
  }
}

function minifyCode(code: string): string {
  // Simple minification - remove extra whitespace and comments
  return code
    .replace(/\/\*[\s\S]*?\*\//g, "") // Remove block comments
    .replace(/\/\/.*$/gm, "") // Remove line comments
    .replace(/\s+/g, " ") // Collapse whitespace
    .trim();
}

function minifyCSS(css: string): string {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/;\s*}/g, "}")
    .replace(/{\s*/g, "{")
    .replace(/;\s*/g, ";")
    .trim();
}

function minifyHTML(html: string): string {
  return html.replace(/>\s+</g, "><").replace(/\s+/g, " ").trim();
}
