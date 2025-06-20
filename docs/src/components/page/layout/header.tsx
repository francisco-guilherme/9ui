import { Button } from "@9ui/ui";

import { Icons } from "@/components/common/icons";
import { ThemeSwitcher } from "@/components/common/theme-switcher";

import { MainNav } from "../nav/main-nav";
import { MobileNav } from "../nav/mobile-nav";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur md:px-2">
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
                aria-label="Twitter/X profile"
              >
                <Icons.twitter />
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
                aria-label="GitHub repository"
              >
                <Icons.gitHub />
              </a>
            }
          />

          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};
