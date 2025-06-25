import { Progress } from "@9ui/ui";
import * as React from "react";

export default function ProgressDemo() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev === 100 ? 100 : prev + 2));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-80">
      <Progress value={value} />
    </div>
  );
}
