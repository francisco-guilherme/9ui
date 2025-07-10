import {
  buttonVariants,
  Icons,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@nui/core";

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
          >
            @borabalogluu
          </a>
        </span>
      </TooltipContent>
    </Tooltip>
  );
}
