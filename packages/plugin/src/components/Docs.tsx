import { createElement } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "virtual:docs-layout";
import { routes } from "virtual:docs-route-meta";

interface Route {
  path: string;
  element: React.ComponentType;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routes.map(({ path, element }: Route) => ({
      path,
      element: createElement(element),
    })),
  },
]);

export const Docs = () => {
  return <RouterProvider router={router} />;
};
