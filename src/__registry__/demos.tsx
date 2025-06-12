import * as React from "react"

import { type DemoRegistry } from "@/types/demo"

export const demoRegistry: DemoRegistry = {
  "accordion-demo": {
    source:
      'import {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionTrigger,\n} from "@/components/ui/accordion"\n\nexport default function AccordionDemo() {\n  return (\n    <Accordion className="mx-auto w-96" orientation="vertical">\n      <AccordionItem>\n        <AccordionTrigger>Is it an accordion?</AccordionTrigger>\n        <AccordionContent>\n          Yes, it is an accordion. It is a component that allows you to collapse\n          and expand content.\n        </AccordionContent>\n      </AccordionItem>\n      <AccordionItem>\n        <AccordionTrigger>Is it animated?</AccordionTrigger>\n        <AccordionContent>\n          Yes, it is animated. It is a component that allows you to collapse and\n          expand content.\n        </AccordionContent>\n      </AccordionItem>\n      <AccordionItem>\n        <AccordionTrigger>Is it customizable?</AccordionTrigger>\n        <AccordionContent>\n          Yes, it is customizable. It is a component that allows you to collapse\n          and expand content.\n        </AccordionContent>\n      </AccordionItem>\n    </Accordion>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/accordion/accordion-demo")
    ),
    title: "accordion-demo",
    category: "accordion",
    path: "src/components/demos/accordion/accordion-demo.tsx",
  },
  "alert-dialog-demo": {
    source:
      'import {\n  AlertDialog,\n  AlertDialogClose,\n  AlertDialogContent,\n  AlertDialogDescription,\n  AlertDialogFooter,\n  AlertDialogHeader,\n  AlertDialogTitle,\n  AlertDialogTrigger,\n} from "@/components/ui/alert-dialog"\nimport { Button } from "@/components/ui/button"\n\nexport default function AlertDialogDemo() {\n  return (\n    <AlertDialog>\n      <AlertDialogTrigger\n        render={(props) => (\n          <Button {...props} variant="destructive">\n            Delete Post\n          </Button>\n        )}\n      />\n      <AlertDialogContent className="space-y-4">\n        <AlertDialogHeader>\n          <AlertDialogTitle>Are you sure?</AlertDialogTitle>\n          <AlertDialogDescription>\n            This action cannot be undone. Your post will be permanently deleted.\n          </AlertDialogDescription>\n        </AlertDialogHeader>\n        <AlertDialogFooter>\n          <AlertDialogClose\n            render={(props) => (\n              <Button {...props} size="sm" variant="ghost">\n                Cancel\n              </Button>\n            )}\n          />\n          <Button size="sm" variant="destructive">\n            Delete\n          </Button>\n        </AlertDialogFooter>\n      </AlertDialogContent>\n    </AlertDialog>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/alert-dialog/alert-dialog-demo")
    ),
    title: "alert-dialog-demo",
    category: "alert-dialog",
    path: "src/components/demos/alert-dialog/alert-dialog-demo.tsx",
  },
  "alert-danger": {
    source:
      'import { XCircleIcon } from "lucide-react"\n\nimport {\n  Alert,\n  AlertContent,\n  AlertDescription,\n  AlertIcon,\n  AlertTitle,\n} from "@/components/ui/alert"\n\nexport default function AlertDanger() {\n  return (\n    <Alert variant="danger">\n      <AlertIcon>\n        <XCircleIcon />\n      </AlertIcon>\n      <AlertContent>\n        <AlertTitle>Your subscription has been canceled</AlertTitle>\n        <AlertDescription>\n          Your access to premium features will end in 30 days. You can\n          reactivate your subscription anytime.\n        </AlertDescription>\n      </AlertContent>\n    </Alert>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/alert/alert-danger")
    ),
    title: "alert-danger",
    category: "alert",
    path: "src/components/demos/alert/alert-danger.tsx",
  },
  "alert-demo": {
    source:
      'import { AlertTriangleIcon } from "lucide-react"\n\nimport {\n  Alert,\n  AlertContent,\n  AlertDescription,\n  AlertIcon,\n  AlertTitle,\n} from "@/components/ui/alert"\n\nexport default function AlertDemo() {\n  return (\n    <Alert>\n      <AlertIcon>\n        <AlertTriangleIcon />\n      </AlertIcon>\n      <AlertContent>\n        <AlertTitle>No Internet Connection</AlertTitle>\n        <AlertDescription>\n          Please check your internet connection and try again.\n        </AlertDescription>\n      </AlertContent>\n    </Alert>\n  )\n}\n',
    component: React.lazy(() => import("@/components/demos/alert/alert-demo")),
    title: "alert-demo",
    category: "alert",
    path: "src/components/demos/alert/alert-demo.tsx",
  },
  "alert-info": {
    source:
      'import { InfoIcon } from "lucide-react"\n\nimport {\n  Alert,\n  AlertContent,\n  AlertDescription,\n  AlertIcon,\n  AlertTitle,\n} from "@/components/ui/alert"\n\nexport default function AlertInfo() {\n  return (\n    <Alert variant="info">\n      <AlertIcon>\n        <InfoIcon />\n      </AlertIcon>\n      <AlertContent>\n        <AlertTitle>Browser Update Available</AlertTitle>\n        <AlertDescription>\n          A new version of your browser is available. Updating your browser\n          ensures better security and performance.\n        </AlertDescription>\n      </AlertContent>\n    </Alert>\n  )\n}\n',
    component: React.lazy(() => import("@/components/demos/alert/alert-info")),
    title: "alert-info",
    category: "alert",
    path: "src/components/demos/alert/alert-info.tsx",
  },
  "alert-success": {
    source:
      'import { CircleCheckIcon } from "lucide-react"\n\nimport {\n  Alert,\n  AlertContent,\n  AlertDescription,\n  AlertIcon,\n  AlertTitle,\n} from "@/components/ui/alert"\n\nexport default function AlertSuccess() {\n  return (\n    <Alert variant="success">\n      <AlertIcon>\n        <CircleCheckIcon />\n      </AlertIcon>\n      <AlertContent>\n        <AlertTitle>Your account has been created</AlertTitle>\n        <AlertDescription>\n          You can now sign in with your new account credentials.\n        </AlertDescription>\n      </AlertContent>\n    </Alert>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/alert/alert-success")
    ),
    title: "alert-success",
    category: "alert",
    path: "src/components/demos/alert/alert-success.tsx",
  },
  "alert-warning": {
    source:
      'import { AlertTriangleIcon } from "lucide-react"\n\nimport {\n  Alert,\n  AlertContent,\n  AlertDescription,\n  AlertIcon,\n  AlertTitle,\n} from "@/components/ui/alert"\n\nexport default function AlertWarning() {\n  return (\n    <Alert variant="warning">\n      <AlertIcon>\n        <AlertTriangleIcon />\n      </AlertIcon>\n      <AlertContent>\n        <AlertTitle>Your session is about to expire</AlertTitle>\n        <AlertDescription>\n          You will be logged out in 5 minutes. Please save your work and refresh\n          the page.\n        </AlertDescription>\n      </AlertContent>\n    </Alert>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/alert/alert-warning")
    ),
    title: "alert-warning",
    category: "alert",
    path: "src/components/demos/alert/alert-warning.tsx",
  },
  "alert-with-action": {
    source:
      'import { AlertTriangleIcon } from "lucide-react"\n\nimport {\n  Alert,\n  AlertAction,\n  AlertContent,\n  AlertDescription,\n  AlertIcon,\n  AlertTitle,\n} from "@/components/ui/alert"\nimport { Button } from "@/components/ui/button"\n\nexport default function AlertWithAction() {\n  return (\n    <Alert>\n      <AlertIcon>\n        <AlertTriangleIcon />\n      </AlertIcon>\n      <AlertContent>\n        <AlertTitle>No Internet Connection</AlertTitle>\n        <AlertDescription>\n          Please check your internet connection and try again.\n        </AlertDescription>\n      </AlertContent>\n      <AlertAction>\n        <Button size="sm" variant="outline">\n          Try Again\n        </Button>\n      </AlertAction>\n    </Alert>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/alert/alert-with-action")
    ),
    title: "alert-with-action",
    category: "alert",
    path: "src/components/demos/alert/alert-with-action.tsx",
  },
  "aspect-ratio-demo": {
    source:
      'import { AspectRatio } from "@/components/ui/aspect-ratio"\n\nexport default function AspectRatioDemo() {\n  return (\n    <AspectRatio\n      ratio={16 / 9}\n      className="rounded-lg border bg-card text-card-foreground"\n    >\n      <div className="flex size-full items-center justify-center font-medium">\n        Content\n      </div>\n    </AspectRatio>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/aspect-ratio/aspect-ratio-demo")
    ),
    title: "aspect-ratio-demo",
    category: "aspect-ratio",
    path: "src/components/demos/aspect-ratio/aspect-ratio-demo.tsx",
  },
  "avatar-demo": {
    source:
      'import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"\n\nexport default function AvatarDemo() {\n  return (\n    <Avatar size="md">\n      <AvatarImage src="/avatars/bora.png" alt="User" />\n      <AvatarFallback>BB</AvatarFallback>\n    </Avatar>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/avatar/avatar-demo")
    ),
    title: "avatar-demo",
    category: "avatar",
    path: "src/components/demos/avatar/avatar-demo.tsx",
  },
  "avatar-fallback": {
    source:
      'import { Avatar, AvatarFallback } from "@/components/ui/avatar"\n\nexport default function AvatarWithFallback() {\n  return (\n    <Avatar size="md">\n      <AvatarFallback>BB</AvatarFallback>\n    </Avatar>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/avatar/avatar-fallback")
    ),
    title: "avatar-fallback",
    category: "avatar",
    path: "src/components/demos/avatar/avatar-fallback.tsx",
  },
  "avatar-sizes": {
    source:
      'import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"\n\nexport default function AvatarSizes() {\n  return (\n    <div className="flex flex-row items-center gap-4">\n      <Avatar size="sm">\n        <AvatarImage src="/avatars/bora.png" alt="User" />\n        <AvatarFallback>BB</AvatarFallback>\n      </Avatar>\n      <Avatar size="md">\n        <AvatarImage src="/avatars/bora.png" alt="User" />\n        <AvatarFallback>BB</AvatarFallback>\n      </Avatar>\n      <Avatar size="lg">\n        <AvatarImage src="/avatars/bora.png" alt="User" />\n        <AvatarFallback>BB</AvatarFallback>\n      </Avatar>\n    </div>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/avatar/avatar-sizes")
    ),
    title: "avatar-sizes",
    category: "avatar",
    path: "src/components/demos/avatar/avatar-sizes.tsx",
  },
  "badge-danger": {
    source:
      'import { Badge, BadgeIndicator } from "@/components/ui/badge"\n\nexport default function BadgeDanger() {\n  return (\n    <div className="flex items-center gap-2">\n      <Badge variant="danger">Danger</Badge>\n      <Badge variant="outline">\n        <BadgeIndicator variant="danger" />\n        Danger\n      </Badge>\n    </div>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/badge/badge-danger")
    ),
    title: "badge-danger",
    category: "badge",
    path: "src/components/demos/badge/badge-danger.tsx",
  },
  "badge-demo": {
    source:
      'import { Badge } from "@/components/ui/badge"\n\nexport default function BadgeDemo() {\n  return <Badge>Badge</Badge>\n}\n',
    component: React.lazy(() => import("@/components/demos/badge/badge-demo")),
    title: "badge-demo",
    category: "badge",
    path: "src/components/demos/badge/badge-demo.tsx",
  },
  "badge-info": {
    source:
      'import { Badge, BadgeIndicator } from "@/components/ui/badge"\n\nexport default function BadgeInfo() {\n  return (\n    <div className="flex items-center gap-2">\n      <Badge variant="info">Info</Badge>\n      <Badge variant="outline">\n        <BadgeIndicator variant="info" />\n        Info\n      </Badge>\n    </div>\n  )\n}\n',
    component: React.lazy(() => import("@/components/demos/badge/badge-info")),
    title: "badge-info",
    category: "badge",
    path: "src/components/demos/badge/badge-info.tsx",
  },
  "badge-outline": {
    source:
      'import { Badge } from "@/components/ui/badge"\n\nexport default function BadgeOutline() {\n  return <Badge variant="outline">Outline</Badge>\n}\n',
    component: React.lazy(
      () => import("@/components/demos/badge/badge-outline")
    ),
    title: "badge-outline",
    category: "badge",
    path: "src/components/demos/badge/badge-outline.tsx",
  },
  "badge-secondary": {
    source:
      'import { Badge } from "@/components/ui/badge"\n\nexport default function BadgeSecondary() {\n  return <Badge variant="secondary">Secondary</Badge>\n}\n',
    component: React.lazy(
      () => import("@/components/demos/badge/badge-secondary")
    ),
    title: "badge-secondary",
    category: "badge",
    path: "src/components/demos/badge/badge-secondary.tsx",
  },
  "badge-success": {
    source:
      'import { Badge, BadgeIndicator } from "@/components/ui/badge"\n\nexport default function BadgeSuccess() {\n  return (\n    <div className="flex items-center gap-2">\n      <Badge variant="success">Success</Badge>\n      <Badge variant="outline">\n        <BadgeIndicator variant="success" />\n        Success\n      </Badge>\n    </div>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/badge/badge-success")
    ),
    title: "badge-success",
    category: "badge",
    path: "src/components/demos/badge/badge-success.tsx",
  },
  "badge-warning": {
    source:
      'import { Badge, BadgeIndicator } from "@/components/ui/badge"\n\nexport default function BadgeWarning() {\n  return (\n    <div className="flex items-center gap-2">\n      <Badge variant="warning">Warning</Badge>\n      <Badge variant="outline">\n        <BadgeIndicator variant="warning" />\n        Warning\n      </Badge>\n    </div>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/badge/badge-warning")
    ),
    title: "badge-warning",
    category: "badge",
    path: "src/components/demos/badge/badge-warning.tsx",
  },
  "breadcrumbs-custom-separator": {
    source:
      'import { Link } from "react-router-dom"\n\nimport {\n  Breadcrumb,\n  BreadcrumbItem,\n  BreadcrumbList,\n  BreadcrumbSeparator,\n} from "@/components/ui/breadcrumbs"\n\nexport default function BreadcrumbsCustomSeparator() {\n  return (\n    <Breadcrumb>\n      <BreadcrumbList>\n        <BreadcrumbItem>\n          <Link to="/">Home</Link>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator>\n          <span>/</span>\n        </BreadcrumbSeparator>\n        <BreadcrumbItem>\n          <Link to="/docs/components">Components</Link>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator>\n          <span>/</span>\n        </BreadcrumbSeparator>\n        <BreadcrumbItem active>Breadcrumbs</BreadcrumbItem>\n      </BreadcrumbList>\n    </Breadcrumb>\n  )\n}\n',
    component: React.lazy(
      () =>
        import("@/components/demos/breadcrumbs/breadcrumbs-custom-separator")
    ),
    title: "breadcrumbs-custom-separator",
    category: "breadcrumbs",
    path: "src/components/demos/breadcrumbs/breadcrumbs-custom-separator.tsx",
  },
  "breadcrumbs-demo": {
    source:
      'import { EllipsisIcon } from "lucide-react"\nimport { Link } from "react-router-dom"\n\nimport {\n  Breadcrumb,\n  BreadcrumbItem,\n  BreadcrumbList,\n  BreadcrumbSeparator,\n} from "@/components/ui/breadcrumbs"\n\nexport default function BreadcrumbsDemo() {\n  return (\n    <Breadcrumb>\n      <BreadcrumbList>\n        <BreadcrumbItem>\n          <Link to="/">Home</Link>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator />\n        <BreadcrumbItem>\n          <EllipsisIcon />\n        </BreadcrumbItem>\n        <BreadcrumbSeparator />\n        <BreadcrumbItem>\n          <Link to="/docs/components">Components</Link>\n        </BreadcrumbItem>\n        <BreadcrumbSeparator />\n        <BreadcrumbItem active>Breadcrumbs</BreadcrumbItem>\n      </BreadcrumbList>\n    </Breadcrumb>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/breadcrumbs/breadcrumbs-demo")
    ),
    title: "breadcrumbs-demo",
    category: "breadcrumbs",
    path: "src/components/demos/breadcrumbs/breadcrumbs-demo.tsx",
  },
  "button-demo": {
    source:
      'import { Button } from "@/components/ui/button"\n\nexport default function ButtonDemo() {\n  return <Button>Button</Button>\n}\n',
    component: React.lazy(
      () => import("@/components/demos/button/button-demo")
    ),
    title: "button-demo",
    category: "button",
    path: "src/components/demos/button/button-demo.tsx",
  },
  "button-destructive": {
    source:
      'import { Button } from "@/components/ui/button"\n\nexport default function ButtonDestructive() {\n  return <Button variant="destructive">Destructive</Button>\n}\n',
    component: React.lazy(
      () => import("@/components/demos/button/button-destructive")
    ),
    title: "button-destructive",
    category: "button",
    path: "src/components/demos/button/button-destructive.tsx",
  },
  "button-ghost": {
    source:
      'import { Button } from "@/components/ui/button"\n\nexport default function ButtonGhost() {\n  return <Button variant="ghost">Ghost</Button>\n}\n',
    component: React.lazy(
      () => import("@/components/demos/button/button-ghost")
    ),
    title: "button-ghost",
    category: "button",
    path: "src/components/demos/button/button-ghost.tsx",
  },
  "button-icon": {
    source:
      'import { PencilIcon } from "lucide-react"\n\nimport { Button } from "@/components/ui/button"\n\nexport default function ButtonIcon() {\n  return (\n    <Button size="icon" variant="outline">\n      <PencilIcon />\n    </Button>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/button/button-icon")
    ),
    title: "button-icon",
    category: "button",
    path: "src/components/demos/button/button-icon.tsx",
  },
  "button-link": {
    source:
      'import { Button } from "@/components/ui/button"\n\nexport default function ButtonLink() {\n  return <Button variant="link">Link</Button>\n}\n',
    component: React.lazy(
      () => import("@/components/demos/button/button-link")
    ),
    title: "button-link",
    category: "button",
    path: "src/components/demos/button/button-link.tsx",
  },
  "button-loading": {
    source:
      'import { Loader2Icon } from "lucide-react"\n\nimport { Button } from "@/components/ui/button"\n\nexport default function ButtonLoading() {\n  return (\n    <Button className="gap-2" disabled>\n      <div className="animate-spin">\n        <Loader2Icon size={16} />\n      </div>\n      Loading\n    </Button>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/button/button-loading")
    ),
    title: "button-loading",
    category: "button",
    path: "src/components/demos/button/button-loading.tsx",
  },
  "button-outline": {
    source:
      'import { Button } from "@/components/ui/button"\n\nexport default function ButtonOutline() {\n  return <Button variant="outline">Outline</Button>\n}\n',
    component: React.lazy(
      () => import("@/components/demos/button/button-outline")
    ),
    title: "button-outline",
    category: "button",
    path: "src/components/demos/button/button-outline.tsx",
  },
  "button-secondary": {
    source:
      'import { Button } from "@/components/ui/button"\n\nexport default function ButtonSecondary() {\n  return <Button variant="secondary">Secondary</Button>\n}\n',
    component: React.lazy(
      () => import("@/components/demos/button/button-secondary")
    ),
    title: "button-secondary",
    category: "button",
    path: "src/components/demos/button/button-secondary.tsx",
  },
  "button-sizes": {
    source:
      'import { Button } from "@/components/ui/button"\n\nexport default function ButtonSizes() {\n  return (\n    <div className="flex flex-row items-center gap-2">\n      <Button size="sm">Small</Button>\n      <Button size="md">Medium</Button>\n      <Button size="lg">Large</Button>\n    </div>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/button/button-sizes")
    ),
    title: "button-sizes",
    category: "button",
    path: "src/components/demos/button/button-sizes.tsx",
  },
  "calendar-demo": {
    source:
      'import { Calendar } from "@/components/ui/calendar"\n\nexport default function CalendarDemo() {\n  return <Calendar showOutsideDays />\n}\n',
    component: React.lazy(
      () => import("@/components/demos/calendar/calendar-demo")
    ),
    title: "calendar-demo",
    category: "calendar",
    path: "src/components/demos/calendar/calendar-demo.tsx",
  },
  "calendar-disabled": {
    source:
      'import { useState } from "react"\n\nimport { Calendar } from "@/components/ui/calendar"\n\nexport default function CalendarDisabled() {\n  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)\n\n  return (\n    <Calendar\n      mode="single"\n      disabled={(date) => date < new Date()}\n      selected={selectedDate}\n      onSelect={setSelectedDate}\n    />\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/calendar/calendar-disabled")
    ),
    title: "calendar-disabled",
    category: "calendar",
    path: "src/components/demos/calendar/calendar-disabled.tsx",
  },
  "calendar-multiple": {
    source:
      'import { useState } from "react"\n\nimport { Calendar } from "@/components/ui/calendar"\n\nexport default function CalendarMultiple() {\n  const [selectedDates, setSelectedDates] = useState<Date[] | undefined>(\n    undefined\n  )\n\n  return (\n    <Calendar\n      mode="multiple"\n      selected={selectedDates}\n      onSelect={setSelectedDates}\n      showOutsideDays\n    />\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/calendar/calendar-multiple")
    ),
    title: "calendar-multiple",
    category: "calendar",
    path: "src/components/demos/calendar/calendar-multiple.tsx",
  },
  "calendar-range": {
    source:
      'import { useState } from "react"\nimport { DateRange } from "react-day-picker"\n\nimport { Calendar } from "@/components/ui/calendar"\n\nexport default function CalendarRange() {\n  const [range, setRange] = useState<DateRange | undefined>(undefined)\n\n  return (\n    <Calendar\n      mode="range"\n      selected={range}\n      onSelect={setRange}\n      showOutsideDays\n    />\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/calendar/calendar-range")
    ),
    title: "calendar-range",
    category: "calendar",
    path: "src/components/demos/calendar/calendar-range.tsx",
  },
  "calendar-single": {
    source:
      'import { useState } from "react"\n\nimport { Calendar } from "@/components/ui/calendar"\n\nexport default function CalendarSingle() {\n  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)\n\n  return (\n    <Calendar\n      mode="single"\n      selected={selectedDate}\n      onSelect={setSelectedDate}\n      showOutsideDays\n    />\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/calendar/calendar-single")
    ),
    title: "calendar-single",
    category: "calendar",
    path: "src/components/demos/calendar/calendar-single.tsx",
  },
  "card-demo": {
    source:
      '// import Image from "next/image" // Removed for Vite migration\nimport { LinkIcon, SendIcon } from "lucide-react"\n\nimport { Button } from "@/components/ui/button"\nimport {\n  Card,\n  CardContent,\n  CardDescription,\n  CardFooter,\n  CardHeader,\n  CardTitle,\n} from "@/components/ui/card"\nimport { Input } from "@/components/ui/input"\nimport { toast } from "@/components/ui/sonner"\n\nexport default function CardDemo() {\n  return (\n    <Card className="max-w-96">\n      <CardHeader>\n        <CardTitle>Invite Team Members</CardTitle>\n        <CardDescription>\n          Invite your team members to join your workspace.\n        </CardDescription>\n      </CardHeader>\n      <CardContent className="space-y-4">\n        <div className="flex gap-2">\n          <Input inputWrapperClassName="w-full" placeholder="Email" />\n          <Button className="shrink-0" size="icon">\n            <SendIcon />\n          </Button>\n        </div>\n        <div className="flex flex-col gap-2">\n          <p className="text-sm text-muted-foreground">\n            You can invite up to 10 team members. You have 8 invites left.\n          </p>\n        </div>\n        <div className="flex flex-col gap-4">\n          <h4 className="text-sm font-medium">Invited Members</h4>\n          <div className="flex items-center gap-2">\n            <img\n              src="/memoji-1.png"\n              alt="Avatar"\n              width={24}\n              height={24}\n              className="size-8 rounded-full"\n            />\n            <div className="flex flex-col text-xs">\n              <p className="font-medium">Karen Smith</p>\n              <p className="text-muted-foreground">karen@9.ui</p>\n            </div>\n          </div>\n          <div className="flex items-center gap-2">\n            <img\n              src="/memoji-3.png"\n              alt="Avatar"\n              width={24}\n              height={24}\n              className="size-8 rounded-full"\n            />\n            <div className="flex flex-col text-xs">\n              <p className="font-medium">Chris Williams</p>\n              <p className="text-muted-foreground">chris@9.ui</p>\n            </div>\n          </div>\n        </div>\n      </CardContent>\n      <CardFooter>\n        <Button\n          className="w-full gap-x-2"\n          variant="link"\n          onClick={() => {\n            toast.success("Invite link copied to clipboard")\n          }}\n        >\n          <LinkIcon size={16} />\n          Invite with link\n        </Button>\n      </CardFooter>\n    </Card>\n  )\n}\n',
    component: React.lazy(() => import("@/components/demos/card/card-demo")),
    title: "card-demo",
    category: "card",
    path: "src/components/demos/card/card-demo.tsx",
  },
  "card-with-image": {
    source:
      '// import Image from "next/image" // Removed for Vite migration\n\nimport { Button } from "@/components/ui/button"\nimport {\n  Card,\n  CardDescription,\n  CardFooter,\n  CardHeader,\n  CardTitle,\n} from "@/components/ui/card"\n\nexport default function CardWithImage() {\n  return (\n    <Card className="max-w-80">\n      <CardHeader>\n        <div className="relative aspect-video rounded-lg">\n          <img\n            src="https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2"\n            alt="Blog Image"\n            className="rounded-lg w-full h-full object-cover"\n          />\n        </div>\n        <CardTitle className="mt-2">What is 9ui?</CardTitle>\n        <CardDescription>\n          Deep dive into the 9ui components and learn how to use them in your\n          own projects.\n        </CardDescription>\n      </CardHeader>\n      <CardFooter>\n        <Button className="w-full">Read more</Button>\n      </CardFooter>\n    </Card>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/card/card-with-image")
    ),
    title: "card-with-image",
    category: "card",
    path: "src/components/demos/card/card-with-image.tsx",
  },
  "carousel-demo": {
    source:
      'import { AspectRatio } from "@/components/ui/aspect-ratio"\nimport {\n  Carousel,\n  CarouselContent,\n  CarouselItem,\n  CarouselNavigation,\n  CarouselNext,\n  CarouselPrevious,\n} from "@/components/ui/carousel"\n\nconst slides = [1, 2, 3, 4, 5]\n\nexport default function CarouselDemo() {\n  return (\n    <div className="w-60 sm:w-80 lg:w-96">\n      <Carousel>\n        <CarouselContent>\n          {slides.map((slide) => (\n            <CarouselItem key={slide}>\n              <AspectRatio\n                ratio={16 / 9}\n                className="rounded-lg border bg-background"\n              >\n                <div className="flex size-full items-center justify-center text-xl font-semibold text-foreground">\n                  {slide}\n                </div>\n              </AspectRatio>\n            </CarouselItem>\n          ))}\n        </CarouselContent>\n        <CarouselNavigation>\n          <CarouselPrevious />\n          <CarouselNext />\n        </CarouselNavigation>\n      </Carousel>\n    </div>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/carousel/carousel-demo")
    ),
    title: "carousel-demo",
    category: "carousel",
    path: "src/components/demos/carousel/carousel-demo.tsx",
  },
  "carousel-looped": {
    source:
      'import { AspectRatio } from "@/components/ui/aspect-ratio"\nimport {\n  Carousel,\n  CarouselContent,\n  CarouselItem,\n  CarouselNavigation,\n  CarouselNext,\n  CarouselPrevious,\n} from "@/components/ui/carousel"\n\nconst slides = [1, 2, 3, 4, 5]\n\nexport default function CarouselLooped() {\n  return (\n    <div className="w-60 sm:w-80 lg:w-96">\n      <Carousel options={{ loop: true }}>\n        <CarouselContent>\n          {slides.map((slide) => (\n            <CarouselItem key={slide}>\n              <AspectRatio\n                ratio={16 / 9}\n                className="rounded-lg border bg-background"\n              >\n                <div className="flex size-full items-center justify-center text-xl font-semibold text-foreground">\n                  {slide}\n                </div>\n              </AspectRatio>\n            </CarouselItem>\n          ))}\n        </CarouselContent>\n        <CarouselNavigation>\n          <CarouselPrevious />\n          <CarouselNext />\n        </CarouselNavigation>\n      </Carousel>\n    </div>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/carousel/carousel-looped")
    ),
    title: "carousel-looped",
    category: "carousel",
    path: "src/components/demos/carousel/carousel-looped.tsx",
  },
  "carousel-multiple": {
    source:
      'import { AspectRatio } from "@/components/ui/aspect-ratio"\nimport {\n  Carousel,\n  CarouselContent,\n  CarouselItem,\n  CarouselNavigation,\n  CarouselNext,\n  CarouselPrevious,\n} from "@/components/ui/carousel"\n\nconst slides = [1, 2, 3, 4, 5]\n\nexport default function CarouselMultiple() {\n  return (\n    <div className="w-60 sm:w-80 lg:w-96">\n      <Carousel>\n        <CarouselContent>\n          {slides.map((slide) => (\n            <CarouselItem key={slide} className="basis-1/3">\n              <AspectRatio\n                ratio={16 / 9}\n                className="rounded-lg border bg-background"\n              >\n                <div className="flex size-full items-center justify-center text-xl font-semibold text-foreground">\n                  {slide}\n                </div>\n              </AspectRatio>\n            </CarouselItem>\n          ))}\n        </CarouselContent>\n        <CarouselNavigation>\n          <CarouselPrevious />\n          <CarouselNext />\n        </CarouselNavigation>\n      </Carousel>\n    </div>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/carousel/carousel-multiple")
    ),
    title: "carousel-multiple",
    category: "carousel",
    path: "src/components/demos/carousel/carousel-multiple.tsx",
  },
  "carousel-thumbnail": {
    source:
      'import { useState } from "react"\n\n// import Image from "next/image" // Removed for Vite migration\n\nimport { AspectRatio } from "@/components/ui/aspect-ratio"\nimport {\n  Carousel,\n  CarouselApi,\n  CarouselContent,\n  CarouselItem,\n} from "@/components/ui/carousel"\n\nconst slides = [\n  "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2",\n  "https://images.pexels.com/photos/1293120/pexels-photo-1293120.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2",\n  "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2",\n  "https://images.pexels.com/photos/2011824/pexels-photo-2011824.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2",\n  "https://images.pexels.com/photos/2471235/pexels-photo-2471235.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2",\n]\n\nexport default function CarouselThumbnail() {\n  const [api, setApi] = useState<CarouselApi>()\n\n  return (\n    <div className="w-60 sm:w-80 lg:w-96">\n      <Carousel setApi={setApi}>\n        <CarouselContent>\n          {slides.map((slide) => (\n            <CarouselItem key={slide}>\n              <AspectRatio\n                ratio={16 / 9}\n                className="rounded-lg border bg-background"\n              >\n                <img\n                  src={slide}\n                  alt="Carousel slide"\n                  className="rounded-lg object-cover w-full h-full"\n                />\n              </AspectRatio>\n            </CarouselItem>\n          ))}\n        </CarouselContent>\n        <div className="mt-2 flex items-center justify-center gap-2">\n          {slides.map((slide, index) => (\n            <button\n              key={slide}\n              className="relative size-10"\n              onClick={() => api?.scrollTo(index)}\n            >\n              <img\n                src={slide}\n                alt="Carousel slide"\n                className="rounded-md object-cover opacity-80 transition-opacity duration-200 hover:opacity-100 w-full h-full"\n              />\n            </button>\n          ))}\n        </div>\n      </Carousel>\n    </div>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/carousel/carousel-thumbnail")
    ),
    title: "carousel-thumbnail",
    category: "carousel",
    path: "src/components/demos/carousel/carousel-thumbnail.tsx",
  },
  "carousel-vertical": {
    source:
      'import { AspectRatio } from "@/components/ui/aspect-ratio"\nimport {\n  Carousel,\n  CarouselContent,\n  CarouselItem,\n  CarouselNavigation,\n  CarouselNext,\n  CarouselPrevious,\n} from "@/components/ui/carousel"\n\nconst slides = [1, 2, 3, 4, 5]\n\nexport default function CarouselVertical() {\n  return (\n    <div className="w-60 sm:w-80 lg:w-96">\n      <Carousel orientation="vertical" options={{ loop: true }}>\n        <CarouselContent className="aspect-video h-[-webkit-fill-available] w-full p-1">\n          {slides.map((slide) => (\n            <CarouselItem key={slide} className="basis-full">\n              <AspectRatio\n                ratio={16 / 9}\n                className="rounded-lg border bg-background"\n              >\n                <div className="flex size-full items-center justify-center font-medium text-foreground">\n                  {slide}\n                </div>\n              </AspectRatio>\n            </CarouselItem>\n          ))}\n        </CarouselContent>\n        <CarouselNavigation className="bottom-0.5">\n          <CarouselPrevious />\n          <CarouselNext />\n        </CarouselNavigation>\n      </Carousel>\n    </div>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/carousel/carousel-vertical")
    ),
    title: "carousel-vertical",
    category: "carousel",
    path: "src/components/demos/carousel/carousel-vertical.tsx",
  },
  "chart-area": {
    source:
      'import { TrendingUpIcon } from "lucide-react"\nimport { Area, AreaChart, CartesianGrid, XAxis } from "recharts"\n\nimport {\n  Card,\n  CardContent,\n  CardDescription,\n  CardFooter,\n  CardHeader,\n  CardTitle,\n} from "@/components/ui/card"\nimport {\n  Chart,\n  ChartConfig,\n  ChartTooltip,\n  ChartTooltipContent,\n} from "@/components/ui/chart"\n\nconst chartData = [\n  { month: "Jan", revenue: 1500 },\n  { month: "Feb", revenue: 3200 },\n  { month: "Mar", revenue: 2900 },\n  { month: "Apr", revenue: 2100 },\n  { month: "May", revenue: 4000 },\n  { month: "Jun", revenue: 3700 },\n  { month: "Jul", revenue: 4300 },\n  { month: "Aug", revenue: 4900 },\n  { month: "Sep", revenue: 4700 },\n  { month: "Oct", revenue: 5200 },\n  { month: "Nov", revenue: 6000 },\n  { month: "Dec", revenue: 7200 },\n]\n\nconst chartConfig = {\n  revenue: {\n    label: "Revenue",\n    color: "var(--chart-1)",\n  },\n} satisfies ChartConfig\n\nexport default function ChartAreaDemo() {\n  const totalRevenue = chartData.reduce((sum, item) => sum + item.revenue, 0)\n  const averageRevenue = totalRevenue / chartData.length\n  const lastMonthGrowth =\n    ((chartData[11].revenue - chartData[10].revenue) / chartData[10].revenue) *\n    100\n\n  return (\n    <Card className="flex w-full flex-col">\n      <CardHeader className="items-center">\n        <CardTitle>Monthly Revenue Trend</CardTitle>\n        <CardDescription>Performance overview for 2024</CardDescription>\n      </CardHeader>\n      <CardContent className="flex-1">\n        <Chart config={chartConfig} className="max-h-[300px]">\n          <AreaChart\n            accessibilityLayer\n            data={chartData}\n            margin={{\n              left: 12,\n              right: 12,\n            }}\n          >\n            <CartesianGrid vertical={false} />\n            <XAxis\n              dataKey="month"\n              tickLine={false}\n              axisLine={false}\n              tickMargin={8}\n              tickFormatter={(value) => value.slice(0, 3)}\n            />\n            <ChartTooltip\n              cursor={false}\n              content={<ChartTooltipContent indicator="line" />}\n            />\n            <Area\n              dataKey="revenue"\n              type="natural"\n              fill="var(--chart-1)"\n              fillOpacity={0.2}\n              stroke="var(--chart-1)"\n            />\n          </AreaChart>\n        </Chart>\n      </CardContent>\n      <CardFooter className="flex-col gap-2 text-sm leading-none">\n        <div className="flex w-full justify-between font-medium">\n          <span>Total Revenue:</span>\n          <span>${totalRevenue.toLocaleString()}</span>\n        </div>\n        <div className="flex w-full justify-between text-muted-foreground">\n          <span>Monthly Average:</span>\n          <span>\n            $\n            {averageRevenue.toLocaleString(undefined, {\n              maximumFractionDigits: 0,\n            })}\n          </span>\n        </div>\n        <div className="mt-2 flex items-center gap-2 text-muted-foreground">\n          <span>Month-over-month growth:</span>\n          <span className="flex items-center gap-1 font-medium text-primary">\n            {lastMonthGrowth.toFixed(1)}%\n            <TrendingUpIcon className="size-4" />\n          </span>\n        </div>\n      </CardFooter>\n    </Card>\n  )\n}\n',
    component: React.lazy(() => import("@/components/demos/chart/chart-area")),
    title: "chart-area",
    category: "chart",
    path: "src/components/demos/chart/chart-area.tsx",
  },
  "chart-bar": {
    source:
      'import { TrendingUpIcon } from "lucide-react"\nimport { Bar, BarChart, CartesianGrid, Legend, XAxis } from "recharts"\n\nimport {\n  Card,\n  CardContent,\n  CardDescription,\n  CardFooter,\n  CardHeader,\n  CardTitle,\n} from "@/components/ui/card"\nimport {\n  Chart,\n  ChartConfig,\n  ChartTooltip,\n  ChartTooltipContent,\n} from "@/components/ui/chart"\n\nconst chartData = [\n  { month: "Jan", revenue: 1500, expenses: 1200 },\n  { month: "Feb", revenue: 3200, expenses: 2800 },\n  { month: "Mar", revenue: 2900, expenses: 2500 },\n  { month: "Apr", revenue: 2100, expenses: 1900 },\n  { month: "May", revenue: 4000, expenses: 3500 },\n  { month: "Jun", revenue: 3700, expenses: 3200 },\n]\n\nconst chartConfig = {\n  revenue: {\n    label: "Revenue",\n    color: "var(--chart-1)",\n  },\n  expenses: {\n    label: "Expenses",\n    color: "var(--chart-3)",\n  },\n} satisfies ChartConfig\n\nexport default function ChartBarDemo() {\n  const totalRevenue = chartData.reduce((sum, item) => sum + item.revenue, 0)\n  const totalExpenses = chartData.reduce((sum, item) => sum + item.expenses, 0)\n  const netProfit = totalRevenue - totalExpenses\n  const profitMargin = (netProfit / totalRevenue) * 100\n\n  return (\n    <Card className="flex w-full flex-col">\n      <CardHeader className="items-center">\n        <CardTitle>Revenue vs Expenses</CardTitle>\n        <CardDescription>First half of 2024</CardDescription>\n      </CardHeader>\n      <CardContent className="flex-1">\n        <Chart config={chartConfig} className="max-h-[300px]">\n          <BarChart\n            data={chartData}\n            margin={{\n              left: 12,\n              right: 12,\n            }}\n          >\n            <CartesianGrid vertical={false} />\n            <XAxis\n              dataKey="month"\n              tickLine={false}\n              axisLine={false}\n              tickMargin={8}\n              tickFormatter={(value) => value.slice(0, 3)}\n            />\n            <ChartTooltip\n              cursor={{ fill: "var(--background)" }}\n              content={<ChartTooltipContent />}\n            />\n            <Legend />\n            <Bar\n              dataKey="revenue"\n              fill={chartConfig.revenue.color}\n              radius={[4, 4, 0, 0]}\n              maxBarSize={32}\n            />\n            <Bar\n              dataKey="expenses"\n              fill={chartConfig.expenses.color}\n              radius={[4, 4, 0, 0]}\n              maxBarSize={32}\n            />\n          </BarChart>\n        </Chart>\n      </CardContent>\n      <CardFooter className="flex-col gap-2 text-sm leading-none">\n        <div className="flex w-full justify-between font-medium">\n          <span>Net Profit:</span>\n          <span>${netProfit.toLocaleString()}</span>\n        </div>\n        <div className="flex w-full justify-between text-muted-foreground">\n          <span>Profit Margin:</span>\n          <span className="flex items-center gap-1">\n            <TrendingUpIcon className="size-4" />\n            {profitMargin.toFixed(1)}%\n          </span>\n        </div>\n        <div className="flex w-full justify-between text-muted-foreground">\n          <span>Total Expenses:</span>\n          <span>${totalExpenses.toLocaleString()}</span>\n        </div>\n      </CardFooter>\n    </Card>\n  )\n}\n',
    component: React.lazy(() => import("@/components/demos/chart/chart-bar")),
    title: "chart-bar",
    category: "chart",
    path: "src/components/demos/chart/chart-bar.tsx",
  },
  "chart-demo": {
    source:
      'import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"\n\nimport {\n  Card,\n  CardContent,\n  CardDescription,\n  CardFooter,\n  CardHeader,\n  CardTitle,\n} from "@/components/ui/card"\nimport {\n  Chart,\n  ChartConfig,\n  ChartTooltip,\n  ChartTooltipContent,\n} from "@/components/ui/chart"\n\nconst chartData = [\n  { month: "Jan", revenue: 1500 },\n  { month: "Feb", revenue: 3200 },\n  { month: "Mar", revenue: 2900 },\n  { month: "Apr", revenue: 2100 },\n  { month: "May", revenue: 4000 },\n  { month: "Jun", revenue: 3700 },\n  { month: "Jul", revenue: 4300 },\n  { month: "Aug", revenue: 4900 },\n  { month: "Sep", revenue: 4700 },\n  { month: "Oct", revenue: 5200 },\n  { month: "Nov", revenue: 6000 },\n  { month: "Dec", revenue: 7200 },\n]\n\nconst chartConfig = {\n  revenue: {\n    label: "Revenue",\n    color: "var(--chart-2)",\n  },\n  expenses: {\n    label: "Expenses",\n    color: "var(--chart-3)",\n  },\n} satisfies ChartConfig\n\nexport default function ChartDemo() {\n  const totalRevenue = chartData.reduce((sum, item) => sum + item.revenue, 0)\n  const averageRevenue = totalRevenue / chartData.length\n  const highestRevenue = Math.max(...chartData.map((item) => item.revenue))\n\n  return (\n    <Card className="flex w-full flex-col">\n      <CardHeader className="items-center">\n        <CardTitle>Monthly Revenue</CardTitle>\n        <CardDescription>Performance overview for 2024</CardDescription>\n      </CardHeader>\n      <CardContent className="flex-1">\n        <Chart config={chartConfig} className="max-h-[300px]">\n          <BarChart accessibilityLayer data={chartData}>\n            <CartesianGrid vertical={false} />\n            <XAxis\n              dataKey="month"\n              tickLine={false}\n              axisLine={false}\n              tickMargin={8}\n            />\n            <ChartTooltip\n              cursor={{ fill: "var(--background)" }}\n              content={<ChartTooltipContent />}\n            />\n            <Bar\n              dataKey="revenue"\n              fill="var(--chart-2)"\n              radius={[4, 4, 0, 0]}\n            />\n          </BarChart>\n        </Chart>\n      </CardContent>\n      <CardFooter className="flex-col gap-2 text-sm leading-none">\n        <div className="flex w-full justify-between font-medium">\n          <span>Total Revenue:</span>\n          <span>${totalRevenue.toLocaleString()}</span>\n        </div>\n        <div className="flex w-full justify-between text-muted-foreground">\n          <span>Monthly Average:</span>\n          <span>\n            $\n            {averageRevenue.toLocaleString(undefined, {\n              maximumFractionDigits: 0,\n            })}\n          </span>\n        </div>\n        <div className="flex w-full justify-between text-muted-foreground">\n          <span>Highest Month:</span>\n          <span>${highestRevenue.toLocaleString()}</span>\n        </div>\n      </CardFooter>\n    </Card>\n  )\n}\n',
    component: React.lazy(() => import("@/components/demos/chart/chart-demo")),
    title: "chart-demo",
    category: "chart",
    path: "src/components/demos/chart/chart-demo.tsx",
  },
  "chart-line": {
    source:
      'import { CartesianGrid, Legend, Line, LineChart, XAxis } from "recharts"\n\nimport {\n  Card,\n  CardContent,\n  CardDescription,\n  CardFooter,\n  CardHeader,\n  CardTitle,\n} from "@/components/ui/card"\nimport {\n  Chart,\n  ChartConfig,\n  ChartTooltip,\n  ChartTooltipContent,\n} from "@/components/ui/chart"\n\nconst chartData = [\n  { month: "Jan", users: 100, activeUsers: 80, newUsers: 20 },\n  { month: "Feb", users: 120, activeUsers: 90, newUsers: 30 },\n  { month: "Mar", users: 150, activeUsers: 100, newUsers: 50 },\n  { month: "Apr", users: 200, activeUsers: 140, newUsers: 60 },\n  { month: "May", users: 250, activeUsers: 180, newUsers: 70 },\n  { month: "Jun", users: 300, activeUsers: 220, newUsers: 80 },\n]\n\nconst chartConfig = {\n  users: {\n    label: "Total Users",\n    color: "var(--chart-1)",\n  },\n  activeUsers: {\n    label: "Active Users",\n    color: "var(--chart-2)",\n  },\n  newUsers: {\n    label: "New Users",\n    color: "var(--chart-3)",\n  },\n} satisfies ChartConfig\n\nexport default function ChartLineDemo() {\n  const totalUsers = chartData[chartData.length - 1].users\n  const totalActiveUsers = chartData[chartData.length - 1].activeUsers\n  const userGrowth =\n    ((chartData[5].users - chartData[0].users) / chartData[0].users) * 100\n  const activeUsersRate = (totalActiveUsers / totalUsers) * 100\n\n  return (\n    <Card className="flex w-full flex-col">\n      <CardHeader className="items-center">\n        <CardTitle>User Growth</CardTitle>\n        <CardDescription>User metrics for first half of 2024</CardDescription>\n      </CardHeader>\n      <CardContent className="flex-1">\n        <Chart config={chartConfig} className="max-h-[300px]">\n          <LineChart\n            data={chartData}\n            margin={{\n              left: 12,\n              right: 12,\n            }}\n          >\n            <CartesianGrid vertical={false} />\n            <XAxis\n              dataKey="month"\n              tickLine={false}\n              axisLine={false}\n              tickMargin={8}\n              tickFormatter={(value) => value.slice(0, 3)}\n            />\n            <ChartTooltip content={<ChartTooltipContent />} />\n            <Legend />\n            <Line\n              type="monotone"\n              dataKey="users"\n              stroke={chartConfig.users.color}\n              strokeWidth={2}\n              dot={false}\n            />\n            <Line\n              type="monotone"\n              dataKey="activeUsers"\n              stroke={chartConfig.activeUsers.color}\n              strokeWidth={2}\n              dot={false}\n            />\n            <Line\n              type="monotone"\n              dataKey="newUsers"\n              stroke={chartConfig.newUsers.color}\n              strokeWidth={2}\n              dot={false}\n            />\n          </LineChart>\n        </Chart>\n      </CardContent>\n      <CardFooter className="flex-col gap-2 text-sm leading-none">\n        <div className="flex w-full justify-between font-medium">\n          <span>Total Users:</span>\n          <span>{totalUsers.toLocaleString()}</span>\n        </div>\n        <div className="flex w-full justify-between text-muted-foreground">\n          <span>Active Users Rate:</span>\n          <span>{activeUsersRate.toFixed(1)}%</span>\n        </div>\n        <div className="flex w-full justify-between text-muted-foreground">\n          <span>6-Month Growth:</span>\n          <span>{userGrowth.toFixed(1)}%</span>\n        </div>\n      </CardFooter>\n    </Card>\n  )\n}\n',
    component: React.lazy(() => import("@/components/demos/chart/chart-line")),
    title: "chart-line",
    category: "chart",
    path: "src/components/demos/chart/chart-line.tsx",
  },
  "chart-pie": {
    source:
      'import { Cell, Legend, Pie, PieChart } from "recharts"\n\nimport {\n  Card,\n  CardContent,\n  CardDescription,\n  CardFooter,\n  CardHeader,\n  CardTitle,\n} from "@/components/ui/card"\nimport {\n  Chart,\n  ChartConfig,\n  ChartTooltip,\n  ChartTooltipContent,\n} from "@/components/ui/chart"\n\nconst chartData = [\n  { category: "Sales", amount: 4000, fill: "var(--chart-1)" },\n  { category: "Marketing", amount: 3000, fill: "var(--chart-2)" },\n  { category: "IT", amount: 2000, fill: "var(--chart-3)" },\n  { category: "HR", amount: 1000, fill: "var(--chart-4)" },\n  { category: "Operations", amount: 1000, fill: "var(--chart-5)" },\n]\n\nconst chartConfig = {\n  sales: {\n    label: "Sales",\n    color: "var(--chart-1)",\n  },\n  marketing: {\n    label: "Marketing",\n    color: "var(--chart-2)",\n  },\n  it: {\n    label: "IT",\n    color: "var(--chart-3)",\n  },\n  hr: {\n    label: "HR",\n    color: "var(--chart-4)",\n  },\n  operations: {\n    label: "Operations",\n    color: "var(--chart-5)",\n  },\n} satisfies ChartConfig\n\nexport default function ChartPieDemo() {\n  const totalBudget = chartData.reduce((sum, item) => sum + item.amount, 0)\n  const highestBudget = Math.max(...chartData.map((item) => item.amount))\n  const highestCategory = chartData.find(\n    (item) => item.amount === highestBudget\n  )?.category\n\n  return (\n    <Card className="flex w-full flex-col">\n      <CardHeader className="items-center pb-0">\n        <CardTitle>Budget Distribution</CardTitle>\n        <CardDescription>Department budget allocation for 2024</CardDescription>\n      </CardHeader>\n      <CardContent className="flex-1">\n        <Chart config={chartConfig} className="max-h-[300px]">\n          <PieChart>\n            <ChartTooltip\n              cursor={false}\n              content={<ChartTooltipContent hideLabel />}\n            />\n            <Legend />\n            <Pie\n              data={chartData}\n              dataKey="amount"\n              nameKey="category"\n              cx="50%"\n              cy="50%"\n            >\n              {chartData.map((entry, index) => (\n                <Cell key={`cell-${index}`} fill={entry.fill} />\n              ))}\n            </Pie>\n          </PieChart>\n        </Chart>\n      </CardContent>\n      <CardFooter className="flex-col gap-2 text-sm leading-none">\n        <div className="flex w-full justify-between font-medium">\n          <span>Total Budget:</span>\n          <span>${totalBudget.toLocaleString()}</span>\n        </div>\n        <div className="flex w-full justify-between text-muted-foreground">\n          <span>Largest Department:</span>\n          <span>{highestCategory}</span>\n        </div>\n        <div className="flex w-full justify-between text-muted-foreground">\n          <span>Highest Budget:</span>\n          <span>${highestBudget.toLocaleString()}</span>\n        </div>\n      </CardFooter>\n    </Card>\n  )\n}\n',
    component: React.lazy(() => import("@/components/demos/chart/chart-pie")),
    title: "chart-pie",
    category: "chart",
    path: "src/components/demos/chart/chart-pie.tsx",
  },
  "chart-radar": {
    source:
      'import { Legend, PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"\n\nimport {\n  Card,\n  CardContent,\n  CardDescription,\n  CardFooter,\n  CardHeader,\n  CardTitle,\n} from "@/components/ui/card"\nimport {\n  Chart,\n  ChartConfig,\n  ChartTooltip,\n  ChartTooltipContent,\n} from "@/components/ui/chart"\n\nconst chartData = [\n  { category: "Performance", a: 90, b: 60 },\n  { category: "Reliability", a: 75, b: 90 },\n  { category: "Scalability", a: 95, b: 90 },\n  { category: "Security", a: 88, b: 65 },\n  { category: "Usability", a: 92, b: 88 },\n]\n\nconst chartConfig = {\n  a: {\n    label: "Product A",\n    color: "var(--chart-1)",\n  },\n  b: {\n    label: "Product B",\n    color: "var(--chart-2)",\n  },\n} satisfies ChartConfig\n\nexport default function ChartRadarDemo() {\n  const productAAverage =\n    chartData.reduce((sum, item) => sum + item.a, 0) / chartData.length\n  const productBAverage =\n    chartData.reduce((sum, item) => sum + item.b, 0) / chartData.length\n  const bestPerformer =\n    productAAverage > productBAverage ? "Product A" : "Product B"\n\n  return (\n    <Card className="flex w-full flex-col">\n      <CardHeader className="items-center">\n        <CardTitle>Product Comparison</CardTitle>\n        <CardDescription>\n          Performance metrics across key categories\n        </CardDescription>\n      </CardHeader>\n      <CardContent className="flex-1">\n        <Chart config={chartConfig} className="max-h-[300px]">\n          <RadarChart data={chartData}>\n            <PolarGrid />\n            <PolarAngleAxis dataKey="category" />\n            <ChartTooltip content={<ChartTooltipContent />} />\n            <Legend />\n            <Radar\n              name="Product A"\n              dataKey="a"\n              stroke={chartConfig.a.color}\n              fill={chartConfig.a.color}\n              fillOpacity={0.2}\n            />\n            <Radar\n              name="Product B"\n              dataKey="b"\n              stroke={chartConfig.b.color}\n              fill={chartConfig.b.color}\n              fillOpacity={0.2}\n            />\n          </RadarChart>\n        </Chart>\n      </CardContent>\n      <CardFooter className="flex-col gap-2 text-sm leading-none">\n        <div className="flex w-full justify-between font-medium">\n          <span>Best Overall:</span>\n          <span>{bestPerformer}</span>\n        </div>\n        <div className="flex w-full justify-between text-muted-foreground">\n          <span>Product A Average:</span>\n          <span>{productAAverage.toFixed(1)}%</span>\n        </div>\n        <div className="flex w-full justify-between text-muted-foreground">\n          <span>Product B Average:</span>\n          <span>{productBAverage.toFixed(1)}%</span>\n        </div>\n      </CardFooter>\n    </Card>\n  )\n}\n',
    component: React.lazy(() => import("@/components/demos/chart/chart-radar")),
    title: "chart-radar",
    category: "chart",
    path: "src/components/demos/chart/chart-radar.tsx",
  },
  "chart-radial-bar": {
    source:
      'import { RadialBar, RadialBarChart } from "recharts"\n\nimport {\n  Card,\n  CardContent,\n  CardDescription,\n  CardFooter,\n  CardHeader,\n  CardTitle,\n} from "@/components/ui/card"\nimport {\n  Chart,\n  ChartConfig,\n  ChartTooltip,\n  ChartTooltipContent,\n} from "@/components/ui/chart"\n\nconst chartData = [\n  { browser: "chrome", visitors: 540, fill: "var(--color-chrome)" },\n  { browser: "safari", visitors: 410, fill: "var(--color-safari)" },\n  { browser: "firefox", visitors: 262, fill: "var(--color-firefox)" },\n  { browser: "edge", visitors: 160, fill: "var(--color-edge)" },\n  { browser: "other", visitors: 100, fill: "var(--color-other)" },\n]\n\nconst chartConfig = {\n  visitors: {\n    label: "Visitors",\n  },\n  chrome: {\n    label: "Chrome",\n    color: "var(--chart-1)",\n  },\n  safari: {\n    label: "Safari",\n    color: "var(--chart-2)",\n  },\n  firefox: {\n    label: "Firefox",\n    color: "var(--chart-3)",\n  },\n  edge: {\n    label: "Edge",\n    color: "var(--chart-4)",\n  },\n  other: {\n    label: "Other",\n    color: "var(--chart-5)",\n  },\n} satisfies ChartConfig\n\nexport default function ChartRadialBarDemo() {\n  const totalVisitors = chartData.reduce((sum, item) => sum + item.visitors, 0)\n  const highestVisitors = Math.max(...chartData.map((item) => item.visitors))\n  const topBrowser = chartData.find(\n    (item) => item.visitors === highestVisitors\n  )?.browser\n\n  return (\n    <Card className="flex w-full flex-col">\n      <CardHeader className="items-center">\n        <CardTitle>Browser Usage</CardTitle>\n        <CardDescription>Visitor distribution by browser</CardDescription>\n      </CardHeader>\n      <CardContent className="flex-1">\n        <Chart\n          config={chartConfig}\n          className="mx-auto aspect-square max-h-[250px]"\n        >\n          <RadialBarChart data={chartData} innerRadius={30} outerRadius={110}>\n            <ChartTooltip\n              cursor={false}\n              content={<ChartTooltipContent hideLabel nameKey="browser" />}\n            />\n            <RadialBar dataKey="visitors" background />\n          </RadialBarChart>\n        </Chart>\n      </CardContent>\n      <CardFooter className="flex-col gap-2 text-sm leading-none">\n        <div className="flex w-full justify-between font-medium">\n          <span>Total Visitors:</span>\n          <span>{totalVisitors.toLocaleString()}</span>\n        </div>\n        <div className="flex w-full justify-between text-muted-foreground">\n          <span>Most Used Browser:</span>\n          <span className="capitalize">{topBrowser}</span>\n        </div>\n        <div className="flex w-full justify-between text-muted-foreground">\n          <span>Peak Visitors:</span>\n          <span>{highestVisitors.toLocaleString()}</span>\n        </div>\n      </CardFooter>\n    </Card>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/chart/chart-radial-bar")
    ),
    title: "chart-radial-bar",
    category: "chart",
    path: "src/components/demos/chart/chart-radial-bar.tsx",
  },
  "chart-scatter": {
    source:
      'import {\n  CartesianGrid,\n  Scatter,\n  ScatterChart,\n  XAxis,\n  YAxis,\n  ZAxis,\n} from "recharts"\n\nimport {\n  Card,\n  CardContent,\n  CardDescription,\n  CardFooter,\n  CardHeader,\n  CardTitle,\n} from "@/components/ui/card"\nimport {\n  Chart,\n  ChartConfig,\n  ChartTooltip,\n  ChartTooltipContent,\n} from "@/components/ui/chart"\n\nconst chartData = [\n  { population: 850000, price: 425000, city: "San Francisco" },\n  { population: 2700000, price: 385000, city: "Chicago" },\n  { population: 8400000, price: 750000, city: "New York" },\n  { population: 4000000, price: 890000, city: "Los Angeles" },\n  { population: 2300000, price: 350000, city: "Houston" },\n  { population: 1600000, price: 420000, city: "Philadelphia" },\n  { population: 730000, price: 480000, city: "Seattle" },\n  { population: 690000, price: 445000, city: "Boston" },\n  { population: 710000, price: 320000, city: "Denver" },\n  { population: 950000, price: 295000, city: "Austin" },\n]\n\nconst chartConfig = {\n  scatter: {\n    label: "Cities",\n    color: "var(--chart-1)",\n  },\n} satisfies ChartConfig\n\nexport default function ChartScatterDemo() {\n  const averagePrice =\n    chartData.reduce((sum, item) => sum + item.price, 0) / chartData.length\n  const highestPrice = Math.max(...chartData.map((item) => item.price))\n  const mostExpensiveCity = chartData.find(\n    (item) => item.price === highestPrice\n  )?.city\n\n  return (\n    <Card className="flex w-full flex-col">\n      <CardHeader className="items-center">\n        <CardTitle>Housing Market Analysis</CardTitle>\n        <CardDescription>\n          Population vs House Prices in Major Cities\n        </CardDescription>\n      </CardHeader>\n      <CardContent>\n        <Chart config={chartConfig} className="max-h-[300px]">\n          <ScatterChart>\n            <CartesianGrid strokeDasharray="3 3" />\n            <XAxis\n              type="number"\n              dataKey="price"\n              name="Average House Price"\n              unit="$"\n              tickLine={false}\n              axisLine={false}\n              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}\n            />\n            <YAxis\n              type="number"\n              dataKey="population"\n              name="Population"\n              tickLine={false}\n              axisLine={false}\n              tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}\n            />\n            <ZAxis type="category" dataKey="city" name="City" />\n            <ChartTooltip\n              content={\n                <ChartTooltipContent\n                  nameKey="city"\n                  labelKey="price"\n                  hideIndicator\n                />\n              }\n            />\n            <Scatter\n              name="Cities"\n              data={chartData}\n              fill={chartConfig.scatter.color}\n            />\n          </ScatterChart>\n        </Chart>\n      </CardContent>\n      <CardFooter className="flex-col gap-2 text-sm leading-none">\n        <div className="flex w-full justify-between font-medium">\n          <span>Most Expensive City:</span>\n          <span>{mostExpensiveCity}</span>\n        </div>\n        <div className="flex w-full justify-between text-muted-foreground">\n          <span>Average House Price:</span>\n          <span>${averagePrice.toLocaleString()}</span>\n        </div>\n        <div className="flex w-full justify-between text-muted-foreground">\n          <span>Highest House Price:</span>\n          <span>${highestPrice.toLocaleString()}</span>\n        </div>\n      </CardFooter>\n    </Card>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/chart/chart-scatter")
    ),
    title: "chart-scatter",
    category: "chart",
    path: "src/components/demos/chart/chart-scatter.tsx",
  },
  "checkbox-group-demo": {
    source:
      'import { useState } from "react"\n\nimport { Checkbox } from "@/components/ui/checkbox"\nimport { CheckboxGroup } from "@/components/ui/checkbox-group"\nimport { Label } from "@/components/ui/label"\n\nconst groceries = ["milk", "cheese", "bread", "apples"]\n\nexport default function CheckboxGroupDemo() {\n  const [checkedItems, setCheckedItems] = useState<string[]>([])\n\n  return (\n    <CheckboxGroup\n      aria-labelledby="groceries"\n      value={checkedItems}\n      onValueChange={(value) => setCheckedItems(value)}\n      allValues={groceries}\n    >\n      <Label className="flex items-center gap-2">\n        <Checkbox\n          parent\n          indeterminate={\n            checkedItems.length > 0 && checkedItems.length !== groceries.length\n          }\n        />\n        Groceries\n      </Label>\n\n      {groceries.map((grocery) => (\n        <Label className="ml-4 flex items-center gap-2" key={grocery}>\n          <Checkbox name={grocery} />\n          {grocery.charAt(0).toUpperCase() + grocery.slice(1)}\n        </Label>\n      ))}\n    </CheckboxGroup>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/checkbox-group/checkbox-group-demo")
    ),
    title: "checkbox-group-demo",
    category: "checkbox-group",
    path: "src/components/demos/checkbox-group/checkbox-group-demo.tsx",
  },
  "checkbox-demo": {
    source:
      'import { Checkbox } from "@/components/ui/checkbox"\n\nexport default function CheckboxDemo() {\n  return <Checkbox />\n}\n',
    component: React.lazy(
      () => import("@/components/demos/checkbox/checkbox-demo")
    ),
    title: "checkbox-demo",
    category: "checkbox",
    path: "src/components/demos/checkbox/checkbox-demo.tsx",
  },
  "checkbox-disabled": {
    source:
      'import { Checkbox } from "@/components/ui/checkbox"\n\nexport default function CheckboxDisabled() {\n  return <Checkbox disabled />\n}\n',
    component: React.lazy(
      () => import("@/components/demos/checkbox/checkbox-disabled")
    ),
    title: "checkbox-disabled",
    category: "checkbox",
    path: "src/components/demos/checkbox/checkbox-disabled.tsx",
  },
  "checkbox-error": {
    source:
      'import { Checkbox } from "@/components/ui/checkbox"\n\nexport default function CheckboxError() {\n  return <Checkbox aria-invalid />\n}\n',
    component: React.lazy(
      () => import("@/components/demos/checkbox/checkbox-error")
    ),
    title: "checkbox-error",
    category: "checkbox",
    path: "src/components/demos/checkbox/checkbox-error.tsx",
  },
  "checkbox-with-label": {
    source:
      'import { Checkbox } from "@/components/ui/checkbox"\nimport { Label } from "@/components/ui/label"\n\nexport default function CheckboxWithLabel() {\n  return (\n    <Label className="flex items-center gap-2">\n      <Checkbox />\n      Accept\n    </Label>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/checkbox/checkbox-with-label")
    ),
    title: "checkbox-with-label",
    category: "checkbox",
    path: "src/components/demos/checkbox/checkbox-with-label.tsx",
  },
  "collapsible-demo": {
    source:
      'import { useState } from "react"\nimport { ChevronRightIcon } from "lucide-react"\n\nimport {\n  Collapsible,\n  CollapsibleContent,\n  CollapsibleTrigger,\n} from "@/components/ui/collapsible"\n\nimport { cn } from "@/lib/utils"\n\nexport default function CollapsibleDemo() {\n  const [open, setOpen] = useState(false)\n\n  return (\n    <Collapsible\n      className="mx-auto w-40 py-12"\n      open={open}\n      onOpenChange={setOpen}\n    >\n      <CollapsibleTrigger className="flex w-full items-center justify-between px-1.5 py-1">\n        <span className="text-sm font-medium">Components</span>\n        <div className={cn("transition-all duration-200", open && "rotate-90")}>\n          <ChevronRightIcon size={16} />\n        </div>\n      </CollapsibleTrigger>\n      <CollapsibleContent>\n        <ol className="mt-2 space-y-1">\n          <li className="rounded border bg-secondary px-2 py-1">Button</li>\n          <li className="rounded border bg-secondary px-2 py-1">Badge</li>\n          <li className="rounded border bg-secondary px-2 py-1">Breadcrumbs</li>\n        </ol>\n      </CollapsibleContent>\n    </Collapsible>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/collapsible/collapsible-demo")
    ),
    title: "collapsible-demo",
    category: "collapsible",
    path: "src/components/demos/collapsible/collapsible-demo.tsx",
  },
  "combobox-demo": {
    source:
      'import * as React from "react"\nimport { Check, ChevronsUpDownIcon } from "lucide-react"\n\nimport { Button } from "@/components/ui/button"\nimport {\n  Command,\n  CommandEmpty,\n  CommandGroup,\n  CommandInput,\n  CommandItem,\n  CommandList,\n} from "@/components/ui/command"\nimport {\n  Popover,\n  PopoverContent,\n  PopoverTrigger,\n} from "@/components/ui/popover"\n\nimport { cn } from "@/lib/utils"\n\nconst statuses = [\n  {\n    value: "backlog",\n    label: "Backlog",\n    color: "bg-slate-500",\n  },\n  {\n    value: "todo",\n    label: "Todo",\n    color: "bg-blue-500",\n  },\n  {\n    value: "in-progress",\n    label: "In Progress",\n    color: "bg-yellow-500",\n  },\n  {\n    value: "done",\n    label: "Done",\n    color: "bg-green-500",\n  },\n  {\n    value: "canceled",\n    label: "Canceled",\n    color: "bg-red-500",\n  },\n]\n\nexport default function ComboboxDemo() {\n  const [open, setOpen] = React.useState(false)\n  const [value, setValue] = React.useState("todo")\n\n  return (\n    <Popover open={open} onOpenChange={setOpen}>\n      <PopoverTrigger\n        render={(props) => (\n          <Button\n            {...props}\n            variant="outline"\n            role="combobox"\n            aria-expanded={open}\n            className="w-[200px] justify-between"\n          >\n            {value && (\n              <div className="flex items-center gap-2">\n                <div\n                  className={cn(\n                    "size-2 rounded-full",\n                    statuses.find((status) => status.value === value)?.color\n                  )}\n                />\n                {statuses.find((status) => status.value === value)?.label}\n              </div>\n            )}\n            <ChevronsUpDownIcon className="ml-2 size-4 shrink-0 opacity-50" />\n          </Button>\n        )}\n      />\n      <PopoverContent className="w-[200px] p-0" sideOffset={4} arrow={false}>\n        <Command>\n          <CommandInput\n            placeholder="Search status..."\n            className="border-none focus:ring-0"\n          />\n          <CommandList>\n            <CommandEmpty>No status found.</CommandEmpty>\n            <CommandGroup>\n              {statuses.map((status) => (\n                <CommandItem\n                  key={status.value}\n                  value={status.value}\n                  onSelect={(currentValue) => {\n                    setValue(currentValue)\n                    setOpen(false)\n                  }}\n                >\n                  <div className="flex items-center gap-2">\n                    <div className={cn("size-2 rounded-full", status.color)} />\n                    <span>{status.label}</span>\n                  </div>\n                  {value === status.value && (\n                    <Check className="ml-auto size-4 shrink-0 opacity-50" />\n                  )}\n                </CommandItem>\n              ))}\n            </CommandGroup>\n          </CommandList>\n        </Command>\n      </PopoverContent>\n    </Popover>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/combobox/combobox-demo")
    ),
    title: "combobox-demo",
    category: "combobox",
    path: "src/components/demos/combobox/combobox-demo.tsx",
  },
  "command-demo": {
    source:
      'import {\n  ArrowRightIcon,\n  LayoutGridIcon,\n  PlusIcon,\n  UsersIcon,\n} from "lucide-react"\n\nimport {\n  Command,\n  CommandEmpty,\n  CommandGroup,\n  CommandInput,\n  CommandItem,\n  CommandList,\n  CommandSeparator,\n  CommandShortcut,\n} from "@/components/ui/command"\nimport { Kbd } from "@/components/ui/kbd"\n\nexport default function CommandDemo() {\n  return (\n    <Command>\n      <CommandInput placeholder="Type a command or search..." />\n      <CommandList>\n        <CommandEmpty>No results found.</CommandEmpty>\n        <CommandGroup heading="Projects">\n          <CommandItem>\n            <LayoutGridIcon />\n            <span>Search projects...</span>\n            <CommandShortcut>\n              <Kbd>⌘</Kbd>\n              <Kbd>P</Kbd>\n            </CommandShortcut>\n          </CommandItem>\n          <CommandItem>\n            <PlusIcon />\n            <span>Create new projecte...</span>\n            <CommandShortcut>\n              <Kbd>C</Kbd>\n            </CommandShortcut>\n          </CommandItem>\n        </CommandGroup>\n        <CommandSeparator />\n        <CommandGroup heading="Teams">\n          <CommandItem>\n            <UsersIcon />\n            <span>Search teams...</span>\n          </CommandItem>\n          <CommandItem>\n            <PlusIcon />\n            <span>Create new team...</span>\n            <CommandShortcut>\n              <Kbd>T</Kbd>\n            </CommandShortcut>\n          </CommandItem>\n        </CommandGroup>\n        <CommandGroup heading="Navigation">\n          <CommandItem>\n            <ArrowRightIcon />\n            <span>Go to home</span>\n          </CommandItem>\n          <CommandItem>\n            <ArrowRightIcon />\n            <span>Go to profile</span>\n          </CommandItem>\n          <CommandItem>\n            <ArrowRightIcon />\n            <span>Go to settings</span>\n          </CommandItem>\n          <CommandItem>\n            <ArrowRightIcon />\n            <span>Go to billing</span>\n          </CommandItem>\n        </CommandGroup>\n      </CommandList>\n    </Command>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/command/command-demo")
    ),
    title: "command-demo",
    category: "command",
    path: "src/components/demos/command/command-demo.tsx",
  },
  "command-dialog": {
    source:
      'import { useEffect, useState } from "react"\nimport {\n  ArrowRightIcon,\n  LayoutGridIcon,\n  PlusIcon,\n  UsersIcon,\n} from "lucide-react"\n\nimport {\n  CommandDialog,\n  CommandEmpty,\n  CommandGroup,\n  CommandInput,\n  CommandItem,\n  CommandList,\n  CommandSeparator,\n  CommandShortcut,\n} from "@/components/ui/command"\nimport { Kbd } from "@/components/ui/kbd"\n\nexport default function CommandDialogDemo() {\n  const [open, setOpen] = useState(false)\n\n  useEffect(() => {\n    const down = (e: KeyboardEvent) => {\n      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {\n        e.preventDefault()\n        setOpen((open) => !open)\n      }\n    }\n    document.addEventListener("keydown", down)\n    return () => document.removeEventListener("keydown", down)\n  }, [])\n\n  return (\n    <>\n      <div className="flex items-center gap-2 text-sm">\n        <Kbd>⌘</Kbd>+<Kbd>K</Kbd>\n      </div>\n      <CommandDialog open={open} onOpenChange={setOpen}>\n        <CommandInput placeholder="Type a command or search..." />\n        <CommandList>\n          <CommandEmpty>No results found.</CommandEmpty>\n          <CommandGroup heading="Projects">\n            <CommandItem>\n              <LayoutGridIcon />\n              <span>Search projects...</span>\n              <CommandShortcut>\n                <Kbd>⌘</Kbd>\n                <Kbd>P</Kbd>\n              </CommandShortcut>\n            </CommandItem>\n            <CommandItem>\n              <PlusIcon />\n              <span>Create new projecte...</span>\n              <CommandShortcut>\n                <Kbd>C</Kbd>\n              </CommandShortcut>\n            </CommandItem>\n          </CommandGroup>\n          <CommandSeparator />\n          <CommandGroup heading="Teams">\n            <CommandItem>\n              <UsersIcon />\n              <span>Search teams...</span>\n            </CommandItem>\n            <CommandItem>\n              <PlusIcon />\n              <span>Create new team...</span>\n              <CommandShortcut>\n                <Kbd>T</Kbd>\n              </CommandShortcut>\n            </CommandItem>\n          </CommandGroup>\n          <CommandGroup heading="Navigation">\n            <CommandItem>\n              <ArrowRightIcon />\n              <span>Go to home</span>\n            </CommandItem>\n            <CommandItem>\n              <ArrowRightIcon />\n              <span>Go to profile</span>\n            </CommandItem>\n            <CommandItem>\n              <ArrowRightIcon />\n              <span>Go to settings</span>\n            </CommandItem>\n            <CommandItem>\n              <ArrowRightIcon />\n              <span>Go to billing</span>\n            </CommandItem>\n          </CommandGroup>\n        </CommandList>\n      </CommandDialog>\n    </>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/command/command-dialog")
    ),
    title: "command-dialog",
    category: "command",
    path: "src/components/demos/command/command-dialog.tsx",
  },
  "context-menu-demo": {
    source:
      'import {\n  ContextMenu,\n  ContextMenuCheckboxItem,\n  ContextMenuContent,\n  ContextMenuGroup,\n  ContextMenuGroupLabel,\n  ContextMenuItem,\n  ContextMenuItemShortcut,\n  ContextMenuRadioGroup,\n  ContextMenuRadioItem,\n  ContextMenuSeparator,\n  ContextMenuSubTrigger,\n  ContextMenuTrigger,\n} from "@/components/ui/context-menu"\n\nexport default function ContextMenuDemo() {\n  return (\n    <div className="w-80">\n      <ContextMenu>\n        <ContextMenuTrigger className="flex aspect-video w-full items-center justify-center rounded-lg border border-dashed text-sm">\n          Right Click Here\n        </ContextMenuTrigger>\n        <ContextMenuContent>\n          <ContextMenuGroup>\n            <ContextMenuItem>\n              Back\n              <ContextMenuItemShortcut>⌘[</ContextMenuItemShortcut>\n            </ContextMenuItem>\n            <ContextMenuItem disabled>\n              Forward\n              <ContextMenuItemShortcut>⌘]</ContextMenuItemShortcut>\n            </ContextMenuItem>\n            <ContextMenuItem>\n              Reload\n              <ContextMenuItemShortcut>⌘R</ContextMenuItemShortcut>\n            </ContextMenuItem>\n            <ContextMenu>\n              <ContextMenuSubTrigger>More</ContextMenuSubTrigger>\n              <ContextMenuContent>\n                <ContextMenuItem>Save As</ContextMenuItem>\n                <ContextMenuItem>Print</ContextMenuItem>\n                <ContextMenuItem>Cast</ContextMenuItem>\n                <ContextMenuSeparator />\n                <ContextMenuItem>Inspect</ContextMenuItem>\n              </ContextMenuContent>\n            </ContextMenu>\n          </ContextMenuGroup>\n          <ContextMenuSeparator />\n          <ContextMenuGroup>\n            <ContextMenuGroupLabel>Settings</ContextMenuGroupLabel>\n            <ContextMenuCheckboxItem>Always on Top</ContextMenuCheckboxItem>\n            <ContextMenuCheckboxItem>Show full URL</ContextMenuCheckboxItem>\n          </ContextMenuGroup>\n          <ContextMenuSeparator />\n          <ContextMenuGroup>\n            <ContextMenuGroupLabel>Zoom</ContextMenuGroupLabel>\n            <ContextMenuRadioGroup defaultValue="100">\n              <ContextMenuRadioItem value="50">50%</ContextMenuRadioItem>\n              <ContextMenuRadioItem value="100">100%</ContextMenuRadioItem>\n              <ContextMenuRadioItem value="150">150%</ContextMenuRadioItem>\n            </ContextMenuRadioGroup>\n          </ContextMenuGroup>\n        </ContextMenuContent>\n      </ContextMenu>\n    </div>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/context-menu/context-menu-demo")
    ),
    title: "context-menu-demo",
    category: "context-menu",
    path: "src/components/demos/context-menu/context-menu-demo.tsx",
  },
  "date-picker-demo": {
    source:
      'import * as React from "react"\nimport dayjs from "dayjs"\nimport { CalendarIcon, ChevronsUpDownIcon } from "lucide-react"\n\nimport { Button } from "@/components/ui/button"\nimport { Calendar } from "@/components/ui/calendar"\nimport {\n  Popover,\n  PopoverContent,\n  PopoverTrigger,\n} from "@/components/ui/popover"\n\nexport default function DatePickerDemo() {\n  const [open, setOpen] = React.useState(false)\n  const [value, setValue] = React.useState<Date | undefined>(undefined)\n\n  return (\n    <Popover open={open} onOpenChange={setOpen}>\n      <PopoverTrigger\n        render={(props) => (\n          <Button\n            {...props}\n            variant="outline"\n            className="w-[250px] justify-between"\n          >\n            <div className="flex items-center">\n              <CalendarIcon className="mr-2 size-4" />\n              {value ? (\n                <span>{dayjs(value).format("DD MMMM YYYY")}</span>\n              ) : (\n                <span>Select a date</span>\n              )}\n            </div>\n            <ChevronsUpDownIcon className="ml-2 size-4 shrink-0 opacity-50" />\n          </Button>\n        )}\n      />\n      <PopoverContent className=" p-0" sideOffset={4} arrow={false}>\n        <Calendar\n          className="border-0"\n          mode="single"\n          showOutsideDays\n          selected={value}\n          onSelect={setValue}\n        />\n      </PopoverContent>\n    </Popover>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/date-picker/date-picker-demo")
    ),
    title: "date-picker-demo",
    category: "date-picker",
    path: "src/components/demos/date-picker/date-picker-demo.tsx",
  },
  "dialog-demo": {
    source:
      'import { Button } from "@/components/ui/button"\nimport {\n  Dialog,\n  DialogContent,\n  DialogDescription,\n  DialogFooter,\n  DialogHeader,\n  DialogTitle,\n  DialogTrigger,\n} from "@/components/ui/dialog"\n\nexport default function DialogDemo() {\n  return (\n    <Dialog>\n      <DialogTrigger\n        render={(props) => <Button {...props}>Privacy Policy</Button>}\n      />\n      <DialogContent>\n        <DialogHeader>\n          <DialogTitle>Privacy Policy</DialogTitle>\n          <DialogDescription>\n            Please read our privacy policy carefully.\n          </DialogDescription>\n        </DialogHeader>\n        <div className="max-h-80 overflow-y-auto text-sm text-foreground">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\n          ultricies, odio quis blandit vestibulum, orci elit suscipit urna, at\n          lobortis arcu enim vel purus. Maecenas luctus sem dui, lobortis\n          dignissim enim consequat in. Nullam a volutpat purus. Aenean\n          pellentesque eros nec rutrum suscipit. Fusce ac lectus volutpat,\n          feugiat nulla et, suscipit dui. Pellentesque habitant morbi tristique\n          senectus et netus et malesuada fames ac turpis egestas. Ut maximus,\n          risus et convallis placerat, risus urna feugiat neque, in vestibulum\n          leo arcu vitae justo. Duis magna mi, maximus at neque sed, tempor\n          congue ligula. In iaculis metus nec euismod egestas. Donec id\n          porttitor nulla. Donec feugiat iaculis lacus, ut elementum dui\n          faucibus sed. Sed ut ipsum non tellus dignissim accumsan. Vivamus\n          luctus malesuada lacus sed dictum.\n          <br />\n          <br />\n          Sed consectetur nibh mollis, ornare magna et, dictum tellus. Nam\n          viverra dui a enim iaculis, sed blandit orci consectetur. Maecenas et\n          nisi eleifend velit pretium eleifend sit amet eget nisl. Vestibulum\n          eget ipsum semper purus pulvinar iaculis. Sed ut odio eu felis\n          porttitor ultrices eu sed odio. Nullam lorem sapien, pellentesque\n          convallis libero vel, tempus accumsan nisi. Morbi efficitur ex vitae\n          felis luctus cursus. Suspendisse nibh neque, gravida sed elementum\n          ullamcorper, gravida in nisi. Donec et luctus metus. Fusce sed est\n          dictum, imperdiet nisi eu, suscipit odio. In id enim at tortor\n          malesuada vulputate eu eu sem. Mauris blandit faucibus euismod.\n          <br />\n          <br />\n          Curabitur quam tortor, tristique euismod finibus viverra, bibendum sit\n          amet nisl. Nulla lobortis pharetra mauris, ac semper urna tempor et.\n          Maecenas enim magna, suscipit nec metus id, ornare pulvinar dolor.\n          Cras rhoncus ante sit amet tempus luctus. Donec in nisl a dolor auctor\n          tincidunt. Cras at arcu tortor. Pellentesque ante felis, convallis sit\n          amet erat id, consectetur consequat sapien. Aliquam volutpat velit in\n          est bibendum, vestibulum commodo leo interdum. Integer sodales ex eu\n          tempus faucibus. Vestibulum ultricies erat vel leo accumsan posuere.\n          Cras commodo felis vitae lacus suscipit, in tristique lectus\n          venenatis. Sed et nibh urna. Praesent vitae eleifend turpis. Fusce sit\n          amet pretium lorem, in tempus elit. Etiam at ornare est. Aenean felis\n          arcu, fermentum scelerisque nibh at, lacinia sagittis neque.\n        </div>\n        <DialogFooter>\n          <Button className="w-full">Accept</Button>\n        </DialogFooter>\n      </DialogContent>\n    </Dialog>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/dialog/dialog-demo")
    ),
    title: "dialog-demo",
    category: "dialog",
    path: "src/components/demos/dialog/dialog-demo.tsx",
  },
  "dialog-nested": {
    source:
      'import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"\nimport { Button } from "@/components/ui/button"\nimport {\n  Dialog,\n  DialogClose,\n  DialogContent,\n  DialogDescription,\n  DialogFooter,\n  DialogHeader,\n  DialogTitle,\n  DialogTrigger,\n} from "@/components/ui/dialog"\n\nexport default function DialogNested() {\n  return (\n    <Dialog>\n      <DialogTrigger\n        render={(props) => <Button {...props}>View Details</Button>}\n      />\n      <DialogContent>\n        <DialogHeader>\n          <DialogTitle>Profile</DialogTitle>\n          <DialogDescription>\n            View and edit your profile details.\n          </DialogDescription>\n        </DialogHeader>\n        <div>\n          <div className="flex items-center gap-4">\n            <Avatar>\n              <AvatarImage src="/avatars/bora.png" />\n              <AvatarFallback>BB</AvatarFallback>\n            </Avatar>\n            <span className="text-foreground">Bora Baloglu</span>\n          </div>\n        </div>\n        <DialogFooter>\n          <Dialog>\n            <DialogTrigger\n              render={(props) => (\n                <Button {...props} variant="outline">\n                  Edit\n                </Button>\n              )}\n            />\n            <DialogContent>\n              <DialogTitle>Edit</DialogTitle>\n              <DialogDescription>\n                Edit the details of the item\n              </DialogDescription>\n              <DialogFooter>\n                <DialogClose\n                  render={(props) => (\n                    <Button {...props} variant="ghost">\n                      Cancel\n                    </Button>\n                  )}\n                />\n                <Button>Save</Button>\n              </DialogFooter>\n            </DialogContent>\n          </Dialog>\n        </DialogFooter>\n      </DialogContent>\n    </Dialog>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/dialog/dialog-nested")
    ),
    title: "dialog-nested",
    category: "dialog",
    path: "src/components/demos/dialog/dialog-nested.tsx",
  },
  "drawer-demo": {
    source:
      'import { useState } from "react"\nimport { StarIcon } from "lucide-react"\n\nimport { Button } from "@/components/ui/button"\nimport {\n  Drawer,\n  DrawerClose,\n  DrawerContent,\n  DrawerDescription,\n  DrawerFooter,\n  DrawerHeader,\n  DrawerTitle,\n  DrawerTrigger,\n} from "@/components/ui/drawer"\nimport { Textarea } from "@/components/ui/textarea"\n\nimport { cn } from "@/lib/utils"\n\nexport default function DrawerDemo() {\n  const [rating, setRating] = useState<number | undefined>(undefined)\n\n  const handleChangeRating = (newRating: number) => {\n    if (newRating === rating) {\n      setRating(undefined)\n    } else {\n      setRating(newRating)\n    }\n  }\n\n  return (\n    <Drawer shouldScaleBackground>\n      <DrawerTrigger\n        render={(props) => <Button {...props}>Open Drawer</Button>}\n      />\n      <DrawerContent>\n        <div className="mx-auto w-full max-w-md">\n          <DrawerHeader>\n            <DrawerTitle>Provide Your Feedback</DrawerTitle>\n            <DrawerDescription>\n              We value your feedback. Please rate your experience and leave a\n              review.\n            </DrawerDescription>\n          </DrawerHeader>\n\n          <div className="flex flex-col gap-4 px-4">\n            <div className="flex gap-2">\n              {[1, 2, 3, 4, 5].map((star) => (\n                <StarIcon\n                  key={star}\n                  className={cn(\n                    "size-8 cursor-pointer transition-all",\n                    rating && star <= rating\n                      ? "fill-yellow-300 text-yellow-300"\n                      : "fill-none text-muted-foreground"\n                  )}\n                  onClick={() => handleChangeRating(star)}\n                />\n              ))}\n            </div>\n            <Textarea placeholder="Write a review" />\n          </div>\n\n          <DrawerFooter>\n            <Button className="w-full">Submit</Button>\n            <DrawerClose\n              render={(props) => (\n                <Button {...props} variant="outline" className="w-full">\n                  Cancel\n                </Button>\n              )}\n            />\n          </DrawerFooter>\n        </div>\n      </DrawerContent>\n    </Drawer>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/drawer/drawer-demo")
    ),
    title: "drawer-demo",
    category: "drawer",
    path: "src/components/demos/drawer/drawer-demo.tsx",
  },
  "dropdown-demo": {
    source:
      'import { useState } from "react"\nimport {\n  PauseIcon,\n  PlayIcon,\n  SkipBackIcon,\n  SkipForwardIcon,\n} from "lucide-react"\n\nimport { Button } from "@/components/ui/button"\nimport {\n  Dropdown,\n  DropdownCheckboxItem,\n  DropdownContent,\n  DropdownGroup,\n  DropdownGroupLabel,\n  DropdownItem,\n  DropdownItemShortcut,\n  DropdownRadioGroup,\n  DropdownRadioItem,\n  DropdownSeparator,\n  DropdownSubTrigger,\n  DropdownTrigger,\n} from "@/components/ui/dropdown"\n\nexport default function DropdownDemo() {\n  const [shuffle, setShuffle] = useState(false)\n  const [repeat, setRepeat] = useState(false)\n  const [sortBy, setSortBy] = useState("artist")\n\n  return (\n    <Dropdown>\n      <DropdownTrigger\n        render={(props) => <Button {...props}>Controls</Button>}\n      />\n      <DropdownContent>\n        <DropdownGroup>\n          <DropdownGroupLabel>Playback</DropdownGroupLabel>\n          <DropdownItem>\n            <PlayIcon />\n            Play\n            <DropdownItemShortcut>⌘P</DropdownItemShortcut>\n          </DropdownItem>\n          <DropdownItem>\n            <PauseIcon />\n            Pause\n            <DropdownItemShortcut>⇧⌘P</DropdownItemShortcut>\n          </DropdownItem>\n          <DropdownItem>\n            <SkipBackIcon />\n            Previous\n            <DropdownItemShortcut>⌘[</DropdownItemShortcut>\n          </DropdownItem>\n          <DropdownItem>\n            <SkipForwardIcon />\n            Next\n            <DropdownItemShortcut>⌘]</DropdownItemShortcut>\n          </DropdownItem>\n        </DropdownGroup>\n        <DropdownSeparator />\n        <DropdownCheckboxItem checked={shuffle} onCheckedChange={setShuffle}>\n          Shuffle\n        </DropdownCheckboxItem>\n        <DropdownCheckboxItem checked={repeat} onCheckedChange={setRepeat}>\n          Repeat\n        </DropdownCheckboxItem>\n        <DropdownCheckboxItem disabled>Enhanced Audio</DropdownCheckboxItem>\n        <DropdownSeparator />\n        <DropdownGroup>\n          <DropdownGroupLabel>Sort by</DropdownGroupLabel>\n          <DropdownRadioGroup value={sortBy} onValueChange={setSortBy}>\n            <DropdownRadioItem value="artist">Artist</DropdownRadioItem>\n            <DropdownRadioItem value="album">Repeat</DropdownRadioItem>\n            <DropdownRadioItem value="title">Title</DropdownRadioItem>\n          </DropdownRadioGroup>\n        </DropdownGroup>\n        <DropdownSeparator />\n        <Dropdown>\n          <DropdownSubTrigger>Add to Playlist</DropdownSubTrigger>\n          <DropdownContent>\n            <DropdownItem>Jazz</DropdownItem>\n            <DropdownItem>Rock</DropdownItem>\n            <DropdownItem>Pop</DropdownItem>\n          </DropdownContent>\n        </Dropdown>\n      </DropdownContent>\n    </Dropdown>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/dropdown/dropdown-demo")
    ),
    title: "dropdown-demo",
    category: "dropdown",
    path: "src/components/demos/dropdown/dropdown-demo.tsx",
  },
  "emoji-picker-demo": {
    source:
      'import { toast } from "sonner"\n\nimport {\n  EmojiPicker,\n  EmojiPickerContent,\n  EmojiPickerEmpty,\n  EmojiPickerList,\n  EmojiPickerLoading,\n  EmojiPickerSearch,\n} from "@/components/ui/emoji-picker"\n\nexport default function EmojiPickerDemo() {\n  return (\n    <EmojiPicker\n      onEmojiSelect={({ emoji, label }) => {\n        toast.custom(() => (\n          <p className="flex items-center gap-2 text-sm">\n            <span className="text-lg">{emoji}</span>\n            {label}\n          </p>\n        ))\n      }}\n    >\n      <EmojiPickerSearch />\n      <EmojiPickerContent>\n        <EmojiPickerLoading />\n        <EmojiPickerEmpty>No results</EmojiPickerEmpty>\n        <EmojiPickerList />\n      </EmojiPickerContent>\n    </EmojiPicker>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/emoji-picker/emoji-picker-demo")
    ),
    title: "emoji-picker-demo",
    category: "emoji-picker",
    path: "src/components/demos/emoji-picker/emoji-picker-demo.tsx",
  },
  "emoji-picker-popover": {
    source:
      'import * as React from "react"\nimport { toast } from "sonner"\n\nimport { Button } from "@/components/ui/button"\nimport {\n  EmojiPicker,\n  EmojiPickerContent,\n  EmojiPickerEmpty,\n  EmojiPickerList,\n  EmojiPickerLoading,\n  EmojiPickerSearch,\n} from "@/components/ui/emoji-picker"\nimport {\n  Popover,\n  PopoverContent,\n  PopoverTrigger,\n} from "@/components/ui/popover"\n\nexport default function EmojiPickerPopoverDemo() {\n  const [open, setOpen] = React.useState(false)\n  const [emoji, setEmoji] = React.useState<string | undefined>(undefined)\n\n  return (\n    <Popover open={open} onOpenChange={setOpen}>\n      <PopoverTrigger\n        render={(props) => (\n          <Button {...props} variant="outline" size="icon">\n            {emoji ? emoji : "👇"}\n          </Button>\n        )}\n      />\n      <PopoverContent className="rounded-md p-0 outline-offset-0">\n        <EmojiPicker\n          className="border-none"\n          onEmojiSelect={({ emoji, label }) => {\n            setEmoji(emoji)\n            setOpen(false)\n            toast.custom(() => (\n              <p className="flex items-center gap-2 text-sm">\n                <span className="text-lg">{emoji}</span>\n                {label}\n              </p>\n            ))\n          }}\n        >\n          <EmojiPickerSearch />\n          <EmojiPickerContent>\n            <EmojiPickerLoading />\n            <EmojiPickerEmpty>No results</EmojiPickerEmpty>\n            <EmojiPickerList />\n          </EmojiPickerContent>\n        </EmojiPicker>\n      </PopoverContent>\n    </Popover>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/emoji-picker/emoji-picker-popover")
    ),
    title: "emoji-picker-popover",
    category: "emoji-picker",
    path: "src/components/demos/emoji-picker/emoji-picker-popover.tsx",
  },
  "form-demo": {
    source:
      'import { zodResolver } from "@hookform/resolvers/zod"\nimport { useForm } from "react-hook-form"\nimport { z } from "zod"\n\nimport { Button } from "@/components/ui/button"\nimport {\n  Field,\n  FieldContent,\n  FieldControl,\n  FieldDescription,\n  FieldError,\n  FieldLabel,\n} from "@/components/ui/field"\nimport { Form } from "@/components/ui/form"\nimport { Input } from "@/components/ui/input"\n\nconst schema = z.object({\n  displayName: z\n    .string()\n    .min(3, { message: "Please enter at least 3 characters." }),\n  email: z.string().email({ message: "Please enter a valid email address." }),\n})\n\ntype FormValues = z.infer<typeof schema>\n\nexport default function FormDemo() {\n  const form = useForm<FormValues>({\n    resolver: zodResolver(schema),\n    defaultValues: {\n      displayName: "",\n      email: "",\n    },\n  })\n\n  const onSubmit = (data: FormValues) => {\n    console.log(data)\n  }\n\n  return (\n    <Form\n      className="flex w-96 flex-col gap-4"\n      form={form}\n      onSubmit={form.handleSubmit(onSubmit)}\n    >\n      <Field\n        name="displayName"\n        control={form.control}\n        render={({ field }) => (\n          <FieldContent>\n            <FieldLabel>Display Name</FieldLabel>\n            <FieldControl>\n              <Input className="w-full" placeholder="borabalogluu" {...field} />\n            </FieldControl>\n            <FieldDescription>\n              This is the name that will be displayed to other users.\n            </FieldDescription>\n            <FieldError />\n          </FieldContent>\n        )}\n      />\n      <Field\n        name="email"\n        control={form.control}\n        render={({ field }) => (\n          <FieldContent>\n            <FieldLabel>Email</FieldLabel>\n            <FieldControl>\n              <Input\n                className="w-full"\n                placeholder="your@email.com"\n                {...field}\n              />\n            </FieldControl>\n            <FieldDescription>Enter your email address</FieldDescription>\n            <FieldError />\n          </FieldContent>\n        )}\n      />\n      <Button type="submit">Submit</Button>\n    </Form>\n  )\n}\n',
    component: React.lazy(() => import("@/components/demos/form/form-demo")),
    title: "form-demo",
    category: "form",
    path: "src/components/demos/form/form-demo.tsx",
  },
  "input-otp-custom": {
    source:
      'import {\n  InputOTP,\n  InputOTPGroup,\n  InputOTPSlot,\n} from "@/components/ui/input-otp"\n\nexport default function InputOTPDemo() {\n  return (\n    <InputOTP maxLength={4}>\n      <InputOTPGroup className="gap-0">\n        <InputOTPSlot className="rounded-r-none" index={0} />\n        <InputOTPSlot className="rounded-none border-x-0" index={1} />\n        <InputOTPSlot className="rounded-none border-r-0" index={2} />\n        <InputOTPSlot className="rounded-l-none" index={3} />\n      </InputOTPGroup>\n    </InputOTP>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/input-otp/input-otp-custom")
    ),
    title: "input-otp-custom",
    category: "input-otp",
    path: "src/components/demos/input-otp/input-otp-custom.tsx",
  },
  "input-otp-demo": {
    source:
      'import {\n  InputOTP,\n  InputOTPGroup,\n  InputOTPSeparator,\n  InputOTPSlot,\n} from "@/components/ui/input-otp"\n\nexport default function InputOTPDemo() {\n  return (\n    <InputOTP maxLength={6}>\n      <InputOTPGroup>\n        <InputOTPSlot index={0} />\n        <InputOTPSlot index={1} />\n        <InputOTPSlot index={2} />\n      </InputOTPGroup>\n      <InputOTPSeparator />\n      <InputOTPGroup>\n        <InputOTPSlot index={3} />\n        <InputOTPSlot index={4} />\n        <InputOTPSlot index={5} />\n      </InputOTPGroup>\n    </InputOTP>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/input-otp/input-otp-demo")
    ),
    title: "input-otp-demo",
    category: "input-otp",
    path: "src/components/demos/input-otp/input-otp-demo.tsx",
  },
  "input-demo": {
    source:
      'import { Input } from "@/components/ui/input"\n\nexport default function InputDemo() {\n  return <Input placeholder="Name" className="w-80" />\n}\n',
    component: React.lazy(() => import("@/components/demos/input/input-demo")),
    title: "input-demo",
    category: "input",
    path: "src/components/demos/input/input-demo.tsx",
  },
  "input-disabled": {
    source:
      'import { Input } from "@/components/ui/input"\n\nexport default function InputDisabled() {\n  return <Input className="w-80" placeholder="Name" disabled />\n}\n',
    component: React.lazy(
      () => import("@/components/demos/input/input-disabled")
    ),
    title: "input-disabled",
    category: "input",
    path: "src/components/demos/input/input-disabled.tsx",
  },
  "input-error": {
    source:
      'import { Input } from "@/components/ui/input"\n\nexport default function InputError() {\n  return <Input className="w-80" placeholder="Name" aria-invalid />\n}\n',
    component: React.lazy(() => import("@/components/demos/input/input-error")),
    title: "input-error",
    category: "input",
    path: "src/components/demos/input/input-error.tsx",
  },
  "input-with-icons": {
    source:
      'import { useState } from "react"\nimport { EyeIcon, EyeOffIcon, LockIcon } from "lucide-react"\n\nimport { Input, InputIcon } from "@/components/ui/input"\n\nexport default function InputWithIcons() {\n  const [isPasswordVisible, setIsPasswordVisible] = useState(false)\n\n  const togglePasswordVisibility = () => {\n    setIsPasswordVisible(!isPasswordVisible)\n  }\n\n  const passwordType = isPasswordVisible ? "text" : "password"\n  const eyeIcon = isPasswordVisible ? <EyeIcon /> : <EyeOffIcon />\n\n  return (\n    <Input placeholder="Password" className="w-80" type={passwordType}>\n      <InputIcon side="leading">\n        <LockIcon />\n      </InputIcon>\n      <InputIcon\n        side="trailing"\n        className="cursor-pointer transition-colors duration-200 hover:[&>svg]:text-foreground"\n        onClick={togglePasswordVisibility}\n      >\n        {eyeIcon}\n      </InputIcon>\n    </Input>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/input/input-with-icons")
    ),
    title: "input-with-icons",
    category: "input",
    path: "src/components/demos/input/input-with-icons.tsx",
  },
  "kbd-demo": {
    source:
      'import { Kbd } from "@/components/ui/kbd"\n\nexport default function KbdDemo() {\n  return (\n    <div className="flex items-center gap-2 text-sm">\n      <Kbd>⌘</Kbd>+<Kbd>K</Kbd>\n    </div>\n  )\n}\n',
    component: React.lazy(() => import("@/components/demos/kbd/kbd-demo")),
    title: "kbd-demo",
    category: "kbd",
    path: "src/components/demos/kbd/kbd-demo.tsx",
  },
  "menubar-demo": {
    source:
      'import {\n  Menubar,\n  MenubarContent,\n  MenubarItem,\n  MenubarItemShortcut,\n  MenubarMenu,\n  MenubarRadioGroup,\n  MenubarRadioItem,\n  MenubarSeparator,\n  MenubarSubMenu,\n  MenubarSubTrigger,\n  MenubarTrigger,\n} from "@/components/ui/menubar"\n\nexport default function MenubarDemo() {\n  return (\n    <Menubar>\n      <MenubarMenu>\n        <MenubarTrigger>File</MenubarTrigger>\n        <MenubarContent>\n          <MenubarItem>\n            New File\n            <MenubarItemShortcut>⌘N</MenubarItemShortcut>\n          </MenubarItem>\n          <MenubarItem>\n            New Window\n            <MenubarItemShortcut>⇧⌘N</MenubarItemShortcut>\n          </MenubarItem>\n          <MenubarSeparator />\n          <MenubarItem>\n            Open\n            <MenubarItemShortcut>⌘O</MenubarItemShortcut>\n          </MenubarItem>\n          <MenubarItem>\n            Open Folder\n            <MenubarItemShortcut>⇧⌘O</MenubarItemShortcut>\n          </MenubarItem>\n          <MenubarItem>Open Recent</MenubarItem>\n          <MenubarSeparator />\n          <MenubarItem>\n            Save\n            <MenubarItemShortcut>⌘S</MenubarItemShortcut>\n          </MenubarItem>\n          <MenubarItem>\n            Save As\n            <MenubarItemShortcut>⇧⌘S</MenubarItemShortcut>\n          </MenubarItem>\n          <MenubarSeparator />\n          <MenubarItem>\n            Close Window\n            <MenubarItemShortcut>⌘W</MenubarItemShortcut>\n          </MenubarItem>\n        </MenubarContent>\n      </MenubarMenu>\n      <MenubarMenu>\n        <MenubarTrigger>Edit</MenubarTrigger>\n        <MenubarContent>\n          <MenubarItem>\n            Undo\n            <MenubarItemShortcut>⌘Z</MenubarItemShortcut>\n          </MenubarItem>\n          <MenubarItem>\n            Redo\n            <MenubarItemShortcut>⌘Y</MenubarItemShortcut>\n          </MenubarItem>\n          <MenubarSeparator />\n          <MenubarItem>\n            Cut\n            <MenubarItemShortcut>⌘X</MenubarItemShortcut>\n          </MenubarItem>\n          <MenubarItem>\n            Copy\n            <MenubarItemShortcut>⌘C</MenubarItemShortcut>\n          </MenubarItem>\n          <MenubarItem>\n            Paste\n            <MenubarItemShortcut>⌘V</MenubarItemShortcut>\n          </MenubarItem>\n          <MenubarSeparator />\n          <MenubarItem>\n            Find\n            <MenubarItemShortcut>⌘F</MenubarItemShortcut>\n          </MenubarItem>\n          <MenubarItem>\n            Replace\n            <MenubarItemShortcut>⌥⌘F</MenubarItemShortcut>\n          </MenubarItem>\n        </MenubarContent>\n      </MenubarMenu>\n      <MenubarMenu>\n        <MenubarTrigger>View</MenubarTrigger>\n        <MenubarContent>\n          <MenubarSubMenu>\n            <MenubarSubTrigger>Appearance</MenubarSubTrigger>\n            <MenubarContent>\n              <MenubarRadioGroup>\n                <MenubarRadioItem value="system">System</MenubarRadioItem>\n                <MenubarRadioItem value="light">Light</MenubarRadioItem>\n                <MenubarRadioItem value="dark">Dark</MenubarRadioItem>\n              </MenubarRadioGroup>\n            </MenubarContent>\n          </MenubarSubMenu>\n          <MenubarSeparator />\n          <MenubarItem>\n            Show/Hide Sidebar\n            <MenubarItemShortcut>⌃⌥⌘*</MenubarItemShortcut>\n          </MenubarItem>\n          <MenubarItem>\n            Command Palette\n            <MenubarItemShortcut>⇧⌘P</MenubarItemShortcut>\n          </MenubarItem>\n          <MenubarItem>Expand Tabs</MenubarItem>\n          <MenubarSeparator />\n          <MenubarItem>\n            Zoom In\n            <MenubarItemShortcut>⌘+</MenubarItemShortcut>\n          </MenubarItem>\n          <MenubarItem>\n            Zoom Out\n            <MenubarItemShortcut>⌘-</MenubarItemShortcut>\n          </MenubarItem>\n          <MenubarItem>\n            Reset Zoom\n            <MenubarItemShortcut>⌘0</MenubarItemShortcut>\n          </MenubarItem>\n        </MenubarContent>\n      </MenubarMenu>\n      <MenubarMenu>\n        <MenubarTrigger>Help</MenubarTrigger>\n        <MenubarContent>\n          <MenubarItem>Getting Started</MenubarItem>\n          <MenubarItem>Report Issue</MenubarItem>\n          <MenubarItem>Check for Updates</MenubarItem>\n          <MenubarItem>Contact the Team</MenubarItem>\n        </MenubarContent>\n      </MenubarMenu>\n    </Menubar>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/menubar/menubar-demo")
    ),
    title: "menubar-demo",
    category: "menubar",
    path: "src/components/demos/menubar/menubar-demo.tsx",
  },
  "meter-demo": {
    source:
      'import { Meter, MeterLabel, MeterValue } from "@/components/ui/meter"\n\nexport default function MeterDemo() {\n  return (\n    <Meter className="mx-auto w-48" value={4} max={5}>\n      <div className="flex items-center justify-between">\n        <MeterLabel>Tasks Completed</MeterLabel>\n        <MeterValue>{(formattedValue, value) => `${value} / 5`}</MeterValue>\n      </div>\n    </Meter>\n  )\n}\n',
    component: React.lazy(() => import("@/components/demos/meter/meter-demo")),
    title: "meter-demo",
    category: "meter",
    path: "src/components/demos/meter/meter-demo.tsx",
  },
  "popover-demo": {
    source:
      'import { CopyIcon, Share2Icon } from "lucide-react"\nimport { toast } from "sonner"\n\nimport { Button } from "@/components/ui/button"\nimport { Input } from "@/components/ui/input"\nimport {\n  Popover,\n  PopoverContent,\n  PopoverDescription,\n  PopoverHeader,\n  PopoverTitle,\n  PopoverTrigger,\n} from "@/components/ui/popover"\n\nexport default function PopoverDemo() {\n  const copyToClipboard = () => {\n    toast.success("Copied to clipboard")\n    navigator.clipboard.writeText(window.location.href)\n  }\n\n  return (\n    <Popover>\n      <PopoverTrigger\n        render={(props) => (\n          <Button {...props} variant="outline" size="icon">\n            <Share2Icon />\n          </Button>\n        )}\n      />\n      <PopoverContent className="w-[calc(100vw-4rem)] sm:w-[500px]">\n        <PopoverHeader>\n          <PopoverTitle>Share</PopoverTitle>\n          <PopoverDescription>Share this component.</PopoverDescription>\n        </PopoverHeader>\n        <div className="mt-2 flex w-full gap-2">\n          <Input\n            inputWrapperClassName="w-full"\n            value={window.location.href}\n            autoFocus={false}\n            readOnly\n          />\n          <Button className="shrink-0" size="icon" onClick={copyToClipboard}>\n            <CopyIcon />\n          </Button>\n        </div>\n      </PopoverContent>\n    </Popover>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/popover/popover-demo")
    ),
    title: "popover-demo",
    category: "popover",
    path: "src/components/demos/popover/popover-demo.tsx",
  },
  "preview-card-demo": {
    source:
      'import { GithubIcon, GlobeIcon, UserIcon } from "lucide-react"\n\nimport { Icons } from "@/components/icons"\nimport {\n  PreviewCard,\n  PreviewCardContent,\n  PreviewCardTrigger,\n} from "@/components/ui/preview-card"\n\nexport default function PreviewCardDemo() {\n  return (\n    <PreviewCard>\n      <p className="max-w-80 text-balance text-foreground">\n        This is a preview card component from{" "}\n        <PreviewCardTrigger className="cursor-pointer underline underline-offset-2">\n          9ui\n        </PreviewCardTrigger>\n        .\n      </p>\n      <PreviewCardContent className="max-w-80 text-sm">\n        <Icons.logo className="mx-auto w-10" />\n        <p className="mt-2">\n          Beautiful, customizable components built with{" "}\n          <a\n            href="https://base-ui.com"\n            className="underline underline-offset-2"\n            target="_blank"\n          >\n            Base UI\n          </a>{" "}\n          and{" "}\n          <a\n            href="https://tailwindcss.com"\n            className="underline underline-offset-2"\n            target="_blank"\n          >\n            Tailwind CSS\n          </a>\n          .\n        </p>\n        <div className="mt-2 flex flex-col gap-2 text-sm">\n          <div className="flex items-center gap-2">\n            <span className="flex items-center gap-1 text-muted-foreground">\n              <UserIcon size={14} />\n              Creator:\n            </span>\n            <a\n              href="https://x.com/borabalogluu"\n              className="underline underline-offset-2"\n              target="_blank"\n            >\n              Bora Baloglu\n            </a>\n          </div>\n          <div className="flex items-center gap-2">\n            <span className="flex items-center gap-1 text-muted-foreground">\n              <GithubIcon size={14} />\n              Source code:\n            </span>\n            <a\n              href="https://github.com/borabaloglu/9ui"\n              className="underline underline-offset-2"\n              target="_blank"\n            >\n              Github\n            </a>\n          </div>\n          <div className="flex items-center gap-2">\n            <span className="flex items-center gap-1 text-muted-foreground">\n              <GlobeIcon size={14} />\n              Website\n            </span>\n            <a\n              href="https://9ui.dev"\n              className="underline underline-offset-2"\n              target="_blank"\n            >\n              9ui.dev\n            </a>\n          </div>\n        </div>\n      </PreviewCardContent>\n    </PreviewCard>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/preview-card/preview-card-demo")
    ),
    title: "preview-card-demo",
    category: "preview-card",
    path: "src/components/demos/preview-card/preview-card-demo.tsx",
  },
  "progress-demo": {
    source:
      'import * as React from "react"\n\nimport { Progress } from "@/components/ui/progress"\n\nexport default function ProgressDemo() {\n  const [value, setValue] = React.useState(0)\n\n  React.useEffect(() => {\n    const interval = setInterval(() => {\n      setValue((prev) => (prev === 100 ? 100 : prev + 2))\n    }, 100)\n    return () => clearInterval(interval)\n  }, [])\n\n  return (\n    <div className="w-80">\n      <Progress value={value} />\n    </div>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/progress/progress-demo")
    ),
    title: "progress-demo",
    category: "progress",
    path: "src/components/demos/progress/progress-demo.tsx",
  },
  "progress-with-value": {
    source:
      'import * as React from "react"\n\nimport { Progress, ProgressValue } from "@/components/ui/progress"\n\nexport default function ProgressWithValueDemo() {\n  const [value, setValue] = React.useState(0)\n\n  React.useEffect(() => {\n    const interval = setInterval(() => {\n      setValue((prev) => (prev === 100 ? 100 : prev + 2))\n    }, 100)\n    return () => clearInterval(interval)\n  }, [])\n\n  return (\n    <div className="w-80">\n      <Progress value={value}>\n        <ProgressValue />\n      </Progress>\n    </div>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/progress/progress-with-value")
    ),
    title: "progress-with-value",
    category: "progress",
    path: "src/components/demos/progress/progress-with-value.tsx",
  },
  "radio-group-demo": {
    source:
      'import { Label } from "@/components/ui/label"\nimport { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"\n\nexport default function RadioGroupDemo() {\n  return (\n    <RadioGroup aria-labelledby="radio-group-plan">\n      <div id="radio-group-plan" className="font-medium text-foreground">\n        Select a plan\n      </div>\n      <div className="flex items-center space-x-2">\n        <RadioGroupItem id="basic" value="basic" />\n        <Label htmlFor="basic">Basic</Label>\n      </div>\n      <div className="flex items-center space-x-2">\n        <RadioGroupItem id="standard" value="standard" />\n        <Label htmlFor="standard">Standard</Label>\n      </div>\n      <div className="flex items-center space-x-2">\n        <RadioGroupItem id="premium" value="premium" />\n        <Label htmlFor="premium">Premium</Label>\n      </div>\n    </RadioGroup>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/radio-group/radio-group-demo")
    ),
    title: "radio-group-demo",
    category: "radio-group",
    path: "src/components/demos/radio-group/radio-group-demo.tsx",
  },
  "radio-group-disabled": {
    source:
      'import { Label } from "@/components/ui/label"\nimport { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"\n\nexport default function RadioGroupDisabled() {\n  return (\n    <RadioGroup disabled aria-labelledby="radio-group-notifications">\n      <div\n        id="radio-group-notifications"\n        className="font-medium text-foreground"\n      >\n        Notifications\n      </div>\n      <div className="flex items-center space-x-2">\n        <RadioGroupItem id="email" value="email" />\n        <Label htmlFor="email">Email</Label>\n      </div>\n      <div className="flex items-center space-x-2">\n        <RadioGroupItem id="sms" value="sms" />\n        <Label htmlFor="sms">SMS</Label>\n      </div>\n      <div className="flex items-center space-x-2">\n        <RadioGroupItem id="email-and-sms" value="email-and-sms" />\n        <Label htmlFor="email-and-sms">Email & SMS</Label>\n      </div>\n    </RadioGroup>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/radio-group/radio-group-disabled")
    ),
    title: "radio-group-disabled",
    category: "radio-group",
    path: "src/components/demos/radio-group/radio-group-disabled.tsx",
  },
  "scroll-area-demo": {
    source:
      'import { ScrollArea } from "@/components/ui/scroll-area"\nimport { Separator } from "@/components/ui/separator"\n\nconst versions = Array.from({ length: 50 }, (_, i) => `v${i + 1}.0.0`)\n\nexport default function ScrollAreaDemo() {\n  return (\n    <ScrollArea className="h-60 w-full max-w-60 rounded-lg border p-2">\n      <h4 className="text-sm font-medium">Versions</h4>\n      <Separator className="my-2" />\n      <div className="mt-2 flex flex-col gap-2 text-sm">\n        {versions.map((version) => (\n          <div key={version}>{version}</div>\n        ))}\n      </div>\n    </ScrollArea>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/scroll-area/scroll-area-demo")
    ),
    title: "scroll-area-demo",
    category: "scroll-area",
    path: "src/components/demos/scroll-area/scroll-area-demo.tsx",
  },
  "scroll-area-horizontal": {
    source:
      'import { ScrollArea } from "@/components/ui/scroll-area"\n\nconst versions = Array.from({ length: 50 }, (_, i) => `v${i + 1}.0.0`).join(\n  ", "\n)\n\nexport default function ScrollAreaHorizontal() {\n  return (\n    <ScrollArea\n      className="h-fit w-full max-w-60 rounded-lg border p-2"\n      orientation="horizontal"\n    >\n      <div className="mt-2 flex flex-col gap-2 text-nowrap pb-2 text-sm">\n        {versions}\n      </div>\n    </ScrollArea>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/scroll-area/scroll-area-horizontal")
    ),
    title: "scroll-area-horizontal",
    category: "scroll-area",
    path: "src/components/demos/scroll-area/scroll-area-horizontal.tsx",
  },
  "select-demo": {
    source:
      'import {\n  Select,\n  SelectContent,\n  SelectItem,\n  SelectTrigger,\n  SelectValue,\n} from "@/components/ui/select"\n\nexport default function SelectDemo() {\n  return (\n    <div className="w-80">\n      <Select>\n        <SelectTrigger>\n          <SelectValue placeholder="Select a fruit" />\n        </SelectTrigger>\n        <SelectContent>\n          <SelectItem value="apple">Apple</SelectItem>\n          <SelectItem value="banana">Banana</SelectItem>\n          <SelectItem value="cherry">Cherry</SelectItem>\n        </SelectContent>\n      </Select>\n    </div>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/select/select-demo")
    ),
    title: "select-demo",
    category: "select",
    path: "src/components/demos/select/select-demo.tsx",
  },
  "select-with-custom-value": {
    source:
      'import { useState } from "react"\n\n// import Image from "next/image" // Removed for Vite migration\n\nimport {\n  Select,\n  SelectContent,\n  SelectItem,\n  SelectTrigger,\n  SelectValue,\n} from "@/components/ui/select"\n\nconst users = {\n  "karen-smith": {\n    name: "Karen Smith",\n    image: "/memoji-1.png",\n  },\n  "chris-williams": {\n    name: "Chris Williams",\n    image: "/memoji-3.png",\n  },\n  "melissa-johnson": {\n    name: "Melissa Johnson",\n    image: "/memoji-2.png",\n  },\n  "frank-lee": {\n    name: "Frank Lee",\n    image: "/memoji-4.png",\n  },\n}\n\nexport default function SelectWithCustomValue() {\n  const [selected, setSelected] = useState<keyof typeof users | null>(null)\n\n  return (\n    <div className="w-80">\n      <Select value={selected} onValueChange={setSelected}>\n        <SelectTrigger>\n          <SelectValue>\n            {() =>\n              selected ? (\n                <div className="flex items-center gap-2">\n                  <img\n                    src={users[selected].image}\n                    alt={users[selected].name}\n                    width={16}\n                    height={16}\n                    className="rounded-full"\n                  />\n                  {users[selected].name}\n                </div>\n              ) : (\n                "Assign to"\n              )\n            }\n          </SelectValue>\n        </SelectTrigger>\n        <SelectContent>\n          {Object.entries(users).map(([id, user]) => (\n            <SelectItem key={id} value={id}>\n              <div className="flex items-center gap-2">\n                <img\n                  src={user.image}\n                  alt={user.name}\n                  width={16}\n                  height={16}\n                  className="rounded-full"\n                />\n                {user.name}\n              </div>\n            </SelectItem>\n          ))}\n        </SelectContent>\n      </Select>\n    </div>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/select/select-with-custom-value")
    ),
    title: "select-with-custom-value",
    category: "select",
    path: "src/components/demos/select/select-with-custom-value.tsx",
  },
  "select-with-groups": {
    source:
      'import {\n  Select,\n  SelectContent,\n  SelectGroup,\n  SelectGroupLabel,\n  SelectItem,\n  SelectTrigger,\n  SelectValue,\n} from "@/components/ui/select"\n\nexport default function SelectWithGroups() {\n  return (\n    <div className="w-80">\n      <Select>\n        <SelectTrigger>\n          <SelectValue placeholder="Select an option" />\n        </SelectTrigger>\n        <SelectContent>\n          <SelectGroup>\n            <SelectGroupLabel>Fruits</SelectGroupLabel>\n            <SelectItem value="apple">Apple</SelectItem>\n            <SelectItem value="banana">Banana</SelectItem>\n            <SelectItem value="cherry">Cherry</SelectItem>\n          </SelectGroup>\n          <SelectGroup>\n            <SelectGroupLabel>Vegetables</SelectGroupLabel>\n            <SelectItem value="carrot">Carrot</SelectItem>\n            <SelectItem value="potato">Potato</SelectItem>\n            <SelectItem value="tomato">Tomato</SelectItem>\n          </SelectGroup>\n        </SelectContent>\n      </Select>\n    </div>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/select/select-with-groups")
    ),
    title: "select-with-groups",
    category: "select",
    path: "src/components/demos/select/select-with-groups.tsx",
  },
  "separator-demo": {
    source:
      'import { Separator } from "@/components/ui/separator"\n\nexport default function SeparatorDemo() {\n  return (\n    <div>\n      <p>9ui is a component library for building modern web applications.</p>\n      <Separator className="my-2.5" />\n      <div className="flex gap-2.5">\n        <p>Website</p>\n        <Separator orientation="vertical" />\n        <p>Documentation</p>\n        <Separator orientation="vertical" />\n        <p>Community</p>\n      </div>\n    </div>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/separator/separator-demo")
    ),
    title: "separator-demo",
    category: "separator",
    path: "src/components/demos/separator/separator-demo.tsx",
  },
  "sheet-demo": {
    source:
      'import { Button } from "@/components/ui/button"\nimport { Label } from "@/components/ui/label"\nimport {\n  Sheet,\n  SheetClose,\n  SheetContent,\n  SheetDescription,\n  SheetFooter,\n  SheetHeader,\n  SheetTitle,\n  SheetTrigger,\n} from "@/components/ui/sheet"\nimport { Textarea } from "@/components/ui/textarea"\n\nexport default function SheetDemo() {\n  return (\n    <Sheet>\n      <SheetTrigger\n        render={(props) => <Button {...props}>Open Sheet</Button>}\n      />\n      <SheetContent>\n        <SheetClose />\n        <SheetHeader>\n          <SheetTitle>Submit Feedback</SheetTitle>\n          <SheetDescription>\n            Please share your feedback with us to help improve our service.\n          </SheetDescription>\n        </SheetHeader>\n        <div className="my-4 space-y-2">\n          <Label htmlFor="feedback">Your Feedback</Label>\n          <Textarea id="feedback" placeholder="Type your feedback here." />\n        </div>\n        <SheetFooter>\n          <SheetClose\n            render={(props) => (\n              <Button {...props} size="sm" variant="ghost">\n                Close\n              </Button>\n            )}\n          />\n          <Button size="sm">Submit</Button>\n        </SheetFooter>\n      </SheetContent>\n    </Sheet>\n  )\n}\n',
    component: React.lazy(() => import("@/components/demos/sheet/sheet-demo")),
    title: "sheet-demo",
    category: "sheet",
    path: "src/components/demos/sheet/sheet-demo.tsx",
  },
  "sheet-sides": {
    source:
      'import { Button } from "@/components/ui/button"\nimport { Label } from "@/components/ui/label"\nimport {\n  Sheet,\n  SheetClose,\n  SheetContent,\n  SheetDescription,\n  SheetFooter,\n  SheetHeader,\n  SheetTitle,\n  SheetTrigger,\n} from "@/components/ui/sheet"\nimport { Textarea } from "@/components/ui/textarea"\n\nconst SHEET_SIDES = ["top", "right", "bottom", "left"] as const\n\nexport default function SheetSides() {\n  return (\n    <div className="grid grid-cols-2 gap-2">\n      {SHEET_SIDES.map((side) => (\n        <Sheet key={side}>\n          <SheetTrigger\n            render={(props) => (\n              <Button {...props} className="w-full">\n                {side}\n              </Button>\n            )}\n          />\n          <SheetContent side={side}>\n            <SheetClose />\n            <SheetHeader>\n              <SheetTitle>Submit Feedback</SheetTitle>\n              <SheetDescription>\n                Please share your feedback with us to help improve our service.\n              </SheetDescription>\n            </SheetHeader>\n            <div className="my-4 space-y-2">\n              <Label htmlFor="feedback">Your Feedback</Label>\n              <Textarea id="feedback" placeholder="Type your feedback here." />\n            </div>\n            <SheetFooter>\n              <SheetClose\n                render={(props) => (\n                  <Button {...props} size="sm" variant="ghost">\n                    Close\n                  </Button>\n                )}\n              />\n              <Button size="sm">Submit</Button>\n            </SheetFooter>\n          </SheetContent>\n        </Sheet>\n      ))}\n    </div>\n  )\n}\n',
    component: React.lazy(() => import("@/components/demos/sheet/sheet-sides")),
    title: "sheet-sides",
    category: "sheet",
    path: "src/components/demos/sheet/sheet-sides.tsx",
  },
  "skeleton-demo": {
    source:
      'import { Skeleton } from "@/components/ui/skeleton"\n\nexport default function SkeletonDemo() {\n  return (\n    <div className="flex w-64 flex-col gap-4 rounded-lg border p-4">\n      <Skeleton className="aspect-video w-full" />\n      <Skeleton className="h-5 w-2/3" />\n      <div className="flex flex-col gap-2">\n        <Skeleton className="h-4 w-full" />\n        <Skeleton className="h-4 w-full" />\n        <Skeleton className="h-4 w-2/3" />\n      </div>\n    </div>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/skeleton/skeleton-demo")
    ),
    title: "skeleton-demo",
    category: "skeleton",
    path: "src/components/demos/skeleton/skeleton-demo.tsx",
  },
  "slider-demo": {
    source:
      'import { Slider } from "@/components/ui/slider"\n\nexport default function SliderDemo() {\n  return <Slider defaultValue={50} />\n}\n',
    component: React.lazy(
      () => import("@/components/demos/slider/slider-demo")
    ),
    title: "slider-demo",
    category: "slider",
    path: "src/components/demos/slider/slider-demo.tsx",
  },
  "slider-disabled": {
    source:
      'import { Slider } from "@/components/ui/slider"\n\nexport default function SliderDisabled() {\n  return <Slider defaultValue={50} disabled />\n}\n',
    component: React.lazy(
      () => import("@/components/demos/slider/slider-disabled")
    ),
    title: "slider-disabled",
    category: "slider",
    path: "src/components/demos/slider/slider-disabled.tsx",
  },
  "slider-range": {
    source:
      'import { Slider } from "@/components/ui/slider"\n\nexport default function SliderRange() {\n  return <Slider defaultValue={[20, 80]} />\n}\n',
    component: React.lazy(
      () => import("@/components/demos/slider/slider-range")
    ),
    title: "slider-range",
    category: "slider",
    path: "src/components/demos/slider/slider-range.tsx",
  },
  "slider-with-value": {
    source:
      'import { Slider, SliderValue } from "@/components/ui/slider"\n\nexport default function SliderWithValue() {\n  return (\n    <Slider defaultValue={50}>\n      <div className="flex justify-between">\n        <span className="mt-3 text-xs font-medium text-muted-foreground">\n          Opacity\n        </span>\n        <SliderValue />\n      </div>\n    </Slider>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/slider/slider-with-value")
    ),
    title: "slider-with-value",
    category: "slider",
    path: "src/components/demos/slider/slider-with-value.tsx",
  },
  "sonner-action": {
    source:
      'import { Button } from "@/components/ui/button"\nimport { toast } from "@/components/ui/sonner"\n\nexport default function SonnerActionDemo() {\n  return (\n    <Button\n      onClick={() =>\n        toast("Your email has been sent", {\n          description: "We\'ll get back to you as soon as possible",\n          action: {\n            label: "Unsend",\n            onClick: () => toast.success("Email unsent"),\n          },\n        })\n      }\n    >\n      Show Toast\n    </Button>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/sonner/sonner-action")
    ),
    title: "sonner-action",
    category: "sonner",
    path: "src/components/demos/sonner/sonner-action.tsx",
  },
  "sonner-demo": {
    source:
      'import { Button } from "@/components/ui/button"\nimport { toast } from "@/components/ui/sonner"\n\nexport default function SonnerDemo() {\n  return (\n    <Button\n      onClick={() =>\n        toast("Your request has been sent", {\n          description: "We\'ll get back to you as soon as possible",\n        })\n      }\n    >\n      Show Toast\n    </Button>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/sonner/sonner-demo")
    ),
    title: "sonner-demo",
    category: "sonner",
    path: "src/components/demos/sonner/sonner-demo.tsx",
  },
  "sonner-promise": {
    source:
      'import { Button } from "@/components/ui/button"\nimport { toast } from "@/components/ui/sonner"\n\nexport default function SonnerPromiseDemo() {\n  return (\n    <Button\n      onClick={() =>\n        toast.promise(\n          new Promise((resolve) => {\n            setTimeout(() => {\n              resolve("Request sent")\n            }, 2000)\n          }),\n          {\n            loading: "Sending request...",\n            success: "Request sent",\n          }\n        )\n      }\n    >\n      Show Toast\n    </Button>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/sonner/sonner-promise")
    ),
    title: "sonner-promise",
    category: "sonner",
    path: "src/components/demos/sonner/sonner-promise.tsx",
  },
  "sonner-rich-colors": {
    source:
      'import { Button } from "@/components/ui/button"\nimport { toast } from "@/components/ui/sonner"\n\nexport default function SonnerRichColorsDemo() {\n  return (\n    <div className="grid grid-cols-2 gap-2">\n      <Button\n        onClick={() =>\n          toast.success("Success", { richColors: true, duration: 60000 })\n        }\n      >\n        success\n      </Button>\n      <Button\n        onClick={() =>\n          toast.error("Error", { richColors: true, duration: 60000 })\n        }\n      >\n        error\n      </Button>\n      <Button\n        onClick={() =>\n          toast.warning("Warning", { richColors: true, duration: 60000 })\n        }\n      >\n        warning\n      </Button>\n      <Button\n        onClick={() =>\n          toast.info("Info", { richColors: true, duration: 60000 })\n        }\n      >\n        info\n      </Button>\n    </div>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/sonner/sonner-rich-colors")
    ),
    title: "sonner-rich-colors",
    category: "sonner",
    path: "src/components/demos/sonner/sonner-rich-colors.tsx",
  },
  "switch-demo": {
    source:
      'import { Switch } from "@/components/ui/switch"\n\nexport default function SwitchDemo() {\n  return <Switch />\n}\n',
    component: React.lazy(
      () => import("@/components/demos/switch/switch-demo")
    ),
    title: "switch-demo",
    category: "switch",
    path: "src/components/demos/switch/switch-demo.tsx",
  },
  "switch-disabled": {
    source:
      'import { Switch } from "@/components/ui/switch"\n\nexport default function SwitchDisabled() {\n  return <Switch disabled />\n}\n',
    component: React.lazy(
      () => import("@/components/demos/switch/switch-disabled")
    ),
    title: "switch-disabled",
    category: "switch",
    path: "src/components/demos/switch/switch-disabled.tsx",
  },
  "switch-with-label": {
    source:
      'import { Label } from "@/components/ui/label"\nimport { Switch } from "@/components/ui/switch"\n\nexport default function SwitchWithLabel() {\n  return (\n    <div className="flex items-center gap-2">\n      <Switch id="enable-notifications" />\n      <Label htmlFor="enable-notifications">Enable notifications</Label>\n    </div>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/switch/switch-with-label")
    ),
    title: "switch-with-label",
    category: "switch",
    path: "src/components/demos/switch/switch-with-label.tsx",
  },
  "table-demo": {
    source:
      'import {\n  Table,\n  TableBody,\n  TableCaption,\n  TableCell,\n  TableHead,\n  TableHeader,\n  TableRow,\n} from "@/components/ui/table"\n\nconst movies = [\n  { title: "The Shawshank Redemption", year: 1994, rating: 9.3 },\n  { title: "The Godfather", year: 1972, rating: 9.2 },\n  { title: "The Dark Knight", year: 2008, rating: 9.0 },\n  { title: "The Godfather Part II", year: 1974, rating: 9.0 },\n  { title: "12 Angry Men", year: 1957, rating: 9.0 },\n  { title: "Schindler\'s List", year: 1993, rating: 9.0 },\n  {\n    title: "The Lord of the Rings: The Return of the King",\n    year: 2003,\n    rating: 9.0,\n  },\n  { title: "Pulp Fiction", year: 1994, rating: 8.9 },\n  {\n    title: "The Lord of the Rings: The Fellowship of the Ring",\n    year: 2001,\n    rating: 8.8,\n  },\n  { title: "Forrest Gump", year: 1994, rating: 8.8 },\n]\n\nexport default function TableDemo() {\n  return (\n    <div className="w-full overflow-hidden rounded-lg border pb-2">\n      <Table>\n        <TableCaption>Top 10 Movies of All Time</TableCaption>\n        <TableHeader>\n          <TableRow>\n            <TableHead>Title</TableHead>\n            <TableHead className="w-20">Year</TableHead>\n            <TableHead className="w-20 text-right">IMDB</TableHead>\n          </TableRow>\n        </TableHeader>\n        <TableBody>\n          {movies.map((movie) => (\n            <TableRow key={movie.title}>\n              <TableCell className="py-4 font-medium sm:py-0">\n                {movie.title}\n              </TableCell>\n              <TableCell>{movie.year}</TableCell>\n              <TableCell className="text-right">{movie.rating}</TableCell>\n            </TableRow>\n          ))}\n        </TableBody>\n      </Table>\n    </div>\n  )\n}\n',
    component: React.lazy(() => import("@/components/demos/table/table-demo")),
    title: "table-demo",
    category: "table",
    path: "src/components/demos/table/table-demo.tsx",
  },
  "tabs-demo": {
    source:
      'import { Button } from "@/components/ui/button"\nimport { Input } from "@/components/ui/input"\nimport { Label } from "@/components/ui/label"\nimport { Tab, TabContent, Tabs, TabsList } from "@/components/ui/tabs"\n\nexport default function TabsDemo() {\n  return (\n    <Tabs className="w-full max-w-96" defaultValue="login">\n      <TabsList>\n        <Tab value="login">Login</Tab>\n        <Tab value="signup">Sign up</Tab>\n      </TabsList>\n      <TabContent value="login" className="space-y-4">\n        <div className="flex flex-col gap-2">\n          <h4 className="text-2xl font-bold">Login</h4>\n          <p className="text-sm text-muted-foreground">\n            Login to your account to continue\n          </p>\n        </div>\n        <div className="flex flex-col gap-2">\n          <Label htmlFor="email">Email</Label>\n          <Input id="email" placeholder="Email" type="email" />\n        </div>\n        <div className="flex flex-col gap-2">\n          <Label htmlFor="password">Password</Label>\n          <Input id="password" placeholder="Password" type="password" />\n        </div>\n        <Button className="w-full">Login</Button>\n      </TabContent>\n      <TabContent value="signup" className="space-y-4">\n        <div className="flex flex-col gap-2">\n          <h4 className="text-2xl font-bold">Sign up</h4>\n          <p className="text-sm text-muted-foreground">\n            Sign up to create an account\n          </p>\n        </div>\n        <div className="flex flex-col gap-2">\n          <Label htmlFor="email">Email</Label>\n          <Input id="email" placeholder="Email" type="email" />\n        </div>\n        <div className="flex flex-col gap-2">\n          <Label htmlFor="password">Password</Label>\n          <Input id="password" placeholder="Password" type="password" />\n        </div>\n        <Button className="w-full">Sign up</Button>\n      </TabContent>\n    </Tabs>\n  )\n}\n',
    component: React.lazy(() => import("@/components/demos/tabs/tabs-demo")),
    title: "tabs-demo",
    category: "tabs",
    path: "src/components/demos/tabs/tabs-demo.tsx",
  },
  "tabs-disabled": {
    source:
      'import { Button } from "@/components/ui/button"\nimport { Input } from "@/components/ui/input"\nimport { Label } from "@/components/ui/label"\nimport { Tab, TabContent, Tabs, TabsList } from "@/components/ui/tabs"\nimport {\n  Tooltip,\n  TooltipContent,\n  TooltipTrigger,\n} from "@/components/ui/tooltip"\n\nexport default function TabsUnderline() {\n  return (\n    <Tabs className="w-full max-w-96" defaultValue="login">\n      <TabsList>\n        <Tab value="login">Login</Tab>\n        <Tooltip>\n          <TooltipTrigger\n            className="w-full"\n            render={(props) => (\n              <div {...props}>\n                <Tab disabled>Sign up</Tab>\n              </div>\n            )}\n          />\n          <TooltipContent className="w-64">\n            <span>\n              Sign ups are temporarily disabled. Please check back later.\n            </span>\n          </TooltipContent>\n        </Tooltip>\n      </TabsList>\n      <TabContent value="login" className="space-y-4">\n        <div className="flex flex-col gap-2">\n          <h4 className="text-2xl font-bold">Login</h4>\n          <p className="text-sm text-muted-foreground">\n            Login to your account to continue\n          </p>\n        </div>\n        <div className="flex flex-col gap-2">\n          <Label htmlFor="email">Email</Label>\n          <Input id="email" placeholder="Email" type="email" />\n        </div>\n        <div className="flex flex-col gap-2">\n          <Label htmlFor="password">Password</Label>\n          <Input id="password" placeholder="Password" type="password" />\n        </div>\n        <Button className="w-full">Login</Button>\n      </TabContent>\n    </Tabs>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/tabs/tabs-disabled")
    ),
    title: "tabs-disabled",
    category: "tabs",
    path: "src/components/demos/tabs/tabs-disabled.tsx",
  },
  "tabs-underline": {
    source:
      'import { Button } from "@/components/ui/button"\nimport { Input } from "@/components/ui/input"\nimport { Label } from "@/components/ui/label"\nimport { Tab, TabContent, Tabs, TabsList } from "@/components/ui/tabs"\n\nexport default function TabsUnderline() {\n  return (\n    <Tabs className="w-full max-w-96" defaultValue="login" variant="underline">\n      <TabsList>\n        <Tab value="login">Login</Tab>\n        <Tab value="signup">Sign up</Tab>\n      </TabsList>\n      <TabContent value="login" className="space-y-4">\n        <div className="flex flex-col gap-2">\n          <h4 className="text-2xl font-bold">Login</h4>\n          <p className="text-sm text-muted-foreground">\n            Login to your account to continue\n          </p>\n        </div>\n        <div className="flex flex-col gap-2">\n          <Label htmlFor="email">Email</Label>\n          <Input id="email" placeholder="Email" type="email" />\n        </div>\n        <div className="flex flex-col gap-2">\n          <Label htmlFor="password">Password</Label>\n          <Input id="password" placeholder="Password" type="password" />\n        </div>\n        <Button className="w-full">Login</Button>\n      </TabContent>\n      <TabContent value="signup" className="space-y-4">\n        <div className="flex flex-col gap-2">\n          <h4 className="text-2xl font-bold">Sign up</h4>\n          <p className="text-sm text-muted-foreground">\n            Sign up to create an account\n          </p>\n        </div>\n        <div className="flex flex-col gap-2">\n          <Label htmlFor="email">Email</Label>\n          <Input id="email" placeholder="Email" type="email" />\n        </div>\n        <div className="flex flex-col gap-2">\n          <Label htmlFor="password">Password</Label>\n          <Input id="password" placeholder="Password" type="password" />\n        </div>\n        <Button className="w-full">Sign up</Button>\n      </TabContent>\n    </Tabs>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/tabs/tabs-underline")
    ),
    title: "tabs-underline",
    category: "tabs",
    path: "src/components/demos/tabs/tabs-underline.tsx",
  },
  "textarea-demo": {
    source:
      'import { Textarea } from "@/components/ui/textarea"\n\nexport default function TextareaDemo() {\n  return <Textarea className="w-80" placeholder="Enter your message..." />\n}\n',
    component: React.lazy(
      () => import("@/components/demos/textarea/textarea-demo")
    ),
    title: "textarea-demo",
    category: "textarea",
    path: "src/components/demos/textarea/textarea-demo.tsx",
  },
  "textarea-disabled": {
    source:
      'import { Textarea } from "@/components/ui/textarea"\n\nexport default function TextareaDisabled() {\n  return (\n    <Textarea className="w-80" placeholder="Enter your message..." disabled />\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/textarea/textarea-disabled")
    ),
    title: "textarea-disabled",
    category: "textarea",
    path: "src/components/demos/textarea/textarea-disabled.tsx",
  },
  "textarea-error": {
    source:
      'import { Textarea } from "@/components/ui/textarea"\n\nexport default function TextareaError() {\n  return (\n    <Textarea\n      className="w-80"\n      placeholder="Enter your message..."\n      aria-invalid\n    />\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/textarea/textarea-error")
    ),
    title: "textarea-error",
    category: "textarea",
    path: "src/components/demos/textarea/textarea-error.tsx",
  },
  "theme-toggle": {
    source:
      'import * as React from "react"\nimport { MoonIcon, SunIcon } from "lucide-react"\nimport { useTheme } from "next-themes"\n\nimport { Button } from "@/components/ui/button"\n\nexport default function ThemeToggleDemo() {\n  const { setTheme, resolvedTheme } = useTheme()\n\n  const toggleTheme = React.useCallback(() => {\n    setTheme(resolvedTheme === "dark" ? "light" : "dark")\n  }, [resolvedTheme, setTheme])\n\n  return (\n    <Button onClick={toggleTheme} variant="ghost" size="icon">\n      <MoonIcon className="dark:hidden" />\n      <SunIcon className="hidden dark:block" />\n      <span className="sr-only">Toggle theme</span>\n    </Button>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/theme-toggle/theme-toggle")
    ),
    title: "theme-toggle",
    category: "theme-toggle",
    path: "src/components/demos/theme-toggle/theme-toggle.tsx",
  },
  "toggle-group-demo": {
    source:
      'import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react"\n\nimport { Toggle } from "@/components/ui/toggle"\nimport { ToggleGroup } from "@/components/ui/toggle-group"\n\nexport default function ToggleGroupDemo() {\n  return (\n    <ToggleGroup>\n      <Toggle value="left">\n        <AlignLeftIcon />\n      </Toggle>\n      <Toggle value="center">\n        <AlignCenterIcon />\n      </Toggle>\n      <Toggle value="right">\n        <AlignRightIcon />\n      </Toggle>\n    </ToggleGroup>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/toggle-group/toggle-group-demo")
    ),
    title: "toggle-group-demo",
    category: "toggle-group",
    path: "src/components/demos/toggle-group/toggle-group-demo.tsx",
  },
  "toggle-group-multiple": {
    source:
      'import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"\n\nimport { Toggle } from "@/components/ui/toggle"\nimport { ToggleGroup } from "@/components/ui/toggle-group"\n\nexport default function ToggleGroupMultiple() {\n  return (\n    <ToggleGroup toggleMultiple>\n      <Toggle value="bold">\n        <BoldIcon />\n      </Toggle>\n      <Toggle value="italic">\n        <ItalicIcon />\n      </Toggle>\n      <Toggle value="underline">\n        <UnderlineIcon />\n      </Toggle>\n    </ToggleGroup>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/toggle-group/toggle-group-multiple")
    ),
    title: "toggle-group-multiple",
    category: "toggle-group",
    path: "src/components/demos/toggle-group/toggle-group-multiple.tsx",
  },
  "toggle-custom-control": {
    source:
      'import { useState } from "react"\nimport { PinIcon, PinOffIcon } from "lucide-react"\n\nimport { Toggle } from "@/components/ui/toggle"\n\nexport default function ToggleCustomControl() {\n  const [isPinned, setIsPinned] = useState(false)\n\n  return (\n    <Toggle aria-label="Pin" pressed={isPinned} onPressedChange={setIsPinned}>\n      {isPinned ? <PinIcon /> : <PinOffIcon />}\n    </Toggle>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/toggle/toggle-custom-control")
    ),
    title: "toggle-custom-control",
    category: "toggle",
    path: "src/components/demos/toggle/toggle-custom-control.tsx",
  },
  "toggle-demo": {
    source:
      'import { PinIcon } from "lucide-react"\n\nimport { Toggle } from "@/components/ui/toggle"\n\nexport default function ToggleDemo() {\n  return (\n    <Toggle aria-label="Pin">\n      <PinIcon />\n    </Toggle>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/toggle/toggle-demo")
    ),
    title: "toggle-demo",
    category: "toggle",
    path: "src/components/demos/toggle/toggle-demo.tsx",
  },
  "toggle-disabled": {
    source:
      'import { PinIcon } from "lucide-react"\n\nimport { Toggle } from "@/components/ui/toggle"\n\nexport default function ToggleDisabled() {\n  return (\n    <Toggle aria-label="Pin" disabled>\n      <PinIcon />\n    </Toggle>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/toggle/toggle-disabled")
    ),
    title: "toggle-disabled",
    category: "toggle",
    path: "src/components/demos/toggle/toggle-disabled.tsx",
  },
  "toggle-sizes": {
    source:
      'import { PinIcon } from "lucide-react"\n\nimport { Toggle } from "@/components/ui/toggle"\n\nexport default function ToggleSizes() {\n  return (\n    <div className="flex items-center gap-4">\n      <Toggle aria-label="Pin" size="sm">\n        <PinIcon />\n      </Toggle>\n      <Toggle aria-label="Pin" size="md">\n        <PinIcon />\n      </Toggle>\n      <Toggle aria-label="Pin" size="lg">\n        <PinIcon />\n      </Toggle>\n    </div>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/toggle/toggle-sizes")
    ),
    title: "toggle-sizes",
    category: "toggle",
    path: "src/components/demos/toggle/toggle-sizes.tsx",
  },
  "toolbar-demo": {
    source:
      'import { GlobeIcon, LightbulbIcon, SparklesIcon } from "lucide-react"\n\nimport { Button } from "@/components/ui/button"\nimport {\n  Popover,\n  PopoverClose,\n  PopoverContent,\n  PopoverDescription,\n  PopoverFooter,\n  PopoverHeader,\n  PopoverTitle,\n  PopoverTrigger,\n} from "@/components/ui/popover"\nimport {\n  Select,\n  SelectContent,\n  SelectItem,\n  SelectTrigger,\n  SelectValue,\n} from "@/components/ui/select"\nimport { Textarea } from "@/components/ui/textarea"\nimport { Toggle } from "@/components/ui/toggle"\nimport { ToggleGroup } from "@/components/ui/toggle-group"\nimport {\n  Toolbar,\n  ToolbarButton,\n  ToolbarSeparator,\n} from "@/components/ui/toolbar"\n\nexport default function ToolbarDemo() {\n  return (\n    <Toolbar>\n      <ToggleGroup className="border-none bg-transparent p-0" toggleMultiple>\n        <ToolbarButton\n          size="icon"\n          render={\n            <Toggle\n              className="data-[pressed]:bg-green-950 data-[pressed]:text-green-200"\n              aria-label="Show AI thinking"\n              value="ai-thinking"\n            >\n              <LightbulbIcon className="size-4" />\n            </Toggle>\n          }\n        />\n        <ToolbarButton\n          size="icon"\n          render={\n            <Toggle\n              className="data-[pressed]:bg-blue-950 data-[pressed]:text-blue-200"\n              aria-label="Use web search"\n              value="web-search"\n            >\n              <GlobeIcon className="size-4" />\n            </Toggle>\n          }\n        />\n      </ToggleGroup>\n\n      <ToolbarSeparator />\n\n      <Select defaultValue="grok-3">\n        <ToolbarButton\n          className="w-40 justify-between border-none md:w-52"\n          render={\n            <SelectTrigger>\n              <SelectValue\n                className="max-w-24 truncate md:max-w-40"\n                placeholder="Select a model"\n              />\n            </SelectTrigger>\n          }\n        />\n        <SelectContent className="w-52">\n          <SelectItem value="claude-3.7-sonnet">claude-3.7-sonnet</SelectItem>\n          <SelectItem value="claude-3.5-sonnet">claude-3.5-sonnet</SelectItem>\n          <SelectItem value="gpt-4o">gpt-4o</SelectItem>\n          <SelectItem value="o3-mini">o3-mini</SelectItem>\n          <SelectItem value="grok-3">grok-3</SelectItem>\n        </SelectContent>\n      </Select>\n\n      <ToolbarSeparator />\n\n      <Popover>\n        <ToolbarButton\n          size="icon"\n          render={<PopoverTrigger />}\n          aria-label="Edit prompt"\n        >\n          <SparklesIcon className="size-4 shrink-0" />\n        </ToolbarButton>\n        <PopoverContent className="w-80">\n          <PopoverHeader>\n            <PopoverTitle>Edit Prompt Template</PopoverTitle>\n            <PopoverDescription>\n              Customize the system prompt used for AI generation\n            </PopoverDescription>\n          </PopoverHeader>\n          <div className="my-2">\n            <Textarea\n              className="min-h-32 resize-none"\n              defaultValue="You are a helpful AI assistant. Your task is to help the user with their writing needs. Be concise, accurate, and helpful."\n            />\n          </div>\n          <PopoverFooter>\n            <PopoverClose\n              render={<Button variant="outline">Save Prompt</Button>}\n            />\n          </PopoverFooter>\n        </PopoverContent>\n      </Popover>\n    </Toolbar>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/toolbar/toolbar-demo")
    ),
    title: "toolbar-demo",
    category: "toolbar",
    path: "src/components/demos/toolbar/toolbar-demo.tsx",
  },
  "toolbar-file-explorer": {
    source:
      'import {\n  LayoutGridIcon,\n  LayoutListIcon,\n  MoreHorizontalIcon,\n  SearchIcon,\n  ShareIcon,\n} from "lucide-react"\n\nimport {\n  Dropdown,\n  DropdownContent,\n  DropdownItem,\n  DropdownSeparator,\n  DropdownTrigger,\n} from "@/components/ui/dropdown"\nimport { Input, InputIcon } from "@/components/ui/input"\nimport { Toggle } from "@/components/ui/toggle"\nimport { ToggleGroup } from "@/components/ui/toggle-group"\nimport {\n  Toolbar,\n  ToolbarButton,\n  ToolbarGroup,\n  ToolbarInput,\n  ToolbarSeparator,\n} from "@/components/ui/toolbar"\n\nexport default function ToolbarFileExplorerDemo() {\n  return (\n    <Toolbar>\n      <ToggleGroup className="border-none bg-transparent p-0">\n        <ToolbarButton\n          size="icon"\n          render={\n            <Toggle aria-label="Grid view" value="grid-view">\n              <LayoutGridIcon className="size-4" />\n            </Toggle>\n          }\n        />\n        <ToolbarButton\n          size="icon"\n          render={\n            <Toggle aria-label="List view" value="list-view">\n              <LayoutListIcon className="size-4" />\n            </Toggle>\n          }\n        />\n      </ToggleGroup>\n\n      <ToolbarSeparator />\n\n      <ToolbarGroup>\n        <ToolbarButton size="icon">\n          <ShareIcon className="size-4" />\n        </ToolbarButton>\n        <Dropdown>\n          <ToolbarButton size="icon" render={<DropdownTrigger />}>\n            <MoreHorizontalIcon className="size-4" />\n          </ToolbarButton>\n          <DropdownContent>\n            <DropdownItem>New File</DropdownItem>\n            <DropdownItem>New Folder</DropdownItem>\n            <DropdownSeparator />\n            <DropdownItem>Open in New Tab</DropdownItem>\n            <DropdownItem>Get Info</DropdownItem>\n          </DropdownContent>\n        </Dropdown>\n      </ToolbarGroup>\n      <ToolbarSeparator />\n\n      <ToolbarInput\n        render={\n          <Input placeholder="Search">\n            <InputIcon side="leading">\n              <SearchIcon className="size-4" />\n            </InputIcon>\n          </Input>\n        }\n      />\n    </Toolbar>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/toolbar/toolbar-file-explorer")
    ),
    title: "toolbar-file-explorer",
    category: "toolbar",
    path: "src/components/demos/toolbar/toolbar-file-explorer.tsx",
  },
  "tooltip-custom-position": {
    source:
      'import {\n  Tooltip,\n  TooltipContent,\n  TooltipTrigger,\n} from "@/components/ui/tooltip"\n\nconst positions = ["top", "right", "bottom", "left"] as const\n\nexport default function TooltipCustomPosition() {\n  return (\n    <div className="grid grid-cols-2 gap-2">\n      {positions.map((position) => (\n        <Tooltip key={position}>\n          <TooltipTrigger className="w-full rounded-md border px-2 py-1.5 text-sm">\n            {position}\n          </TooltipTrigger>\n          <TooltipContent className="max-w-56" side={position}>\n            <span>This tooltip is positioned at the {position} side.</span>\n          </TooltipContent>\n        </Tooltip>\n      ))}\n    </div>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/tooltip/tooltip-custom-position")
    ),
    title: "tooltip-custom-position",
    category: "tooltip",
    path: "src/components/demos/tooltip/tooltip-custom-position.tsx",
  },
  "tooltip-demo": {
    source:
      'import { Icons } from "@/components/icons"\nimport { buttonVariants } from "@/components/ui/button"\nimport {\n  Tooltip,\n  TooltipContent,\n  TooltipTrigger,\n} from "@/components/ui/tooltip"\n\nexport default function TooltipDemo() {\n  return (\n    <Tooltip>\n      <TooltipTrigger\n        className={buttonVariants({ variant: "outline", size: "icon" })}\n      >\n        <Icons.twitter />\n      </TooltipTrigger>\n      <TooltipContent>\n        <span>\n          Follow me{" "}\n          <a\n            className="font-medium"\n            href="https://x.com/borabalogluu"\n            target="_blank"\n          >\n            @borabalogluu\n          </a>\n        </span>\n      </TooltipContent>\n    </Tooltip>\n  )\n}\n',
    component: React.lazy(
      () => import("@/components/demos/tooltip/tooltip-demo")
    ),
    title: "tooltip-demo",
    category: "tooltip",
    path: "src/components/demos/tooltip/tooltip-demo.tsx",
  },
}
