import{_ as e,c as n,o as a,d as l}from"./app-vjlVxZXw.js";const t={},s=l(`<h1 id="channel-config" tabindex="-1"><a class="header-anchor" href="#channel-config"><span>Channel Config</span></a></h1><p>The channel plugin option is used to config the feed channel.</p><h2 id="channel-title" tabindex="-1"><a class="header-anchor" href="#channel-title"><span>channel.title</span></a></h2><ul><li>Type: <code>string</code></li><li>Default: <code>SiteConfig.title</code></li></ul><p>Channel title</p><h2 id="channel-link" tabindex="-1"><a class="header-anchor" href="#channel-link"><span>channel.link</span></a></h2><ul><li>Type: <code>string</code></li><li>Default: Deployment link (generated by <code>options.hostname</code> and <code>context.base</code>)</li></ul><p>Channel address</p><h2 id="channel-description" tabindex="-1"><a class="header-anchor" href="#channel-description"><span>channel.description</span></a></h2><ul><li>Type: <code>string</code></li><li>Default: <code>SiteConfig.description</code></li></ul><p>Channel description</p><h2 id="channel-language" tabindex="-1"><a class="header-anchor" href="#channel-language"><span>channel.language</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Default:</p><ul><li><code>siteConfig.locales[&#39;/&#39;].lang</code></li><li>If the above is not provided, fall back to <code>&quot;en-US&quot;</code></li></ul></li></ul><p>The language of the channel</p><h2 id="channel-copyright" tabindex="-1"><a class="header-anchor" href="#channel-copyright"><span>channel.copyright</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Default:</p><ul><li>Try to read the <code>author.name</code> in channel options, and fall back to <code>Copyright by $author</code></li></ul></li><li><p>Recommended to set manually: <strong>Yes</strong></p></li></ul><p>Channel copyright information</p><h2 id="channel-pubdate" tabindex="-1"><a class="header-anchor" href="#channel-pubdate"><span>channel.pubDate</span></a></h2><ul><li>Type: <code>string</code> (must be a valid Date ISOString)</li><li>Default: time when the plugin is called each time</li><li>Recommended to set manually: <strong>Yes</strong></li></ul><p>Publish date of the Channel</p><h2 id="channel-lastupdated" tabindex="-1"><a class="header-anchor" href="#channel-lastupdated"><span>channel.lastUpdated</span></a></h2><ul><li>Type: <code>string</code> (must be a valid Date ISOString)</li><li>Default: time when the plugin is called each time</li></ul><p>Last update time of channel content</p><h2 id="channel-ttl" tabindex="-1"><a class="header-anchor" href="#channel-ttl"><span>channel.ttl</span></a></h2><ul><li>Type: <code>number</code></li><li>Recommended to set manually: <strong>Yes</strong></li></ul><p>The effective time of the content. It&#39;s the time to keep the cache after request without making new requests.</p><h2 id="channel-image" tabindex="-1"><a class="header-anchor" href="#channel-image"><span>channel.image</span></a></h2><ul><li>Type: <code>string</code></li><li>Recommended to set manually: <strong>Yes</strong></li></ul><p>A picture presenting the channel. A square picture with a size not smaller than 512×512 is recommended.</p><h2 id="channel-icon" tabindex="-1"><a class="header-anchor" href="#channel-icon"><span>channel.icon</span></a></h2><ul><li>Type: <code>string</code></li><li>Recommended to set manually: <strong>Yes</strong></li></ul><p>An icon representing a channel, a square picture, with not less than 128×128 in size, and transparent background color is recommended.</p><h2 id="channel-author" tabindex="-1"><a class="header-anchor" href="#channel-author"><span>channel.author</span></a></h2><ul><li>Type: <code>FeedAuthor</code></li><li>Recommended to set manually: <strong>Yes</strong></li></ul><p>The author of the channel.</p><details class="custom-container details"><summary>FeedAuthor format</summary><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> FeedAuthor</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  /** Author name */</span></span>
<span class="line"><span style="color:#9CDCFE;">  name</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#6A9955;">  /** Author&#39;s email */</span></span>
<span class="line"><span style="color:#9CDCFE;">  email</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#6A9955;">  /** Author&#39;s site */</span></span>
<span class="line"><span style="color:#9CDCFE;">  url</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Author&#39;s avatar address</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * Square, preferably not less than 128×128 with transparent background</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  avatar</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="channel-hub" tabindex="-1"><a class="header-anchor" href="#channel-hub"><span>channel.hub</span></a></h2><ul><li>Type: <code>string</code></li></ul><p>Link to Websub. Websub requires a server backend, which is inconsistent with VuePress, so ignore it if there is no special need.</p><div class="custom-container tip"><p class="custom-container-title">WebSub</p><p>For details, see <a href="https://w3c.github.io/websub/#subscription-migration" target="_blank" rel="noopener noreferrer">Websub</a>.</p></div></details>`,36),i=[s];function c(o,r){return a(),n("div",null,i)}const p=e(t,[["render",c],["__file","channel.html.vue"]]),d=JSON.parse('{"path":"/plugins/feed/channel.html","title":"Channel Config","lang":"en-US","frontmatter":{"description":"Channel Config The channel plugin option is used to config the feed channel. channel.title Type: string Default: SiteConfig.title Channel title channel.link Type: string Default...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/feed/channel.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/plugins/feed/channel.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"Channel Config"}],["meta",{"property":"og:description","content":"Channel Config The channel plugin option is used to config the feed channel. channel.title Type: string Default: SiteConfig.title Channel title channel.link Type: string Default..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-01T04:46:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-01T04:46:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Channel Config\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-01T04:46:03.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"channel.title","slug":"channel-title","link":"#channel-title","children":[]},{"level":2,"title":"channel.link","slug":"channel-link","link":"#channel-link","children":[]},{"level":2,"title":"channel.description","slug":"channel-description","link":"#channel-description","children":[]},{"level":2,"title":"channel.language","slug":"channel-language","link":"#channel-language","children":[]},{"level":2,"title":"channel.copyright","slug":"channel-copyright","link":"#channel-copyright","children":[]},{"level":2,"title":"channel.pubDate","slug":"channel-pubdate","link":"#channel-pubdate","children":[]},{"level":2,"title":"channel.lastUpdated","slug":"channel-lastupdated","link":"#channel-lastupdated","children":[]},{"level":2,"title":"channel.ttl","slug":"channel-ttl","link":"#channel-ttl","children":[]},{"level":2,"title":"channel.image","slug":"channel-image","link":"#channel-image","children":[]},{"level":2,"title":"channel.icon","slug":"channel-icon","link":"#channel-icon","children":[]},{"level":2,"title":"channel.author","slug":"channel-author","link":"#channel-author","children":[]}],"git":{"updatedTime":1706762763000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"autoDesc":true,"filePathRelative":"plugins/feed/channel.md"}');export{p as comp,d as data};
