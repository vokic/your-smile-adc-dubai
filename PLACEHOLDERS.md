# Placeholders & owner-supplied content — status

Everything the owner confirmed in September 2026 has been applied. What
remains is content the owner is sending separately (photos, videos) plus a
few IDs. Nothing on the live site is invented: where an asset is missing the
page renders an honest fallback instead of placeholder art or made-up data.

## Applied (owner-confirmed, Sept 2026)

| Fact | Value | Where |
|---|---|---|
| Founding year | 2025 | `constants.ts` → JSON-LD |
| Founder | Dr. Nemanja Kukoljac, DMD, DDS | `constants.ts` FOUNDER → About, Cosmetic, Veneers, JSON-LD |
| Cosmetic experience | 18 years (Dr. Kukoljac personally, not the clinic) | `FOUNDER.cosmeticExperienceYears` |
| Google rating | 5.0 · 107 reviews | `constants.ts` → JSON-LD, Footer, GoogleRatingBanner |
| Address | HDS Business Centre, Office 1604, Cluster M, JLT (no postal code) | `constants.ts`, JSON-LD `hasMap` |
| Hours | Mon/Wed/Sat 12–21, Tue/Thu/Sun 9–18, Fri closed | `WORKING_HOURS`, `WORKING_HOURS_SUMMARY` |
| Doctors | 7 from the previous site, no years-of-experience figures, photos downloaded | `content.ts` DOCTORS, `attached_assets/doctors/` |
| Social | Real Instagram + Facebook URLs | `SOCIAL_LINKS` |
| Implants | JD Evolution Plus, lifetime warranty (clinic/supplier agreement) | `IMPLANT_BRAND`, `IMPLANT_WARRANTY` |
| Veneers | Ceramic only, no-prep, 2 visits (45–60 / 90–120 min), 3–10 days | `pages/Veneers.tsx` |
| Prices | None anywhere; `PackagesCallout` instead | all treatment pages |
| Tourism | Two packages: Treatment-Only / All-Inclusive | `pages/DentalTourism.tsx` |
| At-home | Exclusion list from owner, fees on request | `pages/AtHome.tsx` |
| Restorative | Separate category (inlays/onlays, overlays) | `/restorative/*` |
| Gallery filter | Not built (owner: not needed) | `pages/Gallery.tsx` |
| Home | AnimatedStats + TrustBadges removed | `pages/Home.tsx` |

## Still needed from the owner

Search the repo for these markers to find the exact spot:

1. **Before/after photos** → push entries into `TRANSFORMATIONS` in `client/src/lib/content.ts` (images under `attached_assets/gallery/<category>/`). Until then Home/Gallery/treatment pages show a "gallery coming soon → Instagram" card.
2. **Clinic interior photos** → pass as `backgroundImage` to `<ServiceHero>` on About/Contact/At-Home and as `src` on `<Visual>` blocks. Until then a branded gradient renders.
3. **Patient video testimonials** → YouTube IDs into `VIDEO_TESTIMONIALS` in `client/src/components/VideoTestimonials.tsx`.
4. **Google review texts** (8 best, with reviewer first name + initial) → `TESTIMONIALS` in `content.ts`. Currently the three testimonials carried over from the old site.
5. **English logo** → replace `attached_assets/logo_1764501679029.png` (import in `Header.tsx`).
6. **Dr. Youssef Saweres** — listed on our old draft but not on the previous website; removed until the owner confirms.
7. **Ceramic implant brand** — owner still checking; copy says "metal-free ceramic implants available for selected cases" with no brand.
8. **Analytics IDs** → Netlify env vars `VITE_GTM_ID` (GTM container) and `VITE_GSC_VERIFICATION` (Search Console HTML-tag token). GA4 + Meta Pixel are configured inside GTM, not in code. With the vars unset the snippets are stripped at build time.
9. **Twitter/X** — none; `TWITTER_HANDLE` stays empty.
10. **Languages** — owner wants RU + AR (+ IT instead of DE, undecided). URL-prefixed i18n is the next phase; DE switcher entry stays until decided.

## Pre-launch checklist

- [x] Founding date, founder, review count/rating in `seo.ts` (via constants)
- [x] Doctors roster + photos match the actual team
- [x] Veneers: composite removed, 2 steps, 18 years attributed to Dr. Kukoljac
- [x] About: 2025 founding, no "15 years" claim about the clinic
- [x] No prices anywhere (`grep -rn "AED" client/src` → 0)
- [x] Working hours confirmed
- [x] `npm run check` clean
- [ ] Logo updated to English version
- [ ] Real before/after + interior photos in place
- [ ] `VITE_GTM_ID` / `VITE_GSC_VERIFICATION` set in Netlify
- [ ] Submit `sitemap.xml` to Google Search Console after first deploy
- [ ] Google Rich Results Test on `/`, `/faq`, one sub-service page
