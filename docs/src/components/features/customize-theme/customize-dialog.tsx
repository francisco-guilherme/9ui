import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@9ui/ui";

import { ThemeSettings } from "@/config/theme";

interface CustomizeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  theme: ThemeSettings;
}

export const CustomizeDialog = ({
  open,
  onOpenChange,
}: CustomizeDialogProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="w-[90%] !max-w-screen-md">
      <DialogHeader>
        <DialogTitle>Your Theme</DialogTitle>
        <DialogDescription>
          Copy the following code to your project.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);
