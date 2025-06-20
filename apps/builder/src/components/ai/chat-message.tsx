import React from "react";
import { Bot, Copy, Plus, ThumbsDown, ThumbsUp, User } from "lucide-react";
import { Badge, Button } from "@nui/ui";

import type { ChatMessage as ChatMessageType } from "../../types";

interface ChatMessageProps {
  message: ChatMessageType;
  onAddToCanvas?: (components: any[]) => void;
}

export function ChatMessage({ message, onAddToCanvas }: ChatMessageProps) {
  const isUser = message.type === "user";
  const isSystem = message.type === "system";

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(message.content);
  };

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}>
      {/* Avatar */}
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser
            ? "bg-primary text-primary-foreground"
            : isSystem
              ? "bg-muted text-muted-foreground"
              : "bg-secondary text-secondary-foreground"
        }`}
      >
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>

      {/* Message Content */}
      <div className={`flex-1 max-w-[80%] ${isUser ? "text-right" : ""}`}>
        <div
          className={`inline-block p-3 rounded-lg ${
            isUser ? "bg-primary text-primary-foreground ml-auto" : "bg-muted"
          }`}
        >
          <div className="text-sm whitespace-pre-wrap">{message.content}</div>

          {/* Generated Components Badge */}
          {message.metadata?.generatedComponents &&
            message.metadata.generatedComponents.length > 0 && (
              <div className="mt-2 pt-2 border-t border-current/20">
                <Badge variant="secondary" className="text-xs">
                  ✨ Generated {message.metadata.generatedComponents.length}{" "}
                  component(s)
                </Badge>
              </div>
            )}
        </div>

        {/* Actions */}
        {message.metadata?.actions && message.metadata.actions.length > 0 && (
          <div className="mt-2 flex gap-2">
            {message.metadata.actions.map((action, index) => (
              <Button
                key={index}
                size="sm"
                variant="outline"
                onClick={() => {
                  if (action.type === "generate" && onAddToCanvas) {
                    onAddToCanvas(action.data.components);
                  }
                }}
                className="text-xs"
              >
                <Plus className="h-3 w-3 mr-1" />
                {action.label}
              </Button>
            ))}
          </div>
        )}

        {/* Message Actions */}
        {!isUser && (
          <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              size="sm"
              variant="ghost"
              onClick={handleCopyMessage}
              className="h-6 w-6 p-0"
            >
              <Copy className="h-3 w-3" />
            </Button>
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
              <ThumbsUp className="h-3 w-3" />
            </Button>
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
              <ThumbsDown className="h-3 w-3" />
            </Button>
          </div>
        )}

        {/* Timestamp */}
        <div
          className={`text-xs text-muted-foreground mt-1 ${
            isUser ? "text-right" : ""
          }`}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
}
