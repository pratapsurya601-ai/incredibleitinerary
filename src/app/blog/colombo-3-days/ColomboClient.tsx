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
const COLOMBO_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Colombo Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "🚂",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",  emoji: "🏛️", label: "Landmark Guide" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",       emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",        emoji: "🍽️", label: "Where to Eat" },
  { id: "mistakes",   emoji: "❌",  label: "Mistakes to Avoid" },
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
          href: `mailto:?subject=Colombo 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Colombo in 3 Days — isso wade, Ministry of Crab and Galle Face Green at sunset&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/colombo-3-days"
        imageUrl="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80"
        description="Colombo in 3 Days: Galle Face Green, Gangaramaya Temple, Ministry of Crab, Pettah Market and the scenic train to Kandy — complete travel guide with budget breakdown."
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
export default function ColomboClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={COLOMBO_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Colombo" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="colombo sri lanka galle face green ocean sunset skyline"
            fallback="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600&q=80"
            alt="Galle Face Green seafront promenade at sunset with the Colombo skyline behind"
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
              <span className="text-white/70">Colombo 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Sri Lanka
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Colombo in 3 Days:
                <em className="italic text-amber-300"> Galle Face, Ministry of Crab &amp; the Road to Kandy</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Isso wade at sunset, whole crabs in a 17th-century Dutch hospital, Pettah&apos;s market chaos, and one of Asia&apos;s great train journeys. Colombo done properly.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="12 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇱🇰 Sri Lanka</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From $35/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Colombo defies its underdog reputation at every turn. The Galle Face Green at sunset is a kilometre-long ocean promenade where kite vendors, crab-eating families, and business-suited professionals share the same sea breeze. The Ministry of Crab, where Sri Lanka&apos;s cricket heroes serve whole crabs in a Dutch hospital from 1681, is one of Asia&apos;s most extraordinary dining experiences.
            </p>
          </blockquote>

          {/* ── WHAT COLOMBO ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Colombo Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Most travellers treat Colombo as a transit stop — a night between the airport and Galle, Ella, or Mirissa. This is a mistake. Colombo is one of South Asia&apos;s most layered cities, with three centuries of Portuguese, Dutch, and British colonial architecture compressed into neighbourhoods that flow into each other without announcement: the Dutch fort, the Victorian market of Pettah, the Edwardian mansions of Cinnamon Gardens, and the oceanfront promenade of Galle Face Green.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The city is also home to Gangaramaya Temple — a Buddhist complex on Beira Lake that is part shrine, part museum, part elephant sanctuary, housing an extraordinary collection of donated objects from gold Buddhas to vintage Rolls-Royces. The National Museum on Marcus Fernando Mawatha holds the actual throne and crown jewels of the last Kandyan kings. Pettah bazaar, with its separate streets for spices, fabric, electronics, and fish, is the most frenetic market in South Asia.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              And then there is Cinnamon Gardens — Colombo 7 — where colonial mansions behind jacaranda trees house embassies and art galleries, and where Viharamahadevi Park stretches in a green diagonal through the city. Colombo rewards those who slow down, take the tuk-tuk for LKR 50–150 per kilometre, eat hoppers for breakfast, and give it two proper days before the beach.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport Code" value="CMB" />
              <StatCard icon="🌡️" label="Best Season" value="Dec–Mar" />
              <StatCard icon="🏛️" label="District" value="Fort & Col 7" />
              <StatCard icon="💰" label="Budget From" value="$35/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Colombo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Dec–Mar",
                  i: "☀️",
                  t: "Dry Season — Best Time",
                  d: "26–31°C, low humidity, clear skies for Galle Face sunsets. December and January are peak season with the best beach weather for the west coast. Ideal for sightseeing, temple visits, and the Kandy day trip by train. Book Ministry of Crab well in advance for December–January.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Apr–May",
                  i: "🌅",
                  t: "Pre-Monsoon — Hot & Viable",
                  d: "28–34°C. Sinhala and Tamil New Year falls in April — a magnificent time to see Colombo celebrations but expect some closures. Still comfortable for early-morning temple visits and evening Galle Face walks. Pre-book all restaurants as the city gets busy for the holiday.",
                  b: "Good with planning",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "May–Aug",
                  i: "🌧️",
                  t: "South-West Monsoon — Heavy Rain",
                  d: "Colombo receives its heaviest rainfall from May to August (south-west monsoon). Indoor attractions — Dutch Hospital, National Museum, Gangaramaya — are ideal. Galle Face Green is dramatically atmospheric in the monsoon wind. Prices drop 20–30% and the city is authentically local.",
                  b: "Indoor focus",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Sep–Nov",
                  i: "🌤️",
                  t: "Shoulder Season — Good Value",
                  d: "The south-west monsoon fades. October–November is pleasant, less crowded than peak season, and prices are lower. Some afternoon showers but mornings are typically clear. A good compromise for budget travellers who want dry weather and fewer crowds.",
                  b: "Good value",
                  c: "bg-teal-50 border-teal-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚂 Getting to Colombo</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Bandaranaike International Airport (CMB) is in <strong className="font-medium">Katunayake</strong>, 35km north of central Colombo. The airport is served by Katunayake railway station (walk 10 minutes or take a tuk-tuk) with trains directly to Colombo Fort station — one of the best airport-to-city rail connections in South Asia.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚂",
                  t: "Train: Airport to Colombo Fort (recommended)",
                  d: "Katunayake station to Colombo Fort station: 1 hour, LKR 150 ($0.50) second class. Trains run every 1–2 hours from 5am to 9pm. Walk or take a tuk-tuk (LKR 200) from the airport terminal to Katunayake station. Comfortable, direct, and the most economical option. Colombo Fort station is central for tuk-tuks to any part of the city.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚕",
                  t: "Taxi: Airport to Colombo city",
                  d: "Pre-paid taxi counters in the arrivals hall charge LKR 3,000–3,500 ($10–12) to central Colombo. Metered taxis from PickMe app run LKR 2,200–2,800. The 35km drive takes 45 minutes to 1.5 hours depending on traffic. Recommended for those arriving late at night or travelling with heavy luggage.",
                  b: "Convenient",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🛺",
                  t: "Tuk-tuk within Colombo (PickMe app)",
                  d: "Download the PickMe app (Sri Lanka&apos;s equivalent of Uber) before leaving the airport. Tuk-tuks in Colombo cost LKR 50–150 per kilometre by app — typically LKR 200–400 for most cross-city journeys. Street tuk-tuks quote 3–4x the app price for tourists. Always use PickMe for transparent metered pricing.",
                  b: "Use for city transport",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚌",
                  t: "Bus from other Sri Lanka destinations",
                  d: "SLTB and private buses connect Colombo to Kandy (2.5 hrs, LKR 150–200), Galle (2 hrs, LKR 200–300), and Negombo (45 mins, LKR 70). The Colombo–Kandy train (LKR 200, 3 hrs) is significantly more scenic and comfortable than the highway bus and is strongly recommended.",
                  b: "Good for day trips",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Colombo Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is designed to get the most from Colombo&apos;s neighbourhoods, with evenings at Galle Face Green and the key restaurant bookings flagged in advance.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Galle Face Green · Pettah Market · Fort District · Kottu Roti"
                cost="LKR 2,500–4,500 ($8–15)"
                items={[
                  "09:00 — Take a PickMe tuk-tuk from your hotel to Pettah Bazaar (LKR 200–350). Pettah is Colombo&apos;s wholesale market district — the most chaotic and colourful neighbourhood in the city. Streets here are divided by category: Second Cross Street is electronics, Main Street is fabric and sari shops, Sea Street (Colombo&apos;s gold district) is jewellery, and behind the mosque is the fruit and vegetable wholesale market. Go without a specific agenda and follow the noise.",
                  "09:30 — Old Town Hall in Pettah (free entry). The Dutch-era colonial building dating to the late 18th century is now a local government hall. The nearby Dutch Period Museum on Prince Street charges LKR 300 and displays ceramics, furniture, and maps from the VOC era — good context for the Fort district you will walk later.",
                  "11:00 — Jami Ul-Alfar Mosque on Second Cross Street (free, non-Muslim visitors welcome with covered shoulders and shoes removed). The red-and-white candy-striped 1909 mosque is Colombo&apos;s most photographed building. The courtyard is calm amid the market frenzy outside.",
                  "13:00 — Lunch at a Pettah rice-and-curry canteen on Main Street (LKR 300–450). A full plate of rice with four or five curries, papadum, and pol sambol is the cheapest and most authentic meal you will have in Colombo.",
                  "15:00 — Walk into the Fort district. The General Post Office building (1891), the Cargills department store Victorian shopfront, and Chatham Street&apos;s colonial banking facades give a sense of British-era Colombo. The Dutch Hospital Shopping Precinct on Hospital Street is the oldest building in Colombo (1681) — now a preserved complex of boutique restaurants and shops. Worth walking through even if you are dining elsewhere.",
                  "17:30 — Galle Face Green. The 1.5km oceanfront promenade is Colombo&apos;s great public space — kite vendors, prawn-fritter sellers, joggers, and families all share the same sea breeze. Buy isso wade (deep-fried prawn lentil fritters, LKR 60 each) from a vendor and a King Coconut water (LKR 80) and watch the sun set over the Indian Ocean. This is one of Asia&apos;s great urban sunsets.",
                  "20:00 — Dinner: kottu roti at a roadside restaurant on Galle Road near Wellawatte (LKR 450–600). Shredded roti chopped on a flat-iron griddle with vegetables, egg, and curry sauce — the rhythmic clatter of the metal blades is a Colombo soundtrack. The best kottu is found at small family stalls open from 7pm, not tourist restaurants.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Gangaramaya Temple · Beira Lake · National Museum · Ministry of Crab"
                cost="LKR 6,000–12,000 ($20–40) — varies significantly if dining at Ministry of Crab"
                items={[
                  "08:00 — Gangaramaya Temple on the western shore of Beira Lake (entry LKR 1,000). Arrive at opening for the morning puja — monks chant, devotees offer lotus flowers and jasmine, and the inner sanctum is fragrant with incense. The temple museum is an extraordinary hoard: gold Buddha statues, ivory, a vintage Rolls-Royce, ceremonial elephants, and thousands of objects donated by devotees from across the Buddhist world. Budget 90 minutes.",
                  "09:30 — Walk the Beira Lake promenade from Gangaramaya to the Seema Malaka floating temple (entry LKR 300). The wooden pavilion sits on pontoons in the lake and serves as a meditation space for monks. The reflection of the city behind it at mid-morning is quietly beautiful.",
                  "10:30 — PickMe tuk-tuk to Viharamahadevi Park and the National Museum of Sri Lanka on Marcus Fernando Mawatha (entry LKR 300). The museum holds the actual throne and crown of the last Kandyan kings, the original replica of the Sacred Tooth Relic, and one of South Asia&apos;s finest collections of ancient Sinhalese artefacts. The Kandyan jewellery room alone warrants 30 minutes.",
                  "13:00 — Lunch in the Cinnamon Gardens neighbourhood (Colombo 7). The Barefoot Gallery cafe on Galle Road is excellent for a light lunch in a courtyard garden (LKR 1,200–2,000). The gallery itself sells Sri Lankan batik, crafts, and books — the finest collection of local design in Colombo.",
                  "16:00 — Afternoon walk through Cinnamon Gardens (Colombo 7). The colonial mansions on Alfred House Road, Gregory&apos;s Road, and Independence Avenue were built for British planters and colonial officials — now they house embassies, boutiques, and the Paradise Road gallery of Sri Lankan art and antique furniture.",
                  "19:00 — Dinner at Ministry of Crab at the Dutch Hospital Precinct in Fort (book in advance at ministryofcrab.com — 48 hours minimum, a week ahead for weekends). The restaurant occupies a 1681 Dutch colonial building converted by Sri Lankan cricket stars Mahela Jayawardene and Kumar Sangakkara. Order the garlic chilli mud crab preparation — a medium crab (500–700g, LKR 3,500–4,500) is the right size for one person. The string hoppers and lunu miris are the correct accompaniment.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Day Trip to Kandy by Train — Sacred Tooth Temple & Hill Country"
                cost="LKR 2,500–5,000 ($8–17) depending on Kandy lunch choice"
                items={[
                  "06:45 — Colombo Fort railway station. The 6:55am second-class train to Kandy departs from Platform 1 (ticket LKR 200, purchased at the counter). The 3-hour journey through rubber estates, coconut palms, and the rising hill country is one of the great railway rides of Asia — the landscape changes completely from coastal flat to mountain valley within 90 minutes.",
                  "10:00 — Arrive Kandy station. Take a tuk-tuk (LKR 300–400) to the Temple of the Sacred Tooth Relic (Sri Dalada Maligawa) for the 10:30am puja ceremony (entry LKR 1,500). The tooth of the Buddha is the most important Buddhist relic outside Thailand — the morning ceremony with drums, incense, and white-robed priests unveiling the reliquary casket is deeply moving even for non-Buddhists.",
                  "11:30 — Walk around Kandy Lake. The artificial lake built by King Sri Wickrama Rajasinha in 1807 is surrounded by the cloud forest of the Udawatta Kele sanctuary. The hill reflections at mid-morning are exceptional. The town&apos;s small bazaar on Dalada Veediya is good for spices, batik, and Ceylon tea.",
                  "13:00 — Lunch in Kandy town. A rice-and-curry restaurant near the town centre serves upcountry Sri Lankan food — jackfruit curry, pol sambol, dhal, and pumpkin curry (LKR 450–700). This is distinctly different from Colombo&apos;s coastal cuisine and worth sampling.",
                  "15:30 — Return train to Colombo from Kandy station (departs 3:40pm or 5:35pm, LKR 200). The late-afternoon light through the hill tunnels is extraordinary. Arrive Colombo Fort by 7pm.",
                  "20:00 — Final dinner in Colombo. The Lagoon restaurant at the Cinnamon Grand Colombo (Colombo 3) specialises in Sri Lankan seafood — the whole crab with devilled sauce or the tiger prawn preparation are excellent (LKR 3,500–5,000 per person). Alternatively, Beach Wadiya on Station Road in Colombo 6 is an outdoor seafood garden open since 1987 — whole crabs, grilled prawns, and calamari with the ocean beside you (LKR 2,000–3,500 per person).",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Colombo" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Colombo Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry fees as of early 2026 in Sri Lankan Rupees (LKR). USD approximate at current rates.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Gangaramaya Temple",
                  e: "LKR 1,000 (~$3.30)",
                  d: "The most important Buddhist temple in Colombo, built on reclaimed land beside Beira Lake in the 1880s. The temple complex combines Thai, Indian, Chinese, and Sri Lankan architectural styles across several interconnected buildings. The museum section houses one of the most eclectic devotional collections in Asia — everything from golden Buddhas to vintage motorcars donated by devout patrons. Arrive at 8am for the morning puja when monks chant in the inner sanctum.",
                  t: "Must see · 90 mins",
                },
                {
                  n: "Galle Face Green",
                  e: "Free",
                  d: "A 1.5km oceanfront promenade running along the Indian Ocean from the Galle Face Hotel to the Fort district. Created by the British in 1859 as a recreational space for colonial officers, it is now Colombo&apos;s most democratic public space — kite flyers, isso wade vendors, cricket players, and evening walkers all share the same seafront. The sunset here, with the Colombo skyline behind and the ocean in front, is one of Asia&apos;s great urban sunset spots.",
                  t: "Must see · Sunset",
                },
                {
                  n: "Pettah Market",
                  e: "Free",
                  d: "Colombo&apos;s wholesale market district, immediately east of the Fort. Each street specialises in a different category of goods: Sea Street is the gold jewellery district, Second Cross Street is electronics, Main Street is fabric and saris, and the lanes behind the Red Mosque are fish and spice. Pettah is most intense on weekday mornings. Come without a schedule and follow the activity. The most sensory neighbourhood in the city.",
                  t: "Must do · 2 hrs",
                },
                {
                  n: "National Museum of Sri Lanka",
                  e: "LKR 300 (~$1)",
                  d: "Located on Marcus Fernando Mawatha in the Cinnamon Gardens neighbourhood. The museum holds the original throne and crown of Sri Vikrama Rajasinha, the last Kandyan king, as well as a replica of the Sacred Tooth Relic, ancient bronzes, Kandyan jewellery, and Portuguese and Dutch colonial artefacts. The building itself — a 1877 British colonial structure with Italianate details — is one of Colombo&apos;s finest architectural landmarks.",
                  t: "Recommended · 1.5 hrs",
                },
                {
                  n: "Beira Lake & Seema Malaka",
                  e: "LKR 300 for Seema Malaka",
                  d: "Beira Lake is a 65-hectare urban lake in the heart of Colombo, originally part of the Dutch-era fort moat system. The Seema Malaka floating temple, designed by renowned Sri Lankan architect Geoffrey Bawa and rebuilt in 1978, sits on pontoons in the lake and functions as a meditation space for monks. The combination of the floating temple&apos;s reflection with the city skyline behind is one of Colombo&apos;s most photogenic views.",
                  t: "Recommended · 30 mins",
                },
                {
                  n: "Cinnamon Gardens (Colombo 7)",
                  e: "Free",
                  d: "Colombo&apos;s most elegant neighbourhood, named for the cinnamon plantations that occupied the land under Dutch rule. The streets are lined with colonial mansions now housing embassies, boutiques, and cultural institutions. Viharamahadevi Park — formerly Victoria Park, renamed after the mother of King Dutugamunu — is a green lung in the neighbourhood with a large reclining Buddha and a children&apos;s play area. The Paradise Road gallery and Barefoot on Galle Road are the best stops for Sri Lankan art and design.",
                  t: "Walk · 1 hr",
                },
                {
                  n: "Dutch Hospital Shopping Precinct",
                  e: "Free to enter",
                  d: "The oldest building in Colombo, constructed by the Dutch East India Company (VOC) in 1681 as a hospital for their trading fleet. Brilliantly restored in 2011 and repurposed as a dining and shopping precinct in the Fort district. The stone-vaulted colonial corridors are extraordinarily intact. Home to Ministry of Crab, Nihonbashi Japanese restaurant, and several boutique shops. Worth visiting even if not eating here.",
                  t: "Architecture · 30 mins",
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
            title="Colombo — Ocean, Temples &amp; the Dutch Hospital"
            subtitle="Sri Lanka&apos;s layered capital city from Galle Face sunset to Gangaramaya&apos;s morning puja."
            spots={[
              {
                name: "Galle Face Green Sunset",
                query: "galle face green colombo sunset ocean promenade sri lanka",
                desc: "The 1.5km oceanfront promenade at golden hour — isso wade vendors, kite flyers, and the Indian Ocean horizon.",
              },
              {
                name: "Gangaramaya Temple Beira Lake",
                query: "gangaramaya temple beira lake colombo sri lanka buddhist",
                desc: "Colombo&apos;s principal Buddhist temple on Beira Lake, with its extraordinary collection of devotional objects from across the Buddhist world.",
              },
              {
                name: "Pettah Market Colombo",
                query: "pettah market colombo sri lanka bazaar crowded colourful",
                desc: "The wholesale market district — each street a different world of spices, gold, electronics, and fabric.",
              },
              {
                name: "Dutch Hospital Fort Colombo",
                query: "dutch hospital colombo fort colonial architecture sri lanka",
                desc: "The 1681 VOC hospital building, now a preserved dining and shopping precinct — the oldest structure in Colombo.",
              },
              {
                name: "Cinnamon Gardens Colombo 7",
                query: "cinnamon gardens colombo 7 colonial mansions viharamahadevi park",
                desc: "The leafy colonial quarter of Colombo — mansions, embassies, and Viharamahadevi Park under the jacaranda trees.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Colombo can be done on a tight budget or in considerable style. The biggest variable is food — a rice-and-curry lunch in Pettah costs LKR 350, while a crab dinner at Ministry of Crab can reach LKR 15,000 per person. The city&apos;s heritage sites are all very inexpensive.
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
                    ["✈️ Airport transfer", "LKR 150 (train)", "LKR 2,800 (PickMe taxi)", "LKR 6,000 (private car)"],
                    ["🏨 Accommodation (per night)", "LKR 3,500–6,500 ($12–22)", "LKR 18,000–30,000 ($60–100)", "LKR 60,000–120,000 ($200–400)"],
                    ["🛺 City transport (daily)", "LKR 600–1,200 (tuk-tuk)", "LKR 2,000–4,000 (private tuk-tuk)", "LKR 6,000–15,000 (car)"],
                    ["🏛️ Entry fees (3 days)", "LKR 1,600–2,500 ($5–8)", "LKR 1,600–2,500 ($5–8)", "LKR 5,000–10,000 (guided)"],
                    ["🍽️ Food (daily)", "LKR 1,800–3,600 ($6–12)", "LKR 7,500–12,000 ($25–40)", "LKR 24,000–48,000 ($80–160)"],
                    ["TOTAL (per person/day)", "$35–55", "$100–150", "$350–600"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($35–55/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Colombo City Hostel or a Colombo 3 guesthouse (LKR 3,500–6,500/night), rice-and-curry canteens, tuk-tuk via PickMe. The city&apos;s best experiences — Galle Face sunset, Gangaramaya, Pettah — are all free or near-free. Budget travel here is excellent.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($100–150/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique hotel in Fort or Colombo 3 (LKR 18,000–30,000/night), one Ministry of Crab dinner (budget: share a medium crab), Barefoot Gallery lunch. A comfortable and well-rounded Colombo experience.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($350–600/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Galle Face Hotel (historic 1864, from LKR 45,000/night) or Cinnamon Grand Colombo, private guided tours, Ministry of Crab XXL crab, rooftop dining at the Cinnamon Grand Sky Lounge. The city rewards luxury travel with genuine heritage.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Colombo</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The best areas to stay are Fort (walkable to Dutch Hospital, colonial architecture), Colombo 3 (Kollupitiya — near Galle Face Green and the best restaurants), and Colombo 7 (Cinnamon Gardens — leafy, quieter, close to the National Museum and Barefoot). Fort is noisier but the most historically interesting base.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Galle Face Hotel",
                  type: "Luxury heritage · Colombo 3 — oceanfront",
                  price: "From LKR 45,000/night ($150)",
                  badge: "Most iconic",
                  desc: "The oldest hotel east of Suez, opened in 1864 — a grand colonial building directly on the Indian Ocean with the Galle Face Green promenade at the doorstep. Guest signatures include Queen Elizabeth, Prince Philip, and John D. Rockefeller. The Long Bar is one of Asia&apos;s great colonial hotel bars. The heritage ocean-facing rooms are worth the premium.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Cinnamon Grand Colombo",
                  type: "Luxury contemporary · Colombo 3",
                  price: "From LKR 30,000/night ($100)",
                  badge: "Best facilities",
                  desc: "The contemporary luxury benchmark in Colombo — 501 rooms, multiple restaurants including the rooftop Sky Lounge, a large pool, and excellent service. Well-located between Galle Face Green and the Colombo 7 neighbourhoods. The Sky Lounge has the best panoramic views of the city skyline.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "The Fort by Jetwing",
                  type: "Boutique · Fort district",
                  price: "From LKR 18,000/night ($60)",
                  badge: "Best location",
                  desc: "A well-designed boutique hotel in a converted colonial building in the Fort district — walking distance to the Dutch Hospital, Pettah Market, and the major historic sights. The rooftop terrace has views over the harbour. Excellent value for the location and quality. Recommended for those who want to walk to the main sights.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Colombo City Hostel",
                  type: "Hostel · Colombo 3",
                  price: "From LKR 3,500/night ($12)",
                  badge: "Best budget",
                  desc: "A well-run hostel in a converted colonial house in Colombo 3, walking distance from Galle Face Green. Clean dormitories and private rooms, social common areas, a small kitchen, and a good community of travellers who are using Colombo as a base for the island rather than just a stopover. The best budget option in the city.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Colombo</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Colombo has one of South Asia&apos;s most diverse and exciting restaurant scenes — from the rice-and-curry canteens of Pettah (LKR 300) to the Japanese precision of Nihonbashi and the theatrical whole-crab experience of Ministry of Crab. Breakfast on hoppers — bowl-shaped crispy rice-flour pancakes with a fried egg inside — is the non-negotiable Colombo morning ritual.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Ministry of Crab",
                  t: "Sri Lankan seafood · Dutch Hospital Precinct, Fort",
                  d: "The most famous restaurant in Sri Lanka and one of Asia&apos;s most extraordinary dining experiences. Housed in a 1681 Dutch colonial building, co-owned by cricketers Mahela Jayawardene and Kumar Sangakkara. The menu is entirely focused on Sri Lankan crabs — caught the same day from lagoons around the island — prepared in garlic chilli, black pepper, or butter sauce. The garlic chilli preparation is the original and definitive version. A medium crab (500–700g) costs LKR 3,500–4,500. Book online at ministryofcrab.com at least 48 hours in advance — walk-ins are almost never accepted.",
                  b: "Book ahead",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Nihonbashi",
                  t: "Japanese · Galle Road, Colombo 3",
                  d: "Widely regarded as the best Japanese restaurant in South Asia and a Colombo institution for two decades. The omakase counter and the teppanyaki tables produce genuinely world-class food. Sri Lanka has a large Japanese expat community — the sashimi sourced from local Sri Lankan waters is exceptional. Book ahead. LKR 5,000–9,000 per person for a full meal with sake.",
                  b: "Best Japanese",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "The Lagoon — Cinnamon Grand",
                  t: "Sri Lankan seafood · Colombo 3",
                  d: "The seafood restaurant at Cinnamon Grand, specialising in whole Sri Lankan crabs, lobster, and tiger prawns. Less theatrical than Ministry of Crab but more reliably available without long advance booking. The devilled crab and the pepper prawn preparations are the signature dishes. LKR 3,500–5,500 per person. Good for groups or families.",
                  b: "Best alternative to MoC",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Hopper stalls — Colombo 3 & Colombo 7",
                  t: "Street food · Galle Road area",
                  d: "Hoppers (appa in Sinhala) are the definitive Colombo breakfast. Bowl-shaped crispy rice-flour pancakes — plain, with egg, or with jaggery and coconut milk (honey hoppers) — cooked fresh on cast iron pans. String hoppers (noodle-like rice flour steamed cakes) with coconut sambol are the companion dish. Roadside hopper stalls open from 6:30am and close when they run out (usually by 10am). Budget LKR 100–200 for a full hopper breakfast.",
                  b: "Morning essential",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Pettah canteens",
                  t: "Rice-and-curry · Pettah Market area",
                  d: "The unlabelled canteens on Main Street and Second Cross Street in Pettah serve the cheapest and most authentic Sri Lankan rice-and-curry in the city — a mounded plate of rice with four or five curries (dhal, brinjal, beans, fish or chicken), papadum, and pol sambol (fresh coconut relish) for LKR 300–450. No menus, no signage, just follow the office workers at 1pm. Brilliant.",
                  b: "Most authentic",
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
            destination="Colombo Sri Lanka"
            hotels={[
              {
                name: "Galle Face Hotel",
                type: "Luxury heritage · Oceanfront since 1864",
                price: "From LKR 45,000/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/lk/galle-face.html?aid=2820480",
              },
              {
                name: "Cinnamon Grand Colombo",
                type: "Luxury contemporary · Colombo 3",
                price: "From LKR 30,000/night",
                rating: "5",
                badge: "Best facilities",
                url: "https://www.booking.com/hotel/lk/cinnamon-grand-colombo.html?aid=2820480",
              },
              {
                name: "The Fort by Jetwing",
                type: "Boutique colonial · Fort district",
                price: "From LKR 18,000/night",
                rating: "4",
                badge: "Best location",
                url: "https://www.booking.com/hotel/lk/the-fort-by-jetwing.html?aid=2820480",
              },
              {
                name: "Colombo City Hostel",
                type: "Hostel · Colombo 3",
                price: "From LKR 3,500/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/lk/colombo-city-hostel.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Colombo City Heritage Walking Tour",
                duration: "3 hrs",
                price: "From LKR 3,000/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=Colombo+city+tour&partner_id=PSZA5UI",
              },
              {
                name: "Colombo Food Tour — Hoppers, Kottu & Crab",
                duration: "3.5 hrs",
                price: "From LKR 5,000/person",
                badge: "Top rated",
                url: "https://www.getyourguide.com/s/?q=Colombo+food+tour&partner_id=PSZA5UI",
              },
              {
                name: "Kandy Day Trip from Colombo by Train",
                duration: "Full day",
                price: "From LKR 8,000/person",
                badge: "Scenic",
                url: "https://www.getyourguide.com/s/?q=Kandy+day+trip+Colombo&partner_id=PSZA5UI",
              },
              {
                name: "Colombo Tuk-Tuk Night Tour",
                duration: "2 hrs",
                price: "From LKR 4,000/person",
                url: "https://www.getyourguide.com/s/?q=Colombo+tuk+tuk+night+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Colombo</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🦞",
                  title: "Not booking Ministry of Crab at least 2 days in advance",
                  desc: "Ministry of Crab is one of the most in-demand restaurants in Asia. Walk-ins are almost never accepted. Book online at ministryofcrab.com at least 48 hours ahead — ideally a week in advance for weekend dinner. If fully booked, The Lagoon at Cinnamon Grand is the best alternative for Sri Lankan crab, or Beach Wadiya on Station Road for an outdoor seafood experience.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🚕",
                  title: "Arguing over tuk-tuk fares instead of using PickMe",
                  desc: "PickMe is Sri Lanka&apos;s ride-hailing app and provides transparent metered pricing throughout Colombo. Street tuk-tuks quote 3–4x the app rate for tourists. A Fort-to-Gangaramaya ride should cost LKR 150–250 by app versus LKR 600–800 by street negotiation. Download PickMe before leaving the airport and use it exclusively for city transport.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🏖️",
                  title: "Treating Colombo as just a transit stop to the beaches",
                  desc: "Most international visitors fly in and rush south to Galle, Mirissa, or Ella the same day. Colombo has extraordinary food, colonial architecture, the finest crab restaurant in Asia, and Gangaramaya Temple — a complex that takes 90 minutes and rewards every minute. The Dutch Hospital alone justifies an afternoon. Two nights in Colombo pays dividends.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🕌",
                  title: "Entering temples without appropriate dress",
                  desc: "All Buddhist temples and Hindu kovils in Colombo require covered shoulders and legs below the knee. Shoes and socks are removed at the entrance. Galle Face Green and the street areas are fine in shorts, but carry a light cotton wrap for temple visits — Gangaramaya and Seema Malaka are the main sites requiring this. Sarongs are sold outside Gangaramaya for LKR 200.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🌦️",
                  title: "Visiting during the south-west monsoon without an indoor plan",
                  desc: "Colombo receives its heaviest rainfall between May and August. Outdoor activities like Galle Face Green at sunset are dramatically affected by heavy rain. Always have indoor alternatives ready: the National Museum, Dutch Hospital, Gangaramaya&apos;s museum wing, and Nihonbashi or Ministry of Crab for dinner are all excellent regardless of weather.",
                  color: "bg-blue-50 border-blue-200",
                },
              ].map((m) => (
                <TipCard key={m.title} {...m} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Colombo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🦀",
                  title: "Order garlic chilli at Ministry of Crab",
                  desc: "Ministry of Crab offers several preparations — garlic chilli, black pepper, butter, and chilli — but the garlic chilli is the original and definitive version. Order a medium crab (500–700g) to start and a large (1–1.5kg) as the main between two people. The crab is caught the same day from Sri Lankan lagoons and arrives alive at the kitchen.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚂",
                  title: "Take the train to Kandy, not the highway bus",
                  desc: "The Colombo–Kandy highway takes 2.5 hours by car but misses the landscapes entirely. The train takes 3 hours and passes through colonial-era viaducts, rubber estates, and the hill country rising from the coastal plain — arguably the best 3-hour train ride in South Asia. Second class with open windows is LKR 200 and the authentic way to travel. Book a day ahead if possible for the 6:55am service.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🥥",
                  title: "Eat isso wade at Galle Face Green at sunset",
                  desc: "Isso wade are deep-fried lentil patties topped with a whole prawn, served with pol sambol and lime. Vendors at Galle Face Green have been selling them since the 1920s. Three isso wade and a King Coconut water costs LKR 250 ($0.80). Arrive 45 minutes before sunset for the best position along the promenade — the light on the ocean turns extraordinary in the final 15 minutes before the sun drops.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🍳",
                  title: "Eat hoppers for breakfast on your first morning",
                  desc: "Hoppers (appa) are bowl-shaped crispy rice-flour pancakes — eaten plain, with egg, or with coconut milk and jaggery. They are one of the great breakfast dishes of Asia and the defining food of Sri Lanka. Look for roadside hopper stalls in Colombo 3 and Colombo 7 that open from 6:30am. Budget LKR 100–200 for a full breakfast. Do not leave Colombo without eating hoppers.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "💱",
                  title: "Exchange money at Fort Forex counters, not the airport",
                  desc: "Airport Forex counters in Bandaranaike International give rates 8–12% worse than the licensed counters in Colombo Fort and along Galle Road. Bank of Ceylon and licensed private counters in Fort are the best options. The USD-to-LKR rate can fluctuate significantly — check xe.com before exchanging. Credit cards are accepted at most hotels and restaurants in Fort and Colombo 3.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🗺️",
                  title: "Base yourself in Colombo 3 for maximum convenience",
                  desc: "Colombo 3 (Kollupitiya) is the optimal neighbourhood for most travellers: Galle Face Green is a 5-minute walk, PickMe tuk-tuks to Fort, Pettah, and Gangaramaya are all under LKR 400, and the best restaurants (Ministry of Crab, Nihonbashi, The Lagoon) are within 15 minutes. Fort is noisier but has more colonial character. Colombo 7 is quieter but slightly farther from Galle Face.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Colombo" />

          {/* Combine With */}
          <CombineWith currentSlug="colombo-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days should I spend in Colombo?",
                  a: "Two to three days is ideal. Day 1 covers Pettah market, Galle Face Green at sunset, and kottu roti dinner. Day 2 covers Gangaramaya Temple, Beira Lake, the National Museum, and Ministry of Crab dinner. Day 3 works perfectly as a day trip to Kandy by train — one of the most scenic rail journeys in Asia, departing 6:55am and returning by 7pm. If time is genuinely short, Colombo works as a 2-night stopover, but you will want to come back.",
                },
                {
                  q: "What is the best way to get from Bandaranaike Airport to Colombo city?",
                  a: "The airport express train from Katunayake station (10 minutes walk or a LKR 200 tuk-tuk from the terminal) to Colombo Fort station is the best option: 1 hour, LKR 150, comfortable carriages. For night arrivals or heavy luggage, a PickMe app taxi costs LKR 2,200–2,800 to central Colombo and takes 45 minutes to 1.5 hours depending on traffic. Avoid unlicensed touts at arrivals — they charge 3–4x the normal rate.",
                },
                {
                  q: "Do I need to book Ministry of Crab in advance?",
                  a: "Yes — absolutely. Ministry of Crab is one of the most in-demand restaurants in Asia and walk-ins are almost never accepted. Book at ministryofcrab.com a minimum of 48 hours ahead, and at least a week in advance for Friday or Saturday dinner. If it is fully booked, The Lagoon at Cinnamon Grand is the best alternative for Sri Lankan crab, or try Beach Wadiya on Station Road in Colombo 6 for an outdoor seafood garden experience.",
                },
                {
                  q: "What is the best area to stay in Colombo?",
                  a: "Colombo 3 (Kollupitiya) is the most convenient base — it is walking distance from Galle Face Green, close to the best restaurants, and well-served by PickMe for tuk-tuks to Fort, Pettah, and Gangaramaya. Fort is the most historically interesting neighbourhood but noisy and less comfortable. Colombo 7 (Cinnamon Gardens) is the most elegant and leafy option — ideal for those staying at Cinnamon Grand — but 15 minutes by tuk-tuk from Galle Face.",
                },
                {
                  q: "Is the day trip to Kandy worth it from Colombo?",
                  a: "Absolutely. The Temple of the Sacred Tooth Relic in Kandy is Sri Lanka&apos;s most important Buddhist site and the morning puja ceremony (10:30am) with drums and incense is deeply memorable. The Colombo–Kandy railway journey through the hill country is considered one of the best short train rides in South Asia. Leave Colombo on the 6:55am train (LKR 200), arrive by 10am, see the temple and Kandy Lake, and return on the 5:35pm or 3:40pm train.",
                },
                {
                  q: "What are hoppers and where should I eat them in Colombo?",
                  a: "Hoppers (appa in Sinhala) are bowl-shaped crispy pancakes made from fermented rice flour and coconut milk, cooked in a small wok-like pan. The most common versions are plain, egg hopper (a fried egg in the centre), and honey hopper (with coconut milk and jaggery). They are eaten with sambol, coconut milk, and dhal. Roadside stalls in Colombo 3 and Colombo 7 open from 6:30am and typically sell out by 10am. Budget LKR 30–60 per hopper.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Colombo trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/colombo-travel-tips", label: "Travel tips", icon: "📋" },
                { href: "/blog/sri-lanka-7-days", label: "Sri Lanka 7-day guide", icon: "🗺️" },
                { href: "/blog/galle-3-days", label: "Galle 3 days", icon: "🏰" },
                { href: "/blog/kandy-guide", label: "Kandy guide", icon: "🏛️" },
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
          <RelatedGuides currentSlug="colombo-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Asia City Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Sri Lanka in 7 Days — Full Island Circuit", href: "/blog/sri-lanka-7-days" },
                { label: "Galle 3 Days — Fort & Southern Coast", href: "/blog/galle-3-days" },
                { label: "Maldives 5 Days — Atolls &amp; Overwater", href: "/blog/maldives-5-days" },
                { label: "Singapore 3 Days — City-State Guide", href: "/blog/singapore-3-days" },
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
