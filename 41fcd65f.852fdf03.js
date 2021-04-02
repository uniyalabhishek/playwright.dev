(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{257:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),o=(a(0),a(819)),i=(a(823),a(824),{id:"why-playwright",title:"Why Playwright?"}),l={unversionedId:"why-playwright",id:"why-playwright",isDocsHomePage:!1,title:"Why Playwright?",description:"Playwright enables fast, reliable and capable automation across all modern browsers. This guide covers those key differentiators to help you decide on the right tool for your automated tests.",source:"@site/docs/why-playwright.mdx",slug:"/why-playwright",permalink:"/docs/next/why-playwright",version:"current",sidebar:"docs",next:{title:"Getting Started",permalink:"/docs/next/intro"}},s=[{value:"Support for all browsers",id:"support-for-all-browsers",children:[]},{value:"Fast and reliable execution",id:"fast-and-reliable-execution",children:[]},{value:"Powerful automation capabilities",id:"powerful-automation-capabilities",children:[]},{value:"Integrates with your workflow",id:"integrates-with-your-workflow",children:[]},{value:"Limitations",id:"limitations",children:[]}],c={toc:s};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright enables fast, reliable and capable automation across all modern browsers. This guide covers those key differentiators to help you decide on the right tool for your automated tests."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#support-for-all-browsers"}),"Support for all browsers")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#fast-and-reliable-execution"}),"Fast and reliable execution")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#powerful-automation-capabilities"}),"Powerful automation capabilities")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#integrates-with-your-workflow"}),"Integrates with your workflow")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#limitations"}),"Limitations")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/release-notes"}),"Release notes"))),Object(o.b)("h2",{id:"support-for-all-browsers"},"Support for all browsers"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Test on Chromium, Firefox and WebKit"),". Playwright has full API coverage for all modern browsers, including Google Chrome and Microsoft Edge (with ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.chromium.org/"}),"Chromium"),"), Apple Safari (with ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://webkit.org/"}),"WebKit"),") and Mozilla Firefox."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Cross-platform WebKit testing"),". With Playwright, test how your app behaves in Apple Safari with WebKit builds for Windows, Linux and macOS. Test locally and on CI."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Test for mobile"),". Use ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/emulation"}),"device emulation")," to test your responsive web apps in mobile web browsers."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Headless and headed"),". Playwright supports headless (without browser UI) and headed (with browser UI) modes for all browsers and all platforms. Headed is great for debugging, and headless is faster and suited for CI/cloud executions.")),Object(o.b)("h2",{id:"fast-and-reliable-execution"},"Fast and reliable execution"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Auto-wait APIs"),". Playwright interactions ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/actionability"}),"auto-wait for elements")," to be ready. This improves reliability and simplifies test authoring."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Timeout-free automation"),". Playwright receives browser signals, like network requests, page navigations and page load events to eliminate the need for sleep timeouts that cause flakiness."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Lean parallelization with browser contexts"),". Reuse a single browser instance for multiple parallelized, isolated execution environments with ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/core-concepts"}),"browser contexts"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Resilient element selectors"),". Playwright can rely on user-facing strings, like text content and accessibility labels to ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/selectors"}),"select elements"),". These strings are more resilient than selectors tightly-coupled to the DOM structure.")),Object(o.b)("h2",{id:"powerful-automation-capabilities"},"Powerful automation capabilities"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Multiple domains, pages and frames"),". Playwright is an out-of-process automation driver that is not limited by the scope of in-page JavaScript execution and can automate scenarios with ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/multi-pages"}),"multiple pages"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Powerful network control"),". Playwright introduces context-wide ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/network"}),"network interception")," to stub and mock network requests."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Modern web features"),". Playwright supports web components through ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/selectors"}),"shadow-piercing selectors"),", ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/emulation"}),"geolocation, permissions"),", web workers and other modern web APIs."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Capabilities to cover all scenarios"),". Support for ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/downloads"}),"file downloads")," and ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/input"}),"uploads"),", out-of-process iframes, native ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/input"}),"input events"),", and even ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/emulation"}),"dark mode"),".")),Object(o.b)("h2",{id:"integrates-with-your-workflow"},"Integrates with your workflow"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"One-line installation"),". Installing Playwright auto-downloads browser dependencies for your team to be onboarded quickly."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ npm i playwright\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"TypeScript support"),". Playwright ships with built-in types for auto-completion and other benefits.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Debugging tools"),". Playwright works with the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/debug"}),"editor debugger and browser developer tools")," to pause execution and inspect the web page.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Language bindings"),". Playwright is available for ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright"}),"Node.js")," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright-python"}),"Python"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright-sharp"}),"C#")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright-java"}),"Java"),". Learn more about ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/languages"}),"supported languages"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Deploy tests to CI"),". First-party ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/docker"}),"Docker image")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright-github-action"}),"GitHub Actions")," to deploy tests to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/ci"}),"your preferred CI/CD provider"),"."))),Object(o.b)("h2",{id:"limitations"},"Limitations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Legacy Edge and IE11 support"),". Playwright does not support legacy Microsoft Edge or IE11 (",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://techcommunity.microsoft.com/t5/microsoft-365-blog/microsoft-365-apps-say-farewell-to-internet-explorer-11-and/ba-p/1591666"}),"deprecation notice"),"). The new Microsoft Edge (on Chromium) is supported."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Test on real mobile devices"),": Playwright uses desktop browsers to emulate mobile devices. If you are interested in running on real mobile devices, please ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/issues/1122"}),"upvote this issue"),".")))}b.isMDXComponent=!0},819:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),b=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(a),m=r,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return a?n.a.createElement(d,l(l({ref:t},c),{},{components:a})):n.a.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},820:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},821:function(e,t,a){"use strict";var r=a(0),n=a(822);t.a=function(){var e=Object(r.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},822:function(e,t,a){"use strict";var r=a(0),n=Object(r.createContext)(void 0);t.a=n},823:function(e,t,a){"use strict";a(0),a(821),a(820),a(55)},824:function(e,t,a){"use strict";a(3),a(0)}}]);