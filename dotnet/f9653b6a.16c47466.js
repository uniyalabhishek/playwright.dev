(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var i=a(3),n=a(7),r=(a(0),a(152)),l=(a(155),a(156),{id:"class-accessibility",title:"Accessibility"}),o={unversionedId:"api/class-accessibility",id:"api/class-accessibility",isDocsHomePage:!1,title:"Accessibility",description:"The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as screen readers or switches.",source:"@site/docs/api/class-accessibility.mdx",slug:"/api/class-accessibility",permalink:"/dotnet/docs/api/class-accessibility",version:"current"},c=[{value:"Accessibility.SnapshotAsync(\u2026)",id:"accessibilitysnapshotasync",children:[]}],s={toc:c};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Accessibility class provides methods for inspecting Chromium's accessibility tree. The accessibility tree is used by assistive technology such as ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Screen_reader"}),"screen readers")," or ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Switch_access"}),"switches"),"."),Object(r.b)("p",null,"Accessibility is a very platform-specific thing. On different platforms, there are different screen readers that might have wildly different output."),Object(r.b)("p",null,'Rendering engines of Chromium, Firefox and WebKit have a concept of "accessibility tree", which is then translated into different platform-specific APIs. Accessibility namespace gives access to this Accessibility Tree.'),Object(r.b)("p",null,'Most of the accessibility tree gets filtered out when converting from internal browser AX Tree to Platform-specific AX-Tree or by assistive technologies themselves. By default, Playwright tries to approximate this filtering, exposing only the "interesting" nodes of the tree.'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/dotnet/docs/api/class-accessibility#accessibilitysnapshotasync"}),"Accessibility.SnapshotAsync(\u2026)"))),Object(r.b)("h2",{id:"accessibilitysnapshotasync"},"Accessibility.SnapshotAsync(\u2026)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"interestingOnly")," <",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),"> Prune uninteresting nodes from the tree. Defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"root")," <",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/dotnet/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),"> The root DOM element for the snapshot. Defaults to the whole page."),Object(r.b)("li",{parentName:"ul"},"returns: <",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"}),"null"),"|",Object(r.b)("inlineCode",{parentName:"li"},"Snapshot"),">",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"role")," <",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> The ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://www.w3.org/TR/wai-aria/#usage_intro"}),"role"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name")," <",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> A human readable name for the node."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"value")," <",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|","[double]","> The current value of the node, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"description")," <",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> An additional human readable description of the node, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"keyshortcuts")," <",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> Keyboard shortcuts associated with this node, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"roledescription")," <",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> A human readable alternative to the role, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"valuetext")," <",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> A description of the current value, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"disabled")," <",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),"> Whether the node is disabled, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"expanded")," <",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),"> Whether the node is expanded or collapsed, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"focused")," <",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),"> Whether the node is focused, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"modal")," <",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),"> Whether the node is ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Modal_window"}),"modal"),", if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"multiline")," <",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),"> Whether the node text input supports multiline, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"multiselectable")," <",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),"> Whether more than one child can be selected, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"readonly")," <",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),"> Whether the node is read only, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"required")," <",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),"> Whether the node is required, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"selected")," <",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),"> Whether the node is selected in its parent node, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"checked")," <",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),'|"mixed"> Whether the checkbox is checked, or "mixed", if applicable.'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pressed")," <",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),'|"mixed"> Whether the toggle button is checked, or "mixed", if applicable.'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"level")," <","[int]","> The level of a heading, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"valuemin")," <","[double]","> The minimum value in a node, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"valuemax")," <","[double]","> The maximum value in a node, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"autocomplete")," <",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> What kind of autocomplete is supported by a control, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"haspopup")," <",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> What kind of popup is currently being shown for a node, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"invalid")," <",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> Whether and in what way this node's value is invalid, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"orientation")," <",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> Whether the node is oriented horizontally or vertically, if applicable."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"children")," <","[IEnumerable]","<","[IEnumerable]",">> Child nodes, if any, if applicable.")))),Object(r.b)("p",null,"Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The Chromium accessibility tree contains nodes that go unused on most platforms and by most screen readers. Playwright will discard them as well for an easier to process tree, unless ",Object(r.b)("inlineCode",{parentName:"p"},"interestingOnly")," is set to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"."))),Object(r.b)("p",null,"An example of dumping the entire accessibility tree:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-csharp"}),"var accessibilitySnapshot = await Page.Accessibility.SnapshotAsync();\nConsole.WriteLine(accessibilitySnapshot);\n")),Object(r.b)("p",null,"An example of logging the focused node's name:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-csharp"}),"Func<AccessibilitySnapshotResult, AccessibilitySnapshotResult> findFocusedNode = root =>\n{\n    var nodes = new Stack<AccessibilitySnapshotResult>(new[] { root });\n    while (nodes.Count > 0)\n    {\n        var node = nodes.Pop();\n        if (node.Focused) return node;\n        foreach (var innerNode in node.Children)\n        {\n            nodes.Push(innerNode);\n        }\n    }\n\n    return null;\n};\n\nvar accessibilitySnapshot = await Page.Accessibility.SnapshotAsync();\nvar focusedNode = findFocusedNode(accessibilitySnapshot);\nif(focusedNode != null)\n  Console.WriteLine(focusedNode.Name);\n")))}b.isMDXComponent=!0},151:function(e,t,a){"use strict";function i(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=i(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=i(e))&&(n&&(n+=" "),n+=t);return n}},152:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(a),u=i,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return a?n.a.createElement(m,o(o({ref:t},s),{},{components:a})):n.a.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},153:function(e,t,a){"use strict";var i=a(0),n=a(154);t.a=function(){var e=Object(i.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},154:function(e,t,a){"use strict";var i=a(0),n=Object(i.createContext)(void 0);t.a=n},155:function(e,t,a){"use strict";a(0),a(153),a(151),a(53)},156:function(e,t,a){"use strict";a(3),a(0)}}]);