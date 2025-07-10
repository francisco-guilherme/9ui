import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { DocsApp } from "virtual:docs-app";
import { ThemeProvider } from "@nui/core";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider
      storageKey="docs-theme"
      availableVariants={["default", "slate", "purple", "blue"]}
      defaultTheme={{ mode: "auto", variant: "default" }}
    >
      <DocsApp />
    </ThemeProvider>
  </StrictMode>,
);
