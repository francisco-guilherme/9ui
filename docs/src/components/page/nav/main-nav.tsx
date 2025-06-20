import { cn, Separator } from "@9ui/ui";
import { Link, useLocation } from "react-router-dom";

import { Icons } from "@/components/common/icons";

export const MainNav = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="mr-4 hidden md:flex">
      <Link to="/" className="flex items-center">
        <Icons.logo className="size-3" />
        <span className="ml-0.5 font-mono text-lg font-black">ui</span>
      </Link>
      <Separator orientation="vertical" className="mx-4 my-auto h-6" />
      <nav className="flex items-center gap-6 text-sm">
        <Link
          to="/docs/introduction"
          className={cn(
            "transition-colors hover:text-foreground",
            pathname.startsWith("/docs/getting-started")
              ? "font-medium text-foreground"
              : "text-muted-foreground",
          )}
        >
          Docs
        </Link>
        <Link
          to="/components/accordion"
          className={cn(
            "transition-colors hover:text-foreground",
            pathname?.startsWith("/docs/components")
              ? "font-medium text-foreground"
              : "text-muted-foreground",
          )}
        >
          Components
        </Link>
        <Link
          to="/themes"
          className={cn(
            "transition-colors hover:text-foreground",
            pathname?.startsWith("/themes")
              ? "font-medium text-foreground"
              : "text-muted-foreground",
          )}
        >
          Themes
        </Link>
      </nav>
    </div>
  );
};
