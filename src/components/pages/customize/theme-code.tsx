import { useEffect, useState } from "react"

import { CodeBar } from "@/components/code/code-bar"

import {
  getHighlighterSync,
  highlighter,
} from "@/lib/rehype/syntax-highlighting"

interface ThemeCodeProps {
  css: string
}

type NodeWithProperties = {
  properties?: Record<string, unknown>
}

export const ThemeCode = ({ css }: ThemeCodeProps) => {
  const [prettyCode, setPrettyCode] = useState("")
  const [ready, setReady] = useState(false)

  const codeToHtmlOptions = {
    lang: "css",
    themes: {
      dark: "github-dark-default",
      light: "github-light-default",
    },
    transformers: [
      {
        pre(node: NodeWithProperties) {
          node.properties ||= {}
          node.properties.style = "tab-size: 2"
        },
        code(node: NodeWithProperties) {
          node.properties ||= {}
          node.properties.style = "tab-size: 2"
        },
      },
    ],
  }

  useEffect(() => {
    const syncHighlighter = getHighlighterSync()

    const renderCode = (
      hl: NonNullable<ReturnType<typeof getHighlighterSync>>
    ) => {
      const html = hl.codeToHtml(css, codeToHtmlOptions)
      setPrettyCode(html)
      setReady(true)
    }

    if (syncHighlighter) {
      renderCode(syncHighlighter)
    } else {
      highlighter.then(renderCode)
    }
  }, [css])

  return (
    <div className="w-full overflow-hidden rounded-md border">
      <CodeBar label="globals.css" className="border-t-0" content={css} />
      <div className="max-h-[600px] overflow-auto p-4 text-sm">
        {ready ? (
          <div
            className="shiki"
            dangerouslySetInnerHTML={{ __html: prettyCode }}
          />
        ) : (
          <pre className="!p-0 bg-background">
            <code className="!text-xs !font-medium">{css}</code>
          </pre>
        )}
      </div>
    </div>
  )
}
