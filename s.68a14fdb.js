var app=function(){"use strict";function n(){}function a(n){return n()}function s(){return Object.create(null)}function t(n){n.forEach(a)}function e(n){return"function"==typeof n}function o(n,a){return n!=n?a==a:n!==a}function p(n,a){n.appendChild(a)}function c(n){n.parentNode.removeChild(n)}function l(n){return document.createElement(n)}function u(n){return document.createTextNode(n)}function i(){return u(" ")}function r(n,a,s,t){return n.addEventListener(a,s,t),()=>n.removeEventListener(a,s,t)}function k(n,a,s){null==s?n.removeAttribute(a):n.getAttribute(a)!==s&&n.setAttribute(a,s)}function d(n,a){a=""+a,n.wholeText!==a&&(n.data=a)}let g;function f(n){g=n}function m(){const n=function(){if(!g)throw new Error("Function called outside component initialization");return g}();return(a,s)=>{const t=n.$$.callbacks[a];if(t){const e=function(n,a){const s=document.createEvent("CustomEvent");return s.initCustomEvent(n,!1,!1,a),s}(a,s);t.slice().forEach((a=>{a.call(n,e)}))}}}function h(n,a){const s=n.$$.callbacks[a.type];s&&s.slice().forEach((n=>n(a)))}const $=[],v=[],y=[],b=[],w=Promise.resolve();let x=!1;function M(n){y.push(n)}let E=!1;const C=new Set;function T(){if(!E){E=!0;do{for(let n=0;n<$.length;n+=1){const a=$[n];f(a),L(a.$$)}for(f(null),$.length=0;v.length;)v.pop()();for(let n=0;n<y.length;n+=1){const a=y[n];C.has(a)||(C.add(a),a())}y.length=0}while($.length);for(;b.length;)b.pop()();x=!1,E=!1,C.clear()}}function L(n){if(null!==n.fragment){n.update(),t(n.before_update);const a=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,a),n.after_update.forEach(M)}}const H=new Set;function j(n,a){n&&n.i&&(H.delete(n),n.i(a))}function _(n,a,s,t){if(n&&n.o){if(H.has(n))return;H.add(n),undefined.c.push((()=>{H.delete(n),t&&(s&&n.d(1),t())})),n.o(a)}}function A(n){n&&n.c()}function S(n,s,o){const{fragment:p,on_mount:c,on_destroy:l,after_update:u}=n.$$;p&&p.m(s,o),M((()=>{const s=c.map(a).filter(e);l?l.push(...s):t(s),n.$$.on_mount=[]})),u.forEach(M)}function I(n,a){const s=n.$$;null!==s.fragment&&(t(s.on_destroy),s.fragment&&s.fragment.d(a),s.on_destroy=s.fragment=null,s.ctx=[])}function K(n,a){-1===n.$$.dirty[0]&&($.push(n),x||(x=!0,w.then(T)),n.$$.dirty.fill(0)),n.$$.dirty[a/31|0]|=1<<a%31}function P(a,e,o,p,l,u,i=[-1]){const r=g;f(a);const k=e.props||{},d=a.$$={fragment:null,ctx:null,props:u,update:n,not_equal:l,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(r?r.$$.context:[]),callbacks:s(),dirty:i,skip_bound:!1};let m=!1;if(d.ctx=o?o(a,k,((n,s,...t)=>{const e=t.length?t[0]:s;return d.ctx&&l(d.ctx[n],d.ctx[n]=e)&&(!d.skip_bound&&d.bound[n]&&d.bound[n](e),m&&K(a,n)),s})):[],d.update(),m=!0,t(d.before_update),d.fragment=!!p&&p(d.ctx),e.target){if(e.hydrate){const n=function(n){return Array.from(n.childNodes)}(e.target);d.fragment&&d.fragment.l(n),n.forEach(c)}else d.fragment&&d.fragment.c();e.intro&&j(a.$$.fragment),S(a,e.target,e.anchor),T()}f(r)}class D{$destroy(){I(this,1),this.$destroy=n}$on(n,a){const s=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return s.push(a),()=>{const n=s.indexOf(a);-1!==n&&s.splice(n,1)}}$set(n){var a;this.$$set&&(a=n,0!==Object.keys(a).length)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}function N(a){let s,e;return{c:n,m(n,t){s||(e=[r(document.body,"keyup",a[3]),r(document.body,"keydown",a[4])],s=!0)},p:n,i:n,o:n,d(n){s=!1,t(e)}}}function U(n,a,s){let{paused:t=!1}=a;const e=m();let o=[];return n.$$set=n=>{"paused"in n&&s(0,t=n.paused)},n.$$.update=()=>{2&n.$$.dirty&&o.length>0&&e("combo",o.join("-"))},[t,o,e,()=>{s(1,o=[])},({key:n})=>{t||(s(1,o=[...o,n]),e(n),e("key",n))}]}class O extends D{constructor(n){super(),P(this,n,U,N,o,{paused:0})}}function B(n){let a,s,t,e,o,g,f,m,h,$,v,y,b,w,x,M,E,C,T,L,H,K,P,D,N,U,B,q,G,z,F,R,V,W,J,Q,X,Y,Z,nn,an,sn,tn,en,on,pn,cn,ln,un,rn,kn,dn,gn,fn,mn,hn,$n,vn,yn,bn,wn,xn,Mn,En,Cn,Tn,Ln,Hn,jn,_n,An,Sn,In,Kn,Pn,Dn,Nn,Un,On,Bn,qn,Gn,zn,Fn,Rn,Vn,Wn,Jn,Qn,Xn,Yn,Zn,na,aa,sa,ta,ea,oa,pa,ca,la,ua,ia,ra,ka,da,ga=n[0].join(", ")+"",fa=n[2].join(", ")+"";return U=new O({}),U.$on("Enter",n[4]),Y=new O({props:{paused:!n[1]}}),Y.$on("Escape",n[3]),dn=new O({}),dn.$on("combo",n[6]),Hn=new O({}),Hn.$on("Enter",n[7]),_n=new O({}),_n.$on("Escape",n[8]),Bn=new O({}),Bn.$on("key",n[9]),Xn=new O({}),Xn.$on("combo",n[10]),{c(){a=l("main"),s=l("h1"),s.textContent="svelte-keydown",t=i(),e=l("p"),e.innerHTML='<a href="https://npmjs.com/package/svelte-keydown"><img src="https://img.shields.io/npm/v/svelte-keydown.svg?color=blue" alt="NPM"/></a> \n<a href="https://travis-ci.com/metonym/svelte-keydown"><img src="https://travis-ci.com/metonym/svelte-keydown.svg?branch=master" alt="Build"/></a>',o=i(),g=l("blockquote"),g.innerHTML="<p>Utility to listen for keyboard events.</p>",f=i(),m=l("p"),m.innerHTML='Utility component leveraging the <a href="https://svelte.dev/docs#svelte_body">svelte:body API</a> to listen for <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event">keydown</a> events.',h=i(),$=l("p"),$.innerHTML="<strong>Use Cases</strong>",v=i(),y=l("ul"),y.innerHTML="<li>toggle modals</li> \n<li>capture a combination of keys (i.e., “Meta-s”)</li>",b=i(),w=l("hr"),x=i(),M=l("p"),M.innerHTML="<strong>Table of Contents</strong>",E=l("ul"),E.innerHTML='<li><a href="#install">Install</a></li> \n<li><a href="#usage">Usage</a></li> \n<li><a href="#examples">Examples</a></li> \n<ul><li><a href="#escape-to-close-modal">Escape to Close Modal</a></li> \n<li><a href="#%E2%80%9Ccommand%2Bs%E2%80%9D-to-save">“Command+S” to Save</a></li> \n</ul><li><a href="#api">API</a></li> \n<ul><li><a href="#dispatched-events">Dispatched events</a></li> \n</ul><li><a href="#typescript">TypeScript</a></li> \n<li><a href="#changelog">Changelog</a></li> \n<li><a href="#license">License</a></li>',C=i(),T=l("h2"),T.textContent="Install",L=i(),H=l("pre"),K=i(),P=l("h2"),P.textContent="Usage",D=i(),N=l("div"),A(U.$$.fragment),B=u('\n\nPress "enter": '),q=u(ga),G=l("pre"),z=i(),F=l("h2"),F.textContent="Examples",R=i(),V=l("h3"),V.textContent="Escape to Close Modal",W=i(),J=l("p"),J.textContent="In this use case, keydown events are paused if the modal is not open.",Q=i(),X=l("div"),A(Y.$$.fragment),Z=i(),nn=l("button"),nn.textContent="Toggle modal",an=i(),sn=l("br"),tn=u("\nToggled "),en=u(n[1]),on=l("pre"),pn=i(),cn=l("h3"),cn.textContent="“Command+S” to Save",ln=i(),un=l("p"),un.innerHTML="Use the <code>combo</code> dispatched event to listen for a combination of keys.",rn=i(),kn=l("div"),A(dn.$$.fragment),gn=i(),fn=u(fa),mn=l("pre"),hn=i(),$n=l("h2"),$n.textContent="API",vn=i(),yn=l("table"),yn.innerHTML='<thead><tr><th style="text-align:left">Prop name</th> \n<th style="text-align:left">Value</th></tr></thead> \n<tbody><tr><td style="text-align:left">paused</td> \n<td style="text-align:left"><code>boolean</code> (default: <code>false</code>)</td></tr></tbody>',bn=i(),wn=l("h3"),wn.textContent="Dispatched events",xn=i(),Mn=l("h4"),Mn.innerHTML="<code>on:[Key]</code>",En=i(),Cn=l("p"),Cn.textContent="Example:",Tn=i(),Ln=l("div"),A(Hn.$$.fragment),jn=i(),A(_n.$$.fragment),An=l("pre"),Sn=i(),In=l("h4"),In.innerHTML="<code>on:key</code>",Kn=i(),Pn=l("p"),Pn.innerHTML="Alternative API to <code>on:[Key]</code>.",Dn=i(),Nn=l("p"),Nn.textContent="Example:",Un=i(),On=l("div"),A(Bn.$$.fragment),qn=l("pre"),Gn=i(),zn=l("h4"),zn.innerHTML="<code>on:combo</code>",Fn=i(),Rn=l("p"),Rn.textContent="Triggered when a sequence of keys are pressed and cleared when a keyup event is fired.",Vn=i(),Wn=l("p"),Wn.textContent="Example:",Jn=i(),Qn=l("div"),A(Xn.$$.fragment),Yn=l("pre"),Zn=i(),na=l("h2"),na.textContent="TypeScript",aa=i(),sa=l("p"),sa.textContent="Svelte version 3.31 or greater is required to use this module with TypeScript.",ta=i(),ea=l("h2"),ea.textContent="Changelog",oa=i(),pa=l("p"),pa.innerHTML='<a href="https://github.com/metonym/svelte-keydown/tree/master/CHANGELOG.md">CHANGELOG.md</a>',ca=i(),la=l("h2"),la.textContent="License",ua=i(),ia=l("p"),ia.innerHTML='<a href="https://github.com/metonym/svelte-keydown/tree/master/LICENSE">MIT</a>',k(s,"id","svelte-keydown"),k(T,"id","install"),k(H,"class","language-bash"),k(P,"id","usage"),k(N,"class","code-fence"),k(G,"class","language-svelte"),k(G,"data-svelte",""),k(F,"id","examples"),k(V,"id","escape-to-close-modal"),k(X,"class","code-fence"),k(on,"class","language-svelte"),k(on,"data-svelte",""),k(cn,"id","%E2%80%9Ccommand%2Bs%E2%80%9D-to-save"),k(kn,"class","code-fence"),k(mn,"class","language-svelte"),k(mn,"data-svelte",""),k($n,"id","api"),k(wn,"id","dispatched-events"),k(Mn,"id","on%3A%5Bkey%5D"),k(Ln,"class","code-fence"),k(An,"class","language-svelte"),k(An,"data-svelte",""),k(In,"id","on%3Akey"),k(On,"class","code-fence"),k(qn,"class","language-svelte"),k(qn,"data-svelte",""),k(zn,"id","on%3Acombo"),k(Qn,"class","code-fence"),k(Yn,"class","language-svelte"),k(Yn,"data-svelte",""),k(na,"id","typescript"),k(ea,"id","changelog"),k(la,"id","license"),k(a,"class","markdown-body")},m(c,l){!function(n,a,s){n.insertBefore(a,s||null)}(c,a,l),p(a,s),p(a,t),p(a,e),p(a,o),p(a,g),p(a,f),p(a,m),p(a,h),p(a,$),p(a,v),p(a,y),p(a,b),p(a,w),p(a,x),p(a,M),p(a,E),p(a,C),p(a,T),p(a,L),p(a,H),H.innerHTML='<span class="token function">yarn</span> <span class="token function">add</span> -D svelte-keydown\n<span class="token comment"># OR</span>\n<span class="token function">npm</span> i -D svelte-keydown\n',p(a,K),p(a,P),p(a,D),p(a,N),S(U,N,null),p(N,B),p(N,q),p(a,G),G.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> Keydown <span class="token keyword">from</span> <span class="token string">"svelte-keydown"</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> events <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Keydown</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>Enter=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    events <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>events<span class="token punctuation">,</span> <span class="token string">\'enter\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n\nPress "enter":\n<span class="token language-javascript"><span class="token punctuation">{</span>events<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\', \'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n',p(a,z),p(a,F),p(a,R),p(a,V),p(a,W),p(a,J),p(a,Q),p(a,X),S(Y,X,null),p(X,Z),p(X,nn),p(X,an),p(X,sn),p(X,tn),p(X,en),p(a,on),on.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">let</span> showModal <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">function</span> <span class="token function">closeModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    showModal <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Keydown</span> <span class="token attr-name">paused=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token operator">!</span>showModal<span class="token punctuation">}</span></span> <span class="token attr-name"><span class="token namespace">on:</span>Escape=</span><span class="token language-javascript"><span class="token punctuation">{</span>closeModal<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>click=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    showModal <span class="token operator">=</span> <span class="token operator">!</span>showModal<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">></span></span>Toggle modal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\nToggled\n<span class="token language-javascript"><span class="token punctuation">{</span>showModal<span class="token punctuation">}</span></span>\n',p(a,pn),p(a,cn),p(a,ln),p(a,un),p(a,rn),p(a,kn),S(dn,kn,null),p(kn,gn),p(kn,fn),p(a,mn),mn.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">let</span> save <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Keydown</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>combo=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>detail <span class="token operator">===</span> <span class="token string">\'Meta-s\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Save\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      save <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>save<span class="token punctuation">,</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n\n<span class="token language-javascript"><span class="token punctuation">{</span>save<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\', \'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n',p(a,hn),p(a,$n),p(a,vn),p(a,yn),p(a,bn),p(a,wn),p(a,xn),p(a,Mn),p(a,En),p(a,Cn),p(a,Tn),p(a,Ln),S(Hn,Ln,null),p(Ln,jn),S(_n,Ln,null),p(a,An),An.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Keydown</span> <span class="token attr-name"><span class="token namespace">on:</span>Enter</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Keydown</span> <span class="token attr-name"><span class="token namespace">on:</span>Escape</span> <span class="token punctuation">/></span></span>\n',p(a,Sn),p(a,In),p(a,Kn),p(a,Pn),p(a,Dn),p(a,Nn),p(a,Un),p(a,On),S(Bn,On,null),p(a,qn),qn.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Keydown</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>key=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> detail <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>detail<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// string | "Enter"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n',p(a,Gn),p(a,zn),p(a,Fn),p(a,Rn),p(a,Vn),p(a,Wn),p(a,Jn),p(a,Qn),S(Xn,Qn,null),p(a,Yn),Yn.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Keydown</span>\n  <span class="token attr-name"><span class="token namespace">on:</span>combo=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> detail <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>detail<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "Meta-Shift-a"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n',p(a,Zn),p(a,na),p(a,aa),p(a,sa),p(a,ta),p(a,ea),p(a,oa),p(a,pa),p(a,ca),p(a,la),p(a,ua),p(a,ia),ra=!0,ka||(da=r(nn,"click",n[5]),ka=!0)},p(n,[a]){(!ra||1&a)&&ga!==(ga=n[0].join(", ")+"")&&d(q,ga);const s={};2&a&&(s.paused=!n[1]),Y.$set(s),(!ra||2&a)&&d(en,n[1]),(!ra||4&a)&&fa!==(fa=n[2].join(", ")+"")&&d(fn,fa)},i(n){ra||(j(U.$$.fragment,n),j(Y.$$.fragment,n),j(dn.$$.fragment,n),j(Hn.$$.fragment,n),j(_n.$$.fragment,n),j(Bn.$$.fragment,n),j(Xn.$$.fragment,n),ra=!0)},o(n){_(U.$$.fragment,n),_(Y.$$.fragment,n),_(dn.$$.fragment,n),_(Hn.$$.fragment,n),_(_n.$$.fragment,n),_(Bn.$$.fragment,n),_(Xn.$$.fragment,n),ra=!1},d(n){n&&c(a),I(U),I(Y),I(dn),I(Hn),I(_n),I(Bn),I(Xn),ka=!1,da()}}}function q(n,a,s){let t=[],e=!0;let o=[];return[t,e,o,function(){s(1,e=!1)},()=>{s(0,t=[...t,"enter"])},()=>{s(1,e=!e)},n=>{"Meta-s"===n.detail&&(console.log("Save"),s(2,o=[...o,n.detail]))},function(a){h(n,a)},function(a){h(n,a)},({detail:n})=>{console.log(n)},({detail:n})=>{console.log(n)}]}return new class extends D{constructor(n){super(),P(this,n,q,B,o,{})}}({target:document.body})}();
