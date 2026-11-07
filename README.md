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
(currently UPI settlements and AI receipt scanning). Remove the flag when a feature ships.
Paid plans show "Coming soon"; set `priceLabel` when subscriptions go live.

## Waitlist and contact form (Firebase)

Both forms write to Cloud Firestore in the app's existing `settsmartly` Firebase project, using the REST
API (no Firebase SDK in the bundle):

- `waitlist/{sha256(email)}`: `email`, `name?`, `useCase?`, `source`, `createdAt`. The hashed id stops duplicates.
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

Import the repo in Vercel (framework preset: Vite). `vercel.json` rewrites all routes to `index.html`, so deep
links like `/pricing` work. Add any env vars in Vercel → Settings → Environment Variables.

Before going live, also replace the Google Search Console placeholder in `index.html`.
