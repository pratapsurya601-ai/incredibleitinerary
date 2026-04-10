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
const HALONGBAY_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Ha Long Bay Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "🚌",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",  emoji: "🏝️", label: "Landmark Guide" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",       emoji: "🛳️", label: "Where to Stay" },
  { id: "eat",        emoji: "🍽️", label: "Where to Eat" },
  { id: "tips",       emoji: "💡",  label: "Pro Tips" },
  { id: "faq",        emoji: "❓",  label: "FAQ" },
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
        className="h-full bg-teal-600 transition-all duration-100"
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
          href: `mailto:?subject=Ha Long Bay 3-Day Cruise Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Ha Long Bay in 3 Days — 1,600 limestone islands, overnight cruise, squid fishing at midnight&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/ha-long-bay-3-days"
        imageUrl="https://images.unsplash.com/photo-1573270689103-d7a4e42b609a?w=1200&q=80"
        description="Ha Long Bay in 3 Days: overnight junk cruise, kayaking through caves, Ti Top Island, squid fishing at midnight — complete guide with real prices and cruise reviews."
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
          <span className="font-serif text-xl text-teal-900 font-light">{day}</span>
          <span className="text-sm text-ink font-medium">{title}</span>
        </div>
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-teal-500 mt-1 flex-shrink-0 text-xs">●</span>
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
        <span className={`text-teal-600 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
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
export default function HaLongBayClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={HALONGBAY_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Ha Long Bay" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="ha long bay limestone karsts emerald water vietnam cruise junk boat"
            fallback="https://images.unsplash.com/photo-1573270689103-d7a4e42b609a?w=1600&q=80"
            alt="Ha Long Bay limestone karsts emerging from emerald water Vietnam"
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
              <span className="text-white/70">Ha Long Bay 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-teal-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Ha Long Bay in 3 Days:
                <em className="italic text-teal-300"> Cruise Guide, Hidden Caves &amp; Lan Ha Bay</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                1,600 limestone islands rising from emerald water — kayak through hidden lagoons at dawn, sleep on a wooden junk boat, wake to fishing boats at 5am, and find the cave that day-trippers never reach.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="11 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇻🇳 Vietnam</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From $80 total</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-teal-500 pl-6 mb-10 bg-teal-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Ha Long Bay is what happens when geology becomes art — 1,600 limestone karst islands jutting from the Gulf of Tonkin, draped in jungle, riddled with caves the size of cathedrals, with a floating fishing community that has lived on the water for generations. The day-trip crowds miss all of it.
            </p>
          </blockquote>

          {/* ── WHAT HA LONG BAY ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Ha Long Bay Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Ha Long Bay is a UNESCO World Heritage Site in the Gulf of Tonkin, northeastern Vietnam, covering approximately 1,553 square kilometres. The bay contains an estimated 1,969 islands and islets — of which 1,600 are named — formed over 500 million years of tectonic activity and erosion. The limestone karsts rise sheer from the water, some to heights of over 100 metres, covered in subtropical vegetation and perforated by hundreds of sea caves formed by wave and freshwater erosion.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The bay is divided into three zones. The tourist zone — the most-visited area centred around Tuan Chau Harbour — receives over 3 million visitors per year. Bai Tu Long Bay, to the northeast, is part of the same geological formation but receives a fraction of the traffic. Lan Ha Bay, adjacent to Cat Ba Island, is technically a separate bay but shares the same karst geology and is significantly less crowded — the secret the tour operators rarely lead with.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              What you need to know before booking: a 1-day tour of Ha Long Bay is essentially a bus trip. The magic — the mist at dawn between the karsts, squid fishing off the deck at midnight, the silence of a floating fishing village at 6am — happens over 2 or 3 nights on the water. Every experienced Vietnam traveller gives the same advice: book at least 2 nights. We agree completely.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Nearest Airport" value="Hanoi HAN" />
              <StatCard icon="🌡️" label="Best Months" value="Mar–May, Sep–Nov" />
              <StatCard icon="🏝️" label="Islands" value="1,969" />
              <StatCard icon="💰" label="Budget From" value="$80 total" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Ha Long Bay</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Mar–May",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "18–25°C, calm seas, low rainfall. The mist that Ha Long Bay is famous for is most likely in March and April — those poster-shot conditions of islands floating in fog happen most reliably in spring. Visibility is good, jellyfish season hasn't started, and prices are lower than peak summer.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Nov",
                  i: "🍂",
                  t: "Autumn — Excellent",
                  d: "22–28°C, calming seas after typhoon season. September can still see occasional storms but by October the bay is typically calm and clear. October and November are arguably the best months overall — warm, clear water, fewer crowds than summer, and the karsts glow gold in the afternoon light.",
                  b: "Excellent",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Aug",
                  i: "☀️",
                  t: "Summer — Peak & Hot",
                  d: "28–35°C, peak domestic and international tourism. The bay is at maximum capacity June–August. Higher prices, more boats, and jellyfish are occasionally present. The weather is mostly sunny but typhoon risk increases from July. If you must visit in summer, book well in advance and look at Lan Ha Bay or Bai Tu Long Bay for a quieter experience.",
                  b: "Busy season",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec–Feb",
                  i: "🌫️",
                  t: "Winter — Cool & Moody",
                  d: "15–20°C. January and February bring cool, drizzly weather with a persistent sea mist that creates atmospheric but overcast conditions. Some travellers love the moody winter light; others find it too grey. Prices drop significantly and crowds thin out. Wear layers — evenings on the water can be cold.",
                  b: "Low crowds, cooler",
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

          {/* ── HOW TO REACH ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚌 Getting to Ha Long Bay</h2>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-teal-800 font-light">
                <strong className="font-medium">Key detail:</strong> All Ha Long Bay cruises depart from <strong className="font-medium">Tuan Chau Harbour</strong> (Ha Long City) or, for Lan Ha Bay tours, from <strong className="font-medium">Tuan Chau Harbour or Cat Ba Island</strong>. Almost every cruise operator includes a Hanoi hotel pickup in the package price — this is the easiest and most common way to get there.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚌",
                  t: "Cruise transfer — Hanoi pickup (recommended)",
                  d: "95% of travellers use this. Your cruise company picks you up from your Hanoi hotel at 7:30–8:00am, drives 170km to Tuan Chau Harbour (3.5 hrs), then transfers you to the boat. Return transfer to Hanoi is included. Cost: included in cruise price. Zero organisation required.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "Limousine bus — Hanoi to Ha Long City",
                  d: "Hanoi Old Quarter or Hanoi station → Ha Long City: VND 150,000–200,000 (~$6–8), 3.5 hrs. Several operators run direct 16-seat limousine buses with no intermediate stops. Greenbay Limousine and Duc Duong are reliable. Best if you want to arrive independently or have booked a cruise from Ha Long directly.",
                  b: "Independent option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Public bus from Hanoi — Gia Lam or My Dinh",
                  d: "Buses from Hanoi Gia Lam station or My Dinh bus station to Ha Long City: VND 100,000–120,000 (~$4–5), 4–5 hrs (can take longer with stops). Cheapest option but slower and less comfortable. Take a taxi from Ha Long bus station to Tuan Chau Harbour (VND 100,000–150,000).",
                  b: "Budget option",
                  c: "bg-parchment border-parchment-2",
                },
                {
                  i: "✈️",
                  t: "Seaplane from Hanoi (luxury)",
                  d: "Vietnam Airlines operates a seaplane from Noi Bai Airport to Ha Long Bay — 45 minutes vs 3.5 hours by road. Spectacular approach over the karsts. Approximately $150–200 per person one way. Worth it for a once-in-a-lifetime luxury trip; overkill for most travellers.",
                  b: "Luxury option",
                  c: "bg-purple-50 border-purple-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Ha Long Bay 3-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. Three budget tiers are shown: budget (VND 2.5M / $100 for 2 nights), mid-range (VND 4.5M / $180), and luxury (VND 8M+ / $320+). All prices are per person unless stated.
            </p>
            <div className="space-y-4">

              {/* ── BUDGET PLAN ── */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-2">
                <p className="font-medium text-sm text-green-800">💰 Budget Plan — VND 2,500,000 / ~$100 for 2 nights all-in</p>
                <p className="text-xs text-green-700 font-light mt-1">Recommended boats: Bhaya Classic, Starlight Cruise, Paloma Cruise. Shared cabin, buffet meals included, kayaking and cave tour included.</p>
              </div>
              <DayCard
                day="Day 1"
                title="Hanoi Pickup → Tuan Chau Harbour → Sail → Sung Sot Cave → Kayaking → Squid Fishing"
                cost="Included in 2-night cruise (VND 2,500,000 / ~$100)"
                items={[
                  "7:30am — Pickup from Hanoi hotel. Transfer to Tuan Chau Harbour (3.5 hrs). Most budget boats include this in the package price.",
                  "11:30am — Board the junk boat. Welcome drink and cabin allocation. Lunch is served as the boat sets sail into the bay — the first view of the karsts from the water is genuinely stunning.",
                  "1:30pm — Orientation from the cruise guide. The boat moves deeper into the bay away from the harbour crowds.",
                  "2:30pm — Sung Sot Cave (Surprise Cave or Amazing Cave) — the largest cave in Ha Long Bay at 10,000 square metres across two chambers. The stalactites and stalagmites have been forming for 500 million years. Entry fee (VND 150,000 / ~$6) is usually included in the cruise.",
                  "4:00pm — Kayaking through limestone arches and into a hidden lagoon only accessible at low tide. This is the highlight for most travellers — paddling in emerald water with karst walls on every side. Most budget boats include 1–2 hours of kayaking per day.",
                  "6:00pm — Swimming stop at Ti Top Island or a sheltered bay. Ti Top Island has a beach (VND 50,000 entry) and 400 steps to a viewpoint with one of the best panoramas in the bay.",
                  "7:30pm — Dinner on the boat. Most budget cruises serve a generous multi-dish Vietnamese seafood dinner.",
                  "9:00pm — Squid fishing off the deck. Crew provides rods and lights. You catch them, they cook them. Genuinely effective and excellent fun.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Sunrise Deck → Pearl Farm → Floating Village → Return to Harbour"
                cost="Included in cruise"
                items={[
                  "5:30am — Set an alarm. The bay at dawn, when mist hangs between the karsts and the fishing boats are already moving, is the image Vietnam Tourism has used for decades. It lasts 45 minutes. Sleep through it and you will regret it.",
                  "7:00am — Tai chi session on the sundeck offered by most boats. Even if you skip it, being on deck at sunrise with coffee is the right call.",
                  "8:00am — Breakfast. The boat moves to a different cluster of islands, away from where you spent the night.",
                  "9:30am — Pearl farm visit (VND 0 — usually included). See how Akoya pearls are cultivated in the bay — the pearl industry here is one of Vietnam&apos;s most significant. The on-board shop is optional.",
                  "11:00am — Bamboo boat or kayak through a floating fishing village. These communities — with around 1,600 people — live entirely on the water, in houses on floating platforms. Schools, shops, and even a small football pitch all float. The atmosphere at mid-morning, before day-trip boats arrive, is extraordinary.",
                  "1:00pm — Lunch. Checkout from your cabin but the boat continues sailing.",
                  "3:00pm — Return to Tuan Chau Harbour. Transfer bus back to Hanoi (3.5 hrs).",
                  "7:00pm — Arrive Hanoi.",
                ]}
              />
              <DayCard
                day="Day 3 Option"
                title="Lan Ha Bay Extension (Cat Ba Island)"
                cost="VND 750,000–1,250,000 (~$30–50) extra for 3-night vs 2-night cruise"
                items={[
                  "For a third night: upgrade to a 3-night cruise that routes through Lan Ha Bay, adjacent to Cat Ba Island. This extension adds significant value.",
                  "Lan Ha Bay has 139 islands vs Ha Long&apos;s 1,969 but receives a tiny fraction of the visitors. The water is often clearer and the landscape is equally spectacular.",
                  "Activities in Lan Ha Bay: hidden beach kayaking, cycling on Cat Ba Island (rentals from VND 50,000/day), hiking in Cat Ba National Park (entry VND 60,000 / ~$2.50).",
                  "Cat Ba town has budget guesthouses (VND 300,000–500,000/night, ~$12–20) and mid-range hotels ($40–80) if you want a night on land.",
                  "Many experienced Ha Long travellers say Lan Ha Bay is more beautiful and more peaceful than the main Ha Long Bay tourist zone. It is not a compromise — it is an upgrade.",
                ]}
              />

              {/* ── MID-RANGE PLAN ── */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-2 mt-6">
                <p className="font-medium text-sm text-blue-800">✨ Mid-Range Plan — VND 4,500,000 / ~$180 per person for 2 nights</p>
                <p className="text-xs text-blue-700 font-light mt-1">Recommended boats: Indochine Premium Cruise, Paradise Sails, Heritage Line Jasmine. Ensuite cabins, à la carte dining, smaller groups (max 20 pax).</p>
              </div>
              <DayCard
                day="Day 1 (Mid)"
                title="VIP Limousine Transfer → Mid-Range Boarding → Cooking Class → Set Dinner"
                cost="VND 4,500,000 / ~$180 per person (2-night cruise)"
                items={[
                  "7:30am — VIP 9-seat limousine transfer from Hanoi, direct to Tuan Chau Harbour. No intermediate stops. Wi-Fi on board. More comfortable than standard cruise transfers.",
                  "12:00pm — Board Indochine Premium or similar. Ensuite cabin, private balcony, welcome Champagne or Vietnamese iced tea.",
                  "Afternoon: Guided visit to Thien Cung Cave (Heavenly Palace Cave) — less visited than Sung Sot but arguably more impressive stalactite formations. Private guided group of 12–20 people.",
                  "3:30pm — Kayaking with a bilingual guide — deeper into the bay, through narrower passages, to lagoons the budget boats can&apos;t reach due to boat size.",
                  "5:30pm — Return to boat. Shower. Sundeck cocktail hour.",
                  "7:00pm — Cooking class on board — learn to make Vietnamese spring rolls (goi cuon) and caramelised ginger fish (ca kho gung). The class runs for 45 minutes before a set 4-course dinner.",
                ]}
              />
              <DayCard
                day="Day 2 (Mid)"
                title="Sunrise Tai Chi → Bamboo Boat → Lan Ha Bay Kayaking → Farewell Lunch"
                cost="Included in cruise"
                items={[
                  "6:00am — Guided sunrise tai chi on the sundeck, complimentary tea and Vietnamese coffee.",
                  "8:00am — Gourmet Vietnamese breakfast: pho, banh mi, fresh fruit, yoghurt, eggs to order.",
                  "9:30am — Bamboo rowing boat through a karst passage inaccessible to motorised vessels — a section of the bay that remains genuinely quiet. The silence in here — just paddles on water and occasional birdsong — is something that sticks with you.",
                  "11:00am — Final kayaking session in clearer water. Swimming from the boat. Optional stand-up paddleboard.",
                  "1:00pm — 4-course farewell lunch with wine pairing option (VND 200,000–400,000 extra).",
                  "3:30pm — Return to harbour. VIP limousine transfer to Hanoi.",
                ]}
              />

              {/* ── LUXURY PLAN ── */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-2 mt-6">
                <p className="font-medium text-sm text-amber-800">💎 Luxury Plan — VND 8,000,000+ / ~$320+ per person for 2 nights</p>
                <p className="text-xs text-amber-700 font-light mt-1">Recommended boats: Paradise Elegance, Era Cruises, Signature Halong Cruise. Private sundeck, butler service, maximum 14 guests.</p>
              </div>
              <DayCard
                day="Day 1 (Luxury)"
                title="Seaplane Transfer → Private Boarding → Chef&apos;s Tasting Dinner"
                cost="VND 8,000,000–20,000,000 / ~$320–$800 per person (excl. seaplane ~$150–200)"
                items={[
                  "9:00am — Seaplane from Hanoi Noi Bai Airport to Ha Long Bay (45 min vs 3.5 hrs by road). The approach over the karsts from the air is extraordinary. Book via Vietnam Airlines or Hai Au Aviation.",
                  "11:00am — Transfer to Paradise Elegance or Era Cruises. Private cabin, personal butler, welcome Champagne.",
                  "Afternoon: Private cave tour (Sung Sot or Thien Cung) with a personal guide — no group waiting, no crowds.",
                  "3:00pm — Cliff jumping at a private spot known only to the luxury cruise operators — a karst overhang over deep blue water, around 6 metres high.",
                  "5:00pm — Sundeck hour. Private yacht tender to a secluded beach only accessible to smaller luxury vessels.",
                  "7:30pm — Private candlelit dinner on the aft sundeck. Chef&apos;s 6-course tasting menu featuring Ha Long Bay squid, crab, sea snails, and fresh prawns — all sourced from the floating fishing village that morning.",
                ]}
              />
              <DayCard
                day="Day 2 (Luxury)"
                title="Private Sunrise Kayak → Snorkelling → Floating Lunch → Paddleboard"
                cost="Included in luxury cruise package"
                items={[
                  "5:30am — Private sunrise kayak with a personal guide. The mist between the karsts at dawn, with no other boats in sight, is the Ha Long Bay experience at its absolute peak.",
                  "8:00am — Gourmet breakfast: eggs Benedict with smoked salmon, Vietnamese pho, tropical fruit, artisan coffee.",
                  "10:00am — Snorkelling in clear water at a site chosen by the captain for visibility. Underwater visibility in Ha Long Bay varies — the luxury boats know where to go for the best conditions.",
                  "12:00pm — Floating lunch in a secluded cove — tables set up on a private beach accessible only by tender boat.",
                  "3:00pm — Stand-up paddleboarding and swimming in calm sheltered water.",
                  "7:30pm — Farewell seafood BBQ on the sundeck under the stars. Lobster, giant prawns, squid — all from the floating fish farms that morning.",
                ]}
              />
              <DayCard
                day="Day 3 (Luxury)"
                title="Early Departure → Hanoi Luxury Night"
                cost="$300–600 for Hanoi luxury hotel (optional)"
                items={[
                  "6:30am — Early seaplane return to Hanoi to catch morning connections, or limousine transfer back.",
                  "Check into Sofitel Legend Metropole Hanoi or JW Marriott Hanoi for one night.",
                  "Afternoon: Spa treatment at the Metropole&apos;s Le Spa — the most historic hotel spa in Vietnam.",
                  "4:00pm — High tea in the French colonial Bamboo Bar lounge at the Metropole.",
                  "Evening: Dinner at La Terrasse or PRESS Club Hanoi — the two best restaurants in the city.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Ha Long Bay" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏝️ Ha Long Bay Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in the bay in order of priority. Entry fees are usually included in cruise packages — verify with your operator before booking.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Sung Sot Cave (Surprise Cave)",
                  e: "VND 150,000 (~$6) — usually included",
                  d: "The largest and most visited cave in Ha Long Bay — 10,000 square metres across two chambers. The outer chamber is the size of a large concert hall; the inner chamber contains some of the bay&apos;s most dramatic stalactite formations. Named &quot;Surprise Cave&quot; by early French explorers who were startled by the scale. Go early in the morning before tour groups arrive.",
                  t: "Must see · 1–1.5 hrs",
                },
                {
                  n: "Ti Top Island",
                  e: "VND 50,000 (~$2) — sometimes included",
                  d: "A small island with a white sand beach and 400 steps to a viewpoint that provides the most photographed panorama in Ha Long Bay — a 360° view over hundreds of karst islands. Named after Soviet cosmonaut Gherman Titov, who visited with Ho Chi Minh in 1962. Best light at 4pm. Very busy at midday — go early or late.",
                  t: "Best view · 1.5 hrs",
                },
                {
                  n: "Thien Cung Cave (Heavenly Palace)",
                  e: "VND 150,000 (~$6) — sometimes included",
                  d: "Less visited than Sung Sot but with arguably more intricate formations — stalactites, stalagmites, and pillars rising 20 metres. The cave was only discovered in 1993. The coloured LED lighting divides opinions but the geology is extraordinary. Budget cruise boats often skip this in favour of Sung Sot.",
                  t: "Underrated · 1 hr",
                },
                {
                  n: "Floating Fishing Villages",
                  e: "VND 50,000–100,000 (~$2–4) — usually included",
                  d: "Ha Long Bay has four floating fishing villages with a combined population of around 1,600 people who live entirely on the water. Vung Vieng is the largest and most visited; Cua Van is the oldest. The communities have been here for generations — the children attend a floating school, and many families still use traditional bamboo fishing traps. A bamboo boat tour through the village is one of the most memorable experiences in the bay.",
                  t: "Cultural highlight · 1 hr",
                },
                {
                  n: "Lan Ha Bay",
                  e: "Included in 3-night cruise routes",
                  d: "Adjacent to Cat Ba Island, Lan Ha Bay shares the same limestone karst geology as Ha Long Bay but receives a fraction of the visitor numbers. The water clarity is generally better, the caves are less crowded, and the atmosphere is closer to what Ha Long Bay was like 20 years ago. A 30-minute extension from the standard Ha Long route. Ask any cruise operator to route through Lan Ha — most mid-range and luxury cruises do by default.",
                  t: "Best-kept secret · Half day",
                },
                {
                  n: "Bai Tu Long Bay",
                  e: "Included in premium cruise routes",
                  d: "The northeastern zone of the greater Ha Long Bay region, Bai Tu Long Bay borders China and is significantly less visited than the main tourist zone. Fewer boats, pristine karsts, and almost no day-trippers. Only accessible on 3+ night cruises or via Cat Ba Island. If you want to see what Ha Long Bay looks like without the crowds, Bai Tu Long is the answer.",
                  t: "Off the beaten path · Full day+",
                },
                {
                  n: "Dark and Light Cave (Hang Toi & Hang Sang)",
                  e: "VND 100,000 — usually included",
                  d: "Two caves connected by a narrow passage that can only be navigated by kayak. Hang Toi (Dark Cave) is completely pitch black inside and requires paddling by the light of your headlamp. Hang Sang (Light Cave) emerges into a sunlit lagoon. The transition from darkness to brilliant emerald light is one of the most dramatic moments available in Ha Long Bay.",
                  t: "Kayak required · 1.5 hrs",
                },
              ].map((place) => (
                <div key={place.n} className="bg-white rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <p className="font-medium text-sm text-stone-900">{place.n}</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs text-teal font-medium bg-teal/10 px-2 py-0.5 rounded-full">{place.e}</span>
                      <span className="text-xs bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full border border-teal-200">{place.t}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{place.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <DestinationGallery
            title="Ha Long Bay — Karsts, Caves &amp; the Emerald Gulf"
            subtitle="1,969 islands, UNESCO-listed, and still one of the world&apos;s most extraordinary seascapes."
            spots={[
              {
                name: "Ha Long Bay Karst Islands",
                query: "ha long bay limestone karsts emerald water vietnam aerial sunrise",
                desc: "The iconic view — hundreds of limestone karst islands rising sheer from the Gulf of Tonkin, some over 100 metres tall.",
              },
              {
                name: "Junk Boat Ha Long Bay",
                query: "ha long bay wooden junk boat cruise vietnam traditional",
                desc: "Traditional wooden junk boats — the classic way to experience Ha Long Bay — sailing between the karsts at dawn.",
              },
              {
                name: "Sung Sot Cave Interior",
                query: "sung sot cave ha long bay stalactite stalacmite vietnam interior",
                desc: "The vast interior of Sung Sot (Surprise Cave) — 10,000 square metres of cathedral-scale chambers and ancient formations.",
              },
              {
                name: "Kayaking Ha Long Bay",
                query: "kayaking ha long bay limestone arch lagoon vietnam emerald water",
                desc: "Kayaking through a limestone arch into a hidden lagoon — the most memorable activity available in Ha Long Bay.",
              },
              {
                name: "Ti Top Island View",
                query: "ti top island ha long bay panorama viewpoint vietnam karst",
                desc: "The 360° panorama from Ti Top Island viewpoint — the most photographed vista in Ha Long Bay.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Ha Long Bay pricing is almost entirely cruise-based — accommodation, food, transport, and most activities are bundled into one package price. The main variable cost is the cruise tier you choose. All prices are per person.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-green-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🛳️ Cruise (2 nights, all-inclusive)", "VND 2.5M / ~$100", "VND 4.5M / ~$180", "VND 8M–20M / $320–800"],
                    ["🚌 Transfer Hanoi–Ha Long", "Included in cruise", "Included in cruise", "VND 3.5M / ~$150 (seaplane)"],
                    ["🏝️ Cave entry fees", "Included in cruise", "Included in cruise", "Included in cruise"],
                    ["🍜 Meals on boat", "Buffet, all included", "À la carte, included", "Gourmet, included"],
                    ["🎣 Activities (kayak, fishing)", "Included", "Included + private", "Private guides, all included"],
                    ["🍺 Drinks & extras", "VND 100K–300K / $4–12", "VND 200K–500K / $8–20", "VND 500K–2M / $20–80"],
                    ["TOTAL (per person)", "~$100–120", "~$200–250", "~$350–900+"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($80–120 total)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Bhaya Classic or Starlight Cruise. Shared cabin (clean, ensuite), buffet meals, group kayaking and cave tours included. This is genuinely good value — you spend 2 nights on the water, meals included, for what a mid-range Hanoi hotel costs per night.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">✨ Mid-Range ($180–280 total)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">Indochine Premium or Heritage Line Jasmine. Private ensuite cabin, à la carte dining, smaller groups (12–20 pax), better itinerary routing including Lan Ha Bay sections. The sweet spot for quality and value.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-800 mb-1">💎 Luxury ($320–900+ total)</p>
                <p className="text-xs text-amber-700 font-light leading-relaxed">Paradise Elegance or Era Cruises. Maximum 14 guests, private sundeck, butler, seaplane-compatible scheduling, chef&apos;s tasting menus. For a special occasion or honeymoon — justifiably worth the premium.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🛳️ Where to Stay (Cruise Recommendations)</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              For Ha Long Bay, &quot;where to stay&quot; means which cruise boat to book. There are over 600 licensed boats operating in the bay. These are the ones worth booking in each tier, based on consistently positive guest feedback and verified operations.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Indochine Premium Cruise",
                  type: "Mid-range boutique · 28 guests max",
                  price: "From VND 4.5M / ~$180 per person (2 nights)",
                  badge: "Best mid-range",
                  desc: "Consistently rated one of the best value mid-range boats. Dark wood and rattan interiors, ensuite cabins with private balconies, a knowledgeable bilingual guide, excellent routing that includes Lan Ha Bay sections. Groups cap at 28, which keeps the experience personal. The sundeck bar at sunset is exceptional.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Paradise Elegance",
                  type: "Luxury boutique · 14 guests max",
                  price: "From VND 12M / ~$480 per person (2 nights)",
                  badge: "Best luxury",
                  desc: "One of Ha Long Bay&apos;s most highly rated luxury vessels. Colonial French-Vietnamese design aesthetic, maximum 14 guests, private butler, a chef who sources ingredients from the floating fish farms en route. The Paradise Cruises group operates multiple boats — the Elegance is the most intimate. Books out weeks ahead in peak season.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Bhaya Classic",
                  type: "Budget-mid · 28 guests max",
                  price: "From VND 2.5M / ~$100 per person (2 nights)",
                  badge: "Best budget",
                  desc: "The reliable budget choice for Ha Long Bay. Bhaya Classic has clean ensuite cabins, a good buffet spread, and a programme that covers the main highlights (Sung Sot Cave, kayaking, Ti Top Island, floating village). The Bhaya group has been operating for years — their budget offering is considerably better than many mid-range competitors from smaller operators.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Heritage Line Jasmine",
                  type: "Luxury junk · 22 guests max",
                  price: "From VND 9M / ~$360 per person (2 nights)",
                  badge: "Most historic",
                  desc: "Heritage Line operates some of the most aesthetically distinctive boats on the bay — deliberately styled after traditional Chinese junk boats, with lacquerwork and silk interiors. The Jasmine is their Ha Long Bay vessel. Groups of 22 maximum. The itinerary focuses on the less-visited sections of the bay. Higher price but the design and food quality justify the premium.",
                  color: "border-purple-200 bg-purple-50",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Ha Long Bay</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              On the cruise: all meals are included — from simple buffets on budget boats to multi-course tasting menus on luxury vessels. For meals in Ha Long City (before/after the cruise) or in Hanoi, here are the best options.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "On-Boat Seafood — Budget Cruise",
                  t: "Boat dining · All budget cruises",
                  d: "Budget cruises serve generous Vietnamese multi-dish dinners — steamed sea snails, squid with lemongrass, sweet and sour fish, morning glory stir-fry, rice, and soup. The quality is typically far better than the price suggests. Catch squid at 9pm off the deck and the crew will cook it for you immediately — this is one of the best meals you will have in Vietnam.",
                  b: "Included in cruise",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Cua Vang (Golden Crab) Restaurant",
                  t: "Seafood · Ha Long City",
                  d: "The best-rated seafood restaurant near Tuan Chau Harbour, and a good option if you arrive in Ha Long City a night early. Crab, lobster, and fresh prawns sold by weight (VND 200,000–800,000 per kg depending on species). Squid ink pasta has snuck onto the menu for international travellers. Set meals start at VND 300,000 per person.",
                  b: "Best Ha Long City",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Bun Bo Nam Bo — Hanoi Pre-Trip",
                  t: "Street food · Hanoi Old Quarter",
                  d: "Before heading to Ha Long Bay, eat in Hanoi&apos;s Old Quarter. Bun Bo Nam Bo (dry beef noodles) on Hang Dieu Street is a meal travellers remember for years — VND 55,000 per bowl. Also: Pho Gia Truyen on Bat Dan Street for pho (opens 6am, cash only), and Bun Cha Huong Lien on Le Van Huu Street — the place where Anthony Bourdain ate with Barack Obama in 2016 (VND 45,000).",
                  b: "Pre-trip essential",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Cat Ba Town Seafood (Lan Ha Bay Option)",
                  t: "Fresh seafood · Cat Ba Island",
                  d: "If you extend to Lan Ha Bay or Cat Ba Island, eat dinner in Cat Ba town. The harbour restaurants serve whatever came in that day — sea urchin (VND 150,000), mantis shrimp (VND 300,000/kg), steamed crab (VND 400,000/kg). The restaurants on the main harbour front are higher priced but reputable. Side streets off the main drag are 20–30% cheaper.",
                  b: "Cat Ba extension",
                  c: "bg-parchment border-parchment-2",
                },
              ].map((r) => (
                <div key={r.n} className={`rounded-xl p-4 border ${r.c}`}>
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{r.n}</p>
                      <p className="text-xs text-muted font-light">{r.t}</p>
                    </div>
                    <span className="text-xs bg-white/80 text-teal-700 px-2.5 py-1 rounded-full border border-teal-200 font-medium">{r.b}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{r.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Affiliate Block */}
          <AffiliateBlock
            destination="Ha Long Bay Vietnam"
            hotels={[
              {
                name: "Indochine Premium Cruise",
                type: "Mid-range boutique cruise · 28 guests",
                price: "From VND 4.5M / ~$180 per person",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/vn/indochine-premium-cruise.html?aid=2820480",
              },
              {
                name: "Paradise Elegance Cruise",
                type: "Luxury boutique cruise · 14 guests",
                price: "From VND 12M / ~$480 per person",
                rating: "5",
                badge: "Most luxurious",
                url: "https://www.booking.com/hotel/vn/paradise-elegance-cruise.html?aid=2820480",
              },
              {
                name: "Bhaya Classic Cruise",
                type: "Budget-mid cruise · 28 guests",
                price: "From VND 2.5M / ~$100 per person",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/vn/bhaya-classic-cruise.html?aid=2820480",
              },
              {
                name: "Heritage Line Jasmine",
                type: "Luxury junk boat · 22 guests",
                price: "From VND 9M / ~$360 per person",
                rating: "5",
                badge: "Most distinctive",
                url: "https://www.booking.com/hotel/vn/heritage-line-jasmine.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Ha Long Bay 2-Night Cruise (Budget)",
                duration: "2 nights",
                price: "From $90/person",
                badge: "Most popular",
                url: "https://www.getyourguide.com/s/?q=ha+long+bay+cruise+2+nights&partner_id=PSZA5UI",
              },
              {
                name: "Lan Ha Bay Kayaking Day Tour",
                duration: "Full day",
                price: "From $45/person",
                badge: "Best kayaking",
                url: "https://www.getyourguide.com/s/?q=lan+ha+bay+kayaking&partner_id=PSZA5UI",
              },
              {
                name: "Ha Long Bay Seaplane Flight",
                duration: "45 min",
                price: "From $150/person",
                badge: "Most scenic",
                url: "https://www.getyourguide.com/s/?q=ha+long+bay+seaplane&partner_id=PSZA5UI",
              },
              {
                name: "Ha Long Bay Cooking Class on Boat",
                duration: "45 min",
                price: "Included in mid-range cruises",
                url: "https://www.getyourguide.com/s/?q=ha+long+bay+cooking+class&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "📅",
                  title: "Booking a 1-Day Tour",
                  desc: "Day tours give you 4–5 hours on the bay — enough for one cave and a brief kayak. The magic of Ha Long Bay happens at dawn and dusk when the day-trippers are gone. The floating fishing villages at 6am, the squid fishing at midnight, the mist between the karsts at 5:30am — none of this happens on a day tour. Always book 2+ nights.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "☀️",
                  title: "Going in July–August Without Booking Ahead",
                  desc: "Peak summer (June–August) brings maximum crowds, higher prices, occasional jellyfish, and typhoon risk from July onwards. If you must go in summer, book at least 3–4 weeks in advance. March–May and September–November offer better visibility, fewer people, lower prices, and the mist conditions the bay is famous for.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🚌",
                  title: "Taking the Cheapest Bus Transfer",
                  desc: "The cheapest $10 public buses from Hanoi stop at souvenir shops 2–3 times en route, adding 1.5 hours to the journey. Spend $6–8 for a direct limousine bus (16 seats, no stops, 3.5 hrs) — the VND 50,000 difference makes a meaningful difference to your day.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🏝️",
                  title: "Ignoring Lan Ha Bay",
                  desc: "Ha Long Bay receives 3 million visitors a year. Lan Ha Bay (30 minutes further, same geology, equally beautiful) receives a fraction of that. Ask your cruise operator if their route includes Lan Ha Bay — most mid-range boats do by default, many budget boats can be routed through it at no extra cost. If they can&apos;t, consider switching operators.",
                  color: "bg-pink-50 border-pink-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Ha Long Bay</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "Set an Alarm for 5:30am",
                  desc: "The bay at dawn — mist hanging between the karsts, fishing boats already moving, no day-trip crowds — is the image Vietnam Tourism has used for every poster for 30 years. It lasts about 45 minutes before the light changes. Most travellers sleep through it. Set the alarm. Stand on the deck with coffee. This is the moment.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🦑",
                  title: "Squid Fishing at Night is Free and Excellent",
                  desc: "Almost every cruise boat offers squid fishing off the stern deck at 9–10pm. Equipment is provided. It is surprisingly effective — the light attracted by the boat brings them in. The crew will cook whatever you catch immediately. This is one of the best free activities on the bay and one most travellers would never think to ask about.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🏊",
                  title: "Pack Water Shoes",
                  desc: "Cave floors are wet and slippery. Pebble beaches are impossible in bare feet. Kayaking is easier in water shoes than flip-flops. A $10 pair of neoprene water shoes transforms the cave tours, the beach stops, and the kayaking sessions. Pack them before you fly — they&apos;re cheap in Vietnam but not always in the right size.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "📸",
                  title: "Ti Top Island: Go at 4pm, Not Midday",
                  desc: "The viewpoint at the top of Ti Top Island (400 steps, VND 50,000) provides the most photographed panorama in Ha Long Bay. At midday it is flat, bright, and crowded. At 4pm the light is golden, the karsts glow, and the bay shifts from green to deep turquoise. Most cruise itineraries visit at 3–4pm — check yours and make sure you&apos;re on deck at that time.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🌊",
                  title: "Book Directly with the Cruise Company",
                  desc: "Third-party booking agents take 15–25% commission and sometimes downgrade you to a different (lesser) boat on the same price tier. Book directly with the cruise company via their website or a verified travel agency in Hanoi&apos;s Old Quarter. You get better cabin allocation, can request specific kayak times, and have direct contact if something changes.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🎒",
                  title: "Leave Your Big Bag in Hanoi",
                  desc: "Cabin storage on cruise boats is limited. Most Hanoi hotels and hostels offer free luggage storage for departing guests. Pack a small bag for the cruise — 1–2 sets of light clothes, swimwear, sunscreen, a dry bag for valuables on kayaks, a light jacket for evenings (it gets cool on the water), and seasickness tablets just in case.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Ha Long Bay" />

          {/* Combine With */}
          <CombineWith currentSlug="ha-long-bay-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How far is Ha Long Bay from Hanoi?",
                  a: "About 170km, taking 3.5–4 hours by road. Most cruise companies include Hanoi hotel pickup and drop-off in the package price — this is the most convenient option. Independent travellers can take a direct limousine bus for VND 150,000–200,000 (~$6–8). The premium alternative is a seaplane (45 minutes, ~$150–200 per person one way via Hai Au Aviation).",
                },
                {
                  q: "Which is the best cruise for Ha Long Bay?",
                  a: "Budget (VND 2.5M / ~$100 for 2 nights): Bhaya Classic or Starlight Cruise — reliable, clean, good food, all main highlights included. Mid-range (VND 4.5M / ~$180): Indochine Premium or Paradise Sails — ensuite cabins, smaller groups, better routing. Luxury (VND 8M+ / ~$320+): Paradise Elegance or Era Cruises — maximum 14 guests, private butler, chef&apos;s menus. Always book directly with the cruise company or via a reputable Hanoi travel agency.",
                },
                {
                  q: "Is Ha Long Bay actually worth the hype?",
                  a: "Yes — emphatically, but only on a 2-night or 3-night cruise. Day-trippers frequently leave disappointed: the journey takes 3.5 hours each way for 4–5 hours on the water. The genuine Ha Long Bay experience — dawn mist, midnight squid fishing, the silence of a floating village at 6am, kayaking into a pitch-black cave — happens over multiple nights. Book at least 2 nights and you will understand the hype completely.",
                },
                {
                  q: "What should I pack for a Ha Long Bay cruise?",
                  a: "Light quick-dry clothing (1–2 changes), swimwear, water shoes (essential for caves and pebble beaches), sunscreen (strong — reflection off the water intensifies UV), a dry bag for valuables while kayaking, a light jacket or layer for evenings (it gets cool on the water), seasickness tablets (some people are affected by the gentle swell), and a headlamp for cave visits. Leave your large bag in Hanoi — cabin storage is limited.",
                },
                {
                  q: "What is Lan Ha Bay and is it better than Ha Long Bay?",
                  a: "Lan Ha Bay is adjacent to Ha Long Bay, separated from it by Cat Ba Island. It shares the same limestone karst geology but receives a fraction of the visitors — there are fewer boats, clearer water, and a more peaceful atmosphere. Many experienced Vietnam travellers rate Lan Ha Bay higher than the main Ha Long Bay tourist zone. The 3-night cruise extension that includes Lan Ha Bay (VND 750,000–1,250,000 / $30–50 extra) is consistently recommended.",
                },
                {
                  q: "Can I visit Ha Long Bay on a budget?",
                  a: "Yes. A 2-night budget cruise with Bhaya Classic or a similar reputable budget operator costs VND 2,500,000 / ~$100 per person all-inclusive — accommodation, all meals, transfer from Hanoi, kayaking, cave tours, and most activities included. This is excellent value: you are sleeping on the water among 1,969 limestone islands with all meals included. It is one of the best-value travel experiences in Southeast Asia at any budget level.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Ha Long Bay trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-ha-long-bay", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/ha-long-bay-cruise-comparison", label: "Cruise comparison", icon: "🛳️" },
                { href: "/blog/hanoi-to-ha-long-bay-transfer", label: "Getting there", icon: "🚌" },
                { href: "/blog/lan-ha-bay-guide", label: "Lan Ha Bay guide", icon: "🏝️" },
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
          <RelatedGuides currentSlug="ha-long-bay-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Southeast Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Hanoi 3 Days — Old Quarter &amp; Street Food", href: "/blog/hanoi-3-days" },
                { label: "Ho Chi Minh City 3 Days — History &amp; Night Market", href: "/blog/ho-chi-minh-city-3-days" },
                { label: "Sapa 3 Days — Rice Terraces &amp; Trekking", href: "/blog/sapa-3-days" },
                { label: "Bangkok 4 Days — Temples &amp; Night Markets", href: "/blog/bangkok-4-days" },
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
