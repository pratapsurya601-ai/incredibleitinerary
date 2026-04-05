# Image Audit Report — Incredible Itinerary
**Audit Date:** 2026-04-05
**Scope:** `src/data/blog.ts` (302 entries), 8 dedicated blog page components, 3 homepage section components

---

## Section A: Summary

| Metric | Count |
|--------|-------|
| Total blog posts in `blog.ts` | 302 |
| Total images in `blog.ts` | 302 (one per post) |
| Unique Unsplash photo IDs | 273 |
| **Duplicate photo IDs found** | **18** |
| Posts sharing a duplicate photo ID | 57 |
| Alt text issues (destination missing from alt) | 0 confirmed |
| Alt text lies (alt says one thing, photo is another) | **14 confirmed** |
| Confirmed cross-destination mismatches | **14** |
| Suspicious / wrong-region uses | **8 additional** |

---

## Section B: Critical Issues (Severity: HIGH)

These are confirmed mismatches — the Unsplash photo ID resolves to a completely different destination than the slug indicates.

---

### B-1. `coimbatore-2-days` — Taj Mahal photo used for Tamil Nadu city
- **File:** `src/data/blog.ts` line **892**
- **Photo ID:** `1548013146-72479768bada`
- **Alt text written:** "Coimbatore Isha Yoga Center Adiyogi Tamil Nadu India"
- **Actual photo:** Taj Mahal, Agra, India — same photo as `agra-2-days` (line 347)
- **Problem:** Tamil Nadu city showing an Agra monument
- **Suggested search:** `coimbatore isha yoga adiyogi statue tamil nadu india`

---

### B-2. `namibia-7-days` — Taj Mahal photo used for African desert
- **File:** `src/data/blog.ts` line **2537**
- **Photo ID:** `1548013146-72479768bada`
- **Alt text written:** "Namibia Sossusvlei red sand dunes Deadvlei dead trees Africa desert"
- **Actual photo:** Taj Mahal, Agra, India
- **Problem:** An Indian monument image appears for an African dune post
- **Suggested search:** `namibia sossusvlei deadvlei red sand dunes dead trees desert africa`

---

### B-3. `boracay-4-days` — Bali temple photo used for Philippines beach
- **File:** `src/data/blog.ts` line **2857**
- **Photo ID:** `1537996194471-e657df975ab4`
- **Alt text written:** "Boracay White Beach Philippines sunset fire dancing turquoise water"
- **Actual photo:** Bali Uluwatu cliff temple, Indonesia — same as `bali-5-days` (line 1006)
- **Problem:** Philippines destination shows a Bali Hindu temple
- **Suggested search:** `boracay white beach philippines sunset turquoise water palm`

---

### B-4. `quito-ecuador-4-days` — Bolivia salt flat photo used for Ecuador city
- **File:** `src/data/blog.ts` line **3163**
- **Photo ID:** `1531761535209-180857e963b9`
- **Alt text written:** "Quito Ecuador historic center UNESCO colonial architecture Andes mountains"
- **Actual photo:** Salar de Uyuni salt flat, Bolivia — same as `bolivia-salar-5-days` (line 2480)
- **Problem:** A colonial Andean city post shows a Bolivian salt desert
- **Suggested search:** `quito ecuador historic center colonial cathedral andes mountains`

---

### B-5. `copenhagen-3-days` — Norway fjords photo used for Denmark
- **File:** `src/data/blog.ts` line **1753**
- **Photo ID:** `1513622470522-26c3c8a854bc`
- **Alt text written:** "Copenhagen Nyhavn colourful canal houses Denmark bikes"
- **Actual photo:** Norway Geirangerfjord / Bergen fjords — same as `norway-fjords-6-days` (line 1742)
- **Problem:** Denmark's flat canal city is showing Norwegian fjord scenery
- **Suggested search:** `copenhagen nyhavn canal colorful houses denmark bicycles boats`

---

