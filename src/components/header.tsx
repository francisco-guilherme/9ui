import { Icons } from "@/components/icons"

import { MainNav } from "./nav/main-nav"
import { MobileNav } from "./nav/mobile-nav"
import { ThemeSwitcher } from "./theme-switcher"
import { Button } from "./ui/button"

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/80 md:px-2">
      <div className="container flex h-14 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex-1" />
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="icon"
            render={
              <a
                href="https://x.com/borabalogluu"
                target="_blank"
                rel="noreferrer"
              >
                <Icons.twitter />
                <span className="sr-only">X</span>
              </a>
            }
          />

          <Button
            variant="outline"
            size="icon"
            render={
              <a
                href="https://github.com/borabaloglu/9ui"
                target="_blank"
                rel="noreferrer"
              >
                <Icons.gitHub />
                <span className="sr-only">GitHub</span>
              </a>
            }
          />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}
