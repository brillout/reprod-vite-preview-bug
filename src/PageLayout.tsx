import React from 'react'
import { Navigation, NavigationMask } from './navigation/Navigation'
import type { PageContextResolved } from './config/resolvePageContext'
import { MobileHeader } from './MobileHeader'
import { EditPageNote } from './components/EditPageNote'
import { PageContextProvider } from './renderer/usePageContext'
import './PageLayout.css'
import { NavigationFullscreenButton } from './navigation/navigation-fullscreen/NavigationFullscreenButton'

export { PageLayout }

function PageLayout({ pageContext, children }: { pageContext: PageContextResolved; children: JSX.Element }) {
  const { isLandingPage, pageTitle } = pageContext
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <div id="page-layout" className={isLandingPage ? 'landing-page' : 'doc-page'}>
          <div id="navigation-wrapper">
            <Navigation pageContext={pageContext} />
          </div>
          <NavigationFullscreenButton />
          <div id="page-wrapper">
            <div id="page-container">
              <MobileHeader />
              <div id="page-content">
                {pageTitle && <h1>{pageTitle}</h1>}
                {children}
                {!isLandingPage && <EditPageNote pageContext={pageContext} />}
              </div>
            </div>
            <NavigationMask />
          </div>
        </div>
      </PageContextProvider>
    </React.StrictMode>
  )
}
