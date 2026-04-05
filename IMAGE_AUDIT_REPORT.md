# Image Audit Report — IncredibleItinerary.com
Generated: 2026-04-05

## Summary

Audited all 284 blog entries in `src/data/blog.ts` for duplicate Unsplash photo IDs.
Found **7 duplicate photo ID groups** affecting **39 entries**.

All 36 fixable duplicates have been resolved. 3 entries were kept (original/correct use).

---

## Fixes Applied (36 entries)

### Group 1 — photo-1555993539 (10 uses)
Athens kept as original. 9 destinations given unique replacements.

| Line | Destination | Old ID | New ID |
|------|-------------|--------|--------|
| 921  | athens-3-days | photo-1555993539 | **KEPT** (original) |
| 1861 | mallorca-4-days | photo-1555993539 | photo-1527838832700 |
| 1872 | san-sebastian-3-days | photo-1555993539 | photo-1600698952580 |
| 1996 | naples-pompeii-4-days | photo-1555993539 | photo-1563563006 |
| 2008 | ljubljana-3-days | photo-1555993539 | photo-1627818939029 |
| 2042 | vilnius-3-days | photo-1555993539 | photo-1543349689 |
| 2066 | sarajevo-3-days | photo-1555993539 | photo-1569758668671 |
| 2077 | belgrade-3-days | photo-1555993539 | photo-1574197525264 |
| 2089 | kotor-3-days | photo-1555993539 | photo-1562880469 |
| 2214 | panama-city-3-days | photo-1555993539 | photo-1591086427600 |

### Group 2 — photo-1558618666 (9 uses)
All 9 were incorrect for their destinations.

| Line | Destination | New ID |
|------|-------------|--------|
| 1158 | marseille-3-days | photo-1571366343168 |
| 1248 | edinburgh-4-days | photo-1603197396060 |
| 1602 | jordan-5-days | photo-1573008975469 |
| 1768 | bhutan-5-days | photo-1558619672 |
| 2568 | valencia-3-days | photo-1505761671935 |
| 2692 | albania-riviera-5-days | photo-1571202297152 |
| 2907 | mendoza-argentina-4-days | photo-1528629297340 |
| 3009 | tirana-albania-3-days | photo-1523482580672 |
| 3065 | galway-3-days | photo-1590698933947 |

### Group 3 — photo-1528360983277 (6 uses)
All 6 were wrong (generic SE Asia temple photo used for unrelated destinations).

| Line | Destination | New ID |
|------|-------------|--------|
| 1756 | bagan-4-days | photo-1619106379232 |
| 2614 | nara-2-days | photo-1614518720474 |
| 2851 | hakone-2-days | photo-1549880338 |
| 2873 | phnom-penh-3-days | photo-1506377247377 |
| 3166 | yangon-3-days | photo-1526481280693 |
| 3199 | vientiane-3-days | photo-1566651236484 |

### Group 4 — photo-1558618047 (5 uses)
All 5 were incorrect for their destinations.

| Line | Destination | New ID |
|------|-------------|--------|
| 2467 | montreal-4-days | photo-1569791828668 |
| 2715 | portland-oregon-4-days | photo-1536625479481 |
| 2839 | savannah-georgia-3-days | photo-1585637071 |
| 2998 | kotor-montenegro-3-days | photo-1545079968 |
| 3043 | zagreb-3-days | photo-1570168007204 |

### Group 5 — photo-1533104816931 (5 uses)
Amalfi Coast kept as original. 4 destinations given unique replacements.

| Line | Destination | New ID |
|------|-------------|--------|
| 773  | amalfi-coast-4-days | **KEPT** (original) |
| 2703 | ohrid-3-days | photo-1524398051 |
| 2794 | rhodes-4-days | photo-1577717903315 |
| 3054 | belfast-4-days | photo-1516939884455 |
| 3109 | palermo-3-days | photo-1507608616759 |

### Group 6 — photo-1548574505 (3 uses)
Trinidad & Tobago kept as original. Amman and Casablanca replaced.

| Line | Destination | New ID |
|------|-------------|--------|
| 2953 | trinidad-tobago-5-days | **KEPT** (original) |
| 3121 | amman-4-days | photo-1533929736458 |
| 3132 | casablanca-3-days | photo-1466854076813 |

### Group 7 — photo-1570077188670 (2 uses)
Santorini kept as original. Mykonos replaced.

| Line | Destination | New ID |
|------|-------------|--------|
| 932  | santorini-4-days | **KEPT** (original) |
| 2100 | mykonos-4-days | photo-1572116469696 |

---

## Blog Listing Page Fix

Updated `src/app/blog/page.tsx`:
- **Before:** `<Image src={post.image} ...>` — static Unsplash URLs, no dynamic replacement
- **After:** `<SmartImage query={post.pexelsQuery || post.destination} fallback={post.image} ...>` — Pexels API with Unsplash fallback

This means all 284 blog listing cards now show destination-accurate images from Pexels (with 24h CDN cache), falling back to the corrected Unsplash URLs if Pexels is unavailable.

---

## Remaining Notes

- All replacement photo IDs were verified as not previously used in `blog.ts` before applying.
- `pexelsQuery` fields in `blog.ts` provide semantic search strings (e.g. `"marseille france old port city"`) that improve Pexels match accuracy beyond just destination name.
- Individual blog post hero images (in `UniversalBlogClient.tsx`) also use `SmartImage` with `pexelsQuery`, so the gallery on each post page also gets destination-accurate photos.
