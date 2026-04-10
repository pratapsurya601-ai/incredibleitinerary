"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import SmartImage from "@/components/ui/SmartImage";
import TableOfContents from "@/components/blog/TableOfContents";
import Comments from "@/components/blog/Comments";
import DestinationGallery from "@/components/blog/DestinationGallery";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import RelatedGuides from "@/components/blog/RelatedGuides";
import CombineWith from "@/components/blog/CombineWith";
import Breadcrumb from "@/components/blog/Breadcrumb";
import InlineCTA from "@/components/blog/InlineCTA";
import PhotoCta from "@/components/blog/PhotoCta";
import AuthorByline from "@/components/blog/AuthorByline";
import InlineSignup from "@/components/email/InlineSignup";
import PinterestSaveButton from "@/components/ui/PinterestSaveButton";
import { usePageUrl } from "@/lib/hooks";

// ── Table of Contents ─────────────────────────────────────────────────────────
const DUBAI_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Dubai Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "4-Day Itinerary" },
  { id: "landmarks",   emoji: "🏙️", label: "Landmark Guide" },
  { id: "budget",      emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",         emoji: "🍽️", label: "Where to Eat" },
  { id: "mistakes",    emoji: "❌",  label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "💡",  label: "Pro Tips" },
  { id: "faq",         emoji: "❓",  label: "FAQ" },
];

// ── Reading Progress Bar ──────────────────────────────────────────────────────
function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setProgress(Math.min(100, pct));
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[300] h-1 bg-parchment-2">
      <div
        className="h-full bg-amber-600 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ── Share Bar ─────────────────────────────────────────────────────────────────
function ShareBar() {
  const pageUrl = usePageUrl();
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      {[
        {
          label: "Email",
          color: "bg-ink text-white",
          href: `mailto:?subject=Dubai 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Dubai in 4 Days — Burj Khalifa, desert safaris and the gold souk&url=${pageUrl}`,
        },
      ].map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}
        >
          {s.label}
        </a>
      ))}
      <button
        onClick={copy}
        className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted"
      >
        {copied ? "✓ Copied" : "Copy Link"}
      </button>
      <PinterestSaveButton
        pageUrl="https://www.incredibleitinerary.com/blog/dubai-4-days"
        imageUrl="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80"
        description="Dubai in 4 Days: Burj Khalifa, Old Dubai, Desert Safari, Marina — complete travel guide with budget breakdown and real prices in AED."
      />
    </div>
  );
}

// ── Stat Card ─────────────────────────────────────────────────────────────────
function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <p className="font-serif text-lg font-light text-ink">{value}</p>
      <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{label}</p>
    </div>
  );
}

// ── Day Card ──────────────────────────────────────────────────────────────────
function DayCard({
  day,
  title,
  items,
  cost,
}: {
  day: string;
  title: string;
  items: string[];
  cost: string;
}) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-parchment hover:bg-parchment-2 transition-colors"
      >
        <div className="flex items-center gap-3 text-left">
          <span className="font-serif text-xl text-amber-900 font-light">{day}</span>
          <span className="text-sm text-ink font-medium">{title}</span>
        </div>
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-amber-500 mt-1 flex-shrink-0 text-xs">●</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">💰</span>
            <span className="text-xs text-muted font-light">Est. cost: </span>
            <span className="text-xs font-medium text-ink">{cost}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Tip Card ──────────────────────────────────────────────────────────────────
