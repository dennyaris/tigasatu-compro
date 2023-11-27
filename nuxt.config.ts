// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: 'font-sans'
      }
    }
  },
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@unocss/nuxt'
  ],
  unocss: {
    preflight: true,
    attributify: true,
    icons: true,
    webFonts: {
      provider: 'google',
      fonts: {
        sans: [{
          name: 'Poppins',
          weights: [300, 400, 500, 600, 700]
        }]
      }
    }
  }
})
