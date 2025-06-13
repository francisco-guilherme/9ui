import { useParams } from "react-router-dom"

import { Content } from "../../components/content"

type SectionType = keyof typeof SECTION_CONFIG

const SECTION_CONFIG = {
  docs: {
    defaultRedirect: "/docs/introduction",
  },
  components: {
    defaultRedirect: "/components/accordion",
  },
} as const

const SectionContent = () => {
  const params = useParams()
  const section = params.section as SectionType

  if (!section || !SECTION_CONFIG[section]) {
    window.location.replace("/docs/introduction")
    return null
  }

  const config = SECTION_CONFIG[section]

  return <Content section={section} defaultRedirect={config.defaultRedirect} />
}

export default SectionContent
