import type { GitPluginPageData } from '@vuepress/plugin-git'
import type { DefaultThemeImage, Feature, HeroAction } from './basic.js'
import type { NavItemWithLink } from './nav.js'
import type { Outline } from './options.js'

export interface DefaultThemePageData extends GitPluginPageData {
  filePathRelative: string | null
}

export interface DefaultThemePageFrontmatter {
  home?: boolean
  pageClass?: string
  pageLayout?: false | string
  navbar?: boolean
  footer?: boolean
  externalLinkIcon?: boolean
}

export interface DefaultThemeHomePageFrontmatter
  extends DefaultThemePageFrontmatter {
  markdownStyles?: false
  hero?: {
    name?: string
    text?: string
    tagline?: string
    image?: DefaultThemeImage
  }
  actions?: HeroAction[]
  features?: Feature[]
}

export interface DefaultThemeNormalPageFrontmatter
  extends DefaultThemePageFrontmatter {
  sidebar?: boolean
  aside?: boolean | 'left'
  editLink?: boolean
  editLinkPattern?: string
  lastUpdated?: boolean
  contributors?: boolean
  outline?: Outline
  backToTop?: boolean
  prev: boolean | string | NavItemWithLink
  next: boolean | string | NavItemWithLink
}
