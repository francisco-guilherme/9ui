import { Suspense } from "react"
import { useMDXComponents } from "@/mdx-components"
import { MDXProvider } from "@mdx-js/react"
import routes from "~react-pages"
import { useRoutes } from "react-router-dom"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

import { cn } from "@/lib/utils"

function App() {
  const components = useMDXComponents()
  const routeElements = useRoutes(routes)

  return (
    <MDXProvider components={components}>
      <div className={cn("Root flex flex-1 flex-col font-sans antialiased")}>
        <Header />
        <main className="flex-1">
          <Suspense fallback={<div>Loading...</div>}>{routeElements}</Suspense>
        </main>
        <Footer />
      </div>
    </MDXProvider>
  )
}

export default App
