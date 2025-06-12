import { Suspense, useEffect } from "react"
import { useMDXComponents } from "@/mdx-components"
import { MDXProvider } from "@mdx-js/react"
import routes from "~react-pages"
import { ThemeProvider } from "next-themes"
import { useRoutes } from "react-router-dom"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Toaster } from "@/components/ui/sonner"

import { cn } from "@/lib/utils"

function App() {
  const components = useMDXComponents()
  const routeElements = useRoutes(routes)

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
            <Suspense fallback={<div>Loading...</div>}>
              {routeElements}
            </Suspense>
          </main>
          <Footer />
        </div>
        <Toaster />
      </ThemeProvider>
    </MDXProvider>
  )
}

export default App
