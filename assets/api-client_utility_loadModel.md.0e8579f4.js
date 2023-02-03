import{_ as e,c as t,a,b as l,t as o,d as n,o as p}from"./app.310de484.js";const C=JSON.parse('{"title":".loadModel","description":"","frontmatter":{"title":".loadModel","order":-99},"headers":[],"relativePath":"api-client/utility/loadModel.md","lastUpdated":1675420271000}'),r={name:"api-client/utility/loadModel.md"},c={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=n(`<p>Used to load a model for the client using natives. Model list: <a href="https://docs.altv.mp/gta/articles/ped/models.html" target="_blank" rel="noreferrer">https://docs.altv.mp/gta/articles/ped/models.html</a></p><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><p>Arguments</p><ul><li>hash -&gt; number <ul><li>Needs to be hashed before using alt.hash</li><li>Example: &#39;alt.hash(&#39;A_C_Chimp&#39;)&#39;</li></ul></li></ul><p>Returns</p><ul><li>Promises to return a boolean. <code>true</code> if it was a success, <code>false</code> if it failed to load.</li></ul><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> model </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> alt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hash</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A_C_Chimp</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">AthenaClient</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utility</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">loadModel</span><span style="color:#A6ACCD;">(model)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,7);function h(s,_,u,m,A,y){return p(),t("div",null,[a("h1",c,[l(o(s.$frontmatter.title)+" ",1),i]),d])}const f=e(r,[["render",h]]);export{C as __pageData,f as default};
