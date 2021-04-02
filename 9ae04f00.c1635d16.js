(window.webpackJsonp=window.webpackJsonp||[]).push([[431],{503:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),r=(a(0),a(819)),o=(a(823),a(824),{id:"class-dialog",title:"Dialog"}),l={unversionedId:"api/class-dialog",id:"version-1.9.0/api/class-dialog",isDocsHomePage:!1,title:"Dialog",description:"Dialog] objects are dispatched by page via the [page.on('dialog') event.",source:"@site/versioned_docs/version-1.9.0/api/class-dialog.mdx",slug:"/api/class-dialog",permalink:"/docs/1.9.0/api/class-dialog",version:"1.9.0",sidebar:"version-1.9.0/api",previous:{title:"ConsoleMessage",permalink:"/docs/1.9.0/api/class-consolemessage"},next:{title:"Download",permalink:"/docs/1.9.0/api/class-download"}},c=[{value:"dialog.accept(promptText)",id:"dialogacceptprompttext",children:[]},{value:"dialog.defaultValue()",id:"dialogdefaultvalue",children:[]},{value:"dialog.dismiss()",id:"dialogdismiss",children:[]},{value:"dialog.message()",id:"dialogmessage",children:[]},{value:"dialog.type()",id:"dialogtype",children:[]}],s={toc:c};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-dialog",title:"Dialog"}),"Dialog")," objects are dispatched by page via the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-page#pageondialog"}),"page.on('dialog')")," event."),Object(r.b)("p",null,"An example of using ",Object(r.b)("inlineCode",{parentName:"p"},"Dialog")," class:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.\n\n(async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  page.on('dialog', async dialog => {\n    console.log(dialog.message());\n    await dialog.dismiss();\n    await browser.close();\n  });\n  page.evaluate(() => alert('1'));\n})();\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Dialogs are dismissed automatically, unless there is a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-page#pageondialog"}),"page.on('dialog')")," listener. When listener is present, it ",Object(r.b)("strong",{parentName:"p"},"must")," either ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-dialog#dialogacceptprompttext"}),"dialog.accept([promptText])")," or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.9.0/api/class-dialog#dialogdismiss"}),"dialog.dismiss()")," the dialog - otherwise the page will ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#never_blocking"}),"freeze")," waiting for the dialog, and actions like click will never finish."))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-dialog#dialogacceptprompttext"}),"dialog.accept([promptText])")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-dialog#dialogdefaultvalue"}),"dialog.defaultValue()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-dialog#dialogdismiss"}),"dialog.dismiss()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-dialog#dialogmessage"}),"dialog.message()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.9.0/api/class-dialog#dialogtype"}),"dialog.type()"))),Object(r.b)("h2",{id:"dialogacceptprompttext"},"dialog.accept(","[promptText]",")"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"promptText")," <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> A text to enter in prompt. Does not cause any effects if the dialog's ",Object(r.b)("inlineCode",{parentName:"li"},"type")," is not prompt. Optional.")),Object(r.b)("p",null,"Returns when the dialog has been accepted."),Object(r.b)("h2",{id:"dialogdefaultvalue"},"dialog.defaultValue()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(r.b)("p",null,"If dialog is prompt, returns default prompt value. Otherwise, returns empty string."),Object(r.b)("h2",{id:"dialogdismiss"},"dialog.dismiss()"),Object(r.b)("p",null,"Returns when the dialog has been dismissed."),Object(r.b)("h2",{id:"dialogmessage"},"dialog.message()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(r.b)("p",null,"A message displayed in the dialog."),Object(r.b)("h2",{id:"dialogtype"},"dialog.type()"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(r.b)("p",null,"Returns dialog's type, can be one of ",Object(r.b)("inlineCode",{parentName:"p"},"alert"),", ",Object(r.b)("inlineCode",{parentName:"p"},"beforeunload"),", ",Object(r.b)("inlineCode",{parentName:"p"},"confirm")," or ",Object(r.b)("inlineCode",{parentName:"p"},"prompt"),"."))}p.isMDXComponent=!0},819:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return g}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,g=d["".concat(o,".").concat(u)]||d[u]||b[u]||r;return a?i.a.createElement(g,l(l({ref:t},s),{},{components:a})):i.a.createElement(g,l({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},820:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},821:function(e,t,a){"use strict";var n=a(0),i=a(822);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},822:function(e,t,a){"use strict";var n=a(0),i=Object(n.createContext)(void 0);t.a=i},823:function(e,t,a){"use strict";a(0),a(821),a(820),a(55)},824:function(e,t,a){"use strict";a(3),a(0)}}]);