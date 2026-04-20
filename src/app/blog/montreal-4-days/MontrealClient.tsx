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
const MONTREAL_TOC = [
  { id: "honest",        emoji: "⚡",  label: "What Montreal Actually Is" },
  { id: "season",        emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",    emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",     emoji: "📅",  label: "4-Day Itinerary" },
  { id: "food",          emoji: "🍽️", label: "Food & Dining" },
  { id: "budget",        emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",          emoji: "🏨",  label: "Where to Stay" },
  { id: "getting-around",emoji: "🚇",  label: "Getting Around" },
  { id: "tips",          emoji: "💡",  label: "Pro Tips" },
  { id: "faq",           emoji: "❓",  label: "FAQ" },
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
          href: `mailto:?subject=Montreal 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Montreal in 4 Days — bagels, smoked meat and bilingual magic&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/montreal-4-days"
        imageUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
        description="Montreal in 4 Days: Notre-Dame Basilica, Old Montreal, smoked meat at Schwartz&apos;s, Mont Royal sunrise, and Jean-Talon Market — complete travel guide with budget breakdown."
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
export default function MontrealClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MONTREAL_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Montreal" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="montreal old port notre dame basilica canada night"
            fallback="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
            alt="Montreal Old Port with Notre-Dame Basilica illuminated at night"
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
              <span className="text-white/70">Montreal 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  North America
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Montreal in 4 Days:
                <em className="italic text-amber-300"> Bagels, Basilicas &amp; Bilingual Magic</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Notre-Dame Basilica&apos;s 10,000-star ceiling, midnight smoked meat at Schwartz&apos;s, Mont Royal at sunrise, and a jazz festival that simply takes over the streets. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="14 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇨🇦 Quebec, Canada</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From CAD $80/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Step inside Notre-Dame Basilica and tilt your head up at a ceiling of 10,000 hand-painted stars glowing electric blue — then walk ten minutes to Schwartz&apos;s Deli and wait in a midnight queue with locals for a smoked meat sandwich that has no equal on Earth. Montreal is the city where French caf&eacute; culture and North American energy argue productively.
            </p>
          </blockquote>

          {/* ── WHAT MONTREAL ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Montreal Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Montreal is Canada&apos;s most European city — a bilingual metropolis where French caf&eacute; culture collides with North American energy. Two languages on every sign, two bagel schools (St-Viateur versus Fairmount) locked in a century-old war, and a Jazz Festival that simply takes over the streets every June. You will be genuinely confused about which continent you&apos;re on.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The cobblestoned streets of Old Montreal (Vieux-Montr&eacute;al) date back to the 1600s — fur traders, missionaries, and merchants built the stone warehouses that now house some of Canada&apos;s best restaurants. Notre-Dame Basilica, completed in 1829, holds a ceiling of 10,000 hand-painted gold stars against deep blue vaults. The Plateau-Mont-Royal neighbourhood is a living gallery of street murals, independent bookshops, and the kind of walkable urban life that most North American cities have lost.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              But Montreal&apos;s real argument is food. Schwartz&apos;s Deli has served its legendary smoked meat since 1928. St-Viateur Bagels has been wood-fire baking since 1957. Jean-Talon Market overflows with Quebec cheeses, maple products, and seasonal produce from local farms. And the city&apos;s BYOB restaurant culture means you can eat at acclaimed kitchens while bringing your own wine — a gift that keeps giving.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="YUL" />
              <StatCard icon="🌡️" label="Best Season" value="Jun–Sep" />
              <StatCard icon="🗓" label="Duration" value="4 Days" />
              <StatCard icon="💰" label="Budget From" value="CAD $80/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Montreal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Jun–Sep",
                  i: "☀️",
                  t: "Summer — Best Season",
                  d: "18–28°C, long sunny days, every terrace and park buzzing with life. The Jazz Festival (late June to early July) fills downtown with free concerts. Pride, Just for Laughs comedy festival, and Osheaga music festival all land in this window. This is peak Montreal — book accommodation well ahead.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Oct–Nov",
                  i: "🍂",
                  t: "Autumn — Stunning Foliage",
                  d: "5–15°C. Mont Royal explodes in red and gold foliage — one of the best autumn colour shows in North America. Fewer tourists than summer, lower hotel rates, and the food scene is in full harvest swing with Quebec produce at its peak. Bring layers.",
                  b: "Great shoulder season",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Dec–Feb",
                  i: "❄️",
                  t: "Winter — Festivals & Cold",
                  d: "Lows of -15°C to -25°C with windchill. But the Underground City (RESO, 33 km of tunnels) makes winter navigation genius. Igloofest electronic music festival, Montr&eacute;al en Lumi&egrave;re food fest, and ice skating on the Old Port rink. Dress seriously warm.",
                  b: "For festival lovers",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Mar–May",
                  i: "🌸",
                  t: "Spring — Thaw & Transition",
                  d: "2–18°C. March can still be freezing and slushy. April and May warm up fast — terrasses reopen, street life returns. Sugar shack (cabane &agrave; sucre) season runs March to April: maple syrup feasts in the countryside are a quintessential Quebec experience.",
                  b: "Sugar shack season",
                  c: "bg-purple-50 border-purple-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Montreal</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Montr&eacute;al-Trudeau International Airport (YUL) is 20 km from downtown. The 747 express bus runs 24/7 to Gare d&apos;autocars (downtown bus terminal) for CAD $11 — the cheapest and most reliable airport transfer.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly into YUL",
                  d: "Montr&eacute;al-Trudeau (YUL) receives direct flights from major North American and European cities. From the airport: 747 express bus (CAD $11, 45–60 min to downtown, runs 24/7), taxi (CAD $45 flat rate to downtown), or Uber/Lyft (CAD $30–50 depending on demand).",
                  b: "Most common",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚂",
                  t: "Train from Toronto or Ottawa (VIA Rail)",
                  d: "VIA Rail runs frequent trains from Toronto (4.5 hrs, from CAD $50 booked early) and Ottawa (2 hrs, from CAD $35). The Toronto corridor train is one of the great Canadian rail journeys — along the St Lawrence River with views that flying simply cannot match. Book early for the best fares.",
                  b: "Scenic option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Bus from Eastern Canada or US Northeast",
                  d: "Flixbus and Megabus connect Montreal to Toronto (5.5 hrs, from CAD $25), Ottawa (2.5 hrs, from CAD $15), Quebec City (3 hrs, from CAD $20), New York (7 hrs, from CAD $40), and Boston (6 hrs, from CAD $35). Arrives at Gare d&apos;autocars downtown.",
                  b: "Budget option",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Drive from Toronto or the US border",
                  d: "Toronto to Montreal: 540 km via the 401/20, about 5.5 hours. From the US: Burlington VT is 1.5 hrs, New York City is 6 hrs. Note that street parking in Montreal is notoriously confusing — signage is in French and complex. Use a garage or avoid driving in the Plateau.",
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

          {/* ── 4-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Montreal Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary covers Old Montreal, the Plateau, Mile End, Mont Royal, and the major food institutions — designed for a first visit with room to linger.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Old Montreal &middot; Notre-Dame Basilica &middot; Old Port Waterfront"
                cost="CAD $40–80"
                items={[
                  "Walk the cobblestones of Vieux-Montr\u00e9al from Place Jacques-Cartier to the Old Port — free and beautiful at any hour. The stone warehouses date to the 1600s and now house galleries, boutiques, and restaurants. This is where Montreal began.",
                  "Notre-Dame Basilica (CAD $16 entry). The interior is genuinely breathtaking: a ceiling of 10,000 hand-painted gold stars against deep blue vaults, carved pine and walnut woodwork, and stained glass panels telling Montreal\u2019s history. The AURA immersive light show (CAD $30\u201350 evenings) transforms the space completely \u2014 book online, it sells out.",
                  "Lunch at Olive & Gourmando in Old Montreal \u2014 widely considered one of the best caf\u00e9s in the city. Expect a queue. The paninis and pastries are exceptional (CAD $15\u201320).",
                  "Afternoon at the Old Port Promenade along the St Lawrence River. In summer, the Clock Tower beach and Bonsecours Basin are lively. In winter, the outdoor skating rink is magical. The Bonsecours Market building (1847) is worth entering for the architecture alone.",
                  "Evening walk through Rue de la Commune and Rue Saint-Paul \u2014 the oldest street in Montreal. Art galleries, independent shops, and excellent people-watching. Dinner at a BYOB restaurant \u2014 buy wine from the SAQ (government liquor store) first and save significantly.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Mont Royal &middot; Plateau-Mont-Royal &middot; Street Art &middot; Schwartz&apos;s"
                cost="CAD $35–70"
                items={[
                  "Morning hike up Mont Royal Park (free). The 233-metre summit takes 30\u201345 minutes from the Plateau side. The view from the Kondiaronk Belvedere at the top is one of the great urban panoramas: the entire downtown skyline, the St Lawrence, and on clear days the Adirondacks across the US border. Come at sunrise for magic.",
                  "Descend through the park to Lac des Castors (Beaver Lake) \u2014 a popular spot for locals jogging, picnicking, and in winter, skating and cross-country skiing. The park was designed by Frederick Law Olmsted, the same landscape architect behind Central Park.",
                  "Walk through Plateau-Mont-Royal \u2014 Montreal\u2019s most walkable neighbourhood. Colourful row houses with signature exterior spiral staircases, independent bookshops on Avenue du Mont-Royal, murals on every block, and caf\u00e9 terrasses spilling onto the sidewalks.",
                  "Lunch at Schwartz\u2019s Deli (CAD $12 for a smoked meat sandwich). Open since 1928, the queue is part of the experience. The smoked meat is hand-cut, piled high on rye with yellow mustard. Order the medium-fat cut \u2014 that is the correct order. No substitutions, no debate.",
                  "Afternoon exploring Boulevard Saint-Laurent and Rue Saint-Denis \u2014 the dividing line between English and French Montreal. Street art, record shops, vintage stores, and some of the city\u2019s best independent caf\u00e9s.",
                  "Evening poutine at La Banquise (open 24 hours, over 30 varieties of poutine from CAD $10). The classic is fries, fresh cheese curds, and hot gravy \u2014 a Quebec institution.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Mile End &middot; Jean-Talon Market &middot; Biod&ocirc;me &middot; Bagel Wars"
                cost="CAD $50–90"
                items={[
                  "Morning bagel pilgrimage in Mile End: St-Viateur Bagels (CAD $1.50 each, sesame or poppy, fresh from the wood-fired oven since 1957) and Fairmount Bagel (open 24 hours, baking since 1919). They are 5 minutes apart. Buy both, taste the difference. This is one of Montreal\u2019s great ongoing debates \u2014 you must have an opinion.",
                  "Explore Mile End \u2014 Leonard Cohen\u2019s old neighbourhood, now Montreal\u2019s creative heart. Independent record stores, vintage shops, craft breweries, and the murals along Boulevard Saint-Laurent. The neighbourhood has a distinctly bohemian energy that the Plateau has somewhat lost to gentrification.",
                  "Metro (CAD $3.75 per ride) to Jean-Talon Market \u2014 Quebec\u2019s largest public market. Stalls overflow with seasonal produce, artisan Quebec cheeses (Oka, Le Cendrillon, Riopelle de l\u2019Isle), maple products, fresh flowers, and prepared foods. A highlight of any Montreal visit.",
                  "Afternoon at the Biod\u00f4me (CAD $23). Four distinct ecosystems under one roof: a tropical rainforest, a Laurentian maple forest, the Gulf of St Lawrence, and a sub-Antarctic island. Genuinely well done and fascinating for all ages. Located in the Olympic Park complex.",
                  "Visit the adjacent Montreal Tower (CAD $25) for panoramic views from the inclined observation deck of the 1976 Olympic Stadium \u2014 the tallest inclined tower in the world at 175 metres.",
                  "Dinner at Au Pied de Cochon on Plateau-Mont-Royal (reserve weeks ahead). Chef Martin Picard\u2019s celebration of Qu\u00e9b\u00e9cois cuisine: foie gras poutine, duck in a can, and maple-everything. Unapologetically rich (CAD $60\u201380 per person).",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Underground City &middot; Museums &middot; Chinatown &middot; Departure"
                cost="CAD $40–70"
                items={[
                  "Morning in RESO (Underground City) \u2014 33 km of tunnels connecting shopping centres, Metro stations, hotels, and office buildings. In winter, Montrealers commute entire days without stepping outside. Walk the section from Place des Arts through Complexe Desjardins to Eaton Centre for the best sense of the scale.",
                  "Mus\u00e9e des beaux-arts de Montr\u00e9al \u2014 Canada\u2019s oldest art museum. The permanent collection is free. Special exhibitions (CAD $25) rotate frequently and are consistently excellent. The museum spans five pavilions connected by underground galleries.",
                  "Lunch in Chinatown \u2014 dim sum at Maison Kam Fung or noodles at Nouilles de Lan Zhou (CAD $10\u201315). Montreal\u2019s Chinatown is compact but authentic, centred around Rue de la Gaucheti\u00e8re.",
                  "Final walk through the Quartier des Spectacles \u2014 Montreal\u2019s cultural district. In summer, the public squares host free outdoor performances. The architecture of the Salle Wilfrid-Pelletier and the Maison symphonique is worth seeing from outside even when no shows are on.",
                  "Last stop: pick up Montreal-style bagels, maple syrup, and Quebec cheese to take home. St-Viateur and Fairmount both sell by the dozen \u2014 they freeze well.",
                  "Airport transfer: 747 express bus (CAD $11, runs 24/7) or taxi (CAD $45 flat rate to YUL).",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Montreal" onPlanTrip={() => setModalOpen(true)} />

          {/* ── FOOD & DINING ── */}
          <section id="food" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Montreal Food Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Montreal&apos;s food scene is one of the best in North America. The city&apos;s unique BYOB (apportez votre vin) restaurant culture, legendary delis, two rival bagel institutions, and a wave of acclaimed modern Qu&eacute;b&eacute;cois kitchens make eating here a genuine highlight.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Schwartz\u2019s Deli",
                  t: "Smoked meat institution \u00b7 Since 1928",
                  d: "The most famous deli in Canada. Hand-cut smoked meat piled on rye bread with yellow mustard \u2014 order medium-fat, the correct cut. The queue outside on Boulevard Saint-Laurent is part of the ritual. CAD $12 for a sandwich. Cash only. No seating guarantees \u2014 you share tables with strangers.",
                  b: "Iconic",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Joe Beef",
                  t: "Modern Qu\u00e9b\u00e9cois fine dining \u00b7 Little Burgundy",
                  d: "David McMillan and Fr\u00e9d\u00e9ric Morin\u2019s celebrated restaurant is one of Canada\u2019s most acclaimed tables. Rustic, ingredient-driven Qu\u00e9b\u00e9cois cooking: oysters, foie gras, horse tartare, and market vegetables. Reserve well ahead. CAD $80\u2013150 per person with wine.",
                  b: "World-class",
                  c: "bg-rose-50 border-rose-200",
                },
                {
                  n: "Au Pied de Cochon",
                  t: "Qu\u00e9b\u00e9cois gastronomy \u00b7 Plateau-Mont-Royal",
                  d: "Chef Martin Picard\u2019s unapologetically rich celebration of Quebec terroir: foie gras poutine, duck in a can, and maple-glazed everything. Not for the faint-hearted. Reserve weeks ahead in summer. CAD $60\u201380 per person.",
                  b: "Bucket list",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "St-Viateur Bagels",
                  t: "Wood-fired bagels \u00b7 Mile End \u00b7 Since 1957",
                  d: "Montreal-style bagels are smaller, sweeter, and denser than New York bagels \u2014 boiled in honey water, then wood-fire baked. St-Viateur\u2019s sesame bagel fresh from the oven is one of Montreal\u2019s greatest simple pleasures. CAD $1.50 each. Buy a dozen to take home.",
                  b: "Essential",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "La Banquise",
                  t: "Poutine \u00b7 Open 24 hours \u00b7 Plateau",
                  d: "Over 30 varieties of poutine from CAD $10. The classic (fries, fresh cheese curds, hot gravy) is the one to start with. Open 24 hours \u2014 the post-midnight crowd is part of the Montreal experience. A Quebec institution since 1968.",
                  b: "Late-night classic",
                  c: "bg-purple-50 border-purple-200",
                },
                {
                  n: "Jean-Talon Market Food Stalls",
                  t: "Market food \u00b7 Little Italy",
                  d: "Quebec\u2019s largest public market is a feast: artisan cheeses, fresh cr\u00eapes, charcuterie boards, seasonal fruits, and maple products. Arrive hungry, graze from stall to stall, and leave with Quebec cheese to take home. Free to enter.",
                  b: "Best grazing",
                  c: "bg-teal-50 border-teal-200",
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

          {/* Gallery */}
          <DestinationGallery
            title="Montreal — Basilicas, Bagels &amp; the Mountain"
            subtitle="From Old Montreal&apos;s cobblestones to Mont Royal&apos;s summit."
            spots={[
              {
                name: "Notre-Dame Basilica Interior",
                query: "notre dame basilica montreal interior blue gold stars ceiling",
                desc: "The 10,000 hand-painted gold stars on a deep blue ceiling \u2014 one of the most stunning church interiors in North America.",
              },
              {
                name: "Old Montreal Cobblestones",
                query: "old montreal vieux montreal cobblestones buildings heritage canada",
                desc: "The cobblestoned streets and stone warehouses of Vieux-Montr\u00e9al, dating back to the 1600s.",
              },
              {
                name: "Mont Royal Kondiaronk Belvedere",
                query: "mont royal kondiaronk belvedere montreal skyline panoramic view",
                desc: "The panoramic view from the Kondiaronk Belvedere atop Mont Royal \u2014 the entire downtown skyline and the St Lawrence beyond.",
              },
              {
                name: "Plateau-Mont-Royal Street Art",
                query: "plateau mont royal montreal street art murals colourful row houses",
                desc: "Colourful row houses with exterior spiral staircases and vibrant street murals across the Plateau neighbourhood.",
              },
              {
                name: "Jean-Talon Market",
                query: "jean talon market montreal produce stalls quebec cheese",
                desc: "Quebec\u2019s largest public market \u2014 overflowing with artisan cheeses, maple products, and seasonal produce.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Montreal is mid-range by Canadian standards — cheaper than Toronto or Vancouver, especially for food (thanks to BYOB culture and excellent market dining). The main costs are accommodation and dining out.
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
                    ["🏨 Accommodation", "CAD $35\u201350", "CAD $150\u2013200", "CAD $350+"],
                    ["🍽 Food & Drink", "CAD $20\u201330", "CAD $60\u201380", "CAD $150+"],
                    ["🚇 Transport", "CAD $8\u201312", "CAD $15\u201320", "CAD $40\u201360"],
                    ["🎟 Activities", "CAD $10\u201320", "CAD $40\u201360", "CAD $100\u2013200"],
                    ["TOTAL (per day)", "CAD $80\u2013110", "CAD $170\u2013250", "CAD $380+"],
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (CAD $80\u2013110/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay at HI Montreal hostel (CAD $35\u201350/night dorm), eat bagels and poutine, use the STM Metro, and explore the free parks, markets, and street art. Montreal is excellent for budget travellers — many of the best experiences are free or nearly free.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (CAD $170\u2013250/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique hotel in the Plateau or Old Montreal (CAD $150\u2013200/night), BYOB restaurant dinners with a good bottle from the SAQ, museum visits, and a food tour. The BYOB culture makes mid-range dining in Montreal outstanding value.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Montreal</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Three main areas: Vieux-Montr&eacute;al (atmospheric, walkable to major sights, pricier), the Plateau-Mont-Royal (caf&eacute; culture, murals, BYOB restaurants, best for walkability), and Downtown (convenient for Metro, shopping, Underground City). Mile End is excellent for a more local feel.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Fairmont The Queen Elizabeth",
                  type: "Luxury historic \u00b7 Downtown",
                  price: "From CAD $300/night",
                  badge: "Most iconic",
                  desc: "The legendary hotel where John Lennon and Yoko Ono held their 1969 Bed-In for Peace. Recently renovated with a stunning modern redesign while preserving its historic character. Connected to the Underground City and Central Station \u2014 ideal in winter.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Hotel Nelligan",
                  type: "Boutique \u00b7 Old Montreal",
                  price: "From CAD $200/night",
                  badge: "Best location",
                  desc: "Housed in a pair of 19th-century stone buildings on Rue Saint-Paul in the heart of Old Montreal. Exposed brick, rooftop terrace with views of Notre-Dame Basilica, and walkable to every major Old Montreal sight. The rooftop bar in summer is exceptional.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "HI Montreal",
                  type: "Hostel \u00b7 Downtown",
                  price: "From CAD $35/night (dorm)",
                  badge: "Best budget",
                  desc: "Canada\u2019s largest hostel, centrally located near the Quartier des Spectacles. Clean, well-run, with a kitchen, lounge, and regular social events. Excellent for solo travellers and backpackers. Private rooms also available from CAD $90/night.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Plateau-Mont-Royal Airbnb",
                  type: "Self-catering \u00b7 The Plateau",
                  price: "From CAD $120/night",
                  badge: "Most local",
                  desc: "The Plateau is Montreal\u2019s most walkable neighbourhood \u2014 an apartment here puts you in the middle of the caf\u00e9 culture, BYOB restaurants, murals, and independent shops. Look for a classic Montreal apartment with the signature exterior spiral staircase.",
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

          {/* ── GETTING AROUND ── */}
          <section id="getting-around" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚇 Getting Around Montreal</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Montreal is one of North America&apos;s most walkable and transit-friendly cities. The STM Metro is clean, safe, and efficient. In summer, the Bixi bike-share system is the best way to explore the Plateau and Mile End.
            </p>
            <div className="space-y-3">
              {[
                {
                  i: "🚇",
                  t: "STM Metro",
                  d: "Four lines covering downtown, the Plateau, Mile End, and the Olympic Park. Single ride CAD $3.75, or get a 3-day unlimited pass (CAD $21.25) or weekly OPUS card (CAD $29.25). Trains run until ~1am. Clean, reliable, and the rubber-tired trains are surprisingly quiet.",
                  b: "Most useful",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚲",
                  t: "Bixi Bike-Share",
                  d: "Over 9,000 bikes at 680+ stations across the city. Day pass CAD $7, rides up to 30 minutes included. The Plateau, Mile End, and the canal path are ideal for cycling. Montreal has extensive protected bike lanes. Available April to November.",
                  b: "Best for Plateau & Mile End",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚶",
                  t: "Walking",
                  d: "Old Montreal, the Plateau, and Mile End are all extremely walkable. Most of Day 1 and Day 2 in the itinerary above can be done entirely on foot. Montreal\u2019s grid layout and frequent signage make navigation easy.",
                  b: "Free & scenic",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚕",
                  t: "Taxi & Uber/Lyft",
                  d: "Uber and Lyft operate normally in Montreal. Taxis are metered. Airport flat rate CAD $45 to downtown. Useful for late-night returns and airport transfers, but the Metro handles most in-city trips more efficiently.",
                  b: "Late night & airport",
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

          {/* Affiliate Block */}
          <AffiliateBlock
            destination="Montreal Quebec"
            hotels={[
              {
                name: "Fairmont The Queen Elizabeth",
                type: "Luxury historic \u00b7 Downtown Montreal",
                price: "From CAD $300/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/ca/fairmont-the-queen-elizabeth.html?aid=2820480",
              },
              {
                name: "Hotel Nelligan",
                type: "Boutique \u00b7 Old Montreal",
                price: "From CAD $200/night",
                rating: "5",
                badge: "Best location",
                url: "https://www.booking.com/hotel/ca/nelligan.html?aid=2820480",
              },
              {
                name: "Le Saint-Sulpice Hotel",
                type: "Boutique suites \u00b7 Old Montreal",
                price: "From CAD $250/night",
                rating: "4",
                badge: "Best suites",
                url: "https://www.booking.com/hotel/ca/le-saint-sulpice.html?aid=2820480",
              },
              {
                name: "HI Montreal Hostel",
                type: "Hostel \u00b7 Downtown",
                price: "From CAD $35/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/ca/hi-montreal.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Old Montreal Walking Tour",
                duration: "2 hrs",
                price: "From CAD $25/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=old+montreal+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Montreal Food Tour: Mile End & Plateau",
                duration: "3.5 hrs",
                price: "From CAD $70/person",
                badge: "Foodie favourite",
                url: "https://www.getyourguide.com/s/?q=montreal+food+tour&partner_id=PSZA5UI",
              },
              {
                name: "Notre-Dame Basilica AURA Light Show",
                duration: "45 min",
                price: "From CAD $30/person",
                url: "https://www.getyourguide.com/s/?q=notre+dame+basilica+montreal+aura&partner_id=PSZA5UI",
              },
              {
                name: "Mont Royal Guided Hike",
                duration: "2 hrs",
                price: "From CAD $20/person",
                url: "https://www.getyourguide.com/s/?q=mont+royal+guided+hike&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Montreal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🗣️",
                  title: "Open with Bonjour",
                  desc: "A simple \u2018Bonjour\u2019 before switching to English changes interactions completely in Montreal. Most locals are fluently bilingual, but greeting in French is a genuine sign of respect. It costs nothing and is noticed every time.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🍷",
                  title: "Exploit BYOB restaurant culture",
                  desc: "Montreal\u2019s BYOB (apportez votre vin) restaurants serve excellent food while charging zero corkage. Buy a good bottle at the SAQ (government liquor store) before dinner and eat at some of the city\u2019s best kitchens for half the price of a comparable meal elsewhere.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🎵",
                  title: "Time your visit for Jazz Fest",
                  desc: "The Montreal International Jazz Festival (late June to early July) fills the downtown streets with free outdoor concerts. Hundreds of shows are completely free \u2014 this is one of the best free music events on Earth. Over 2 million visitors attend annually.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🚇",
                  title: "Get an OPUS card for the Metro",
                  desc: "The OPUS card loads all STM Metro rides. A weekly unlimited pass costs CAD $29.25 and pays for itself if you ride more than 8 times. The 3-day tourist pass (CAD $21.25) is the best option for a 4-day visit. The Metro is safe and efficient until after midnight.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🥯",
                  title: "Try both bagel institutions",
                  desc: "Fairmount Bagel (open 24 hours, since 1919) and St-Viateur Bagels (since 1957) are 5 minutes apart in Mile End. Eating only one is a traveller sin. They are genuinely different \u2014 buy both, taste side by side, and form your own opinion in Montreal\u2019s oldest debate.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "❄️",
                  title: "Use RESO in winter",
                  desc: "The Underground City (RESO) connects 33 km of tunnels between Metro stations, malls, hotels, and offices. In Montreal\u2019s brutal winters (-20\u00b0C with windchill), you can go entire days without stepping outside. Map the RESO connections near your hotel before arrival.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Montreal" />

          {/* Combine With */}
          <CombineWith currentSlug="montreal-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Montreal safe for tourists?",
                  a: "Yes, Montreal is one of Canada\u2019s safest major cities. The tourist areas of Vieux-Montr\u00e9al, the Plateau, Mile End, and Downtown are extremely safe day and night. Standard urban awareness applies after midnight in quieter areas. Public transit is safe and well-lit.",
                },
                {
                  q: "Do I need to speak French to visit Montreal?",
                  a: "No. Virtually all Montrealers in the tourist industry are bilingual. That said, opening with \u2018Bonjour\u2019 before switching to English is a sign of respect that locals genuinely appreciate. Menus in tourist areas are usually bilingual. The further east you go, the more French-dominant the conversation becomes.",
                },
                {
                  q: "What is the best neighbourhood to stay in?",
                  a: "Vieux-Montr\u00e9al is the most atmospheric (and most expensive). The Plateau-Mont-Royal and Mile End are popular with younger travellers for their caf\u00e9 culture, BYOB restaurants, and walkability. Downtown is convenient for the Metro, Underground City, and major sights.",
                },
                {
                  q: "When is the Montreal Jazz Festival?",
                  a: "The Festival International de Jazz de Montr\u00e9al runs for 10\u201311 days from late June into early July. Most outdoor concerts on Quartier des Spectacles are completely free. It draws over 2 million visitors annually and is one of the largest jazz festivals in the world.",
                },
                {
                  q: "How do I get from the airport to downtown Montreal?",
                  a: "The 747 express bus runs 24/7 from YUL to Gare d\u2019autocars (downtown bus terminal) for CAD $11. The ride takes 45\u201360 minutes depending on traffic. Alternatively, a taxi has a flat rate of CAD $45 to downtown, and Uber/Lyft typically costs CAD $30\u201350.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Montreal trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/montreal-4-days/best-time", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/montreal-4-days/couples-guide", label: "Couples guide", icon: "💑" },
                { href: "/blog/montreal-4-days/packing-list", label: "Packing list", icon: "🎒" },
                { href: "/blog/canada-travel-tips", label: "Canada travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="montreal-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More North America Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Toronto in 4 Days — Urban Culture", href: "/blog/toronto-4-days" },
                { label: "Quebec City 3 Days — French Heritage", href: "/blog/quebec-city-3-days" },
                { label: "New York 5 Days — City Guide", href: "/blog/new-york-5-days" },
                { label: "Ottawa Weekend — Capital City", href: "/blog/ottawa-weekend" },
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
