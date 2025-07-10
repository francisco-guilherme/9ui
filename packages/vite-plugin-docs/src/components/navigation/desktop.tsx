import { Link, useLocation } from "react-router-dom";
import { contents } from "virtual:docs-contents";
import { cn, Icons, Separator } from "@nui/core";

import { createHeader } from "../../utils/navigation";

export const DesktopNav = () => {
  const { pathname } = useLocation();

  const navItems = createHeader(contents);

  return (
    <div className="mr-4 hidden md:flex">
      <Link to="/" className="flex items-center">
        <Icons.logo className="size-3" />
        <span className="ml-0.5 font-mono text-lg font-black">ui</span>
      </Link>

      <Separator orientation="vertical" className="mx-4 my-auto h-6" />

      <nav className="flex items-center gap-6 text-sm">
        {navItems
          .filter((item) => item.path) // Only show items with valid paths
          .map((item) => {
            const isActive = pathname.startsWith(item.path!);

            return (
              <Link
                key={item.path}
                to={item.path!}
                className={cn(
                  "transition-colors hover:text-foreground",
                  isActive
                    ? "font-medium text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {item.title}
              </Link>
            );
          })}
      </nav>
    </div>
  );
};
