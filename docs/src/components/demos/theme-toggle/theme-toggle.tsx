import { Button } from "@9ui/ui";
import { MoonIcon, SunIcon } from "lucide-react";
import * as React from "react";

export default function ThemeToggleDemo() {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return (
    <Button onClick={toggleTheme} variant="ghost" size="icon">
      <MoonIcon className="dark:hidden" />
      <SunIcon className="hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
