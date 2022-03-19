const { description } = require('./../../package')

module.exports = {
  title: 'xns-audio-player-simple Documentation',
  description: description,

  dest: 'dist',
  
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', type: 'image/png', href: '/favicons/apple-touch-icon.png' }],
    ['link', { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicons/favicon-32x32.png' }],
    ['link', { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicons/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/favicons/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg' }],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }]
  ],
  
  // theme and its config
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/img/logo.png',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    navbar: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Examples',
        link: '/examples/'
      },
      {
        text: 'Github',
        link: 'https://github.com/xinnks/xns-audio-player-simple'
      }
    ]
  },
  
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
