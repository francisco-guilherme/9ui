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

import { cn } from "../../../utils/cn";
import { Button } from "../../ui";

export interface ThemeEditorHeaderProps {
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onReset: () => void;
  onExport: () => void;
  onImport: () => void;
  toggleAll: () => void;
  allExpanded: boolean;
  className?: string;
}

export function ThemeEditorHeader({
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onReset,
  onExport,
  onImport,
  toggleAll,
  allExpanded,
  className,
}: ThemeEditorHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <ThemeEditorTitle />
      <ThemeEditorActions
        canUndo={canUndo}
        canRedo={canRedo}
        onUndo={onUndo}
        onRedo={onRedo}
        onReset={onReset}
        onExport={onExport}
        onImport={onImport}
        toggleAll={toggleAll}
        allExpanded={allExpanded}
      />
    </div>
  );
}

function ThemeEditorTitle() {
  return (
    <div className="flex items-center gap-2">
      <Palette className="size-4 text-primary" />
      <h3 className="font-semibold text-sm">Theme Colors</h3>
    </div>
  );
}

function ThemeEditorActions({
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onReset,
  onExport,
  onImport,
  toggleAll,
  allExpanded,
}: Omit<ThemeEditorHeaderProps, "className">) {
  return (
    <div className="flex gap-1">
      <ThemeEditorExpandCollapseButton
        onClick={toggleAll}
        allExpanded={allExpanded}
      />
      <ThemeEditorUndoRedoButtons
        canUndo={canUndo}
        canRedo={canRedo}
        onUndo={onUndo}
        onRedo={onRedo}
      />
      <ThemeEditorResetButton onClick={onReset} />
      <ThemeEditorImportExportButtons onExport={onExport} onImport={onImport} />
    </div>
  );
}

function ThemeEditorExpandCollapseButton({
  onClick,
  allExpanded,
}: {
  onClick: () => void;
  allExpanded: boolean;
}) {
  return (
    <Button
      variant="ghost"
      size="icon-sm"
      onClick={onClick}
      title={allExpanded ? "Collapse All Categories" : "Expand All Categories"}
      aria-label={allExpanded ? "Collapse all" : "Expand all"}
    >
      {allExpanded ? (
        <Minimize2 className="size-3" />
      ) : (
        <Expand className="size-3" />
      )}
    </Button>
  );
}

function ThemeEditorUndoRedoButtons({
  canUndo,
  canRedo,
  onUndo,
  onRedo,
}: {
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
}) {
  return (
    <>
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={onUndo}
        disabled={!canUndo}
        title="Undo (⌘Z)"
        aria-label="Undo last change"
      >
        <Undo2 className="size-3" />
      </Button>
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={onRedo}
        disabled={!canRedo}
        title="Redo (⌘⇧Z)"
        aria-label="Redo next change"
      >
        <Redo2 className="size-3" />
      </Button>
    </>
  );
}

function ThemeEditorResetButton({ onClick }: { onClick: () => void }) {
  return (
    <Button
      variant="ghost"
      size="icon-sm"
      onClick={onClick}
      title="Reset All"
      aria-label="Reset all changes"
    >
      <RotateCcw className="size-3" />
    </Button>
  );
}

function ThemeEditorImportExportButtons({
  onExport,
  onImport,
}: {
  onExport: () => void;
  onImport: () => void;
}) {
  return (
    <>
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={onExport}
        title="Export CSS"
        aria-label="Export theme as CSS"
      >
        <Download className="size-3" />
      </Button>
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={onImport}
        title="Import JSON"
        aria-label="Import theme from JSON"
      >
        <Upload className="size-3" />
      </Button>
    </>
  );
}
