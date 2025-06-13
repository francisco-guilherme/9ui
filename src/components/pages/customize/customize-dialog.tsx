import { ThemeSettings } from "@/config/theme"

import { generateTheme } from "@/lib/generate-theme"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog"
import { ThemeCode } from "./theme-code"

interface CustomizeDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  theme: ThemeSettings
}

export const CustomizeDialog = ({
  open,
  onOpenChange,
  theme,
}: CustomizeDialogProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="w-[90%] !max-w-screen-md">
      <DialogHeader>
        <DialogTitle>Your Theme</DialogTitle>
        <DialogDescription>
          Copy the following code to your project.
        </DialogDescription>
      </DialogHeader>
      <ThemeCode
        css={generateTheme(
          theme.shade,
          theme.primaryColor,
          theme.radius,
          theme.flat,
          false
        )}
      />
    </DialogContent>
  </Dialog>
)
