import { Code, Globe, Info, Terminal } from "lucide-react";
import {
  Alert,
  AlertDescription,
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

export function MCPDocs() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">MCP Client Documentation</h1>
        <p className="text-muted-foreground">
          Complete guide to using the Model Context Protocol client
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="browser">Browser</TabsTrigger>
          <TabsTrigger value="nodejs">Node.js</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5" />
                What is the MCP Client?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The MCP Client is a TypeScript/React library that implements the
                Model Context Protocol, allowing applications to connect to MCP
                servers and access their tools, resources, and prompts.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    Browser Environment
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>• WebSocket transport</li>
                    <li>• HTTP/REST transport</li>
                    <li>• Real-time updates</li>
                    <li>• React components</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Terminal className="h-4 w-4" />
                    Node.js Environment
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>• STDIO transport</li>
                    <li>• Process management</li>
                    <li>• Local server spawning</li>
                    <li>• Full MCP protocol</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">🔧 Tool Execution</h4>
                  <p className="text-sm text-muted-foreground">
                    Discover and execute tools from connected MCP servers with
                    full type safety.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">📚 Resource Access</h4>
                  <p className="text-sm text-muted-foreground">
                    Read files, databases, and other resources exposed by MCP
                    servers.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">💬 Prompt Management</h4>
                  <p className="text-sm text-muted-foreground">
                    Access and execute predefined prompts with dynamic
                    parameters.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="browser" className="space-y-4">
          <Alert variant="info">
            <Globe className="h-4 w-4" />
            <AlertDescription>
              Browser environments require WebSocket or HTTP transports. STDIO
              transport is not available in browsers.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>Browser Setup</CardTitle>
              <CardDescription>
                Setting up the MCP client for browser environments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Installation:</h4>
                <pre className="text-xs bg-muted p-3 rounded overflow-auto">
                  {`npm install @nui/mcp-client`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2">Basic Setup:</h4>
                <pre className="text-xs bg-muted p-3 rounded overflow-auto">
                  {`import { MCPClientProvider, useMCPClient } from "@nui/mcp-client";

function App() {
  return (
    <MCPClientProvider config={{ 
      name: "My App", 
      version: "1.0.0" 
    }}>
      <MyComponent />
    </MCPClientProvider>
  );
}`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2">WebSocket Connection:</h4>
                <pre className="text-xs bg-muted p-3 rounded overflow-auto">
                  {`const { connectToServer } = useMCPClient();

await connectToServer({
  id: "my-server",
  name: "My MCP Server",
  url: "wss://my-server.com/mcp",
  transport: "websocket",
  enabled: true,
});`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nodejs" className="space-y-4">
          <Alert variant="warning">
            <Terminal className="h-4 w-4" />
            <AlertDescription>
              Node.js environments support all transport types including STDIO
              for local process communication.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>Node.js Setup</CardTitle>
              <CardDescription>
                Setting up the MCP client for Node.js environments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">STDIO Connection:</h4>
                <pre className="text-xs bg-muted p-3 rounded overflow-auto">
                  {`import { createMCPClient } from "@nui/mcp-client";

const client = createMCPClient({
  name: "My Node App",
  version: "1.0.0"
});

await client.connectToServer({
  id: "local-server",
  name: "Local Python Server",
  command: "python",
  args: ["server.py"],
  env: { API_KEY: "your-key" },
  transport: "stdio",
  enabled: true,
});`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2">Tool Execution:</h4>
                <pre className="text-xs bg-muted p-3 rounded overflow-auto">
                  {`const result = await client.callTool("get_weather", {
  location: "San Francisco",
  units: "celsius"
});

if (result.success) {
  console.log("Weather:", result.result);
} else {
  console.error("Error:", result.error);
}`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="examples" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Complete Examples
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">React Component with MCP:</h4>
                <pre className="text-xs bg-muted p-3 rounded overflow-auto">
                  {`import { useMCPClient } from "@nui/mcp-client";

function WeatherWidget() {
  const { callTool, allTools } = useMCPClient();
  const [weather, setWeather] = useState(null);

  const getWeather = async (city: string) => {
    const result = await callTool("get_weather", { location: city });
    if (result.success) {
      setWeather(result.result);
    }
  };

  return (
    <div>
      <h3>Weather Tools: {allTools.length}</h3>
      <button onClick={() => getWeather("London")}>
        Get London Weather
      </button>
      {weather && <div>{JSON.stringify(weather)}</div>}
    </div>
  );
}`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2">Server Configuration:</h4>
                <pre className="text-xs bg-muted p-3 rounded overflow-auto">
                  {`// Example server configurations
const servers = [
  {
    id: "weather-server",
    name: "Weather API Server",
    command: "python",
    args: ["weather_server.py"],
    env: { WEATHER_API_KEY: process.env.WEATHER_API_KEY },
    transport: "stdio",
    enabled: true,
  },
  {
    id: "file-server",
    name: "File System Server",
    url: "wss://localhost:8080/mcp",
    transport: "websocket",
    enabled: true,
  }
];`}
                </pre>
              </div>

              <div>
                <h4 className="font-medium mb-2">Error Handling:</h4>
                <pre className="text-xs bg-muted p-3 rounded overflow-auto">
                  {`client.on("error", (error, serverId) => {
  console.error(\`Server \${serverId} error:\`, error);
});

client.on("connectionStatusChanged", (status, serverId) => {
  console.log(\`Server \${serverId} status: \${status}\`);
});

try {
  await client.connectToServer(serverConfig);
} catch (error) {
  console.error("Failed to connect:", error);
}`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
