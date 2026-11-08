/**
 * Tells IndexNow-enabled search engines (Bing, Yandex, Seznam, Naver; shared with each other) that the
 * site's pages changed, so they recrawl them within minutes instead of days. Google does not use IndexNow;
 * submit the sitemap in Search Console instead.
 *
 * Run AFTER a production deploy is live:  npm run indexnow
 *
 * The key is the name of the public/<key>.txt file (which contains the key itself). It is public by design:
 * it only proves that whoever submits URLs controls the site.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadEnv } from 'vite'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const env = { ...loadEnv('production', root, 'VITE_'), ...process.env }
const siteUrl = (env.VITE_SITE_URL || 'https://settsmartly.com').replace(/\/$/, '')
const key = fs
  .readdirSync(path.join(root, 'public'))
  .map((f) => f.match(/^([a-f0-9]{32})\.txt$/)?.[1])
  .find(Boolean)
if (!key) throw new Error('indexnow: no public/<32-hex-key>.txt key file found')

const { pages } = JSON.parse(fs.readFileSync(path.join(root, 'src/data/pages.json'), 'utf8'))
const urlList = Object.entries(pages)
  .filter(([r, p]) => !p.noindex && r !== '/404')
  .map(([r]) => siteUrl + r)

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(siteUrl).host, key, keyLocation: `${siteUrl}/${key}.txt`, urlList }),
})
console.log(`indexnow: submitted ${urlList.length} URLs for ${siteUrl}: HTTP ${res.status} ${res.statusText}`)
if (!res.ok && res.status !== 202) process.exitCode = 1
