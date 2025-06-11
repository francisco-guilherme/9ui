"use client"

import React from "react"

import { CodeBar } from "@/components/code-bar"

import {
	getHighlighterSync,
	highlighter,
} from "@/lib/rehype/syntax-highlighting"

interface ThemeCodeProps {
	css: string
}

export const ThemeCode = ({ css }: ThemeCodeProps) => {
	const [prettyCode, setPrettyCode] = React.useState("")
	const [isHighlighterReady, setIsHighlighterReady] = React.useState(false)

	React.useEffect(() => {
		const syncHighlighter = getHighlighterSync()
		if (syncHighlighter) {
			// Highlighter is already loaded
			setIsHighlighterReady(true)
			const html = syncHighlighter.codeToHtml(css, {
				lang: "css",
				themes: {
					dark: "github-dark-default",
					light: "github-light-default",
				},
				transformers: [
					{
						pre(node) {
							node.properties.style = "tab-size: 2"
						},
						code(node) {
							node.properties.style = "tab-size: 2"
						},
					},
				],
			})
			setPrettyCode(html)
		} else {
			// Wait for highlighter to load
			highlighter.then((h: any) => {
				setIsHighlighterReady(true)
				const html = h.codeToHtml(css, {
					lang: "css",
					themes: {
						dark: "github-dark-default",
						light: "github-light-default",
					},
					transformers: [
						{
							pre(node: any) {
								node.properties.style = "tab-size: 2"
							},
							code(node: any) {
								node.properties.style = "tab-size: 2"
							},
						},
					],
				})
				setPrettyCode(html)
			})
		}
	}, [css])

	return (
		<div className="w-full overflow-hidden rounded-md border">
			<CodeBar label="globals.css" className="border-t-0" content={css} />

			{isHighlighterReady ? (
				<div
					className="max-h-[600px] overflow-auto p-4 text-sm"
					dangerouslySetInnerHTML={{ __html: prettyCode }}
				/>
			) : (
				<div className="max-h-[600px] overflow-auto p-4 text-sm">
					<pre className="!p-0 bg-background">
						<code className="!text-xs !font-medium">{css}</code>
					</pre>
				</div>
			)}
		</div>
	)
}
