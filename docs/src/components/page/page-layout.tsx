import { cn } from "@9ui/ui";

import { LayoutProps } from "@/types/layout";

import { TableOfContents } from "./layout/toc";

export const PageLayout = ({
  children,
  className,
  variant = "default",
  tocItems = [],
}: LayoutProps) => {
  const isDocs = variant === "docs";

  return (
    <div className={cn("w-full", isDocs ? "text-center" : "", className)}>
      {isDocs ? (
        <section className="min-h-screen py-8 md:pl-8">
          <div
            className={cn(
              "relative",
              "xl:grid xl:gap-10",
              "xl:grid-cols-[minmax(0,1fr)_240px]",
            )}
          >
            <article className="w-full text-left xl:max-w-2xl mx-auto">
              {children}
            </article>
            <nav className="hidden xl:block" aria-label="Table of contents">
              <TableOfContents items={tocItems} />
            </nav>
          </div>
        </section>
      ) : (
        <div className="text-left">{children}</div>
      )}
    </div>
  );
};
