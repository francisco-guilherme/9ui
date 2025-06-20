import { AspectRatio } from "@9ui/ui";

export default function AspectRatioDemo() {
  return (
    <AspectRatio
      ratio={16 / 9}
      className="rounded-lg border bg-card text-card-foreground"
    >
      <div className="flex size-full items-center justify-center font-medium">
        Content
      </div>
    </AspectRatio>
  );
}
