import "@unocss/reset/tailwind.css";
import "uno.css";

import { MDXProvider } from "@mdx-js/react";
import routes from "~react-pages";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useRoutes } from "react-router-dom";

import "@/styles.css";

import { useMDXComponents } from "@/components/mdx/mdx-components";

const App = () => {
  const components = useMDXComponents();
  const routeElements = useRoutes(routes);

  return (
    <MDXProvider components={components}>
      <Suspense fallback={<div>Loading...</div>}>{routeElements}</Suspense>
    </MDXProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
