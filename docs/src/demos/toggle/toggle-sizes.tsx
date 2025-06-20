import { Toggle } from "@9ui/ui";
import { PinIcon } from "lucide-react";

export default function ToggleSizes() {
  return (
    <div className="flex items-center gap-4">
      <Toggle aria-label="Pin" size="sm">
        <PinIcon />
      </Toggle>
      <Toggle aria-label="Pin" size="md">
        <PinIcon />
      </Toggle>
      <Toggle aria-label="Pin" size="lg">
        <PinIcon />
      </Toggle>
    </div>
  );
}
