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
const MUMBAI_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Mumbai Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "3-Day Itinerary" },
  { id: "sights",      emoji: "🏛️", label: "Landmark Guide" },
  { id: "budget",      emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",         emoji: "🍽️", label: "Where to Eat" },
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
          href: `mailto:?subject=Mumbai 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Mumbai in 3 Days — Gateway, Elephanta and the best street food in India&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/mumbai-3-days"
        imageUrl="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=80"
        description="Mumbai in 3 Days: Gateway of India, Elephanta Caves, Dharavi, Marine Drive, local trains and the best street food in India — complete travel guide with budget breakdown."
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
export default function MumbaiClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MUMBAI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Mumbai" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="mumbai marine drive gateway of india skyline arabian sea"
            fallback="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1600&q=80"
            alt="Mumbai Marine Drive at dusk with the Arabian Sea and city skyline glittering behind it"
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
              <span className="text-white/70">Mumbai 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  India&apos;s Maximum City
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Mumbai in 3 Days:
                <em className="italic text-amber-300"> Gateway, Elephanta &amp; the City That Never Sleeps</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Gateway of India, Elephanta Caves, Dharavi, Marine Drive at sunset, local trains, vada pav, and the electric pulse of India&apos;s greatest city. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="13 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇮🇳 Maharashtra, India</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹1,500/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Mumbai at 6am is unlike any city in India — the local trains already thundering with office workers, vada pav vendors lighting their tavas on every footpath corner, fishermen returning to Sassoon Dock, and Marine Drive catching the first Arabian Sea light. Three days won&apos;t exhaust this city, but done right they&apos;ll give you the Gateway, Elephanta, Dharavi, the best street food in the country, and the electric pulse that makes Mumbai the city that never quite sleeps.
            </p>
          </blockquote>

          {/* ── WHAT MUMBAI ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Mumbai Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Mumbai is seven islands stitched into one peninsula by British engineers over two centuries of reclamation — Colaba, Mazagaon, Old Woman&apos;s Island, Wadala, Mahim, Parel, and Matunga. The original fishing villages of the Koli community still exist at Sassoon Dock and Versova. Today it is India&apos;s financial capital, the home of Bollywood, and a city of 21 million people that runs on an extraordinary suburban railway carrying 7.5 million commuters daily.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The architecture tells the story: Gothic-Victorian terminals at Chhatrapati Shivaji Terminus (a UNESCO World Heritage Site), Art Deco apartment blocks along Marine Drive (another UNESCO listing), the Indo-Saracenic Gateway of India, the 6th-century rock-cut Elephanta Caves on an island in the harbour, and the glass towers of Bandra-Kurla Complex rising behind it all. Mumbai is not one city — it is several, layered on top of each other.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Three days gives you the essential Mumbai: the southern heritage district (Colaba, Fort, Marine Drive), the island caves of Elephanta, the organised chaos of Dharavi, and the suburban character of Bandra and Juhu. The street food alone — vada pav, bhel puri, pav bhaji, seekh kebabs — is reason enough to come.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="BOM" />
              <StatCard icon="🌡️" label="Best Season" value="Nov–Feb" />
              <StatCard icon="🚉" label="Local Train" value="₹5–15" />
              <StatCard icon="💰" label="Budget From" value="₹1,500/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Mumbai</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Nov–Feb",
                  i: "☀️",
                  t: "Winter — Best Season",
                  d: "22–32°C, low humidity, virtually no rain. Every attraction open, Elephanta ferries running daily. December–January is ideal — mild temperatures, packed festival calendar with the Kala Ghoda Arts Festival, Banganga Classical Music Festival, and the Mumbai Marathon. This is peak tourist season so book hotels 2–3 weeks ahead.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Mar–May",
                  i: "🔥",
                  t: "Summer — Hot & Humid",
                  d: "30–38°C with rising humidity through May. Manageable in March, increasingly uncomfortable by May. Marine Drive evenings are still pleasant. Indoor attractions (museums, Taj lobby tour) work well. Fewer crowds and lower hotel prices than winter. Avoid the midday heat for walking tours.",
                  b: "Mornings & evenings only",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Sep",
                  i: "🌧️",
                  t: "Monsoon — Intense But Beautiful",
                  d: "2,400mm of rain over 4 months, flooding in low-lying areas like Dadar, Sion, and parts of Kurla. Elephanta ferry services may be suspended on rough-sea days. The city is genuinely beautiful in monsoon — Marine Drive in the rain is cinematic — but plan for major disruptions. Waterproof shoes are essential.",
                  b: "For rain lovers only",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Oct",
                  i: "🌅",
                  t: "Post-Monsoon — Shoulder Season",
                  d: "28–34°C. The rains taper off by early October and the city is freshly washed and green. Fewer tourists than November, good hotel prices. Navratri and Diwali celebrations add colour and festivity. A genuinely underrated time to visit Mumbai.",
                  b: "Good value",
                  c: "bg-orange-50 border-orange-200",
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

          {/* ── HOW TO REACH ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Mumbai</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Chhatrapati Shivaji Maharaj International Airport (BOM) has two terminals — <strong className="font-medium">T1 (domestic)</strong> and <strong className="font-medium">T2 (international + some domestic IndiGo/Air India)</strong>. Always check your terminal before heading to the airport. The terminals are 5km apart and not connected by foot.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly into BOM (recommended)",
                  d: "IndiGo, Air India Express, SpiceJet, and Akasa Air serve BOM from every major Indian city. Book 3–6 weeks ahead for fares under ₹3,000 from Delhi, Bangalore, Hyderabad, or Kolkata. International flights connect via T2 from Dubai, Singapore, London, and New York. From BOM to Colaba: Ola/Uber ₹350–550 (T1) or ₹550–800 (T2), 45–75 minutes depending on traffic.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚂",
                  t: "Train to Mumbai CST / Mumbai Central",
                  d: "Central Railway trains terminate at Chhatrapati Shivaji Terminus (CST) in the heart of Fort — walkable to Colaba and the Gateway of India. Western Railway trains arrive at Mumbai Central. The Rajdhani Express from Delhi (16 hrs, ₹1,800–₹4,000), Duronto from Bangalore (24 hrs), and Deccan Queen from Pune (3.5 hrs, ₹150–₹350) are all excellent options. Book on IRCTC 60–120 days in advance.",
                  b: "For domestic travel",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Bus from Pune / Goa / Nashik",
                  d: "MSRTC Shivneri AC buses from Pune: 3.5–4 hrs, ₹400–₹600. Private Volvo buses from Goa: 10–12 hrs, ₹800–₹1,500 (overnight options available). From Nashik: 4 hrs, ₹300–₹500. All terminate at Mumbai Central or Dadar bus depots. Ola/Uber to Colaba from there is ₹150–₹300.",
                  b: "From nearby cities",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Drive from Pune / Lonavala",
                  d: "Mumbai–Pune Expressway: 150km, 2.5–3 hrs (toll ₹295). The highway is excellent. Lonavala is halfway and makes a good stop. Parking in South Mumbai is expensive and difficult — if driving, park at your hotel and use Ola/Uber or local trains to get around.",
                  b: "Flexible",
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

          {/* ── 3-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Mumbai Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary covers South Mumbai&apos;s heritage district, Elephanta Island, Dharavi, and the suburban highlights of Bandra and Juhu — with the best street food at every stop.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Gateway of India · Colaba · Marine Drive · Chowpatty"
                cost="₹800–₹1,200"
                items={[
                  "7:30am — Start at Gateway of India before the tour boats arrive and the selfie crowds gather. The basalt arch frames the harbour beautifully at sunrise. Entry is free. Stand on the waterfront and watch the ferries leave for Elephanta.",
                  "8:30am — Breakfast at Cafe Mondegar (Metro House, Colaba Causeway) — keema pav ₹110, masala chai ₹40. A Mumbai institution since 1932 with murals by Mario Miranda covering every wall.",
                  "10:00am — Walk Colaba Causeway for books, antiques, and silver jewellery. Bargain firmly — open at 50% of the first price. The Strand Book Stall (PM Road, Fort) is nearby and sells discounted originals.",
                  "12:00pm — Vada pav at Ashok Vada Pav, junction of SV Patel Road near Kirti College — ₹20 per piece, widely considered the benchmark. Two pieces and a cutting chai (₹15 at the tapri next door) is a complete Mumbai lunch.",
                  "1:30pm — Walk or take a BEST bus (₹9–15) to Marine Drive. The Art Deco buildings lining the curve are a UNESCO World Heritage Site. Walk the full 3.6km promenade from Nariman Point to Chowpatty Beach.",
                  "4:00pm — Bhel puri and sev puri at Chowpatty Beach from the stalls near the central section — ₹40–60 per plate. Sit facing the sea.",
                  "7:00pm — Marine Drive at dusk: the Queen&apos;s Necklace city lights stretch along the arc. Best viewed from the steps between the two signal bridges. Free, and genuinely one of India&apos;s most beautiful urban views.",
                  "8:30pm — Dinner at Olympia Coffee House, Colaba — mutton kheema ₹180, brain masala ₹220. Cash only. A colonial-era Irani cafe that hasn&apos;t changed its menu in 50 years.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Elephanta Caves · Dharavi · Bandra Waterfront"
                cost="₹1,200–₹1,800"
                items={[
                  "7:30am — Reach Gateway of India by 8am. Boat to Elephanta Island departs every 30 minutes from 9am (MTDC launches, ₹230 return, 1 hour journey). Buy tickets at the MTDC counter near the Gateway — no advance booking needed on weekdays but arrive early on weekends.",
                  "9:00am — Elephanta Caves: ₹40 for Indians, ₹600 for foreigners. The main cave&apos;s Trimurti sculpture — Shiva as Creator, Preserver, and Destroyer — is a 6-metre masterpiece of 6th-century rock-cut artistry. Budget 2 hours for the island. The ferry ride includes a ₹200 ferry tax.",
                  "11:30am — Return boat to Gateway. Grab a fresh sugarcane juice (₹30) from the vendor near Sassoon Dock road.",
                  "1:00pm — Dharavi walking tour with Reality Tours &amp; Travel (₹600–1,000 per person, book online at realitytoursandtravel.com). 2-hour walk through Asia&apos;s largest informal economy — recycling district, pottery village, leather workshops, bakeries. No photography inside the residential section — respect the rule.",
                  "3:30pm — Exit Dharavi near Mahim. BEST bus or rickshaw to Bandra West (₹25–60). Carter Road waterfront and the Bandra-Worli Sea Link view from Castella de Aguada — the bridge lit at evening is exceptional.",
                  "6:00pm — Street food on Hill Road, Bandra: pav bhaji at Sardar Refreshments (Tardeo) — ₹80 for a full plate with two pavs.",
                  "8:00pm — Dinner at Lucky Restaurant, Bandra West (Turner Road) — nihari ₹220, phirni ₹80, roomali roti ₹25. Open until midnight.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Crawford Market · CST · Dhobi Ghat · Juhu Beach"
                cost="₹900–₹1,400"
                items={[
                  "6:30am — Juhu Beach at sunrise before the crowds. Walk from the Juhu Hotel end toward JVPD. Bhel puri and corn carts set up by 7am — ₹50 per plate.",
                  "8:30am — Mumbai local train experience: board at Vile Parle station (Western Line, heading south toward Churchgate). Trains every 3–5 minutes, ₹5–15 per journey. Travel in the general coach to experience the rush — or ladies&apos; compartment for solo women. This is Mumbai&apos;s real circulatory system.",
                  "9:30am — Churchgate Station to Crawford Market (Mahatma Phule Market). Fruit wholesale, pet section, spice traders. The British-era building with Lockwood Kipling friezes is worth seeing even if you don&apos;t buy anything.",
                  "11:00am — Dhobi Ghat (Mahalakshmi Dhobi Ghat) — the world&apos;s largest open-air laundry. Best viewed from the bridge on Dr E Moses Road (free, no entry required). 800 dhobi families wash 900,000 garments daily here. The colour and choreography of the washing rows is remarkable at morning light.",
                  "1:00pm — Lunch at Britannia &amp; Co., Ballard Estate — berry pulao ₹320, chicken dhansak ₹280. One of the last remaining Irani Parsi restaurants in the city. Closed Sundays.",
                  "3:00pm — CST (Chhatrapati Shivaji Maharaj Terminus) exterior — the Gothic-Victorian-Indian fusion UNESCO World Heritage building. Free to photograph from the street. The interior platforms are accessible with a platform ticket (₹10).",
                  "5:00pm — Versova Beach via auto from Andheri (₹80–100). The fishing village end of Versova is one of Mumbai&apos;s genuinely unspoiled corners. Sit at the chai tapri at the fishing colony gate until sunset.",
                  "7:30pm — Final dinner at Bademiya, Colaba back lane — seekh kebabs ₹180–220 per skewer, chicken tikka roll ₹120. Open-air seating behind the Taj. The original Mumbai late-night street food institution.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Mumbai" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="sights" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sights in order of priority. Entry fees as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Gateway of India",
                  e: "Free",
                  d: "The 26-metre basalt arch built in 1924 to commemorate King George V&apos;s visit to India. It overlooks the Arabian Sea harbour and is the departure point for Elephanta Island ferries. Best at sunrise before the crowds arrive. The Taj Mahal Palace Hotel frames it from behind — one of India&apos;s most iconic urban views.",
                  t: "Must see · 30–45 mins",
                },
                {
                  n: "Elephanta Caves",
                  e: "₹40 (Indians) / ₹600 (foreigners) + ₹200 ferry",
                  d: "UNESCO World Heritage Site on Elephanta Island, a 1-hour ferry ride from the Gateway. The 6th-century rock-cut caves contain the extraordinary Trimurti sculpture — a 6-metre three-headed Shiva — and some of the finest Hindu cave art in India. Budget 2–3 hours including the ferry and island walk.",
                  t: "Must see · Half day",
                },
                {
                  n: "Chhatrapati Shivaji Terminus (CST)",
                  e: "Free (exterior)",
                  d: "A UNESCO World Heritage Site and Mumbai&apos;s most architecturally significant building. The Gothic-Victorian structure with Indian detailing was completed in 1888 and remains a functioning railway terminus. The exterior is free to photograph; interior platforms accessible with a ₹10 platform ticket.",
                  t: "Must see · 30 mins",
                },
                {
                  n: "Marine Drive (Queen&apos;s Necklace)",
                  e: "Free",
                  d: "A 3.6km promenade curving along the Arabian Sea from Nariman Point to Chowpatty Beach. The Art Deco buildings along the drive are a UNESCO World Heritage listing. Walk the full stretch at sunset and watch the city lights form the necklace curve. Best experienced on foot.",
                  t: "Must see · 1–2 hrs",
                },
                {
                  n: "Dharavi",
                  e: "₹600–1,000 (guided tour)",
                  d: "Asia&apos;s largest informal economy — 700,000+ residents, recycling industries processing 80% of Mumbai&apos;s plastic, pottery villages, leather workshops, and bakeries. Visit only with a responsible tour operator like Reality Tours &amp; Travel. Photography restricted to industrial zones. Context-setting, not poverty tourism.",
                  t: "Guided only · 2–3 hrs",
                },
                {
                  n: "Dhobi Ghat",
                  e: "Free",
                  d: "The world&apos;s largest open-air laundry at Mahalakshmi. 800 dhobi families wash 900,000 garments daily in concrete wash pens. Best viewed from the bridge on Dr E Moses Road. The morning light between 8–9am creates remarkable colour patterns across the washing rows.",
                  t: "Free · 30 mins",
                },
                {
                  n: "Colaba Causeway",
                  e: "Free",
                  d: "Mumbai&apos;s most famous shopping street — books, antiques, silver jewellery, leather goods, and street stalls. Bargain firmly. The parallel lanes hold Leopold Cafe, Cafe Mondegar, and Olympia Coffee House — three of Mumbai&apos;s most storied restaurants.",
                  t: "Shopping · 1–2 hrs",
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
            title="Mumbai — Gateway, Sea &amp; Street Life"
            subtitle="India&apos;s maximum city in five frames."
            spots={[
              {
                name: "Gateway of India",
                query: "gateway of india mumbai harbour arabian sea monument",
                desc: "The 26-metre basalt arch overlooking Mumbai harbour — the city&apos;s most iconic landmark and departure point for Elephanta.",
              },
              {
                name: "Marine Drive at Dusk",
                query: "marine drive mumbai queens necklace night lights arabian sea",
                desc: "The Queen&apos;s Necklace — Marine Drive&apos;s curved promenade lit up at dusk, one of India&apos;s most beautiful urban views.",
              },
              {
                name: "Elephanta Caves Trimurti",
                query: "elephanta caves trimurti shiva sculpture mumbai island",
                desc: "The 6-metre three-headed Shiva in the main cave — a 6th-century masterpiece of Indian rock-cut sculpture.",
              },
              {
                name: "Mumbai Local Train",
                query: "mumbai local train suburban railway crowd commuters",
                desc: "Mumbai&apos;s suburban railway — 7.5 million passengers daily on the circulatory system that keeps the city running.",
              },
              {
                name: "Dhobi Ghat Laundry",
                query: "dhobi ghat mumbai open air laundry mahalakshmi colourful",
                desc: "The world&apos;s largest open-air laundry — 800 families washing 900,000 garments daily in a choreography of colour.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Mumbai spans every price point from ₹20 vada pavs to ₹45,000/night heritage suites. The city is excellent value at the budget and mid-range levels — street food is world-class, local trains cost almost nothing, and many major sights are free.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation", "₹600–1,200", "₹3,500–6,500", "₹18,000–45,000"],
                    ["🍽 Food", "₹300–600", "₹800–2,000", "₹3,000–8,000"],
                    ["🚉 Transport", "₹100–200", "₹400–800", "₹1,500–4,000"],
                    ["🏛️ Activities", "₹300–700", "₹500–1,200", "₹2,000–8,000"],
                    ["TOTAL (per day)", "₹1,300–2,700", "₹5,200–10,500", "₹24,500–65,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (₹1,500–2,500/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in Colaba hostels (₹600–1,200/dorm or basic double), eat street food and at Irani cafes, use local trains and BEST buses. Mumbai&apos;s budget infrastructure is excellent — you eat better at ₹200 on the street than at ₹800 in a tourist restaurant.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">✨ Mid-Range (₹4,000–8,000/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay in Colaba or Bandra boutique hotels (₹3,500–6,500/night). Mix street food with sit-down restaurants like Trishna and The Bombay Canteen. Use Ola/Uber for comfort. The sweet spot for experiencing Mumbai without compromise.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (₹15,000+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Taj Mahal Palace Heritage Wing, The Oberoi Mumbai, or Four Seasons Worli. Private transfers, fine dining at Wasabi and Aer, sunset cruises. Mumbai&apos;s luxury hospitality rivals any city in Asia.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Mumbai</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Colaba is the best base for first-time visitors — walking distance to the Gateway, Taj, Colaba Causeway, and the Fort heritage district. Bandra West is better for nightlife and restaurants. Avoid staying in Andheri East or Goregaon unless you have business near BKC.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Taj Mahal Palace",
                  type: "Iconic luxury · Heritage Wing · Colaba",
                  price: "From ₹25,000/night",
                  badge: "Most iconic",
                  desc: "India&apos;s most storied hotel — the Heritage Wing sea-view rooms look directly at the Gateway of India and the Arabian Sea. Survived the 26/11 attacks and still carries the most prestigious address in Indian hospitality. The lobby, Sea Lounge, and Harbour Bar are open to non-guests.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "The Oberoi Mumbai",
                  type: "5-star luxury · Marine Drive · Nariman Point",
                  price: "From ₹18,000/night",
                  badge: "Best views",
                  desc: "Directly on Marine Drive with floor-to-ceiling Arabian Sea views. The rooms are newer and more modern than the Taj — some visitors prefer the Oberoi&apos;s understated elegance. Ziya restaurant and the rooftop pool are exceptional. Walking distance to Chowpatty and the Marine Drive promenade.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Abode Bombay",
                  type: "Boutique heritage · Colaba",
                  price: "From ₹5,000/night",
                  badge: "Best boutique",
                  desc: "A beautifully restored heritage building in the heart of Colaba with just 20 individually designed rooms. Walking distance to the Gateway, Leopold Cafe, and Colaba Causeway. The rooftop terrace has one of the best neighbourhood views in South Mumbai. Breakfast included.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Backpacker Panda Hostel",
                  type: "Budget hostel · Colaba",
                  price: "From ₹600/dorm",
                  badge: "Best budget",
                  desc: "Clean, well-managed hostel in the heart of Colaba. Mixed and female-only dorms with lockers, common area, and helpful staff. Walking distance to all South Mumbai landmarks. The best budget option in the tourist district.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Mumbai</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Mumbai has the best street food in India — this is not a matter of opinion, it&apos;s a census. The Irani cafes, Parsi restaurants, seafood joints, and kebab stalls of Colaba, Fort, and Bandra are collectively unmatched anywhere in the country.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Leopold Cafe",
                  t: "Iconic landmark · Colaba Causeway",
                  d: "A Mumbai institution since 1871 — the bullet holes from the 26/11 attacks are preserved in the walls. Chicken stroganoff ₹380, cold coffee ₹150, beer from ₹250. The atmosphere and history are the draw. Gets loud and packed by 8pm — arrive early for a quieter meal.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Britannia & Co.",
                  t: "Irani Parsi · Ballard Estate, Fort",
                  d: "The last remaining Irani Parsi restaurant in the city. Berry pulao ₹320 — Parsi rice with dried barberries and saffron, served with a fiercely spiced dhansak or salli boti. Chicken dhansak ₹280. Run by the legendary Boman Kohinoor. Closed Sundays. Cash and UPI only.",
                  b: "Iconic",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Bademiya",
                  t: "Late-night kebabs · Colaba back lane",
                  d: "The original Mumbai late-night street food institution — seekh kebabs ₹180–220 per skewer, chicken tikka roll ₹120, baida roti ₹100. Open-air seating on fold-out tables behind the Taj Mahal Palace. Opens at 7pm, best after 10pm. Cash only.",
                  b: "Best kebabs",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Olympia Coffee House",
                  t: "Irani cafe · Colaba",
                  d: "A colonial-era Irani cafe that hasn&apos;t changed its menu or decor in 50 years. Mutton kheema ₹180, brain masala ₹220, bun maska ₹30 with Irani chai ₹25. Cash only. The marble tables and ceiling fans are a time capsule. Breakfast here is essential Mumbai.",
                  b: "Breakfast essential",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Ashok Vada Pav",
                  t: "Street food · Kirti College, Dadar",
                  d: "Widely considered Mumbai&apos;s benchmark vada pav — ₹20 per piece. Spiced potato dumpling in gram flour batter, stuffed into a soft pav with dry garlic chutney and fried chilli. Two vada pavs and a cutting chai from the tapri next door is the complete Mumbai street lunch. Don&apos;t pay more than ₹30 for a street vada pav anywhere.",
                  b: "Best vada pav",
                  c: "bg-parchment border-parchment-2",
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
            destination="Mumbai Maharashtra"
            hotels={[
              {
                name: "Taj Mahal Palace",
                type: "Iconic heritage luxury · Colaba waterfront",
                price: "From ₹25,000/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/in/taj-mahal-palace-tower-mumbai.html?aid=2820480",
              },
              {
                name: "The Oberoi Mumbai",
                type: "5-star luxury · Marine Drive",
                price: "From ₹18,000/night",
                rating: "5",
                badge: "Best views",
                url: "https://www.booking.com/hotel/in/the-oberoi-mumbai.html?aid=2820480",
              },
              {
                name: "Abode Bombay",
                type: "Boutique heritage · Colaba",
                price: "From ₹5,000/night",
                rating: "4",
                badge: "Best boutique",
                url: "https://www.booking.com/hotel/in/abode-bombay.html?aid=2820480",
              },
              {
                name: "Treebo Trend Amber",
                type: "Budget hotel · Colaba area",
                price: "From ₹2,000/night",
                rating: "3",
                badge: "Best value",
                url: "https://www.booking.com/hotel/in/treebo-trend-amber-mumbai.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Elephanta Caves Guided Tour",
                duration: "5 hrs",
                price: "From ₹1,200/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=elephanta+caves+mumbai+tour&partner_id=PSZA5UI",
              },
              {
                name: "Dharavi Walking Tour",
                duration: "2.5 hrs",
                price: "From ₹600/person",
                badge: "Eye-opening",
                url: "https://www.getyourguide.com/s/?q=dharavi+tour+mumbai&partner_id=PSZA5UI",
              },
              {
                name: "Mumbai Street Food Tour",
                duration: "3 hrs",
                price: "From ₹1,500/person",
                url: "https://www.getyourguide.com/s/?q=mumbai+street+food+tour&partner_id=PSZA5UI",
              },
              {
                name: "Mumbai Heritage Walking Tour",
                duration: "3 hrs",
                price: "From ₹800/person",
                url: "https://www.getyourguide.com/s/?q=mumbai+heritage+walking+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Mumbai</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🚉",
                  title: "Get a Mumbai Local Train Tourist Pass",
                  desc: "A 1-day unlimited local train pass costs ₹85 (AC) or ₹35 (non-AC) and covers the entire Central, Western, and Harbour rail network. Mumbai&apos;s suburban rail carries 7.5 million passengers daily — it&apos;s the fastest way between Churchgate, Dadar, Bandra, Andheri, and CST. Buy at any major suburban station booking window.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🥙",
                  title: "Best Street Food Zones By Neighbourhood",
                  desc: "Chowpatty Beach for bhel puri and kulfi. Colaba back lanes for kebabs after 8pm. Juhu Beach for sev puri and dahi puri. Mohammed Ali Road during Ramzan for nihari and sheer khurma. Dadar&apos;s Hindu Colony for sabudana khichdi and misal pav. Tardeo&apos;s Sardar Refreshments for the pav bhaji Mumbai invented.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🚕",
                  title: "Use Ola/Uber Over Autos at Night",
                  desc: "After 11pm, finding autos willing to use the meter is nearly impossible — especially in South Mumbai and Andheri. Ola and Uber are consistently available at fixed prices and drivers are GPS-tracked. The Mumbai Metro (Lines 1, 2A, 7) connects Versova–Andheri–Dahisar for ₹10–50 per journey — excellent for the western suburbs.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "⏰",
                  title: "Beat the Monsoon and Peak Season with Timing",
                  desc: "November to February is peak season — 22–30°C, no rain, every attraction open. The best window is December–January when the Kala Ghoda Arts Festival and Banganga Festival run. Avoid May–June (extreme humidity, 35–39°C). March and October are good shoulder months with fewer crowds and lower prices.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🏝️",
                  title: "Don&apos;t Skip Elephanta for the Queue",
                  desc: "The Gateway of India ferry queue looks daunting on weekends, but moves fast — rarely more than 20 minutes. Elephanta Caves are a UNESCO World Heritage Site with carvings that took hundreds of artisans decades to complete. Go on a Tuesday or Wednesday morning to avoid the crowd entirely.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🍛",
                  title: "Avoid Restaurants Near Tourist Landmarks",
                  desc: "The restaurants immediately around the Gateway of India serve overpriced, mediocre food aimed at tourists. Walk two minutes to Colaba Causeway (Leopold Cafe, Olympia Coffee House, Bademiya) or five minutes to the Irani cafes in Fort. The price difference is 60–70% and the quality gap is just as dramatic.",
                  color: "bg-teal-50 border-teal-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Mumbai" />

          {/* Combine With */}
          <CombineWith currentSlug="mumbai-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How do I get from BOM airport to South Mumbai?",
                  a: "The best options: (1) Ola/Uber — ₹350–550 from T1 (domestic), ₹550–800 from T2 (international) to Colaba, 45–75 minutes depending on traffic. (2) MERU cabs from the airport taxi stand — metered, ₹450–700. (3) Local train: auto to Vile Parle station (₹60–80), then Western Line to Churchgate (₹15, 45 minutes). The train is the fastest option in rush hour. No metro yet connects the airport to South Mumbai directly.",
                },
                {
                  q: "Is Mumbai safe for solo travellers and women?",
                  a: "Mumbai is India\u0027s safest major city by most crime metrics. Colaba, Fort, Bandra, and Juhu are all comfortable for solo women at night. Avoid poorly lit alleys near the waterfront past Nariman Point after midnight. The local train ladies\u0027 compartment (marked with a pink stripe) is mandatory for women during peak hours and strongly recommended otherwise. Ola/Uber are safer than autos for lone women after 10pm.",
                },
                {
                  q: "What is the best area to stay in Mumbai?",
                  a: "Budget: Colaba for proximity to landmarks (Backpacker Panda from ₹600/dorm). Mid-range: Bandra West for restaurants and nightlife (₹3,500–5,000). Luxury: Colaba for the Taj Mahal Palace (₹25,000+) or Worli for the Four Seasons (₹18,000+) with sea link views. Avoid Andheri East or Goregaon unless you have business near BKC.",
                },
                {
                  q: "What is a vada pav and where is the best one?",
                  a: "Vada pav is Mumbai\u0027s defining street food — a spiced potato dumpling deep-fried in gram flour batter, stuffed into a soft white bun with dry garlic chutney, green chutney, and fried chilli. It costs ₹15–25 everywhere. Top vendors: Ashok Vada Pav (SV Patel Road, Dadar West), Shivaji Park Vada Pav, and the nameless stall outside Andheri station\u0027s east exit. Never pay more than ₹30 for a street vada pav.",
                },
                {
                  q: "Can I visit Dharavi independently or do I need a tour?",
                  a: "Dharavi is a functioning residential and industrial neighbourhood of 700,000+ people — not a museum. Independent visits without context often result in disrespectful photography or getting lost. Reality Tours & Travel (realitytoursandtravel.com, ₹600–1,000/person) runs responsible tours with local guides and donates a portion to community programs. Photography is restricted to industrial zones. This is the right way to visit.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Mumbai trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/mumbai-3-days/best-time", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/mumbai-3-days/couples-guide", label: "Couples guide", icon: "💑" },
                { href: "/blog/mumbai-3-days/packing-list", label: "Packing list", icon: "🧳" },
                { href: "/blog/mumbai-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="mumbai-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More India Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Goa in 3 Days — Beaches &amp; Culture", href: "/blog/goa-3-days" },
                { label: "Jaipur in 3 Days — Pink City", href: "/blog/jaipur-3-days" },
                { label: "Delhi in 3 Days — Mughal &amp; Modern", href: "/blog/delhi-3-days" },
                { label: "Hyderabad in 3 Days — Nizami Heritage", href: "/blog/hyderabad-3-days" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group"
                >
                  <span
                    className="text-sm text-ink font-light group-hover:text-teal transition-colors"
                    dangerouslySetInnerHTML={{ __html: link.label }}
                  />
                  <span className="text-xs text-muted">Read →</span>
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