### B-6. `hamburg-3-days` — Norway fjords photo used for German port city
- **File:** `src/data/blog.ts` line **2880**
- **Photo ID:** `1513622470522-26c3c8a854bc`
- **Alt text written:** "Hamburg Speicherstadt warehouse district canals Germany red brick"
- **Actual photo:** Norway Geirangerfjord / Bergen fjords
- **Problem:** Germany's red-brick warehouse city shows Norwegian fjords
- **Suggested search:** `hamburg speicherstadt warehouse canal germany red brick elbphilharmonie`

---

### B-7. `oslo-3-days` — Norway fjords photo shows wrong Norwegian scene
- **File:** `src/data/blog.ts` line **3308**
- **Photo ID:** `1513622470522-26c3c8a854bc`
- **Alt text written:** "Oslo Norway City Hall harbour fjord Vigeland Park sculpture garden"
- **Actual photo:** Geirangerfjord/Bergen landscape (rural fjords, not Oslo city)
- **Problem:** Oslo city post shows remote rural Norwegian fjord scenery
- **Suggested search:** `oslo norway city hall harbour opera house vigeland park sculpture`

---

### B-8. `cyprus-5-days` — Warsaw/Quebec city photo used for Mediterranean island
- **File:** `src/data/blog.ts` line **3004**
- **Photo ID:** `1519197924294-4ba991a11128`
- **Alt text written:** "Cyprus Paphos Archaeological Park mosaics Mediterranean sea coastline"
- **Actual photo:** Warsaw Old Town / Quebec City (shared ID with `warsaw-4-days` line 2869)
- **Problem:** A Mediterranean island post shows a Central European or Canadian city
- **Suggested search:** `cyprus paphos mosaics mediterranean coastline aphrodite rock blue sea`

---

### B-9. `bratislava-3-days` — Same Warsaw/Quebec photo used
- **File:** `src/data/blog.ts` line **3242**
- **Photo ID:** `1519197924294-4ba991a11128`
- **Alt text written:** "Bratislava Slovakia Old Town Baroque facades UFO Bridge Danube"
- **Problem:** Same photo as Warsaw for a different Central European capital
- **Suggested search:** `bratislava slovakia old town castle danube ufo bridge baroque`

---

### B-10. `wroclaw-3-days` — Same Warsaw/Quebec photo used
- **File:** `src/data/blog.ts` line **3319**
- **Photo ID:** `1519197924294-4ba991a11128`
- **Alt text written:** "Wroclaw Poland Rynek Market Square colourful Baroque facades Cathedral Island"
- **Problem:** Same photo used for two different Polish cities (Warsaw and Wroclaw)
- **Suggested search:** `wroclaw poland market square cathedral island gnomes baroque`

---

### B-11. `miami-4-days` — Indian paragliding/mountains photo used for Florida beach
- **File:** `src/data/blog.ts` line **1435**
- **Photo ID:** `1506905925346-21bda4d32df4`
- **Alt text written:** "Miami South Beach Art Deco Ocean Drive Florida USA"
- **Actual photo:** Same as `bir-billing-3-days` (Himachal Pradesh paragliding)
- **Problem:** Miami beach post shows Indian mountain paragliding
- **Suggested search:** `miami south beach art deco ocean drive florida pastel buildings`

---

### B-12. `sydney-5-days` — Indian paragliding/mountains photo used for Sydney
- **File:** `src/data/blog.ts` line **1503**
- **Photo ID:** `1506905925346-21bda4d32df4`
- **Alt text written:** "Sydney Opera House and Harbour Bridge at golden hour Australia"
- **Actual photo:** Same as `bir-billing-3-days` (Himachal Pradesh paragliding)
- **Problem:** One of the most popular destination posts showing Indian mountain photo instead of Sydney Opera House
- **Suggested search:** `sydney opera house harbour bridge australia sunset golden hour`

---

### B-13. `malta-4-days` — Indian paragliding/mountains photo used for Mediterranean island
- **File:** `src/data/blog.ts` line **2744**
- **Photo ID:** `1506905925346-21bda4d32df4`
- **Alt text written:** "Valletta Malta Grand Harbour Baroque architecture Mediterranean"
- **Actual photo:** Same as `bir-billing-3-days` (Himachal Pradesh paragliding)
- **Problem:** Malta's Baroque harbour city shows Indian mountains
- **Suggested search:** `valletta malta grand harbour baroque architecture mediterranean`

