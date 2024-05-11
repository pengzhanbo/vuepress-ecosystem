import { defaultTheme } from '@vuepress/theme-default'
import { navbarEn, navbarZh, sidebarEn, sidebarZh } from './configs/index.js'

export default defaultTheme({
  logo: '/images/logo.png',

  logoLink: '/',

  locales: {
    '/': {
      logoLink: '/',
      selectLanguageText: 'Select Languages',
      selectLanguageName: 'English',

      navbar: navbarEn,

      sidebar: sidebarEn,
    },
    '/zh/': {
      logoLink: '/zh/',
      selectLanguageText: '选择语言',
      selectLanguageName: '简体中文',

      lightModeSwitchTitle: '切换到浅色模式',
      darkModeSwitchTitle: '切换到深色模式',
      editLinkText: '编辑此页',
      lastUpdatedText: '上次更新',
      contributorsText: '贡献者',
      outlineTitle: '此页内容',
      returnToTopLabel: '返回顶部',
      sidebarMenuLabel: '目录',
      docFooter: {
        prev: '上一页',
        next: '下一页',
      },

      navbar: navbarZh,

      sidebar: sidebarZh,
    },
  },

  socialLinks: [
    { icon: 'github', link: 'https://github.com/vuepress/ecosystem' },
  ],

  docsRepo: 'https://github.com/vuepress/ecosystem',
  docsBranch: 'main',
  docsDir: 'docs-new',

  externalLinkIcon: true,
  lastUpdated: true,
  editLink: true,
  contributors: true,

  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2022-PRESENT VuePress',
  },

  themePlugins: {
    copyCode: true,
    shiki: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
})
