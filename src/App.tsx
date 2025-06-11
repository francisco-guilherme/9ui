import { useEffect } from "react"
import { useMDXComponents } from "@/mdx-components"
import { MDXProvider } from "@mdx-js/react"
import { ThemeProvider } from "next-themes"
import { Navigate, Route, Routes } from "react-router-dom"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Toaster } from "@/components/ui/sonner"

import { cn } from "@/lib/utils"

import DocPage from "./pages/docs/DocPage"
import DocsLayout from "./pages/docs/DocsLayout"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ThemesPage from "./pages/ThemesPage"

function App() {
  const components = useMDXComponents()

  useEffect(() => {
    // Load Seline analytics script
    if (import.meta.env.VITE_SELINE_TOKEN) {
      const script = document.createElement("script")
      script.src = "https://cdn.seline.so/seline.js"
      script.setAttribute("data-token", import.meta.env.VITE_SELINE_TOKEN)
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  return (
    <MDXProvider components={components}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        enableColorScheme
      >
        <div
          className={cn("Root flex flex-1 flex-col font-sans antialiased")}
          data-vaul-drawer-wrapper=""
        >
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/themes" element={<ThemesPage />} />

              {/* Redirects */}
              <Route
                path="/docs"
                element={
                  <Navigate to="/docs/getting-started/introduction" replace />
                }
              />
              <Route
                path="/docs/getting-started"
                element={
                  <Navigate to="/docs/getting-started/introduction" replace />
                }
              />
              <Route
                path="/docs/components"
                element={<Navigate to="/docs/components/accordion" replace />}
              />

              {/* Docs routes */}
              <Route path="/docs/*" element={<DocsLayout />}>
                <Route path="*" element={<DocPage />} />
              </Route>

              {/* 404 route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster />
      </ThemeProvider>
    </MDXProvider>
  )
}

export default App
