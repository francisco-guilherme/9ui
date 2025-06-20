import { Badge, BadgeIndicator } from "@9ui/ui";

export default function BadgeWarning() {
  return (
    <div className="flex items-center gap-2">
      <Badge variant="warning">Warning</Badge>
      <Badge variant="outline">
        <BadgeIndicator variant="warning" />
        Warning
      </Badge>
    </div>
  );
}
