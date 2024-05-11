import type { NavItem } from '@vuepress/theme-default'

export const navbarEn: NavItem[] = [
  {
    text: 'Themes',
    items: [
      {
        text: 'Default Theme',
        link: '/themes/default/',
      },
      {
        text: 'Hope Theme',
        link: 'https://theme-hope.vuejs.press',
      },
      {
        text: 'Plume Theme',
        link: 'https://theme-plume.vuejs.press',
      },
    ],
  },
  {
    text: 'Plugins',
    activeMatch: '^/plugins/',
    items: [
      {
        text: 'Common Features',
        items: [
          { link: '/plugins/append-date', text: 'append-date' },
          { link: '/plugins/back-to-top', text: 'back-to-top' },
          { link: '/plugins/catalog', text: 'catalog' },
          { link: '/plugins/copy-code', text: 'copy-code' },
          { link: '/plugins/copyright', text: 'copyright' },
          { link: '/plugins/external-link-icon', text: 'external-link-icon' },
          { link: '/plugins/medium-zoom', text: 'medium-zoom' },
          { link: '/plugins/nprogress', text: 'nprogress' },
          { link: '/plugins/photo-swipe', text: 'photo-swipe' },
          { link: '/plugins/redirect', text: 'redirect' },
          { link: '/plugins/register-components', text: 'register-components' },
          { link: '/plugins/watermark', text: 'watermark' },
        ],
      },
      {
        text: 'Markdown',
        items: [
          { link: '/plugins/container', text: 'container' },
          { link: '/plugins/links-check', text: 'links-check' },
        ],
      },
      {
        text: 'Search',
        items: [
          { link: '/plugins/docsearch', text: 'docsearch' },
          { link: '/plugins/search', text: 'search' },
        ],
      },
      {
        text: 'Blogging',
        items: [
          { link: '/plugins/blog/', text: 'blog' },
          { link: '/plugins/comment/', text: 'comment' },
          { link: '/plugins/feed/', text: 'feed' },
        ],
      },
      {
        text: 'PWA',
        items: [
          { link: '/plugins/pwa/', text: 'pwa' },
          { link: '/plugins/remove-pwa', text: 'remove-pwa' },
        ],
      },
      {
        text: 'SEO',
        items: [
          { link: '/plugins/baidu-analytics', text: 'baidu-analytics' },
          { link: '/plugins/google-analytics', text: 'google-analytics' },
          { link: '/plugins/seo/', text: 'seo' },
          { link: '/plugins/sitemap/', text: 'sitemap' },
          { link: '/plugins/umami-analytics', text: 'umami-analytics' },
        ],
      },
      {
        text: 'Syntax Highlighting',
        items: [
          { link: '/plugins/prismjs', text: 'prismjs' },
          { link: '/plugins/shiki', text: 'shiki' },
        ],
      },
      {
        text: 'Theme Development',
        items: [
          { link: '/plugins/active-header-links', text: 'active-header-links' },
          { link: '/plugins/git', text: 'git' },
          { link: '/plugins/palette', text: 'palette' },
          { link: '/plugins/reading-time', text: 'reading-time' },
          { link: '/plugins/rtl', text: 'rtl' },
          { link: '/plugins/sass-palette/', text: 'sass-palette' },
          { link: '/plugins/theme-data', text: 'theme-data' },
          { link: '/plugins/toc', text: 'toc' },
        ],
      },
    ],
  },
  {
    text: 'Tools',
    activeMatch: '^/tools/',
    items: [
      {
        text: 'helper',
        link: '/tools/helper/',
      },
    ],
  },
]
