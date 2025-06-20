import { Tab, TabContent, Tabs, TabsList } from "@9ui/ui";
import * as React from "react";

interface ComponentInstallationProps {
  children: [React.ReactNode, React.ReactNode];
}

export const ComponentInstallation = ({
  children: [cliContent, manualContent],
}: ComponentInstallationProps) => {
  return (
    <Tabs className="mt-4 w-full" variant="underline" defaultValue="cli">
      <TabsList>
        <Tab className="w-fit px-4" value="cli">
          CLI
        </Tab>
        <Tab className="w-fit px-4" value="manual">
          Manual
        </Tab>
      </TabsList>
      <TabContent className="border-none p-0" value="cli">
        {cliContent}
      </TabContent>
      <TabContent className="border-none p-0" value="manual">
        {manualContent}
      </TabContent>
    </Tabs>
  );
};
