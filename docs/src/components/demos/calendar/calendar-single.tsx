import { Calendar } from "@9ui/ui";
import { useState } from "react";

export default function CalendarSingle() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <Calendar
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      showOutsideDays
    />
  );
}