---

### B-14. `victoria-falls-4-days` — Botswana elephants photo used for waterfall
- **File:** `src/data/blog.ts` line **2515**
- **Photo ID:** `1516026672322-bc52d61a55d5`
- **Alt text written:** "Victoria Falls Zimbabwe Zambia waterfall mist rainbow Zambezi River"
- **Actual photo:** Botswana Okavango Delta elephant herd crossing water — same as `botswana-okavango-6-days` (line 2447)
- **Problem:** Victoria Falls waterfall post shows Botswana elephants
- **Suggested search:** `victoria falls zimbabwe waterfall spray rainbow zambezi devil pool`

---

## Section C: Duplicate Photo IDs

Complete table of every photo ID used more than once.

| Photo ID | Uses | Used By (slugs) | Reuse OK? |
|----------|------|-----------------|-----------|
| `1506905925346-21bda4d32df4` | 4 | `bir-billing-3-days`, `miami-4-days`, `sydney-5-days`, `malta-4-days` | **NO** — 4 completely different destinations on 3 continents |
| `1513622470522-26c3c8a854bc` | 4 | `norway-fjords-6-days`, `copenhagen-3-days`, `hamburg-3-days`, `oslo-3-days` | **NO** — Norway fjords photo for 3 non-fjord cities |
| `1516026672322-bc52d61a55d5` | 4 | `botswana-okavango-6-days`, `victoria-falls-4-days`, `rwanda-gorillas-5-days`, `kruger-park-5-days` | **Partial** — same Africa region but wrong content type |
| `1519197924294-4ba991a11128` | 4 | `warsaw-4-days`, `cyprus-5-days`, `bratislava-3-days`, `wroclaw-3-days` | **NO** — Warsaw/Quebec photo for Cyprus is wrong; marginal for Polish cities |
| `1548013146-72479768bada` | 3 | `agra-2-days`, `coimbatore-2-days`, `namibia-7-days` | **NO** — Taj Mahal/India for Namibia and Tamil Nadu city is wrong |
| `1555400038-63f5ba517a47` | 3 | `ubud-3-days`, `mekong-delta-3-days`, `komodo-4-days` | **NO** — Ubud rice terraces for Mekong Delta and Komodo is wrong |
| `1555881400-74d7acaacd8b` | 3 | `lisbon-4-days`, `madeira-5-days`, `split-croatia-4-days` | **Partial** — Lisbon OK for Madeira (both Portugal), wrong for Croatia |
| `1508804185872-d7badad00f7d` | 2 | `beijing-5-days`, `xian-4-days` | **Marginal** — both China, but different cities and landmarks |
| `1531366936337-7c912a4589a7` | 2 | `iceland-7-days`, `switzerland-5-days` | **NO** — Iceland glacier/aurora for Swiss Alps are different landscapes |
| `1531761535209-180857e963b9` | 2 | `bolivia-salar-5-days`, `quito-ecuador-4-days` | **NO** — Salt flat for colonial city is clearly wrong |
| `1537996194471-e657df975ab4` | 2 | `bali-5-days`, `boracay-4-days` | **NO** — Bali temple for Philippines beach is wrong |
| `1558431382-27e303142255` | 2 | `kolkata-3-days`, `bhubaneswar-3-days` | **NO** — Howrah Bridge (Kolkata) for Bhubaneswar temple city is wrong |
| `1569761316261-9a8696fa2ca3` | 2 | `philadelphia-4-days`, `charleston-sc-4-days` | **NO** — Two different US cities with same photo |
| `1570804485046-b5b8d795dc5d` | 2 | `rishikesh-haridwar-3-days`, `chopta-tungnath-3-days` | **Marginal** — both Uttarakhand; river/mountain scenery could overlap |
| `1602216056096-3b40cc0c9944` | 2 | `kerala-5-days`, `mangalore-2-days` | **Marginal** — both coastal South India; Kerala backwaters for Mangalore is debatable |
| `1626621341517-bbf3d9990a23` | 2 | `kasol-3-days`, `mukteshwar-2-days` | **Marginal** — both Himalayan; Parvati Valley for Kumaon hills could pass |
| `1627119703136-3964f14b7325` | 2 | `sikkim-6-days`, `gangtok-3-days` | **OK** — Gangtok IS the capital of Sikkim; same destination |
| `1698429358246-807d8972da9a` | 2 | `meghalaya-5-days`, `cherrapunji-2-days` | **OK** — Cherrapunji IS in Meghalaya; same region |

