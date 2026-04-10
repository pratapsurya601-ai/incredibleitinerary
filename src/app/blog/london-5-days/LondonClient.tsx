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
const LONDON_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What London Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "5-Day Itinerary" },
  { id: "landmarks",   emoji: "🏛️", label: "Landmark Guide" },
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
          href: `mailto:?subject=London 5-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=London in 5 Days — free museums, Borough Market and the complete itinerary&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/london-5-days"
        imageUrl="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80"
        description="London in 5 Days: Tower of London, Borough Market, free world-class museums, contactless transport tips and a complete budget breakdown for every traveller."
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
export default function LondonClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={LONDON_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="London" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="london tower bridge thames england uk skyline"
            fallback="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&q=80"
            alt="London Tower Bridge over River Thames England UK at golden hour"
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
              <span className="text-white/70">London 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Museums &amp; History
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">17 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                London in 5 Days:
                <em className="italic text-amber-300"> Free Museums, The Tube &amp; What to Actually Spend</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Westminster Bridge at dawn, Borough Market on a Sunday, the British Museum without the scrum, and a proper pub pie — the complete London guide with real timings, costs in GBP &amp; USD, and the mistakes that ruin most trips.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="17 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇬🇧 United Kingdom</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From £55/day (~$70)</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              London at 6am &mdash; an empty Westminster Bridge with Big Ben glowing amber across the Thames, the South Bank utterly silent, a flat white from a Borough Market stall warming your hands &mdash; is one of those travel experiences that makes a city feel genuinely yours. Five days lets you do the Tower of London without the scrum, Notting Hill before the Instagram crowds, and still have time to nurse a pint in a proper pub.
            </p>
          </blockquote>

          {/* ── WHAT LONDON ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What London Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              London is one of those cities where the sheer density of history, art and culture per square kilometre is almost absurd. Within a single afternoon you can walk from a Roman wall fragment to a medieval fortress to a baroque cathedral to a Brutalist arts centre to a glass-and-steel skyscraper &mdash; and the people living around each of them speak a collective 300+ languages. It has been continuously inhabited for nearly 2,000 years, and nearly every century has left something extraordinary behind.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The practical reality: London is expensive, but far less so than people expect if you use the free museums aggressively. The British Museum, National Gallery, Natural History Museum, V&amp;A, Tate Modern, Science Museum and National Portrait Gallery are all completely free &mdash; the combined collection value rivals the Louvre. Transport costs are controlled with a contactless bank card that caps automatically. The biggest expense is accommodation; everything else is manageable.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Five days is the sweet spot. Enough time for Westminster, the Tower of London, the South Bank, Kensington&apos;s museums, Bloomsbury, a day trip to Greenwich or Windsor, and a proper Borough Market Sunday &mdash; without the exhaustion that turns a seven-day trip into a forced march.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airports" value="LHR / LGW / STN" />
              <StatCard icon="🌡️" label="Best Season" value="May–Sep" />
              <StatCard icon="🏛️" label="Free Museums" value="20+" />
              <StatCard icon="💰" label="Budget From" value="£55/day (~$70)" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit London</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–Jun",
                  i: "☀️",
                  t: "Late Spring — Best Overall",
                  d: "16–22°C, long daylight (sunrise ~5am, sunset ~9pm), parks in full bloom, outdoor markets buzzing. Tourist numbers are manageable outside the bank holidays. May is arguably the single best month for a London visit — the weather is warm enough for walking all day, the Royal Parks are extraordinary, and peak-season prices haven't kicked in yet.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🌅",
                  t: "Peak Summer — Busiest & Warmest",
                  d: "18–27°C, occasionally hitting 30°C+. The longest days and most reliable warmth, but also the highest tourist density at every major attraction. Accommodation prices peak. The Proms at the Royal Albert Hall, open-air theatre in Regent's Park, and rooftop bars across the South Bank are in full swing. Book attractions and restaurants well ahead.",
                  b: "Great weather, highest prices",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Early Autumn — Excellent Value",
                  d: "14–20°C, autumn colours in the Royal Parks, shorter queues at major museums. September still has summer warmth; October is cooler but the light through the trees in Hyde Park and Greenwich Park is spectacular. New theatre and exhibition seasons launch. Accommodation drops 20–30% from peak.",
                  b: "Best value",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Nov–Mar",
                  i: "🌧️",
                  t: "Winter — Cheapest & Festive",
                  d: "4–10°C, short days (sunset by 4pm in December), occasional rain. But: Christmas lights on Oxford Street and Regent Street, ice rinks at Somerset House and the Natural History Museum, and mulled wine at winter markets make November–December magical. January and February are the cheapest months with dramatically fewer tourists at every museum.",
                  b: "Budget travellers & Christmas",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to London</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> London has six airports. <strong className="font-medium">Heathrow (LHR)</strong> is the main international hub, 45–60 min from central London by Piccadilly line (£5.50). <strong className="font-medium">Gatwick (LGW)</strong> handles budget airlines, 30 min by Gatwick Express (£19.90) or Southern rail (£11). <strong className="font-medium">Stansted (STN)</strong> serves Ryanair and budget carriers, 50 min by Stansted Express (£19.40). Use contactless or Oyster for capped daily fares.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Direct flights from India",
                  d: "Air India, Vistara and British Airways fly direct from Delhi and Mumbai to London Heathrow. Flight time: 9–10 hours. Fares: Rs 35,000–Rs 75,000 return if booked 2–3 months ahead. Budget alternative: connecting via Abu Dhabi or Dubai on Etihad/Emirates saves Rs 8,000–15,000 with a 2–4 hour layover. Indian passport holders require a Standard Visitor Visa (£115, apply 3–8 weeks ahead via vfsglobal.com).",
                  b: "Best from India",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "From Europe & worldwide",
                  d: "Budget airlines (Ryanair, easyJet, Wizz Air) connect London to all major European cities from £20–80 one way. Most fly into Gatwick, Stansted or Luton. From the US/Canada: direct flights on BA, Virgin, American and United from $400–800 return. From Australia/NZ: stopover in Singapore, Dubai or Hong Kong, from A$900–1,500 return. US/EU/Australian citizens need a UK ETA (£10, apply via the official UK ETA app).",
                  b: "Cheapest flights",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "💳",
                  t: "Oyster card & contactless",
                  d: "Your contactless Visa/Mastercard or Apple/Google Pay works on every bus, tube, Overground, DLR and Elizabeth line. Daily cap: £7.70 (Zone 1–2). Weekly cap: £40.70. You pay the cheapest fare automatically. There is no reason for a visitor with a contactless card to buy a paper ticket or even an Oyster card. If your card charges foreign transaction fees, buy an Oyster at any station (£7 deposit, refundable).",
                  b: "Use contactless",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚇",
                  t: "Airport to central London",
                  d: "Heathrow: Piccadilly line (£5.50, 50 min) or Elizabeth line (£5.50, 30 min to Paddington). Gatwick: Southern rail (£11, 35 min to Victoria) or Thameslink (£11, 30 min to St Pancras). Stansted: Stansted Express (£19.40, 50 min to Liverpool Street). Black taxi from Heathrow: fixed £52–87 depending on zone. Uber/Bolt: £35–55 to Zone 1.",
                  b: "Tube is best value",
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

          {/* ── 5-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day London Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary covers budget to mid-range spending (£55–200/day, ~$70–255). Each day card is expandable. The route covers Westminster, the City, Kensington, Bloomsbury &amp; Soho, and a Greenwich/Windsor day trip. Costs in GBP with USD equivalents at ~£1 = $1.28.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Westminster, South Bank & Borough Market"
                cost="£20–35 (~$25–45) excl. accommodation"
                items={[
                  "6:00am — Westminster Bridge at sunrise. Big Ben and the Houses of Parliament reflected in the Thames with zero tourists and golden light. Set an alarm. This is one of the best free photographs in Europe.",
                  "7:30am — Flat white from a cafe on Victoria Street (£3.50). Walk through St James's Park (free) — pelicans on the lake, Horse Guards Parade, Buckingham Palace as a backdrop.",
                  "10:45am — Changing of the Guard at Buckingham Palace (free). Gather at the Palace railings by 10:30am. Ceremony lasts 45 minutes, happens daily in summer and on alternate days in winter.",
                  "12:00pm — Westminster Abbey exterior walk. Entry is £27 (~$35) — save this for a future trip if on a budget, but walk the full perimeter and look up at the Gothic towers.",
                  "1:00pm — Picnic lunch in St James's Park: M&S Simply Food meal deal £4.50 (~$5.75) for a sandwich, snack and drink. Eat watching the ducks.",
                  "3:00pm — Walk across Westminster Bridge to the South Bank. Tate Modern (free, permanent collection). The Turbine Hall alone is worth the trip — the scale is extraordinary.",
                  "5:00pm — Millennium Bridge to St Paul's Cathedral exterior, then back across. The view from the bridge in both directions is one of London's great photographs.",
                  "7:00pm — Evening walk along the South Bank past the Globe Theatre exterior (free). Dinner at a Borough Market stall — street food £6–12 (~$8–15).",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Tower of London, Tower Bridge & The City"
                cost="£50–70 (~$64–90) excl. accommodation"
                items={[
                  "9:00am — Tower of London (£33/~$42, book online). Arrive at 9am sharp — the Beefeater tours start early, the Crown Jewels queue is manageable before 10:30am. Allow 2.5 hours minimum.",
                  "11:30am — Tower Bridge (walking across: free; glass-floor walkway tour: £12.30/~$16). The Victorian engine rooms and high-level walkway with glass panels over the Thames are genuinely impressive.",
                  "1:00pm — Borough Market for lunch. Free to walk around. Monmouth Coffee (£3.50), a salt beef bagel (£8/~$10), or a Portuguese custard tart (£2.50). Budget £8–14 (~$10–18) total.",
                  "3:00pm — Walk along the South Bank past Bankside to the Tate Modern area. The riverside walk from Southwark to Blackfriars is one of the best urban walks in Europe.",
                  "4:30pm — Shakespeare's Globe: exterior is free. Summer evening plays offer £5 (~$6.40) standing tickets as a groundling — the best-value theatre experience in London.",
                  "6:00pm — St Paul's Cathedral exterior walk. The dome from Ludgate Hill is magnificent. Entry £22 (~$28) if you want inside — the Whispering Gallery alone justifies it.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="British Museum, Covent Garden & Camden"
                cost="£25–40 (~$32–51) excl. accommodation"
                items={[
                  "9:00am — British Museum (free). The Rosetta Stone, the Elgin Marbles, Egyptian mummies, the Sutton Hoo helmet. Plan around 3–4 rooms you genuinely want to see. The Great Court architecture alone is world-class.",
                  "11:30am — Walk through the Inns of Court (Lincoln's Inn, Gray's Inn — free on weekdays). Quiet legal gardens unknown to most tourists and completely extraordinary.",
                  "1:00pm — National Gallery on Trafalgar Square (free). Van Gogh, Monet, Turner, Velazquez. One of the top five art collections in the world, no booking required.",
                  "2:30pm — Covent Garden: free street performers in the piazza are often genuinely excellent — living statues, opera singers, acrobats. Avoid the piazza restaurants (tourist-priced); grab coffee from a side street.",
                  "4:00pm — Camden Market and Camden Town. Street food from around the world (£6–10/~$8–13 per dish), vintage clothing, the Lock, and Camden High Street's famously eclectic shopfronts. Walk along Regent's Canal toward King's Cross for a quieter perspective.",
                  "7:00pm — Dinner in Chinatown (just off Leicester Square) — dim sum for £14–20 (~$18–26) per person, some of London's best-value eating.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Kensington Museums, Hyde Park & Notting Hill"
                cost="£25–45 (~$32–58) excl. accommodation"
                items={[
                  "9:30am — Victoria & Albert Museum (free). Fashion galleries, Islamic art, cast courts, Raphael Cartoons. Allow 2–3 hours and do not try to do everything.",
                  "11:30am — Natural History Museum (free, next door). The blue whale skeleton in Hintze Hall alone justifies the visit. The Darwin Centre for live science and the Vault for minerals and gems.",
                  "1:30pm — Hyde Park walk (free). Exhibition Road entrance past the Serpentine, Princess Diana Memorial Fountain, Rose Garden, Speaker's Corner. London's greatest park.",
                  "3:00pm — Notting Hill neighbourhood walk. The coloured houses on Westbourne Grove and Lancaster Road, Portobello Road (Fridays and Saturdays for the full antiques market), the bookshops.",
                  "5:00pm — Kensington Palace (£22/~$28). Queen Victoria's birthplace, royal dress collection. Budget travellers: the Kensington Gardens surrounding it are free and beautiful.",
                  "7:30pm — Dinner in Notting Hill or Bayswater: Thai or Middle Eastern food on Queensway (£10–16/~$13–20 a main), or a pub dinner on Pembridge Road.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Greenwich or Windsor Day Trip & Farewell"
                cost="£45–70 (~$58–90) excl. accommodation"
                items={[
                  "OPTION A — Greenwich: DLR from Bank to Cutty Sark station (30 min, free with contactless daily cap). Cutty Sark clipper ship £18 (~$23). Royal Observatory & Planetarium £16 (~$20). Stand on the Prime Meridian Line (0 degrees longitude). The view back over Canary Wharf from Greenwich Park is one of London's finest panoramas — the park is free.",
                  "OPTION B — Windsor Castle: Train from Paddington or Waterloo (45 min, £15–22/~$19–28 return). Windsor Castle entry £30 (~$38) — the largest occupied castle in the world, St George's Chapel, the State Apartments. The town of Windsor is pleasant for lunch (£12–18/~$15–23 pub lunch).",
                  "4:00pm — Return to London. Final afternoon in your favourite neighbourhood or last-minute museum visit.",
                  "5:00pm — Farewell drink at a proper British pub: The George Inn (Southwark, London's last surviving galleried coaching inn), The Lamb & Flag (Covent Garden, 17th century), or The Churchill Arms (Kensington, flower-covered exterior, Thai food inside).",
                  "7:00pm — Last supper: go Indian. Brick Lane for Bangladeshi curry (£12–18/~$15–23 a main), Dishoom for Bombay-style café food (£14–22/~$18–28), or Tooting for the best South Asian food outside the subcontinent (£10–14/~$13–18).",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="London" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important landmarks and museums in priority order. London&apos;s world-class museums are free — the combined value of their collections is incalculable. Paid entries are as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "British Museum",
                  e: "Free",
                  d: "The Rosetta Stone, the Elgin Marbles, the Egyptian mummies, the Sutton Hoo helmet, the Lewis Chessmen — 8 million objects spanning 2 million years of human history. The Great Court (Norman Foster's glass roof over the Reading Room) is one of the great architectural spaces in London. Plan around 3–4 galleries; doing everything in one visit is impossible.",
                  t: "Must see · Free · 2–3 hrs",
                },
                {
                  n: "Tower of London",
                  e: "£33 (~$42)",
                  d: "William the Conqueror's fortress, nearly a thousand years old. The Crown Jewels, the Beefeater tours (included in entry — start at the main entrance every 30 min), the ravens, the armoury, and the cells where Anne Boleyn, Sir Walter Raleigh and Guy Fawkes were held. Arrive at 9am sharp to beat the Crown Jewels queue.",
                  t: "Must see · 2.5 hrs",
                },
                {
                  n: "National Gallery",
                  e: "Free",
                  d: "Trafalgar Square, one of the five greatest art collections in the world. Van Gogh's Sunflowers, Turner's Fighting Temeraire, Monet's Water Lilies, Holbein's Ambassadors. No booking required. Friday late openings until 9pm are quieter than daytime visits.",
                  t: "Must see · Free · 2 hrs",
                },
                {
                  n: "Tate Modern",
                  e: "Free (special exhibitions £22–25/~$28–32)",
                  d: "Housed in the former Bankside Power Station. The Turbine Hall hosts massive installations that change annually. Permanent collection includes Picasso, Rothko, Warhol, Hockney. The building itself — the industrial cathedral space — is as much an exhibit as the art inside.",
                  t: "Must see · Free · 1.5–2 hrs",
                },
                {
                  n: "Natural History Museum",
                  e: "Free",
                  d: "The blue whale skeleton in Hintze Hall, the Darwin Centre, the Vault of minerals and gems, and the dinosaur galleries. The Romanesque terracotta building on Cromwell Road is one of the most beautiful museum buildings in the world. Children love it; adults who plan to skim it find themselves still there two hours later.",
                  t: "Must see · Free · 2 hrs",
                },
                {
                  n: "Westminster Abbey",
                  e: "£27 (~$35)",
                  d: "Coronation church of the English monarchy since 1066. Poets' Corner, the Coronation Chair, Henry VII's Lady Chapel, and the tombs of Elizabeth I, Mary Queen of Scots and Charles Darwin. The audio guide is included. Even from the exterior, the Gothic towers are extraordinary.",
                  t: "Iconic · 1.5 hrs",
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
            title="London — Bridges, Palaces &amp; Parklands"
            subtitle="Nearly 2,000 years of history and the world's greatest concentration of free museums."
            spots={[
              {
                name: "Tower Bridge at Sunset",
                query: "tower bridge london sunset thames river golden light",
                desc: "London's most iconic bridge — the Victorian bascule bridge over the Thames, best photographed from the north bank at golden hour.",
              },
              {
                name: "Big Ben & Westminster",
                query: "big ben westminster bridge london dawn golden hour parliament",
                desc: "The Elizabeth Tower and the Houses of Parliament from Westminster Bridge — best at 6am when the bridge is completely empty.",
              },
              {
                name: "Borough Market",
                query: "borough market london food stalls busy colourful",
                desc: "London's oldest food market — over a thousand years of trading on this site, and still the best place to eat in the city.",
              },
              {
                name: "British Museum Great Court",
                query: "british museum great court london glass roof reading room",
                desc: "Norman Foster's glass-roofed Great Court — one of the great architectural spaces in London, free to enter at any time.",
              },
              {
                name: "Greenwich Park & Observatory",
                query: "greenwich park london observatory canary wharf skyline view",
                desc: "Stand on the Prime Meridian and look back over one of London's finest urban panoramas — the Old Royal Naval College and Canary Wharf beyond.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              London is expensive but manageable if you use the free museums aggressively and eat at markets instead of tourist restaurants. Budget travellers can genuinely get by on £55–95/day. All prices in GBP and USD at ~£1 = $1.28.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category (5 days)</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">✨ Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">💎 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (5N)", "£125–200 ($160–256)", "£400–750 ($512–960)", "£2,500–6,000 ($3,200–7,680)"],
                    ["🍽 Food & Drinks", "£75–125 ($96–160)", "£175–325 ($224–416)", "£600–1,750 ($768–2,240)"],
                    ["🚇 Transport", "£25–50 ($32–64)", "£50–100 ($64–128)", "£250–750 ($320–960)"],
                    ["🎯 Activities", "£50–100 ($64–128)", "£150–300 ($192–384)", "£500–2,000 ($640–2,560)"],
                    ["TOTAL (per person)", "£275–475 ($352–608)", "£775–1,475 ($992–1,888)", "£3,850–10,500+ ($4,928–13,440+)"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (£55–95/day, ~$70–122)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostels or budget hotels (£25–40/night), market lunches and supermarket dinners (£15–25/day), contactless tube cap (£7.70/day Zone 1–2), and free museums all day. London&apos;s free museums make budget travel here more culturally rich than mid-range travel in most cities.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">✨ Mid-Range (£155–295/day, ~$198–378)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">3-star hotel in Zone 1–2 (£80–150/night), restaurant lunches and pub dinners, paid attractions (Tower, Abbey, Kensington Palace), and a theatre evening. The sweet spot for comfort and access.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (£770–2,100+/day, ~$986–2,688+)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">5-star hotels (The Savoy, Claridge's), Michelin-starred dining, private guided tours, helicopter transfers, Savile Row fittings, and afternoon tea at The Ritz. London luxury is world-class and priced accordingly.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in London</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Location relative to tube stations matters more than the neighbourhood name. Anywhere within 5 minutes walk of a Zone 1–2 station puts all of London within 20 minutes. These four areas offer the best base for different priorities.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "South Kensington",
                  type: "Museums & parks · Zone 1",
                  price: "From £80/night (~$102)",
                  badge: "Best for culture",
                  desc: "Walking distance to the V&A, Natural History Museum, Science Museum and Hyde Park. The area is beautiful, safe, and well-connected by the Piccadilly, Circle and District lines. Excellent restaurants on Exhibition Road and Brompton Road. Point A Hotels and The Kensington offer good mid-range value.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Shoreditch & East London",
                  type: "Street art, food & nightlife · Zone 1–2",
                  price: "From £60/night (~$77)",
                  badge: "Best for nightlife",
                  desc: "London's most interesting neighbourhood for food, street art and evening culture. Brick Lane, Boxpark, Old Truman Brewery, and dozens of independent restaurants. The Overground and Central/Northern lines connect you to everywhere. Generator Hostel and The Hoxton offer excellent value at their respective price points.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "King's Cross & St Pancras",
                  type: "Transport hub · Zone 1",
                  price: "From £70/night (~$90)",
                  badge: "Best for transport",
                  desc: "Six tube lines, mainline trains to everywhere, Eurostar to Paris, and a dramatically regenerated neighbourhood with Coal Drops Yard, Granary Square and the British Library. The Hub by Premier Inn and Point A Hotels offer clean, modern rooms. Walking distance to the British Museum and Bloomsbury.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Westminster & South Bank",
                  type: "Central landmarks · Zone 1",
                  price: "From £90/night (~$115)",
                  badge: "Best for sightseeing",
                  desc: "Walking distance to Big Ben, the London Eye, Tate Modern, Borough Market and Westminster Abbey. Southwark is the better value side of the river. Premier Inn London Southwark and citizenM Bankside offer solid mid-range options with landmark views. The tube and bus connections are unbeatable.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in London</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The single most important food rule in London: walk 5–8 minutes from any major landmark and prices drop significantly. Borough Market is the exception — intentionally great food at fair prices. London&apos;s food scene is now genuinely world-class across every cuisine and budget level.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Borough Market",
                  t: "Food market · Southwark",
                  d: "London's oldest and best food market, over a thousand years of trading on this site. Monmouth Coffee (the best in London), St John Bread sourdough, Brindisa Spanish charcuterie, Neal's Yard Dairy aged cheddars. A browse and coffee costs £5; a full stall-built lunch costs £15–20 (~$19–26) and beats any restaurant nearby. Sunday morning is less crowded than Saturday.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Dishoom",
                  t: "Bombay-style cafe · Multiple locations",
                  d: "Bombay cafe culture transplanted to London — one of the city's most popular restaurants for good reason. The bacon naan roll at breakfast is legendary. The black daal is among the best daal you will eat anywhere in the world. £14–22 (~$18–28) per person for a full meal. Book ahead or queue early at King's Cross, Shoreditch or Covent Garden. Worth every minute of waiting.",
                  b: "Best Indian",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Pie & Mash Shops",
                  t: "Traditional British · Various",
                  d: "Traditional London working-class food dating back to the 1800s. Manze's (multiple locations, the oldest surviving pie and mash shop), Goddard's (Greenwich), and F. Cooke (Hoxton) serve proper steak and kidney or minced beef pies with mashed potato, parsley liquor, and sometimes jellied eels. £6–10 (~$8–13) for a full meal. A genuine slice of London food history that most tourists miss entirely.",
                  b: "Most authentic",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Sunday Roast Pubs",
                  t: "Traditional British · Citywide",
                  d: "The British Sunday roast — slow-roasted beef, lamb, chicken or pork with Yorkshire pudding, roast potatoes, gravy and seasonal vegetables — is one of the great meals of the world when done well. The Harwood Arms (Fulham, Michelin star), The Marksman (Hackney), The Guinea Grill (Mayfair), or The Anchor (Bankside). £16–28 (~$20–36) per person. Book ahead for the good ones.",
                  b: "Sunday tradition",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Brick Lane Curry Houses",
                  t: "Bangladeshi & Indian · East London",
                  d: "London's famous curry mile. Dozens of Bangladeshi and Indian restaurants competing for your attention with touts outside every door. The quality varies widely — skip the ones with the most aggressive touts. Tayyabs (Whitechapel, BYO, legendary lamb chops, £12–18/~$15–23 per person) and Needoo Grill (opposite Tayyabs, equally excellent) are the genuine standouts.",
                  b: "Best value dinner",
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
            destination="London UK"
            hotels={[
              {
                name: "Premier Inn London Southwark",
                type: "Budget Hotel · South Bank",
                price: "From £80/night (~$102)",
                rating: "4",
                badge: "Budget pick",
                url: "https://www.booking.com/hotel/gb/premier-inn-london-southwark.html?aid=2820480",
              },
              {
                name: "The Hoxton Shoreditch",
                type: "Boutique Hotel · East London",
                price: "From £120/night (~$154)",
                rating: "5",
                badge: "Mid-range pick",
                url: "https://www.booking.com/hotel/gb/the-hoxton-shoreditch.html?aid=2820480",
              },
              {
                name: "citizenM Tower of London",
                type: "Design Hotel · The City",
                price: "From £130/night (~$166)",
                rating: "5",
                badge: "Best design",
                url: "https://www.booking.com/hotel/gb/citizenm-tower-of-london.html?aid=2820480",
              },
              {
                name: "The Ned London",
                type: "Luxury · City of London",
                price: "From £350/night (~$448)",
                rating: "5",
                badge: "Luxury pick",
                url: "https://www.booking.com/hotel/gb/the-ned-london.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Tower of London & Crown Jewels",
                duration: "2.5 hours",
                price: "From £33/person (~$42)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=tower+of+london+tickets&partner_id=PSZA5UI",
              },
              {
                name: "Westminster & Changing of the Guard",
                duration: "3 hours",
                price: "From £25/person (~$32)",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=westminster+walking+tour+london&partner_id=PSZA5UI",
              },
              {
                name: "Windsor Castle Day Trip",
                duration: "Full day",
                price: "From £45/person (~$58)",
                badge: "Day trip",
                url: "https://www.getyourguide.com/s/?q=windsor+castle+day+trip+london&partner_id=PSZA5UI",
              },
              {
                name: "Thames River Cruise",
                duration: "1 hour",
                price: "From £15/person (~$19)",
                url: "https://www.getyourguide.com/s/?q=thames+river+cruise+london&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🎫",
                  title: "Buying Tube tickets instead of using contactless",
                  desc: "Single paper tube tickets cost £2.80–5.60 each and are a waste of money. Your contactless bank card (Visa/Mastercard) or Apple/Google Pay works on every bus, tube, Overground and Elizabeth line. Daily cap: £7.70 (Zone 1–2). Weekly cap: £40.70. You pay the cheapest fare automatically. There is genuinely no reason for a visitor with a contactless card to queue at a ticket machine.",
                },
                {
                  icon: "🏛️",
                  title: "Paying for museums that are free",
                  desc: "London's world-class museums are free: British Museum, Natural History Museum, V&A, Science Museum, National Gallery, Tate Modern, Tate Britain, National Portrait Gallery, the Wallace Collection, the Sir John Soane's Museum. Visitors who pay for Madame Tussauds (£33+) while missing the British Museum (free) are making the worst trade in travel.",
                },
                {
                  icon: "✈️",
                  title: "Taking the Heathrow Express when the tube exists",
                  desc: "The Heathrow Express is £25 each way to Paddington (£37 on the day). The Piccadilly line or Elizabeth line runs from Heathrow to central London for £5.50 (~$7). The 35-minute time saving costs £19–32 per person each way — a restaurant meal for the sake of sitting on a slightly faster train.",
                },
                {
                  icon: "🍽️",
                  title: "Eating adjacent to tourist sites",
                  desc: "Any restaurant within 100 metres of the Tower of London, Westminster, the British Museum or Covent Garden piazza is charging a tourist premium. A pasta near the Tower is £18; the identical dish 3 streets away is £12 (~$15). Walk 5–8 minutes from any major landmark. Borough Market is the exception: excellent food at fair prices.",
                },
                {
                  icon: "🪄",
                  title: "Madame Tussauds & overpriced attractions",
                  desc: "Madame Tussauds charges £33–38 per adult for wax figures and 90 minutes of queuing. The same day at the British Museum (free), Natural History Museum (free) and St Paul's Cathedral (£22/~$28) gives more cultural richness for one-third of the price. London's paid attractions worth doing: Tower of London, Tower Bridge, Kensington Palace, The View from The Shard.",
                },
              ].map((m) => (
                <TipCard
                  key={m.title}
                  icon={m.icon}
                  title={m.title}
                  desc={m.desc}
                  color="bg-white border-parchment-2"
                />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for London</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "Westminster at 6am: London's best free photo",
                  desc: "Westminster Bridge at 6am is completely empty and the light on Big Ben from the east is extraordinary in spring and summer. By 9am there are hundreds of people. Tower Bridge (best from the north bank, 7am), the South Bank (6:30am), and Notting Hill's coloured houses (8am before weekend crowds) are similarly transformed by early light.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🛒",
                  title: "Sunday at Borough Market",
                  desc: "Borough Market on a Sunday morning (10am–5pm) is the definitive London food experience. Less crowded than Saturday, all full-time traders are open. Monmouth Coffee, St John Bread, Brindisa charcuterie, Neal's Yard Dairy. A browse and coffee costs £5 (~$6.40); a full stall-built lunch costs £15–20 (~$19–26) and beats any restaurant nearby.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🖼️",
                  title: "National Gallery late openings",
                  desc: "The National Gallery's permanent collection on Trafalgar Square is free, no booking required, and contains works by Van Gogh, Turner, Monet and Velazquez. Friday late openings until 9pm are dramatically quieter than daytime visits. Most visitors spend more time queuing for Madame Tussauds than they spend in this building.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "💳",
                  title: "Contactless works on everything — even black cabs",
                  desc: "London's entire transport network accepts contactless Visa/Mastercard and Apple/Google Pay. Daily and weekly caps apply automatically. Black cabs accept contactless in the back seat. Buses are cashless — card or contactless only. You barely need cash for transport during your entire stay.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🍺",
                  title: "Find a real pub, not a tourist pub",
                  desc: "A traditional pub lunch (pie and mash, ploughman's, fish and chips) is £10–16 (~$13–20) and one of the best-value meals in the city. A pint of ale is £5–7 (~$6.40–9) in Zone 1–2. Seek: The George Inn (Southwark, 1677), The Lamb & Flag (Covent Garden, 1772), The Harp (CAMRA Pub of the Year), The Churchill Arms (Kensington). Avoid any pub with laminated picture menus near Trafalgar Square.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🎭",
                  title: "West End theatre for less",
                  desc: "The TKTS booth in Leicester Square sells same-day discounted tickets for West End shows at 25–50% off. Queue from 10am for the best selection. Shakespeare's Globe offers £5 (~$6.40) standing groundling tickets in summer — the most atmospheric theatre experience in London. The National Theatre and Donmar Warehouse release cheap tickets online on specific dates.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="London" />

          {/* Combine With */}
          <CombineWith currentSlug="london-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is London safe for tourists?",
                  a: "London is generally very safe for tourists. The main practical risks are pickpockets in crowded areas (Oxford Street, Covent Garden, tube carriages) and occasional phone snatching. Use a cross-body bag, keep phones in pockets while walking, and be aware at tube doors. The underground is safe even late at night, and most neighbourhoods tourists visit are well-policed.",
                },
                {
                  q: "What's the best area to stay in London?",
                  a: "For first-timers: Southwark (South Bank) puts you 10 minutes' walk from Tate Modern, Borough Market and Tower Bridge. King's Cross is excellent for transport links. Covent Garden is central but expensive. Notting Hill and Kensington are beautiful and walkable to the V&A and Hyde Park. Location relative to tube stations matters more than the neighbourhood name.",
                },
                {
                  q: "How expensive is London really?",
                  a: "London is expensive but less so if you use the free museums. A realistic budget: £25–40/night hostel, £15–20/day food (market lunches, supermarket dinners), £5–7 tube daily cap, and free museums and parks. That is genuinely £55–75/day (~$70–96). Mid-range with a hotel and restaurant dinners: £180–300/day (~$230–384). The cost spike comes from accommodation — even 3-star Zone 1 hotels average £100–200/night.",
                },
                {
                  q: "How do I get from Heathrow to central London?",
                  a: "Best value: Piccadilly line (£5.50/~$7 with contactless, 50–60 min, every 5–10 min) or Elizabeth line (£5.50, 30 min to Paddington). Black taxi: fixed £52–87 depending on zone, 45–90 min in traffic. Heathrow Express: £25 (~$32), Paddington in 15 min — significantly overpriced unless speed is essential.",
                },
                {
                  q: "Do I need a UK visa as an Indian citizen?",
                  a: "Yes. Indian passport holders require a Standard Visitor Visa. Apply at least 3 weeks before travel (8+ weeks in summer) via vfsglobal.com or the UKVI portal. Fee: £115 (~$147). You need 6 months of bank statements, accommodation confirmation, return ticket and proof of employment. The visa grants up to 6 months' stay.",
                },
                {
                  q: "What is the tipping culture in London?",
                  a: "Tipping is expected but not mandatory. Restaurants: 10–15% if service charge is not already added (many now add 12.5% automatically — check the bill). Pubs: not customary for drinks at the bar. Taxis: round up or add 10%. No tip at fast food, takeaways or market stalls. If service charge is on the bill, you are not obligated to add more.",
                },
                {
                  q: "When is the best time to visit London?",
                  a: "May to September for long days, warm weather (18–25°C) and outdoor everything. June and July are most reliably warm. September is excellent — summer warmth lingers, tourist numbers drop, new theatre season begins. December is magical for Christmas lights, ice rinks and mulled wine at winter markets. January is cheapest with fewest crowds but cold and short days.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your London trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-london", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/london-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-london", label: "How to get there", icon: "✈️" },
                { href: "/blog/london-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="london-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Edinburgh &mdash; 4 Day Guide", href: "/blog/edinburgh-4-days" },
                { label: "Paris &mdash; 5 Day Guide", href: "/blog/paris-5-days" },
                { label: "Amsterdam &mdash; 4 Day Guide", href: "/blog/amsterdam-4-days" },
                { label: "Rome &mdash; 4 Day Itinerary", href: "/blog/rome-4-days" },
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
