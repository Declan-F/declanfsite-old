/** @preserve
 * Copyright 2023 Declan Fodor
 */
// previously in ./cssstyles.jsx
import "vanilla-cookieconsent/dist/cookieconsent.css";
import "./tmp.css";
// end of ./cssstyles.jsx
import 'preact/debug'
import { render, h } from 'preact'
import * as CookieConsent from 'vanilla-cookieconsent'
import { useEffect } from 'preact/hooks'

export function CookieConsenter() {
  useEffect(() => {
    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: 'box inline',
          position: 'bottom right',
          flipButtons: false
        },
        preferencesModal: {
          layout: 'box',
          position: 'left',
          flipButtons: false
        }
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true
        },
        analytics: {
          enabled: false,
          readOnly: false
        }
      },
      language: {
        default: 'en',
        translations: {
          en: {
            consentModal: {
              title: 'Cookies',
              acceptAllBtn: 'Accept All',
              acceptNecessaryBtn: 'Reject all',
              showPreferencesBtn: 'Managed individual preferences'
            },
            preferencesModal: {
              title: 'Manage cookie preferences',
              acceptAllBtn: 'Accept all',
              acceptNecessaryBtn: 'Reject all',
              savePreferencesBtn: 'Accept current selection',
              sections: [
                {
                  title: 'Cookies',
                  description: 'test1'
                },
                {
                  title: 'Necessary cookies',
                  description: 'Required cookies to run website.',
                  linkedCategory: 'necessary'
                },
                {
                  title: 'Analytical cookies',
                  description: 'Cookies to gather user metrics.',
                  linkedCategory: 'analytics'
                }
              ]

            },
            onFirstConsent: () => {
              const userprefs = CookieConsent.getUserPreferences()
              logConsent(userprefs.acceptedCategories, userprefs.rejectedCategories)
            },
            onChange: () => {
              const userprefs = CookieConsent.getUserPreferences()
              logConsent(userprefs.acceptedCategories, userprefs.rejectedCategories)
            }
          }
        }
      }
    }).then(() => {
      if (!CookieConsent.validConsent()) {
        CookieConsent.show(true)
      }
    })
  }, [])
}

function logConsent(acceptedCategories, rejectedCategories) {} // TODO implement
console.log("test")
window.addEventListener("load", _ => render(<CookieConsenter />, document.body))
