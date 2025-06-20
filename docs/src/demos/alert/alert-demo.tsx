import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@9ui/ui";
import { AlertTriangleIcon } from "lucide-react";

export default function AlertDemo() {
  return (
    <Alert>
      <AlertIcon>
        <AlertTriangleIcon />
      </AlertIcon>
      <AlertContent>
        <AlertTitle>No Internet Connection</AlertTitle>
        <AlertDescription>
          Please check your internet connection and try again.
        </AlertDescription>
      </AlertContent>
    </Alert>
  );
}
