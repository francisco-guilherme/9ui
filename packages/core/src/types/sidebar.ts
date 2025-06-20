import type { LucideIcon } from "lucide-react";

/**
 * Common structure for clickable items like menus or navigation.
 */
interface BaseItem {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  href?: string;
}

/**
 * A general-purpose menu item.
 */
export interface MenuItem extends BaseItem {
  /** Unique identifier for the item */
  id?: string;
  /** Whether the item is currently disabled */
  disabled?: boolean;
  /** Whether to show a separator before this item */
  separator?: boolean;
}

/**
 * A navigation item, with optional active state.
 */
export interface NavItem extends BaseItem {
  /** Unique identifier for the item */
  id?: string;
  /** Whether the item is currently active/selected */
  active?: boolean;
  /** Whether the item is currently disabled */
  disabled?: boolean;
}

/**
 * Configuration for the brand/logo section.
 */
export interface BrandConfig {
  /** Optional React node to display as logo (e.g. <Logo />) */
  logo?: React.ReactNode;
  /** Brand or application name */
  name: string;
  /** Optional subtitle or slogan */
  subtitle?: string;
  /** Optional menu items shown in brand-related UI (e.g. header dropdown) */
  menuItems?: MenuItem[];
  /** Optional URL for logo image */
  logoUrl?: string;
}

/**
 * Configuration for the logged-in user.
 */
export interface UserConfig {
  avatar?: {
    /** Optional image source for user avatar */
    src?: string;
    /** Alt text for avatar image */
    alt?: string;
    /** Fallback initials or character shown when no image is available */
    fallback: string;
  };
  /** Full name of the user */
  name: string;
  /** Optional email for display */
  email?: string;
  /** Optional menu items shown in user dropdown */
  menuItems?: MenuItem[];
}
