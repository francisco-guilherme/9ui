import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@9ui/ui";
import { AlertTriangleIcon } from "lucide-react";

export default function AlertWarning() {
  return (
    <Alert variant="warning">
      <AlertIcon>
        <AlertTriangleIcon />
      </AlertIcon>
      <AlertContent>
        <AlertTitle>Your session is about to expire</AlertTitle>
        <AlertDescription>
          You will be logged out in 5 minutes. Please save your work and refresh
          the page.
        </AlertDescription>
      </AlertContent>
    </Alert>
  );
}
