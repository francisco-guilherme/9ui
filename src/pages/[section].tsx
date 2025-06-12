import { Navigate, useParams } from "react-router-dom"

import { SidebarLayout } from "@/components/sidebar-layout"

// Valid sections that use the sidebar layout
const SIDEBAR_SECTIONS = ["docs", "components"] as const
type SidebarSection = (typeof SIDEBAR_SECTIONS)[number]

const isSidebarSection = (value: unknown): value is SidebarSection =>
  typeof value === "string" &&
  SIDEBAR_SECTIONS.includes(value as SidebarSection)

const UnifiedSectionLayout = () => {
  const { section } = useParams()

  if (!isSidebarSection(section)) {
    return <Navigate to="/docs/introduction" replace />
  }

  return <SidebarLayout />
}

export default UnifiedSectionLayout
