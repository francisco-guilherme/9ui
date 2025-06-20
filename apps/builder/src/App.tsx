import { ShellProvider, ThemeProvider } from "@nui/core";

import { Layout } from "./components/layout";

export function App() {
  return (
    <div className="app h-screen w-screen overflow-hidden">
      <ThemeProvider>
        <ShellProvider>
          <Layout />
        </ShellProvider>
      </ThemeProvider>
    </div>
  );
}
