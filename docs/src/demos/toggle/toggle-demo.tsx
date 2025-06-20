import { Toggle } from "@9ui/ui";
import { PinIcon } from "lucide-react";

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Pin">
      <PinIcon />
    </Toggle>
  );
}
