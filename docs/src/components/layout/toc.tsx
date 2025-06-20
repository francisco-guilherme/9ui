import { TextIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

interface TocItem {
  value: string;
  url: string;
  depth: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

const getIdFromUrl = (url: string) => decodeURIComponent(url.slice(1));

const smoothScrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export const TableOfContents = ({ items }: TableOfContentsProps) => {
  const [activeId, setActiveId] = React.useState("");
  const observerRef = React.useRef<Map<string, IntersectionObserver>>(
    new Map(),
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    const id = getIdFromUrl(url);
    smoothScrollToElement(id);
    window.history.replaceState(null, "", url);
  };

  React.useEffect(() => {
    const observers = observerRef.current;
    observers.forEach((observer) => observer.disconnect());
    observers.clear();

    items.forEach(({ url }) => {
      const id = getIdFromUrl(url);
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { rootMargin: "-80px 0px -80% 0px" },
      );

      observer.observe(el);
      observers.set(id, observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
      observers.clear();
    };
  }, [items]);

  if (!items.length) return null;

  return (
    <div className="sticky top-14 -mt-8 hidden h-fit max-h-[calc(100vh-3.5rem)] overflow-auto py-8 xl:block">
      <div className="flex flex-col gap-2">
        <h2 className="flex items-center gap-2 text-sm font-semibold">
          <TextIcon className="size-4" />
          On this page
        </h2>

        <nav aria-label="Table of contents">
          {items.map(({ url, value, depth }) => {
            const id = getIdFromUrl(url);
            return (
              <a
                key={url}
                href={url}
                onClick={(e) => handleClick(e, url)}
                className={cn(
                  "flex py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer",
                  depth === 3 && "pl-3",
                  depth === 4 && "pl-4",
                  depth === 5 && "pl-6",
                  depth === 6 && "pl-8",
                  activeId === id && "text-foreground font-medium",
                )}
                aria-current={activeId === id ? "true" : undefined}
              >
                {value}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
