import { site } from '../config'
import data from '../data/pages.json'
import { faqSchemaByPath, features } from '../data/content'
import { guides } from '../data/guides'

/**
 * JSON-LD structured data for each page, built from the same data the pages render
 * (pages.json for titles, content.ts for FAQs and features), so the markup always matches
 * what visitors see. Used at build time by scripts/prerender.mjs through src/entry-server.tsx.
 *
 * Deliberately no ratings, reviews or prices for paid plans: none exist yet.
 */

type Page = { name: string; title: string; description: string; noindex?: boolean; published?: string }

export const OG_IMAGE_PATH = '/og-image.png?v=2'

export function structuredData(route: string, opts: { siteUrl: string; dateModified?: string }) {
  const base = opts.siteUrl
  const page = (data.pages as Record<string, Page>)[route]
  const url = base + (route === '/' ? '/' : route)
  const orgId = `${base}/#organization`
  const siteId = `${base}/#website`
  const appId = `${base}/#app`

  const organization = {
    '@type': 'Organization',
    '@id': orgId,
    name: site.name,
    url: `${base}/`,
    logo: { '@type': 'ImageObject', '@id': `${base}/#logo`, url: `${base}/icon-512.png`, width: 512, height: 512, caption: site.name },
    image: { '@id': `${base}/#logo` },
    description:
      'Settsmartly is a shared expense app for flatmates and working professionals in India. It keeps one record of rent, bills, groceries and settlements for everyone in a shared home.',
    slogan: site.tagline,
    email: site.supportEmail,
    areaServed: { '@type': 'Country', name: 'India' },
    contactPoint: [
      { '@type': 'ContactPoint', contactType: 'customer support', email: site.supportEmail, areaServed: 'IN', availableLanguage: ['English', 'Hindi'] },
      { '@type': 'ContactPoint', contactType: 'sales', email: site.businessEmail, areaServed: 'IN', availableLanguage: ['English', 'Hindi'] },
    ],
    sameAs: [site.linkedin.replace(/\/about\/?$/, '/')],
  }

  const website = {
    '@type': 'WebSite',
    '@id': siteId,
    url: `${base}/`,
    name: site.name,
    alternateName: ['Sett Smartly', 'SettSmartly'],
    description: (data.pages as Record<string, Page>)['/'].description,
    inLanguage: 'en-IN',
    publisher: { '@id': orgId },
  }

  const graph: Record<string, unknown>[] = [organization, website]

  if (page && !page.noindex) {
    const productRoutes = ['/', '/features', '/voice-assistant', '/flatmates', '/how-it-works', '/pricing']
    const isProduct = productRoutes.includes(route)
    const guide = route.startsWith('/guides/') ? guides.find((g) => `/guides/${g.slug}` === route) : undefined
    const pageType =
      route === '/about' ? 'AboutPage' : route === '/contact' ? 'ContactPage' : route === '/guides' ? 'CollectionPage' : 'WebPage'
    const webPage: Record<string, unknown> = {
      '@type': pageType,
      '@id': `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: 'en-IN',
      isPartOf: { '@id': siteId },
      about: { '@id': isProduct ? appId : orgId },
      publisher: { '@id': orgId },
      primaryImageOfPage: { '@type': 'ImageObject', url: base + OG_IMAGE_PATH, width: 1200, height: 630 },
    }
    if (opts.dateModified) webPage.dateModified = opts.dateModified
    if (route !== '/') {
      webPage.breadcrumb = { '@id': `${url}#breadcrumb` }
      graph.push({
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${base}/` },
          ...(guide ? [{ '@type': 'ListItem', position: 2, name: 'Guides', item: `${base}/guides` }] : []),
          { '@type': 'ListItem', position: guide ? 3 : 2, name: page.name, item: url },
        ],
      })
    }
    graph.push(webPage)

    // Guides: each is an Article by the Settsmartly team; the index lists them.
    if (guide) {
      graph.push({
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: guide.headline,
        alternativeHeadline: guide.eyebrow,
        description: page.description,
        url,
        mainEntityOfPage: { '@id': `${url}#webpage` },
        image: base + OG_IMAGE_PATH,
        inLanguage: 'en-IN',
        ...(page.published ? { datePublished: page.published } : {}),
        ...(opts.dateModified || page.published ? { dateModified: opts.dateModified || page.published } : {}),
        author: { '@type': 'Organization', name: `${site.name} team`, url: `${base}/about` },
        publisher: { '@id': orgId },
        isPartOf: { '@id': siteId },
        timeRequired: `PT${guide.minutes}M`,
      })
    }
    if (route === '/guides') {
      webPage.mainEntity = {
        '@type': 'ItemList',
        itemListElement: guides.map((g, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `${base}/guides/${g.slug}`,
          name: g.headline,
        })),
      }
    }

    if (isProduct) {
      graph.push({
        '@type': 'SoftwareApplication',
        '@id': appId,
        name: site.name,
        url: `${base}/`,
        description: (data.pages as Record<string, Page>)['/'].description,
        applicationCategory: 'FinanceApplication',
        applicationSubCategory: 'Shared expense management',
        operatingSystem: 'Android, iOS',
        inLanguage: ['en-IN', 'hi-IN'],
        image: base + OG_IMAGE_PATH,
        publisher: { '@id': orgId },
        featureList: features.map((f) => f.title + (f.status === 'planned' ? ' (planned)' : '')),
        offers: {
          '@type': 'Offer',
          name: 'Free',
          price: '0',
          priceCurrency: 'INR',
          availability: 'https://schema.org/PreOrder',
          url: `${base}/get-started`,
        },
      })
    }

    const faqs = guide ? guide.faqs : faqSchemaByPath[route]
    if (faqs?.length) {
      graph.push({
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        isPartOf: { '@id': `${url}#webpage` },
        inLanguage: 'en-IN',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      })
    }
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}