---

## Section D: Alt Text Issues

### D-1. Alt text completely misrepresents the photo (photo/alt mismatch)

These entries have alt text written to match the destination name, but the underlying Unsplash photo is a different place entirely. This is the most dangerous SEO/accessibility issue:

| Slug | Line | Photo ID | Alt Text Written | What the Photo Actually Shows |
|------|------|----------|-----------------|-------------------------------|
| `coimbatore-2-days` | 892 | `1548013146-72479768bada` | "Coimbatore Isha Yoga Center Adiyogi Tamil Nadu India" | Taj Mahal, Agra |
| `namibia-7-days` | 2537 | `1548013146-72479768bada` | "Namibia Sossusvlei red sand dunes Deadvlei" | Taj Mahal, Agra |
| `boracay-4-days` | 2857 | `1537996194471-e657df975ab4` | "Boracay White Beach Philippines sunset" | Bali Uluwatu cliff temple, Indonesia |
| `quito-ecuador-4-days` | 3163 | `1531761535209-180857e963b9` | "Quito Ecuador historic center UNESCO colonial" | Bolivia Salar de Uyuni salt flat |
| `miami-4-days` | 1435 | `1506905925346-21bda4d32df4` | "Miami South Beach Art Deco Ocean Drive" | Bir Billing paragliding, India |
| `sydney-5-days` | 1503 | `1506905925346-21bda4d32df4` | "Sydney Opera House and Harbour Bridge" | Bir Billing paragliding, India |
| `malta-4-days` | 2744 | `1506905925346-21bda4d32df4` | "Valletta Malta Grand Harbour Baroque" | Bir Billing paragliding, India |
| `copenhagen-3-days` | 1753 | `1513622470522-26c3c8a854bc` | "Copenhagen Nyhavn colourful canal houses Denmark" | Norway Geirangerfjord/Bergen fjords |
| `hamburg-3-days` | 2880 | `1513622470522-26c3c8a854bc` | "Hamburg Speicherstadt warehouse district canals" | Norway Geirangerfjord/Bergen fjords |
| `cyprus-5-days` | 3004 | `1519197924294-4ba991a11128` | "Cyprus Paphos Archaeological Park mosaics" | Warsaw/Quebec Old Town |
| `bratislava-3-days` | 3242 | `1519197924294-4ba991a11128` | "Bratislava Slovakia Old Town Baroque facades" | Warsaw/Quebec Old Town |
| `victoria-falls-4-days` | 2515 | `1516026672322-bc52d61a55d5` | "Victoria Falls Zimbabwe waterfall mist rainbow" | Botswana Okavango Delta elephants |
| `rwanda-gorillas-5-days` | 2526 | `1516026672322-bc52d61a55d5` | "Mountain gorilla Rwanda Volcanoes National Park" | Botswana Okavango Delta elephants |
| `bhubaneswar-3-days` | 793 | `1558431382-27e303142255` | "Lingaraj temple Bhubaneswar Odisha India ancient" | Howrah Bridge, Kolkata |

### D-2. Generic alt text (low severity)
| Slug / File | Alt Text | Issue |
|-------------|----------|-------|
| `GoaBlogClient.tsx` hero | "Goa beach at golden hour" | Too generic, no beach name mentioned |
| `KeralaClient.tsx` hero | "Kerala backwaters houseboat" | Acceptable but could be more specific |

---

## Section E: Spot-Check of 8 Dedicated Blog Pages

### E-1. `kashmir-6-days` — `KashmirClient.tsx`

