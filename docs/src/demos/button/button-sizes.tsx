import { Button } from "@9ui/ui";

export default function ButtonSizes() {
  return (
    <div className="flex flex-row items-center gap-2">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}
