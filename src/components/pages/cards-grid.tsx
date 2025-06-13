import { AuthCard } from "./cards/auth-card"
import { CalendarCard } from "./cards/calendar-card"
import { ChatCard } from "./cards/chat-card"
import { FeedbackCard } from "./cards/feedback-card"
import { ManageMembersCard } from "./cards/manage-members-card"
import { OTPCard } from "./cards/otp-card"
import { PrivacySettingsCard } from "./cards/privacy-settings-card"
import { TableCard } from "./cards/table-card"
import { VisitorsChartCard } from "./cards/visitors-chart-card"

export const CardsGrid = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <VisitorsChartCard />
        <ManageMembersCard />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[260px_auto] lg:grid-cols-[260px_1fr_1fr]">
        <CalendarCard />
        <FeedbackCard />
        <div className="md:col-span-2 lg:col-span-1">
          <OTPCard />
        </div>
      </div>
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
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="hidden lg:block">
          <ChatCard />
        </div>
        <PrivacySettingsCard />
      </div>
    </div>
  )
}
