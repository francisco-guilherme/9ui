import { CodeBar } from "../code/code-bar"
import { CodeBlock } from "../code/code-block"

interface ComponentAnatomyProps {
  content: string
}

export const ComponentAnatomy = ({ content }: ComponentAnatomyProps) => {
  return (
    <div className="mt-4 overflow-hidden rounded-lg border">
      <CodeBar label="Anatomy" className="border-t-0" content={content} />
      <CodeBlock content={content} />
    </div>
  )
}
