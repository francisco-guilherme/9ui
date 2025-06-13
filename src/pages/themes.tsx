import { Suspense, useState } from "react"

import { CardsGrid } from "../components/pages/cards-grid"
import { CustomizeTheme } from "../components/pages/customize-theme"
import { ThemeSettings } from "../config/theme"
import { generateTheme } from "../lib/generate-theme"

const Themes = () => {
  const [theme, setTheme] = useState<ThemeSettings>({
    shade: "zinc",
    primaryColor: "neutral",
    radius: 0.5,
    flat: false,
  })

  return (
    <main className="container mx-auto py-10">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Themes</h1>
          <p className="text-sm text-muted-foreground">
            Customize your theme and see the changes live.
          </p>
          <CustomizeTheme theme={theme} setTheme={setTheme} />
        </div>
        <CardsGrid />
        <Suspense fallback={<div>Loading...</div>}>
          <style>
            {generateTheme(
              theme.shade,
              theme.primaryColor,
              theme.radius,
              theme.flat,
              true
            )}
          </style>
        </Suspense>
      </div>
    </main>
  )
}

export default Themes
