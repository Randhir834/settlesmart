/**
 * Build-time server entry. scripts/prerender.mjs renders every route in pages.json to HTML with this,
 * so crawlers and link previews get the full page content without running JavaScript.
 * The browser then hydrates the same markup (see main.tsx).
 */
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'

export { structuredData } from './seo/schema'

export function render(url: string) {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>,
  )
}
