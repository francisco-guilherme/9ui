import { cn } from "@nui/core";

import { useDemo } from "../../hooks/use-demo";
import { LoadingState } from "../ui/loading-state";
import { CodeBlock } from "./code-block";
import { CodeToolbar } from "./code-toolbar";

export interface CodePreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  children?: React.ReactNode;
}

export const CodePreview = ({
  name,
  className,
  children,
  ...rest
}: CodePreviewProps) => {
  const { Component, source, isLoading, error } = useDemo(name);

  const containerClass = cn(
    "overflow-hidden rounded-lg border mt-8",
    className,
  );

  const toolbar = <CodeToolbar label={`${name}.tsx`} content={source ?? ""} />;

  if (isLoading || error) {
    return (
      <div className={containerClass} {...rest}>
        {toolbar}

        {/* Preview area with fixed dimensions */}
        <div className="flex min-h-[200px] w-full items-center justify-center p-10">
          <LoadingState error={error ?? undefined} />
        </div>

        {/* Code block area with fixed height */}
        <div className="[&_pre]:!max-h-[300px]">
          <div className="min-h-[100px] flex items-center justify-center text-muted-foreground">
            {isLoading ? "Loading code..." : ""}
          </div>
        </div>

        {/* Children area placeholder */}
        {children && (
          <div className="[&_pre]:!max-h-[300px] min-h-[50px]">{children}</div>
        )}
      </div>
    );
  }

  return (
    <div className={containerClass} {...rest}>
      {/* Preview area - same dimensions as loading state */}
      {Component && (
        <div className="flex min-h-[200px] w-full items-center justify-center p-10">
          <Component />
        </div>
      )}

      {toolbar}

      {/* Code block area - same structure as loading state */}
      {source && (
        <div className="[&_pre]:!max-h-[300px]">
          <CodeBlock code={source} />
        </div>
      )}

      {/* Children area - same structure as loading state */}
      {children && <div className="[&_pre]:!max-h-[300px]">{children}</div>}
    </div>
  );
};
