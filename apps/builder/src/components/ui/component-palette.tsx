import { useState } from "react";
import {
  CreditCard,
  Image,
  Navigation,
  Plus,
  Search,
  Square,
  Type,
} from "lucide-react";
import { Badge, Button, Input, ScrollArea } from "@nui/ui";

import { useCanvas } from "../../context/canvas-context";

const componentCategories = [
  {
    id: "layout",
    name: "Layout",
    icon: Square,
    components: [
      {
        id: "container",
        name: "Container",
        description: "Flexible container for other components",
        defaultSize: { width: 400, height: 300 },
        defaultProps: { padding: "16px" },
      },
      {
        id: "hero-section",
        name: "Hero Section",
        description: "Large banner section with title and CTA",
        defaultSize: { width: 800, height: 400 },
        defaultProps: {
          title: "Welcome to Our Website",
          subtitle: "Create amazing experiences",
          showButton: true,
        },
      },
    ],
  },
  {
    id: "navigation",
    name: "Navigation",
    icon: Navigation,
    components: [
      {
        id: "navigation",
        name: "Navigation Bar",
        description: "Top navigation with logo and links",
        defaultSize: { width: 800, height: 60 },
        defaultProps: {
          logo: "Logo",
          links: ["Home", "About", "Contact"],
        },
      },
      {
        id: "footer",
        name: "Footer",
        description: "Bottom page footer",
        defaultSize: { width: 800, height: 100 },
        defaultProps: {
          text: "© 2024 Your Company. All rights reserved.",
        },
      },
    ],
  },
  {
    id: "content",
    name: "Content",
    icon: Type,
    components: [
      {
        id: "text",
        name: "Text",
        description: "Customizable text element",
        defaultSize: { width: 300, height: 50 },
        defaultProps: {
          content: "Your text here",
          fontSize: "16px",
        },
      },
      {
        id: "card",
        name: "Card",
        description: "Content card with header and body",
        defaultSize: { width: 300, height: 200 },
        defaultProps: {
          title: "Card Title",
          content: "Card content goes here...",
        },
      },
    ],
  },
  {
    id: "media",
    name: "Media",
    icon: Image,
    components: [
      {
        id: "image",
        name: "Image",
        description: "Image placeholder or actual image",
        defaultSize: { width: 300, height: 200 },
        defaultProps: {
          alt: "Image description",
          width: 300,
          height: 200,
        },
      },
    ],
  },
  {
    id: "interactive",
    name: "Interactive",
    icon: CreditCard,
    components: [
      {
        id: "button",
        name: "Button",
        description: "Clickable button element",
        defaultSize: { width: 120, height: 40 },
        defaultProps: {
          text: "Click me",
          variant: "default",
        },
      },
      {
        id: "pricing-table",
        name: "Pricing Table",
        description: "3-column pricing comparison",
        defaultSize: { width: 600, height: 400 },
        defaultProps: {},
      },
    ],
  },
];

export function ComponentPalette() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("layout");

  const { addNode, currentPageId } = useCanvas();

  const filteredCategories = componentCategories
    .map((category) => ({
      ...category,
      components: category.components.filter(
        (component) =>
          component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          component.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.components.length > 0);

  const handleAddComponent = (component: any) => {
    const node = {
      id: crypto.randomUUID(),
      type: component.id,
      position: { x: 200, y: 200 },
      size: component.defaultSize,
      props: component.defaultProps,
      pageId: currentPageId,
      zIndex: 1,
      locked: false,
      visible: true,
    };

    addNode(node);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Search */}
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search components..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex overflow-x-auto border-b">
        {componentCategories.map((category) => {
          const Icon = category.icon;
          return (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className="flex-shrink-0 rounded-none"
            >
              <Icon className="h-4 w-4 mr-2" />
              {category.name}
            </Button>
          );
        })}
      </div>

      {/* Components */}
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4">
          {searchTerm ? (
            // Search results
            <div>
              <h3 className="text-sm font-medium mb-3">Search Results</h3>
              <div className="grid gap-2">
                {filteredCategories.flatMap((category) =>
                  category.components.map((component) => (
                    <ComponentItem
                      key={component.id}
                      component={component}
                      onAdd={handleAddComponent}
                    />
                  )),
                )}
              </div>
            </div>
          ) : (
            // Category view
            filteredCategories
              .filter((category) => category.id === activeCategory)
              .map((category) => (
                <div key={category.id}>
                  <div className="flex items-center gap-2 mb-3">
                    <category.icon className="h-4 w-4" />
                    <h3 className="text-sm font-medium">{category.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {category.components.length}
                    </Badge>
                  </div>
                  <div className="grid gap-2">
                    {category.components.map((component) => (
                      <ComponentItem
                        key={component.id}
                        component={component}
                        onAdd={handleAddComponent}
                      />
                    ))}
                  </div>
                </div>
              ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
}

interface ComponentItemProps {
  component: any;
  onAdd: (component: any) => void;
}

function ComponentItem({ component, onAdd }: ComponentItemProps) {
  return (
    <div className="group border rounded-lg p-3 hover:bg-muted/50 cursor-pointer">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="text-sm font-medium">{component.name}</h4>
          <p className="text-xs text-muted-foreground mt-1">
            {component.description}
          </p>
        </div>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => onAdd(component)}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
