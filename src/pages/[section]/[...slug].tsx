import { Navigate, useParams } from "react-router-dom"

import { ContentPage } from "@/components/content-page"

const SECTION_CONFIG = {
  docs: {
    defaultRedirect: "/docs/introduction",
  },
  components: {
    defaultRedirect: "/components/accordion",
  },
} as const

type SectionType = keyof typeof SECTION_CONFIG

const isValidSection = (value: unknown): value is SectionType =>
  typeof value === "string" && value in SECTION_CONFIG

const UnifiedContentPage = () => {
  const { section } = useParams()

  if (!isValidSection(section)) {
    return <Navigate to={SECTION_CONFIG.docs.defaultRedirect} replace />
  }

  const { defaultRedirect } = SECTION_CONFIG[section]

  return <ContentPage section={section} defaultRedirect={defaultRedirect} />
}

export default UnifiedContentPage
