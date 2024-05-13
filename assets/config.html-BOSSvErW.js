import{_ as s,c as e,o as n,d as a}from"./app-vjlVxZXw.js";const l={},o=a(`<h1 id="twikoo-选项" tabindex="-1"><a class="header-anchor" href="#twikoo-选项"><span>Twikoo 选项</span></a></h1><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><h3 id="envid" tabindex="-1"><a class="header-anchor" href="#envid"><span>envId</span></a></h3><ul><li>类型: <code>string</code></li><li>必填: 是</li><li>详情：腾讯云环境 ID 或 Vercel 地址。</li></ul><h3 id="repoid" tabindex="-1"><a class="header-anchor" href="#repoid"><span>repoId</span></a></h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&quot;ap-shanghai&quot;</code></li><li>详情：腾讯云区域。</li></ul><h2 id="插件配置" tabindex="-1"><a class="header-anchor" href="#插件配置"><span>插件配置</span></a></h2><p>你可以直接在插件选项中配置可序列化的选项:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title=".vuepress/config.ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineUserConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">commentPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-comment&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineUserConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    commentPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">      provider:</span><span style="color:#CE9178;"> &#39;Twikoo&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">      // 其他选项</span></span>
<span class="line"><span style="color:#6A9955;">      // ...</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="客户端配置" tabindex="-1"><a class="header-anchor" href="#客户端配置"><span>客户端配置</span></a></h2><p>你可以使用 <code>defineTwikooConfig</code> 函数来配置 Twikoo。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title=".vuepress/client.ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineTwikooConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-comment/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">defineTwikooConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">  // Twikoo 选项</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">  // ...</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),i=[o];function t(p,r){return n(),e("div",null,i)}const d=s(l,[["render",t],["__file","config.html.vue"]]),m=JSON.parse('{"path":"/zh/plugins/comment/twikoo/config.html","title":"Twikoo 选项","lang":"zh-CN","frontmatter":{"description":"Twikoo 选项 配置 envId 类型: string 必填: 是 详情：腾讯云环境 ID 或 Vercel 地址。 repoId 类型: string 默认值: \\"ap-shanghai\\" 详情：腾讯云区域。 插件配置 你可以直接在插件选项中配置可序列化的选项: 客户端配置 你可以使用 defineTwikooConfig 函数来配置 Twikoo。","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ecosystem.vuejs.press/ecosystem/plugins/comment/twikoo/config.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/comment/twikoo/config.html"}],["meta",{"property":"og:site_name","content":"VuePress 生态系统"}],["meta",{"property":"og:title","content":"Twikoo 选项"}],["meta",{"property":"og:description","content":"Twikoo 选项 配置 envId 类型: string 必填: 是 详情：腾讯云环境 ID 或 Vercel 地址。 repoId 类型: string 默认值: \\"ap-shanghai\\" 详情：腾讯云区域。 插件配置 你可以直接在插件选项中配置可序列化的选项: 客户端配置 你可以使用 defineTwikooConfig 函数来配置 Twikoo。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-21T04:35:42.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-21T04:35:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Twikoo 选项\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-21T04:35:42.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/atom.xml","title":"VuePress 生态系统 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/zh/feed.json","title":"VuePress 生态系统 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/rss.xml","title":"VuePress 生态系统 RSS Feed"}]]},"headers":[{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"envId","slug":"envid","link":"#envid","children":[]},{"level":3,"title":"repoId","slug":"repoid","link":"#repoid","children":[]}]},{"level":2,"title":"插件配置","slug":"插件配置","link":"#插件配置","children":[]},{"level":2,"title":"客户端配置","slug":"客户端配置","link":"#客户端配置","children":[]}],"git":{"updatedTime":1713674142000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"autoDesc":true,"filePathRelative":"zh/plugins/comment/twikoo/config.md"}');export{d as comp,m as data};
