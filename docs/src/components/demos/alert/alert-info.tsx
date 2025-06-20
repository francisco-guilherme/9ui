import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@9ui/ui";
import { InfoIcon } from "lucide-react";

export default function AlertInfo() {
  return (
    <Alert variant="info">
      <AlertIcon>
        <InfoIcon />
      </AlertIcon>
      <AlertContent>
        <AlertTitle>Browser Update Available</AlertTitle>
        <AlertDescription>
          A new version of your browser is available. Updating your browser
          ensures better security and performance.
        </AlertDescription>
      </AlertContent>
    </Alert>
  );
}
