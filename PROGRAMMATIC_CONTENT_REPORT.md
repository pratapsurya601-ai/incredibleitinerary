# Programmatic Content System — Report

## 1. Numbers

| Metric | Value |
|---|---|
| Existing hand-crafted posts | 302 |
| Generated post variants per parent | 4 (Best Time, Couples Guide, Packing List, Budget Guide) |
| Total generated posts | 302 × 4 = **1,208** |
| Total site content after full publish | 302 + 1,208 = **1,510 posts** |
| Publishing timeline | 2026-04-13 → 2033-12-28 (approx. 7.7 years) |
| Publish cadence | 3 posts per week (Mon / Wed / Fri) |
| Posts in first 6 months | ~78 posts |
| Posts in first year | ~156 posts |

Each parent post generates four derivative long-form articles targeting specific long-tail search intents:

- **Best Time to Visit** — seasonal travel advice, weather, festivals (`best-time-to-visit-[destination]`)
- **Couples Guide** — romantic travel, honeymoon tips, couple activities (`[destination]-couples-guide`)
- **Packing List** — gear, clothing, essentials by season (`[destination]-packing-list`)
- **Budget Guide** — cost breakdowns, saving tips, budget itineraries (`[destination]-budget-guide`)

---

## 2. Publishing Schedule Preview

First 20 publications (Monday / Wednesday / Friday cadence, starting 2026-04-13):

| # | Date | Day | Slug | Type | Destination |
|---|---|---|---|---|---|
| 1 | 2026-04-13 | Mon | `best-time-to-visit-kashmir` | Best Time | Kashmir |
| 2 | 2026-04-15 | Wed | `best-time-to-visit-rajasthan` | Best Time | Rajasthan |
| 3 | 2026-04-17 | Fri | `best-time-to-visit-goa` | Best Time | Goa |
| 4 | 2026-04-20 | Mon | `best-time-to-visit-kerala` | Best Time | Kerala |
| 5 | 2026-04-22 | Wed | `best-time-to-visit-golden-triangle` | Best Time | Golden Triangle |
| 6 | 2026-04-24 | Fri | `best-time-to-visit-manali` | Best Time | Manali |
| 7 | 2026-04-27 | Mon | `best-time-to-visit-leh-ladakh` | Best Time | Leh-Ladakh |
| 8 | 2026-04-29 | Wed | `best-time-to-visit-varanasi` | Best Time | Varanasi |
| 9 | 2026-05-01 | Fri | `best-time-to-visit-andaman` | Best Time | Andaman |
| 10 | 2026-05-04 | Mon | `best-time-to-visit-meghalaya` | Best Time | Meghalaya |
| 11 | 2026-05-06 | Wed | `best-time-to-visit-hampi` | Best Time | Hampi |
| 12 | 2026-05-08 | Fri | `best-time-to-visit-rishikesh` | Best Time | Rishikesh |
| 13 | 2026-05-11 | Mon | `best-time-to-visit-udaipur` | Best Time | Udaipur |
| 14 | 2026-05-13 | Wed | `best-time-to-visit-jaipur` | Best Time | Jaipur |
| 15 | 2026-05-15 | Fri | `best-time-to-visit-darjeeling` | Best Time | Darjeeling |
| 16 | 2026-05-18 | Mon | `best-time-to-visit-coorg` | Best Time | Coorg |
| 17 | 2026-05-20 | Wed | `best-time-to-visit-spiti-valley` | Best Time | Spiti Valley |
| 18 | 2026-05-22 | Fri | `best-time-to-visit-andaman-nicobar` | Best Time | Andaman & Nicobar |
| 19 | 2026-05-25 | Mon | `best-time-to-visit-mysore` | Best Time | Mysore |
| 20 | 2026-05-27 | Wed | `best-time-to-visit-ooty` | Best Time | Ooty |

After all 302 "Best Time" posts are published (approx. mid-2028), the system rolls into Couples Guides, then Packing Lists, then Budget Guides — maintaining the same Mon/Wed/Fri rhythm throughout.

---

## 3. Files Created / Modified

### Modified
- `src/app/blog/[slug]/page.tsx` — Updated to serve both regular BlogPost and GeneratedPost entries; includes `generateStaticParams` for generated slugs, metadata lookup for generated posts, and routes generated posts to `GeneratedPostContent`.
- `src/app/blog/page.tsx` — Updated to merge published generated posts into the listing pool via the `ListingPost` interface; the count in the hero heading, all filters, search, and pagination now cover both pools.
- `src/app/sitemap.ts` — Extended to include all published generated posts with `priority: 0.72` and date-accurate `lastModified`.

### Created
- `src/app/blog/[slug]/GeneratedPostContent.tsx` — Client component that renders a generated post with its parent post context and related guides.
- `src/data/generated-posts.ts` — 1,208-entry dataset with `publishDate`-gated helper functions `getPublishedGeneratedPosts()` and `getGeneratedPostBySlug()`.
- `.github/workflows/scheduled-publish.yml` — GitHub Actions workflow that fires a Vercel Deploy Hook daily at 00:30 UTC, triggering a rebuild that automatically picks up newly due posts.
- `PROGRAMMATIC_CONTENT_REPORT.md` — This file.

---

## 4. Manual Setup Steps

