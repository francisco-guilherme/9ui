import { ChevronDown, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Button, useShell } from "@nui/core";

export function Header() {
  const { isCollapsed, toggleSidebar } = useShell();

  return (
    <div className="h-12 px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          className="p-2 transition-all duration-300 ease-out hover:bg-gray-100 hover:scale-105"
          onClick={toggleSidebar}
        >
          <div className="relative w-4 h-4">
            <PanelLeftOpen
              className={`
                absolute inset-0 h-4 w-4
                transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${isCollapsed ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-180 scale-75"}
              `}
            />
            <PanelLeftClose
              className={`
                absolute inset-0 h-4 w-4
                transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${isCollapsed ? "opacity-0 rotate-180 scale-75" : "opacity-100 rotate-0 scale-100"}
              `}
            />
          </div>
        </Button>
        <Button variant="ghost" size="sm">
          Components
          <ChevronDown className="ml-1 h-3 w-3" />
        </Button>
        {/* <ThemeEditorFull>
          <Button variant="ghost" size="sm">
            Design System
            <ChevronDown className="ml-1 h-3 w-3" />
          </Button>
        </ThemeEditorFull> */}
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm">
          My First Project
          <ChevronDown className="ml-1 h-3 w-3" />
        </Button>
        <Button size="sm" className="bg-green-600 hover:bg-green-700">
          Share
        </Button>
      </div>
    </div>
  );
}
