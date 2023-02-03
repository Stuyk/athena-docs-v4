import{_ as e,c as t,a as s,b as o,t as n,d as l,o as p}from"./app.310de484.js";const g=JSON.parse('{"title":".play3D","description":"","frontmatter":{"title":".play3D","order":-99},"headers":[],"relativePath":"api-client/sound/play3d.md","lastUpdated":1675420271000}'),r={name:"api-client/sound/play3d.md"},i={id:"frontmatter-title",tabindex:"-1"},c=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=l(`<p>Used to play a 3D sound from the audio webview. Audios are found and can be added in <code>src-webviews/public/assets/sounds</code></p><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><p>Arguments</p><ul><li>pos -&gt; alt.Vector3 <ul><li>Position of the sound in the world</li></ul></li><li>soundName -&gt; string <ul><li>Name of the audio file</li><li>Example: &#39;unlock.ogg&#39;</li></ul></li></ul><p>Returns</p><ul><li>Returns a void.</li></ul><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#A6ACCD;">AthenaClient</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sound</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">play3D</span><span style="color:#A6ACCD;">(vehicle</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">pos</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">unlock.ogg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,7);function u(a,D,_,y,h,A){return p(),t("div",null,[s("h1",i,[o(n(a.$frontmatter.title)+" ",1),c]),d])}const m=e(r,[["render",u]]);export{g as __pageData,m as default};
