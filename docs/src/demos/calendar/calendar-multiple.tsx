import { Calendar } from "@9ui/ui";
import { useState } from "react";

export default function CalendarMultiple() {
  const [selectedDates, setSelectedDates] = useState<Date[] | undefined>(
    undefined,
  );

  return (
    <Calendar
      mode="multiple"
      selected={selectedDates}
      onSelect={setSelectedDates}
      showOutsideDays
    />
  );
}
