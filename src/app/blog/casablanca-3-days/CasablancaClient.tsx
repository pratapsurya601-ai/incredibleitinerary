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
const CASABLANCA_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Casablanca Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",  emoji: "🕌",  label: "Landmark Guide" },
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
          href: `mailto:?subject=Casablanca 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Casablanca in 3 Days — Hassan II Mosque, Corniche and Rick%27s Cafe&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/casablanca-3-days"
        imageUrl="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&q=80"
        description="Casablanca in 3 Days: Hassan II Mosque, Art Deco architecture, Rick&apos;s Cafe, Corniche promenade, and bastilla pastry — complete travel guide with budget breakdown."
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
export default function CasablancaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={CASABLANCA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Casablanca" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="casablanca morocco hassan ii mosque ocean atlantic"
            fallback="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1600&q=80"
            alt="Hassan II Mosque in Casablanca rising above the Atlantic Ocean at sunset"
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
              <span className="text-white/70">Casablanca 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Africa &amp; Morocco
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Casablanca in 3 Days:
                <em className="italic text-amber-300"> Hassan II Mosque, Art Deco &amp; Rick&apos;s Cafe</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The world&apos;s third-largest mosque over the Atlantic, a Corniche lined with Art Deco masterpieces, a jazz bar from a Bogart film, and bastilla pastry that ruins all other Moroccan food. The complete 3-day guide.
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
              <span>🇲🇦 Casablanca, Morocco</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From MAD 250/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Casablanca confounds expectations in the best possible way — it is not Marrakech, it is not Fez, and that is exactly the point. Morocco&apos;s largest city is a working metropolis with the world&apos;s third-largest mosque suspended over the Atlantic, a walkable Corniche lined with Art Deco masterpieces, and a Rick&apos;s Cafe that plays Casablanca-era jazz every single night.
            </p>
          </blockquote>

          {/* ── WHAT CASABLANCA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Casablanca Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Most Morocco itineraries fly into Mohammed V International Airport (CMN) and head straight to Marrakech or Fez within the hour. This is a genuine mistake. Casablanca is Morocco&apos;s commercial capital and largest city — a metropolis of over four million people that feels completely different from the ancient medinas inland. It is modern, cosmopolitan, and entirely functional on its own terms as a travel destination.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Hassan II Mosque is the centrepiece: completed in 1993 on a promontory over the Atlantic Ocean, it is the largest mosque in Africa and the third-largest in the world, with a minaret rising 210 metres above sea level. It was built so that worshippers could pray directly above the water, in accordance with the Quranic verse stating that God&apos;s throne was built on water. The interior — open to non-Muslims on guided tours — holds 25,000 worshippers under a retractable roof with carved cedar, Italian marble, and zellige tilework on a scale that silences everyone who enters it.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Beyond the mosque: the city centre holds the largest intact Art Deco urban ensemble in Africa, built by French architects in the 1920s and 1930s. The Boulevard Mohammed V corridor contains ornamental ironwork balconies, carved concrete facades, and Arabic-geometric hybrid motifs on every block. The Marché Central brings the Atlantic coast&apos;s daily catch indoors: sardines, sea bass, sole, and red mullet from fishermen who unload at dawn. The Quartier des Habous is a planned Moroccan-style neighbourhood built by the French colonial administration — the patisseries here sell the finest msemen flatbread and chebakia honey cookies in the city.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              And then there is Rick&apos;s Cafe — the bar on Boulevard Sour Jdid that recreates Humphrey Bogart&apos;s establishment from the 1942 film, complete with live jazz every night, a Moroccan-Lebanese fusion menu, and a sense of occasion that makes it genuinely worth the MAD 120–200 you will spend there. Casablanca is not a museum city. It is a real African metropolis that happens to have one of the most extraordinary religious buildings on earth sitting in it.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="CMN" />
              <StatCard icon="🌡️" label="Best Season" value="Mar–May · Sep–Nov" />
              <StatCard icon="🕌" label="Mosque Height" value="210 m" />
              <StatCard icon="💰" label="Budget From" value="MAD 250/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Casablanca</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Mar–May",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "18–24°C, low humidity, almost no rain. The Atlantic light in spring is exceptional for photography — the mosque gleams white against a deep blue sky. Orange blossom season fills the streets with scent. The ideal window for first-time visitors.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Nov",
                  i: "🍂",
                  t: "Autumn — Excellent",
                  d: "20–26°C. Post-summer crowds have thinned and the heat has passed. October is particularly pleasant — warm enough for the Corniche and Ain Diab beach, cool enough for walking the Art Deco district in the afternoon. A close second to spring.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Aug",
                  i: "☀️",
                  t: "Summer — Warm but Breezy",
                  d: "22–28°C. The Canary Current keeps coastal Casablanca far cooler than inland Morocco — when Marrakech bakes at 42°C, Casablanca is 26°C with an Atlantic sea breeze. The Corniche and Ain Diab beach are at their liveliest. Accommodation rates are higher.",
                  b: "Good for beach",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec–Feb",
                  i: "🌧️",
                  t: "Winter — Cool and Rainy",
                  d: "12–18°C with intermittent Atlantic rain. Not unpleasant — Casablanca&apos;s winters are mild by European standards — but you may get grey skies for the mosque visit. The city&apos;s indoor attractions (Marché Central, Rick&apos;s Cafe, Habous Quarter patisseries) are at their best when there is reason to come inside.",
                  b: "Budget season",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Casablanca</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Mohammed V International Airport (CMN) is 30km southeast of central Casablanca. The ONCF train from the airport to Casablanca Voyageurs station runs every 30 minutes, takes <strong className="font-medium">35 minutes</strong>, and costs <strong className="font-medium">MAD 43</strong> — by far the best airport transfer option in Morocco.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚆",
                  t: "ONCF Train from Airport (recommended)",
                  d: "The airport train (Al Bidaoui) connects directly from Mohammed V Airport (CMN) to Casablanca Voyageurs and Casablanca Port stations. Departs every 30 minutes, journey 35 minutes, cost MAD 43. Trains are clean, air-conditioned, and reliable. The station is directly under the airport terminal — follow the ONCF signs from arrivals.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚕",
                  t: "Petit Taxi from Airport",
                  d: "Metered petit taxis from CMN to central Casablanca cost MAD 200–350 depending on traffic and destination. Agree on price before getting in or insist on the meter. Journey 45–60 minutes. Reliable but significantly more expensive than the train. Useful if arriving with heavy luggage or late at night.",
                  b: "Convenient",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "📱",
                  t: "Uber from Airport",
                  d: "Uber operates well in Casablanca. Prices from CMN to city centre run MAD 120–180 depending on surge. Eliminates fare negotiation entirely. Book in the arrivals hall after collecting luggage. The app shows accurate ETAs and pricing — recommended for solo travellers who prefer price certainty.",
                  b: "No negotiation",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚌",
                  t: "CTM Bus from Airport",
                  d: "The CTM intercity bus connects CMN Airport to Casablanca&apos;s main bus terminal for MAD 35. Less frequent than the train and slower (up to 90 minutes in traffic). Acceptable if you arrive during off-peak hours and carry light luggage. Not recommended as a primary option.",
                  b: "Budget only",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Casablanca Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is organised to front-load the Hassan II Mosque (book the interior tour in advance for busy periods), use the midday hours in the covered Marché Central or the Habous Quarter patisseries, and save the evenings for the Corniche and Rick&apos;s Cafe.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Hassan II Mosque · Corniche Promenade · Ain Diab Sunset"
                cost="MAD 200–280 (mosque tour, food, transit)"
                items={[
                  "Arrive at Mohammed V International Airport (CMN). Take the ONCF train directly to Casablanca Voyageurs station — MAD 43, 35 minutes, departures every 30 minutes. Check in to your hotel in the Maarif or Gauthier district — these are the best-located neighbourhoods for restaurants and access to the Corniche.",
                  "10:30 — Hassan II Mosque exterior: walk the vast white marble plaza surrounding the mosque. The minaret at 210 metres is the tallest religious structure in the world. The mosque sits on a promontory built over the Atlantic so that the sea is visible through glass floors inside the prayer hall — an architectural and theological statement on a scale that photographs cannot convey.",
                  "11:00 — Hassan II Mosque interior guided tour (MAD 120, non-Muslims welcome). Tours depart at set times from the main entrance — arrive 15 minutes early to purchase tickets. The main prayer hall holds 25,000 worshippers under a retractable roof that opens in good weather. The carved cedar ceiling work, Italian marble floors, and stucco detailing took 6,000 Moroccan artisans ten years to complete. Budget 1.5 hours minimum.",
                  "13:00 — Lunch near the old Medina: harira soup (MAD 10), kefta brochette sandwich (MAD 25), and fresh-squeezed orange juice (MAD 10). Morocco produces exceptional oranges — the juice here costs less than water and tastes better than anything sold at a premium elsewhere.",
                  "15:00 — Walk the Corniche (Boulevard de la Corniche) from the mosque toward Ain Diab — 4 kilometres of oceanfront promenade with Atlantic waves breaking against the sea wall. Free, always open. The promenade is at its best from late afternoon when the light drops toward the horizon.",
                  "18:00 — Sunset at Ain Diab beach: sit on the sea wall with a mint tea from a Corniche cafe (MAD 15) and watch the sun drop into the Atlantic. The water turns copper and the mosque minaret is silhouetted behind you. This is one of the finest urban sunset scenes in Africa.",
                  "20:00 — Dinner at a neighbourhood restaurant in the Maarif district: bastilla (the sweet-savoury pigeon or chicken pastry dusted with cinnamon and icing sugar) for MAD 55–75. If it is your first time in Morocco, order bastilla here before you eat it anywhere else — Casablanca&apos;s Maarif versions are excellent.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Art Deco Walking Tour · Marché Central · Habous Quarter · Rick&apos;s Cafe"
                cost="MAD 200–300 (food, transport, Rick&apos;s Cafe dinner)"
                items={[
                  "09:00 — Self-guided Art Deco walking tour of the city centre. Start at Place Mohammed V, the civic heart of French Casablanca: the Wilaya (prefecture) building, the imposing Court of Appeal, and the central fountain surrounded by palm trees. This square is the most concentrated Art Deco ensemble in Africa.",
                  "Walk Boulevard Mohammed V east toward the old Medina. En route: the facade of the former Banque d&apos;Etat du Maroc (now a cultural venue), the Excelsior Hotel with its ornamental ironwork balconies, and the Cinema Rialto on Rue Mohammed el Qory — a 1930 cinema that still operates and has one of the most beautiful Art Deco facades in North Africa. All within a 1.5km radius. Free.",
                  "11:00 — Marché Central (Central Market) on Boulevard Mohammed V. The covered market where Atlantic fishermen bring the day&apos;s catch from 6am. By mid-morning the stalls are at peak activity: sardines (Morocco is the world&apos;s largest sardine exporter), sea bass, sole, red mullet, and occasionally lobster. Watch the price negotiations, buy fresh Medjool dates from the produce stalls (MAD 20 per bag), and browse the spice vendors with 50 varieties of ras el hanout.",
                  "12:30 — Lunch at a restaurant inside or adjacent to the Central Market: grilled sardines (MAD 35) or fish tagine (MAD 60). The freshness of the fish — unloaded from boats that morning — is extraordinary. This is the best-value seafood meal in North Africa at any price point.",
                  "14:30 — Old Medina of Casablanca: smaller, less touristic, and more genuinely residential than Marrakech or Fez. Walk the lanes around Place Jamaet and the old Portuguese sea fortifications along the waterfront — the bastion walls date to the 16th century and face directly onto the Atlantic.",
                  "17:00 — Quartier des Habous (New Medina): built by French urban planners in the 1930s as a planned Moroccan-style neighbourhood. The result is unusual — a medina built from scratch with wide lanes, covered souks, and royal garden walls. The patisseries sell msemen flatbread and chebakia honey cookies by the dozen for MAD 30. The Royal Palace exterior is visible from the main square.",
                  "20:00 — Rick&apos;s Cafe, Boulevard Sour Jdid (main courses MAD 120–200, cocktails MAD 80–120). The bar recreates the fictional Rick&apos;s Cafe Americain from the 1942 Humphrey Bogart film with Moroccan lanterns, white arches, and a live jazz pianist who plays the Casablanca standards nightly. The menu is Moroccan-Lebanese fusion and genuinely good. Reserve for Friday and Saturday evenings — it fills up completely.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Ain Diab Beach · Final Marché Central Lunch · Departure"
                cost="MAD 150–220 (beach, seafood lunch, airport transport)"
                items={[
                  "09:00 — Ain Diab beach in the morning before the crowds arrive. Casablanca&apos;s main beach runs for 3km along the Corniche west of the Hassan II Mosque. The Atlantic water here is cold even in summer (rarely exceeding 22°C) due to the Canary Current — bring a rash guard for extended swimming. Sunbed rental MAD 20; free if you bring your own towel and find a spot on the public beach.",
                  "11:30 — Breakfast at a Corniche cafe: msemen (griddle bread) with argan oil and honey for MAD 25, cafe au lait for MAD 15. The Corniche cafe culture is one of Casablanca&apos;s most underrated pleasures — locals of all ages come here on weekend mornings.",
                  "13:00 — Final lunch at the Marché Central or an adjacent restaurant: freshly grilled sea bass or sole with chermoula (an herb-garlic-cumin marinade) for MAD 80–120, or the grilled sardine plate for MAD 35 if budget is a priority. The Atlantic fish quality on the Casablanca coast is exceptional — this lunch will make you understand why Morocco&apos;s seafood exports command premium prices globally.",
                  "15:00 — Tram or taxi to Mohammed V International Airport. Casablanca&apos;s tram line T1 runs from the city centre and connects to the Ain Sebaa area, from where the airport train departs. Alternatively: petit taxi from central Casablanca costs MAD 50–70 to the train station, then MAD 43 by train to the airport. Total journey 45–60 minutes. Uber to the train station is reliable and avoids taxi negotiation.",
                  "Allow 2.5 hours before your flight for Mohammed V Airport. The terminal is efficient for international departures but security queues can build during peak afternoon hours.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Casablanca" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🕌 Casablanca Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The key sites in order of priority. Most are free or very low cost — the Hassan II Mosque interior tour at MAD 120 is the only significant entrance fee in the city.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Hassan II Mosque",
                  e: "MAD 120 (interior tour)",
                  d: "The largest mosque in Africa and the third-largest in the world. Built on a promontory over the Atlantic with glass floors through which the sea is visible during prayer. The 210-metre minaret is the tallest religious structure on earth. Non-Muslim guided tours depart at set times from the main entrance — check the day&apos;s schedule on arrival. The carved cedar ceiling, zellige tilework, and Italian marble are extraordinary. Plan 1.5–2 hours.",
                  t: "Must see · 2 hrs",
                },
                {
                  n: "Boulevard de la Corniche",
                  e: "Free",
                  d: "The 4km oceanfront promenade running from the Hassan II Mosque west to Ain Diab beach. Atlantic waves break against the sea wall, restaurants and cafes line the inland side, and the light at golden hour is exceptional. Best walked between 16:00 and sunset. Free, always open, safe at all hours.",
                  t: "Must do · 1–2 hrs",
                },
                {
                  n: "Art Deco City Centre",
                  e: "Free",
                  d: "The area bounded by Place Mohammed V, Boulevard Mohammed V, and the old Medina has the highest concentration of Art Deco architecture in Africa. Built by French architects between 1910 and 1940, the buildings combine European Art Deco forms with Moroccan geometric motifs in a style unique to Casablanca. Walk with your eyes upward: carved concrete, ironwork balconies, and Arabic tilework on every block.",
                  t: "Architecture lovers · 1.5 hrs",
                },
                {
                  n: "Quartier des Habous (New Medina)",
                  e: "Free",
                  d: "A planned Moroccan-style neighbourhood built by French colonial planners in the 1930s — a medina designed from scratch, with wider lanes and more consistent architecture than the organic old Medinas of Fez or Marrakech. The patisseries are excellent (chebakia, msemen, maamouls). The Royal Palace exterior and the Grand Mosque of the Habous are visible from the main square.",
                  t: "Recommended · 1 hr",
                },
                {
                  n: "Marché Central",
                  e: "Free (buying optional)",
                  d: "Casablanca&apos;s covered central market on Boulevard Mohammed V, where Atlantic fishermen sell the day&apos;s catch from early morning. Adjacent to the spice and produce souks. The freshest fish market in North Africa. Come between 9am and 1pm for peak activity — the sardine, sole, and sea bass stalls are the most interesting.",
                  t: "Food lovers · 45 mins",
                },
                {
                  n: "Ain Diab Beach",
                  e: "Free (beach club: MAD 100–150)",
                  d: "Casablanca&apos;s main Atlantic beach, 3km of coastline running west from the Corniche. The public beach is free. Private beach clubs along the strip charge MAD 100–150 for sunbed and umbrella access. The water is cold year-round (18–22°C) due to the Canary Current. Best for morning swimming before the crowds, or for sunset watching from the sea wall.",
                  t: "Beaches · 2–3 hrs",
                },
                {
                  n: "Rick&apos;s Cafe",
                  e: "MAD 120–200 (dinner)",
                  d: "The bar-restaurant on Boulevard Sour Jdid that recreates the fictional Rick&apos;s Cafe Americain from the 1942 film. Live jazz every evening, Moroccan-Lebanese fusion menu, and a genuine sense of occasion. Not a tourist trap — a genuinely well-run restaurant that happens to have a cinematic backstory. Reserve for weekend evenings.",
                  t: "Evening experience · 2 hrs",
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
            title="Casablanca — Mosque, Corniche &amp; Atlantic Coast"
            subtitle="Morocco&apos;s largest city, from the world&apos;s tallest minaret to its Art Deco streets."
            spots={[
              {
                name: "Hassan II Mosque at Sunset",
                query: "hassan ii mosque casablanca sunset atlantic ocean morocco",
                desc: "The Hassan II Mosque at golden hour — 210-metre minaret rising above the Atlantic Ocean, the largest mosque in Africa.",
              },
              {
                name: "Corniche Promenade Casablanca",
                query: "casablanca corniche oceanfront boulevard promenade morocco",
                desc: "The Boulevard de la Corniche — 4km of Atlantic oceanfront promenade from the mosque to Ain Diab beach.",
              },
              {
                name: "Art Deco Architecture",
                query: "casablanca art deco architecture building facade morocco city",
                desc: "Casablanca&apos;s Art Deco city centre — the largest intact Art Deco urban ensemble in Africa, built by French architects in the 1920s–40s.",
              },
              {
                name: "Marché Central Fish Market",
                query: "casablanca central market fish seafood morocco souk",
                desc: "The Marché Central — Atlantic sardines, sea bass, and sole at the finest fish market in North Africa.",
              },
              {
                name: "Quartier des Habous",
                query: "habous quarter casablanca new medina morocco architecture",
                desc: "The Quartier des Habous — a planned Moroccan-style medina built by French colonial planners in the 1930s, with excellent patisseries.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Casablanca spans a wide budget range — from MAD 250/day on a tight budget (hostel, street food, free promenades) to MAD 5,000+/day at the Four Seasons. The Hassan II Mosque tour at MAD 120 is the main activity cost. Everything else — the Corniche, Art Deco walks, the old Medina, and the Habous Quarter — is free.
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
                    ["🏨 Accommodation (per night)", "MAD 80–150", "MAD 500–800", "MAD 2,500–5,000"],
                    ["🕌 Hassan II Mosque tour", "MAD 120", "MAD 120–300", "MAD 300–900"],
                    ["🍽 Food (per day)", "MAD 80–120", "MAD 200–350", "MAD 800–1,500"],
                    ["🚌 Local transport (per day)", "MAD 6–20", "MAD 50–150", "MAD 400–600"],
                    ["🎵 Rick&apos;s Cafe (one evening)", "MAD 80–120", "MAD 150–220", "MAD 300–450"],
                    ["🏖 Ain Diab beach club", "MAD 0 (public)", "MAD 100–150", "MAD 200–400"],
                    ["TOTAL (per day, per person)", "MAD 250–380", "MAD 700–1,100", "MAD 3,000–6,000"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (MAD 250–380/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostel dorm or private room (MAD 80–150/night), street food and neighbourhood cafes, tram transport (MAD 6/ride), public beach. The mosque tour is MAD 120 and worth every dirham — it is the only significant paid attraction in the city.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (MAD 700–1,100/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">4-star hotel in Maarif or Gauthier (MAD 500–800/night), restaurant meals including one evening at Rick&apos;s Cafe, taxi transport. One guided Art Deco architecture walk (MAD 350–500). The sweet spot for Casablanca.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (MAD 3,000–6,000+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Four Seasons or Sofitel Tour Blanche (MAD 2,500–5,000/night), private mosque tour, fine dining at Le Cabestan above the Atlantic, private car transfers. The Four Seasons has oceanfront suites with direct Atlantic views and a private beach.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Casablanca</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The best neighbourhoods to base yourself are the Maarif (for restaurants and nightlife), Gauthier (quieter, business-district feel), and the Corniche/Ain Diab strip (for ocean access). The old Medina is less convenient for transport and has limited quality accommodation.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Four Seasons Casablanca",
                  type: "Luxury · Corniche / Ain Diab",
                  price: "From MAD 2,500/night",
                  badge: "Best overall",
                  desc: "Casablanca&apos;s finest hotel, positioned directly on the Corniche with oceanfront suites offering Atlantic views. Private beach, rooftop pool, thalassotherapy spa using Atlantic seawater, and the best breakfast buffet in the city. The concierge team is exceptional at arranging private mosque tours and restaurant reservations.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Hotel Sofitel Casablanca Tour Blanche",
                  type: "Luxury · City Centre / Gauthier",
                  price: "From MAD 1,800/night",
                  badge: "Best location",
                  desc: "A landmark white tower hotel in the Gauthier district, 15 minutes from the Hassan II Mosque and 10 minutes from the Art Deco city centre. Excellent rooftop bar with city and ocean views. The Art Deco-inspired interior design is particularly well-executed. Strong choice for business travellers and those prioritising central location over ocean frontage.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Hotel Ibis Casablanca City Center",
                  type: "Budget-mid · City Centre",
                  price: "From MAD 380/night",
                  badge: "Best value",
                  desc: "The reliable Ibis standard in the heart of the city — clean, well-managed, and within walking distance of the old Medina and the Art Deco district. Not glamorous but entirely adequate for a three-day city itinerary. Free WiFi, small but functional rooms. The best budget-to-quality ratio for solo travellers and couples on a moderate budget.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Dar Zaki Boutique Riad",
                  type: "Boutique · Habous Quarter area",
                  price: "From MAD 600/night",
                  badge: "Most character",
                  desc: "A restored townhouse-style riad near the Habous Quarter, with a central courtyard, Moroccan tile work, and traditional breakfasts included. Not in the tourist medina mould of Marrakech — this is a genuinely residential neighbourhood. The most atmospheric mid-range stay in Casablanca for those who want Moroccan ambiance over corporate hotel facilities.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Casablanca</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Casablanca has the best restaurant scene in Morocco — a consequence of being a working commercial city with a wealthy local clientele rather than a tourist economy. The Maarif district is the heart of the dining scene, with everything from MAD 25 street stalls to MAD 400 tasting menus within walking distance.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Le Cabestan",
                  t: "Seafood · Corniche / Ain Diab",
                  d: "Casablanca&apos;s most celebrated seafood restaurant, built on the rocks at the water&apos;s edge on the Corniche. Floor-to-ceiling windows overlook the Atlantic breaking below. The menu centres on the day&apos;s Atlantic catch — grilled sole, sea bass in chermoula, lobster bisque. Main courses MAD 180–350. Reserve well in advance and request a window table. Best for a special occasion dinner on Day 1 or Day 2.",
                  b: "Best seafood",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  n: "La Sqala",
                  t: "Moroccan · Old Portuguese Bastion",
                  d: "A garden restaurant housed inside a restored 17th-century Portuguese sea fort at the edge of the old Medina, surrounded by bougainvillea and birdcages. The most atmospheric lunch spot in Casablanca. Traditional bastilla (MAD 90), slow-cooked lamb tagine (MAD 110), freshly baked madfouna flatbread. Lunch only — arrive before 13:30 for the best garden tables. MAD 80–130/pp.",
                  b: "Most atmospheric",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Rick&apos;s Cafe",
                  t: "Moroccan-Lebanese Fusion · Boulevard Sour Jdid",
                  d: "The bar-restaurant recreating the Bogart film&apos;s fictional establishment. Live jazz nightly — the pianist plays Casablanca-era standards plus contemporary jazz. Moroccan-Lebanese fusion menu: lamb kefta brochettes (MAD 120), chicken bastilla (MAD 150), couscous royale (MAD 180). Cocktails MAD 80–120. Main courses MAD 120–200. Worth every dirham for one evening. Book ahead for weekends.",
                  b: "Must do (one evening)",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Marché Central Adjacent Restaurants",
                  t: "Seafood · Boulevard Mohammed V",
                  d: "The small restaurants ringing the Marché Central cook market-fresh fish to order at the best prices in the city. Select your fish from the market stalls (MAD 40–80 depending on species and weight), then pay a small cooking fee (MAD 30–40) at one of the adjacent restaurants. Grilled sardines, sole meunière, and sea bass with chermoula. Total cost MAD 60–120 for a full lunch. Extraordinary value.",
                  b: "Best lunch value",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Maarif District Restaurants",
                  t: "Multi-cuisine · Maarif neighbourhood",
                  d: "The Maarif district (5 minutes from the Four Seasons, 15 minutes from the mosque) is Casablanca&apos;s densest concentration of restaurants. For Moroccan food: bastilla and harira at local neighbourhood restaurants (MAD 50–90/pp). For French-Moroccan fusion: La Bodega and similar mid-range establishments (MAD 120–200/pp). For late-night snacks: msemen with honey from 24-hour bakeries (MAD 15).",
                  b: "Best neighbourhood",
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
            destination="Casablanca Morocco"
            hotels={[
              {
                name: "Four Seasons Casablanca",
                type: "Oceanfront luxury · Corniche",
                price: "From MAD 2,500/night",
                rating: "5",
                badge: "Best overall",
                url: "https://www.booking.com/hotel/ma/four-seasons-casablanca.html?aid=2820480",
              },
              {
                name: "Sofitel Casablanca Tour Blanche",
                type: "Luxury tower hotel · Gauthier",
                price: "From MAD 1,800/night",
                rating: "5",
                badge: "Best location",
                url: "https://www.booking.com/hotel/ma/sofitel-casablanca-tour-blanche.html?aid=2820480",
              },
              {
                name: "Hotel Ibis Casablanca City Center",
                type: "Budget-mid · City Centre",
                price: "From MAD 380/night",
                rating: "3",
                badge: "Best value",
                url: "https://www.booking.com/hotel/ma/ibis-casablanca-city-center.html?aid=2820480",
              },
              {
                name: "Hyatt Regency Casablanca",
                type: "Luxury · Place des Nations Unies",
                price: "From MAD 2,000/night",
                rating: "5",
                badge: "City centre luxury",
                url: "https://www.booking.com/hotel/ma/hyatt-regency-casablanca.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Hassan II Mosque Guided Tour",
                duration: "1.5 hrs",
                price: "From MAD 120/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=hassan+ii+mosque+casablanca&partner_id=PSZA5UI",
              },
              {
                name: "Casablanca Art Deco Walking Tour",
                duration: "3 hrs",
                price: "From MAD 350/person",
                badge: "Architecture lovers",
                url: "https://www.getyourguide.com/s/?q=casablanca+art+deco+tour&partner_id=PSZA5UI",
              },
              {
                name: "Casablanca Full Day City Tour",
                duration: "8 hrs",
                price: "From MAD 500/person",
                badge: "Best overview",
                url: "https://www.getyourguide.com/s/?q=casablanca+city+tour&partner_id=PSZA5UI",
              },
              {
                name: "Casablanca to Marrakech Day Trip",
                duration: "Full day",
                price: "From MAD 800/person",
                badge: "Day trip option",
                url: "https://www.getyourguide.com/s/?q=casablanca+marrakech+day+trip&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Casablanca</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🕌",
                  title: "Skipping the Hassan II Mosque interior",
                  desc: "The exterior is free and impressive, but the interior tour (MAD 120, non-Muslims welcome) reveals the full scale of the ambition: a 25,000-capacity prayer hall with a retractable roof, a heated marble floor visible in the basement hammam, and the most intricate zellige tilework and stucco carving in any modern building in Morocco. It is the single most important thing to do in Casablanca. Do not skip it.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🎬",
                  title: "Expecting Rick&apos;s Cafe to be cheap",
                  desc: "Rick&apos;s Cafe is a high-quality restaurant and jazz venue, not a tourist bar or a budget option. Main courses run MAD 120–200 and cocktails are MAD 80–120. Make a reservation for weekends — it fills up completely. The experience is genuinely excellent and worth the price for one evening: live jazz, the Bogart-era film decor, and a menu that is a serious restaurant in its own right.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🚕",
                  title: "Taking unmetered taxis without agreeing on price first",
                  desc: "Petit taxis in Casablanca should use their meters but many drivers prefer to negotiate, particularly with foreign visitors. Always confirm the price before getting in or insist firmly on the meter. Short city trips should cost MAD 15–30. Uber operates well throughout Casablanca and eliminates fare negotiation entirely — highly recommended for airport transfers and late-night journeys.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🏺",
                  title: "Treating Casablanca as just a stopover",
                  desc: "Most Morocco itineraries fly into CMN and head straight to Marrakech or Fez within an hour. Casablanca deserves 2–3 days of its own. The Art Deco architecture is unique on the continent. The Corniche is one of the finest urban waterfronts in Africa. The seafood at the Central Market is exceptional. And the city gives you a realistic picture of modern Morocco beyond the tourist medinas.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🥐",
                  title: "Not trying bastilla before leaving Morocco",
                  desc: "Bastilla (also spelled pastilla) is Morocco&apos;s most complex and impressive dish: slow-cooked pigeon or chicken with almonds, eggs, and spices, wrapped in layers of paper-thin warka pastry and dusted with cinnamon and icing sugar. The sweet-savoury combination sounds odd and tastes extraordinary. It is the royal dish of Fes but widely available in Casablanca restaurants for MAD 55–90. Order it on Day 1 so you can order it again before you leave.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((tip) => (
                <div key={tip.title} className={`rounded-xl p-5 border ${tip.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{tip.icon}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900 mb-1">{tip.title}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{tip.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Casablanca</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🕌",
                  title: "Visit the mosque at different times of day",
                  desc: "The Hassan II Mosque looks entirely different at dawn (golden light on white marble), midday (Atlantic spray catches the sunlight around the 210-metre minaret), and at night (floodlit from below, reflected in the surrounding seawater platform). The plaza is freely accessible at all hours. Book your interior tour and Casablanca excursions at getyourguide.com/s/?q=Casablanca&partner_id=PSZA5UI",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🐟",
                  title: "Buy fish at the Central Market and have it cooked next door",
                  desc: "Select your fish at the Marché Central (MAD 40–80), carry it to one of the adjacent preparation restaurants, and pay a cooking fee (MAD 30–40) to have it grilled, filleted with chermoula, or prepared as tagine. Total cost MAD 60–120 for the freshest possible seafood lunch. The entire transaction happens within a 50-metre radius and takes 30 minutes.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🏛️",
                  title: "Walk the Art Deco district with your eyes upward",
                  desc: "The street-level shops on Boulevard Mohammed V are ordinary, but above the awnings the architecture is extraordinary. Carved concrete facades, ornamental ironwork balconies, and Arabic-geometric hybrid motifs on building after building. The Wilaya building on Place Mohammed V and the Cinema Rialto on Rue Mohammed el Qory are the two unmissable landmarks of the district.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🌊",
                  title: "The Atlantic at Ain Diab is cold even in August",
                  desc: "Unlike the Mediterranean, the Moroccan Atlantic coast is cooled by the Canary Current and rarely exceeds 22°C even at peak summer. Bring a rash guard or short wetsuit for extended swimming. The waves are consistent for bodyboarding and several surf schools along the Corniche rent boards and equipment from MAD 100–150 per session including instruction.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "📱",
                  title: "Use Uber for taxis — eliminates all negotiation",
                  desc: "Uber operates throughout Casablanca including airport pickups. Prices are fixed, shown before you book, and paid automatically. For a city where taxi-fare negotiation can be frustrating for first-time visitors, Uber removes the friction entirely. Price from Hassan II Mosque to Ain Diab: approximately MAD 25. Airport to city centre: MAD 120–180.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🍵",
                  title: "Drink mint tea everywhere and negotiate nothing",
                  desc: "Mint tea (atay) is Moroccan hospitality expressed in a glass. It is served everywhere, costs MAD 10–20, is never a trap, and the theatrical three-pour from height is genuine practice not performance — it aerates the tea. Accept it when offered in shops. It does not obligate you to buy anything and refusing it is mildly rude. Moroccan mint tea is one of the finest non-alcoholic beverages on earth.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Casablanca" />

          {/* Combine With */}
          <CombineWith currentSlug="casablanca-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Casablanca worth visiting or should I go straight to Marrakech?",
                  a: "Casablanca is absolutely worth 2–3 days and is genuinely different from Marrakech. It offers something Marrakech cannot: an authentic Moroccan city that is not primarily a tourist destination. The Hassan II Mosque is a once-in-a-lifetime architectural experience. The Art Deco district is the best in Africa. The Corniche seafood restaurants are exceptional. And the city gives a realistic picture of modern Morocco beyond the medinas and souks. Fly in, spend 3 days, then continue to Marrakech or Fez by train (high-speed rail, under 2 hours).",
                },
                {
                  q: "How do I get from Casablanca Airport (CMN) to the city?",
                  a: "The ONCF Al Bidaoui train runs directly from Mohammed V Airport (CMN) to Casablanca Voyageurs and Casablanca Port stations every 30 minutes for MAD 43. The journey takes 35 minutes and the train departs from a station directly under the airport terminal — follow the ONCF signs from arrivals. This is by far the best option. Taxis cost MAD 200–350 depending on negotiation. Uber costs MAD 120–180 to the city centre. The train is cheaper, faster, and more reliable than either.",
                },
                {
                  q: "What is bastilla and where should I eat it in Casablanca?",
                  a: "Bastilla is Morocco&apos;s most celebrated dish — a large round pie of paper-thin warka pastry filled with slow-cooked pigeon or chicken, beaten eggs, almonds, and spices, dusted with cinnamon and powdered sugar. The sweet-savoury combination is the flavour identity of Moroccan royal cuisine and it is extraordinary. In Casablanca, try it at La Sqala inside the Portuguese bastion (the most atmospheric setting), any Maarif district restaurant, or the Habous Quarter. Expect to pay MAD 55–90 for a portion.",
                },
                {
                  q: "Is it safe to walk around Casablanca at night?",
                  a: "The Maarif district, Gauthier, the Corniche, and the area around the Hassan II Mosque are all safe for evening walks and are lively after dark with locals of all ages. The old Medina is best visited during the day. As with any large city, maintain awareness of your belongings in crowded areas. The Corniche is a popular evening destination for Casablancans and feels very safe — it is one of the finest evening promenades in Africa.",
                },
                {
                  q: "Do I need to book the Hassan II Mosque tour in advance?",
                  a: "During peak season (spring school holidays, August, and Christmas-New Year), booking in advance online is advisable as morning tours sell out by 9am. Outside peak periods you can simply arrive at the mosque entrance and purchase tickets on the day — tours depart at set times (check the current schedule as it changes seasonally). The tour lasts approximately 1 hour and is conducted in multiple languages including English. Non-Muslims are welcome on all public tours.",
                },
                {
                  q: "What language do people speak in Casablanca and do locals speak English?",
                  a: "The primary languages are Moroccan Arabic (Darija) and French. Spanish is spoken in northern Morocco but less so in Casablanca. English is increasingly common, particularly in tourist-facing businesses, hotels, and the better restaurants. In practice: hotel staff, Rick&apos;s Cafe, and most tourist sites have English-speaking staff. At the Marché Central, taxi drivers, and neighbourhood cafes, French is essential. Basic French phrases (bonjour, combien, merci) go a long way.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Casablanca trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/morocco-7-days", label: "Morocco 7-day itinerary", icon: "🗓️" },
                { href: "/blog/casablanca-3-days#budget", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/casablanca-3-days#howtoreach", label: "Getting there", icon: "✈️" },
                { href: "/blog/casablanca-3-days#landmarks", label: "Landmark guide", icon: "🕌" },
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
          <RelatedGuides currentSlug="casablanca-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Africa &amp; Mediterranean Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Morocco 7 Days — Complete Itinerary", href: "/blog/morocco-7-days" },
                { label: "Lisbon 4 Days — Atlantic City Guide", href: "/blog/lisbon-4-days" },
                { label: "Madrid 3 Days — Art &amp; Architecture", href: "/blog/madrid-3-days" },
                { label: "Marseille 3 Days — Calanques &amp; Coast", href: "/blog/marseille-3-days" },
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
