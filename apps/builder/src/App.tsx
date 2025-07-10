import { ShellProvider, ThemeProvider } from "@nui/core";

import { Layout } from "./components/layout";

export function App() {
  return (
    <div className="app h-screen w-screen overflow-hidden">
      <ThemeProvider
        storageKey="builder-theme"
        availableVariants={["default", "slate", "purple", "blue"]}
        defaultTheme={{ mode: "auto", variant: "default" }}
      >
        <ShellProvider>
          <Layout />
        </ShellProvider>
      </ThemeProvider>
    </div>
  );
}
