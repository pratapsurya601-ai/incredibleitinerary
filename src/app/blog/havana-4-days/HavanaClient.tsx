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
const HAVANA_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Havana Actually Is" },
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
          href: `mailto:?subject=Havana 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Havana in 4 Days — classic cars, Hemingway bars and Trinidad&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/havana-4-days"
        imageUrl="https://images.unsplash.com/photo-1551009175-8a68da93d5f9?w=1200&q=80"
        description="Havana in 4 Days: Classic 1950s American cars, Old Havana UNESCO streets, Hemingway bars, Trinidad day trip and real Cuba costs — complete travel guide."
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
export default function HavanaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={HAVANA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Havana" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="havana cuba classic cars malecon colonial architecture"
            fallback="https://images.unsplash.com/photo-1551009175-8a68da93d5f9?w=1600&q=80"
            alt="Classic 1950s American cars on the Malecón seawall, Old Havana, Cuba at golden hour"
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
              <span className="text-white/70">Havana 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO Old Havana
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Havana in 4 Days:
                <em className="italic text-amber-300"> Classic Cars, Rum &amp; the Streets of Old Cuba</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                1950s Chevrolets, Hemingway&apos;s bar stool, Habana Vieja&apos;s UNESCO palaces, a Trinidad day trip, and the best live son music in the Caribbean. The complete 4-day guide.
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
              <span>🇨🇺 Cuba, Caribbean</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From $60/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Havana is unlike any other city — a perfectly preserved time capsule where 1950s American Chevrolets cruise past crumbling colonial palaces, where Hemingway&apos;s bar stool is still warm, and where the rhythm of son and salsa pours out of every doorway after dark.
            </p>
          </blockquote>

          {/* ── WHAT HAVANA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Havana Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Havana is the capital of the only country in the Western Hemisphere that remained outside the American economic orbit for 60 years — and it shows. The city was flash-frozen in 1959 when the Revolution cut off American investment and imports. The result is a city that looks, sounds, and feels utterly unlike anywhere else on earth: 18th-century Spanish colonial architecture slowly returning to the ground, 1950s American cars still running on improvised parts, and a population of 2.1 million who have developed their own sophisticated, resilient, deeply musical culture in the space between the ideology and the reality.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Habana Vieja — Old Havana — was declared a UNESCO World Heritage Site in 1982. It contains over 3,000 colonial-era buildings across four major plazas: Plaza de la Catedral, Plaza de Armas, Plaza Vieja, and Plaza de San Francisco de Asís. The Baroque cathedral, the 16th-century castles guarding the harbour entrance, the covered arcades and covered stone arcades of the old port district — all of it survived because Cuba simply couldn&apos;t afford to knock it down and replace it.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Four days lets you absorb Old Havana&apos;s UNESCO streets, drive the Malecón at sunset in a convertible, take the essential day trip to Trinidad, understand the rum and cigar culture from the inside, and find the live music that makes Havana the best city in the Caribbean after dark. The cash economy, the dual-currency hangover, and the infrastructure quirks are real — but navigable with the right preparation.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="HAV (José Martí)" />
              <StatCard icon="🌡️" label="Best Season" value="Nov–Apr" />
              <StatCard icon="🏛️" label="Old Havana" value="UNESCO 1982" />
              <StatCard icon="💰" label="Budget From" value="$60/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Havana</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Nov–Apr",
                  i: "☀️",
                  t: "Dry Season — Best Time",
                  d: "22–28°C, low humidity, virtually no rain. This is when Havana is at its best — the light is golden, the streets are comfortable to walk all day, and the Malecón is alive with Habaneros every evening. December and January are peak tourist months; November and March offer the best balance of weather and crowd levels.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "May–Jun",
                  i: "🌦️",
                  t: "Shoulder Season — Viable",
                  d: "28–32°C with increasing humidity and afternoon showers. The city is less crowded and prices are lower. Morning exploration is very comfortable; afternoons can be oppressively hot and humid. The occasional heavy downpour transforms the colonial streets — atmospheric but inconvenient. Good budget option.",
                  b: "Good value",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Oct",
                  i: "🌀",
                  t: "Hurricane Season — Caution",
                  d: "Cuba sits in the hurricane belt. July–October brings heavy rainfall, high humidity (85%+), and the genuine possibility of tropical storms or hurricanes. September and October are the riskiest months. Some infrastructure — including the Trinidad road and coastal areas — can flood. Travel insurance covering weather cancellations is essential.",
                  b: "Check forecasts",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec–Jan",
                  i: "🎉",
                  t: "Peak Season — Book Ahead",
                  d: "The most popular period. Christmas and New Year in Havana are genuinely festive — street parties, live music everywhere, Cubans and tourists mixing freely. Casas particulares fill up 3–4 weeks in advance for this period. Book accommodation early and expect 20–30% higher prices. Worth it for the atmosphere.",
                  b: "Book in advance",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Havana</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Havana José Martí International Airport (HAV) is 25km south-west of Old Havana. The official taxi from the airport to the city centre costs <strong className="font-medium">$25 USD</strong> (agree the price before getting in) and takes 30 minutes. State taxis are metered; private colectivo taxis are cheaper but require negotiation.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly into HAV — José Martí International Airport",
                  d: "Direct flights from London (Air France via Paris, Iberia via Madrid), Toronto, Mexico City (Aeromexico), and Panama City (Copa). No direct flights from the USA except from select US cities under authorized travel categories. From London: 10–11 hrs via European hub. From Toronto: 4.5 hrs direct (Air Transat, Sunwing, Air Canada). From Mexico City: 2.5 hrs direct.",
                  b: "Main entry point",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚖",
                  t: "Airport to City — Taxi ($25, 30 min)",
                  d: "Official airport taxis (yellow cabs) charge a fixed $25 to central Havana and Old Havana. Agree the fare at the taxi stand before departure — don&apos;t accept approaches inside the terminal. The journey takes 30 minutes in normal traffic. The highway approach into Havana gives you your first views of the Malecón and the city skyline.",
                  b: "Standard transfer",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Airport to City — Colectivo Taxi (CUP 200, shared)",
                  d: "Shared colectivo taxis (CUP 20–50 per person depending on direction) run between the airport and central Havana. Ask at the colectivo stand outside the domestic arrivals hall. These are classic American cars stuffed with 4–5 passengers heading in the same direction. Cheaper, slower, and a genuine introduction to how Habaneros get around.",
                  b: "Budget option",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🏨",
                  t: "Tourist Card — Required Before Boarding",
                  d: "All visitors need a Cuban Tourist Card ($25–30 USD). Most airlines sell it at check-in or the departure gate. It&apos;s a paper card you keep with your passport throughout your stay — not a visa sticker. Cuba also legally requires proof of health insurance for all visitors; most airlines include basic coverage in the ticket. Verify before departure.",
                  b: "Essential document",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Havana Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary runs from Old Havana outward — covering the UNESCO core, the Malecón and Vedado, Trinidad day trip, and the arts, rum and music scene on Day 4.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Old Havana (Habana Vieja) — UNESCO Streets &amp; Classic Car Ride"
                cost="$35–55 total"
                items={[
                  "Arrive and check into a casa particular — a private homestay with a Cuban family, $25–50/night, marked by a blue anchor sign outside the door. Staying in a casa is categorically better than a state hotel: you get home-cooked breakfast (fresh mango, black beans, eggs, strong Cuban coffee), a local host who knows the city, and money that goes directly to a family rather than the state.",
                  "Old Havana morning — Plaza de la Catedral: the Baroque cathedral (free entry) and the surrounding 18th-century colonial palaces are among the finest architecture in the Americas. Arrive at 9am before the heat and the crowds. The square fills with artists, musicians, and cigar sellers by mid-morning — the photography is excellent in the early light.",
                  "Plaza Vieja — the most photogenic square in Havana, surrounded by restored colonial buildings in yellow, blue, and terracotta. The Camera Obscura on the corner ($2, top-floor panoramic view of Old Havana) is genuinely underrated. The Belgian-style craft beer brewery at the corner of the square is the only one in Cuba.",
                  "El Capitolio — Cuba&apos;s 1929 Capitol building, modelled on Washington DC but actually taller. Entry to the main hall costs $6; the exterior is free and architecturally stunning. Parque Central directly opposite is where the best collection of vintage American cars congregates for taxi fares.",
                  "Evening — book a vintage car ride for sunset ($20–30/hour in an open-top 1950s Chevrolet, Buick, or Ford). Drive the Malecón at golden hour with the sea crashing against the seawall — this is one of the great city experiences in the Caribbean. Agree the price and route beforehand.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Malecón, Revolution Square &amp; Hemingway&apos;s Havana"
                cost="$40–65 total"
                items={[
                  "Morning — walk the Malecón seawall (8km from Old Havana to Vedado district, completely flat, free). Havana&apos;s great promenade is where everyone comes: fishermen casting lines at dawn, couples at dusk, musicians at night. The crumbling pastel buildings behind the seawall and the blue-green sea ahead frame one of the most cinematic urban walks in the world.",
                  "Revolution Square (Plaza de la Revolución) — the vast concrete plaza where Fidel Castro addressed crowds of over a million. The Che Guevara steel silhouette on the Interior Ministry building is the most-photographed image in Cuba. The square is free. José Martí Memorial: take the elevator to the top ($5) for a 360° panoramic view over the city from 142 metres.",
                  "Vedado neighbourhood lunch at a paladar — La Guarida (Concordia 418, between Gervasio and Escobar) is Cuba&apos;s most famous private restaurant, set in a crumbling Havana mansion used in the film Fresa y Chocolate. The peeling frescoed walls and the dark staircase are part of the experience. Lunch $15–25, dinner $25–40. Book ahead.",
                  "Hemingway pilgrimage — La Bodeguita del Medio (Calle Empedrado 207): Hemingway&apos;s mojito bar, walls covered in 70 years of scrawled signatures. Touristy, yes — the mojitos are excellent ($6–8). Then: El Floridita (Obispo 557), the bar that invented the frozen daiquiri. Hemingway&apos;s regular stool is marked by a bronze statue. Daiquiris $8–12. Live band plays from 11am.",
                  "Evening — Fábrica de Arte Cubano (FAC, Calle 26 and 11, Vedado, CUP 200, ~$8) opens Thursday through Sunday from 8pm. The converted vegetable oil factory is Havana&apos;s premier arts complex: multiple gallery spaces, live music stages, film screenings, and bars all running simultaneously. The most exciting cultural venue in Cuba.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Trinidad Day Trip — Cuba&apos;s Most Perfect Colonial City"
                cost="$45–75 total (incl. transport)"
                items={[
                  "Early morning bus to Trinidad (5 hours, $10–15 with Viazul) or shared colectivo taxi ($25–35 for faster, more comfortable 2.5-hour journey). Trinidad is the best-preserved colonial city in Cuba — founded in 1514, it barely changed between 1850 and 1990. The cobblestone streets, pastel houses, and horse-drawn carriages create an atmosphere unlike anywhere else in the Caribbean.",
                  "Plaza Mayor — Trinidad&apos;s central square surrounded by the Museo de Arte Colonial (a perfectly restored 18th-century mansion with original furniture, $2), the Iglesia Parroquial Mayor church (free), and the Palacio Brunet. The square is paved with the same grey cobblestones that have been here since colonial times.",
                  "Valley of the Sugar Mills (Valle de los Ingenios, UNESCO) — the 78 ruined sugar mills that made Trinidad the wealthiest city in Cuba in the 19th century. Taxi tour $20–25. Climb the Iznaga Tower (45m, $1) for views over the valley — the plantation bell that called enslaved workers to the fields still hangs at the top.",
                  "Afternoon — Casa de la Música in Trinidad for afternoon salsa. The steps of the Iglesia become an outdoor music venue. CUP 50 entry ($2). Local Cuban couples dance here as naturally as they walk — this is not a performance for tourists but real Trinidad social life. Go at 3pm when it starts.",
                  "Return to Havana on the evening Viazul bus or stay overnight in Trinidad at a casa particular ($25–35/night — the old colonial houses are excellent value and the city at night, after the day-trip buses have left, belongs to the Trinidadeños).",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Ron Santiago Rum, Street Art, Coppelia &amp; Farewell Son Music"
                cost="$30–55 total"
                items={[
                  "Morning — Museo del Ron Havana Club (Avenida del Puerto 262, between Sol and Muralla). The 30-minute guided tour ($7, includes a mojito at the end) walks through the sugar-to-rum process using original 19th-century distillery equipment. Havana Club 7 Años Añejo is the benchmark Cuban rum — buy a bottle at the museum shop for less than anywhere else in the city.",
                  "Museum of the Revolution (Museo de la Revolución, CUP 100, ~$4) — housed in the former Presidential Palace with original bullet holes still visible in the walls from the 1957 attack on Batista. The yacht Granma (in which Castro and 82 revolutionaries sailed from Mexico in 1956) is preserved in a glass pavilion outside. Unapologetically one-sided and genuinely fascinating.",
                  "Coppelia ice cream parlour (Calle 23 and L, Vedado) — Havana&apos;s legendary 1960s state ice cream palace, subsidized to CUP 10–20 per portion (less than $1). There are two queues: a tourist fast-track ($1 entry) and the Cuban queue (20–40 minute wait, free). Wait in the Cuban queue. It&apos;s one of the great slow-travel experiences — watching Cuban families eat ice cream under a concrete Space Age pavilion on a hot afternoon.",
                  "Afternoon — Street art in Havana Centro: Callejón de Hamel, a narrow alley of murals and Afro-Cuban religious art created by artist Salvador González Escalona over 30 years. Weekend rumba performances (free, 11am Sundays). The alley is also a living Santería shrine — the artistic and the religious are inseparable here.",
                  "Farewell — final live son or salsa at Casa de la Música (Galiano 267, Vedado, $5–10 cover). The real son — pre-Buena Vista, pre-tourist-show — is played in small bars and terraces throughout Havana most evenings. Ask your casa particular host which bar has the best músicos playing on your last night. They will know.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Havana" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Havana Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential sites in order of priority. All Old Havana plazas are free to enter; museum fees noted individually. CUP prices at the approximate 2026 rate of $1 ≈ CUP 25.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Habana Vieja (Old Havana)",
                  e: "Free — museum interiors vary",
                  d: "The UNESCO World Heritage core: four major plazas (Catedral, Armas, Vieja, San Francisco), the old harbour, and over 3,000 colonial buildings from the 16th to 19th century. You can walk the entire historic centre in 3–4 hours; allow more for exploring individual plazas and buildings.",
                  t: "Must see · Full day",
                },
                {
                  n: "Malecón Seawall Promenade",
                  e: "Free",
                  d: "The 8km seafront promenade running from Old Havana to Vedado. The social spine of the city — everyone from fishermen to lovers to musicians congregates here. Best at sunset and after dark, when the crumbling buildings glow and the sea spray catches the last light.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Revolution Square — José Martí Memorial",
                  e: "$5 (elevator to top)",
                  d: "The vast plaza of the Cuban Revolution, dominated by the José Martí monument. Take the elevator 142 metres to the top for the best 360° panoramic view in Havana. The Che Guevara and Camilo Cienfuegos steel outlines on facing ministry buildings are the most iconic images in Cuba.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Fábrica de Arte Cubano (FAC)",
                  e: "CUP 200 (~$8)",
                  d: "Havana&apos;s leading contemporary arts complex in a converted vegetable oil factory. Open Thursday–Sunday from 8pm, closing around 3am. Multiple gallery spaces, live music stages running simultaneously, film screenings, and bars. The most exciting cultural venue in Cuba — miss it and you&apos;ve missed modern Havana.",
                  t: "Thu–Sun evening · 3 hrs",
                },
                {
                  n: "El Floridita — Hemingway&apos;s Daiquiri Bar",
                  e: "No entry fee — daiquiris $8–12",
                  d: "The bar that invented the frozen daiquiri and Hemingway&apos;s regular haunt from 1932–1960. His bronze statue occupies his favourite stool at the end of the bar. The drinks are excellent, the live band plays from 11am, and it earns its tourist reputation. Obispo 557.",
                  t: "Iconic stop · 1 hr",
                },
                {
                  n: "La Bodeguita del Medio",
                  e: "No entry fee — mojitos $6–8",
                  d: "Hemingway&apos;s mojito bar on Calle Empedrado 207 since 1942. The walls are so covered in decades of visitor signatures that new ones are written over old ones. Touristy and proud of it — the mojitos are genuinely good and the bar is genuinely historic.",
                  t: "Iconic stop · 45 mins",
                },
                {
                  n: "Ron Santiago / Museo del Ron Havana Club",
                  e: "$7 (includes mojito)",
                  d: "The Havana Club rum museum on Avenida del Puerto. A 30-minute guided tour through original 19th-century distillery equipment, ending with a mojito. Buy Havana Club 7 Años Añejo at the shop — cheaper here than anywhere in the city. Recommended for anyone with any interest in rum.",
                  t: "1 hr · Morning",
                },
                {
                  n: "Tropicana Cabaret",
                  e: "$85–100 USD",
                  d: "Cuba&apos;s legendary open-air cabaret show, running since 1939 in the same Miramar venue. Sequined dancers, live orchestra, aerial acts under the palm trees. Touristy and expensive by Cuban standards — but the production is spectacular and the setting unique. Book through your casa or a tour agency.",
                  t: "Special night out",
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
            title="Havana — Classic Cars, Colonial Streets &amp; the Malecón"
            subtitle="The Caribbean&apos;s most cinematic city, frozen in a beautiful contradiction."
            spots={[
              {
                name: "Classic 1950s Cars on the Malecón",
                query: "havana cuba vintage classic 1950s american cars malecon seafront",
                desc: "The image that defines Havana — a 1955 Chevrolet Bel Air convertible cruising the Malecón with the sea and crumbling colonial skyline behind.",
              },
              {
                name: "Old Havana Plaza de la Catedral",
                query: "plaza catedral old havana habana vieja colonial baroque architecture",
                desc: "Plaza de la Catedral in the heart of Habana Vieja — 18th-century Baroque architecture surrounding one of the finest colonial squares in the Americas.",
              },
              {
                name: "Revolution Square Che Guevara",
                query: "revolution square havana che guevara interior ministry mural cuba",
                desc: "The steel outline of Che Guevara on the Interior Ministry building — the most iconic political image in Cuba, overlooking Plaza de la Revolución.",
              },
              {
                name: "Trinidad Colonial Streets",
                query: "trinidad cuba colonial cobblestone streets pastel houses carriages",
                desc: "Trinidad&apos;s cobblestone streets and pastel colonial houses — founded in 1514 and barely changed since, the best-preserved colonial city in the Caribbean.",
              },
              {
                name: "Havana Salsa and Son Music",
                query: "havana cuba salsa music dance live band son cubano",
                desc: "Live son cubano in a Havana bar — the music that gave the world salsa, still played in the city where it was born.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Havana Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Cuba operates a complex currency system. In 2026 the Cuban Peso (CUP) is the official currency at ~$1 = CUP 25 official rate. Tourist prices are often quoted in USD or CUC-equivalent. The most practical approach: bring euros or Canadian dollars (better rates than USD), exchange at a CADECA office, and use CUP for street food, colectivos, and local bars.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">✨ Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">💎 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation", "$25–50/night", "$80–180/night", "$300–800/night"],
                    ["🍽️ Food", "$15–25/day", "$35–60/day", "$70–150/day"],
                    ["🚗 Transport", "$5–15/day", "$20–40/day", "$50–150/day"],
                    ["🎭 Activities", "$10–20/day", "$30–60/day", "$80–200/day"],
                    ["TOTAL per day", "$60–110/day", "$165–340/day", "$500–1,300/day"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($60–110/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Casa particular ($25–50), eat at paladares and street food, use colectivo taxis (CUP 20–50), buy a ETECSA WiFi card (CUP 30/hr). Completely comfortable in Havana — the backpacker and budget infrastructure is genuinely good.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range ($165–340/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Premium casa particular or boutique hotel ($80–150), dine at La Guarida and Café Madrigal, hire a vintage car for sunset ($30/hr), take a private guide for Old Havana. This is the sweet spot for Havana.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($500–1,300/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Gran Hotel Manzana Kempinski ($400–800/night), private guides and boat charters, Tropicana cabaret, private rum masterclasses, and exclusive Partagás cigar factory access arranged through the concierge.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Havana</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The single most important accommodation decision in Cuba: stay in a casa particular, not a state hotel. Casas are private homes licensed to rent rooms — marked by blue anchor signs. The food, the local knowledge, and the human connection they provide are irreplaceable. State hotels charge similar prices for a worse experience.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Casa 1932",
                  type: "Boutique casa particular · Old Havana",
                  price: "From $80/night",
                  badge: "Most character",
                  desc: "One of Havana&apos;s most celebrated casas — an Art Deco mansion from 1932 on Campanario street, perfectly preserved with period furniture, stained glass, and antique fittings. Three rooms, personal service, and breakfast served in a dining room that looks like a film set. Book weeks in advance in high season.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "La Casa Blanca Habana",
                  type: "Premium casa particular · Vedado",
                  price: "From $60/night",
                  badge: "Best value premium",
                  desc: "A restored colonial house in Vedado with a rooftop terrace overlooking the neighbourhood. Six rooms, private bathrooms, strong WiFi (rare in Havana casas), and a host family with excellent English. The Vedado location is quieter than Old Havana and better positioned for the Malecón and Revolution Square.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Gran Hotel Manzana Kempinski",
                  type: "5-star luxury · Parque Central",
                  price: "From $400/night",
                  badge: "Only true 5-star",
                  desc: "Cuba&apos;s only internationally managed 5-star hotel, in the restored 1910 Manzana building (Havana&apos;s first shopping arcade). Rooftop pool overlooking the city, the best breakfast in Havana, and a concierge who can arrange the experiences that money can open in Cuba. The benchmark for luxury accommodation on the island.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Budget Casas Particulares — Old Havana",
                  type: "Budget casa · Habana Vieja",
                  price: "$25–50/night",
                  badge: "Best budget",
                  desc: "Dozens of licensed casas operate in Old Havana offering clean, simple rooms with breakfast for $25–50/night. Look for the blue anchor sign. The best cluster around Obispo, Obrapía, and the area between Plaza Vieja and Plaza de la Catedral. Ask the host for the latest guidance on currency and local tips — this information is not in any guidebook.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Havana</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Always eat at a paladar — a private restaurant — rather than a state-run restaurant. The quality difference is enormous. Paladares are legal, licensed, and provide far better food and service. The word entered Cuban Spanish from a TV soap opera and stuck.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "La Guarida",
                  t: "Iconic paladar · Concordia 418, Centro Habana",
                  d: "Cuba&apos;s most famous private restaurant, set in a crumbling colonial mansion used in the 1993 film Fresa y Chocolate. The peeling frescoed staircase and the rooftop terrace with Old Havana views are as much the experience as the food. Ropa vieja, lobster, and a wine list. Lunch $15–25, dinner $25–40 per person. Book 2–3 days ahead.",
                  b: "Most iconic",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "El del Frente",
                  t: "Rooftop paladar · O&apos;Reilly 303, Old Havana",
                  d: "Four floors above O&apos;Reilly street with a rooftop terrace overlooking Old Havana rooftops. Cuban cocktails, grilled fish, and a menu that updates with the seasons — unusual for Havana. The rooftop at golden hour is genuinely spectacular. $12–20 per person. More relaxed vibe than La Guarida.",
                  b: "Best rooftop",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Café Madrigal",
                  t: "Wine bar paladar · Calle 2, Vedado",
                  d: "An intimate paladar in a Vedado house with mismatched antique furniture, imported wine (rare in Havana), and a creative menu of Cuban dishes with European influences. Popular with the Havana arts and intellectual crowd — the most European-feeling restaurant in Cuba. $15–25/person. Reservations recommended.",
                  b: "Best atmosphere",
                  c: "bg-rose-50 border-rose-200",
                },
                {
                  n: "Street Food — Mercado Agropecuario",
                  t: "Local market · Various locations",
                  d: "Havana&apos;s produce markets (agropecuarios) sell food at CUP prices for Cubans — ripe fruit, fried snacks, sandwiches, and fresh juice at CUP 20–100 ($0.80–4). The market at Tulipán and the 19 y B market in Vedado are the most accessible. This is how most Habaneros eat — and the empanadas and tamales are excellent.",
                  b: "Most local",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "El Floridita &amp; La Bodeguita del Medio",
                  t: "Historic bars · Old Havana",
                  d: "El Floridita (Obispo 557) for a frozen daiquiri at Hemingway&apos;s bar — $8–12, worth every cent for the setting. La Bodeguita del Medio (Empedrado 207) for a mojito — $6–8. Both are unavoidably touristy and both are genuinely good. Do both, back to back, on Day 2.",
                  b: "Hemingway classics",
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
            destination="Havana Cuba"
            hotels={[
              {
                name: "Gran Hotel Manzana Kempinski",
                type: "5-star luxury · Parque Central",
                price: "From $400/night",
                rating: "5",
                badge: "Best luxury",
                url: "https://www.booking.com/hotel/cu/gran-manzana-kempinski-la-habana.html?aid=2820480",
              },
              {
                name: "Iberostar Parque Central",
                type: "4-star hotel · Old Havana",
                price: "From $150/night",
                rating: "4",
                badge: "Best location",
                url: "https://www.booking.com/hotel/cu/iberostar-parque-central.html?aid=2820480",
              },
              {
                name: "Hotel Saratoga",
                type: "Boutique hotel · El Capitolio",
                price: "From $180/night",
                rating: "4",
                badge: "Most stylish",
                url: "https://www.booking.com/hotel/cu/saratoga-la-habana.html?aid=2820480",
              },
              {
                name: "Casa Particular Old Havana",
                type: "Private homestay · Habana Vieja",
                price: "From $30/night",
                rating: "4",
                badge: "Most authentic",
                url: "https://www.booking.com/searchresults/cu/havana.html?aid=2820480&ss=Havana",
              },
            ]}
            activities={[
              {
                name: "Old Havana Walking Tour",
                duration: "3 hrs",
                price: "From $25/person",
                badge: "Best intro",
                url: "https://www.getyourguide.com/s/?q=old+havana+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Classic Car Tour — Malecón at Sunset",
                duration: "2 hrs",
                price: "From $30/car",
                badge: "Iconic Havana",
                url: "https://www.getyourguide.com/s/?q=havana+classic+car+tour&partner_id=PSZA5UI",
              },
              {
                name: "Trinidad Day Trip from Havana",
                duration: "Full day",
                price: "From $45/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=trinidad+cuba+day+trip+havana&partner_id=PSZA5UI",
              },
              {
                name: "Rum &amp; Cigar Tasting Experience",
                duration: "2 hrs",
                price: "From $40/person",
                url: "https://www.getyourguide.com/s/?q=havana+rum+cigar+tasting&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Havana</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🏙️",
                  title: "Staying Only in Havana and Missing Trinidad",
                  desc: "Nearly every first-time visitor to Cuba makes this mistake — staying in Havana for all 4 days and skipping Trinidad. Trinidad is one of the best-preserved colonial cities in the Americas: cobblestone streets, pastel mansions, and a working Cuban community that has been living inside a UNESCO World Heritage Site since 1514. The Viazul bus is $10–15 and takes 5 hours. A shared colectivo taxi is $25–35 and takes 2.5 hours. There is no excuse. Trinidad is unmissable.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🏨",
                  title: "Staying in State Hotels Instead of Casas Particulares",
                  desc: "Cuba&apos;s state-owned hotels charge similar prices to casas particulares but deliver significantly worse service, worse food, and no genuine Cuban experience. A casa particular gives you a Cuban family as hosts, home-cooked breakfast (ripe mangoes, fresh juice, eggs, black beans — the best breakfast in the Caribbean), local knowledge unavailable in any guidebook, and money that goes directly to a family rather than the state. Always choose casas particulares.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "💳",
                  title: "Relying on Cards — Cuba is a Cash Economy",
                  desc: "Non-US bank cards work at some Havana ATMs and larger hotels — but Cuba&apos;s banking infrastructure is unreliable and machines run out of cash. US bank cards do not work anywhere in Cuba. Always carry enough cash (euros or Canadian dollars convert best) for 2–3 days. Split your cash: bulk in your hotel safe, daily float in a front pocket, and an emergency backup stash in your bag. Petty theft is real in tourist areas — don&apos;t carry everything in one place.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🍽️",
                  title: "Eating at State Restaurants",
                  desc: "The distinction between state-run (gobierno) and private (paladar) restaurants is everything in Havana. State restaurants are cheaper but deliver food of noticeably lower quality with indifferent service. Paladares — private family restaurants — invest in their reputation because their livelihood depends on it. The price difference is small ($5–10/person) and the quality difference is enormous. La Guarida, El del Frente, and Café Madrigal are all paladares.",
                  color: "bg-blue-50 border-blue-200",
                },
              ].map((m) => (
                <div key={m.title} className={`rounded-xl p-5 border ${m.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{m.icon}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900 mb-1">{m.title}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Havana</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🚗",
                  title: "Vintage Car at Golden Hour — the Malecón Photograph",
                  desc: "The iconic Havana image — a 1955 Chevrolet Bel Air convertible cruising the Malecón at sunset — requires timing. Book your vintage car tour to start 90 minutes before sunset ($20–30/hour, agree price and route beforehand). The late afternoon light turns everything amber. This is the single best hour you will spend in Havana.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "💃",
                  title: "Trinidad&apos;s Casa de la Música — Most Authentic Salsa in Cuba",
                  desc: "The tourist salsa shows in Havana are professionally performed but feel staged. Trinidad&apos;s Casa de la Música — the steps of the Iglesia at the top of the cobblestone square — is where Cubans actually dance: couples who&apos;ve danced together for 20 years, children learning from grandparents. CUP 50 entry ($2). Go at 9pm. Stand at the edge for 5 minutes and someone will ask you to dance.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🍦",
                  title: "Coppelia — Wait in the Cuban Queue",
                  desc: "There are two queues at Coppelia: a fast tourist queue ($1 entry, no wait) and the Cuban queue (free, 20–40 minute wait). Wait in the Cuban queue. The wait is how you meet Habaneros — families, couples, elderly men in guayabera shirts who have been coming every Sunday for decades. The ice cream is CUP 10–20 ($0.40–0.80). The experience of eating it in a concrete 1960s Space Age pavilion with Cuban families is extraordinary.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "📶",
                  title: "Internet — Buy ETECSA Cards Before You Need Them",
                  desc: "Cuba&apos;s internet is state-controlled and limited. Buy ETECSA WiFi cards (CUP 20–30/hour) from ETECSA offices or from street vendors at a small markup — don&apos;t wait until you desperately need internet. The cards work at any ETECSA hotspot (look for people on phones in plazas). Download offline maps, translation apps, and guidebook content before arrival.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🎵",
                  title: "Find the Real Son Cubano — Ask Your Casa Host",
                  desc: "The Buena Vista Social Club shows at tourist venues ($15–30 entry) are polished and enjoyable. But real son cubano is played in small neighbourhood bars, terraces, and casas de la cultura every evening for CUP 50–100. Your casa particular host knows exactly which bar has the best musicians on which night. Ask them the evening before and they will give you better advice than any travel app.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "💰",
                  title: "Currency — Exchange at CADECA, Not at Hotels",
                  desc: "CADECA exchange houses (blue signs, found near major tourist areas) give significantly better rates than hotel lobbies for exchanging euros and Canadian dollars into CUP. Bring euros or Canadian dollars — the USD exchange incurs a 10% surcharge due to US sanctions. Exchange a moderate amount at a time since CUP is not easily convertible outside Cuba.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Havana" />

          {/* Combine With */}
          <CombineWith currentSlug="havana-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Cuba expensive for tourists?",
                  a: "Cuba occupies a strange position: basic necessities (public transport CUP 1–5, street food CUP 50–200) are very cheap because they are subsidised for Cubans. Tourist prices are substantially higher — casas particulares $25–80/night, private restaurant meals $15–30/person, tourist taxis $10–20 for short rides. Budget travellers can get by on $60–90/day by staying in casas, eating at paladares, and using colectivo taxis. The biggest variable is the Trinidad day trip (return transport $30–70 depending on choice).",
                },
                {
                  q: "Do US citizens need a special visa for Cuba?",
                  a: "US travel to Cuba is subject to OFAC (Office of Foreign Assets Control) regulations requiring travel under one of 12 specific licensed categories — general tourism is not one of them. The most commonly used categories are Support for the Cuban People and Educational Activities. US citizens cannot use US bank cards in Cuba and must self-certify their travel category. All other nationalities require only the standard tourist card ($25–30, purchased through airlines). The rules change frequently — check the US Treasury OFAC website before booking.",
                },
                {
                  q: "How confusing is the Cuban currency system in 2026?",
                  a: "Cuba simplified to a single currency, the Cuban Peso (CUP), in 2021 — ending the dual CUC/CUP system. In practice in 2026, tourists encounter two realities: official exchange rates and informal street rates (always higher), plus MLC accounts at some tourist shops. The most practical approach: bring euros or Canadian dollars, exchange at a CADECA office for the best legal rate, and use CUP for everything. Your casa particular host will give you current, accurate guidance on the ground — better than any guidebook.",
                },
                {
                  q: "What is the best way to get between Havana and Trinidad?",
                  a: "There are two main options. Viazul bus: departs Havana main bus terminal, 5 hours, $10–15 USD. Reliable, air-conditioned, cheap — book the day before or online at viazul.com. Shared colectivo taxi: classic American cars that take 4–5 passengers in the same direction, 2.5 hours, $25–35 per person one-way. Faster, more comfortable, and genuinely atmospheric — negotiate at the taxi stands near the main bus terminal. Private taxi costs $70–100 each way.",
                },
                {
                  q: "Is it safe to travel to Havana?",
                  a: "Havana is generally a safe city for tourists. Violent crime against tourists is rare. Petty theft — pickpocketing in tourist areas like Plaza de la Catedral and the Malecón after dark — is more common and worth guarding against. Split your cash, keep your phone in your front pocket, and avoid displaying expensive cameras unnecessarily. The main practical risks are infrastructure-related: power cuts, ATMs running empty, and transport unreliability. Thorough preparation for these eventualities is the key to a smooth Cuba trip.",
                },
                {
                  q: "What are colectivo taxis and how do I use them?",
                  a: "Colectivos are shared classic American cars that function as informal public transport across Havana and between Cuban cities. They run fixed routes (e.g. Vedado to Old Havana along the Malecón, or Havana to Trinidad) and charge CUP 20–50 per person within the city. Hail them on the street by calling out your destination as they pass — they will stop if they are going that way and have space. The fare is paid in CUP and is a fraction of tourist taxi prices. Your casa host can explain the local colectivo routes when you arrive.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Havana trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/cuba-travel-tips", label: "Cuba travel tips", icon: "📋" },
                { href: "/blog/cuba-tourist-card", label: "Tourist card guide", icon: "🗒️" },
                { href: "/blog/havana-budget-guide", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/trinidad-cuba-guide", label: "Trinidad day trip", icon: "🏛️" },
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
          <RelatedGuides currentSlug="havana-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Caribbean &amp; Latin America Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Cartagena 4 Days — Colombia&apos;s Caribbean Coast", href: "/blog/colombia-cartagena-4-days" },
                { label: "Mexico City 4 Days — Culture &amp; Food", href: "/blog/mexico-city-4-days" },
                { label: "Costa Rica 7 Days — Rainforest &amp; Beaches", href: "/blog/costa-rica-7-days" },
                { label: "Cancún 3 Days — Beaches &amp; Cenotes", href: "/blog/cancun-3-days" },
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
