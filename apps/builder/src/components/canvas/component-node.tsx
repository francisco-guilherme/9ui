import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";

import { useCanvas } from "../../context/canvas-context";
import type { ComponentNodeData } from "../../types";
import { ComponentRenderer } from "./component-renderer";

interface ComponentNodeProps {
  node: ComponentNodeData;
  isSelected: boolean;
  onSelect: (multi: boolean) => void;
  snapToGrid: (value: number) => number;
}

export function ComponentNode({
  node,
  isSelected,
  onSelect,
  snapToGrid,
}: ComponentNodeProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

  const { updateNode } = useCanvas();

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();

      if (e.button === 0) {
        // Left click
        onSelect(e.ctrlKey || e.metaKey);

        if (!node.locked) {
          setIsDragging(true);
          setDragStart({ x: e.clientX, y: e.clientY });
          setInitialPosition({ x: node.position.x, y: node.position.y });
        }
      }
    },
    [node, onSelect],
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging && !node.locked) {
        const deltaX = e.clientX - dragStart.x;
        const deltaY = e.clientY - dragStart.y;

        const newX = snapToGrid(initialPosition.x + deltaX);
        const newY = snapToGrid(initialPosition.y + deltaY);

        updateNode(node.id, {
          position: { x: newX, y: newY },
        });
      }
    },
    [isDragging, dragStart, initialPosition, node, snapToGrid, updateNode],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  if (!node.visible) return null;

  return (
    <motion.div
      className={`absolute cursor-pointer ${
        isSelected ? "ring-2 ring-primary ring-offset-2" : ""
      } ${isDragging ? "cursor-grabbing" : "cursor-grab"} ${
        node.locked ? "opacity-50 cursor-not-allowed" : ""
      }`}
      style={{
        left: node.position.x,
        top: node.position.y,
        width: node.size.width,
        height: node.size.height,
        zIndex: node.zIndex,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{ scale: isSelected ? 1 : 1.02 }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Component Content */}
      <div className="w-full h-full">
        <ComponentRenderer node={node} />
      </div>

      {/* Selection Handles */}
      {isSelected && !node.locked && (
        <>
          {/* Corner resize handles */}
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary border border-background rounded-sm cursor-nw-resize" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary border border-background rounded-sm cursor-ne-resize" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary border border-background rounded-sm cursor-sw-resize" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary border border-background rounded-sm cursor-se-resize" />

          {/* Edge resize handles */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary border border-background rounded-sm cursor-n-resize" />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary border border-background rounded-sm cursor-s-resize" />
          <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary border border-background rounded-sm cursor-w-resize" />
          <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary border border-background rounded-sm cursor-e-resize" />
        </>
      )}

      {/* Component Label */}
      {isSelected && (
        <div className="absolute -top-6 left-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded whitespace-nowrap">
          {node.type}
          {node.generatedFrom && <span className="ml-1 opacity-70">✨</span>}
        </div>
      )}
    </motion.div>
  );
}
