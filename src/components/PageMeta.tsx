import { useEffect } from 'react'
import { site } from '../config'

/** Sets the document title, description and canonical URL per route. */
const PageMeta = ({ title, description, path }: { title: string; description: string; path: string }) => {
  useEffect(() => {
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${site.url}${path}`)
  }, [title, description, path])
  return null
}

export default PageMeta
