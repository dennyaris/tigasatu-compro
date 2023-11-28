import { transformerDirectives } from 'unocss'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: 'antialiased'
      }
    }
  },
  debug: process.env.NODE_ENV !== 'production',
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:3000'
    }
  },
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts'
  ],
  i18n: {
    debug: false,
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'id', iso: 'id-ID', file: 'id.json' }
    ],
    lazy: true,
    langDir: 'locales/'
  },
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700]
    },
    preconnect: true,
    prefetch: true
  },
  unocss: {
    preflight: true,
    attributify: true,
    icons: true,
    transformers: [
      transformerDirectives()
    ]
  }
})
