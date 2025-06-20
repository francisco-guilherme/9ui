import { Calendar } from "@9ui/ui";
import { useState } from "react";

export default function CalendarDisabled() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <Calendar
      mode="single"
      disabled={(date) => date < new Date()}
      selected={selectedDate}
      onSelect={setSelectedDate}
    />
  );
}
