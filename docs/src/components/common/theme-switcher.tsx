import { Button } from "@9ui/ui";
import { MoonIcon, SunIcon } from "lucide-react";
import { useCallback, useState } from "react";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  const switchTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return (
    <Button onClick={switchTheme} variant="outline" size="icon">
      <MoonIcon className="dark:hidden" />
      <SunIcon className="hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
