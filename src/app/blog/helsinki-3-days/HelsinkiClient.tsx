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
const HELSINKI_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Helsinki Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",  emoji: "🏛️", label: "Landmark Guide" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",       emoji: "🏨",  label: "Where to Stay" },
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
          href: `mailto:?subject=Helsinki 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Helsinki in 3 Days — cathedral, saunas and the Baltic Sea&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/helsinki-3-days"
        imageUrl="https://images.unsplash.com/photo-1559561853-08451507cbe7?w=1200&q=80"
        description="Helsinki in 3 Days: Senate Square, Temppeliaukio rock church, Suomenlinna sea fortress, harbour saunas, and a ferry to Tallinn — complete travel guide with budget breakdown."
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
export default function HelsinkiClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={HELSINKI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Helsinki" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="helsinki finland cathedral senate square harbour market"
            fallback="https://images.unsplash.com/photo-1559561853-08451507cbe7?w=1600&q=80"
            alt="Helsinki Finland white Cathedral and Senate Square with harbour market"
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
              <span className="text-white/70">Helsinki 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-blue-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  World&apos;s Happiest Country
                </span>
                <span className="text-white/60 text-xs">January 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Helsinki in 3 Days:
                <em className="italic text-blue-300"> Saunas, Sea Fortress &amp; the Baltic Soul</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Senate Square at dawn, the rock church, Suomenlinna UNESCO fortress, a public sauna on the harbour, and a two-hour ferry to Tallinn. The complete guide from €65/day.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="January 2026" readTime="14 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇫🇮 Finland, Europe</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From €65/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-blue-500 pl-6 mb-10 bg-blue-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              A city where the national pastime is sitting naked in a 90°C wooden room with strangers and then jumping into a frozen lake, where design is so embedded in daily life that a bus shelter was once shortlisted for the Pritzker Prize, and where the world&apos;s happiest country has held that title for six consecutive years — Helsinki will confound every expectation and earn a permanent place in your memory.
            </p>
          </blockquote>

          {/* ── WHAT HELSINKI ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Helsinki Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Helsinki is the southernmost capital in the Nordic region, built on a peninsula jutting into the Baltic Sea with an archipelago of 330 islands scattered around it. It was founded by the Swedish king Gustav Vasa in 1550, ruled by Sweden for 250 years and then by Russia for another century, before Finland declared independence in 1917. That layered history explains why the city&apos;s architecture runs the full gamut from neoclassical Senate Square (deliberately modelled on St Petersburg) to brutalist concrete housing estates to some of the most celebrated modernist design buildings on Earth.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              What most visitors don&apos;t expect is how small it feels. The population is 660,000 — less than many European suburbs — and the city centre is entirely walkable. Senate Square, the Market Square harbour, Temppeliaukio Rock Church, and the Design District are all within 20 minutes&apos; walk of each other. This compactness is one of Helsinki&apos;s greatest assets: you can cover an enormous amount of ground in three days without ever feeling rushed.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The sauna is not optional. There are approximately 3 million saunas in Finland for a population of 5.5 million — more saunas than cars. The public sauna is where Finns relax, socialise, and (historically) where babies were born and the dying were laid out. Going to Löyly on the harbour or Allas Sea Pool is not a tourist activity — it is the most genuinely Finnish thing you can do in Helsinki, and it will almost certainly be the experience you talk about most when you get home.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport to City" value="30 min" />
              <StatCard icon="🌡️" label="Best Season" value="Jun–Aug" />
              <StatCard icon="⛴️" label="Ferry to Tallinn" value="2.5 hrs" />
              <StatCard icon="💰" label="Budget From" value="€65/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Helsinki</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Jun–Aug",
                  i: "☀️",
                  t: "Summer — Best Season",
                  d: "The midnight sun peaks around the June solstice when it barely gets dark. Temperatures reach 20–26°C. Market Square buzzes with food stalls, outdoor concerts fill Esplanadi Park, and the ferry to Tallinn is at its most enjoyable. Peak season for accommodation prices — book 3–4 weeks ahead.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Autumn — Underrated",
                  d: "Temperatures drop to 8–15°C but the city is less crowded, accommodation prices fall, and the autumn colours in parks are beautiful. October brings the first hints of darkness after the endless summer. A excellent shoulder season for budget travellers.",
                  b: "Great value",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Dec–Jan",
                  i: "❄️",
                  t: "Winter — Northern Lights Season",
                  d: "Temperatures −5 to −15°C. The Baltic can freeze over in January. Christmas markets, ice skating in Senate Square, and the real possibility of northern lights from the city outskirts or a night train to Lapland. The darkness is dramatic but Helsinki handles winter beautifully — every café and bar glows golden from the outside.",
                  b: "For northern lights",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Apr–May",
                  i: "🌷",
                  t: "Spring — The Awakening",
                  d: "Helsinki comes alive as the light returns — locals emerge from winter hibernation and café terraces open as soon as temperatures hit 10°C. May is particularly pleasant: long evenings, reasonable prices, and the city in a visibly good mood. The sea ice has melted by mid-April.",
                  b: "Shoulder season",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Helsinki</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-blue-800 font-light">
                <strong className="font-medium">Key detail:</strong> Helsinki-Vantaa Airport (HEL) is 19km north of the city centre. The <strong className="font-medium">airport train (Ring Rail Line)</strong> runs every 10 minutes, takes 30 minutes to Helsinki Central Station, and costs <strong className="font-medium">€4.10</strong> with a regional ticket — the cheapest and most reliable option.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚆",
                  t: "Airport Train to City Centre (recommended)",
                  d: "Helsinki Airport → Helsinki Central Station: Ring Rail Line trains run every 10 minutes from 05:00 to 01:00. Journey time 30 minutes. Single ticket €4.10 (buy at airport machines or the HSL app). The train runs from Terminal 2 — a covered walkway connects Terminal 1. No luggage restrictions. Arrives at the central station, steps from most hotels.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "Airport Express Bus 600",
                  d: "HSL bus 600 runs from the airport to the city centre via Pasila and Kamppi. Takes 45–60 minutes depending on traffic. Same ticket price as the train (€4.10). Useful if staying in the western parts of the city but slower than the train in rush hour.",
                  b: "Alternative",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚕",
                  t: "Taxi from Airport",
                  d: "Fixed-price taxis from Helsinki-Vantaa to city centre cost €35–€45. Journey time 25–40 minutes. Use official taxi ranks or the Lync/Uber apps to avoid overcharging. Worth it if travelling in a group with heavy luggage at odd hours.",
                  b: "Convenient",
                  c: "bg-parchment border-parchment-2",
                },
                {
                  i: "⛴️",
                  t: "Ferry from Tallinn (Baltic Sea route)",
                  d: "Tallink Silja, Viking Line, and Eckerö Line all run ferries from Tallinn to Helsinki. Journey: 2.5 hours (fast ferry) or 2 hours 30 minutes (standard). Prices from €25 return booked early. Ferries arrive at South Harbour (Eteläsatama) — 10-minute walk from Senate Square. A spectacular way to arrive in Helsinki.",
                  b: "Scenic arrival",
                  c: "bg-teal-50 border-teal-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Helsinki Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is designed to front-load the iconic sights and leave Day 3 flexible — either a Tallinn ferry day trip or a deep dive into sauna culture and the Kallio neighbourhood.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Senate Square · Rock Church · Design District · Market Square"
                cost="€55–65 (meals €20, day pass €9, entry €3, snacks €10)"
                items={[
                  "7:00am: Senate Square at dawn — Helsinki Cathedral (free, open daily from 09:00, but the exterior is accessible all hours) dominates the square with its white neoclassical dome. Arrive before the tour groups and you&apos;ll often have the entire square to yourself. The cathedral was completed in 1852 under Russian imperial rule and modelled deliberately on St Petersburg architecture.",
                  "Walk the Senate Square precinct — the Government Palace, the University of Helsinki, and the National Library all face the square. The cobblestones slope gently down to the South Harbour. On summer mornings the light here is extraordinary.",
                  "Market Square (Kauppatori) at the harbour — Helsinki&apos;s oldest outdoor market has operated continuously since the 18th century. Vendors sell fresh fish directly from the boats, smoked salmon, Finnish handicrafts, and the famous salmon soup served in a bread bowl (€8–10 from the orange tents). The market runs from 06:30 in summer.",
                  "10:00am: Walk up Aleksanterinkatu through the city centre to Temppeliaukio Church — the rock church blasted from solid granite bedrock in 1969. Admission €3. The interior is one of the most acoustically remarkable spaces in Europe — a circular room with copper-strip ceiling, granite walls, and a skylight ring that floods the space with natural light. Services are held here, as are concerts; the acoustics are extraordinary.",
                  "Afternoon: Design District — bounded by Fredrikinkatu, Iso Roobertinkatu, and Bulevardi, this 25-block neighbourhood contains over 200 design studios, galleries, and boutiques. Window shopping is free and the quality of Finnish design (Marimekko, Iittala, Arabia) is visible on every block. The Fazer flagship store on Kluuvikatu is worth a stop for Finnish chocolate.",
                  "Evening: Esplanadi Park for outdoor concerts in summer — the central promenade connects Senate Square to the Stockmann department store. Dinner at Hakaniemi market hall for karelian pie (karjalanpiirakka) with egg butter — a Finnish classic under €7, one of the most satisfying things you&apos;ll eat in the city.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Suomenlinna Sea Fortress · Ateneum Art Museum · Löyly Sauna"
                cost="€70–90 (Suomenlinna ferry €5 return, Ateneum €20, Löyly €19, meals €25)"
                items={[
                  "9:00am: Ferry to Suomenlinna from Market Square quay — the HSL ferry runs every 30–60 minutes and takes 15 minutes. A single journey costs €2.50 or €5 return (or is covered by the HSL day pass, €9). Suomenlinna is a UNESCO World Heritage Site: an 18th-century sea fortress built by Sweden, captured by Russia in 1808, and now a living island community of 900 residents.",
                  "The fortress is spread across six islands connected by bridges. Allow 2–3 hours minimum. Key sites: the King&apos;s Gate (the original main entrance from the sea), the dry dock (still in operation — the oldest continuously functioning dry dock in the world), the Suomenlinna Museum (€7, excellent scale models and 300 years of history), and the submarine Vesikko (open in summer, €5 entry).",
                  "Walk the island&apos;s southern shore — the sea walls drop almost directly into the Baltic, and on a clear day you can see Estonia on the horizon. The cannon batteries are scattered along the coastline. Picnic on the fortress walls with supplies from the island bakery (€5–8 for bread, pastries, and coffee).",
                  "Return ferry to mainland by 13:30. Walk to Ateneum Art Museum on the Railway Square — Finland&apos;s national art museum houses the country&apos;s most important collection, anchored by Akseli Gallen-Kallela&apos;s Kalevala paintings. Admission €20. The Kalevala triptych alone justifies the entry fee — enormous, visceral canvases depicting the Finnish national epic. Allow 1.5 hours.",
                  "Early evening: Löyly public sauna on the western harbour — the award-winning wooden waterfront building by Avanto Architects opened in 2016 and is now one of Helsinki&apos;s most visited modern buildings. Entry €19 includes a towel and swimming access. Three saunas (two wood-fired, one electric), plus a restaurant terrace overlooking the Baltic. The ritual: sauna → Baltic dip → sauna → cold drink on the terrace. Genuinely life-changing.",
                  "Dinner at Löyly restaurant (€35–45) for modern Finnish dishes — smoked fish, reindeer, and seasonal vegetables — or walk to Kallio for more affordable options. The tram network makes getting home easy from any part of the city.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Tallinn Day Trip by Ferry OR Kallio Neighbourhood + Culture"
                cost="Option A (Tallinn): €55–75 (ferry €25, meals €20) · Option B (Helsinki): €40–55 (food €30, optional museum €15)"
                items={[
                  "Option A — Tallinn Day Trip: Book the 08:30 Tallink Silja or Viking Line ferry from the South Harbour (Olympia Terminal) — return ticket from €25 booked online in advance, 2.5 hours each way. Arrive Tallinn 11:00, depart 17:30 or 20:00.",
                  "In Tallinn: Walk the medieval Old Town (Vanalinn) — a UNESCO World Heritage Site with 13th-century city walls, the Toompea Castle viewing terraces, Alexander Nevsky Cathedral (free entry, extraordinary interior), and Town Hall Square. The entire Old Town is walkable in 3–4 hours.",
                  "Budget lunch in Tallinn is significantly cheaper than Helsinki — a set meal at an Old Town café costs €7–10, half the Helsinki price. Try traditional Estonian black bread, sült (aspic), and kama dessert. Return ferry arrives Helsinki South Harbour around 21:30.",
                  "Option B — Helsinki Deep Dive: Start with Kallio neighbourhood (Tram 6 east from the city centre) — Helsinki&apos;s most affordable and authentic area. The Kallio church tower has free views over the city. The neighbourhood has Helsinki&apos;s best second-hand shops, independent coffee bars, and casual restaurant scene.",
                  "Option B cont: Visit Kiasma Museum of Contemporary Art (€15, Fridays after 17:00 free) for cutting-edge Finnish and Nordic art on the Railway Square. The building itself — by Steven Holl Architects — is one of the most discussed contemporary buildings in Finland.",
                  "Option B cont: End with a sunset walk along the Hietaniemi beach or the Olympic Harbour — free, beautiful, and completely undiscovered by most tourists. The sea-level views of Helsinki at golden hour are as good as anything in Scandinavia.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Helsinki" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Helsinki Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry fees as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Helsinki Cathedral & Senate Square",
                  e: "Free",
                  d: "The defining image of Helsinki — a white neoclassical dome built between 1830 and 1852 under Russian imperial rule, modelled on the Church of the Holy Trinity in St Petersburg. The interior is austere and powerful. The square around it, bordered by the Government Palace, University of Helsinki, and National Library, is one of the most coherent neoclassical urban spaces in northern Europe.",
                  t: "Must see · 30–45 mins",
                },
                {
                  n: "Temppeliaukio Rock Church",
                  e: "€3",
                  d: "Blasted from solid granite bedrock in 1969 by architects Timo and Tuomo Suomalainen, this circular church seats 750 and has a copper-strip ceiling and a skylight ring. The acoustics are among the best of any concert hall in Finland — major ensembles record here. One of the most architecturally distinctive religious spaces in Europe. Arrive early; tour groups fill it by mid-morning.",
                  t: "Must see · 30–45 mins",
                },
                {
                  n: "Suomenlinna Sea Fortress",
                  e: "Ferry €5 return · Museum €7",
                  d: "UNESCO World Heritage Site built by Sweden in 1748 as the largest sea fortress in the world at the time. Six islands, 8km of fortification walls, a dry dock, and 900 permanent residents. Captured by Russia in 1808 without a shot being fired — the fortress commander surrendered after running out of supplies. The history is as interesting as the setting.",
                  t: "Must see · Half day",
                },
                {
                  n: "Market Square (Kauppatori)",
                  e: "Free",
                  d: "The open-air harbour market has operated since the 18th century. Morning vendors sell fresh fish from boats, smoked salmon, Finnish handicrafts, and the famous salmon soup in a bread bowl (€8–10). The market runs April–October and is particularly atmospheric at sunrise when the fishing boats come in. The Old Market Hall (Vanha Kauppahalli) adjacent to it is a covered Victorian-era food market.",
                  t: "Morning visit · 45 mins",
                },
                {
                  n: "Design District Helsinki",
                  e: "Free to explore",
                  d: "Twenty-five blocks in the western city centre containing over 200 design studios, boutiques, galleries, and concept stores. Finnish design — Marimekko, Iittala, Arabia, Artek — is available at source here, and the neighbourhood itself is an exercise in applied design thinking. Museum of Finnish Architecture (€12) and Design Museum (€12) are both within the district.",
                  t: "Half day · Browse free",
                },
                {
                  n: "Ateneum Art Museum",
                  e: "€20",
                  d: "Finland&apos;s national art museum on Railway Square. The permanent collection anchors on Akseli Gallen-Kallela&apos;s monumental Kalevala paintings — enormous canvases depicting Finland&apos;s national epic that had a defining influence on Finnish national identity. Also includes Hugo Simberg&apos;s &apos;Wounded Angel&apos; and Albert Edelfelt&apos;s portraits. Essential for understanding Finland&apos;s cultural identity.",
                  t: "1.5 hrs",
                },
                {
                  n: "Löyly Harbour Sauna",
                  e: "€19 (includes towel)",
                  d: "The most architecturally celebrated public sauna in Helsinki — a striking wooden waterfront building by Avanto Architects that opened in 2016. Three saunas, Baltic swimming platform, and a restaurant terrace. Entry at €19 is excellent value for a two-hour slot. The experience of moving between the 90°C sauna and the cold Baltic water is unlike anything else in European city travel.",
                  t: "Cultural must-do · 2 hrs",
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
            title="Helsinki — Cathedrals, Sea Fortress &amp; Baltic Design"
            subtitle="Finland&apos;s elegant capital across the seasons."
            spots={[
              {
                name: "Helsinki Cathedral Senate Square",
                query: "helsinki cathedral senate square white dome finland neoclassical",
                desc: "The iconic white neoclassical cathedral overlooking Senate Square — Helsinki&apos;s defining landmark, best photographed at dawn.",
              },
              {
                name: "Suomenlinna Sea Fortress",
                query: "suomenlinna sea fortress helsinki finland UNESCO island winter",
                desc: "The 18th-century UNESCO World Heritage sea fortress — six islands of fortification walls, tunnels, and Baltic sea views.",
              },
              {
                name: "Temppeliaukio Rock Church",
                query: "temppeliaukio rock church helsinki granite interior finland",
                desc: "The Temppeliaukio Rock Church carved from solid granite — one of Europe&apos;s most architecturally extraordinary religious spaces.",
              },
              {
                name: "Löyly Harbour Sauna",
                query: "loyly sauna helsinki harbour wooden architecture finland",
                desc: "The award-winning Löyly sauna on the western harbour — the most beautiful public sauna in Helsinki.",
              },
              {
                name: "Helsinki Design District",
                query: "helsinki design district fredrikinkatu shops architecture finland",
                desc: "The Design District&apos;s 25 blocks of studios, boutiques, and galleries — Finnish design at its most concentrated.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Helsinki is one of the more expensive European capitals, but the key money-savers are significant: the HSL day pass (€9) covers the Suomenlinna ferry, market halls are far cheaper than restaurants, and most of the best sights (Senate Square, Design District, Market Square) cost nothing to experience.
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
                    ["🏨 Accommodation (per night)", "€25–35 (hostel dorm)", "€90–120 (3-star hotel)", "€250–350 (design hotel)"],
                    ["🍽 Food (per day)", "€15–20 (markets + cafés)", "€45–55 (cafés + restaurants)", "€120–160 (fine dining)"],
                    ["🚌 Transport (per day)", "€9 (HSL day pass)", "€9–20 (day pass + taxis)", "€40–60 (taxis + private)"],
                    ["🏛 Activities (per day)", "€3–15 (1 entry + free sights)", "€35–50 (2–3 museums + sauna)", "€100–150 (private tours + spa)"],
                    ["⛴ Suomenlinna Ferry", "€5 return (or free w/ day pass)", "€5 (included in day pass)", "€60–80 (private water taxi)"],
                    ["🧖 Löyly Sauna", "€19 (entry + towel)", "€19 + dinner €35–45", "€250–350 (private rental)"],
                    ["TOTAL (per day)", "~€65/day", "~€140/day", "~€320/day"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (~€65/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in a hostel dorm (Hostel Domus Academica in summer is excellent — €25–35/night in a university dorm). Eat at market halls and Hakaniemi market. Buy an HSL day pass (€9) and it covers the Suomenlinna ferry. Free sights plus Temppeliaukio (€3) keep activities cheap.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-800 mb-1">✨ Mid-Range (~€140/day)</p>
                <p className="text-xs text-amber-700 font-light leading-relaxed">Stay at Klaus K Hotel (€90–130/night) — Finnish design hotel in the city centre. Mix of market lunches and evening restaurants. Two to three museums plus Löyly sauna. This is the sweet spot for Helsinki — comfortable without overpaying.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">💎 Luxury (~€320/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay at Hotel Haven (€200–350/night) — boutique hotel steps from Market Square. Dinner at Restaurant Finnjävel for modern Finnish tasting menus. Private water taxi to Suomenlinna. Private sauna rental at Löyly. Helsinki&apos;s luxury scene is genuinely world-class.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Helsinki</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Helsinki&apos;s best areas to stay are the city centre (Senate Square, Esplanadi, Kamppi) for convenience, and Kallio for a more local experience. Almost everywhere in the city centre is walkable, and trams connect the rest.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Hotel Haven",
                  type: "Boutique luxury · South Harbour",
                  price: "From €200/night",
                  badge: "Best location",
                  desc: "Boutique hotel on the South Harbour, 2 minutes&apos; walk from Market Square and 5 minutes from Senate Square. Individually designed rooms, Finnish sauna in the building, and a rooftop terrace. The combination of location and design quality makes it the benchmark for Helsinki hotels. Book ahead — it sells out months in advance in summer.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Klaus K Hotel",
                  type: "Design hotel · City centre",
                  price: "From €120/night",
                  badge: "Best design",
                  desc: "Helsinki&apos;s most celebrated design hotel, themed around the Kalevala national epic. Each room has a different aesthetic — from minimalist Nordic to ornate Kalevala mythology. The bar and restaurant are among the best hotel dining in Helsinki. Location on Bulevardi puts you at the edge of the Design District.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Hostel Domus Academica",
                  type: "University hostel · Töölö",
                  price: "€25–45/night",
                  badge: "Best budget",
                  desc: "University dormitory converted to a hostel in summer (June–August). Single and double rooms at extremely competitive prices, all with their own bathroom. In the Töölö neighbourhood, 20 minutes&apos; walk from the city centre. Exceptionally clean, well-managed, and popular — book as early as possible for summer dates.",
                  color: "border-green-200 bg-green-50",
                },
                {
                  name: "CheapSleep Helsinki",
                  type: "Hostel · Sörnäinen / Kallio",
                  price: "€20–30/night (dorm)",
                  badge: "Most social",
                  desc: "Purpose-built hostel in the Kallio neighbourhood — Helsinki&apos;s most affordable and social accommodation. Dorm beds from €20, good common areas, and the Kallio bar and restaurant scene is on your doorstep. Easy metro connection to the city centre (2 stops). The social atmosphere makes it popular with solo travellers.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Helsinki</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Finnish food has undergone a quiet revolution in the last decade. Beyond the traditional dishes — reindeer stew, karjalanpiirakka (Karelian pasties), smoked fish — Helsinki now has some of the most exciting Nordic restaurants in Europe. Market halls remain the best value for authentic local food.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Savotta",
                  t: "Finnish traditional · Senate Square",
                  d: "The most atmospheric traditional Finnish restaurant in Helsinki, occupying a historic building directly on Senate Square. The menu centres on Finnish classics done with real quality: reindeer stew (poronkäristys) with lingonberries and mashed potato, pike-perch, bear meat in season, and karjalanpiirakka pastries with egg butter. Mains €22–35. The interior is all dark timber, hunting trophies, and candlelight. Book ahead for dinner.",
                  b: "Best traditional",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Restaurant Finnjävel",
                  t: "Modern Finnish fine dining · City centre",
                  d: "The benchmark for modern Finnish cuisine — a tasting menu restaurant serving contemporary interpretations of Finnish ingredients. The shorter lunch menu (€45–55) is significantly better value than dinner (€90–130). Signature dishes include fermented local grains, Arctic char, and cloudberry desserts. One of Helsinki&apos;s most talked-about tables. Reservations essential.",
                  b: "Best fine dining",
                  c: "bg-rose-50 border-rose-200",
                },
                {
                  n: "Café Ekberg",
                  t: "Historic café · Bulevardi",
                  d: "Opened in 1852 — the oldest café in Helsinki, in continuous operation for over 170 years. The interior is a period piece of marble tables, mirrors, and pastry cases. Famous for Napoleon pastries, cinnamon rolls (korvapuusti), and Finnish open sandwiches (voileipä). Breakfast and lunch under €15. Located on Bulevardi in the Design District. Essential for a morning coffee.",
                  b: "Best café",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  n: "Market Square Stalls",
                  t: "Outdoor market · South Harbour",
                  d: "The orange tented stalls at Market Square serve the most authentic affordable Finnish food in the city: salmon soup in a bread bowl (€8–10), grilled vendace (muikku), smoked herring, fresh crayfish in season, and sautéed reindeer baguettes. Eat standing at the counter looking out to the South Harbour and the ferry to Suomenlinna. Open from 06:30 in summer.",
                  b: "Best value",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Hakaniemi Market Hall",
                  t: "Covered market hall · Hakaniemi",
                  d: "Two-floor covered market hall in the Hakaniemi neighbourhood, 15 minutes&apos; walk from the city centre. The ground floor sells produce, meat, and fish; the upper floor has market-stall restaurants serving Finnish home cooking at local prices. Karjalanpiirakka (€2–3), fish soup (€7–9), and Finnish meat pies are the staples. Far cheaper than tourist restaurants and completely authentic.",
                  b: "Authentic local",
                  c: "bg-green-50 border-green-200",
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
            destination="Helsinki Finland"
            hotels={[
              {
                name: "Hotel Haven",
                type: "Boutique luxury · South Harbour",
                price: "From €200/night",
                rating: "5",
                badge: "Best location",
                url: "https://www.booking.com/hotel/fi/haven.html?aid=2820480",
              },
              {
                name: "Klaus K Hotel",
                type: "Design hotel · City centre",
                price: "From €120/night",
                rating: "4",
                badge: "Best design",
                url: "https://www.booking.com/hotel/fi/klaus-k.html?aid=2820480",
              },
              {
                name: "Hostel Domus Academica",
                type: "University hostel · Töölö (summer only)",
                price: "From €25/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/fi/domus-academica.html?aid=2820480",
              },
              {
                name: "CheapSleep Helsinki",
                type: "Hostel · Kallio",
                price: "From €20/night",
                rating: "3",
                badge: "Most social",
                url: "https://www.booking.com/hotel/fi/cheapsleep-helsinki.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Helsinki Highlights Walking Tour",
                duration: "3 hrs",
                price: "From €20/person",
                badge: "Best intro",
                url: "https://www.getyourguide.com/s/?q=helsinki+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Suomenlinna Fortress Guided Tour",
                duration: "2 hrs",
                price: "From €18/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=suomenlinna+guided+tour&partner_id=PSZA5UI",
              },
              {
                name: "Helsinki Sauna Experience",
                duration: "2 hrs",
                price: "From €35/person",
                badge: "Cultural",
                url: "https://www.getyourguide.com/s/?q=helsinki+sauna+experience&partner_id=PSZA5UI",
              },
              {
                name: "Tallinn Day Trip from Helsinki by Ferry",
                duration: "Full day",
                price: "From €45/person",
                url: "https://www.getyourguide.com/s/?q=tallinn+day+trip+helsinki&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Helsinki</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "❄️",
                  title: "Visiting in November without knowing what to expect",
                  desc: "November is Helsinki&apos;s darkest month — barely 6 hours of daylight, cold, and grey. Go in June–August for the midnight sun and festivals, or December–January specifically for northern lights and Christmas markets. October and April are reasonable shoulder seasons. November is only for those who specifically want to experience Nordic darkness.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  icon: "💳",
                  title: "Carrying too much cash",
                  desc: "Finland is one of the most cashless societies on Earth — even market stalls, public saunas, street food vendors, and ferry ticket machines take card. You will rarely need cash. Carry €20–30 for genuine emergencies but don&apos;t stress about finding an ATM. Contactless payment is accepted almost everywhere.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  icon: "⛴️",
                  title: "Booking the Tallinn ferry the day before",
                  desc: "Tallink and Viking Line ferries to Tallinn book up fast in summer, especially on Friday evenings and weekend mornings. Book at least 2 weeks in advance online — early booking prices start at €12–15 each way versus €45+ last minute. The Tallinn ferry is one of the best value day trips in all of Europe; don&apos;t let poor planning turn it expensive.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "🗺️",
                  title: "Staying only in the city centre and missing Kallio",
                  desc: "The Design District, Kallio, and the Töölö neighbourhood each have a completely different character. Kallio is Helsinki&apos;s creative, affordable, and genuinely local heart — its cafés, second-hand shops, and bars are as authentically Helsinki as Senate Square. Take Tram 6 east or walk 20 minutes from the railway station.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  icon: "🧖",
                  title: "Skipping the sauna because it seems uncomfortable",
                  desc: "The public sauna is the single most culturally important thing you can do in Helsinki. Löyly (harbour-side, award-winning architecture, €19) and Allas Sea Pool (outdoor pools, central location, €25) are both welcoming to international visitors with clear signage. Men and women use separate sections. Go. It will almost certainly be the experience you talk about most when you get home.",
                  color: "border-green-200 bg-green-50",
                },
                {
                  icon: "🎫",
                  title: "Buying a separate tourist ferry ticket to Suomenlinna",
                  desc: "The HSL public ferry to Suomenlinna is operated by the city&apos;s transport authority — your HSL day pass (€9) covers the return ferry. Most tourists don&apos;t know this and buy a separate tourist boat at the quay for €8–10 each way. Buy the day pass at any R-Kiosk, the airport train ticket machine, or the HSL app before you board.",
                  color: "border-teal-200 bg-teal-50",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Helsinki</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🚃",
                  title: "The HSL day pass covers the Suomenlinna ferry",
                  desc: "The public HSL ferry to Suomenlinna Sea Fortress runs from the Market Square quay and is part of the city&apos;s public transport network. Your HSL day pass (€9) covers the return ferry — a fact that saves €5–10 per person versus the tourist boat. Buy the day pass at any R-Kiosk, the HSL app, or the airport train ticket machine.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🌅",
                  title: "Senate Square at 7:00am is otherworldly",
                  desc: "Helsinki Cathedral and Senate Square are among the most photographed spots in Scandinavia, but they are packed by 10:00am. Arrive at sunrise — in summer this means as early as 04:30 (yes, really) or a more reasonable 07:00 — and you will often have the entire neoclassical square to yourself. The early light on the white dome turns golden and the scale of the space hits you properly.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🍓",
                  title: "The strawberry season (late June–July) is extraordinary",
                  desc: "Finnish summer strawberries appear at every market stall in June and July and they are small, intensely sweet, and grown in the long Arctic days. A punnet is €3–5 at Market Square. This alone is worth timing your trip to June or July — locals treat the arrival of strawberry season as a national event.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🔭",
                  title: "Northern lights from Helsinki require a clear dark night",
                  desc: "The northern lights can be seen from dark Helsinki suburbs (Nuuksio National Park, 30 minutes by car) on nights with strong solar activity. For reliable sightings, take a night train to Rovaniemi in Lapland (7 hours, from €30). The SpaceWeatherLive app tracks real-time solar activity with phone alerts for strong events.",
                  color: "bg-indigo-50 border-indigo-200",
                },
                {
                  icon: "🌊",
                  title: "The Baltic dip at Löyly is obligatory",
                  desc: "After the sauna, you are expected to swim in the Baltic Sea from the wooden harbour platform at Löyly. In summer the water is around 18–20°C — manageable and refreshing. In winter it may be 2–4°C. The contrast of heat and cold is addictive and is the entire point of Finnish sauna culture. Don&apos;t skip the swim.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🍺",
                  title: "Kallio has Helsinki&apos;s most affordable bar scene",
                  desc: "Helsinki city-centre bars charge €7–10 for a pint. In Kallio, the same pint costs €5–7 at neighbourhood bars that are more local and less tourist-facing. Tram 6 from Erottaja runs east to Kallio in 10 minutes. The Kallio block party (Kallio Block Party) in summer is one of Helsinki&apos;s best street festivals — free entry.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Helsinki" />

          {/* Combine With */}
          <CombineWith currentSlug="helsinki-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Helsinki expensive compared to other European capitals?",
                  a: "Helsinki is one of the more expensive European capitals — on par with Stockholm and slightly below Oslo and Zurich. Budget travellers can manage on €65/day with hostels, market food, and the free sights. Mid-range comfort costs €120–160/day. The key money-savers are the HSL day pass (€9, covers the Suomenlinna ferry), eating at market halls rather than sit-down restaurants, and visiting museums on their free or discounted evenings.",
                },
                {
                  q: "Do I need to speak Finnish or Swedish to visit Helsinki?",
                  a: "Absolutely not — Helsinki has among the highest English proficiency of any European capital. Virtually every sign, menu, restaurant staff member, and person you encounter will communicate fluently in English. Finnish is notoriously difficult (it is entirely unrelated to Indo-European languages) but learning &apos;kiitos&apos; (thank you) and &apos;hei&apos; (hello) will earn you genuine goodwill from locals.",
                },
                {
                  q: "Can I see the midnight sun in Helsinki?",
                  a: "Around the summer solstice (June 21), Helsinki experiences near-continuous daylight — the sun sets briefly around midnight and rises again at 03:00. It never gets properly dark. This is both magical and genuinely disorienting for sleeping — bring a good eye mask. The best viewing is at the waterfront, on a harbour cruise, or from the rooftop of a city-centre building. The light quality at midnight in June is unlike anything in normal European cities.",
                },
                {
                  q: "Is Helsinki safe for solo travellers?",
                  a: "Helsinki is consistently ranked among the safest capitals in the world. Crime rates are extremely low, the transport system runs reliably at night until 02:00 (later on weekends), and the city is well-lit and walkable even late at night. The main practical concerns are pickpockets in crowded Market Square (rare but possible) and extremely icy pavements in January–February. Carry winter boots with grip if visiting in midwinter.",
                },
                {
                  q: "How do I get to Tallinn from Helsinki?",
                  a: "Tallink Silja, Viking Line, and Eckerö Line all run ferries from Helsinki South Harbour (Olympia or West Terminals) to Tallinn&apos;s Passenger Terminal. The standard ferry takes 2 hours 30 minutes; the fast ferry (Tallink Star) takes 2 hours. Prices start from €12–15 each way booked early online, rising to €25–45 for standard booking and €45+ last minute. Ferries run several times daily in each direction. The West Terminal is 1.5km from Helsinki Central Station — take Tram 9 or walk 20 minutes.",
                },
                {
                  q: "What Finnish food should I try in Helsinki?",
                  a: "The must-tries: karjalanpiirakka (Karelian pasties — oval rye pastries filled with rice porridge, served with egg butter), salmon soup (lohikeitto) served in a bread bowl at Market Square, reindeer stew (poronkäristys) with lingonberries at Savotta, and sautéed vendace (muikku) — small fresh-water fish from Finnish lakes. For breakfast: Finnish rye bread with smoked salmon and a strong cup of filter coffee. Finns consume more coffee per capita than any other nation on Earth.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Helsinki trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-helsinki", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/helsinki-budget-guide", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/suomenlinna-guide", label: "Suomenlinna guide", icon: "⛴️" },
                { href: "/blog/helsinki-sauna-guide", label: "Sauna culture guide", icon: "🧖" },
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
          <RelatedGuides currentSlug="helsinki-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Nordic &amp; Baltic Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Stockholm 3 Days — The Swedish Capital", href: "/blog/stockholm-3-days" },
                { label: "Copenhagen 3 Days — Denmark&apos;s Best", href: "/blog/copenhagen-3-days" },
                { label: "Tallinn 3 Days — Medieval Baltic Gem", href: "/blog/tallinn-3-days" },
                { label: "Oslo 3 Days — Norway&apos;s Capital", href: "/blog/oslo-3-days" },
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
