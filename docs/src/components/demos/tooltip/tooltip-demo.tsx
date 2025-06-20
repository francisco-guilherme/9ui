import {
  buttonVariants,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@9ui/ui";

import { Icons } from "@/components/common/icons";

export default function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger
        className={buttonVariants({ variant: "outline", size: "icon" })}
      >
        <Icons.twitter />
      </TooltipTrigger>
      <TooltipContent>
        <span>
          Follow me{" "}
          <a
            className="font-medium"
            href="https://x.com/borabalogluu"
            target="_blank"
            rel="noreferrer"
          >
            @borabalogluu
          </a>
        </span>
      </TooltipContent>
    </Tooltip>
  );
}
