import type { NavItem } from "../../../types/sidebar";
import { cn } from "../../../utils/cn";
import { Button } from "../../ui";

export interface SidebarNavItemProps {
  item: NavItem;
  collapsed?: boolean;
}

export function SidebarNavItem({
  item,
  collapsed = false,
}: SidebarNavItemProps) {
  const { icon: Icon, label, onClick, href, active, disabled } = item;

  const buttonClass = cn(
    "w-full transition-colors",
    collapsed ? "justify-center px-2" : "justify-start",
    active && "bg-accent text-accent-foreground",
    disabled && "opacity-50 cursor-not-allowed",
  );

  const content = (
    <>
      {Icon && (
        <Icon className={cn("h-4 w-4 shrink-0", !collapsed && "mr-2")} />
      )}
      {!collapsed && <span className="truncate">{label}</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} className="block" title={collapsed ? label : undefined}>
        <Button variant="ghost" className={buttonClass}>
          {content}
        </Button>
      </a>
    );
  }

  return (
    <Button
      variant="ghost"
      className={buttonClass}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      title={collapsed ? label : undefined}
    >
      {content}
    </Button>
  );
}
