import { Button, Icons, ThemeToggle } from "@nui/core";

import { DesktopNav } from "../navigation/desktop";
import { MobileNav } from "../navigation/mobile";

const socialLinks = [
  {
    href: "https://x.com/borabalogluu",
    icon: Icons.twitter,
    label: "Twitter/X profile",
  },
  {
    href: "https://github.com/borabaloglu/9ui",
    icon: Icons.gitHub,
    label: "GitHub repository",
  },
] as const;

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur md:px-2">
      <div className="container mx-auto flex h-14 max-w-7xl items-center">
        <DesktopNav />
        <MobileNav />

        <div className="ml-auto flex items-center gap-1">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <Button
              key={href}
              variant="outline"
              size="icon"
              render={
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <Icon />
                </a>
              }
            />
          ))}
          <ThemeToggle
            mode="combined"
            variant="outline"
            size="icon"
            tooltip="Toggle theme mode and variant"
          />
        </div>
      </div>
    </header>
  );
};
