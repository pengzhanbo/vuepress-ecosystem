import type { Page, Theme } from 'vuepress/core'
import { fs, getDirname, path } from 'vuepress/utils'
import type {
  DefaultThemeLocaleOptions,
  DefaultThemePageData,
  DefaultThemePluginsOptions,
} from '../shared/index.js'
import { initPlugins } from './initPlugins.js'
import { setupMarkdown } from './markdown/index.js'
import { assignDefaultLocaleOptions } from './utils/assignDefaultLocaleOptions.js'
import { resolvePageHead } from './utils/resolvePageHead.js'

const __dirname = getDirname(import.meta.url)

export interface DefaultThemeOptions extends DefaultThemeLocaleOptions {
  /**
   * deployed hostname
   */
  hostname?: string

  /**
   * To avoid confusion with the root `plugins` option,
   * we use `themePlugins`
   */
  themePlugins?: DefaultThemePluginsOptions
}

export const defaultTheme = ({
  hostname,
  themePlugins = {},
  ...localeOptions
}: DefaultThemeOptions): Theme => {
  // compact old options
  localeOptions.returnToTop = themePlugins.backToTop !== false
  assignDefaultLocaleOptions(localeOptions)

  return {
    name: '@vuepress/theme-default',

    templateBuild: path.resolve(__dirname, '../../templates/build.html'),

    alias: {
      // use alias to make all components replaceable
      ...Object.fromEntries(
        fs
          .readdirSync(path.resolve(__dirname, '../client/components'))
          .filter((file) => file.endsWith('.vue'))
          .map((file) => [
            `@theme/${file}`,
            path.resolve(__dirname, '../client/components', file),
          ]),
      ),
    },

    clientConfigFile: path.resolve(__dirname, '../client/config.js'),

    plugins: initPlugins({ hostname, themePlugins, localeOptions }),

    extendsPage: (page: Page<Partial<DefaultThemePageData>>) => {
      // save relative file path into page data to generate edit link
      page.data.filePathRelative = page.filePathRelative
      // save title into route meta to generate navbar and sidebar
      page.routeMeta.title = page.title

      resolvePageHead(page, localeOptions)
    },
    extendsMarkdown: (md) => {
      setupMarkdown(md, themePlugins)
    },
  }
}
