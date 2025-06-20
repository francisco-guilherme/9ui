import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@9ui/ui";
import { XCircleIcon } from "lucide-react";

export default function AlertDanger() {
  return (
    <Alert variant="danger">
      <AlertIcon>
        <XCircleIcon />
      </AlertIcon>
      <AlertContent>
        <AlertTitle>Your subscription has been canceled</AlertTitle>
        <AlertDescription>
          Your access to premium features will end in 30 days. You can
          reactivate your subscription anytime.
        </AlertDescription>
      </AlertContent>
    </Alert>
  );
}
