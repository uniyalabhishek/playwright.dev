(window.webpackJsonp=window.webpackJsonp||[]).push([[36,37],{327:function(e,t,n){"use strict";n.r(t);var a=n(343),u=n.n(a),r=n(344),c=n(0),s=n.n(c),o=n(22),i=n(354),l=n(25),h=n(351),p=n(353),f=n(10);var d=function(){var e=Object(p.useHistory)(),t=Object(p.useLocation)(),n=Object(o.default)().siteConfig.baseUrl;return{searchValue:f.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}},D=n(347),v=n(350),m=n(340),g=n(352),F=n(348),b=n(349),j=n(105),O=n.n(j);function C(e){var t=e.searchResult,n=t.document,a=t.type,u=t.page,r=t.tokens,c=t.metadata,o=0===a,i=2===a,l=(o?n.b:u.b).slice(),p=i?n.s:n.t;return o||l.push(u.t),s.a.createElement("article",{className:O.a.searchResultItem},s.a.createElement("h2",null,s.a.createElement(h.a,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:i?Object(m.a)(p,r):Object(g.a)(p,Object(F.a)(c,"t"),r,100)}})),l.length>0&&s.a.createElement("p",{className:O.a.searchResultItemPath},l.join(" \u203a ")),i&&s.a.createElement("p",{className:O.a.searchResultItemSummary,dangerouslySetInnerHTML:{__html:Object(g.a)(n.t,Object(F.a)(c,"t"),r,100)}}))}t.default=function(){var e=Object(o.default)().siteConfig.baseUrl,t=d(),n=t.searchValue,a=t.updateSearchPath,h=Object(c.useState)(n),p=h[0],f=h[1],m=Object(c.useState)(),g=m[0],F=m[1],j=Object(c.useState)(),E=j[0],x=j[1],k=Object(c.useMemo)((function(){return p?'Search results for "'+p+'"':"Search the documentation"}),[p]);Object(c.useEffect)((function(){a(p),g&&(p?g(p,(function(e){x(e)})):x(void 0))}),[p,g]);var A=Object(c.useCallback)((function(e){f(e.target.value)}),[]);return Object(c.useEffect)((function(){n&&n!==p&&f(n)}),[n]),Object(c.useEffect)((function(){function t(){return(t=Object(r.a)(u.a.mark((function t(){var n,a,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(D.a)(e);case 2:n=t.sent,a=n.wrappedIndexes,r=n.zhDictionary,F((function(){return Object(v.a)(a,r,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),s.a.createElement(i.a,{title:k},s.a.createElement(l.a,null,s.a.createElement("meta",{property:"robots",content:"noindex, follow"})),s.a.createElement("div",{className:"container margin-vert--lg"},s.a.createElement("h1",null,k),s.a.createElement("form",null,s.a.createElement("input",{type:"search",name:"q",className:O.a.searchQueryInput,"aria-label":"Search",onChange:A,value:p,autoComplete:"off",autoFocus:!0})),!g&&p&&s.a.createElement("div",null,s.a.createElement(b.a,null)),E&&(E.length>0?s.a.createElement("p",null,E.length," document",1===E.length?"":"s"," found"):s.a.createElement("p",null,"No documents were found")),s.a.createElement("section",null,E&&E.map((function(e){return s.a.createElement(C,{key:e.document.i,searchResult:e})})))))}},338:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return u.a})),n.d(t,"b",(function(){return s})),n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return i}));n(339);var a=n(345),u=n.n(a),r=["en"],c=!1,s="e666dac7",o=10,i=50},340:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(337),u=n(341);function r(e,t,n){for(var c,s=[],o=Object(a.a)(t);!(c=o()).done;){var i=c.value,l=e.toLowerCase().indexOf(i);if(l>=0){l>0&&s.push(r(e.substr(0,l),t)),s.push("<mark>"+Object(u.a)(e.substr(l,i.length))+"</mark>");var h=l+i.length;h<e.length&&s.push(r(e.substr(h),t));break}}return 0===s.length?n?"<mark>"+Object(u.a)(e)+"</mark>":Object(u.a)(e):s.join("")}},341:function(e,t,n){"use strict";function a(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}n.d(t,"a",(function(){return a}))},347:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(343),u=n.n(a),r=n(337),c=n(344),s=n(339),o=n.n(s),i=n(338);function l(e){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(u.a.mark((function e(t){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(t+"search-index.json?_="+i.b);case 3:return e.next=5,e.sent.json();case 5:return n=e.sent,a=n.map((function(e,t){var n=e.documents,a=e.index;return{type:t,documents:n,index:o.a.Index.load(a)}})),c=n.reduce((function(e,t){for(var n,a=Object(r.a)(t.index.invertedIndex);!(n=a()).done;){var u=n.value;/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(u[0][0])&&e.add(u[0])}return e}),new Set),e.abrupt("return",{wrappedIndexes:a,zhDictionary:Array.from(c)});case 9:return e.abrupt("return",{wrappedIndexes:[],zhDictionary:[]});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},348:function(e,t,n){"use strict";function a(e,t){for(var n=[],a=0,u=Object.values(e);a<u.length;a++){var r=u[a];r[t]&&n.push.apply(n,r[t].position)}return n.sort((function(e,t){return e[0]-t[0]||t[1]-e[1]}))}n.d(t,"a",(function(){return a}))},349:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),u=n.n(a),r=n(346),c=n(57),s=n.n(c);function o(e){var t=e.className;return u.a.createElement("div",{className:Object(r.a)(s.a.loadingRing,t)},u.a.createElement("div",null),u.a.createElement("div",null),u.a.createElement("div",null),u.a.createElement("div",null))}},350:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(337),u=n(339),r=n.n(u);var c=n(338);function s(e,t,n){return function(t,u){var s=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return r.a[t[0]].tokenizer(e).map((function(e){return e.toString()}));var n=/[^-\s]+/g;return t.includes("zh")&&(n=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])+/g),e.toLowerCase().match(n)||[]}(t,c.c);if(0!==s.length){var o,i=[{tokens:o=s,term:o.map((function(e){return{value:e,presence:r.a.Query.presence.REQUIRED,wildcard:r.a.Query.wildcard.LEADING|r.a.Query.wildcard.TRAILING}}))}],l=[],h=function(){for(var t,u=p.value,r=u.term,c=u.tokens,s=function(){var u=t.value,s=u.documents,o=u.index,i=u.type;if(l.push.apply(l,o.query((function(e){for(var t,n=Object(a.a)(r);!(t=n()).done;){var u=t.value;e.term(u.value,{wildcard:u.wildcard,presence:u.presence})}})).slice(0,n).filter((function(e){return!l.some((function(t){return t.document.i.toString()===e.ref}))})).slice(0,n-l.length).map((function(t){var n=s.find((function(e){return e.i.toString()===t.ref}));return{document:n,type:i,page:0!==i&&e[0].documents.find((function(e){return e.i===n.p})),metadata:t.matchData.metadata,tokens:c,score:t.score}}))),l.length>=n)return{v:"break|search"}},o=Object(a.a)(e);!(t=o()).done;){var i=s();if("object"==typeof i)return i.v}};e:for(var p,f=Object(a.a)(i);!(p=f()).done;){if("break|search"===h())break e}var d=l.filter((function(e){return"/docs/api"!==e.document.u}));!function(e){e.forEach((function(e,t){e.index=t})),e.sort((function(t,n){var a=t.type>0&&t.page?e.findIndex((function(e){return e.document===t.page})):t.index,u=n.type>0&&n.page?e.findIndex((function(e){return e.document===n.page})):n.index;return-1===a&&(a=t.index),-1===u&&(u=n.index),a===u?0===t.type?-1:0===n.type?1:t.index-n.index:a-u}))}(d),function(e){e.forEach((function(t,n){n>0&&t.page&&e.some((function(e){return e.document===t.page}))&&(n<e.length-1&&e[n+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)}))}(d),u(d)}else u([])}}},352:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(341),u=n(340),r=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/;function c(e){for(var t=[],n=0,a=e;a.length>0;){var u=a.match(r);if(!u){t.push(a);break}u.index>0&&t.push(a.substr(0,u.index)),t.push(u[0]),n+=u.index+u[0].length,a=e.substr(n)}return t}var s=n(338);function o(e,t,n,a){void 0===a&&(a=s.e);for(var u={chunkIndex:-1},r=i(e,t,n,0,0,u),c=r.slice(0,u.chunkIndex),o=r[u.chunkIndex],l=[o.html],h=r.slice(u.chunkIndex+1),p=o.textLength,f=0,d=0,D=!1,v=!1;p<a;)if((f<=d||0===h.length)&&c.length>0){var m=c.pop();p+m.textLength<=a?(l.unshift(m.html),f+=m.textLength,p+=m.textLength):(D=!0,c.length=0)}else{if(!(h.length>0))break;var g=h.shift();p+g.textLength<=a?(l.push(g.html),d+=g.textLength,p+=g.textLength):(v=!0,h.length=0)}return(D||c.length>0)&&l.unshift("\u2026"),(v||h.length>0)&&l.push("\u2026"),l.join("")}function i(e,t,n,r,s,o){var l=[],h=t[r],p=h[0],f=h[1];if(p<s)(r+=1)<t.length&&l.push.apply(l,i(e,t,n,r,s));else{p>s&&l.push.apply(l,c(e.substring(s,p)).map((function(e){return{html:Object(a.a)(e),textLength:e.length}}))),o&&(o.chunkIndex=l.length),l.push({html:Object(u.a)(e.substr(p,f),n,!0),textLength:f});var d=p+f;(r+=1)<t.length?l.push.apply(l,i(e,t,n,r,d)):d<e.length&&l.push.apply(l,c(e.substr(d)).map((function(e){return{html:Object(a.a)(e),textLength:e.length}})))}return l}},357:function(e,t,n){"use strict";var a=n(338),u=n(343),r=n.n(u),c=n(337),s=n(344),o=n(0),i=n.n(o),l=n(346),h=n(22),p=n(10),f=n(353),d=n(347),D=n(350),v=n(340),m=n(352),g=n(348),F=n(56),b=n.n(F);function j(e){var t=e.document,n=e.type,a=e.page,u=e.metadata,r=e.tokens,c=e.isInterOfTree,s=e.isLastOfTree,o=0===n,i=1===n,l=[];c?l.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):s&&l.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');var h=l.map((function(e){return'<span class="'+b.a.hitTree+'">'+e+"</span>"})),p='<span class="'+b.a.hitIcon+'">'+(o?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':i?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>')+"</span>",f=['<span class="'+b.a.hitTitle+'">'+Object(m.a)(t.t,Object(g.a)(u,"t"),r)+"</span>"];o||f.push('<span class="'+b.a.hitPath+'">'+Object(v.a)(a.t||(t.u.startsWith("/docs/api-reference/")?"API Reference":""),r)+"</span>");var d='<span class="'+b.a.hitAction+'"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>';return[].concat(h,[p,'<span class="'+b.a.hitWrapper+'">'],f,["</span>",d]).join("")}function O(){return'<span class="'+b.a.noResults+'"><span class="'+b.a.noResultsIcon+'"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>No results.</span></span>'}var C=n(349);function E(){return x.apply(this,arguments)}function x(){return(x=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(258),n.e(261)]).then(n.t.bind(null,421,7));case 2:return(t=e.sent).noConflict(),e.abrupt("return",t.default);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k="_highlight";t.a=function(e){var t,n=e.handleSearchBarToggle,u=Object(h.default)().siteConfig.baseUrl,v=Object(f.useHistory)(),m=Object(f.useLocation)(),g=Object(o.useRef)(null),F=Object(o.useRef)("empty"),x=Object(o.useRef)(!1),A=Object(o.useState)(!1),y=A[0],w=A[1],I=Object(o.useState)(!1),L=I[0],S=I[1],R=Object(o.useCallback)(Object(s.a)(r.a.mark((function e(){var t,n,s,o,i,l,h;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"===F.current){e.next=2;break}return e.abrupt("return");case 2:return F.current="loading",w(!0),e.next=6,Promise.all([Object(d.a)(u),E()]);case 6:t=e.sent,n=t[0],s=n.wrappedIndexes,o=n.zhDictionary,i=t[1],l=i(g.current,{hint:!1,autoselect:!0,cssClasses:{root:b.a.searchBar,noPrefix:!0,dropdownMenu:b.a.dropdownMenu,input:b.a.input,hint:b.a.hint,suggestions:b.a.suggestions,suggestion:b.a.suggestion,cursor:b.a.cursor,dataset:b.a.dataset,empty:b.a.empty}},[{source:Object(D.a)(s,o,a.f),templates:{suggestion:j,empty:O,footer:function(e){var t=e.query;if(!e.isEmpty){var n=document.createElement("a"),a=u+"search?q="+encodeURIComponent(t);n.href=a,n.textContent="See all results",n.addEventListener("click",(function(e){e.ctrlKey||e.metaKey||(e.preventDefault(),l.autocomplete.close(),v.push(a))}));var r=document.createElement("div");return r.className=b.a.hitFooter,r.appendChild(n),r}}}}]).on("autocomplete:selected",(function(e,t){var n=t.document,u=n.u,r=n.h,s=t.tokens,o=u;if(a.a&&s.length>0){for(var i,l=new URLSearchParams,h=Object(c.a)(s);!(i=h()).done;){var p=i.value;l.append(k,p)}o+="?"+l.toString()}r&&(o+=r),v.push(o)})),F.current="done",w(!1),x.current&&((h=g.current).value&&l.autocomplete.open(),h.focus());case 15:case"end":return e.stop()}}),e)}))),[u,v]);Object(o.useEffect)((function(){if(a.a){var e=p.a.canUseDOM?new URLSearchParams(m.search).getAll(k):[];if(0!==e.length){var t=document.querySelector("article");if(t)new a.a(t).mark(e)}}}),[m.search]);var M=Object(o.useCallback)((function(){x.current=!0,R(),n(!0)}),[n,R]),B=Object(o.useCallback)((function(){n(!1)}),[n]),H=Object(o.useCallback)((function(){R()}),[R]),N=Object(o.useCallback)((function(e){e.target.value&&S(!0)}),[]);return i.a.createElement("div",{className:Object(l.a)("navbar__search",b.a.searchBarContainer,(t={},t[b.a.searchIndexLoading]=y&&L,t))},i.a.createElement("input",{placeholder:"Search","aria-label":"Search",className:"navbar__search-input",onMouseEnter:H,onFocus:M,onBlur:B,onChange:N,ref:g}),i.a.createElement(C.a,{className:b.a.searchBarLoadingRing}))}}}]);