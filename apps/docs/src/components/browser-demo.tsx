import React, { useState } from "react";
import {
  AlertCircle,
  CheckCircle,
  Code,
  Info,
  Play,
  Server,
  Wrench,
} from "lucide-react";
import {
  Alert,
  AlertDescription,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@nui/ui";

export function BrowserDemo() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [lastResult, setLastResult] = useState<any>(null);
  const [mockConnected, setMockConnected] = useState(false);

  const handleConnectMock = async () => {
    setIsConnecting(true);
    setMockConnected(false);

    try {
      // Simulate connection delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For browser demo, we'll simulate a successful connection
      // In a real implementation, this would connect to an actual MCP server
      setMockConnected(true);

      // Simulate adding mock tools
      setLastResult({
        success: true,
        message:
          "Successfully connected to mock echo server! In a real implementation, this would connect to an actual MCP server via WebSocket or HTTP.",
        tools: [
          {
            name: "echo",
            description: "Echo back the input text",
            inputSchema: {
              type: "object",
              properties: {
                text: { type: "string", description: "Text to echo back" },
              },
              required: ["text"],
            },
          },
        ],
      });
    } catch (error) {
      console.error("Failed to connect:", error);
      setLastResult({
        success: false,
        error: error instanceof Error ? error.message : String(error),
      });
    } finally {
      setIsConnecting(false);
    }
  };

  const handleTestEcho = async () => {
    if (!mockConnected) {
      setLastResult({
        success: false,
        error: "Please connect to the mock server first",
      });
      return;
    }

    try {
      // Simulate tool execution
      await new Promise((resolve) => setTimeout(resolve, 500));

      const result = {
        success: true,
        result: "Echo: Hello from MCP Client! (This is a simulated response)",
        timestamp: new Date(),
        toolCalls: [
          {
            id: "call_1",
            name: "echo",
            arguments: { text: "Hello from MCP Client!" },
            timestamp: new Date(),
          },
        ],
        toolResults: [
          {
            id: "result_1",
            toolCallId: "call_1",
            content:
              "Echo: Hello from MCP Client! (This is a simulated response)",
            isError: false,
            timestamp: new Date(),
          },
        ],
      };

      setLastResult(result);
    } catch (error) {
      console.error("Failed to call tool:", error);
      setLastResult({
        success: false,
        error: error instanceof Error ? error.message : String(error),
      });
    }
  };

  const handleDisconnect = () => {
    setMockConnected(false);
    setLastResult(null);
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">MCP Client Browser Demo</h1>
        <p className="text-muted-foreground">
          Demonstration of the Model Context Protocol client capabilities
          (Browser-compatible version)
        </p>
      </div>

      <Alert variant="info">
        <Info className="h-4 w-4" />
        <AlertDescription>
          <strong>Note:</strong> This is a browser-compatible demo that
          simulates MCP functionality. In a real implementation, the MCP client
          would connect to actual servers via WebSocket, HTTP, or other
          browser-compatible transports. The STDIO transport shown in the full
          demo requires a Node.js environment.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="connect">Connect</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5" />
                What is MCP?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The Model Context Protocol (MCP) is an open protocol that
                standardizes how applications provide context to LLMs. This
                client allows you to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Connect to MCP servers that expose tools and resources</li>
                <li>Discover available tools automatically</li>
                <li>Execute tools with parameters</li>
                <li>Access resources like files and databases</li>
                <li>Use prompts defined by servers</li>
              </ul>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {mockConnected ? 1 : 0}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Mock Servers
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {mockConnected ? 1 : 0}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Available Tools
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {mockConnected ? 1 : 0}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Active Connections
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="connect" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5" />
                Connect to Mock Server
              </CardTitle>
              <CardDescription>
                Connect to a simulated MCP server to test the client
                functionality
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {!mockConnected ? (
                <div className="space-y-4">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      This will simulate connecting to an MCP server. In a real
                      browser implementation, this would connect via WebSocket,
                      HTTP, or other browser-compatible transport.
                    </AlertDescription>
                  </Alert>

                  <Button
                    onClick={handleConnectMock}
                    disabled={isConnecting}
                    className="w-full"
                  >
                    {isConnecting ? "Connecting..." : "Connect to Mock Server"}
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Mock Echo Server</p>
                      <p className="text-sm text-muted-foreground">
                        1 tool available
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="default">Connected</Badge>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={handleDisconnect}
                      >
                        Disconnect
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tools" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5" />
                Test Tools
              </CardTitle>
              <CardDescription>
                Execute tools from connected servers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockConnected ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Available Tools:</h4>
                    <div className="flex items-center justify-between p-2 border rounded">
                      <div>
                        <p className="font-medium text-sm">echo</p>
                        <p className="text-xs text-muted-foreground">
                          Echo back the input text
                        </p>
                      </div>
                      <Button size="sm" onClick={handleTestEcho}>
                        <Play className="h-3 w-3 mr-1" />
                        Test
                      </Button>
                    </div>
                  </div>

                  {lastResult && (
                    <div className="space-y-2">
                      <h4 className="font-medium">Last Result:</h4>
                      <div className="p-3 bg-muted rounded">
                        <div className="flex items-center gap-2 mb-2">
                          {lastResult.success ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <AlertCircle className="h-4 w-4 text-red-500" />
                          )}
                          <span className="text-sm font-medium">
                            {lastResult.success ? "Success" : "Error"}
                          </span>
                        </div>
                        <pre className="text-sm overflow-auto">
                          {lastResult.success
                            ? typeof lastResult.result === "string"
                              ? lastResult.result
                              : JSON.stringify(lastResult, null, 2)
                            : lastResult.error}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    Connect to the mock server first to see available tools.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Code Examples
              </CardTitle>
              <CardDescription>
                Learn how to use the MCP client in your own applications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Basic Setup:</h4>
                  <pre className="text-xs bg-muted p-3 rounded overflow-auto">
                    {`import { MCPClientProvider, useMCPClient } from "@nui/mcp-client";

function App() {
  return (
    <MCPClientProvider config={{ name: "My Client", version: "1.0.0" }}>
      <MyComponent />
    </MCPClientProvider>
  );
}`}
                  </pre>
                </div>

                <div>
                  <h4 className="font-medium mb-2">
                    Browser-Compatible Connection:
                  </h4>
                  <pre className="text-xs bg-muted p-3 rounded overflow-auto">
                    {`// For browser environments, use WebSocket or HTTP transports
const { connectToServer } = useMCPClient();

await connectToServer({
  id: "my-server",
  name: "My Server",
  url: "wss://my-mcp-server.com/mcp",
  transport: "websocket", // or "http"
  enabled: true,
});`}
                  </pre>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Execute Tool:</h4>
                  <pre className="text-xs bg-muted p-3 rounded overflow-auto">
                    {`const { callTool } = useMCPClient();

const result = await callTool("tool_name", {
  param1: "value1",
  param2: "value2",
});

if (result.success) {
  console.log("Result:", result.result);
} else {
  console.error("Error:", result.error);
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
