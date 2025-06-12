import { useEffect, useState } from "react"
import * as React from "react"
import { Link, Navigate, useParams } from "react-router-dom"

import { TableOfContents } from "@/components/toc"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumbs"

import { siteConfig } from "@/config/site"
import { absoluteUrl } from "@/lib/url"
import { loadContent, ContentData } from "@/lib/content-loader"

const DocsPage = () => {
  const params = useParams()
  const [contentData, setContentData] = useState<ContentData | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const loadDocContent = async () => {
      setLoading(true)
      setNotFound(false)

      // Get slug from params
      const slug = params["*"] || ""
      
      // Handle redirects for common paths
      if (slug === "" || slug === "getting-started") {
        window.location.replace("/docs/getting-started/introduction")
        return
      }
      
      if (slug === "components") {
        window.location.replace("/docs/components/accordion")
        return
      }

      const data = await loadContent(slug)

      if (!data) {
        setNotFound(true)
        setLoading(false)
        return
      }

      setContentData(data)

      // Set page metadata
      document.title = `${data.metadata.title} - ${siteConfig.name}`

      // Set meta description
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      )
      if (metaDescription) {
        metaDescription.setAttribute("content", data.metadata.description)
      } else {
        const meta = document.createElement("meta")
        meta.name = "description"
        meta.content = data.metadata.description
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

      setMetaTag("og:title", data.metadata.title)
      setMetaTag("og:description", data.metadata.description)
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
      setTwitterTag("twitter:title", data.metadata.title)
      setTwitterTag("twitter:description", data.metadata.description)
      setTwitterTag("twitter:image", siteConfig.ogImage)
      setTwitterTag("twitter:creator", "@borabalogluu")

      setLoading(false)
    }

    loadDocContent()
  }, [params])

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

  if (notFound || !contentData) {
    return <Navigate to="/404" replace />
  }

  return (
    <main className="relative xl:grid xl:grid-cols-[1fr_240px] xl:gap-10">
      <div className="w-full xl:mx-auto xl:max-w-2xl">
        <Breadcrumb className="mb-2">
          <BreadcrumbList>
            {contentData.breadcrumbs.map((breadcrumb, index) => (
              <React.Fragment key={breadcrumb.path}>
                <BreadcrumbItem
                  active={index === contentData.breadcrumbs.length - 1}
                >
                  <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
                </BreadcrumbItem>
                {index !== contentData.breadcrumbs.length - 1 && (
                  <BreadcrumbSeparator />
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        <contentData.Component />
      </div>
      {contentData.tableOfContents.length > 0 && (
        <TableOfContents items={contentData.tableOfContents} />
      )}
    </main>
  )
}

export default DocsPage
