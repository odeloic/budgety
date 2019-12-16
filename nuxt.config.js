
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-fire'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  fire: {
    config: {
      apiKey: 'AIzaSyB-ho0eY-Q_nMExJAGUMCWvko_5O1NsG9g',
      authDomain: 'budgety-f51aa.firebaseapp.com',
      databaseURL: 'https://budgety-f51aa.firebaseio.com',
      projectId: 'budgety-f51aa',
      storageBucket: 'budgety-f51aa.appspot.com',
      messagingSenderId: '535061755306',
      appId: '1:535061755306:web:0e1bec794cb59a26f7a7d3'
    },
    services: {
      firestore: true,
      realtimeDb: true
    }
  }
}
