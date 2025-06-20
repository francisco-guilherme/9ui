import { Calendar } from "@9ui/ui";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export default function CalendarRange() {
  const [range, setRange] = useState<DateRange | undefined>(undefined);

  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      showOutsideDays
    />
  );
}
