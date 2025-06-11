import rehypePrettyCode from "rehype-pretty-code"
import { createHighlighter } from "shiki"
import { visitParents } from "unist-util-visit-parents"

export function rehypeInlineCode() {
	return (tree) => {
		visitParents(tree, (node, ancestors) => {
			const hasParentPre = ancestors.find(({ tagName }) => tagName === "pre")

			if (node.tagName !== "code" || hasParentPre) {
				return
			}

			node.properties ??= {}
			node.properties["data-inline"] = ""

			if (ancestors.find(({ tagName }) => tagName === "span")) {
				const span = ancestors.slice(-1)[0]
				const spanParent = ancestors.slice(-2)[0]
				const spanIndex = spanParent.children.indexOf(span)
				spanParent.children[spanIndex] = node
				node.children = node.children[0].children

				delete node.properties.style
				for (const child of node.children) {
					delete child.properties.style
				}
			}

			if (ancestors.find(({ tagName }) => tagName === "a")) {
				for (const child of node.children) {
					delete child.properties.style
				}
			}
		})
	}
}

// Initialize highlighter lazily to avoid top-level await
let highlighterPromise = null
let highlighterInstance = null

function getHighlighter() {
	if (!highlighterPromise) {
		highlighterPromise = createHighlighter({
			themes: ["github-dark-default", "github-light-default"],
			langs: ["tsx", "bash", "css", "js", "json", "jsx", "ts"],
		}).then(h => {
			highlighterInstance = h
			return h
		})
	}
	return highlighterPromise
}

// Export for compatibility - this will be a Promise
export const highlighter = getHighlighter()

// Export a function to get the highlighter instance synchronously (if available)
export function getHighlighterSync() {
	return highlighterInstance
}

/** @type {import('unified').PluggableList} */
export const rehypeSyntaxHighlighting = [
	[
		rehypePrettyCode,
		{
			getHighlighter: getHighlighter,
			theme: {
				light: "github-light-default",
				dark: "github-dark-default",
			},
			defaultLang: "tsx",
		},
	],
	rehypeInlineCode,
]
