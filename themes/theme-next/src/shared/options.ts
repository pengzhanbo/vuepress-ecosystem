import type { CopyCodePluginOptions } from '@vuepress/plugin-copy-code'
import type { LinksCheckPluginOptions } from '@vuepress/plugin-links-check'
import type { SeoPluginOptions } from '@vuepress/plugin-seo'
import type { ShikiPluginOptions } from '@vuepress/plugin-shiki'
import type { SitemapPluginOptions } from '@vuepress/plugin-sitemap'
import type { ThemeData } from '@vuepress/plugin-theme-data'
import type { UseDarkOptions } from '@vueuse/core'
import type { LocaleData } from 'vuepress/shared'
import type { DefaultThemeImage, SocialLink } from './basic.js'
import type { NavItem, Sidebar } from './nav.js'

export interface DefaultThemePluginsOptions {
  /**
   * Enable @vuepress/plugin-active-header-links or not
   */
  activeHeaderLinks?: boolean

  /**
   * Enable @vuepress/plugin-back-to-top or not
   */
  backToTop?: boolean

  /**
   * Enable @vuepress/plugin-container or not
   */
  container?: {
    tip?: boolean
    info?: boolean
    warning?: boolean
    danger?: boolean
    details?: boolean
    important?: boolean
    caution?: boolean
    codeGroup?: boolean
  }

  /**
   * Enable @vuepress/plugin-copy-code or not
   */
  copyCode?: CopyCodePluginOptions | boolean

  /**
   * Enable @vuepress/plugin-git or not
   */
  git?: boolean

  /**
   * Enable @vuepress/plugin-links-check or not
   */
  linksCheck?: LinksCheckPluginOptions | boolean

  /**
   * Enable @vuepress/plugin-medium-zoom or not
   */
  mediumZoom?: boolean

  /**
   * Enable @vuepress/plugin-nprogress or not
   */
  nprogress?: boolean

  /**
   * Enable @vuepress/plugin-prismjs or not
   */
  shiki?: boolean | ShikiPluginOptions

  /**
   * Enable @vuepress/plugin-seo or not
   */
  seo?: Partial<SeoPluginOptions> | boolean

  /**
   * Enable @vuepress/plugin-sitemap or not
   */
  sitemap?: Partial<SitemapPluginOptions> | boolean
}

export type DefaultThemeLocaleOptions = DefaultThemeData

export type DefaultThemeData = ThemeData<DefaultThemeLocaleData>

export interface DefaultThemeLocaleData extends LocaleData {
  /**
   * The logo file of the site.
   *
   * @example '/logo.svg'
   */
  logo?: DefaultThemeImage

  /**
   * Overrides the link of the site logo.
   */
  logoLink?: string | { link?: string; rel?: string; target?: string }

  /**
   * Custom site title in navbar. If the value is undefined,
   * `userConfig.title` will be used.
   */
  siteTitle?: string | false

  /**
   * Custom header levels of outline in the aside component.
   *
   * @default 2
   */
  outline?: Outline | false

  /**
   *
   * @default 'On this page'
   */
  outlineTitle?: string

  /**
   * The navbar items.
   */
  navbar?: NavItem[]

  /**
   * The sidebar items.
   */
  sidebar?: Sidebar

  /**
   * @default 'Menu'
   */
  sidebarMenuLabel?: string

  /**
   * Set to `false` to prevent rendering of aside container.
   * Set to `true` to render the aside to the right.
   * Set to `left` to render the aside to the left.
   *
   * @default true
   */
  aside?: boolean | 'left'

  /**
   * Appearance color mode
   *
   * @default true
   */
  appearance?:
    | boolean
    | 'dark'
    | 'force-dark'
    | (Omit<
        UseDarkOptions,
        'initialValue' | 'onChanged' | 'storageRef' | 'storageKey' | 'storage'
      > & { initialValue?: 'dark' })

  /**
   * @default 'Appearance'
   */
  darkModeSwitchLabel?: string

  /**
   * @default 'Switch to light theme'
   */
  lightModeSwitchTitle?: string

  /**
   * @default 'Switch to dark theme'
   */
  darkModeSwitchTitle?: string

  /**
   * Page meta - edit link config
   *
   * Whether to show "Edit this page" or not
   */
  editLink?: boolean

