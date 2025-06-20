import {
  Bell,
  CreditCard,
  FolderOpen,
  Home,
  LogOut,
  Settings,
  User,
  Users,
} from "lucide-react";
import {
  Sidebar,
  useShell,
  type BrandConfig,
  type NavItem,
  type UserConfig,
} from "@nui/core";

import { Content } from "./content";
import { Header } from "./header";
import { StatusBar } from "./status-bar";

export function Layout() {
  const { isCollapsed } = useShell();

  // Sidebar configuration
  const brandConfig: BrandConfig = {
    name: "Builder",
    subtitle: "MagicPath.ai",
    menuItems: [
      {
        icon: Settings,
        label: "Settings",
        onClick: () => console.log("Settings clicked"),
      },
      {
        icon: User,
        label: "Switch Account",
        onClick: () => console.log("Switch account clicked"),
      },
    ],
  };

  const navigationItems: NavItem[] = [
    {
      icon: Home,
      label: "Home",
      onClick: () => console.log("Home clicked"),
      active: false,
    },
    {
      icon: FolderOpen,
      label: "My Files",
      onClick: () => console.log("My Files clicked"),
      active: true,
    },
    {
      icon: Users,
      label: "Shared with Me",
      onClick: () => console.log("Shared clicked"),
      active: false,
    },
  ];

  const userConfig: UserConfig = {
    avatar: {
      src: "https://i.pravatar.cc?img=69",
      alt: "User Avatar",
      fallback: "BB",
    },
    name: "Builder User",
    email: "user@magicpath.ai",
    menuItems: [
      {
        icon: User,
        label: "Profile",
        onClick: () => console.log("Profile clicked"),
      },
      {
        icon: CreditCard,
        label: "Billing",
        onClick: () => console.log("Billing clicked"),
      },
      {
        icon: Bell,
        label: "Notifications",
        onClick: () => console.log("Notifications clicked"),
      },
      {
        icon: LogOut,
        label: "Log out",
        onClick: () => console.log("Logout clicked"),
      },
    ],
  };

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Sidebar */}
      <div
        className="flex-shrink-0 h-full overflow-hidden transition-all ease-out"
        style={{
          width: isCollapsed ? "0px" : "256px",
          transitionDuration: "250ms",
        }}
      >
        <div
          className="h-full w-64 bg-background transition-transform ease-out"
          style={{
            transform: isCollapsed ? "translateX(-100%)" : "translateX(0)",
            transitionDuration: "250ms",
          }}
        >
          <Sidebar
            brand={brandConfig}
            navigation={navigationItems}
            user={userConfig}
          />
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <Content />
        <StatusBar />
      </div>
    </div>
  );
}
