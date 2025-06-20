import { cn } from "@9ui/ui";
import { Link, useLocation } from "react-router-dom";

import { navConfig } from "@/config/nav";
import { type SidebarGroup } from "@/types/nav";

interface SidebarProps {
  onItemClick?: () => void;
}

export const Sidebar = ({ onItemClick }: SidebarProps) => {
  const { pathname } = useLocation();

  return (
    <div>
      {navConfig.sidebarNav.map((group, index) => (
        <div key={group.title || index} className="pb-4">
          <h4 className="mb-1 text-sm font-semibold text-foreground">
            {group.title}
          </h4>
          {group.items?.length > 0 && (
            <SidebarItems
              items={group.items}
              currentPath={pathname}
              onItemClick={onItemClick}
            />
          )}
        </div>
      ))}
    </div>
  );
};

interface SidebarItemsProps {
  items: SidebarGroup["items"];
  currentPath: string;
  onItemClick?: () => void;
}

const SidebarItems = ({
  items,
  currentPath,
  onItemClick,
}: SidebarItemsProps) => {
  const renderLabel = (label: string | undefined) =>
    label ? (
      <span className="rounded bg-info px-1.5 py-0.5 text-xs font-medium text-info-foreground">
        {label}
      </span>
    ) : null;

  return (
    <div className="mt-1 space-y-0.5 text-sm">
      {items.map((item) => {
        const isActive = currentPath === item.href;
        const key = item.href || item.title;

        const commonClasses = cn(
          "-ml-2 flex w-full items-center justify-between gap-2 rounded-md border px-2 py-1.5 transition-colors",
          item.disabled
            ? "cursor-not-allowed border-transparent text-muted-foreground opacity-60"
            : isActive
              ? "bg-secondary/50 pl-2 text-foreground"
              : "border-transparent text-muted-foreground hover:text-foreground",
        );

        if (item.disabled || !item.href) {
          return (
            <span key={key} className={commonClasses}>
              {item.title}
              {renderLabel(item.label)}
            </span>
          );
        }

        if (item.external) {
          return (
            <a
              key={key}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                // Prevent sidebar from scrolling when clicking items
                e.currentTarget.blur();
                onItemClick?.();
              }}
              className={commonClasses}
            >
              {item.title}
              {renderLabel(item.label)}
            </a>
          );
        }

        return (
          <Link
            key={key}
            to={item.href}
            onClick={(e) => {
              // Prevent sidebar from scrolling when clicking items
              e.currentTarget.blur();
              onItemClick?.();
            }}
            className={commonClasses}
          >
            {item.title}
            {renderLabel(item.label)}
          </Link>
        );
      })}
    </div>
  );
};
