(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[454],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return u},kt:function(){return m}});var a=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,i=function(t,e){if(null==t)return{};var r,a,i={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var s=a.createContext({}),p=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,i=t.mdxType,n=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=p(r),m=i,g=c["".concat(s,".").concat(m)]||c[m]||h[m]||n;return r?a.createElement(g,l(l({ref:e},u),{},{components:r})):a.createElement(g,l({ref:e},u))}));function m(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=r.length,l=new Array(n);l[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var p=2;p<n;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8215:function(t,e,r){"use strict";r(7294)},1395:function(t,e,r){"use strict";r(7294),r(944)},9443:function(t,e,r){"use strict";var a=(0,r(7294).createContext)(void 0);e.Z=a},944:function(t,e,r){"use strict";var a=r(7294),i=r(9443);e.Z=function(){var t=(0,a.useContext)(i.Z);if(null==t)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return t}},4207:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return u}});var a=r(2122),i=r(9756),n=(r(7294),r(3905)),l=(r(1395),r(8215),{id:"showcase",title:"Community Showcase"}),o={unversionedId:"showcase",id:"showcase",isDocsHomePage:!1,title:"Community Showcase",description:"Users",source:"@site/docs/showcase.mdx",sourceDirName:".",slug:"/showcase",permalink:"/dotnet/docs/showcase",version:"current",frontMatter:{id:"showcase",title:"Community Showcase"}},s=[{value:"Users",id:"users",children:[]},{value:"Unofficial language ports",id:"unofficial-language-ports",children:[]},{value:"Tools",id:"tools",children:[]},{value:"Frameworks",id:"frameworks",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Guides",id:"guides",children:[]},{value:"Contributing",id:"contributing",children:[]}],p={toc:s};function u(t){var e=t.components,r=(0,i.Z)(t,["components"]);return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"users"},"Users"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/vscode"},"VS Code"),": Playwright is used to run cross-browser tests on their web builds"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/TypeScript"},"TypeScript"),": Playwright is used to test typescript.js across browsers"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/elastic/apm-agent-rum-js"},"Elastic APM JS agent"),": Playwright is used to run benchmark tests across browsers"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/blockstack/ux"},"Blockstack"),": Playwright is used to run cross-browser UI tests"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fredericbonnet/instakittens-react-admin"},"Instakittens React admin"),": Playwright is used to run end-to-end test scenarios written with Cucumber"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/xtermjs/xterm.js"},"xterm.js"),": Playwright is used to run cross-browser integration tests"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/microsoft/accessibility-insights-web"},"Accessibility Insights for Web"),": Playwright is used with Jest and axe-core to run end-to-end functional and accessibility tests of a WebExtension-based browser extension")),(0,n.kt)("h2",{id:"unofficial-language-ports"},"Unofficial language ports"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Playwright for Go",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mxschmitt/playwright-go"},"GitHub repo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/mxschmitt/playwright-go?tab=doc"},"Documentation")))),(0,n.kt)("li",{parentName:"ul"},"Playwright for Crystal",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/naqvis/playwright-cr"},"GitHub repo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://naqvis.github.io/playwright-cr/"},"Documentation"))))),(0,n.kt)("h2",{id:"tools"},"Tools"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://applitools.com"},"Applitools"),": Add AI-powered visual assertions and run your Playwright tests on all browser, device, and viewport combinations in parallel, without requiring any setup."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Codeception/CodeceptJS"},"CodeceptJS"),": Write scenario-driven Playwright tests with synchronous code"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Xiphe/dom-to-playwright"},"dom-to-playwright")," to copy a JSDOM snapshot into a Playwright page."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/elaichenkov/expected-condition-playwright"},"expected-condition-playwright"),": Supplies a set of common expected conditions that can wait for certain states and conditions"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://headlesstesting.com/support/start/playwright.html"},"Headless Testing"),": Run Playwright tests on browsers in the cloud"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/JakePartusch/lumberjack"},"Lumberjack"),": Automated accessibility scanner to run checks on your entire website"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/HLTech/mockiavelli"},"mockiavelli")," Request mocking library for Playwright to test SPA in isolation from backend APIs."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/aerokube/moon"},"Moon"),": Run Playwright tests in parallel in Kubernetes cluster (free up to 4 parallel sessions)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hugomrdias/playwright-test"},"playwright-test")," Run unit tests and benchmarks in browsers with Node's seamless experience."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/qawolf/playwright-video"},"playwright-video"),": Capture a video while executing a Playwright script"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/qawolf/qawolf"},"QA Wolf"),": Record and create Playwright tests and then run them in CI"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/testimio/root-cause"},"Root Cause OSS"),": Capture screenshots on every step and display in a viewer with logs for easy troubleshooting."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://saucelabs.com/platform/automation-tools/playwright"},"Sauce Labs"),": Run Playwright tests in parallel in the cloud or your own docker environment."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://seleniumbox.com"},"Selenium Box - Enterprise Test Grid"),": Execute Playwright tests securely inside your firewall at scale"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Xiphe/test-real-styles"},"test-real-styles"),": Utility to test real styling of virtual DOM elements in a browser"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.testim.io/playground/"},"Testim Playground"),": Record Playwright UI tests as code"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://try.playwright.tech/"},"Try Playwright"),": Interactive playground for Playwright to run examples directly from your browser")),(0,n.kt)("h2",{id:"frameworks"},"Frameworks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mmarkelov/jest-playwright"},"jest-playwright"),": Jest preset to run Playwright tests with Jest"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Georgegriff/query-selector-shadow-dom"},"query-selector-shadow-dom"),": Custom selector engine to pierce shadow DOM roots"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hdorgeval/playwright-fluent"},"playwright-fluent"),": Fluent API around Playwright"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://robotframework-browser.org/"},"robotframework-browser")," Robotframework library that uses Playwright to achieve good development ergonomics.")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/e2e-boilerplate?utf8=%E2%9C%93&q=playwright"},"e2e Boilerplates"),": Project boilerplates for using Playwright with TypeScript, Cucumber, Jest, and other libraries"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/KyleADay/react-app-playwright"},"react-app-playwright"),": Using Playwright with a create-react-app project"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/azemetre/playwright-react-typescript-jest-example"},"playwright-react-typescript-jest-example"),": Using Playwright + Jest with a custom webpack configuration for React + TypeScript project"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/roggerfe/playwright-mocha"},"playwright-mocha"),": Using Playwright with Mocha and Chai"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apeckham/playwright-cljs"},"playwright-cljs"),": Playwright examples in ClojureScript"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/arjun27/playwright-azure-functions"},"playwright-azure-functions"),": Playwright setup on Azure Functions"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/austinkelleher/playwright-aws-lambda"},"playwright-aws-lambda"),": Playwright setup on AWS Lambda"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/d-shch/playwright-jest-circus-allure"},"playwright-jest-circus-allure"),": Example how to use allure-report and jest-circus with playwright"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mxschmitt/heroku-playwright-example"},"Heroku Playwright Example"),": Example using Playwright on Heroku"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/saucelabs/saucectl-playwright-example"},"Sauce Labs Playwright Example"),": Example using Playwright on Sauce Labs")),(0,n.kt)("h2",{id:"guides"},"Guides"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://theheadless.dev"},"theheadless.dev"),": Practical guides and runnable examples on Playwright (and Puppeteer)")),(0,n.kt)("h2",{id:"contributing"},"Contributing"),(0,n.kt)("p",null,"Did we miss something in this list? Send us a PR!"))}u.isMDXComponent=!0}}]);