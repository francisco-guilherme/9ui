import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import { MetadataProvider } from "@/contexts/metadata-context";
import { useContentBySection } from "@/hooks/useContent";
import { TocItem } from "@/types/nav";
import { setDocumentMetadata } from "@/utils/metadata";
import { extractTocFromDOM } from "@/utils/toc";

import { ContentMeta } from "./content/content-meta";
import { Breadcrumbs } from "./layout/breadcrumbs";
import { PageLayout } from "./page-layout";

interface PageContentProps {
  section: string;
}

export const PageContent = ({ section }: PageContentProps) => {
  const { "*": rawSlug = "" } = useParams();
  const [toc, setToc] = useState<TocItem[]>([]);

  const { data, loading, error } = useContentBySection(section, rawSlug);

  useEffect(() => {
    if (!data) return;

    setDocumentMetadata(data.metadata);

    const timer = setTimeout(() => setToc(extractTocFromDOM()), 50);
    return () => clearTimeout(timer);
  }, [data]);

  if (loading) {
    return (
      <PageLayout variant="docs" tocItems={[]}>
        <div className="animate-pulse space-y-4">
          <div className="h-4 w-1/3 bg-muted rounded" />
          <div className="h-8 w-2/3 bg-muted rounded" />
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded" />
            <div className="h-4 w-5/6 bg-muted rounded" />
            <div className="h-4 w-4/6 bg-muted rounded" />
          </div>
        </div>
      </PageLayout>
    );
  }

  if (error || !data) {
    return <Navigate to="/not-found" replace />;
  }

  const { metadata, frontmatter, breadcrumbs, Component } = data;

  return (
    <MetadataProvider value={{ metadata, frontmatter }}>
      <PageLayout variant="docs" tocItems={toc}>
        <Breadcrumbs items={breadcrumbs} className="mb-2" />
        <ContentMeta>{Component ? <Component /> : null}</ContentMeta>
      </PageLayout>
    </MetadataProvider>
  );
};
