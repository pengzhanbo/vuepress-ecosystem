import{_ as a,r as o,c as n,a as l,b as s,d as t,o as p}from"./app-vjlVxZXw.js";const i={},c=s("h1",{id:"medium-zoom",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#medium-zoom"},[s("span",null,"medium-zoom")])],-1),r=t(`<p>Integrate <a href="https://github.com/francoischalifour/medium-zoom#readme" target="_blank" rel="noopener noreferrer">medium-zoom</a> into VuePress, which can provide the ability to zoom images.</p><p>This plugin has been integrated into the default theme.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i</span><span style="color:#569CD6;"> -D</span><span style="color:#CE9178;"> @vuepress/plugin-medium-zoom@next</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">mediumZoomPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-medium-zoom&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    mediumZoomPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">      // options</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><h3 id="selector" tabindex="-1"><a class="header-anchor" href="#selector"><span>selector</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;:not(a) &gt; img&#39;</code></p></li><li><p>Details:</p><p>Selector of zoomable images.</p><p>By default this plugin will make all images zoomable except those inside <code>&lt;a&gt;</code> tags.</p></li></ul><h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay"><span>delay</span></a></h3><ul><li><p>Type: <code>number</code></p></li><li><p>Default: <code>500</code></p></li><li><p>Details:</p><p>Delay in milliseconds.</p><p>After navigating to a new page, this plugin will make images zoomable with a delay.</p></li></ul><h3 id="zoomoptions" tabindex="-1"><a class="header-anchor" href="#zoomoptions"><span>zoomOptions</span></a></h3><ul><li><p>Type: <code>Object</code></p></li><li><p>Details:</p><p>Options for medium-zoom.</p></li><li><p>Also see:</p><ul><li><a href="https://github.com/francoischalifour/medium-zoom#options" target="_blank" rel="noopener noreferrer">medium-zoom &gt; Options</a></li></ul></li></ul><h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles"><span>Styles</span></a></h2><p>You can customize most of the zoom styles via <a href="#zoomoptions">zoomOptions</a>, while this plugin also provides some CSS variables for additional customization:</p><div class="language-css" data-ext="css" data-title="css"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">:root</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  --medium-zoom-z-index</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">100</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  --medium-zoom-bg-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#ffffff</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  --medium-zoom-opacity</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api"><span>Composition API</span></a></h2><h3 id="usemediumzoom" tabindex="-1"><a class="header-anchor" href="#usemediumzoom"><span>useMediumZoom</span></a></h3><ul><li><p>Details:</p><p>Returns the <code>Zoom</code> instance that used by this plugin, so that you can use the instance <a href="https://github.com/francoischalifour/medium-zoom#methods" target="_blank" rel="noopener noreferrer">methods</a> directly.</p><p>This plugin will make images zoomable after navigating to current page. But if you are going to add new images dynamically, you may need this method to make those new images zoomable, too.</p><p>This plugin adds an extra <code>refresh</code> method on the <code>Zoom</code> instance, which will call <code>zoom.detach()</code> then <code>zoom.attach()</code> with the <a href="#selector">selector</a> as the default parameter. It will help you to refresh the zoomable images for current page.</p></li><li><p>Example:</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">nextTick</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">useMediumZoom</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-medium-zoom/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#DCDCAA;">  setup</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#569CD6;">    const</span><span style="color:#4FC1FF;"> zoom</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">useMediumZoom</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">    // ... do something to add new images in current page</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">    // then you may need to call \`refresh\` manually to make those new images zoomable</span></span>
<span class="line"><span style="color:#DCDCAA;">    nextTick</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">      zoom</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">refresh</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">    })</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function m(d,u){const e=o("NpmBadge");return p(),n("div",null,[c,l(e,{package:"@vuepress/plugin-medium-zoom"}),r])}const y=a(i,[["render",m],["__file","medium-zoom.html.vue"]]),D=JSON.parse('{"path":"/plugins/medium-zoom.html","title":"medium-zoom","lang":"en-US","frontmatter":{"description":"medium-zoom","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/medium-zoom.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/plugins/medium-zoom.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"medium-zoom"}],["meta",{"property":"og:description","content":"medium-zoom"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-30T09:08:43.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-30T09:08:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"medium-zoom\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-30T09:08:43.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[{"level":3,"title":"selector","slug":"selector","link":"#selector","children":[]},{"level":3,"title":"delay","slug":"delay","link":"#delay","children":[]},{"level":3,"title":"zoomOptions","slug":"zoomoptions","link":"#zoomoptions","children":[]}]},{"level":2,"title":"Styles","slug":"styles","link":"#styles","children":[]},{"level":2,"title":"Composition API","slug":"composition-api","link":"#composition-api","children":[{"level":3,"title":"useMediumZoom","slug":"usemediumzoom","link":"#usemediumzoom","children":[]}]}],"git":{"updatedTime":1706605723000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"plugins/medium-zoom.md"}');export{y as comp,D as data};
