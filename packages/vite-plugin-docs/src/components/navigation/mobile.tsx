import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { EqualIcon } from "lucide-react";
import { contents } from "virtual:docs-contents";
import {
  buttonVariants,
  cn,
  Drawer,
  DrawerContent,
  DrawerPortal,
  DrawerTrigger,
  Icons,
  Separator,
} from "@nui/core";

import type { NavItem } from "../../types/navigation";
import { createHeader, createSidebar } from "../../utils/navigation";
import { capitalCase } from "../../utils/string";

export const MobileNav = () => {
  const [open, setOpen] = React.useState(false);

  // Generate navigation items from contents
  const headerNavItems = createHeader(contents);
  const sidebarNavItems = createSidebar(contents);

  return (
    <div className="flex items-center gap-2 md:hidden">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "[&>svg]:size-6",
          )}
        >
          <div>
            <EqualIcon />
          </div>
        </DrawerTrigger>
        <DrawerPortal>
          <DrawerContent className="mx-auto max-h-[85svh] pl-2">
            <div className="overflow-auto p-6 text-sm">
              <div className="space-y-0.5">
                {headerNavItems.map((item) => (
                  <MobileNavItem
                    key={item.title}
                    item={item}
                    onClick={() => setOpen(false)}
                  />
                ))}
              </div>
              {Object.entries(sidebarNavItems).map(([section, items]) => (
                <div key={section} className="mt-4">
                  <h4 className="mb-1 text-sm font-semibold text-foreground">
                    {capitalCase(section)}
                  </h4>
                  <div className="space-y-0.5">
                    {items.map((item) => (
                      <MobileNavItem
                        key={item.title}
                        item={item}
                        onClick={() => setOpen(false)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </DrawerContent>
        </DrawerPortal>
      </Drawer>

      <Separator orientation="vertical" className="mx-2 my-auto h-6" />

      <Link to="/" className="ml-2 flex items-center">
        <Icons.logo className="size-3" />
        <span className="ml-0.5 font-mono text-lg font-black">ui</span>
      </Link>
    </div>
  );
};

interface MobileNavItemProps {
  item: NavItem;
  onClick: () => void;
}

const MobileNavItem = ({ item, onClick }: MobileNavItemProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === item.path;

  const baseClass = cn(
    "-ml-2 flex w-full items-center justify-between gap-2 rounded-md border px-2 py-1.5 text-sm transition-colors",
    item.disabled
      ? "cursor-not-allowed border-transparent text-muted-foreground opacity-60"
      : isActive
        ? "bg-secondary/50 pl-2 text-foreground"
        : "border-transparent text-muted-foreground hover:text-foreground",
  );

  // Handle label for NavItem type
  const label = item.label && (
    <span className="rounded bg-info px-1.5 py-0.5 text-xs font-medium text-info-foreground">
      {item.label}
    </span>
  );

  if (item.disabled || !item.path) {
    return (
      <span className={baseClass}>
        {item.title}
        {label}
      </span>
    );
  }

  if (item.external) {
    return (
      <a
        href={item.path}
        onClick={onClick}
        className={baseClass}
        target="_blank"
        rel="noreferrer"
      >
        {item.title}
        {label}
      </a>
    );
  }

  return (
    <Link to={item.path} onClick={onClick} className={baseClass}>
      {item.title}
      {label}
    </Link>
  );
};
