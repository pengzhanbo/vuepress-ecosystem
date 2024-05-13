import{_ as n,a,b as s,c as l,d as i,e as r,f as c}from"./vercel-9-BeG_WJ35.js";import{_ as p,r as d,c as m,b as e,e as t,a as h,w as u,d as g,o as y}from"./app-vjlVxZXw.js";const v="/ecosystem/assets/leancloud-app-1-D7FJuXTc.jpg",b="/ecosystem/assets/leancloud-app-2-DRHKDfZN.jpg",_="/ecosystem/images/comment/vercel-2.png",f={},k=g(`<h1 id="waline" tabindex="-1"><a class="header-anchor" href="#waline"><span>Waline</span></a></h1><p>A safe comment system with backend.</p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>Install</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i</span><span style="color:#569CD6;"> -D</span><span style="color:#CE9178;"> @waline/client</span></span>
<span class="line"></span></code></pre></div><h2 id="leancloud-settings-database" tabindex="-1"><a class="header-anchor" href="#leancloud-settings-database"><span>LeanCloud Settings (Database)</span></a></h2><ol><li><p><a href="https://console.leancloud.app/login" target="_blank" rel="noopener noreferrer">sign in</a> or <a href="https://console.leancloud.app/register" target="_blank" rel="noopener noreferrer">sign up</a> LeanCloud and enter <a href="https://console.leancloud.app/apps" target="_blank" rel="noopener noreferrer">Console</a>.</p></li><li><p>Click <a href="https://console.leancloud.app/apps" target="_blank" rel="noopener noreferrer">Create app</a> button to create a new app and enter a name you like:</p><p><img src="`+v+'" alt="Create App"></p></li><li><p>Enter the app, then select <code>Settings</code> &gt; <code>App Keys</code> at the left bottom corner. You will see <code>APP ID</code>, <code>APP Key</code> and <code>Master Key</code> of your app. We will use them later</p><p><img src="'+b+'" alt="ID and Key"></p></li></ol><h2 id="deploy-to-vercel-server" tabindex="-1"><a class="header-anchor" href="#deploy-to-vercel-server"><span>Deploy to Vercel (Server)</span></a></h2><p><a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample" target="_blank" rel="noopener noreferrer"><img src="https://vercel.com/button" alt="Vercel"></a></p><ol><li><p>Click the dark button above, it will redirect you to vercel to deploy with waline template.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you haven&#39;t logged in, we recommend you to sign in with GitHub.</p></div></li><li><p>Input your Vercel project name then click <code>Create</code>.</p><p><img src="'+_+'" alt="skip team"></p></li><li><p>Repo which named you input before will be created and initialized automatically base on waline example template by Vercel.</p><p><img src="'+n+'" alt="deploy"></p><p>After one minute or two, vercel should finish the deployment. Click <code>Go to Dashboard</code> button to redirect to your application dashboard.</p><p><img src="'+a+'" alt="deploy"></p></li><li><p>Click <code>Settings</code> menu on the top, and <code>Environment Variables</code> button on the side to go to environment variables setting page. Then set <code>LEAN_ID</code>, <code>LEAN_KEY</code> and <code>LEAN_MASTER_KEY</code>. The variables&#39; value should be the ones you got in the previous step. <code>APP ID</code> is the value of <code>LEAN_ID</code>, and <code>APP Key</code> to <code>LEAN_KEY</code>, <code>Master Key</code> to <code>LEAN_MASTER_KEY</code>.</p><p><img src="'+s+'" alt="set environment variables"></p></li><li><p>To let your environment variables setting active, you need redeploy your application. Click <code>Deployments</code> menu on the top and find the latest deployment at the top of list, click <code>Redeploy</code> button in the right dropdown menu.</p><p><img src="'+l+'" alt="redeploy"></p></li><li><p>If everything is ok, vercel will redirect to <code>Overview</code> page to start redeployment. Wait a moment the <code>STATUS</code> will change to <code>Ready</code>. Now you can click <code>Visit</code> to visit the site. This link is your server address.</p><p><img src="'+i+'" alt="redeploy success"></p></li></ol><h2 id="assign-domain-optional" tabindex="-1"><a class="header-anchor" href="#assign-domain-optional"><span>Assign Domain (Optional)</span></a></h2><ol><li><p>Click <code>Settings</code> - <code>Domains</code> to go to domain setting page.</p></li><li><p>Input domain you want to assign and click <code>Add</code> button.</p><p><img src="'+r+'" alt="Add domain"></p></li><li><p>Add a new <code>CNAME</code> record in your domain service server.</p><table><thead><tr><th>Type</th><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>CNAME</td><td>example</td><td>cname.vercel-dns.com</td></tr></tbody></table></li><li><p>You can use your own domain to visit waline comment system after go into effect. 🎉</p><ul><li>serverURL：example.your-domain.com</li><li>admin panel：example.your-domain.com/ui</li></ul><p><img src="'+c+'" alt="success"></p></li></ol><h2 id="client" tabindex="-1"><a class="header-anchor" href="#client"><span>Client</span></a></h2><h3 id="using-plugin" tabindex="-1"><a class="header-anchor" href="#using-plugin"><span>Using plugin</span></a></h3><p>Set <code>provider: &quot;Waline&quot;</code> in the plugin options, and set <code>serverURL</code> as the link obtained in the previous step.</p><p>Then, place the <code>&lt;CommentService&gt;</code> component at a suitable location in your site (usually at the bottom of the page), you will be able to see the comment box.</p>',15),w={class:"custom-container tip"},C=e("p",{class:"custom-container-title"},"TIP",-1),A=e("code",null,"el",-1),x=e("h2",{id:"comment-management-management",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#comment-management-management"},[e("span",null,"Comment Management (Management)")])],-1),D=e("ol",null,[e("li",null,[t("After the deployment is complete, please visit "),e("code",null,"<serverURL>/ui/register"),t(" to register. The first person to register will be set as an administrator.")]),e("li",null,"After you log in as administrator, you can see the comment management interface. You can edit, mark or delete comments here."),e("li",null,"Users can also register their account through comment box, and they will be redirected to their profile page after logging in.")],-1);function E(S,j){const o=d("RouteLink");return y(),m("div",null,[k,e("div",w,[C,e("p",null,[t("You can also pass in other options supported by Waline (except "),A,t("). For details, see "),h(o,{to:"/plugins/comment/waline/config.html"},{default:u(()=>[t("Waline Config")]),_:1})])]),x,D])}const N=p(f,[["render",E],["__file","index.html.vue"]]),V=JSON.parse('{"path":"/plugins/comment/waline/","title":"Waline","lang":"en-US","frontmatter":{"description":"Waline A safe comment system with backend. Install LeanCloud Settings (Database) sign in or sign up LeanCloud and enter Console. Click Create app button to create a new app and ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ecosystem.vuejs.press/ecosystem/zh/plugins/comment/waline/"}],["meta",{"property":"og:url","content":"https://ecosystem.vuejs.press/ecosystem/plugins/comment/waline/"}],["meta",{"property":"og:site_name","content":"VuePress Ecosystem"}],["meta",{"property":"og:title","content":"Waline"}],["meta",{"property":"og:description","content":"Waline A safe comment system with backend. Install LeanCloud Settings (Database) sign in or sign up LeanCloud and enter Console. Click Create app button to create a new app and ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vercel.com/button"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-11T08:20:01.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-11T08:20:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Waline\\",\\"image\\":[\\"https://vercel.com/button\\",\\"https://ecosystem.vuejs.press/ecosystem/images/comment/vercel-2.png\\",\\"https://ecosystem.vuejs.press/ecosystem/images/comment/vercel-3.png\\",\\"https://ecosystem.vuejs.press/ecosystem/images/comment/vercel-4.png\\",\\"https://ecosystem.vuejs.press/ecosystem/images/comment/vercel-5.png\\",\\"https://ecosystem.vuejs.press/ecosystem/images/comment/vercel-6.png\\",\\"https://ecosystem.vuejs.press/ecosystem/images/comment/vercel-7.png\\",\\"https://ecosystem.vuejs.press/ecosystem/images/comment/vercel-8.png\\",\\"https://ecosystem.vuejs.press/ecosystem/images/comment/vercel-9.png\\"],\\"dateModified\\":\\"2024-03-11T08:20:01.000Z\\",\\"author\\":[]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://ecosystem.vuejs.press/ecosystem/atom.xml","title":"VuePress Ecosystem Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://ecosystem.vuejs.press/ecosystem/feed.json","title":"VuePress Ecosystem JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://ecosystem.vuejs.press/ecosystem/rss.xml","title":"VuePress Ecosystem RSS Feed"}]]},"headers":[{"level":2,"title":"Install","slug":"install","link":"#install","children":[]},{"level":2,"title":"LeanCloud Settings (Database)","slug":"leancloud-settings-database","link":"#leancloud-settings-database","children":[]},{"level":2,"title":"Deploy to Vercel (Server)","slug":"deploy-to-vercel-server","link":"#deploy-to-vercel-server","children":[]},{"level":2,"title":"Assign Domain (Optional)","slug":"assign-domain-optional","link":"#assign-domain-optional","children":[]},{"level":2,"title":"Client","slug":"client","link":"#client","children":[{"level":3,"title":"Using plugin","slug":"using-plugin","link":"#using-plugin","children":[]}]},{"level":2,"title":"Comment Management (Management)","slug":"comment-management-management","link":"#comment-management-management","children":[]}],"git":{"updatedTime":1710145201000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"autoDesc":true,"filePathRelative":"plugins/comment/waline/README.md"}');export{N as comp,V as data};
