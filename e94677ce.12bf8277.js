(window.webpackJsonp=window.webpackJsonp||[]).push([[678],{748:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(819)),c={id:"network",title:"Network"},l={unversionedId:"network",id:"version-1.5.0/network",isDocsHomePage:!1,title:"Network",description:"Playwright provides APIs to monitor and modify network traffic, both HTTP and HTTPS.",source:"@site/versioned_docs/version-1.5.0/network.mdx",slug:"/network",permalink:"/docs/1.5.0/network",version:"1.5.0",sidebar:"version-1.5.0/docs",previous:{title:"Device and environment emulation",permalink:"/docs/1.5.0/emulation"},next:{title:"Assertions",permalink:"/docs/1.5.0/assertions"}},i=[{value:"HTTP Authentication",id:"http-authentication",children:[]},{value:"Handle file downloads",id:"handle-file-downloads",children:[]},{value:"Network events",id:"network-events",children:[]},{value:"Handle requests",id:"handle-requests",children:[]},{value:"Modify requests",id:"modify-requests",children:[]},{value:"Abort requests",id:"abort-requests",children:[]}],s={toc:i};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright provides APIs to ",Object(o.b)("strong",{parentName:"p"},"monitor")," and ",Object(o.b)("strong",{parentName:"p"},"modify")," network traffic, both HTTP and HTTPS.\nAny requests that page does, including ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"}),"XHRs")," and\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"}),"fetch")," requests, can be tracked, modified and handled."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#http-authentication"}),"HTTP Authentication")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#handle-file-downloads"}),"Handle file downloads")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#network-events"}),"Network events")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#handle-requests"}),"Handle requests")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#modify-requests"}),"Modify requests")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#abort-requests"}),"Abort requests"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"http-authentication"},"HTTP Authentication"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const context = await browser.newContext({\n  httpCredentials: {\n    username: 'bill',\n    password: 'pa55w0rd',\n  },\n});\nconst page = await context.newPage();\nawait page.goto('https://example.com');\n")),Object(o.b)("h4",{id:"api-reference"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-browser#browsernewcontextoptions"}),Object(o.b)("inlineCode",{parentName:"a"},"browser.newContext([options])")))),Object(o.b)("br",null),Object(o.b)("h2",{id:"handle-file-downloads"},"Handle file downloads"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const [ download ] = await Promise.all([\n  page.waitForEvent('download'), // <-- start waiting for the download\n  page.click('button#delayed-download') // <-- perform the action that directly or indirectly initiates it.\n]);\nconst path = await download.path();\n")),Object(o.b)("p",null,"For every attachment downloaded by the page, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api/class-page.mdx#event-download"}),Object(o.b)("inlineCode",{parentName:"a"},'"download"'))," event is emitted. If you create a browser context with the ",Object(o.b)("inlineCode",{parentName:"p"},"acceptDownloads: true"),", all these attachments are going to be downloaded into a temporary folder. You can obtain the download url, file system path and payload stream using the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api/class-download.mdx#class-download"}),Object(o.b)("inlineCode",{parentName:"a"},"Download"))," object from the event."),Object(o.b)("h4",{id:"variations"},"Variations"),Object(o.b)("p",null,"If you have no idea what initiates the download, you can still handle the event:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"page.on('download', download => download.path().then(console.log));\n")),Object(o.b)("p",null,"Note that handling the event forks the control flow and makes script harder to follow. Your scenario might end while you are downloading a file since your main control flow is not awaiting for this operation to resolve."),Object(o.b)("h4",{id:"api-reference-1"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/blob/master/docs/class-download.mdx"}),Object(o.b)("inlineCode",{parentName:"a"},"Download"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-page#event-download"}),Object(o.b)("inlineCode",{parentName:"a"},"page.on('download')"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-page#pagewaitforeventevent-optionsorpredicate"}),Object(o.b)("inlineCode",{parentName:"a"},"page.waitForEvent(event)")))),Object(o.b)("br",null),Object(o.b)("h2",{id:"network-events"},"Network events"),Object(o.b)("p",null,"You can monitor all the requests and responses:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { chromium, webkit, firefox } = require('playwright');\n\n(async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n\n  // Subscribe to 'request' and 'response' events.\n  page.on('request', request =>\n      console.log('>>', request.method(), request.url()));\n  page.on('response', response =>\n      console.log('<<', response.status(), response.url()));\n  await page.goto('https://example.com');\n\n  await browser.close();\n})();\n")),Object(o.b)("p",null,"Or wait for a network response after the button click:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Use a glob URL pattern\nconst [response] = await Promise.all([\n  page.waitForResponse('**/api/fetch_data'),\n  page.click('button#update'),\n]);\n")),Object(o.b)("h4",{id:"variations-1"},"Variations"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Use a RegExp\nconst [response] = await Promise.all([\n  page.waitForResponse(/\\.jpeg$/),\n  page.click('button#update'),\n]);\n\n// Use a predicate taking a Response object\nconst [response] = await Promise.all([\n  page.waitForResponse(response => response.url().includes(token)),\n  page.click('button#update'),\n]);\n")),Object(o.b)("h4",{id:"api-reference-2"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-request#class-request"}),"class ",Object(o.b)("inlineCode",{parentName:"a"},"Request"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-response#class-response"}),"class ",Object(o.b)("inlineCode",{parentName:"a"},"Response"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-page#event-request"}),"event ",Object(o.b)("inlineCode",{parentName:"a"},"'request'"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-page#event-response"}),"event ",Object(o.b)("inlineCode",{parentName:"a"},"'response'"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-page#pagewaitforrequesturlorpredicate-options"}),Object(o.b)("inlineCode",{parentName:"a"},"page.waitForRequest(urlOrPredicate[, options])"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-page#pagewaitforresponseurlorpredicate-options"}),Object(o.b)("inlineCode",{parentName:"a"},"page.waitForResponse(urlOrPredicate[, options])")))),Object(o.b)("br",null),Object(o.b)("h2",{id:"handle-requests"},"Handle requests"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.route('**/api/fetch_data', route => route.fulfill({\n  status: 200,\n  body: testData,\n}));\nawait page.goto('https://example.com');\n")),Object(o.b)("p",null,"You can mock API endpoints via handling the network quests in your Playwright script."),Object(o.b)("h4",{id:"variations-2"},"Variations"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Set up route on the entire browser context.\n// It will apply to popup windows and opened links.\n\nawait browserContext.route('**/api/login', route => route.fulfill({\n  status: 200,\n  body: 'accept',\n}));\nawait page.goto('https://example.com');\n")),Object(o.b)("h4",{id:"api-reference-3"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-browsercontext#browsercontextrouteurl-handler"}),Object(o.b)("inlineCode",{parentName:"a"},"browserContext.route(url, handler)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-browsercontext#browsercontextunrouteurl-handler"}),Object(o.b)("inlineCode",{parentName:"a"},"browserContext.unroute(url[, handler])"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-page#pagerouteurl-handler"}),Object(o.b)("inlineCode",{parentName:"a"},"page.route(url, handler)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-page#pageunrouteurl-handler"}),Object(o.b)("inlineCode",{parentName:"a"},"page.unroute(url[, handler])"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-route#class-route"}),Object(o.b)("inlineCode",{parentName:"a"},"Route")))),Object(o.b)("br",null),Object(o.b)("h2",{id:"modify-requests"},"Modify requests"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Delete header\nawait page.route('**/*', route => {\n  const headers = route.request().headers();\n  delete headers['X-Secret'];\n  route.continue({headers});\n});\n\n// Continue requests as POST.\nawait page.route('**/*', route => route.continue({method: 'POST'}));\n")),Object(o.b)("p",null,"You can continue requests with modifications. Example above removes an HTTP header from the outgoing requests."),Object(o.b)("h2",{id:"abort-requests"},"Abort requests"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.route('**/*.{png,jpg,jpeg}', route => route.abort());\n\n// Abort based on the request type\nawait page.route('**/*', route => {\n  return route.request().resourceType() === 'image' ?\n      route.abort() : route.continue();\n});\n")),Object(o.b)("h4",{id:"api-reference-4"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-page#pagerouteurl-handler"}),Object(o.b)("inlineCode",{parentName:"a"},"page.route(url, handler)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-browsercontext#browsercontextrouteurl-handler"}),Object(o.b)("inlineCode",{parentName:"a"},"browserContext.route(url, handler)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-route#routeaborterrorcode"}),Object(o.b)("inlineCode",{parentName:"a"},"route.abort([errorCode])")))),Object(o.b)("br",null))}b.isMDXComponent=!0},819:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,O=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return a?r.a.createElement(O,l(l({ref:t},s),{},{components:a})):r.a.createElement(O,l({ref:t},s))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);