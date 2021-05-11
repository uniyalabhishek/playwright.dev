(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{151:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},152:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(a),f=r,d=b["".concat(o,".").concat(f)]||b[f]||u[f]||i;return a?n.a.createElement(d,l(l({ref:t},s),{},{components:a})):n.a.createElement(d,l({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},153:function(e,t,a){"use strict";var r=a(0),n=a(154);t.a=function(){var e=Object(r.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},154:function(e,t,a){"use strict";var r=a(0),n=Object(r.createContext)(void 0);t.a=n},155:function(e,t,a){"use strict";a(0),a(153),a(151),a(53)},156:function(e,t,a){"use strict";a(3),a(0)},86:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),i=(a(0),a(152)),o=(a(155),a(156),{id:"class-filechooser",title:"FileChooser"}),l={unversionedId:"api/class-filechooser",id:"api/class-filechooser",isDocsHomePage:!1,title:"FileChooser",description:"FileChooser] objects are dispatched by the page in the [event Page.FileChooser event.",source:"@site/docs/api/class-filechooser.mdx",slug:"/api/class-filechooser",permalink:"/dotnet/docs/api/class-filechooser",version:"current",sidebar:"api",previous:{title:"ElementHandle",permalink:"/dotnet/docs/api/class-elementhandle"},next:{title:"Frame",permalink:"/dotnet/docs/api/class-frame"}},c=[{value:"FileChooser.Element()",id:"filechooserelement",children:[]},{value:"FileChooser.IsMultiple()",id:"filechooserismultiple",children:[]},{value:"FileChooser.Page()",id:"filechooserpage",children:[]},{value:"FileChooser.SetFilesAsync(files, \u2026)",id:"filechoosersetfilesasyncfiles-",children:[]}],s={toc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/dotnet/docs/api/class-filechooser",title:"FileChooser"}),"FileChooser")," objects are dispatched by the page in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#eventpagefilechooser"}),"event Page.FileChooser")," event."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-filechooser#filechooserelement"}),"FileChooser.Element()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-filechooser#filechooserismultiple"}),"FileChooser.IsMultiple()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-filechooser#filechooserpage"}),"FileChooser.Page()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-filechooser#filechoosersetfilesasyncfiles-"}),"FileChooser.SetFilesAsync(files, \u2026)"))),Object(i.b)("h2",{id:"filechooserelement"},"FileChooser.Element()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),">")),Object(i.b)("p",null,"Returns input element associated with this file chooser."),Object(i.b)("h2",{id:"filechooserismultiple"},"FileChooser.IsMultiple()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">")),Object(i.b)("p",null,"Returns whether this file chooser accepts multiple files."),Object(i.b)("h2",{id:"filechooserpage"},"FileChooser.Page()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page",title:"Page"}),"Page"),">")),Object(i.b)("p",null,"Returns page this file chooser belongs to."),Object(i.b)("h2",{id:"filechoosersetfilesasyncfiles-"},"FileChooser.SetFilesAsync(files, \u2026)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"files")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|","[IEnumerable]","<",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">|",Object(i.b)("inlineCode",{parentName:"li"},"FilePayload"),"|","[IEnumerable]","<",Object(i.b)("inlineCode",{parentName:"li"},"FilePayload"),">>",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"name")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> File name"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mimeType")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> File type"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"buffer")," <","[byte","[","]]","> File content"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"noWaitAfter")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),"> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"timeout")," <","[double]","> Maximum time in milliseconds, defaults to 30 seconds, pass ",Object(i.b)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-browsercontext#browsercontextsetdefaulttimeouttimeout"}),"BrowserContext.SetDefaultTimeout(timeout)")," or ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pagesetdefaulttimeouttimeout"}),"Page.SetDefaultTimeout(timeout)")," methods."),Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">")),Object(i.b)("p",null,"Sets the value of the file input this chooser is associated with. If some of the ",Object(i.b)("inlineCode",{parentName:"p"},"filePaths")," are relative paths, then they are resolved relative to the the current working directory. For empty array, clears the selected files."))}p.isMDXComponent=!0}}]);