"use client"

import React from "react"

import { CodeBar } from "@/components/code-bar"
import { Tab, TabContent, Tabs, TabsList } from "@/components/ui/tabs"

import {
	getHighlighterSync,
	highlighter,
} from "@/lib/rehype/syntax-highlighting"

interface CommandBlockProps {
	npmCommand: string
	yarnCommand: string
	pnpmCommand: string
	bunCommand: string
}

export const CommandBlock = ({
	npmCommand,
	yarnCommand,
	pnpmCommand,
	bunCommand,
}: CommandBlockProps) => {
	const [activeTab, setActiveTab] = React.useState("npm")
	const [prettyCode, setPrettyCode] = React.useState("")
	const [isHighlighterReady, setIsHighlighterReady] = React.useState(false)

	const command = React.useMemo(() => {
		return activeTab === "npm"
			? npmCommand
			: activeTab === "yarn"
				? yarnCommand
				: activeTab === "pnpm"
					? pnpmCommand
					: bunCommand
	}, [activeTab, npmCommand, yarnCommand, pnpmCommand, bunCommand])

	React.useEffect(() => {
		const syncHighlighter = getHighlighterSync()
		if (syncHighlighter) {
			// Highlighter is already loaded
			setIsHighlighterReady(true)
			const html = syncHighlighter.codeToHtml(command, {
				lang: "bash",
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
		} else {
			// Wait for highlighter to load
			highlighter.then((h: any) => {
				setIsHighlighterReady(true)
				const html = h.codeToHtml(command, {
					lang: "bash",
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
	}, [command])

	return (
		<Tabs
			className="mt-4 w-full overflow-hidden rounded-md border"
			variant="underline"
			value={activeTab}
			onValueChange={setActiveTab}
		>
			<CodeBar
				className="border-t-0"
				label={
					<TabsList className="flex h-8 items-center justify-between border-none px-2 text-xs">
						<div className="z-10 flex gap-1">
							<Tab className="w-fit px-4" value="npm">
								npm
							</Tab>
							<Tab className="w-fit px-4" value="yarn">
								yarn
							</Tab>
							<Tab className="w-fit px-4" value="pnpm">
								pnpm
							</Tab>
							<Tab className="w-fit px-4" value="bun">
								bun
							</Tab>
						</div>
					</TabsList>
				}
				content={command}
			/>

			<TabContent className="mt-0 border-none" value={activeTab}>
				{isHighlighterReady ? (
					<div
						className="command-block"
						dangerouslySetInnerHTML={{ __html: prettyCode }}
					/>
				) : (
					<div className="command-block">
						<pre className="!p-0 bg-background">
							<code className="!py-0.5 !text-xs !font-medium">{command}</code>
						</pre>
					</div>
				)}
			</TabContent>
		</Tabs>
	)
}
