import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <div className="max-w-md">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Error 404
        </p>
        <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] md:text-6xl">
          Nothing here.
        </h1>
        <p className="mt-6 text-muted-foreground">
          The page you were looking for has moved, been retired, or never existed.
        </p>
        <Link
          to="/"
          className="link-underline mt-10 inline-block text-xs uppercase tracking-[0.2em] text-foreground"
        >
          Return home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
