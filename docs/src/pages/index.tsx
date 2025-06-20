import { Badge, Button, Separator } from "@9ui/ui";
import { ArrowRightIcon, BookOpenIcon } from "lucide-react";
import { Link } from "react-router-dom";

import { Examples } from "@/components/features/examples";
import { PageLayout } from "@/components/page/page-layout";

const Home = () => (
  <PageLayout>
    <div className="flex flex-col gap-12 py-10">
      <section
        className="flex flex-col items-center text-center"
        aria-labelledby="home-heading"
      >
        <Badge variant="outline" className="h-8 gap-2" aria-label="New release">
          <span role="img" aria-label="party popper">
            🎉
          </span>
          First components are here!
        </Badge>

        <div className="mt-4 space-y-4">
          <h1 id="home-heading" className="text-4xl font-bold">
            Build your design system
          </h1>
          <p className="max-w-xl leading-7">
            A collection of components you can copy and paste into your project.
            Built with{" "}
            <a
              href="https://base-ui.com/"
              className="underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Base UI
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com/"
              className="underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS
            </a>
            . Easy to customize. Free and open source.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button
            className="gap-2"
            size="sm"
            render={
              <Link to="/docs/introduction" aria-label="Read the documentation">
                <BookOpenIcon size={16} aria-hidden="true" />
                Get Started
              </Link>
            }
          />
          <Button
            variant="outline"
            size="sm"
            className="group gap-2"
            render={
              <Link
                to="/components/accordion"
                aria-label="Browse all available components"
              >
                Browse Components
                <ArrowRightIcon
                  className="size-4 -translate-x-0.5 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            }
          />
        </div>
      </section>

      <Separator />

      <Examples />
    </div>
  </PageLayout>
);

export default Home;
