/**
 * Creates a reusable media query subscriber for use with `useSyncExternalStore`.
 */
export const createMediaQuerySubscriber =
  (query: string) => (onChange: () => void) => {
    const media = window.matchMedia(query);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  };

/**
 * Media query for detecting dark mode preference.
 */
export const DARK_MODE_QUERY = "(prefers-color-scheme: dark)";

/**
 * Subscribes to the user's dark mode preference changes.
 * Intended for use with `useSyncExternalStore`.
 */
export const subscribeToDarkMode = createMediaQuerySubscriber(DARK_MODE_QUERY);

/**
 * Checks if the user currently prefers dark mode.
 */
export const prefersDarkMode = (): boolean => {
  return (
    typeof window !== "undefined" && window.matchMedia(DARK_MODE_QUERY).matches
  );
};
