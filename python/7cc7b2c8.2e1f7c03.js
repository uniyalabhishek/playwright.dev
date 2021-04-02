(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{196:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(3),o=a(7),r=(a(0),a(332)),l=a(335),i=a(336),c={id:"class-mouse",title:"Mouse"},s={unversionedId:"api/class-mouse",id:"api/class-mouse",isDocsHomePage:!1,title:"Mouse",description:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.",source:"@site/docs/api/class-mouse.mdx",slug:"/api/class-mouse",permalink:"/python/docs/next/api/class-mouse",version:"current",sidebar:"api",previous:{title:"Keyboard",permalink:"/python/docs/next/api/class-keyboard"},next:{title:"Page",permalink:"/python/docs/next/api/class-page"}},p=[{value:"mouse.click(x, y, **kwargs)",id:"mouseclickx-y-kwargs",children:[]},{value:"mouse.dblclick(x, y, **kwargs)",id:"mousedblclickx-y-kwargs",children:[]},{value:"mouse.down(**kwargs)",id:"mousedownkwargs",children:[]},{value:"mouse.move(x, y, **kwargs)",id:"mousemovex-y-kwargs",children:[]},{value:"mouse.up(**kwargs)",id:"mouseupkwargs",children:[]}],u={toc:p};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."),Object(r.b)("p",null,"Every ",Object(r.b)("inlineCode",{parentName:"p"},"page")," object has its own Mouse, accessible with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pagemouse"}),"page.mouse"),"."),Object(r.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"sync",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# using \u2018page.mouse\u2019 to trace a 100x100 square.\npage.mouse.move(0, 0)\npage.mouse.down()\npage.mouse.move(0, 100)\npage.mouse.move(100, 100)\npage.mouse.move(100, 0)\npage.mouse.move(0, 0)\npage.mouse.up()\n"))),Object(r.b)(i.a,{value:"async",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# using \u2018page.mouse\u2019 to trace a 100x100 square.\nawait page.mouse.move(0, 0)\nawait page.mouse.down()\nawait page.mouse.move(0, 100)\nawait page.mouse.move(100, 100)\nawait page.mouse.move(100, 0)\nawait page.mouse.move(0, 0)\nawait page.mouse.up()\n")))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-mouse#mouseclickx-y-kwargs"}),"mouse.click(x, y, **kwargs)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-mouse#mousedblclickx-y-kwargs"}),"mouse.dblclick(x, y, **kwargs)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-mouse#mousedownkwargs"}),"mouse.down(**kwargs)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-mouse#mousemovex-y-kwargs"}),"mouse.move(x, y, **kwargs)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-mouse#mouseupkwargs"}),"mouse.up(**kwargs)"))),Object(r.b)("h2",{id:"mouseclickx-y-kwargs"},"mouse.click(x, y, **kwargs)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"x")," <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"y")," <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',Object(r.b)("inlineCode",{parentName:"li"},"left"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"click_count")," <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"}),"int"),"> defaults to 1. See ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"}),"UIEvent.detail"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"delay")," <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),"> Time to wait between ",Object(r.b)("inlineCode",{parentName:"li"},"mousedown")," and ",Object(r.b)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0.")),Object(r.b)("p",null,"Shortcut for ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-mouse#mousemovex-y-kwargs"}),"mouse.move(x, y, **kwargs)"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-mouse#mousedownkwargs"}),"mouse.down(**kwargs)"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-mouse#mouseupkwargs"}),"mouse.up(**kwargs)"),"."),Object(r.b)("h2",{id:"mousedblclickx-y-kwargs"},"mouse.dblclick(x, y, **kwargs)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"x")," <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"y")," <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',Object(r.b)("inlineCode",{parentName:"li"},"left"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"delay")," <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),"> Time to wait between ",Object(r.b)("inlineCode",{parentName:"li"},"mousedown")," and ",Object(r.b)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0.")),Object(r.b)("p",null,"Shortcut for ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-mouse#mousemovex-y-kwargs"}),"mouse.move(x, y, **kwargs)"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-mouse#mousedownkwargs"}),"mouse.down(**kwargs)"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-mouse#mouseupkwargs"}),"mouse.up(**kwargs)"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-mouse#mousedownkwargs"}),"mouse.down(**kwargs)")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-mouse#mouseupkwargs"}),"mouse.up(**kwargs)"),"."),Object(r.b)("h2",{id:"mousedownkwargs"},"mouse.down(**kwargs)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',Object(r.b)("inlineCode",{parentName:"li"},"left"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"click_count")," <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"}),"int"),"> defaults to 1. See ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"}),"UIEvent.detail"),".")),Object(r.b)("p",null,"Dispatches a ",Object(r.b)("inlineCode",{parentName:"p"},"mousedown")," event."),Object(r.b)("h2",{id:"mousemovex-y-kwargs"},"mouse.move(x, y, **kwargs)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"x")," <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"y")," <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"steps")," <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"}),"int"),"> defaults to 1. Sends intermediate ",Object(r.b)("inlineCode",{parentName:"li"},"mousemove")," events.")),Object(r.b)("p",null,"Dispatches a ",Object(r.b)("inlineCode",{parentName:"p"},"mousemove")," event."),Object(r.b)("h2",{id:"mouseupkwargs"},"mouse.up(**kwargs)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',Object(r.b)("inlineCode",{parentName:"li"},"left"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"click_count")," <",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"}),"int"),"> defaults to 1. See ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail",title:"UIEvent.detail"}),"UIEvent.detail"),".")),Object(r.b)("p",null,"Dispatches a ",Object(r.b)("inlineCode",{parentName:"p"},"mouseup")," event."))}b.isMDXComponent=!0},331:function(e,t,a){"use strict";function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},332:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,d=u["".concat(l,".").concat(m)]||u[m]||b[m]||r;return a?o.a.createElement(d,i(i({ref:t},s),{},{components:a})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},333:function(e,t,a){"use strict";var n=a(0),o=a(334);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},334:function(e,t,a){"use strict";var n=a(0),o=Object(n.createContext)(void 0);t.a=o},335:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(333),l=a(331),i=a(55),c=a.n(i),s=37,p=39;t.a=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,u=e.values,b=e.groupId,m=e.className,d=Object(r.a)(),f=d.tabGroupChoices,O=d.setTabGroupChoices,j=Object(n.useState)(i),y=j[0],h=j[1],g=n.Children.toArray(e.children);if(null!=b){var v=f[b];null!=v&&v!==y&&u.some((function(e){return e.value===v}))&&h(v)}var w=function(e){h(e),null!=b&&O(b,e)},N=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},m)},u.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case p:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},a)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},336:function(e,t,a){"use strict";var n=a(3),o=a(0),r=a.n(o);t.a=function(e){var t=e.children,a=e.hidden,o=e.className;return r.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:o}),t)}}}]);