import { useState } from "react";
import {
  Code,
  Layers,
  MessageSquare,
  PanelLeftClose,
  PanelLeftOpen,
  PanelRightClose,
  PanelRightOpen,
  Settings,
} from "lucide-react";
import { Button } from "@nui/ui";

import type { BuilderConfig } from "../../types";
import { ChatInterface } from "../ai/chat-interface";
import { InfiniteCanvas } from "../canvas/infinite-canvas";
import { BuilderToolbar } from "../ui/builder-toolbar";
import { CodeExporter } from "../ui/code-exporter";
import { ComponentPalette } from "../ui/component-palette";
import { PropertiesPanel } from "../ui/properties-panel";

interface BuilderLayoutProps {
  config: BuilderConfig;
}

export function BuilderLayout({ config }: BuilderLayoutProps) {
  const [leftPanelOpen, setLeftPanelOpen] = useState(true);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);
  const [activeLeftTab, setActiveLeftTab] = useState<"chat" | "components">(
    "chat",
  );
  const [activeRightTab, setActiveRightTab] = useState<"properties" | "code">(
    "properties",
  );

  return (
    <div className="flex h-full bg-background">
      {/* Left Sidebar */}
      <div
        className={`flex flex-col border-r transition-all duration-300 ${
          leftPanelOpen ? "w-80" : "w-12"
        }`}
      >
        {/* Left Panel Header */}
        <div className="flex items-center justify-between p-3 border-b">
          {leftPanelOpen && (
            <div className="flex space-x-1">
              <Button
                variant={activeLeftTab === "chat" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveLeftTab("chat")}
                className="flex items-center gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                AI Chat
              </Button>
              <Button
                variant={activeLeftTab === "components" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveLeftTab("components")}
                className="flex items-center gap-2"
              >
                <Layers className="h-4 w-4" />
                Components
              </Button>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLeftPanelOpen(!leftPanelOpen)}
          >
            {leftPanelOpen ? (
              <PanelLeftClose className="h-4 w-4" />
            ) : (
              <PanelLeftOpen className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Left Panel Content */}
        {leftPanelOpen && (
          <div className="flex-1 overflow-hidden">
            {activeLeftTab === "chat" && <ChatInterface />}
            {activeLeftTab === "components" && <ComponentPalette />}
          </div>
        )}
      </div>

      {/* Main Canvas Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Toolbar */}
        <div className="border-b">
          <BuilderToolbar config={config} />
        </div>

        {/* Canvas */}
        <div className="flex-1 relative">
          <InfiniteCanvas />
        </div>
      </div>

      {/* Right Sidebar */}
      <div
        className={`flex flex-col border-l transition-all duration-300 ${
          rightPanelOpen ? "w-80" : "w-12"
        }`}
      >
        {/* Right Panel Header */}
        <div className="flex items-center justify-between p-3 border-b">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setRightPanelOpen(!rightPanelOpen)}
          >
            {rightPanelOpen ? (
              <PanelRightClose className="h-4 w-4" />
            ) : (
              <PanelRightOpen className="h-4 w-4" />
            )}
          </Button>
          {rightPanelOpen && (
            <div className="flex space-x-1">
              <Button
                variant={activeRightTab === "properties" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveRightTab("properties")}
                className="flex items-center gap-2"
              >
                <Settings className="h-4 w-4" />
                Properties
              </Button>
              <Button
                variant={activeRightTab === "code" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveRightTab("code")}
                className="flex items-center gap-2"
              >
                <Code className="h-4 w-4" />
                Code
              </Button>
            </div>
          )}
        </div>

        {/* Right Panel Content */}
        {rightPanelOpen && (
          <div className="flex-1 overflow-hidden">
            {activeRightTab === "properties" && <PropertiesPanel />}
            {activeRightTab === "code" && <CodeExporter />}
          </div>
        )}
      </div>
    </div>
  );
}
