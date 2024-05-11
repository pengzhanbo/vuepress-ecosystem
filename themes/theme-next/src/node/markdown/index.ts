import type MarkdownIt from 'markdown-it'
import { isPlainObject } from 'vuepress/shared'
import type { DefaultThemePluginsOptions } from '../../shared/index.js'
import { containerPlugin } from './containerPlugin.js'
import { gitHubAlertsPlugin } from './githubAlertsPlugin.js'

export function setupMarkdown(
  md: MarkdownIt,
  themePlugins: DefaultThemePluginsOptions,
): void {
  containerPlugin(md, {
    hasSingleTheme: isPlainObject(themePlugins.shiki)
      ? !themePlugins.shiki.themes
      : true,
  })
  gitHubAlertsPlugin(md)
}
