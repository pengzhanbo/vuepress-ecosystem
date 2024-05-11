import type { NavItem } from '@vuepress/theme-default'

export const navbarZh: NavItem[] = [
  {
    text: '主题',
    items: [
      {
        text: '默认主题',
        link: '/zh/themes/default/',
      },
      {
        text: 'Hope 主题',
        link: 'https://theme-hope.vuejs.press',
      },
      {
        text: 'Plume 主题',
        link: 'https://theme-plume.vuejs.press',
      },
    ],
  },
  {
    text: '插件',
    activeMatch: '^/zh/plugins/',
    items: [
      {
        text: '常用功能',
        items: [
          { link: '/zh/plugins/append-date', text: 'append-date' },
          { link: '/zh/plugins/back-to-top', text: 'back-to-top' },
          { link: '/zh/plugins/catalog', text: 'catalog' },
          { link: '/zh/plugins/copy-code', text: 'copy-code' },
          { link: '/zh/plugins/copyright', text: 'copyright' },
          {
            link: '/zh/plugins/external-link-icon',
            text: 'external-link-icon',
          },
          { link: '/zh/plugins/medium-zoom', text: 'medium-zoom' },
          { link: '/zh/plugins/nprogress', text: 'nprogress' },
          { link: '/zh/plugins/photo-swipe', text: 'photo-swipe' },
          { link: '/zh/plugins/redirect', text: 'redirect' },
          {
            link: '/zh/plugins/register-components',
            text: 'register-components',
          },
          { link: '/zh/plugins/watermark', text: 'watermark' },
        ],
      },
      {
        text: 'Markdown',
        items: [
          { link: '/zh/plugins/container', text: 'container' },
          { link: '/zh/plugins/links-check', text: 'links-check' },
        ],
      },
      {
        text: '搜索',
        items: [
          { link: '/zh/plugins/docsearch', text: 'docsearch' },
          { link: '/zh/plugins/search', text: 'search' },
        ],
      },
      {
        text: '博客',
        items: [
          { link: '/zh/plugins/blog/', text: 'blog' },
          { link: '/zh/plugins/comment/', text: 'comment' },
          { link: '/zh/plugins/feed/', text: 'feed' },
        ],
      },
      {
        text: 'PWA',
        items: [
          { link: '/zh/plugins/pwa/', text: 'pwa' },
          { link: '/zh/plugins/remove-pwa', text: 'remove-pwa' },
        ],
      },
      {
        text: '搜索引擎增强',
        items: [
          { link: '/zh/plugins/baidu-analytics', text: 'baidu-analytics' },
          { link: '/zh/plugins/google-analytics', text: 'google-analytics' },
          { link: '/zh/plugins/seo/', text: 'seo' },
          { link: '/zh/plugins/sitemap/', text: 'sitemap' },
          { link: '/zh/plugins/umami-analytics', text: 'umami-analytics' },
        ],
      },
      {
        text: '语法高亮',
        items: [
          { link: '/zh/plugins/prismjs', text: 'prismjs' },
          { link: '/zh/plugins/shiki', text: 'shiki' },
        ],
      },
      {
        text: '主题开发',
        items: [
          {
            link: '/zh/plugins/active-header-links',
            text: 'active-header-links',
          },
          { link: '/zh/plugins/git', text: 'git' },
          { link: '/zh/plugins/palette', text: 'palette' },
          { link: '/zh/plugins/reading-time', text: 'reading-time' },
          { link: '/zh/plugins/rtl', text: 'rtl' },
          { link: '/zh/plugins/sass-palette/', text: 'sass-palette' },
          { link: '/zh/plugins/theme-data', text: 'theme-data' },
          { link: '/zh/plugins/toc', text: 'toc' },
        ],
      },
    ],
  },
  {
    text: '工具',
    activeMatch: '^/zh/tools/',
    items: [
      {
        text: 'helper',
        link: '/zh/tools/helper/',
      },
    ],
  },
]
