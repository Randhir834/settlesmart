import { gaMeasurementId } from '../config'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

let loaded = false

/** Loads Google Analytics 4 once, only when VITE_GA_MEASUREMENT_ID is set. */
export function initAnalytics() {
  if (loaded || !gaMeasurementId) return
  loaded = true
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaMeasurementId)}`
  document.head.appendChild(s)
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  // Page views are sent manually on each route change (single-page app).
  window.gtag('config', gaMeasurementId, { send_page_view: false })
}

export function trackPageView(path: string) {
  if (!gaMeasurementId || !window.gtag) return
  window.gtag('event', 'page_view', { page_path: path, page_location: window.location.href, page_title: document.title })
}
