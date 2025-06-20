import { cn } from "@9ui/ui";
import * as React from "react";

import { CodeToolbar } from "./code-toolbar";

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code?: string;
  content?: string;
  title?: string;
  language?: string;
  children?: React.ReactNode;
}

export const CodeBlock = ({
  code,
  content,
  title,
  language,
  children,
  className,
  ...props
}: CodeBlockProps) => {
  const displayContent = children ?? code ?? "";
  const containerClass = cn(
    "mt-4 overflow-hidden",
    title && "rounded-lg border",
    className,
  );

  return (
    <div className={containerClass} {...props}>
      {title && (
        <CodeToolbar
          label={title}
          content={content ?? code ?? ""}
          className="border-t-0"
        />
      )}
      <pre className="p-4 overflow-auto text-xs font-mono">
        <code className={cn("font-medium", language && `language-${language}`)}>
          {displayContent}
        </code>
      </pre>
    </div>
  );
};
