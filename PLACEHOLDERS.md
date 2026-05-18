# Placeholders — verify before go-live

A handful of facts in the codebase are educated guesses that need real values from the clinic owner before public launch. Search the repo for `TODO(placeholder)` to find every spot in code.

## 1. JSON-LD / structured data — `client/src/lib/seo.ts`

These end up in Google Rich Results, so they must be accurate.

| Constant | Current value (placeholder) | Replace with |
|---|---|---|
| `PLACEHOLDER_FOUNDING_DATE` | `"2024"` | Real opening year of the Dubai clinic |
| `PLACEHOLDER_FOUNDER_NAME` | `"Dr. Nemanja Vokic"` | Confirm spelling + that this is the actual founder |
| `PLACEHOLDER_REVIEW_COUNT` | `"250"` | Pull from Google Business Profile |
| `PLACEHOLDER_REVIEW_RATING` | `"5"` | Pull from Google Business Profile (likely "4.9" or similar) |

Reviewing inaccurate aggregateRating numbers in Rich Results can get the snippet suppressed — only ship verified counts.

## 2. Hardcoded reviews — `client/src/lib/content.ts`

`GOOGLE_REVIEWS` lists five reviews with author `"Google Patient"` initials `"GP"` — generic placeholders. Replace with real reviews (with permission) or pull live from the Google Places API. Until then, keep the count modest.

`DOCTORS` has three names (`Dr. Sarah Johnson`, `Dr. Michael Chen`, `Dr. Emily Roberts`). Confirm or replace with the actual clinic roster. Per the owner brief, real names include `Dr. Nemanja Kukoljac` (Doctors.tsx already lists this).

## 3. Veneers — `client/src/pages/Veneers.tsx`

`benefits` array still says "Trusted Expertise: 15 years of cosmetic dentistry experience". Per the owner brief, this should read **18 years** (until verified, treat as placeholder).

Composite-veneer copy still appears throughout the page — per the brief we offer **only ceramic veneers**. Wipe composite mentions during the content-rework pass (`02-content-rework.md`).

Procedure steps currently 4 — should become 2 (45–60 min step 1; 90–120 min step 2; 3–10 days total).

## 4. About — `client/src/pages/About.tsx`

The "15 years of experience" line refers to the clinic, but the clinic is ~1 year old. Reframe as "experienced team — each dentist has 15+ years of international experience" or use the paste-ready introduction in `.claude/workspace/specs/sajt-prepravke-boss.md` §16.

## 5. Logo

The Serbian-text logo (`attached_assets/logo_*.png`) needs to be swapped for the English version. Drop the new file into `attached_assets/` and update the import path in `client/src/components/layout/Header.tsx`.

## 6. Postcode in any future schema

If postal code is added to the JSON-LD `address`, do **not** use `"0"` — UAE addresses typically don't have a Western postcode, in which case omit the field rather than ship an invalid value.

## 7. Twitter handle (optional)

`TWITTER_HANDLE` in `client/src/lib/seo.ts` is empty. If the clinic gets a Twitter/X account, set it here and the `<meta name="twitter:site">` tag becomes meaningful.

## 8. Hero / placeholder images

Most service pages currently render text labels (`HERO IMAGE`, `BEFORE & AFTER IMAGE`, `PATIENT SMILE`) instead of actual images. These are tracked by the image-pipeline workstream (`C1` in `01-production-launch.md`).

## 9. Analytics IDs

When ready to enable tracking, plug these in (locations land during D3):

- Google Tag Manager container ID (`GTM-XXXXXXX`)
- Google Analytics 4 measurement ID (auto via GTM or `G-XXXXXXXXXX`)
- Meta Pixel ID (if running paid social)
- Google Search Console verification meta tag (or use DNS verification)

## 10. Working hours

Updated to the owner brief (May 2026):

- **Mon, Wed, Sat**: 12:00–21:00
- **Tue, Thu, Sun**: 09:00–18:00
- **Fri**: Closed

If the schedule changes again, edit `WORKING_HOURS` in `client/src/lib/constants.ts` — both the footer/contact page and the JSON-LD `openingHoursSpecification` consume it.

## Pre-launch checklist

- [ ] Founding date confirmed and updated in `seo.ts`
- [ ] Founder name confirmed and updated in `seo.ts`
- [ ] Real review count + rating from GBP, updated in `seo.ts`
- [ ] Reviews in `content.ts` replaced or pulled live from Places API
- [ ] Doctors list in `content.ts` matches actual roster
- [ ] Veneers page: composite mentions removed, steps consolidated, 18 yrs in copy
- [ ] About page: 1-year-old clinic reframe
- [ ] Logo updated to English version
- [ ] Hero/placeholder images replaced with real assets
- [ ] Analytics IDs added (GTM, GA4, Meta Pixel, GSC)
- [ ] Working hours confirmed (see above)
- [ ] Run `npm run check` — clean
- [ ] Run `npm run build` — clean, then sanity-check key routes in Lighthouse
- [ ] Submit final sitemap to Google Search Console
- [ ] Verify Google Rich Results Test passes for `/`, `/faq`, and one service page
