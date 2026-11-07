/**
 * Post-build step. For every page in src/data/pages.json it writes dist/<path>/index.html: the built
 * index.html with that page's full server-rendered content, title, description, canonical URL, robots,
 * social tags and JSON-LD structured data. Search engines, AI crawlers and link previews (WhatsApp,
 * LinkedIn, X) therefore see the complete page before any JavaScript runs; the browser hydrates it.
 *
 * It also writes dist/404.html, sitemap.xml (with real last-modified dates from git), robots.txt and llms.txt.
 *
 * Needs the SSR bundle from `vite build --ssr src/entry-server.tsx --outDir dist-server` (see package.json).
 * Optional env (in .env or the host's settings): VITE_SITE_URL, VITE_GOOGLE_SITE_VERIFICATION, VITE_BING_SITE_VERIFICATION.
 */
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { loadEnv } from 'vite'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const serverDir = path.join(root, 'dist-server')
const env = { ...loadEnv('production', root, 'VITE_'), ...process.env }
const siteUrl = (env.VITE_SITE_URL || 'https://settsmartly.com').replace(/\/$/, '')
const googleVerification = (env.VITE_GOOGLE_SITE_VERIFICATION || '').trim()
const bingVerification = (env.VITE_BING_SITE_VERIFICATION || '').trim()
const { pages } = JSON.parse(fs.readFileSync(path.join(root, 'src/data/pages.json'), 'utf8'))
let template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

// Preload the self-hosted Latin font files (hashed by Vite) so text renders in the right font without a late swap.
const fontPreloads = fs
  .readdirSync(path.join(dist, 'assets'))
  .filter((f) => /^(inter|manrope)-latin-wght-normal-.*\.woff2$/.test(f))
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
if (fontPreloads.length !== 2) throw new Error(`prerender: expected 2 Latin font files in dist/assets, found ${fontPreloads.length}`)
template = template.replace('</title>', `</title>\n    ${fontPreloads.join('\n    ')}`)

const entry = fs.readdirSync(serverDir).find((f) => /^entry-server\.m?js$/.test(f))
if (!entry) throw new Error('prerender: dist-server/entry-server.js not found. Run the SSR build first.')
const { render, structuredData } = await import(pathToFileURL(path.join(serverDir, entry)).href)

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const must = (html, re, value, label) => {
  if (!re.test(html)) throw new Error(`prerender: could not find ${label} in dist/index.html`)
  return html.replace(re, () => value)
}
const ROBOTS_INDEX = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

/** Last git commit date (ISO 8601) touching any of the page's source files; falls back to the build date. */
const today = new Date().toISOString()
const lastModified = (sources = []) => {
  let latest = ''
  for (const src of sources) {
    try {
      const d = execFileSync('git', ['log', '-1', '--format=%cI', '--', src], { cwd: root, encoding: 'utf8' }).trim()
      if (d && new Date(d) > new Date(latest || 0)) latest = d
    } catch {
      /* not a git checkout (e.g. some CI caches) */
    }
  }
  return latest || today
}

const render404Route = '/404'
const renderPage = (route, p) => {
  const url = siteUrl + (route === '/' || route === render404Route ? '/' : route)
  const title = esc(p.title)
  const desc = esc(p.description)
  const modified = p.noindex ? undefined : lastModified(p.sources)

  let html = template.replaceAll('https://settsmartly.com', siteUrl)
  html = must(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`, 'title')
  html = must(html, /<meta name="description" content="[^"]*"/, `<meta name="description" content="${desc}"`, 'description')
  html = must(html, /<meta name="robots" content="[^"]*"/, `<meta name="robots" content="${p.noindex ? 'noindex, follow' : ROBOTS_INDEX}"`, 'robots')
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

  const verification = [
    googleVerification && `<meta name="google-site-verification" content="${esc(googleVerification)}" />`,
    bingVerification && `<meta name="msvalidate.01" content="${esc(bingVerification)}" />`,
  ].filter(Boolean)
  if (verification.length) html = html.replace('</title>', `</title>\n    ${verification.join('\n    ')}`)

  // JSON-LD: `<` is escaped so text can never close the script tag.
  const json = JSON.stringify(structuredData(route, { siteUrl, dateModified: modified })).replace(/</g, '\\u003c')
  html = must(html, /<!--app-head-->/, `<script type="application/ld+json">${json}</script>`, 'app-head placeholder')

  html = must(html, /<!--app-html-->/, render(route), 'app-html placeholder')
  return { html, modified }
}

let count = 0
const sitemap = []
for (const [route, p] of Object.entries(pages)) {
  const out =
    route === '/' ? path.join(dist, 'index.html') : route === render404Route ? path.join(dist, '404.html') : path.join(dist, route.slice(1), 'index.html')
  const { html, modified } = renderPage(route, p)
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, html)
  if (!p.noindex) sitemap.push({ loc: siteUrl + route, lastmod: modified })
  count++
}

// sitemap.xml: Google uses <loc> and an accurate <lastmod>; it ignores <changefreq> and <priority>.
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap
    .map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n  </url>`)
    .join('\n')}\n</urlset>\n`,
)

// robots.txt: everything is crawlable. noindex pages (/login) must stay crawlable so engines can read their noindex tag.
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)

// llms.txt: a plain-text site summary for AI assistants and answer engines (llmstxt.org).
const indexable = Object.entries(pages).filter(([, p]) => !p.noindex)
const section = (routes) =>
  indexable
    .filter(([r]) => routes.includes(r))
    .map(([r, p]) => `- [${p.name}](${siteUrl}${r}): ${p.description}`)
    .join('\n')
fs.writeFileSync(
  path.join(dist, 'llms.txt'),
  `# Settsmartly

> ${pages['/'].description}

Settsmartly is a household financial management platform for people who live together, starting with flatmates and working professionals sharing rented flats in India. It is in development, with a closed beta starting in Bengaluru. Settsmartly is not a bank or wallet and never holds or moves money; payments happen in the user's own UPI app.

## Product

${section(['/', '/features', '/voice-assistant', '/flatmates', '/how-it-works', '/pricing'])}

## Company

${section(['/about', '/contact', '/get-started', '/careers'])}

## Legal

${section(['/privacy', '/terms', '/refunds'])}
`,
)

for (const f of ['manifest.json']) {
  const fp = path.join(dist, f)
  if (fs.existsSync(fp)) fs.writeFileSync(fp, fs.readFileSync(fp, 'utf8').replaceAll('https://settsmartly.com', siteUrl))
}

fs.rmSync(serverDir, { recursive: true, force: true })

console.log(
  `prerender: rendered ${count} pages, sitemap (${sitemap.length} URLs), robots.txt and llms.txt for ${siteUrl}` +
    (googleVerification ? ' + Google verification' : '') +
    (bingVerification ? ' + Bing verification' : ''),
)
