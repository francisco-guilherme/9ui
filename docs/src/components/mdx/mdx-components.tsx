import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Separator,
} from "@9ui/ui";
import { MessageSquareWarningIcon } from "lucide-react";
import * as React from "react";
import { Link } from "react-router-dom";

import { Icons } from "@/components/common/icons";
import { ThemeSwitcher } from "@/components/common/theme-switcher";
import { cn } from "@/lib/utils";

import { ComponentAnatomy } from "./blocks/component-anatomy";
import { ComponentInstallation } from "./blocks/component-installation";
import { ComponentPreview } from "./blocks/component-preview";
import { ComponentSource } from "./blocks/component-source";
import { MDXCodeBlock } from "./blocks/mdx-code-block";

interface MDXComponentsMap {
  [key: string]: React.FC<any> | MDXComponentsMap;
}

// ----------------------------------------------------------------------------
// HTML ELEMENTS
// ----------------------------------------------------------------------------

const Typography = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl",
        props.className,
      )}
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        props.className,
      )}
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
        props.className,
      )}
      {...props}
    />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        props.className,
      )}
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-4", props.className)}
      {...props}
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className={cn("font-semibold", props.className)} {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn(
        "font-medium text-foreground underline underline-offset-4",
        props.className,
      )}
      {...props}
    />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic text-muted-foreground",
        props.className,
      )}
      {...props}
    />
  ),
  hr: (props: React.HTMLAttributes<HTMLDivElement>) => (
    <Separator className={cn("my-8", props.className)} {...props} />
  ),
  img: ({
    className,
    alt,
    ...rest
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img className={cn("rounded-lg border", className)} alt={alt} {...rest} />
  ),
};

const Lists = {
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn("mt-2 space-y-2 font-normal", props.className)}
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn("mt-2 space-y-2 font-normal", props.className)}
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li
      className={cn("ml-2 list-inside list-disc", props.className)}
      {...props}
    />
  ),
};

const Tables = {
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-hidden rounded-lg border">
      <table className={cn("w-full", props.className)} {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className={cn("border-b bg-muted/40", props.className)} {...props} />
  ),
  tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody
      className={cn("divide-y divide-muted", props.className)}
      {...props}
    />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={props.className} {...props} />
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "px-4 py-2 text-left font-medium text-muted-foreground [&[align=center]]:text-center [&[align=right]]:text-right",
        props.className,
      )}
      {...props}
    />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "px-4 py-2 [&[align=center]]:text-center [&[align=right]]:text-right",
        props.className,
      )}
      {...props}
    />
  ),
};

const Code = {
  code: ({
    className,
    __rawString__,
    __npmCommand__,
    __yarnCommand__,
    __pnpmCommand__,
    __bunCommand__,
    __title__,
    __lang__,
    __unwrapCode__,
    __isCommand__,
    "data-code": _code,
    "data-title": _title,
    "data-language": _lang,
    "data-theme": _theme,
    "data-inline": _inline,
    ...props
  }: React.HTMLAttributes<HTMLElement> & Record<string, unknown>) => (
    <code
      className={cn(
        "relative rounded-sm p-4 font-mono text-xs font-medium",
        className,
      )}
      {...props}
    />
  ),
};

// ----------------------------------------------------------------------------
// Layout + Docs Components
// ----------------------------------------------------------------------------

const Layout = {
  LinkCard: ({
    className,
    to,
    ...props
  }: React.ComponentProps<typeof Link>) => (
    <Link
      to={to}
      className={cn(
        "flex w-full flex-col items-center justify-center gap-3 rounded-lg border bg-card p-10 font-medium text-card-foreground shadow transition-colors hover:bg-card/80 md:p-10",
        className,
      )}
      {...props}
    />
  ),
};

const Step = ({ className, ...props }: React.ComponentProps<"h3">) => (
  <h3
    className={cn("step mt-8 font-semibold tracking-tight", className)}
    {...props}
  />
);

const Steps = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className="steps mb-12 ml-4 border-l pl-8 [counter-reset:step]"
    {...props}
  />
);

// ----------------------------------------------------------------------------
// MDX Components Mapping
// ----------------------------------------------------------------------------

const components: MDXComponentsMap = {
  // Typography
  ...Typography,

  // Lists
  ...Lists,

  // Tables
  ...Tables,

  // Code Blocks
  code: Code.code,
  pre: MDXCodeBlock,

  // Layout
  LinkCard: Layout.LinkCard,

  // Documentation
  Step,
  Steps,

  // Component Blocks
  ComponentPreview,
  ComponentSource,
  ComponentInstallation,
  ComponentAnatomy,

  // Utilities
  Icons,
  ThemeSwitcher,

  // UI
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,

  // Icons
  MessageSquareWarningIcon,
};

export const useMDXComponents = (): MDXComponentsMap => components;
