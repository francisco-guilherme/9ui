import { Button } from "@9ui/ui";
import * as React from "react";

import { cn } from "@/lib/utils";

import { CodeBar } from "../code/code-bar";

interface ComponentSourceProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  __source__: string;
  children?: React.ReactNode;
}

export const ComponentSource: React.FC<ComponentSourceProps> = ({
  name,
  __source__,
  children,
  className,
  ...rest
}) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div
      className={cn("mt-4 overflow-hidden rounded-lg border", className)}
      {...rest}
    >
      <CodeBar
        label={`${name}.tsx`}
        className="border-t-0"
        content={__source__}
      />

      <div className="relative">
        <div
          className={cn(
            "transition-[max-height] duration-300 ease-in-out overflow-hidden",
            expanded ? "max-h-[1000px]" : "max-h-32",
          )}
        >
          <div
            className={cn(
              "[&_pre]:!pb-16 [&_pre]:max-h-[600px]",
              expanded ? "[&>pre]:overflow-auto" : "[&>pre]:overflow-hidden",
            )}
          >
            {children}
          </div>
        </div>

        {!expanded && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-white via-white/80 to-transparent" />
        )}

        <div className="relative z-20 flex justify-center pb-6 pt-4">
          <Button
            variant="default"
            size="sm"
            aria-expanded={expanded}
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? "Hide code" : "Show code"}
          </Button>
        </div>
      </div>
    </div>
  );
};
