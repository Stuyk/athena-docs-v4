import{_ as n,c as e,a as s,b as o,t as l,d as t,o as p}from"./app.310de484.js";const h=JSON.parse('{"title":".drawRectangle2D","description":"","frontmatter":{"title":".drawRectangle2D","order":-99},"headers":[],"relativePath":"api-client/screen/drawRectangle2D.md","lastUpdated":1675420271000}'),r={name:"api-client/screen/drawRectangle2D.md"},c={id:"frontmatter-title",tabindex:"-1"},F=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=t(`<p>Used to draw an on-screen rectangle. However, it requires an everyTick to show it.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p>Position and size are based on values between <code>0</code> and <code>1</code>. If you want it in the middle of your screen it&#39;s <code>0.5</code>.</p><p>Arguments</p><ul><li>pos -&gt; Vector2</li><li>size -&gt; Vector2</li><li>color -&gt; new alt.RGBA</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#A6ACCD;">alt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">everyTick</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">AthenaClient</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">screen</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">drawRectangle2D</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> x</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> y</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.5</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> x</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.3</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> y</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.1</span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">alt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">RGBA</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">100</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,6);function D(a,i,d,C,A,_){return p(),e("div",null,[s("h1",c,[o(l(a.$frontmatter.title)+" ",1),F]),y])}const u=n(r,[["render",D]]);export{h as __pageData,u as default};
