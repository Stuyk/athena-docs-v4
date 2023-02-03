import{_ as a,c as s,a as e,b as n,t as l,d as o,o as i}from"./app.310de484.js";const C=JSON.parse('{"title":".emit","description":"","frontmatter":{"title":".emit","order":-99},"headers":[],"relativePath":"api-client/webview/emit.md","lastUpdated":1675420271000}'),r={name:"api-client/webview/emit.md"},p={id:"frontmatter-title",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o(`<p>Emits an event to the webview.</p><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><p>Arguments</p><ul><li>eventName -&gt; string <ul><li>Name of the event.</li></ul></li><li>... -&gt; (...args: any[]) =&gt; void <ul><li>Arguments to pass to the callback.</li></ul></li></ul><p>Returns</p><ul><li>Returns a void.</li></ul><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#A6ACCD;">AthenaClient</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">webview</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">emit</span><span style="color:#A6ACCD;">(ExampleWebViewEvents</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ClientToWebView</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">LOAD_PLAYERS</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> players)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,7);function _(t,u,m,A,D,h){return i(),s("div",null,[e("h1",p,[n(l(t.$frontmatter.title)+" ",1),c]),d])}const g=a(r,[["render",_]]);export{C as __pageData,g as default};
