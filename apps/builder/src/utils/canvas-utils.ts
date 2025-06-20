import type { ComponentNodeData } from "../types";

export const canvasUtils = {
  /**
   * Snap a value to the grid
   */
  snapToGrid(value: number, gridSize: number): number {
    return Math.round(value / gridSize) * gridSize;
  },

  /**
   * Calculate bounding box for multiple nodes
   */
  getBoundingBox(nodes: ComponentNodeData[]) {
    if (nodes.length === 0) {
      return { left: 0, top: 0, right: 0, bottom: 0, width: 0, height: 0 };
    }

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

    return {
      ...bounds,
      width: bounds.right - bounds.left,
      height: bounds.bottom - bounds.top,
    };
  },

  /**
   * Check if a point is inside a node
   */
  isPointInNode(
    point: { x: number; y: number },
    node: ComponentNodeData,
  ): boolean {
    return (
      point.x >= node.position.x &&
      point.x <= node.position.x + node.size.width &&
      point.y >= node.position.y &&
      point.y <= node.position.y + node.size.height
    );
  },

  /**
   * Find nodes at a specific point
   */
  getNodesAtPoint(
    point: { x: number; y: number },
    nodes: ComponentNodeData[],
  ): ComponentNodeData[] {
    return nodes
      .filter((node) => this.isPointInNode(point, node) && node.visible)
      .sort((a, b) => b.zIndex - a.zIndex); // Higher z-index first
  },

  /**
   * Check if two nodes overlap
   */
  doNodesOverlap(nodeA: ComponentNodeData, nodeB: ComponentNodeData): boolean {
    return !(
      nodeA.position.x + nodeA.size.width < nodeB.position.x ||
      nodeB.position.x + nodeB.size.width < nodeA.position.x ||
      nodeA.position.y + nodeA.size.height < nodeB.position.y ||
      nodeB.position.y + nodeB.size.height < nodeA.position.y
    );
  },

  /**
   * Get the center point of a node
   */
  getNodeCenter(node: ComponentNodeData): { x: number; y: number } {
    return {
      x: node.position.x + node.size.width / 2,
      y: node.position.y + node.size.height / 2,
    };
  },

  /**
   * Calculate distance between two points
   */
  getDistance(
    pointA: { x: number; y: number },
    pointB: { x: number; y: number },
  ): number {
    const dx = pointB.x - pointA.x;
    const dy = pointB.y - pointA.y;
    return Math.sqrt(dx * dx + dy * dy);
  },

  /**
   * Align nodes to a specific edge
   */
  alignNodes(
    nodes: ComponentNodeData[],
    alignment: "left" | "center" | "right" | "top" | "middle" | "bottom",
  ): Partial<ComponentNodeData>[] {
    if (nodes.length < 2) return [];

    const bounds = this.getBoundingBox(nodes);

    return nodes.map((node) => {
      const updates: Partial<ComponentNodeData> = {};

      switch (alignment) {
        case "left":
          updates.position = { ...node.position, x: bounds.left };
          break;
        case "center":
          updates.position = {
            ...node.position,
            x: bounds.left + bounds.width / 2 - node.size.width / 2,
          };
          break;
        case "right":
          updates.position = {
            ...node.position,
            x: bounds.right - node.size.width,
          };
          break;
        case "top":
          updates.position = { ...node.position, y: bounds.top };
          break;
        case "middle":
          updates.position = {
            ...node.position,
            y: bounds.top + bounds.height / 2 - node.size.height / 2,
          };
          break;
        case "bottom":
          updates.position = {
            ...node.position,
            y: bounds.bottom - node.size.height,
          };
          break;
      }

      return updates;
    });
  },

  /**
   * Distribute nodes evenly
   */
  distributeNodes(
    nodes: ComponentNodeData[],
    direction: "horizontal" | "vertical",
  ): Partial<ComponentNodeData>[] {
    if (nodes.length < 3) return [];

    const sortedNodes = [...nodes].sort((a, b) => {
      return direction === "horizontal"
        ? a.position.x - b.position.x
        : a.position.y - b.position.y;
    });

    const first = sortedNodes[0];
    const last = sortedNodes[sortedNodes.length - 1];

    const totalSpace =
      direction === "horizontal"
        ? last.position.x + last.size.width - first.position.x
        : last.position.y + last.size.height - first.position.y;

    const totalNodeSize = sortedNodes.reduce((sum, node) => {
      return (
        sum + (direction === "horizontal" ? node.size.width : node.size.height)
      );
    }, 0);

    const spacing = (totalSpace - totalNodeSize) / (sortedNodes.length - 1);

    let currentPos =
      direction === "horizontal" ? first.position.x : first.position.y;

    return sortedNodes.map((node) => {
      const updates: Partial<ComponentNodeData> = {
        position:
          direction === "horizontal"
            ? { ...node.position, x: currentPos }
            : { ...node.position, y: currentPos },
      };

      currentPos +=
        (direction === "horizontal" ? node.size.width : node.size.height) +
        spacing;

      return updates;
    });
  },

  /**
   * Generate a unique position for a new node to avoid overlaps
   */
  findEmptyPosition(
    existingNodes: ComponentNodeData[],
    nodeSize: { width: number; height: number },
    pageSize: { width: number; height: number } = { width: 1200, height: 800 },
  ): { x: number; y: number } {
    const gridSize = 20;
    const margin = 50;

    // Try positions in a grid pattern
    for (
      let y = margin;
      y < pageSize.height - nodeSize.height - margin;
      y += gridSize
    ) {
      for (
        let x = margin;
        x < pageSize.width - nodeSize.width - margin;
        x += gridSize
      ) {
        const testNode: ComponentNodeData = {
          id: "test",
          type: "test",
          position: { x, y },
          size: nodeSize,
          props: {},
          pageId: "test",
          zIndex: 1,
          locked: false,
          visible: true,
        };

        const hasOverlap = existingNodes.some((node) =>
          this.doNodesOverlap(testNode, node),
        );

        if (!hasOverlap) {
          return { x, y };
        }
      }
    }

    // Fallback: place at a random position
    return {
      x:
        Math.random() * (pageSize.width - nodeSize.width - margin * 2) + margin,
      y:
        Math.random() * (pageSize.height - nodeSize.height - margin * 2) +
        margin,
    };
  },

  /**
   * Convert canvas coordinates to screen coordinates
   */
  canvasToScreen(
    canvasPoint: { x: number; y: number },
    zoom: number,
    pan: { x: number; y: number },
  ): { x: number; y: number } {
    return {
      x: canvasPoint.x * zoom + pan.x,
      y: canvasPoint.y * zoom + pan.y,
    };
  },

  /**
   * Convert screen coordinates to canvas coordinates
   */
  screenToCanvas(
    screenPoint: { x: number; y: number },
    zoom: number,
    pan: { x: number; y: number },
  ): { x: number; y: number } {
    return {
      x: (screenPoint.x - pan.x) / zoom,
      y: (screenPoint.y - pan.y) / zoom,
    };
  },
};
