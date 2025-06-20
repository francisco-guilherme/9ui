import { Button } from "@9ui/ui";
import { Link } from "react-router-dom";

import { PageLayout } from "@/components/page/page-layout";

const NotFound = () => (
  <PageLayout>
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-10">
      <div className="space-y-4 text-center">
        <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="max-w-md text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="pt-4">
          <Button
            render={
              <Link to="/" aria-label="Go back to homepage">
                Go Home
              </Link>
            }
          />
        </div>
      </div>
    </div>
  </PageLayout>
);

export default NotFound;
