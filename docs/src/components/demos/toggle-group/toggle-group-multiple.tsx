import { Toggle, ToggleGroup } from "@9ui/ui";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

export default function ToggleGroupMultiple() {
  return (
    <ToggleGroup toggleMultiple>
      <Toggle value="bold">
        <BoldIcon />
      </Toggle>
      <Toggle value="italic">
        <ItalicIcon />
      </Toggle>
      <Toggle value="underline">
        <UnderlineIcon />
      </Toggle>
    </ToggleGroup>
  );
}
