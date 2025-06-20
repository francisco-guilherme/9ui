import React, { useEffect, useRef, useState } from "react";
import { Loader2, Send, Sparkles } from "lucide-react";
import { Button, Input, ScrollArea } from "@nui/ui";

import { useAI } from "../../context/ai-context";
import { useCanvas } from "../../context/canvas-context";
import { ChatMessage } from "./chat-message";
import { QuickPrompts } from "./quick-prompts";

export function ChatInterface() {
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { messages, isGenerating, sendMessage } = useAI();
  const { addNode, currentPageId } = useCanvas();

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isGenerating) return;

    const message = input.trim();
    setInput("");
    await sendMessage(message);
  };

  const handleQuickPrompt = async (prompt: string) => {
    setInput(prompt);
    await sendMessage(prompt);
  };

  const handleAddToCanvas = (components: any[]) => {
    components.forEach((component, index) => {
      const node = {
        id: crypto.randomUUID(),
        type: component.type,
        position: {
          x: 200 + index * 20,
          y: 200 + index * 20,
        },
        size: component.size || { width: 300, height: 200 },
        props: component.props || {},
        pageId: currentPageId,
        zIndex: 1,
        locked: false,
        visible: true,
        generatedFrom: component.prompt,
      };

      addNode(node);
    });
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">AI Design Assistant</h3>
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          Describe what you want to build
        </p>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              onAddToCanvas={handleAddToCanvas}
            />
          ))}

          {isGenerating && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">AI is thinking...</span>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Quick Prompts */}
      {messages.length <= 1 && (
        <div className="p-4 border-t">
          <QuickPrompts onSelect={handleQuickPrompt} />
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe what you want to create..."
            disabled={isGenerating}
            className="flex-1"
          />
          <Button
            type="submit"
            disabled={!input.trim() || isGenerating}
            size="icon"
          >
            {isGenerating ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </form>

        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
          <span>💡 Try:</span>
          <button
            onClick={() =>
              handleQuickPrompt(
                "Create a hero section with a gradient background",
              )
            }
            className="text-primary hover:underline"
          >
            Hero section
          </button>
          <span>•</span>
          <button
            onClick={() =>
              handleQuickPrompt("Make a pricing table with 3 plans")
            }
            className="text-primary hover:underline"
          >
            Pricing table
          </button>
        </div>
      </div>
    </div>
  );
}
