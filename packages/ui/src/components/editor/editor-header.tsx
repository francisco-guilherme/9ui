import {
  Download,
  Expand,
  Minimize2,
  Palette,
  Redo2,
  RotateCcw,
  Undo2,
  Upload,
} from "lucide-react";

import { Button } from "../ui";

interface EditorHeaderProps {
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onReset: () => void;
  onExport: () => void;
  onImport: () => void;
  toggleAll: () => void;
  allExpanded: boolean;
}

export function EditorHeader({
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onReset,
  onExport,
  onImport,
  toggleAll,
  allExpanded,
}: EditorHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Palette className="size-4 text-primary" />
        <h3 className="font-semibold text-sm">Theme Colors</h3>
      </div>
      <div className="flex gap-1">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={toggleAll}
          title={
            allExpanded ? "Collapse All Categories" : "Expand All Categories"
          }
        >
          {allExpanded ? (
            <Minimize2 className="size-3" />
          ) : (
            <Expand className="size-3" />
          )}
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onUndo}
          disabled={!canUndo}
          title="Undo (⌘Z)"
        >
          <Undo2 className="size-3" />
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onRedo}
          disabled={!canRedo}
          title="Redo (⌘⇧Z)"
        >
          <Redo2 className="size-3" />
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onReset}
          title="Reset All"
        >
          <RotateCcw className="size-3" />
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onExport}
          title="Export CSS"
        >
          <Download className="size-3" />
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onImport}
          title="Import JSON"
        >
          <Upload className="size-3" />
        </Button>
      </div>
    </div>
  );
}
