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
const BILBAO_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Bilbao Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "3-Day Itinerary" },
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
          href: `mailto:?subject=Bilbao 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Bilbao in 3 Days — Guggenheim, pintxos and the Basque Country&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/bilbao-3-days"
        imageUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
        description="Bilbao in 3 Days: Guggenheim Museum, pintxos bar crawl, Artxanda funicular, Mercado de la Ribera, and the complete Basque Country travel guide 2026."
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
export default function BilbaoClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BILBAO_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Bilbao" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="bilbao guggenheim museum gehry titanium basque spain"
            fallback="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
            alt="Guggenheim Museum Bilbao titanium facade reflected in the Nervion River at sunset"
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
              <span className="text-white/70">Bilbao 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Basque Country
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Bilbao in 3 Days:
                <em className="italic text-amber-300"> Guggenheim, Pintxos &amp; the Basque Country</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Frank Gehry&apos;s titanium masterpiece, standing-room pintxos bars, the largest covered market in Europe, and the Artxanda funicular at dusk. The complete guide.
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
              <span>🇪🇸 Basque Country, Spain</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From €60/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Bilbao pulled off the most celebrated urban reinvention of the 20th century — a rusting Basque industrial port transformed by Frank Gehry&apos;s titanium Guggenheim into one of Europe&apos;s most exciting cities, where the building that saved the city is also its finest work of art.
            </p>
          </blockquote>

          {/* ── WHAT BILBAO ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Bilbao Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Until 1997, Bilbao was a declining Basque industrial port — steelworks closing, unemployment rising, the Nervion River heavily polluted. Then Frank Gehry&apos;s Guggenheim Museum opened on the old shipyard land along the riverbank, and everything changed. Tourism quintupled within a decade. The Nervion was cleaned up. The metro was rebuilt by Norman Foster. A new airport terminal arrived. What urban planners call the Bilbao Effect — a single cultural institution transforming an entire city — became the most studied case study in architecture and urban regeneration of the modern era.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              What makes Bilbao genuinely remarkable for travellers is that the city did not stop at one great building. The Casco Viejo (Old Town) seven medieval streets — Las Siete Calles — contain the densest concentration of pintxos bars in Spain. The Mercado de la Ribera on the Nervion bank is the largest covered market in Europe by floor area. The Artxanda funicular climbs above the city for panoramic views over the entire Basque valley. And San Sebastián, one of the world&apos;s great food cities, is just 100km east on the A-8 motorway.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The pintxos culture is not a tourist gimmick. It is a genuine Basque social institution. The best bars in the Casco Viejo — Bar Bergara, Gure Toki, Berton Sasibil, El Globo — put out trays of handcrafted pintxos at 7:30pm every evening that reduce the formal restaurant cooking of most European cities to irrelevance. You stand at a zinc bar, pour a glass of txakoli white wine, and eat extraordinary food for €3 a piece while speaking to strangers. It is one of the great pleasures of European travel.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="BIO" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Jun" />
              <StatCard icon="🏛️" label="Guggenheim" value="€16" />
              <StatCard icon="💰" label="Budget From" value="€60/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Bilbao</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "18–22°C, long days, and the Basque countryside is green and flowering. April and May offer the best light for photographing the Guggenheim titanium facade, which reflects the sky in constantly changing patterns. Crowds are manageable and hotel prices are below summer peak. The ideal window for most travellers.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Early Autumn — Excellent",
                  d: "16–20°C, the summer crowds have gone but the weather remains warm and dry. September is the best month for txakoli new harvest and Rioja wine festivals. The Semana Grande festival in late August spills into September. Excellent value with lower hotel prices than July–August.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "☀️",
                  t: "Summer — Busy and Expensive",
                  d: "Bilbao&apos;s Semana Grande festival in mid-August is a week of concerts, fireworks, and street celebrations that fills the city completely. Hotels cost 40–60% more in summer. The Basque coast is gorgeous but Gaztelugatxe requires reservations booked weeks ahead. Fine if you book well in advance.",
                  b: "Book early",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Mar",
                  i: "🌧️",
                  t: "Winter — Quieter but Wetter",
                  d: "Bilbao gets significant Atlantic rainfall November through March — the Basque Country is the wettest part of Spain. Indoor experiences (Guggenheim, Bellas Artes, pintxos bars, La Ribera market) are unaffected. Prices are lowest of the year. Good for a focused city break if you don&apos;t mind rain.",
                  b: "Budget option",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Bilbao</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Bilbao Airport (BIO) is 12km north of the city. The metro Line 3 connects the airport to the city centre in <strong className="font-medium">35 minutes for €3</strong> — far better value than a taxi (€25–30). The metro runs every 15–20 minutes and drops you at the Abando station in the heart of the city.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚇",
                  t: "Metro from Bilbao Airport (recommended)",
                  d: "Metro Line 3 (Euskotren) runs from BIO Airport to Abando station in the city centre — 35 minutes, €3. Trains run every 15–20 minutes from approximately 6am to midnight. The metro station is directly connected to the terminal arrivals hall. Buy a single ticket or a Barik card (€3 for the card, reduces fares to €0.86 per trip).",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "Bizkaibus A3247 from Airport",
                  d: "The Bizkaibus A3247 runs from BIO Airport to Termibus bus station (€1.50, 30 minutes, every 20–30 minutes). From Termibus the metro takes 10 minutes to the city centre. Marginally cheaper than the metro but requires the connection at Termibus. Good if you need the bus station for onward travel.",
                  b: "Budget option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Bus from San Sebastián",
                  d: "ALSA and PESA buses run between San Sebastián and Bilbao — 1 hour 15 minutes, €7–10 each way. Several departures per hour from both city bus stations. This is the most popular route for people combining both Basque cities. The train (Euskotren) also runs this route in about 2.5 hours with more scenic coastal sections.",
                  b: "Basque city combo",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚄",
                  t: "High-speed train from Madrid",
                  d: "Renfe AVE from Madrid Chamartin to Bilbao Abando — 4 hours 45 minutes, €25–65 depending on booking advance. The route goes via Vitoria-Gasteiz. Book online at renfe.com for the best prices. Direct trains run several times daily. Good option if you are already in northern Spain.",
                  b: "From Madrid",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Bilbao Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is designed around the pintxos schedule — bars open at 1pm for lunch and 7:30pm for the evening rush. Plan your sightseeing around these windows.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Guggenheim Museum · Casco Viejo · Evening Pintxos Crawl"
                cost="€40–55 (museum, pintxos, txakoli, transport)"
                items={[
                  "10:00 — Walk to the Guggenheim Museum from the city centre (15 minutes from the Old Town). Even if you skip the paid entry (€16), the titanium exterior, the Puppy flower sculpture by Jeff Koons (covered in 38,000 seasonal flowers), and the Louise Bourgeois Maman spider sculpture are free to see and worth 45 minutes of exploration. The building is most photogenic in the morning when the titanium panels reflect the eastern sky.",
                  "11:00 — Guggenheim interior (€16, book online at guggenheim-bilbao.eus for timed entry) — the permanent collection includes Richard Serra&apos;s massive Torqued Ellipses steel sculptures filling the entire ground floor atrium; even if modern art is not usually your thing, the building alone justifies entry. Allow 2–2.5 hours.",
                  "13:30 — Walk across the Zubizuri pedestrian bridge (free, designed by Santiago Calatrava in 1997) to the Old Town (Casco Viejo) — the white steel arch bridge is itself a work of public art and the walk over the Nervion gives the best angle on the Guggenheim titanium curves.",
                  "14:00 — Pintxos lunch at the Siete Calles (Seven Streets) — Plaza Nueva has the highest concentration of pintxos bars and is the best starting point. Budget €2–3 per pintxo and €2.50 per glass of txakoli; eat 4–5 pintxos for a full lunch for under €15. Try Bar Gure Toki on Plaza Nueva for creative cold pintxos.",
                  "17:00 — Mercado de la Ribera (free to browse) — the largest indoor covered market in Europe by floor area, built in 1929 on the bank of the Nervion. Even mid-afternoon the fish, cheese, and charcuterie counters are extraordinary. The ground floor fish market shows the full Atlantic catch: txangurro (spider crab), lubina (sea bass), and kokotxas (cod cheeks) that will appear on Basque menus tonight.",
                  "20:00 — Evening pintxos crawl through Calle del Perro and Calle Jardines in the Casco Viejo — the serious pintxos bars open at 7:30pm and are standing room only by 8:30pm. Head to Berton Sasibil on Calle Jardines for hot pintxos and Bar Bergara on General Concha for prize-winning creations. Budget €20–25 for a proper 4-bar crawl with txakoli at each stop.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Artxanda Funicular · Bellas Artes · San Mamés Tour · El Globo"
                cost="€35–50 (funicular, museums, stadium, pintxos)"
                items={[
                  "09:30 — Artxanda funicular from Plaza del Funicular (€0.98 one way, €1.54 return) — the red funicular climbs the Artxanda hill in 3 minutes for the best panoramic view over Bilbao, the Nervion valley, and the surrounding Basque hills. The summit has walking trails and a restaurant; the view is best in the morning before haze builds. The funicular runs from 7:15am and is the easiest way to understand Bilbao&apos;s geography.",
                  "11:00 — Museo de Bellas Artes (Fine Arts Museum, €10 or free on certain days — check the website) — two blocks from the Guggenheim and consistently overlooked by visitors who exhaust themselves at the modern art museum. One of Spain&apos;s finest collections: El Greco, Goya, Murillo, and the Basque master Zuloaga with almost no queue. The 17th-century Spanish and Flemish rooms alone are worth the entry. Allow 1.5 hours.",
                  "13:00 — Pintxos lunch on Calle Ledesma — one of Bilbao&apos;s best pintxos streets for creative and elevated versions of the classic form. Try El Globo on Diputacion for the best jamón ibérico pintxos in the city — the standing bar is packed with locals at lunchtime.",
                  "15:30 — San Mamés stadium tour (€12/person, book at athletic.eus) — Athletic Club de Bilbao play at San Mamés, known as La Catedral, and one of Spain&apos;s most atmospheric football grounds. Athletic is the only top-division Spanish club that only signs players from the Basque Country — a policy maintained since 1912 that makes them a genuine cultural institution. The tour covers the dressing rooms, pitch side, and the trophy room.",
                  "17:30 — Walk the Abandoibarra riverfront from San Mamés back to the Guggenheim — the redeveloped riverside is the physical embodiment of the Bilbao Effect. The Iberdrola Tower (165m, by César Pelli), the Zubizuri bridge, the Guggenheim, and the Isozaki towers create a sequence of architectural statements along 2km of former industrial waterfront.",
                  "20:30 — Return to the Casco Viejo for the evening pintxos hour. Bar Bergara on General Concha is widely considered to have won more pintxos championships than any other bar in Bilbao. Their bacalao al pil-pil and the foie pintxo with caramelised apple are the benchmark of what pintxos can be.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="San Sebastián Day Trip · Parte Vieja Pintxos · La Concha Beach"
                cost="€45–65 (bus return, pintxos, beach)"
                items={[
                  "08:00 — ALSA or PESA bus from Termibus station to San Sebastián (Donostia) — 1 hour 15 minutes, €7–10 each way. Buses run every 30–45 minutes. San Sebastián is 100km east of Bilbao along the Cantabrian coast and offers a completely different Basque city experience: a gorgeous Belle Époque seaside resort built around the perfect horseshoe bay of La Concha, with more Michelin stars per capita than almost anywhere on earth.",
                  "09:30 — Arrive San Sebastián and walk to the Parte Vieja (Old Town) for a late breakfast pintxo and coffee. The Parte Vieja is denser with pintxos bars than even Bilbao&apos;s Casco Viejo — Bar Zeruko, La Cuchara de San Telmo, and Txepetxa are among the best in the Basque Country.",
                  "11:00 — La Concha beach and promenade — the wide sandy bay enclosed by Monte Igueldo and Monte Urgull is one of Europe&apos;s most beautiful urban beaches. Walk the promenade (Paseo de la Concha), swim if the season allows, and take in the view of the Isla de Santa Clara in the bay.",
                  "13:00 — Pintxos lunch back in the Parte Vieja — this is the best pintxos lunch you will have anywhere in the Basque Country. The competition between bars is fiercer in San Sebastián than in Bilbao, the produce is exceptional (the Bay of Biscay fish arrives that morning), and the creative pintxos are more ambitious. Budget €20–25 for a full crawl.",
                  "15:30 — Climb Monte Urgull (free, 30 minutes) for views over La Concha bay and the Basque coast — the hilltop fortifications and the Cristo Redentor statue at the summit are worth the walk. On a clear day you can see the French coast.",
                  "17:30 — Return bus to Bilbao — the journey gives time to decompress and plan your final evening. On arrival, a final pintxos stop at Berton Sasibil or Bar Bergara brings the Bilbao experience to a fitting close before departure.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Bilbao" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Bilbao Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The key sites in order of priority, with entrance fees and recommended time. Most of Bilbao&apos;s best experiences — the Casco Viejo pintxos bars, the Artxanda views, the Mercado de la Ribera — are free or nearly free.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Guggenheim Museum Bilbao",
                  e: "€16 adults (book online)",
                  d: "Frank Gehry&apos;s 1997 titanium masterpiece is still the most important work of architecture built anywhere in the world in the last 30 years. The permanent collection includes Richard Serra&apos;s Torqued Ellipses, Jeff Koons, Mark Rothko, and Eduardo Chillida. The exterior — Puppy, Maman, the Fog Sculpture by Fujiko Nakaya — is free to explore. Book timed entry online at guggenheim-bilbao.eus.",
                  t: "Must see · 2.5–3 hrs",
                },
                {
                  n: "Casco Viejo — Las Siete Calles",
                  e: "Free",
                  d: "The seven medieval streets of the Old Town are the social heart of Bilbao. Plaza Nueva, Calle del Perro, Calle Jardines, and Calle Ledesma are the best pintxos streets. The Catedral de Santiago (13th century) and the Mercado de la Ribera anchor the neighbourhood. Best explored from 7:30pm during the evening pintxos hour.",
                  t: "Must explore · 2–3 hrs",
                },
                {
                  n: "Puppy — Jeff Koons",
                  e: "Free (exterior of Guggenheim)",
                  d: "The 12-metre-tall West Highland Terrier covered in 38,000 seasonal flowers (pansies in winter, begonias in summer) is one of the most beloved public sculptures in Europe. Koons installed it in 1997 for the Guggenheim opening and it has remained a permanent fixture. The irrigation system hidden inside the steel frame waters each flower individually.",
                  t: "Free · 15–20 mins",
                },
                {
                  n: "Mercado de la Ribera",
                  e: "Free to browse",
                  d: "The largest covered market in Europe by floor area (10,000m²), built in 1929 in Art Deco style on the bank of the Nervion in the Casco Viejo. Three floors: fish market on the ground floor (Atlantic catch including txangurro, bonito, and kokotxas), meat and charcuterie on the first, produce and prepared foods on the second. Best visited in the morning when everything is freshest.",
                  t: "Must visit · 30–45 mins",
                },
                {
                  n: "Artxanda Funicular",
                  e: "€0.98 one way / €1.54 return",
                  d: "The red funicular from Plaza del Funicular climbs the Artxanda hill in 3 minutes for the best panoramic view over Bilbao and the Nervion valley. Opened in 1915, it is one of the oldest funiculars in Spain still in operation. The summit has walking trails, a restaurant, and views extending to the Basque mountains on clear days. The funicular runs approximately every 15 minutes from 7:15am.",
                  t: "Panoramic views · 1 hr",
                },
                {
                  n: "Iberdrola Tower",
                  e: "Free (exterior)",
                  d: "The 165-metre César Pelli tower completed in 2012 is the tallest building in the Basque Country and an anchor of the Abandoibarra riverfront redevelopment. Its reflective glass facade mirrors the Guggenheim curves across the water. The base level has a public plaza and the building is best seen from the opposite bank of the Nervion.",
                  t: "Architecture · 15 mins",
                },
                {
                  n: "San Mamés Stadium",
                  e: "€12 (tour, book at athletic.eus)",
                  d: "Athletic Club de Bilbao&apos;s home ground, known as La Catedral, opened in 2013 and holds 53,000 spectators. Athletic is the only top-division Spanish club maintaining a strict Basque-only player policy since 1912 — they have never been relegated from La Liga. The guided tour covers pitch side, dressing rooms, and the trophy room. Match tickets are extremely difficult to obtain but worth trying for the atmosphere.",
                  t: "Football culture · 1.5 hrs",
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
            title="Bilbao — Guggenheim, Pintxos &amp; the Basque Country"
            subtitle="Frank Gehry&apos;s titanium masterpiece, medieval streets, and Atlantic pintxos culture."
            spots={[
              {
                name: "Guggenheim Museum Bilbao",
                query: "guggenheim museum bilbao gehry titanium facade nervion river spain",
                desc: "Frank Gehry&apos;s titanium-clad Guggenheim Museum reflected in the Nervion River — the building that sparked the most celebrated urban regeneration of the 20th century.",
              },
              {
                name: "Casco Viejo Pintxos Bars",
                query: "bilbao casco viejo pintxos bars old town basque spain",
                desc: "The seven medieval streets of Bilbao&apos;s Old Town — the densest concentration of pintxos bars in Spain, best experienced from 7:30pm during the evening rush.",
              },
              {
                name: "Mercado de la Ribera",
                query: "mercado ribera bilbao covered market basque country spain",
                desc: "Europe&apos;s largest covered market by floor area, built in 1929 on the Nervion riverbank — three floors of Atlantic fish, Basque charcuterie, and extraordinary produce.",
              },
              {
                name: "Artxanda Funicular Views",
                query: "artxanda funicular bilbao panoramic view basque spain",
                desc: "The view from Artxanda hill over the entire Nervion valley — reached by the red funicular from the city centre for just €0.98.",
              },
              {
                name: "Puppy by Jeff Koons",
                query: "puppy jeff koons guggenheim bilbao flower sculpture spain",
                desc: "The 12-metre West Highland Terrier covered in 38,000 seasonal flowers outside the Guggenheim — one of Europe&apos;s most beloved public sculptures, free to see.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Bilbao sits in the mid-range of European city-break costs. The Guggenheim (€16) is the single biggest daily expense — everything else, from pintxos bars to the Artxanda funicular (€0.98), is excellent value. Accommodation is notably cheaper than San Sebastián or Barcelona.
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
                    ["🏨 Accommodation", "€25–40 (hostel or pension)", "€90–140 (3-star hotel)", "€250–400 (Gran Domine)"],
                    ["🍽️ Food & Pintxos", "€18–28 (pintxos bars, market)", "€40–65 (creative bars, bistro)", "€100–200 (Nerua / Mina)"],
                    ["🚇 Transport", "€5–10 (metro, Bizkaibus)", "€20–40 (car hire or tour)", "€60–180 (private car)"],
                    ["🏛️ Activities", "€16–25 (Guggenheim, funicular)", "€30–50 (museums, stadium)", "€80–200 (private tours)"],
                    ["TOTAL per day", "€60–80/day", "€130–180/day", "€320–500/day"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€60–80/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay at Poshtel Bilbao (from €25/night), eat exclusively at pintxos bars (€15 for lunch, €20 for dinner), use metro and walk. The Guggenheim (€16) is the main daily cost. Completely comfortable and authentic — the best pintxos in the city cost the same as everywhere else.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (€130–180/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay at Miro Hotel Bilbao (from €120/night), mix pintxos bars with one sit-down dinner at a Basque restaurant, hire a car for a day trip to Rioja. This is the sweet spot for comfort without losing the essential Basque city experience.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">✨ Luxury (€320–500/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Stay at Gran Hotel Domine (facing the Guggenheim, from €250/night), dine at Nerua inside the Guggenheim (1 Michelin star, €130 tasting menu), book a private Guggenheim tour (€80/pp). Bilbao offers world-class luxury at lower prices than Barcelona or Madrid.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Bilbao</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The two best areas are the Casco Viejo (Old Town) for proximity to pintxos bars and the Abando / Guggenheim area for the museum and riverfront. Both are within easy walking distance of each other — Bilbao is a compact city.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Gran Hotel Domine Bilbao",
                  type: "Luxury design hotel · Facing the Guggenheim",
                  price: "From €250/night",
                  badge: "Most unique",
                  desc: "The only hotel in the world designed to face the Guggenheim Museum — every room has floor-to-ceiling windows framing the titanium curves. The rooftop terrace is Bilbao&apos;s finest aperitivo spot. Rooms are designed by Javier Mariscal and the collection of contemporary Basque art throughout is exceptional. Book the Guggenheim-facing rooms.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Miro Hotel Bilbao",
                  type: "Design boutique · Guggenheim district",
                  price: "From €120/night",
                  badge: "Best mid-range",
                  desc: "Designed by fashion designer Antonio Miró, this 50-room boutique hotel is 200 metres from the Guggenheim on the Alameda de Mazarredo. Minimalist white rooms, excellent breakfast, and a location that puts you in the best possible position for both the museum and the riverfront walk. The best mid-range option near the Guggenheim.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Poshtel Bilbao",
                  type: "Premium hostel · Casco Viejo",
                  price: "From €25/night (dorm) · €70/night (private)",
                  badge: "Best budget",
                  desc: "One of Spain&apos;s best-reviewed premium hostels — clean, design-forward, with private rooms and dormitories. Located in the Casco Viejo two minutes from the pintxos bars of Plaza Nueva. The social atmosphere is good and the location is ideal for the morning market and evening pintxos crawl. Book private rooms far in advance for weekends.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Hotel Carlton Bilbao",
                  type: "Classic grand hotel · City centre",
                  price: "From €160/night",
                  badge: "Historic choice",
                  desc: "Bilbao&apos;s grand dame hotel, open since 1926 and a registered historic monument. The neo-baroque facade and Belle Époque interiors are in striking contrast to the contemporary architecture that surrounds it. Hemingway stayed here. The bar is one of the best in the city for a classic Spanish gin tonic and the location between the Old Town and the Guggenheim is ideal.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Bilbao</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Bilbao&apos;s pintxos bars are the reason to come. The best ones win annual competitions and take their craft as seriously as any Michelin-starred kitchen. You eat at the bar, standing up, moving on after two or three pintxos. The ritual is the point.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Bar Bergara",
                  t: "Classic pintxos bar · General Concha 7",
                  d: "One of the most decorated pintxos bars in Bilbao — multiple winners of the Bilbao Pintxos Championship. Their bacalao al pil-pil (salt cod in its own gelatine emulsion), the foie pintxo with caramelised apple, and the txangurro (spider crab) tostada are benchmark Basque pintxos. Arrive at 7:30pm opening for the freshest trays. €2.50–4 per pintxo.",
                  b: "Award-winning",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Gure Toki",
                  t: "Creative pintxos · Plaza Nueva 12",
                  d: "On Plaza Nueva&apos;s arcaded square, Gure Toki consistently produces the most creative cold pintxos in the Casco Viejo. Their black squid ink croquetas, the anchoa with membrillo, and the seasonal mushroom and foie combination are exceptional. The plaza setting is perfect for eating your pintxo outside with a glass of txakoli watching the evening crowd gather.",
                  b: "Most creative",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Berton Sasibil",
                  t: "Hot pintxos specialist · Calle Jardines 8",
                  d: "Where to go for hot pintxos cooked to order — the Basque tradition of hot pintxos is less commonly executed well than cold bar pintxos, but Berton Sasibil does it superbly. Their grilled gambas (prawns), the chorizo a la sidra (cider-braised chorizo), and the morcilla (black pudding) pintxos are outstanding. Always busy from 8pm onwards.",
                  b: "Hot pintxos",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "El Globo",
                  t: "Late-night pintxos · Diputacion 8",
                  d: "The best late-night pintxos bar in Bilbao — still putting out fresh trays at 11pm when most other bars have closed their kitchens. Specialises in jamón ibérico de bellota, manchego cheese, and classic cold pintxos that showcase the finest Spanish preserved products. Standing room only from 10pm. The txakoli is served poured from height in the traditional fashion. €2.50–3.50 per pintxo.",
                  b: "Late night",
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
            destination="Bilbao Basque Country"
            hotels={[
              {
                name: "Gran Hotel Domine Bilbao",
                type: "Luxury design hotel · Facing the Guggenheim",
                price: "From €250/night",
                rating: "5",
                badge: "Best location",
                url: "https://www.booking.com/hotel/es/gran-domine-bilbao.html?aid=2820480",
              },
              {
                name: "Miro Hotel Bilbao",
                type: "Design boutique · Guggenheim district",
                price: "From €120/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/es/miro-bilbao.html?aid=2820480",
              },
              {
                name: "Poshtel Bilbao",
                type: "Premium hostel · Casco Viejo",
                price: "From €25/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/es/poshtel-bilbao.html?aid=2820480",
              },
              {
                name: "Hotel Carlton Bilbao",
                type: "Historic grand hotel · City centre",
                price: "From €160/night",
                rating: "4",
                badge: "Historic stay",
                url: "https://www.booking.com/hotel/es/hotel-carlton-bilbao.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Guggenheim Museum Bilbao Guided Tour",
                duration: "2.5 hrs",
                price: "From €16/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=Bilbao+Guggenheim&partner_id=PSZA5UI",
              },
              {
                name: "Bilbao Pintxos Bar Crawl",
                duration: "3 hrs",
                price: "From €35/person",
                badge: "Most popular",
                url: "https://www.getyourguide.com/s/?q=Bilbao+pintxos+tour&partner_id=PSZA5UI",
              },
              {
                name: "Basque Country Food Tour",
                duration: "4 hrs",
                price: "From €65/person",
                url: "https://www.getyourguide.com/s/?q=Basque+Country+food+tour+Bilbao&partner_id=PSZA5UI",
              },
              {
                name: "San Sebastián Day Trip from Bilbao",
                duration: "Full day",
                price: "From €55/person",
                url: "https://www.getyourguide.com/s/?q=San+Sebastian+day+trip+Bilbao&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Bilbao</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🕐",
                  title: "Trying to eat pintxos before 7:30pm",
                  desc: "Pintxos bars in Bilbao operate on Basque time — they open for the evening pintxos hour from 7:30pm to 10pm, and for lunch from 1pm to 3:30pm. Arriving at 6pm finds most bars serving only drinks with a very limited selection. The evening pintxos rush from 8pm to 9:30pm is when the trays are freshest and the atmosphere is best.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🎨",
                  title: "Only visiting the Guggenheim and missing the Bellas Artes",
                  desc: "The Museo de Bellas Artes two blocks from the Guggenheim holds one of Spain&apos;s finest collections including El Greco, Goya, Murillo, and the Basque master Zuloaga. It is consistently empty while the Guggenheim is packed and far better value at €10 (free on certain days). A combined Guggenheim + Bellas Artes visit in a single day is entirely feasible.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🍷",
                  title: "Ordering wine instead of txakoli",
                  desc: "Txakoli (Txakolina) is the local Basque white wine — lightly effervescent, high in acidity, low in alcohol (10–11%), and the only correct pairing for pintxos. It is poured from height to aerate it, producing a slight froth. Ordering a glass of Rioja instead is a perfectly valid choice for dinner, but at a pintxos bar, txakoli is what you drink. Ask for a chato (small glass) for €2–2.50.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🚆",
                  title: "Not doing the San Sebastián day trip",
                  desc: "San Sebastián is just 100km east of Bilbao — 1 hour 15 minutes by bus (€7–10) or 2.5 hours by scenic coastal train (€5–8). The combination of the two cities in a single trip is one of the great European city-break formulas: Bilbao for architecture and art, San Sebastián for the beach, La Concha bay, and the highest concentration of Michelin-starred restaurants per capita in the world.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "✈️",
                  title: "Flying into Madrid or Barcelona instead of Bilbao",
                  desc: "Bilbao Airport (BIO) has direct flights from London Heathrow, London Gatwick, Paris CDG, Amsterdam, Brussels, and most major European cities. Flying into Madrid or Barcelona and taking the 4–5 hour train or bus north adds a full travel day and significant cost. Check Vueling, Iberia, Ryanair, and EasyJet directly to Bilbao before accepting a connecting route.",
                  color: "bg-red-50 border-red-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Bilbao</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🍴",
                  title: "Do a proper pintxos crawl — at least 4 bars",
                  desc: "The pintxos bar culture means one or two items at each bar, then move on. The best pintxos in Bilbao are spread across different streets — Plaza Nueva (Gure Toki), Calle Jardines (Berton Sasibil), General Concha (Bar Bergara), and Diputacion (El Globo) each have their specialities. Budget €20–25 for a serious 4-bar crawl with txakoli at each stop.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🚇",
                  title: "Use the Norman Foster metro with a Barik card",
                  desc: "Bilbao&apos;s metro (nicknamed Fosteritos for its distinctive glass canopy entrances designed by Norman Foster) is excellent. A Barik rechargeable card (€3 for the card) reduces single fares from €1.50 to €0.86 per trip. It also works on Bilbobus city buses and the Artxanda funicular. The metro connects the airport, Old Town, Guggenheim, and Abando station efficiently.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "📷",
                  title: "Photograph the Guggenheim in the morning and at dusk",
                  desc: "The titanium facade of the Guggenheim is designed to change colour with the light — silver-blue in overcast morning light, golden in afternoon sun, orange-pink at dusk. The best photographic light is in the 30 minutes before sunset when the curves glow amber. The reflection in the Nervion from the Zubizuri bridge gives the widest view of the complete building.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🌡️",
                  title: "Visit April–June or September–October",
                  desc: "Bilbao and the Basque coast get more Atlantic rainfall than the rest of Spain. July and August are the driest months but also the most crowded and most expensive. Late spring and early autumn offer 18–22°C, manageable crowds, excellent Basque seasonal produce (spring lamb, new txakoli in September), and hotel prices 20–30% below the August peak.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🍷",
                  title: "Take the Artxanda funicular at sunset",
                  desc: "The Artxanda funicular (€0.98 one way) is one of the great bargains in European travel. The summit view over Bilbao at sunset — the Guggenheim and Iberdrola Tower catching the last light, the Nervion curving through the valley, the Basque mountains behind — is the best free panorama in the city. Time your ascent for 45 minutes before sunset.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🏟️",
                  title: "Check Athletic Club match schedule",
                  desc: "Attending an Athletic Club de Bilbao match at San Mamés is one of the great sporting experiences in Spain. The atmosphere is extraordinary — a stadium that only fields Basque players, with fans who have supported the same club for generations. Check the fixture list at athletic.eus well in advance; home La Liga matches sell out weeks ahead, particularly against Barcelona and Real Madrid.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Bilbao" />

          {/* Combine With */}
          <CombineWith currentSlug="bilbao-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How do I get from Bilbao Airport to the city centre?",
                  a: "Metro Line 3 (Euskotren) runs from Bilbao Airport directly to Abando station in the city centre in 35 minutes for €3. Trains run every 15–20 minutes from approximately 6am to midnight. The metro station is inside the terminal arrivals hall. Alternatively, the Bizkaibus A3247 runs to Termibus bus station (€1.50, 30 minutes) with a metro connection onward. Taxis cost €25–30 and take 15–20 minutes in normal traffic.",
                },
                {
                  q: "How many days do you need in Bilbao?",
                  a: "Three days is the ideal minimum — Day 1 for the Guggenheim, Casco Viejo pintxos, and La Ribera market; Day 2 for Artxanda, Bellas Artes, and San Mamés; Day 3 for a day trip to San Sebastián. If you have 4 days, add a half-day to Rioja wine country (1 hour 15 minutes by bus to Haro). Two days covers the Guggenheim and pintxos crawls but feels rushed.",
                },
                {
                  q: "What is the best way to do a pintxos crawl in Bilbao?",
                  a: "Start in the Casco Viejo at 7:30pm when the bars open for the evening pintxos hour. Begin at Gure Toki on Plaza Nueva for cold pintxos, move to Berton Sasibil on Calle Jardines for hot pintxos, cross to Bar Bergara on General Concha for award-winning creations, and finish at El Globo on Diputacion for late-night jamón pintxos. Drink txakoli (the local Basque white) at each stop — never beer, which is not the Basque custom.",
                },
                {
                  q: "Is San Sebastián worth a day trip from Bilbao?",
                  a: "Absolutely — it is one of the best day trips in Europe. The ALSA or PESA bus takes 1 hour 15 minutes and costs €7–10 each way. San Sebastián offers a completely different experience to Bilbao: a gorgeous Belle Époque seaside resort built around the perfect horseshoe bay of La Concha, the densest concentration of Michelin-starred restaurants per capita on earth, and a Parte Vieja old town even more intense than Bilbao&apos;s for pintxos. Most visitors base themselves in Bilbao (cheaper accommodation) and do the day trip.",
                },
                {
                  q: "When is the best time to visit the Guggenheim Museum Bilbao?",
                  a: "Tuesday to Thursday mornings offer the smallest crowds. The museum is closed on Mondays year-round (except July and August when it opens daily). Book a timed entry slot online at guggenheim-bilbao.eus — tickets are €16 for adults and include an audio guide. The titanium facade looks most spectacular in early morning or late afternoon light when the curved surfaces reflect the changing sky. Avoid Saturday afternoons and Sunday mornings which are consistently the busiest periods.",
                },
                {
                  q: "Is Bilbao safe for solo travellers?",
                  a: "Bilbao is one of the safer cities in Spain. The Casco Viejo is busy and well-lit throughout the pintxos hours (1pm–3:30pm and 7:30pm–10pm) and the city has a low rate of tourist-targeted crime compared to Barcelona or Madrid. Standard precautions apply: keep valuables inside your bag in crowded bar areas, be aware of your surroundings late at night in the Casco Viejo. Solo female travellers consistently rate Bilbao as one of the most comfortable cities in Spain.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Bilbao trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-bilbao", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/bilbao-budget-guide", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-bilbao", label: "How to get there", icon: "✈️" },
                { href: "/blog/bilbao-pintxos-guide", label: "Pintxos guide", icon: "🍴" },
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
          <RelatedGuides currentSlug="bilbao-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Spain &amp; Basque Country Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "San Sebastián 3 Days — Pintxos &amp; La Concha", href: "/blog/san-sebastian-3-days" },
                { label: "Madrid 3 Days — Prado, Retiro &amp; Tapas", href: "/blog/madrid-3-days" },
                { label: "Barcelona 4 Days — Gaudí &amp; Gothic Quarter", href: "/blog/barcelona-4-days" },
                { label: "Porto 3 Days — Ribeira &amp; Douro Wine", href: "/blog/porto-3-days" },
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
