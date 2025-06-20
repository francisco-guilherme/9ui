import React from "react";

import { useContentMetadata } from "@/lib/content/metadata-context";
import { cn } from "@/lib/utils";

import { ComponentLinks } from "./blocks/component-links";

interface Link {
  label: string;
  href: string;
}

interface MDXContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * Wrapper component that automatically renders frontmatter metadata
 * before the MDX content, eliminating the need for manual <Title /> and <Description /> components
 */
export const MDXContent = ({ children, className }: MDXContentProps) => {
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
      {links && links.length > 0 && <ComponentLinks links={links} />}

      {/* Render the actual MDX content */}
      <div className={cn(metadata.title || metadata.description ? "mt-6" : "")}>
        {children}
      </div>
    </div>
  );
};
