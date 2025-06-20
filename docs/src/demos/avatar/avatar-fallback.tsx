import { Avatar, AvatarFallback } from "@9ui/ui";

export default function AvatarWithFallback() {
  return (
    <Avatar size="md">
      <AvatarFallback>BB</AvatarFallback>
    </Avatar>
  );
}
