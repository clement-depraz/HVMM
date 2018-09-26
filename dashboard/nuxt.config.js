module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'dashboard',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  //Import axios for http requests
  */
  modules: [
    '@nuxtjs/axios',
  ],

  /*
  //To be sure that axios is imported only one time
  */
  build: {
    vendor: ['axios']
  },

  /*
  **Define API REST EndPoint
  */
  axios: {
    baseURL: '"http://localhost/api"',
  },
  /*
  ** Import css for the Project
  */
  css: [
    'bulma/css/bulma.css'
  ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

