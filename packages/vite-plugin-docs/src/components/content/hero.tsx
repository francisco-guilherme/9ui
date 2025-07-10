import { useLocation } from "react-router-dom";

import { useMetadata } from "../../contexts/metadata-context";
import { createBreadcrumbs } from "../../utils/navigation";
import { Breadcrumbs } from "../navigation/breadcrumbs";
import { Links } from "../navigation/links";

export const Hero = () => {
  const { pathname } = useLocation();
  const { metadata } = useMetadata();

  // Generate breadcrumbs from the current path
  const breadcrumbs = createBreadcrumbs(pathname);

  // Don't show header for root path
  if (pathname === "/") {
    return null;
  }

  return (
    <div className="container mx-auto max-w-7xl">
      <Breadcrumbs items={breadcrumbs} className="mb-4" />

      {/* Auto-render title from frontmatter */}
      {metadata.title && (
        <h1 className="text-3xl font-bold">{metadata.title}</h1>
      )}

      {/* Auto-render description from frontmatter */}
      {metadata.description && (
        <p className="mt-2 text-muted-foreground">{metadata.description}</p>
      )}

      {/* Auto-render links from frontmatter */}
      <Links />
    </div>
  );
};
