import { Button, toast } from "@9ui/ui";

export default function SonnerDemo() {
  return (
    <Button
      onClick={() =>
        toast("Your request has been sent", {
          description: "We'll get back to you as soon as possible",
        })
      }
    >
      Show Toast
    </Button>
  );
}
