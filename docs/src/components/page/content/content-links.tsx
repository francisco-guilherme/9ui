import { ExternalLink } from "lucide-react";

import { useContentMetadata } from "@/hooks/useContentMetadata";

interface Link {
  label: string;
  href: string;
}

interface ContentLinksProps {
  links?: Link[];
}

export const ContentLinks = ({ links }: ContentLinksProps) => {
  const frontmatterLinks = useContentMetadata()?.frontmatter?.links as
    | Link[]
    | undefined;
  const linksToRender = links ?? frontmatterLinks ?? [];

  if (linksToRender.length === 0) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {linksToRender.map(({ label, href }) => (
        <a
          key={`${label}-${href}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={`Open ${label} in a new tab`}
          className="flex h-6 items-center gap-2 rounded-md bg-muted px-2 text-xs transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          {label}
          <ExternalLink className="size-2.5" />
        </a>
      ))}
    </div>
  );
};
