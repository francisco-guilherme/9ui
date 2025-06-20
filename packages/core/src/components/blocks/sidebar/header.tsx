import * as React from "react";
import { ChevronsUpDownIcon } from "lucide-react";

import type { BrandConfig } from "../../../types/sidebar";
import { cn } from "../../../utils/cn";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui";

export interface SidebarHeaderProps {
  brand?: BrandConfig;
  className?: string;
  children?: React.ReactNode;
  collapsed?: boolean;
}

export function SidebarHeader({
  brand,
  className,
  children,
  collapsed = false,
}: SidebarHeaderProps) {
  if (children) {
    return (
      <div className={cn("px-4 py-4", collapsed && "px-2", className)}>
        {children}
      </div>
    );
  }

  if (!brand) return null;

  return (
    <div className={cn("px-4 py-4", collapsed && "px-2", className)}>
      {brand.menuItems && !collapsed ? (
        <SidebarBrandDropdown brand={brand} />
      ) : (
        <SidebarBrandDisplay brand={brand} collapsed={collapsed} />
      )}
    </div>
  );
}

function SidebarBrandDisplay({
  brand,
  collapsed = false,
}: {
  brand: BrandConfig;
  collapsed?: boolean;
}) {
  if (collapsed) {
    return (
      <div className="flex justify-center">
        <SidebarBrandLogo brand={brand} />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <SidebarBrandLogo brand={brand} />
      <SidebarBrandInfo brand={brand} />
    </div>
  );
}

function SidebarBrandDropdown({ brand }: { brand: BrandConfig }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        className="w-full p-2 flex items-center gap-2 hover:bg-accent/50 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
        aria-label="Brand menu"
      >
        <SidebarBrandLogo brand={brand} />
        <SidebarBrandInfo brand={brand} />
        <ChevronsUpDownIcon
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform",
            isOpen && "rotate-180",
          )}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={5} align="end" className="w-56">
        {brand.menuItems?.map((item, index) => {
          const showSeparator =
            item.separator ||
            (index > 0 && brand.menuItems![index - 1].separator);

          return (
            <React.Fragment key={item.id || item.label || index}>
              {showSeparator && <DropdownMenuSeparator />}
              <DropdownMenuItem onClick={item.onClick} disabled={item.disabled}>
                {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                {item.label}
              </DropdownMenuItem>
            </React.Fragment>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function SidebarBrandLogo({ brand }: { brand: BrandConfig }) {
  if (brand.logo) {
    return <div className="shrink-0">{brand.logo}</div>;
  }

  if (brand.logoUrl) {
    return (
      <div className="w-8 h-8 shrink-0">
        <img
          src={brand.logoUrl}
          alt={`${brand.name} logo`}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className="w-8 h-8 bg-primary rounded flex items-center justify-center shrink-0">
      <span className="text-primary-foreground text-sm font-bold">
        {getBrandInitials(brand.name)}
      </span>
    </div>
  );
}

function SidebarBrandInfo({ brand }: { brand: BrandConfig }) {
  return (
    <div className="flex-1 min-w-0 text-left">
      <div className="text-sm font-medium truncate" title={brand.name}>
        {brand.name}
      </div>
      {brand.subtitle && (
        <div
          className="text-xs text-muted-foreground truncate"
          title={brand.subtitle}
        >
          {brand.subtitle}
        </div>
      )}
    </div>
  );
}

function getBrandInitials(name: string): string {
  return name
    .split(/[\s-_]+/)
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
}
