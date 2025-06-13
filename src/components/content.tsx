import { useEffect, useState } from "react"
import * as React from "react"
import { Link, Navigate, useParams } from "react-router-dom"

import { siteConfig } from "@/config/site"

import { ContentData, loadContent } from "@/lib/content-loader"

import { TableOfContents } from "./toc"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumbs"

interface ContentProps {
  section: string
  defaultRedirect: string
}

export const Content = ({ section, defaultRedirect }: ContentProps) => {
  const params = useParams()
  const [contentData, setContentData] = useState<ContentData | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const loadContentData = async () => {
      setLoading(true)
      setNotFound(false)

      // Get slug from params
      const rawSlug = params["*"] || ""

      // Handle redirects for common paths
      if (rawSlug === section) {
        window.location.replace(defaultRedirect)
        return
      }

      // Handle cross-section redirects
      if (rawSlug === "docs" && section !== "docs") {
        window.location.replace("/docs/introduction")
        return
      }
      if (rawSlug === "components" && section !== "components") {
        window.location.replace("/components/accordion")
        return
      }

      // Construct the full slug for content registry lookup
      const slug = `${section}/${rawSlug}`

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
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute("content", data.metadata.description)
      } else {
        const meta = document.createElement("meta")
        meta.name = "description"
        meta.content = data.metadata.description
        document.head.appendChild(meta)
      }

      setLoading(false)
    }

    loadContentData()
  }, [params, section, defaultRedirect])

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
    return <Navigate to="/not-found" replace />
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
