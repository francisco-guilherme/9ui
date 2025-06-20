import { ChevronDown, Edit3 } from "lucide-react";
import {
  cn,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@nui/ui";

interface EditorGroupProps {
  groups: Array<{
    category: string;
    variables: Array<{
      name: string;
      value: string;
      originalValue?: string;
      isModified: boolean;
    }>;
  }>;
  expanded: Set<string>;
  onToggleGroup: (category: string) => void;
  onEdit: (info: {
    variable: any;
    groupIndex: number;
    variableIndex: number;
  }) => void;
}

export function EditorGroup({
  groups,
  expanded,
  onToggleGroup,
  onEdit,
}: EditorGroupProps) {
  return (
    <div className="space-y-2">
      {groups.map((group, groupIndex) => (
        <div key={group.category}>
          <Collapsible
            open={expanded.has(group.category)}
            onOpenChange={() => onToggleGroup(group.category)}
          >
            <CollapsibleTrigger className="w-full flex items-center justify-between p-2 text-left border border-border/50 hover:bg-accent/50 rounded-md transition-colors text-xs font-medium">
              <div className="flex items-center gap-2">
                <span>{group.category}</span>
                {group.variables.some((v) => v.isModified) && (
                  <div className="size-1.5 bg-primary rounded-full" />
                )}
              </div>
              <ChevronDown
                className={cn(
                  "size-3 transition-transform",
                  expanded.has(group.category) && "rotate-180",
                )}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1 pt-2">
              <div className="grid grid-cols-2 gap-2">
                {group.variables.map((variable, variableIndex) => (
                  <div
                    key={variable.name}
                    className="relative group cursor-pointer"
                    onClick={() =>
                      onEdit({ variable, groupIndex, variableIndex })
                    }
                  >
                    <div className="p-2 border border-border/30 rounded hover:border-border/60 transition-colors">
                      <div className="flex items-center gap-2">
                        <div
                          className="size-6 rounded border border-border/50 group-hover:scale-105 transition-transform"
                          style={{ backgroundColor: `var(${variable.name})` }}
                        />
                        <span className="text-xs font-medium flex-1 truncate">
                          {variable.name
                            .replace("--color-", "")
                            .replace("--", "")}
                        </span>
                        <div className="flex gap-1">
                          {variable.isModified && (
                            <div className="size-1.5 bg-primary rounded-full" />
                          )}
                          <Edit3 className="size-3 opacity-0 group-hover:opacity-100 text-muted-foreground transition-opacity" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      ))}
    </div>
  );
}
