import { Tab, TabContent, Tabs, TabsList } from "@9ui/ui";
import React from "react";

import { CodeBar } from "../code/code-bar";

interface CommandBlockProps {
  npmCommand?: string;
  yarnCommand?: string;
  pnpmCommand?: string;
  bunCommand?: string;
}

const TABS = ["npm", "yarn", "pnpm", "bun"] as const;
type TabKey = (typeof TABS)[number];

/**
 * Generate equivalent commands for different package managers
 */
const generateEquivalentCommands = (base?: string): Record<TabKey, string> => {
  if (!base) return { npm: "", yarn: "", pnpm: "", bun: "" };

  const trimmed = base.trim();

  if (trimmed.startsWith("npm install")) {
    const args = trimmed.replace("npm install", "").trim();
    const suffix = args ? ` ${args}` : "";
    return {
      npm: trimmed,
      yarn: `yarn add${suffix}`,
      pnpm: `pnpm add${suffix}`,
      bun: `bun add${suffix}`,
    };
  }

  if (trimmed.startsWith("npx")) {
    const args = trimmed.replace("npx", "").trim();
    return {
      npm: trimmed,
      yarn: `yarn dlx ${args}`,
      pnpm: `pnpm dlx ${args}`,
      bun: `bunx ${args}`,
    };
  }

  return {
    npm: trimmed,
    yarn: trimmed,
    pnpm: trimmed,
    bun: trimmed,
  };
};

export const CommandBlock: React.FC<CommandBlockProps> = (props) => {
  const commands = React.useMemo(() => {
    const base =
      props.npmCommand ||
      props.yarnCommand ||
      props.pnpmCommand ||
      props.bunCommand;

    const generated = generateEquivalentCommands(base);

    return {
      npm: props.npmCommand ?? generated.npm,
      yarn: props.yarnCommand ?? generated.yarn,
      pnpm: props.pnpmCommand ?? generated.pnpm,
      bun: props.bunCommand ?? generated.bun,
    };
  }, [
    props.npmCommand,
    props.yarnCommand,
    props.pnpmCommand,
    props.bunCommand,
  ]);

  const [activeTab, setActiveTab] = React.useState<TabKey>("npm");
  const command = commands[activeTab];

  return (
    <Tabs
      className="mt-4 w-full overflow-hidden rounded-md border"
      variant="underline"
      value={activeTab}
      onValueChange={setActiveTab}
    >
      <CodeBar
        className="border-t-0"
        label={
          <TabsList className="flex h-8 items-center justify-between border-none px-2 text-xs">
            <div className="z-10 flex gap-1">
              {TABS.map((key) => (
                <Tab key={key} className="w-fit px-4" value={key}>
                  {key}
                </Tab>
              ))}
            </div>
          </TabsList>
        }
        content={command}
      />

      <TabContent className="mt-0 border-none" value={activeTab}>
        <div className="command-block">
          <pre className="!p-0 bg-background">
            <code className="!py-0.5 !text-xs !font-medium">{command}</code>
          </pre>
        </div>
      </TabContent>
    </Tabs>
  );
};
