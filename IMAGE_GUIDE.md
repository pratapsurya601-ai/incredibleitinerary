# IncredibleItinerary — Image Reference Guide
# =============================================
# HOW TO FIND & REPLACE IMAGES
#
# 1. Go to unsplash.com
# 2. Search for the exact place/thing (e.g. "Palolem Beach Goa")
# 3. Click the photo you want
# 4. Copy the photo ID from the URL:
#    https://unsplash.com/photos/PHOTO-ID-HERE
# 5. Replace the photo ID in the code file listed below
# 6. git add . && git commit -m "Update images" && git push origin master:main
#
# FORMAT:
# FILE | PHOTO ID | WHAT IT SHOULD SHOW | STATUS

## ── HOMEPAGE ───────────────────────────────────────────────────────────────

# src/components/sections/Hero.tsx (line ~14)
# PHOTO ID: 1477587458883-47145ed94245
# SHOULD SHOW: Dramatic India landscape — mountains, palaces or iconic view
# STATUS: ✅ Good — India panoramic

# src/components/sections/CTABanner.tsx (line ~21)
# PHOTO ID: 1506461883276-594a12b11cf3
# SHOULD SHOW: India palace, fort, or travel scene for CTA background
# STATUS: ✅ OK

# src/components/sections/WhyUs.tsx (line ~19)
# PHOTO ID: 1503917988258-f87a78e3c995
# SHOULD SHOW: Person experiencing India travel — authentic, not stock-y
# STATUS: ✅ OK

## ── DESTINATIONS (src/data/index.ts) ───────────────────────────────────────

# Rajasthan destination card
# PHOTO ID: 1599661046289-e31897846e41
# SHOULD SHOW: Amber Fort Jaipur or Rajasthan palace
# STATUS: ✅ Verified Amber Fort

# Golden Triangle destination card
# PHOTO ID: 1548013146-72479768bada
# SHOULD SHOW: Taj Mahal (correct for this destination)
# STATUS: ✅ Verified Taj Mahal

# Kerala destination card
# PHOTO ID: 1626621341517-bbf3d9990a23
# SHOULD SHOW: Kerala backwaters, houseboats or tea hills
# STATUS: ✅ Verified Kerala

# Himalaya destination card
# PHOTO ID: 1559128010-7c1ad6e1b6a5
# SHOULD SHOW: Himalayan mountains, Leh or Manali landscape
# STATUS: ✅ Verified mountains

## ── PACKAGES (src/data/index.ts) ────────────────────────────────────────────

# Royal Rajasthan package
# PHOTO ID: 1599661046289-e31897846e41
# SHOULD SHOW: Amber Fort or Rajasthan palace
# STATUS: ✅ Same as destination card

# Golden Triangle package
# PHOTO ID: 1548013146-72479768bada
# SHOULD SHOW: Taj Mahal
# STATUS: ✅ Correct

# Himalayan Serenity package
# PHOTO ID: 1559128010-7c1ad6e1b6a5
# SHOULD SHOW: Himalayan landscape
# STATUS: ✅ Correct

# Kerala package
# PHOTO ID: 1626621341517-bbf3d9990a23
# SHOULD SHOW: Kerala backwaters
# STATUS: ✅ Correct

# Varanasi package
# PHOTO ID: 1561361513-2d000a50f0dc
# SHOULD SHOW: Varanasi ghats, Ganga river
# STATUS: ✅ Varanasi ghats

# Luxury North India package
# PHOTO ID: 1506461883276-594a12b11cf3
# SHOULD SHOW: Luxury palace or India architecture
# STATUS: ⚠️ Double check — could be generic

## ── GOA BLOG (src/app/blog/goa-3-days/GoaBlogClient.tsx) ────────────────────

# Hero image (line ~46)
# PHOTO ID: 1587922546307-776227941871
# SHOULD SHOW: Goa beach — Palolem or Vagator
# STATUS: ⚠️ Verify this is actually Goa not somewhere else
# TO FIX: Search "palolem beach goa" on unsplash, pick one you like

# Mid-article image — Old Goa church (line ~492)
# PHOTO ID: 1593693411515-c20261bcad6e
# SHOULD SHOW: Basilica of Bom Jesus OR Se Cathedral, Old Goa
# STATUS: ⚠️ Needs manual verification
# BEST FIX: Search "old goa church" or "basilica goa" on unsplash

# Food image (line ~675)
# PHOTO ID: 1567620905732-2d1ec7ab7445
# SHOULD SHOW: Goan fish thali or Indian food spread
# STATUS: ⚠️ Verify it's Indian food not something else

## ── HOW TO QUICKLY VERIFY ANY IMAGE ────────────────────────────────────────
#
# Just open this URL in your browser replacing PHOTO_ID:
# https://images.unsplash.com/photo-PHOTO_ID?w=400&q=60
#
# Example — check the Old Goa church photo:
# https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=400&q=60
#
# If it's wrong → go to unsplash.com, search the right thing,
# copy the new ID, replace it in the file listed above.

## ── RECOMMENDED SEARCHES FOR EACH SECTION ──────────────────────────────────

# Homepage hero:      "india mountains palace landscape"
# Goa blog hero:      "goa beach palolem sunset"
# Old Goa church:     "goa church colonial" OR "old goa basilica"
# Goan food:          "goa fish curry thali indian food"
# Rajasthan:          "amber fort jaipur rajasthan"
# Kerala:             "kerala backwaters houseboat"
# Himalaya:           "leh ladakh himalaya mountains"
# Varanasi:           "varanasi ganga ghats"
# Why Us section:     "india travel authentic local"
