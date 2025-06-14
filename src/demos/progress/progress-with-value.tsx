import * as React from "react"

import { Progress, ProgressValue } from "@/components/ui/progress"

export default function ProgressWithValueDemo() {
  const [value, setValue] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev === 100 ? 100 : prev + 2))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-80">
      <Progress value={value}>
        <ProgressValue />
      </Progress>
    </div>
  )
}
