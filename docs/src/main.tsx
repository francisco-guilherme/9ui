import ReactDOM from "react-dom/client";
// import { Docs } from "virtual:docs-app";
import { Button, ThemeToggle, ThemeProvider } from "@nui/ui";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Theme System Demo</h1>

      <div className="flex gap-2">
        <ThemeToggle modeOnly />
        <ThemeToggle variantOnly />
      </div>

      <div className="space-y-2">
        <Button variant="default">Default Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
      </div>

      <div className="p-4 bg-card border rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Card Example</h2>
        <p className="text-muted-foreground">
          This card demonstrates the theme system with semantic colors.
        </p>
      </div>
    </div>
  </ThemeProvider>
);
