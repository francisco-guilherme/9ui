import { forwardRef, ReactNode } from "react";

import type { BrandConfig, NavItem, UserConfig } from "../../../types/sidebar";
import { cn } from "../../../utils/cn";
import { SidebarContent } from "./content";
import { SidebarFooter } from "./footer";
import { SidebarHeader } from "./header";

export type SidebarSize = "sm" | "md" | "lg";
export type SidebarVariant = "default" | "floating" | "minimal";

export interface SidebarProps {
  className?: string;
  brand?: BrandConfig;
  navigation?: NavItem[];
  user?: UserConfig;
  children?: ReactNode;

  // Layout options
  size?: SidebarSize;
  variant?: SidebarVariant;
  collapsible?: boolean;
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;

  // Behavior options
  resizable?: boolean;
  hideOnMobile?: boolean;

  // Accessibility
  "aria-label"?: string;
}

const sizeClasses: Record<SidebarSize, string> = {
  sm: "w-56",
  md: "w-64",
  lg: "w-72",
};

const variantClasses: Record<SidebarVariant, string> = {
  default: "bg-background border-r border-border",
  floating:
    "bg-card border border-border rounded-lg shadow-lg m-2 h-[calc(100vh-1rem)]",
  minimal: "bg-transparent border-r border-border/50",
};

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  (
    {
      className,
      brand,
      navigation,
      user,
      children,
      size = "md",
      variant = "default",
      collapsible = false,
      collapsed = false,
      onCollapsedChange,
      resizable = false,
      hideOnMobile = true,
      "aria-label": ariaLabel,
      ...props
    },
    ref,
  ) => {
    const sizeClass = collapsed ? "w-16" : sizeClasses[size];
    const variantClass = variantClasses[variant];

    const handleToggleCollapsed = () => {
      onCollapsedChange?.(!collapsed);
    };

    return (
      <aside
        ref={ref}
        className={cn(
          "h-screen flex flex-col transition-all duration-200 ease-in-out",
          sizeClass,
          variantClass,
          hideOnMobile && "hidden lg:flex",
          resizable && "resize-x overflow-auto min-w-[200px] max-w-[400px]",
          className,
        )}
        aria-label={ariaLabel || "Sidebar navigation"}
        {...props}
      >
        <SidebarHeader brand={brand} collapsed={collapsed} />

        <SidebarContent navigation={navigation} collapsed={collapsed}>
          {children}
        </SidebarContent>

        <SidebarFooter user={user} collapsed={collapsed} />

        {collapsible && (
          <button
            onClick={handleToggleCollapsed}
            className={cn(
              "absolute -right-3 top-6 w-6 h-6 rounded-full border border-border bg-background shadow-md",
              "flex items-center justify-center hover:bg-accent transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-ring",
            )}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <svg
              className={cn(
                "w-3 h-3 transition-transform",
                collapsed && "rotate-180",
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}
      </aside>
    );
  },
);
