import { useEffect } from "react"
import { ArrowRightIcon, BookOpenIcon } from "lucide-react"
import { Link } from "react-router-dom"

import Examples from "@/components/examples"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import { siteConfig } from "@/config/site"

const Home = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = siteConfig.name

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute("content", siteConfig.description)
    } else {
      const meta = document.createElement("meta")
      meta.name = "description"
      meta.content = siteConfig.description
      document.head.appendChild(meta)
    }
  }, [])

  return (
    <div className="container flex flex-col gap-12 py-10">
      <main className="flex flex-col gap-8">
        <div className="flex flex-col items-center">
          <Badge variant="outline" className="h-8 gap-2">
            <span>🎉</span>First components are here!
          </Badge>
          <div className="mt-4 space-y-4 text-center">
            <h1 className="text-4xl font-bold">Build your design system</h1>
            <p className="max-w-xl leading-7">
              A collection of components that you can copy and paste into your
              project. Built with{" "}
              <a
                href="https://base-ui.com/"
                className="underline underline-offset-4"
              >
                Base UI
              </a>{" "}
              and{" "}
              <a
                href="https://tailwindcss.com/"
                className="underline underline-offset-4"
              >
                Tailwind CSS
              </a>{" "}
              . Easy to customize. Free and open source.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <Button
              className="gap-2"
              size="sm"
              render={
                <Link to="/docs">
                  <BookOpenIcon size={16} />
                  Get Started
                </Link>
              }
            />

            <Button
              variant="outline"
              size="sm"
              className="group gap-2"
              render={
                <Link to="/components">
                  Browse Components
                  <ArrowRightIcon className="size-4 -translate-x-0.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              }
            />
          </div>
        </div>
        <Separator />
        <Examples />
      </main>
    </div>
  )
}

export default Home
