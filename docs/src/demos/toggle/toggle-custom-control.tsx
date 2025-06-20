import { Toggle } from "@9ui/ui";
import { PinIcon, PinOffIcon } from "lucide-react";
import { useState } from "react";

export default function ToggleCustomControl() {
  const [isPinned, setIsPinned] = useState(false);

  return (
    <Toggle aria-label="Pin" pressed={isPinned} onPressedChange={setIsPinned}>
      {isPinned ? <PinIcon /> : <PinOffIcon />}
    </Toggle>
  );
}
