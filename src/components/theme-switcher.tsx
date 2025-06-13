import { useCallback, useState } from "react"
import { MoonIcon, SunIcon } from "lucide-react"

import { Button } from "./ui/button"

export function ThemeSwitcher() {
  const [theme, setTheme] = useState("light")

  const switchTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark")
  }, [theme, setTheme])

  return (
    <Button onClick={switchTheme} variant="outline" size="icon">
      <MoonIcon className="dark:hidden" />
      <SunIcon className="hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
