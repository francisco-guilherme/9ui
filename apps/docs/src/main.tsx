import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Palette, X } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  cn,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  ThemeEditor,
  ThemeProvider,
  ThemeToggle,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  useTheme,
} from "@nui/ui";

import { CardsGrid } from "./components/cards-grid";
import { Header, HeaderBrand, HeaderNavLink } from "./components/header";
import { MCPDemo } from "./components/mcp-demo";
import { MCPDocs } from "./components/mcp-docs";

function App() {
  const [isThemeEditorOpen, setIsThemeEditorOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<
    "demo" | "mcp" | "components" | "docs"
  >("demo");
  const {
    config: { mode, variant },
    isDark,
    availableVariants,
    toggleMode,
    setVariant,
  } = useTheme();

  // Keyboard shortcut to toggle theme editor (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setIsThemeEditorOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <Header
          title={
            <HeaderBrand>
              nui
              <Badge variant="success" className="ml-2">
                Live
              </Badge>
            </HeaderBrand>
          }
          navigation={
            <>
              <button
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-colors relative py-2",
                  currentPage === "demo" && [
                    "text-foreground font-medium",
                    "after:absolute after:bottom-0 after:left-0 after:right-0",
                    "after:h-0.5 after:bg-primary after:rounded-full",
                  ],
                )}
                onClick={() => setCurrentPage("demo")}
              >
                Demo
              </button>
              <button
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-colors relative py-2",
                  currentPage === "mcp" && [
                    "text-foreground font-medium",
                    "after:absolute after:bottom-0 after:left-0 after:right-0",
                    "after:h-0.5 after:bg-primary after:rounded-full",
                  ],
                )}
                onClick={() => setCurrentPage("mcp")}
              >
                MCP Client
              </button>
              <HeaderNavLink href="#" active={currentPage === "components"}>
                Components
              </HeaderNavLink>
              <button
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-colors relative py-2",
                  currentPage === "docs" && [
                    "text-foreground font-medium",
                    "after:absolute after:bottom-0 after:left-0 after:right-0",
                    "after:h-0.5 after:bg-primary after:rounded-full",
                  ],
                )}
                onClick={() => setCurrentPage("docs")}
              >
                Docs
              </button>
            </>
          }
          actions={
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger
                  onClick={() => setIsThemeEditorOpen(!isThemeEditorOpen)}
                  className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 text-foreground hover:bg-accent/80 hover:text-accent-foreground size-8"
                >
                  <Palette className="size-4" />
                  {isThemeEditorOpen && (
                    <div className="absolute -top-1 -right-1 size-2 bg-primary rounded-full" />
                  )}
                </TooltipTrigger>
                <TooltipContent>
                  <p>Theme Editor (⌘K)</p>
                </TooltipContent>
              </Tooltip>
              <Badge variant="outline">Admin</Badge>
              <Avatar size="sm">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="User Avatar"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          }
          themeToggleProps={{
            showLabels: false,
          }}
          sticky
          bordered
        />

        <div className="max-w-7xl mx-auto p-8 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold">nui Component Library</h1>
            <p className="text-muted-foreground text-lg">
              Explore our comprehensive collection of UI components with live
              theme switching and real-time color customization
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Palette className="size-4" />
              <span>
                Click the{" "}
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-muted/50 rounded text-xs font-medium">
                  <Palette className="size-3" />
                  palette
                </span>{" "}
                icon or press{" "}
                <kbd className="px-1.5 py-0.5 text-xs bg-muted border rounded font-mono">
                  ⌘K
                </kbd>{" "}
                to customize colors
              </span>
            </div>
          </div>

          {/* Theme Controls Status Bar */}
          <div className="flex items-center justify-center gap-4 p-4 bg-card/50 border rounded-lg">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Mode:</span>
              <Badge
                variant={isDark ? "secondary" : "default"}
                className="cursor-pointer hover:opacity-80 transition-opacity"
                onClick={toggleMode}
              >
                {mode}
              </Badge>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Variant:</span>
              <Select
                value={variant}
                onValueChange={(value) => setVariant(value as string)}
              >
                <SelectTrigger className="w-24 h-6 text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {availableVariants.map((v) => (
                    <SelectItem key={v} value={v}>
                      {v.charAt(0).toUpperCase() + v.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <ThemeToggle size="icon-sm" variant="ghost" modeOnly />
              <ThemeToggle size="icon-sm" variant="ghost" variantOnly />
              <Tooltip>
                <TooltipTrigger
                  onClick={() => setIsThemeEditorOpen(!isThemeEditorOpen)}
                  className={cn(
                    "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 text-foreground hover:bg-accent/80 hover:text-accent-foreground size-8",
                    isThemeEditorOpen ? "bg-accent text-accent-foreground" : "",
                  )}
                >
                  <Palette className="size-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Theme Editor (⌘K)</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          {currentPage === "demo" && <CardsGrid />}
          {currentPage === "mcp" && <MCPDemo />}
          {currentPage === "components" && (
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">Components</h1>
              <p className="text-muted-foreground text-lg">
                Component documentation coming soon...
              </p>
            </div>
          )}
          {currentPage === "docs" && <MCPDocs />}
        </div>
      </div>

      {/* Floating Theme Editor Panel */}
      {isThemeEditorOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setIsThemeEditorOpen(false)}
          />

          {/* Panel */}
          <div className="fixed inset-0 z-50 flex items-start justify-end p-4 pointer-events-none">
            <div className="pointer-events-auto w-full max-w-sm h-[calc(100vh-2rem)] bg-background/98 backdrop-blur-md border rounded-xl shadow-2xl overflow-hidden animate-in slide-in-from-right-full duration-300">
              <div className="flex items-center justify-between p-3 border-b bg-background/90">
                <div className="flex items-center gap-2">
                  <Palette className="size-4 text-primary" />
                  <h2 className="font-medium text-sm">Theme Editor</h2>
                </div>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => setIsThemeEditorOpen(false)}
                  className="hover:bg-destructive/10 hover:text-destructive"
                >
                  <X className="size-3" />
                </Button>
              </div>
              <div className="h-full overflow-auto">
                <div className="p-3">
                  <div className="mb-3 p-2 bg-muted/30 rounded-lg text-xs text-muted-foreground">
                    <p className="font-medium mb-1">✨ Live Preview</p>
                    <p>
                      Adjust colors and see changes instantly across all
                      components.
                    </p>
                  </div>
                  <ThemeEditor />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
