import { type ThemeVariable } from "../../../types/theme";
import { cn } from "../../../utils/cn";
import {
  Button,
  ColorInput,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui";

interface ThemeEditingVariable {
  variable: ThemeVariable;
  groupIndex: number;
  variableIndex: number;
}

export interface ThemeEditorDialogProps {
  open: boolean;
  onClose: () => void;
  editingVariable: ThemeEditingVariable | null;
  onChange: (
    groupIndex: number,
    variableIndex: number,
    newValue: string,
  ) => void;
  className?: string;
}

export function ThemeEditorDialog({
  open,
  onClose,
  editingVariable,
  onChange,
  className,
}: ThemeEditorDialogProps) {
  if (!editingVariable) return null;

  const { variable: currentVar, groupIndex, variableIndex } = editingVariable;
  const isModified = currentVar.value !== currentVar.originalValue!;
  const displayName = currentVar.name.replace(/^--(?:color-)?/, "");

  const handleChange = (newValue: string) => {
    onChange(groupIndex, variableIndex, newValue);
  };

  const handleReset = () => {
    onChange(groupIndex, variableIndex, currentVar.originalValue!);
  };

  const handleDialogChange = (isOpen: boolean) => {
    if (!isOpen) onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleDialogChange}>
      <DialogContent className={cn("sm:max-w-md", className)}>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ThemeColorPreview
              color={currentVar.value}
              variableName={currentVar.name}
            />
            Edit {displayName}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="color-input" className="text-sm font-medium">
              Color Value
            </label>
            <ColorInput
              value={currentVar.value}
              onChange={handleChange}
              aria-describedby="color-description"
            />
            <p id="color-description" className="text-xs text-muted-foreground">
              Enter a hex color, RGB value, or CSS color name
            </p>
          </div>

          <ThemeDialogActions
            onReset={handleReset}
            onClose={onClose}
            isModified={isModified}
            originalValue={currentVar.originalValue}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ThemeColorPreview({
  color,
  variableName,
}: {
  color: string;
  variableName: string;
}) {
  return (
    <div
      className="size-5 rounded border border-border"
      style={{ backgroundColor: `var(${variableName})` }}
      role="img"
      aria-label={`Current color for ${variableName}`}
    />
  );
}

function ThemeDialogActions({
  onReset,
  onClose,
  isModified,
  originalValue,
}: {
  onReset: () => void;
  onClose: () => void;
  isModified: boolean;
  originalValue?: string;
}) {
  return (
    <div className="flex justify-between pt-2">
      <Button
        variant="outline"
        size="sm"
        onClick={onReset}
        disabled={!isModified}
        title={
          originalValue
            ? `Reset to original value: ${originalValue}`
            : "Reset to original value"
        }
      >
        Reset
      </Button>
      <Button size="sm" onClick={onClose}>
        Done
      </Button>
    </div>
  );
}
