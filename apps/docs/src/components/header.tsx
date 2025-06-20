import * as React from "react";
import { cn, ThemeToggle } from "@nui/ui";

interface HeaderProps {
  /**
   * The title/brand content for the header
   */
  title?: React.ReactNode;
  /**
   * Navigation content (typically HeaderNavLink components)
   */
  navigation?: React.ReactNode;
  /**
   * Action content (buttons, user menu, etc.)
   */
  actions?: React.ReactNode;
  /**
   * Props to pass to the theme toggle component
   */
  themeToggleProps?: React.ComponentProps<typeof ThemeToggle>;
  /**
   * Whether the header should stick to the top
   */
  sticky?: boolean;
  /**
   * Whether to show a border at the bottom
   */
  bordered?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}

interface HeaderBrandProps {
  children: React.ReactNode;
  className?: string;
}

interface HeaderNavLinkProps {
  href: string;
  active?: boolean;
  children: React.ReactNode;
  className?: string;
}

function Header({
  title,
  navigation,
  actions,
  themeToggleProps,
  sticky = false,
  bordered = false,
  className,
}: HeaderProps) {
  return (
    <header
      data-slot="header"
      className={cn(
        "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        "flex h-16 items-center justify-between px-4 md:px-6",
        sticky && "sticky top-0 z-50",
        bordered && "border-b border-border",
        className,
      )}
    >
      {/* Left section - Title/Brand */}
      {title && <div className="flex items-center gap-4">{title}</div>}

      {/* Center section - Navigation */}
      {navigation && (
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navigation}
        </nav>
      )}

      {/* Right section - Actions and Theme Toggle */}
      <div className="flex items-center gap-4">
        {actions}
        {themeToggleProps !== undefined && (
          <ThemeToggle size="icon" variant="ghost" {...themeToggleProps} />
        )}
      </div>
    </header>
  );
}

function HeaderBrand({ children, className }: HeaderBrandProps) {
  return (
    <div
      data-slot="header-brand"
      className={cn("flex items-center gap-2 text-lg font-semibold", className)}
    >
      {children}
    </div>
  );
}

function HeaderNavLink({
  href,
  active = false,
  children,
  className,
}: HeaderNavLinkProps) {
  return (
    <a
      href={href}
      data-slot="header-nav-link"
      className={cn(
        "text-muted-foreground hover:text-foreground transition-colors",
        "relative py-2",
        active && [
          "text-foreground font-medium",
          "after:absolute after:bottom-0 after:left-0 after:right-0",
          "after:h-0.5 after:bg-primary after:rounded-full",
        ],
        className,
      )}
    >
      {children}
    </a>
  );
}

export { Header, HeaderBrand, HeaderNavLink };
export type { HeaderProps, HeaderBrandProps, HeaderNavLinkProps };
