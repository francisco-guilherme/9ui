interface CanvasGridProps {
  zoom: number;
  pan: { x: number; y: number };
  gridSize: number;
  visible?: boolean;
}

export function CanvasGrid({
  zoom,
  pan,
  gridSize,
  visible = true,
}: CanvasGridProps) {
  if (!visible) return null;

  const scaledGridSize = gridSize * zoom;

  // Don't show grid if it's too small or too large
  if (scaledGridSize < 5 || scaledGridSize > 100) return null;

  const offsetX = pan.x % scaledGridSize;
  const offsetY = pan.y % scaledGridSize;

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full">
        <defs>
          <pattern
            id="grid"
            width={scaledGridSize}
            height={scaledGridSize}
            patternUnits="userSpaceOnUse"
            x={offsetX}
            y={offsetY}
          >
            <path
              d={`M ${scaledGridSize} 0 L 0 0 0 ${scaledGridSize}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-border/30"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
