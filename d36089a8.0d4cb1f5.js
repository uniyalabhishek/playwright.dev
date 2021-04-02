(window.webpackJsonp=window.webpackJsonp||[]).push([[613],{683:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(819)),i={id:"environment-variables",title:"Environment Variables"},l={unversionedId:"api/environment-variables",id:"version-1.0.0/api/environment-variables",isDocsHomePage:!1,title:"Environment Variables",description:"NOTE playwright-core does not respect environment variables.",source:"@site/versioned_docs/version-1.0.0/api/environment-variables.mdx",slug:"/api/environment-variables",permalink:"/docs/1.0.0/api/environment-variables",version:"1.0.0",sidebar:"version-1.0.0/api",previous:{title:"WebKitBrowser",permalink:"/docs/1.0.0/api/class-webkitbrowser"},next:{title:"Working with selectors",permalink:"/docs/1.0.0/api/working-with-selectors"}},c=[],s={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"NOTE")," ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/playwright-core"}),"playwright-core")," ",Object(a.b)("strong",{parentName:"p"},"does not")," respect environment variables.")),Object(a.b)("p",null,"Playwright looks for certain ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Environment_variable"}),"environment variables")," to aid its operations.\nIf Playwright doesn't find them in the environment, a lowercased variant of these variables will be used from the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.npmjs.com/cli/config"}),"npm config"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"PLAYWRIGHT_DOWNLOAD_HOST")," - overwrite URL prefix that is used to download browsers. Note: this includes protocol and might even include path prefix. By default, Playwright uses ",Object(a.b)("inlineCode",{parentName:"li"},"https://storage.googleapis.com")," to download Chromium and ",Object(a.b)("inlineCode",{parentName:"li"},"https://playwright.azureedge.net")," to download Webkit & Firefox."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"PLAYWRIGHT_BROWSERS_PATH")," - specify a shared folder that playwright will use to download browsers and to look for browsers when launching browser instances."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD")," - set to non-empty value to skip browser downloads altogether.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# Install browsers to the shared location.\n$ PLAYWRIGHT_BROWSERS_PATH=$HOME/playwright-browsers npm install playwright\n# Use shared location to find browsers.\n$ PLAYWRIGHT_BROWSERS_PATH=$HOME/playwright-browsers node playwright-script.js\n")))}p.isMDXComponent=!0},819:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||a;return n?o.a.createElement(d,l(l({ref:t},s),{},{components:n})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);