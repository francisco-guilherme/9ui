import { cn } from "@9ui/ui";

import { useComponentSource } from "@/hooks/useComponentSource";

import { LoadingState } from "../../common/loading-state";
import { CodeBlock } from "../code/code-block";
import { CodeToolbar } from "../code/code-toolbar";

export interface PreviewBlockProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  mode?: "preview" | "source";
  children?: React.ReactNode;
}

export const PreviewBlock = ({
  name,
  mode = "preview",
  className,
  children,
  ...rest
}: PreviewBlockProps) => {
  const { DemoComponent, sourceCode, isLoading, loadError } =
    useComponentSource(name, mode);

  const containerClass = cn(
    "overflow-hidden rounded-lg border",
    mode === "preview" ? "mt-8" : "mt-4",
    className,
  );

  const toolbar = (
    <CodeToolbar
      label={`${name}.tsx`}
      className={mode === "source" ? "border-t-0" : ""}
      content={sourceCode ?? ""}
    />
  );

  if (isLoading || loadError) {
    return (
      <div className={containerClass} {...rest}>
        {toolbar}
        <LoadingState mode={mode} error={loadError ?? undefined} />
      </div>
    );
  }

  return (
    <div className={containerClass} {...rest}>
      {mode === "preview" && DemoComponent && (
        <div className="flex min-h-[200px] w-full items-center justify-center p-10">
          <DemoComponent />
        </div>
      )}

      {toolbar}

      {sourceCode &&
        (mode === "preview" ? (
          <div className="[&_pre]:!max-h-[300px]">
            <CodeBlock code={sourceCode} />
          </div>
        ) : (
          <CodeBlock code={sourceCode} />
        ))}

      {children && <div className="[&_pre]:!max-h-[300px]">{children}</div>}
    </div>
  );
};
