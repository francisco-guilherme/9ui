import { Textarea } from "@9ui/ui";

export default function TextareaError() {
  return (
    <Textarea
      className="w-80"
      placeholder="Enter your message..."
      aria-invalid
    />
  );
}
