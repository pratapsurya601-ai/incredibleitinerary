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

// ── Table of Contents ─────────────────────────────────────────────────────────
const HAWAII_TOC = [
  { id: "honest",    emoji: "⚡",  label: "What Hawaii Actually Is" },
  { id: "season",    emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoget",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary", emoji: "📅",  label: "7-Day Itinerary" },
  { id: "landmarks", emoji: "🌋",  label: "Landmark Guide" },
  { id: "budget",    emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",      emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",       emoji: "🍽️", label: "Where to Eat" },
  { id: "mistakes",  emoji: "❌",  label: "Mistakes to Avoid" },
  { id: "tips",      emoji: "💡",  label: "Pro Tips" },
  { id: "faq",       emoji: "❓",  label: "FAQ" },
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
          href: `mailto:?subject=Hawaii 7-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Hawaii in 7 Days — Oahu, Maui %26 Big Island complete guide&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/hawaii-7-days"
        imageUrl="https://images.unsplash.com/photo-1542259009477-d625272157b7?w=1200&q=80"
        description="Hawaii in 7 Days: Oahu, Maui &amp; Big Island — Haleakalā sunrise, Road to Hana, Pearl Harbor, black sand beaches and volcanoes. Complete travel guide."
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
export default function HawaiiClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={HAWAII_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Hawaii" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="hawaii waimea canyon kauai na pali coast usa tropical"
            fallback="https://images.unsplash.com/photo-1542259009477-d625272157b7?w=1600&q=80"
            alt="Hawaii Na Pali Coast dramatic cliffs and turquoise Pacific Ocean Kauai USA"
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
              <span className="text-white/70">Hawaii 7 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  USA &amp; Pacific
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">18 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Hawaii in 7 Days:
                <em className="italic text-amber-300"> Oahu, Maui &amp; the Big Island</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Haleakalā sunrise at 10,000 feet, Road to Hana waterfalls, Pearl Harbor, North Shore surf, Volcanoes National Park, and black sand beaches. The complete multi-island guide.
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
              <span>🌺 Hawaii, USA</span>
              <span>·</span>
              <span>🗓 7 Days</span>
              <span>·</span>
              <span>💰 From $120/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Seven days in Hawaii feels impossibly short once you&apos;re standing on the rim of Haleakalā at sunrise, watching clouds roll beneath you at 10,000 feet — or snorkeling alongside green sea turtles in water so clear it looks like glass.
            </p>
          </blockquote>

          {/* ── WHAT HAWAII ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Hawaii Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Hawaii is the only US state that is entirely an archipelago — eight main islands strung across 1,500 miles of the Pacific, each with a completely different character. Oahu has Pearl Harbor, Diamond Head, the world-famous North Shore surf breaks, and Waikiki Beach. Maui has the Road to Hana, the 10,023-foot Haleakalā volcano, and whale-filled channels. The Big Island has active lava flows, the world&apos;s most powerful observatories, black sand beaches, and snow on Mauna Kea.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              In seven days you can cover two islands comfortably — three is a rush. The most popular combination is Oahu plus Maui. For travelers drawn to volcanoes and stargazing, Oahu plus the Big Island is equally rewarding. This guide covers the 3-night Oahu, 2-night Maui, 2-night Big Island route — the one that gives you the most geographic and ecological range.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The honest truth about Hawaii: it is expensive. The most expensive US state to visit, with groceries running 35–50% above mainland prices due to shipping costs, and accommodation premiums that shock first-time visitors. But the beauty is genuinely world-class — there is nowhere else on earth with this particular combination of volcanoes, reefs, surf culture, and Polynesian history in a single archipelago.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="From LA (direct)" value="5.5 hrs" />
              <StatCard icon="🌡️" label="Best Months" value="Apr–Jun, Sep–Nov" />
              <StatCard icon="🏝️" label="Main Islands" value="3 Islands" />
              <StatCard icon="💰" label="Budget From" value="$120/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Hawaii</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "🌺",
                  t: "Spring — Best Season",
                  d: "Shoulder season with fewer crowds than peak summer, prices 20–30% lower, and excellent weather across all islands. Humpback whales depart by April, but spinner dolphins are present year-round. Haleakalā summit conditions tend to be clear in spring.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Nov",
                  i: "🌊",
                  t: "Fall — Excellent Value",
                  d: "The other shoulder season — North Shore surf season begins in October bringing big waves and the professional surf contests (Triple Crown). Fewer families than summer. Prices lower than peak. Occasional tropical storms (rare direct hits).",
                  b: "Great value",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Dec–Mar",
                  i: "🐋",
                  t: "Winter — Whale Season",
                  d: "Humpback whales fill the channels between Maui and Lanai in peak numbers (January–March). North Shore produces legendary surf. Christmas–New Year is peak-peak season with maximum crowds and prices. Rain more likely on windward coasts — the south shores stay sunny.",
                  b: "For whale season",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Jul–Aug",
                  i: "☀️",
                  t: "Summer — Peak Season",
                  d: "School holiday peak — prices spike 30–50%, popular sites severely crowded, accommodation books out months ahead. Weather is reliably excellent. If this is your only window, book everything 3–4 months in advance and hit every site before 8am.",
                  b: "Book far ahead",
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

          {/* ── GETTING THERE ── */}
          <section id="howtoget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Hawaii</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Gateway airport:</strong> Honolulu Daniel K. Inouye International Airport (<strong className="font-medium">HNL</strong>) is the main entry point for Hawaii. Direct flights from Los Angeles take 5.5 hours ($300–500 round trip from the West Coast). From the East Coast, expect 10–11 hours and $400–700.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Direct from Los Angeles (LAX → HNL)",
                  d: "5.5 hours direct. The most common route from the US mainland. Hawaiian Airlines, United, Delta, and American all fly this corridor. Fares: $300–500 round trip booked 6–8 weeks ahead. Last-minute fares spike sharply. Southwest also flies LAX–HNL and accepts carry-on bags at no additional charge.",
                  b: "Most popular",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "From San Francisco (SFO → HNL)",
                  d: "5.5 hours direct. Similar fares to LAX ($300–500). United and Hawaiian Airlines are the primary carriers. SFO also offers direct flights to Maui (OGG) and Kona (KOA) on the Big Island — useful if your itinerary starts on those islands.",
                  b: "Good option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "✈️",
                  t: "Inter-Island Flights",
                  d: "Flying between islands takes 25–35 minutes but costs 3–4 hours of your day including airport logistics. Hawaiian Airlines and Southwest fly all inter-island routes. Book 4–6 weeks ahead for $50–90 fares — last-minute prices jump to $200+. For Oahu → Maui and Maui → Big Island legs, budget half a day each.",
                  b: "Plan carefully",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🌍",
                  t: "From India &amp; International",
                  d: "No direct India–Hawaii flights exist. Route: Delhi/Mumbai → Los Angeles or San Francisco → Honolulu. Total travel: 22–28 hours. Air India, United, and Hawaiian Airlines serve the transpacific leg. Fares from India: $900–1,400 round trip. Indian passport holders require a standard US B-2 tourist visa (not ESTA). Western passport holders use ESTA ($21, valid 2 years, approved at esta.cbp.dhs.gov).",
                  b: "Via US mainland",
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

          {/* ── 7-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 7-Day Hawaii Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Three islands in seven days: Oahu (Days 1–3), Maui (Days 4–5), Big Island (Days 6–7). Each day card is expandable. Start every activity before 8am — Hawaii&apos;s most popular sites are manageable at 6am and overwhelming by 10am.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Oahu Arrival · Waikiki Beach · Diamond Head Hike"
                cost="$65–95 (transport, entry, food, surfboard rental)"
                items={[
                  "Arrive at Honolulu International Airport (HNL). TheBus route 20 connects the airport to Waikiki for $3 — 40 minutes. Skip the $45 taxi unless you have significant luggage or arrive late at night.",
                  "Check in and walk the length of Waikiki Beach immediately — it stretches 2 miles from Diamond Head to the Ala Wai canal. This is where Duke Kahanamoku popularized modern surfing in the early 20th century. Group surfing lessons on Waikiki run $50–70 and are genuinely achievable for beginners — the waves are long and gentle.",
                  "Diamond Head Crater hike: $5 per person, free with Hawaii State Parks annual pass. The 1.6-mile round-trip paved trail takes 1–1.5 hours and delivers a 360° panoramic view over Oahu. Start before 7am to avoid heat and crowds — the summit gets packed by 9am.",
                  "Lunch: Leonard&apos;s Bakery (15-minute drive from Waikiki). Malasadas — Portuguese doughnuts, hot, sugar-coated, filled with custard or haupia — are $1.50 each. This is the bakery. The queue moves fast. Buy six.",
                  "Dinner: Plate lunch from a local spot. The Hawaiian plate lunch is the island&apos;s working staple: two scoops of white rice, mac salad (mayo-heavy), and your choice of kalua pork, teriyaki chicken, or loco moco. $10–14 from Ono Hawaiian Foods or Rainbow Drive-In. Both are Oahu institutions.",
                  "Evening: walk Kalakaua Avenue — Waikiki&apos;s main strip has free street performers and the ocean at night is warm and occasionally bioluminescent if conditions are right.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Oahu · North Shore — Haleiwa, Waimea Bay &amp; Shark&apos;s Cove"
                cost="$80–120 (car rental, food, gear rental)"
                items={[
                  "Rent a car: essential on every Hawaiian island. Economy rentals run $50–70/day from companies like Turo, Discount Hawaii Car Rental, or the major brands at the airport. Drive H-2 North to the North Shore — about 45 minutes from Waikiki.",
                  "Haleiwa town: the historic surfing village with painted wooden storefronts. Stop at Matsumoto&apos;s Shave Ice ($3–5) — this is shave ice, not a snow cone. The ice is hand-shaved to a fine powder consistency that absorbs the syrup completely. Order it with azuki beans and condensed milk on top. Queue 20 minutes. Absolutely worth it.",
                  "Giovanni&apos;s Shrimp Truck (white truck at Kahuku or Haleiwa lot): garlic butter scampi shrimp, two scoops rice, $15 cash. The most famous plate on the North Shore. The truck has parked in the same spots for 30+ years. The garlic is intense — intentionally.",
                  "Waimea Bay Beach Park: in winter (October–April) the bay produces waves up to 30 feet, home to the legendary Eddie Aikau invitational surf contest. In summer (May–September) the bay flattens completely — the best calm-water swimming on the North Shore. Entry: free.",
                  "Shark&apos;s Cove (Pupukea Beach Park): 10 minutes from Waimea Bay. Summer snorkeling in a natural lava rock pool teeming with reef fish, sea turtles, and occasionally Hawaiian monk seals (do not approach within 50 feet — federal law). Entry: free. Bring your own snorkel gear or rent nearby for $15.",
                  "Polynesian Cultural Center is 20 minutes from the North Shore in Laie: six Polynesian island villages with cultural demonstrations, an evening luau, and the Ha: Breath of Life show. Admission $70+. Book in advance — this is the most-visited paid attraction in Hawaii.",
                  "Return to Waikiki via the Pali Highway through the Ko&apos;olau Mountains — stop at the Nu&apos;uanu Pali Lookout (free) for a dramatic view of the windward coast. Trade winds here can hit 40mph.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Oahu · Pearl Harbor · Audio Tour · Fly to Big Island"
                cost="$90–130 (entries, food, inter-island flight)"
                items={[
                  "7:30am: Pearl Harbor National Memorial. Entry to the grounds is free, but the USS Arizona Memorial boat tour ($1 to reserve at recreation.gov) sells out weeks in advance — book immediately after confirming your dates. The sunken battleship still leaks fuel oil 80+ years later, and oil slicks surface daily — called &apos;black tears.&apos;",
                  "The free audio tour ($7.99 via the Recreation.gov app) dramatically improves the Pearl Harbor experience — it layers oral histories, original radio broadcasts, and survivor testimony directly to the physical sites. Download it before you go; the on-site WiFi is unreliable.",
                  "The free exhibits at Pearl Harbor include the Road to War museum, attack maps, and recovered artifacts including a Japanese midget submarine. Budget 3–4 hours total. The USS Missouri battleship (Japan surrendered on its deck in 1945) is an additional $35 and worth it if your interest runs deep.",
                  "Lunch: Nico&apos;s at Pier 38 (Honolulu harbor) for fresh ahi poke bowls ($16–20) sourced from fishermen who dock adjacent. One of the best-value lunch spots in Honolulu for genuine fresh fish.",
                  "Afternoon: pack and head to HNL for your inter-island flight to Kona (KOA) or Hilo (ITO) on the Big Island. Hawaiian Airlines and Southwest both fly this route — 40–45 minutes. Book 4–6 weeks ahead for $60–90 fares.",
                  "Check in at Volcano House, Hilo-area hotel, or Kona Coast depending on your Big Island route. If arriving in Kona by evening: watch the sunset from Ali&apos;i Drive waterfront — the Pacific west-facing sunsets are reliable and often spectacular.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Big Island · Hawaii Volcanoes National Park"
                cost="$75–110 (park entry, food, transport)"
                items={[
                  "Hawaii Volcanoes National Park: $35 per car, valid for 7 days — keep your receipt for multiple entries. This is the only place on earth where you can watch an active volcanic system from within walking distance on safe ground. The park covers 323,000 acres from the summit of Kīlauea (4,091 feet) to the ocean.",
                  "Kīlauea Visitor Center: start here for current lava activity conditions. The East Rift Zone&apos;s activity level changes weekly — rangers will direct you to the best current viewing areas. Download the free NPS Hawaii Volcanoes app before arriving.",
                  "Crater Rim Drive (11 miles): the road encircles the Kīlauea Caldera — at 2.5 miles wide and 400 feet deep, the caldera holds the Halema&apos;uma&apos;u pit crater, which has contained an active lava lake in recent eruption cycles. The glowing lava at night from the Jaggar Museum overlook (if active during your visit) is one of the most extraordinary sights on earth.",
                  "Thurston Lava Tube (Nāhuku): a 500-year-old lava tube you walk through — 600 feet of hardened lava tunnel, lit for the first section, dark and headlamp-required for the extension. Free with park entry. The fern jungle at the entrance is lush and primeval.",
                  "Chain of Craters Road: descend 3,700 feet over 19 miles to the ocean — passing through hardened 1969–1974 lava flows, pit craters, and petroglyphs. The road dead-ends where an older flow covered it in 2003. The Holei Sea Arch at the end is dramatic.",
                  "Volcano House hotel sits on the rim of the caldera — if you&apos;re splurging, this is the most uniquely sited hotel in the USA. Standard rooms from $220/night. The dining room overlooks the crater.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Big Island · Punalu&apos;u Black Sand Beach · Fly to Maui"
                cost="$70–100 (transport, food, inter-island flight)"
                items={[
                  "Punalu&apos;u Black Sand Beach (Ka&apos;ū coast, about 30 miles from Volcano): Hawaii&apos;s most famous black sand beach. The jet-black basalt sand forms when lava flows into the ocean and shatters on contact with seawater — the resulting sand is sharp and fine, contrasting with turquoise water in a way photographs never fully capture.",
                  "Green sea turtles (honu) haul out on the black sand at Punalu&apos;u almost daily — this is one of the most reliable turtle-watching beaches in all of Hawaii. Hawaii state law and federal regulations require you stay at least 6 feet from resting turtles. Do not touch them under any circumstances.",
                  "Swimming at Punalu&apos;u is generally unsafe — strong shore break and unpredictable currents. This is a viewing beach, not a swimming beach. The nearby Green Sand Beach (Papakolea, about 15 miles from Punalu&apos;u) is the only olivine-mineral green sand beach in the USA — requires a 2.5-mile walk each way across hardened lava terrain.",
                  "Afternoon: drive north toward Kona or Hilo airport for your inter-island flight to Maui (OGG). The flight takes 35–45 minutes. Hawaiian Airlines flies Kona–Maui and Hilo–Maui multiple times daily.",
                  "Check in to your Maui base: Kihei has the best budget and mid-range options within striking distance of both Haleakalā and the Road to Hana. Wailea is the luxury resort corridor with the finest beach strip on the island.",
                  "Maui arrival evening: Wailea Beach for sunset — the west-facing beach has unobstructed Pacific views and a gentle shore break that is safe for swimming. From December to April, humpback whales breach offshore — visible for free from the sand.",
                ]}
              />
              <DayCard
                day="Day 6"
                title="Maui · Road to Hana — Full Day"
                cost="$65–100 (park entries, food, gas)"
                items={[
                  "Start by 6:30am from your Maui base. Pick up supplies at Safeway or Whole Foods Kahului — the Road to Hana has almost no grocery stores and the few food stands are cash-only and irregular. A rental car is essential: $50/day from economy providers is the baseline.",
                  "The Road to Hana is a 64-mile highway with 617 curves and 59 one-lane bridges along Maui&apos;s dramatic northeastern coastline. Budget a full day minimum — 3 hours each way, but most people take 5–7 hours going. The return is the same road in reverse.",
                  "Key stops: Twin Falls (mile marker 2, free — easy 15-min walk to a swimming hole with a fruit stand at the trailhead), Ke&apos;anae Peninsula (mm 17, free — traditional Hawaiian village and lava rock coastline), Wailua Falls (mm 45, roadside viewpoint, free — 80-foot falls photographed from the car window).",
                  "Wai&apos;anapanapa State Park (mm 32): Hawaii&apos;s famous black sand beach, formed from volcanic basalt. $10 entry, timed reservations required at hawaii.gov/dlnr. The black sand contrasts with turquoise water in a way that stops you in your tracks — budget 45 minutes and walk the coastal lava trail in both directions.",
                  "Pipiwai Trail, Kipahulu (Haleakalā National Park, mm 42, $35 entry — keep receipt for tomorrow&apos;s summit): the 4-mile round-trip trail passes through a towering bamboo forest so dense it blocks sunlight, then emerges at 400-foot Waimoku Falls. The finest hike on the Road to Hana.",
                  "Hana town: the Hotel Hana-Maui is a beautiful property. Hasegawa General Store for snacks (operating since 1910). Hana Ranch Restaurant for a plate lunch at $15–18. Return to your accommodation by 8–9pm — driving the Road to Hana in darkness is disorienting. Drive slowly.",
                ]}
              />
              <DayCard
                day="Day 7"
                title="Maui · Haleakalā Sunrise · Wailea Beach"
                cost="$55–85 (park entry, food, transport)"
                items={[
                  "2:30am: wake up. This is non-negotiable. The Haleakalā summit is 10,023 feet (3,055 meters). The summit is typically 10–15°C (50–60°F) even when Maui&apos;s beaches are 85°F. Bring a proper winter jacket, gloves, and a warm hat — wind chill regularly drops below freezing.",
                  "CRITICAL booking step: Haleakalā National Park sunrise reservations ($1 per car, on top of $30 park entry) must be booked at recreation.gov. The reservation window opens exactly 60 days in advance at midnight Hawaii Standard Time (HST) and sells out in minutes. Set a phone alarm for 60 days before your planned sunrise. There is no walk-in sunrise option.",
                  "3:30am: begin the 1.5-hour drive up Haleakalā Highway from sea level. The road winds through pineapple farms, then cloud forest, then lunar-looking alpine desert. Your ears will pop multiple times.",
                  "5:45am (time varies by season — check exact sunrise time for your date): sunrise from the Pu&apos;u Ula&apos;ula summit. The shadow of Haleakalā projects across the cloud layer below. The sky transitions from deep violet through orange-red. Mark Twain described this view as &apos;the sublimest spectacle I have ever witnessed.&apos; He was not exaggerating.",
                  "After sunrise: hike the Sliding Sands (Keoneheehe) Trail into the lunar crater interior — the alien landscape of cinder cones in red, black, and orange. The native silversword plant (ahinahina) grows only on Haleakalā above 6,900 feet and lives up to 90 years before flowering once and dying.",
                  "Return to sea level by noon. The drive down takes 1.5 hours. Breakfast in Makawao town (the upcountry cowboy village at 1,500 feet): Komoda Store &amp; Bakery for cream puffs and malasadas — arrive before 9am as they sell out.",
                  "Afternoon: Wailea Beach (south Maui). Flat-calm water, excellent snorkeling at both ends of the bay, and a beach path connecting multiple world-class resort hotels — though public beach access is guaranteed in Hawaii regardless of adjacent hotel. The perfect final afternoon in Hawaii.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Hawaii" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌋 Hawaii Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The must-see sites across three islands — with real entry costs, booking requirements, and honest time estimates as of 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Pearl Harbor National Memorial",
                  e: "Free grounds · $1 Arizona boat reservation · $7.99 audio tour",
                  d: "The most-visited paid historic site in the USA. The USS Arizona Memorial boat tour requires advance reservation at recreation.gov (sells out weeks ahead in peak season). The free audio tour ($7.99 via app) layers oral histories directly onto the physical sites — download before arriving. Budget 3–4 hours. Located in Pearl City, 20 minutes from Waikiki.",
                  t: "Must see · 3–4 hrs",
                },
                {
                  n: "Diamond Head Crater",
                  e: "$5 per person",
                  d: "The 1.6-mile round-trip paved trail inside a dormant volcanic crater delivers a 360° panoramic view of Oahu. The hike takes 1–1.5 hours. Start before 7am for the best light and to avoid the heat and crowds that build from 9am onward. The summit at dawn is a genuinely moving experience.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Haleakalā Sunrise",
                  e: "$30 park entry + $1 sunrise reservation",
                  d: "The sunrise from the 10,023-foot Haleakalā summit is one of the finest natural spectacles in the Pacific. The $1 sunrise reservation at recreation.gov opens exactly 60 days in advance at midnight HST and sells out in minutes. Bundle with the Pipiwai Trail day (use the same $30 park entry receipt for both Kipahulu and the summit within 3 days).",
                  t: "Unmissable · 3–5 hrs",
                },
                {
                  n: "Road to Hana",
                  e: "Free road · $10 Wai&apos;anapanapa · $35 Haleakalā NP (Kipahulu)",
                  d: "64 miles, 617 curves, 59 one-lane bridges along Maui&apos;s northeastern coast. The journey itself is the destination — waterfalls, bamboo forests, taro farms, and a black sand beach. Rental car is essential ($50/day). Start by 6:30am. Allow a full day minimum.",
                  t: "Essential · Full day",
                },
                {
                  n: "Hawaii Volcanoes National Park",
                  e: "$35 per car (7-day pass)",
                  d: "The only national park in the world built around an active shield volcano system. Kīlauea is one of the most continuously active volcanoes on earth. Visit the Kīlauea Visitor Center first for current eruption status — lava lake activity varies. Drive Chain of Craters Road to the ocean and walk the Thurston Lava Tube.",
                  t: "Must see · Full day",
                },
                {
                  n: "Punalu&apos;u Black Sand Beach",
                  e: "Free",
                  d: "Hawaii&apos;s most dramatic black sand beach, formed by lava meeting seawater. Green sea turtles haul out on the sand almost daily — one of the most reliable turtle-viewing beaches in Hawaii. Swimming is unsafe due to shore break and currents. Located on the Ka&apos;ū coast of the Big Island, 30 miles from Hawaii Volcanoes NP.",
                  t: "Must see · 1 hr",
                },
                {
                  n: "North Shore Oahu &amp; Waimea Bay",
                  e: "Free",
                  d: "The North Shore is the surfing capital of the world — 7 miles of legendary breaks including Pipeline, Sunset Beach, and Waimea Bay. In summer (May–September) the bay flattens to crystal-clear calm-water swimming. In winter, 20–30 foot waves draw the world&apos;s elite surfers. The cultural history of modern surfing runs deep through every inch of this coastline.",
                  t: "Half day · Free",
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
            title="Hawaii — Three Islands, One Archipelago"
            subtitle="Volcanic craters, turquoise bays, black sand, and North Shore surf culture."
            spots={[
              {
                name: "Waikiki Beach Oahu",
                query: "waikiki beach honolulu oahu hawaii palm trees surfing sunset",
                desc: "Waikiki Beach — the birthplace of modern surfing, with Diamond Head rising behind it and the skyline of Honolulu as a backdrop.",
              },
              {
                name: "Haleakalā Sunrise Maui",
                query: "haleakala crater sunrise maui hawaii volcano summit clouds",
                desc: "Sunrise from the 10,023-foot Haleakalā summit — a sea of clouds in the crater and a sky transitioning from deep violet to burning orange.",
              },
              {
                name: "Road to Hana Waterfalls",
                query: "road to hana waterfall maui hawaii tropical jungle lush",
                desc: "One of dozens of waterfalls along the Road to Hana — Maui&apos;s northeastern coastline where jungle, lava cliffs, and Pacific bays collide.",
              },
              {
                name: "Hawaii Volcanoes National Park",
                query: "kilauea volcano lava flow hawaii big island national park",
                desc: "Active lava in Hawaii Volcanoes National Park on the Big Island — the only place on earth where you can watch a volcanic system this closely.",
              },
              {
                name: "Punalu&apos;u Black Sand Beach",
                query: "punaluu black sand beach hawaii big island sea turtle volcanic",
                desc: "Punalu&apos;u Black Sand Beach — jet-black basalt sand meeting turquoise Pacific water, with green sea turtles resting on the shore.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Hawaii is the most expensive US state to visit. Groceries run 35–50% above mainland prices due to shipping. The largest single costs are accommodation, car rental (essential on every island), and key activities. Book 2–3 months ahead for the best rates.
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
                    ["🏨 Accommodation (per night)", "$45–90", "$150–280", "$500–1,500"],
                    ["🍽️ Food (per day)", "$30–50", "$60–100", "$150–350"],
                    ["🚗 Car rental (per day)", "$50–70", "$70–100", "$100–200"],
                    ["🎟️ Activities (per day avg)", "$25–40", "$60–120", "$150–500"],
                    ["✈️ Inter-island flights (each)", "$60–90", "$80–120", "$200–600+"],
                    ["TOTAL (per person/day)", "$120–215", "$310–570", "$880–2,550"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($120–215/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostels, cooking from Costco or Safeway, free beaches, budget rentals. Completely viable — Hawaii&apos;s best experiences (beaches, hikes, sunrises) are mostly free or under $35.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">✨ Mid-Range ($310–570/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">3-star hotels near the beach, restaurant dining daily, Molokini boat tour, whale watching, guided experiences. The sweet spot for most visitors — comfortable without the luxury premium.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($880–2,550+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Four Seasons, Halekulani, Moana Surfrider, private guides, helicopter tours, Mama&apos;s Fish House reservations. Hawaii luxury is world-class — the service, settings, and Pacific produce justify every dollar.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Hawaii</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Each island has its own accommodation ecosystem. Oahu has the widest range from $45 hostels to $1,200 luxury hotels. Maui&apos;s Wailea resort corridor is the finest beach strip. The Big Island is best for volcano immersion — stay at or near the park.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Moana Surfrider, Waikiki",
                  type: "Historic luxury · Oahu, Waikiki Beach",
                  price: "From $380/night",
                  badge: "Most iconic",
                  desc: "Built in 1901, the &apos;First Lady of Waikiki&apos; is the oldest hotel in Hawaii — a white-columned Colonial Revival landmark directly on Waikiki Beach. The Banyan Veranda restaurant wraps around a 150-year-old banyan tree and faces the ocean. Book the oceanfront rooms for unobstructed Diamond Head views.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Wailea Beach Resort, Maui",
                  type: "Upscale resort · Maui, Wailea",
                  price: "From $350/night",
                  badge: "Best Maui beach",
                  desc: "Set directly on Wailea Beach — consistently rated one of the finest resort beaches in the USA. Three pools, five restaurants, and a beach service that brings chairs, towels, and cold water to your spot. Positioned perfectly for Haleakalā sunrise drives and Road to Hana day trips.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Volcano House, Big Island",
                  type: "Historic lodge · Hawaii Volcanoes National Park",
                  price: "From $220/night",
                  badge: "Most unique",
                  desc: "The only hotel inside Hawaii Volcanoes National Park, perched on the rim of the Kīlauea Caldera. The dining room overlooks the active crater. When the lava lake is glowing at night, this is the only hotel in the world where you watch an erupting volcano from your dinner table. Book months in advance.",
                  color: "border-orange-200 bg-orange-50",
                },
                {
                  name: "Polynesian Hostel Beach Club, Waikiki",
                  type: "Budget hostel · Oahu, Waikiki",
                  price: "From $45/night (dorm)",
                  badge: "Best budget",
                  desc: "Three blocks from Waikiki Beach with a communal kitchen — essential for Hawaii budget travel where restaurant prices are high. Clean dorms and private rooms, social atmosphere, good information boards for tours and activities. The best entry-level base for first-time Hawaii visitors on a budget.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Hawaii</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Hawaiian food culture is a genuine fusion — Polynesian, Japanese, Portuguese, Filipino, and American plate-lunch traditions layered over 200 years. The best meals range from $3 malasadas to $120-per-person destination restaurants.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Mama&apos;s Fish House, Maui",
                  t: "Destination seafood · Paia, North Maui",
                  d: "The most revered restaurant in Maui — set in a 1940s beach house on a cove north of Paia. The fish appears on the menu by name of the fisherman and the specific fishing spot. Whole mahi-mahi, Ono prepared tableside, handmade poi — a genuine culinary experience. $80–120/person. Reserve 2–3 months in advance: this is the hardest reservation in Hawaii to get.",
                  b: "Reserve 3 months out",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Helena&apos;s Hawaiian Food, Oahu",
                  t: "Old-school Hawaiian · Kalihi, Honolulu",
                  d: "A James Beard Award-winning institution in a humble strip-mall storefront — the most authentic Hawaiian food in Honolulu. Pipikaula (dried beef short ribs), squid lū&apos;au (cooked in coconut milk and taro leaves), and lomi lomi salmon. Cash preferred. Long queues at lunch. Under $20/person. Open Tuesday–Friday only.",
                  b: "James Beard winner",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Lava Lava Beach Club, Big Island",
                  t: "Casual beachfront · Waikoloa, Kohala Coast",
                  d: "Literally on the sand at Anaeho&apos;omalu Bay (A-Bay) on the Big Island&apos;s Kohala Coast — tiki torches at sunset, fresh fish tacos, Hawaiian poke bowls, and mai tais with your feet near the sand. The most fun beachfront dining on the Big Island. $20–35/person. No reservations — arrive before sunset for a table.",
                  b: "Best sunset dining",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Giovanni&apos;s Shrimp Truck, North Shore",
                  t: "Iconic food truck · Haleiwa / Kahuku, Oahu",
                  d: "The most famous plate on the North Shore — garlic butter scampi shrimp, two scoops rice, $15 cash. The white truck has been parked in the same spots for 30+ years. The garlic content is intense and intentional. Outdoor picnic table seating. Cash only. Lines move fast. Non-negotiable North Shore stop.",
                  b: "North Shore essential",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Leonard&apos;s Bakery, Honolulu",
                  t: "Bakery · Kapahulu, Honolulu",
                  d: "The original malasada bakery — Portuguese doughnuts, hot, sugar-coated, filled with custard (original), chocolate, or haupia (coconut pudding). $1.50 each. Open daily from early morning. The queue moves quickly. Every food guide ever written about Honolulu includes this bakery for a reason — it&apos;s extraordinary.",
                  b: "Must visit",
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
            destination="Hawaii"
            hotels={[
              {
                name: "Moana Surfrider, A Westin Resort",
                type: "Historic luxury · Waikiki Beach, Oahu",
                price: "From $380/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/us/moana-surfrider-a-westin-resort-spa.html?aid=2820480",
              },
              {
                name: "Wailea Beach Resort — Marriott, Maui",
                type: "Upscale resort · Wailea, Maui",
                price: "From $350/night",
                rating: "5",
                badge: "Best Maui beach",
                url: "https://www.booking.com/hotel/us/wailea-beach-marriott-resort-spa.html?aid=2820480",
              },
              {
                name: "Volcano House",
                type: "Historic lodge · Inside Volcanoes NP, Big Island",
                price: "From $220/night",
                rating: "4",
                badge: "Most unique",
                url: "https://www.booking.com/hotel/us/volcano-house.html?aid=2820480",
              },
              {
                name: "Polynesian Hostel Beach Club",
                type: "Budget hostel · Waikiki, Oahu",
                price: "From $45/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/us/polynesian-hostel-beach-club.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Pearl Harbor Full-Day Tour from Waikiki",
                duration: "8 hrs",
                price: "From $75/person",
                badge: "Top rated",
                url: "https://www.getyourguide.com/s/?q=pearl+harbor+tour+oahu&partner_id=PSZA5UI",
              },
              {
                name: "Road to Hana Guided Day Tour",
                duration: "Full day",
                price: "From $120/person",
                badge: "Best seller",
                url: "https://www.getyourguide.com/s/?q=road+to+hana+maui+tour&partner_id=PSZA5UI",
              },
              {
                name: "Molokini Crater Snorkel Tour",
                duration: "4 hrs",
                price: "From $85/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=molokini+crater+snorkel+maui&partner_id=PSZA5UI",
              },
              {
                name: "Hawaii Volcanoes National Park Guided Tour",
                duration: "8 hrs",
                price: "From $95/person",
                url: "https://www.getyourguide.com/s/?q=hawaii+volcanoes+national+park+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Hawaii</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "⚓",
                  title: "Not Booking Pearl Harbor in Advance",
                  desc: "The USS Arizona Memorial boat tour ($1 reservation at recreation.gov) sells out weeks in advance during peak season. Showing up without a reservation means viewing the site from the shore only — you will not get on the boat. This is the single most common Hawaii regret from first-time visitors. Book the moment your dates are confirmed.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🌋",
                  title: "Missing the Haleakalā Sunrise Permit",
                  desc: "The $1 sunrise reservation at recreation.gov opens exactly 60 days in advance at midnight Hawaii Standard Time and sells out in minutes — sometimes seconds. Set a phone alarm for 60 days before your planned sunrise date. There is no walk-in sunrise option. The park is open 24/7 outside the 3am–7am sunrise window, which is the only period requiring the permit.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🚗",
                  title: "Skipping the Road to Hana",
                  desc: "Most visitors see the 3-hour driving time (each way) and skip it. This is a significant mistake. The Road to Hana is not a destination — it is the journey itself. The waterfalls, bamboo forest, black sand beach, and coastal beauty are Hawaii&apos;s volcanic landscape at its most concentrated. Allow a full day and start by 6:30am.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🌊",
                  title: "Turning Your Back on the Ocean",
                  desc: "Hawaii&apos;s ocean is beautiful and deadly. Rogue waves on lava rock coastlines kill tourists every year — people standing on rock platforms who don&apos;t see the wave approaching from behind. The rule is absolute: never turn your back on the ocean. Rip currents at non-lifeguarded beaches can also overwhelm strong swimmers. Always check warning flags and current advisories at ocean-safety.hawaii.gov.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "✈️",
                  title: "Underestimating Inter-Island Logistics",
                  desc: "Flying between islands is only 25–35 minutes of air time but costs 3–4 hours of your day including check-in, security, baggage claim, and airport transfers. Budget accordingly. Plan the island switch on a travel day with no major activities scheduled. Book inter-island flights 4–6 weeks ahead for $60–90 instead of $200+ last-minute.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((m) => (
                <TipCard key={m.title} {...m} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Hawaii</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🛒",
                  title: "Costco Honolulu — the Budget Equalizer",
                  desc: "Costco Ala Moana (Honolulu) is the single most useful stop for budget Hawaii travel. Bulk produce, the best poke by the pound ($12–18/lb), sunscreen (which Hawaii charges obscene amounts for in hotel shops), and quantities that make sense for a group. Also: snorkel gear sets for $20–35 — cheaper than 2 days of rental and yours to keep or donate.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🐋",
                  title: "Plan Around Humpback Whale Season",
                  desc: "Pacific humpback whales migrate to Hawaiian waters from Alaska every winter — peak season is January–March, with whales present from December through April. Maui&apos;s &apos;Au&apos;au Channel holds the highest density of humpback whales on earth during this period. They&apos;re visible for free from Ka&apos;anapali Beach. Outside whale season, Hawaiian spinner dolphins are present year-round and frequently approach boats.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "⏰",
                  title: "The 6am Rule — Every Single Site",
                  desc: "Hawaii&apos;s most popular sites are genuinely manageable at 6–7am and genuinely overwhelming by 10am. Hanauma Bay, Diamond Head, Waimea Bay, Molokini boat launches — start every activity day before 7am. Hawaiian traffic is also brutal mid-morning in tourist corridors. The early light on the reef and the volcanoes is also objectively better for photography.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🤿",
                  title: "Bring Your Own Snorkel Gear",
                  desc: "Rental snorkel gear costs $15–20/day per person. A decent mask-and-snorkel set from Costco costs $20–35 total. If you&apos;re visiting multiple snorkel sites across 7 days — Hanauma Bay, Shark&apos;s Cove, Ka&apos;anapali Beach, Wailea Bay — owning your gear pays off immediately, fits your face correctly, and is more hygienic. Pack it in your checked luggage.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🌺",
                  title: "Learn Basic Hawaiian — Locals Notice",
                  desc: "Hawaii has a complex relationship with tourism and its impact on native Hawaiian culture and housing costs. Small gestures matter: Mahalo (thank you), Aloha (a philosophy, not just a greeting), Kapu (forbidden — respect these signs at sacred sites), Mauka (toward the mountain), Makai (toward the sea). Do not touch the silversword plants at Haleakalā, do not stand on coral, and stay 6 feet from sea turtles and monk seals — approaching them is a federal offense.",
                  color: "bg-pink-50 border-pink-200",
                },
                {
                  icon: "☀️",
                  title: "Reef-Safe Sunscreen is Required by Law",
                  desc: "Hawaii law bans sunscreens containing oxybenzone and octinoxate, which damage coral reefs. Most standard mainland sunscreens are illegal in Hawaii. Buy mineral-based (zinc oxide or titanium dioxide) sunscreen before your trip or at Costco Honolulu. The law is actively enforced at national park beaches. SPF 50+ is appropriate for Hawaii&apos;s equatorial sun intensity.",
                  color: "bg-orange-50 border-orange-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Hawaii" />

          {/* Combine With */}
          <CombineWith currentSlug="hawaii-7-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Which Hawaiian island is best for a 7-day first visit?",
                  a: "The Oahu + Maui combination is the most popular first itinerary and for good reason — Oahu covers Pearl Harbor, Diamond Head, Waikiki, and the North Shore, while Maui delivers Haleakalā, the Road to Hana, and the finest resort beaches. For a more adventurous trip, swap Maui&apos;s Day 6–7 for the Big Island: Hawaii Volcanoes National Park and the Punalu&apos;u black sand beach are unlike anything on the other islands. The Big Island is better suited to a second Hawaii trip for visitors who prioritize active geology over beach resort time.",
                },
                {
                  q: "How do I book the Haleakalā sunrise permit?",
                  a: "Go to recreation.gov and search &apos;Haleakalā sunrise.&apos; Permits become available exactly 60 days in advance at midnight Hawaii Standard Time (HST, UTC−10). Set a phone alarm for 60 days before your planned sunrise. The $1 permit covers a vehicle for up to 4 people, on top of the $30 park entry fee paid separately at the gate. Permits sell out within minutes — sometimes seconds. If you miss the 60-day window, check recreation.gov daily for cancellations, which do appear. The park is open 24/7 outside the 3am–7am sunrise permit window.",
                },
                {
                  q: "How much does 7 days in Hawaii cost?",
                  a: "Hawaii is the most expensive US state for visitors. A genuine budget (hostels, cooking some meals, free beaches) runs $120–180/day per person. A comfortable mid-range trip (3-star hotels, restaurant dining, key activities) costs $300–550/day. Luxury ($700–2,500+/day) is world-class. Budget the largest single costs first: accommodation (book 2–3 months ahead), inter-island flights ($60–90 booked ahead vs $200+ last-minute), rental car ($50–70/day — essential on every island), Pearl Harbor reservation ($1 but sells out weeks ahead), and Haleakalā sunrise permit ($1 but opens only 60 days ahead).",
                },
                {
                  q: "Is a rental car necessary in Hawaii?",
                  a: "Yes — on every island except possibly a short Waikiki-only Oahu stay where TheBus ($3/ride) and rideshares cover the main sites. The Road to Hana is impossible without a car. Haleakalā at 2:30am requires your own vehicle (taxis don&apos;t run that route at that hour reliably). Hawaii Volcanoes National Park is too large to navigate without a car. On the Big Island, the distances between the Kona Coast, the park, and the Hilo side are vast. Rental car prices: $50–70/day from economy providers booked 4–6 weeks ahead.",
                },
                {
                  q: "What is the best snorkeling in Hawaii?",
                  a: "Hanauma Bay (Oahu, $25 entry with timed tickets booked 2 days ahead) is the finest all-round reef snorkeling with near-guaranteed sea turtle encounters. Shark&apos;s Cove at Pupukea (Oahu, free) is excellent in summer. Molokini Crater (Maui, $85–125 boat tour) has 150-foot visibility in optimal conditions and is in a different league entirely. Black Rock at Ka&apos;anapali (Maui, free shore snorkel) has turtles and dense reef fish. On the Big Island, the Kohala Coast (Hapuna Beach, Mauna Kea Beach) has excellent clear-water snorkeling. Bring your own gear — rentals cost $15–20/day per person.",
                },
                {
                  q: "Do I need a visa to visit Hawaii from outside the USA?",
                  a: "Hawaii is the 50th US state — the same visa or entry authorization required for the US mainland applies. US citizens need no passport. Visitors from the 40+ Visa Waiver Program countries (UK, Australia, most of EU, Japan, South Korea, etc.) use ESTA ($21, approved at esta.cbp.dhs.gov — apply at least 72 hours before departure). Indian passport holders require a standard US B-2 tourist visa ($185 non-refundable, applied at the US consulate — ESTA does not apply). No separate Hawaii permit exists; inter-island travel requires no additional customs or immigration.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Hawaii trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-hawaii", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/hawaii-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-get-to-hawaii", label: "How to get there", icon: "✈️" },
                { href: "/blog/hawaii-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="hawaii-7-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More USA &amp; Pacific Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Los Angeles 5 Days — Beaches &amp; Culture", href: "/blog/los-angeles-5-days" },
                { label: "Las Vegas 4 Days — The Strip &amp; Beyond", href: "/blog/las-vegas-4-days" },
                { label: "Maldives 5 Days — Overwater Bungalows", href: "/blog/maldives-5-days" },
                { label: "Bali 5 Days — Temples &amp; Rice Terraces", href: "/blog/bali-5-days" },
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
