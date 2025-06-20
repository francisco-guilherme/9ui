import * as React from "react";
import { LogOut, Mail, Palette, Settings } from "lucide-react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  ThemeVariant,
  useTheme,
} from "@nui/core";

import { ThemeEditor } from "../../widgets/theme-editor";

interface ThemeEditorFullProps {
  children?: React.ReactNode;
}

// Mock data for component examples
const colorPalette = [
  { name: "Background", color: "var(--color-background)", category: "base" },
  { name: "Foreground", color: "var(--color-foreground)", category: "base" },
  { name: "Primary", color: "var(--color-primary)", category: "primary" },
  { name: "Secondary", color: "var(--color-secondary)", category: "secondary" },
  { name: "Accent", color: "var(--color-accent)", category: "accent" },
  { name: "Muted", color: "var(--color-muted)", category: "accent" },
  {
    name: "Destructive",
    color: "var(--color-destructive)",
    category: "destructive",
  },
  { name: "Border", color: "var(--color-border)", category: "border" },
];

const buttonVariants = [
  { name: "Primary", variant: "default" as const },
  { name: "Secondary", variant: "secondary" as const },
  { name: "Outline", variant: "outline" as const },
  { name: "Ghost", variant: "ghost" as const },
  { name: "Destructive", variant: "destructive" as const },
];

