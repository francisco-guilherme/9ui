import { Badge, BadgeIndicator } from "@9ui/ui";

export default function BadgeInfo() {
  return (
    <div className="flex items-center gap-2">
      <Badge variant="info">Info</Badge>
      <Badge variant="outline">
        <BadgeIndicator variant="info" />
        Info
      </Badge>
    </div>
  );
}
