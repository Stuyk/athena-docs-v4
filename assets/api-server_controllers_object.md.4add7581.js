import{_ as a,c as l,a as s,b as p,t as o,d as e,o as t}from"./app.310de484.js";const h=JSON.parse('{"title":".object","description":"","frontmatter":{"title":".object","order":0},"headers":[],"relativePath":"api-server/controllers/object.md","lastUpdated":1675420271000}'),c={name:"api-server/controllers/object.md"},r={id:"frontmatter-title",tabindex:"-1"},y=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),D=e(`<p>Objects. They&#39;re items in the world that can be spawned and can have collision.</p><h2 id="iobject" tabindex="-1">IObject <a class="header-anchor" href="#iobject" aria-hidden="true">#</a></h2><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IObject</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * Position of the Object in a 3D space.</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">type</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">Vector3</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">memberof</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">IObject</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">pos</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Vector3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * The model name this object.</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">type</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">memberof</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">IObject</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">model</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * The rotation of this object.</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">type</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">Vector3</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">memberof</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">IObject</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">rot</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Vector3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * The max distance this object should render at.</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">type</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">memberof</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">IObject</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">maxDistance</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * A unique identifier for this object.</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">type</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">memberof</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">IObject</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">uid</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * Local Object ID.</span></span>
<span class="line"><span style="color:#676E95;">     * Do not actually fill this out.</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">type</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">memberof</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">IObject</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">local</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * Local Object Info</span></span>
<span class="line"><span style="color:#676E95;">     * Do not automatically fill this out.</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">type</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">memberof</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">IObject</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">isBeingCreated</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * Is this object interior only.</span></span>
<span class="line"><span style="color:#676E95;">     * Will only show in a matching interior dimension.</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">type</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">memberof</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">IObject</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">isInterior</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * Will show across all dimensions.</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">type</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">memberof</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">IObject</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">dimension</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;">     * Should this object have no collision?</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">type</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">     * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">memberof</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">IObject</span></span>
<span class="line"><span style="color:#676E95;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">noCollision</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="addtoplayer" tabindex="-1">addToPlayer <a class="header-anchor" href="#addtoplayer" aria-hidden="true">#</a></h2><p>Adds a object for a specific player. So only the player can see it.</p><p>Arguments</p><ul><li>player -&gt; alt.Player</li><li>object -&gt; IObject</li></ul><p>Returns</p><ul><li>Returns a <code>uid</code> string if not provided.</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> objectUID </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controllers</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addToPlayer</span><span style="color:#A6ACCD;">(player</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">pos</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> alt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Vector3</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">model</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">v_61_kitch_pizza</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="append" tabindex="-1">append <a class="header-anchor" href="#append" aria-hidden="true">#</a></h2><p>Adds a global object the player loads when they join. Also appends it to any online players.</p><p>Arguments</p><ul><li>object -&gt; IObject</li></ul><p>Returns</p><ul><li>Returns a <code>uid</code> string if not provided.</li></ul><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> objectUID </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controllers</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">pos</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> alt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Vector3</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">model</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">v_61_kitch_pizza</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;;</span></span>
<span class="line"></span></code></pre></div><h2 id="remove" tabindex="-1">remove <a class="header-anchor" href="#remove" aria-hidden="true">#</a></h2><p>Removes a object based on uid.</p><ul><li>uid -&gt; string</li></ul><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#676E95;">// Some Object</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> someObjectUID </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controllers</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controllers</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">(someObjectUID)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="removefromplayer" tabindex="-1">removeFromPlayer <a class="header-anchor" href="#removefromplayer" aria-hidden="true">#</a></h2><p>Removes a player object based on uid.</p><p>Arguments</p><ul><li>player -&gt; alt.Player</li><li>uid -&gt; string</li></ul><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#676E95;">// Some Object</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> someObjectUID </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controllers</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addToPlayer</span><span style="color:#A6ACCD;">(somePlayer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">Athena</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">controllers</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeFromPlayer</span><span style="color:#A6ACCD;">(somePlayer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> someObjectUID)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,26);function F(n,i,C,A,d,E){return t(),l("div",null,[s("h1",r,[p(o(n.$frontmatter.title)+" ",1),y]),D])}const m=a(c,[["render",F]]);export{h as __pageData,m as default};
