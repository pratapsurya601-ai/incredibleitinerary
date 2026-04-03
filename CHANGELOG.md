# Changelog — IncredibleItinerary.com Full Codebase Overhaul

## Task 1: Homepage SSR/SEO Fix (CRITICAL)
- Removed `"use client"` from `src/app/page.tsx` — now a server component
- Extracted all interactive sections into `src/components/sections/home/`:
  - HeroSection, TrustStripSection, WhyDifferentSection, SampleItinerarySection,
    HowItWorksSection, DestinationGridSection, MonetizationSection, FinalCTASection
- Created `HomeClient.tsx` wrapper for modal state management
- Moved shared `FadeIn` + `useInView` to `src/components/ui/FadeIn.tsx`
- Deleted unused `TrustSection` function
- Fixed missing React key on comparison table fragments (replaced bare `<>` with keyed `<div className="contents">`, later converted to semantic `<table>`)

## Task 2: Dead Code Cleanup
- Deleted 10 unused legacy section files: Hero, Destinations, WhyUs, HowItWorks, Services, SocialProof, TrustStrip, CTABanner, Newsletter, Packages
- Deleted duplicate blog directory `src/app/blog/jibhi-tirthan-4-days/`
- Removed `framer-motion` from package.json (never imported)

## Task 3: Font Optimization
- Removed render-blocking `@import url(...)` from `globals.css`
- Added `next/font/google` for Cormorant Garamond and Jost in `layout.tsx`
- Applied CSS variables via `className` on `<html>` element
- Added `viewport` export with proper meta tag

## Task 4: Image Optimization
- Converted Hero background from CSS `background-url` to `next/image` with `fill`, `priority`
- Replaced `<img>` tags in DestinationGrid with `next/image` + proper `sizes` and `loading="lazy"`

## Task 5: Inquiry Form Error Handling
- Added try/catch and `response.ok` check on fetch
- Added red error banner for API failures
- Added WhatsApp number validation (min 10 digits)
- Created `src/lib/analytics.ts` with `trackEvent` utility
- Created `src/types/global.d.ts` with `window.gtag` type declaration
- Added GA event tracking on successful inquiry submission

## Task 6: Affiliate Link Fixes
- Updated `config.ts` Booking.com to use `NEXT_PUBLIC_BOOKING_AID` env var (clean URL fallback)
- Updated Viator to use `NEXT_PUBLIC_VIATOR_ID` env var (clean URL fallback)
- Updated hotel direct links to use env var via IIFE
- Added affiliate env vars to `.env.example`

## Task 7: Mobile UX Fixes
- Navbar mobile menu: replaced instant show/hide with smooth slide-down (`max-height` + `transition-all`)
- Added `aria-expanded` to hamburger button
- Comparison table: added mobile stacked card layout (hidden on `md+`)
- Added WhatsAppButton to `layout.tsx` (floating CTA)

## Task 8: JSON-LD Structured Data
- Added Organization schema to `layout.tsx`
- Added WebSite schema with SearchAction to homepage
- Added FAQPage schema to homepage
- Added Product schema for each PDF in shop page
- Blog JSON-LD added via background agent (Article, BreadcrumbList, FAQPage, TouristDestination)

## Task 9: Accessibility
- FAQ accordion: added `aria-expanded`, `aria-controls`, `role="region"`, unique IDs
- Testimonial carousel: added `aria-live="polite"`, `aria-label` on dot buttons
- Navbar hamburger: added `aria-expanded`
- Added skip-to-content link in Navbar (sr-only, visible on focus)
- Converted comparison table from CSS grid divs to semantic `<table>` with proper `<thead>`, `<tbody>`, `<th>`, `<td>`

## Task 10: Security Hardening
- Added security headers to `next.config.js` (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy)
- Added HTML sanitization to inquiry and newsletter API routes
- Added server-side email validation
- Added IP-based rate limiting (5 per hour) to inquiry route

## Task 11: Analytics Event Tracking
- `inquiry_modal_opened` — tracked on every Plan My Trip click (with page context)
- `inquiry_submitted` — tracked on form success (with destination)
- `quiz_started` — tracked on first quiz answer
- `quiz_completed` — tracked with recommended destination
- `shop_product_clicked` — tracked on Gumroad link clicks
- `affiliate_clicked` — tracked on Booking.com/GetYourGuide clicks (with destination + provider)
- Dev mode: events logged to console instead of GA

## Task 12: Blog Internal Linking
- Created `src/components/blog/RelatedGuides.tsx` — shows 3 diverse destination cards
- Created `src/components/blog/Breadcrumb.tsx` — Home > Travel Guides > [Destination]
- Added both components to all 14 blog client files

## Task 13: Error Boundaries & 404 Polish
- Created `src/app/error.tsx` — branded error page with retry button
- Enhanced `src/app/not-found.tsx` — added Navbar, Footer, and 4 suggested destination links
- Blog `[slug]/page.tsx` already had `notFound()` handling

## Task 14: Lazy Loading
- Dynamically imported InquiryModal with `ssr: false`
- Dynamically imported below-fold homepage sections: DestinationGrid, Monetization, HomepageFAQ, FinalCTA
- Added loading skeleton placeholders for lazy-loaded sections

## Task 15: Missing Blog Metadata
- Checked all 14 blog page.tsx files
- Added complete Next.js Metadata exports and JSON-LD structured data where missing
- Matched the gold-standard pattern from goa-3-days

## Final Verification
- `npx next build` passes with 0 errors
- `npx tsc --noEmit` clean
- No broken imports after file deletions
- All dependencies verified in package.json
