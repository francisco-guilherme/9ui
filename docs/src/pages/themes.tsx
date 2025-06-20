import { useState } from "react";

import { ThemeSettings } from "@/config/theme";
import { CardsGrid } from "@/components/features/cards-grid";
import { CustomizeTheme } from "@/components/features/customize-theme";
import { Layout } from "@/components/layout/layout";

const Themes = () => {
  const [theme, setTheme] = useState<ThemeSettings>({
    shade: "zinc",
    primaryColor: "neutral",
    radius: 0.5,
    flat: false,
  });

  return (
    <Layout>
      <div className="py-10">
        <section
          aria-labelledby="themes-heading"
          className="flex flex-col gap-4"
        >
          <header className="flex flex-col gap-2">
            <h1 id="themes-heading" className="text-2xl font-bold">
              Themes
            </h1>
            <p className="text-sm text-muted-foreground">
              Customize your theme and see the changes live.
            </p>
            <CustomizeTheme theme={theme} setTheme={setTheme} />
          </header>

          <CardsGrid />
        </section>
      </div>
    </Layout>
  );
};

export default Themes;
