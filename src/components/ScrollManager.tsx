import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { initAnalytics, trackPageView } from '../lib/analytics'

/**
 * On navigation: scrolls to the #hash target (or the top of the page)
 * and records an analytics page view.
 */
const ScrollManager = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    initAnalytics()
  }, [])

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      // Wait a frame so the new route has rendered.
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }))
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  // Separate effect so PageMeta has set the new title first.
  useEffect(() => {
    const t = setTimeout(() => trackPageView(pathname), 0)
    return () => clearTimeout(t)
  }, [pathname])

  return null
}

export default ScrollManager
