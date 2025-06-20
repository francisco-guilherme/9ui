import { Tab, TabContent, Tabs, TabsList } from "@9ui/ui";

import { AiChatExample } from "./ai-chat-example";
import { CalendarExample } from "./calendar-example";
import { MailExample } from "./mail-example";

export const Examples = () => {
  return (
    <section className="flex flex-col">
      <h2 className="text-2xl font-semibold">Examples</h2>

      <Tabs className="mt-4 w-full" defaultValue="ai-chat">
        <TabsList className="border-none px-0">
          <Tab className="max-w-40" value="ai-chat">
            AI Chat
          </Tab>
          <Tab className="max-w-40" value="mail">
            Mail
          </Tab>
          <Tab className="max-w-40" value="calendar">
            Calendar
          </Tab>
        </TabsList>
        <TabContent value="ai-chat" className="border-none p-0">
          <AiChatExample />
        </TabContent>
        <TabContent value="mail" className="border-none p-0">
          <MailExample />
        </TabContent>
        <TabContent value="calendar" className="border-none p-0">
          <CalendarExample />
        </TabContent>
      </Tabs>
    </section>
  );
};