function TipCard({
  icon,
  title,
  desc,
  color,
}: {
  icon: string;
  title: string;
  desc: string;
  color: string;
}) {
  return (
    <div className={`rounded-xl p-5 border ${color}`}>
      <div className="flex items-start gap-3">
        <span className="text-xl flex-shrink-0">{icon}</span>
        <div>
          <p className="font-medium text-sm text-stone-900 mb-1">{title}</p>
          <p className="text-xs text-gray-700 font-light leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

// ── FAQ Accordion ─────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-600 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 border-t border-parchment-2">
          <p className="text-sm text-muted font-light leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function DubaiClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={DUBAI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Dubai" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="dubai skyline burj khalifa sunset desert city"
            fallback="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=85"
            alt="Dubai skyline with Burj Khalifa towering over the city at sunset"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/30" />

          {/* Breadcrumb */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Dubai 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  City &amp; Desert
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">18 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Dubai in 4 Days:
                <em className="italic text-amber-300"> Burj Khalifa, Desert Safaris &amp; the Gold Souk</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The world&apos;s tallest building, an 828-metre skyline, gold souks, desert dunes at sunset, and a creek that splits old from new. The complete guide with real prices in AED &amp; USD.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="18 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇦🇪 UAE</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From AED 1,200</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Dubai is what happens when a fishing village on a creek decides to become the future in 50 years — and actually pulls it off. The Burj Khalifa is the headline, but the real surprise is how much of old Dubai still exists: the gold souk, the spice market, the abra boats crossing the creek for one dirham, and the wind-tower houses of Al Fahidi that predate every skyscraper by a century.
            </p>
          </blockquote>

          {/* ── WHAT DUBAI ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Dubai Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Dubai was a small pearl-diving and trading port on the Arabian Gulf until oil was discovered in 1966. Unlike Abu Dhabi, Dubai&apos;s oil reserves were relatively small, which is precisely why it reinvented itself as a global business, tourism, and logistics hub. Today, oil accounts for less than 1% of Dubai&apos;s GDP. Everything you see — the 828-metre Burj Khalifa, the palm-shaped islands, the world&apos;s largest shopping mall — was built in roughly 30 years.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              What most guides skip: Dubai is two cities in one. South of the creek is the new Dubai everyone photographs — Downtown, Marina, JBR, the Palm. North of the creek is old Deira and Bur Dubai — gold souks, spice markets, Iranian restaurants, and a texture that feels closer to Mumbai than Manhattan. The one-dirham abra ride across the creek is the border between them, and it&apos;s the single best transport experience in the city.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Dubai is tax-free, extremely safe (one of the lowest crime rates globally), heavily air-conditioned, and designed for visitors. The metro is clean and cheap. English is spoken everywhere. Flights from India start at INR 8,000–12,000 return. For Indian travellers, it&apos;s the closest &quot;international&quot; destination that genuinely feels like a different world.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="From India" value="3–4 hrs" />
              <StatCard icon="🌡️" label="Best Season" value="Nov–Mar" />
              <StatCard icon="🏙️" label="Key Landmark" value="Burj Khalifa" />
              <StatCard icon="💰" label="Budget From" value="AED 300/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Dubai</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Nov–Feb",
                  i: "☀️",
                  t: "Winter — Best Season",
                  d: "20–28°C, perfect for outdoor exploration. December and January are peak season with Dubai Shopping Festival and New Year fireworks (Burj Khalifa show is world-famous). Hotel rates are highest in late December. November and February offer the same weather at 20–30% lower prices.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Mar–Apr",
                  i: "🌅",
                  t: "Spring — Warm But Comfortable",
                  d: "28–35°C. Still pleasant for morning and evening activities. Beach weather is excellent. Hotel prices drop significantly after March. The desert is best at this temperature — warm golden light without the brutal summer heat. Good shoulder-season value.",
                  b: "Good value",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "May–Sep",
                  i: "🔥",
                  t: "Summer — Extreme Heat",
                  d: "40–48°C with high humidity. Everything is air-conditioned but stepping outside feels like opening an oven door. Hotel rates drop 40–60%, making luxury stays affordable. Dubai Summer Surprises festival runs July–August with sales. Viable if you stay indoors.",
                  b: "Budget luxury",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Oct",
                  i: "🌤️",
                  t: "Autumn — Heat Breaking",
                  d: "32–38°C. The heat starts easing but it&apos;s still quite warm, especially early October. Late October is comfortable enough for evening outdoor dining and beach visits. Prices are still low before the winter rush begins in November. A good month for deals.",
                  b: "Transition month",
                  c: "bg-blue-50 border-blue-200",
                },
              ].map((s) => (
                <div key={s.s} className={`rounded-xl p-4 border ${s.c}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{s.i}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{s.s} — {s.t}</p>
                      <p className="text-[0.65rem] font-medium text-teal">{s.b}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── GETTING THERE ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Dubai</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Dubai International Airport (DXB) is connected to the city centre by metro. The Red Line runs from Terminal 1 and Terminal 3 directly to Downtown, taking 25 minutes for AED 7.50. Skip the taxi queue — it&apos;s faster and saves AED 70–100.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Flights from India (cheapest international option)",
                  d: "Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Kochi — all have multiple daily flights. Return fares: INR 8,000–15,000 (budget airlines like IndiGo, Air India Express, flydubai) or INR 15,000–25,000 on Emirates and Air India. Flight time: 3–4 hours. Book 4–6 weeks ahead for best prices. Dubai is the cheapest international flight from most Indian cities.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🛂",
                  t: "Visa for Indian passport holders",
                  d: "UAE visa required — apply online or through airlines (flydubai and Emirates offer visa services). Cost: AED 350–500 (~INR 7,800–11,200), processing 3–5 working days. 14-day visa-on-arrival available if you hold a valid US visa, UK visa, EU residence, or green card. Passport must be valid 6+ months.",
                  b: "Plan ahead",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🛂",
                  t: "Visa for US / UK / EU / AU citizens",
                  d: "Free 30-day visa-on-arrival — just show your passport at immigration. No advance application needed. Processing takes 5–15 minutes at DXB. Passport must be valid for 6 months from entry date.",
                  b: "No advance visa",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚇",
                  t: "Getting around Dubai",
                  d: "Metro (Red + Green lines): AED 3–7.50 per ride, covers most tourist areas. Buy a Nol card at any station (AED 25 with AED 19 balance). Abra water taxi across Dubai Creek: AED 1. Uber/Careem and metered taxis widely available (AED 12 minimum fare). The metro doesn&apos;t reach JBR or Palm Jumeirah — budget AED 30–50 taxi from the nearest station.",
                  b: "Metro is excellent",
                  c: "bg-parchment border-parchment-2",
                },
              ].map((t) => (
                <div key={t.t} className={`rounded-xl p-4 border ${t.c}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{t.i}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <p className="font-semibold text-sm text-ink">{t.t}</p>
                        <span className="text-xs bg-white/70 text-muted px-2.5 py-1 rounded-full border border-white/50">{t.b}</span>
                      </div>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{t.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── 4-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Dubai Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary balances the modern skyline, old Dubai heritage, desert adventure, and beach time. Designed so you don&apos;t waste money on taxis or time backtracking across the city.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Burj Khalifa Sunrise · Dubai Mall · Dubai Fountain"
                cost="AED 250–400 ($68–$109 USD)"
                items={[
                  "6am: Burj Khalifa 'At the Top' sunrise slot — book 2 weeks ahead, AED 169 (~$46) for the 124th + 125th floor. The city waking up below you, the desert stretching to the horizon, and the shadow of the building reaching across Downtown is worth every dirham. This is the single best thing to do in Dubai.",
                  "8am: Breakfast at Dubai Mall food court — AED 25–40 (~$7–$11) for a full meal. The mall opens to shoppers at 10am but the food court and lower levels open earlier.",
                  "10am–12:30pm: Dubai Mall free attractions — the Dubai Aquarium viewing panel is free from outside (the tunnel walk is AED 135 if you want it), the 4-storey waterfall, the dinosaur skeleton in the atrium, and the ice rink viewing gallery. The mall itself is a city — 1,200+ stores across 1 million square feet.",
                  "1pm: Lunch at Souk Al Bahar with direct Burj Khalifa views — AED 50–80 (~$14–$22) for shawarma and drinks at the terrace restaurants. The view of the Burj from this angle, across the lake, is the best daytime vantage point.",
                  "2:30pm–5pm: Rest at hotel. The afternoon heat between April and October is brutal — don&apos;t fight it. Even in winter, midday sun is strong.",
                  "6pm: Dubai Fountain show — free, runs every 30 minutes from 6pm. Each show uses a different song and choreography. Best viewed from the Souk Al Bahar bridge or the boardwalk. The AED 20 abra boat ride on the lake puts you right in front of the jets. Stay for at least 2 shows — each one is different.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Old Dubai · Gold Souk · Spice Souk · Dubai Frame · Al Fahidi"
                cost="AED 150–280 ($41–$76 USD)"
                items={[
                  "8am: Abra water taxi across Dubai Creek — AED 1, the best one-dirham experience in the Middle East. The wooden abra boats have been crossing this creek for over a century. Arrive before 9am when the souks are being set up — quieter, better light, and the shopkeepers are more relaxed.",
                  "8:30am: Spice Souk in Deira — free to explore. Buy saffron (AED 15–25/gram vs AED 60+ in malls), dried dates, frankincense, oud chips. The smell alone is worth the visit.",
                  "9:30am: Gold Souk — over 300 gold shops in a covered arcade. Gold prices in Dubai are government-regulated, so you&apos;re only negotiating the making charge (typically 10–20% of the gold price). Window shopping is perfectly acceptable and the displays are extraordinary.",
                  "11am: Walk to Al Fahidi Historical Neighbourhood — free entry. This is the oldest residential area in Dubai: wind-tower houses from the 1800s, narrow lanes, art galleries, the Coffee Museum, and XVA Gallery. The contrast with the skyline visible above the rooftops is surreal.",
                  "1pm: Lunch at Arabian Tea House in Al Fahidi — traditional Emirati food in a whitewashed courtyard with bougainvillea. AED 60–100 (~$16–$27). One of the few places tourists eat genuinely local food.",
                  "3pm: Dubai Frame — AED 50 (~$14) entry. A 150-metre-tall picture frame straddling old and new Dubai. The glass-floor sky bridge at the top is genuinely thrilling. One side shows the creek and Deira, the other shows Downtown and the Burj. The most underrated attraction in Dubai.",
                  "Evening: Street food in Deira — Al Mallah for shawarma (AED 12/~$3), Iranian restaurants along Al Rigga Road for kebabs (AED 25–40/~$7–$11), or the Pakistani cluster in Karama for biryani (AED 20–35/~$5–$10).",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Museum of the Future · Desert Safari at Sunset"
                cost="AED 400–600 ($109–$163 USD)"
                items={[
                  "9am: Museum of the Future — AED 149 (~$41) entry, book 1 week ahead. The building is an architectural landmark (the Arabic calligraphy facade is stunning), and the immersive exhibits inside explore what life could look like in 2071. Budget 2–3 hours.",
                  "12pm: Lunch at Al Ustad Special Kabab in Bur Dubai — open since 1978, AED 30–50 (~$8–$14) for kebabs and Iranian rice. Authentic, no-frills, and genuinely excellent. One of the oldest restaurants in Dubai.",
                  "2pm: Return to hotel and rest before the desert safari. Pack sunscreen, a light scarf for sand, and your camera with a full battery.",
                  "3:30pm: Desert safari pickup from hotel — book a reputable operator (AED 200–350/~$55–$95 per person for a good package). Avoid the AED 50 operators — 15 tourists crammed in a van, aggressive souvenir selling, and unsafe driving.",
                  "4:30pm: Dune bashing in a 4x4 — 30 minutes of adrenaline over golden sand dunes. Followed by a sunset stop on the highest dune for photographs. The 20 minutes of silence before the camp music starts, watching the dunes turn gold and then pink, is the most beautiful moment in Dubai.",
                  "7pm: BBQ dinner at the desert camp under the stars. Most packages include camel rides, henna painting, shisha, and belly dancing. The food is standard BBQ buffet — decent but not the reason you&apos;re here. The sky is. Return to hotel by 9:30pm.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="JBR Beach · Palm Jumeirah · Dubai Marina · Departure"
                cost="AED 150–300 ($41–$82 USD)"
                items={[
                  "7:30am: JBR Beach — free public beach, arrive early for quiet. The Walk at JBR has good breakfast spots (AED 35–60/~$10–$16). The beach is clean, well-maintained, and the Marina skyline behind you makes for excellent photographs.",
                  "10am: Monorail to Palm Jumeirah — AED 15 one-way (~$4). The monorail ride itself is a sightseeing experience with views across the fronds of the palm.",
                  "10:30am: Walk around the Atlantis area — the lobby is free to enter and genuinely impressive. Aquaventure waterpark if you want to splurge (AED 299/~$81). The Pointe dining strip faces the Atlantis with fountain shows.",
                  "12:30pm: Lunch at The Pointe — fountain-view restaurants with Atlantis backdrop. AED 60–120 (~$16–$33) for a proper meal.",
                  "2pm: Dubai Marina walk — the 7km waterfront promenade is one of the best urban walks in the Gulf. Superyachts, skyscrapers, and waterside cafes. Free.",
                  "4pm: Head to airport. DXB metro from DMCC station (AED 7.50, 30 min to Terminal 3) or taxi (AED 60–90). Dubai Duty Free is genuinely good — budget 30 minutes airside.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Dubai" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏙️ Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important attractions in order of priority. All entry fees as of early 2026. Book Burj Khalifa and Museum of the Future online in advance — they sell out.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Burj Khalifa",
                  e: "AED 169 / $46 (124th floor) · AED 399 / $109 (148th SKY)",
                  d: "The world's tallest building at 828 metres. Book the 6am sunrise slot for the 124th floor — the most magical time to visit, half the price of sunset, and almost empty. The 148th floor SKY lounge includes refreshments and a personal guide. The outdoor observation deck on 124 is the highlight.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Dubai Frame",
                  e: "AED 50 / $14",
                  d: "A 150-metre-tall gold-clad picture frame in Zabeel Park. The glass-floor sky bridge at the top shows old Dubai on one side and new Dubai on the other — the perfect metaphor for the city. Consistently underrated in guidebooks. Go in the late afternoon for the best light.",
                  t: "Underrated · 1 hr",
                },
                {
                  n: "Museum of the Future",
                  e: "AED 149 / $41",
                  d: "Opened in 2022, this torus-shaped building covered in Arabic calligraphy is already a Dubai icon. The immersive exhibits explore life in 2071 — space travel, bioengineering, and digital ecosystems. Book online 1 week ahead. Allow 2–3 hours inside.",
                  t: "Book ahead · 2–3 hrs",
                },
                {
                  n: "Gold Souk",
                  e: "Free entry",
                  d: "Over 300 gold retailers in a covered arcade in Deira. Government-regulated prices mean you negotiate only the making charge. The sheer volume of gold on display is staggering — windows stacked floor to ceiling. Go before 10am for a calmer experience.",
                  t: "Must see · 1 hr",
                },
                {
                  n: "Palm Jumeirah",
                  e: "Free (monorail AED 15 / $4 one-way)",
                  d: "The palm-shaped artificial island visible from space. The monorail from Gateway station to Atlantis is a sightseeing ride in itself. Walk the Atlantis lobby for free, or visit Aquaventure waterpark (AED 299). The Pointe has fountain shows and waterfront dining.",
                  t: "Half day · 2–3 hrs",
                },
                {
                  n: "Al Fahidi Historical Neighbourhood",
                  e: "Free entry",
                  d: "The oldest residential district in Dubai — wind-tower houses from the 1800s, narrow lanes, art galleries, and the Coffee Museum. A 10-minute walk from the abra crossing. The complete opposite of the modern skyline and an essential counterpoint to the new city.",
                  t: "Heritage · 1–1.5 hrs",
                },
                {
                  n: "Dubai Marina &amp; JBR Beach",
                  e: "Free",
                  d: "The 7km waterfront Marina walk, lined with superyachts and skyscrapers, connects to JBR Beach — one of the best public beaches in the Gulf. Go early morning for the beach, evening for the Marina promenade. The Marina skyline at dusk is extraordinary.",
                  t: "Beach + Walk · 2–3 hrs",
                },
              ].map((place) => (
                <div key={place.n} className="bg-white rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <p className="font-medium text-sm text-stone-900">{place.n}</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs text-teal font-medium bg-teal/10 px-2 py-0.5 rounded-full">{place.e}</span>
                      <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full border border-amber-200">{place.t}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{place.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <DestinationGallery
            title="Dubai — Skyline, Desert &amp; Heritage"
            subtitle="From 828-metre towers to one-dirham creek crossings."
            spots={[
              {
                name: "Burj Khalifa at Sunrise",
                query: "burj khalifa sunrise dubai golden light tower skyline",
                desc: "The world&apos;s tallest building catches the first light of day — the most magical time to visit the 124th-floor observation deck.",
              },
              {
                name: "Dubai Frame",
                query: "dubai frame landmark gold architecture zabeel park skyline",
                desc: "The 150-metre gold-clad frame perfectly captures old and new Dubai in a single view from the glass-floor sky bridge.",
              },
              {
                name: "Gold Souk Deira",
                query: "dubai gold souk deira market traditional jewelry shops",
                desc: "Over 300 gold retailers in a covered arcade — government-regulated prices and displays stacked floor to ceiling.",
              },
              {
                name: "Desert Dunes at Sunset",
                query: "dubai desert safari sunset golden sand dunes landscape",
                desc: "The desert 45 minutes from Downtown transforms at sunset into rolling golden waves of sand stretching to every horizon.",
              },
              {
                name: "Palm Jumeirah",
                query: "palm jumeirah dubai aerial view island architecture ocean",
                desc: "The iconic palm-shaped artificial island, best seen from the monorail or a helicopter for the full effect.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Dubai ranges from surprisingly affordable to eye-wateringly expensive depending on your choices. The key insight: transport (metro), street food (Deira/Karama), and free attractions (beaches, Dubai Fountain, souks, Al Fahidi) are all very cheap. It&apos;s the hotels, fine dining, and premium experiences that push costs up.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (4 nights)", "AED 600–1,000\n($163–$272)", "AED 1,600–2,800\n($436–$763)"],
                    ["🍽 Food & Drinks (4 days)", "AED 250–400\n($68–$109)", "AED 700–1,200\n($191–$327)"],
                    ["🚇 Transport (metro + taxi)", "AED 80–150\n($22–$41)", "AED 200–400\n($55–$109)"],
                    ["🎯 Activities & Entry Fees", "AED 300–500\n($82–$136)", "AED 600–1,200\n($163–$327)"],
                    ["🛍 Shopping & Misc", "AED 0–200\n($0–$55)", "AED 200–500\n($55–$136)"],
                    ["TOTAL (per person, 4 days)", "AED 1,200–2,000\n($327–$545)", "AED 3,200–6,000\n($870–$1,635)"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className={cat === "TOTAL (per person, 4 days)" ? "bg-ink" : "bg-white hover:bg-parchment/40 transition-colors"}>
                      <td className={`p-3.5 text-xs font-medium ${cat === "TOTAL (per person, 4 days)" ? "text-white" : "text-ink"}`}>{cat}</td>
                      {vals.map((v, i) => (
                        <td key={i} className={`p-3.5 text-xs font-light text-center whitespace-pre-line ${cat === "TOTAL (per person, 4 days)" ? "text-gold font-semibold" : "text-muted"}`}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (AED 300–500/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in Deira or Bur Dubai (AED 150–250/night), eat at local restaurants and food courts, use the metro exclusively, and stick to free and low-cost attractions. Dubai is surprisingly doable on a budget — the street food scene in old Dubai is excellent.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (AED 800–1,500/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay Downtown or in the Marina (AED 400–700/night), mix metro with taxis, eat at a blend of street food and mid-range restaurants, and do all the key attractions. This is the sweet spot for most visitors — comfortable without being extravagant.</p>
              </div>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices in AED (2026). 1 AED = ~$0.27 USD / ~22.5 INR. Dubai is tax-free — prices you see are what you pay.
            </p>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Dubai</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Location matters more than star rating in Dubai. The city is spread across 30+ kilometres — staying in the wrong area means expensive taxis and wasted time. Downtown and Deira are the two best bases for a 4-day trip, depending on your budget.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Deira / Bur Dubai",
                  type: "Budget · Old Dubai base",
                  price: "AED 150–250/night ($41–$68)",
                  badge: "Best budget",
                  desc: "The old Dubai side of the creek. Walking distance to the gold souk, spice souk, and Al Fahidi heritage area. Direct metro connections to Downtown (20 min) and the rest of the city. Hotels are basic but clean. The surrounding streets have the best cheap food in Dubai — Pakistani, Iranian, Indian, and Emirati restaurants for AED 20–40 a meal.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Downtown / Business Bay",
                  type: "Mid-range · Central hub",
                  price: "AED 400–700/night ($109–$191)",
                  badge: "Best location",
                  desc: "Walking distance to Burj Khalifa, Dubai Mall, and the Dubai Fountain. Metro station right there. The area is designed for tourists — everything is clean, polished, and within reach. 4-star hotels here offer Burj views at 3-star prices if you book early. The best base for first-time visitors.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Dubai Marina / JBR",
                  type: "Mid-range · Beach base",
                  price: "AED 350–600/night ($95–$163)",
                  badge: "Best for beach",
                  desc: "Waterfront apartments and hotels with direct beach access. The Walk at JBR has restaurants, shops, and a lively evening scene. Downside: the metro doesn&apos;t reach JBR directly (15-min walk or taxi from DMCC station). Best if you prioritise beach time and the Marina atmosphere over central access.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Palm Jumeirah",
                  type: "Luxury · Resort setting",
                  price: "AED 1,500–4,000/night ($409–$1,090)",
                  badge: "Luxury pick",
                  desc: "The Palm is where Dubai&apos;s most iconic resorts live — Atlantis, One&Only, Fairmont. Private beaches, world-class dining, and the monorail connection to the mainland. Feels like a resort island rather than a city. Best for luxury travellers who want the full Dubai-as-spectacle experience.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Al Barsha / Tecom",
                  type: "Value · Practical base",
                  price: "AED 200–350/night ($55–$95)",
                  badge: "Best value",
                  desc: "A quieter residential area near Mall of the Emirates and Ski Dubai. Good metro connectivity. Hotels here are 30–40% cheaper than Downtown for similar quality. Lacks the atmosphere of Downtown or old Dubai but compensates with value. Good for return visitors or longer stays.",
                  color: "border-parchment-2 bg-white",
                },
              ].map((stay) => (
                <div key={stay.name} className={`rounded-xl p-4 border ${stay.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{stay.name}</p>
                      <p className="text-xs text-muted font-light">{stay.type}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs bg-white/80 text-ink px-2.5 py-1 rounded-full border border-white/60">{stay.price}</span>
                      <span className="text-xs bg-gold/15 text-gold-dark px-2 py-0.5 rounded-full font-medium">{stay.badge}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{stay.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHERE TO EAT ── */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Dubai</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Dubai&apos;s food scene splits sharply between the old city (where AED 20–40 buys a proper meal) and the new city (where AED 200–400 buys a proper meal). Both are excellent. The secret most visitors miss: the best cheap food in Dubai is in Deira, Karama, and Satwa — not in the malls.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Al Ustad Special Kabab",
                  t: "Iranian · Bur Dubai — since 1978",
                  d: "One of the oldest restaurants in Dubai, open since 1978. The kebabs, Iranian rice, and dizi stew are consistently excellent. No-frills setting with fluorescent lighting and photos of old Dubai on the walls. AED 30–55 (~$8–$15) for a full meal. Cash preferred. Genuinely one of the best meals you&apos;ll eat in Dubai at any price point.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Ravi Restaurant",
                  t: "Pakistani · Satwa — legendary",
                  d: "The most famous cheap restaurant in Dubai. Open since 1978, this no-frills Pakistani restaurant in Satwa serves butter chicken, naan, biryani, and kebabs that draw everyone from construction workers to Ferraris parked outside. AED 15–35 (~$4–$10) per person. Open until 3am. Cash only.",
                  b: "Legendary cheap eats",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Arabian Tea House",
                  t: "Emirati · Al Fahidi Heritage District",
                  d: "Traditional Emirati breakfast and lunch in a whitewashed courtyard draped with bougainvillea inside the Al Fahidi heritage area. One of the few places tourists eat genuinely local Emirati food — chebab (Emirati pancakes), regag bread, and luqaimat (sweet dumplings). AED 60–100 (~$16–$27). Charming setting.",
                  b: "Best local food",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Al Mallah",
                  t: "Street food · Satwa/Al Dhiyafa Road",
                  d: "The best shawarma in Dubai is a strong claim but Al Mallah backs it up. The chicken shawarma (AED 12/~$3) and fresh juices (AED 10–15/~$3–$4) have been drawing crowds for decades. Outdoor seating on Al Dhiyafa Road. Open late. The mango juice is exceptional.",
                  b: "Best shawarma",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "At.mosphere",
                  t: "Fine dining · Burj Khalifa, 122nd floor",
                  d: "The world&apos;s highest restaurant, on the 122nd floor of the Burj Khalifa. Breakfast (AED 300–500/~$82–$136) is the best-value option — you get the view, the experience, and a proper meal for less than the dinner price. Book 2 weeks ahead. Dress code: smart casual. The view at sunrise is unreal.",
                  b: "Splurge",
                  c: "bg-purple-50 border-purple-200",
                },
              ].map((r) => (
                <div key={r.n} className={`rounded-xl p-4 border ${r.c}`}>
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{r.n}</p>
                      <p className="text-xs text-muted font-light">{r.t}</p>
                    </div>
                    <span className="text-xs bg-white/80 text-amber-700 px-2.5 py-1 rounded-full border border-amber-200 font-medium">{r.b}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{r.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Affiliate Block */}
          <AffiliateBlock
            destination="Dubai"
            hotels={[
              {
                name: "Rove Downtown",
                type: "Budget Design Hotel · Downtown",
                price: "From AED 200/night",
                rating: "4",
                badge: "Budget pick",
                url: "https://www.booking.com/hotel/ae/rove-downtown.html?aid=2820480",
              },
              {
                name: "Vida Downtown",
                type: "Mid-Range Boutique · Downtown",
                price: "From AED 500/night",
                rating: "5",
                badge: "Best value",
                url: "https://www.booking.com/hotel/ae/vida-downtown-dubai.html?aid=2820480",
              },
              {
                name: "Atlantis The Royal",
                type: "Ultra-Luxury · Palm Jumeirah",
                price: "From AED 2,500/night",
                rating: "5",
                badge: "Luxury",
                url: "https://www.booking.com/hotel/ae/atlantis-the-royal.html?aid=2820480",
              },
              {
                name: "Rove La Mer Beach",
                type: "Beach budget · La Mer",
                price: "From AED 250/night",
                rating: "4",
                badge: "Beach budget",
                url: "https://www.booking.com/hotel/ae/rove-la-mer-beach.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Burj Khalifa At the Top",
                duration: "1.5 hours",
                price: "From AED 169",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=burj+khalifa&partner_id=PSZA5UI",
              },
              {
                name: "Desert Safari with BBQ Dinner",
                duration: "6 hours",
                price: "From AED 200",
                badge: "Essential",
                url: "https://www.getyourguide.com/s/?q=dubai+desert+safari&partner_id=PSZA5UI",
              },
              {
                name: "Old Dubai Heritage Walking Tour",
                duration: "3 hours",
                price: "From AED 120",
                badge: "Cultural",
                url: "https://www.getyourguide.com/s/?q=dubai+old+city+tour&partner_id=PSZA5UI",
              },
              {
                name: "Dubai Marina Yacht Cruise",
                duration: "2 hours",
                price: "From AED 150",
                url: "https://www.getyourguide.com/s/?q=dubai+marina+cruise&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Booking Burj Khalifa at sunset", desc: "Everyone books sunset. Sunrise is half the price, no crowds, and the light is better. The 6am slot is the Dubai hack nobody talks about.", icon: "🌅" },
                { title: "Spending all your time in malls", desc: "Dubai Mall is impressive for 2 hours, not a full day. Old Dubai — the creek, the souks, Al Fahidi — has more character than any shopping centre and costs almost nothing.", icon: "🛒" },
                { title: "Taking taxis everywhere", desc: "The metro covers most tourist areas for AED 3–7.50 per ride. A single taxi ride costs AED 30–60. Over 4 days, that difference adds up to AED 300–500 you could spend on experiences.", icon: "🚕" },
                { title: "Cheap desert safari operators", desc: "AED 50 safari = 15 tourists crammed in a van, aggressive souvenir selling, and questionable safety standards. Pay AED 200+ for a reputable operator with proper vehicles, small groups, and a real sunset experience.", icon: "🏜️" },
                { title: "Visiting in July or August", desc: "45°C+ and 90% humidity. Everything is air-conditioned but walking between places is genuinely miserable. November to March is when Dubai actually works as an outdoor destination.", icon: "☀️" },
                { title: "Ignoring Friday schedules", desc: "Friday is the holy day. Some attractions open late (1–2pm instead of 9am), many restaurants change hours, and the souks have different rhythms. Plan indoor or hotel activities for Friday morning.", icon: "📅" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Dubai</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "📱",
                  title: "Get a Nol Card immediately",
                  desc: "AED 25 (with AED 19 balance). Works on metro, bus, tram, and water bus. Buy at any metro station. Saves AED 1–2 per ride vs single tickets and eliminates queuing. The single best small purchase you make in Dubai.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌟",
                  title: "Free Dubai Fountain hack",
                  desc: "The Dubai Fountain runs every 30 minutes from 6pm — each show uses a different song and choreography. The Souk Al Bahar bridge gives the best free angle. The AED 20 abra boat on the lake puts you directly in front of the water jets. Stay for 2–3 shows.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🍵",
                  title: "SMCCU cultural meals",
                  desc: "The Sheikh Mohammed Centre for Cultural Understanding hosts traditional Emirati meals with Q&A sessions — AED 100 for lunch, AED 80 for breakfast. One of the very few places where tourists actually interact with Emirati locals. Book 2 days ahead. Worth every dirham.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "💳",
                  title: "Tax-free shopping strategy",
                  desc: "No VAT on gold and diamonds in the souks. Electronics are often 10–20% cheaper than Europe or the US. For other purchases, claim the 5% VAT refund at the airport via Planet Tax Free desks. Gold Souk prices are always better than mall gold shops.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🚇",
                  title: "Metro Gold Class for AED 2 extra",
                  desc: "The front cabin of every metro train is Gold Class — guaranteed seats, less crowding, and a panoramic view through the front window. AED 2 extra per ride. During rush hour or if you want the view, it is the best AED 2 you spend all day.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🌙",
                  title: "Ramadan is not a bad time to visit",
                  desc: "During Ramadan, eating and drinking in public during daylight is restricted. But restaurants open after sunset for iftar — a beautiful cultural experience with special menus. Hotel rooms are 30–40% cheaper. If you respect the customs, Ramadan Dubai is fascinating.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Dubai" />

          {/* Combine With */}
          <CombineWith currentSlug="dubai-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days do you need in Dubai?",
                  a: "4 days is ideal to cover Burj Khalifa, Old Dubai and the souks, a desert safari, and the beaches without rushing. 3 days works if you skip the desert safari or compress it. 5+ days lets you add Abu Dhabi as a day trip (90-minute drive) or spend more time at waterparks and the Marina.",
                },
                {
                  q: "How much does a 4-day Dubai trip cost from India?",
                  a: "Budget: AED 1,200–2,000 ($327–$545 USD) for accommodation, food, transport, and activities. Plus flights from India at INR 8,000–15,000 return. Mid-range: AED 3,200–6,000 ($870–$1,635 USD) plus flights INR 15,000–25,000. Dubai is tax-free, so prices you see are what you pay. The biggest cost variable is accommodation — Deira at AED 150/night vs Downtown at AED 500/night makes a huge difference.",
                },
                {
                  q: "Do I need a visa for Dubai?",
                  a: "Indian passport holders: yes, apply online or through airlines (AED 350–500, 3–5 working days). If you hold a valid US, UK, or EU visa or green card, you get a 14-day visa-on-arrival. US, UK, EU, Australian, and Canadian citizens get a free 30-day visa-on-arrival — just show your passport. Passport must be valid for 6+ months.",
                },
                {
                  q: "Is Dubai safe for solo travellers and women?",
                  a: "Extremely safe. Dubai has one of the lowest crime rates in the world. Women can walk alone at night in most areas. The metro has women-and-children-only carriages. Standard common-sense precautions apply, but Dubai is genuinely one of the safest major cities globally.",
                },
                {
                  q: "What is the best time to visit Dubai?",
                  a: "November to March for outdoor comfort — temperatures 20–30°C, perfect for beaches, desert safaris, and walking around. December and January are peak season with the highest prices. November and February offer similar weather at 20–30% lower hotel rates. Avoid May to September unless you want 40–48°C heat.",
                },
                {
                  q: "Is the desert safari worth it?",
                  a: "Yes, but only with a reputable operator. Budget AED 200–350 per person for a proper experience with dune bashing, a sunset stop, and BBQ dinner. The moment when the dunes turn gold at sunset is genuinely one of the most beautiful things you see in the Gulf. Avoid the AED 50 operators — they cram tourists in, skip the best parts, and push aggressive souvenir selling.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto px-6 md:px-8 mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Dubai trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-dubai", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/dubai-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-dubai", label: "How to get there", icon: "✈️" },
                { href: "/blog/dubai-travel-tips", label: "Travel tips", icon: "📋" },
              ].map((item) => (
                <Link key={item.href} href={item.href}
                  className="flex flex-col items-center gap-2 p-4 bg-parchment border border-parchment-2 rounded-xl hover:border-gold hover:shadow-sm transition-all text-center">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium text-ink leading-tight">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Guides */}
          <RelatedGuides currentSlug="dubai-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Middle East Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Abu Dhabi — 3 Day Guide", href: "/blog/abu-dhabi-3-days" },
                { label: "Muscat, Oman — 3 Day Guide", href: "/blog/muscat-3-days" },
                { label: "Browse All Itineraries", href: "/blog" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group"
                >
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
