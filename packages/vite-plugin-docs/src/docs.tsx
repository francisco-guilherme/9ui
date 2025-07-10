import { createElement } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Content, contents } from "virtual:docs-contents";

import { Page } from "./components/layout/page";
import { NotFound } from "./components/ui/not-found";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    children: [
      ...contents.map(({ path, element }: Content) => ({
        path,
        element: createElement(element),
      })),
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export const DocsApp = () => <RouterProvider router={router} />;
