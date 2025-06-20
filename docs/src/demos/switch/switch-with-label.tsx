import { Label, Switch } from "@9ui/ui";

export default function SwitchWithLabel() {
  return (
    <div className="flex items-center gap-2">
      <Switch id="enable-notifications" />
      <Label htmlFor="enable-notifications">Enable notifications</Label>
    </div>
  );
}
