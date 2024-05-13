import{_ as s,r as t,c as n,a as l,b as e,d as i,o}from"./app-vjlVxZXw.js";const r={},c=e("h1",{id:"umami-analytics",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#umami-analytics"},[e("span",null,"umami-analytics")])],-1),p=i(`<p>Integrate <a href="https://umami.is/" target="_blank" rel="noopener noreferrer">Umami Analytics</a> into VuePress.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i</span><span style="color:#569CD6;"> -D</span><span style="color:#CE9178;"> @vuepress/plugin-umami-analytics@next</span></span>
<span class="line"></span></code></pre></div><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">umamiAnalyticsPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-umami-analytics&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    umamiAnalyticsPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">      // options</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre></div><p>You can use <a href="https://cloud.umami.is/login" target="_blank" rel="noopener noreferrer">Umami Cloud</a> or <a href="https://umami.is/docs/install" target="_blank" rel="noopener noreferrer">Self-host Umami</a>.</p><h3 id="reporting-events" tabindex="-1"><a class="header-anchor" href="#reporting-events"><span>Reporting Events</span></a></h3><p>The plugin will automatically report page view events when visiting and switching pages.</p><p>Besides, a global <code>umami</code> object is available on the <code>window</code> object, and you can call <code>umami.track</code> for <a href="https://umami.is/docs/tracker-functions" target="_blank" rel="noopener noreferrer">custom tracker function</a>.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id"><span>id</span></a></h3><ul><li>Type: <code>string</code></li><li>Details: The website ID in Umami Analytics</li></ul><h3 id="link" tabindex="-1"><a class="header-anchor" href="#link"><span>link</span></a></h3><ul><li>Type: <code>string</code></li><li>Details: Link of umami analytics script</li></ul><h3 id="autotrack" tabindex="-1"><a class="header-anchor" href="#autotrack"><span>autoTrack</span></a></h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Details:</p><p>By default, Umami tracks all pageviews and events for you automatically. You can disable this behavior and track events yourself using the tracker functions.</p></li></ul><h3 id="cache" tabindex="-1"><a class="header-anchor" href="#cache"><span>cache</span></a></h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>Cache data to improve the performance of the tracking script.</p><p>Note: This will use session storage so you may need to inform your users.</p></li></ul><h3 id="domains" tabindex="-1"><a class="header-anchor" href="#domains"><span>domains</span></a></h3><ul><li>Type: <code>string[]</code></li><li>Details: Let the tracker only run on specific domains.</li></ul><h3 id="hosturl" tabindex="-1"><a class="header-anchor" href="#hosturl"><span>hostUrl</span></a></h3><ul><li>Type: <code>string</code></li><li>Details: Location to send data</li></ul>`,21);function d(m,u){const a=t("NpmBadge");return o(),n("div",null,[c,l(a,{package:"@vuepress/plugin-umami-analytics"}),p])}const y=s(r,[["render",d],["__file","umami-analytics.html.vue"]]),g=JSON.parse('{"path":"/plugins/umami-analytics.html","title":"umami-analytics","lang":"en-US","frontmatter":{"description":"umami-analytics","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/umami-analytics.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/plugins/umami-analytics.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"umami-analytics"}],["meta",{"property":"og:description","content":"umami-analytics"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-06T15:51:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-06T15:51:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"umami-analytics\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-06T15:51:03.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Reporting Events","slug":"reporting-events","link":"#reporting-events","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[{"level":3,"title":"id","slug":"id","link":"#id","children":[]},{"level":3,"title":"link","slug":"link","link":"#link","children":[]},{"level":3,"title":"autoTrack","slug":"autotrack","link":"#autotrack","children":[]},{"level":3,"title":"cache","slug":"cache","link":"#cache","children":[]},{"level":3,"title":"domains","slug":"domains","link":"#domains","children":[]},{"level":3,"title":"hostUrl","slug":"hosturl","link":"#hosturl","children":[]}]}],"git":{"updatedTime":1715010663000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"plugins/umami-analytics.md"}');export{y as comp,g as data};
