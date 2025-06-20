import { CodeBar } from "@/components/mdx/code/code-bar";

interface ThemeCodeProps {
  css: string;
}

export const ThemeCode = ({ css }: ThemeCodeProps) => {
  return (
    <div className="w-full overflow-hidden rounded-md border">
      <CodeBar label="globals.css" className="border-t-0" content={css} />
      <div className="max-h-[600px] overflow-auto p-4 text-sm">
        <pre className="!p-0 bg-background">
          <code className="!text-xs !font-medium">{css}</code>
        </pre>
      </div>
    </div>
  );
};
