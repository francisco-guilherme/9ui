declare module "virtual:docs-app" {
  export const DocsApp: React.ComponentType;
}

declare module "virtual:docs-contents" {
  export interface Content {
    path: string;
    element: React.ComponentType;
    meta: Record<string, unknown>;
  }

  export const contents: Content[];
}

declare module "virtual:docs-demos" {
  export interface Demo {
    Component: React.ComponentType | null;
    code: string;
    loading: boolean;
    error: string | null;
  }

  export const loadDemo: (name: string) => Promise<Demo>;
}
