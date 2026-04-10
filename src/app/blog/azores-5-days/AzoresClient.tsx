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

// ── Table of Contents ─────────────────────────────────────────────────────────
const AZORES_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What the Azores Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "5-Day Itinerary" },
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
          href: `mailto:?subject=Azores 5-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Azores in 5 Days — calderas, whale watching and hydrangea roads&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/azores-5-days"
        imageUrl="https://images.unsplash.com/photo-1548684847-bb18d8d4cf4d?w=1200&q=80"
        description="Azores in 5 Days: Sete Cidades twin lakes, Furnas thermal pools, whale watching, and hydrangea roads — complete Sao Miguel travel guide with budget breakdown."
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
export default function AzoresClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={AZORES_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Azores" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="azores sete cidades twin lakes sao miguel portugal"
            fallback="https://images.unsplash.com/photo-1548684847-bb18d8d4cf4d?w=1600&q=80"
            alt="Azores Sete Cidades twin lakes in volcanic caldera on Sao Miguel island, Portugal"
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
              <span className="text-white/70">Azores 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-blue-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Europe&apos;s Secret Islands
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Azores in 5 Days:
                <em className="italic text-blue-300"> Calderas, Whale Watching &amp; Hydrangea Roads</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Nine volcanic islands in the Atlantic where twin caldera lakes glow blue and green, geysers bubble in a village square, and sperm whales surface 3km offshore. The complete 5-day Sao Miguel guide.
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
              <span>🇵🇹 Azores, Portugal</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From €50/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-blue-500 pl-6 mb-10 bg-blue-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Azores are Europe&apos;s best-kept secret — nine volcanic islands in the middle of the Atlantic where calderas hold twin lakes of different colours, geysers bubble in a village square, blue hydrangeas line every road, and sperm whales surface 3km offshore.
            </p>
          </blockquote>

          {/* ── WHAT THE AZORES ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What the Azores Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Azores are a Portuguese archipelago of nine volcanic islands sitting in the middle of the North Atlantic, roughly 1,500km west of Lisbon and 3,900km east of New York. They sit directly on the Mid-Atlantic Ridge — the boundary between the North American and Eurasian tectonic plates — which is why the islands are geologically young, geothermally active, and spectacularly dramatic.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Sao Miguel is the largest island and the one where most visitors spend their time. The island is 65km long and 16km wide, with six volcanic craters, three of which hold lakes. Sete Cidades in the west has two side-by-side caldera lakes of different colours — Lagoa Azul (blue) and Lagoa Verde (green) — separated only by a bridge. Furnas in the east is the most geothermally active village in Europe, where the ground bubbles and steams in the village square and a traditional stew is cooked underground in volcanic soil for eight hours. Lagoa do Fogo in the centre is the most pristine — a protected crater lake accessible only on foot, ringed by untouched caldera walls.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The Atlantic around the Azores is one of the best whale watching locations on earth. The deep-water channel between islands is a permanent feeding ground for sperm whales — the largest toothed predators on the planet — and the sighting rates from May to October exceed 95%. Blue hydrangeas line virtually every road from June to August. The food is outstanding: grilled limpets, volcanic-cooked stew, Atlantic tuna, and Azorean cheese that has no equivalent anywhere else in Europe.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Main Airport" value="PDL" />
              <StatCard icon="🌡️" label="Best Months" value="May–Oct" />
              <StatCard icon="🌋" label="Volcanic Lakes" value="6 craters" />
              <StatCard icon="💰" label="Budget From" value="€50/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit the Azores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–Oct",
                  i: "☀️",
                  t: "Summer — Best Season",
                  d: "18–25°C, lowest rainfall, whale watching peak season (95%+ sperm whale sightings), hydrangeas in full bloom June–August. May and September are the sweet spot — warm, less crowded, and the landscape at its most colourful. Peak tourist season is July–August.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Oct–Nov",
                  i: "🍂",
                  t: "Autumn — Quieter & Still Mild",
                  d: "16–20°C, increasing rainfall, fewer tourists and noticeably lower prices. Whale watching still excellent in October. The caldera landscapes gain atmospheric mist. Some viewpoints are cloud-covered more frequently but the island has a raw, moody beauty.",
                  b: "Good value",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Dec–Feb",
                  i: "🌧️",
                  t: "Winter — Mild but Wet",
                  d: "14–17°C with the most rainfall. The Azores never get cold — snow is exceptionally rare even in winter — but the weather is changeable and some whale watching tours reduce frequency. Prices are at their lowest. A good option for travellers who do not need guaranteed sunshine.",
                  b: "Budget travel",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Mar–Apr",
                  i: "🌸",
                  t: "Spring — Green & Less Busy",
                  d: "15–19°C, the island turning intensely green, azaleas and camellias in bloom before the hydrangeas. Whale watching season begins picking up in April. Fewer tourists than summer and lower prices. Occasional rain showers but generally very pleasant.",
                  b: "Hidden gem timing",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to the Azores</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-blue-800 font-light">
                <strong className="font-medium">Key detail:</strong> The main gateway is <strong className="font-medium">Ponta Delgada Airport (PDL)</strong> on Sao Miguel island. It has direct flights from Lisbon (1h45m), Porto, London Gatwick, and several other European cities. Inter-island travel uses SATA Air Azores (small propeller planes, 20–45 mins between islands).
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "From Lisbon (recommended gateway)",
                  d: "Lisbon (LIS) → Ponta Delgada (PDL): approximately 2 hours, operated by TAP Air Portugal and SATA. Flights run multiple times daily. Fares from €40–€100 one-way (book 6–8 weeks ahead for the best prices). Lisbon is the best connection point from most of Europe, India, and North America.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "From London Gatwick",
                  d: "London Gatwick (LGW) → PDL: approximately 2 hours 45 minutes, operated by SATA and Ryanair seasonally. Direct flights mostly May–October. Outside peak season, connecting via Lisbon is the reliable year-round option. Fares from £80–£180 one-way.",
                  b: "Direct in season",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🌍",
                  t: "From India (via Lisbon)",
                  d: "Mumbai (BOM) or Delhi (DEL) → Lisbon (LIS): approximately 9–10 hours, operated by TAP Air Portugal (direct from Lisbon) and Air India. From Lisbon, connect onward to PDL (1h45m). Total journey time from India: approximately 13–15 hours including layover. Book TAP through-tickets for simpler baggage handling.",
                  b: "India route",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚢",
                  t: "Inter-island ferry",
                  d: "Atlantic Line operates passenger ferries between the central group islands (Faial, Pico, Sao Jorge, Graciosa, Terceira) in summer — roughly 2–4 hours between islands. No ferry service connects Sao Miguel to the other islands year-round. For multi-island trips, SATA inter-island flights are the reliable option.",
                  b: "Summer only",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Azores Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary focuses on Sao Miguel — the largest island and the best base for a 5-day trip. A hire car (€30–40/day) is essential: the main sights are spread across the island and public transport is limited outside Ponta Delgada city. Each day card is expandable.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Ponta Delgada Arrival — Waterfront, Portas da Cidade & First Dinner"
                cost="€30–40 (taxi, garden entry, dinner)"
                items={[
                  "Arrive Ponta Delgada Airport (PDL); take a taxi to the city centre (€8–10) or walk 20 minutes along the coast road. Check in to your accommodation in the old town — budget hostels from €20–35/night, boutique hotels in converted Azorean manor houses from €70–120/night.",
                  "Walk the Ponta Delgada waterfront to the Portas da Cidade — the iconic black and white basalt fortress gates that are the symbol of Sao Miguel. The geometric basalt cobblestone patterns on the Largo de Goncalo Velho square are some of the most photographed in the Azores. Free.",
                  "Jardim Jose do Canto botanical garden (€1.50) — lush with azaleas, hydrangeas, Japanese cedars, and some of the oldest camellia trees in Portugal. A calm, beautiful introduction to the Azorean landscape before the volcanic terrain begins.",
                  "Evening walk along the marina to see the castle silhouette at dusk. The Azores are exceptionally safe — the waterfront at night is relaxed and pleasant.",
                  "Dinner at a tasca (small local restaurant) in the old town: caldeirada de peixe (Atlantic fish stew), local bread, and a glass of Verdelho wine from Pico island (€12–16). The best tascas are on the side streets off Rua do Aljube.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Sete Cidades Twin Lakes — Vista do Rei, Caldera Village & Mosteiros"
                cost="€40–55 (car hire, kayak, picnic, fuel)"
                items={[
                  "Rent a car (€30–40/day — essential for the Azores) and drive west to Sete Cidades on the EN5-1A mountain road — 45 minutes from Ponta Delgada. Arrive early: the caldera fills with cloud by mid-morning and you want the view before it closes in.",
                  "Vista do Rei viewpoint above Sete Cidades caldera — the twin lakes (Lagoa Azul and Lagoa Verde) glow blue and green in different light conditions due to different depths and algae content. The legend says a king&apos;s daughter and a shepherd fell in love here — their tears became the two lakes. Completely free viewpoint.",
                  "Drive down into the caldera village of Sete Cidades — a community of roughly 800 people living inside a dormant volcano. The village church, black basalt streets, and the surreal feeling of being inside a 5km-wide caldera are all remarkable. Rent a kayak on Lagoa Azul (€10/hour) for the most unusual paddling experience in Europe.",
                  "Picnic lunch at the lake shore with supplies from Ponta Delgada market: queijadas (sweet pastry) €0.80 each, local cheese, bread, and a carton of Azorean passion fruit juice.",
                  "Afternoon drive to Mosteiros village on the northwest coast — black volcanic rock pools naturally formed in the Atlantic for swimming (free). The contrast of the dark volcanic rock, bright Atlantic surf, and the blue caldera visible behind you is dramatic and very photogenic.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Furnas Thermal Valley — Terra Nostra, Cozido das Furnas & Lagoa das Furnas"
                cost="€35–50 (car, park, cozido lunch)"
                items={[
                  "Drive east to Furnas village (45 minutes from Ponta Delgada) — the most geothermally active village in Europe. Park near the main square and walk to the calderas.",
                  "Furnas calderas in the village square — completely free to see. Dozens of geothermal pools bubble and hiss at 100°C; the sulphur smell is strong but not unpleasant. Vendors sell eggs hard-boiled in volcanic steam for €1.50 — the yolk has a subtle mineral richness from the steam. This is genuinely one of the most extraordinary natural spectacles in Europe.",
                  "Terra Nostra Park (€5.50) — a stunning 19th-century botanical garden built around a thermal pool. The iron-rich pool (33°C) is included in the entry fee and open for swimming. Important: the orange thermal water permanently stains light-coloured swimwear. Wear an old dark swimsuit. The botanical collection of cycads, ginkgos, and tree ferns is outstanding.",
                  "Cozido das Furnas lunch (reservation required) at Restaurante Tony or Caldeiras e Vulcoes (€14–22/pp including bread and wine). The stew is slow-cooked underground in volcanic soil for 8 hours — vegetables, beef, pork, sausages, blood pudding. The flavours absorbed from the mineral-rich volcanic water are genuinely extraordinary and unlike any other slow-cooked dish.",
                  "Walk to Lagoa das Furnas — the lake inside the Furnas caldera — with steaming vents on the lake shore, dense fern forest, and near-complete silence. The footpath around part of the lake takes 45 minutes and is flat. Stay until late afternoon when the mist begins to rise from the vents.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Whale Watching & Nordeste Cliffs — Hydrangea Roads & Miradouro da Madrugada"
                cost="€60–75 (whale watching, fuel, lunch)"
                items={[
                  "08:00 — Whale watching boat trip from Ponta Delgada harbour (€55/person, book 1–2 days ahead). The Azores is the best whale watching destination in Europe and among the top five worldwide. Sperm whales are present year-round; May–October sighting rates exceed 95%. Trips last 3–4 hours. Choose a company with a marine biologist on board and a rigid inflatable boat (faster, more flexible than larger vessels).",
                  "After whale watching, drive the scenic EN1-1A northeast coast road through Nordeste — the greenest and least-visited part of Sao Miguel. Hydrangea-lined roads (June–August), cedar forests, clifftop viewpoints above Atlantic sea stacks, and almost no tourists. This drive takes 2 hours with stops and is one of the most beautiful roads in Portugal.",
                  "Lunch in Nordeste village: grilled limpets (lapas grelhadas) with butter and garlic — the definitive Azorean starter — followed by the fish of the day and local beer (€12–18). Lapas are always available at local restaurants on Sao Miguel and are best ordered here in the northeast where the restaurants are simplest and freshest.",
                  "Miradouro da Madrugada viewpoint on the northeast tip of Sao Miguel — a dramatic clifftop with 270-degree Atlantic views. The view is often partially in cloud (check conditions before driving up) but when clear, the sea stack geology and the scale of the Atlantic are stunning.",
                  "Return to Ponta Delgada via the south coast (EN1-1A); stop at the covered market (Mercado da Graca) for tea, passion fruit liqueur, and local cheese.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Lagoa do Fogo Hike, Gorreana Tea Plantation & Departure"
                cost="€30–45 (hike supplies, tea, fuel, lunch, airport)"
                items={[
                  "07:30 — Drive to Lagoa do Fogo trailhead (30 minutes from Ponta Delgada). Hike the 6km roundtrip trail descending 300m to the crater lake — start no later than 7:30am to reach the lake before the morning cloud rolls in from the Atlantic. The lake is inside a protected nature reserve with no development; the turquoise-green water surrounded by pristine caldera walls is unlike anything else in Europe. Bring water and a light jacket.",
                  "10:30 — Return hike and drive north to Gorreana tea plantation (free entry, free tasting) — the only working tea plantation in Europe, producing organic green and black teas since 1883 on a misty Atlantic hillside. The shop sells fresh teas at €4–8 per box — far cheaper than airport shops. Walk between the waist-high tea rows before tour groups arrive.",
                  "Lunch stop in Ribeira Grande on the north coast — a beautiful town with traditional black and white Azorean church facades. Local bakery for fresh pasteis de nata and a bifana (pork roll) before the drive back.",
                  "Final lunch in Ponta Delgada old town: alheira (smoked sausage), local potatoes, and queijadas for dessert (€10–14). Browse the covered market for last-minute gifts: Azorean volcanic soil wine, passion fruit jam, and artisanal queijadas.",
                  "Return hire car; check in at PDL Airport for flights to Lisbon (1h45m) and onward connections.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Azores" onPlanTrip={() => setModalOpen(true)} />

          {/* ── NATURAL WONDERS GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌋 Natural Wonders of Sao Miguel</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The main natural sites in order of priority. Entry fees as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Sete Cidades Caldera",
                  e: "Free (Vista do Rei viewpoint) / €10/hr (kayak)",
                  d: "The twin caldera lakes — Lagoa Azul and Lagoa Verde — inside a 5km-wide dormant volcano. The most iconic image of the Azores. Vista do Rei viewpoint above the caldera is free and the most photographed location in Portugal after Lisbon. Best visited at dawn before cloud fills the caldera.",
                  t: "Must see · 3–4 hrs",
                },
                {
                  n: "Furnas Calderas & Terra Nostra Park",
                  e: "Free (calderas) / €5.50 (Terra Nostra Park)",
                  d: "The geothermally active village of Furnas, with boiling mud pools in the village square and Europe&apos;s most unusual thermal swimming pool. Terra Nostra&apos;s 19th-century botanical garden around the orange iron-rich pool is extraordinary. Combined with cozido das Furnas lunch, this is the richest single day in the Azores.",
                  t: "Must see · Full day",
                },
                {
                  n: "Lagoa do Fogo",
                  e: "Free",
                  d: "The most pristine and protected crater lake on Sao Miguel — inside a nature reserve accessible only on foot via a 6km roundtrip trail (300m descent). The turquoise caldera lake surrounded by untouched volcanic walls is the most beautiful natural sight on the island. Early morning only for clear views.",
                  t: "Hike · 3–4 hrs",
                },
                {
                  n: "Caldeira Velha Thermal Waterfall",
                  e: "€5",
                  d: "A warm waterfall (35°C) inside a mossy fern gorge — visitors swim in the pools under the falls. One of the most beautiful and least-visited thermal experiences on Sao Miguel. Located on the northern slope of Lagoa do Fogo — combine both in one morning.",
                  t: "Hidden gem · 1.5 hrs",
                },
                {
                  n: "Gorreana Tea Plantation",
                  e: "Free",
                  d: "The only working tea plantation in Europe — organic green and black teas grown on volcanic Atlantic hillside since 1883. Free entry, free tasting, excellent shop. The misty tea rows in the morning are beautiful and the teas are genuinely outstanding. Best before 10am.",
                  t: "Unique · 1 hr",
                },
                {
                  n: "Mosteiros Black Rock Pools",
                  e: "Free",
                  d: "Naturally formed volcanic rock pools on the northwest coast of Sao Miguel, open to the Atlantic swell. Best for swimming in calm conditions (summer). The dark basalt rock against the blue Atlantic is extremely photogenic. Combine with Sete Cidades on the same day.",
                  t: "Swimming · 1 hr",
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
            title="Azores — Calderas, Hydrangeas &amp; the Atlantic"
            subtitle="Sao Miguel&apos;s extraordinary volcanic and oceanic landscape."
            spots={[
              {
                name: "Sete Cidades Twin Lakes",
                query: "sete cidades twin lakes caldera azores sao miguel portugal aerial",
                desc: "Lagoa Azul and Lagoa Verde inside the Sete Cidades caldera — the most iconic image in the Azores.",
              },
              {
                name: "Furnas Thermal Pools",
                query: "furnas calderas geothermal pools azores sao miguel bubbling",
                desc: "The boiling geothermal pools of Furnas village — the most geothermally active spot in Europe.",
              },
              {
                name: "Azores Blue Hydrangea Roads",
                query: "azores blue hydrangea roads sao miguel portugal summer",
                desc: "Electric-blue hydrangeas lining the roads of Sao Miguel — peak bloom from June to August.",
              },
              {
                name: "Lagoa do Fogo Crater Lake",
                query: "lagoa do fogo crater lake azores sao miguel turquoise",
                desc: "The pristine Lagoa do Fogo — the most protected crater lake on Sao Miguel, accessible only on foot.",
              },
              {
                name: "Whale Watching Azores",
                query: "sperm whale azores atlantic ocean sao miguel whale watching",
                desc: "Sperm whale surfacing in the deep Atlantic channel around the Azores — the best whale watching in Europe.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The Azores offer excellent value for Western Europe — €50/day is entirely achievable on a budget. The main additional cost is the hire car (non-negotiable) and whale watching (worth every euro). All prices in EUR.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation", "€20–35", "€70–120", "€200–400"],
                    ["🍽 Food & drink", "€12–22", "€30–50", "€80–160"],
                    ["🚗 Car hire + fuel", "€30–40", "€35–45", "€80–250"],
                    ["🐋 Activities", "€5–20", "€25–55", "€100–250"],
                    ["Total per day", "€50–70", "€110–160", "€280–450+"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€50–70/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in hostels or budget guesthouses (€20–35/night), eat at tascas and local restaurants (€12–22/day), hire a car and split costs with a travel partner. Whale watching at €55 is a one-time splurge. The Azores&apos; natural sights are mostly free — calderas, viewpoints, and hiking trails cost nothing.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-1">✨ Mid-Range (€110–160/day)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">Boutique hotels in converted Azorean manor houses (€70–120/night), dinner at mid-range seafood restaurants (€30–40/pp with wine), hire car with unlimited mileage, guided hike at Sete Cidades or Lagoa do Fogo. This is the sweet spot for the Azores — excellent quality without the luxury price tag.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in the Azores</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Ponta Delgada is the best base for a 5-day Sao Miguel trip — centrally located, with the best restaurants and the main airport. Terra Nostra Garden Hotel in Furnas is the most unique option: you wake up inside the volcanic valley and have direct access to the thermal park.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Terra Nostra Garden Hotel",
                  type: "Heritage · Thermal garden access · Furnas village",
                  price: "From €120/night",
                  badge: "Most unique",
                  desc: "The most atmospheric place to stay in the Azores — a 19th-century heritage hotel in Furnas village with direct access to Terra Nostra Park and its famous thermal pool (included for guests). Waking up in the Furnas caldera, hearing the geysers steam in the early morning, and having the thermal pool almost to yourself before day visitors arrive is extraordinary. Book well ahead in summer.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "The Lince Azores Great Lake Hotel",
                  type: "Luxury · Sete Cidades caldera views",
                  price: "From €160/night",
                  badge: "Best views",
                  desc: "Perched above the Sete Cidades caldera with panoramic views across the twin lakes — the kind of hotel where you wake up to mist rising off Lagoa Azul from your balcony. Modern luxury in a spectacular volcanic setting, with an outdoor pool, spa, and access to the best walking trails above the caldera. The most dramatic location of any hotel on Sao Miguel.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Hostel Natureza",
                  type: "Hostel · Ponta Delgada old town",
                  price: "From €22/night",
                  badge: "Best budget",
                  desc: "Well-reviewed budget hostel in Ponta Delgada with clean dorms, private rooms, and a social common area — the standard base for solo travellers and backpackers doing the Azores on a budget. Central location within walking distance of the waterfront, covered market, and old town restaurants. Bike hire and car hire can be arranged from the hostel desk.",
                  color: "border-green-200 bg-green-50",
                },
                {
                  name: "Ponta Delgada Boutique Solares",
                  type: "Boutique · Historic manor houses · Old town",
                  price: "From €70/night",
                  badge: "Best atmosphere",
                  desc: "Converted Azorean manor houses (solares) in the old town offer the best combination of location, character, and value. The black basalt architecture, azulejo tile details, and interior courtyards with hydrangeas make them far more interesting than chain hotels. Best booked directly or through Booking.com for the widest selection.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in the Azores</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Azorean food is Atlantic in character — the best of everything comes directly from the sea or the volcanic land. The standout dishes are cozido das Furnas (volcanic stew), lapas grelhadas (grilled limpets), alcatra (beef stewed in wine), and Azorean cheese with a richness unmatched in continental Portugal.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Tony&apos;s Bar — Furnas",
                  t: "Furnas village · Reservation required",
                  d: "The most reliable place for cozido das Furnas — the volcanic-cooked stew that is the defining dish of the Azores. The pots are buried in volcanic soil at the calderas overnight and collected at 12:30pm. Tony&apos;s has been serving this to visitors for decades: the mixed stew of beef, pork, blood sausage, chouriço, cabbage, potatoes, and chickpeas with mineral-infused broth is unlike anything cooked above ground. €14–19/pp including bread and house wine. Reserve in advance — walk-ins are regularly turned away, especially at weekends.",
                  b: "Reserve ahead",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Restaurante Rotas da Ilha Verde",
                  t: "Ponta Delgada · Modern Azorean cuisine",
                  d: "The best mid-range restaurant in Ponta Delgada for modern Azorean cooking — lapas grelhadas (grilled limpets with butter and garlic, €7), caldeirada de peixe (Atlantic fish stew with seasonal catch, €14–16), and alcatra (Azorean slow-braised beef, €15). The dining room is relaxed and unpretentious, with a good local wine list featuring Verdelho do Pico and Graciosa whites. Mains €12–18. Book ahead on weekends.",
                  b: "Best all-rounder",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "A Tasca",
                  t: "Ponta Delgada old town · Traditional tasca",
                  d: "The kind of neighbourhood restaurant that visitors search for and rarely find: a proper Azorean tasca in the old town, run by a local family, with a handwritten menu that changes daily based on the catch and what the market had that morning. Espadas (scabbard fish), grilled Atlantic tuna, alheira sausage, and queijadas for dessert. Mains €9–13 with bread and wine included in the price. Tiny — book or arrive before 7:30pm.",
                  b: "Most local",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Lapas Grelhadas — Order Everywhere",
                  t: "Every seafood restaurant · Sao Miguel",
                  d: "Grilled limpets (lapas grelhadas) — small shellfish sizzled in butter, garlic, and lemon on the half-shell — are the definitive Azorean starter at €6–8 a plate. Available at virtually every restaurant on the island. The Azores limpets are larger, sweeter, and more intensely flavoured than anywhere else in Portugal. Always order them as a first course, always.",
                  b: "Order every meal",
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
            destination="Azores Sao Miguel"
            hotels={[
              {
                name: "Terra Nostra Garden Hotel",
                type: "Heritage · Thermal garden access · Furnas village",
                price: "From €120/night",
                rating: "5",
                badge: "Most unique",
                url: "https://www.booking.com/hotel/pt/terra-nostra-garden.html?aid=2820480",
              },
              {
                name: "The Lince Azores Great Lake Hotel",
                type: "Luxury · Sete Cidades caldera views",
                price: "From €160/night",
                rating: "5",
                badge: "Best views",
                url: "https://www.booking.com/searchresults.html?ss=The+Lince+Azores+Great+Lake+Hotel&aid=2820480",
              },
              {
                name: "Hostel Natureza",
                type: "Hostel · Ponta Delgada old town",
                price: "From €22/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/searchresults.html?ss=Hostel+Natureza+Ponta+Delgada&aid=2820480",
              },
              {
                name: "Azorean Boutique Solares",
                type: "Boutique · Historic manors · Old town",
                price: "From €70/night",
                rating: "4",
                badge: "Best atmosphere",
                url: "https://www.booking.com/searchresults.html?ss=Ponta+Delgada+boutique+hotel&aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Azores Whale Watching — Sao Miguel",
                duration: "3–4 hrs",
                price: "From €55/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=Azores+whale+watching&partner_id=PSZA5UI",
              },
              {
                name: "Sete Cidades Caldera Guided Hike",
                duration: "4 hrs",
                price: "From €35/person",
                badge: "Top rated",
                url: "https://www.getyourguide.com/s/?q=Sete+Cidades+hike&partner_id=PSZA5UI",
              },
              {
                name: "Furnas Thermal Valley Tour",
                duration: "5 hrs",
                price: "From €40/person",
                url: "https://www.getyourguide.com/s/?q=Furnas+thermal+tour&partner_id=PSZA5UI",
              },
              {
                name: "Azores Island Jeep Safari",
                duration: "Full day",
                price: "From €60/person",
                url: "https://www.getyourguide.com/s/?q=Azores+jeep+safari&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in the Azores</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🚗",
                  title: "Not booking a hire car before arriving",
                  desc: "The Azores has almost no useful public transport outside Ponta Delgada city. Sete Cidades, Furnas, Lagoa do Fogo, the tea plantation, Nordeste, and Mosteiros are all inaccessible without a car. Hire car supply tightens significantly in peak season (July–September) — book at least 4 weeks ahead. Without a car you will spend your trip on expensive taxis and miss the best of the island.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "☁️",
                  title: "Giving up after one cloudy viewpoint attempt",
                  desc: "The Azores has highly variable weather — viewpoints like Vista do Rei above Sete Cidades can be completely cloud-covered at 9am and clear by 3pm on the same day. Always attempt viewpoints at different times. Many travellers see Sete Cidades twice and get completely different experiences. The cloud itself is part of the Azorean character — dramatic rolling mist over a caldera is not a bad experience.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🐋",
                  title: "Booking whale watching for day 1",
                  desc: "Book whale watching for day 3 or 4 — not day 1. Weather cancellations do happen (usually refunded or rescheduled, but you need the flexibility). May to October gives the best sighting rates. The resident sperm whale population is year-round but dolphin variety and blue whale sightings peak June–August.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🍲",
                  title: "Missing cozido das Furnas without a reservation",
                  desc: "The volcanic-cooked stew at Furnas is served at a handful of restaurants and requires a reservation — especially for lunch (the pots come out of the ground around 12:30pm). Restaurante Tony and Caldeiras e Vulcoes are the two best. Walk-ins are consistently turned away at weekends and in summer. Book before you leave home.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "👙",
                  title: "Wearing a good swimsuit to Terra Nostra thermal pool",
                  desc: "The iron-rich thermal pool at Terra Nostra Park permanently stains light-coloured swimwear orange. Wear an old dark swimsuit or buy a cheap one in Ponta Delgada beforehand. The orange water itself is completely safe — high in iron and minerals, and the 33°C temperature is deeply pleasant. Every year visitors ruin their favourite swimwear by ignoring this warning.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} color={m.color} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for the Azores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌺",
                  title: "Drive the hydrangea roads in June and July",
                  desc: "The Azores hydrangea season peaks June to August when electric-blue hydrangeas line every road on Sao Miguel. The most spectacular drives are the EN1-1A mountain road through the centre and any road in the northeast Nordeste area. Book activities at https://www.getyourguide.com/s/?q=Azores&partner_id=PSZA5UI",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🌋",
                  title: "Attempt Lagoa do Fogo before 9am",
                  desc: "Lagoa do Fogo sits at 600m inside a nature reserve and clouds roll in by mid-morning. Start the trail no later than 7:30am for the best chance of a clear lake. The 3km descent takes 1.5 hours each way and is well-marked — bring water and a light waterproof layer for the return climb.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🫖",
                  title: "Visit Gorreana tea plantation early morning",
                  desc: "Gorreana is the only working tea plantation in Europe and entry is free. The shop sells fresh-picked organic green and black teas at €4–8 per box — far cheaper and fresher than airport shops. Arrive before 10am to see the morning mist over the tea rows before tour groups arrive.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🐟",
                  title: "Order lapas grelhadas as a starter everywhere",
                  desc: "Grilled limpets (lapas grelhadas) — shellfish grilled with butter, garlic, and lemon — are the definitive Azorean appetiser at €6–8. Available at virtually every seafood restaurant. The Azores limpets are larger and sweeter than anywhere else in Portugal. Always order them.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🌤",
                  title: "Check the weather app for each specific viewpoint",
                  desc: "Weather in the Azores varies dramatically across the island at the same moment — it can be raining at Sete Cidades and sunny in Furnas, both 45 minutes apart. Use Windy.com or the IPMA Azores weather app to check conditions by location before committing to a drive. Plan your daily route around which viewpoints have the best forecast.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "💳",
                  title: "Cards accepted everywhere, but carry some cash for tascas",
                  desc: "Ponta Delgada and the main tourist restaurants are fully card-accepting. Small tascas in rural villages, market vendors, and some viewpoint stalls are cash only. Bring €50–100 in cash for the trip. ATMs are available in all towns and at Ponta Delgada airport.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Azores" />

          {/* Combine With */}
          <CombineWith currentSlug="azores-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Which Azores island should I visit first?",
                  a: "Sao Miguel is the best first Azores island — it is the largest, has the main international airport (PDL), and concentrates the most famous experiences: Sete Cidades, Furnas, Lagoa do Fogo, whale watching, and the tea plantation. Faial and Pico are spectacular for the Pico volcano hike and wine culture. For a multi-island trip of 10+ days, combine Sao Miguel with Faial and Pico, which are served by inter-island SATA flights.",
                },
                {
                  q: "Is whale watching in the Azores worth it?",
                  a: "Yes — the Azores is the best whale watching destination in Europe and among the top five in the world. Sperm whales are resident year-round in the deep Atlantic channel between islands. The 95%+ sighting rate from May to October is exceptional. Trips last 3–4 hours, cost €50–60, and usually encounter multiple species including common dolphins, bottlenose dolphins, and occasionally blue or fin whales.",
                },
                {
                  q: "Do I need a hire car in the Azores?",
                  a: "Yes, a hire car is essential for exploring Sao Miguel. Ponta Delgada city is walkable but Sete Cidades, Furnas, Lagoa do Fogo, the Nordeste coast, Gorreana tea plantation, and Caldeira Velha are all only accessible by car. Hire car rates start at €30–40/day and roads are well-maintained and signed. Book in advance during summer (June–September) as supply tightens significantly.",
                },
                {
                  q: "What is the weather like in the Azores?",
                  a: "The Azores has a mild oceanic climate with average temperatures of 16–25°C year-round, making any month viable. The weather changes rapidly — sunshine, rain, cloud, and mist can all occur within the same hour on the same hillside. May through September are the driest months. October through March has more rainfall but fewer tourists and lower prices. Always carry a light waterproof and check viewpoint conditions before driving up in the morning.",
                },
                {
                  q: "Do Indian passport holders need a visa for the Azores?",
                  a: "Yes — Indian passport holders require a Schengen Visa (Type C) to enter Portugal and the Azores. The fee is €80 and processing takes 15–30 business days. Apply at the Portuguese Consulate or VFS Global, and submit 6–8 weeks before travel. Required documents include hotel bookings, return flights, 3-month bank statements, and travel insurance. US, UK, EU, and Australian passport holders are visa-free.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Azores trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/azores-best-time-to-visit", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/azores-budget-guide", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/azores-whale-watching", label: "Whale watching guide", icon: "🐋" },
                { href: "/blog/azores-island-hopping", label: "Island hopping tips", icon: "🏝️" },
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
          <RelatedGuides currentSlug="azores-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Island Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Madeira in 5 Days — Levadas &amp; Volcanic Peaks", href: "/blog/madeira-5-days" },
                { label: "Lisbon in 4 Days — Complete City Guide", href: "/blog/lisbon-4-days" },
                { label: "Iceland in 7 Days — Ring Road &amp; Northern Lights", href: "/blog/iceland-7-days" },
                { label: "Cyprus in 5 Days — Beaches &amp; Antiquities", href: "/blog/cyprus-5-days" },
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
