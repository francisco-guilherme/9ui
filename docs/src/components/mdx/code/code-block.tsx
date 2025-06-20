import * as React from "react";

import { cn } from "@/lib/utils";

import { CodeBar } from "./code-bar";

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  title?: string;
  language?: string;
  children: React.ReactNode;
}

export const CodeBlock = ({
  content,
  title,
  language: _language,
  children,
  className,
  ...props
}: CodeBlockProps) => {
  return (
    <div
      className={cn("mt-4 overflow-hidden rounded-lg border", className)}
      {...props}
    >
      {title && (
        <CodeBar label={title} className="border-t-0" content={content} />
      )}
      {children}
    </div>
  );
};
