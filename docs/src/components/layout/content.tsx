import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@9ui/ui";
import { Fragment, useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import { Layout, TocItem } from "@/components/layout/layout";
import { MDXContent } from "@/components/mdx/mdx-content";
import { siteConfig } from "@/config/site";
import { ContentData, loadContent } from "@/lib/content/loader";
import { setDocumentMetadata } from "@/lib/content/metadata";
import { MetadataProvider } from "@/lib/content/metadata-context";

// ─────────────────────────────────────────────────────────────────────────────
// Utils
// ─────────────────────────────────────────────────────────────────────────────

const extractTocFromDOM = (maxDomDepth = 3): TocItem[] => {
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

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

interface ContentProps {
  section: string;
}

export const Content = ({ section }: ContentProps) => {
  const { "*": rawSlug = "" } = useParams();
  const [state, setState] = useState<{
    data: ContentData | null;
    loading: boolean;
    notFound: boolean;
    toc: TocItem[];
  }>({
    data: null,
    loading: true,
    notFound: false,
    toc: [],
  });

  // ─────────────────────────────────────────────────────────────────────────
  // Load content and metadata
  // ─────────────────────────────────────────────────────────────────────────
  useEffect(() => {
    const fetchContentData = async () => {
      setState((s) => ({ ...s, loading: true, notFound: false }));

      const slug = `${section}/${rawSlug}`;
      const data = await loadContent(slug);

      if (!data) {
        setState((s) => ({ ...s, notFound: true, loading: false }));
        return;
      }

      setDocumentMetadata(data.metadata, {
        siteName: siteConfig.name,
        baseUrl: siteConfig.url,
      });

      setState((s) => ({ ...s, data, loading: false }));
    };

    fetchContentData();
  }, [section, rawSlug]);

  // ─────────────────────────────────────────────────────────────────────────
  // Generate runtime TOC
  // ─────────────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!state.data) return;
    const timer = setTimeout(() => {
      setState((s) => ({ ...s, toc: extractTocFromDOM() }));
    }, 50);
    return () => clearTimeout(timer);
  }, [state.data]);

  // ─────────────────────────────────────────────────────────────────────────
  // Render fallback states
  // ─────────────────────────────────────────────────────────────────────────
  if (state.loading) {
    return (
      <Layout variant="docs" tocItems={[]}>
        <div className="animate-pulse space-y-4">
          <div className="h-4 w-1/3 bg-muted rounded" />
          <div className="h-8 w-2/3 bg-muted rounded" />
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded" />
            <div className="h-4 w-5/6 bg-muted rounded" />
            <div className="h-4 w-4/6 bg-muted rounded" />
          </div>
        </div>
      </Layout>
    );
  }

  if (state.notFound || !state.data) {
    return <Navigate to="/not-found" replace />;
  }

  const { metadata, frontmatter, breadcrumbs, Component } = state.data;

  // ─────────────────────────────────────────────────────────────────────────
  // Render layout
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <MetadataProvider value={{ metadata, frontmatter }}>
      <Layout variant="docs" tocItems={state.toc}>
        {breadcrumbs?.length > 0 && (
          <Breadcrumb className="mb-2">
            <BreadcrumbList>
              {breadcrumbs.map((breadcrumb, index) => (
                <Fragment key={breadcrumb.path}>
                  <BreadcrumbItem active={index === breadcrumbs.length - 1}>
                    <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
                  </BreadcrumbItem>
                  {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                </Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        )}

        <MDXContent>{Component && <Component />}</MDXContent>
      </Layout>
    </MetadataProvider>
  );
};
