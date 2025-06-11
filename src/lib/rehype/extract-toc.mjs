import { toString } from "hast-util-to-string"
import { headingRank } from "hast-util-heading-rank"
import { visit } from "unist-util-visit"

// Simple slug generation function that matches rehype-slug behavior
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

/**
 * Custom rehype plugin to extract table of contents and export it as a named export
 * This makes the TOC data available in Vite/MDX modules
 */
export function rehypeExtractTocExport() {
  return (tree, file) => {
    const toc = []

    // Extract headings from the tree
    visit(tree, "element", (node) => {
      const rank = headingRank(node)
      if (rank && rank >= 2 && rank <= 6) {
        const text = toString(node)
        if (text) {
          // Generate URL-friendly anchor using the same logic as rehype-slug
          const slug = slugify(text)
          const url = "#" + slug

          toc.push({
            value: text,
            url: url,
            depth: rank
          })
        }
      }
    })

    // Add the TOC as a named export to the MDX module
    if (toc.length > 0) {
      tree.children.push({
        type: "mdxjsEsm",
        value: `export const tableOfContents = ${JSON.stringify(toc)};`
      })
    }

    // Store in file data as well for compatibility
    file.data.toc = toc
  }
}
