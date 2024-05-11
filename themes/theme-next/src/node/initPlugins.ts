import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { copyCodePlugin } from '@vuepress/plugin-copy-code'
import { gitPlugin } from '@vuepress/plugin-git'
import { linksCheckPlugin } from '@vuepress/plugin-links-check'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { seoPlugin } from '@vuepress/plugin-seo'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import { themeDataPlugin } from '@vuepress/plugin-theme-data'
import type { PluginConfig } from 'vuepress/core'
import { isPlainObject } from 'vuepress/shared'
import type {
  DefaultThemeLocaleOptions,
  DefaultThemePluginsOptions,
} from '../shared/index.js'

interface InitPluginsOptions {
  hostname?: string
  themePlugins: DefaultThemePluginsOptions
  localeOptions: DefaultThemeLocaleOptions
}

export function initPlugins({
  hostname,
  themePlugins,
  localeOptions,
}: InitPluginsOptions): PluginConfig {
  const plugins: PluginConfig = []

  if (themePlugins.activeHeaderLinks !== false) {
    plugins.push(
      activeHeaderLinksPlugin({
        headerLinkSelector: 'a.outline-link',
        headerAnchorSelector: '.header-anchor',
        // should greater than page transition duration
        delay: 300,
        offset: 134,
      }),
    )
  }

  if (themePlugins.copyCode !== false) {
    plugins.push(
      copyCodePlugin({
        ...(isPlainObject(themePlugins.copyCode) ? themePlugins.copyCode : {}),
      }),
    )
  }

  if (themePlugins.git !== false) {
    plugins.push(
      gitPlugin({
        createdTime: false,
        updatedTime: localeOptions.lastUpdated !== false,
        contributors: localeOptions.contributors !== false,
      }),
    )
  }

  if (themePlugins.linksCheck !== false) {
    plugins.push(
      linksCheckPlugin(
        isPlainObject(themePlugins.linksCheck) ? themePlugins.linksCheck : {},
      ),
    )
  }

  if (themePlugins.mediumZoom !== false) {
    plugins.push(
      mediumZoomPlugin({
        selector:
          '.theme-default-content > img, .theme-default-content :not(a) > img',
        zoomOptions: {},
        // should greater than page transition duration
        delay: 300,
      }),
    )
  }

  if (themePlugins.nprogress !== false) {
    plugins.push(nprogressPlugin())
  }

  if (themePlugins.shiki !== false) {
    plugins.push(
      shikiPlugin(
        isPlainObject(themePlugins.shiki)
          ? themePlugins.shiki
          : { themes: { light: 'github-light', dark: 'github-dark' } },
      ),
    )
  }

  if (hostname && themePlugins.seo !== false) {
    plugins.push(
      seoPlugin({
        hostname,
        ...(isPlainObject(themePlugins.seo) ? themePlugins.seo : {}),
      }),
    )
  }

  if (hostname && themePlugins.sitemap !== false) {
    plugins.push(
      sitemapPlugin({
        hostname,
        ...(isPlainObject(themePlugins.sitemap) ? themePlugins.sitemap : {}),
      }),
    )
  }

  // @vuepress/plugin-theme-data
  plugins.push(themeDataPlugin({ themeData: localeOptions }))

  return plugins
}
