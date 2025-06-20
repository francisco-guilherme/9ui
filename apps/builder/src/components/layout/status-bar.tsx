import { HelpCircle, Plus, Settings } from "lucide-react";
import { Button, Progress } from "@nui/core";

export function StatusBar() {
  return (
    <div className="h-10 border-t bg-background flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <Progress value={80} className="w-32" />
        <span className="text-xs text-muted-foreground">
          4/5 Components left
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">100%</span>
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <Settings className="h-3 w-3" />
        </Button>
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <HelpCircle className="h-3 w-3" />
        </Button>
        <Button size="sm" className="h-6 px-2">
          <Plus className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
}
