import { Calendar, Card, CardContent } from "@9ui/ui";
import { useState } from "react";

export const CalendarCard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <Card>
      <CardContent className="flex h-full flex-col items-center justify-center p-1">
        <Calendar
          className="mx-auto border-none"
          showOutsideDays
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
        />
      </CardContent>
    </Card>
  );
};
