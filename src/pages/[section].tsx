import { Navigate, useParams } from "react-router-dom"

import { Sidebar } from "../components/sidebar"

type SidebarSection = (typeof SIDEBAR_SECTIONS)[number]

const SIDEBAR_SECTIONS = ["docs", "components"] as const

const isSidebarSection = (value: unknown): value is SidebarSection =>
  typeof value === "string" &&
  SIDEBAR_SECTIONS.includes(value as SidebarSection)

const SectionRouter = () => {
  const { section } = useParams()

  if (!isSidebarSection(section)) {
    return <Navigate to="/docs/introduction" replace />
  }

  return <Sidebar />
}

export default SectionRouter
