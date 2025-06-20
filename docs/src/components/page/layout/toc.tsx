import { cn } from "@9ui/ui";
import { TextIcon } from "lucide-react";
import * as React from "react";

interface TocItem {
  value: string;
  url: string;
  depth: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

const getIdFromUrl = (url: string) => decodeURIComponent(url.slice(1));

const scrollToElement = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const headerOffset = 80;
    const elementTop = el.getBoundingClientRect().top + window.scrollY;
    const scrollTarget = elementTop - headerOffset;

    window.scrollTo({ top: scrollTarget, behavior: "smooth" });
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
    scrollToElement(id);
    window.history.replaceState(null, "", url);
  };

  React.useEffect(() => {
    const observers = observerRef.current;
    observers.forEach((obs) => obs.disconnect());
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
        {
          rootMargin: "-80px 0px -80% 0px", // Top padding = header height
          threshold: 0.1,
        },
      );

      observer.observe(el);
      observers.set(id, observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
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
                  "flex py-1.5 text-sm transition-colors cursor-pointer",
                  "text-muted-foreground hover:text-foreground",
                  activeId === id && "text-foreground font-medium",
                  {
                    "pl-3": depth === 3,
                    "pl-4": depth === 4,
                    "pl-6": depth === 5,
                    "pl-8": depth === 6,
                  },
                )}
                aria-current={activeId === id ? "location" : undefined}
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
