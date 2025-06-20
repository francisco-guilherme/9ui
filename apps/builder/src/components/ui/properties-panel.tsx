import { Eye, EyeOff, Lock, Trash2, Unlock } from "lucide-react";
import {
  Button,
  Input,
  Label,
  ScrollArea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
} from "@nui/ui";

import { useCanvas } from "../../context/canvas-context";

export function PropertiesPanel() {
  const { nodes, selectedNodes, updateNode, deleteNode } = useCanvas();

  const selectedNode =
    selectedNodes.length === 1
      ? nodes.find((node) => node.id === selectedNodes[0])
      : null;

  if (selectedNodes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-6">
        <div className="text-muted-foreground">
          <div className="text-2xl mb-2">🎯</div>
          <h3 className="font-medium mb-1">No Selection</h3>
          <p className="text-sm">Select a component to edit its properties</p>
        </div>
      </div>
    );
  }

  if (selectedNodes.length > 1) {
    return (
      <div className="flex flex-col h-full">
        <div className="p-4 border-b">
          <h3 className="font-semibold">Multiple Selection</h3>
          <p className="text-sm text-muted-foreground">
            {selectedNodes.length} components selected
          </p>
        </div>

        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <Label>Bulk Actions</Label>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  selectedNodes.forEach((id) => {
                    const node = nodes.find((n) => n.id === id);
                    if (node) {
                      updateNode(id, { locked: !node.locked });
                    }
                  });
                }}
              >
                <Lock className="h-4 w-4 mr-2" />
                Toggle Lock
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  selectedNodes.forEach((id) => {
                    const node = nodes.find((n) => n.id === id);
                    if (node) {
                      updateNode(id, { visible: !node.visible });
                    }
                  });
                }}
              >
                <Eye className="h-4 w-4 mr-2" />
                Toggle Visibility
              </Button>
            </div>
          </div>

          <Button
            variant="destructive"
            size="sm"
            onClick={() => {
              selectedNodes.forEach((id) => deleteNode(id));
            }}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete Selected
          </Button>
        </div>
      </div>
    );
  }

  if (!selectedNode) return null;

  const handlePropertyChange = (property: string, value: any) => {
    if (property.startsWith("props.")) {
      const propKey = property.replace("props.", "");
      updateNode(selectedNode.id, {
        props: { ...selectedNode.props, [propKey]: value },
      });
    } else if (property.startsWith("position.")) {
      const posKey = property.replace("position.", "") as "x" | "y";
      updateNode(selectedNode.id, {
        position: { ...selectedNode.position, [posKey]: Number(value) },
      });
    } else if (property.startsWith("size.")) {
      const sizeKey = property.replace("size.", "") as "width" | "height";
      updateNode(selectedNode.id, {
        size: { ...selectedNode.size, [sizeKey]: Number(value) },
      });
    } else {
      updateNode(selectedNode.id, { [property]: value });
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">{selectedNode.type}</h3>
            <p className="text-sm text-muted-foreground">
              ID: {selectedNode.id.slice(0, 8)}...
            </p>
          </div>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                handlePropertyChange("locked", !selectedNode.locked)
              }
            >
              {selectedNode.locked ? (
                <Lock className="h-4 w-4" />
              ) : (
                <Unlock className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                handlePropertyChange("visible", !selectedNode.visible)
              }
            >
              {selectedNode.visible ? (
                <Eye className="h-4 w-4" />
              ) : (
                <EyeOff className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => deleteNode(selectedNode.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Properties */}
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          {/* Transform Properties */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Transform</h4>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label htmlFor="x" className="text-xs">
                  X
                </Label>
                <Input
                  id="x"
                  type="number"
                  value={selectedNode.position.x}
                  onChange={(e) =>
                    handlePropertyChange("position.x", e.target.value)
                  }
                  className="h-8"
                />
              </div>
              <div>
                <Label htmlFor="y" className="text-xs">
                  Y
                </Label>
                <Input
                  id="y"
                  type="number"
                  value={selectedNode.position.y}
                  onChange={(e) =>
                    handlePropertyChange("position.y", e.target.value)
                  }
                  className="h-8"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label htmlFor="width" className="text-xs">
                  Width
                </Label>
                <Input
                  id="width"
                  type="number"
                  value={selectedNode.size.width}
                  onChange={(e) =>
                    handlePropertyChange("size.width", e.target.value)
                  }
                  className="h-8"
                />
              </div>
              <div>
                <Label htmlFor="height" className="text-xs">
                  Height
                </Label>
                <Input
                  id="height"
                  type="number"
                  value={selectedNode.size.height}
                  onChange={(e) =>
                    handlePropertyChange("size.height", e.target.value)
                  }
                  className="h-8"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="zIndex" className="text-xs">
                Z-Index
              </Label>
              <Input
                id="zIndex"
                type="number"
                value={selectedNode.zIndex}
                onChange={(e) =>
                  handlePropertyChange("zIndex", Number(e.target.value))
                }
                className="h-8"
              />
            </div>
          </div>

          <Separator />

          {/* Component-specific Properties */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Properties</h4>

            {/* Render properties based on component type */}
            {selectedNode.type === "text" && (
              <>
                <div>
                  <Label htmlFor="content" className="text-xs">
                    Content
                  </Label>
                  <Input
                    id="content"
                    value={selectedNode.props.content || ""}
                    onChange={(e) =>
                      handlePropertyChange("props.content", e.target.value)
                    }
                    className="h-8"
                  />
                </div>
                <div>
                  <Label htmlFor="fontSize" className="text-xs">
                    Font Size
                  </Label>
                  <Input
                    id="fontSize"
                    value={selectedNode.props.fontSize || "16px"}
                    onChange={(e) =>
                      handlePropertyChange("props.fontSize", e.target.value)
                    }
                    className="h-8"
                  />
                </div>
                <div>
                  <Label htmlFor="color" className="text-xs">
                    Color
                  </Label>
                  <Input
                    id="color"
                    type="color"
                    value={selectedNode.props.color || "#000000"}
                    onChange={(e) =>
                      handlePropertyChange("props.color", e.target.value)
                    }
                    className="h-8"
                  />
                </div>
              </>
            )}

            {selectedNode.type === "button" && (
              <>
                <div>
                  <Label htmlFor="text" className="text-xs">
                    Text
                  </Label>
                  <Input
                    id="text"
                    value={selectedNode.props.text || ""}
                    onChange={(e) =>
                      handlePropertyChange("props.text", e.target.value)
                    }
                    className="h-8"
                  />
                </div>
                <div>
                  <Label htmlFor="variant" className="text-xs">
                    Variant
                  </Label>
                  <Select
                    value={selectedNode.props.variant || "default"}
                    onValueChange={(value) =>
                      handlePropertyChange("props.variant", value)
                    }
                  >
                    <SelectTrigger className="h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default</SelectItem>
                      <SelectItem value="destructive">Destructive</SelectItem>
                      <SelectItem value="outline">Outline</SelectItem>
                      <SelectItem value="secondary">Secondary</SelectItem>
                      <SelectItem value="ghost">Ghost</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}

            {selectedNode.type === "hero-section" && (
              <>
                <div>
                  <Label htmlFor="title" className="text-xs">
                    Title
                  </Label>
                  <Input
                    id="title"
                    value={selectedNode.props.title || ""}
                    onChange={(e) =>
                      handlePropertyChange("props.title", e.target.value)
                    }
                    className="h-8"
                  />
                </div>
                <div>
                  <Label htmlFor="subtitle" className="text-xs">
                    Subtitle
                  </Label>
                  <Input
                    id="subtitle"
                    value={selectedNode.props.subtitle || ""}
                    onChange={(e) =>
                      handlePropertyChange("props.subtitle", e.target.value)
                    }
                    className="h-8"
                  />
                </div>
                <div>
                  <Label htmlFor="background" className="text-xs">
                    Background
                  </Label>
                  <Input
                    id="background"
                    value={selectedNode.props.background || ""}
                    onChange={(e) =>
                      handlePropertyChange("props.background", e.target.value)
                    }
                    className="h-8"
                    placeholder="CSS background value"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
