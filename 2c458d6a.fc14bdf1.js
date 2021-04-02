(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{197:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return s}));var a=t(3),i=t(7),r=(t(0),t(819)),c={id:"ci",title:"Continuous Integration"},o={unversionedId:"ci",id:"version-1.5.0/ci",isDocsHomePage:!1,title:"Continuous Integration",description:"Playwright tests can be executed in CI environments. We have created sample",source:"@site/versioned_docs/version-1.5.0/ci.mdx",slug:"/ci",permalink:"/docs/1.5.0/ci",version:"1.5.0",sidebar:"version-1.5.0/docs",previous:{title:"Running Playwright in Docker",permalink:"/docs/1.5.0/docker/README"},next:{title:"Actionability",permalink:"/docs/1.5.0/actionability"}},b=[{value:"Introduction",id:"introduction",children:[]},{value:"CI configurations",id:"ci-configurations",children:[{value:"GitHub Actions",id:"github-actions",children:[]},{value:"Docker",id:"docker",children:[]},{value:"Azure Pipelines",id:"azure-pipelines",children:[]},{value:"Travis CI",id:"travis-ci",children:[]},{value:"CircleCI",id:"circleci",children:[]},{value:"Jenkins",id:"jenkins",children:[]},{value:"Bitbucket Pipelines",id:"bitbucket-pipelines",children:[]},{value:"GitLab CI",id:"gitlab-ci",children:[]}]},{value:"Caching browsers",id:"caching-browsers",children:[]},{value:"Debugging browser launches",id:"debugging-browser-launches",children:[]},{value:"Running headful",id:"running-headful",children:[]}],l={toc:b};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Playwright tests can be executed in CI environments. We have created sample\nconfigurations for common CI providers."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#introduction"}),"Introduction")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#ci-configurations"}),"CI configurations"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#github-actions"}),"GitHub Actions")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#docker"}),"Docker")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#azure-pipelines"}),"Azure Pipelines")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#travis-ci"}),"Travis CI")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#circleci"}),"CircleCI")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#jenkins"}),"Jenkins")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#bitbucket-pipelines"}),"Bitbucket Pipelines")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#gitlab-ci"}),"GitLab CI")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#caching-browsers"}),"Caching browsers"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#exception-node_modules-are-cached"}),"Exception: ",Object(r.b)("inlineCode",{parentName:"a"},"node_modules")," are cached")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#directories-to-cache"}),"Directories to cache")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#debugging-browser-launches"}),"Debugging browser launches")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#running-headful"}),"Running headful"))),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"3 steps to get your tests running on CI:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Ensure CI agent can run browsers"),": Use ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.5.0/docker/README"}),"our Docker image"),"\nin Linux agents. Windows and macOS agents do not require any additional dependencies."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Install Playwright"),": In most projects, this would be done with ",Object(r.b)("inlineCode",{parentName:"li"},"npm ci"),"\n(or ",Object(r.b)("inlineCode",{parentName:"li"},"npm install"),"). Playwright would install the relevant browsers automatically."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Run your tests"),": Use ",Object(r.b)("inlineCode",{parentName:"li"},"npm test")," or equivalent to execute your tests.")),Object(r.b)("h2",{id:"ci-configurations"},"CI configurations"),Object(r.b)("h3",{id:"github-actions"},"GitHub Actions"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright-github-action"}),"Playwright GitHub Action")," can be used to run Playwright tests on GitHub Actions."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"steps:\n  - uses: microsoft/playwright-github-action@v1\n  - name: Run your tests\n    run: npm test\n")),Object(r.b)("p",null,"We run ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/.github/workflows/tests.yml"}),"our tests")," on GitHub Actions, across a matrix of 3 platforms (Windows, Linux, macOS) and 3 browsers (Chromium, Firefox, WebKit)."),Object(r.b)("h3",{id:"docker"},"Docker"),Object(r.b)("p",null,"We have a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.5.0/docker/README"}),"pre-built Docker image")," which can either be used directly, or as a reference to update your existing Docker definitions."),Object(r.b)("p",null,"Suggested configuration"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"By default, Docker runs a container with a ",Object(r.b)("inlineCode",{parentName:"p"},"/dev/shm")," shared memory space 64MB.\nThis is ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/c0b/chrome-in-docker/issues/1"}),"typically too small")," for Chromium\nand will cause Chromium to crash when rendering large pages. To fix, run the container with\n",Object(r.b)("inlineCode",{parentName:"p"},"docker run --shm-size=1gb")," to increase the size of ",Object(r.b)("inlineCode",{parentName:"p"},"/dev/shm"),". Since Chromium 65, this is no\nlonger necessary. Instead, launch the browser with the ",Object(r.b)("inlineCode",{parentName:"p"},"--disable-dev-shm-usage")," flag:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const browser = await playwright.chromium.launch({\n  args: ['--disable-dev-shm-usage']\n});\n")),Object(r.b)("p",{parentName:"li"},"This will write shared memory files into ",Object(r.b)("inlineCode",{parentName:"p"},"/tmp")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"/dev/shm"),". See\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=736452"}),"crbug.com/736452")," for more details.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Using ",Object(r.b)("inlineCode",{parentName:"p"},"--ipc=host")," is also recommended when using Chromium\u2014without it Chromium can run out of memory\nand crash. Learn more about this option in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/run/#ipc-settings---ipc"}),"Docker docs"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Seeing other weird errors when launching Chromium? Try running your container\nwith ",Object(r.b)("inlineCode",{parentName:"p"},"docker run --cap-add=SYS_ADMIN")," when developing locally.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Yelp/dumb-init"}),"dumb-init")," is worth checking out if you're\nexperiencing a lot of zombies Chromium processes sticking around. There's special\ntreatment for processes with PID=1, which makes it hard to terminate Chromium\nproperly in some cases (e.g. in Docker)."))),Object(r.b)("h3",{id:"azure-pipelines"},"Azure Pipelines"),Object(r.b)("p",null,"For Windows or macOS agents, no additional configuration required, just install Playwright and run your tests."),Object(r.b)("p",null,"For Linux agents, you can use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.5.0/docker/README"}),"our Docker container")," with Azure Pipelines support for ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/process/container-phases?view=azure-devops"}),"running containerized jobs"),". Alternatively, you can refer to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.5.0/docker/README"}),"Dockerfile")," to see additional dependencies that need to be installed on a Ubuntu agent."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"pool:\n  vmImage: 'ubuntu-18.04'\n\ncontainer: mcr.microsoft.com/playwright:bionic\n\nsteps:\n- script: npm install\n- script: npm run test\n")),Object(r.b)("h3",{id:"travis-ci"},"Travis CI"),Object(r.b)("p",null,"We run our tests on Travis CI over a Linux agent (Ubuntu 18.04)."),Object(r.b)("p",null,"Suggested configuration"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://man7.org/linux/man-pages/man7/user_namespaces.7.html"}),"User namespace cloning"),"\nshould be enabled to support proper sandboxing"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Xvfb"}),"xvfb")," should be launched in order to run\nChromium in non-headless mode (e.g. to test Chrome Extensions)"),Object(r.b)("li",{parentName:"ol"},"If your project does not have ",Object(r.b)("inlineCode",{parentName:"li"},"package-lock.json"),", Travis would be auto-caching\n",Object(r.b)("inlineCode",{parentName:"li"},"node_modules")," directory. If you run ",Object(r.b)("inlineCode",{parentName:"li"},"npm install")," (instead of ",Object(r.b)("inlineCode",{parentName:"li"},"npm ci"),"), it is\npossible that the browser binaries are not downloaded. Fix this with ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#exception-node_modules-are-cached"}),"these steps")," outlined below.")),Object(r.b)("p",null,"To sum up, your ",Object(r.b)("inlineCode",{parentName:"p"},".travis.yml")," might look like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'language: node_js\ndist: bionic\naddons:\n  apt:\n    packages:\n    # These are required to run webkit\n    - libwoff1\n    - libopus0\n    - libwebp6\n    - libwebpdemux2\n    - libenchant1c2a\n    - libgudev-1.0-0\n    - libsecret-1-0\n    - libhyphen0\n    - libgdk-pixbuf2.0-0\n    - libegl1\n    - libgles2\n    - libevent-2.1-6\n    - libnotify4\n    - libxslt1.1\n    - libvpx5\n    # gstreamer and plugins to support video playback in WebKit.\n    - gstreamer1.0-gl\n    - gstreamer1.0-plugins-base\n    - gstreamer1.0-plugins-good\n    - gstreamer1.0-plugins-bad\n    # This is required to run chromium\n    - libgbm1\n    # this is needed for running headful tests\n    - xvfb\n\n# allow headful tests\nbefore_install:\n  # Enable user namespace cloning\n  - "sysctl kernel.unprivileged_userns_clone=1"\n  # Launch XVFB\n  - "export DISPLAY=:99.0"\n  - "sh -e /etc/init.d/xvfb start"\n')),Object(r.b)("h3",{id:"circleci"},"CircleCI"),Object(r.b)("p",null,"We run our tests on CircleCI, with our ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.5.0/docker/README"}),"pre-built Docker image"),". Running Playwright smoothly on CircleCI requires the following steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Use the pre-built ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.5.0/docker/README"}),"Docker image")," in your config like so:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"docker:\n  - image: mcr.microsoft.com/playwright:bionic\n    environment:\n      NODE_ENV: development # Needed if playwright is in `devDependencies`\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If you\u2019re using Playwright through Jest, then you may encounter an error spawning child processes:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"[00:00.0]  jest args: --e2e --spec --max-workers=36\nError: spawn ENOMEM\n   at ChildProcess.spawn (internal/child_process.js:394:11)\n")),Object(r.b)("p",{parentName:"li"},"This is likely caused by Jest autodetecting the number of processes on the entire machine (",Object(r.b)("inlineCode",{parentName:"p"},"36"),") rather than the number allowed to your container (",Object(r.b)("inlineCode",{parentName:"p"},"2"),"). To fix this, set ",Object(r.b)("inlineCode",{parentName:"p"},"jest --maxWorkers=2")," in your test command."))),Object(r.b)("h3",{id:"jenkins"},"Jenkins"),Object(r.b)("p",null,"Jenkins supports Docker agents for pipelines. Use the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.5.0/docker/README"}),"Playwright Docker image"),"\nto run tests on Jenkins."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-groovy"}),"pipeline {\n   agent { docker { image 'mcr.microsoft.com/playwright:bionic' } }\n   stages {\n      stage('e2e-tests') {\n         steps {\n            sh 'npm install'\n            sh 'npm run test'\n         }\n      }\n   }\n}\n")),Object(r.b)("h3",{id:"bitbucket-pipelines"},"Bitbucket Pipelines"),Object(r.b)("p",null,"Bitbucket Pipelines can use public ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://confluence.atlassian.com/bitbucket/use-docker-images-as-build-environments-792298897.html"}),"Docker images as build environments"),". To run Playwright tests on Bitbucket, use our public Docker image (",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.5.0/docker/README"}),"see Dockerfile"),")."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"image: mcr.microsoft.com/playwright:bionic\n")),Object(r.b)("p",null,"While the Docker image supports sandboxing for Chromium, it does not work in the Bitbucket Pipelines environment. To launch Chromium on Bitbucket Pipelines, use the ",Object(r.b)("inlineCode",{parentName:"p"},"chromiumSandbox: false")," launch argument."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');\nconst browser = await chromium.launch({ chromiumSandbox: false });\n")),Object(r.b)("h3",{id:"gitlab-ci"},"GitLab CI"),Object(r.b)("p",null,"To run Playwright tests on GitLab, use our public Docker image (",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.5.0/docker/README"}),"see Dockerfile"),")."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"stages:\n  - test\n\ntests:\n  stage: test\n  image: mcr.microsoft.com/playwright:bionic\n  script:\n    - npm install # This should install playwright\n    - npm run test\n")),Object(r.b)("h2",{id:"caching-browsers"},"Caching browsers"),Object(r.b)("p",null,"By default, Playwright downloads browser binaries when the Playwright NPM package\nis installed. The NPM packages have a ",Object(r.b)("inlineCode",{parentName:"p"},"postinstall")," hook that downloads the browser\nbinaries. This behavior can be ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.5.0/installation"}),"customized with environment variables"),"."),Object(r.b)("p",null,"Caching browsers on CI is ",Object(r.b)("strong",{parentName:"p"},"strictly optional"),": The ",Object(r.b)("inlineCode",{parentName:"p"},"postinstall")," hooks should\nexecute and download the browser binaries on every run."),Object(r.b)("h4",{id:"exception-node_modules-are-cached"},"Exception: ",Object(r.b)("inlineCode",{parentName:"h4"},"node_modules")," are cached"),Object(r.b)("p",null,"Most CI providers cache the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.npmjs.com/cli-commands/cache.html"}),"npm-cache"),"\ndirectory (located at ",Object(r.b)("inlineCode",{parentName:"p"},"$HOME/.npm"),"). If your CI pipelines caches the ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules"),"\ndirectory and you run ",Object(r.b)("inlineCode",{parentName:"p"},"npm install")," (instead of ",Object(r.b)("inlineCode",{parentName:"p"},"npm ci"),"), the default configuration\n",Object(r.b)("strong",{parentName:"p"},"will not work"),". This is because the ",Object(r.b)("inlineCode",{parentName:"p"},"npm install")," step will find the Playwright NPM\npackage on disk and not execute the ",Object(r.b)("inlineCode",{parentName:"p"},"postinstall")," step."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Travis CI automatically caches ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," if your repo does not have a\n",Object(r.b)("inlineCode",{parentName:"p"},"package-lock.json")," file.")),Object(r.b)("p",null,"This behavior can be fixed with one of the following approaches:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Move to caching ",Object(r.b)("inlineCode",{parentName:"li"},"$HOME/.npm")," or the npm-cache directory. (This is the default\nbehavior in most CI providers.)"),Object(r.b)("li",{parentName:"ol"},"Set ",Object(r.b)("inlineCode",{parentName:"li"},"PLAYWRIGHT_BROWSERS_PATH=0")," as the environment variable before running\n",Object(r.b)("inlineCode",{parentName:"li"},"npm install"),". This will download the browser binaries in the ",Object(r.b)("inlineCode",{parentName:"li"},"node_modules"),"\ndirectory and cache them with the package code. See ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.5.0/installation"}),"installation docs"),"."),Object(r.b)("li",{parentName:"ol"},"Use ",Object(r.b)("inlineCode",{parentName:"li"},"npm ci")," (instead of ",Object(r.b)("inlineCode",{parentName:"li"},"npm install"),") which forces a clean install: by\nremoving the existing ",Object(r.b)("inlineCode",{parentName:"li"},"node_modules")," directory. See ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.npmjs.com/cli/ci.html"}),"npm docs"),"."),Object(r.b)("li",{parentName:"ol"},"Cache the browser binaries, with the steps below.")),Object(r.b)("h4",{id:"directories-to-cache"},"Directories to cache"),Object(r.b)("p",null,"With the default behavior, Playwright downloads the browser binaries in the following\ndirectories:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\ms-playwright")," on Windows"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"~/Library/Caches/ms-playwright")," on MacOS"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"~/.cache/ms-playwright")," on Linux")),Object(r.b)("p",null,"To cache the browser downloads between CI runs, cache this location in your CI\nconfiguration, against a hash of the Playwright version."),Object(r.b)("h2",{id:"debugging-browser-launches"},"Debugging browser launches"),Object(r.b)("p",null,"Playwright supports the ",Object(r.b)("inlineCode",{parentName:"p"},"DEBUG")," environment variable to output debug logs during execution. Setting it to ",Object(r.b)("inlineCode",{parentName:"p"},"pw:browser*")," is helpful while debugging ",Object(r.b)("inlineCode",{parentName:"p"},"Error: Failed to launch browser")," errors."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"DEBUG=pw:browser* npm run test\n")),Object(r.b)("h2",{id:"running-headful"},"Running headful"),Object(r.b)("p",null,"By default, Playwright launches browsers in headless mode. This can be changed by passing a flag when the browser is launched."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Works across chromium, firefox and webkit\nconst { chromium } = require('playwright');\nconst browser = await chromium.launch({ headless: false });\n")),Object(r.b)("p",null,"On Linux agents, headful execution requires ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Xvfb"}),"Xvfb")," to be installed. Our ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.5.0/docker/README"}),"Docker image")," and GitHub Action have Xvfb pre-installed. To run browsers in headful mode with Xvfb, add ",Object(r.b)("inlineCode",{parentName:"p"},"xvfb-run")," before the Node.js command."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"xvfb-run node index.js\n")))}s.isMDXComponent=!0},819:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),s=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return t?i.a.createElement(d,o(o({ref:n},l),{},{components:t})):i.a.createElement(d,o({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=m;var o={};for(var b in n)hasOwnProperty.call(n,b)&&(o[b]=n[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<r;l++)c[l]=t[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);