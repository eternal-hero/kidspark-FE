export default {
  router: {
    base: "/app/",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Kids Park',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/app/admin/js/jquery-2.2.4.min.js', type: 'text/javascript', body: true },
      { src: '/app/admin/js/jquery.easing-1.3.min.js', type: 'text/javascript', body: true },
      { src: '/app/admin/js/slick.min.js', type: 'text/javascript', body: true },
      { src: 'https://unpkg.com/popper.js@1', type: 'text/javascript', body: true },
      { src: 'https://unpkg.com/tippy.js@5', type: 'text/javascript', body: true },
      { src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js', type: 'text/javascript', body: true },
      { src: 'https://rawgit.com/jquery/jquery-ui/master/ui/i18n/datepicker-ja.js', type: 'text/javascript', body: true },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/constants.js' },
    { src: '~/plugins/support_area.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/moment', ['ja']],
    ['@nuxtjs/dotenv', {}],
    ['cookie-universal-nuxt'],

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    }
  },
  server :{
      host: "0.0.0.0",
  },

  env: {
    baseURL: process.env.API_URL,
    storageURL: process.env.BROWSER_SRC_URL
  },
}
