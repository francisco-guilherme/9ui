import { Sparkles } from "lucide-react";
import { Button } from "@nui/ui";

interface QuickPromptsProps {
  onSelect: (prompt: string) => void;
}

const quickPrompts = [
  {
    category: "Hero Sections",
    prompts: [
      "Create a hero section with a purple gradient background and call-to-action button",
      "Make a minimal hero with large text and subtle animation",
      "Design a hero section with background image and overlay text",
    ],
  },
  {
    category: "Navigation",
    prompts: [
      "Create a modern navigation bar with logo and menu items",
      "Make a sticky header with search functionality",
      "Design a mobile-friendly hamburger menu",
    ],
  },
  {
    category: "Content Sections",
    prompts: [
      "Create a features section with 3 columns and icons",
      "Make a testimonials carousel with customer quotes",
      "Design an about section with team member cards",
    ],
  },
  {
    category: "E-commerce",
    prompts: [
      "Create a product grid with pricing and add to cart buttons",
      "Make a pricing table with 3 subscription tiers",
      "Design a shopping cart sidebar with item list",
    ],
  },
  {
    category: "Forms & CTAs",
    prompts: [
      "Create a contact form with validation styling",
      "Make a newsletter signup with email input",
      "Design a login form with social media options",
    ],
  },
];

export function QuickPrompts({ onSelect }: QuickPromptsProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium">
        <Sparkles className="h-4 w-4 text-primary" />
        Quick Start Ideas
      </div>

      <div className="space-y-3">
        {quickPrompts.map((category) => (
          <div key={category.category}>
            <h4 className="text-xs font-medium text-muted-foreground mb-2">
              {category.category}
            </h4>
            <div className="space-y-1">
              {category.prompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  onClick={() => onSelect(prompt)}
                  className="w-full text-left justify-start h-auto p-2 text-xs leading-relaxed hover:bg-muted/50"
                >
                  {prompt}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-xs text-muted-foreground">
        💡 <strong>Pro tip:</strong> Be specific about colors, layout, and style
        preferences for better results.
      </div>
    </div>
  );
}
