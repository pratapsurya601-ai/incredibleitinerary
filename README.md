# IncredibleItinerary — Next.js Website

A modern, premium, conversion-focused travel platform built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
```bash
cp .env.example .env.local
# Open .env.local and fill in your values
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Homepage (assembles all sections)
│   ├── globals.css         # Tailwind base + custom component classes
│   └── api/
│       ├── inquiry/        # POST /api/inquiry — lead capture
│       └── newsletter/     # POST /api/newsletter — email signup
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav, scroll effect, mobile menu
│   │   └── Footer.tsx      # 4-column footer
│   ├── sections/
│   │   ├── Hero.tsx        # Cinematic hero with dual CTAs
│   │   ├── TrustStrip.tsx  # Trust signals bar
│   │   ├── Destinations.tsx# Asymmetric destination grid
│   │   ├── Packages.tsx    # Filterable packages grid (6 packages)
│   │   ├── HowItWorks.tsx  # 4-step process
│   │   ├── WhyUs.tsx       # Why choose us + stat badge
│   │   ├── Testimonials.tsx# 3-card testimonials
│   │   ├── Services.tsx    # 4-service cards
│   │   ├── CTABanner.tsx   # Full-width CTA with WhatsApp
│   │   └── Newsletter.tsx  # Email newsletter signup
│   └── ui/
│       ├── InquiryModal.tsx # Lead capture form (react-hook-form)
│       ├── WhatsAppButton.tsx# Floating WhatsApp button
│       └── AnimatedSection.tsx# Scroll-reveal wrapper
│
└── data/
    └── index.ts            # All site content (destinations, packages, etc.)
```

---

## ✏️ Customization

### Update your WhatsApp number
In **two places**:
1. `.env.local` → `NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX`
2. `src/components/ui/WhatsAppButton.tsx` → `WHATSAPP_NUMBER` constant

### Update content (destinations, packages, testimonials)
All site content lives in **`src/data/index.ts`**. Edit the arrays to update:
- Destinations
- Packages (name, price, images, categories, pills)
- Testimonials
- Services
- How It Works steps
- Why Us points

### Update images
Images use Unsplash URLs. Replace with your own images by:
1. Placing images in `public/images/`
2. Updating image `src` props in `src/data/index.ts` to `/images/your-image.jpg`

### Update brand colors
All design tokens are in `tailwind.config.ts`:
```ts
colors: {
  gold: { light: "#E8D4A8", DEFAULT: "#C9A96E", dark: "#8B6835" },
  ink:  { DEFAULT: "#161008", mid: "#332515" },
  // ...
}
```

### Add your logo
Replace the text logo in `src/components/layout/Navbar.tsx` with:
```tsx
import Image from "next/image";
<Image src="/images/logo.svg" alt="IncredibleItinerary" width={180} height={40} />
```

---

## 📧 Connecting the Inquiry Form

The form POSTs to `/api/inquiry`. To receive emails, add your provider in `src/app/api/inquiry/route.ts`:

### Option A — Resend (recommended, free tier available)
```bash
npm install resend
```
```ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({ ... });
```

### Option B — EmailJS (no backend needed)
Use directly from the frontend — see [emailjs.com](https://emailjs.com)

### Option C — WhatsApp via Twilio
```bash
npm install twilio
```

---

## 📬 Connecting the Newsletter

Edit `src/app/api/newsletter/route.ts`. Choose your provider:

| Provider | Free Tier | Docs |
|----------|-----------|------|
| Mailchimp | 500 contacts | [docs](https://mailchimp.com/developer/) |
| ConvertKit | 1,000 subscribers | [docs](https://developers.convertkit.com/) |
| Resend | Unlimited | [docs](https://resend.com/docs) |

---

## 🌐 Deployment

### Deploy to Vercel (recommended — free)
```bash
npm install -g vercel
vercel
```
Then add your environment variables in the Vercel dashboard.

### Deploy to Netlify
```bash
npm run build
# Upload the .next folder or connect your GitHub repo
```

### Self-hosted (VPS / cPanel)
```bash
npm run build
npm run start   # Runs on port 3000
```
Use Nginx as a reverse proxy to port 3000.

---

## 🔧 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 |
| Language | TypeScript |
| Forms | react-hook-form |
| Icons | lucide-react |
| Images | next/image (optimized) |
| Fonts | Cormorant Garamond + Jost (Google Fonts) |
| Animations | CSS keyframes + IntersectionObserver |
| Deployment | Vercel (recommended) |

---

## 📈 SEO

- Metadata configured in `src/app/layout.tsx`
- OpenGraph tags included
- Semantic HTML throughout
- next/image for optimized, lazy-loaded images
- Mobile-first responsive design

---

## 🗺️ Planned Next Pages

To expand the site, create these routes:

```
src/app/
├── destinations/[slug]/page.tsx   # Individual destination pages
├── packages/[slug]/page.tsx       # Individual package detail pages
├── about/page.tsx                 # About us page
├── blog/page.tsx                  # Travel blog index
├── blog/[slug]/page.tsx           # Blog post
└── contact/page.tsx               # Contact page
```

---

## 📞 Support

Built by Claude (Anthropic) for IncredibleItinerary.com

Replace the WhatsApp number (`91XXXXXXXXXX`) throughout the codebase before going live.
