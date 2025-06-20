import { cn } from "@9ui/ui";
import * as React from "react";

export const Lists = {
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("mt-2 space-y-2 font-normal", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("mt-2 space-y-2 font-normal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("ml-2 list-inside list-disc", className)} {...props} />
  ),
};
