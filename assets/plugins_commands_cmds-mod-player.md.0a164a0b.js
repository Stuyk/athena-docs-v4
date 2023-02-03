import{_ as n,c as e,a,b as l,t as p,d as o,o as c}from"./app.c8ecc363.js";const m=JSON.parse('{"title":"Mod Commands - Player","description":"","frontmatter":{"title":"Mod Commands - Player","order":-97},"headers":[],"relativePath":"plugins/commands/cmds-mod-player.md","lastUpdated":1675421894000}'),t={name:"plugins/commands/cmds-mod-player.md"},r={id:"frontmatter-title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=o(`<h3 id="sethealth" tabindex="-1">sethealth <a class="header-anchor" href="#sethealth" aria-hidden="true">#</a></h3><p>Used to set a target player&#39;s health.</p><p>Health ranges from 99 - 199. 99 = Death</p><p>Don&#39;t ask, it&#39;s just GTA:V internal values.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/sethealth [99-199] [player_id]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/sethealth 199 5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="setarmour" tabindex="-1">setarmour <a class="header-anchor" href="#setarmour" aria-hidden="true">#</a></h3><p>Used to set a target player&#39;s armour.</p><p>Armour ranges from 0 - 100.</p><p>Don&#39;t ask, it&#39;s just GTA:V internal values.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/setarmour [0-100] [player_id]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/setarmour 100 5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="freeze" tabindex="-1">freeze <a class="header-anchor" href="#freeze" aria-hidden="true">#</a></h3><p>Used to freeze a specified player by id.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/freeze [player_id]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/freeze 5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="unfreeze" tabindex="-1">unfreeze <a class="header-anchor" href="#unfreeze" aria-hidden="true">#</a></h3><p>Used to unfreeze a specified player by id.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/unfreeze [player_id]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/unfreeze 5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="kick" tabindex="-1">kick <a class="header-anchor" href="#kick" aria-hidden="true">#</a></h3><p>Used to kick a player</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/kick [player_id] [really_long_reason_here]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/kick 5 Learn to not be hateful.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="ban" tabindex="-1">ban <a class="header-anchor" href="#ban" aria-hidden="true">#</a></h3><p>Used to ban a player</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/ban [player_id] [really_long_reason_here]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/ban 5 Cheating</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="unban" tabindex="-1">unban <a class="header-anchor" href="#unban" aria-hidden="true">#</a></h3><p>Used to kick a player</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/unban [discord_identifier]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/unban 202685967935471617</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="makeadmin" tabindex="-1">makeadmin <a class="header-anchor" href="#makeadmin" aria-hidden="true">#</a></h3><p>Used to set a player&#39;s admin level in-game as an Admin.</p><p>Set to <code>0</code> to revoke all administrative privilege&#39;s.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/makeadmin [player_id] [admin_level_number]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/makeadmin 5 4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="info" tabindex="-1">info <a class="header-anchor" href="#info" aria-hidden="true">#</a></h3><p>Used to retrieve account information of a player in-game.</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/info [player_id]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/info 5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,41);function u(s,h,y,A,C,g){return c(),e("div",null,[a("h1",r,[l(p(s.$frontmatter.title)+" ",1),d]),i])}const v=n(t,[["render",u]]);export{m as __pageData,v as default};