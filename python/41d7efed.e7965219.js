(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{152:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return s})),t.d(a,"metadata",(function(){return b})),t.d(a,"toc",(function(){return i})),t.d(a,"default",(function(){return u}));var n=t(3),r=t(7),c=(t(0),t(393)),l=t(396),o=t(397),s={id:"core-concepts",title:"Core concepts"},b={unversionedId:"core-concepts",id:"version-1.10.0/core-concepts",isDocsHomePage:!1,title:"Core concepts",description:"Playwright provides a set of APIs to automate Chromium, Firefox and WebKit browsers. By using the Playwright API, you can write scripts to create new browser pages, navigate to URLs and then interact with elements on a page.",source:"@site/versioned_docs/version-1.10.0/core-concepts.mdx",slug:"/core-concepts",permalink:"/python/docs/1.10.0/core-concepts",version:"1.10.0",sidebar:"version-1.10.0/docs",previous:{title:"Getting Started",permalink:"/python/docs/1.10.0/intro"},next:{title:"Debugging tools",permalink:"/python/docs/1.10.0/debug"}},i=[{value:"Browser",id:"browser",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Browser contexts",id:"browser-contexts",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Pages and frames",id:"pages-and-frames",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Selectors",id:"selectors",children:[]},{value:"Auto-waiting",id:"auto-waiting",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Execution contexts: Playwright and Browser",id:"execution-contexts-playwright-and-browser",children:[]},{value:"Evaluation Argument",id:"evaluation-argument",children:[{value:"API reference",id:"api-reference-4",children:[]}]}],p={toc:i};function u(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Playwright provides a set of APIs to automate Chromium, Firefox and WebKit browsers. By using the Playwright API, you can write scripts to create new browser pages, navigate to URLs and then interact with elements on a page."),Object(c.b)("p",null,"Along with a test runner Playwright can be used to automate user interactions to validate and test web applications. The Playwright API enables this through the following primitives."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#browser"}),"Browser")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#browser-contexts"}),"Browser contexts")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#pages-and-frames"}),"Pages and frames")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#selectors"}),"Selectors")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#auto-waiting"}),"Auto-waiting")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#execution-contexts-playwright-and-browser"}),"Execution contexts: Playwright and Browser")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#evaluation-argument"}),"Evaluation Argument"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"browser"},"Browser"),Object(c.b)("p",null,"A ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.10.0/api/class-browser",title:"Browser"}),"Browser")," refers to an instance of Chromium, Firefox or WebKit. Playwright scripts generally start with launching a browser instance and end with closing the browser. Browser instances can be launched in headless (without a GUI) or headful mode."),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    browser = p.chromium.launch(headless=False)\n    browser.close()\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def main():\n    async with async_playwright() as p:\n        browser = await p.chromium.launch(headless=False)\n        await browser.close()\n\nasyncio.run(main())\n")))),Object(c.b)("p",null,"Launching a browser instance can be expensive, and Playwright is designed to maximize what a single instance can do through multiple browser contexts."),Object(c.b)("h3",{id:"api-reference"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.10.0/api/class-browser",title:"Browser"}),"Browser"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"browser-contexts"},"Browser contexts"),Object(c.b)("p",null,"A ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.10.0/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," is an isolated incognito-alike session within a browser instance. Browser contexts are fast and cheap to create. We recommend running each test scenario in its own new Browser context, so that the browser state is isolated between the tests."),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"browser = playwright.chromium.launch()\ncontext = browser.new_context()\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"browser = await playwright.chromium.launch()\ncontext = await browser.new_context()\n")))),Object(c.b)("p",null,"Browser contexts can also be used to emulate multi-page scenarios involving mobile devices, permissions, locale and color scheme."),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    iphone_11 = p.devices['iPhone 11 Pro']\n    browser = p.webkit.launch(headless=False)\n    context = browser.new_context(\n        **iphone_11,\n        locale='de-DE',\n        geolocation={ 'longitude': 12.492507, 'latitude': 41.889938 },\n        permissions=['geolocation']\n    )\n    browser.close()\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"import asyncio\nfrom playwright.async_api import async_playwright\n\nasync def main():\n    async with async_playwright() as p:\n        iphone_11 = p.devices['iPhone 11 Pro']\n        browser = await p.chromium.launch()\n        context = await browser.new_context(\n            **iphone_11,\n            locale='de-DE',\n            geolocation={ 'longitude': 12.492507, 'latitude': 41.889938 },\n            permissions=['geolocation'],\n            color_scheme='dark',\n        )\n        page = await browser.new_page()\n        await browser.close()\n\nasyncio.run(main())\n")))),Object(c.b)("h3",{id:"api-reference-1"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.10.0/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.10.0/api/class-browser#browsernew_contextkwargs"}),"browser.new_context(**kwargs)"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"pages-and-frames"},"Pages and frames"),Object(c.b)("p",null,"A Browser context can have multiple pages. A ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.10.0/api/class-page",title:"Page"}),"Page")," refers to a single tab or a popup window within a browser context. It should be used to navigate to URLs and interact with the page content."),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"page = context.new_page()\n\n# Navigate explicitly, similar to entering a URL in the browser.\npage.goto('http://example.com')\n# Fill an input.\npage.fill('#search', 'query')\n\n# Navigate implicitly by clicking a link.\npage.click('#submit')\n# Expect a new url.\nprint(page.url)\n\n# Page can navigate from the script - this will be picked up by Playwright.\n# window.location.href = 'https://example.com'\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"page = await context.new_page()\n\n# Navigate explicitly, similar to entering a URL in the browser.\nawait page.goto('http://example.com')\n# Fill an input.\nawait page.fill('#search', 'query')\n\n# Navigate implicitly by clicking a link.\nawait page.click('#submit')\n# Expect a new url.\nprint(page.url)\n\n# Page can navigate from the script - this will be picked up by Playwright.\n# window.location.href = 'https://example.com'\n")))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Read more on ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.10.0/navigations"}),"page navigation and loading"),".")),Object(c.b)("p",null,"A page can have one or more ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.10.0/api/class-frame",title:"Frame"}),"Frame")," objects attached to it. Each page has a main frame and page-level interactions (like ",Object(c.b)("inlineCode",{parentName:"p"},"click"),") are assumed to operate in the main frame."),Object(c.b)("p",null,"A page can have additional frames attached with the ",Object(c.b)("inlineCode",{parentName:"p"},"iframe")," HTML tag. These frames can be accessed for interactions inside the frame."),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Get frame using the frame's name attribute\nframe = page.frame('frame-login')\n\n# Get frame using frame's URL\nframe = page.frame(url=r'.*domain.*')\n\n# Get frame using any other selector\nframe_element_handle = page.query_selector('.frame-class')\nframe = frame_element_handle.content_frame()\n\n# Interact with the frame\nframe.fill('#username-input', 'John')\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Get frame using the frame's name attribute\nframe = page.frame('frame-login')\n\n# Get frame using frame's URL\nframe = page.frame(url=r'.*domain.*')\n\n# Get frame using any other selector\nframe_element_handle = await page.query_selector('.frame-class')\nframe = await frame_element_handle.content_frame()\n\n# Interact with the frame\nawait frame.fill('#username-input', 'John')\n")))),Object(c.b)("h3",{id:"api-reference-2"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.10.0/api/class-page",title:"Page"}),"Page")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.10.0/api/class-frame",title:"Frame"}),"Frame")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.10.0/api/class-page#pageframekwargs"}),"page.frame(**kwargs)"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"selectors"},"Selectors"),Object(c.b)("p",null,"Playwright can search for elements using CSS selectors, XPath selectors, HTML attributes like ",Object(c.b)("inlineCode",{parentName:"p"},"id"),", ",Object(c.b)("inlineCode",{parentName:"p"},"data-test-id")," and even text content."),Object(c.b)("p",null,"You can explicitly specify the selector engine you are using or let Playwright detect it."),Object(c.b)("p",null,"All selector engines except for XPath pierce shadow DOM by default. If you want to enforce regular DOM selection, you can use the ",Object(c.b)("inlineCode",{parentName:"p"},"*:light")," versions of the selectors. You don't typically need to though."),Object(c.b)("p",null,"Learn more about selectors and selector engines ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.10.0/selectors"}),"here"),"."),Object(c.b)("p",null,"Some examples below:"),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Using data-test-id= selector engine\npage.click('data-test-id=foo')\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Using data-test-id= selector engine\nawait page.click('data-test-id=foo')\n")))),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# CSS and XPath selector engines are automatically detected\npage.click('div')\npage.click('//html/body/div')\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# CSS and XPath selector engines are automatically detected\nawait page.click('div')\nawait page.click('//html/body/div')\n")))),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Find node by text substring\npage.click('text=Hello w')\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Find node by text substring\nawait page.click('text=Hello w')\n")))),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Explicit CSS and XPath notation\npage.click('css=div')\npage.click('xpath=//html/body/div')\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Explicit CSS and XPath notation\nawait page.click('css=div')\nawait page.click('xpath=//html/body/div')\n")))),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Only search light DOM, outside WebComponent shadow DOM:\npage.click('css:light=div')\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Only search light DOM, outside WebComponent shadow DOM:\nawait page.click('css:light=div')\n")))),Object(c.b)("p",null,"Selectors using the same or different engines can be combined using the ",Object(c.b)("inlineCode",{parentName:"p"},">>")," separator. For example,"),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Click an element with text 'Sign Up' inside of a #free-month-promo.\npage.click('#free-month-promo >> text=Sign Up')\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Click an element with text 'Sign Up' inside of a #free-month-promo.\nawait page.click('#free-month-promo >> text=Sign Up')\n")))),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Capture textContent of a section that contains an element with text 'Selectors'.\nsection_text = page.eval_on_selector('*css=section >> text=Selectors', 'e => e.textContent')\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Capture textContent of a section that contains an element with text 'Selectors'.\nsection_text = await page.eval_on_selector('*css=section >> text=Selectors', 'e => e.textContent')\n")))),Object(c.b)("br",null),Object(c.b)("h2",{id:"auto-waiting"},"Auto-waiting"),Object(c.b)("p",null,"Actions like ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.10.0/api/class-page#pageclickselector-kwargs"}),"page.click(selector, **kwargs)")," and ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.10.0/api/class-page#pagefillselector-value-kwargs"}),"page.fill(selector, value, **kwargs)")," auto-wait for the element to be visible and ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.10.0/actionability"}),"actionable"),". For example, click will:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"wait for an element with the given selector to appear in the DOM"),Object(c.b)("li",{parentName:"ul"},"wait for it to become visible: have non-empty bounding box and no ",Object(c.b)("inlineCode",{parentName:"li"},"visibility:hidden")),Object(c.b)("li",{parentName:"ul"},"wait for it to stop moving: for example, wait until css transition finishes"),Object(c.b)("li",{parentName:"ul"},"scroll the element into view"),Object(c.b)("li",{parentName:"ul"},"wait for it to receive pointer events at the action point: for example, wait until element becomes non-obscured by other elements"),Object(c.b)("li",{parentName:"ul"},"retry if the element is detached during any of the above checks")),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Playwright waits for #search element to be in the DOM\npage.fill('#search', 'query')\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Playwright waits for #search element to be in the DOM\nawait page.fill('#search', 'query')\n")))),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Playwright waits for element to stop animating\n# and accept clicks.\npage.click('#search')\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Playwright waits for element to stop animating\n# and accept clicks.\nawait page.click('#search')\n")))),Object(c.b)("p",null,"You can explicitly wait for an element to appear in the DOM or to become visible:"),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Wait for #search to appear in the DOM.\npage.wait_for_selector('#search', state='attached')\n# Wait for #promo to become visible, for example with `visibility:visible`.\npage.wait_for_selector('#promo')\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Wait for #search to appear in the DOM.\nawait page.wait_for_selector('#search', state='attached')\n# Wait for #promo to become visible, for example with `visibility:visible`.\nawait page.wait_for_selector('#promo')\n")))),Object(c.b)("p",null,"... or to become hidden or detached"),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Wait for #details to become hidden, for example with `display:none`.\npage.wait_for_selector('#details', state='hidden')\n# Wait for #promo to be removed from the DOM.\npage.wait_for_selector('#promo', state='detached')\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Wait for #details to become hidden, for example with `display:none`.\nawait page.wait_for_selector('#details', state='hidden')\n# Wait for #promo to be removed from the DOM.\nawait page.wait_for_selector('#promo', state='detached')\n")))),Object(c.b)("h3",{id:"api-reference-3"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.10.0/api/class-page#pageclickselector-kwargs"}),"page.click(selector, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.10.0/api/class-page#pagefillselector-value-kwargs"}),"page.fill(selector, value, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.10.0/api/class-page#pagewait_for_selectorselector-kwargs"}),"page.wait_for_selector(selector, **kwargs)"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"execution-contexts-playwright-and-browser"},"Execution contexts: Playwright and Browser"),Object(c.b)("p",null,"Playwright scripts run in your Playwright environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers."),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.10.0/api/class-page#pageevaluateexpression-kwargs"}),"page.evaluate(expression, **kwargs)")," API can run a JavaScript function in the context of the web page and bring results back to the Playwright environment. Browser globals like ",Object(c.b)("inlineCode",{parentName:"p"},"window")," and ",Object(c.b)("inlineCode",{parentName:"p"},"document")," can be used in ",Object(c.b)("inlineCode",{parentName:"p"},"evaluate"),"."),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"href = page.evaluate('() => document.location.href')\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"href = await page.evaluate('() => document.location.href')\n")))),Object(c.b)("p",null,"If the result is a Promise or if the function is asynchronous evaluate will automatically wait until it's resolved:"),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'status = page.evaluate("""async () => {\n  response = fetch(location.href)\n  return response.status\n}""")\n'))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'status = await page.evaluate("""async () => {\n  response = await fetch(location.href)\n  return response.status\n}""")\n')))),Object(c.b)("h2",{id:"evaluation-argument"},"Evaluation Argument"),Object(c.b)("p",null,"Playwright evaluation methods like ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.10.0/api/class-page#pageevaluateexpression-kwargs"}),"page.evaluate(expression, **kwargs)")," take a single optional argument. This argument can be a mix of ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable")," values and ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.10.0/api/class-jshandle",title:"JSHandle"}),"JSHandle")," or ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.10.0/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," instances. Handles are automatically converted to the value they represent."),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# A primitive value.\npage.evaluate('num => num', 42)\n\n# An array.\npage.evaluate('array => array.length', [1, 2, 3])\n\n# An object.\npage.evaluate('object => object.foo', { 'foo': 'bar' })\n\n# A single handle.\nbutton = page.query_selector('button')\npage.evaluate('button => button.textContent', button)\n\n# Alternative notation using elementHandle.evaluate.\nbutton.evaluate('(button, from) => button.textContent.substring(from)', 5)\n\n# Object with multiple handles.\nbutton1 = page.query_selector('.button1')\nbutton2 = page.query_selector('.button2')\npage.evaluate(\"\"\"o => o.button1.textContent + o.button2.textContent\"\"\",\n    { 'button1': button1, 'button2': button2 })\n\n# Object destructuring works. Note that property names must match\n# between the destructured object and the argument.\n# Also note the required parenthesis.\npage.evaluate(\"\"\"\n    ({ button1, button2 }) => button1.textContent + button2.textContent\"\"\",\n    { 'button1': button1, 'button2': button2 })\n\n# Array works as well. Arbitrary names can be used for destructuring.\n# Note the required parenthesis.\npage.evaluate(\"\"\"\n    ([b1, b2]) => b1.textContent + b2.textContent\"\"\",\n    [button1, button2])\n\n# Any non-cyclic mix of serializables and handles works.\npage.evaluate(\"\"\"\n    x => x.button1.textContent + x.list[0].textContent + String(x.foo)\"\"\",\n    { 'button1': button1, 'list': [button2], 'foo': None })\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# A primitive value.\nawait page.evaluate('num => num', 42)\n\n# An array.\nawait page.evaluate('array => array.length', [1, 2, 3])\n\n# An object.\nawait page.evaluate('object => object.foo', { 'foo': 'bar' })\n\n# A single handle.\nbutton = await page.query_selctor('button')\nawait page.evaluate('button => button.textContent', button)\n\n# Alternative notation using elementHandle.evaluate.\nawait button.evaluate('(button, from) => button.textContent.substring(from)', 5)\n\n# Object with multiple handles.\nbutton1 = await page.query_selector('.button1')\nbutton2 = await page.query_selector('.button2')\nawait page.evaluate(\"\"\"\n    o => o.button1.textContent + o.button2.textContent\"\"\",\n    { 'button1': button1, 'button2': button2 })\n\n# Object destructuring works. Note that property names must match\n# between the destructured object and the argument.\n# Also note the required parenthesis.\nawait page.evaluate(\"\"\"\n    ({ button1, button2 }) => button1.textContent + button2.textContent\"\"\",\n    { 'button1': button1, 'button2': button2 })\n\n# Array works as well. Arbitrary names can be used for destructuring.\n# Note the required parenthesis.\nawait page.evaluate(\"\"\"\n    ([b1, b2]) => b1.textContent + b2.textContent\"\"\",\n    [button1, button2])\n\n# Any non-cyclic mix of serializables and handles works.\nawait page.evaluate(\"\"\"\n    x => x.button1.textContent + x.list[0].textContent + String(x.foo)\"\"\",\n    { 'button1': button1, 'list': [button2], 'foo': None })\n")))),Object(c.b)("p",null,"Right:"),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"data = { 'text': 'some data', 'value': 1 }\n# Pass |data| as a parameter.\nresult = page.evaluate(\"\"\"data => {\n  window.myApp.use(data)\n}\"\"\", data)\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"data = { 'text': 'some data', 'value': 1 }\n# Pass |data| as a parameter.\nresult = await page.evaluate(\"\"\"data => {\n  window.myApp.use(data)\n}\"\"\", data)\n")))),Object(c.b)("p",null,"Wrong:"),Object(c.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"data = { 'text': 'some data', 'value': 1 }\nresult = page.evaluate(\"\"\"() => {\n  # There is no |data| in the web page.\n  window.myApp.use(data)\n}\"\"\")\n"))),Object(c.b)(o.a,{value:"async",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"data = { 'text': 'some data', 'value': 1 }\nresult = await page.evaluate(\"\"\"() => {\n  # There is no |data| in the web page.\n  window.myApp.use(data)\n}\"\"\")\n")))),Object(c.b)("h3",{id:"api-reference-4"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.10.0/api/class-page#pageevaluateexpression-kwargs"}),"page.evaluate(expression, **kwargs)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.10.0/api/class-frame#frameevaluateexpression-kwargs"}),"frame.evaluate(expression, **kwargs)")),Object(c.b)("li",{parentName:"ul"},"[EvaluationArgument]")),Object(c.b)("br",null))}u.isMDXComponent=!0},392:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}},393:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return d}));var n=t(0),r=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),i=function(e){var a=r.a.useContext(b),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=i(e.components);return r.a.createElement(b.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=i(t),m=n,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||c;return t?r.a.createElement(d,o(o({ref:a},b),{},{components:t})):r.a.createElement(d,o({ref:a},b))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,l=new Array(c);l[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var b=2;b<c;b++)l[b]=t[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},394:function(e,a,t){"use strict";var n=t(0),r=t(395);a.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},395:function(e,a,t){"use strict";var n=t(0),r=Object(n.createContext)(void 0);a.a=r},396:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(394),l=t(392),o=t(53),s=t.n(o),b=37,i=39;a.a=function(e){var a=e.lazy,t=e.block,o=e.defaultValue,p=e.values,u=e.groupId,m=e.className,d=Object(c.a)(),y=d.tabGroupChoices,g=d.setTabGroupChoices,h=Object(n.useState)(o),O=h[0],j=h[1],f=n.Children.toArray(e.children);if(null!=u){var v=y[u];null!=v&&v!==O&&p.some((function(e){return e.value===v}))&&j(v)}var w=function(e){j(e),null!=u&&g(u,e)},x=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},m)},p.map((function(e){var a=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===a,className:Object(l.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===a}),key:a,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case i:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case b:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(x,e.target,e)},onFocus:function(){return w(a)},onClick:function(){w(a)}},t)}))),a?Object(n.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},f.map((function(e,a){return Object(n.cloneElement)(e,{key:a,hidden:e.props.value!==O})}))))}},397:function(e,a,t){"use strict";var n=t(3),r=t(0),c=t.n(r);a.a=function(e){var a=e.children,t=e.hidden,r=e.className;return c.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:r}),a)}}}]);