  /**
   * Page meta - edit link config
   *
   * The text to replace the default "Edit this page"
   */
  editLinkText?: string

  /**
   * Page meta - edit link config
   *
   * Pattern of edit link
   *
   * @example ':repo/edit/:branch/:path'
   */
  editLinkPattern?: string

  /**
   * Page meta - edit link config
   *
   * Use `repo` config by default
   *
   * Set this config if your docs is placed in a different repo
   */
  docsRepo?: string

  /**
   * Page meta - edit link config
   *
   * Set this config if the branch of your docs is not 'main'
   */
  docsBranch?: string

  /**
   * Page meta - edit link config
   *
   * Set this config if your docs is placed in sub dir of your `docsRepo`
   */
  docsDir?: string

  /**
   * Page meta - last updated config
   *
   * Whether to show "Last Updated" or not
   */
  lastUpdated?: boolean

  /**
   * Page meta - last updated config
   *
   * The text to replace the default "Last Updated"
   */
  lastUpdatedText?: string

  /**
   * Set options for last updated time formatting.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options
   *
   * @default
   * { dateStyle: 'short', timeStyle: 'short' }
   */
  lastUpdatedFormatOptions?: Intl.DateTimeFormatOptions & {
    forceLocale?: boolean
  }

  /**
   * Page meta - contributors config
   *
   * Whether to show "Contributors" or not
   */
  contributors?: boolean

  /**
   * Page meta - contributors config
   *
   * The text to replace the default "Contributors"
   */
  contributorsText?: string

  /**
   * Set custom prev/next labels.
   */
  docFooter?: DocFooter

  /**
   * The social links to be displayed at the end of the nav bar. Perfect for
   * placing links to social services such as GitHub, Twitter, Facebook, etc.
   */
  socialLinks?: SocialLink[]

  /**
   * The footer configuration.
   */
  footer?: Footer

  /**
   * Enable/disable return to top button
   */
  returnToTop?: boolean

  /**
   * @default 'Return to top'
   */
  returnToTopLabel?: string

  /**
   * Navbar language selection config
   *
   * Text of the language selection dropdown
   */
  selectLanguageText?: string

  /**
   * Navbar language selection config
   *
   * Language name of current locale
   *
   * Displayed inside the language selection dropdown
   */
  selectLanguageName?: string

  /**
   * The carbon ads options. Leave it undefined to disable the ads feature.
   */
  carbonAds?: CarbonAdsOptions

  /**
   * Show external link icon in Markdown links.
   *
   * @default false
   */
  externalLinkIcon?: boolean

  /**
   * Customize text of 404 page.
   */
  notFound?: NotFoundOptions

  /**
   * Configure the scroll offset when the theme has a sticky header.
   * Can be a number or a selector element to get the offset from.
   * Can also be an array of selectors in case some elements will be
   * invisible due to responsive layout. VitePress will fallback to the next
   * selector if a selector fails to match, or the matched element is not
   * currently visible in viewport.
   */
  scrollOffset?:
    | number
    | string
    | string[]
    | { selector: string | string[]; padding: number }
}

// prev-next -----------------------------------------------------------------

export interface DocFooter {
  /**
   * Custom label for previous page button. Can be set to `false` to disable.
   *
   * @default 'Previous page'
   */
  prev?: string | boolean

  /**
   * Custom label for next page button. Can be set to `false` to disable.
   *
   * @default 'Next page'
   */
  next?: string | boolean
}

// footer --------------------------------------------------------------------

export interface Footer {
  message?: string
  copyright?: string
}

// outline -------------------------------------------------------------------

export type Outline = number | [number, number] | 'deep'

// carbon ads ----------------------------------------------------------------

export interface CarbonAdsOptions {
  code: string
  placement: string
}

// not found -----------------------------------------------------------------

export interface NotFoundOptions {
  /**
   * Set custom not found message.
   *
   * @default 'PAGE NOT FOUND'
   */
  title?: string

  /**
   * Set custom not found description.
   *
   * @default "But if you don't change your direction, and if you keep looking, you may end up where you are heading."
   */
  quote?: string

  /**
   * Set aria label for home link.
   *
   * @default 'go to home'
   */
  linkLabel?: string

  /**
   * Set custom home link text.
   *
   * @default 'Take me home'
   */
  linkText?: string

  /**
   * @default '404'
   */
  code?: string
}
