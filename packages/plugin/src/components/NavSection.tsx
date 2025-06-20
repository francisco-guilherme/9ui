import { NavLink } from "react-router-dom";

interface SidebarItem {
  title: string;
  path: string;
}

interface NavSectionProps {
  section: string;
  items: SidebarItem[];
}

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-blue-800 font-semibold" : "hover:text-blue-800";

export function NavSection({ section, items }: NavSectionProps) {
  if (section === "main") {
    return (
      <>
        {items
          .filter((item) => item.path !== "/")
          .map((item) => (
            <NavLink key={item.path} to={item.path} className={navLinkClass}>
              {item.title}
            </NavLink>
          ))}
      </>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-600 capitalize">{section}:</span>
      {items.map((item) => (
        <NavLink key={item.path} to={item.path} className={navLinkClass}>
          {item.title}
        </NavLink>
      ))}
    </div>
  );
}
