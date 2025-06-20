declare module "virtual:docs-route-meta" {
  interface Route {
    path: string;
    element: React.ComponentType;
    meta: Record<string, any>;
  }

  export const routes: Route[];
}

declare module "virtual:docs-sidebar" {
  interface SidebarItem {
    title: string;
    path: string;
  }

  export const sidebar: SidebarItem[];
}

declare module "virtual:docs-layout" {
  const Layout: React.ComponentType;
  export const Layout;
}

declare module "virtual:docs-app" {
  const Docs: React.ComponentType;
  export const Docs;
}
