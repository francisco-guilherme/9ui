import { Badge, BadgeIndicator } from "@9ui/ui";

export default function BadgeDanger() {
  return (
    <div className="flex items-center gap-2">
      <Badge variant="danger">Danger</Badge>
      <Badge variant="outline">
        <BadgeIndicator variant="danger" />
        Danger
      </Badge>
    </div>
  );
}
