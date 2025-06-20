import {
  Button,
  ColorInput,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui";

interface EditorDialogProps {
  open: boolean;
  onClose: () => void;
  editingVariable: {
    variable: any;
    groupIndex: number;
    variableIndex: number;
  } | null;
  onChange: (
    groupIndex: number,
    variableIndex: number,
    newValue: string,
  ) => void;
}

export function EditorDialog({
  open,
  onClose,
  editingVariable,
  onChange,
}: EditorDialogProps) {
  if (!editingVariable) return null;

  const { variable: currentVar, groupIndex, variableIndex } = editingVariable;

  const isModified = currentVar.value !== currentVar.originalValue;
  const displayName = currentVar.name.replace(/^--(?:color-)?/, "");

  const handleChange = (newValue: string) => {
    onChange(groupIndex, variableIndex, newValue);
  };

  const handleReset = () => {
    onChange(groupIndex, variableIndex, currentVar.originalValue);
  };

  const handleDialogChange = (isOpen: boolean) => {
    if (!isOpen) onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleDialogChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div
              className="size-5 rounded border border-border"
              style={{ backgroundColor: `var(${currentVar.name})` }}
            />
            Edit {displayName}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <ColorInput value={currentVar.value} onChange={handleChange} />

          <div className="flex justify-between pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              disabled={!isModified}
            >
              Reset
            </Button>
            <Button size="sm" onClick={onClose}>
              Done
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
