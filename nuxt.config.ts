// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
    },
  },
  experimental: { appManifest: false },
  modules: [
    "@nuxt/content",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/color-mode",
  ],
  compatibilityDate: "2024-12-18",
});