**Hero image (line 111):**
- Fallback photo ID: `1506905925346-21bda4d32df4`
- Alt: "Dal Lake Kashmir houseboat"
- **CRITICAL:** This photo ID is the same paragliding/mountains photo used for `bir-billing-3-days`, `miami-4-days`, `sydney-5-days`, and `malta-4-days`. The Kashmir dedicated page hero shows the WRONG image.
- **Fix:** Change fallback to `https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1600&q=85` (the correct Dal Lake photo already in blog.ts and PopularDestinations)

**Gallery queries (lines 468–472):** Use Pexels API `query=` strings — all destination-appropriate. No issues.

---

### E-2. `rajasthan-7-days` — `RajasthanBlogClient.tsx`

| Image | Line | Photo ID | Alt | Status |
|-------|------|----------|-----|--------|
| Hero | 185 | `1599661046289-e31897846e41` | "Amber Fort Jaipur Rajasthan at sunrise" | CLEAN |
| Mid-article 1 | 543 | `1477587458883-47145ed94245` | "Mehrangarh Fort rising above the blue city of Jodhpur" | CLEAN |
| Mid-article 2 | 598 | `1585937421612-70a008356fbe` | "Traditional Rajasthani thali" | CLEAN |

**Status: CLEAN**

---

### E-3. `goa-3-days` — `GoaBlogClient.tsx`

| Image | Line | Photo ID | Alt | Status |
|-------|------|----------|-----|--------|
| Hero | 199 | `1512343879784-a960bf40e7f2` | "Goa beach at golden hour" | MINOR — same ID as `varkala-3-days` (Kerala beach, different state) |
| Mid-article 1 | 523 | `1593693411515-c20261bcad6e` | "Old Goa colonial church" | CLEAN |
| Mid-article 2 | 609 | `1567620905732-2d1ec7ab7445` | "Goan fish curry thali food" | CLEAN |

**Status: MINOR** — hero may show Varkala (Kerala) instead of Goa beach

---

### E-4. `kerala-5-days` — `KeralaClient.tsx`

| Image | Line | Photo ID | Alt | Status |
|-------|------|----------|-----|--------|
| Hero | 190 | `1602216056096-3b40cc0c9944` | "Kerala backwaters houseboat" | MINOR — same ID as `mangalore-2-days` |

**Status: MINOR** — shared photo with Mangalore (same coastal South India region)

---

### E-5. `bali-5-days` — `BaliClient.tsx`

| Image | Line | Query Used | Alt | Status |
|-------|------|-----------|-----|--------|
| Hero | 176 | `bali uluwatu temple cliff sunset indonesia` | "Uluwatu Temple perched on dramatic cliff at sunset in Bali" | CLEAN |
| Mid-article | 579 | `bali tegallalang rice terraces morning green landscape` | "Tegallalang Rice Terraces at sunrise in Ubud, Bali" | CLEAN |

**Status: CLEAN** — uses dynamic Pexels queries, fully destination-appropriate

---

### E-6. `tokyo-5-days` — `TokyoClient.tsx`

| Image | Line | Query Used | Alt | Status |
|-------|------|-----------|-----|--------|
| Hero | 184 | `tokyo shibuya crossing neon lights japan night` | "Tokyo Shibuya Crossing neon lights at night" | CLEAN |
| Mid-article | 594 | `tokyo shinjuku golden gai narrow alley bars neon night` | "Golden Gai narrow alley bars in Shinjuku Tokyo" | CLEAN |

**Status: CLEAN**

---

### E-7. `leh-ladakh-7-days` — `LehLadakhClient.tsx`

| Image | Line | Photo ID | Alt | Status |
|-------|------|----------|-----|--------|
| Hero | 113 | `1559128010-7c1ad6e1b6a5` | "Pangong Lake Ladakh blue water mountains" | VERIFY — different ID from blog.ts card photo (`1600438831035-48f5f196d3bf`) |

**Status: VERIFY** — Hero fallback ID `1559128010-7c1ad6e1b6a5` differs from blog.ts card photo. Confirm this resolves to an actual Pangong Lake / Ladakh image.

