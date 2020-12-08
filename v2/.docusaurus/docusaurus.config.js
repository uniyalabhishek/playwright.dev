export default {
  "title": "Playwright",
  "tagline": "Fast and reliable end-to-end testing for modern web apps",
  "url": "https://microsoft.github.io",
  "baseUrl": "/playwright/",
  "organizationName": "microsoft",
  "projectName": "playwright",
  "onBrokenLinks": "log",
  "scripts": [
    "js/redirection.js"
  ],
  "favicon": "img/playwright-logo.svg",
  "themeConfig": {
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
          "docId": "api/playwright-module",
          "label": "API",
          "position": "left",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "href": "https://github.com/microsoft/playwright",
          "label": "GitHub",
          "position": "right"
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
              "to": "docs/api/playwright-module"
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
      "copyright": "Copyright © 2020 Microsoft"
    },
    "algolia": {
      "apiKey": "c85f496c6eea71808027d42111ac550c",
      "indexName": "playwright",
      "contextualSearch": false,
      "appId": "BH4D9OD16A",
      "searchParameters": {}
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/runner/work/playwright.dev/playwright.dev/v2/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/home/runner/work/playwright.dev/playwright.dev/v2/src/css/custom.css"
        }
      }
    ]
  ],
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};