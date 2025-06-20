import { NavLink, Outlet } from "react-router-dom";
import { sidebar } from "virtual:docs-sidebar";

import { NavSection } from "./NavSection";

import "../style.css";

interface SidebarItem {
  title: string;
  path: string;
}

export const groupSiddebarItems = (sidebar: SidebarItem[]) => {
  return sidebar.reduce<Record<string, SidebarItem[]>>((acc, item) => {
    const [section = "main"] = item.path.split("/").filter(Boolean);
    if (!acc[section]) acc[section] = [];
    acc[section].push(item);
    return acc;
  }, {});
};

export const Layout = () => {
  const groupedItems = groupSiddebarItems(sidebar as SidebarItem[]);

  return (
    <div className="max-w-screen-md mx-auto p-6 text-gray-900">
      <header className="mb-8">
        <nav className="flex flex-wrap gap-4 text-blue-600 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-800 font-semibold" : "hover:text-blue-800"
            }
          >
            Home
          </NavLink>

          {Object.entries(groupedItems)
            .sort(([a], [b]) =>
              a === "main" ? -1 : b === "main" ? 1 : a.localeCompare(b),
            )
            .map(([section, items]) => (
              <NavSection key={section} section={section} items={items} />
            ))}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="mt-8 pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} nui. All rights reserved.
        </p>
      </footer>
    </div>
  );
};
