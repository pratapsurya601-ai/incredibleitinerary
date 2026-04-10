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
import { PinterestSaveButton } from "@/components/ui/PinterestSaveButton";
import { usePageUrl } from "@/lib/hooks";

// ── Table of Contents ─────────────────────────────────────────────────────────
const CHARLESTON_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Charleston Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "4-Day Itinerary" },
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
          href: `mailto:?subject=Charleston SC 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Charleston SC in 4 Days — Rainbow Row, Fort Sumter, and the best shrimp and grits in the South&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/charleston-sc-4-days"
        imageUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
        description="Charleston SC in 4 Days: Rainbow Row, Fort Sumter, Battery mansions, shrimp and grits at Husk, and antebellum plantations — complete 2026 travel guide."
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
export default function CharlestonScClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={CHARLESTON_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Charleston, SC" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="charleston south carolina rainbow row historic homes east bay street pastel"
            fallback="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
            alt="Charleston Rainbow Row colorful Georgian row houses on East Bay Street"
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
              <span className="text-white/70">Charleston SC 4 Days</span>
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
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Charleston SC in 4 Days:
                <em className="italic text-amber-300"> Rainbow Row, Fort Sumter &amp; the Gracious South</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                13 pastel Georgian houses on Rainbow Row, the cannon-lined Battery at sunset, horse-drawn carriages on Church Street, and shrimp and grits at Husk. America&apos;s most gracious city in four days.
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
              <span>🇺🇸 South Carolina, USA</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From $95/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Charleston is America&apos;s most gracious city — a living museum of antebellum architecture where horse-drawn carriages roll past pastel mansions on streets that have barely changed since the 1800s, and the Low Country shrimp and grits served in its historic restaurants is the dish that defines an entire regional cuisine.
            </p>
          </blockquote>

          {/* ── WHAT CHARLESTON ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Charleston Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Founded in 1670, Charleston is one of America&apos;s oldest and most architecturally intact cities. The historic peninsula — just four miles long and 1.5 miles wide — contains over 1,400 pre-Civil War structures, including mansions, churches, and market buildings that survived both the Revolution and the Civil War with their facades intact. The city was, for much of the 18th century, the wealthiest in colonial America, built on the labour of enslaved Africans and the trade in indigo, rice, and cotton.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Rainbow Row on East Bay Street is the most photographed streetscape in the American South — 13 pastel-painted Georgian row houses built between 1748 and 1758, now painted in sherbet pinks, yellows, and greens that give the block its name. The Battery and White Point Garden at the tip of the peninsula are where the city&apos;s antebellum mansions face the harbour, ringed by Civil War cannons and palmetto trees. Fort Sumter, visible across the water, is where the first shots of the Civil War were fired in April 1861.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Four days is the ideal length for Charleston. It is enough time to cover the Battery mansions, Rainbow Row, Fort Sumter, at least one plantation estate, King Street boutiques, the French Quarter, and still have an evening to sit on a piazza at dusk with a glass of sweet tea watching the Cooper River turn gold. The city rewards slow walking and genuine curiosity about its complicated, beautiful history.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport Code" value="CHS" />
              <StatCard icon="🌡️" label="Best Months" value="Mar–May, Oct–Nov" />
              <StatCard icon="🗓️" label="Duration" value="4 Days" />
              <StatCard icon="💰" label="Budget From" value="$95/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Charleston</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Mar–May",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "The azaleas and magnolias bloom across the plantation grounds, temperatures sit in the mid-70s (22–25°C), and the humidity has not yet peaked. The most beautiful time to walk the Battery and the plantation gardens. March through May is peak season — book hotels and restaurant reservations well ahead.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Oct–Nov",
                  i: "🍂",
                  t: "Autumn — Equally Good",
                  d: "Fall colour, cooler temperatures (65–75°F / 18–24°C), and lighter crowds than spring. The oyster season peaks in October — an excellent time for the raw bars and oyster roasts on Upper King Street. Hotel prices drop slightly from spring peak.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🔥",
                  t: "Summer — Avoid if Possible",
                  d: "Brutally hot and humid — regularly 95°F (35°C) with 90% humidity. Walking the Battery or plantation grounds in July is genuinely uncomfortable. Hurricane season runs June through November with peak activity in August and September. If you must visit in summer, plan all outdoor activities before 11am.",
                  b: "Not recommended",
                  c: "bg-red-50 border-red-200",
                },
                {
                  s: "Dec–Feb",
                  i: "☀️",
                  t: "Winter — Quiet and Pleasant",
                  d: "Mild by national standards (50–65°F / 10–18°C), with almost no humidity and dramatically fewer tourists. The plantation gardens are bare but the Battery mansions and historic district are glorious in the clear winter light. The Spoleto-style Piccolo Spoleto festival runs in winter months.",
                  b: "Good off-season",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Charleston</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Charleston International Airport (CHS) is only <strong className="font-medium">12 miles from downtown</strong> — one of the most convenient airport-to-city transfers in the American South. An Uber or Lyft from arrivals to the historic district takes 15 minutes and costs $20–25.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly into CHS — Charleston International Airport",
                  d: "Direct flights from New York (JFK/LGA/EWR), Atlanta, Chicago, Boston, Washington DC, Miami, and Charlotte. Delta, American, United, and Southwest all serve Charleston. Flight times: NYC 2h 15m, Atlanta 1h, Chicago 2h 30m. The airport is small and pleasant — baggage claim is fast. Uber/Lyft to downtown: 15 minutes, $20–25.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚗",
                  t: "Drive from Nearby Cities",
                  d: "From Savannah, GA: 2 hours (109 miles, I-95 N). From Charlotte, NC: 3.5 hours (285 miles, I-26). From Atlanta, GA: 4.5 hours (376 miles, I-26). From Washington DC: 8 hours (565 miles, I-95 S). Driving is practical for regional visitors — parking in downtown Charleston costs $3–5/hour at meters or $20–35/night at hotel garages.",
                  b: "Good for regional trips",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚂",
                  t: "Amtrak — Silver Star / Silver Meteor",
                  d: "Amtrak serves Charleston via the Silver Star (New York to Miami) and Silver Meteor lines. Journey from New York Penn Station: approximately 11 hours. From Washington DC: 8 hours. The Charleston Amtrak station is in North Charleston — a 20-minute Uber from downtown ($15–20). Comfortable for travellers who prefer trains.",
                  b: "From the Northeast",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚌",
                  t: "CARTA Bus from Airport",
                  d: "CARTA Route 11 runs from the airport to downtown Charleston for $2 — a 30-minute journey. Stops near the College of Charleston and the historic district. Practical for budget travellers; runs every 30 minutes during the day. Not ideal for late arrivals or heavy luggage.",
                  b: "Budget option",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Charleston Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is built around the historic peninsula, with one plantation day that requires a car or rideshare. Day 1 and 2 are entirely walkable from a downtown hotel.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="French Quarter, The Battery &amp; White Point Garden"
                cost="$50–75 (transport, dinner, first drinks)"
                items={[
                  "Arrive at Charleston International Airport (CHS); Uber or Lyft to downtown takes 15 minutes and costs $20–25. Check in to your hotel on the historic peninsula — staying south of Calhoun Street puts you within walking distance of every major site.",
                  "Afternoon: Walk the French Quarter — the oldest neighbourhood in Charleston. Start at the Dock Street Theatre on Church Street, built in 1736 and recognised as America's first purpose-built theatre. The building you see today is a reconstruction from 1809 but the original foundations are intact. Free to view from outside.",
                  "Walk south on Church Street — this is one of the most beautiful streets in America, lined with single houses (Charleston's distinctive side-facing architecture), wrought-iron gates, and walled gardens. Stop at St. Philip's Church (1836), the graveyard behind it, and the Gothic St. Michael's Church (1761) at the corner of Meeting and Broad.",
                  "Late afternoon: The Battery and White Point Garden at the southern tip of the peninsula, where the Ashley and Cooper rivers converge. The antebellum mansions along Battery Street face the harbour across a promenade lined with Civil War cannons, palmetto trees, and wrought-iron benches. Fort Sumter is visible in the distance. This is Charleston's most iconic free experience — plan 45 minutes here.",
                  "Sunset: Walk east along the waterfront to Waterfront Park — the pineapple fountain, swing benches overlooking the Cooper River, and Adger's Wharf. The city skyline and harbour views at golden hour are exceptional.",
                  "Dinner: Husk restaurant on Queen Street ($50/pp) — Sean Brock's flagship farm-to-table Southern restaurant in a restored 1893 Victorian mansion. The cast-iron cornbread and shrimp and grits are the essential orders. The bar accepts walk-ins from 5:30pm; the dining room requires reservations made 2–3 weeks ahead.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Rainbow Row, Fort Sumter &amp; Carriage Tour"
                cost="$80–110 (ferry, carriage tour, lunch, dinner)"
                items={[
                  "8:30am: Walk Rainbow Row on East Bay Street before the tour groups arrive. The 13 pastel-painted Georgian row houses — built between 1748 and 1758, now painted in sherbet pink, peach, yellow, green, and blue — are the most photographed streetscape in the American South. The houses were originally merchant warehouses at street level with owner residences above. Visit before 10am for the best light and fewest crowds.",
                  "10:30am: Fort Sumter National Monument. Take the ferry from Liberty Square (the only way to reach the fort) — the round trip boat tour costs $25 per adult and departs at 9:30am and 12pm. The ferry itself is a 30-minute harbour crossing with excellent views of the Charleston waterfront. Fort Sumter is where Confederate forces opened fire on the Union garrison on April 12, 1861, beginning the Civil War. NPS rangers give context at the fort; the museum inside covers the bombardment and its consequences. Allow 2.5 hours total.",
                  "1:30pm: Lunch at 167 Raw Oyster Bar on King Street ($30–35/pp) — the best raw bar in Charleston. The lobster roll is exceptional, the local James Island Creek oysters are pristine, and the shrimp ceviche is served with plantain chips. A short, perfectly executed menu. Arrive before 12:30pm to avoid the wait — they don't take reservations.",
                  "3:30pm: Horse-drawn carriage tour of the South of Broad neighbourhood ($30/person, 1 hour). The licensed guides are tested on Charleston history; the tour covers the Battery mansions, Rainbow Row, Church Street, and the French Quarter. The horses are primarily Belgian and Percheron drafts — well-treated and changed out in the heat. Multiple operators depart from the City Market area; Old South Carriage Company and Palmetto Carriage Works are the main options.",
                  "Evening: Walk King Street from the French Quarter end — Lower King Street has the antique district (some of the best pre-Civil War American furniture dealers in the country), Middle King has the fashion boutiques, and Upper King has the restaurant corridor. Charleston&apos;s independent retail is genuinely outstanding.",
                  "Dinner: FIG restaurant on Meeting Street ($55–65/pp) — ingredient-driven Lowcountry cooking with the freshest local fish and the most refined shrimp and grits in the city. Book weeks ahead; the bar at FIG accepts walk-ins.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Magnolia Plantation, Ashley River &amp; King Street"
                cost="$85–120 (plantation entry, transport, meals)"
                items={[
                  "9:00am: Rideshare or rental car to Magnolia Plantation and Gardens, 10 miles from downtown on the Ashley River ($12 rideshare each way). Founded in 1676, Magnolia is America&apos;s oldest public garden. Admission $20. The Ashley River reflection of the plantation house through the azalea gardens in spring is the iconic image — 50 acres of informal English gardens in full bloom from February to April. The Audubon Swamp Garden boardwalk (an additional $8) is one of the best birdwatching sites on the East Coast.",
                  "11:30am: Continue 15 minutes to Drayton Hall ($30 entry) — the only plantation house on the Ashley River to survive both the American Revolution and the Civil War with its interior intact. Built in 1738, it is one of the finest examples of Georgian-Palladian architecture in America. Drayton Hall is not furnished (it was deliberately left as a preservation site) — the experience is about the architecture and the honest history of the enslaved people who built and maintained it.",
                  "1:30pm: Drive to McLeod Plantation Historic Site on James Island (free, Charleston County Parks) — a Freedmen&apos;s Bureau site focused entirely on the African American experience of slavery and Reconstruction, with exceptional interpretation. The most important and least-visited plantation site in the Charleston region.",
                  "3:30pm: Return to downtown; afternoon on King Street. Browse the antique district on Lower King — the dealers here stock pre-Civil War American pieces at prices far below what the same items would fetch at auction in New York.",
                  "5:30pm: $1 oyster happy hour on Upper King Street. Several raw bars (including Leon&apos;s Oyster Shop) offer $1 local James Island Creek oysters from 5pm to 7pm on weekdays. Pair with a draft Charleston lager for $5 — the best happy hour in the South.",
                  "Dinner: Casual dinner at a neighbourhood restaurant in Cannonborough-Elliotborough, the neighbourhood west of Upper King Street where Charleston locals actually eat. Shrimp po&apos;boys, Low Country boil, and fresh-made pimento cheese at prices half what the tourist corridor charges.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Sullivan&apos;s Island, City Market &amp; Farewell"
                cost="$60–90 (beach, market, final dinner)"
                items={[
                  "Morning: Sullivan&apos;s Island beach, 20 minutes from downtown by Uber ($15). Sullivan&apos;s Island is a barrier island with a wide Atlantic beach, no high-rise development, and a quiet residential character entirely different from Myrtle Beach. Edgar Allan Poe was stationed at Fort Moultrie here in 1827–1828 — the island inspired his short story &apos;The Gold-Bug.&apos; The beach is free, uncrowded on weekdays, and excellent for swimming from May to October.",
                  "12:00pm: Return to downtown; Charleston City Market at the northern end of the French Quarter. The covered market has operated continuously since 1804. Buy boiled peanuts ($3/bag), Gullah-style she-crab soup ($8–10), and browse the sweetgrass basket vendors — Gullah women who have been weaving here for 300 years. The sweetgrass baskets (prices from $40 for a small piece to $400 for a large ceremonial basket) are the finest authentic souvenir from Charleston. Buy directly from the weavers.",
                  "2:00pm: Old Slave Mart Museum on Chalmers Street ($8) — housed in the only surviving antebellum slave auction building in the country. The building operated as a slave auction room from 1859 until the end of the Civil War. A sobering, essential, and exceptionally well-curated museum that provides the necessary counterweight to the architectural beauty surrounding it.",
                  "4:00pm: Wander the Cannonborough-Elliotborough neighbourhood west of Upper King Street — Charleston&apos;s most authentically residential historic neighbourhood. The side streets between Spring Street and Wentworth Street have antebellum single houses with piazzas (side porches) that are not on any tour itinerary.",
                  "6:00pm: Farewell drinks at the Rooftop at the Vendue on Vendue Range — the best rooftop view of the church steeples, the French Quarter rooflines, and the Cooper River harbour. Cocktails $14–18. No reservations required.",
                  "Dinner: Farewell dinner at 82 Queen on Queen Street ($50/pp) — a Charleston institution in a courtyard garden setting. The award-winning she-crab soup and pecan-crusted flounder are the signatures. Order the tomato and shrimp bisque if it&apos;s on the daily menu. Reserve ahead.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Charleston, SC" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Charleston Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in priority order. Entry fees and timing as of early 2026. The historic peninsula is small enough that most sites are within walking distance of each other.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Rainbow Row — East Bay Street",
                  e: "Free",
                  d: "13 pastel-painted Georgian row houses built 1748–1758 — the most photographed block in the American South. Originally merchant warehouses at street level, the houses were painted in their current colours in the 1930s by a preservation-minded owner. Visit before 9:30am for the best light and before the tour groups arrive. The block runs from 79 to 107 East Bay Street.",
                  t: "Must see · 20–30 mins",
                },
                {
                  n: "The Battery &amp; White Point Garden",
                  e: "Free",
                  d: "The cannon-lined promenade at the southern tip of the peninsula where the Ashley and Cooper rivers meet. Antebellum mansions line the north side; Civil War cannons and monuments face the harbour. Fort Sumter is visible to the southeast. The sunrise and sunset views here are the most beautiful in Charleston. Walk the entire promenade — it takes 20 minutes.",
                  t: "Must see · Sunrise/Sunset · 45 mins",
                },
                {
                  n: "Fort Sumter National Monument",
                  e: "$25 (boat tour) — fort itself is free NPS site",
                  d: "The fort where Confederate forces opened fire on the Union garrison on April 12, 1861, beginning the Civil War. Access only by ferry from Liberty Square (departs 9:30am and 12pm). The NPS rangers on site provide exceptional historical context. Allow 2.5 hours total including the ferry crossing each way.",
                  t: "Must see · 2.5 hrs total",
                },
                {
                  n: "Horse-Drawn Carriage Tour",
                  e: "$30/person (1 hour)",
                  d: "The licensed carriage guides in Charleston are tested on city history before they can operate — easily the most knowledgeable tour guides in the South. The tour covers the South of Broad neighbourhood: Battery mansions, Rainbow Row, Church Street, and the French Quarter. Multiple operators at the City Market. Old South Carriage Company is the largest.",
                  t: "Highly recommended · 1 hr",
                },
                {
                  n: "Magnolia Plantation &amp; Gardens",
                  e: "$20 (garden entry)",
                  d: "Founded in 1676 — America&apos;s oldest public garden. The azalea and camellia gardens in spring are iconic; the Ashley River reflection of the plantation house through the blooms is one of the most photographed images in the American South. The Audubon Swamp Garden boardwalk adds $8 and is outstanding for birding. 10 miles from downtown on the Ashley River.",
                  t: "Day 3 · Allow 2–3 hrs",
                },
                {
                  n: "Church Street &amp; the French Quarter",
                  e: "Free",
                  d: "One of the most beautiful streets in America — single houses (Charleston&apos;s distinctive architecture with the gable end facing the street), wrought-iron gates, walled gardens, and churches spanning two centuries. Walk from Dock Street Theatre (1736) south to St. Michael&apos;s Church (1761) at Meeting and Broad — the full walk takes 30 minutes.",
                  t: "Walking · 30–45 mins",
                },
                {
                  n: "King Street — All Three Districts",
                  e: "Free",
                  d: "Lower King (below Calhoun): antique district — pre-Civil War American furniture, silver, and porcelain at dealers who have been operating for decades. Middle King: fashion boutiques, national brands, and local designers. Upper King (above Cannon Street): the restaurant and bar corridor — the best independent dining in Charleston is concentrated here.",
                  t: "Shopping/Dining · Half day",
                },
                {
                  n: "Old Slave Mart Museum",
                  e: "$8",
                  d: "The only surviving antebellum slave auction building in the country, on Chalmers Street. Operated as a slave auction room from 1859. A sobering, essential, and exceptionally well-curated museum — the necessary historical counterpart to Charleston&apos;s architectural beauty. Allow 1 hour.",
                  t: "Essential history · 1 hr",
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
            title="Charleston, SC — Rainbow Row, Mansions &amp; the Lowcountry"
            subtitle="Pastel row houses, antebellum architecture, Fort Sumter, and the Battery at golden hour."
            spots={[
              {
                name: "Rainbow Row at Sunrise",
                query: "charleston rainbow row pastel houses east bay street south carolina historic",
                desc: "The 13 pastel-painted Georgian row houses on East Bay Street — the most photographed block in the American South.",
              },
              {
                name: "The Battery &amp; Antebellum Mansions",
                query: "charleston battery white point garden antebellum mansions cannons south carolina",
                desc: "White Point Garden at the southern tip of the peninsula — Civil War cannons, palmetto trees, and antebellum mansions facing the harbour.",
              },
              {
                name: "Fort Sumter from the Harbour",
                query: "fort sumter charleston south carolina civil war national monument harbour",
                desc: "Fort Sumter in Charleston Harbour — where the first shots of the Civil War were fired on April 12, 1861.",
              },
              {
                name: "Magnolia Plantation Gardens",
                query: "magnolia plantation charleston south carolina azaleas ashley river reflection",
                desc: "Magnolia Plantation&apos;s azalea and camellia gardens with the Ashley River reflection — America&apos;s oldest public garden.",
              },
              {
                name: "Church Street &amp; the French Quarter",
                query: "charleston church street french quarter historic single houses wrought iron",
                desc: "Church Street in the French Quarter — single houses, wrought-iron gates, and two centuries of architectural layers.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Charleston is not a cheap city — but it is a remarkably accessible one. The main attractions (Rainbow Row, the Battery, Waterfront Park, Church Street) are all free. The costs are accommodation, the top restaurants, and the occasional paid attraction like Fort Sumter ($25) and a carriage tour ($30).
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
                    ["🏨 Accommodation (per night)", "$50–75 (hostel/guesthouse)", "$130–190 (boutique hotel)", "$350–700 (Belmond/inn)"],
                    ["🍽️ Food (per day)", "$25–35 (market + casual)", "$60–90 (farm-to-table)", "$150–250 (tasting menus)"],
                    ["🚗 Transport (per day)", "$10–20 (CARTA bus + Uber)", "$25–40 (Ubers + plantation)", "$75–400 (private car/boat)"],
                    ["🏛️ Activities (per day)", "$20–35 (Fort Sumter + museum)", "$40–60 (carriage + plantation)", "$150–300 (private tours)"],
                    ["TOTAL per day", "$95–125", "$180–250", "$400–700+"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($95–125/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay at HI Charleston Hostel ($35–55/dorm) or a guesthouse north of Calhoun Street. Eat at the City Market, Upper King Street neighbourhood spots, and casual Low Country diners. Use CARTA bus from the airport. Fort Sumter ($25) and one museum are the main paid activities.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-800 mb-1">✨ Mid-Range ($180–250/day)</p>
                <p className="text-xs text-amber-700 font-light leading-relaxed">Stay at The Restoration on King Street ($150–200/night). Eat at Husk, 167 Raw, and the best Upper King spots. Take the carriage tour ($30) and visit Magnolia Plantation ($20). Rideshares for plantation days. The sweet spot for experiencing Charleston properly.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">💎 Luxury ($400–700+/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay at Belmond Charleston Place ($450–700/night). Dine at McCrady&apos;s Tasting Room ($130/pp) and The Ordinary ($120/pp). Private architectural tours through the concierge, private boat to Fort Sumter, and after-hours Gibbes Museum access. The full Charleston experience.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Charleston</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The historic peninsula is the only area worth staying for a 4-day visit. Staying south of Calhoun Street puts you within walking distance of Rainbow Row, the Battery, the City Market, and the French Quarter. Staying north of Calhoun cuts costs significantly with only a 15-minute walk to the main sites.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Belmond Charleston Place",
                  type: "Luxury · 205 Meeting Street, French Quarter",
                  price: "From $450/night",
                  badge: "Most prestigious",
                  desc: "The grande dame of Charleston hotels, occupying a full city block in the heart of the French Quarter. 434 rooms, a rooftop pool, Spa, and a concierge who can arrange private garden tours and access to South of Broad mansions not open to the public. The location is unbeatable — Rainbow Row, the Battery, and the City Market are all within five minutes on foot.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "The Restoration on King",
                  type: "Boutique luxury · 75 Wentworth Street, Lower King",
                  price: "From $250/night",
                  badge: "Best boutique",
                  desc: "A sophisticated 18-suite boutique hotel on Lower King Street, with a rooftop terrace looking over the church steeples and a genuinely personal service ethos. Each suite is individually decorated with Lowcountry artwork and custom furnishings. The King Street antique district and the French Quarter are both within a five-minute walk. Outstanding for couples.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Zero George Street",
                  type: "Boutique hotel · 0 George Street, Ansonborough",
                  price: "From $300/night",
                  badge: "Most romantic",
                  desc: "A collection of five historic buildings (circa 1804) restored as a 19-room boutique hotel with a garden courtyard. The location in the Ansonborough neighbourhood is quieter than the main tourist streets but still walkable to everything. The cookery school in the hotel is one of the best culinary experiences in Charleston.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "HI Charleston Hostel",
                  type: "Hostel · 156 Spring Street, Harleston Village",
                  price: "From $35/night (dorm), $85/night (private)",
                  badge: "Best budget",
                  desc: "A converted historic building six blocks north of the Battery — the closest budget accommodation to the historic district. Clean dorm rooms and private rooms, a communal kitchen, and a knowledgeable staff who know the city well. Walking distance to the College of Charleston and Upper King Street restaurants. The best value accommodation on the peninsula.",
                  color: "border-parchment-2 bg-white",
                },
              ].map((stay) => (
                <div key={stay.name} className={`rounded-xl p-4 border ${stay.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <div>
                      <p className="font-medium text-sm text-stone-900">{stay.name}</p>
                      <p className="text-xs text-muted font-light">{stay.type}</p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Charleston</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Charleston has one of the most remarkable restaurant scenes in America for a city of its size. The dining culture is rooted in Gullah Geechee Low Country cooking — shrimp and grits, she-crab soup, Hoppin&apos; John, oyster roasts — but a generation of exceptional chefs has elevated these traditions into some of the best farm-to-table cooking in the country. Book the top restaurants 2–3 weeks ahead.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Husk",
                  t: "Farm-to-table Southern · 76 Queen Street",
                  d: "Sean Brock&apos;s flagship — the restaurant that put Charleston on the national culinary map. In a restored 1893 Victorian mansion, Husk serves Southern food made exclusively from ingredients sourced in the American South. The cast-iron cornbread, shrimp and grits with stone-ground grits from a South Carolina mill, and the smoked brisket are essential orders. Dinner $50–65/pp. The bar accepts walk-ins from 5:30pm.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "FIG",
                  t: "Ingredient-driven Lowcountry · 232 Meeting Street",
                  d: "FIG (Food Is Good) is the most ingredient-obsessed restaurant in Charleston — chef Mike Lata sources daily from local farms and the fishing boats on Shem Creek. The menu changes entirely based on what came in that morning. The shrimp and grits at FIG is the most elegant version of the dish in the city, and the whole-roasted fish is consistently outstanding. Dinner $55–70/pp. Reserve well ahead.",
                  b: "Best shrimp &amp; grits",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "167 Raw Oyster Bar",
                  t: "Seafood raw bar · 289 East Bay Street",
                  d: "The best raw bar in Charleston — a tiny, unpretentious room with a menu built around whatever was freshest that morning. Local James Island Creek oysters (briny and small), a lobster roll that is genuinely one of the best in the South, and a shrimp ceviche with plantain chips that has become a cult order. No reservations — arrive before 12pm or after 2pm to avoid the lunch queue. $28–38/pp.",
                  b: "Best oysters",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  n: "Leon&apos;s Oyster Shop",
                  t: "Casual oyster bar · 698 King Street, Upper King",
                  d: "The most fun restaurant on King Street — a converted auto body shop with picnic tables, oyster po&apos;boys, fried chicken, and the $1 oyster happy hour from 4pm to 6pm on weekdays. Local and West Coast oysters on the raw bar, cold beer in cans, and a genuine neighbourhood feel rather than a tourist experience. $20–30/pp.",
                  b: "Best happy hour",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Minero",
                  t: "Mexican-Southern · 153 East Bay Street",
                  d: "Sean Brock&apos;s casual Mexican restaurant uses the same South Carolina-sourced ingredient philosophy as Husk but applied to tacos, tamales, and aguas frescas. The smoked brisket taco and the pork belly tostada with pickled jalapeños are outstanding. An excellent budget option for lunch when the top tables are fully booked. $15–22/pp.",
                  b: "Best value lunch",
                  c: "bg-orange-50 border-orange-200",
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
            destination="Charleston SC"
            hotels={[
              {
                name: "Belmond Charleston Place",
                type: "Luxury hotel · French Quarter, Meeting Street",
                price: "From $450/night",
                rating: "5",
                badge: "Most prestigious",
                url: "https://www.booking.com/hotel/us/charleston-place.html?aid=2820480",
              },
              {
                name: "The Restoration on King",
                type: "Boutique hotel · Lower King Street",
                price: "From $250/night",
                rating: "5",
                badge: "Best boutique",
                url: "https://www.booking.com/hotel/us/the-restoration.html?aid=2820480",
              },
              {
                name: "HI Charleston Hostel",
                type: "Hostel · Harleston Village, Spring Street",
                price: "From $35/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/us/hi-charleston.html?aid=2820480",
              },
              {
                name: "Zero George Street Hotel",
                type: "Boutique hotel · Ansonborough",
                price: "From $300/night",
                rating: "5",
                badge: "Most romantic",
                url: "https://www.booking.com/hotel/us/zero-george-street.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Fort Sumter Ferry &amp; Tour",
                duration: "2.5 hrs",
                price: "From $25/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=Fort+Sumter+Charleston&partner_id=PSZA5UI",
              },
              {
                name: "Charleston Horse-Drawn Carriage Tour",
                duration: "1 hr",
                price: "From $30/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=Charleston+carriage+tour&partner_id=PSZA5UI",
              },
              {
                name: "Magnolia Plantation Day Tour",
                duration: "Half day",
                price: "From $20/person",
                url: "https://www.getyourguide.com/s/?q=Magnolia+Plantation+Charleston&partner_id=PSZA5UI",
              },
              {
                name: "Charleston Walking History Tour",
                duration: "2 hrs",
                price: "From $25/person",
                url: "https://www.getyourguide.com/s/?q=Charleston+SC+walking+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Charleston</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "☀️",
                  title: "Visiting in July or August",
                  desc: "Charleston in summer is brutally hot and humid — regularly 95°F (35°C) with 90% humidity. Walking the Battery or any plantation in July is genuinely uncomfortable and potentially dangerous for elderly visitors. March to May and October to November offer perfect temperatures for the outdoor walking that Charleston requires.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🚗",
                  title: "Renting a car for the downtown days",
                  desc: "The historic peninsula is only 4 miles long and 1.5 miles wide — best explored on foot. Downtown parking costs $3–5/hour and traffic is constant along East Bay Street and Meeting Street. Only rent a car for Day 3 when you genuinely need it for the Ashley River plantation corridor. Rideshares handle everything else.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🍽️",
                  title: "Eating on East Bay Street tourist row",
                  desc: "The restaurants immediately adjacent to Rainbow Row and the City Market charge premium prices for average food. Walk two blocks inland — Upper King Street and the Cannonborough-Elliotborough neighbourhood between Spring Street and Cannon Street have Charleston&apos;s best independent restaurants at half the price.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🏛️",
                  title: "Skipping the uncomfortable history",
                  desc: "Charleston&apos;s beauty was built on slavery — the city was the largest slave trading port in North America. The Old Slave Mart Museum ($8) and McLeod Plantation (free) provide the essential historical context. Visiting Charleston without engaging with this history is like visiting Rome and ignoring the Colosseum.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🍤",
                  title: "Not trying Gullah Geechee food beyond shrimp and grits",
                  desc: "Shrimp and grits is famous but the broader Gullah Geechee cuisine — she-crab soup, red rice, Hoppin&apos; John, oyster roasts, sweetgrass-steamed shellfish, and boiled peanuts — is among America&apos;s most distinctive food traditions. Seek out restaurants and City Market vendors that specifically reference Gullah heritage.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "📅",
                  title: "Not booking restaurants in advance",
                  desc: "Husk, FIG, McCrady&apos;s, The Ordinary, and 167 Raw are booked weeks in advance on weekends. Make reservations before you arrive — ideally 2–3 weeks ahead. Walk-in bars at Husk and FIG accept customers from 5:30pm if the dining room is full, but you will wait.",
                  color: "bg-blue-50 border-blue-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Charleston</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🦪",
                  title: "Hit the $1 oyster happy hour on Upper King",
                  desc: "Leon&apos;s Oyster Shop and several Upper King Street raw bars offer $1 local James Island Creek oysters from 4–6pm Monday through Friday. These small, briny oysters are exceptional — pair with a draft beer for $5 and you have the best happy hour in the South. Book Charleston tours at https://www.getyourguide.com/s/?q=Charleston+SC&partner_id=PSZA5UI",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🌅",
                  title: "Walk the Battery at sunrise",
                  desc: "White Point Garden at 6:30am: antebellum mansions in golden light, no tourists, and the Cooper River turning orange. The wrought-iron fences, palmetto trees, and Civil War cannons are completely different from the midday crowds. The most beautiful 30 minutes in Charleston.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🧺",
                  title: "Buy sweetgrass baskets directly from the weavers",
                  desc: "Gullah sweetgrass basket weaving is a West African tradition that survived in the Sea Islands for 400 years. Buy directly from weavers at the Charleston City Market — not from souvenir shops — to ensure your purchase supports Gullah artisans. Prices: $40–80 for a small piece, $200–400 for a large ceremonial basket.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🎭",
                  title: "Plan around Spoleto Festival USA if possible",
                  desc: "Spoleto Festival USA (late May–June) is America&apos;s premier performing arts festival: 17 days of world-class opera, dance, theatre, and chamber music in Charleston&apos;s churches and theatres. Tickets $25–120, booked months ahead. Hotel prices spike 40% during festival period — book extremely early or avoid.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🚶",
                  title: "Walk the full King Street from end to end",
                  desc: "King Street runs the full length of the peninsula and changes character completely across its three sections. Budget an afternoon for the full walk — Lower King antiques, Middle King boutiques, Upper King restaurants — stopping into whichever shops catch your eye. This is how Charlestonians actually spend their Saturday afternoons.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🏡",
                  title: "Look up and behind the iron gates",
                  desc: "Charleston&apos;s most beautiful spaces are the hidden walled gardens and piazzas (side porches) glimpsed through wrought-iron gates on Church Street, Tradd Street, and Legare Street. Most are private — but the street views through the gates are architectural photography gold. The best gates are on Legare Street between Tradd and South Battery.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Charleston, SC" />

          {/* Combine With */}
          <CombineWith currentSlug="charleston-sc-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How do Indian passport holders get a visa for Charleston / the USA?",
                  a: "Indian passport holders need a B-1/B-2 US tourist visa. Apply at the US Embassy or Consulate in India — the fee is $185 and an in-person interview is required. Processing takes 2–8 weeks depending on the consulate and current appointment wait times. Apply well in advance; Mumbai and Delhi consulates tend to have shorter interview waits than other cities. The visa is valid for up to 10 years once granted, with stays of up to 6 months per entry.",
                },
                {
                  q: "Is Charleston walkable and do I need a car?",
                  a: "The historic downtown peninsula is entirely walkable — all the major sites from Rainbow Row to the Battery to the City Market to Husk restaurant are within a 20-minute walk of each other. You only need a car or rideshare for the plantation day trips along the Ashley River (30–45 minutes from downtown) and for Sullivan's Island beach (20 minutes). CARTA buses cover the peninsula cheaply; rideshares work perfectly for the short hops between sites.",
                },
                {
                  q: "What is the best time to visit Charleston, SC?",
                  a: "March through May is ideal: the azaleas and magnolias are blooming across the plantation grounds, temperatures are in the mid-70s Fahrenheit (22–25°C), and the humidity has not yet peaked. October and November are equally good — fall colour, cooler air, and peak oyster season. Avoid July and August absolutely — the heat (95°F/35°C) and humidity (90%) make extensive walking genuinely unpleasant and potentially dangerous.",
                },
                {
                  q: "What is Rainbow Row and why is it famous?",
                  a: "Rainbow Row is a series of 13 pastel-painted Georgian row houses on East Bay Street, built between 1748 and 1758. They were originally merchant warehouses with owner residences above. The distinctive colours — sherbet pink, peach, yellow, seafoam green, and sky blue — were added in the 1930s when preservation-minded owners began restoring the then-derelict buildings. Today Rainbow Row is the most photographed streetscape in the American South and one of the most visited historic sites in the country.",
                },
                {
                  q: "How much does it cost to visit Fort Sumter?",
                  a: "The ferry to Fort Sumter from Liberty Square costs $25 per adult (as of 2026). The ferry is operated by Fort Sumter Tours; the fort itself is a National Park Service site and free once you arrive. The round trip takes about 2.5 hours including the 30-minute crossing each way and time at the fort. Ferries depart at 9:30am and 12pm — book online at least a day ahead in spring and summer to ensure a spot.",
                },
                {
                  q: "What is Gullah Geechee culture and where can I experience it in Charleston?",
                  a: "Gullah Geechee culture is the living heritage of the enslaved Africans brought to the Sea Islands of South Carolina and Georgia. Cut off from the mainland by water, the Gullah people maintained African language, music, food, and craft traditions that survived the end of slavery. In Charleston, you can experience Gullah culture at the City Market (sweetgrass basket weavers), the Old Slave Mart Museum, and McLeod Plantation Historic Site. The Gullah Geechee Cultural Heritage Corridor extends from Wilmington, NC to Jacksonville, FL.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Charleston trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-charleston-sc", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/charleston-sc-budget-guide", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/charleston-plantations-guide", label: "Plantations guide", icon: "🌿" },
                { href: "/blog/charleston-sc-food-guide", label: "Food &amp; restaurants", icon: "🍽️" },
              ].map((item) => (
                <Link key={item.href} href={item.href}
                  className="flex flex-col items-center gap-2 p-4 bg-parchment border border-parchment-2 rounded-xl hover:border-gold hover:shadow-sm transition-all text-center">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium text-ink leading-tight"
                    dangerouslySetInnerHTML={{ __html: item.label }}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Related Guides */}
          <RelatedGuides currentSlug="charleston-sc-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More USA &amp; Americas Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Savannah, Georgia — 3 Days", href: "/blog/savannah-georgia-3-days" },
                { label: "New Orleans — 4 Days", href: "/blog/new-orleans-4-days" },
                { label: "Washington DC — 4 Days", href: "/blog/washington-dc-4-days" },
                { label: "Asheville, NC — 3 Days", href: "/blog/asheville-nc-3-days" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group"
                >
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">
                    {link.label}
                  </span>
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
