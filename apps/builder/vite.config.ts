import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { createBaseConfig } from "../../.config/vite.base";

export default defineConfig({
  ...createBaseConfig({
    plugins: [react(), tailwindcss()],
  }),
});
