import { MDXProvider } from "@mdx-js/react";
import routes from "~react-pages";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import { ViewTransition } from "@/components/common/view-transition";
import { mdxComponents } from "@/components/mdx/components";
import { RootLayout } from "@/components/page/root-layout";

export const App = () => {
  const routeElements = useRoutes(routes);

  return (
    <MDXProvider components={mdxComponents}>
      <RootLayout>
        <Suspense fallback={null}>
          <ViewTransition>{routeElements}</ViewTransition>
        </Suspense>
      </RootLayout>
    </MDXProvider>
  );
};
