import type { ReactNode } from "react";

// Canvas System Types
export interface CanvasState {
  zoom: number;
  pan: { x: number; y: number };
  selectedNodes: string[];
  nodes: ComponentNodeData[];
  pages: CanvasPage[];
  currentPageId: string;
  gridSize: number;
  snapToGrid: boolean;
}

export interface CanvasPage {
  id: string;
  name: string;
  width: number;
  height: number;
  background?: string;
  nodes: string[]; // Node IDs on this page
}

export interface ComponentNodeData {
  id: string;
  type: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  props: Record<string, any>;
  children?: string[]; // Child node IDs
  parentId?: string;
  pageId: string;
  zIndex: number;
  locked: boolean;
  visible: boolean;
  generatedFrom?: string; // Original AI prompt
}

// AI Generation Types
export interface AIGenerationRequest {
  prompt: string;
  context?: {
    existingComponents?: ComponentNodeData[];
    targetPosition?: { x: number; y: number };
    pageId: string;
    stylePreferences?: Record<string, any>;
  };
  options?: {
    includeChildren?: boolean;
    generateVariations?: boolean;
    preserveExisting?: boolean;
  };
}

export interface AIGenerationResponse {
  success: boolean;
  components: ComponentNodeData[];
  code?: string;
  explanation?: string;
  suggestions?: string[];
  error?: string;
}

// Builder Configuration
export interface BuilderConfig {
  canvas: {
    defaultZoom: number;
    minZoom: number;
    maxZoom: number;
    gridSize: number;
    snapToGrid: boolean;
  };
  ai: {
    provider: "mcp" | "openai" | "anthropic";
    model?: string;
    temperature?: number;
    maxTokens?: number;
  };
  export: {
    format: "react" | "html" | "vue" | "svelte";
    includeStyles: boolean;
    minify: boolean;
  };
  ui: {
    theme: string;
    showGrid: boolean;
    showRulers: boolean;
    showGuides: boolean;
  };
}

// Export System Types
export interface ExportOptions {
  format: "react" | "html" | "vue" | "svelte";
  includeStyles: boolean;
  minify: boolean;
  pageIds?: string[];
  componentIds?: string[];
}

export interface ExportResult {
  success: boolean;
  files: ExportFile[];
  error?: string;
}

export interface ExportFile {
  name: string;
  content: string;
  type: "component" | "style" | "config" | "index";
}

// Chat Interface Types
export interface ChatMessage {
  id: string;
  type: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
  metadata?: {
    generatedComponents?: string[];
    actions?: ChatAction[];
  };
}

export interface ChatAction {
  type: "generate" | "modify" | "delete" | "export";
  label: string;
  data: any;
}

// Component Library Types
export interface ComponentDefinition {
  id: string;
  name: string;
  category: string;
  description: string;
  props: ComponentProp[];
  defaultProps: Record<string, any>;
  preview: ReactNode;
  tags: string[];
}

export interface ComponentProp {
  name: string;
  type: "string" | "number" | "boolean" | "color" | "select" | "object";
  required: boolean;
  default?: any;
  options?: any[];
  description?: string;
}
