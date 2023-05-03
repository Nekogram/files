const moment = require('moment')
const langMap = {
  "zh-Hans": "zh-cn",
}

var timestampCache = {}

module.exports = {
  evergreen: true,
  base: '/',
  title: 'Nekogram',
  head: [
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap',
      media: 'print',
      onload: "this.media='all'"
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://raw.rikka.app/css/SourceCodePro-BDC.css',
      media: 'print',
      onload: "this.media='all'"
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/gh/RikkaW/webfonts@4/css/Roboto-VF.css',
      media: 'print',
      onload: "this.media='all'"
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/gh/RikkaW/webfonts@4/css/NotoSansCJK-SC-VF.css',
      media: 'print',
      onload: "this.media='all'"
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/gh/RikkaW/webfonts@4/css/NotoSansCJK-TC-VF.css',
      media: 'print',
      onload: "this.media='all'"
    }],
    ['link', { rel: 'apple-touch-icon', size: '57x57', href: '/icon/apple-icon-57x57.png' }],
    ['link', { rel: 'apple-touch-icon', size: '60x60', href: '/icon/apple-icon-60x60.png' }],
    ['link', { rel: 'apple-touch-icon', size: '72x72', href: '/icon/apple-icon-72x72.png' }],
    ['link', { rel: 'apple-touch-icon', size: '76x76', href: '/icon/apple-icon-76x76.png' }],
    ['link', { rel: 'apple-touch-icon', size: '114x114', href: '/icon/apple-icon-114x114.png' }],
    ['link', { rel: 'apple-touch-icon', size: '120x120', href: '/icon/apple-icon-120x120.png' }],
    ['link', { rel: 'apple-touch-icon', size: '144x144', href: '/icon/apple-icon-144x144.png' }],
    ['link', { rel: 'apple-touch-icon', size: '152x152', href: '/icon/apple-icon-152x152.png' }],
    ['link', { rel: 'apple-touch-icon', size: '180x180', href: '/icon/apple-icon-180x180.png' }],
    ['link', { rel: 'icon', type: 'image/png', size: '192x192', href: '/icon/android-icon-192x192.png' }],
    ['link', { rel: 'icon', type: 'image/png', size: '32x32', href: '/icon/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', size: '96x96', href: '/icon/favicon-96x96.png' }],
    ['link', { rel: 'icon', type: 'image/png', size: '16x16', href: '/icon/favicon-16x16.png' }],
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-BFBNXGKZQW' }],
    ['script', {}, ["window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-BFBNXGKZQW');"]],
    ['script', { 
      'data-name': 'BMC-Widget',
       'data-cfasync': false,
       src: 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js',
       'data-id': 'nekogram',
       'data-description': 'Support me on Buy me a coffee!',
       'data-message': 'Support me on Buy me a coffee!',
       'data-color': '#5F7FFF',
       'data-position': 'Right',
       'data-x_margin': '18',
       'data-y_margin': '18',
       }
    ],
  ],
  locales: {
    '/': {
      lang: 'en'
    },
    '/zh-hans/': {
      lang: 'zh-Hans'
    },
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        nav: getNavbar('/', 'Features', 'Download', 'Changelog', 'Translations'),
      },
      '/zh-hans/': {
        selectText: '语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        nav: getNavbar('/zh-hans/', '特性', '下载', '更新日志', '翻译'),
      }
    },
    displayAllHeaders: true,
    sidebarDepth: 2,
    repo: 'https://gitlab.com/Nekogram/Nekogram',
    docsRepo: 'https://github.com/tehcneko/nekogram-files',
    docsBranch: 'main',
    docsDir: 'src',
    editLinks: true
  },
  plugins: [
    [
      'sitemap',
      {
        hostname: 'https://nekogram.app',
        exclude: ['/404.html'],
      }
    ],
    [
      'clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html'
      }
    ],
    [
      'autometa',
      {
        site: {
          name: 'Nekogram',
        },
        canonical_base: 'https://nekogram.app',
      }
    ],
    ['@vuepress/medium-zoom']
  ]
}

function getNavbar(prefix, features, download, changelog, translations) {
  return [
    //{ text: features, link: `${prefix}features.html` },
    { text: download, link: `${prefix}download.html` },
    { text: changelog, link: `/changelog.html` },
    { text: translations, link: `https://neko.crowdin.com/nekogram` },
  ]
}
