import { Button } from "@9ui/ui";
import { Loader2Icon, RefreshCwIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

import { CodeBar } from "../code/code-bar";

const demoModules = import.meta.glob("../../demos/**/*.tsx");
const demoSourceModules = import.meta.glob("../../demos/**/*.tsx", {
  query: "?raw",
});

const pathToDemoName = (path: string) =>
  path.split("/").pop()?.replace(".tsx", "") || "";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  showReload?: boolean;
  className?: string;
  __source__?: string;
  children?: React.ReactNode;
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  name,
  showReload = false,
  className,
  __source__ = "",
  children,
  ...rest
}) => {
  const [Component, setComponent] = React.useState<React.ComponentType | null>(
    null,
  );
  const [sourceCode, setSourceCode] = React.useState<string>("");
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    const loadDemo = async () => {
      setLoading(true);
      setError(null);

      const demoPath = Object.keys(demoModules).find(
        (p) => pathToDemoName(p) === name,
      );

      if (!demoPath) {
        setError(`Demo "${name}" not found`);
        setLoading(false);
        return;
      }

      try {
        const mod = await demoModules[demoPath]();
        setComponent(() => mod.default);

        if (demoSourceModules[demoPath]) {
          const raw = await demoSourceModules[demoPath]();
          const code = typeof raw === "string" ? raw : raw.default;
          setSourceCode(code.replace(/export default/g, "export"));
        }
      } catch (err) {
        console.error(err);
        setError(`Failed to load demo "${name}"`);
      } finally {
        setLoading(false);
      }
    };

    loadDemo();
  }, [name]);

  const code = sourceCode || __source__;

  return (
    <div
      className={cn("mt-8 overflow-hidden rounded-lg border", className)}
      {...rest}
    >
      <div className="relative flex min-h-[200px] items-center justify-center p-10">
        {showReload && (
          <Button
            variant="ghost"
            size="icon-sm"
            className="absolute right-2 top-2 size-6"
            onClick={() => setKey((k) => k + 1)}
            aria-label="Reload demo"
          >
            <RefreshCwIcon size={16} />
          </Button>
        )}

        {loading ? (
          <div className="flex animate-spin items-center justify-center">
            <Loader2Icon size={16} />
          </div>
        ) : error ? (
          <div className="text-sm text-red-500">{error}</div>
        ) : Component ? (
          <React.Suspense
            fallback={
              <div className="flex animate-spin items-center justify-center">
                <Loader2Icon size={16} />
              </div>
            }
          >
            <Component key={key} />
          </React.Suspense>
        ) : null}
      </div>

      <CodeBar label={`${name}.tsx`} content={code} />

      {code && (
        <div className="[&_pre]:!max-h-[300px] overflow-auto p-4">
          <pre>
            <code className="text-xs font-medium">{code}</code>
          </pre>
        </div>
      )}

      {children && <div className="[&_pre]:!max-h-[300px]">{children}</div>}
    </div>
  );
};