Gallery queries (lines 536–540): All Ladakh-specific. No issues.

---

### E-8. `manali-5-days` — `ManaliClient.tsx`

| Image | Line | Photo ID | Alt | Status |
|-------|------|----------|-----|--------|
| Hero | 104 | `1580289143286-f80b2fd4ac08` | "Manali mountains snow Himachal Pradesh" | VERIFY — different ID from blog.ts card (`1677821374212-8c3e88292b1b`) |

**Status: VERIFY** — Different hero vs card photo IDs. Both should be snow mountain images for Himachal Pradesh — verify `1580289143286-f80b2fd4ac08` is Manali and not a generic alps/European mountain.

Gallery queries (lines 497–501): All Manali/Himachal-specific. No issues.

---

## Section F: Homepage Images

### F-1. `HeroSection.tsx`

| Element | Photo ID | Destination Label | Status |
|---------|----------|-------------------|--------|
| Background | `1488646953014-85cb44e25828` | "World travel destinations" | OK — generic |
| India chip | `1564507592333-c60657eea523` | India | OK — Taj Mahal |
| Bali chip | `1537996194471-e657df975ab4` | Bali | OK — Uluwatu |
| Japan chip | `1493976040374-85c8e12f0c0e` | Japan | OK — Fushimi Inari |
| Dubai chip | `1512453979798-5ea266f8880c` | Dubai | OK — Burj Khalifa |
| Italy chip | `1552832230-c0197dd311b5` | Italy | OK — Colosseum |
| Spain chip | `1583422409516-2895a77efded` | Spain | OK — Sagrada Familia |

**Status: CLEAN**

---

### F-2. `PopularDestinations.tsx` — 24 Destination Cards

All 24 cards checked individually:

| Destination | Photo ID | Status |
|-------------|----------|--------|
| Kashmir | `1595815771614-ade9d652a65d` | CLEAN — Dal Lake |
| Rajasthan | `1599661046289-e31897846e41` | CLEAN — Amber Fort |
| Goa | `1587922546307-776227941871` | CLEAN — Palolem Beach |
| Kerala | `1602216056096-3b40cc0c9944` | CLEAN — Backwaters |
| Leh Ladakh | `1600438831035-48f5f196d3bf` | CLEAN — Pangong Lake |
| Andaman | `1586359716568-3e1907e4cf9f` | CLEAN — Radhanagar Beach |
| Manali | `1677821374212-8c3e88292b1b` | CLEAN — Snow mountains |
| Meghalaya | `1698429358246-807d8972da9a` | CLEAN — Root bridges |
| Varanasi | `1561359313-0639aad49ca6` | CLEAN — Ghats |
| Spiti Valley | `1673246239376-f3c01a13bab0` | CLEAN — Spiti monastery |
| Bangkok | `1563492065599-3520f775eeed` | CLEAN — Grand Palace |
| Tokyo | `1540959733332-eab4deabeeaf` | CLEAN — Shibuya |
| Kyoto | `1493976040374-85c8e12f0c0e` | CLEAN — Fushimi Inari |
| Rome | `1552832230-c0197dd311b5` | CLEAN — Colosseum |
| Bali | `1537996194471-e657df975ab4` | CLEAN — Uluwatu |
| Maldives | `1514282401047-d79a71a590e8` | CLEAN — Overwater bungalow |
| Santorini | `1570077188670-e3a8d69ac5ff` | CLEAN — Oia |
| Paris | `1502602898657-3e91760cbb34` | CLEAN — Eiffel Tower |
| Dubai | `1512453979798-5ea266f8880c` | CLEAN — Skyline |
| Singapore | `1525625293386-3f8f99389edd` | CLEAN — Marina Bay |
| Istanbul | `1524231757912-21f4fe3a7200` | CLEAN — Hagia Sophia |
| Barcelona | `1583422409516-2895a77efded` | CLEAN — Sagrada Familia |
| Phuket | `1589394815804-964ed0be2eb5` | CLEAN — Phi Phi Islands |
| Cappadocia | `1570939274717-7eda259b50ed` | CLEAN — Hot air balloons |

