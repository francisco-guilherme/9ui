import * as React from "react";

import type {
  ThemeChange,
  ThemeVariable,
  ThemeVariableGroup,
} from "../../../types/theme";
import { cn } from "../../../utils/cn";
import {
  applyThemeVariable,
  getChangeHistory,
  redoNextChange,
  undoLastChange,
} from "../../../utils/theme-editor/history";
import {
  downloadTheme,
  exportThemeAsCSS,
  importThemeFromJSON,
} from "../../../utils/theme-editor/io";
import {
  getCurrentThemeVariables,
  initializeOriginalValues,
  // resetThemeVariables,
} from "../../../utils/theme-editor/state";
import { ThemeEditorDialog } from "./dialog";
import { ThemeEditorGroup } from "./group";
import { ThemeEditorHeader } from "./header";

interface ThemeEditingVariable {
  variable: ThemeVariable;
  groupIndex: number;
  variableIndex: number;
}

interface ThemeChangeHistory {
  canUndo: boolean;
  canRedo: boolean;
  changes: ThemeChange[];
}

const DEFAULT_EXPANDED_GROUPS = new Set(["Core Colors", "Primary Colors"]);

export interface ThemeEditorProps {
  className?: string;
  onThemeChange?: (variables: ThemeVariableGroup[]) => void;
  initialExpandedGroups?: string[];
}

export function ThemeEditor({
  className,
  onThemeChange,
  initialExpandedGroups,
}: ThemeEditorProps) {
  const [themeGroups, setThemeGroups] = React.useState<ThemeVariableGroup[]>(
    [],
  );
  const [expandedGroups, setExpandedGroups] = React.useState<Set<string>>(
    new Set(initialExpandedGroups || Array.from(DEFAULT_EXPANDED_GROUPS)),
  );
  const [changeHistory, setChangeHistory] = React.useState<ThemeChangeHistory>({
    canUndo: false,
    canRedo: false,
    changes: [],
  });
  const [editingVariable, setEditingVariable] =
    React.useState<ThemeEditingVariable | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const updateChangeHistory = React.useCallback(() => {
    const history = getChangeHistory();
    setChangeHistory({
      canUndo: history.canUndo,
      canRedo: history.canRedo,
      changes: history.changes,
    });
  }, []);

  const refreshThemeState = React.useCallback(() => {
    const newThemeGroups = getCurrentThemeVariables();
    setThemeGroups(newThemeGroups);
    updateChangeHistory();
    onThemeChange?.(newThemeGroups);
  }, [updateChangeHistory, onThemeChange]);

  const handleVariableChange = React.useCallback(
    (groupIndex: number, variableIndex: number, newValue: string) => {
      const variable = themeGroups[groupIndex]?.variables[variableIndex];
      if (!variable || !newValue || newValue === variable.value) return;

      applyThemeVariable(variable.name, newValue, variable.category);

      setThemeGroups((prev) => {
        const updated = [...prev];
        const targetVariable = updated[groupIndex].variables[variableIndex];
        targetVariable.value = newValue;
        targetVariable.isModified = newValue !== targetVariable.originalValue;
        return updated;
      });

      updateChangeHistory();
    },
    [themeGroups, updateChangeHistory],
  );

  const handleUndo = React.useCallback(() => {
    if (undoLastChange()) {
      refreshThemeState();
    }
  }, [refreshThemeState]);

  const handleRedo = React.useCallback(() => {
    if (redoNextChange()) {
      refreshThemeState();
    }
  }, [refreshThemeState]);

  const handleReset = React.useCallback(() => {
    // resetThemeVariables();
    refreshThemeState();
  }, [refreshThemeState]);

  const handleExportCSS = React.useCallback(() => {
    const css = exportThemeAsCSS();
    downloadTheme(css, "theme.css", "text/css");
  }, []);

  const handleImport = React.useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const result = e.target?.result as string;
          if (!result) throw new Error("Failed to read file");

          importThemeFromJSON(result);
          refreshThemeState();
        } catch (err) {
          console.error("Failed to import theme:", err);
          alert("Invalid theme file format.");
        } finally {
          event.target.value = "";
        }
      };
      reader.readAsText(file);
    },
    [refreshThemeState],
  );

  const toggleGroup = React.useCallback((category: string) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      next.has(category) ? next.delete(category) : next.add(category);
      return next;
    });
  }, []);

  const toggleAllCategories = React.useCallback(() => {
    const allCategories = themeGroups.map((g) => g.category);
    const shouldExpand = !allCategories.every((c) => expandedGroups.has(c));
    setExpandedGroups(new Set(shouldExpand ? allCategories : []));
  }, [themeGroups, expandedGroups]);

  const areAllExpanded = React.useMemo(
    () =>
      themeGroups.length > 0 &&
      themeGroups.every((group) => expandedGroups.has(group.category)),
    [themeGroups, expandedGroups],
  );

  const closeThemeEditor = React.useCallback(() => {
    setEditingVariable(null);
  }, []);

  // Initialize theme variables on mount
  React.useEffect(() => {
    initializeOriginalValues();
    setThemeGroups(getCurrentThemeVariables());
  }, []);

  // Keyboard shortcuts
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (editingVariable) return;

      if ((e.metaKey || e.ctrlKey) && !e.shiftKey && e.key === "z") {
        e.preventDefault();
        handleUndo();
      } else if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === "z") {
        e.preventDefault();
        handleRedo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleUndo, handleRedo, editingVariable]);

  return (
    <div className={cn("w-full max-w-md space-y-4", className)}>
      <ThemeEditorHeader
        canUndo={changeHistory.canUndo}
        canRedo={changeHistory.canRedo}
        onUndo={handleUndo}
        onRedo={handleRedo}
        onReset={handleReset}
        onExport={handleExportCSS}
        onImport={handleImport}
        toggleAll={toggleAllCategories}
        allExpanded={areAllExpanded}
      />

      <ThemeEditorGroup
        groups={themeGroups}
        expanded={expandedGroups}
        onToggleGroup={toggleGroup}
        onEdit={setEditingVariable}
      />

      <ThemeEditorDialog
        open={!!editingVariable}
        onClose={closeThemeEditor}
        editingVariable={editingVariable}
        onChange={handleVariableChange}
      />

      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleFileChange}
        className="hidden"
        aria-label="Import theme file"
      />
    </div>
  );
}
