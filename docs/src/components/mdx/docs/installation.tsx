import { Tab, TabContent, Tabs, TabsList } from "@9ui/ui";

interface InstallationProps {
  children: [React.ReactNode, React.ReactNode];
}

export const Installation = ({
  children: [cliContent, manualContent],
}: InstallationProps) => {
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
