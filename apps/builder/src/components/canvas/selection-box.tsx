import React from "react";

import type { ComponentNodeData } from "../../types";

interface SelectionBoxProps {
  nodes: ComponentNodeData[];
}

export function SelectionBox({ nodes }: SelectionBoxProps) {
  if (nodes.length === 0) return null;

  // Calculate bounding box for all selected nodes
  const bounds = nodes.reduce(
    (acc, node) => ({
      left: Math.min(acc.left, node.position.x),
      top: Math.min(acc.top, node.position.y),
      right: Math.max(acc.right, node.position.x + node.size.width),
      bottom: Math.max(acc.bottom, node.position.y + node.size.height),
    }),
    {
      left: Infinity,
      top: Infinity,
      right: -Infinity,
      bottom: -Infinity,
    },
  );

  const width = bounds.right - bounds.left;
  const height = bounds.bottom - bounds.top;

  return (
    <div
      className="absolute pointer-events-none border-2 border-primary border-dashed"
      style={{
        left: bounds.left - 2,
        top: bounds.top - 2,
        width: width + 4,
        height: height + 4,
      }}
    >
      {/* Selection info */}
      <div className="absolute -top-8 left-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded whitespace-nowrap">
        {nodes.length} selected
      </div>
    </div>
  );
}
