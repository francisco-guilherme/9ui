import { ExternalLink } from "lucide-react";

import { useMetadata } from "../../contexts/metadata-context";

interface LinkType {
  label: string;
  href: string;
}

interface LinksProps {
  links?: LinkType[];
}

export const Links = ({ links }: LinksProps) => {
  const frontmatterLinks = useMetadata()?.frontmatter?.links as
    | LinkType[]
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
