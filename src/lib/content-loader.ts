import { contentRegistry } from "@/registry/contents"

export interface ContentData {
  Component: React.ComponentType
  source: string
  slug: string
  metadata: {
    title: string
    description: string
  }
  breadcrumbs: Array<{ label: string; path: string }>
  tableOfContents: Array<{ value: string; url: string; depth: number }>
}

export async function loadContent(slug: string): Promise<ContentData | null> {
  // Check if content exists in registry
  const entry = contentRegistry[slug]

  if (!entry) {
    return null
  }

  try {
    // Dynamic import of MDX content
    const contentModule = await import(
      /* @vite-ignore */ `../content/${entry.path}`
    )

    return {
      Component: contentModule.default,
      source: "", // Raw source not available in Vite
      slug,
      metadata: entry.meta,
      breadcrumbs: entry.breadcrumbs,
      tableOfContents: entry.tableOfContents || [],
    }
  } catch (error) {
    console.error("Error loading content:", error)
    return null
  }
}

export async function loadContentByPath(
  path: string
): Promise<ContentData | null> {
  // Convert path to slug format
  const slug = path.replace(/^\/docs\//, "").replace(/\/$/, "")
  return loadContent(slug)
}
