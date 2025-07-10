import type { NavItem } from "@/types/sidebar";
import { cn } from "@/utils/cn";

import { SidebarNavItem } from "./nav-item";

export interface SidebarContentProps {
  navigation?: NavItem[];
  className?: string;
  children?: React.ReactNode;
  collapsed?: boolean;
}

export function SidebarContent({
  navigation,
  className,
  children,
  collapsed = false,
}: SidebarContentProps) {
  if (children) {
    return (
      <div className={cn("flex-1", collapsed && "px-1", className)}>
        {children}
      </div>
    );
  }

  if (!navigation?.length) return null;

  return (
    <nav
      className={cn(
        "flex-1 px-3 py-2 space-y-0.5",
        collapsed && "px-1",
        className,
      )}
    >
      {navigation.map((item, index) => (
        <SidebarNavItem
          key={item.href || item.id || index}
          item={item}
          collapsed={collapsed}
        />
      ))}
    </nav>
  );
}
