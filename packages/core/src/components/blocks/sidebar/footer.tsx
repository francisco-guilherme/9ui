import * as React from "react";
import { ChevronsUpDownIcon } from "lucide-react";

import type { UserConfig } from "../../../types/sidebar";
import { cn } from "../../../utils/cn";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui";

export interface SidebarFooterProps {
  user?: UserConfig;
  className?: string;
  children?: React.ReactNode;
  collapsed?: boolean;
}

export function SidebarFooter({
  user,
  className,
  children,
  collapsed = false,
}: SidebarFooterProps) {
  if (children) {
    return (
      <div className={cn("px-4 py-4", collapsed && "px-2", className)}>
        {children}
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className={cn("px-4 py-4", collapsed && "px-2", className)}>
      {user.menuItems && !collapsed ? (
        <SidebarUserDropdown user={user} />
      ) : (
        <SidebarUserProfile user={user} collapsed={collapsed} />
      )}
    </div>
  );
}

function SidebarUserProfile({
  user,
  collapsed = false,
}: {
  user: UserConfig;
  collapsed?: boolean;
}) {
  if (collapsed) {
    return (
      <div className="flex justify-center">
        <SidebarUserAvatar user={user} />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <SidebarUserAvatar user={user} />
      <SidebarUserInfo user={user} />
    </div>
  );
}

function SidebarUserDropdown({ user }: { user: UserConfig }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        className="w-full p-2 flex items-center gap-2 hover:bg-accent/50 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
        aria-label="User menu"
      >
        <SidebarUserAvatar user={user} />
        <SidebarUserInfo user={user} />
        <ChevronsUpDownIcon
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform",
            isOpen && "rotate-180",
          )}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={5} align="end" className="w-56">
        {user.menuItems?.map((item, index) => {
          const isLastItem = index === user.menuItems!.length - 1;

          return (
            <React.Fragment key={item.id || item.label || index}>
              {isLastItem && <DropdownMenuSeparator />}
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

function SidebarUserAvatar({ user }: { user: UserConfig }) {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage
        src={user.avatar?.src}
        alt={user.avatar?.alt || `${user.name}'s avatar`}
      />
      <AvatarFallback>
        {user.avatar?.fallback || getInitials(user.name)}
      </AvatarFallback>
    </Avatar>
  );
}

function SidebarUserInfo({ user }: { user: UserConfig }) {
  return (
    <div className="flex-1 min-w-0 text-left">
      <div className="text-sm font-medium truncate" title={user.name}>
        {user.name}
      </div>
      {user.email && (
        <div
          className="text-xs text-muted-foreground truncate"
          title={user.email}
        >
          {user.email}
        </div>
      )}
    </div>
  );
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase()
    .slice(0, 2);
}
