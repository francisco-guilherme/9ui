import { AuthCard } from "./auth-card";
import { CalendarCard } from "./calendar-card";
import { ChatCard } from "./chat-card";
import { FeedbackCard } from "./feedback-card";
import { ManageMembersCard } from "./manage-members-card";
import { OTPCard } from "./otp-card";
import { PrivacySettingsCard } from "./privacy-settings-card";
import { TableCard } from "./table-card";
import { VisitorsChartCard } from "./visitors-chart-card";

export const CardsGrid = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <section aria-labelledby="analytics-section">
        <h2 id="analytics-section" className="sr-only">
          Visitor analytics and team management
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2" role="list">
          <div role="listitem">
            <VisitorsChartCard />
          </div>
          <div role="listitem">
            <ManageMembersCard />
          </div>
        </div>
      </section>

      <section aria-labelledby="calendar-feedback-section">
        <h2 id="calendar-feedback-section" className="sr-only">
          Calendar and feedback
        </h2>
        <div
          className="grid grid-cols-1 gap-4 md:grid-cols-[260px_auto] lg:grid-cols-[260px_1fr_1fr]"
          role="list"
        >
          <div role="listitem">
            <CalendarCard />
          </div>
          <div role="listitem">
            <FeedbackCard />
          </div>
          <div className="md:col-span-2 lg:col-span-1" role="listitem">
            <OTPCard />
          </div>
        </div>
      </section>

      <section aria-labelledby="auth-table-section">
        <h2 id="auth-table-section" className="sr-only">
          Authentication and table
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[380px_auto]">
          <div className="order-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:order-1 lg:grid-cols-1">
            <AuthCard />
            <div className="min-h-[400px] lg:hidden">
              <ChatCard />
            </div>
          </div>
          <div className="order-1 overflow-hidden lg:order-2">
            <TableCard />
          </div>
        </div>
      </section>

      <section aria-labelledby="chat-privacy-section">
        <h2 id="chat-privacy-section" className="sr-only">
          Chat and privacy settings
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="hidden lg:block">
            <ChatCard />
          </div>
          <PrivacySettingsCard />
        </div>
      </section>
    </div>
  );
};
