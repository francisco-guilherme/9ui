import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useCanvas } from "../../context/canvas-context";
import { CanvasGrid } from "./canvas-grid";
import { ComponentNode } from "./component-node";
import { SelectionBox } from "./selection-box";

export function InfiniteCanvas() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const {
    zoom,
    pan,
    nodes,
    selectedNodes,
    currentPageId,
    snapToGrid,
    gridSize,
    setZoom,
    setPan,
    selectNode,
    clearSelection,
  } = useCanvas();

  // Get nodes for current page
  const currentPageNodes = nodes.filter(
    (node) => node.pageId === currentPageId,
  );

  // Handle mouse wheel for zooming
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();

      if (e.ctrlKey || e.metaKey) {
        // Zoom
        const rect = canvasRef.current?.getBoundingClientRect();
        if (!rect) return;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
        const newZoom = Math.max(0.1, Math.min(5, zoom * zoomFactor));

        // Zoom towards mouse position
        const zoomRatio = newZoom / zoom;
        const newPanX = mouseX - (mouseX - pan.x) * zoomRatio;
        const newPanY = mouseY - (mouseY - pan.y) * zoomRatio;

        setZoom(newZoom);
        setPan({ x: newPanX, y: newPanY });
      } else {
        // Pan
        setPan({
          x: pan.x - e.deltaX,
          y: pan.y - e.deltaY,
        });
      }
    },
    [zoom, pan, setZoom, setPan],
  );

  // Handle mouse down for panning
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (e.button === 1 || (e.button === 0 && (e as any).spaceKey)) {
        // Middle mouse or space+click for panning
        setIsDragging(true);
        setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
        e.preventDefault();
      } else if (e.button === 0) {
        // Left click - clear selection if clicking on empty canvas
        if (e.target === canvasRef.current) {
          clearSelection();
        }
      }
    },
    [pan, clearSelection],
  );

  // Handle mouse move for panning
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging) {
        setPan({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        });
      }
    },
    [isDragging, dragStart, setPan],
  );

  // Handle mouse up
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        clearSelection();
      } else if (e.key === "0" && (e.ctrlKey || e.metaKey)) {
        // Reset zoom
        e.preventDefault();
        setZoom(1);
        setPan({ x: 0, y: 0 });
      } else if (e.key === "=" && (e.ctrlKey || e.metaKey)) {
        // Zoom in
        e.preventDefault();
        setZoom(Math.min(5, zoom * 1.2));
      } else if (e.key === "-" && (e.ctrlKey || e.metaKey)) {
        // Zoom out
        e.preventDefault();
        setZoom(Math.max(0.1, zoom / 1.2));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoom, clearSelection, setZoom, setPan]);

  // Snap to grid helper
  const snapToGridIfEnabled = useCallback(
    (value: number) => {
      return snapToGrid ? Math.round(value / gridSize) * gridSize : value;
    },
    [snapToGrid, gridSize],
  );

  return (
    <div
      ref={canvasRef}
      className="relative w-full h-full overflow-hidden bg-muted/20 cursor-grab active:cursor-grabbing"
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Canvas Grid */}
      <CanvasGrid zoom={zoom} pan={pan} gridSize={gridSize} />

      {/* Canvas Content */}
      <motion.div
        className="absolute inset-0 origin-top-left"
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
        }}
        animate={{
          x: pan.x,
          y: pan.y,
          scale: zoom,
        }}
        transition={{
          type: "tween",
          duration: isDragging ? 0 : 0.2,
        }}
      >
        {/* Page Background */}
        <div
          className="absolute bg-background border border-border shadow-lg"
          style={{
            width: 1200, // Default page width
            height: 800, // Default page height
            left: 100,
            top: 100,
          }}
        />

        {/* Component Nodes */}
        <AnimatePresence>
          {currentPageNodes.map((node) => (
            <ComponentNode
              key={node.id}
              node={node}
              isSelected={selectedNodes.includes(node.id)}
              onSelect={(multi) => selectNode(node.id, multi)}
              snapToGrid={snapToGridIfEnabled}
            />
          ))}
        </AnimatePresence>

        {/* Selection Box */}
        {selectedNodes.length > 0 && (
          <SelectionBox
            nodes={currentPageNodes.filter((node) =>
              selectedNodes.includes(node.id),
            )}
          />
        )}
      </motion.div>

      {/* Canvas Info Overlay */}
      <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm border rounded-lg px-3 py-2 text-sm text-muted-foreground">
        Zoom: {Math.round(zoom * 100)}% | Pan: {Math.round(pan.x)},{" "}
        {Math.round(pan.y)}
      </div>

      {/* Canvas Controls Overlay */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button
          onClick={() => setZoom(Math.min(5, zoom * 1.2))}
          className="w-8 h-8 bg-background border rounded flex items-center justify-center hover:bg-muted"
        >
          +
        </button>
        <button
          onClick={() => setZoom(Math.max(0.1, zoom / 1.2))}
          className="w-8 h-8 bg-background border rounded flex items-center justify-center hover:bg-muted"
        >
          −
        </button>
        <button
          onClick={() => {
            setZoom(1);
            setPan({ x: 0, y: 0 });
          }}
          className="w-8 h-8 bg-background border rounded flex items-center justify-center hover:bg-muted text-xs"
        >
          ⌂
        </button>
      </div>
    </div>
  );
}
