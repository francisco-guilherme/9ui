import {
  Button,
  Input,
  Label,
  Tab,
  TabContent,
  Tabs,
  TabsList,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@9ui/ui";

export default function TabsUnderline() {
  return (
    <Tabs className="w-full max-w-96" defaultValue="login">
      <TabsList>
        <Tab value="login">Login</Tab>
        <Tooltip>
          <TooltipTrigger
            className="w-full"
            render={(props) => (
              <div {...props}>
                <Tab disabled>Sign up</Tab>
              </div>
            )}
          />
          <TooltipContent className="w-64">
            <span>
              Sign ups are temporarily disabled. Please check back later.
            </span>
          </TooltipContent>
        </Tooltip>
      </TabsList>
      <TabContent value="login" className="space-y-4">
        <div className="flex flex-col gap-2">
          <h4 className="text-2xl font-bold">Login</h4>
          <p className="text-sm text-muted-foreground">
            Login to your account to continue
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Email" type="email" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="Password" type="password" />
        </div>
        <Button className="w-full">Login</Button>
      </TabContent>
    </Tabs>
  );
}
