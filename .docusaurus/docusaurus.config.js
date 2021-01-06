export default {
  "title": "Playwright",
  "tagline": "Fast and reliable end-to-end testing for modern web apps",
  "url": "https://playwright.dev",
  "baseUrl": "/",
  "organizationName": "microsoft",
  "projectName": "playwright.dev",
  "onBrokenLinks": "log",
  "scripts": [
    "js/redirection.js"
  ],
  "favicon": "img/playwright-logo.svg",
  "themeConfig": {
    "colorMode": {
      "defaultMode": "dark",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "navbar": {
      "title": "Playwright",
      "logo": {
        "alt": "Playwright logo",
        "src": "img/playwright-logo.svg"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "label": "Docs",
          "position": "left",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "type": "doc",
          "docId": "api/class-playwright",
          "label": "API",
          "position": "left",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "href": "https://github.com/microsoft/playwright",
          "position": "right",
          "className": "header-github-link",
          "aria-label": "GitHub repository"
        },
        {
          "type": "docsVersionDropdown",
          "position": "left",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": [
            {
              "to": "/versions",
              "label": "All versions"
            }
          ],
          "dropdownActiveClassDisabled": true
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Getting started",
              "to": "docs/intro"
            },
            {
              "label": "API reference",
              "to": "docs/api/class-playwright"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/playwright"
            },
            {
              "label": "Slack",
              "href": "https://aka.ms/playwright-slack"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/playwrightweb"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/microsoft/playwright"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Microsoft"
    },
    "algolia": {
      "apiKey": "c85f496c6eea71808027d42111ac550c",
      "indexName": "playwright"
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "themes": [
    [
      "/home/runner/work/playwright.dev/playwright.dev/node_modules/@docusaurus/theme-classic/lib/index.js",
      {
        "customCss": "/home/runner/work/playwright.dev/playwright.dev/src/css/custom.css"
      }
    ],
    [
      "/home/runner/work/playwright.dev/playwright.dev/third_party/docusaurus-search-local/dist/server/server/index.js",
      {
        "hashed": true,
        "language": [
          "en"
        ],
        "searchResultLimits": 10,
        "highlightSearchTermsOnTargetPage": true
      }
    ]
  ],
  "plugins": [
    [
      "/home/runner/work/playwright.dev/playwright.dev/node_modules/@docusaurus/plugin-content-docs/lib/index.js",
      {
        "sidebarPath": "/home/runner/work/playwright.dev/playwright.dev/sidebars.js"
      }
    ],
    [
      "/home/runner/work/playwright.dev/playwright.dev/node_modules/@docusaurus/plugin-content-blog/lib/index.js",
      {
        "showReadingTime": true,
        "editUrl": "https://github.com/microsoft/playwright.dev/edit/master/v2/blog/"
      }
    ],
    "/home/runner/work/playwright.dev/playwright.dev/node_modules/@docusaurus/plugin-content-pages/lib/index.js",
    "/home/runner/work/playwright.dev/playwright.dev/node_modules/@docusaurus/plugin-sitemap/lib/index.js"
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onBrokenMarkdownLinks": "warn",
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "presets": [],
  "titleDelimiter": "|",
  "noIndex": false
};