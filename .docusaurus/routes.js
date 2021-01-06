
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','12e'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','e3d'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','e8f'),
  exact: true,
},
{
  path: '/blog/tags/releases',
  component: ComponentCreator('/blog/tags/releases','f6a'),
  exact: true,
},
{
  path: '/search',
  component: ComponentCreator('/search','79a'),
  exact: true,
},
{
  path: '/versions',
  component: ComponentCreator('/versions','b27'),
  exact: true,
},
{
  path: '/docs/1.0.0',
  component: ComponentCreator('/docs/1.0.0','aff'),
  
  routes: [
{
  path: '/docs/1.0.0/api/class-accessibility',
  component: ComponentCreator('/docs/1.0.0/api/class-accessibility','509'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-browser',
  component: ComponentCreator('/docs/1.0.0/api/class-browser','e2a'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-browsercontext',
  component: ComponentCreator('/docs/1.0.0/api/class-browsercontext','7d5'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-browserserver',
  component: ComponentCreator('/docs/1.0.0/api/class-browserserver','769'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-browsertype',
  component: ComponentCreator('/docs/1.0.0/api/class-browsertype','c36'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-cdpsession',
  component: ComponentCreator('/docs/1.0.0/api/class-cdpsession','415'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-chromiumbrowser',
  component: ComponentCreator('/docs/1.0.0/api/class-chromiumbrowser','889'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-chromiumbrowsercontext',
  component: ComponentCreator('/docs/1.0.0/api/class-chromiumbrowsercontext','f3d'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-chromiumcoverage',
  component: ComponentCreator('/docs/1.0.0/api/class-chromiumcoverage','640'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-consolemessage',
  component: ComponentCreator('/docs/1.0.0/api/class-consolemessage','107'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-dialog',
  component: ComponentCreator('/docs/1.0.0/api/class-dialog','dee'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-download',
  component: ComponentCreator('/docs/1.0.0/api/class-download','f7a'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-elementhandle',
  component: ComponentCreator('/docs/1.0.0/api/class-elementhandle','5e1'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-filechooser',
  component: ComponentCreator('/docs/1.0.0/api/class-filechooser','19f'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-firefoxbrowser',
  component: ComponentCreator('/docs/1.0.0/api/class-firefoxbrowser','243'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-frame',
  component: ComponentCreator('/docs/1.0.0/api/class-frame','498'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-jshandle',
  component: ComponentCreator('/docs/1.0.0/api/class-jshandle','c38'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-keyboard',
  component: ComponentCreator('/docs/1.0.0/api/class-keyboard','bee'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-logger',
  component: ComponentCreator('/docs/1.0.0/api/class-logger','b87'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-mouse',
  component: ComponentCreator('/docs/1.0.0/api/class-mouse','c48'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-page',
  component: ComponentCreator('/docs/1.0.0/api/class-page','0ad'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-playwright',
  component: ComponentCreator('/docs/1.0.0/api/class-playwright','104'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-request',
  component: ComponentCreator('/docs/1.0.0/api/class-request','3cc'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-response',
  component: ComponentCreator('/docs/1.0.0/api/class-response','d91'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-route',
  component: ComponentCreator('/docs/1.0.0/api/class-route','227'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-selectors',
  component: ComponentCreator('/docs/1.0.0/api/class-selectors','582'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-timeouterror',
  component: ComponentCreator('/docs/1.0.0/api/class-timeouterror','4ea'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-webkitbrowser',
  component: ComponentCreator('/docs/1.0.0/api/class-webkitbrowser','945'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/class-worker',
  component: ComponentCreator('/docs/1.0.0/api/class-worker','78e'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/environment-variables',
  component: ComponentCreator('/docs/1.0.0/api/environment-variables','1bc'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/working-with-chrome-extensions',
  component: ComponentCreator('/docs/1.0.0/api/working-with-chrome-extensions','7c7'),
  exact: true,
},
{
  path: '/docs/1.0.0/api/working-with-selectors',
  component: ComponentCreator('/docs/1.0.0/api/working-with-selectors','a11'),
  exact: true,
},
{
  path: '/docs/1.0.0/ci',
  component: ComponentCreator('/docs/1.0.0/ci','99f'),
  exact: true,
},
{
  path: '/docs/1.0.0/core-concepts',
  component: ComponentCreator('/docs/1.0.0/core-concepts','d04'),
  exact: true,
},
{
  path: '/docs/1.0.0/docker/README',
  component: ComponentCreator('/docs/1.0.0/docker/README','4b2'),
  exact: true,
},
{
  path: '/docs/1.0.0/emulation',
  component: ComponentCreator('/docs/1.0.0/emulation','c43'),
  exact: true,
},
{
  path: '/docs/1.0.0/examples/README',
  component: ComponentCreator('/docs/1.0.0/examples/README','3d0'),
  exact: true,
},
{
  path: '/docs/1.0.0/extensibility',
  component: ComponentCreator('/docs/1.0.0/extensibility','9b7'),
  exact: true,
},
{
  path: '/docs/1.0.0/input',
  component: ComponentCreator('/docs/1.0.0/input','031'),
  exact: true,
},
{
  path: '/docs/1.0.0/installation',
  component: ComponentCreator('/docs/1.0.0/installation','3a8'),
  exact: true,
},
{
  path: '/docs/1.0.0/intro',
  component: ComponentCreator('/docs/1.0.0/intro','4b1'),
  exact: true,
},
{
  path: '/docs/1.0.0/loading',
  component: ComponentCreator('/docs/1.0.0/loading','834'),
  exact: true,
},
{
  path: '/docs/1.0.0/network',
  component: ComponentCreator('/docs/1.0.0/network','7db'),
  exact: true,
},
{
  path: '/docs/1.0.0/README',
  component: ComponentCreator('/docs/1.0.0/README','1a9'),
  exact: true,
},
{
  path: '/docs/1.0.0/selectors',
  component: ComponentCreator('/docs/1.0.0/selectors','04d'),
  exact: true,
},
{
  path: '/docs/1.0.0/showcase',
  component: ComponentCreator('/docs/1.0.0/showcase','119'),
  exact: true,
},
{
  path: '/docs/1.0.0/test-runners',
  component: ComponentCreator('/docs/1.0.0/test-runners','574'),
  exact: true,
},
{
  path: '/docs/1.0.0/troubleshooting',
  component: ComponentCreator('/docs/1.0.0/troubleshooting','12a'),
  exact: true,
},
{
  path: '/docs/1.0.0/verification',
  component: ComponentCreator('/docs/1.0.0/verification','e59'),
  exact: true,
},
]
},
{
  path: '/docs/1.1.0',
  component: ComponentCreator('/docs/1.1.0','def'),
  
  routes: [
{
  path: '/docs/1.1.0/api/class-accessibility',
  component: ComponentCreator('/docs/1.1.0/api/class-accessibility','50c'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-browser',
  component: ComponentCreator('/docs/1.1.0/api/class-browser','29f'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-browsercontext',
  component: ComponentCreator('/docs/1.1.0/api/class-browsercontext','0ae'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-browserserver',
  component: ComponentCreator('/docs/1.1.0/api/class-browserserver','831'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-browsertype',
  component: ComponentCreator('/docs/1.1.0/api/class-browsertype','0cb'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-cdpsession',
  component: ComponentCreator('/docs/1.1.0/api/class-cdpsession','ee6'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-chromiumbrowser',
  component: ComponentCreator('/docs/1.1.0/api/class-chromiumbrowser','303'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-chromiumbrowsercontext',
  component: ComponentCreator('/docs/1.1.0/api/class-chromiumbrowsercontext','e05'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-chromiumcoverage',
  component: ComponentCreator('/docs/1.1.0/api/class-chromiumcoverage','cd4'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-consolemessage',
  component: ComponentCreator('/docs/1.1.0/api/class-consolemessage','6d9'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-dialog',
  component: ComponentCreator('/docs/1.1.0/api/class-dialog','b93'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-download',
  component: ComponentCreator('/docs/1.1.0/api/class-download','6b0'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-elementhandle',
  component: ComponentCreator('/docs/1.1.0/api/class-elementhandle','4ab'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-filechooser',
  component: ComponentCreator('/docs/1.1.0/api/class-filechooser','180'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-firefoxbrowser',
  component: ComponentCreator('/docs/1.1.0/api/class-firefoxbrowser','5c4'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-frame',
  component: ComponentCreator('/docs/1.1.0/api/class-frame','cee'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-jshandle',
  component: ComponentCreator('/docs/1.1.0/api/class-jshandle','3e0'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-keyboard',
  component: ComponentCreator('/docs/1.1.0/api/class-keyboard','dbe'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-logger',
  component: ComponentCreator('/docs/1.1.0/api/class-logger','5d9'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-mouse',
  component: ComponentCreator('/docs/1.1.0/api/class-mouse','d68'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-page',
  component: ComponentCreator('/docs/1.1.0/api/class-page','f72'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-playwright',
  component: ComponentCreator('/docs/1.1.0/api/class-playwright','dcf'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-request',
  component: ComponentCreator('/docs/1.1.0/api/class-request','6fb'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-response',
  component: ComponentCreator('/docs/1.1.0/api/class-response','409'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-route',
  component: ComponentCreator('/docs/1.1.0/api/class-route','3b4'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-selectors',
  component: ComponentCreator('/docs/1.1.0/api/class-selectors','981'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-timeouterror',
  component: ComponentCreator('/docs/1.1.0/api/class-timeouterror','1fb'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-webkitbrowser',
  component: ComponentCreator('/docs/1.1.0/api/class-webkitbrowser','c1e'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/class-worker',
  component: ComponentCreator('/docs/1.1.0/api/class-worker','c34'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/environment-variables',
  component: ComponentCreator('/docs/1.1.0/api/environment-variables','1ad'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/working-with-chrome-extensions',
  component: ComponentCreator('/docs/1.1.0/api/working-with-chrome-extensions','3e7'),
  exact: true,
},
{
  path: '/docs/1.1.0/api/working-with-selectors',
  component: ComponentCreator('/docs/1.1.0/api/working-with-selectors','0ca'),
  exact: true,
},
{
  path: '/docs/1.1.0/ci',
  component: ComponentCreator('/docs/1.1.0/ci','002'),
  exact: true,
},
{
  path: '/docs/1.1.0/core-concepts',
  component: ComponentCreator('/docs/1.1.0/core-concepts','fdb'),
  exact: true,
},
{
  path: '/docs/1.1.0/docker/README',
  component: ComponentCreator('/docs/1.1.0/docker/README','be6'),
  exact: true,
},
{
  path: '/docs/1.1.0/emulation',
  component: ComponentCreator('/docs/1.1.0/emulation','1c8'),
  exact: true,
},
{
  path: '/docs/1.1.0/examples/README',
  component: ComponentCreator('/docs/1.1.0/examples/README','51a'),
  exact: true,
},
{
  path: '/docs/1.1.0/extensibility',
  component: ComponentCreator('/docs/1.1.0/extensibility','12e'),
  exact: true,
},
{
  path: '/docs/1.1.0/input',
  component: ComponentCreator('/docs/1.1.0/input','8ae'),
  exact: true,
},
{
  path: '/docs/1.1.0/installation',
  component: ComponentCreator('/docs/1.1.0/installation','b73'),
  exact: true,
},
{
  path: '/docs/1.1.0/intro',
  component: ComponentCreator('/docs/1.1.0/intro','84a'),
  exact: true,
},
{
  path: '/docs/1.1.0/loading',
  component: ComponentCreator('/docs/1.1.0/loading','257'),
  exact: true,
},
{
  path: '/docs/1.1.0/network',
  component: ComponentCreator('/docs/1.1.0/network','93e'),
  exact: true,
},
{
  path: '/docs/1.1.0/README',
  component: ComponentCreator('/docs/1.1.0/README','25f'),
  exact: true,
},
{
  path: '/docs/1.1.0/selectors',
  component: ComponentCreator('/docs/1.1.0/selectors','e4e'),
  exact: true,
},
{
  path: '/docs/1.1.0/showcase',
  component: ComponentCreator('/docs/1.1.0/showcase','e5e'),
  exact: true,
},
{
  path: '/docs/1.1.0/test-runners',
  component: ComponentCreator('/docs/1.1.0/test-runners','61e'),
  exact: true,
},
{
  path: '/docs/1.1.0/troubleshooting',
  component: ComponentCreator('/docs/1.1.0/troubleshooting','15e'),
  exact: true,
},
{
  path: '/docs/1.1.0/verification',
  component: ComponentCreator('/docs/1.1.0/verification','c50'),
  exact: true,
},
]
},
{
  path: '/docs/1.2.0',
  component: ComponentCreator('/docs/1.2.0','711'),
  
  routes: [
{
  path: '/docs/1.2.0/actionability',
  component: ComponentCreator('/docs/1.2.0/actionability','c18'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-accessibility',
  component: ComponentCreator('/docs/1.2.0/api/class-accessibility','249'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-browser',
  component: ComponentCreator('/docs/1.2.0/api/class-browser','ed2'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-browsercontext',
  component: ComponentCreator('/docs/1.2.0/api/class-browsercontext','443'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-browserserver',
  component: ComponentCreator('/docs/1.2.0/api/class-browserserver','262'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-browsertype',
  component: ComponentCreator('/docs/1.2.0/api/class-browsertype','548'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-cdpsession',
  component: ComponentCreator('/docs/1.2.0/api/class-cdpsession','1ff'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-chromiumbrowser',
  component: ComponentCreator('/docs/1.2.0/api/class-chromiumbrowser','bef'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-chromiumbrowsercontext',
  component: ComponentCreator('/docs/1.2.0/api/class-chromiumbrowsercontext','687'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-chromiumcoverage',
  component: ComponentCreator('/docs/1.2.0/api/class-chromiumcoverage','dfa'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-consolemessage',
  component: ComponentCreator('/docs/1.2.0/api/class-consolemessage','0ef'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-dialog',
  component: ComponentCreator('/docs/1.2.0/api/class-dialog','34c'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-download',
  component: ComponentCreator('/docs/1.2.0/api/class-download','e36'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-elementhandle',
  component: ComponentCreator('/docs/1.2.0/api/class-elementhandle','6d3'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-filechooser',
  component: ComponentCreator('/docs/1.2.0/api/class-filechooser','6dc'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-firefoxbrowser',
  component: ComponentCreator('/docs/1.2.0/api/class-firefoxbrowser','032'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-frame',
  component: ComponentCreator('/docs/1.2.0/api/class-frame','edc'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-jshandle',
  component: ComponentCreator('/docs/1.2.0/api/class-jshandle','c16'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-keyboard',
  component: ComponentCreator('/docs/1.2.0/api/class-keyboard','953'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-logger',
  component: ComponentCreator('/docs/1.2.0/api/class-logger','adb'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-mouse',
  component: ComponentCreator('/docs/1.2.0/api/class-mouse','52c'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-page',
  component: ComponentCreator('/docs/1.2.0/api/class-page','9e2'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-playwright',
  component: ComponentCreator('/docs/1.2.0/api/class-playwright','472'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-request',
  component: ComponentCreator('/docs/1.2.0/api/class-request','05c'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-response',
  component: ComponentCreator('/docs/1.2.0/api/class-response','d8b'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-route',
  component: ComponentCreator('/docs/1.2.0/api/class-route','f8e'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-selectors',
  component: ComponentCreator('/docs/1.2.0/api/class-selectors','dee'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-timeouterror',
  component: ComponentCreator('/docs/1.2.0/api/class-timeouterror','ea8'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-webkitbrowser',
  component: ComponentCreator('/docs/1.2.0/api/class-webkitbrowser','6fc'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/class-worker',
  component: ComponentCreator('/docs/1.2.0/api/class-worker','0c4'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/environment-variables',
  component: ComponentCreator('/docs/1.2.0/api/environment-variables','1f4'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/working-with-chrome-extensions',
  component: ComponentCreator('/docs/1.2.0/api/working-with-chrome-extensions','681'),
  exact: true,
},
{
  path: '/docs/1.2.0/api/working-with-selectors',
  component: ComponentCreator('/docs/1.2.0/api/working-with-selectors','1b6'),
  exact: true,
},
{
  path: '/docs/1.2.0/assertions',
  component: ComponentCreator('/docs/1.2.0/assertions','275'),
  exact: true,
},
{
  path: '/docs/1.2.0/ci',
  component: ComponentCreator('/docs/1.2.0/ci','b7a'),
  exact: true,
},
{
  path: '/docs/1.2.0/core-concepts',
  component: ComponentCreator('/docs/1.2.0/core-concepts','b79'),
  exact: true,
},
{
  path: '/docs/1.2.0/docker/README',
  component: ComponentCreator('/docs/1.2.0/docker/README','5f7'),
  exact: true,
},
{
  path: '/docs/1.2.0/emulation',
  component: ComponentCreator('/docs/1.2.0/emulation','e14'),
  exact: true,
},
{
  path: '/docs/1.2.0/examples/README',
  component: ComponentCreator('/docs/1.2.0/examples/README','20f'),
  exact: true,
},
{
  path: '/docs/1.2.0/extensibility',
  component: ComponentCreator('/docs/1.2.0/extensibility','3aa'),
  exact: true,
},
{
  path: '/docs/1.2.0/input',
  component: ComponentCreator('/docs/1.2.0/input','626'),
  exact: true,
},
{
  path: '/docs/1.2.0/installation',
  component: ComponentCreator('/docs/1.2.0/installation','4cf'),
  exact: true,
},
{
  path: '/docs/1.2.0/intro',
  component: ComponentCreator('/docs/1.2.0/intro','8a4'),
  exact: true,
},
{
  path: '/docs/1.2.0/loading',
  component: ComponentCreator('/docs/1.2.0/loading','eeb'),
  exact: true,
},
{
  path: '/docs/1.2.0/multi-pages',
  component: ComponentCreator('/docs/1.2.0/multi-pages','454'),
  exact: true,
},
{
  path: '/docs/1.2.0/network',
  component: ComponentCreator('/docs/1.2.0/network','f64'),
  exact: true,
},
{
  path: '/docs/1.2.0/README',
  component: ComponentCreator('/docs/1.2.0/README','7af'),
  exact: true,
},
{
  path: '/docs/1.2.0/selectors',
  component: ComponentCreator('/docs/1.2.0/selectors','390'),
  exact: true,
},
{
  path: '/docs/1.2.0/showcase',
  component: ComponentCreator('/docs/1.2.0/showcase','1a5'),
  exact: true,
},
{
  path: '/docs/1.2.0/test-runners',
  component: ComponentCreator('/docs/1.2.0/test-runners','e7e'),
  exact: true,
},
{
  path: '/docs/1.2.0/troubleshooting',
  component: ComponentCreator('/docs/1.2.0/troubleshooting','43d'),
  exact: true,
},
{
  path: '/docs/1.2.0/verification',
  component: ComponentCreator('/docs/1.2.0/verification','089'),
  exact: true,
},
]
},
{
  path: '/docs/1.3.0',
  component: ComponentCreator('/docs/1.3.0','f7d'),
  
  routes: [
{
  path: '/docs/1.3.0/actionability',
  component: ComponentCreator('/docs/1.3.0/actionability','896'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-accessibility',
  component: ComponentCreator('/docs/1.3.0/api/class-accessibility','a65'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-browser',
  component: ComponentCreator('/docs/1.3.0/api/class-browser','e35'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-browsercontext',
  component: ComponentCreator('/docs/1.3.0/api/class-browsercontext','6ac'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-browserserver',
  component: ComponentCreator('/docs/1.3.0/api/class-browserserver','473'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-browsertype',
  component: ComponentCreator('/docs/1.3.0/api/class-browsertype','e7b'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-cdpsession',
  component: ComponentCreator('/docs/1.3.0/api/class-cdpsession','7ec'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-chromiumbrowser',
  component: ComponentCreator('/docs/1.3.0/api/class-chromiumbrowser','797'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-chromiumbrowsercontext',
  component: ComponentCreator('/docs/1.3.0/api/class-chromiumbrowsercontext','1d1'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-chromiumcoverage',
  component: ComponentCreator('/docs/1.3.0/api/class-chromiumcoverage','4ee'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-consolemessage',
  component: ComponentCreator('/docs/1.3.0/api/class-consolemessage','c60'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-dialog',
  component: ComponentCreator('/docs/1.3.0/api/class-dialog','ceb'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-download',
  component: ComponentCreator('/docs/1.3.0/api/class-download','285'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-elementhandle',
  component: ComponentCreator('/docs/1.3.0/api/class-elementhandle','a23'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-filechooser',
  component: ComponentCreator('/docs/1.3.0/api/class-filechooser','ece'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-firefoxbrowser',
  component: ComponentCreator('/docs/1.3.0/api/class-firefoxbrowser','b63'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-frame',
  component: ComponentCreator('/docs/1.3.0/api/class-frame','e0f'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-jshandle',
  component: ComponentCreator('/docs/1.3.0/api/class-jshandle','ff9'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-keyboard',
  component: ComponentCreator('/docs/1.3.0/api/class-keyboard','ed9'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-logger',
  component: ComponentCreator('/docs/1.3.0/api/class-logger','dbb'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-mouse',
  component: ComponentCreator('/docs/1.3.0/api/class-mouse','e6a'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-page',
  component: ComponentCreator('/docs/1.3.0/api/class-page','d7a'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-playwright',
  component: ComponentCreator('/docs/1.3.0/api/class-playwright','551'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-request',
  component: ComponentCreator('/docs/1.3.0/api/class-request','4c6'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-response',
  component: ComponentCreator('/docs/1.3.0/api/class-response','d52'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-route',
  component: ComponentCreator('/docs/1.3.0/api/class-route','2a3'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-selectors',
  component: ComponentCreator('/docs/1.3.0/api/class-selectors','86d'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-timeouterror',
  component: ComponentCreator('/docs/1.3.0/api/class-timeouterror','b96'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-webkitbrowser',
  component: ComponentCreator('/docs/1.3.0/api/class-webkitbrowser','80c'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/class-worker',
  component: ComponentCreator('/docs/1.3.0/api/class-worker','742'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/environment-variables',
  component: ComponentCreator('/docs/1.3.0/api/environment-variables','a46'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/evaluationargument',
  component: ComponentCreator('/docs/1.3.0/api/evaluationargument','196'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/working-with-chrome-extensions',
  component: ComponentCreator('/docs/1.3.0/api/working-with-chrome-extensions','59d'),
  exact: true,
},
{
  path: '/docs/1.3.0/api/working-with-selectors',
  component: ComponentCreator('/docs/1.3.0/api/working-with-selectors','f7f'),
  exact: true,
},
{
  path: '/docs/1.3.0/assertions',
  component: ComponentCreator('/docs/1.3.0/assertions','30f'),
  exact: true,
},
{
  path: '/docs/1.3.0/ci',
  component: ComponentCreator('/docs/1.3.0/ci','7d4'),
  exact: true,
},
{
  path: '/docs/1.3.0/core-concepts',
  component: ComponentCreator('/docs/1.3.0/core-concepts','3ef'),
  exact: true,
},
{
  path: '/docs/1.3.0/debug',
  component: ComponentCreator('/docs/1.3.0/debug','4d5'),
  exact: true,
},
{
  path: '/docs/1.3.0/docker/README',
  component: ComponentCreator('/docs/1.3.0/docker/README','682'),
  exact: true,
},
{
  path: '/docs/1.3.0/emulation',
  component: ComponentCreator('/docs/1.3.0/emulation','fd6'),
  exact: true,
},
{
  path: '/docs/1.3.0/extensibility',
  component: ComponentCreator('/docs/1.3.0/extensibility','680'),
  exact: true,
},
{
  path: '/docs/1.3.0/input',
  component: ComponentCreator('/docs/1.3.0/input','8ae'),
  exact: true,
},
{
  path: '/docs/1.3.0/installation',
  component: ComponentCreator('/docs/1.3.0/installation','0f6'),
  exact: true,
},
{
  path: '/docs/1.3.0/intro',
  component: ComponentCreator('/docs/1.3.0/intro','4f3'),
  exact: true,
},
{
  path: '/docs/1.3.0/loading',
  component: ComponentCreator('/docs/1.3.0/loading','766'),
  exact: true,
},
{
  path: '/docs/1.3.0/multi-pages',
  component: ComponentCreator('/docs/1.3.0/multi-pages','a09'),
  exact: true,
},
{
  path: '/docs/1.3.0/network',
  component: ComponentCreator('/docs/1.3.0/network','3ee'),
  exact: true,
},
{
  path: '/docs/1.3.0/README',
  component: ComponentCreator('/docs/1.3.0/README','001'),
  exact: true,
},
{
  path: '/docs/1.3.0/selectors',
  component: ComponentCreator('/docs/1.3.0/selectors','6d8'),
  exact: true,
},
{
  path: '/docs/1.3.0/showcase',
  component: ComponentCreator('/docs/1.3.0/showcase','e5a'),
  exact: true,
},
{
  path: '/docs/1.3.0/test-runners',
  component: ComponentCreator('/docs/1.3.0/test-runners','846'),
  exact: true,
},
{
  path: '/docs/1.3.0/troubleshooting',
  component: ComponentCreator('/docs/1.3.0/troubleshooting','5d8'),
  exact: true,
},
{
  path: '/docs/1.3.0/verification',
  component: ComponentCreator('/docs/1.3.0/verification','010'),
  exact: true,
},
]
},
{
  path: '/docs/1.4.0',
  component: ComponentCreator('/docs/1.4.0','2ad'),
  
  routes: [
{
  path: '/docs/1.4.0/actionability',
  component: ComponentCreator('/docs/1.4.0/actionability','f21'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-accessibility',
  component: ComponentCreator('/docs/1.4.0/api/class-accessibility','279'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-browser',
  component: ComponentCreator('/docs/1.4.0/api/class-browser','875'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-browsercontext',
  component: ComponentCreator('/docs/1.4.0/api/class-browsercontext','8d9'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-browserserver',
  component: ComponentCreator('/docs/1.4.0/api/class-browserserver','631'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-browsertype',
  component: ComponentCreator('/docs/1.4.0/api/class-browsertype','42c'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-cdpsession',
  component: ComponentCreator('/docs/1.4.0/api/class-cdpsession','441'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-chromiumbrowser',
  component: ComponentCreator('/docs/1.4.0/api/class-chromiumbrowser','cf4'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-chromiumbrowsercontext',
  component: ComponentCreator('/docs/1.4.0/api/class-chromiumbrowsercontext','82d'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-chromiumcoverage',
  component: ComponentCreator('/docs/1.4.0/api/class-chromiumcoverage','4a6'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-consolemessage',
  component: ComponentCreator('/docs/1.4.0/api/class-consolemessage','b7d'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-dialog',
  component: ComponentCreator('/docs/1.4.0/api/class-dialog','7fe'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-download',
  component: ComponentCreator('/docs/1.4.0/api/class-download','52b'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-elementhandle',
  component: ComponentCreator('/docs/1.4.0/api/class-elementhandle','571'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-filechooser',
  component: ComponentCreator('/docs/1.4.0/api/class-filechooser','bc3'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-firefoxbrowser',
  component: ComponentCreator('/docs/1.4.0/api/class-firefoxbrowser','1c2'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-frame',
  component: ComponentCreator('/docs/1.4.0/api/class-frame','5fb'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-jshandle',
  component: ComponentCreator('/docs/1.4.0/api/class-jshandle','71b'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-keyboard',
  component: ComponentCreator('/docs/1.4.0/api/class-keyboard','7ae'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-logger',
  component: ComponentCreator('/docs/1.4.0/api/class-logger','558'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-mouse',
  component: ComponentCreator('/docs/1.4.0/api/class-mouse','515'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-page',
  component: ComponentCreator('/docs/1.4.0/api/class-page','92a'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-playwright',
  component: ComponentCreator('/docs/1.4.0/api/class-playwright','bb3'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-request',
  component: ComponentCreator('/docs/1.4.0/api/class-request','9d3'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-response',
  component: ComponentCreator('/docs/1.4.0/api/class-response','97f'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-route',
  component: ComponentCreator('/docs/1.4.0/api/class-route','621'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-selectors',
  component: ComponentCreator('/docs/1.4.0/api/class-selectors','94e'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-timeouterror',
  component: ComponentCreator('/docs/1.4.0/api/class-timeouterror','cc8'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-webkitbrowser',
  component: ComponentCreator('/docs/1.4.0/api/class-webkitbrowser','83e'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/class-worker',
  component: ComponentCreator('/docs/1.4.0/api/class-worker','699'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/environment-variables',
  component: ComponentCreator('/docs/1.4.0/api/environment-variables','899'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/evaluationargument',
  component: ComponentCreator('/docs/1.4.0/api/evaluationargument','1e3'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/working-with-chrome-extensions',
  component: ComponentCreator('/docs/1.4.0/api/working-with-chrome-extensions','ce2'),
  exact: true,
},
{
  path: '/docs/1.4.0/api/working-with-selectors',
  component: ComponentCreator('/docs/1.4.0/api/working-with-selectors','391'),
  exact: true,
},
{
  path: '/docs/1.4.0/assertions',
  component: ComponentCreator('/docs/1.4.0/assertions','93b'),
  exact: true,
},
{
  path: '/docs/1.4.0/auth',
  component: ComponentCreator('/docs/1.4.0/auth','b85'),
  exact: true,
},
{
  path: '/docs/1.4.0/ci',
  component: ComponentCreator('/docs/1.4.0/ci','094'),
  exact: true,
},
{
  path: '/docs/1.4.0/core-concepts',
  component: ComponentCreator('/docs/1.4.0/core-concepts','873'),
  exact: true,
},
{
  path: '/docs/1.4.0/debug',
  component: ComponentCreator('/docs/1.4.0/debug','b4e'),
  exact: true,
},
{
  path: '/docs/1.4.0/docker/README',
  component: ComponentCreator('/docs/1.4.0/docker/README','f14'),
  exact: true,
},
{
  path: '/docs/1.4.0/emulation',
  component: ComponentCreator('/docs/1.4.0/emulation','a65'),
  exact: true,
},
{
  path: '/docs/1.4.0/extensibility',
  component: ComponentCreator('/docs/1.4.0/extensibility','f40'),
  exact: true,
},
{
  path: '/docs/1.4.0/input',
  component: ComponentCreator('/docs/1.4.0/input','fc3'),
  exact: true,
},
{
  path: '/docs/1.4.0/installation',
  component: ComponentCreator('/docs/1.4.0/installation','987'),
  exact: true,
},
{
  path: '/docs/1.4.0/intro',
  component: ComponentCreator('/docs/1.4.0/intro','c7c'),
  exact: true,
},
{
  path: '/docs/1.4.0/languages',
  component: ComponentCreator('/docs/1.4.0/languages','fc6'),
  exact: true,
},
{
  path: '/docs/1.4.0/multi-pages',
  component: ComponentCreator('/docs/1.4.0/multi-pages','133'),
  exact: true,
},
{
  path: '/docs/1.4.0/navigations',
  component: ComponentCreator('/docs/1.4.0/navigations','354'),
  exact: true,
},
{
  path: '/docs/1.4.0/network',
  component: ComponentCreator('/docs/1.4.0/network','d6d'),
  exact: true,
},
{
  path: '/docs/1.4.0/pom',
  component: ComponentCreator('/docs/1.4.0/pom','f6a'),
  exact: true,
},
{
  path: '/docs/1.4.0/README',
  component: ComponentCreator('/docs/1.4.0/README','522'),
  exact: true,
},
{
  path: '/docs/1.4.0/selectors',
  component: ComponentCreator('/docs/1.4.0/selectors','13b'),
  exact: true,
},
{
  path: '/docs/1.4.0/showcase',
  component: ComponentCreator('/docs/1.4.0/showcase','583'),
  exact: true,
},
{
  path: '/docs/1.4.0/test-runners',
  component: ComponentCreator('/docs/1.4.0/test-runners','b7b'),
  exact: true,
},
{
  path: '/docs/1.4.0/troubleshooting',
  component: ComponentCreator('/docs/1.4.0/troubleshooting','ddb'),
  exact: true,
},
{
  path: '/docs/1.4.0/verification',
  component: ComponentCreator('/docs/1.4.0/verification','6e5'),
  exact: true,
},
{
  path: '/docs/1.4.0/why-playwright',
  component: ComponentCreator('/docs/1.4.0/why-playwright','fe0'),
  exact: true,
},
]
},
{
  path: '/docs/1.5.0',
  component: ComponentCreator('/docs/1.5.0','3a8'),
  
  routes: [
{
  path: '/docs/1.5.0/actionability',
  component: ComponentCreator('/docs/1.5.0/actionability','769'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-accessibility',
  component: ComponentCreator('/docs/1.5.0/api/class-accessibility','430'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-browser',
  component: ComponentCreator('/docs/1.5.0/api/class-browser','555'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-browsercontext',
  component: ComponentCreator('/docs/1.5.0/api/class-browsercontext','616'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-browserserver',
  component: ComponentCreator('/docs/1.5.0/api/class-browserserver','7bb'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-browsertype',
  component: ComponentCreator('/docs/1.5.0/api/class-browsertype','7a4'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-cdpsession',
  component: ComponentCreator('/docs/1.5.0/api/class-cdpsession','6c3'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-chromiumbrowser',
  component: ComponentCreator('/docs/1.5.0/api/class-chromiumbrowser','578'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-chromiumbrowsercontext',
  component: ComponentCreator('/docs/1.5.0/api/class-chromiumbrowsercontext','7c8'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-chromiumcoverage',
  component: ComponentCreator('/docs/1.5.0/api/class-chromiumcoverage','212'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-consolemessage',
  component: ComponentCreator('/docs/1.5.0/api/class-consolemessage','3fb'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-dialog',
  component: ComponentCreator('/docs/1.5.0/api/class-dialog','f07'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-download',
  component: ComponentCreator('/docs/1.5.0/api/class-download','aeb'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-elementhandle',
  component: ComponentCreator('/docs/1.5.0/api/class-elementhandle','b9c'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-filechooser',
  component: ComponentCreator('/docs/1.5.0/api/class-filechooser','306'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-firefoxbrowser',
  component: ComponentCreator('/docs/1.5.0/api/class-firefoxbrowser','149'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-frame',
  component: ComponentCreator('/docs/1.5.0/api/class-frame','2f9'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-jshandle',
  component: ComponentCreator('/docs/1.5.0/api/class-jshandle','fae'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-keyboard',
  component: ComponentCreator('/docs/1.5.0/api/class-keyboard','06b'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-logger',
  component: ComponentCreator('/docs/1.5.0/api/class-logger','6a5'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-mouse',
  component: ComponentCreator('/docs/1.5.0/api/class-mouse','391'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-page',
  component: ComponentCreator('/docs/1.5.0/api/class-page','421'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-playwright',
  component: ComponentCreator('/docs/1.5.0/api/class-playwright','e06'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-request',
  component: ComponentCreator('/docs/1.5.0/api/class-request','fb2'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-response',
  component: ComponentCreator('/docs/1.5.0/api/class-response','5b4'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-route',
  component: ComponentCreator('/docs/1.5.0/api/class-route','ffa'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-selectors',
  component: ComponentCreator('/docs/1.5.0/api/class-selectors','c30'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-timeouterror',
  component: ComponentCreator('/docs/1.5.0/api/class-timeouterror','722'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-webkitbrowser',
  component: ComponentCreator('/docs/1.5.0/api/class-webkitbrowser','652'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/class-worker',
  component: ComponentCreator('/docs/1.5.0/api/class-worker','c34'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/environment-variables',
  component: ComponentCreator('/docs/1.5.0/api/environment-variables','8a6'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/evaluationargument',
  component: ComponentCreator('/docs/1.5.0/api/evaluationargument','4c3'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/working-with-chrome-extensions',
  component: ComponentCreator('/docs/1.5.0/api/working-with-chrome-extensions','b0e'),
  exact: true,
},
{
  path: '/docs/1.5.0/api/working-with-selectors',
  component: ComponentCreator('/docs/1.5.0/api/working-with-selectors','57f'),
  exact: true,
},
{
  path: '/docs/1.5.0/assertions',
  component: ComponentCreator('/docs/1.5.0/assertions','d08'),
  exact: true,
},
{
  path: '/docs/1.5.0/auth',
  component: ComponentCreator('/docs/1.5.0/auth','5df'),
  exact: true,
},
{
  path: '/docs/1.5.0/ci',
  component: ComponentCreator('/docs/1.5.0/ci','904'),
  exact: true,
},
{
  path: '/docs/1.5.0/core-concepts',
  component: ComponentCreator('/docs/1.5.0/core-concepts','75e'),
  exact: true,
},
{
  path: '/docs/1.5.0/debug',
  component: ComponentCreator('/docs/1.5.0/debug','8d4'),
  exact: true,
},
{
  path: '/docs/1.5.0/docker/README',
  component: ComponentCreator('/docs/1.5.0/docker/README','eb0'),
  exact: true,
},
{
  path: '/docs/1.5.0/emulation',
  component: ComponentCreator('/docs/1.5.0/emulation','fdc'),
  exact: true,
},
{
  path: '/docs/1.5.0/extensibility',
  component: ComponentCreator('/docs/1.5.0/extensibility','3bb'),
  exact: true,
},
{
  path: '/docs/1.5.0/input',
  component: ComponentCreator('/docs/1.5.0/input','718'),
  exact: true,
},
{
  path: '/docs/1.5.0/installation',
  component: ComponentCreator('/docs/1.5.0/installation','e19'),
  exact: true,
},
{
  path: '/docs/1.5.0/intro',
  component: ComponentCreator('/docs/1.5.0/intro','7a0'),
  exact: true,
},
{
  path: '/docs/1.5.0/languages',
  component: ComponentCreator('/docs/1.5.0/languages','cf4'),
  exact: true,
},
{
  path: '/docs/1.5.0/multi-pages',
  component: ComponentCreator('/docs/1.5.0/multi-pages','5d3'),
  exact: true,
},
{
  path: '/docs/1.5.0/navigations',
  component: ComponentCreator('/docs/1.5.0/navigations','30f'),
  exact: true,
},
{
  path: '/docs/1.5.0/network',
  component: ComponentCreator('/docs/1.5.0/network','7e6'),
  exact: true,
},
{
  path: '/docs/1.5.0/pom',
  component: ComponentCreator('/docs/1.5.0/pom','e2e'),
  exact: true,
},
{
  path: '/docs/1.5.0/README',
  component: ComponentCreator('/docs/1.5.0/README','471'),
  exact: true,
},
{
  path: '/docs/1.5.0/selectors',
  component: ComponentCreator('/docs/1.5.0/selectors','78e'),
  exact: true,
},
{
  path: '/docs/1.5.0/showcase',
  component: ComponentCreator('/docs/1.5.0/showcase','4eb'),
  exact: true,
},
{
  path: '/docs/1.5.0/test-runners',
  component: ComponentCreator('/docs/1.5.0/test-runners','67a'),
  exact: true,
},
{
  path: '/docs/1.5.0/troubleshooting',
  component: ComponentCreator('/docs/1.5.0/troubleshooting','3d3'),
  exact: true,
},
{
  path: '/docs/1.5.0/verification',
  component: ComponentCreator('/docs/1.5.0/verification','8bc'),
  exact: true,
},
{
  path: '/docs/1.5.0/why-playwright',
  component: ComponentCreator('/docs/1.5.0/why-playwright','b50'),
  exact: true,
},
]
},
{
  path: '/docs/1.6.0',
  component: ComponentCreator('/docs/1.6.0','ebc'),
  
  routes: [
{
  path: '/docs/1.6.0/actionability',
  component: ComponentCreator('/docs/1.6.0/actionability','54f'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-accessibility',
  component: ComponentCreator('/docs/1.6.0/api/class-accessibility','461'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-browser',
  component: ComponentCreator('/docs/1.6.0/api/class-browser','acc'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-browsercontext',
  component: ComponentCreator('/docs/1.6.0/api/class-browsercontext','a4f'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-browserserver',
  component: ComponentCreator('/docs/1.6.0/api/class-browserserver','783'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-browsertype',
  component: ComponentCreator('/docs/1.6.0/api/class-browsertype','bd1'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-cdpsession',
  component: ComponentCreator('/docs/1.6.0/api/class-cdpsession','a95'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-chromiumbrowser',
  component: ComponentCreator('/docs/1.6.0/api/class-chromiumbrowser','1ce'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-chromiumbrowsercontext',
  component: ComponentCreator('/docs/1.6.0/api/class-chromiumbrowsercontext','81d'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-chromiumcoverage',
  component: ComponentCreator('/docs/1.6.0/api/class-chromiumcoverage','531'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-consolemessage',
  component: ComponentCreator('/docs/1.6.0/api/class-consolemessage','5fd'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-dialog',
  component: ComponentCreator('/docs/1.6.0/api/class-dialog','8a4'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-download',
  component: ComponentCreator('/docs/1.6.0/api/class-download','fd5'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-elementhandle',
  component: ComponentCreator('/docs/1.6.0/api/class-elementhandle','fac'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-filechooser',
  component: ComponentCreator('/docs/1.6.0/api/class-filechooser','b5a'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-firefoxbrowser',
  component: ComponentCreator('/docs/1.6.0/api/class-firefoxbrowser','95e'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-frame',
  component: ComponentCreator('/docs/1.6.0/api/class-frame','40c'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-jshandle',
  component: ComponentCreator('/docs/1.6.0/api/class-jshandle','700'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-keyboard',
  component: ComponentCreator('/docs/1.6.0/api/class-keyboard','a18'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-logger',
  component: ComponentCreator('/docs/1.6.0/api/class-logger','bb4'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-mouse',
  component: ComponentCreator('/docs/1.6.0/api/class-mouse','424'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-page',
  component: ComponentCreator('/docs/1.6.0/api/class-page','79f'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-playwright',
  component: ComponentCreator('/docs/1.6.0/api/class-playwright','bb3'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-request',
  component: ComponentCreator('/docs/1.6.0/api/class-request','b9c'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-response',
  component: ComponentCreator('/docs/1.6.0/api/class-response','070'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-route',
  component: ComponentCreator('/docs/1.6.0/api/class-route','d65'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-selectors',
  component: ComponentCreator('/docs/1.6.0/api/class-selectors','21c'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-timeouterror',
  component: ComponentCreator('/docs/1.6.0/api/class-timeouterror','67f'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-touchscreen',
  component: ComponentCreator('/docs/1.6.0/api/class-touchscreen','db7'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-video',
  component: ComponentCreator('/docs/1.6.0/api/class-video','44f'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-webkitbrowser',
  component: ComponentCreator('/docs/1.6.0/api/class-webkitbrowser','958'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-websocket',
  component: ComponentCreator('/docs/1.6.0/api/class-websocket','d60'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/class-worker',
  component: ComponentCreator('/docs/1.6.0/api/class-worker','5ca'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/environment-variables',
  component: ComponentCreator('/docs/1.6.0/api/environment-variables','d6a'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/evaluationargument',
  component: ComponentCreator('/docs/1.6.0/api/evaluationargument','846'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/working-with-chrome-extensions',
  component: ComponentCreator('/docs/1.6.0/api/working-with-chrome-extensions','f47'),
  exact: true,
},
{
  path: '/docs/1.6.0/api/working-with-selectors',
  component: ComponentCreator('/docs/1.6.0/api/working-with-selectors','775'),
  exact: true,
},
{
  path: '/docs/1.6.0/assertions',
  component: ComponentCreator('/docs/1.6.0/assertions','082'),
  exact: true,
},
{
  path: '/docs/1.6.0/auth',
  component: ComponentCreator('/docs/1.6.0/auth','c17'),
  exact: true,
},
{
  path: '/docs/1.6.0/ci',
  component: ComponentCreator('/docs/1.6.0/ci','ad1'),
  exact: true,
},
{
  path: '/docs/1.6.0/core-concepts',
  component: ComponentCreator('/docs/1.6.0/core-concepts','7d4'),
  exact: true,
},
{
  path: '/docs/1.6.0/debug',
  component: ComponentCreator('/docs/1.6.0/debug','8b3'),
  exact: true,
},
{
  path: '/docs/1.6.0/docker/README',
  component: ComponentCreator('/docs/1.6.0/docker/README','b8c'),
  exact: true,
},
{
  path: '/docs/1.6.0/emulation',
  component: ComponentCreator('/docs/1.6.0/emulation','f6b'),
  exact: true,
},
{
  path: '/docs/1.6.0/extensibility',
  component: ComponentCreator('/docs/1.6.0/extensibility','47d'),
  exact: true,
},
{
  path: '/docs/1.6.0/input',
  component: ComponentCreator('/docs/1.6.0/input','ef9'),
  exact: true,
},
{
  path: '/docs/1.6.0/installation',
  component: ComponentCreator('/docs/1.6.0/installation','279'),
  exact: true,
},
{
  path: '/docs/1.6.0/intro',
  component: ComponentCreator('/docs/1.6.0/intro','98a'),
  exact: true,
},
{
  path: '/docs/1.6.0/languages',
  component: ComponentCreator('/docs/1.6.0/languages','bbc'),
  exact: true,
},
{
  path: '/docs/1.6.0/multi-pages',
  component: ComponentCreator('/docs/1.6.0/multi-pages','df1'),
  exact: true,
},
{
  path: '/docs/1.6.0/navigations',
  component: ComponentCreator('/docs/1.6.0/navigations','a87'),
  exact: true,
},
{
  path: '/docs/1.6.0/network',
  component: ComponentCreator('/docs/1.6.0/network','288'),
  exact: true,
},
{
  path: '/docs/1.6.0/pom',
  component: ComponentCreator('/docs/1.6.0/pom','15b'),
  exact: true,
},
{
  path: '/docs/1.6.0/README',
  component: ComponentCreator('/docs/1.6.0/README','165'),
  exact: true,
},
{
  path: '/docs/1.6.0/selectors',
  component: ComponentCreator('/docs/1.6.0/selectors','956'),
  exact: true,
},
{
  path: '/docs/1.6.0/showcase',
  component: ComponentCreator('/docs/1.6.0/showcase','aca'),
  exact: true,
},
{
  path: '/docs/1.6.0/test-runners',
  component: ComponentCreator('/docs/1.6.0/test-runners','05c'),
  exact: true,
},
{
  path: '/docs/1.6.0/troubleshooting',
  component: ComponentCreator('/docs/1.6.0/troubleshooting','c56'),
  exact: true,
},
{
  path: '/docs/1.6.0/verification',
  component: ComponentCreator('/docs/1.6.0/verification','dfa'),
  exact: true,
},
{
  path: '/docs/1.6.0/why-playwright',
  component: ComponentCreator('/docs/1.6.0/why-playwright','bba'),
  exact: true,
},
]
},
{
  path: '/docs/next',
  component: ComponentCreator('/docs/next','7fa'),
  
  routes: [
{
  path: '/docs/next/actionability',
  component: ComponentCreator('/docs/next/actionability','092'),
  exact: true,
},
{
  path: '/docs/next/api/class-accessibility',
  component: ComponentCreator('/docs/next/api/class-accessibility','944'),
  exact: true,
},
{
  path: '/docs/next/api/class-browser',
  component: ComponentCreator('/docs/next/api/class-browser','789'),
  exact: true,
},
{
  path: '/docs/next/api/class-browsercontext',
  component: ComponentCreator('/docs/next/api/class-browsercontext','70f'),
  exact: true,
},
{
  path: '/docs/next/api/class-browserserver',
  component: ComponentCreator('/docs/next/api/class-browserserver','8d1'),
  exact: true,
},
{
  path: '/docs/next/api/class-browsertype',
  component: ComponentCreator('/docs/next/api/class-browsertype','e83'),
  exact: true,
},
{
  path: '/docs/next/api/class-cdpsession',
  component: ComponentCreator('/docs/next/api/class-cdpsession','da1'),
  exact: true,
},
{
  path: '/docs/next/api/class-chromiumbrowser',
  component: ComponentCreator('/docs/next/api/class-chromiumbrowser','344'),
  exact: true,
},
{
  path: '/docs/next/api/class-chromiumbrowsercontext',
  component: ComponentCreator('/docs/next/api/class-chromiumbrowsercontext','1aa'),
  exact: true,
},
{
  path: '/docs/next/api/class-chromiumcoverage',
  component: ComponentCreator('/docs/next/api/class-chromiumcoverage','65f'),
  exact: true,
},
{
  path: '/docs/next/api/class-consolemessage',
  component: ComponentCreator('/docs/next/api/class-consolemessage','622'),
  exact: true,
},
{
  path: '/docs/next/api/class-dialog',
  component: ComponentCreator('/docs/next/api/class-dialog','46b'),
  exact: true,
},
{
  path: '/docs/next/api/class-download',
  component: ComponentCreator('/docs/next/api/class-download','296'),
  exact: true,
},
{
  path: '/docs/next/api/class-elementhandle',
  component: ComponentCreator('/docs/next/api/class-elementhandle','6e2'),
  exact: true,
},
{
  path: '/docs/next/api/class-filechooser',
  component: ComponentCreator('/docs/next/api/class-filechooser','229'),
  exact: true,
},
{
  path: '/docs/next/api/class-firefoxbrowser',
  component: ComponentCreator('/docs/next/api/class-firefoxbrowser','6f2'),
  exact: true,
},
{
  path: '/docs/next/api/class-frame',
  component: ComponentCreator('/docs/next/api/class-frame','596'),
  exact: true,
},
{
  path: '/docs/next/api/class-jshandle',
  component: ComponentCreator('/docs/next/api/class-jshandle','a85'),
  exact: true,
},
{
  path: '/docs/next/api/class-keyboard',
  component: ComponentCreator('/docs/next/api/class-keyboard','3a7'),
  exact: true,
},
{
  path: '/docs/next/api/class-logger',
  component: ComponentCreator('/docs/next/api/class-logger','6a4'),
  exact: true,
},
{
  path: '/docs/next/api/class-mouse',
  component: ComponentCreator('/docs/next/api/class-mouse','33c'),
  exact: true,
},
{
  path: '/docs/next/api/class-page',
  component: ComponentCreator('/docs/next/api/class-page','54c'),
  exact: true,
},
{
  path: '/docs/next/api/class-playwright',
  component: ComponentCreator('/docs/next/api/class-playwright','173'),
  exact: true,
},
{
  path: '/docs/next/api/class-request',
  component: ComponentCreator('/docs/next/api/class-request','29a'),
  exact: true,
},
{
  path: '/docs/next/api/class-response',
  component: ComponentCreator('/docs/next/api/class-response','cff'),
  exact: true,
},
{
  path: '/docs/next/api/class-route',
  component: ComponentCreator('/docs/next/api/class-route','d6f'),
  exact: true,
},
{
  path: '/docs/next/api/class-selectors',
  component: ComponentCreator('/docs/next/api/class-selectors','aae'),
  exact: true,
},
{
  path: '/docs/next/api/class-timeouterror',
  component: ComponentCreator('/docs/next/api/class-timeouterror','168'),
  exact: true,
},
{
  path: '/docs/next/api/class-touchscreen',
  component: ComponentCreator('/docs/next/api/class-touchscreen','881'),
  exact: true,
},
{
  path: '/docs/next/api/class-video',
  component: ComponentCreator('/docs/next/api/class-video','190'),
  exact: true,
},
{
  path: '/docs/next/api/class-webkitbrowser',
  component: ComponentCreator('/docs/next/api/class-webkitbrowser','dd5'),
  exact: true,
},
{
  path: '/docs/next/api/class-websocket',
  component: ComponentCreator('/docs/next/api/class-websocket','aa5'),
  exact: true,
},
{
  path: '/docs/next/api/class-worker',
  component: ComponentCreator('/docs/next/api/class-worker','dc9'),
  exact: true,
},
{
  path: '/docs/next/assertions',
  component: ComponentCreator('/docs/next/assertions','46b'),
  exact: true,
},
{
  path: '/docs/next/auth',
  component: ComponentCreator('/docs/next/auth','d71'),
  exact: true,
},
{
  path: '/docs/next/ci',
  component: ComponentCreator('/docs/next/ci','a8e'),
  exact: true,
},
{
  path: '/docs/next/cli',
  component: ComponentCreator('/docs/next/cli','4b9'),
  exact: true,
},
{
  path: '/docs/next/core-concepts',
  component: ComponentCreator('/docs/next/core-concepts','37f'),
  exact: true,
},
{
  path: '/docs/next/debug',
  component: ComponentCreator('/docs/next/debug','d27'),
  exact: true,
},
{
  path: '/docs/next/docker',
  component: ComponentCreator('/docs/next/docker','b04'),
  exact: true,
},
{
  path: '/docs/next/emulation',
  component: ComponentCreator('/docs/next/emulation','d9d'),
  exact: true,
},
{
  path: '/docs/next/extensibility',
  component: ComponentCreator('/docs/next/extensibility','097'),
  exact: true,
},
{
  path: '/docs/next/input',
  component: ComponentCreator('/docs/next/input','263'),
  exact: true,
},
{
  path: '/docs/next/installation',
  component: ComponentCreator('/docs/next/installation','b68'),
  exact: true,
},
{
  path: '/docs/next/intro',
  component: ComponentCreator('/docs/next/intro','e88'),
  exact: true,
},
{
  path: '/docs/next/languages',
  component: ComponentCreator('/docs/next/languages','517'),
  exact: true,
},
{
  path: '/docs/next/mobile',
  component: ComponentCreator('/docs/next/mobile','0da'),
  exact: true,
},
{
  path: '/docs/next/multi-pages',
  component: ComponentCreator('/docs/next/multi-pages','c1d'),
  exact: true,
},
{
  path: '/docs/next/navigations',
  component: ComponentCreator('/docs/next/navigations','dfa'),
  exact: true,
},
{
  path: '/docs/next/network',
  component: ComponentCreator('/docs/next/network','528'),
  exact: true,
},
{
  path: '/docs/next/pom',
  component: ComponentCreator('/docs/next/pom','90f'),
  exact: true,
},
{
  path: '/docs/next/README',
  component: ComponentCreator('/docs/next/README','e1e'),
  exact: true,
},
{
  path: '/docs/next/selectors',
  component: ComponentCreator('/docs/next/selectors','5b3'),
  exact: true,
},
{
  path: '/docs/next/showcase',
  component: ComponentCreator('/docs/next/showcase','87d'),
  exact: true,
},
{
  path: '/docs/next/test-runners',
  component: ComponentCreator('/docs/next/test-runners','f2e'),
  exact: true,
},
{
  path: '/docs/next/troubleshooting',
  component: ComponentCreator('/docs/next/troubleshooting','7c0'),
  exact: true,
},
{
  path: '/docs/next/verification',
  component: ComponentCreator('/docs/next/verification','bb2'),
  exact: true,
},
{
  path: '/docs/next/why-playwright',
  component: ComponentCreator('/docs/next/why-playwright','965'),
  exact: true,
},
]
},
{
  path: '/docs',
  component: ComponentCreator('/docs','296'),
  
  routes: [
{
  path: '/docs/actionability',
  component: ComponentCreator('/docs/actionability','1b0'),
  exact: true,
},
{
  path: '/docs/api/class-accessibility',
  component: ComponentCreator('/docs/api/class-accessibility','38e'),
  exact: true,
},
{
  path: '/docs/api/class-browser',
  component: ComponentCreator('/docs/api/class-browser','c92'),
  exact: true,
},
{
  path: '/docs/api/class-browsercontext',
  component: ComponentCreator('/docs/api/class-browsercontext','5a6'),
  exact: true,
},
{
  path: '/docs/api/class-browserserver',
  component: ComponentCreator('/docs/api/class-browserserver','4e5'),
  exact: true,
},
{
  path: '/docs/api/class-browsertype',
  component: ComponentCreator('/docs/api/class-browsertype','b7c'),
  exact: true,
},
{
  path: '/docs/api/class-cdpsession',
  component: ComponentCreator('/docs/api/class-cdpsession','833'),
  exact: true,
},
{
  path: '/docs/api/class-chromiumbrowser',
  component: ComponentCreator('/docs/api/class-chromiumbrowser','558'),
  exact: true,
},
{
  path: '/docs/api/class-chromiumbrowsercontext',
  component: ComponentCreator('/docs/api/class-chromiumbrowsercontext','45e'),
  exact: true,
},
{
  path: '/docs/api/class-chromiumcoverage',
  component: ComponentCreator('/docs/api/class-chromiumcoverage','455'),
  exact: true,
},
{
  path: '/docs/api/class-consolemessage',
  component: ComponentCreator('/docs/api/class-consolemessage','f9e'),
  exact: true,
},
{
  path: '/docs/api/class-dialog',
  component: ComponentCreator('/docs/api/class-dialog','cdf'),
  exact: true,
},
{
  path: '/docs/api/class-download',
  component: ComponentCreator('/docs/api/class-download','a9f'),
  exact: true,
},
{
  path: '/docs/api/class-elementhandle',
  component: ComponentCreator('/docs/api/class-elementhandle','a2b'),
  exact: true,
},
{
  path: '/docs/api/class-filechooser',
  component: ComponentCreator('/docs/api/class-filechooser','ff7'),
  exact: true,
},
{
  path: '/docs/api/class-firefoxbrowser',
  component: ComponentCreator('/docs/api/class-firefoxbrowser','d33'),
  exact: true,
},
{
  path: '/docs/api/class-frame',
  component: ComponentCreator('/docs/api/class-frame','797'),
  exact: true,
},
{
  path: '/docs/api/class-jshandle',
  component: ComponentCreator('/docs/api/class-jshandle','ba8'),
  exact: true,
},
{
  path: '/docs/api/class-keyboard',
  component: ComponentCreator('/docs/api/class-keyboard','081'),
  exact: true,
},
{
  path: '/docs/api/class-logger',
  component: ComponentCreator('/docs/api/class-logger','988'),
  exact: true,
},
{
  path: '/docs/api/class-mouse',
  component: ComponentCreator('/docs/api/class-mouse','0f9'),
  exact: true,
},
{
  path: '/docs/api/class-page',
  component: ComponentCreator('/docs/api/class-page','864'),
  exact: true,
},
{
  path: '/docs/api/class-playwright',
  component: ComponentCreator('/docs/api/class-playwright','8ef'),
  exact: true,
},
{
  path: '/docs/api/class-request',
  component: ComponentCreator('/docs/api/class-request','0b8'),
  exact: true,
},
{
  path: '/docs/api/class-response',
  component: ComponentCreator('/docs/api/class-response','dfc'),
  exact: true,
},
{
  path: '/docs/api/class-route',
  component: ComponentCreator('/docs/api/class-route','739'),
  exact: true,
},
{
  path: '/docs/api/class-selectors',
  component: ComponentCreator('/docs/api/class-selectors','29b'),
  exact: true,
},
{
  path: '/docs/api/class-timeouterror',
  component: ComponentCreator('/docs/api/class-timeouterror','531'),
  exact: true,
},
{
  path: '/docs/api/class-touchscreen',
  component: ComponentCreator('/docs/api/class-touchscreen','5f8'),
  exact: true,
},
{
  path: '/docs/api/class-video',
  component: ComponentCreator('/docs/api/class-video','070'),
  exact: true,
},
{
  path: '/docs/api/class-webkitbrowser',
  component: ComponentCreator('/docs/api/class-webkitbrowser','ebe'),
  exact: true,
},
{
  path: '/docs/api/class-websocket',
  component: ComponentCreator('/docs/api/class-websocket','fdc'),
  exact: true,
},
{
  path: '/docs/api/class-worker',
  component: ComponentCreator('/docs/api/class-worker','4e9'),
  exact: true,
},
{
  path: '/docs/api/environment-variables',
  component: ComponentCreator('/docs/api/environment-variables','1e6'),
  exact: true,
},
{
  path: '/docs/api/evaluationargument',
  component: ComponentCreator('/docs/api/evaluationargument','d2c'),
  exact: true,
},
{
  path: '/docs/api/working-with-chrome-extensions',
  component: ComponentCreator('/docs/api/working-with-chrome-extensions','629'),
  exact: true,
},
{
  path: '/docs/api/working-with-selectors',
  component: ComponentCreator('/docs/api/working-with-selectors','15f'),
  exact: true,
},
{
  path: '/docs/assertions',
  component: ComponentCreator('/docs/assertions','c69'),
  exact: true,
},
{
  path: '/docs/auth',
  component: ComponentCreator('/docs/auth','db9'),
  exact: true,
},
{
  path: '/docs/ci',
  component: ComponentCreator('/docs/ci','999'),
  exact: true,
},
{
  path: '/docs/core-concepts',
  component: ComponentCreator('/docs/core-concepts','16f'),
  exact: true,
},
{
  path: '/docs/debug',
  component: ComponentCreator('/docs/debug','f92'),
  exact: true,
},
{
  path: '/docs/docker/README',
  component: ComponentCreator('/docs/docker/README','f4e'),
  exact: true,
},
{
  path: '/docs/emulation',
  component: ComponentCreator('/docs/emulation','6f2'),
  exact: true,
},
{
  path: '/docs/extensibility',
  component: ComponentCreator('/docs/extensibility','67d'),
  exact: true,
},
{
  path: '/docs/input',
  component: ComponentCreator('/docs/input','813'),
  exact: true,
},
{
  path: '/docs/installation',
  component: ComponentCreator('/docs/installation','68c'),
  exact: true,
},
{
  path: '/docs/intro',
  component: ComponentCreator('/docs/intro','fdd'),
  exact: true,
},
{
  path: '/docs/languages',
  component: ComponentCreator('/docs/languages','af5'),
  exact: true,
},
{
  path: '/docs/mobile',
  component: ComponentCreator('/docs/mobile','b86'),
  exact: true,
},
{
  path: '/docs/multi-pages',
  component: ComponentCreator('/docs/multi-pages','8c2'),
  exact: true,
},
{
  path: '/docs/navigations',
  component: ComponentCreator('/docs/navigations','950'),
  exact: true,
},
{
  path: '/docs/network',
  component: ComponentCreator('/docs/network','840'),
  exact: true,
},
{
  path: '/docs/pom',
  component: ComponentCreator('/docs/pom','015'),
  exact: true,
},
{
  path: '/docs/README',
  component: ComponentCreator('/docs/README','4f5'),
  exact: true,
},
{
  path: '/docs/selectors',
  component: ComponentCreator('/docs/selectors','9c8'),
  exact: true,
},
{
  path: '/docs/showcase',
  component: ComponentCreator('/docs/showcase','fe0'),
  exact: true,
},
{
  path: '/docs/test-runners',
  component: ComponentCreator('/docs/test-runners','bef'),
  exact: true,
},
{
  path: '/docs/troubleshooting',
  component: ComponentCreator('/docs/troubleshooting','02d'),
  exact: true,
},
{
  path: '/docs/verification',
  component: ComponentCreator('/docs/verification','1f1'),
  exact: true,
},
{
  path: '/docs/why-playwright',
  component: ComponentCreator('/docs/why-playwright','218'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
