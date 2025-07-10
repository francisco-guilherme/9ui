import { Outlet, useLocation } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import { contents } from "virtual:docs-contents";

import { MetadataProvider } from "../../contexts/metadata-context";
import { generatePageMetadata } from "../../utils/metadata";
import { Hero } from "../content/hero";
import { mdxComponents } from "../mdx-components";
import { ErrorBoundary } from "../ui/error-boundary";
import { Footer } from "./footer";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

// Converts a file path to a URL slug
const pathToSlug = (filePath: string): string =>
  filePath
    .replace(/^.*\/content\//, "")
    .replace(/\/index$/, "")
    .replace(/\.mdx$/, "");

export const Page = () => {
  const { pathname } = useLocation();
  const slug = pathToSlug(pathname);

  // Find page content and extract metadata
  const pageContent = contents.find((content) => content.path === pathname);
  const frontmatter = pageContent?.meta || {};
  const metadata = generatePageMetadata(frontmatter, slug);

  // Check if current page is an MDX page
  const isMdxPage = Boolean(pageContent && !pathname.endsWith(".tsx"));

  return (
    <MDXProvider components={mdxComponents}>
      <div className="flex min-h-screen flex-col font-sans antialiased">
        <Header />

        <div className="container flex flex-1 mx-auto max-w-7xl">
          <Sidebar />

          <main className="flex-1 min-w-0" role="main">
            <MetadataProvider value={{ metadata, frontmatter }}>
              <article className="container mx-auto max-w-7xl px-4 py-8">
                {isMdxPage && <Hero />}

                <ErrorBoundary resetKey={pathname}>
                  <Outlet />
                </ErrorBoundary>
              </article>
            </MetadataProvider>
          </main>
        </div>

        <Footer />
      </div>
    </MDXProvider>
  );
};
