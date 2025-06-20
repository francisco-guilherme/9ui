import { Checkbox, Label } from "@9ui/ui";

export default function CheckboxWithLabel() {
  return (
    <Label className="flex items-center gap-2">
      <Checkbox />
      Accept
    </Label>
  );
}
