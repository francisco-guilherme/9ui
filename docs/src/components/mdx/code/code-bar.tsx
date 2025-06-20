import * as React from "react";

import { cn } from "@/lib/utils";

import { CopyButton } from "./copy-button";

interface CodeBarProps {
  label?: string | React.ReactNode;
  content: string;
  className?: string;
  labelClassName?: string;
  copyButtonClassName?: string;
}

export const CodeBar = ({
  label,
  content,
  className,
  labelClassName,
  copyButtonClassName,
}: CodeBarProps) => {
  return (
    <div
      className={cn(
        "flex h-8 items-center justify-between border-y bg-secondary px-2",
        className,
      )}
    >
      {typeof label === "string" ? (
        <span className={cn("px-2 text-xs font-medium", labelClassName)}>
          {label}
        </span>
      ) : (
        label
      )}

      <CopyButton content={content} className={copyButtonClassName} />
    </div>
  );
};
