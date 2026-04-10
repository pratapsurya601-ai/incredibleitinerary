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
import InlineCTA from "@/components/blog/InlineCTA";
import PhotoCta from "@/components/blog/PhotoCta";
import AuthorByline from "@/components/blog/AuthorByline";
import InlineSignup from "@/components/email/InlineSignup";
import PinterestSaveButton from "@/components/ui/PinterestSaveButton";

// ── Table of Contents ─────────────────────────────────────────────────────────
const LISBON_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Lisbon Actually Is" },
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
          href: `mailto:?subject=Lisbon 4-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Lisbon in 4 Days — trams, fado, Sintra and pastéis de nata&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/lisbon-4-days"
        imageUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
        description="Lisbon in 4 Days: Alfama, Tram 28, Belém Tower, Sintra day trip, and pastéis de nata — complete travel guide with budget breakdown in euros."
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
export default function LisbonClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={LISBON_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="lisbon alfama neighborhood tram colorful buildings portugal"
            fallback="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
            alt="Lisbon Alfama neighborhood with yellow trams and colorful buildings Portugal"
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
              <span className="text-white/70">Lisbon 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Europe
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Lisbon in 4 Days:
                <em className="italic text-amber-300"> Trams, Fado &amp; the Edge of Europe</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Yellow trams grinding uphill past tiled facades, fado drifting from a restaurant door, pastéis de nata warm from the source. Europe&apos;s oldest and most affordable western capital — the complete guide.
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
              <span>🇵🇹 Portugal, Europe</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From €40/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Lisbon rewards the unhurried traveller — cobblestone alleys that lead nowhere and everywhere, yellow trams grinding uphill past tiled facades, and the melancholy ache of fado drifting out of a restaurant door. Europe&apos;s oldest capital is also its most affordable western city, and that combination is hard to beat.
            </p>
          </blockquote>

          {/* ── WHAT LISBON ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Lisbon Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Lisbon is one of the oldest cities in the world — older than Rome by centuries, according to legend. Built on seven hills above the Tagus estuary, it was the launching pad for the Age of Exploration: Vasco da Gama sailed from Belém in 1497 to reach India, and the wealth that followed turned the city into one of Europe&apos;s grandest capitals. The 1755 earthquake — one of the deadliest in history — flattened most of the city. What rose from it was the Pombaline Baixa: the elegant grid of limestone buildings that still forms Lisbon&apos;s centre today.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              What makes modern Lisbon extraordinary is the combination: genuine history (Alfama&apos;s Moorish street grid is 1,000 years old and still intact), world-class food at prices that make the rest of Western Europe look expensive, a fado tradition that is UNESCO-listed, and a compact walkability that makes exploring feel effortless. The hills are real — steep enough to require trams and funiculars — but they reward every climb with another panoramic viewpoint over terracotta rooftops.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Four days here is enough to see the essentials without rushing: Alfama and São Jorge Castle, Tram 28, a day trip to Sintra, Belém and Jerónimos Monastery, and enough time left for fado, Time Out Market, and sitting with a pastel de nata watching the Tagus. That&apos;s what this guide covers.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="LIS" />
              <StatCard icon="🌡️" label="Best Months" value="Apr–Jun, Sep–Oct" />
              <StatCard icon="🏛️" label="Trip Length" value="4 Days" />
              <StatCard icon="💰" label="Budget From" value="€40/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Lisbon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "18–24°C, the countryside around Sintra is green, tourist crowds are still manageable, and hotel prices have not yet spiked. Late April and May are widely regarded as Lisbon&apos;s finest weeks. The light is golden and the days are long.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sept–Oct",
                  i: "🍂",
                  t: "Autumn — Excellent",
                  d: "22–27°C, sea temperature still warm (20°C+) for Cascais swimming, summer crowds have departed, and prices fall sharply after August. October is particularly good — warm, dry, and the light on the azulejo tiles is extraordinary.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🔥",
                  t: "Summer — Hot and Crowded",
                  d: "30–36°C and very humid. Hotel prices at yearly peak, Sintra and Belém jammed with tour groups, Tram 28 a pickpocket gauntlet. Lisbon in August is not the city you read about in the guidebooks — it&apos;s a fully packaged tourist resort. Avoid if you have flexibility.",
                  b: "Not recommended",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Mar",
                  i: "🌧️",
                  t: "Winter — Quiet and Affordable",
                  d: "12–17°C, the cheapest hotel prices of the year, and Lisbon&apos;s museums and restaurants to yourself. It rains — but rarely for whole days. The city does not shut down in winter as many northern European destinations do. Great for culture-focused trips.",
                  b: "For budget travellers",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Lisbon</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Lisbon&apos;s Humberto Delgado Airport (LIS) is one of Europe&apos;s most central — just 7km from Praça do Comércio. The Metro Red Line connects the airport to downtown in 20 minutes for €1.61 (with a Viva Viagem card). It is the easiest capital airport connection in Western Europe.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "By Air — Metro Red Line from LIS (recommended)",
                  d: "Humberto Delgado Airport (LIS) is served by most major European carriers and TAP Air Portugal. The Metro Red Line runs directly from the airport to Oriente, Saldanha, and downtown Lisbon (Alameda, Rossio) — about 20 minutes, €1.61 with a Viva Viagem card loaded at airport machines. Taxis take 20–40 minutes depending on traffic (€15–25). Uber is cheaper (€10–18).",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚂",
                  t: "From Spain — Train (Madrid to Lisbon)",
                  d: "The Lusitania Comboio Hotel overnight train runs Madrid–Lisbon (approx. 9–10 hours, from €39). Daytime options require a change at Badajoz/Entroncamento. The train arrives at Oriente station — well-connected by Metro. Book via Renfe or Comboios de Portugal (cp.pt).",
                  b: "Scenic option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "From Spain — Bus (Seville, Madrid, Porto)",
                  d: "Rede Expressos and FlixBus operate multiple daily routes from Seville (approx. 4.5 hrs, from €15), Madrid (approx. 8 hrs, from €20), and Porto (approx. 3.5 hrs, from €10). Buses arrive at Sete Rios or Oriente terminal.",
                  b: "Budget option",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🇮🇳",
                  t: "From India — Direct or via Hub",
                  d: "TAP Air Portugal operates non-stop Lisbon–Mumbai (approx. 11 hrs). Air France (via Paris), Lufthansa (via Frankfurt), and Emirates (via Dubai) also serve LIS from major Indian cities. Typical fares: ₹40,000–₹90,000 return depending on season and airline. Remember Indian passport holders need a Schengen visa — apply 6–8 weeks in advance.",
                  b: "From India",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Lisbon Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The order is designed to front-load Alfama while your legs are fresh, use Day 3 for the Sintra day trip (start early — it&apos;s essential), and save Belém for a relaxed final morning. Costs are shown in both EUR and approximate USD ($1 ≈ €0.92).
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Alfama · São Jorge Castle · Fado Night"
                cost="€40–55 (~$43–60)"
                items={[
                  "Morning — Walk through Alfama, Lisbon&apos;s oldest neighbourhood — a Moorish street grid that survived the 1755 earthquake intact. Narrow zigzagging streets, laundry lines between buildings, azulejo tiles on every surface, and staircases that seem to go nowhere until they open onto a viewpoint.",
                  "10:00am — São Jorge Castle (€10 / ~$11) — Moorish hilltop fortress with sweeping views over Lisbon and the Tagus River estuary. The castle grounds take 1.5 hours to explore properly. The view from the ramparts at mid-morning is one of Lisbon&apos;s finest.",
                  "12:30pm — Miradouro das Portas do Sol (free) — one of Lisbon&apos;s most photographed viewpoints, Alfama rooftops cascading below and the Tagus glinting beyond. Grab a beer from the kiosk.",
                  "2:00pm — Lunch at a tasca (local tavern) in Alfama — bacalhau à brás (salted cod scrambled with egg and potatoes, €10–13 / ~$11–14). Walk two streets back from any main road and prices drop by a third.",
                  "4:00pm — Miradouro da Graça (free) — fewer tourists than Portas do Sol, equally stunning, with a small cafe terrace that&apos;s ideal for watching the afternoon light shift across the city.",
                  "7:30pm — Fado dinner in Alfama — traditional Portuguese fado performed live while you eat. Budget €15–25 for food; some venues add a music cover (€10). Tasca do Chico on Rua do Diário de Notícias is excellent and authentic. Book ahead.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Tram 28 · LX Factory · Time Out Market · Bairro Alto"
                cost="€30–45 (~$33–49)"
                items={[
                  "9:00am — Board Tram 28 (€3 on board, or €1.61 / ~$1.75 with Viva Viagem card) at Martim Moniz or Praça da Figueira — ride through Graça, Alfama, Baixa-Chiado, and Estrela. Stand near the driver or at the back for the best views. The tram is genuinely steep in Alfama — hold on.",
                  "11:00am — Explore Príncipe Real neighbourhood — antique shops, design boutiques, and the small Jardim do Príncipe Real with its century-old rubber trees. One of Lisbon&apos;s most pleasant neighbourhoods for aimless walking.",
                  "1:00pm — Time Out Market in Cais do Sodré (€15–20 / ~$16–22 for food) — the world&apos;s first curated food hall, with 35 of Lisbon&apos;s best chefs in one open space. Try the pastéis de bacalhau (salt cod cakes, €2), a bifana (pork sandwich, €4), and finish with a pastel de nata from one of the market&apos;s stalls.",
                  "3:30pm — LX Factory — a repurposed 19th-century industrial complex under the 25 de Abril Bridge. The Sunday market (noon–7pm) is the best version, but it&apos;s worth visiting any day. The bookshop Ler Devagar — with bicycles suspended from a cathedral ceiling — is one of the most beautiful bookshops in the world.",
                  "6:00pm — Sunset walk along the Ribeira das Naus waterfront promenade — the long esplanade along the Tagus where Vasco da Gama&apos;s fleet was once built.",
                  "8:00pm — Dinner and nightlife in Bairro Alto — Lisbon&apos;s bohemian neighbourhood, where dozens of restaurants and bars on a single block spill onto the cobblestones. Start dinner early, then bar-hop. The night ends late here.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Day Trip to Sintra — Palaces and Atlantic Views"
                cost="€35–55 (~$38–60)"
                items={[
                  "8:30am — Train from Lisbon Rossio station to Sintra (€4.50 / ~$4.90 each way, 40 minutes). Trains run every 20 minutes. Buy your Pena Palace ticket online before you leave (it sells out by 11am in spring and summer).",
                  "9:30am — Arrive Sintra village — a UNESCO World Heritage landscape of romantic palaces set on forested hills above the Atlantic. The village is small but the palaces are scattered across a wide area — take the bus from the station (€3) to reach the upper palaces.",
                  "10:00am — Pena Palace (€14 / ~$15) — the most outrageous palace in Europe. Bright yellow, red, and blue towers perched on a forested crag above the clouds on misty mornings. Originally a Hieronymite monastery, rebuilt in full Romantic fantasy style by King Ferdinand II. Allow 1.5 hours.",
                  "12:30pm — Walk down to Moorish Castle (€8 / ~$9) — 8th-century Moorish ramparts with views to the Atlantic on a clear day. The walls wind through the forest between Pena and the village.",
                  "2:00pm — Lunch in Sintra village (€12–15 / ~$13–16) — try travesseiros (puff pastry with almond and egg cream, €2 each) from Casa Piriquita, a local institution since 1862.",
                  "3:30pm — Quinta da Regaleira (€10 / ~$11, optional) — a mystical 19th-century estate with an initiation well that descends nine levels in a spiral staircase. Very Instagram-famous; very worth it.",
                  "5:30pm — Train back to Lisbon. Total Sintra day: €35–55 per person including transport and entry fees.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Belém · Jerónimos Monastery · Pastéis de Belém · Cascais"
                cost="€35–45 (~$38–49)"
                items={[
                  "9:00am — Tram 15E or Bus 714 from Praça do Comércio to Belém (30 minutes, €1.61 / ~$1.75 with Viva Viagem). Belém is 6km west of central Lisbon along the Tagus — the area from which Vasco da Gama sailed for India in 1497.",
                  "9:30am — Queue at Pastéis de Belém — the original pastel de nata bakery, in operation since 1837. The recipe is kept by three people and has never been published. Order 3–4 (€1.40 each / ~$1.55), eat them warm at the marble counter inside with cinnamon and powdered sugar. The queue moves in 10 minutes even when it looks long.",
                  "10:30am — Jerónimos Monastery (€10 / ~$11) — Portugal&apos;s finest example of Manueline Gothic architecture, built with the wealth from the India trade routes. The cloisters are extraordinary: two-tiered, carved in limestone with ropes, coral, armillary spheres, and exotic animals from the new trading empire. The tombs of Vasco da Gama and Luís de Camões are inside.",
                  "12:30pm — Belém Tower (€6 / ~$6.50) — the 16th-century fortified tower on the Tagus, UNESCO-listed. Originally built mid-river as a ceremonial gateway to Lisbon. The interior is small but the exterior and the views over the estuary are worth the entry. Arrive early as queues build quickly.",
                  "2:00pm — Lunch at a café in Belém (€8–12 / ~$9–13) — grilled fish, a bifana, or sardines on toast at one of the riverside cafes facing the water.",
                  "4:00pm — Optional: Monument to the Discoveries (€6 / ~$6.50) — a 52-metre limestone monument at the water&apos;s edge commemorating Portugal&apos;s Age of Exploration. The pavement mosaic of a world map in front of it is extraordinary.",
                  "6:00pm — Return to central Lisbon or continue to Cascais (40 minutes by train from Cais do Sodré, €2.35 / ~$2.55) for a final beach evening before departure.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Lisbon" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Lisbon Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry fees current as of early 2026. Buy tickets for Pena Palace and Jerónimos Monastery online in advance — both sell out during spring and summer.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Jerónimos Monastery",
                  e: "€10 (~$11)",
                  d: "Portugal&apos;s greatest architectural achievement — Manueline Gothic cloisters built with the wealth from Vasco da Gama&apos;s India trade route. The two-tiered cloisters carved in limestone are jaw-dropping in scale and detail. Tombs of Vasco da Gama and national poet Luís de Camões inside. UNESCO-listed. Book online to skip queues.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Pena Palace (Sintra)",
                  e: "€14 (~$15) — day trip",
                  d: "The most spectacular palace in the Iberian Peninsula. A Romantic fantasy of towers in yellow, red, and blue perched above the forest. Built in the 1840s on the ruins of a Hieronymite monastery. Views to the Atlantic on clear days. Book online — sells out by 11am in summer.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Belém Tower",
                  e: "€6 (~$6.50)",
                  d: "The 16th-century fortified tower originally built mid-river as a ceremonial gateway for ships returning from the Age of Exploration voyages. UNESCO-listed, iconic silhouette on the Tagus. Interior is compact but the nautical stonework and river views make it essential.",
                  t: "Must see · 45 mins",
                },
                {
                  n: "São Jorge Castle",
                  e: "€10 (~$11)",
                  d: "Moorish hilltop fortress rebuilt by the Portuguese after the reconquest of Lisbon in 1147. The ramparts give the best 360° panorama of Lisbon — Alfama below, the Baixa grid, the river, and the 25 de Abril Bridge. Allow 1.5 hours to explore the grounds.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Alfama Neighbourhood",
                  e: "Free",
                  d: "The oldest continuously inhabited district in Lisbon — a Moorish street grid that survived the 1755 earthquake intact. More than a sightseeing destination, Alfama is a living neighbourhood: laundry overhead, neighbours leaning from windows, cats on doorsteps. Walk it without a map.",
                  t: "Half day · Free",
                },
                {
                  n: "Time Out Market",
                  e: "Free entry (food €2–20)",
                  d: "The original curated food market concept — 35 of Lisbon&apos;s best chefs and restaurants in one converted 1882 market hall on the Tagus waterfront. Excellent for a lunch or early evening meal. Gets very busy after 1pm — arrive early.",
                  t: "Lunch / Dinner",
                },
                {
                  n: "LX Factory",
                  e: "Free (Sunday market)",
                  d: "A 19th-century industrial complex repurposed as a creative hub under the 25 de Abril Bridge. The Sunday market (noon–7pm) is Lisbon&apos;s best vintage market. The Ler Devagar bookshop inside — with bicycles suspended from the ceiling — is one of the most beautiful independent bookshops in the world.",
                  t: "Sundays best · 2 hrs",
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
            title="Lisbon — Trams, Tiles &amp; the Tagus"
            subtitle="Alfama rooftops, Belém Tower, Sintra palaces, and the blue Atlantic light."
            spots={[
              {
                name: "Alfama Yellow Tram",
                query: "lisbon alfama yellow tram 28 cobblestone street portugal",
                desc: "Tram 28 grinding through the narrow cobblestone streets of Alfama — the most iconic image of Lisbon and a legitimate commuter route since 1930.",
              },
              {
                name: "Belém Tower Tagus",
                query: "belem tower tagus river lisbon portugal sunset",
                desc: "The 16th-century Belém Tower on the Tagus — the ceremonial departure point of Vasco da Gama&apos;s voyage to India and one of Portugal&apos;s UNESCO landmarks.",
              },
              {
                name: "Pena Palace Sintra",
                query: "pena palace sintra portugal colorful towers romantic",
                desc: "The Pena Palace above the forest at Sintra — Europe&apos;s most theatrical palace, in yellow, red and blue, perched on a crag above the clouds.",
              },
              {
                name: "Jerónimos Monastery Cloisters",
                query: "jeronimos monastery cloisters lisbon belem manueline gothic portugal",
                desc: "The two-tiered Manueline cloisters of Jerónimos Monastery — Portugal&apos;s architectural masterpiece, built with the wealth from the Age of Exploration.",
              },
              {
                name: "Pastéis de Belém",
                query: "pasteis de nata belem lisbon portugal traditional pastry",
                desc: "Pastéis de nata warm from Pastéis de Belém bakery — the original recipe since 1837, eaten with cinnamon and powdered sugar at the marble counter.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Lisbon is significantly cheaper than Paris, London, or Amsterdam — the same budget goes measurably further here. A comfortable mid-range trip (good hotel, sit-down lunches, paid attractions each day) costs roughly what a budget trip costs in many other Western European capitals.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-violet-300 text-center">Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation / night", "€20–35 (~$22–38)", "€80–150 (~$87–163)", "€200–500 (~$218–544)"],
                    ["🍽️ Food / day", "€15–25 (~$16–27)", "€40–70 (~$43–76)", "€100–250 (~$109–272)"],
                    ["🚋 Transport / day", "€5–10 (~$5–11)", "€15–25 (~$16–27)", "€50–120 (~$54–130)"],
                    ["🏛️ Activities / day", "€10–20 (~$11–22)", "€20–40 (~$22–43)", "€80–200 (~$87–218)"],
                    ["TOTAL / day", "€50–90 (~$54–98)", "€155–285 (~$169–310)", "€430–1,070 (~$468–1,164)"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€40–65/day / ~$43–71)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostel dorm (€20–30/night), tascas and Time Out Market food stalls (€10–15/meal), Metro and Viva Viagem card for transport, one or two paid attractions per day. Very comfortable — Lisbon&apos;s budget infrastructure is excellent and food quality at the lower price points is high.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (€120–200/day / ~$130–218)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">3-star boutique hotel in Chiado or Bairro Alto (€80–150/night), lunch and dinner at neighbourhood restaurants, day trip to Sintra, fado dinner. This is Lisbon&apos;s sweet spot — you eat and stay well without overpaying for what you get.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Lisbon</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The four neighbourhoods below cover every budget and travel style. Alfama puts you in the most atmospheric area but requires a tolerance for hills and cobblestones. Bairro Alto and Mouraria are more central. Near Marquês de Pombal is best for business travel and easy Metro access.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Alfama — Viewpoint Hotels",
                  type: "Boutique · Most atmospheric",
                  price: "From €120–350/night",
                  badge: "Most unique",
                  desc: "Small boutique hotels built into the Alfama hillside, many with terraces overlooking the Tagus. Memmo Alfama and Santiago de Alfama are the standout properties. You&apos;re in the most historically intact neighbourhood in Lisbon — waking up to Alfama rooftops is a genuine experience.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Bairro Alto — Central and Lively",
                  type: "Mid-range to luxury · Nightlife hub",
                  price: "From €80–250/night",
                  badge: "Best location",
                  desc: "Right in the centre, walkable to Chiado, Time Out Market, and the tram network. Bairro Alto Hotel is the luxury landmark (€400+); there are several excellent 3-star boutique options at €80–130. Nights here are lively — ask for a quiet courtyard room if noise is a concern.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Mouraria — Local Character",
                  type: "Budget to mid-range · Authentic",
                  price: "From €50–150/night",
                  badge: "Best value",
                  desc: "The neighbourhood adjacent to Alfama, historically Lisbon&apos;s Moorish quarter and the birthplace of fado. Fewer tourists than Alfama or Chiado, excellent local restaurants, and genuine neighbourhood character. Good guesthouses and apartments at reasonable prices. 10 minutes walk from most sights.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Near Marquês de Pombal — Modern & Convenient",
                  type: "Business hotels · Metro-connected",
                  price: "From €60–200/night",
                  badge: "Most practical",
                  desc: "The Avenida da Liberdade area north of Baixa. Less atmospheric than Alfama or Bairro Alto but excellent Metro connections (Yellow and Blue lines), large international hotel brands at competitive rates, and a 15-minute Metro ride to anywhere. Best for short stays or late arrivals.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Lisbon</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Lisbon&apos;s food is quietly one of Europe&apos;s best-value propositions — excellent ingredients (Atlantic fish, local olive oil, regional wines) at prices well below comparable quality in Paris or Barcelona. These are the essential dishes and places to find them.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Pastéis de Belém",
                  t: "Pastéis de nata · Belém",
                  d: "The original. Pastéis de nata (custard tarts in flaky pastry, dusted with cinnamon and icing sugar) were invented here in 1837 by monks from the adjacent Jerónimos Monastery. The recipe is kept by three people. €1.40 each. Eat them warm at the marble counter inside — do not take them away in a box. The queue moves fast.",
                  b: "Non-negotiable",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Tasca do Chico",
                  t: "Fado & bacalhau · Bairro Alto",
                  d: "One of Lisbon&apos;s best small fado venues — a proper tasca (tavern) with live fado from around 9pm. The food is excellent: bacalhau com natas (salt cod baked with cream), sardines grilled in the traditional manner, and a short wine list that leans entirely Portuguese. Book a week ahead in spring and summer. €20–30 per person.",
                  b: "Best fado",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Cervejaria Ramiro",
                  t: "Seafood · Intendente",
                  d: "The benchmark seafood restaurant in Lisbon — a beer-hall-style space that has been serving giant prawns, razor clams, barnacles (percebes), and whole crab since 1956. Arrive before 12:30pm or after 2:30pm to avoid the worst queues. No reservations. €35–60 per person. Finish with a prego (steak sandwich) as the Portuguese do.",
                  b: "Best seafood",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Time Out Market Stalls",
                  t: "Everything · Cais do Sodré",
                  d: "The reliable option for any meal. Bifanas (pork sandwiches, €4), pastéis de bacalhau (salt cod cakes, €2), grilled sardines, petiscos (Portuguese tapas), excellent coffee, and regional wines — all under one roof from vendors that have earned their place through competitive selection. €10–20 for a full meal.",
                  b: "Best all-rounder",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Alfama Tascas",
                  t: "Local taverns · Alfama & Mouraria",
                  d: "The most authentic eating in Lisbon. Look for hand-written menus on chalkboards, no English signage, and plastic tablecloths. Bacalhau à brás (salted cod with egg, potato, and olive, €10–13), caldo verde (kale soup, €4), and a carafe of house wine (€5). The two-block radius around Largo do Intendente has the best concentration.",
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
            destination="Lisbon Portugal"
            hotels={[
              {
                name: "Memmo Alfama",
                type: "Boutique luxury · Alfama viewpoint terrace",
                price: "From €180/night",
                rating: "5",
                badge: "Most atmospheric",
                url: "https://www.booking.com/hotel/pt/memmo-alfama.html?aid=2820480",
              },
              {
                name: "Bairro Alto Hotel",
                type: "Luxury landmark · Chiado",
                price: "From €400/night",
                rating: "5",
                badge: "Most prestigious",
                url: "https://www.booking.com/hotel/pt/bairro-alto.html?aid=2820480",
              },
              {
                name: "Hotel do Chiado",
                type: "Boutique mid-range · Chiado",
                price: "From €120/night",
                rating: "4",
                badge: "Best location",
                url: "https://www.booking.com/hotel/pt/do-chiado.html?aid=2820480",
              },
              {
                name: "Lisbon Poets Hostel",
                type: "Boutique hostel · Baixa",
                price: "From €25/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/pt/lisbon-poets-hostel.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Lisbon Alfama Walking Tour",
                duration: "2.5 hrs",
                price: "From €20/person",
                badge: "Most popular",
                url: "https://www.getyourguide.com/s/?q=lisbon+alfama+walking+tour&partner_id=PSZA5UI",
              },
              {
                name: "Sintra Full Day Trip from Lisbon",
                duration: "Full day",
                price: "From €45/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=sintra+day+trip+lisbon&partner_id=PSZA5UI",
              },
              {
                name: "Fado Show with Dinner in Alfama",
                duration: "3 hrs",
                price: "From €50/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=lisbon+fado+show+dinner&partner_id=PSZA5UI",
              },
              {
                name: "Tagus River Sunset Cruise",
                duration: "1.5 hrs",
                price: "From €25/person",
                url: "https://www.getyourguide.com/s/?q=lisbon+tagus+river+cruise&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes Every First-Timer Makes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🚋",
                  title: "Riding Tram 28 Without Watching Your Pockets",
                  desc: "Tram 28 is extremely crowded in summer and is a well-known pickpocket location — particularly on the steep Alfama sections where standing passengers are pressed together. Keep your phone in a front pocket and your wallet in a zipped bag. The tram itself is wonderful; just board with awareness.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🏰",
                  title: "Skipping Sintra Because It Seems Too Far",
                  desc: "Sintra is 40 minutes by train from Rossio station. The UNESCO palace landscape — Pena Palace, Moorish Castle, Quinta da Regaleira in forested hills above the Atlantic — is unlike anywhere else in Western Europe. Most first-timers hear it&apos;s &quot;a bit far&quot; and skip it. That is the single biggest mistake you can make on a Lisbon trip.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🍽️",
                  title: "Eating on Rua Augusta or Near Praça do Comércio",
                  desc: "Rua Augusta is Lisbon&apos;s main pedestrian shopping street. Every restaurant on it and around Praça do Comércio serves mediocre tourist food at inflated prices. Walk two streets in either direction from any main tourist drag and prices drop 30–40% while quality improves dramatically. Alfama tascas and Mouraria backstreets are where the real food is.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🌅",
                  title: "Ignoring the Miradouros",
                  desc: "Lisbon has more than a dozen viewpoints (miradouros) that are free, uncrowded in the morning and evening, and among the most rewarding experiences in the city. Nossa Senhora do Monte, Miradouro da Graça, and Portas do Sol are all better than any paid attraction for pure visual impact. Most visitors see one and move on — see at least three.",
                  color: "bg-pink-50 border-pink-200",
                },
                {
                  icon: "📅",
                  title: "Not Booking Sintra Tickets in Advance",
                  desc: "Pena Palace tickets sell out online by early morning in spring and summer. If you show up at the gate in July without a ticket, you will be turned away. Book at least 2–3 days ahead via the official Sintra website (sintraportugal.pt). For Jerónimos Monastery, online booking saves queuing but tickets are generally available on the day.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🚶",
                  title: "Underestimating Lisbon&apos;s Hills",
                  desc: "Lisbon is built on seven hills and the climbs between neighbourhoods are genuinely steep. Alfama to Chiado or Bairro Alto to Príncipe Real will exhaust you quickly in summer heat. Use Tram 28, the Bica and Glória funiculars, the Santa Justa Lift, and the city&apos;s Metro network to navigate between elevations. Don&apos;t try to walk everything.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Lisbon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🥐",
                  title: "Pastéis de Nata Warm at the Marble Counter",
                  desc: "The queue outside Pastéis de Belém always looks alarming — it moves in about 10 minutes. Eat them at the marble counter inside, warm, with cinnamon and powdered sugar. The recipe has been kept by three people since 1837 and has never been published. Every other pastel de nata in Lisbon is trying to replicate this one.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌅",
                  title: "Nossa Senhora do Monte at Sunset",
                  desc: "Lisbon&apos;s best panoramic viewpoint is not the famous one. Nossa Senhora do Monte in Graça has the most complete panorama — Alfama rooftops, São Jorge Castle, the Tagus, the 25 de Abril Bridge. It&apos;s less known than Portas do Sol, nearly always has space to sit, and the golden hour light is extraordinary. Go 45 minutes before sunset.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🛍️",
                  title: "LX Factory Sunday Market for Lisbon&apos;s Best Vintage",
                  desc: "LX Factory is open every day but Sunday transforms it into Lisbon&apos;s finest market — vintage clothing, vinyl records, handmade jewellery, artisan food stalls, and street music. It runs noon–7pm. The Ler Devagar bookshop inside (with bikes suspended from the ceiling of a converted textile factory) is worth visiting on any day of the week.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🍒",
                  title: "Ginjinha at Ginjinha Sem Rival",
                  desc: "Ginjinha is Lisbon&apos;s sour cherry liqueur, served in a chocolate cup for €1.50 at a tiny bar near Rossio Square (Ginjinha Sem Rival, open since 1840). You drink the shot, then eat the chocolate cup. One of those micro-experiences that is uniquely Lisbon. Miss it and you&apos;ve missed a piece of the city.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "💳",
                  title: "Get a Viva Viagem Card on Arrival",
                  desc: "At the airport Metro station, buy a Viva Viagem reloadable card (€0.50) and load it with credit. Metro, trams (including Tram 28), funiculars, buses, and even the Cascais train all cost €1.61 per journey with the card — versus €3.00 on the tram without one. Load €10–15 for a 4-day trip and you&apos;re covered.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🏙️",
                  title: "Start Sintra Before 9:30am",
                  desc: "The first train from Rossio to Sintra departs around 6am. Arrive at Pena Palace by 9:30am to beat the tour groups, which arrive in waves from 10:30am. By noon the queues at both Pena and Quinta da Regaleira are long and the village is packed. An early start also means misty palace views — the single best atmospheric condition for photography.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Lisbon" />

          {/* Combine With */}
          <CombineWith currentSlug="lisbon-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Lisbon better than Porto?",
                  a: "Different cities, different energy. Lisbon is the capital — larger, grander, more cosmopolitan, with more museums, more nightlife, and more sights. Porto is smaller, more intimate, with better wine (it&apos;s right there in the Douro Valley) and arguably more photogenic architecture per square metre. Most visitors do both in one trip — Lisbon 4 days, Porto 3 days, train in between (3 hours from €15). If you can only do one and you like capital-city energy, Lisbon. If you prefer smaller and more authentic, Porto.",
                },
                {
                  q: "Can I do a Sintra day trip from Lisbon?",
                  a: "Absolutely — it&apos;s one of the best day trips in Europe. Train from Rossio station takes 40 minutes and costs €4.50 each way. Trains run every 20–30 minutes from early morning. Buy your Pena Palace tickets online before you go — they sell out in spring and summer. A full Sintra day needs at least 6–7 hours on the ground. Start before 9:30am.",
                },
                {
                  q: "What is the best time to visit Lisbon?",
                  a: "April to June and September to October. Spring has mild weather (18–24°C), low crowds compared to summer, and green countryside for the Sintra day trip. September and October have warm sea temperatures plus summer crowds have gone. July and August are hot (35°C+), very crowded, and hotel prices peak. November to February is off-peak, cooler and cheapest, but the city is still fully functioning — not a destination that shuts down in winter.",
                },
                {
                  q: "How much does 4 days in Lisbon cost?",
                  a: "Budget traveller: €40–65/day (~$43–71). This covers a hostel dorm (€20–30), local food at tascas (€15–20), tram and Metro transport, and one or two paid attractions per day. Mid-range: €120–200/day (~$130–218). Luxury: €350+/day (~$380+). Lisbon is significantly cheaper than Paris, London, or Amsterdam — the same budget goes further here than almost anywhere else in Western Europe.",
                },
                {
                  q: "Is Lisbon safe for solo travellers?",
                  a: "Lisbon is one of the safest capitals in Europe and consistently ranks in the top 10 safest cities in the world. Solo female travellers report feeling comfortable day and night. Standard urban precautions apply — watch your pockets on Tram 28 and in crowded Alfama alleyways. The nightlife areas (Bairro Alto, Cais do Sodré) are lively until 4am but not dangerous. Keep a firm grip on phones at viewpoints.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto px-0 mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Lisbon trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-lisbon", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/lisbon-budget-guide", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/sintra-day-trip-from-lisbon", label: "Sintra day trip", icon: "🏰" },
                { href: "/blog/lisbon-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="lisbon-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Porto in 3 Days — Wine, Bridges &amp; Azulejos", href: "/blog/porto-3-days" },
                { label: "Madrid in 3 Days — Prado, Tapas &amp; Nightlife", href: "/blog/madrid-3-days" },
                { label: "Barcelona in 4 Days — Gaudí &amp; the Gothic Quarter", href: "/blog/barcelona-4-days" },
                { label: "Algarve in 4 Days — Beaches &amp; Sea Caves", href: "/blog/algarve-4-days" },
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
