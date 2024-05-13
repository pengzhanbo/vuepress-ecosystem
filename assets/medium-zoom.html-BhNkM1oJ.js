import{_ as a,r as n,c as o,a as l,b as s,d as p,o as t}from"./app-vjlVxZXw.js";const i={},c=s("h1",{id:"medium-zoom",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#medium-zoom"},[s("span",null,"medium-zoom")])],-1),r=p(`<p>将 <a href="https://github.com/francoischalifour/medium-zoom#readme" target="_blank" rel="noopener noreferrer">medium-zoom</a> 集成到 VuePress 中，为图片提供可缩放的功能。</p><p>该插件已经集成到默认主题中。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i</span><span style="color:#569CD6;"> -D</span><span style="color:#CE9178;"> @vuepress/plugin-medium-zoom@next</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">mediumZoomPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-medium-zoom&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    mediumZoomPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">      // 配置项</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2><h3 id="selector" tabindex="-1"><a class="header-anchor" href="#selector"><span>selector</span></a></h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>&#39;:not(a) &gt; img&#39;</code></p></li><li><p>详情：</p><p>可缩放的图片的选择器。</p><p>默认情况下，该插件会使 <code>&lt;a&gt;</code> 标签以外的所有图片都支持缩放。</p></li></ul><h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay"><span>delay</span></a></h3><ul><li><p>类型： <code>number</code></p></li><li><p>默认值： <code>500</code></p></li><li><p>详情：</p><p>以毫秒为单位的延迟。</p><p>在切换路由进入一个新页面时，该插件会在一定延迟后才使页面内的图片支持缩放。</p></li></ul><h3 id="zoomoptions" tabindex="-1"><a class="header-anchor" href="#zoomoptions"><span>zoomOptions</span></a></h3><ul><li><p>类型： <code>Object</code></p></li><li><p>详情：</p><p>medium-zoom 的配置项。</p></li><li><p>参考：</p><ul><li><a href="https://github.com/francoischalifour/medium-zoom#options" target="_blank" rel="noopener noreferrer">medium-zoom &gt; Options</a></li></ul></li></ul><h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式"><span>样式</span></a></h2><p>你可以通过 <a href="#zoomoptions">zoomOptions</a> 对大部分的缩放样式进行自定义，不过作为补充，该插件同样提供了一些 CSS 变量：</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">:root</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  --medium-zoom-z-index</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">100</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  --medium-zoom-bg-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#ffffff</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  --medium-zoom-opacity</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api"><span>Composition API</span></a></h2><h3 id="usemediumzoom" tabindex="-1"><a class="header-anchor" href="#usemediumzoom"><span>useMediumZoom</span></a></h3><ul><li><p>详情：</p><p>返回该插件使用的 <code>Zoom</code> 实例，便于你直接使用实例上的 <a href="https://github.com/francoischalifour/medium-zoom#methods" target="_blank" rel="noopener noreferrer">methods</a> 。</p><p>该插件会在切换路由进入当前页面时使图片支持缩放。但如果你要动态添加新图片，那么你可能就需要这个方法来让这些新图片也支持缩放。</p><p>该插件在 <code>Zoom</code> 实例上额外添加了一个 <code>refresh</code> 方法，它将使用 <a href="#selector">selector</a> 作为默认参数，先调用 <code>zoom.detach()</code> 再调用 <code>zoom.attach()</code> ，便于你快速刷新当前页面图片的缩放状态。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">nextTick</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">useMediumZoom</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-medium-zoom/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#DCDCAA;">  setup</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#569CD6;">    const</span><span style="color:#4FC1FF;"> zoom</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">useMediumZoom</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">    // ... 进行了一些操作，在当前页面添加了新的图片</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">    // 此时你可能需要手动调用 \`refresh\` 来让这些新图片支持缩放</span></span>
<span class="line"><span style="color:#DCDCAA;">    nextTick</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">      zoom</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">refresh</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">    })</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function m(d,u){const e=n("NpmBadge");return t(),o("div",null,[c,l(e,{package:"@vuepress/plugin-medium-zoom"}),r])}const h=a(i,[["render",m],["__file","medium-zoom.html.vue"]]),y=JSON.parse('{"path":"/zh/plugins/medium-zoom.html","title":"medium-zoom","lang":"zh-CN","frontmatter":{"description":"medium-zoom","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ecosystem.vuejs.press/ecosystem/plugins/medium-zoom.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/medium-zoom.html"}],["meta",{"property":"og:site_name","content":"VuePress 生态系统"}],["meta",{"property":"og:title","content":"medium-zoom"}],["meta",{"property":"og:description","content":"medium-zoom"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-30T09:08:43.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-30T09:08:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"medium-zoom\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-30T09:08:43.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/atom.xml","title":"VuePress 生态系统 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/zh/feed.json","title":"VuePress 生态系统 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/rss.xml","title":"VuePress 生态系统 RSS Feed"}]]},"headers":[{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":2,"title":"配置项","slug":"配置项","link":"#配置项","children":[{"level":3,"title":"selector","slug":"selector","link":"#selector","children":[]},{"level":3,"title":"delay","slug":"delay","link":"#delay","children":[]},{"level":3,"title":"zoomOptions","slug":"zoomoptions","link":"#zoomoptions","children":[]}]},{"level":2,"title":"样式","slug":"样式","link":"#样式","children":[]},{"level":2,"title":"Composition API","slug":"composition-api","link":"#composition-api","children":[{"level":3,"title":"useMediumZoom","slug":"usemediumzoom","link":"#usemediumzoom","children":[]}]}],"git":{"updatedTime":1706605723000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"zh/plugins/medium-zoom.md"}');export{h as comp,y as data};
