/**
 * Post-build step. For every page in src/data/pages.json it writes dist/<path>/index.html, a copy of
 * the built index.html with that page's title, description, canonical URL, social tags and robots set.
 * Link previews (WhatsApp, LinkedIn, X) and search engines then see the right details before any
 * JavaScript runs. It also writes dist/404.html and dist/sitemap.xml from the same data.
 *
 * Optional env (in .env or the host's settings): VITE_SITE_URL, VITE_GOOGLE_SITE_VERIFICATION.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadEnv } from 'vite'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const env = { ...loadEnv('production', root, 'VITE_'), ...process.env }
const siteUrl = (env.VITE_SITE_URL || 'https://settsmartly.com').replace(/\/$/, '')
const verification = (env.VITE_GOOGLE_SITE_VERIFICATION || '').trim()
const { pages } = JSON.parse(fs.readFileSync(path.join(root, 'src/data/pages.json'), 'utf8'))
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const must = (html, re, value, label) => {
  if (!re.test(html)) throw new Error(`prerender: could not find ${label} in dist/index.html`)
  return html.replace(re, value)
}

const render = (route, p) => {
  const url = siteUrl + (route === '/' || route === '/404' ? '/' : route)
  const title = esc(p.title)
  const desc = esc(p.description)
  let html = template.replaceAll('https://settsmartly.com', siteUrl)
  html = must(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`, 'title')
  html = must(html, /<meta name="description" content="[^"]*"/, `<meta name="description" content="${desc}"`, 'description')
  html = must(html, /<meta name="robots" content="[^"]*"/, `<meta name="robots" content="${p.noindex ? 'noindex, follow' : 'index, follow'}"`, 'robots')
  html = must(html, /<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${title}"`, 'og:title')
  html = must(html, /<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${desc}"`, 'og:description')
  html = must(html, /<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${title}"`, 'twitter:title')
  html = must(html, /<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${desc}"`, 'twitter:description')
  if (p.noindex) {
    html = html.replace(/\s*<link rel="canonical"[^>]*>/, '').replace(/\s*<meta property="og:url"[^>]*>/, '')
  } else {
    html = must(html, /<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`, 'canonical')
    html = must(html, /<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${url}"`, 'og:url')
  }
  // The FAQ structured data describes the FAQ on the home page only.
  if (route !== '/') {
    html = html.replace(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/, (_, a, json, b) => {
      const data = JSON.parse(json)
      data['@graph'] = data['@graph'].filter((n) => n['@type'] !== 'FAQPage')
      return `${a}\n    ${JSON.stringify(data)}\n    ${b}`
    })
  }
  if (verification) {
    html = html.replace('</title>', `</title>\n    <meta name="google-site-verification" content="${esc(verification)}" />`)
  }
  return html
}

let count = 0
for (const [route, p] of Object.entries(pages)) {
  const out = route === '/' ? path.join(dist, 'index.html') : route === '/404' ? path.join(dist, '404.html') : path.join(dist, route.slice(1), 'index.html')
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, render(route, p))
  count++
}

const today = new Date().toISOString().slice(0, 10)
const urls = Object.entries(pages)
  .filter(([, p]) => !p.noindex)
  .map(([route, p]) => `  <url><loc>${siteUrl}${route}</loc><lastmod>${today}</lastmod><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`)
fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`)
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)

for (const f of ['manifest.json']) {
  const fp = path.join(dist, f)
  if (fs.existsSync(fp)) fs.writeFileSync(fp, fs.readFileSync(fp, 'utf8').replaceAll('https://settsmartly.com', siteUrl))
}

console.log(`prerender: wrote ${count} pages, sitemap (${urls.length} URLs) and robots.txt for ${siteUrl}${verification ? ' with Search Console verification' : ''}`)
