"use client"

import * as React from "react"
import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui-components/react/checkbox-group"

import { cn } from "@/lib/utils"

const CheckboxGroup = ({
	className,
	...props
}: React.ComponentPropsWithoutRef<typeof BaseCheckboxGroup>) => (
	<BaseCheckboxGroup
		className={cn("flex flex-col items-start gap-1", className)}
		{...props}
	/>
)

export { CheckboxGroup }
