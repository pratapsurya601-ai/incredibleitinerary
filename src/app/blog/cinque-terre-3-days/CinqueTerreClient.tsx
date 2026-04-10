"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import AuthorByline from "@/components/blog/AuthorByline";
import InlineSignup from "@/components/blog/InlineSignup";
import PhotoCta from "@/components/blog/PhotoCta";
import { PinterestSaveButton } from "@/components/blog/PinterestSaveButton";
import TableOfContents from "@/components/blog/TableOfContents";
import Comments from "@/components/blog/Comments";
import DestinationGallery from "@/components/blog/DestinationGallery";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import RelatedGuides from "@/components/blog/RelatedGuides";
import CombineWith from "@/components/blog/CombineWith";
import Breadcrumb from "@/components/blog/Breadcrumb";
import InlineCTA from "@/components/blog/InlineCTA";
import SmartImage from "@/components/SmartImage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";

// ── Table of Contents ─────────────────────────────────────────────────────────
const CINQUE_TERRE_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Cinque Terre Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "🚂",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",  emoji: "🏘️", label: "Village & Landmark Guide" },
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
          href: `mailto:?subject=Cinque Terre 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Cinque Terre in 3 Days — cliff villages, coastal trails and pesto pasta&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        url="https://www.incredibleitinerary.com/blog/cinque-terre-3-days"
        imageUrl="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=80"
        description="Cinque Terre in 3 Days: Sentiero Azzurro hike, Manarola sunset, Vernazza harbour, pesto pasta and the Ligurian coast — complete travel guide."
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
export default function CinqueTerreClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={CINQUE_TERRE_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Cinque Terre" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="cinque terre manarola vernazza cliff villages italy ligurian sea colourful"
            fallback="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1600&q=80"
            alt="Manarola village clinging to colourful cliffs above the Ligurian Sea, Cinque Terre"
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
              <span className="text-white/70">Cinque Terre 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-blue-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Cinque Terre in 3 Days:
                <em className="italic text-blue-300"> Five Villages, One Coastal Trail &amp; the Ligurian Sea</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Five villages bolted to vertical cliffs, the Sentiero Azzurro trail stitching them together, pesto pasta at the source, and sunsets from Manarola that don&apos;t look real. The complete guide from €55/day.
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
              <span>🇮🇹 Liguria, Italy</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From €55/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-blue-500 pl-6 mb-10 bg-blue-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Five villages bolted to vertical cliffs above one of the most photogenic stretches of coastline in the world — Cinque Terre is Italy&apos;s most concentrated dose of drama. The fishing boats still go out at dawn, the focaccia sold from a tiny window in Vernazza has been made the same way for decades, and the Sentiero Azzurro coastal trail still makes you feel like the first person to discover all of it.
            </p>
          </blockquote>

          {/* ── WHAT CINQUE TERRE ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Cinque Terre Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Cinque Terre — the Five Lands — is a string of five ancient fishing villages clinging to near-vertical cliffs on the Ligurian coast of northwest Italy. Monterosso al Mare, Vernazza, Corniglia, Manarola, and Riomaggiore have been connected by footpaths for centuries, and the terraced hillsides above them still produce some of Italy&apos;s most dramatic wine — the Sciacchetrà sweet amber wine that exists virtually nowhere else on earth.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Cinque Terre National Park, designated a UNESCO World Heritage Site in 1997, protects both the villages and the extraordinary landscape behind them. The Sentiero Azzurro — the Blue Trail — is the most famous of the park&apos;s hiking routes, running the full length of the coast and connecting all five villages with views that drop 100 metres straight to the sea.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The honest reality in 2026: Cinque Terre is heavily visited in summer. July and August bring overcrowded trails and queues at the train stations. But arrive in April, May, September, or October — or stay overnight so you experience the villages after the day-tripper trains leave at 6pm — and this place is genuinely extraordinary. The coloured houses stacked above the harbours, the anchovies curing in salt in the back streets, the pesto made with Genovese basil from gardens you can see from the trail — none of it is a performance. It is simply how these villages have always worked.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="🚂" label="From La Spezia" value="15–30 min" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Jun, Sep–Oct" />
              <StatCard icon="🏘️" label="Villages" value="5" />
              <StatCard icon="💰" label="Budget From" value="€55/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Cinque Terre</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "18–24°C. The trails are at their least crowded, wildflowers cover the terraced hillsides, and the sea is calm enough for swimming by late May. April is ideal — the day-trippers haven&apos;t discovered it yet and trail access is fully open. The light for photography is soft and blue.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍇",
                  t: "Autumn — Almost as Good",
                  d: "20–26°C. September is harvest season for Sciacchetrà wine grapes on the steep terraces — the most atmospheric time to visit. October is quieter and cooler. Sea swimming is still good through September. The villages feel like themselves again after the August crowds.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🔥",
                  t: "Summer — Overcrowded",
                  d: "25–30°C. The trails now have daily entry limits and the villages can feel like theme parks by 11am. Trains from Florence arrive packed from 9am. If you must visit in summer, stay overnight — the villages at 7am and after 6pm are a completely different experience from the midday chaos.",
                  b: "Avoid if possible",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Mar",
                  i: "🌧️",
                  t: "Winter — Quiet but Unpredictable",
                  d: "8–14°C. Trail sections frequently close after autumn storms and landslides. The villages are tranquil and authentic, prices drop significantly, and you can have Vernazza&apos;s harbour almost to yourself. But some restaurants and accommodation close entirely November–March.",
                  b: "Check trail status",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚂 Getting to Cinque Terre</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-blue-800 font-light">
                <strong className="font-medium">Key detail:</strong> The gateway to Cinque Terre is <strong className="font-medium">La Spezia Centrale</strong> station. From there, regional Trenitalia trains run directly into each of the five villages — Riomaggiore is first (15 min), Monterosso is last (30 min). Buy the Cinque Terre Card at La Spezia before boarding.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚂",
                  t: "Train from Pisa Galileo Galilei Airport (recommended)",
                  d: "Pisa Centrale → La Spezia Centrale: 1 hour, €8 on regional Trenitalia. Direct trains run roughly every 30–60 minutes. From La Spezia, the Cinque Terre train to Riomaggiore takes 15 min, to Monterosso 30 min. Buy the Cinque Terre Card with train option (€16/day) at La Spezia station to cover unlimited trains between the villages.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚂",
                  t: "Train from Genoa Piazza Principe",
                  d: "Genoa → La Spezia: 1.5 hours, €12. Fast regional service, very comfortable. Genoa is Italy&apos;s most underrated city and worth a half-day stop in its own right — the old port (Porto Antico) and the caruggi (medieval alleyways) are extraordinary. Combine Cinque Terre with a night in Genoa.",
                  b: "Good option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚂",
                  t: "Train from Florence Santa Maria Novella",
                  d: "Florence → La Spezia: 2.5 hours, €20 on regional trains (change at Pisa Centrale). Alternatively take a faster Frecciabianca intercity service. One of the most popular routes for tourists already in Tuscany.",
                  b: "Popular route",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "⛵",
                  t: "Ferry from La Spezia or between villages",
                  d: "Seasonal ferry service (April–October) connects La Spezia to all five villages. A day ferry pass costs €30 and gives you the sea-level view of the cliff villages — completely different from the train. Single hops between villages cost €8. The best way to understand the scale of the coastline from the water.",
                  b: "Scenic option",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Cinque Terre Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is designed to hit the villages before the day-tripper surge, spend midday swimming or eating, and make the most of the golden-hour light for hiking and photography.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrival · Via dell&apos;Amore · Manarola Sunset"
                cost="€35–45 (transport, Cinque Terre Card, dinner)"
                items={[
                  "Arrive at Pisa Galileo Galilei Airport (PSA) and take the direct regional train to La Spezia Centrale (1 hour, €8). At La Spezia station buy the Cinque Terre Trekking Card (€7.50/day or €14.50 for 2 days) — it is mandatory for hiking any trail in the national park and rangers check it on the path. The card with unlimited trains between villages costs €16/day and is excellent value if you plan to move around.",
                  "Take the Cinque Terre train to Riomaggiore (15 min from La Spezia, covered by the Card with trains). Riomaggiore is the southernmost village — the main street drops steeply to a small harbour with fishing boats pulled up onto the rocks. Leave your bags at your accommodation and buy a focaccia from the first bakery you pass.",
                  "Walk the Via dell&apos;Amore (Lover&apos;s Lane) between Riomaggiore and Manarola. This cliff-cut path was fully restored and reopened in 2024 after years of landslide closure — €5 extra entry on top of the Cinque Terre Card, or included in the premium card. The 1km path is carved into the cliff face 50m above the sea. Arguably the most romantic short walk in Italy.",
                  "From Manarola, climb to the upper vineyards at sunset — a free, 15-minute walk from the village centre. The view down over the coloured houses stacked above the harbour and the sea beyond is the definitive Cinque Terre photograph. Most visitors never find this viewpoint because they stay at sea level. Stay until the light goes gold.",
                  "Dinner in Manarola: trofie al pesto — the classic Ligurian pasta with Genovese basil pesto made here, not from a jar — costs €9–13 at any village trattoria. Skip the harbour-front restaurants and go one street back for lower prices and the same quality. A carafe of local Vermentino white wine is €6–8.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Sentiero Azzurro Hike · Vernazza · Corniglia"
                cost="€25–35 (Cinque Terre Card, food, one train)"
                items={[
                  "07:30 — Take the early train to Monterosso al Mare (the northernmost village, 30 min from Riomaggiore or Manarola). Monterosso is the largest village and the only one with a real sandy beach — the free section at the north end is excellent for an early swim. Buy a focaccia al formaggio (cheese-stuffed, €4) from a bakery before starting the trail.",
                  "Start the Sentiero Azzurro southbound: Monterosso to Vernazza takes 90 minutes, rated moderate. The trail climbs steeply from Monterosso and opens out to clifftop views of the sea with Vernazza&apos;s harbour suddenly appearing below a rocky headland — one of the great surprise reveals in European hiking. The path is well-marked but involves significant steps.",
                  "10:30 — Arrive in Vernazza, widely considered the most beautiful of the five villages. The natural harbour with its castle tower (Doria Castle, €1.50 entry) and coloured buildings is the Cinque Terre image. Have a coffee at the harbour-side bars — Vernazza is the best place in the region for a proper Italian espresso. Climb the castle tower for the overhead view of the village.",
                  "11:00 — Continue hiking: Vernazza to Corniglia takes 90 minutes, rated moderate-challenging. Corniglia is the only village not on the sea — it sits on a headland 100 metres above the water, reached from its train station by the Lardarina staircase (300 steps). The village is the least visited of the five and the most genuinely residential. Buy a lemon granita from the bar at the top of the steps.",
                  "13:30 — Lunch in Corniglia: a plate of focaccia and a glass of Sciacchetrà — the rare, amber-sweet Cinque Terre wine made from partially dried grapes grown on these terraces. A 100ml glass costs €6–10. Eaten on a stone terrace above the sea with no crowds, it is one of the best €10 lunches in Italy.",
                  "15:30 — Take the train back to your base village (Corniglia–Manarola or Riomaggiore is 5–8 min). Swim from the rocky inlet below Manarola at the Nessun Dorma cliff bar — the famous blue-water swimming hole is free to use (the bar is optional). The water clarity here is remarkable.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Vernazza Swimming · Monterosso Beach · Departure"
                cost="€20–30 (transport, food, final swim)"
                items={[
                  "08:00 — Take the morning train to Vernazza and arrive before the 10am day-tripper surge. Vernazza in the early morning — fishermen returning, the bars just opening, the Doria Castle catching the first light across an empty harbour — is a completely different place from the midday Vernazza. This is the reward for staying overnight.",
                  "09:00 — Swim in Vernazza&apos;s harbour. The water is crystal clear in the morning before boats start moving. Locals swim from the stone steps beside the castle tower — no equipment needed, no entry fee. The turquoise of the water against the coloured village buildings is genuinely as good as any photograph suggests.",
                  "10:30 — Optional: hike the Vernazza to Monterosso trail in reverse (90 min, moderate-hard) for the sea views looking back toward the southern villages. This is the hardest section of the Sentiero Azzurro but has the most dramatic coastal scenery — the cliff-edge path with the sea 100m below and all five villages visible on clear days.",
                  "13:00 — Lunch in Monterosso: anchovies in salt, the Ligurian speciality. Monterosso&apos;s anchovies (acciughe sotto sale) are among the finest in Italy — cured in wooden barrels, served on bread with butter, or in a salad with capers. A plate costs €8–12. The town is also known for its giant lemon granita served in a hollowed-out lemon shell (€4).",
                  "15:30 — Train from Monterosso to La Spezia Centrale (20 min, €4 or covered by the Card). From La Spezia, connect to Pisa (1 hour, €8) for PSA airport, or to Genoa (1.5 hours, €12) for GOA airport. If time permits, stop in La Spezia&apos;s excellent covered market for last-minute olive oil and pesto provisions.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Cinque Terre" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK & VILLAGE GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏘️ Village &amp; Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              All five villages and the key trails in order from north to south. The Cinque Terre Trekking Card (€7.50/day, €14.50 for 2 days) is required for the Sentiero Azzurro trails. Buy it at any village station or La Spezia before you start hiking.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Monterosso al Mare",
                  e: "Cinque Terre Card required for trails",
                  d: "The largest and most accessible of the five villages, with the only real sandy beach in the region — the free section at the north end is excellent. Best for swimming, accommodation, and the famous Monterosso anchovies. The limonaia (lemon gardens) above the village are extraordinary in spring. Train from La Spezia: 30 min, €4.",
                  t: "Best beach · Most accommodation",
                },
                {
                  n: "Vernazza",
                  e: "Doria Castle €1.50 · Trail: Cinque Terre Card",
                  d: "Widely considered the most beautiful village. The natural harbour ringed by coloured buildings, the Doria Castle tower, and the piazza at the water&apos;s edge combine into the definitive Cinque Terre scene. Best restaurants and coffee in the region. Swim from the steps next to the castle. Arrive before 9am.",
                  t: "Most beautiful · Best restaurants",
                },
                {
                  n: "Corniglia",
                  e: "Free to visit · 300 steps from station",
                  d: "The only village not on the sea — perched on a 100m headland reached by the Lardarina staircase from the train station. The most tranquil and least tourist-heavy of the five. A single street of houses with a viewpoint terrace looking both north and south simultaneously. Best for Sciacchetrà wine and genuine quiet.",
                  t: "Most peaceful · Best wine views",
                },
                {
                  n: "Manarola",
                  e: "Via dell&apos;Amore €5 · Nessun Dorma bar free swimming",
                  d: "The most-photographed village — the stacked coloured houses above the rocky harbour at sunset are the defining image of Cinque Terre. The upper vineyard viewpoint (free, 15-min walk) gives the best photograph. The Nessun Dorma cliff bar has a terrace with the most jaw-dropping sunset view in the region — arrive by 5pm for a seat.",
                  t: "Best sunsets · Most photogenic",
                },
                {
                  n: "Riomaggiore",
                  e: "Free · Best budget accommodation",
                  d: "The southernmost and most easily reached village from La Spezia (15 min, €4). A steep main street drops to a small harbour with fishing boats hauled up on the rocks. Less polished than Vernazza but more authentically residential. The best budget accommodation options in the region. Starting point for the Via dell&apos;Amore.",
                  t: "Best budget base · First from La Spezia",
                },
                {
                  n: "Sentiero Azzurro Blue Trail",
                  e: "Cinque Terre Card €7.50/day mandatory",
                  d: "The coastal trail stitching all five villages together — roughly 12km end-to-end. The Monterosso–Vernazza section (90 min, moderate) is the most dramatic. Vernazza–Corniglia (90 min, challenging) is the least-crowded. Via dell&apos;Amore (Riomaggiore–Manarola, 1km, easy) is the most famous but only 1km. Always check parconazionale5terre.it before hiking as sections close after storms.",
                  t: "Moderate–challenging · Full day to walk all",
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
            title="Cinque Terre — Five Villages &amp; the Ligurian Coast"
            subtitle="Manarola, Vernazza, Corniglia, Monterosso and Riomaggiore from the sea and the trail."
            spots={[
              {
                name: "Manarola at Sunset",
                query: "manarola cinque terre sunset cliff village colourful houses ligurian sea italy",
                desc: "The stacked coloured houses of Manarola above the rocky harbour at golden hour — the most-photographed image in Cinque Terre.",
              },
              {
                name: "Vernazza Harbour",
                query: "vernazza harbour cinque terre italy ligurian coast fishing village",
                desc: "Vernazza&apos;s natural harbour ringed by coloured buildings and the Doria Castle tower — widely considered the most beautiful village in the region.",
              },
              {
                name: "Sentiero Azzurro Coastal Trail",
                query: "sentiero azzurro hiking trail cinque terre cliffs sea italy ligurian coast path",
                desc: "The Sentiero Azzurro Blue Trail above the sea — the coastal path that connects all five villages with clifftop views 100m above the water.",
              },
              {
                name: "Corniglia Viewpoint",
                query: "corniglia viewpoint cinque terre hilltop village headland ligurian sea",
                desc: "Corniglia perched on its headland 100 metres above the sea — the only village in Cinque Terre without direct sea access and the quietest of the five.",
              },
              {
                name: "Riomaggiore Fishing Harbour",
                query: "riomaggiore harbour fishing boats cinque terre italy dawn morning",
                desc: "Riomaggiore&apos;s small harbour with coloured fishing boats hauled up on the rocks — the southernmost village and the gateway from La Spezia.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Cinque Terre is not cheap by Italian standards — accommodation in the villages is expensive and the Cinque Terre Card adds to daily costs. Budget carefully around the Card and transport; food can be kept reasonable by eating away from the harbour-front restaurants.
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
                    ["🏨 Accommodation (per night)", "€20–35 (hostel/guesthouse)", "€100–140 (seaview B&B)", "€300–500 (cliff hotel)"],
                    ["🍽 Food (per day)", "€15–20 (focaccia, pesto pasta)", "€35–50 (village restaurants)", "€100–200 (fine dining)"],
                    ["🚂 Transport (per day)", "€10–15 (Card + trains)", "€15–25 (Card + boat hop)", "€100–300 (private boat)"],
                    ["🎫 Cinque Terre Card", "€7.50/day or €14.50/2 days", "€16/day (with trains)", "€16/day (with trains)"],
                    ["🏊 Activities", "Free (swimming, hiking)", "€20–40 (boat tour)", "€80–200 (private guide/kayak)"],
                    ["TOTAL (per person/day)", "€55–75/day", "€120–170/day", "€300–500+/day"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€55–75/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in Riomaggiore or Manarola guesthouses (€20–35/night), eat focaccia and pesto pasta at back-street trattorias, use the 2-day Cinque Terre Card (€14.50). Completely comfortable and very achievable.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (€120–170/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Seaview B&B in Vernazza or Monterosso (€100–140/night), dinner at proper village restaurants, one boat trip along the coast (€20–30). The sweet spot for a first Cinque Terre visit.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (€300–500+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Hotel Porto Roca Monterosso or boutique cliff villas (€300–500/night), private boat charter (€200+), fine dining with Sciacchetrà wine pairings. The most dramatic coastal hotel experience in Italy.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Cinque Terre</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Accommodation in the five villages is expensive relative to the rest of Italy — book as far ahead as possible, especially May–September. Vernazza has the best restaurants. Manarola has the best sunset views. Monterosso has the most options. Riomaggiore is the budget base. All are connected by train in under 10 minutes.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Hotel Centotre — Monterosso al Mare",
                  type: "Boutique hotel · Monterosso village",
                  price: "From €120/night",
                  badge: "Best hotel Monterosso",
                  desc: "A well-regarded boutique hotel in the heart of Monterosso with comfortable, well-furnished rooms a short walk from the beach and the train station. Good base for exploring the northern section of the trail. Book well ahead — fills fast from April.",
                  color: "border-amber-200 bg-amber-50",
                  url: "https://www.booking.com/hotel/it/centotre-monterosso.html?aid=2820480",
                },
                {
                  name: "La Torretta — Manarola",
                  type: "Boutique guesthouse · Manarola village",
                  price: "From €140/night",
                  badge: "Best views Manarola",
                  desc: "Arguably the finest small hotel in Cinque Terre — terraced rooms above Manarola with extraordinary views down over the coloured houses and harbour. The sunset from the terrace is the best in the region. Only a handful of rooms so book months ahead.",
                  color: "border-teal-200 bg-teal-50",
                  url: "https://www.booking.com/hotel/it/la-torretta-manarola.html?aid=2820480",
                },
                {
                  name: "Ostello Cinque Terre — Manarola",
                  type: "Hostel · Manarola",
                  price: "From €25/night (dorm)",
                  badge: "Best budget",
                  desc: "One of the best-located hostels on the Ligurian coast — clean, well-run, with sea views from the common areas. Manarola is an excellent budget base: close to La Spezia, great sunset views, and the Via dell&apos;Amore walk. Private rooms also available from €70.",
                  color: "border-parchment-2 bg-white",
                  url: "https://www.booking.com/hotel/it/ostello-cinque-terre.html?aid=2820480",
                },
                {
                  name: "Hotel Porto Roca — Monterosso",
                  type: "Luxury cliff hotel · Monterosso",
                  price: "From €300/night",
                  badge: "Most luxurious",
                  desc: "The finest hotel in Cinque Terre — rooms with private terraces cantilevered directly above the sea, some with outdoor bathtubs overlooking the Ligurian coast. The benchmark for luxury accommodation on the Italian Riviera. Helicopter transfers from Pisa can be arranged.",
                  color: "border-purple-200 bg-purple-50",
                  url: "https://www.booking.com/hotel/it/porto-roca.html?aid=2820480",
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
                  <p className="text-xs text-gray-700 font-light leading-relaxed mb-2">{stay.desc}</p>
                  <a
                    href={stay.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-block text-[0.65rem] font-medium tracking-wide uppercase text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    Check availability on Booking.com →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHERE TO EAT ── */}
          <section id="eat" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Cinque Terre</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Cinque Terre sits in Liguria — the home of pesto, focaccia, anchovies, and the Sciacchetrà wine. Eat trofie al pesto in any village and you are at the source of one of Italy&apos;s greatest culinary traditions. The rule: one street back from the harbour for half the price and the same quality.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Ristorante Belforte — Vernazza",
                  t: "Clifftop seafood restaurant · Vernazza castle",
                  d: "Built into the base of the Doria Castle with a terrace directly above the sea — one of the most dramatically positioned restaurants in Italy. Excellent Ligurian seafood: grilled branzino with Ligurian olive oil, trofie al pesto, and fresh anchovies. Reserve well ahead for window tables. €35–55/pp.",
                  b: "Best setting",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Il Pirata — Monterosso al Mare",
                  t: "Village trattoria · Monterosso",
                  d: "A beloved Monterosso institution run by the Cannone family — generous portions of classic Ligurian cooking at prices that remain reasonable for the region. The focaccia al formaggio is exceptional and the pesto pasta is made daily. A favourite with return visitors. €20–35/pp. Get there early for dinner.",
                  b: "Best value",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Trattoria dal Billy — Manarola",
                  t: "Terrace trattoria · Manarola upper village",
                  d: "Perched above the village with a terrace view over the rooftops to the sea. Dal Billy is Manarola&apos;s most-recommended local restaurant — the linguine al pesto, the grilled fresh fish, and the local Cinque Terre DOC white wine are all excellent. Genuinely family-run. €25–40/pp. Book ahead.",
                  b: "Best Manarola",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Nessun Dorma Bar — Manarola",
                  t: "Cliff aperitivo bar · Manarola",
                  d: "The terrace bar built into the cliff above Manarola&apos;s harbour with the most famous sunset view in Cinque Terre. Come for a Cinque Terre spritz (€8), a glass of Sciacchetrà (€8–10), or a plate of local anchovies and focaccia (€10). Arrive by 5pm to get a terrace seat before sunset. Not a full restaurant — snacks and drinks only.",
                  b: "Best sunsets",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Focacceria (any village)",
                  t: "Street food · All villages",
                  d: "Ligurian focaccia is categorically different from any focaccia outside the region — dimpled, oily, thick, and sold from tiny windows in every village. Focaccia al rosmarino (rosemary, €2.50), focaccia al formaggio (cheese-stuffed, €4), and focaccia con acciughe (anchovy, €3.50) are the standards. Buy from a window, eat on the harbour wall.",
                  b: "Essential",
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
            destination="Cinque Terre Italy"
            hotels={[
              {
                name: "La Torretta Manarola",
                type: "Boutique guesthouse · Manarola",
                price: "From €140/night",
                rating: "5",
                badge: "Best views",
                url: "https://www.booking.com/hotel/it/la-torretta-manarola.html?aid=2820480",
              },
              {
                name: "Hotel Porto Roca Monterosso",
                type: "Luxury cliff hotel · Monterosso",
                price: "From €300/night",
                rating: "5",
                badge: "Most luxurious",
                url: "https://www.booking.com/hotel/it/porto-roca.html?aid=2820480",
              },
              {
                name: "Hotel Centotre Monterosso",
                type: "Boutique hotel · Monterosso",
                price: "From €120/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/it/centotre-monterosso.html?aid=2820480",
              },
              {
                name: "Ostello Cinque Terre Manarola",
                type: "Hostel · Manarola",
                price: "From €25/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/it/ostello-cinque-terre.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Cinque Terre Guided Hiking Tour",
                duration: "6 hrs",
                price: "From €45/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=cinque+terre+hiking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Cinque Terre Boat Tour from La Spezia",
                duration: "3 hrs",
                price: "From €25/person",
                badge: "Sea views",
                url: "https://www.getyourguide.com/s/?q=cinque+terre+boat+tour&partner_id=PSZA5UI",
              },
              {
                name: "Ligurian Cooking Class — Pesto & Focaccia",
                duration: "3 hrs",
                price: "From €65/person",
                badge: "Food lovers",
                url: "https://www.getyourguide.com/s/?q=cinque+terre+cooking+class+pesto&partner_id=PSZA5UI",
              },
              {
                name: "Cinque Terre Sea Kayaking Tour",
                duration: "3 hrs",
                price: "From €55/person",
                url: "https://www.getyourguide.com/s/?q=cinque+terre+kayak&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Cinque Terre</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "📅",
                  title: "Visiting in July and August",
                  desc: "Cinque Terre has become severely overcrowded in summer — the trails now have daily entry limits and the villages can feel like theme parks by 11am. April–June and September–October offer trails you can actually hike without queuing, and swimming conditions are just as good. The April light for photography is better than any summer light.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🎫",
                  title: "Not buying the Cinque Terre Card",
                  desc: "The Cinque Terre Trekking Card (€7.50/day, €14.50 for 2 days) is mandatory for hiking the Sentiero Azzurro trails — rangers check it on the path. Without it, you are technically trespassing in the national park and can be fined. Buy it at any village station or La Spezia before you start walking. The 2-day card is the best value for a 3-day trip.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🚂",
                  title: "Trying to see all five villages in a day trip",
                  desc: "Day trippers from Florence or Rome try to &apos;do&apos; all five villages in a single day — they spend 20 minutes in each village and understand nothing. Staying overnight means you experience the villages after the day-tripper trains leave at 6pm, when the atmosphere completely transforms. The villages at 7am and after 6pm are the real Cinque Terre.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🌊",
                  title: "Taking the train everywhere and missing the trails",
                  desc: "Most visitors take the train between villages and miss why Cinque Terre is special — the cliff-top paths with sea views 100m below, the terraced vineyards worked entirely by hand, and the sudden appearance of each village from above. Even the easiest section (Via dell&apos;Amore, 1km) gives you the cliff-face perspective the train never can.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🍴",
                  title: "Not eating pesto pasta immediately on arrival",
                  desc: "Liguria invented pesto and the version here — made with Genovese basil DOP, Ligurian extra-virgin olive oil, and pine nuts — bears no resemblance to the jarred sauce. Order trofie al pesto in any village trattoria for €9–12. It is one of the fundamental Italian food experiences and you are at the source.",
                  color: "bg-green-50 border-green-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Cinque Terre</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🎫",
                  title: "Get the 2-day Cinque Terre Card (€14.50)",
                  desc: "The 2-day Trekking Card (€14.50) is better value than two single-day cards (€7.50 each = €15) and covers the full Sentiero Azzurro for a 3-day trip. Upgrade to the Card with trains (€16/day) if you plan to move between villages frequently — unlimited trains all day is worth the extra €1.50.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🕖",
                  title: "Arrive in any village before 9am or after 5pm",
                  desc: "Day-tripper trains from Florence and Genoa arrive between 9am and 3pm, filling the villages instantly. The same streets that are shoulder-to-shoulder at noon are quiet and photogenic at 7am. Staying overnight in any of the five villages automatically gives you these golden hours — the single best reason to stay rather than day-trip.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🍇",
                  title: "Try Sciacchetrà — it only exists here",
                  desc: "Sciacchetrà is a rare sweet amber wine made from partially dried Bosco, Albarola, and Vermentino grapes grown on the steep Cinque Terre terraces. It is produced in tiny quantities and virtually impossible to find outside Liguria. A 100ml glass costs €6–10 — sip it with anchovies or aged Parmigiano. Do not leave without trying it.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "⛵",
                  title: "Take the ferry between villages at least once",
                  desc: "The seasonal Cinque Terre ferry (April–October) connects all five villages and La Spezia. A single hop costs €8, a day pass €30. The ferry view of each village from the sea — the only way to understand the full scale of the cliffs — is completely different from any trail or train view. Worth doing on Day 2 at minimum.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🏊",
                  title: "Swim at Manarola&apos;s rocky inlet (Nessun Dorma)",
                  desc: "The swimming spot below the Nessun Dorma bar at Manarola is free to use — a rocky inlet with extraordinarily clear turquoise water. No sandy beach, but the water quality is exceptional. Best in the morning before the bar opens and before boats start moving. The photographic setting — coloured village above, blue water below — is unique.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🗺️",
                  title: "Check trail conditions before every hike",
                  desc: "Cinque Terre trail sections close frequently due to landslides and storm damage — sometimes without notice. Always check the official national park website (parconazionale5terre.it) the morning of any planned hike. The Via dell&apos;Amore was closed for years and only fully reopened in 2024. Rangers are on the trails and will turn you back.",
                  color: "bg-orange-50 border-orange-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Cinque Terre" />

          {/* Combine With */}
          <CombineWith currentSlug="cinque-terre-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Which is the best village to stay in for Cinque Terre?",
                  a: "Vernazza is widely considered the most beautiful village with the best restaurants and a natural harbour for swimming. Manarola has the best sunset viewpoint (from the upper vineyard path) and is slightly less crowded. Monterosso is the largest, has the only real sandy beach, and the most accommodation options at various price points. Budget travellers find better value in Riomaggiore, which is closest to La Spezia and has the most budget guesthouses. Corniglia is the most peaceful but has 300 steps from the train station and no direct sea access — not ideal for heavy bags.",
                },
                {
                  q: "Is the Sentiero Azzurro coastal trail open in 2026?",
                  a: "Trail conditions change frequently due to landslides and storm damage. As of April 2026, the Via dell&apos;Amore (Riomaggiore–Manarola) is fully open following its 2024 restoration (€5 surcharge or premium card). The Monterosso–Vernazza and Vernazza–Corniglia sections are the most consistently open and most hiked. Always check the official Cinque Terre National Park website (parconazionale5terre.it) the morning of your hike — sections can close without notice after heavy rain.",
                },
                {
                  q: "How do I get to Cinque Terre from Pisa Airport?",
                  a: "Take the regional train from Pisa Centrale to La Spezia Centrale — 1 hour, €8 on Trenitalia. Trains run roughly every 30–60 minutes. At La Spezia station, buy the Cinque Terre Card (€7.50/day or €16/day with trains) and take the Cinque Terre train to your village: Riomaggiore is 15 minutes, Monterosso is 30 minutes. The total journey from PSA arrival to your village is typically 1.5–2 hours.",
                },
                {
                  q: "Can I visit Cinque Terre in 1 day from Florence?",
                  a: "Technically yes — the train from Florence Santa Maria Novella to La Spezia takes about 2.5 hours (€20, with a change at Pisa Centrale). You would arrive around 11am and need to leave by 5pm, giving you roughly 6 hours in the region. You can see 2–3 villages by train and do the Via dell&apos;Amore walk (1km). But staying overnight completely transforms the experience — the villages after 6pm when day-trippers leave are a different destination entirely.",
                },
                {
                  q: "What is the Cinque Terre Card and do I really need it?",
                  a: "The Cinque Terre Trekking Card (€7.50/day, €14.50 for 2 days) is mandatory for hiking any trail within the Cinque Terre National Park — including the Sentiero Azzurro and Via dell&apos;Amore. Rangers check cards on the path and can issue fines. The card with unlimited trains costs €16/day and is excellent value if you plan to move between villages multiple times. Buy it at any village station or at La Spezia Centrale before you arrive.",
                },
                {
                  q: "What food is Cinque Terre best known for?",
                  a: "Cinque Terre sits in Liguria, the home of some of Italy&apos;s most distinctive food. Trofie al pesto — the curled Ligurian pasta with fresh basil pesto made with Genovese basil DOP, olive oil, and pine nuts — is the essential dish and costs €9–13 at any village trattoria. Focaccia in various forms (plain, cheese-stuffed, anchovy) is sold from windows from 7am. The Monterosso anchovies (acciughe sotto sale) are among Italy&apos;s finest. Sciacchetrà, the rare sweet amber wine from the terraced vineyards, is the drink to try before you leave.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Cinque Terre trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/cinque-terre-best-time-to-visit", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/cinque-terre-budget-breakdown", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/how-to-get-to-cinque-terre", label: "How to get there", icon: "✈️" },
                { href: "/blog/cinque-terre-travel-tips", label: "Travel tips", icon: "📋" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col items-center gap-2 p-4 bg-parchment border border-parchment-2 rounded-xl hover:border-gold hover:shadow-sm transition-all text-center"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium text-ink leading-tight">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Related Guides */}
          <RelatedGuides currentSlug="cinque-terre-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Italy &amp; Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Venice in 4 Days — Canals &amp; Culture", href: "/blog/venice-4-days" },
                { label: "Florence in 4 Days — Renaissance Art", href: "/blog/florence-4-days" },
                { label: "Rome in 5 Days — The Eternal City", href: "/blog/rome-5-days" },
                { label: "Sicily in 7 Days — Ancient &amp; Modern", href: "/blog/sicily-7-days" },
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
