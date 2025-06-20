import type {
  AIGenerationRequest,
  AIGenerationResponse,
  ComponentNodeData,
} from "../types";

/**
 * Generates components from natural language prompts
 * This is a mock implementation - in a real app, this would call your AI service
 */
export async function generateComponentFromPrompt(
  request: AIGenerationRequest,
): Promise<AIGenerationResponse> {
  try {
    // Simulate AI processing delay
    await new Promise((resolve) =>
      setTimeout(resolve, 1000 + Math.random() * 2000),
    );

    const { prompt, context } = request;
    const components = parsePromptToComponents(prompt, context);

    return {
      success: true,
      components,
      explanation: generateExplanation(prompt, components),
      suggestions: generateSuggestions(prompt),
    };
  } catch (error) {
    return {
      success: false,
      components: [],
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

/**
 * Parse natural language prompt into component data
 * This is a simplified parser - a real implementation would use LLM
 */
function parsePromptToComponents(
  prompt: string,
  context?: AIGenerationRequest["context"],
): ComponentNodeData[] {
  const lowerPrompt = prompt.toLowerCase();
  const components: ComponentNodeData[] = [];

  // Hero section detection
  if (lowerPrompt.includes("hero") || lowerPrompt.includes("banner")) {
    components.push({
      id: crypto.randomUUID(),
      type: "hero-section",
      position: context?.targetPosition || { x: 100, y: 100 },
      size: { width: 800, height: 400 },
      props: {
        title: extractTitle(prompt) || "Welcome to Our Website",
        subtitle:
          extractSubtitle(prompt) || "Create amazing experiences with AI",
        background:
          extractBackground(prompt) ||
          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        showButton:
          lowerPrompt.includes("button") || lowerPrompt.includes("cta"),
        buttonText: extractButtonText(prompt) || "Get Started",
      },
      pageId: context?.pageId || "default",
      zIndex: 1,
      locked: false,
      visible: true,
      generatedFrom: prompt,
    });
  }

  // Pricing table detection
  if (lowerPrompt.includes("pricing") || lowerPrompt.includes("plans")) {
    components.push({
      id: crypto.randomUUID(),
      type: "pricing-table",
      position: context?.targetPosition || { x: 100, y: 200 },
      size: { width: 600, height: 400 },
      props: {},
      pageId: context?.pageId || "default",
      zIndex: 1,
      locked: false,
      visible: true,
      generatedFrom: prompt,
    });
  }

  // Navigation detection
  if (
    lowerPrompt.includes("nav") ||
    lowerPrompt.includes("menu") ||
    lowerPrompt.includes("header")
  ) {
    components.push({
      id: crypto.randomUUID(),
      type: "navigation",
      position: context?.targetPosition || { x: 0, y: 0 },
      size: { width: 800, height: 60 },
      props: {
        logo: extractLogo(prompt) || "Logo",
        links: extractNavLinks(prompt) || ["Home", "About", "Contact"],
      },
      pageId: context?.pageId || "default",
      zIndex: 1,
      locked: false,
      visible: true,
      generatedFrom: prompt,
    });
  }

  // Button detection
  if (
    lowerPrompt.includes("button") &&
    !components.some((c) => c.type === "hero-section")
  ) {
    components.push({
      id: crypto.randomUUID(),
      type: "button",
      position: context?.targetPosition || { x: 200, y: 200 },
      size: { width: 120, height: 40 },
      props: {
        text: extractButtonText(prompt) || "Click me",
        variant: extractButtonVariant(prompt) || "default",
      },
      pageId: context?.pageId || "default",
      zIndex: 1,
      locked: false,
      visible: true,
      generatedFrom: prompt,
    });
  }

  // Card detection
  if (lowerPrompt.includes("card")) {
    components.push({
      id: crypto.randomUUID(),
      type: "card",
      position: context?.targetPosition || { x: 200, y: 200 },
      size: { width: 300, height: 200 },
      props: {
        title: extractTitle(prompt) || "Card Title",
        content: extractContent(prompt) || "Card content goes here...",
      },
      pageId: context?.pageId || "default",
      zIndex: 1,
      locked: false,
      visible: true,
      generatedFrom: prompt,
    });
  }

  // If no specific component detected, create a container
  if (components.length === 0) {
    components.push({
      id: crypto.randomUUID(),
      type: "container",
      position: context?.targetPosition || { x: 200, y: 200 },
      size: { width: 400, height: 300 },
      props: {},
      pageId: context?.pageId || "default",
      zIndex: 1,
      locked: false,
      visible: true,
      generatedFrom: prompt,
    });
  }

  return components;
}

// Helper functions to extract information from prompts
function extractTitle(prompt: string): string | null {
  const titleMatch =
    prompt.match(/title[:\s]+"([^"]+)"/i) ||
    prompt.match(/called[:\s]+"([^"]+)"/i) ||
    prompt.match(/"([^"]+)"\s*title/i);
  return titleMatch ? titleMatch[1] : null;
}

function extractSubtitle(prompt: string): string | null {
  const subtitleMatch =
    prompt.match(/subtitle[:\s]+"([^"]+)"/i) ||
    prompt.match(/description[:\s]+"([^"]+)"/i);
  return subtitleMatch ? subtitleMatch[1] : null;
}

function extractBackground(prompt: string): string | null {
  if (prompt.includes("purple") && prompt.includes("gradient")) {
    return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
  }
  if (prompt.includes("blue") && prompt.includes("gradient")) {
    return "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)";
  }
  if (prompt.includes("gradient")) {
    return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
  }
  return null;
}

function extractButtonText(prompt: string): string | null {
  const buttonMatch =
    prompt.match(/button[:\s]+"([^"]+)"/i) ||
    prompt.match(/"([^"]+)"\s*button/i);
  return buttonMatch ? buttonMatch[1] : null;
}

function extractButtonVariant(prompt: string): string {
  if (prompt.includes("outline")) return "outline";
  if (prompt.includes("ghost")) return "ghost";
  if (prompt.includes("secondary")) return "secondary";
  return "default";
}

function extractLogo(prompt: string): string | null {
  const logoMatch = prompt.match(/logo[:\s]+"([^"]+)"/i);
  return logoMatch ? logoMatch[1] : null;
}

function extractNavLinks(prompt: string): string[] | null {
  const linksMatch = prompt.match(/links?[:\s]+\[([^\]]+)\]/i);
  if (linksMatch) {
    return linksMatch[1]
      .split(",")
      .map((link) => link.trim().replace(/"/g, ""));
  }
  return null;
}

function extractContent(prompt: string): string | null {
  const contentMatch = prompt.match(/content[:\s]+"([^"]+)"/i);
  return contentMatch ? contentMatch[1] : null;
}

function generateExplanation(
  prompt: string,
  components: ComponentNodeData[],
): string {
  const componentTypes = components.map((c) => c.type).join(", ");
  return `I've created ${components.length} component(s) for you: ${componentTypes}. The components are based on your request: "${prompt}". You can drag them around the canvas, resize them, and modify their properties in the properties panel.`;
}

function generateSuggestions(prompt: string): string[] {
  const suggestions = [
    "Try adding some animations or hover effects",
    "Consider adding more color variations",
    "You might want to add responsive breakpoints",
    "Think about adding accessibility features",
  ];

  return suggestions.slice(0, 2); // Return 2 random suggestions
}
