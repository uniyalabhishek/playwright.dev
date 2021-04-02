(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(332)),l=n(335),i=n(336),c={id:"class-route",title:"Route"},s={unversionedId:"api/class-route",id:"version-1.9.0/api/class-route",isDocsHomePage:!1,title:"Route",description:"Whenever a network route is set up with page.route(url, handler) or browsercontext.route(url, handler), the Route object allows to handle the route.",source:"@site/versioned_docs/version-1.9.0/api/class-route.mdx",slug:"/api/class-route",permalink:"/python/docs/1.9.0/api/class-route",version:"1.9.0",sidebar:"version-1.9.0/api",previous:{title:"Response",permalink:"/python/docs/1.9.0/api/class-response"},next:{title:"Selectors",permalink:"/python/docs/1.9.0/api/class-selectors"}},b=[{value:"route.abort(**kwargs)",id:"routeabortkwargs",children:[]},{value:"route.continue_(**kwargs)",id:"routecontinue_kwargs",children:[]},{value:"route.fulfill(**kwargs)",id:"routefulfillkwargs",children:[]},{value:"route.request",id:"routerequest",children:[]}],u={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Whenever a network route is set up with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/1.9.0/api/class-page#pagerouteurl-handler"}),"page.route(url, handler)")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/1.9.0/api/class-browsercontext#browser_contextrouteurl-handler"}),"browser_context.route(url, handler)"),", the ",Object(o.b)("inlineCode",{parentName:"p"},"Route")," object allows to handle the route."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-route#routeabortkwargs"}),"route.abort(**kwargs)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-route#routecontinue_kwargs"}),"route.continue_(**kwargs)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-route#routefulfillkwargs"}),"route.fulfill(**kwargs)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-route#routerequest"}),"route.request"))),Object(o.b)("h2",{id:"routeabortkwargs"},"route.abort(**kwargs)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"error_code")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> Optional error code. Defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"failed"),", could be one of the following:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'aborted'")," - An operation was aborted (due to user action)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'accessdenied'")," - Permission to access a resource, other than the network, was denied"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'addressunreachable'")," - The IP address is unreachable. This usually means that there is no route to the specified host or network."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'blockedbyclient'")," - The client chose to block the request."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'blockedbyresponse'")," - The request failed because the response was delivered along with requirements which are not met ('X-Frame-Options' and 'Content-Security-Policy' ancestor checks, for instance)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'connectionaborted'")," - A connection timed out as a result of not receiving an ACK for data sent."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'connectionclosed'")," - A connection was closed (corresponding to a TCP FIN)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'connectionfailed'")," - A connection attempt failed."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'connectionrefused'")," - A connection attempt was refused."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'connectionreset'")," - A connection was reset (corresponding to a TCP RST)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'internetdisconnected'")," - The Internet connection has been lost."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'namenotresolved'")," - The host name could not be resolved."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'timedout'")," - An operation timed out."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'failed'")," - A generic failure occurred.")))),Object(o.b)("p",null,"Aborts the route's request."),Object(o.b)("h2",{id:"routecontinue_kwargs"},"route.continue_(**kwargs)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"headers")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),"[",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"]","> If set changes the request HTTP headers. Header values will be converted to a string."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"method")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> If set changes the request method (e.g. GET or POST)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"post_data")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"|","[Buffer]","> If set changes the post data of request"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"url")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> If set changes the request URL. New URL must have same protocol as original one.")),Object(o.b)("p",null,"Continues route's request with optional overrides."),Object(o.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'def handle(route, request):\n    # override headers\n    headers = {\n        **request.headers,\n        "foo": "bar" # set "foo" header\n        "origin": None # remove "origin" header\n    }\n    route.continue(headers=headers)\n}\npage.route("**/*", handle)\n'))),Object(o.b)(i.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'async def handle(route, request):\n    # override headers\n    headers = {\n        **request.headers,\n        "foo": "bar" # set "foo" header\n        "origin": None # remove "origin" header\n    }\n    await route.continue(headers=headers)\n}\nawait page.route("**/*", handle)\n')))),Object(o.b)("h2",{id:"routefulfillkwargs"},"route.fulfill(**kwargs)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"body")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"|","[Buffer]","> Response body."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"content_type")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> If set, equals to setting ",Object(o.b)("inlineCode",{parentName:"li"},"Content-Type")," response header."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"headers")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),"[",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"]","> Response headers. Header values will be converted to a string."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"path")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"}),"Union"),"[",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"}),"pathlib.Path"),"]","> File path to respond with. The content type will be inferred from file extension. If ",Object(o.b)("inlineCode",{parentName:"li"},"path")," is a relative path, then it is resolved relative to the current working directory."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"status")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"}),"int"),"> Response status code, defaults to ",Object(o.b)("inlineCode",{parentName:"li"},"200"),".")),Object(o.b)("p",null,"Fulfills route's request with given response."),Object(o.b)("p",null,"An example of fulfilling all requests with 404 responses:"),Object(o.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'page.route("**/*", lambda route: route.fulfill(\n    status=404,\n    content_type="text/plain",\n    body="not found!"))\n'))),Object(o.b)(i.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'await page.route("**/*", lambda route: route.fulfill(\n    status=404,\n    content_type="text/plain",\n    body="not found!"))\n')))),Object(o.b)("p",null,"An example of serving static file:"),Object(o.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'page.route("**/xhr_endpoint", lambda route: route.fulfill(path="mock_data.json"))\n'))),Object(o.b)(i.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),'await page.route("**/xhr_endpoint", lambda route: route.fulfill(path="mock_data.json"))\n')))),Object(o.b)("h2",{id:"routerequest"},"route.request"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/1.9.0/api/class-request",title:"Request"}),"Request"),">")),Object(o.b)("p",null,"A request to be routed."))}p.isMDXComponent=!0},331:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},332:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},333:function(e,t,n){"use strict";var a=n(0),r=n(334);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},334:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},335:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(333),l=n(331),i=n(55),c=n.n(i),s=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,u=e.values,p=e.groupId,d=e.className,m=Object(o.a)(),h=m.tabGroupChoices,O=m.setTabGroupChoices,f=Object(a.useState)(i),j=f[0],y=f[1],g=a.Children.toArray(e.children);if(null!=p){var N=h[p];null!=N&&N!==j&&u.some((function(e){return e.value===N}))&&y(N)}var v=function(e){y(e),null!=p&&O(p,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},n)}))),t?Object(a.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},336:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);