var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let i,u;function a(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d("")}function h(t){u=t}function m(){if(!u)throw new Error("Function called outside component initialization");return u}function g(){const t=m();return(n,e,{cancelable:o=!1}={})=>{const r=t.$$.callbacks[n];if(r){const s=function(t,n,{bubbles:e=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,o,n),r}(n,e,{cancelable:o});return r.slice().forEach((n=>{n.call(t,s)})),!s.defaultPrevented}return!0}}function $(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const b=[],y=[],_=[],k=[],w=Promise.resolve();let v=!1;function E(){v||(v=!0,w.then(L))}function x(t){_.push(t)}const j=new Set;let O=0;function L(){const t=u;do{for(;O<b.length;){const t=b[O];O++,h(t),S(t.$$)}for(h(null),b.length=0,O=0;y.length;)y.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];j.has(n)||(j.add(n),n())}_.length=0}while(b.length);for(;k.length;)k.pop()();v=!1,j.clear(),h(t)}function S(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const A=new Set;let C;function N(){C={r:0,c:[],p:C}}function R(){C.r||r(C.c),C=C.p}function T(t,n){t&&t.i&&(A.delete(t),t.i(n))}function q(t,n,e,o){if(t&&t.o){if(A.has(t))return;A.add(t),C.c.push((()=>{A.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}const I="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function D(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=n[s];if(i){for(const t in c)t in i||(o[t]=1);for(const t in i)r[t]||(e[t]=i[t],r[t]=1);t[s]=i}else for(const t in c)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function P(t){return"object"==typeof t&&null!==t?t:{}}function z(t){t&&t.c()}function B(t,n,o,c){const{fragment:i,on_mount:u,on_destroy:a,after_update:l}=t.$$;i&&i.m(n,o),c||x((()=>{const n=u.map(e).filter(s);a?a.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(x)}function M(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function F(n,e,s,c,i,a,f,d=[-1]){const p=u;h(n);const m=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:o(),dirty:d,skip_bound:!1,root:e.target||p.$$.root};f&&f(m.root);let g=!1;if(m.ctx=s?s(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return m.ctx&&i(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),g&&function(t,n){-1===t.$$.dirty[0]&&(b.push(t),E(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],m.update(),g=!0,r(m.before_update),m.fragment=!!c&&c(m.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);m.fragment&&m.fragment.l(t),t.forEach(l)}else m.fragment&&m.fragment.c();e.intro&&T(n.$$.fragment),B(n,e.target,e.anchor,e.customElement),L()}h(p)}class K{$destroy(){M(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y=[];function H(t,n){return{subscribe:U(t,n).subscribe}}function U(n,e=t){let o;const r=new Set;function s(t){if(c(n,t)&&(n=t,o)){const t=!Y.length;for(const t of r)t[1](),Y.push(t,n);if(t){for(let t=0;t<Y.length;t+=2)Y[t][0](Y[t+1]);Y.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(c,i=t){const u=[c,i];return r.add(u),1===r.size&&(o=e(s)||t),c(n),()=>{r.delete(u),0===r.size&&(o(),o=null)}}}}function W(n,e,o){const c=!Array.isArray(n),i=c?[n]:n,u=e.length<2;return H(o,(n=>{let o=!1;const a=[];let l=0,f=t;const d=()=>{if(l)return;f();const o=e(c?a[0]:a,n);u?n(o):f=s(o)?o:t},p=i.map(((n,e)=>function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(n,(t=>{a[e]=t,l&=~(1<<e),o&&d()}),(()=>{l|=1<<e}))));return o=!0,d(),function(){r(p),f()}}))}function X(t){let e,o,r;const s=[t[2]];var c=t[0];function i(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return c&&(e=new c(i()),e.$on("routeEvent",t[7])),{c(){e&&z(e.$$.fragment),o=p()},m(t,n){e&&B(e,t,n),a(t,o,n),r=!0},p(t,n){const r=4&n?D(s,[P(t[2])]):{};if(c!==(c=t[0])){if(e){N();const t=e;q(t.$$.fragment,1,0,(()=>{M(t,1)})),R()}c?(e=new c(i()),e.$on("routeEvent",t[7]),z(e.$$.fragment),T(e.$$.fragment,1),B(e,o.parentNode,o)):e=null}else c&&e.$set(r)},i(t){r||(e&&T(e.$$.fragment,t),r=!0)},o(t){e&&q(e.$$.fragment,t),r=!1},d(t){t&&l(o),e&&M(e,t)}}}function G(t){let e,o,r;const s=[{params:t[1]},t[2]];var c=t[0];function i(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return c&&(e=new c(i()),e.$on("routeEvent",t[6])),{c(){e&&z(e.$$.fragment),o=p()},m(t,n){e&&B(e,t,n),a(t,o,n),r=!0},p(t,n){const r=6&n?D(s,[2&n&&{params:t[1]},4&n&&P(t[2])]):{};if(c!==(c=t[0])){if(e){N();const t=e;q(t.$$.fragment,1,0,(()=>{M(t,1)})),R()}c?(e=new c(i()),e.$on("routeEvent",t[6]),z(e.$$.fragment),T(e.$$.fragment,1),B(e,o.parentNode,o)):e=null}else c&&e.$set(r)},i(t){r||(e&&T(e.$$.fragment,t),r=!0)},o(t){e&&q(e.$$.fragment,t),r=!1},d(t){t&&l(o),e&&M(e,t)}}}function J(t){let n,e,o,r;const s=[G,X],c=[];function i(t,n){return t[1]?0:1}return n=i(t),e=c[n]=s[n](t),{c(){e.c(),o=p()},m(t,e){c[n].m(t,e),a(t,o,e),r=!0},p(t,[r]){let u=n;n=i(t),n===u?c[n].p(t,r):(N(),q(c[u],1,1,(()=>{c[u]=null})),R(),e=c[n],e?e.p(t,r):(e=c[n]=s[n](t),e.c()),T(e,1),e.m(o.parentNode,o))},i(t){r||(T(e),r=!0)},o(t){q(e),r=!1},d(t){c[n].d(t),t&&l(o)}}}function Q(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let o="";return e>-1&&(o=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:o}}const V=H(null,(function(t){t(Q());const n=()=>{t(Q())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));W(V,(t=>t.location)),W(V,(t=>t.querystring));const Z=U(void 0);function tt(t,n,e){let{routes:o={}}=n,{prefix:r=""}=n,{restoreScrollState:s=!1}=n;class c{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:e,keys:o}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,o,r,s,c=[],i="",u=t.split("/");for(u[0]||u.shift();r=u.shift();)"*"===(e=r[0])?(c.push("wild"),i+="/(.*)"):":"===e?(o=r.indexOf("?",1),s=r.indexOf(".",1),c.push(r.substring(1,~o?o:~s?s:r.length)),i+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(i+=(~o?"?":"")+"\\"+r.substring(s))):i+="/"+r;return{keys:c,pattern:new RegExp("^"+i+(n?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.component,this.conditions=n.conditions||[],this.userData=n.userData,this.props=n.props||{}):(this.component=()=>Promise.resolve(n),this.conditions=[],this.props={}),this._pattern=e,this._keys=o}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const n=t.match(r);if(!n||!n[0])return null;t=t.substr(n[0].length)||"/"}const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let o=0;for(;o<this._keys.length;){try{e[this._keys[o]]=decodeURIComponent(n[o+1]||"")||null}catch(t){e[this._keys[o]]=null}o++}return e}async checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!await this.conditions[n](t))return!1;return!0}}const i=[];o instanceof Map?o.forEach(((t,n)=>{i.push(new c(n,t))})):Object.keys(o).forEach((t=>{i.push(new c(t,o[t]))}));let u=null,a=null,l={};const f=g();async function d(t,n){await(E(),w),f(t,n)}let p=null,h=null;var b;s&&(h=t=>{p=t.state&&t.state.__svelte_spa_router_scrollY?t.state:null},window.addEventListener("popstate",h),b=()=>{p?window.scrollTo(p.__svelte_spa_router_scrollX,p.__svelte_spa_router_scrollY):window.scrollTo(0,0)},m().$$.after_update.push(b));let y=null,_=null;const k=V.subscribe((async t=>{y=t;let n=0;for(;n<i.length;){const o=i[n].match(t.location);if(!o){n++;continue}const r={route:i[n].path,location:t.location,querystring:t.querystring,userData:i[n].userData,params:o&&"object"==typeof o&&Object.keys(o).length?o:null};if(!await i[n].checkConditions(r))return e(0,u=null),_=null,void d("conditionsFailed",r);d("routeLoading",Object.assign({},r));const s=i[n].component;if(_!=s){s.loading?(e(0,u=s.loading),_=s,e(1,a=s.loadingParams),e(2,l={}),d("routeLoaded",Object.assign({},r,{component:u,name:u.name,params:a}))):(e(0,u=null),_=null);const n=await s();if(t!=y)return;e(0,u=n&&n.default||n),_=s}return o&&"object"==typeof o&&Object.keys(o).length?e(1,a=o):e(1,a=null),e(2,l=i[n].props),void d("routeLoaded",Object.assign({},r,{component:u,name:u.name,params:a})).then((()=>{Z.set(a)}))}e(0,u=null),_=null,Z.set(void 0)}));return function(t){m().$$.on_destroy.push(t)}((()=>{k(),h&&window.removeEventListener("popstate",h)})),t.$$set=t=>{"routes"in t&&e(3,o=t.routes),"prefix"in t&&e(4,r=t.prefix),"restoreScrollState"in t&&e(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[u,a,l,o,r,s,function(n){$.call(this,t,n)},function(n){$.call(this,t,n)}]}class nt extends K{constructor(t){super(),F(this,t,tt,J,c,{routes:3,prefix:4,restoreScrollState:5})}}function et(t){var n;return n=()=>{window.open(`${location.origin}`,"_self")},m().$$.on_mount.push(n),[]}const{document:ot}=I;function rt(n){let e,o,r,s,c,u;return{c(){var t,n,c,u,a;e=f("h1"),e.innerHTML='모바일 청첩장 전송하기<br/> \n  <a id="kakao"><img src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" width="195" height="195" style="max-width: 500%; height: auto;" alt=""/></a> 전송버튼',o=d(" "),r=f("script"),u=r.src,a=s="https://developers.kakao.com/sdk/js/kakao.js",i||(i=document.createElement("a")),i.href=a,u!==i.href&&(t=r,n="src",null==(c="https://developers.kakao.com/sdk/js/kakao.js")?t.removeAttribute(n):t.getAttribute(n)!==c&&t.setAttribute(n,c))},m(t,s){var i,l,f,d;a(t,e,s),a(t,o,s),function(t,n){t.appendChild(n)}(ot.head,r),c||(i=r,l="load",f=n[0],i.addEventListener(l,f,d),u=()=>i.removeEventListener(l,f,d),c=!0)},p:t,i:t,o:t,d(t){t&&l(e),t&&l(o),l(r),c=!1,u()}}}function st(t){return[()=>{Kakao.init("d6f07c9ac1bc161138392927472aacfe"),Kakao.Link.createCustomButton({container:document.getElementById("kakao"),templateId:80490})}]}var ct={"/":class extends K{constructor(t){super(),F(this,t,et,null,c,{})}},"/send":class extends K{constructor(t){super(),F(this,t,st,rt,c,{})}}};function it(n){let e,o,r;return o=new nt({props:{routes:ct}}),{c(){e=f("main"),z(o.$$.fragment)},m(t,n){a(t,e,n),B(o,e,null),r=!0},p:t,i(t){r||(T(o.$$.fragment,t),r=!0)},o(t){q(o.$$.fragment,t),r=!1},d(t){t&&l(e),M(o)}}}return new class extends K{constructor(t){super(),F(this,t,null,it,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
