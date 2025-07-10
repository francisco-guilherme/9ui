import { ChevronDown, Edit3 } from "lucide-react";

import type { ThemeVariable, ThemeVariableGroup } from "../../../types/theme";
import { cn } from "../../../utils/cn";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../../ui";

interface ThemeEditingVariable {
  variable: ThemeVariable;
  groupIndex: number;
  variableIndex: number;
}

export interface ThemeEditorGroupProps {
  groups: ThemeVariableGroup[];
  expanded: Set<string>;
  onToggleGroup: (category: string) => void;
  onEdit: (info: ThemeEditingVariable) => void;
  className?: string;
}

export function ThemeEditorGroup({
  groups,
  expanded,
  onToggleGroup,
  onEdit,
  className,
}: ThemeEditorGroupProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {groups.map((group, groupIndex) => (
        <ThemeGroupCollapsible
          key={group.category}
          group={group}
          groupIndex={groupIndex}
          isExpanded={expanded.has(group.category)}
          onToggle={() => onToggleGroup(group.category)}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

function ThemeGroupCollapsible({
  group,
  groupIndex,
  isExpanded,
  onToggle,
  onEdit,
}: {
  group: ThemeVariableGroup;
  groupIndex: number;
  isExpanded: boolean;
  onToggle: () => void;
  onEdit: (info: ThemeEditingVariable) => void;
}) {
  const hasModifiedVariables = group.variables.some((v) => v.isModified);
  const modifiedCount = group.variables.filter((v) => v.isModified).length;

  return (
    <Collapsible open={isExpanded} onOpenChange={onToggle}>
      <CollapsibleTrigger
        className="w-full flex items-center justify-between p-2 text-left border border-border/50 hover:bg-accent/50 rounded-md transition-colors text-xs font-medium group"
        aria-label={`${group.category} - ${group.variables.length} variables${hasModifiedVariables ? `, ${modifiedCount} modified` : ""}`}
      >
        <div className="flex items-center gap-2">
          <span>{group.category}</span>
          <span className="text-muted-foreground">
            ({group.variables.length})
          </span>
          {hasModifiedVariables && (
            <ThemeModifiedIndicator count={modifiedCount} />
          )}
        </div>
        <ChevronDown
          className={cn(
            "size-3 transition-transform text-muted-foreground group-hover:text-foreground",
            isExpanded && "rotate-180",
          )}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-1 pt-2">
        <div className="grid grid-cols-2 gap-2">
          {group.variables.map((variable, variableIndex) => (
            <ThemeVariableItem
              key={variable.name}
              variable={variable}
              groupIndex={groupIndex}
              variableIndex={variableIndex}
              groupCategory={group.category}
              onEdit={onEdit}
            />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

function ThemeVariableItem({
  variable,
  groupIndex,
  variableIndex,
  groupCategory,
  onEdit,
}: {
  variable: ThemeVariableGroup["variables"][0];
  groupIndex: number;
  variableIndex: number;
  groupCategory: string;
  onEdit: (info: ThemeEditingVariable) => void;
}) {
  const displayName = variable.name.replace("--color-", "").replace("--", "");

  const handleEdit = () => {
    onEdit({
      variable: { ...variable, category: groupCategory },
      groupIndex,
      variableIndex,
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleEdit();
    }
  };

  return (
    <div
      className="relative group cursor-pointer focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 rounded"
      onClick={handleEdit}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Edit ${displayName} color variable`}
    >
      <div className="p-2 border border-border/30 rounded hover:border-border/60 transition-colors">
        <div className="flex items-center gap-2">
          <ThemeColorPreview
            color={variable.value}
            variableName={variable.name}
          />
          <span
            className="text-xs font-medium flex-1 truncate"
            title={displayName}
          >
            {displayName}
          </span>
          <div className="flex gap-1">
            {variable.isModified && <ThemeModifiedIndicator />}
            <Edit3 className="size-3 opacity-0 group-hover:opacity-100 text-muted-foreground transition-opacity" />
          </div>
        </div>
      </div>
    </div>
  );
}

interface ThemeColorPreviewProps {
  color: string;
  variableName: string;
}

function ThemeColorPreview({ variableName }: ThemeColorPreviewProps) {
  return (
    <div
      className="size-6 rounded border border-border/50 group-hover:scale-105 transition-transform"
      style={{ backgroundColor: `var(${variableName})` }}
      role="img"
      aria-label={`Color preview for ${variableName}`}
    />
  );
}

function ThemeModifiedIndicator({ count }: { count?: number }) {
  return (
    <div
      className="size-1.5 bg-primary rounded-full"
      title={count ? `${count} modified` : "Modified"}
      aria-label={count ? `${count} variables modified` : "Variable modified"}
    />
  );
}
