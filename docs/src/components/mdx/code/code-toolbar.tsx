import { cn } from "@9ui/ui";

import { CopyButton } from "./copy-button";

interface CodeToolbarProps {
  label?: string | React.ReactNode;
  content: string;
  className?: string;
  labelClassName?: string;
  copyButtonClassName?: string;
}

export const CodeToolbar = ({
  label,
  content,
  className,
  labelClassName,
  copyButtonClassName,
}: CodeToolbarProps) => {
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
