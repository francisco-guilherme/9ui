import { Link, useLocation } from "react-router-dom";
import { contents } from "virtual:docs-contents";
import { cn } from "@nui/core";

import type { NavItem } from "../../types/navigation";
import { createSidebar } from "../../utils/navigation";
import { capitalCase } from "../../utils/string";

interface SidebarProps {
  onItemClick?: () => void;
}

/**
 * Renders a sidebar navigation based on documentation content.
 */
export const Sidebar = ({ onItemClick }: SidebarProps) => {
  const { pathname } = useLocation();

  // Only show sidebar if current path matches a non-demo content page
  const isDocPage = contents.some(
    (item) => item.path === pathname && !item.path.endsWith(".tsx"),
  );
  if (!isDocPage) return null;

  const grouped = createSidebar(contents);

  return (
    <aside
      className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-55 md:block xl:w-60"
      role="navigation"
      aria-label="Sidebar navigation"
    >
      <nav className="h-full overflow-y-auto px-2 py-8">
        {Object.entries(grouped).map(([section, items]) => (
          <section key={section} className="pb-4">
            <h4 className="mb-1 text-sm font-semibold text-foreground">
              {capitalCase(section)}
            </h4>
            <ul className="mt-1 space-y-0.5 text-sm">
              {items.map((item) => (
                <SidebarItem
                  key={item.path || item.title}
                  item={item}
                  isActive={pathname === item.path}
                  onClick={onItemClick}
                />
              ))}
            </ul>
          </section>
        ))}
      </nav>
    </aside>
  );
};

interface SidebarItemProps {
  item: NavItem;
  isActive: boolean;
  onClick?: () => void;
}

/**
 * Renders a single item in the sidebar, handling internal/external links and disabled states.
 */
const SidebarItem = ({ item, isActive, onClick }: SidebarItemProps) => {
  const handleClick = () => onClick?.();

  const classes = cn(
    "-ml-2 flex w-full items-center gap-2 rounded-md px-2 py-1.5 transition-colors border",
    {
      "border-transparent cursor-not-allowed text-muted-foreground opacity-60":
        item.disabled,
      "bg-secondary/50 pl-2 text-foreground border-secondary":
        isActive && !item.disabled,
      "text-muted-foreground hover:text-foreground":
        !isActive && !item.disabled,
    },
  );

  const style =
    !isActive && !item.disabled ? { borderColor: "transparent" } : {};

  const content = <>{item.title}</>;

  if (item.disabled || !item.path) {
    return (
      <li>
        <span className={classes} style={style}>
          {content}
        </span>
      </li>
    );
  }

  if (item.external) {
    return (
      <li>
        <a
          href={item.path}
          target="_blank"
          rel="noreferrer"
          onClick={handleClick}
          className={classes}
          style={style}
        >
          {content}
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link
        to={item.path}
        onClick={handleClick}
        className={classes}
        style={style}
      >
        {content}
      </Link>
    </li>
  );
};
