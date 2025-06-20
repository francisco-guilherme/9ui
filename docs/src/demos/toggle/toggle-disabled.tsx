import { Toggle } from "@9ui/ui";
import { PinIcon } from "lucide-react";

export default function ToggleDisabled() {
  return (
    <Toggle aria-label="Pin" disabled>
      <PinIcon />
    </Toggle>
  );
}
