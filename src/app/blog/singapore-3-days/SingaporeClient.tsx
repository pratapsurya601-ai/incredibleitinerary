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
const SINGAPORE_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Singapore Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "3-Day Itinerary" },
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
          href: `mailto:?subject=Singapore 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Singapore in 3 Days — hawker food, Gardens by the Bay and the world's best zoo&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/singapore-3-days"
        imageUrl="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80"
        description="Singapore in 3 Days: Gardens by the Bay free Supertree show, Michelin hawker food at Maxwell Centre, Singapore Zoo, Sentosa, and budget breakdown in SGD."
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
export default function SingaporeClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={SINGAPORE_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Singapore" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="singapore marina bay sands gardens by the bay night skyline"
            fallback="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1600&q=80"
            alt="Singapore Marina Bay Sands and Gardens by the Bay Supertrees illuminated at night"
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
              <span className="text-white/70">Singapore 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Asia
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Singapore in 3 Days:
                <em className="italic text-amber-300"> Hawker Food, Gardens &amp; the World&apos;s Best Zoo</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Michelin-starred hawker food for $3, a forest under a glass dome, the free Supertree light show, and an airport that&apos;s genuinely a tourist attraction. The complete guide.
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
              <span>🇸🇬 Singapore</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From SGD 80/day (~$60)</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              A city-state that should not exist — Singapore has no natural resources, no hinterland, and imported its water until recently. What it built instead is one of the world&apos;s most efficient, green, and astonishing cities. Hawker centres serve food that earned Michelin stars for $3. Gardens by the Bay grew a forest under a glass dome. And Changi Airport is genuinely a tourist attraction.
            </p>
          </blockquote>

          {/* ── WHAT SINGAPORE ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Singapore Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Singapore is a city, a country, and an island all at once — 733 square kilometres of reclaimed land, tropical gardens, and vertical engineering crammed between Malaysia and Indonesia. It became independent in 1965, had almost nothing, and built itself into one of the wealthiest nations on earth in a single generation.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              For travellers, this means an absurd concentration of things to do in a tiny area. Marina Bay Sands and the Merlion are a 10-minute walk from Chinatown. Gardens by the Bay is across the road from the financial district. Little India, Arab Street, and Orchard Road are all within MRT range of each other. You can eat Michelin-starred chicken rice for SGD 5 and drink a cocktail on a 57th-floor infinity pool the same afternoon.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The city is immaculately clean, astonishingly safe, and runs with a precision that makes Swiss trains look casual. The MRT metro covers every attraction. English is spoken everywhere. The only real challenge is managing costs — Singapore can be budget-friendly if you eat at hawker centres and use the MRT, or wildly expensive if you default to restaurants and taxis.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="SIN (Changi)" />
              <StatCard icon="🌡️" label="Best Months" value="Feb–Apr" />
              <StatCard icon="🗓" label="Duration" value="3 Days" />
              <StatCard icon="💰" label="Budget From" value="SGD 80/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Singapore</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Feb–Apr",
                  i: "☀️",
                  t: "Dry Season — Best Time",
                  d: "The driest months in Singapore with the least rainfall. Temperatures hover at 25–32°C (same as always — Singapore is equatorial). Outdoor attractions like Gardens by the Bay and Sentosa beaches are most enjoyable. Chinese New Year falls in January/February and brings vibrant festivities in Chinatown.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Aug–Oct",
                  i: "🌤️",
                  t: "Secondary Dry Window",
                  d: "Another relatively dry period. August has the National Day celebrations (9 Aug) with spectacular fireworks over Marina Bay. September and October are pleasant for sightseeing. Hotel prices are moderate compared to the December–January peak.",
                  b: "Good option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "May–Jul",
                  i: "🌧️",
                  t: "Southwest Monsoon — Afternoon Showers",
                  d: "Warm and humid with afternoon thunderstorms that typically last 1–2 hours. Most attractions are indoor or covered (malls, museums, Cloud Forest dome), so rain rarely ruins a day. Prices drop and crowds thin. Carry an umbrella and plan indoor activities for 2–4pm.",
                  b: "Still viable",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Nov–Jan",
                  i: "🌧️",
                  t: "Northeast Monsoon — Wettest Months",
                  d: "The wettest period with longer, heavier rain. December is peak tourist season despite the rain due to Christmas celebrations, Orchard Road lights, and year-end holidays. Hotel prices spike in December. January brings Chinese New Year preparations. Budget travellers should avoid December.",
                  b: "Expensive peak",
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
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Singapore</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Singapore Changi Airport (SIN) is consistently voted the world&apos;s best airport. It is a destination in itself — Jewel Changi has the world&apos;s tallest indoor waterfall, a butterfly garden, and rooftop cactus garden. Arrive 3 hours early for departure and explore.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Changi Airport (SIN)",
                  d: "Singapore's sole international airport, connected to the city by MRT (East-West line). Terminal to city centre takes 30–40 minutes by MRT (SGD 2). Buy an EZ-Link card at the airport for SGD 12 (includes SGD 7 credit) — use it on MRT, buses, and some taxis. Never take a taxi from the airport when the MRT is running (~5:30am–midnight).",
                  b: "Main gateway",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🇮🇳",
                  t: "From India (direct flights)",
                  d: "Direct flights from Delhi, Mumbai, Bangalore, Chennai, Hyderabad, and Kolkata — 4.5 to 6 hours. Budget carriers like IndiGo, Scoot, and AirAsia offer fares from INR 8,000–15,000 one way. Singapore Airlines and Vistara offer premium options. Indians need an Entry Permission from ICA (ica.gov.sg) — SGD 30, approved in 1–3 business days.",
                  b: "4.5–6 hrs direct",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚇",
                  t: "MRT System (getting around)",
                  d: "Singapore's MRT is one of the world's best metro systems — clean, air-conditioned, covers every major attraction, and costs SGD 1–2.50 per trip. Marina Bay, Chinatown, Little India, Orchard, Sentosa (via HarbourFront), and the Zoo area are all MRT-accessible. Download MyTransport.SG for live arrival times. A Grab taxi costs 5–10x more for the same journey.",
                  b: "Best transport",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🌏",
                  t: "Visa-free for most passports",
                  d: "USA, UK, Australia, Canada, EU, Japan, Korea, and most Western passports get 30–90 days visa-free. All ASEAN nationals enter visa-free for 30+ days. Indian passport holders need an ICA Entry Permission (SGD 30, apply online 5–7 days before travel). Singapore is usually combined with Bangkok, Kuala Lumpur, or Bali on a multi-stop trip.",
                  b: "Easy entry",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Singapore Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary focuses on the budget-friendly approach — hawker centres over restaurants, MRT over taxis, and free attractions where possible. Prices in SGD with USD equivalents.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Marina Bay · Gardens by the Bay · Chinatown · Supertree Light Show"
                cost="SGD 60–80 (~$45–60 USD)"
                items={[
                  "9:00am — Marina Bay waterfront walk — free, one of the world's most spectacular urban waterfronts. Walk from the Helix Bridge to the Merlion. The skyline views are extraordinary.",
                  "10:00am — Merlion Park (free) — the half-lion half-fish statue. Overrated but obligatory. Takes 10 minutes. Good for photos with Marina Bay Sands in the background.",
                  "10:30am — Walk to Gardens by the Bay: Supertree Grove (free to walk around). The Skyway bridge between the Supertrees costs SGD 14 (~$10.50) — worth it for the elevated views across the gardens and Marina Bay.",
                  "12:00pm — Cloud Forest and Flower Dome inside Gardens by the Bay (SGD 28 / ~$21 for both domes). The Cloud Forest has a 35-metre indoor mountain waterfall — extraordinary. The Flower Dome is the world's largest glass greenhouse. Budget 2 hours for both.",
                  "2:00pm — Lunch at Maxwell Food Centre (10 min by MRT from Gardens): Tian Tian Hainanese Chicken Rice — the stall that held a Michelin Bib Gourmand for years. Chicken rice + soup for SGD 5–6 (~$4). One of Singapore's defining dishes.",
                  "4:00pm — Chinatown: Sri Mariamman Temple (free, Singapore's oldest Hindu temple), Chinatown Heritage Centre, Pagoda Street shopping. A fascinating mix of Chinese, Indian, and Malay cultures in a few blocks.",
                  "6:00pm — Chinatown Complex Food Centre for dinner — 260 stalls, SGD 4–8 (~$3–6) per dish. Order char kway teow, laksa, or BBQ stingray. The largest hawker centre in Singapore.",
                  "7:45pm — Return to Gardens by the Bay for the Garden Rhapsody light show at the Supertree Grove (free, runs 7:45pm and 8:45pm nightly). One of the most spectacular free shows in Asia — the Supertrees come alive in colour and synchronized music.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Sentosa Island · Little India · Haw Par Villa · Tekka Centre"
                cost="SGD 30–120 (~$22–90 USD, depending on Universal Studios)"
                items={[
                  "9:00am — Take MRT to HarbourFront, walk across the Sentosa Boardwalk to Sentosa Island (free on foot). The boardwalk takes 10–15 minutes and has good harbour views.",
                  "10:00am — Palawan Beach and Siloso Beach (free) — Sentosa's beaches are man-made but pleasant. Calm water, clean sand, and a suspended bridge to the southernmost point of continental Asia.",
                  "11:30am — Universal Studios Singapore (SGD 83 / ~$62) — optional. Skip if you've been to a Universal park. The rides are good but the park is small compared to Orlando or Osaka. Great for families with children.",
                  "1:00pm — Lunch at Sentosa food court or back in HarbourFront VivoCity mall (SGD 10–15 / ~$7.50–11). VivoCity has a wide range of food options and is right at the MRT station.",
                  "3:00pm — MRT to Little India: Mustafa Centre (24-hour shopping — everything from electronics to spices), Sri Veeramakaliamman Temple (vibrant Hindu temple), Tekka Centre wet market. Little India is Singapore's most colourful neighbourhood.",
                  "5:00pm — Haw Par Villa (free, MRT to Haw Par Villa station) — Singapore's strangest attraction. A 1937 Chinese mythology theme park built by the Tiger Balm brothers with 1,000 statues depicting hell, heaven, and moral parables. The Ten Courts of Hell dioramas are utterly bizarre and fascinating. Most tourists skip it entirely — their loss.",
                  "7:30pm — Dinner at Tekka Centre food court in Little India — roti prata, fish head curry, biryani for SGD 6–10 (~$4.50–7.50). Authentic South Indian food in a genuine neighbourhood setting.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Singapore Zoo · Orchard Road · Bugis Street · Lau Pa Sat · Changi Airport"
                cost="SGD 80–120 (~$60–90 USD)"
                items={[
                  "9:00am — Singapore Zoo (SGD 48 / ~$36) — consistently voted one of the world's best zoos. Open-concept moats instead of cages, with orangutans roaming freely overhead. Budget 3–4 hours minimum.",
                  "Optional: Breakfast in the Zoo with orangutans (SGD 38 / ~$28 additional) — eat while orangutans swing and feed next to your table. Memorable, especially for families.",
                  "Optional: River Wonders (adjacent to zoo, SGD 38 / ~$28 separate) — giant pandas, Amazon river manatees, the world's largest freshwater aquarium. Add 2 hours if visiting.",
                  "1:00pm — Lunch at the zoo food court or return to city centre for a hawker lunch. The zoo is in northern Singapore — MRT back to the city takes about 40 minutes.",
                  "3:00pm — Orchard Road — Singapore's famous shopping street. Window-shop or browse ION Orchard for luxury brands. Even if you don't shop, the architecture and air-conditioned malls are impressive.",
                  "5:00pm — Bugis Street market for souvenir shopping — clothes, accessories, snacks at bargain prices. One of the few places in Singapore where you can haggle.",
                  "7:00pm — Dinner at Lau Pa Sat (Telok Ayer Market) — a Victorian cast-iron market building, with an outdoor satay street that opens in the evenings. Satay 3 sticks for SGD 3 (~$2.25). Atmospheric and central.",
                  "After dinner: If departing, Changi Airport is worth arriving 3 hours early. Jewel Changi has the world's tallest indoor waterfall (7 storeys, free to view), a hedge maze, mirror maze, butterfly garden, and rooftop cactus garden. Budget travellers: have a full duty-free dinner here instead of paying city restaurant prices.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Singapore" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏙️ Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The must-see attractions in order of priority. Singapore packs an extraordinary amount into 733 square kilometres — every landmark below is reachable by MRT.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Gardens by the Bay",
                  e: "Free (gardens) / SGD 28 (~$21, both domes) / SGD 14 (~$10.50, Skyway)",
                  d: "The Supertree Grove is free to walk. The two conservatories — Cloud Forest (35m indoor waterfall and mountain) and Flower Dome (world's largest glass greenhouse) — are SGD 28 combined. The OCBC Skyway bridge between Supertrees is SGD 14. The free Garden Rhapsody light show runs nightly at 7:45pm and 8:45pm.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Marina Bay Sands SkyPark",
                  e: "SGD 32 (~$24, observation deck)",
                  d: "200-metre views of the entire Singapore skyline from the observation deck. Non-hotel guests can access the SkyPark deck but not the famous infinity pool (hotel guests only). Best at sunset. The Shoppes at Marina Bay Sands below have a canal with gondola rides and luxury retail.",
                  t: "Iconic views · 1 hr",
                },
                {
                  n: "Singapore Zoo",
                  e: "SGD 48 (~$36)",
                  d: "Genuinely world-class — open-concept enclosures with moats instead of cages. Orangutans swing freely overhead, white tigers separated only by a glass wall. The orangutan breakfast (SGD 38 additional) is unforgettable. Adjacent: River Wonders (SGD 38) and Night Safari (SGD 55). Budget a full morning.",
                  t: "Must see · 3–4 hrs",
                },
                {
                  n: "Sentosa Island",
                  e: "Free entry on foot / Universal Studios SGD 83 (~$62)",
                  d: "An entire resort island connected to the mainland by boardwalk, monorail, and cable car. Beaches (free), Universal Studios Singapore, S.E.A. Aquarium, and resort pools. Walk across the Sentosa Boardwalk from HarbourFront MRT for free. Cable car from Mount Faber costs SGD 35 return with panoramic harbour views.",
                  t: "Half day – Full day",
                },
                {
                  n: "Merlion Park",
                  e: "Free",
                  d: "The half-lion half-fish statue spouting water into Marina Bay — Singapore's national symbol. Overrated as a standalone attraction but it takes 10 minutes, the views of Marina Bay Sands from here are excellent for photos, and it connects the waterfront walking route from Helix Bridge to the Esplanade.",
                  t: "Quick stop · 15 min",
                },
                {
                  n: "Chinatown & Little India",
                  e: "Free to explore",
                  d: "Chinatown: Sri Mariamman Temple (Singapore's oldest Hindu temple, free), Chinatown Heritage Centre, Pagoda Street shopping, and the massive Chinatown Complex hawker centre. Little India: Mustafa Centre (24-hour shopping), Sri Veeramakaliamman Temple, Tekka Centre wet market and food court. Two distinct, vibrant neighbourhoods within MRT reach.",
                  t: "2–3 hrs each",
                },
                {
                  n: "Haw Par Villa",
                  e: "Free",
                  d: "Built in 1937 by the Tiger Balm brothers — 1,000 statues depicting Chinese mythology, moral parables, and the infamous Ten Courts of Hell dioramas. Deeply strange, completely unique, and totally free. Most tourists skip it. MRT directly to Haw Par Villa station.",
                  t: "Underrated · 1–1.5 hrs",
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
            title="Singapore — Gardens, Skylines &amp; Hawker Centres"
            subtitle="A city-state that packs an entire country into 733 square kilometres."
            spots={[
              {
                name: "Marina Bay Sands Skyline",
                query: "singapore marina bay sands skyline night lights reflection",
                desc: "The iconic Marina Bay Sands hotel with the city skyline reflected in Marina Bay — Singapore's defining image.",
              },
              {
                name: "Gardens by the Bay Supertrees",
                query: "gardens by the bay supertrees singapore night light show purple",
                desc: "The Supertree Grove during the Garden Rhapsody light show — free every night at 7:45pm and 8:45pm.",
              },
              {
                name: "Cloud Forest Dome",
                query: "cloud forest dome waterfall gardens by the bay singapore indoor",
                desc: "The 35-metre indoor waterfall inside the Cloud Forest conservatory at Gardens by the Bay.",
              },
              {
                name: "Singapore Hawker Centre",
                query: "singapore hawker centre food stalls busy eating local culture",
                desc: "Maxwell Food Centre or Chinatown Complex — where Michelin-starred food costs SGD 5 and the queues start at 11am.",
              },
              {
                name: "Sentosa Beach Singapore",
                query: "sentosa island beach singapore palawan siloso tropical",
                desc: "Sentosa's beaches — man-made but pleasant, with calm water and the southernmost point of continental Asia.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Singapore&apos;s reputation as expensive is only half-true. Hawker centres, the MRT, and budget hotels bring costs down dramatically. The trap is restaurants and Grab taxis — which inflate daily spending to SGD 200+ without adding real value over hawker food and the metro.
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
                    ["🏨 Accommodation", "SGD 30–60 (~$22–45)", "SGD 150–300 (~$112–225)", "SGD 500–1,500 (~$375–1,125)"],
                    ["🍽 Food (per day)", "SGD 15–30 (~$11–22)", "SGD 50–100 (~$37–75)", "SGD 150–400 (~$112–300)"],
                    ["🚇 Transport", "SGD 5–10 (~$4–7.50)", "SGD 20–40 (~$15–30)", "SGD 50–200 (~$37–150)"],
                    ["🎟 Activities", "SGD 20–60 (~$15–45)", "SGD 60–150 (~$45–112)", "SGD 200–800 (~$150–600)"],
                    ["TOTAL (per day)", "SGD 70–160 (~$52–120)", "SGD 280–590 (~$210–440)", "SGD 900–2,900 (~$675–2,175)"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (SGD 70–160/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in hostels (SGD 30–60/night), eat exclusively at hawker centres (SGD 5–10 per meal), use only MRT (SGD 2–3 per trip). Comparable to European budget travel. This is genuinely comfortable in Singapore.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">✨ Mid-Range (SGD 280–590/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique hotels in Marina Bay or Bugis (SGD 150–300/night), mix of hawker and restaurant dining, Grab for convenience. Add Marina Bay Sands SkyPark, Night Safari, and Michelin restaurants.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (SGD 900+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Raffles Singapore or The Fullerton (SGD 500–1,500/night), afternoon tea at Raffles Long Bar, Odette or Les Amis for Michelin dining (SGD 300–500/person), private yacht charter around Sentosa.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Singapore</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Singapore is small — every neighbourhood is within 30 minutes of every other by MRT. Choose based on vibe and budget rather than distance. Avoid staying in Sentosa unless you are specifically at a resort — it is not well-connected to the city.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Marina Bay Area",
                  type: "Luxury · Spectacular views · Central",
                  price: "SGD 250–1,500/night (~$187–1,125)",
                  badge: "Best views",
                  desc: "Home to Marina Bay Sands, The Fullerton, and Ritz-Carlton Millenia. Walking distance to Gardens by the Bay, Merlion, and the Esplanade. Expensive but the views over the bay at night are unmatched. The SkyPark infinity pool at MBS is hotel-guest only.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Bugis / Arab Street",
                  type: "Mid-range · Character · Central",
                  price: "SGD 100–250/night (~$75–187)",
                  badge: "Best value central",
                  desc: "One of Singapore's most characterful districts — Sultan Mosque, Haji Lane street art and boutiques, Arab Street textiles. Central location with two MRT stations. Good range of mid-range and boutique hotels. Walking distance to Little India and Chinatown.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Chinatown / Little India",
                  type: "Budget-friendly · Great food · Central",
                  price: "SGD 30–120/night (~$22–90)",
                  badge: "Best budget",
                  desc: "The best areas for budget travellers. Hostels from SGD 30/night, budget hotels from SGD 60. Surrounded by hawker centres (Chinatown Complex, Maxwell, Tekka Centre). Both neighbourhoods are on MRT lines and walking distance from the city centre. Little India has Mustafa Centre for 24-hour shopping.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Orchard Road",
                  type: "Mid-range to luxury · Shopping · Hotels",
                  price: "SGD 150–500/night (~$112–375)",
                  badge: "Shopping district",
                  desc: "Singapore's famous shopping boulevard. Dense concentration of international hotel chains (Marriott, Hilton, Mandarin Oriental). Excellent MRT connectivity. Best for shoppers and those who prefer a familiar hotel experience. Less cultural character than Bugis or Chinatown.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Sentosa Island",
                  type: "Resort · Beach · Family",
                  price: "SGD 300–1,200/night (~$225–900)",
                  badge: "Resort only",
                  desc: "Capella Singapore, W Singapore Sentosa, Amara Sanctuary. Beautiful resort properties with private beaches and pools. But poorly connected to the city — reaching Marina Bay or Little India requires a monorail to HarbourFront, then MRT. Only worth it if you are specifically doing a beach resort stay.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Singapore</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Singapore&apos;s hawker centres are the beating heart of the food culture — open-air food courts with dozens to hundreds of stalls, each specialising in one dish, passed down through generations. Multiple hawker stalls have earned Michelin recognition. A full hawker meal costs SGD 4–8 (~$3–6). There is no reason to spend SGD 40 on the same dish at a restaurant.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Maxwell Food Centre",
                  t: "Hawker centre · Chinatown · Michelin stalls",
                  d: "Home to Tian Tian Hainanese Chicken Rice (Michelin Bib Gourmand for years). The queue starts at 11am, peaks at noon — arrive at 11:15am. Chicken rice + soup for SGD 5.50 (~$4). Also excellent: Zhen Zhen porridge, Rojak, and Fuzhou oyster cake. Walking distance from Chinatown MRT.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Lau Pa Sat (Telok Ayer Market)",
                  t: "Victorian market · CBD · Evening satay street",
                  d: "A stunning Victorian cast-iron market building in the financial district. The real draw is Boon Tat Street, which closes to traffic in the evenings and becomes an outdoor satay paradise — dozens of stalls grilling meat on charcoal. 3 sticks of satay for SGD 3 (~$2.25). Atmospheric and central.",
                  b: "Best atmosphere",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Chinatown Complex Food Centre",
                  t: "Hawker centre · 260 stalls · Cheapest in city",
                  d: "Singapore's largest hawker centre with 260 stalls across two floors. Home to Liao Fan Hong Kong Soya Sauce Chicken — once the world's cheapest Michelin-starred meal at SGD 2. Also excellent for char kway teow, laksa, BBQ stingray, and carrot cake. Bargain prices even by hawker standards.",
                  b: "Biggest & cheapest",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Tekka Centre (Little India)",
                  t: "Wet market & food court · Little India",
                  d: "The ground floor is a vibrant wet market — fresh produce, spices, flowers. Upstairs is a food court with some of Singapore's best South Indian food: roti prata (flaky flatbread), fish head curry, mutton biryani, thosai. SGD 4–8 per meal. Less touristy than Maxwell or Lau Pa Sat.",
                  b: "Best Indian food",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Jumbo Seafood (Clarke Quay)",
                  t: "Restaurant · Chilli crab · Riverside",
                  d: "Singapore's signature dish is chilli crab — sweet, spicy, tangy sauce over fresh mud crab, eaten with fried mantou buns. Jumbo Seafood at Clarke Quay is the most famous spot. SGD 60–100 (~$45–75) per person. A splurge, but chilli crab is one of those dishes worth the price at least once. Book ahead.",
                  b: "Signature dish",
                  c: "bg-rose-50 border-rose-200",
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
            destination="Singapore"
            hotels={[
              {
                name: "Marina Bay Sands",
                type: "Iconic luxury · Infinity pool · Marina Bay views",
                price: "From SGD 500/night (~$375)",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/sg/marina-bay-sands.html?aid=2820480",
              },
              {
                name: "Raffles Singapore",
                type: "Legendary colonial hotel · Restored heritage",
                price: "From SGD 1,200/night (~$900)",
                rating: "5",
                badge: "Most luxurious",
                url: "https://www.booking.com/hotel/sg/raffles.html?aid=2820480",
              },
              {
                name: "The Fullerton Hotel",
                type: "Colonial heritage · Singapore River · Central",
                price: "From SGD 350/night (~$262)",
                rating: "5",
                badge: "Best heritage",
                url: "https://www.booking.com/hotel/sg/the-fullerton.html?aid=2820480",
              },
              {
                name: "Hotel Boss / Ibis Budget",
                type: "Budget · Clean · MRT accessible",
                price: "From SGD 60/night (~$45)",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/sg/boss.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Gardens by the Bay Domes Ticket",
                duration: "2–3 hrs",
                price: "From SGD 28/person (~$21)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=gardens+by+the+bay+singapore&partner_id=PSZA5UI",
              },
              {
                name: "Singapore Zoo + Tram Ride",
                duration: "3–4 hrs",
                price: "From SGD 48/person (~$36)",
                badge: "World class",
                url: "https://www.getyourguide.com/s/?q=singapore+zoo&partner_id=PSZA5UI",
              },
              {
                name: "Night Safari Singapore",
                duration: "3 hrs",
                price: "From SGD 55/person (~$41)",
                url: "https://www.getyourguide.com/s/?q=singapore+night+safari&partner_id=PSZA5UI",
              },
              {
                name: "Sentosa Island Day Pass",
                duration: "Full day",
                price: "From SGD 83/person (~$62, Universal Studios)",
                url: "https://www.getyourguide.com/s/?q=sentosa+universal+studios+singapore&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🍽️",
                  title: "Spending Too Much on Restaurants When Hawker Centres Have Michelin Food",
                  desc: "Tian Tian chicken rice, Liao Fan soya sauce chicken (once the cheapest Michelin meal at $2), Hill Street Tai Hwa pork noodles — all at hawker centres for SGD 4–8. There is no reason to spend SGD 40 on the same dish at a restaurant. The hawker version is usually better.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🐉",
                  title: "Missing Haw Par Villa",
                  desc: "Free, deeply strange, and completely unique — 1,000 statues built in 1937 by the Tiger Balm brothers depicting Chinese mythology and moral values. The Ten Courts of Hell dioramas showing punishments for sins are unlike anything else in Asia. Most tourists skip it. Go.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "💳",
                  title: "Not Getting an EZ-Link Card at the Airport",
                  desc: "The EZ-Link card (SGD 12 including SGD 7 credit) works on all MRT trains and buses. Without it you pay cash, which costs more and wastes time. Buy it at Changi Airport the moment you land. The MRT covers every attraction in this guide for SGD 1–2.50 per trip.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🎢",
                  title: "Choosing Universal Studios Over Singapore Zoo",
                  desc: "Universal Studios Singapore (SGD 83) has maybe 10 rides and takes half a day. Singapore Zoo (SGD 48) is genuinely world-class — open-concept, orangutans roam freely, the breakfast-with-orangutans is unforgettable. Unless you have kids who specifically want Universal, the Zoo wins on value and experience.",
                  color: "bg-pink-50 border-pink-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Singapore</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌳",
                  title: "Supertree Show at 7:45pm is Free",
                  desc: "The Garden Rhapsody light and music show at the Supertree Grove runs every night at 7:45pm and 8:45pm. Completely free — stand in the grove and watch the trees come alive in colour and sound. One of Asia's best free shows. The SGD 14 Skyway bridge lets you walk between the trees at canopy height.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🍗",
                  title: "Maxwell for Tian Tian Chicken Rice",
                  desc: "Tian Tian Hainanese Chicken Rice at Maxwell Food Centre held a Michelin Bib Gourmand for years. Queue starts at 11am, peaks at noon — arrive at 11:15am. Poached chicken, rice cooked in chicken fat, chilli sauce, and soup. SGD 5.50 for one of Singapore's defining dishes.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "✈️",
                  title: "Changi Airport is Worth 3 Hours Early",
                  desc: "Jewel Changi has the world's tallest indoor waterfall (7 storeys, free), a hedge maze, mirror maze, butterfly garden, and rooftop cactus garden. Excellent retail and food. Budget travellers: arrive early and have a full duty-free dinner instead of city restaurant prices.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🚇",
                  title: "The MRT Gets You Everywhere for Under SGD 3",
                  desc: "Marina Bay, Orchard, Little India, Chinatown, Sentosa (via HarbourFront), and the Zoo area are all MRT-accessible. Air-conditioned, punctual to the minute, 200km of track. Download MyTransport.SG for live times. A Grab taxi costs 5–10x more for the same journey.",
                  color: "bg-blue-50 border-blue-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Singapore" />

          {/* Combine With */}
          <CombineWith currentSlug="singapore-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Singapore expensive to visit?",
                  a: "It depends entirely on how you approach it. Staying in a hostel (SGD 30–50/night), eating exclusively at hawker centres (SGD 5–10 per meal), and using the MRT (SGD 2–3 per trip) brings the total to SGD 80–120/day — comparable to European budget travel. The trap is eating at restaurants and taking Grab taxis, which inflates costs to SGD 200+/day without adding value.",
                },
                {
                  q: "How many days do you need in Singapore?",
                  a: "3 days covers the essential highlights — Marina Bay, Gardens by the Bay, Sentosa, Little India, Chinatown, and the Zoo. 4–5 days allows you to add day trips to Pulau Ubin island, Johor Bahru (Malaysia, 30 min by bus), or a deeper dive into the hawker centre scene. Singapore is small — 3 days is genuinely sufficient for most visitors.",
                },
                {
                  q: "What is the best area to stay in Singapore?",
                  a: "Marina Bay area (expensive but spectacular views), Chinatown or Little India (budget-friendly, central, excellent food), Bugis/Arab Street (character and central location), or Orchard (shopping and mid-range hotels). Avoid staying in Sentosa unless you are specifically at a resort — it is not well-connected to the city.",
                },
                {
                  q: "Is Singapore good for Indian tourists?",
                  a: "Exceptionally so. Singapore has a large Indian community (Tamil, Punjabi, Bengali) — Little India is a full neighbourhood with temples, sarees, and South Indian food. Mustafa Centre is a 24-hour Indian department store. Vegetarian food is widely available at hawker centres and Little India restaurants. Indian tourists benefit from the easy ICA electronic visa process (SGD 30, approved in 1–3 days).",
                },
                {
                  q: "What is the best hawker centre in Singapore?",
                  a: "Maxwell Food Centre (Tian Tian chicken rice, SGD 5), Lau Pa Sat (best for evening satay and atmosphere), Old Airport Road Food Centre (old-school variety, least touristy), Newton Food Centre (central, slightly touristy but excellent), Chinatown Complex Food Centre (260 stalls, bargain prices). Locals say Old Airport Road is the best overall.",
                },
                {
                  q: "Do I need a visa for Singapore?",
                  a: "Most Western passports (USA, UK, EU, Australia, Canada, Japan, Korea) get 30–90 days visa-free with no pre-approval. All ASEAN nationals enter visa-free. Indian passport holders need an Entry Permission from ICA (Immigration and Checkpoints Authority) — apply online at ica.gov.sg, costs SGD 30, and is typically approved in 1–3 business days. Apply at least 5–7 days before travel.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Singapore trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-singapore", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/singapore-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/singapore-hawker-food-guide", label: "Hawker food guide", icon: "🍜" },
                { href: "/blog/singapore-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="singapore-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Southeast Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Bali in 5 Days — Temples &amp; Rice Terraces", href: "/blog/bali-5-days" },
                { label: "Bangkok 4 Days — Temples &amp; Street Food", href: "/blog/bangkok-4-days" },
                { label: "Maldives 5 Days — Overwater Villas", href: "/blog/maldives-5-days" },
                { label: "Phuket 5 Days — Beaches &amp; Islands", href: "/blog/phuket-5-days" },
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
