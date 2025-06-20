import { useState } from "react";
import { Copy, Download } from "lucide-react";
import {
  Button,
  ScrollArea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@nui/ui";

import { useCanvas } from "../../context/canvas-context";

export function CodeExporter() {
  const [exportFormat, setExportFormat] = useState<"react" | "html" | "vue">(
    "react",
  );
  const [includeStyles, setIncludeStyles] = useState(true);

  const { nodes, pages, currentPageId } = useCanvas();

  const currentPage = pages.find((p) => p.id === currentPageId);
  const currentPageNodes = nodes.filter(
    (node) => node.pageId === currentPageId,
  );

  const generateReactCode = () => {
    const imports = [
      "import React from 'react';",
      includeStyles ? "import './styles.css';" : "",
    ]
      .filter(Boolean)
      .join("\n");

    const components = currentPageNodes
      .map((node) => {
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
            return `
    <div 
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
          ${props.title || "Welcome to Our Website"}
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '24px', opacity: 0.9 }}>
          ${props.subtitle || "Create amazing experiences with AI"}
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
          ${props.buttonText || "Get Started"}
        </button>`
            : ""
        }
      </div>
    </div>`;

          case "button":
            return `
    <button 
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
      ${props.text || "Button"}
    </button>`;

          case "text":
            return `
    <div 
      style={{
        ...${JSON.stringify(style)},
        fontSize: '${props.fontSize || "16px"}',
        color: '${props.color || "inherit"}',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      ${props.content || "Text content"}
    </div>`;

          default:
            return `
    <div style={${JSON.stringify(style)}}>
      {/* ${type} component */}
    </div>`;
        }
      })
      .join("\n");

    return `${imports}

export default function ${currentPage?.name || "Page"}() {
  return (
    <div style={{ position: 'relative', width: '${currentPage?.width || 1200}px', height: '${currentPage?.height || 800}px' }}>
      ${components}
    </div>
  );
}`;
  };

  const generateHTMLCode = () => {
    const styles = includeStyles
      ? `
<style>
  .page-container {
    position: relative;
    width: ${currentPage?.width || 1200}px;
    height: ${currentPage?.height || 800}px;
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
  }
</style>`
      : "";

    const components = currentPageNodes
      .map((node) => {
        const { type, props, position, size } = node;
        const style = `left: ${position.x}px; top: ${position.y}px; width: ${size.width}px; height: ${size.height}px;`;

        switch (type) {
          case "hero-section":
            return `
  <div class="component hero-section" style="${style} background: ${props.background || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}; color: ${props.textColor || "white"};">
    <div>
      <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 16px;">
        ${props.title || "Welcome to Our Website"}
      </h1>
      <p style="font-size: 1.25rem; margin-bottom: 24px; opacity: 0.9;">
        ${props.subtitle || "Create amazing experiences with AI"}
      </p>
      ${
        props.showButton
          ? `
      <button class="button" style="padding: 12px 24px;">
        ${props.buttonText || "Get Started"}
      </button>`
          : ""
      }
    </div>
  </div>`;

          case "button":
            return `
  <button class="component button" style="${style}">
    ${props.text || "Button"}
  </button>`;

          case "text":
            return `
  <div class="component" style="${style} font-size: ${props.fontSize || "16px"}; color: ${props.color || "inherit"}; display: flex; align-items: center;">
    ${props.content || "Text content"}
  </div>`;

          default:
            return `
  <div class="component" style="${style}">
    <!-- ${type} component -->
  </div>`;
        }
      })
      .join("\n");

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${currentPage?.name || "Page"}</title>${styles}
</head>
<body>
  <div class="page-container">
    ${components}
  </div>
</body>
</html>`;
  };

  const getCode = () => {
    switch (exportFormat) {
      case "react":
        return generateReactCode();
      case "html":
        return generateHTMLCode();
      case "vue":
        return "// Vue export coming soon...";
      default:
        return "";
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCode());
  };

  const handleDownload = () => {
    const code = getCode();
    const extension =
      exportFormat === "react"
        ? "jsx"
        : exportFormat === "html"
          ? "html"
          : "vue";
    const filename = `${currentPage?.name || "page"}.${extension}`;

    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b space-y-4">
        <h3 className="font-semibold">Export Code</h3>

        <div className="space-y-2">
          <label className="text-sm font-medium">Format</label>
          <Select
            value={exportFormat}
            onValueChange={(value: any) => setExportFormat(value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="react">React JSX</SelectItem>
              <SelectItem value="html">HTML</SelectItem>
              <SelectItem value="vue">Vue (Coming Soon)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="includeStyles"
            checked={includeStyles}
            onChange={(e) => setIncludeStyles(e.target.checked)}
          />
          <label htmlFor="includeStyles" className="text-sm">
            Include styles
          </label>
        </div>

        <div className="flex gap-2">
          <Button onClick={handleCopy} size="sm" className="flex-1">
            <Copy className="h-4 w-4 mr-2" />
            Copy
          </Button>
          <Button onClick={handleDownload} size="sm" className="flex-1">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </div>

      {/* Code Preview */}
      <ScrollArea className="flex-1">
        <pre className="p-4 text-xs font-mono bg-muted/30 whitespace-pre-wrap">
          {getCode()}
        </pre>
      </ScrollArea>

      {/* Stats */}
      <div className="p-4 border-t text-xs text-muted-foreground">
        {currentPageNodes.length} components • {getCode().split("\n").length}{" "}
        lines
      </div>
    </div>
  );
}
