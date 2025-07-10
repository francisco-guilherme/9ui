import * as React from "react";
import { cn } from "@nui/core";

export const Step = ({ className, ...props }: React.ComponentProps<"h3">) => (
  <h3
    className={cn("step mt-8 font-semibold tracking-tight", className)}
    {...props}
  />
);

export const Steps = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className="steps mb-12 ml-4 border-l pl-8 [counter-reset:step]"
    {...props}
  />
);
