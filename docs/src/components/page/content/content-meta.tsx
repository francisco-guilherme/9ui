import { cn } from "@9ui/ui";
import React from "react";

import { useContentMetadata } from "@/hooks/useContentMetadata";

import { ContentLinks } from "./content-links";

interface Link {
  label: string;
  href: string;
}

interface ContentMetaProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ContentMeta = ({ children, className }: ContentMetaProps) => {
  const metadataContext = useContentMetadata();

  if (!metadataContext) {
    return <div className={className}>{children}</div>;
  }

  const { metadata, frontmatter } = metadataContext;
  const links = frontmatter.links as Link[] | undefined;

  return (
    <div className={className}>
      {/* Auto-render title from frontmatter */}
      {metadata.title && (
        <h1 className="text-3xl font-bold">{metadata.title}</h1>
      )}

      {/* Auto-render description from frontmatter */}
      {metadata.description && (
        <p className="mt-2 text-muted-foreground">{metadata.description}</p>
      )}

      {/* Auto-render links from frontmatter */}
      {links && links.length > 0 && <ContentLinks links={links} />}

      {/* Render the actual MDX content */}
      <div className={cn(metadata.title || metadata.description ? "mt-6" : "")}>
        {children}
      </div>
    </div>
  );
};
