import { useEffect, useState } from "react"
import * as React from "react"
import { Link, Navigate, useLocation } from "react-router-dom"

import { TableOfContents } from "@/components/toc"
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumbs"

import { siteConfig } from "@/config/site"

// import { getTableOfContents } from "@/lib/toc" // Not used in Vite version
import { absoluteUrl } from "@/lib/url"

import { contentRegistry } from "@/registry/contents"

interface DocData {
	Doc: React.ComponentType
	source: string
	slug: string
	metadata: {
		title: string
		description: string
	}
	breadcrumbs: Array<{ label: string; path: string }>
}

const DocPage = () => {
	const location = useLocation()
	const [docData, setDocData] = useState<DocData | null>(null)
	const [toc, setToc] = useState<
		Array<{ id: string; title: string; level: number }>
	>([])
	const [loading, setLoading] = useState(true)
	const [notFound, setNotFound] = useState(false)

	useEffect(() => {
		const loadDoc = async () => {
			setLoading(true)
			setNotFound(false)

			// Extract slug from pathname, removing /docs/ prefix
			const slug = location.pathname.replace(/^\/docs\//, "")

			const entry = contentRegistry[slug]

			if (!entry) {
				setNotFound(true)
				setLoading(false)
				return
			}

			try {
				// Dynamic import of MDX content
				const docModule = await import(
					/* @vite-ignore */ `../../content/${entry.path}`
				)

				// Extract TOC from the MDX module if available
				const tocData = docModule.tableOfContents || []

				const docData: DocData = {
					Doc: docModule.default,
					source: "", // Raw source not available in Vite
					slug,
					metadata: entry.meta,
					breadcrumbs: entry.breadcrumbs,
				}

				setDocData(docData)

				// Set TOC data
				setToc(tocData)

				// Set page metadata
				document.title = `${entry.meta.title} - ${siteConfig.name}`

				// Set meta description
				const metaDescription = document.querySelector(
					'meta[name="description"]'
				)
				if (metaDescription) {
					metaDescription.setAttribute("content", entry.meta.description)
				} else {
					const meta = document.createElement("meta")
					meta.name = "description"
					meta.content = entry.meta.description
					document.head.appendChild(meta)
				}

				// Set Open Graph meta tags
				const setMetaTag = (property: string, content: string) => {
					let meta = document.querySelector(`meta[property="${property}"]`)
					if (!meta) {
						meta = document.createElement("meta")
						meta.setAttribute("property", property)
						document.head.appendChild(meta)
					}
					meta.setAttribute("content", content)
				}

				setMetaTag("og:title", entry.meta.title)
				setMetaTag("og:description", entry.meta.description)
				setMetaTag("og:type", "article")
				setMetaTag("og:url", absoluteUrl("docs", slug))
				setMetaTag("og:image", siteConfig.ogImage)
				setMetaTag("og:image:width", "1200")
				setMetaTag("og:image:height", "630")
				setMetaTag("og:image:alt", siteConfig.name)

				// Set Twitter meta tags
				const setTwitterTag = (name: string, content: string) => {
					let meta = document.querySelector(`meta[name="${name}"]`)
					if (!meta) {
						meta = document.createElement("meta")
						meta.setAttribute("name", name)
						document.head.appendChild(meta)
					}
					meta.setAttribute("content", content)
				}

				setTwitterTag("twitter:card", "summary_large_image")
				setTwitterTag("twitter:title", entry.meta.title)
				setTwitterTag("twitter:description", entry.meta.description)
				setTwitterTag("twitter:image", siteConfig.ogImage)
				setTwitterTag("twitter:creator", "@borabalogluu")
			} catch (error) {
				console.error("Error loading doc:", error)
				setNotFound(true)
			} finally {
				setLoading(false)
			}
		}

		loadDoc()
	}, [location.pathname])

	if (loading) {
		return (
			<div className="relative xl:grid xl:grid-cols-[1fr_240px] xl:gap-10">
				<div className="w-full xl:mx-auto xl:max-w-2xl">
					<div className="animate-pulse">
						<div className="h-4 bg-muted rounded w-1/3 mb-4"></div>
						<div className="h-8 bg-muted rounded w-2/3 mb-4"></div>
						<div className="space-y-2">
							<div className="h-4 bg-muted rounded"></div>
							<div className="h-4 bg-muted rounded w-5/6"></div>
							<div className="h-4 bg-muted rounded w-4/6"></div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	if (notFound || !docData) {
		return <Navigate to="/404" replace />
	}

	return (
		<main className="relative xl:grid xl:grid-cols-[1fr_240px] xl:gap-10">
			<div className="w-full xl:mx-auto xl:max-w-2xl">
				<Breadcrumb className="mb-2">
					<BreadcrumbList>
						{docData.breadcrumbs.map((breadcrumb, index) => (
							<React.Fragment key={breadcrumb.path}>
								<BreadcrumbItem
									active={index === docData.breadcrumbs.length - 1}
								>
									<Link to={breadcrumb.path}>{breadcrumb.label}</Link>
								</BreadcrumbItem>
								{index !== docData.breadcrumbs.length - 1 && (
									<BreadcrumbSeparator />
								)}
							</React.Fragment>
						))}
					</BreadcrumbList>
				</Breadcrumb>

				<docData.Doc />
			</div>
			{toc.length > 0 && <TableOfContents items={toc} />}
		</main>
	)
}

export default DocPage
