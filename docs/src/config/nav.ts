import { type NavItem, type SidebarGroup } from "@/types/nav";

export interface NavConfig {
  mainNav: NavItem[];
  sidebarNav: SidebarGroup[];
}

export const navConfig: NavConfig = {
  mainNav: [
    {
      title: "Docs",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/components",
    },
    {
      title: "Themes",
      href: "/themes",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/introduction",
        },
        {
          title: "Roadmap",
          href: "/docs/roadmap",
        },
        {
          title: "Installation",
          href: "/docs/installation",
        },
        {
          title: "Theming",
          href: "/docs/theming",
        },
        {
          title: "Dark mode",
          href: "/docs/dark-mode",
        },
        {
          title: "Changelog",
          href: "/docs/changelog",
        },
        {
          title: "Figma",
          href: "/docs/figma",
          disabled: true,
          label: "Soon",
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Accordion",
          href: "/components/accordion",
        },
        {
          title: "Alert Dialog",
          href: "/components/alert-dialog",
        },
        {
          title: "Alert",
          href: "/components/alert",
        },
        {
          title: "Aspect Ratio",
          href: "/components/aspect-ratio",
        },
        {
          title: "Avatar",
          href: "/components/avatar",
        },
        {
          title: "Badge",
          href: "/components/badge",
        },
        {
          title: "Breadcrumbs",
          href: "/components/breadcrumbs",
        },
        {
          title: "Button",
          href: "/components/button",
        },
        {
          title: "Calendar",
          href: "/components/calendar",
        },
        {
          title: "Card",
          href: "/components/card",
        },
        {
          title: "Carousel",
          href: "/components/carousel",
        },
        {
          title: "Chart",
          href: "/components/chart",
        },
        {
          title: "Checkbox",
          href: "/components/checkbox",
        },
        {
          title: "Checkbox Group",
          href: "/components/checkbox-group",
          label: "New",
        },
        {
          title: "Collapsible",
          href: "/components/collapsible",
        },
        {
          title: "Combobox",
          href: "/components/combobox",
        },
        {
          title: "Command",
          href: "/components/command",
        },
        {
          title: "Context Menu",
          href: "/components/context-menu",
        },
        {
          title: "Data Table",
          href: "/components/data-table",
          disabled: true,
          label: "Soon",
        },
        {
          title: "Date Picker",
          href: "/components/date-picker",
        },
        {
          title: "Dialog",
          href: "/components/dialog",
        },
        {
          title: "Drawer",
          href: "/components/drawer",
        },
        {
          title: "Dropdown",
          href: "/components/dropdown",
        },
        {
          title: "Emoji Picker",
          href: "/components/emoji-picker",
        },
        {
          title: "Form",
          href: "/components/form",
        },
        {
          title: "Input",
          href: "/components/input",
        },
        {
          title: "Input OTP",
          href: "/components/input-otp",
        },
        {
          title: "Kbd",
          href: "/components/kbd",
        },
        {
          title: "Menubar",
          href: "/components/menubar",
        },
        {
          title: "Meter",
          href: "/components/meter",
          label: "New",
        },
        {
          title: "Number Field",
          href: "/components/number-field",
          disabled: true,
          label: "Soon",
        },
        {
          title: "Popover",
          href: "/components/popover",
        },
        {
          title: "Preview Card",
          href: "/components/preview-card",
        },
        {
          title: "Progress",
          href: "/components/progress",
        },
        {
          title: "Radio Group",
          href: "/components/radio-group",
        },
        {
          title: "Scroll Area",
          href: "/components/scroll-area",
        },
        {
          title: "Select",
          href: "/components/select",
        },
        {
          title: "Separator",
          href: "/components/separator",
        },
        {
          title: "Sheet",
          href: "/components/sheet",
        },
        {
          title: "Skeleton",
          href: "/components/skeleton",
        },
        {
          title: "Slider",
          href: "/components/slider",
        },
        {
          title: "Sonner",
          href: "/components/sonner",
        },
        {
          title: "Switch",
          href: "/components/switch",
        },
        {
          title: "Table",
          href: "/components/table",
        },
        {
          title: "Tabs",
          href: "/components/tabs",
        },
        {
          title: "Textarea",
          href: "/components/textarea",
        },
        {
          title: "Toast",
          href: "/components/toast",
          disabled: true,
          label: "Soon",
        },
        {
          title: "Toggle",
          href: "/components/toggle",
        },
        {
          title: "Toggle Group",
          href: "/components/toggle-group",
        },
        {
          title: "Toolbar",
          href: "/components/toolbar",
        },
        {
          title: "Tooltip",
          href: "/components/tooltip",
        },
      ],
    },
  ],
};
