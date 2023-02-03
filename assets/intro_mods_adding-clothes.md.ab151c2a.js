import{_ as n,c as o,a as s,b as l,t as p,d as e,o as t}from"./app.310de484.js";const g=JSON.parse('{"title":"Adding Modded Clothes","description":"","frontmatter":{"title":"Adding Modded Clothes","order":-97},"headers":[],"relativePath":"intro/mods/adding-clothes.md","lastUpdated":1675420271000}'),c={name:"intro/mods/adding-clothes.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=e(`<p>Clothing mods are probably the most annoying modding resouce to add to a server purely because of the complexity.</p><p>It is suggested to follow the following <a href="https://docs.altv.mp/gta/articles/tutorials/stream_clothes.html" target="_blank" rel="noreferrer">the official clothing tutorial for setting up a clothing dlc pack</a>.</p><h3 id="where-to-load-clothes" tabindex="-1">Where to Load Clothes? <a class="header-anchor" href="#where-to-load-clothes" aria-hidden="true">#</a></h3><p>Below is an example of a single clothing mod with exactly 1 for the <code>mask</code> slot.</p><p>Every DLC Pack for clothing may be different but there are some general common functionalities.</p><p>All mods should be placed under <code>resources/mods</code>.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u{1F4C1} altv-athena/</span></span>
<span class="line"><span style="color:#A6ACCD;">    L \u{1F4C1} resources/</span></span>
<span class="line"><span style="color:#A6ACCD;">        L \u{1F4C1} mods/</span></span>
<span class="line"><span style="color:#A6ACCD;">            |- \u{1F4C1} clothing-mod-a/</span></span>
<span class="line"><span style="color:#A6ACCD;">            |    |- stream.cfg</span></span>
<span class="line"><span style="color:#A6ACCD;">            |    |- resource.cfg</span></span>
<span class="line"><span style="color:#A6ACCD;">            |    L \u{1F4C1} stream/</span></span>
<span class="line"><span style="color:#A6ACCD;">            |        |- mp_f_freemode_01_mp_f_dlcpackname.meta</span></span>
<span class="line"><span style="color:#A6ACCD;">            |        |- mp_m_freemode_01_mp_m_dlcpackname.meta</span></span>
<span class="line"><span style="color:#A6ACCD;">            |        |</span></span>
<span class="line"><span style="color:#A6ACCD;">            |        |- \u{1F4C1} ped_female.rpf/</span></span>
<span class="line"><span style="color:#A6ACCD;">            |        |   |- mp_f_freemode_01_mp_f_dlcpackname.ymt</span></span>
<span class="line"><span style="color:#A6ACCD;">            |        |   L \u{1F4C1} mp_f_freemode_01_mp_f_dlcpackname/</span></span>
<span class="line"><span style="color:#A6ACCD;">            |        |       |- some_model_000_u.ydd</span></span>
<span class="line"><span style="color:#A6ACCD;">            |        |       L some_model_diff_000_a_uni.ytd</span></span>
<span class="line"><span style="color:#A6ACCD;">            |        |</span></span>
<span class="line"><span style="color:#A6ACCD;">            |        L \u{1F4C1} ped_male.rpf/</span></span>
<span class="line"><span style="color:#A6ACCD;">            |            |- mp_m_freemode_01_mp_m_dlcpackname.ymt</span></span>
<span class="line"><span style="color:#A6ACCD;">            |            L \u{1F4C1} mp_m_freemode_01_mp_m_dlcpackname/</span></span>
<span class="line"><span style="color:#A6ACCD;">            |                |- some_model_000_u.ydd</span></span>
<span class="line"><span style="color:#A6ACCD;">            |                L some_model_diff_000_a_un</span></span>
<span class="line"><span style="color:#A6ACCD;">            |</span></span>
<span class="line"><span style="color:#A6ACCD;">            L \u{1F4C1} clothing-mod-c/</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="adding-to-configs" tabindex="-1">Adding to Configs <a class="header-anchor" href="#adding-to-configs" aria-hidden="true">#</a></h3><p>After adding the modification to your <code>resources/mods</code> folder you need to add it to your configs.</p><p>Under the <code>configs</code> folder in the root directory of Athena you will have various <code>.json</code> files.</p><p>It is suggested to load all resource packs at the beginning of the <code>resources</code> array.</p><p><strong>VERY IMPORTANT NOTE</strong></p><p>The order of the resources does matter. Do not alphabetize. Do not change the order.</p><p>You should absolutely load clothing resources as they are added to your game mode.</p><p>ORDER MATTERS.</p><h3 id="example-config" tabindex="-1">Example Config <a class="header-anchor" href="#example-config" aria-hidden="true">#</a></h3><p>This is what you would add under <code>configs/dev.json</code> file to load a clothing resource.</p><p>The name should match the folder name in <code>resources/mods</code>.</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">resources</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mods/clothing-mod-c</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mods/clothing-mod-a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mods/clothing-mod-w</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webviews</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">core</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span></code></pre></div><h3 id="configuring-clothing-counts" tabindex="-1">Configuring Clothing Counts <a class="header-anchor" href="#configuring-clothing-counts" aria-hidden="true">#</a></h3><p>You should be aware of the clothing count you are adding for both male, and female. You are 100% responsible to know this information and it should be obtainable from the Clothing Tool provided in the tutorial at the beginning of this page.</p><p>Example of Clothing Counts</p><p><img src="https://i.imgur.com/WJI178b.png" alt=""></p><p>As you can see in the above image we need to add the following:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">1 -&gt; Female Top / Shirt</span></span>
<span class="line"><span style="color:#A6ACCD;">1 -&gt; Male Undershirt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Inside of Athena navigate to:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">src/core/plugins/core-clothing/shared/config.ts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Look for a section called <code>DLC_CLOTHING</code>.</p><p>This section has a very specific format so pay attention.</p><p>We&#39;re going to add the clothing count based on the example above. <code>1 Female Top</code> and <code>1 Male Undershirt</code>.</p><div class="language-typescript"><button class="copy"></button><span class="lang">typescript</span><pre><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">DLC_CLOTHING</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#A6ACCD;">CLOTHING_IDS</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MASKS</span><span style="color:#F07178;">]: []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#A6ACCD;">CLOTHING_IDS</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">TORSOS</span><span style="color:#F07178;">]: []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#A6ACCD;">CLOTHING_IDS</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">LEGS</span><span style="color:#F07178;">]: []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#A6ACCD;">CLOTHING_IDS</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">BAGS</span><span style="color:#F07178;">]: []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#A6ACCD;">CLOTHING_IDS</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">SHOES</span><span style="color:#F07178;">]: []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#A6ACCD;">CLOTHING_IDS</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ACCESSORIES</span><span style="color:#F07178;">]: []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#A6ACCD;">CLOTHING_IDS</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">UNDERSHIRTS</span><span style="color:#F07178;">]: [</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// MOD NAME: &#39;clothing-mod-a&#39; </span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                dlcName</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dlcpackname</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                count</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    [</span><span style="color:#A6ACCD;">ORIENTATION</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">FEMALE</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    [</span><span style="color:#A6ACCD;">ORIENTATION</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MALE</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">        ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#A6ACCD;">CLOTHING_IDS</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">BODY_ARMOUR</span><span style="color:#F07178;">]: []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        [</span><span style="color:#A6ACCD;">CLOTHING_IDS</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">TOP</span><span style="color:#F07178;">]: [</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// MOD NAME: &#39;clothing-mod-a&#39; </span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                dlcName</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dlcpackname</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                count</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    [</span><span style="color:#A6ACCD;">ORIENTATION</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">FEMALE</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                    [</span><span style="color:#A6ACCD;">ORIENTATION</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MALE</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">        ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="finish" tabindex="-1">Finish <a class="header-anchor" href="#finish" aria-hidden="true">#</a></h3><p>You are all done adding the clothing mod.</p><p>Visit a clothing store in-game to see if it worked.</p><p>Keep in mind that if you remove this mod in the future you will have to remove the clothing item from <strong>all players</strong>.</p><p>Which there is not an automated method to do this.</p>`,36);function D(a,y,F,C,A,h){return t(),o("div",null,[s("h1",r,[l(p(a.$frontmatter.title)+" ",1),i]),d])}const u=n(c,[["render",D]]);export{g as __pageData,u as default};
