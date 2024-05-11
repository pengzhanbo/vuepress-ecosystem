import type {
  DefaultThemeLocaleData,
  DefaultThemeLocaleOptions,
} from '../../shared/index.js'

export const DEFAULT_LOCALE_OPTIONS: DefaultThemeLocaleOptions = {
  // appearance
  appearance: true,
  darkModeSwitchLabel: 'Appearance',
  lightModeSwitchTitle: 'Switch to light theme',
  darkModeSwitchTitle: 'Switch to dark theme',

  selectLanguageText: 'Languages',

  externalLinkIcon: true,

  // navbar
  navbar: [],

  // local nav
  returnToTopLabel: 'Return to top',

  returnToTop: true,

  // sidebar
  sidebar: {},
  sidebarMenuLabel: 'Menu',

  // outline
  outline: [2, 3],
  outlineTitle: 'On This Page',
  aside: true,
  scrollOffset: 134,

  // page meta
  editLink: true,
  editLinkText: 'Edit this page',
  lastUpdated: true,
  lastUpdatedText: 'Last Updated',
  contributors: true,
  contributorsText: 'Contributors',
  docFooter: {
    prev: 'Previous Page',
    next: 'Next Page',
  },

  // 404 page messages
  notFound: {
    title: 'PAGE NOT FOUND',
    quote:
      "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
    linkLabel: 'go to home',
    linkText: 'Take me home',
    code: '404',
  },

  // a11y
  // openInNewWindow: 'open in new window',
}

export const DEFAULT_LOCALE_DATA: DefaultThemeLocaleData = {
  // navbar
  selectLanguageName: 'English',
}

/**
 * Assign default options
 */
export const assignDefaultLocaleOptions = (
  localeOptions: DefaultThemeLocaleOptions,
): void => {
  if (!localeOptions.locales) {
    localeOptions.locales = {}
  }

  if (!localeOptions.locales['/']) {
    localeOptions.locales['/'] = {}
  }

  Object.assign(localeOptions, {
    ...DEFAULT_LOCALE_OPTIONS,
    ...localeOptions,
  })

  Object.assign(localeOptions.locales['/'], {
    ...DEFAULT_LOCALE_DATA,
    ...localeOptions.locales['/'],
  })
}