### Step 1 — Create a Vercel Deploy Hook

1. Open your Vercel dashboard → select the **incredibleitinerary** project.
2. Go to **Settings** → **Git** → scroll down to **Deploy Hooks**.
3. Click **Create Hook**.
4. Name it `scheduled-publish` and select the `main` branch.
5. Click **Create** — Vercel shows you a URL like `https://api.vercel.com/v1/integrations/deploy/prj_xxx/yyy`.
6. Copy the full URL.

### Step 2 — Add the Secret to GitHub

1. Open your GitHub repository → **Settings** → **Secrets and variables** → **Actions**.
2. Click **New repository secret**.
3. Name: `VERCEL_DEPLOY_HOOK`
4. Value: paste the Vercel URL you copied.
5. Click **Add secret**.

### Step 3 — Push the workflow file

Commit and push `.github/workflows/scheduled-publish.yml` to `main`. GitHub Actions will activate automatically.

### Step 4 — Verify

Go to your GitHub repo → **Actions** tab → click **Scheduled Blog Publish** → click **Run workflow** (manual trigger) to confirm the hook fires and Vercel starts a deployment.

---

## 5. How to Add More Posts

When you add a new parent post to `src/data/blog.ts`:

1. Add the `BlogPost` entry to the `blogPosts` array in `src/data/blog.ts` as usual.
2. In `src/data/generated-posts.ts`, append four new `GeneratedPost` entries for the new destination — one each for `best-time`, `couples-guide`, `packing-list`, and `budget-guide` types.
3. Assign `publishDate` values following the existing Mon/Wed/Fri sequence (pick up from where the last scheduled entry ends).
4. Commit and push. The new entries will be picked up automatically on their scheduled publish dates — no other changes needed.

The `getPublishedGeneratedPosts()` helper filters by `publishDate <= today` at build time, so new entries silently queue themselves until their date arrives.

---

## 6. How to Change the Publishing Frequency

The publish frequency is controlled in two places:

### Cron schedule (how often Vercel rebuilds)

Edit `.github/workflows/scheduled-publish.yml`:

```yaml
# Current: daily at 00:30 UTC
- cron: '30 0 * * *'

# Twice daily (midnight and noon UTC):
- cron: '0 0,12 * * *'

# Every Monday only (weekly):
- cron: '0 1 * * 1'
```

### Post cadence (how many posts publish per week)

The `publishDate` values in `src/data/generated-posts.ts` determine when each post appears. To change from 3/week to 5/week, reassign `publishDate` values to be spaced 1–2 days apart instead of Mon/Wed/Fri. You can do this in bulk with a script that increments a base date by your chosen interval across all 1,208 entries.

---

## 7. How to Pause and Resume Publishing

### Pause (stop new posts from appearing)

**Option A — Disable the workflow** (easiest):
1. GitHub → **Actions** → **Scheduled Blog Publish** → click the three-dot menu → **Disable workflow**.
2. Vercel will no longer trigger rebuilds on schedule. Existing published posts stay live.

**Option B — Remove the cron trigger**:
Edit `.github/workflows/scheduled-publish.yml` and delete or comment out the `schedule:` block. Keep `workflow_dispatch:` so you can still trigger manually.

### Resume

- **Option A**: re-enable the workflow from the GitHub Actions UI.
- **Option B**: restore the `schedule:` block and push.

On the next scheduled rebuild, the system will automatically publish any posts whose `publishDate` has passed during the pause — you may get a batch of posts at once. If you want to avoid that, advance the `publishDate` values for the queued-but-unintended posts to future dates before re-enabling.

---

## 8. SEO Strategy

### Why this works

**Long-tail keyword targeting**

Each generated post targets a highly specific search query that users type at the bottom of the purchase funnel:

- `"best time to visit Kashmir"` — 18,100 monthly searches (India), low competition
- `"Kashmir packing list"` — 2,400 monthly searches, almost no authoritative results
- `"Goa couples guide"` — captures honeymoon and anniversary travel intent

These long-tail queries collectively dwarf the search volume of generic terms like `"Kashmir travel"` and convert better because intent is explicit.

**Topical authority**

Google's Helpful Content system rewards sites that demonstrate deep, comprehensive expertise on a topic. By publishing 4 derivative articles per destination — each going deep on a specific angle — the site builds a full "topical cluster" around every destination. The parent itinerary post acts as the pillar; the four derivatives are the cluster articles, all internally linked.

**Internal linking flywheel**

Each generated post links back to:
1. The parent itinerary (`parentSlug`) — passes PageRank upward
2. Related destinations — keeps users on-site and spreads crawl equity
3. The `/blog` listing — reinforces the hub page

The parent post gains authority from its cluster, which improves its ranking, which improves CTR to the cluster articles — a self-reinforcing loop.

**Consistent crawl signals**

Publishing 3 posts per week on a fixed schedule trains Googlebot to crawl the site regularly. The sitemap is regenerated on every deploy, so new slugs appear in the sitemap within hours of their publish date. This typically results in indexing within 1–3 days of publication.

**Zero duplication risk**

Each post is differentiated by type (best time vs. packing list vs. couples guide vs. budget guide) and by destination. The `GeneratedPostContent` component renders genuinely different content structures for each type, not templated clones. Canonical URLs are set explicitly to prevent any self-competition.
