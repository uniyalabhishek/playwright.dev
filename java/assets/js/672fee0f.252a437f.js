(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4171],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,f=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),a=n(944),i=n(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,c=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,p=e.values,h=e.groupId,d=e.className,f=(0,a.Z)(),g=f.tabGroupChoices,m=f.setTabGroupChoices,w=(0,r.useState)(u),v=w[0],y=w[1],b=r.Children.toArray(e.children),k=[];if(null!=h){var x=g[h];null!=x&&x!==v&&p.some((function(e){return e.value===x}))&&y(x)}var j=function(e){var t=e.currentTarget,n=k.indexOf(t),r=p[n].value;y(r),null!=h&&(m(h,r),setTimeout((function(){var e,n,r,a,i,o,l,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&i<=c&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},P=function(e){var t,n;switch(e.keyCode){case c:var r=k.indexOf(e.target)+1;n=k[r]||k[0];break;case l:var a=k.indexOf(e.target)-1;n=k[a]||k[k.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":v===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:P,onFocus:j,onClick:j},n)}))),t?(0,r.cloneElement)(b.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},3376:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=(n(1395),n(8215),{id:"test-runners",title:"Test Runners"}),s={unversionedId:"test-runners",id:"test-runners",isDocsHomePage:!1,title:"Test Runners",description:"With a few lines of code, you can hook up Playwright to your favorite Java test runner.",source:"@site/docs/test-runners.mdx",sourceDirName:".",slug:"/test-runners",permalink:"/java/docs/next/test-runners",version:"current",frontMatter:{id:"test-runners",title:"Test Runners"},sidebar:"docs",previous:{title:"Release notes",permalink:"/java/docs/next/release-notes"},next:{title:"Auto-waiting",permalink:"/java/docs/next/actionability"}},l=[{value:"JUnit",id:"junit",children:[{value:"Running Tests in Parallel",id:"running-tests-in-parallel",children:[]}]}],c={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"With a few lines of code, you can hook up Playwright to your favorite Java test runner."),(0,i.kt)("p",null,"Playwright and Browser instances can be reused between tests for better performance. We recommend running each test case in a new BrowserContext, this way browser state will be isolated between the tests."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#junit"},"JUnit"))),(0,i.kt)("h2",{id:"junit"},"JUnit"),(0,i.kt)("p",null,"In JUnit you can initialize ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-playwright",title:"Playwright"},"Playwright")," and ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-browser",title:"Browser"},"Browser")," in ",(0,i.kt)("a",{parentName:"p",href:"https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/BeforeAll.html"},"@BeforeAll")," method and destroy them in ",(0,i.kt)("a",{parentName:"p",href:"https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/AfterAll.html"},"@AfterAll"),". In the example below all three test methods use the same ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-browser",title:"Browser"},"Browser"),". Each test uses its own ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," and ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-page",title:"Page"},"Page"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package org.example;\n\nimport com.microsoft.playwright.Browser;\nimport com.microsoft.playwright.BrowserContext;\nimport com.microsoft.playwright.Page;\nimport com.microsoft.playwright.Playwright;\nimport org.junit.jupiter.api.*;\n\nimport static org.junit.jupiter.api.Assertions.assertEquals;\nimport static org.junit.jupiter.api.Assertions.assertTrue;\n\npublic class TestExample {\n  // Shared between all tests in this class.\n  static Playwright playwright;\n  static Browser browser;\n\n  // New instance for each test method.\n  BrowserContext context;\n  Page page;\n\n  @BeforeAll\n  static void launchBrowser() {\n    playwright = Playwright.create();\n    browser = playwright.chromium().launch();\n  }\n\n  @AfterAll\n  static void closeBrowser() {\n    playwright.close();\n  }\n\n  @BeforeEach\n  void createContextAndPage() {\n    context = browser.newContext();\n    page = context.newPage();\n  }\n\n  @AfterEach\n  void closeContext() {\n    context.close();\n  }\n\n  @Test\n  void shouldClickButton() {\n    page.navigate("data:text/html,<script>var result;<\/script><button onclick=\'result=\\"Clicked\\"\'>Go</button>");\n    page.click("button");\n    assertEquals("Clicked", page.evaluate("result"));\n  }\n\n  @Test\n  void shouldCheckTheBox() {\n    page.setContent("<input id=\'checkbox\' type=\'checkbox\'></input>");\n    page.check("input");\n    assertTrue((Boolean) page.evaluate("() => window[\'checkbox\'].checked"));\n  }\n\n  @Test\n  void shouldSearchWiki() {\n    page.navigate("https://www.wikipedia.org/");\n    page.click("input[name=\\"search\\"]");\n    page.fill("input[name=\\"search\\"]", "playwright");\n    page.press("input[name=\\"search\\"]", "Enter");\n    assertEquals("https://en.wikipedia.org/wiki/Playwright", page.url());\n  }\n}\n')),(0,i.kt)("h3",{id:"running-tests-in-parallel"},"Running Tests in Parallel"),(0,i.kt)("p",null,"By default JUnit will run all tests sequentially on a single thread. Since JUnit 5.3 you can change this behavior to run tests in parallel to speed up execution (see ",(0,i.kt)("a",{parentName:"p",href:"https://junit.org/junit5/docs/snapshot/user-guide/index.html#writing-tests-parallel-execution"},"this page"),"). Since it is not safe to use same Playwright objects from multiple threads without extra synchronization we recommend you create Playwright instance per thread and use it on that thread exclusively. Here is an example how to run multiple test classes in parallel."),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://junit.org/junit5/docs/current/api/org.junit.jupiter.api/org/junit/jupiter/api/TestInstance.html"},(0,i.kt)("inlineCode",{parentName:"a"},"@TestInstance(TestInstance.Lifecycle.PER_CLASS)"))," annotation to make JUnit create one instance of a class for all test methods within that class (by default each JUnit will create a new instance of the class for each test method). Store ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-playwright",title:"Playwright"},"Playwright")," and ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-browser",title:"Browser"},"Browser")," objects in instance fields. They will be shared between tests. Each instace of the class will use its own copy of Playwright."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Subclasses will inherit PER_CLASS behavior.\n@TestInstance(TestInstance.Lifecycle.PER_CLASS)\nclass TestFixtures {\n  // Shared between all tests in the class.\n  Playwright playwright;\n  Browser browser;\n\n  @BeforeAll\n  void launchBrowser() {\n    playwright = Playwright.create();\n    browser = playwright.chromium().launch();\n  }\n\n  @AfterAll\n  void closeBrowser() {\n    playwright.close();\n  }\n\n  // New instance for each test method.\n  BrowserContext context;\n  Page page;\n\n  @BeforeEach\n  void createContextAndPage() {\n    context = browser.newContext();\n    page = context.newPage();\n  }\n\n  @AfterEach\n  void closeContext() {\n    context.close();\n  }\n}\n\nclass Test1 extends TestFixtures {\n  @Test\n  void shouldClickButton() {\n    page.navigate("data:text/html,<script>var result;<\/script><button onclick=\'result=\\"Clicked\\"\'>Go</button>");\n    page.click("button");\n    assertEquals("Clicked", page.evaluate("result"));\n  }\n\n  @Test\n  void shouldCheckTheBox() {\n    page.setContent("<input id=\'checkbox\' type=\'checkbox\'></input>");\n    page.check("input");\n    assertTrue((Boolean) page.evaluate("() => window[\'checkbox\'].checked"));\n  }\n\n  @Test\n  void shouldSearchWiki() {\n    page.navigate("https://www.wikipedia.org/");\n    page.click("input[name=\\"search\\"]");\n    page.fill("input[name=\\"search\\"]", "playwright");\n    page.press("input[name=\\"search\\"]", "Enter");\n    assertEquals("https://en.wikipedia.org/wiki/Playwright", page.url());\n  }\n}\n\nclass Test2 extends TestFixtures {\n  @Test\n  void shouldReturnInnerHTML() {\n    page.setContent("<div>hello</div>");\n    assertEquals("hello", page.innerHTML("css=div"));\n  }\n\n  @Test\n  void shouldClickButton() {\n    Page popup = page.waitForPopup(() -> {\n      page.evaluate("window.open(\'about:blank\');");\n    });\n    assertEquals("about:blank", popup.url());\n  }\n}\n')),(0,i.kt)("p",null,"Configure JUnit to run tests in each class sequentially and run multiple classes on parallel threads (with max number of thread equal to 1/2 of the number of CPU cores):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"junit.jupiter.execution.parallel.enabled = true\njunit.jupiter.execution.parallel.mode.default = same_thread\njunit.jupiter.execution.parallel.mode.classes.default = concurrent\njunit.jupiter.execution.parallel.config.strategy=dynamic\njunit.jupiter.execution.parallel.config.dynamic.factor=0.5\n")))}u.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);