export function ThemeEditorFull({ children }: ThemeEditorFullProps) {
  const [open, setOpen] = React.useState(false);
  const { config, availableVariants, setVariant } = useTheme();

  const handleThemeChange = (value: unknown) => {
    if (typeof value === "string") {
      setVariant(value as ThemeVariant);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children ? (
        React.isValidElement(children) && children.type === Button ? (
          <Button
            {...(React.isValidElement(children) &&
            typeof children.props === "object"
              ? children.props
              : {})}
            render={<DialogTrigger />}
          />
        ) : (
          <DialogTrigger>{children}</DialogTrigger>
        )
      ) : (
        <Button
          variant="ghost"
          size="icon-sm"
          title="Design System"
          render={<DialogTrigger />}
        >
          <Palette className="size-4" />
        </Button>
      )}
      <DialogContent className="!max-w-none !w-[95vw] max-h-[95vh] h-[95vh] overflow-hidden">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <DialogTitle className="text-lg">Design System</DialogTitle>
              <p className="text-sm text-muted-foreground">
                This style will affect how the components in this project get
                created
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Theme</span>
                <div className="flex items-center gap-1">
                  <div className="size-3 rounded-full bg-blue-500" />
                  <div className="size-3 rounded-full bg-red-500" />
                  <div className="size-3 rounded-full bg-green-500" />
                </div>
                <Select
                  value={config.variant}
                  onValueChange={handleThemeChange}
                >
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {availableVariants.map((variant) => (
                      <SelectItem key={variant} value={variant}>
                        {variant.charAt(0).toUpperCase() + variant.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-1">
                <Button variant="outline" size="sm">
                  Import
                </Button>
                <Button variant="outline" size="sm">
                  Reset Changes
                </Button>
                <Button size="sm">Save</Button>
              </div>
            </div>
          </div>
        </DialogHeader>

        <Tabs defaultValue="colors" className="flex-1 overflow-hidden">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="effects">Effects</TabsTrigger>
            <TabsTrigger value="rules">Rules</TabsTrigger>
            <TabsTrigger value="examples">Component Examples</TabsTrigger>
          </TabsList>

          <div className="flex gap-6 mt-4 overflow-hidden flex-1">
            {/* Left Panel - Theme Editor */}
            <div className="w-80 flex-shrink-0 overflow-y-auto">
              <TabsContent value="colors" className="mt-0">
                <ThemeEditor />
              </TabsContent>

              <TabsContent value="typography" className="mt-0">
                <div className="space-y-4">
                  <h3 className="font-semibold">Typography Settings</h3>
                  <p className="text-sm text-muted-foreground">
                    Typography configuration will be available in a future
                    update.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="effects" className="mt-0">
                <div className="space-y-4">
                  <h3 className="font-semibold">Effects Settings</h3>
                  <p className="text-sm text-muted-foreground">
                    Effects configuration will be available in a future update.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="rules" className="mt-0">
                <div className="space-y-4">
                  <h3 className="font-semibold">Design Rules</h3>
                  <p className="text-sm text-muted-foreground">
                    Design rules configuration will be available in a future
                    update.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="examples" className="mt-0">
                <div className="space-y-4">
                  <h3 className="font-semibold">Component Library</h3>
                  <p className="text-sm text-muted-foreground">
                    Browse and customize component examples.
                  </p>
                </div>
              </TabsContent>
            </div>

            {/* Right Panel - Preview */}
            <div className="flex-1 overflow-y-auto">
              <TabsContent value="colors" className="mt-0">
                <ColorPalettePreview />
              </TabsContent>

              <TabsContent value="typography" className="mt-0">
                <TypographyPreview />
              </TabsContent>

              <TabsContent value="effects" className="mt-0">
                <EffectsPreview />
              </TabsContent>

              <TabsContent value="rules" className="mt-0">
                <RulesPreview />
              </TabsContent>

              <TabsContent value="examples" className="mt-0">
                <ComponentExamples />
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

// Color Palette Preview Component
function ColorPalettePreview() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Color Palette</h3>
        <div className="grid grid-cols-4 gap-4">
          {colorPalette.map((color) => (
            <div key={color.name} className="space-y-2">
              <div
                className="h-16 rounded-lg border border-border"
                style={{ backgroundColor: color.color }}
              />
              <div className="text-center">
                <p className="text-sm font-medium">{color.name}</p>
                <p className="text-xs text-muted-foreground capitalize">
                  {color.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Button Variants</h3>
        <div className="flex flex-wrap gap-3">
          {buttonVariants.map((btn) => (
            <Button key={btn.name} variant={btn.variant}>
              {btn.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Typography Preview Component
function TypographyPreview() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Typography Scale</h3>
        <div className="space-y-4">
          <div>
            <h1 className="text-4xl font-bold">Heading 1</h1>
            <p className="text-sm text-muted-foreground">text-4xl font-bold</p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Heading 2</h2>
            <p className="text-sm text-muted-foreground">
              text-3xl font-semibold
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Heading 3</h3>
            <p className="text-sm text-muted-foreground">
              text-2xl font-semibold
            </p>
          </div>
          <div>
            <h4 className="text-xl font-medium">Heading 4</h4>
            <p className="text-sm text-muted-foreground">text-xl font-medium</p>
          </div>
          <div>
            <p className="text-base">Body text - Regular paragraph text</p>
            <p className="text-sm text-muted-foreground">text-base</p>
          </div>
          <div>
            <p className="text-sm">Small text - Secondary information</p>
            <p className="text-xs text-muted-foreground">text-sm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Effects Preview Component
function EffectsPreview() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Shadows & Effects</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-background rounded-lg shadow-sm border">
            <p className="text-sm font-medium">Small Shadow</p>
            <p className="text-xs text-muted-foreground">shadow-sm</p>
          </div>
          <div className="p-4 bg-background rounded-lg shadow-md border">
            <p className="text-sm font-medium">Medium Shadow</p>
            <p className="text-xs text-muted-foreground">shadow-md</p>
          </div>
          <div className="p-4 bg-background rounded-lg shadow-lg border">
            <p className="text-sm font-medium">Large Shadow</p>
            <p className="text-xs text-muted-foreground">shadow-lg</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Rules Preview Component
function RulesPreview() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Design Rules</h3>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Spacing Scale</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded"></div>
                <span className="text-sm">4px - Tight spacing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-primary rounded"></div>
                <span className="text-sm">8px - Small spacing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-primary rounded"></div>
                <span className="text-sm">16px - Medium spacing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded"></div>
                <span className="text-sm">24px - Large spacing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component Examples Component
function ComponentExamples() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Component Examples</h3>

        {/* Account Creation Form Example */}
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" className="w-full">
                <div className="size-4 mr-2 bg-foreground rounded" />
                Github
              </Button>
              <Button variant="outline" className="w-full">
                <Mail className="size-4 mr-2" />
                Google
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  OR CONTINUE WITH
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input
                className="w-full px-3 py-2 border border-border rounded-md text-sm"
                placeholder="m@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-border rounded-md text-sm"
              />
            </div>

            <Button className="w-full">Create account</Button>
          </CardContent>
        </Card>
      </div>

      <div>
        <h4 className="font-medium mb-3">User Account Menu</h4>
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <Button
              variant="ghost"
              className="relative h-8 w-8 rounded-full"
              render={<DropdownMenuTrigger />}
            >
              <Avatar className="h-8 w-8">
                <div className="bg-primary text-primary-foreground flex items-center justify-center w-full h-full rounded-full text-sm font-medium">
                  JD
                </div>
              </Avatar>
            </Button>
            <DropdownMenuContent className="w-56" align="end">
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  <p className="font-medium">John Doe</p>
                  <p className="w-[200px] truncate text-sm text-muted-foreground">
                    john.doe@example.com
                  </p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <span className="text-sm text-muted-foreground">
            User account dropdown
          </span>
        </div>
      </div>
    </div>
  );
}
