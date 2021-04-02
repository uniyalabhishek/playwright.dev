(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{282:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return b})),t.d(a,"default",(function(){return d}));var n=t(3),r=t(7),o=(t(0),t(332)),l=t(335),c=t(336),i={id:"dialogs",title:"Dialogs"},s={unversionedId:"dialogs",id:"version-1.8.0/dialogs",isDocsHomePage:!1,title:"Dialogs",description:"Playwright can interact with the web page dialogs such as alert, confirm, prompt as well as beforeunload confirmation.",source:"@site/versioned_docs/version-1.8.0/dialogs.mdx",slug:"/dialogs",permalink:"/python/docs/1.8.0/dialogs",version:"1.8.0",sidebar:"version-1.8.0/docs",previous:{title:"Authentication",permalink:"/python/docs/1.8.0/auth"},next:{title:"Downloads",permalink:"/python/docs/1.8.0/downloads"}},b=[{value:"alert(), confirm(), prompt() dialogs",id:"alert-confirm-prompt-dialogs",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"beforeunload dialog",id:"beforeunload-dialog",children:[]}],p={toc:b};function d(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright can interact with the web page dialogs such as ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/alert"}),Object(o.b)("inlineCode",{parentName:"a"},"alert")),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm"}),Object(o.b)("inlineCode",{parentName:"a"},"confirm")),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt"}),Object(o.b)("inlineCode",{parentName:"a"},"prompt"))," as well as ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event"}),Object(o.b)("inlineCode",{parentName:"a"},"beforeunload"))," confirmation."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#alert-confirm-prompt-dialogs"}),"alert(), confirm(), prompt() dialogs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#beforeunload-dialog"}),"beforeunload dialog"))),Object(o.b)("h2",{id:"alert-confirm-prompt-dialogs"},"alert(), confirm(), prompt() dialogs"),Object(o.b)("p",null,"You can register a dialog handler before the action that triggers the dialog to accept or decline it."),Object(o.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'page.on("dialog", lambda dialog: dialog.accept())\npage.click("button")\n'))),Object(o.b)(c.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'page.on("dialog", lambda dialog: dialog.accept())\nawait page.click("button")\n')))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If your action, be it ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-page#pageclickselector-kwargs"}),"page.click(selector, **kwargs)"),", ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-page#pageevaluateexpression-kwargs"}),"page.evaluate(expression, **kwargs)")," or any other, results in a dialog, the action will stall until the dialog is handled. That's because dialogs in Web are modal and block further page execution until they are handled."))),Object(o.b)("p",null,"As a result, following snippet will never resolve:"),Object(o.b)("p",null,":::warn\nWRONG!\n:::"),Object(o.b)("p",null,":::warn\nWRONG!\n:::"),Object(o.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'page.click("button") # Will hang here\npage.on("dialog", lambda dialog: dialog.accept())\n'))),Object(o.b)(c.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'await page.click("button") # Will hang here\npage.on("dialog", lambda dialog: dialog.accept())\n')))),Object(o.b)("h3",{id:"api-reference"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"[",Object(o.b)("inlineCode",{parentName:"li"},"Dialog"),"]"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-dialog#dialogacceptkwargs"}),"dialog.accept(**kwargs)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-dialog#dialogdismiss"}),"dialog.dismiss()"))),Object(o.b)("h2",{id:"beforeunload-dialog"},"beforeunload dialog"),Object(o.b)("p",null,"When ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-page#pageclosekwargs"}),"page.close(**kwargs)")," is invoked with the truthy ",Object(o.b)("inlineCode",{parentName:"p"},"run_before_unload")," value, it page runs its unload handlers. This is the only case when ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-page#pageclosekwargs"}),"page.close(**kwargs)")," does not wait for the page to actually close, because it might be that the page stays open in the end of the operation."),Object(o.b)("p",null,"You can register a dialog handler to handle the beforeunload dialog yourself:"),Object(o.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"def handle_dialog(dialog):\n    assert dialog.type == 'beforeunload'\n    dialog.dismiss()\n\npage.on('dialog', lambda: handle_dialog)\npage.close(run_before_unload=True)\n"))),Object(o.b)(c.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"async def handle_dialog(dialog):\n    assert dialog.type == 'beforeunload'\n    await dialog.dismiss()\n\npage.on('dialog', lambda: handle_dialog)\nawait page.close(run_before_unload=True)\n")))))}d.isMDXComponent=!0},331:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}},332:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var a=r.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},p=function(e){var a=b(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=b(t),u=n,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return t?r.a.createElement(m,c(c({ref:a},s),{},{components:t})):r.a.createElement(m,c({ref:a},s))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=u;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<o;s++)l[s]=t[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},333:function(e,a,t){"use strict";var n=t(0),r=t(334);a.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},334:function(e,a,t){"use strict";var n=t(0),r=Object(n.createContext)(void 0);a.a=r},335:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(333),l=t(331),c=t(55),i=t.n(c),s=37,b=39;a.a=function(e){var a=e.lazy,t=e.block,c=e.defaultValue,p=e.values,d=e.groupId,u=e.className,m=Object(o.a)(),g=m.tabGroupChoices,f=m.setTabGroupChoices,O=Object(n.useState)(c),h=O[0],j=O[1],y=n.Children.toArray(e.children);if(null!=d){var v=g[d];null!=v&&v!==h&&p.some((function(e){return e.value===v}))&&j(v)}var w=function(e){j(e),null!=d&&f(d,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},u)},p.map((function(e){var a=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===a,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":h===a}),key:a,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case b:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case s:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(N,e.target,e)},onFocus:function(){return w(a)},onClick:function(){w(a)}},t)}))),a?Object(n.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,a){return Object(n.cloneElement)(e,{key:a,hidden:e.props.value!==h})}))))}},336:function(e,a,t){"use strict";var n=t(3),r=t(0),o=t.n(r);a.a=function(e){var a=e.children,t=e.hidden,r=e.className;return o.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:r}),a)}}}]);