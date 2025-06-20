import { Toggle, ToggleGroup } from "@9ui/ui";
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react";

export default function ToggleGroupDemo() {
  return (
    <ToggleGroup>
      <Toggle value="left">
        <AlignLeftIcon />
      </Toggle>
      <Toggle value="center">
        <AlignCenterIcon />
      </Toggle>
      <Toggle value="right">
        <AlignRightIcon />
      </Toggle>
    </ToggleGroup>
  );
}
