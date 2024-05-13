import{_ as i,r as s,c as p,b as e,e as t,a as n,w as o,d as l,o as r}from"./app-vjlVxZXw.js";const c={},d=l('<h1 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h1><h2 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname"><span>hostname</span></a></h2><ul><li><p>类型：<code>string</code></p></li><li><p>必填：是</p></li><li><p>详情：</p><p>当前网站部署到的域名，插件需要此选项才能工作。</p></li></ul><h2 id="extraurls" tabindex="-1"><a class="header-anchor" href="#extraurls"><span>extraUrls</span></a></h2><ul><li><p>类型：<code>string[]</code></p></li><li><p>详情：</p><p>需要额外包含的网址。</p><p>如果你有一些不包含在 VuePress 路由中的链接 (如: 存放在 public 文件夹下的页面或其他插件或工具直接生成的页面)，你可能需要设置此项。</p></li><li><p>示例：<code>[&#39;/about.html&#39;, &#39;/api/&#39;]</code></p></li></ul><h2 id="excludepaths" tabindex="-1"><a class="header-anchor" href="#excludepaths"><span>excludePaths</span></a></h2><ul><li><p>类型：<code>string[]</code></p></li><li><p>默认值：<code>[&#39;/404.html&#39;]</code></p></li><li><p>详情：</p><p>不需要收录的页面路径，请以绝对路径开头。</p><p>默认情况下 VuePress 自动生成的所有路径 (除 404 页) 都会被添加进 Sitemap。</p></li></ul><h2 id="devserver" tabindex="-1"><a class="header-anchor" href="#devserver"><span>devServer</span></a></h2><ul><li><p>类型：<code>boolean</code></p></li><li><p>默认值：<code>false</code></p></li><li><p>详情：</p><p>是否在开发服务器中启用</p></li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>由于性能原因，我们不提供热更新。重启开发服务器以同步你的变更。</p></div><h2 id="devhostname" tabindex="-1"><a class="header-anchor" href="#devhostname"><span>devHostname</span></a></h2><ul><li><p>类型：<code>string</code></p></li><li><p>默认值：<code>&quot;http://localhost:${port}&quot;</code></p></li><li><p>详情：</p><p>开发服务器使用的主机名</p></li></ul><h2 id="sitemapfilename" tabindex="-1"><a class="header-anchor" href="#sitemapfilename"><span>sitemapFilename</span></a></h2><ul><li><p>类型：<code>string</code></p></li><li><p>默认值：<code>&quot;sitemap.xml&quot;</code></p></li><li><p>详情：</p><p>输出的文件名，相对于输出目录。</p></li></ul><h2 id="sitemapxslfilename" tabindex="-1"><a class="header-anchor" href="#sitemapxslfilename"><span>sitemapXSLFilename</span></a></h2><ul><li><p>类型：<code>string</code></p></li><li><p>默认值：<code>&quot;sitemap.xsl&quot;</code></p></li><li><p>详情：</p><p>输出的 xsl 文件名，相对于输出目录。</p></li></ul><h2 id="sitemapxsltemplate" tabindex="-1"><a class="header-anchor" href="#sitemapxsltemplate"><span>sitemapXSLTemplate</span></a></h2><ul><li><p>类型：<code>string</code></p></li><li><p>默认值：<code>&quot;@vuepress-plugin/sitemap/templates/sitemap.xsl&quot;</code></p></li><li><p>详情：</p><p>用作模板的 XSL 文件内容</p></li></ul><h2 id="changefreq" tabindex="-1"><a class="header-anchor" href="#changefreq"><span>changefreq</span></a></h2>',19),h=e("li",null,[e("p",null,[t("类型："),e("code",null,'"always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"')])],-1),m=e("li",null,[e("p",null,[t("默认值："),e("code",null,'"daily"')])],-1),u=e("p",null,"详情：",-1),g=l('<h2 id="priority" tabindex="-1"><a class="header-anchor" href="#priority"><span>priority</span></a></h2><ul><li><p>类型：<code>number</code></p></li><li><p>默认值：<code>0.5</code></p></li><li><p>详情：</p><p>页面优先级，范围 <code>0</code> 至 <code>1</code>。</p></li></ul><h2 id="modifytimegetter" tabindex="-1"><a class="header-anchor" href="#modifytimegetter"><span>modifyTimeGetter</span></a></h2><ul><li><p>类型：<code>(page: Page, app: App) =&gt; string</code></p></li><li><p>详情：</p><p>最后修改事件的获得器，需要返回一个 ISO 字符形式的时间，默认会自动通过 Git 插件生成。</p></li></ul>',4);function f(x,y){const a=s("RouteLink");return r(),p("div",null,[d,e("ul",null,[h,m,e("li",null,[u,e("p",null,[t("页面默认更新频率，会被 Frontmatter 中的 "),n(a,{to:"/zh/plugins/sitemap/frontmatter.html#sitemap-changefreq"},{default:o(()=>[t("changefreq")]),_:1}),t(" 选项覆盖。")])])]),g])}const _=i(c,[["render",f],["__file","config.html.vue"]]),b=JSON.parse(`{"path":"/zh/plugins/sitemap/config.html","title":"配置","lang":"zh-CN","frontmatter":{"description":"配置 hostname 类型：string 必填：是 详情： 当前网站部署到的域名，插件需要此选项才能工作。 extraUrls 类型：string[] 详情： 需要额外包含的网址。 如果你有一些不包含在 VuePress 路由中的链接 (如: 存放在 public 文件夹下的页面或其他插件或工具直接生成的页面)，你可能需要设置此项。 示例：['/ab...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://ecosystem.vuejs.press/ecosystem/plugins/sitemap/config.html"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/sitemap/config.html"}],["meta",{"property":"og:site_name","content":"VuePress 生态系统"}],["meta",{"property":"og:title","content":"配置"}],["meta",{"property":"og:description","content":"配置 hostname 类型：string 必填：是 详情： 当前网站部署到的域名，插件需要此选项才能工作。 extraUrls 类型：string[] 详情： 需要额外包含的网址。 如果你有一些不包含在 VuePress 路由中的链接 (如: 存放在 public 文件夹下的页面或其他插件或工具直接生成的页面)，你可能需要设置此项。 示例：['/ab..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-01T15:26:40.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-01T15:26:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-01T15:26:40.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/atom.xml","title":"VuePress 生态系统 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/zh/feed.json","title":"VuePress 生态系统 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/zh/rss.xml","title":"VuePress 生态系统 RSS Feed"}]]},"headers":[{"level":2,"title":"hostname","slug":"hostname","link":"#hostname","children":[]},{"level":2,"title":"extraUrls","slug":"extraurls","link":"#extraurls","children":[]},{"level":2,"title":"excludePaths","slug":"excludepaths","link":"#excludepaths","children":[]},{"level":2,"title":"devServer","slug":"devserver","link":"#devserver","children":[]},{"level":2,"title":"devHostname","slug":"devhostname","link":"#devhostname","children":[]},{"level":2,"title":"sitemapFilename","slug":"sitemapfilename","link":"#sitemapfilename","children":[]},{"level":2,"title":"sitemapXSLFilename","slug":"sitemapxslfilename","link":"#sitemapxslfilename","children":[]},{"level":2,"title":"sitemapXSLTemplate","slug":"sitemapxsltemplate","link":"#sitemapxsltemplate","children":[]},{"level":2,"title":"changefreq","slug":"changefreq","link":"#changefreq","children":[]},{"level":2,"title":"priority","slug":"priority","link":"#priority","children":[]},{"level":2,"title":"modifyTimeGetter","slug":"modifytimegetter","link":"#modifytimegetter","children":[]}],"git":{"updatedTime":1706801200000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":4}]},"autoDesc":true,"filePathRelative":"zh/plugins/sitemap/config.md"}`);export{_ as comp,b as data};
