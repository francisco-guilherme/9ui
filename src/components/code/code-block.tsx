import { CodeBar } from "./code-bar"

interface CodeBlockProps {
  content: string
  topBar?: {
    label: string
  }
}

export const CodeBlock = ({ content, topBar, ...props }: CodeBlockProps) => {
  return (
    <div className={"mt-4 overflow-hidden rounded-lg border"}>
      {topBar && (
        <CodeBar
          label={topBar.label}
          className="border-t-0"
          content={content}
        />
      )}
      <pre {...props} />
    </div>
  )
}
