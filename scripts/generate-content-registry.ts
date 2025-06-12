import { readFile, writeFile } from "fs/promises"
import { join, relative } from "path"
import * as changeCase from "change-case"
import { glob } from "glob"

import { getMetadata } from "@/lib/metadata"
import { getTableOfContents } from "@/lib/toc"

interface ContentFile {
  source: string
  path: string
  meta: {
    title: string
    description: string
  }
  urlPath: string
  breadcrumbs: Array<{ label: string; path: string }>
  tableOfContents: Array<{ value: string; url: string; depth: number }>
}

const CONTENT_DIR = join(process.cwd(), "src/content")
const OUTPUT_PATH = join(process.cwd(), "src/__registry__/contents.tsx")

async function findContentFiles(): Promise<ContentFile[]> {
  const files = await glob("**/*.mdx", {
    cwd: CONTENT_DIR,
    absolute: true,
  })

  // Sort files alphabetically before processing
  const sortedFiles = files.sort()

  const contentFiles: ContentFile[] = []

  // Process files sequentially
  for (const file of sortedFiles) {
    const source = await readFile(file, "utf-8")
    const relativePath = relative(CONTENT_DIR, file)
    const meta = await getMetadata(source)
    const tableOfContents = await getTableOfContents(source)

    // Convert file path to URL path
    let urlPath = relativePath.replace(/\.mdx$/, "")

    // Handle index files
    if (urlPath.endsWith("/index")) {
      urlPath = urlPath.replace(/\/index$/, "")
    }

    // Generate breadcrumbs
    const segments = urlPath.split("/")
    const breadcrumbs = segments.map((_, index) => {
      const path = segments.slice(0, index + 1).join("/")
      const label = segments[index] || "Home"
      return {
        label: changeCase.capitalCase(label),
        path: `/${path}`,
      }
    })

    contentFiles.push({
      source,
      path: relativePath,
      meta,
      urlPath,
      breadcrumbs,
      tableOfContents,
    })
  }

  return contentFiles
}

function generateRegistryCode(contents: ContentFile[]): string {
  const imports = [
    'import type { ContentRegistry } from "@/types/content"',
  ].join("\n")

  const registry = contents
    .map(
      ({ path, meta, urlPath, breadcrumbs, tableOfContents }) => `
  "${urlPath}": {
    type: ${JSON.stringify(path.endsWith("/index.mdx") ? "index" : "file")},
    path: ${JSON.stringify(path)},
    meta: ${JSON.stringify(meta)},
    urlPath: ${JSON.stringify(urlPath)},
    breadcrumbs: ${JSON.stringify(breadcrumbs)},
    tableOfContents: ${JSON.stringify(tableOfContents)}
  }`
    )
    .join(",")

  return `${imports}

export const contentRegistry: ContentRegistry = {${registry}
}
`
}

async function generateContentRegistry() {
  console.log("🔍 Finding content files...")
  const contents = await findContentFiles()

  console.log("📝 Generating registry code...")
  const registryCode = generateRegistryCode(contents)

  console.log("💾 Writing registry file...")
  await writeFile(OUTPUT_PATH, registryCode)

  console.log("✨ Content registry generated successfully!")
  console.log(`📊 Total content files: ${contents.length}`)
}

generateContentRegistry().catch((error) => {
  console.error("Failed to generate content registry:", error)
  process.exit(1)
})
