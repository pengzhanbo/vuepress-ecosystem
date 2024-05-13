import{_ as s,r as a,c as i,b as c,e,a as n,w as r,d as t,o as p}from"./app-vjlVxZXw.js";const d={},l=t('<h1 id="giscus" tabindex="-1"><a class="header-anchor" href="#giscus"><span>Giscus</span></a></h1><p>Giscus is a commenting system based on GitHub Discussion that is easy to start.</p><h2 id="preparation" tabindex="-1"><a class="header-anchor" href="#preparation"><span>Preparation</span></a></h2><ol><li><p>Create a public repository and open discussion panel as a place to store comments.</p></li><li><p>Install the <a href="https://github.com/apps/giscus" target="_blank" rel="noopener noreferrer">Giscus App</a> to have permission to access the corresponding repository.</p></li><li><p>After completing the above steps, please go to the <a href="https://giscus.app" target="_blank" rel="noopener noreferrer">Giscus page</a> to get your settings.</p><p>You just need to fill in the repository and Discussion categories, then scroll to the &quot;Enable giscus&quot; section at the bottom of the page and obtain four attributes: <code>data-repo</code>, <code>data-repo-id</code>, <code>data-category</code> and <code>data-category-id</code>.</p></li></ol><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h2><p>Please set <code>provider: &quot;Giscus&quot;</code> and pass <code>data-repo</code>, <code>data-repo-id</code>, <code>data-category</code> and <code>data-category-id</code> as plugin options as <code>repo</code>, <code>repoId</code>, <code>category</code> <code>categoryId</code>.</p>',6),m=t('<h2 id="theme" tabindex="-1"><a class="header-anchor" href="#theme"><span>Theme</span></a></h2><p>By default, the theme of Giscus is <code>light</code> or <code>dark</code> (based on darkmode status).</p><div class="custom-container tip"><p class="custom-container-title">Darkmode</p><p>To let Giscus apply the correct theme, you need to pass a boolean value to <code>&lt;CommentService /&gt;</code> via <code>darkmode</code> property, indicating whether darkmode is currently enabled.</p></div><p>If you want to customize theme in lightmode and darkmode, you can set <code>lightTheme</code> and <code>darkTheme</code> option with a built-in theme keyword or a custom CSS link starting with <code>https://</code>.</p>',4);function u(h,g){const o=a("RouteLink");return p(),i("div",null,[l,c("p",null,[e("For other options, see "),n(o,{to:"/plugins/comment/giscus/config.html"},{default:r(()=>[e("Giscus Config")]),_:1}),e(".")]),m])}const f=s(d,[["render",u],["__file","index.html.vue"]]),b=JSON.parse('{"path":"/plugins/comment/giscus/","title":"Giscus","lang":"en-US","frontmatter":{"description":"Giscus Giscus is a commenting system based on GitHub Discussion that is easy to start. Preparation Create a public repository and open discussion panel as a place to store comme...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/comment/giscus/"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/plugins/comment/giscus/"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"Giscus"}],["meta",{"property":"og:description","content":"Giscus Giscus is a commenting system based on GitHub Discussion that is easy to start. Preparation Create a public repository and open discussion panel as a place to store comme..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-11T08:20:01.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-11T08:20:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Giscus\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-11T08:20:01.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Preparation","slug":"preparation","link":"#preparation","children":[]},{"level":2,"title":"Config","slug":"config","link":"#config","children":[]},{"level":2,"title":"Theme","slug":"theme","link":"#theme","children":[]}],"git":{"updatedTime":1710145201000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"plugins/comment/giscus/README.md"}');export{f as comp,b as data};
