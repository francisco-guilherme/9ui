import type { ContentRegistry } from "@/types/content"

export const contentRegistry: ContentRegistry = {
  "components/accordion": {
    type: "file",
    path: "components/accordion.mdx",
    meta: {
      title: "Accordion",
      description: "A collapsible section to show or hide content.",
    },
    urlPath: "components/accordion",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Accordion", path: "/docs/components/accordion" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
    ],
  },
  "components/alert-dialog": {
    type: "file",
    path: "components/alert-dialog.mdx",
    meta: {
      title: "Alert Dialog",
      description:
        "A modal dialog for critical messages or confirmation actions.",
    },
    urlPath: "components/alert-dialog",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Alert Dialog", path: "/docs/components/alert-dialog" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
    ],
  },
  "components/alert": {
    type: "file",
    path: "components/alert.mdx",
    meta: {
      title: "Alert",
      description: "Used to highlight important messages.",
    },
    urlPath: "components/alert",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Alert", path: "/docs/components/alert" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "Success", url: "#success", depth: 3 },
      { value: "Info", url: "#info", depth: 3 },
      { value: "Warning", url: "#warning", depth: 3 },
      { value: "Danger", url: "#danger", depth: 3 },
      { value: "With action", url: "#with-action", depth: 3 },
    ],
  },
  "components/aspect-ratio": {
    type: "file",
    path: "components/aspect-ratio.mdx",
    meta: {
      title: "Aspect Ratio",
      description:
        "Allows you to display an element at a specific aspect ratio.",
    },
    urlPath: "components/aspect-ratio",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Aspect Ratio", path: "/docs/components/aspect-ratio" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
    ],
  },
  "components/avatar": {
    type: "file",
    path: "components/avatar.mdx",
    meta: {
      title: "Avatar",
      description: "Displays an avatar with a fallback.",
    },
    urlPath: "components/avatar",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Avatar", path: "/docs/components/avatar" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "Sizes", url: "#sizes", depth: 3 },
      { value: "With Fallback", url: "#with-fallback", depth: 3 },
    ],
  },
  "components/badge": {
    type: "file",
    path: "components/badge.mdx",
    meta: {
      title: "Badge",
      description: "Displays a badge for labeling or highlighting content.",
    },
    urlPath: "components/badge",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Badge", path: "/docs/components/badge" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "Outline", url: "#outline", depth: 3 },
      { value: "Secondary", url: "#secondary", depth: 3 },
      { value: "Success", url: "#success", depth: 3 },
      { value: "Warning", url: "#warning", depth: 3 },
      { value: "Info", url: "#info", depth: 3 },
      { value: "Danger", url: "#danger", depth: 3 },
    ],
  },
  "components/breadcrumbs": {
    type: "file",
    path: "components/breadcrumbs.mdx",
    meta: {
      title: "Breadcrumbs",
      description: "Displays a navigation path for better context.",
    },
    urlPath: "components/breadcrumbs",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Breadcrumbs", path: "/docs/components/breadcrumbs" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "Custom Separator", url: "#custom-separator", depth: 3 },
    ],
  },
  "components/button": {
    type: "file",
    path: "components/button.mdx",
    meta: {
      title: "Button",
      description: "Displays a button for user interaction.",
    },
    urlPath: "components/button",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Button", path: "/docs/components/button" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "Sizes", url: "#sizes", depth: 3 },
      { value: "With Icon", url: "#with-icon", depth: 3 },
      { value: "Secondary", url: "#secondary", depth: 3 },
      { value: "Outline", url: "#outline", depth: 3 },
      { value: "Ghost", url: "#ghost", depth: 3 },
      { value: "Link", url: "#link", depth: 3 },
      { value: "Destructive", url: "#destructive", depth: 3 },
      { value: "Loading", url: "#loading", depth: 3 },
    ],
  },
  "components/calendar": {
    type: "file",
    path: "components/calendar.mdx",
    meta: {
      title: "Calendar",
      description: "Provides a visual interface for date selection.",
    },
    urlPath: "components/calendar",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Calendar", path: "/docs/components/calendar" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "Single Date", url: "#single-date", depth: 3 },
      { value: "Multiple Dates", url: "#multiple-dates", depth: 3 },
      { value: "Date Range", url: "#date-range", depth: 3 },
      { value: "Disabled", url: "#disabled", depth: 3 },
    ],
  },
  "components/card": {
    type: "file",
    path: "components/card.mdx",
    meta: {
      title: "Card",
      description: "Used to group and present information in a structured box.",
    },
    urlPath: "components/card",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Card", path: "/docs/components/card" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "With image", url: "#with-image", depth: 3 },
    ],
  },
  "components/carousel": {
    type: "file",
    path: "components/carousel.mdx",
    meta: {
      title: "Carousel",
      description: "A slider to display multiple items in a scrollable view.",
    },
    urlPath: "components/carousel",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Carousel", path: "/docs/components/carousel" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "Vertical", url: "#vertical", depth: 3 },
      { value: "Multiple", url: "#multiple", depth: 3 },
      { value: "Looped", url: "#looped", depth: 3 },
      { value: "Thumbnail", url: "#thumbnail", depth: 3 },
    ],
  },
  "components/chart": {
    type: "file",
    path: "components/chart.mdx",
    meta: {
      title: "Chart",
      description: "A visual representation of data in various formats.",
    },
    urlPath: "components/chart",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Chart", path: "/docs/components/chart" },
    ],
    tableOfContents: [
      { value: "About", url: "#about", depth: 2 },
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "Area Chart", url: "#area-chart", depth: 3 },
      { value: "Bar Chart", url: "#bar-chart", depth: 3 },
      { value: "Line Chart", url: "#line-chart", depth: 3 },
      { value: "Pie Chart", url: "#pie-chart", depth: 3 },
      { value: "Radar Chart", url: "#radar-chart", depth: 3 },
      { value: "Radial Bar Chart", url: "#radial-bar-chart", depth: 3 },
      { value: "Scatter Chart", url: "#scatter-chart", depth: 3 },
    ],
  },
  "components/checkbox-group": {
    type: "file",
    path: "components/checkbox-group.mdx",
    meta: {
      title: "Checkbox Group",
      description: "Manages selection state across multiple checkboxes.",
    },
    urlPath: "components/checkbox-group",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Checkbox Group", path: "/docs/components/checkbox-group" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
    ],
  },
  "components/checkbox": {
    type: "file",
    path: "components/checkbox.mdx",
    meta: {
      title: "Checkbox",
      description:
        "Displays a box that can be checked or unchecked by the user.",
    },
    urlPath: "components/checkbox",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Checkbox", path: "/docs/components/checkbox" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "With Label", url: "#with-label", depth: 3 },
      { value: "Disabled", url: "#disabled", depth: 3 },
      { value: "Error", url: "#error", depth: 3 },
    ],
  },
  "components/collapsible": {
    type: "file",
    path: "components/collapsible.mdx",
    meta: {
      title: "Collapsible",
      description: "Display content in a collapsible container.",
    },
    urlPath: "components/collapsible",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Collapsible", path: "/docs/components/collapsible" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
    ],
  },
  "components/combobox": {
    type: "file",
    path: "components/combobox.mdx",
    meta: {
      title: "Combobox",
      description: "Autocomplete component for selecting items from a list.",
    },
    urlPath: "components/combobox",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Combobox", path: "/docs/components/combobox" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
    ],
  },
  "components/command": {
    type: "file",
    path: "components/command.mdx",
    meta: {
      title: "Command",
      description:
        "A searchable interface for quickly executing commands or actions.",
    },
    urlPath: "components/command",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Command", path: "/docs/components/command" },
    ],
    tableOfContents: [
      { value: "About", url: "#about", depth: 2 },
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "Dialog", url: "#dialog", depth: 3 },
    ],
  },
  "components/context-menu": {
    type: "file",
    path: "components/context-menu.mdx",
    meta: {
      title: "Context Menu",
      description: "Used to provide options specific to an element or area.",
    },
    urlPath: "components/context-menu",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Context Menu", path: "/docs/components/context-menu" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
    ],
  },
  "components/date-picker": {
    type: "file",
    path: "components/date-picker.mdx",
    meta: { title: "Date Picker", description: "A date picker component." },
    urlPath: "components/date-picker",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Date Picker", path: "/docs/components/date-picker" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
    ],
  },
  "components/dialog": {
    type: "file",
    path: "components/dialog.mdx",
    meta: {
      title: "Dialog",
      description: "A modal window for displaying content.",
    },
    urlPath: "components/dialog",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Dialog", path: "/docs/components/dialog" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "Nested Dialogs", url: "#nested-dialogs", depth: 3 },
    ],
  },
  "components/drawer": {
    type: "file",
    path: "components/drawer.mdx",
    meta: {
      title: "Drawer",
      description:
        "Displays a panel that slides out from the side of a screen to reveal more content.",
    },
    urlPath: "components/drawer",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Drawer", path: "/docs/components/drawer" },
    ],
    tableOfContents: [
      { value: "About", url: "#about", depth: 2 },
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
    ],
  },
  "components/dropdown": {
    type: "file",
    path: "components/dropdown.mdx",
    meta: {
      title: "Dropdown",
      description: "Used to display a list of options to the user.",
    },
    urlPath: "components/dropdown",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Dropdown", path: "/docs/components/dropdown" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
    ],
  },
  "components/emoji-picker": {
    type: "file",
    path: "components/emoji-picker.mdx",
    meta: {
      title: "Emoji Picker",
      description: "A component that allows users to pick an emoji.",
    },
    urlPath: "components/emoji-picker",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Emoji Picker", path: "/docs/components/emoji-picker" },
    ],
    tableOfContents: [
      { value: "About", url: "#about", depth: 2 },
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "Popover", url: "#popover", depth: 3 },
    ],
  },
  "components/form": {
    type: "file",
    path: "components/form.mdx",
    meta: {
      title: "Form",
      description: "A structured component for collecting and validating data.",
    },
    urlPath: "components/form",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Form", path: "/docs/components/form" },
    ],
    tableOfContents: [
      { value: "About", url: "#about", depth: 2 },
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
    ],
  },
  "components/input-otp": {
    type: "file",
    path: "components/input-otp.mdx",
    meta: {
      title: "Input OTP",
      description: "A component for entering OTP codes.",
    },
    urlPath: "components/input-otp",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Input Otp", path: "/docs/components/input-otp" },
    ],
    tableOfContents: [
      { value: "About", url: "#about", depth: 2 },
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "Custom", url: "#custom", depth: 3 },
    ],
  },
  "components/input": {
    type: "file",
    path: "components/input.mdx",
    meta: {
      title: "Input",
      description: "A component that allows users to input text.",
    },
    urlPath: "components/input",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Input", path: "/docs/components/input" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "With Icons", url: "#with-icons", depth: 3 },
      { value: "Disabled", url: "#disabled", depth: 3 },
      { value: "Error", url: "#error", depth: 3 },
    ],
  },
  "components/kbd": {
    type: "file",
    path: "components/kbd.mdx",
    meta: {
      title: "Kbd",
      description: "Displays keyboard shortcuts or keypresses.",
    },
    urlPath: "components/kbd",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Kbd", path: "/docs/components/kbd" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
    ],
  },
  "components/menubar": {
    type: "file",
    path: "components/menubar.mdx",
    meta: {
      title: "Menubar",
      description:
        "Displays a top-level bar with expandable menus for easy access.",
    },
    urlPath: "components/menubar",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Menubar", path: "/docs/components/menubar" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
    ],
  },
  "components/meter": {
    type: "file",
    path: "components/meter.mdx",
    meta: {
      title: "Meter",
      description: "Used to represent a value within a fixed scale.",
    },
    urlPath: "components/meter",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Meter", path: "/docs/components/meter" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
    ],
  },
  "components/popover": {
    type: "file",
    path: "components/popover.mdx",
    meta: { title: "Popover", description: "A popup for displaying content." },
    urlPath: "components/popover",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Popover", path: "/docs/components/popover" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
    ],
  },
  "components/preview-card": {
    type: "file",
    path: "components/preview-card.mdx",
    meta: {
      title: "Preview Card",
      description: "Used to display a preview of content when hovered.",
    },
    urlPath: "components/preview-card",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Preview Card", path: "/docs/components/preview-card" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
    ],
  },
  "components/progress": {
    type: "file",
    path: "components/progress.mdx",
    meta: {
      title: "Progress",
      description: "Displays a progress bar with an optional label.",
    },
    urlPath: "components/progress",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Progress", path: "/docs/components/progress" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "With Value", url: "#with-value", depth: 3 },
    ],
  },
  "components/radio-group": {
    type: "file",
    path: "components/radio-group.mdx",
    meta: {
      title: "Radio Group",
      description:
        "A set of radio buttons for selecting one option from a group.",
    },
    urlPath: "components/radio-group",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Radio Group", path: "/docs/components/radio-group" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "Disabled", url: "#disabled", depth: 3 },
    ],
  },
  "components/scroll-area": {
    type: "file",
    path: "components/scroll-area.mdx",
    meta: {
      title: "Scroll Area",
      description: "A component for creating scrollable regions.",
    },
    urlPath: "components/scroll-area",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Scroll Area", path: "/docs/components/scroll-area" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "Horizontal", url: "#horizontal", depth: 3 },
    ],
  },
  "components/select": {
    type: "file",
    path: "components/select.mdx",
    meta: {
      title: "Select",
      description: "A dropdown menu for choosing one option from a list..",
    },
    urlPath: "components/select",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Select", path: "/docs/components/select" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "Custom value", url: "#custom-value", depth: 3 },
      { value: "With groups", url: "#with-groups", depth: 3 },
    ],
  },
  "components/separator": {
    type: "file",
    path: "components/separator.mdx",
    meta: {
      title: "Separator",
      description:
        "Displays a divider to organize content visually or contextually.",
    },
    urlPath: "components/separator",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Separator", path: "/docs/components/separator" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
    ],
  },
  "components/sheet": {
    type: "file",
    path: "components/sheet.mdx",
    meta: {
      title: "Sheet",
      description: "A sliding panel for displaying content.",
    },
    urlPath: "components/sheet",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Sheet", path: "/docs/components/sheet" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "Sides", url: "#sides", depth: 3 },
    ],
  },
  "components/skeleton": {
    type: "file",
    path: "components/skeleton.mdx",
    meta: {
      title: "Skeleton",
      description: "Displays a loading state for a component.",
    },
    urlPath: "components/skeleton",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Skeleton", path: "/docs/components/skeleton" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
    ],
  },
  "components/slider": {
    type: "file",
    path: "components/slider.mdx",
    meta: {
      title: "Slider",
      description: "A control for selecting a value within a range.",
    },
    urlPath: "components/slider",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Slider", path: "/docs/components/slider" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "Disabled", url: "#disabled", depth: 3 },
      { value: "Range", url: "#range", depth: 3 },
      { value: "With Value", url: "#with-value", depth: 3 },
    ],
  },
  "components/sonner": {
    type: "file",
    path: "components/sonner.mdx",
    meta: {
      title: "Sonner",
      description: "Displays a message to the user in a toast.",
    },
    urlPath: "components/sonner",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Sonner", path: "/docs/components/sonner" },
    ],
    tableOfContents: [
      { value: "About", url: "#about", depth: 2 },
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "Promise", url: "#promise", depth: 3 },
      { value: "Action", url: "#action", depth: 3 },
      { value: "Rich Colors", url: "#rich-colors", depth: 3 },
    ],
  },
  "components/switch": {
    type: "file",
    path: "components/switch.mdx",
    meta: {
      title: "Switch",
      description: "A toggle control for switching between two states.",
    },
    urlPath: "components/switch",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Switch", path: "/docs/components/switch" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "With Label", url: "#with-label", depth: 3 },
      { value: "Disabled", url: "#disabled", depth: 3 },
    ],
  },
  "components/table": {
    type: "file",
    path: "components/table.mdx",
    meta: {
      title: "Table",
      description:
        "Used to organize and present information in a tabular format.",
    },
    urlPath: "components/table",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Table", path: "/docs/components/table" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
    ],
  },
  "components/tabs": {
    type: "file",
    path: "components/tabs.mdx",
    meta: {
      title: "Tabs",
      description: "Used to organize content into tabbed navigation.",
    },
    urlPath: "components/tabs",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Tabs", path: "/docs/components/tabs" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "Underlined", url: "#underlined", depth: 3 },
      { value: "Disabled", url: "#disabled", depth: 3 },
    ],
  },
  "components/textarea": {
    type: "file",
    path: "components/textarea.mdx",
    meta: {
      title: "Textarea",
      description: "A component that allows users to input long text.",
    },
    urlPath: "components/textarea",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Textarea", path: "/docs/components/textarea" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "Disabled", url: "#disabled", depth: 3 },
      { value: "Error", url: "#error", depth: 3 },
    ],
  },
  "components/toggle-group": {
    type: "file",
    path: "components/toggle-group.mdx",
    meta: {
      title: "Toggle Group",
      description:
        "A group of toggles for selecting single or multiple options.",
    },
    urlPath: "components/toggle-group",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Toggle Group", path: "/docs/components/toggle-group" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "Multiple", url: "#multiple", depth: 3 },
    ],
  },
  "components/toggle": {
    type: "file",
    path: "components/toggle.mdx",
    meta: {
      title: "Toggle",
      description: "Displays a control to toggle between two states.",
    },
    urlPath: "components/toggle",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Toggle", path: "/docs/components/toggle" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "Sizes", url: "#sizes", depth: 3 },
      { value: "Custom Control", url: "#custom-control", depth: 3 },
      { value: "Disabled", url: "#disabled", depth: 3 },
    ],
  },
  "components/toolbar": {
    type: "file",
    path: "components/toolbar.mdx",
    meta: {
      title: "Toolbar",
      description: "Displays a toolbar for user interaction.",
    },
    urlPath: "components/toolbar",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Toolbar", path: "/docs/components/toolbar" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "File Explorer", url: "#file-explorer", depth: 3 },
    ],
  },
  "components/tooltip": {
    type: "file",
    path: "components/tooltip.mdx",
    meta: {
      title: "Tooltip",
      description: "Used to provide context or hints for elements.",
    },
    urlPath: "components/tooltip",
    breadcrumbs: [
      { label: "Components", path: "/docs/components" },
      { label: "Tooltip", path: "/docs/components/tooltip" },
    ],
    tableOfContents: [
      { value: "Installation", url: "#installation", depth: 2 },
      { value: "Usage", url: "#usage", depth: 2 },
      { value: "Examples", url: "#examples", depth: 2 },
      { value: "Custom Position", url: "#custom-position", depth: 3 },
    ],
  },
  "getting-started/changelog": {
    type: "file",
    path: "getting-started/changelog.mdx",
    meta: { title: "Changelog", description: "Latest Updates" },
    urlPath: "getting-started/changelog",
    breadcrumbs: [
      { label: "Getting Started", path: "/docs/getting-started" },
      { label: "Changelog", path: "/docs/getting-started/changelog" },
    ],
    tableOfContents: [
      { value: "02/05/2025", url: "#02052025", depth: 2 },
      { value: "21/03/2025", url: "#21032025", depth: 2 },
      { value: "23/02/2025", url: "#23022025", depth: 2 },
      { value: "18/02/2025", url: "#18022025", depth: 2 },
      { value: "08/02/2025", url: "#08022025", depth: 2 },
      { value: "31/12/2024", url: "#31122024", depth: 2 },
    ],
  },
  "getting-started/dark-mode/astro": {
    type: "file",
    path: "getting-started/dark-mode/astro.mdx",
    meta: {
      title: "Astro",
      description: "Setting up dark mode in your Astro project.",
    },
    urlPath: "getting-started/dark-mode/astro",
    breadcrumbs: [
      { label: "Getting Started", path: "/docs/getting-started" },
      { label: "Dark Mode", path: "/docs/getting-started/dark-mode" },
      { label: "Astro", path: "/docs/getting-started/dark-mode/astro" },
    ],
    tableOfContents: [],
  },
  "getting-started/dark-mode": {
    type: "index",
    path: "getting-started/dark-mode/index.mdx",
    meta: {
      title: "Dark Mode",
      description: "Setting up dark mode in your project.",
    },
    urlPath: "getting-started/dark-mode",
    breadcrumbs: [
      { label: "Getting Started", path: "/docs/getting-started" },
      { label: "Dark Mode", path: "/docs/getting-started/dark-mode" },
    ],
    tableOfContents: [],
  },
  "getting-started/dark-mode/next": {
    type: "file",
    path: "getting-started/dark-mode/next.mdx",
    meta: {
      title: "Next.js",
      description: "Setting up dark mode in your Next.js project.",
    },
    urlPath: "getting-started/dark-mode/next",
    breadcrumbs: [
      { label: "Getting Started", path: "/docs/getting-started" },
      { label: "Dark Mode", path: "/docs/getting-started/dark-mode" },
      { label: "Next", path: "/docs/getting-started/dark-mode/next" },
    ],
    tableOfContents: [],
  },
  "getting-started/dark-mode/remix": {
    type: "file",
    path: "getting-started/dark-mode/remix.mdx",
    meta: {
      title: "Remix",
      description: "Setting up dark mode in your Remix project.",
    },
    urlPath: "getting-started/dark-mode/remix",
    breadcrumbs: [
      { label: "Getting Started", path: "/docs/getting-started" },
      { label: "Dark Mode", path: "/docs/getting-started/dark-mode" },
      { label: "Remix", path: "/docs/getting-started/dark-mode/remix" },
    ],
    tableOfContents: [],
  },
  "getting-started/dark-mode/vite": {
    type: "file",
    path: "getting-started/dark-mode/vite.mdx",
    meta: {
      title: "Vite",
      description: "Setting up dark mode in your Vite project.",
    },
    urlPath: "getting-started/dark-mode/vite",
    breadcrumbs: [
      { label: "Getting Started", path: "/docs/getting-started" },
      { label: "Dark Mode", path: "/docs/getting-started/dark-mode" },
      { label: "Vite", path: "/docs/getting-started/dark-mode/vite" },
    ],
    tableOfContents: [],
  },
  "getting-started/installation": {
    type: "file",
    path: "getting-started/installation.mdx",
    meta: {
      title: "Installation",
      description: "Installing dependencies and setting up the project.",
    },
    urlPath: "getting-started/installation",
    breadcrumbs: [
      { label: "Getting Started", path: "/docs/getting-started" },
      { label: "Installation", path: "/docs/getting-started/installation" },
    ],
    tableOfContents: [{ value: "Icons", url: "#icons", depth: 1 }],
  },
  "getting-started/introduction": {
    type: "file",
    path: "getting-started/introduction.mdx",
    meta: {
      title: "Introduction",
      description:
        "Beautiful, customizable components built with Base UI and Tailwind CSS",
    },
    urlPath: "getting-started/introduction",
    breadcrumbs: [
      { label: "Getting Started", path: "/docs/getting-started" },
      { label: "Introduction", path: "/docs/getting-started/introduction" },
    ],
    tableOfContents: [
      { value: "Why Base UI?", url: "#why-base-ui", depth: 2 },
      {
        value: "Is it production ready?",
        url: "#is-it-production-ready",
        depth: 2,
      },
      { value: "Thank you", url: "#thank-you", depth: 2 },
      { value: "FAQ", url: "#faq", depth: 2 },
    ],
  },
  "getting-started/roadmap": {
    type: "file",
    path: "getting-started/roadmap.mdx",
    meta: { title: "Roadmap", description: "What's coming next" },
    urlPath: "getting-started/roadmap",
    breadcrumbs: [
      { label: "Getting Started", path: "/docs/getting-started" },
      { label: "Roadmap", path: "/docs/getting-started/roadmap" },
    ],
    tableOfContents: [],
  },
  "getting-started/theming": {
    type: "file",
    path: "getting-started/theming.mdx",
    meta: {
      title: "Theming",
      description: "Using CSS variables to customize the theme.",
    },
    urlPath: "getting-started/theming",
    breadcrumbs: [
      { label: "Getting Started", path: "/docs/getting-started" },
      { label: "Theming", path: "/docs/getting-started/theming" },
    ],
    tableOfContents: [
      { value: "Color Tokens", url: "#color-tokens", depth: 2 },
      { value: "Base Colors", url: "#base-colors", depth: 3 },
      { value: "Interactive Elements", url: "#interactive-elements", depth: 3 },
      { value: "Status Colors", url: "#status-colors", depth: 3 },
      { value: "Utility Colors", url: "#utility-colors", depth: 3 },
      { value: "Chart Colors", url: "#chart-colors", depth: 3 },
      { value: "Why OKLCH?", url: "#why-oklch", depth: 2 },
      { value: "Customizing Colors", url: "#customizing-colors", depth: 2 },
      { value: "Adding New Colors", url: "#adding-new-colors", depth: 3 },
      { value: "Using Custom Colors", url: "#using-custom-colors", depth: 3 },
    ],
  },
}
