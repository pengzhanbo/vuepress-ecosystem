import{_ as s,c as e,o as n,d as a}from"./app-vjlVxZXw.js";const l={},i=a(`<h1 id="giscus-options" tabindex="-1"><a class="header-anchor" href="#giscus-options"><span>Giscus Options</span></a></h1><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h2><h3 id="repo" tabindex="-1"><a class="header-anchor" href="#repo"><span>repo</span></a></h3><ul><li>Type: <code>string</code></li><li>Details: The name of repository to store discussions.</li></ul><h3 id="repoid" tabindex="-1"><a class="header-anchor" href="#repoid"><span>repoId</span></a></h3><ul><li>Type: <code>string</code></li><li>Details: The ID of repository to store discussions. Generate through <a href="https://giscus.app/" target="_blank" rel="noopener noreferrer">Giscus Page</a></li></ul><h3 id="category" tabindex="-1"><a class="header-anchor" href="#category"><span>category</span></a></h3><ul><li>Type: <code>string</code></li><li>Details: The name of the discussion category.</li></ul><h3 id="categoryid" tabindex="-1"><a class="header-anchor" href="#categoryid"><span>categoryId</span></a></h3><ul><li>Type: <code>string</code></li><li>Details: The ID of the discussion category. Generate through <a href="https://giscus.app/" target="_blank" rel="noopener noreferrer">Giscus Page</a></li></ul><h3 id="mapping" tabindex="-1"><a class="header-anchor" href="#mapping"><span>mapping</span></a></h3><ul><li>Type: <code>string</code></li><li>Default: <code>&quot;pathname&quot;</code></li><li>Details: Page - Discussion mapping. For details see <a href="https://giscus.app/" target="_blank" rel="noopener noreferrer">Giscus Page</a></li></ul><h3 id="strict" tabindex="-1"><a class="header-anchor" href="#strict"><span>strict</span></a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li><li>Details: Whether enable strict mapping or not</li></ul><h3 id="lazyloading" tabindex="-1"><a class="header-anchor" href="#lazyloading"><span>lazyLoading</span></a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li><li>Details: Whether enable lazy loading or not</li></ul><h3 id="reactionsenabled" tabindex="-1"><a class="header-anchor" href="#reactionsenabled"><span>reactionsEnabled</span></a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li><li>Details: Whether enable reactions or not</li></ul><h3 id="inputposition" tabindex="-1"><a class="header-anchor" href="#inputposition"><span>inputPosition</span></a></h3><ul><li>Type: <code>&quot;top&quot; | &quot;bottom&quot;</code></li><li>Default: <code>&quot;top&quot;</code></li><li>Details: Input position</li></ul><h3 id="lighttheme" tabindex="-1"><a class="header-anchor" href="#lighttheme"><span>lightTheme</span></a></h3><ul><li><p>Type: <code>GiscusTheme</code></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> GiscusTheme</span><span style="color:#D4D4D4;"> =</span></span>
<span class="line"><span style="color:#D4D4D4;">  | </span><span style="color:#CE9178;">&#39;light&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  | </span><span style="color:#CE9178;">&#39;light_high_contrast&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  | </span><span style="color:#CE9178;">&#39;light_protanopia&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  | </span><span style="color:#CE9178;">&#39;dark&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  | </span><span style="color:#CE9178;">&#39;dark_high_contrast&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  | </span><span style="color:#CE9178;">&#39;dark_protanopia&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  | </span><span style="color:#CE9178;">&#39;dark_dimmed&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  | </span><span style="color:#CE9178;">&#39;transparent_dark&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  | </span><span style="color:#CE9178;">&#39;preferred_color_scheme&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  | </span><span style="color:#CE9178;">\`https://</span><span style="color:#569CD6;">\${</span><span style="color:#4EC9B0;">string</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>&quot;light&quot;</code></p></li><li><p>Details:</p><p>Giscus theme used in lightmode</p><p>Should be a built-in theme keyword or a css link starting with <code>https://</code>.</p></li></ul><h3 id="darktheme" tabindex="-1"><a class="header-anchor" href="#darktheme"><span>darkTheme</span></a></h3><ul><li><p>Type: <code>GiscusTheme</code></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">type</span><span style="color:#4EC9B0;"> GiscusTheme</span><span style="color:#D4D4D4;"> =</span></span>
<span class="line"><span style="color:#D4D4D4;">  | </span><span style="color:#CE9178;">&#39;light&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  | </span><span style="color:#CE9178;">&#39;light_high_contrast&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  | </span><span style="color:#CE9178;">&#39;light_protanopia&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  | </span><span style="color:#CE9178;">&#39;dark&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  | </span><span style="color:#CE9178;">&#39;dark_high_contrast&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  | </span><span style="color:#CE9178;">&#39;dark_protanopia&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  | </span><span style="color:#CE9178;">&#39;dark_dimmed&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  | </span><span style="color:#CE9178;">&#39;transparent_dark&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  | </span><span style="color:#CE9178;">&#39;preferred_color_scheme&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  | </span><span style="color:#CE9178;">\`https://</span><span style="color:#569CD6;">\${</span><span style="color:#4EC9B0;">string</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Default: <code>&quot;dark&quot;</code></p></li><li><p>Details:</p><p>Giscus theme used in darkmode</p><p>Should be a built-in theme keyword or a css link starting with <code>https://</code>.</p></li></ul><h2 id="plugin-config" tabindex="-1"><a class="header-anchor" href="#plugin-config"><span>Plugin Config</span></a></h2><p>You can directly configure serializable options in the plugin options:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title=".vuepress/config.ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineUserConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">commentPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-comment&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineUserConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    commentPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">      provider:</span><span style="color:#CE9178;"> &#39;Giscus&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#6A9955;">      // other options</span></span>
<span class="line"><span style="color:#6A9955;">      // ...</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="client-config" tabindex="-1"><a class="header-anchor" href="#client-config"><span>Client Config</span></a></h2><p>You can use the <code>defineGiscusConfig</code> function to customize Giscus:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title=".vuepress/client.ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineGiscusConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-comment/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">defineGiscusConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">  // Giscus config</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#DCDCAA;"> defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">  // ...</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),o=[i];function t(p,r){return n(),e("div",null,o)}const d=s(l,[["render",t],["__file","config.html.vue"]]),u=JSON.parse('{"path":"/plugins/comment/giscus/config.html","title":"Giscus Options","lang":"en-US","frontmatter":{"description":"Giscus Options Config repo Type: string Details: The name of repository to store discussions. repoId Type: string Details: The ID of repository to store discussions. Generate th...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/comment/giscus/config.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/plugins/comment/giscus/config.html"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"Giscus Options"}],["meta",{"property":"og:description","content":"Giscus Options Config repo Type: string Details: The name of repository to store discussions. repoId Type: string Details: The ID of repository to store discussions. Generate th..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-21T04:35:42.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-21T04:35:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Giscus Options\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-21T04:35:42.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Config","slug":"config","link":"#config","children":[{"level":3,"title":"repo","slug":"repo","link":"#repo","children":[]},{"level":3,"title":"repoId","slug":"repoid","link":"#repoid","children":[]},{"level":3,"title":"category","slug":"category","link":"#category","children":[]},{"level":3,"title":"categoryId","slug":"categoryid","link":"#categoryid","children":[]},{"level":3,"title":"mapping","slug":"mapping","link":"#mapping","children":[]},{"level":3,"title":"strict","slug":"strict","link":"#strict","children":[]},{"level":3,"title":"lazyLoading","slug":"lazyloading","link":"#lazyloading","children":[]},{"level":3,"title":"reactionsEnabled","slug":"reactionsenabled","link":"#reactionsenabled","children":[]},{"level":3,"title":"inputPosition","slug":"inputposition","link":"#inputposition","children":[]},{"level":3,"title":"lightTheme","slug":"lighttheme","link":"#lighttheme","children":[]},{"level":3,"title":"darkTheme","slug":"darktheme","link":"#darktheme","children":[]}]},{"level":2,"title":"Plugin Config","slug":"plugin-config","link":"#plugin-config","children":[]},{"level":2,"title":"Client Config","slug":"client-config","link":"#client-config","children":[]}],"git":{"updatedTime":1713674142000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"autoDesc":true,"filePathRelative":"plugins/comment/giscus/config.md"}');export{d as comp,u as data};
