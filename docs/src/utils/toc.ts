import { TocItem } from "@/types";

/**
 * Extracts table of contents from DOM elements
 */
export const extractTocFromDOM = (maxDomDepth = 3): TocItem[] => {
  const container = document.querySelector("article") || document.body;
  const headings = container.querySelectorAll("h2, h3");
  const toc: TocItem[] = [];

  const getDomDepth = (el: Element, root: Element): number => {
    let depth = 0;
    while (el && el !== root && el.parentElement) {
      el = el.parentElement;
      depth++;
    }
    return depth;
  };

  headings.forEach((heading) => {
    const text = heading.textContent?.trim();
    if (!text || text.length < 2) return;

    const domDepth = getDomDepth(heading, container);
    if (domDepth > maxDomDepth) return;

    const level = parseInt(heading.tagName[1], 10);
    const id =
      heading.id ||
      text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/^-+|-+$/g, "");

    if (!heading.id && id) heading.id = id;

    toc.push({ value: text, url: `#${id}`, depth: level });
  });

  return toc;
};
