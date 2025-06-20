import { ReactNode } from "react";

import { TocItem } from "./nav";

export interface LayoutProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "docs";
  tocItems?: TocItem[];
}
