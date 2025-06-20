import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Footer } from "./footer";
import { Header } from "./header";
import { SidebarNav } from "./nav/sidebar-nav";
import { TableOfContents } from "./toc";

export interface TocItem {
  value: string;
  url: string;
  depth: number;
}

export interface LayoutProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "docs";
  showSidebar?: boolean;
  tocItems?: TocItem[];
  maxWidth?: "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "full";
}

export const Layout = ({
  children,
  className,
  variant = "default",
  showSidebar = true,
  tocItems = [],
  maxWidth = "4xl",
}: LayoutProps) => {
  const maxWidthClass = maxWidth === "full" ? "w-full" : `max-w-${maxWidth}`;
  const showToc = variant === "docs";

  const renderDocsLayout = () => (
    <div className="container">
      <div
        className={cn(
          "gap-8",
          showSidebar
            ? "md:grid md:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[240px_1fr]"
            : "max-w-4xl mx-auto",
        )}
      >
        {/* Sidebar Navigation */}
        {showSidebar && (
          <aside
            className="fixed top-14 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block"
            role="navigation"
            aria-label="Documentation navigation"
          >
            <div className="scrollbar-hidden h-full overflow-y-auto px-2 py-8">
              <SidebarNav />
            </div>
          </aside>
        )}

        {/* Main Content + TOC */}
        <section className="min-h-screen py-8">
          <div
            className={cn(
              "relative",
              showToc ? "xl:grid xl:grid-cols-[1fr_240px] xl:gap-10" : "w-full",
            )}
          >
            {/* Article Content */}
            <article
              className={cn("w-full xl:mx-auto", maxWidthClass, className)}
            >
              {children}
            </article>

            {/* Table of Contents */}
            {showToc && (
              <nav className="hidden xl:block" aria-label="Table of contents">
                <TableOfContents items={tocItems} />
              </nav>
            )}
          </div>
        </section>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col font-sans antialiased">
      {/* Accessibility: skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex-1" role="main">
        {variant === "docs" ? (
          renderDocsLayout()
        ) : (
          <div className={cn("container", className)}>{children}</div>
        )}
      </main>

      <Footer />
    </div>
  );
};
