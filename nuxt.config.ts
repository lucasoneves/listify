import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Listify | Crie, organize e compartilhe suas listas',
      meta: [
        { name: 'description', content: 'Crie listas de metas, livros, filmes e memórias. Organize sua rotina e compartilhe com amigos de forma simples no Listify.' }
      ]
    }
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    "@nuxt/icon",
    ["@nuxtjs/google-fonts", {
      families: {
        "Plus Jakarta Sans": [400, 500, 600, 700],
      },
    }]
  ],

  icon: {
    serverBundle: "local",
  },
});
