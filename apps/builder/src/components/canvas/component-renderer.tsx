import { Button, Card, CardContent, CardHeader, CardTitle } from "@nui/ui";

import type { ComponentNodeData } from "../../types";

interface ComponentRendererProps {
  node: ComponentNodeData;
}

/**
 * Renders the actual component based on the node type and props
 * This is where we convert the AI-generated component data into real React components
 */
export function ComponentRenderer({ node }: ComponentRendererProps) {
  const { type, props } = node;

  // Render different component types
  switch (type) {
    case "hero-section":
      return (
        <div
          className="w-full h-full flex items-center justify-center text-center p-8"
          style={{
            background:
              props.background ||
              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: props.textColor || "white",
          }}
        >
          <div>
            <h1 className="text-4xl font-bold mb-4">
              {props.title || "Welcome to Our Website"}
            </h1>
            <p className="text-xl mb-6 opacity-90">
              {props.subtitle || "Create amazing experiences with AI"}
            </p>
            {props.showButton && (
              <Button size="lg" variant="secondary">
                {props.buttonText || "Get Started"}
              </Button>
            )}
          </div>
        </div>
      );

    case "card":
      return (
        <Card className="w-full h-full">
          <CardHeader>
            <CardTitle>{props.title || "Card Title"}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{props.content || "Card content goes here..."}</p>
          </CardContent>
        </Card>
      );

    case "button":
      return (
        <Button
          variant={props.variant || "default"}
          size={props.size || "default"}
          className="w-full h-full"
        >
          {props.text || "Button"}
        </Button>
      );

    case "text":
      return (
        <div
          className="w-full h-full flex items-center"
          style={{
            fontSize: props.fontSize || "16px",
            color: props.color || "inherit",
            textAlign: props.align || "left",
            fontWeight: props.weight || "normal",
          }}
        >
          {props.content || "Text content"}
        </div>
      );

    case "image":
      return (
        <div className="w-full h-full bg-muted rounded flex items-center justify-center">
          {props.src ? (
            <img
              src={props.src}
              alt={props.alt || "Image"}
              className="w-full h-full object-cover rounded"
            />
          ) : (
            <div className="text-muted-foreground text-center">
              <div className="text-2xl mb-2">🖼️</div>
              <div className="text-sm">Image Placeholder</div>
              <div className="text-xs opacity-70">
                {props.width || 300} × {props.height || 200}
              </div>
            </div>
          )}
        </div>
      );

    case "container":
      return (
        <div
          className="w-full h-full border-2 border-dashed border-muted-foreground/30 rounded flex items-center justify-center"
          style={{
            background: props.background || "transparent",
            padding: props.padding || "16px",
          }}
        >
          <div className="text-muted-foreground text-center">
            <div className="text-lg mb-1">📦</div>
            <div className="text-sm">Container</div>
            <div className="text-xs opacity-70">Drop components here</div>
          </div>
        </div>
      );

    case "pricing-table":
      return (
        <div className="w-full h-full grid grid-cols-3 gap-4 p-4">
          {[1, 2, 3].map((plan) => (
            <Card key={plan} className="text-center">
              <CardHeader>
                <CardTitle>Plan {plan}</CardTitle>
                <div className="text-2xl font-bold">${plan * 10}/mo</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
                <Button className="w-full mt-4">Choose Plan</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      );

    case "navigation":
      return (
        <nav className="w-full h-full flex items-center justify-between px-6 bg-background border-b">
          <div className="font-bold text-lg">{props.logo || "Logo"}</div>
          <div className="flex space-x-6">
            {(props.links || ["Home", "About", "Contact"]).map(
              (link: string) => (
                <a key={link} href="#" className="hover:text-primary">
                  {link}
                </a>
              ),
            )}
          </div>
        </nav>
      );

    case "footer":
      return (
        <footer className="w-full h-full bg-muted p-6 text-center">
          <div className="text-sm text-muted-foreground">
            {props.text || "© 2024 Your Company. All rights reserved."}
          </div>
        </footer>
      );

    default:
      // Fallback for unknown component types
      return (
        <div className="w-full h-full border-2 border-dashed border-destructive/50 rounded flex items-center justify-center bg-destructive/5">
          <div className="text-center text-destructive">
            <div className="text-lg mb-1">⚠️</div>
            <div className="text-sm font-medium">Unknown Component</div>
            <div className="text-xs opacity-70">Type: {type}</div>
          </div>
        </div>
      );
  }
}
