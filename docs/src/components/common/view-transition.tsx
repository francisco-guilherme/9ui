import { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface ViewTransitionProps {
  children: ReactNode;
}

export const ViewTransition = ({ children }: ViewTransitionProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest(
        "a",
      ) as HTMLAnchorElement | null;

      if (
        !anchor ||
        anchor.target ||
        anchor.hasAttribute("download") ||
        anchor.getAttribute("rel") === "external" ||
        anchor.origin !== window.location.origin
      ) {
        return;
      }

      const href = anchor.getAttribute("href");
      if (
        !href ||
        href === location.pathname + location.search + location.hash
      ) {
        return;
      }

      e.preventDefault();

      const transitionFn = () =>
        navigate(href, {
          replace: href === location.pathname, // prevent duplicate entries
        });

      if (document.startViewTransition) {
        document.startViewTransition(transitionFn);
      } else {
        transitionFn();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [navigate, location.pathname, location.search, location.hash]);

  return <>{children}</>;
};
