export interface TocItem {
  value: string;
  url: string;
  depth: number;
}

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
}

export interface SidebarItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  items?: SidebarItem[];
}

export interface SidebarGroup {
  title: string;
  items: NavItem[];
  disabled?: boolean;
}
