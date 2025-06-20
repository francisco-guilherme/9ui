import { Button } from "@9ui/ui";
import { Loader2Icon } from "lucide-react";

export default function ButtonLoading() {
  return (
    <Button className="gap-2" disabled>
      <div className="animate-spin">
        <Loader2Icon size={16} />
      </div>
      Loading
    </Button>
  );
}
