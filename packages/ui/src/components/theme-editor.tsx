import * as React from "react";

import { cn } from "../utils/cn";
import {
  applyThemeVariable,
  downloadTheme,
  exportThemeAsCSS,
  getChangeHistory,
  getCurrentThemeVariables,
  importThemeFromJSON,
  initializeOriginalValues,
  redoNextChange,
  resetThemeVariables,
  undoLastChange,
  type ThemeVariableGroup,
} from "../utils/editor";
import { EditorDialog } from "./editor/editor-dialog";
import { EditorGroup } from "./editor/editor-group";
import { EditorHeader } from "./editor/editor-header";

export function ThemeEditor({ className }: { className?: string }) {
  const [themeGroups, setThemeGroups] = React.useState<ThemeVariableGroup[]>(
    [],
  );
  const [expandedGroups, setExpandedGroups] = React.useState<Set<string>>(
    new Set(["Core Colors", "Primary Colors"]),
  );
  const [changeHistory, setChangeHistory] = React.useState({
    canUndo: false,
    canRedo: false,
    changes: [] as any[],
  });
  const [editingVariable, setEditingVariable] = React.useState<{
    variable: any;
    groupIndex: number;
    variableIndex: number;
  } | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    initializeOriginalValues();
    setThemeGroups(getCurrentThemeVariables());
  }, []);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && !e.shiftKey && e.key === "z") {
        e.preventDefault();
        handleUndo();
      } else if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === "z") {
        e.preventDefault();
        handleRedo();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [changeHistory.canUndo, changeHistory.canRedo]);

  const updateChangeHistory = () => {
    const history = getChangeHistory();
    setChangeHistory({
      canUndo: history.canUndo,
      canRedo: history.canRedo,
      changes: history.changes,
    });
  };

  const handleVariableChange = React.useCallback(
    (groupIndex: number, variableIndex: number, newValue: string) => {
      const variable = themeGroups[groupIndex].variables[variableIndex];
      if (!newValue || newValue === variable.value) return;

      applyThemeVariable(variable.name, newValue, variable.category);
      const updatedGroups = [...themeGroups];
      updatedGroups[groupIndex].variables[variableIndex].value = newValue;
      updatedGroups[groupIndex].variables[variableIndex].isModified =
        newValue !==
        updatedGroups[groupIndex].variables[variableIndex].originalValue;
      setThemeGroups(updatedGroups);
      updateChangeHistory();
    },
    [themeGroups, updateChangeHistory],
  );

  const handleUndo = React.useCallback(() => {
    if (undoLastChange()) {
      setThemeGroups(getCurrentThemeVariables());
      updateChangeHistory();
    }
  }, [updateChangeHistory]);

  const handleRedo = React.useCallback(() => {
    if (redoNextChange()) {
      setThemeGroups(getCurrentThemeVariables());
      updateChangeHistory();
    }
  }, [updateChangeHistory]);

  const handleReset = React.useCallback(() => {
    resetThemeVariables();
    setThemeGroups(getCurrentThemeVariables());
    updateChangeHistory();
  }, [updateChangeHistory]);

  const handleExportCSS = () => {
    const css = exportThemeAsCSS();
    downloadTheme(css, "theme.css", "text/css");
  };

  const handleImport = () => fileInputRef.current?.click();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        importThemeFromJSON(e.target?.result as string);
        setThemeGroups(getCurrentThemeVariables());
      } catch (err) {
        console.error("Failed to import theme:", err);
        alert("Invalid theme file format.");
      }
    };
    reader.readAsText(file);
  };

  const toggleGroup = React.useCallback(
    (category: string) =>
      setExpandedGroups((prev) => {
        const next = new Set(prev);
        next.has(category) ? next.delete(category) : next.add(category);
        return next;
      }),
    [],
  );

  const toggleAllCategories = React.useCallback(() => {
    const all = themeGroups.map((g) => g.category);
    const shouldExpand = !all.every((c) => expandedGroups.has(c));
    setExpandedGroups(new Set(shouldExpand ? all : []));
  }, [themeGroups, expandedGroups]);

  const areAllExpanded = React.useCallback(
    () =>
      themeGroups.length > 0 &&
      themeGroups.every((group) => expandedGroups.has(group.category)),
    [themeGroups, expandedGroups],
  );

  return (
    <div className={cn("w-full max-w-md space-y-4", className)}>
      <EditorHeader
        canUndo={changeHistory.canUndo}
        canRedo={changeHistory.canRedo}
        onUndo={handleUndo}
        onRedo={handleRedo}
        onReset={handleReset}
        onExport={handleExportCSS}
        onImport={handleImport}
        toggleAll={toggleAllCategories}
        allExpanded={areAllExpanded()}
      />

      <EditorGroup
        groups={themeGroups}
        expanded={expandedGroups}
        onToggleGroup={toggleGroup}
        onEdit={setEditingVariable}
      />

      <EditorDialog
        open={!!editingVariable}
        onClose={() => setEditingVariable(null)}
        editingVariable={editingVariable}
        onChange={handleVariableChange}
      />

      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
