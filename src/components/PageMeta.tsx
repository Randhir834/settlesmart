import { useEffect } from 'react'
import { site } from '../config'
import data from '../data/pages.json'

export type PagePath = keyof typeof data.pages

const setMeta = (attr: 'name' | 'property', key: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

const setCanonical = (url: string | null) => {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!url) return el?.remove()
  if (!el) {
    el = document.createElement('link')
    el.rel = 'canonical'
    document.head.appendChild(el)
  }
  el.href = url
}

/**
 * Sets the title, description, canonical URL, social tags and robots for a route, from src/data/pages.json.
 * The same file is used at build time (scripts/prerender.mjs), so the static HTML for each page matches.
 */
const PageMeta = ({ path }: { path: PagePath }) => {
  useEffect(() => {
    const p: { title: string; description: string; noindex?: boolean } = data.pages[path]
    const url = `${site.url}${path === '/' ? '/' : path}`
    document.title = p.title
    setMeta('name', 'description', p.description)
    setMeta('name', 'robots', p.noindex ? 'noindex, follow' : 'index, follow')
    setMeta('property', 'og:title', p.title)
    setMeta('property', 'og:description', p.description)
    setMeta('property', 'og:url', p.noindex ? `${site.url}/` : url)
    setMeta('name', 'twitter:title', p.title)
    setMeta('name', 'twitter:description', p.description)
    setCanonical(p.noindex ? null : url)
  }, [path])
  return null
}

export default PageMeta
