import { Loader2Icon } from "lucide-react";

interface LoadingStateProps extends React.HTMLAttributes<HTMLDivElement> {
  error?: string;
}

export const LoadingState = ({ error }: LoadingStateProps) => (
  <div className="flex items-center justify-center p-8">
    {error ? (
      <span className="text-sm text-red-500">{error}</span>
    ) : (
      <>
        <Loader2Icon className="h-4 w-4 animate-spin" />
        <span className="ml-2 text-sm text-muted-foreground">
          {"Loading demo..."}
        </span>
      </>
    )}
  </div>
);