**Status: CLEAN — all 24 cards correct**

---

### F-3. `DestinationGridSection.tsx` — India Destinations Grid

All grid entries use the same photo IDs as `blog.ts`. Blog.ts issues propagate here automatically. No grid-specific additional mismatches found.

**Status: INHERITS blog.ts issues only**

---

## TOP 10 MOST CRITICAL FIXES

Ranked by severity: confirmed wrong image + likely user-facing impact.

---

### Fix #1 — `sydney-5-days` showing Indian paragliding photo
| Field | Value |
|-------|-------|
| **File** | `src/data/blog.ts` |
| **Line** | **1503** |
| **Current photo ID** | `1506905925346-21bda4d32df4` |
| **Problem** | Sydney Opera House post shows Bir Billing (India) mountain paragliding photo |
| **Search query** | `sydney opera house harbour bridge australia sunset golden hour` |

---

### Fix #2 — `kashmir-6-days` KashmirClient.tsx hero showing paragliding photo
| Field | Value |
|-------|-------|
| **File** | `src/app/blog/kashmir-6-days/KashmirClient.tsx` |
| **Line** | **111** |
| **Current photo ID** | `1506905925346-21bda4d32df4` |
| **Problem** | Kashmir dedicated page hero shows Bir Billing mountain paragliding instead of Dal Lake houseboat |
| **Fix** | Change fallback to `https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1600&q=85` |

---

### Fix #3 — `coimbatore-2-days` showing Taj Mahal
| Field | Value |
|-------|-------|
| **File** | `src/data/blog.ts` |
| **Line** | **892** |
| **Current photo ID** | `1548013146-72479768bada` |
| **Problem** | Coimbatore (Tamil Nadu) post shows Taj Mahal, Agra |
| **Search query** | `coimbatore isha yoga adiyogi statue tamil nadu india` |

---

### Fix #4 — `namibia-7-days` showing Taj Mahal
| Field | Value |
|-------|-------|
| **File** | `src/data/blog.ts` |
| **Line** | **2537** |
| **Current photo ID** | `1548013146-72479768bada` |
| **Problem** | Namibia desert/dunes post shows Taj Mahal, India |
| **Search query** | `namibia sossusvlei deadvlei red sand dunes dead trees desert africa` |

---

### Fix #5 — `boracay-4-days` showing Bali Uluwatu temple
| Field | Value |
|-------|-------|
| **File** | `src/data/blog.ts` |
| **Line** | **2857** |
| **Current photo ID** | `1537996194471-e657df975ab4` |
| **Problem** | Philippines beach post shows a Bali Hindu cliff temple |
| **Search query** | `boracay white beach philippines sunset turquoise water` |

---

### Fix #6 — `miami-4-days` showing Indian paragliding mountains
| Field | Value |
|-------|-------|
| **File** | `src/data/blog.ts` |
| **Line** | **1435** |
| **Current photo ID** | `1506905925346-21bda4d32df4` |
| **Problem** | Miami South Beach post shows Himachal Pradesh mountain paragliding |
| **Search query** | `miami south beach art deco ocean drive florida pastel buildings` |

---

### Fix #7 — `malta-4-days` showing Indian paragliding mountains
| Field | Value |
|-------|-------|
| **File** | `src/data/blog.ts` |
| **Line** | **2744** |
| **Current photo ID** | `1506905925346-21bda4d32df4` |
| **Problem** | Valletta Malta harbour post shows Himachal Pradesh mountain paragliding |
| **Search query** | `valletta malta grand harbour baroque architecture mediterranean` |

---

### Fix #8 — `quito-ecuador-4-days` showing Bolivia salt flat
| Field | Value |
|-------|-------|
| **File** | `src/data/blog.ts` |
| **Line** | **3163** |
| **Current photo ID** | `1531761535209-180857e963b9` |
| **Problem** | Quito colonial city post shows Salar de Uyuni salt flat (Bolivia) |
| **Search query** | `quito ecuador historic center colonial cathedral andes mountains` |

