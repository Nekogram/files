const moment = require('moment')
const langMap = {
  "zh-Hans": "zh-cn",
}

var timestampCache = {}

module.exports = {
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
    ['link', { rel: 'icon', type: 'image/png', size: '16x16', href: '/icon/favicon-16x16.png' }]
  ],
  locales: {
    '/': {
      lang: 'en',
      description: 'Nekogram is a third-party Telegram client with not many but useful modifications'
    },
    '/zh-hans/': {
      lang: 'zh-Hans',
      description: 'Nekogram 是一个修改不多但都很有用的第三方 Telegram 客户端'
    },
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        nav: getNavbar('/', 'Features', 'Download', 'Changelog', 'Contribute translations'),
        lastUpdated: 'Last Updated'
      },
      '/zh-hans/': {
        selectText: '语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        nav: getNavbar('/zh-hans/', '特性', '下载', '更新日志', '贡献翻译'),
        lastUpdated: '最后更新'
      }
    },
    displayAllHeaders: true,
    sidebarDepth: 2,
    serviceWorker: {
      updatePopup: true
    },
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
        dateFormatter: (time) => {
          timestampCache[time]
        }
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
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          var original = timestamp

          moment.locale(langMap[lang])
          var localized = moment(original).format('lll')

          moment.locale('en')
          var iso = moment(original).toISOString()
          timestampCache[localized] = iso

          return localized
        }
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-68662540-8'
      }
    ]
  ]
}

function getNavbar(prefix, features, download, changelog, translations) {
  return [
    //{ text: features, link: `${prefix}features.html` },
    { text: download, link: `${prefix}download.html` },
    { text: changelog, link: `${prefix}changelog.html` },
    { text: translations, link: `https://neko.crowdin.com/nekogram` },
  ]
}
