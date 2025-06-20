import { Button, cn } from "@9ui/ui";
import { CheckIcon, CopyIcon } from "lucide-react";
import { ComponentPropsWithoutRef, useState } from "react";

interface CopyButtonProps extends ComponentPropsWithoutRef<typeof Button> {
  content: string;
}

export const CopyButton = ({
  content,
  className,
  ...props
}: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    await navigator.clipboard.writeText(content!);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      onClick={onCopy}
      variant="ghost"
      size="icon-sm"
      className={cn("size-6", className)}
      {...props}
    >
      {copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
    </Button>
  );
};
