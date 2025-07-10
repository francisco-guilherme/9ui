import { ErrorInfo, ReactNode, useEffect, useState } from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { XCircleIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@nui/core";

interface Props {
  children: ReactNode;
  resetKey?: string;
}

function ErrorFallback() {
  return (
    <Alert variant="danger" className="my-4">
      <XCircleIcon />
      <AlertTitle>Component Error</AlertTitle>
      <AlertDescription>A component failed to render.</AlertDescription>
    </Alert>
  );
}

export function ErrorBoundary({ children, resetKey }: Props) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [resetKey]);

  const handleError = (error: Error, errorInfo: ErrorInfo) => {
    console.error("MDX Error:", error, errorInfo);
  };

  return (
    <ReactErrorBoundary
      key={key}
      FallbackComponent={ErrorFallback}
      onError={handleError}
    >
      {children}
    </ReactErrorBoundary>
  );
}
