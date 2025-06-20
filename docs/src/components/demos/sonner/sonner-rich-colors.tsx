import { Button, toast } from "@9ui/ui";

export default function SonnerRichColorsDemo() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Button
        onClick={() =>
          toast.success("Success", { richColors: true, duration: 60000 })
        }
      >
        success
      </Button>
      <Button
        onClick={() =>
          toast.error("Error", { richColors: true, duration: 60000 })
        }
      >
        error
      </Button>
      <Button
        onClick={() =>
          toast.warning("Warning", { richColors: true, duration: 60000 })
        }
      >
        warning
      </Button>
      <Button
        onClick={() =>
          toast.info("Info", { richColors: true, duration: 60000 })
        }
      >
        info
      </Button>
    </div>
  );
}
