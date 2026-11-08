# Settsmartly website

Marketing site for **Settsmartly** (Split. Track. Settle. Smartly.), an Indian-first shared expense app.
Built with Vite, React 18, TypeScript, Tailwind CSS, React Router and Lucide icons.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home: hero, problem/solution, features, how it works, for whom, clarity, trust, FAQ, waitlist |
| `/features` | Detailed features (anchors: `#splitting`, `#groups`, `#upi`, `#analytics`, `#realtime`, `#recurring`, `#receipts`, `#history`) |
| `/how-it-works` | Six-step walkthrough |
| `/pricing` | Free, Plus, Premium and Household (not purchasable yet) |
| `/about`, `/contact`, `/get-started` | About, contact form, waitlist |
| `/privacy`, `/terms`, `/refunds` | Legal |
| `/login`, `/careers` | Pre-launch placeholders |

## Where to edit things

- **All copy** (features, segments, steps, FAQ, plans): `src/data/content.ts`
- **Emails, LinkedIn, app login URL, legal date**: `src/config.ts`
- **Colours and fonts** (design system): `tailwind.config.js`, `src/index.css`
- **App screen mockups**: `src/components/PhoneMockup.tsx`. Replace with real screenshots via `<PhoneFrame><img … /></PhoneFrame>`.

### Pre-launch honesty rules

Features that aren't built yet carry `status: 'planned'` in `content.ts` and show a **Planned** badge
(currently the voice assistant, recurring bills, roommate move-in/out, UPI settlements and receipt scanning). Remove the flag when a feature ships.
Paid plans show "Coming soon"; set `priceLabel` when subscriptions go live.

## Waitlist and contact form (Firebase)

Both forms write to Cloud Firestore in the app's existing `settsmartly` Firebase project, using the REST
API (no Firebase SDK in the bundle):

- `waitlist/{sha256(email)}`: `email`, `name?`, `useCase?`, `city?`, `interview?`, `source`, `createdAt`. The hashed id stops duplicates.
- `contact_messages/{auto}`: `name`, `email`, `topic`, `message`, `createdAt`

**One-time setup:** add the rules in `firebase/marketing.rules` to the app's `firestore.rules`
(inside `match /databases/{database}/documents { … }`) and deploy them **from the app folder**:

```bash
cd ../Settsmartly
firebase login
firebase deploy --only firestore:rules
```

Don't deploy rules from this repo: a project has a single rules file, so doing that would replace the app's rules.

Until the rules are deployed, Firestore rejects the writes and both forms fall back to a pre-filled
email to the inboxes in `src/config.ts`, so no signup is lost. View submissions in the
Firebase console under Firestore → `waitlist` / `contact_messages`.

## Analytics

Set `VITE_GA_MEASUREMENT_ID` (see `.env.example`) to enable Google Analytics 4. Page views are tracked on
every route change. Without it, no analytics script loads.

## Deploy (Vercel)

Import the repo in Vercel (framework preset: Vite, build command `npm run build`, output `dist`). Add any env
vars in Vercel → Settings → Environment Variables.

## SEO

`npm run build` runs three steps: the client build, an SSR build of `src/entry-server.tsx`, and
`scripts/prerender.mjs`. The prerender writes a static `dist/<page>/index.html` for every page in
`src/data/pages.json` containing:

- the **full server-rendered page content** (the browser hydrates it), so Google, Bing, AI crawlers and
  WhatsApp/LinkedIn/X previews see everything without running JavaScript;
- the page's title, description, canonical URL, robots directive and Open Graph/Twitter tags;
- **JSON-LD structured data** from `src/seo/schema.ts`: Organization, WebSite, WebPage (AboutPage/ContactPage),
  BreadcrumbList on inner pages, SoftwareApplication on every product page (`/`, `/features`, `/voice-assistant`,
  `/flatmates`, `/how-it-works`, `/pricing`), and FAQPage on pages with
  their own FAQ (`faqSchemaByPath` in `content.ts`), generated from the same text that's shown on the page;
- preload links for the self-hosted Latin font files.

It also writes `404.html` (served with a real 404 status), `sitemap.xml` (each `<lastmod>` is the last git commit
touching that page's `sources`), `robots.txt` and `llms.txt`.

- **Titles and descriptions:** `src/data/pages.json`. Keep titles under ~60 characters and descriptions 120–160.
- **Adding a page:** add its route in `src/App.tsx`, an entry in `pages.json` (with `name` and `sources`), and
  `<PageMeta path="/your-page" />` in the page. Give it exactly one `<h1>`, and start it with a keyword phrase
  (`<SectionHeading as="h1" eyebrow="…">` puts the eyebrow inside the h1).
- **FAQs:** edit them in `src/data/content.ts`; the structured data follows automatically.
- **Guides** (`/guides`, the site's main source of non-brand search traffic): content is in `src/data/guides.tsx`,
  titles/descriptions/publish dates in `pages.json`. Each guide gets Article, BreadcrumbList and FAQPage markup. To add one,
  add it to `guides` and a matching `/guides/<slug>` entry in `pages.json`; routes, the sitemap, the /guides listing and
  llms.txt follow. Check that every worked example adds up.
- **IndexNow (Bing and others):** after a production deploy, run `npm run indexnow` to ask them to recrawl every page.
  The key file is `public/<key>.txt`; don't delete it.
- **Fonts:** Latin only, plus ~1 KB `₹`-only files in `src/fonts/` (see `src/fonts.css` for how to regenerate them).
- **Domain:** `VITE_SITE_URL` (defaults to `https://settsmartly.com`) sets canonical URLs, the sitemap and robots.txt.
- **Verification:** set `VITE_GOOGLE_SITE_VERIFICATION` and/or `VITE_BING_SITE_VERIFICATION`.
- **Local check:** `npm run build && npm run preview`, then open pages *with* a trailing slash
  (`/features/`). `vite preview` falls back to the home page for `/features`; Vercel serves the right file.
