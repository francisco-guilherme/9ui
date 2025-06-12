/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client-react" />
/// <reference types="react" />
/// <reference types="react-dom" />

interface ImportMetaEnv {
  readonly VITE_SELINE_TOKEN?: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
