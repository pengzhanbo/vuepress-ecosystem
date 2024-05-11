import type MarkdownIt from 'markdown-it'
import type { RenderRule } from 'markdown-it/lib/renderer.mjs'
import type Token from 'markdown-it/lib/token.mjs'
import container from 'markdown-it-container'
import { nanoid } from 'nanoid'

export interface Options {
  hasSingleTheme: boolean
}

export const containerPlugin = (
  md: MarkdownIt,
  options: Options,
  containerOptions?: ContainerOptions,
): void => {
  md.use(...createContainer('tip', containerOptions?.tipLabel || 'TIP', md))

  md.use(...createContainer('info', containerOptions?.infoLabel || 'INFO', md))

  md.use(
    ...createContainer(
      'warning',
      containerOptions?.warningLabel || 'WARNING',
      md,
    ),
  )

  md.use(
    ...createContainer(
      'caution',
      containerOptions?.dangerLabel || 'CAUTION',
      md,
    ),
  )

  md.use(
    ...createContainer('danger', containerOptions?.dangerLabel || 'DANGER', md),
  )

  md.use(
    ...createContainer(
      'important',
      containerOptions?.dangerLabel || 'IMPORTANT',
      md,
    ),
  )

  md.use(
    ...createContainer(
      'details',
      containerOptions?.detailsLabel || 'Details',
      md,
    ),
  )

  // explicitly escape Vue syntax
  md.use(container, 'v-pre', {
    render: (tokens: Token[], idx: number) =>
      tokens[idx].nesting === 1 ? `<div v-pre>\n` : `</div>\n`,
  })

  md.use(...createCodeGroup(options))
}

type ContainerArgs = [typeof container, string, { render: RenderRule }]

function createContainer(
  klass: string,
  defaultTitle: string,
  md: MarkdownIt,
): ContainerArgs {
  return [
    container,
    klass,
    {
      render(tokens, idx, _options, env: { references?: any }) {
        const token = tokens[idx]
        const info = token.info.trim().slice(klass.length).trim()
        const attrs = md.renderer.renderAttrs(token)
        if (token.nesting === 1) {
          const title = md.renderInline(info || defaultTitle, {
            references: env.references,
          })
          if (klass === 'details')
            return `<details class="${klass} custom-block"${attrs}><summary>${title}</summary>\n`
          return `<div class="${klass} custom-block"${attrs}><p class="custom-block-title">${title}</p>\n`
        } else return klass === 'details' ? `</details>\n` : `</div>\n`
      },
    },
  ]
}

function createCodeGroup(options: Options): ContainerArgs {
  return [
    container,
    'code-group',
    {
      render(tokens, idx) {
        if (tokens[idx].nesting === 1) {
          const name = nanoid(5)
          let tabs = ''
          let checked = 'checked'
          const first = idx + 1

          for (
            let i = idx + 1;
            !(
              tokens[i].nesting === -1 &&
              tokens[i].type === 'container_code-group_close'
            );
            ++i
          ) {
            const isHtml = tokens[i].type === 'html_block'

            if (
              (tokens[i].type === 'fence' && tokens[i].tag === 'code') ||
              isHtml
            ) {
              const title = extractTitle(
                isHtml ? tokens[i].content : tokens[i].info,
                isHtml,
              )
              const active = / active( |$)/.test(tokens[i].info)

              if (title) {
                const id = nanoid(7)
                tabs += `<input type="radio" name="group-${name}" id="tab-${id}" ${i === first ? '{{checked}}' : ''} ${active ? checked : ''}><label for="tab-${id}">${title}</label>`

                active && (checked = '')
              }
            }
          }

          tabs = tabs.replace('{{checked}}', checked)

          return `<VPCodeGroup class="vp-code-group${getAdaptiveThemeMarker(
            options,
          )}"><div class="tabs">${tabs}</div><div class="blocks">\n`
        }
        return `</div></VPCodeGroup>\n`
      },
    },
  ]
}

function getAdaptiveThemeMarker(options: Options): string {
  return options.hasSingleTheme ? '' : ' vp-adaptive-theme'
}

function extractTitle(info: string, html = false): string {
  if (html) {
    return (
      info.replace(/<!--[^]*?-->/g, '').match(/data-title="(.*?)"/)?.[1] || ''
    )
  }
  return info.match(/\[(.*)\]/)?.[1] || extractLang(info) || 'txt'
}

function extractLang(info: string): string {
  return info
    .trim()
    .replace(/=(\d*)/, '')
    .replace(/:(no-)?line-numbers({| |$|=\d*).*/, '')
    .replace(/(-vue|{| ).*$/, '')
    .replace(/^vue-html$/, 'template')
    .replace(/^ansi$/, '')
}

export interface ContainerOptions {
  infoLabel?: string
  noteLabel?: string
  tipLabel?: string
  warningLabel?: string
  dangerLabel?: string
  detailsLabel?: string
  importantLabel?: string
  cautionLabel?: string
}