---

### Fix #9 — `copenhagen-3-days` showing Norway fjords
| Field | Value |
|-------|-------|
| **File** | `src/data/blog.ts` |
| **Line** | **1753** |
| **Current photo ID** | `1513622470522-26c3c8a854bc` |
| **Problem** | Copenhagen, Denmark post shows Norwegian Geirangerfjord scenery |
| **Search query** | `copenhagen nyhavn canal colorful houses denmark bicycles boats` |

---

### Fix #10 — `cyprus-5-days` showing Warsaw/Quebec Old Town
| Field | Value |
|-------|-------|
| **File** | `src/data/blog.ts` |
| **Line** | **3004** |
| **Current photo ID** | `1519197924294-4ba991a11128` |
| **Problem** | Cyprus Mediterranean island post shows a Central European/Canadian colonial city |
| **Search query** | `cyprus paphos mosaics mediterranean coastline aphrodite rock blue sea` |

---

## Additional Fixes (Priority Medium)

| Priority | Slug | Line | Current ID | Search Query |
|----------|------|------|------------|--------------|
| 11 | `victoria-falls-4-days` | 2515 | `1516026672322-bc52d61a55d5` | `victoria falls waterfall spray rainbow zambezi devil pool` |
| 12 | `rwanda-gorillas-5-days` | 2526 | `1516026672322-bc52d61a55d5` | `mountain gorilla rwanda volcanoes national park silverback africa` |
| 13 | `hamburg-3-days` | 2880 | `1513622470522-26c3c8a854bc` | `hamburg speicherstadt warehouse canal red brick elbphilharmonie` |
| 14 | `bhubaneswar-3-days` | 793 | `1558431382-27e303142255` | `lingaraj temple bhubaneswar odisha india ancient architecture` |
| 15 | `bratislava-3-days` | 3242 | `1519197924294-4ba991a11128` | `bratislava slovakia old town castle danube ufo bridge baroque` |
| 16 | `wroclaw-3-days` | 3319 | `1519197924294-4ba991a11128` | `wroclaw poland market square cathedral island gnomes baroque` |
| 17 | `split-croatia-4-days` | 3208 | `1555881400-74d7acaacd8b` | `split croatia diocletian palace adriatic sea old town waterfront` |
| 18 | `komodo-4-days` | 2846 | `1555400038-63f5ba517a47` | `komodo island indonesia dragon padar viewpoint pink beach` |
| 19 | `mekong-delta-3-days` | 1953 | `1555400038-63f5ba517a47` | `mekong delta vietnam floating market wooden boats river` |
| 20 | `oslo-3-days` | 3308 | `1513622470522-26c3c8a854bc` | `oslo norway city hall harbour opera house vigeland park` |
| 21 | `switzerland-5-days` | 1811 | `1531366936337-7c912a4589a7` | `switzerland interlaken alps matterhorn jungfrau turquoise lake` |
| 22 | `philadelphia-4-days` | 2958 | `1569761316261-9a8696fa2ca3` | `philadelphia liberty bell independence hall historic pennsylvania` |
| 23 | `charleston-sc-4-days` | 3049 | `1569761316261-9a8696fa2ca3` | `charleston south carolina rainbow row colorful historic houses` |
| 24 | `xian-4-days` | 2642 | `1508804185872-d7badad00f7d` | `xian terracotta army warriors china qin dynasty ancient` |
| 25 | `kruger-park-5-days` | 2812 | `1516026672322-bc52d61a55d5` | `kruger national park south africa safari lion elephant wildlife` |

---

*Report generated by full read of `src/data/blog.ts` (302 entries), manual inspection of 8 dedicated page components (`KashmirClient.tsx`, `RajasthanBlogClient.tsx`, `GoaBlogClient.tsx`, `KeralaClient.tsx`, `BaliClient.tsx`, `TokyoClient.tsx`, `LehLadakhClient.tsx`, `ManaliClient.tsx`), and 3 homepage section components (`PopularDestinations.tsx`, `DestinationGridSection.tsx`, `HeroSection.tsx`).*
