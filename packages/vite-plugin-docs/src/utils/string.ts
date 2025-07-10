/**
 * Converts a string to capital case (first letter of each word capitalized)
 */
export const capitalCase = (str: string): string => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
