import { Avatar, AvatarFallback, AvatarImage } from "@9ui/ui";

export default function AvatarDemo() {
  return (
    <Avatar size="md">
      <AvatarImage src="/avatars/bora.png" alt="User" />
      <AvatarFallback>BB</AvatarFallback>
    </Avatar>
  );
}
