import { Link } from "react-router-dom"

import { Button } from "../components/ui/button"

const NotFound = () => {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[60vh] py-10">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="pt-4">
          <Button render={<Link to="/">Go Home</Link>} />
        </div>
      </div>
    </div>
  )
}

export default NotFound
