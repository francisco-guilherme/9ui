import {
  Download,
  Grid,
  Play,
  Redo,
  RotateCcw,
  Save,
  Settings,
  Share,
  Undo,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { Badge, Button, Separator } from "@nui/ui";

import { useCanvas } from "../../context/canvas-context";
import type { BuilderConfig } from "../../types";

interface BuilderToolbarProps {
  config: BuilderConfig;
}

export function BuilderToolbar({ config }: BuilderToolbarProps) {
  const {
    zoom,
    snapToGrid,
    selectedNodes,
    pages,
    currentPageId,
    setZoom,
    resetView,
    toggleGrid,
    setCurrentPage,
  } = useCanvas();

  const currentPage = pages.find((p) => p.id === currentPageId);

  const handleZoomIn = () => setZoom(Math.min(5, zoom * 1.2));
  const handleZoomOut = () => setZoom(Math.max(0.1, zoom / 1.2));

  return (
    <div className="flex items-center justify-between p-3 bg-background border-b">
      {/* Left Section - File Operations */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm">
          <Undo className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <Redo className="h-4 w-4" />
        </Button>

        <Separator orientation="vertical" className="h-6" />

        <Button variant="ghost" size="sm">
          <Save className="h-4 w-4 mr-2" />
          Save
        </Button>
        <Button variant="ghost" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Center Section - Page Info & Controls */}
      <div className="flex items-center gap-4">
        {/* Page Selector */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Page:</span>
          <select
            value={currentPageId}
            onChange={(e) => setCurrentPage(e.target.value)}
            className="text-sm bg-background border rounded px-2 py-1"
          >
            {pages.map((page) => (
              <option key={page.id} value={page.id}>
                {page.name}
              </option>
            ))}
          </select>
        </div>

        <Separator orientation="vertical" className="h-6" />

        {/* Zoom Controls */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={handleZoomOut}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-sm min-w-[60px] text-center">
            {Math.round(zoom * 100)}%
          </span>
          <Button variant="ghost" size="sm" onClick={handleZoomIn}>
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={resetView}>
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        <Separator orientation="vertical" className="h-6" />

        {/* Canvas Controls */}
        <div className="flex items-center gap-2">
          <Button
            variant={snapToGrid ? "default" : "ghost"}
            size="sm"
            onClick={toggleGrid}
          >
            <Grid className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Right Section - Actions & Status */}
      <div className="flex items-center gap-2">
        {/* Selection Info */}
        {selectedNodes.length > 0 && (
          <Badge variant="secondary">{selectedNodes.length} selected</Badge>
        )}

        <Separator orientation="vertical" className="h-6" />

        {/* Action Buttons */}
        <Button variant="ghost" size="sm">
          <Play className="h-4 w-4 mr-2" />
          Preview
        </Button>
        <Button variant="ghost" size="sm">
          <Share className="h-4 w-4 mr-2" />
          Share
        </Button>
        <Button variant="ghost" size="sm">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
