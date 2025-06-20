import React, { createContext, useCallback, useContext, useState } from "react";

import type {
  AIGenerationRequest,
  AIGenerationResponse,
  ChatMessage,
} from "../types";
import { generateComponentFromPrompt } from "../utils/ai-generation";

interface AIContextValue {
  // Chat state
  messages: ChatMessage[];
  isGenerating: boolean;

  // AI operations
  generateComponent: (
    request: AIGenerationRequest,
  ) => Promise<AIGenerationResponse>;
  sendMessage: (content: string) => Promise<void>;
  clearChat: () => void;

  // Component operations
  modifyComponent: (
    nodeId: string,
    prompt: string,
  ) => Promise<AIGenerationResponse>;
  explainComponent: (nodeId: string) => Promise<string>;
  suggestImprovements: (nodeId: string) => Promise<string[]>;
}

const AIContext = createContext<AIContextValue | null>(null);

interface AIProviderProps {
  children: React.ReactNode;
}

export function AIProvider({ children }: AIProviderProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      type: "assistant",
      content:
        "Hi! I'm your AI design assistant. Describe what you want to build and I'll create it for you. Try something like 'Create a hero section with a purple gradient background' or 'Make a pricing table with 3 columns'.",
      timestamp: new Date(),
    },
  ]);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateComponent = useCallback(
    async (request: AIGenerationRequest): Promise<AIGenerationResponse> => {
      setIsGenerating(true);

      try {
        // For demo purposes, use the mock AI generation
        // In production, you would use the MCP client here
        const response = await generateComponentFromPrompt(request);
        return response;
      } catch (error) {
        console.error("Component generation failed:", error);
        return {
          success: false,
          components: [],
          error:
            error instanceof Error ? error.message : "Unknown error occurred",
        };
      } finally {
        setIsGenerating(false);
      }
    },
    [],
  );

  const sendMessage = useCallback(
    async (content: string) => {
      const userMessage: ChatMessage = {
        id: crypto.randomUUID(),
        type: "user",
        content,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsGenerating(true);

      try {
        // Generate AI response
        const response = await generateComponent({
          prompt: content,
          context: {
            pageId: "default", // This should come from canvas context
          },
        });

        const assistantMessage: ChatMessage = {
          id: crypto.randomUUID(),
          type: "assistant",
          content:
            response.explanation || "I've created the component for you!",
          timestamp: new Date(),
          metadata: {
            generatedComponents: response.components.map((c) => c.id),
            actions: response.success
              ? [
                  {
                    type: "generate",
                    label: "Add to Canvas",
                    data: { components: response.components },
                  },
                ]
              : [],
          },
        };

        setMessages((prev) => [...prev, assistantMessage]);
      } catch (error) {
        const errorMessage: ChatMessage = {
          id: crypto.randomUUID(),
          type: "assistant",
          content:
            "Sorry, I encountered an error while generating your component. Please try again.",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsGenerating(false);
      }
    },
    [generateComponent],
  );

  const clearChat = useCallback(() => {
    setMessages([
      {
        id: "welcome",
        type: "assistant",
        content:
          "Hi! I'm your AI design assistant. What would you like to create?",
        timestamp: new Date(),
      },
    ]);
  }, []);

  const modifyComponent = useCallback(
    async (_nodeId: string, prompt: string): Promise<AIGenerationResponse> => {
      // Implementation for modifying existing components
      return generateComponent({
        prompt: `Modify the component: ${prompt}`,
        context: {
          pageId: "default",
          // Add existing component data here
        },
      });
    },
    [generateComponent],
  );

  const explainComponent = useCallback(
    async (_nodeId: string): Promise<string> => {
      try {
        // Mock implementation for demo
        return "This component creates a user interface element.";
      } catch (error) {
        console.error("Component explanation failed:", error);
        return "Unable to explain this component.";
      }
    },
    [],
  );

  const suggestImprovements = useCallback(
    async (_nodeId: string): Promise<string[]> => {
      try {
        // Mock implementation for demo
        return [
          "Try adding some animations or hover effects",
          "Consider adding more color variations",
        ];
      } catch (error) {
        console.error("Improvement suggestions failed:", error);
        return [];
      }
    },
    [],
  );

  const value: AIContextValue = {
    messages,
    isGenerating,
    generateComponent,
    sendMessage,
    clearChat,
    modifyComponent,
    explainComponent,
    suggestImprovements,
  };

  return <AIContext.Provider value={value}>{children}</AIContext.Provider>;
}

export function useAI() {
  const context = useContext(AIContext);
  if (!context) {
    throw new Error("useAI must be used within an AIProvider");
  }
  return context;
}
