(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{278:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(7),i=(a(0),a(819)),o=(a(823),a(824),{id:"class-keyboard",title:"Keyboard"}),b={unversionedId:"api/class-keyboard",id:"version-1.10.0/api/class-keyboard",isDocsHomePage:!1,title:"Keyboard",description:"Keyboard provides an api for managing a virtual keyboard. The high level api is keyboard.type(text[, options]), which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page.",source:"@site/versioned_docs/version-1.10.0/api/class-keyboard.mdx",slug:"/api/class-keyboard",permalink:"/docs/api/class-keyboard",version:"1.10.0",sidebar:"version-1.10.0/api",previous:{title:"JSHandle",permalink:"/docs/api/class-jshandle"},next:{title:"Logger",permalink:"/docs/api/class-logger"}},p=[{value:"keyboard.down(key)",id:"keyboarddownkey",children:[]},{value:"keyboard.insertText(text)",id:"keyboardinserttexttext",children:[]},{value:"keyboard.press(key, options)",id:"keyboardpresskey-options",children:[]},{value:"keyboard.type(text, options)",id:"keyboardtypetext-options",children:[]},{value:"keyboard.up(key)",id:"keyboardupkey",children:[]}],c={toc:p};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Keyboard provides an api for managing a virtual keyboard. The high level api is ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-keyboard#keyboardtypetext-options"}),"keyboard.type(text[, options])"),", which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page."),Object(i.b)("p",null,"For finer control, you can use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-keyboard#keyboarddownkey"}),"keyboard.down(key)"),", ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-keyboard#keyboardupkey"}),"keyboard.up(key)"),", and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-keyboard#keyboardinserttexttext"}),"keyboard.insertText(text)")," to manually fire events as if they were generated from a real keyboard."),Object(i.b)("p",null,"An example of holding down ",Object(i.b)("inlineCode",{parentName:"p"},"Shift")," in order to select and delete some text:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.keyboard.type('Hello World!');\nawait page.keyboard.press('ArrowLeft');\n\nawait page.keyboard.down('Shift');\nfor (let i = 0; i < ' World'.length; i++)\n  await page.keyboard.press('ArrowLeft');\nawait page.keyboard.up('Shift');\n\nawait page.keyboard.press('Backspace');\n// Result text will end up saying 'Hello!'\n")),Object(i.b)("p",null,"An example of pressing uppercase ",Object(i.b)("inlineCode",{parentName:"p"},"A")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.keyboard.press('Shift+KeyA');\n// or\nawait page.keyboard.press('Shift+A');\n")),Object(i.b)("p",null,"An example to trigger select-all with the keyboard"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// on Windows and Linux\nawait page.keyboard.press('Control+A');\n// on macOS\nawait page.keyboard.press('Meta+A');\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-keyboard#keyboarddownkey"}),"keyboard.down(key)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-keyboard#keyboardinserttexttext"}),"keyboard.insertText(text)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-keyboard#keyboardpresskey-options"}),"keyboard.press(key[, options])")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-keyboard#keyboardtypetext-options"}),"keyboard.type(text[, options])")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/class-keyboard#keyboardupkey"}),"keyboard.up(key)"))),Object(i.b)("h2",{id:"keyboarddownkey"},"keyboard.down(key)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"key")," <",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> Name of the key to press or a character to generate, such as ",Object(i.b)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",Object(i.b)("inlineCode",{parentName:"li"},"a"),".")),Object(i.b)("p",null,"Dispatches a ",Object(i.b)("inlineCode",{parentName:"p"},"keydown")," event."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"key")," can specify the intended ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"}),"keyboardEvent.key")," value or a single character to generate the text for. A superset of the ",Object(i.b)("inlineCode",{parentName:"p"},"key")," values can be found ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values"}),"here"),". Examples of the keys are:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"F1")," - ",Object(i.b)("inlineCode",{parentName:"p"},"F12"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Digit0"),"- ",Object(i.b)("inlineCode",{parentName:"p"},"Digit9"),", ",Object(i.b)("inlineCode",{parentName:"p"},"KeyA"),"- ",Object(i.b)("inlineCode",{parentName:"p"},"KeyZ"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Backquote"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Minus"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Equal"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Backslash"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Backspace"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Tab"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Delete"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Escape"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ArrowDown"),", ",Object(i.b)("inlineCode",{parentName:"p"},"End"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Enter"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Home"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Insert"),", ",Object(i.b)("inlineCode",{parentName:"p"},"PageDown"),", ",Object(i.b)("inlineCode",{parentName:"p"},"PageUp"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ArrowRight"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ArrowUp"),", etc."),Object(i.b)("p",null,"Following modification shortcuts are also supported: ",Object(i.b)("inlineCode",{parentName:"p"},"Shift"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Control"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Alt"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Meta"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ShiftLeft"),"."),Object(i.b)("p",null,"Holding down ",Object(i.b)("inlineCode",{parentName:"p"},"Shift")," will type the text that corresponds to the ",Object(i.b)("inlineCode",{parentName:"p"},"key")," in the upper case."),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"key")," is a single character, it is case-sensitive, so the values ",Object(i.b)("inlineCode",{parentName:"p"},"a")," and ",Object(i.b)("inlineCode",{parentName:"p"},"A")," will generate different respective texts."),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"key")," is a modifier key, ",Object(i.b)("inlineCode",{parentName:"p"},"Shift"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Meta"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Control"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"Alt"),", subsequent key presses will be sent with that modifier active. To release the modifier key, use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-keyboard#keyboardupkey"}),"keyboard.up(key)"),"."),Object(i.b)("p",null,"After the key is pressed once, subsequent calls to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-keyboard#keyboarddownkey"}),"keyboard.down(key)")," will have ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat"}),"repeat")," set to true. To release the key, use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-keyboard#keyboardupkey"}),"keyboard.up(key)"),"."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Modifier keys DO influence ",Object(i.b)("inlineCode",{parentName:"p"},"keyboard.down"),". Holding down ",Object(i.b)("inlineCode",{parentName:"p"},"Shift")," will type the text in upper case."))),Object(i.b)("h2",{id:"keyboardinserttexttext"},"keyboard.insertText(text)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"text")," <",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> Sets input to the specified text value.")),Object(i.b)("p",null,"Dispatches only ",Object(i.b)("inlineCode",{parentName:"p"},"input")," event, does not emit the ",Object(i.b)("inlineCode",{parentName:"p"},"keydown"),", ",Object(i.b)("inlineCode",{parentName:"p"},"keyup")," or ",Object(i.b)("inlineCode",{parentName:"p"},"keypress")," events."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"page.keyboard.insertText('\u55e8');\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Modifier keys DO NOT effect ",Object(i.b)("inlineCode",{parentName:"p"},"keyboard.insertText"),". Holding down ",Object(i.b)("inlineCode",{parentName:"p"},"Shift")," will not type the text in upper case."))),Object(i.b)("h2",{id:"keyboardpresskey-options"},"keyboard.press(key","[, options]",")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"key")," <",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> Name of the key to press or a character to generate, such as ",Object(i.b)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",Object(i.b)("inlineCode",{parentName:"li"},"a"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options")," <",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"delay")," <",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> Time to wait between ",Object(i.b)("inlineCode",{parentName:"li"},"keydown")," and ",Object(i.b)("inlineCode",{parentName:"li"},"keyup")," in milliseconds. Defaults to 0.")))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"key")," can specify the intended ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"}),"keyboardEvent.key")," value or a single character to generate the text for. A superset of the ",Object(i.b)("inlineCode",{parentName:"p"},"key")," values can be found ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values"}),"here"),". Examples of the keys are:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"F1")," - ",Object(i.b)("inlineCode",{parentName:"p"},"F12"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Digit0"),"- ",Object(i.b)("inlineCode",{parentName:"p"},"Digit9"),", ",Object(i.b)("inlineCode",{parentName:"p"},"KeyA"),"- ",Object(i.b)("inlineCode",{parentName:"p"},"KeyZ"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Backquote"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Minus"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Equal"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Backslash"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Backspace"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Tab"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Delete"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Escape"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ArrowDown"),", ",Object(i.b)("inlineCode",{parentName:"p"},"End"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Enter"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Home"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Insert"),", ",Object(i.b)("inlineCode",{parentName:"p"},"PageDown"),", ",Object(i.b)("inlineCode",{parentName:"p"},"PageUp"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ArrowRight"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ArrowUp"),", etc."),Object(i.b)("p",null,"Following modification shortcuts are also supported: ",Object(i.b)("inlineCode",{parentName:"p"},"Shift"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Control"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Alt"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Meta"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ShiftLeft"),"."),Object(i.b)("p",null,"Holding down ",Object(i.b)("inlineCode",{parentName:"p"},"Shift")," will type the text that corresponds to the ",Object(i.b)("inlineCode",{parentName:"p"},"key")," in the upper case."),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"key")," is a single character, it is case-sensitive, so the values ",Object(i.b)("inlineCode",{parentName:"p"},"a")," and ",Object(i.b)("inlineCode",{parentName:"p"},"A")," will generate different respective texts."),Object(i.b)("p",null,"Shortcuts such as ",Object(i.b)("inlineCode",{parentName:"p"},'key: "Control+o"')," or ",Object(i.b)("inlineCode",{parentName:"p"},'key: "Control+Shift+T"')," are supported as well. When speficied with the modifier, modifier is pressed and being held while the subsequent key is being pressed."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const page = await browser.newPage();\nawait page.goto('https://keycode.info');\nawait page.keyboard.press('A');\nawait page.screenshot({ path: 'A.png' });\nawait page.keyboard.press('ArrowLeft');\nawait page.screenshot({ path: 'ArrowLeft.png' });\nawait page.keyboard.press('Shift+O');\nawait page.screenshot({ path: 'O.png' });\nawait browser.close();\n")),Object(i.b)("p",null,"Shortcut for ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-keyboard#keyboarddownkey"}),"keyboard.down(key)")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-keyboard#keyboardupkey"}),"keyboard.up(key)"),"."),Object(i.b)("h2",{id:"keyboardtypetext-options"},"keyboard.type(text","[, options]",")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"text")," <",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> A text to type into a focused element."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options")," <",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"delay")," <",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> Time to wait between key presses in milliseconds. Defaults to 0.")))),Object(i.b)("p",null,"Sends a ",Object(i.b)("inlineCode",{parentName:"p"},"keydown"),", ",Object(i.b)("inlineCode",{parentName:"p"},"keypress"),"/",Object(i.b)("inlineCode",{parentName:"p"},"input"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"keyup")," event for each character in the text."),Object(i.b)("p",null,"To press a special key, like ",Object(i.b)("inlineCode",{parentName:"p"},"Control")," or ",Object(i.b)("inlineCode",{parentName:"p"},"ArrowDown"),", use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/class-keyboard#keyboardpresskey-options"}),"keyboard.press(key[, options])"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.keyboard.type('Hello'); // Types instantly\nawait page.keyboard.type('World', {delay: 100}); // Types slower, like a user\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Modifier keys DO NOT effect ",Object(i.b)("inlineCode",{parentName:"p"},"keyboard.type"),". Holding down ",Object(i.b)("inlineCode",{parentName:"p"},"Shift")," will not type the text in upper case."))),Object(i.b)("h2",{id:"keyboardupkey"},"keyboard.up(key)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"key")," <",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> Name of the key to press or a character to generate, such as ",Object(i.b)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",Object(i.b)("inlineCode",{parentName:"li"},"a"),".")),Object(i.b)("p",null,"Dispatches a ",Object(i.b)("inlineCode",{parentName:"p"},"keyup")," event."))}l.isMDXComponent=!0},819:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},s=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=l(a),O=n,j=s["".concat(o,".").concat(O)]||s[O]||d[O]||i;return a?r.a.createElement(j,b(b({ref:t},c),{},{components:a})):r.a.createElement(j,b({ref:t},c))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=O;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},820:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},821:function(e,t,a){"use strict";var n=a(0),r=a(822);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},822:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},823:function(e,t,a){"use strict";a(0),a(821),a(820),a(55)},824:function(e,t,a){"use strict";a(3),a(0)}}]);