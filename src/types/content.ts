export interface ContentMeta {
  title: string
  description: string
}

export interface ContentEntry {
  /** Type of the content file (direct file or index file) */
  type: "file" | "index"
  /** Relative path to the content file */
  path: string
  /** Metadata extracted from the content */
  meta: ContentMeta
  /** URL path for this content */
  urlPath: string
  /** Breadcrumbs for this content */
  breadcrumbs: {
    label: string
    path: string
  }[]
  /** Table of contents extracted from the content */
  tableOfContents: {
    value: string
    url: string
    depth: number
  }[]
}

export type ContentRegistry = Record<string, ContentEntry>
