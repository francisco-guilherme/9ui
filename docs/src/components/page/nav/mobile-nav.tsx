import {
  Button,
  cn,
  Drawer,
  DrawerContent,
  DrawerPortal,
  DrawerTrigger,
  Separator,
} from "@9ui/ui";
import { EqualIcon } from "lucide-react";
import * as React from "react";
import { Link, useLocation } from "react-router-dom";

import { Icons } from "@/components/common/icons";
import { navConfig } from "@/config/nav";
import { type NavItem } from "@/types/nav";

export const MobileNav = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center gap-2 md:hidden">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger>
          <Button variant="ghost" size="icon" className="[&>svg]:size-6">
            <EqualIcon />
          </Button>
        </DrawerTrigger>
        <DrawerPortal>
          <DrawerContent className="mx-auto max-h-[85svh] pl-2">
            <div className="overflow-auto p-6 text-sm">
              <div className="space-y-0.5">
                {navConfig.mainNav.map((item) => (
                  <MobileNavItem
                    key={item.title}
                    item={item}
                    onClick={() => setOpen(false)}
                  />
                ))}
              </div>
              {navConfig.sidebarNav.map((group) => (
                <div key={group.title} className="mt-4">
                  <h4 className="mb-1 text-sm font-semibold text-foreground">
                    {group.title}
                  </h4>
                  <div className="space-y-0.5">
                    {group.items.map((item) => (
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
  const isActive = pathname === item.href;

  const baseClass = cn(
    "-ml-2 flex w-full items-center justify-between gap-2 rounded-md border px-2 py-1.5 text-sm transition-colors",
    item.disabled
      ? "cursor-not-allowed border-transparent text-muted-foreground opacity-60"
      : isActive
        ? "bg-secondary/50 pl-2 text-foreground"
        : "border-transparent text-muted-foreground hover:text-foreground",
  );

  const label = item.label && (
    <span className="rounded bg-info px-1.5 py-0.5 text-xs font-medium text-info-foreground">
      {item.label}
    </span>
  );

  if (item.disabled || !item.href) {
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
        href={item.href}
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
    <Link to={item.href} onClick={onClick} className={baseClass}>
      {item.title}
      {label}
    </Link>
  );
};
