import React from "react";
import { Tabs, TabsContent, TabsList } from "@nui/core";

interface InstallationProps {
  children: React.ReactNode;
}

export const Installation = ({ children }: InstallationProps) => {
  return (
    <Tabs className="mt-4 w-full" variant="underline" defaultValue="cli">
      <TabsList>
        <Tabs className="w-fit px-4" value="cli">
          CLI
        </Tabs>
      </TabsList>
      <TabsContent className="border-none p-0" value="cli">
        {children}
      </TabsContent>
    </Tabs>
  );
};
