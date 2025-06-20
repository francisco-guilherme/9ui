import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "@nui/core";

import { Icons } from "../icons";

export function Content() {
  return (
    <div className="flex-1 bg-gray-50 relative flex items-center justify-center p-8">
      {/* Main Content */}
      <div className="w-full max-w-md">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Welcome back! Please sign in to continue.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="bora@9ui.dev" />
            </div>

            <Button className="w-full">Sign in with email</Button>

            <div className="flex items-center gap-x-2">
              <span className="bg-border h-px w-full" />
              <span className="text-muted-foreground text-xs">OR</span>
              <span className="bg-border h-px w-full" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline">
                <Icons.google />
                Continue with Google
              </Button>
              <Button variant="outline">
                <Icons.gitHub />
                Continue with GitHub
              </Button>
            </div>
          </CardContent>
          <CardFooter className="text-muted-foreground inline-block text-center text-sm">
            By continuing, you agree to our{" "}
            <span className="text-foreground cursor-pointer hover:underline">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-foreground cursor-pointer hover:underline">
              Privacy Policy
            </span>
            .
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
