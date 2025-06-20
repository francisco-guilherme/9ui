import { CodeBlock } from "../code/code-block";
import { CodeBar } from "../code/code-bar";

interface ComponentAnatomyProps {
  content: string;
}

export const ComponentAnatomy = ({ content }: ComponentAnatomyProps) => {
  return (
    <div className="mt-4 overflow-hidden rounded-lg border">
      <CodeBar label="Anatomy" className="border-t-0" content={content} />
      <CodeBlock content={content} language="tsx">
        <pre className="overflow-auto p-4">
          <code className="text-xs font-medium">{content}</code>
        </pre>
      </CodeBlock>
    </div>
  );
};
