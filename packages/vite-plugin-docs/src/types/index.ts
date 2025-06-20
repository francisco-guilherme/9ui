export interface RouteData {
  path: string;
  file: string;
  frontmatter: Record<string, any>;
}

export interface SidebarItem {
  title: string;
  path: string;
}
