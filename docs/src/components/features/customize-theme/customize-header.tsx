import { Button } from "@9ui/ui";
import { CopyIcon, RotateCcwIcon } from "lucide-react";

export const CustomizeHeader = ({
  handleReset,
  handleCopy,
}: {
  handleReset: () => void;
  handleCopy: () => void;
}) => (
  <div className="flex justify-between gap-2">
    <div>
      <span className="font-semibold">Customize</span>
      <p className="text-sm text-muted-foreground">
        Make it the way you like it.
      </p>
    </div>
    <div className="flex gap-2">
      <Button variant="outline" size="icon-sm" onClick={handleCopy}>
        <CopyIcon className="size-4" />
      </Button>
      <Button variant="outline" size="icon-sm" onClick={handleReset}>
        <RotateCcwIcon className="size-4" />
      </Button>
    </div>
  </div>
);
