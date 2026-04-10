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
const GALAPAGOS_TOC = [
  { id: "honest",    emoji: "⚡",  label: "What the Galápagos Actually Is" },
  { id: "season",    emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",emoji: "✈️",  label: "Getting There" },
  { id: "itinerary", emoji: "📅",  label: "7-Day Itinerary" },
  { id: "landmarks", emoji: "🦎",  label: "Landmark Guide" },
  { id: "budget",    emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",      emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",       emoji: "🍽️", label: "Where to Eat" },
  { id: "mistakes",  emoji: "❌",  label: "Mistakes to Avoid" },
  { id: "tips",      emoji: "💡",  label: "Pro Tips" },
  { id: "faq",       emoji: "❓",  label: "FAQ" },
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
        className="h-full bg-teal transition-all duration-100"
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
          href: `mailto:?subject=Galápagos 7-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Galápagos in 7 Days — sea lions, tortoises, penguins on the equator&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/galapagos-7-days"
        imageUrl="https://images.unsplash.com/photo-1544979590-37e9b47eb705?w=1200&q=80"
        description="Galápagos Islands in 7 Days: sea lions, giant tortoises, blue-footed boobies, penguins on the equator — complete travel guide from budget island-hop to luxury live-aboard."
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
          <span className="font-serif text-xl text-teal font-light">{day}</span>
          <span className="text-sm text-ink font-medium">{title}</span>
        </div>
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-teal mt-1 flex-shrink-0 text-xs">●</span>
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
        <span className={`text-teal text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
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
export default function GalapagosClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={GALAPAGOS_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Galápagos Islands" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="galapagos islands giant tortoise sea lion iguana ecuador wildlife"
            fallback="https://images.unsplash.com/photo-1544979590-37e9b47eb705?w=1600&q=80"
            alt="Galápagos Islands giant tortoise on Santa Cruz with volcanic landscape"
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
              <span className="text-white/70">Galápagos 7 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-teal text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">18 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Galápagos Islands in 7 Days:
                <em className="italic text-teal-300"> Tortoises, Sea Lions &amp; the Edge of Evolution</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Where animals never learned to fear humans. Sea lions, giant tortoises, marine iguanas, and blue-footed boobies — the complete guide from $180/day budget island-hop to luxury live-aboard.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="18 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇪🇨 Ecuador, South America</span>
              <span>·</span>
              <span>🗓 7 Days</span>
              <span>·</span>
              <span>💰 From $180/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-teal pl-6 mb-10 bg-teal/5 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              A sea lion pup nibbles your fins while you try to photograph a sea turtle, and a marine iguana surfaces beside you and sneezes a jet of salt straight into your mask. On the beach, a blue-footed booby is performing its mating dance for an audience of absolutely nobody. A giant tortoise, 150 years old and entirely indifferent to your existence, plods across the path it has been plodding across since before your great-grandparents were born.
            </p>
          </blockquote>

          {/* ── WHAT THE GALÁPAGOS ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What the Galápagos Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Galápagos is a volcanic archipelago 1,000km off Ecuador&apos;s Pacific coast — 13 major islands, 6 minor ones, and around 40 islets, formed by a geological hot spot that still produces active eruptions. The islands range from 4 million years old (Española in the east) to still being actively built by lava flows (Fernandina in the west, which last erupted in 2024). Every island has its own unique ecosystem, its own subspecies of tortoise, iguana, and finch, shaped in isolation over millions of years.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Charles Darwin arrived here in 1835 aboard HMS Beagle and spent five weeks observing the local wildlife. The variation in beak shapes among finches across different islands — each adapted to a different food source — became the cornerstone of his theory of evolution by natural selection. The Galápagos is, in the most literal sense, where modern biology began.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              What makes the Galápagos extraordinary for travellers is not just the diversity of species — it is that the animals here have never learned to fear humans. Sea lions sleep on benches in town. Marine iguanas sit on your feet if you stand still long enough. Blue-footed boobies nest directly beside the walking path, unbothered by cameras at one-metre distance. The Galápagos National Park, which covers 97% of the land area, has protected this fearlessness since 1959. It remains one of the most carefully managed ecosystems on earth. Entry requires a $200 total in fees ($100 park entry + $20 Transit Control Card + $80 INGALA tourist card for some visitors) — every dollar goes directly into conservation.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Fly from Quito/Guayaquil" value="1h 45m–3h" />
              <StatCard icon="🌡️" label="Best Season" value="Jun–Nov or Dec–May" />
              <StatCard icon="🐢" label="Giant Tortoises" value="~20,000 wild" />
              <StatCard icon="💰" label="Budget From" value="$180/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit the Galápagos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Jun–Nov",
                  i: "🤿",
                  t: "Cool/Dry Season — Best for Diving",
                  d: "Water temperature 18–22°C, exceptional underwater visibility (15–25m), and the Humboldt Current brings nutrients that attract whale sharks, hammerhead schools, and mola mola. Seas are rougher — ferry crossings can be uncomfortable. Galápagos penguins and blue-footed boobies are highly active. Peak visitor season July–August.",
                  b: "Best for diving & snorkelling",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  s: "Dec–May",
                  i: "🐣",
                  t: "Warm/Wet Season — Best for Baby Animals",
                  d: "Water temperature 22–27°C, calmer seas, blue-green water. Sea lion pups born November–January. Giant tortoise hatchlings November–April. Blue-footed booby chicks January–June. Waved albatross arrive at Española April–December. Short afternoon showers keep vegetation lush and green. Best season for families and first-time visitors.",
                  b: "Best for baby animals & families",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Mar–Apr",
                  i: "🦅",
                  t: "Transition — Albatross Season",
                  d: "The waved albatross colony arrives at Española from late March. 25,000 birds performing elaborate mating dances — one of the great wildlife spectacles on earth. Water temperature rising, seas calming. An exceptional window for bird photography and liveaboard cruises.",
                  b: "Best for albatross & birds",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🦈",
                  t: "Peak Season — Maximum Crowds",
                  d: "The busiest months in the Galápagos. Hammerhead shark aggregations at Gordon Rocks and Wolf/Darwin islands peak. All visitor sites are at capacity. Book liveaboard cabins 12+ months ahead. Day tours from Puerto Ayora sell out weeks in advance. If visiting in peak season, book everything before your international flights.",
                  b: "Book well in advance",
                  c: "bg-orange-50 border-orange-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to the Galápagos</h2>
            <div className="bg-teal/10 border border-teal/30 rounded-xl p-4 mb-5">
              <p className="text-sm text-teal-800 font-light">
                <strong className="font-medium">Key detail:</strong> There are no direct international flights to the Galápagos. All visitors must fly via <strong className="font-medium">Guayaquil (GYE)</strong> or <strong className="font-medium">Quito (UIO)</strong> on mainland Ecuador, then take a domestic flight to <strong className="font-medium">Baltra (GPS)</strong> or <strong className="font-medium">San Cristóbal (SCY)</strong>. The domestic leg takes 1h 45m from Guayaquil or 3 hours from Quito.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly via Guayaquil (GYE) — Recommended",
                  d: "Fly into Guayaquil (GYE), then connect to Baltra (GPS) or San Cristóbal (SCY) with LATAM or Avianca. Flight time: 1h 45m. Return domestic flights cost $200–400. Guayaquil is a shorter flight from most South American hubs and has better domestic Galápagos schedules. Buy your $20 Transit Control Card (TCT) at Guayaquil airport before boarding — airlines typically collect it at check-in.",
                  b: "Most common route",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "✈️",
                  t: "Fly via Quito (UIO)",
                  d: "Fly into Quito (UIO), then connect to Baltra (GPS). Flight time: 3 hours (Quito is at high altitude, adding cruise time). Good option if your international routing comes through Quito. Quito&apos;s old town is a UNESCO World Heritage Site — worth a day layover if your schedule allows. Airlines: LATAM, Avianca.",
                  b: "Via Ecuador&apos;s capital",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🏝️",
                  t: "Baltra (GPS) vs San Cristóbal (SCY)",
                  d: "Baltra is the main gateway, 45 minutes by bus and ferry from Puerto Ayora on Santa Cruz. San Cristóbal has its own airport with some direct flights and is less crowded — good choice if starting your itinerary on San Cristóbal. Both airports have the same park fee and biosecurity procedures on arrival.",
                  b: "Choose by starting island",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  i: "📋",
                  t: "Entry Fees: $200 National Park Fee + TCT",
                  d: "The Galápagos National Park entrance fee is $200 per adult (increased from $100 in 2024 — verify current rate before travel) payable on arrival at Baltra or San Cristóbal airport by card or USD cash. The $20 Transit Control Card (TCT) is purchased at the mainland airport before boarding. Both are compulsory for all visitors. Keep receipts — inspectors check them throughout your stay.",
                  b: "Budget $220 in entry fees",
                  c: "bg-red-50 border-red-200",
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

          {/* ── 7-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 7-Day Galápagos Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              This itinerary is structured for independent island-hopping from Santa Cruz, adding San Cristóbal and Isabela. Each day card is collapsible. Day costs exclude the one-time $200 entry fees paid on Day 1.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrival at Baltra — Puerto Ayora, Santa Cruz · Tortuga Bay"
                cost="$80–120 (excl. $200 entry fees)"
                items={[
                  "Fly from Guayaquil (GYE) or Quito (UIO) to Baltra (GPS). Pay the $200 Galápagos National Park entrance fee on arrival by card or USD cash — keep the receipt for the entire trip. Take the free Galápagos National Park bus to the ferry crossing (1-minute boat ride, $1), then public bus to Puerto Ayora, the main town on Santa Cruz ($3, 45 minutes).",
                  "Check into a budget guesthouse in Puerto Ayora — rooms $25–50/night. Puerto Ayora is a genuine working town: cheap restaurants, fish market, dive shops, and sea lions sleeping on the benches. The marine iguanas that colonise the waterfront rocks are a sub-species found only on Santa Cruz.",
                  "Afternoon: walk to Tortuga Bay — a stunning white-sand beach 2.5km from town (free, 45-minute walk through national park trail, open 6am–6pm). Marine iguanas bask on the rocks in the hundreds. The protected cove at the far end of Tortuga Bay has calm, shallow water ideal for swimming with sea turtles.",
                  "Dinner at the waterfront restaurants near the fish market — fresh grilled fish, ceviche, and rice ($8–15 per person). After dinner: sea lions hauled out on the town dock perform their last show of the day, entirely unprompted.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Charles Darwin Research Station · Rancho Primicias Giant Tortoises · Lava Tunnels"
                cost="$60–90"
                items={[
                  "Morning: Charles Darwin Research Station, Puerto Ayora (free entry, open daily 8am–6pm). The station runs the Galápagos giant tortoise breeding programme — you can observe juvenile tortoises at every stage of development, from hatchlings the size of your fist to 50-year-olds with shells half a metre wide. The exhibition on Lonesome George (the last Pinta Island tortoise, died June 2012) is quietly devastating. The station&apos;s ongoing work — satellite tracking, incubation control, predator removal — is displayed in full.",
                  "10:30am: Taxi or bicycle (10km, $20–25 return by taxi) to the Santa Cruz highlands. Rancho Primicias is a private ranch that allows free-roaming giant tortoises in a highland forest setting — free entry. Tortoises wander the muddy trails, graze beside wallows, and occasionally block your path entirely. They are completely wild and completely unbothered. This is the most authentic giant tortoise experience in the Galápagos — no fences, no feeding, no schedule.",
                  "12:30pm: Lunch at a highland restaurant near Rancho Primicias — full meal with fresh juice $8–12.",
                  "3:00pm: Lava tunnels in the Santa Cruz highlands — volcanic tubes up to 100m long, some large enough to walk through upright ($5 entry). Remarkably well-preserved geological formations from Pleistocene shield volcano eruptions. The darkness inside is absolute — bring a torch or rent one at the entrance.",
                  "Evening: back in Puerto Ayora. Book tomorrow&apos;s tour at a local dive shop or through GetYourGuide: https://www.getyourguide.com/s/?q=Galapagos+North+Seymour&partner_id=PSZA5UI",
                ]}
              />
              <DayCard
                day="Day 3"
                title="North Seymour — Frigatebirds, Blue-Footed Boobies &amp; Sea Lions"
                cost="$130–160"
                items={[
                  "8:00am: Day trip to North Seymour Island by panga ($100–120/person including naturalist guide, snorkelling equipment, and lunch). All visitor sites in the Galápagos National Park require a licensed naturalist guide — this is legally required and enforced at every landing.",
                  "North Seymour is one of the finest wildlife sites in the entire archipelago. Magnificent frigatebirds inflate their red gular pouches to enormous, absurd balloons during mating season. Blue-footed boobies nest directly beside the path — eggs, chicks, and adults conducting their famous mating dance (lifting each azure foot in slow, deliberate alternation) at point-blank range.",
                  "Snorkelling at North Seymour: sea lions spiral through snorkellers deliberately, treating you as an interactive toy. Galápagos penguins — the world&apos;s second-smallest penguin, living on the equator due to the cold Humboldt Current — may appear in the water. Flightless cormorants, endemic to the Galápagos, occasionally fish alongside.",
                  "Return to Puerto Ayora by 4pm. Afternoon free for kayak hire in Academy Bay ($15/hour). Sea turtles surface regularly in the bay.",
                  "Dinner: ask locally for the day&apos;s catch at the fish market restaurants. The yellow-fin tuna sashimi served at several waterfront spots is extraordinary.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Bartolomé Island — Pinnacle Rock &amp; Snorkelling with Penguins"
                cost="$140–175"
                items={[
                  "7:00am: Day trip to Bartolomé Island — the most photographed spot in the Galápagos. The view from the summit (372 wooden steps, 30 minutes) looks over Pinnacle Rock and the twin volcanic bays of Bartolomé, with Santiago&apos;s vast black lava fields stretching to the horizon. The landscape is entirely volcanic: red, ochre, and black cinder fields with almost no vegetation. The geology is immediate and visceral.",
                  "Snorkelling at Bartolomé: this site is famous for Galápagos penguins nesting in the rock crevices near Pinnacle Rock. Underwater, they move at extraordinary speed — blurs of black and white torpedoing through clear water. White-tipped reef sharks rest motionless on the sandy bottom. Sea turtles graze on algae. Visibility 10–15m.",
                  "Lunch on the boat between sites.",
                  "Afternoon: Sullivan Bay on Santiago Island — a young (1897) lava field where pahoehoe lava created frozen ripples, ropy swirls, and gas bubble formations across a vast black plain. Marine iguanas work the tide pools. This is the Galápagos at its most other-worldly — a landscape that looks like the surface of another planet.",
                  "Full day tour cost: $120–150/person booked through a local agency or GetYourGuide.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Ferry to San Cristóbal — Kicker Rock Snorkel &amp; Sea Lion Beach"
                cost="$150–190"
                items={[
                  "7:30am: Speed ferry from Puerto Ayora to Puerto Baquerizo Moreno, San Cristóbal ($35, 2.5 hours). Sea conditions on this crossing can be rough — take seasickness medication 2 hours before departure. Sit in the middle of the boat at water level for the smoothest ride.",
                  "Check into hostel in Puerto Baquerizo Moreno ($25–45/night). The harbour of the capital of the Galápagos province is occupied by sea lions as if they are residents — sleeping on benches, dock edges, and the children&apos;s play equipment. They are residents.",
                  "1:30pm: Kicker Rock (León Dormido) half-day snorkelling tour ($60–80). Two sheer volcanic columns rising 148m from the ocean, separated by a narrow channel you snorkel through. Hammerhead sharks are a regular presence in the channel (especially June–November). Galápagos sharks, eagle rays, golden rays, sea turtles, and schools of thousands of fish in the channel. One of the top snorkelling and dive sites in the Pacific.",
                  "5:00pm: Interpretive Centre, San Cristóbal — free museum explaining the human history of the Galápagos: the first buccaneers who used the islands to store fresh water, the convict colony era, and the development of modern conservation policy.",
                  "Evening: seafront restaurants in Puerto Baquerizo Moreno. Lobster season runs June–January — the freshest you will eat anywhere, $25–40.",
                ]}
              />
              <DayCard
                day="Day 6"
                title="San Cristóbal — Española Day Trip · Blue-Footed Boobies Mating Dance"
                cost="$150–180"
                items={[
                  "Full-day trip to Española Island from San Cristóbal ($150–180). Española is the oldest island in the Galápagos and has the greatest bird diversity of any single island in the archipelago.",
                  "Punta Suárez, Española: blue-footed boobies nest directly beside the trail — eggs, fluffy white chicks, and adults performing their famous mating dance with complete disregard for your camera. The dance involves lifting each blue foot with exaggerated slowness, sky-pointing the bill, and presenting a twig. Nazca boobies with their orange bills and white plumage nest alongside. Marine iguanas on Española have unique red and green colouring — the Christmas iguana.",
                  "The blowhole at Punta Suárez sends ocean swells 25 metres into the air when conditions are right. The roar when it fires is startling even when you are expecting it.",
                  "Gardner Bay: one of the most beautiful beaches in the Galápagos — white sand, turquoise water, and sea lions so relaxed they sleep between snorkellers. Snorkelling with eagle rays, sea turtles, and white-tipped reef sharks in water of extraordinary clarity.",
                  "Return to San Cristóbal for final dinner before tomorrow&apos;s departure. Local rum, ceviche, and a conversation with the island&apos;s population — many are marine biologists, naturalist guides, and dive instructors.",
                ]}
              />
              <DayCard
                day="Day 7"
                title="Los Tunneles Snorkel Tour, Isabela Island &amp; Departure from San Cristóbal"
                cost="$120–180"
                items={[
                  "Optional early morning: take the first ferry to Isabela Island (Puerto Villamil, $35, 2 hours) for a morning Los Tunneles snorkel tour ($80/person). Los Tunneles is a network of lava arches and underwater tunnels off Isabela&apos;s coast — snorkelling between the arches, you encounter Galápagos penguins at the equator, seahorses clinging to lava formations, and sea turtles nesting above the waterline. The penguins here are the northernmost wild penguin population on earth.",
                  "Alternatively: morning snorkel at Frigate Bird Hill (Cerro Tijeretas) on San Cristóbal — easy 2km hike from town with a nesting frigatebird colony visible without a guide, plus excellent snorkelling at the beach below with green sea turtles and sea lions. Free.",
                  "11:00am: Depart San Cristóbal airport (SCY) to Guayaquil (GYE) or Quito (UIO). Check in at least 2 hours before the domestic flight. Full biosecurity check of all luggage on departure — no shells, lava rocks, sand, plants, or any organic material may leave the Galápagos. Declare everything. Violations carry significant fines.",
                  "Afternoon connection to international flights from Guayaquil or Quito. If transiting Guayaquil, the Malecón 2000 waterfront and Las Peñas neighbourhood are within 20 minutes of the airport. If transiting Quito, the colonial Old Town (UNESCO World Heritage Site) is accessible by metro from the airport.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Galápagos Islands" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🦎 Landmark &amp; Wildlife Site Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important visitor sites in the Galápagos, in order of priority. Entry to all Galápagos National Park visitor sites is included with your $200 park fee. Guided access is compulsory at all sites.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Rancho Primicias — Santa Cruz",
                  e: "Free",
                  d: "The best wild giant tortoise experience in the Galápagos. A private ranch in the Santa Cruz highlands where wild Chelonoidis porteri tortoises roam freely — no fences, no barriers, no schedule. Walk among tortoises that can weigh 250kg and live to 170 years. The most ancient-feeling hour you&apos;ll spend in the islands. Take a taxi or bicycle from Puerto Ayora (10km). Open daily.",
                  t: "Must see · 1.5–2 hrs",
                },
                {
                  n: "Charles Darwin Research Station — Santa Cruz",
                  e: "Free",
                  d: "The scientific heart of Galápagos conservation. The tortoise breeding programme, the story of Lonesome George, and the ongoing research into island ecology are all displayed. Juvenile tortoises at every stage of development from hatchling to juvenile. Free entry, 30-minute walk from Puerto Ayora town centre. Open daily.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "North Seymour Island",
                  e: "Included in park fee",
                  d: "The finest combination of bird and marine wildlife in a single half-day site. Frigatebirds with inflated red pouches, blue-footed boobies dancing, sea lions, land iguanas, and swallow-tailed gulls — all within metres of the trail. Snorkelling at North Seymour adds Galápagos penguins and flightless cormorants. Day trip from Puerto Ayora $100–120.",
                  t: "Must see · Full day",
                },
                {
                  n: "Kicker Rock (León Dormido) — San Cristóbal",
                  e: "Included in park fee",
                  d: "Two volcanic columns rising 148m from the sea, separated by a narrow channel. Snorkelling through the channel: hammerhead sharks (June–November), Galápagos sharks, eagle rays, golden rays, sea turtles, and fish in their thousands. One of the top snorkel and dive sites in the entire Pacific. Day trip from San Cristóbal $60–80.",
                  t: "Must snorkel · Half day",
                },
                {
                  n: "Bartolomé Island — Pinnacle Rock",
                  e: "Included in park fee",
                  d: "The iconic image of the Galápagos. The 372-step summit trail looks over Pinnacle Rock and volcanic bays. Snorkelling below Pinnacle Rock: Galápagos penguins, white-tipped reef sharks, sea turtles. The landscape at Bartolomé — entirely volcanic, almost no vegetation — looks like no other place on earth. Day trip from Puerto Ayora $120–150.",
                  t: "Iconic · Full day",
                },
                {
                  n: "Española Island — Punta Suárez",
                  e: "Included in park fee",
                  d: "Greatest bird diversity of any single Galápagos island. Blue-footed boobies performing mating dances at close range. Nazca boobies, marine iguanas with unique red-green colouring, the blowhole, and Gardner Bay&apos;s extraordinary sea lion beach. Accessible by day trip from San Cristóbal ($150–180) or by liveaboard.",
                  t: "Best birds · Full day",
                },
                {
                  n: "Los Tunneles — Isabela Island",
                  e: "Included in park fee",
                  d: "Snorkelling through lava arches and underwater tunnels off Isabela&apos;s west coast. Galápagos penguins at the equator, seahorses, sea turtles nesting above water, and blue-footed boobies fishing from the lava outcrops. One of the most surreal snorkelling environments in the world. Day tour from Puerto Villamil $80.",
                  t: "Best snorkel · Half day",
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
            title="Galápagos Islands — Wildlife, Lava &amp; the Edge of the World"
            subtitle="Five islands, five ecosystems, one archipelago that changed how we understand life on earth."
            spots={[
              {
                name: "Giant Tortoise — Santa Cruz Highlands",
                query: "galapagos giant tortoise santa cruz highlands ecuador wildlife",
                desc: "Wild Chelonoidis porteri tortoises at Rancho Primicias — 250kg, 170-year lifespans, and entirely indifferent to your presence.",
              },
              {
                name: "Blue-Footed Booby — Española",
                query: "blue footed booby galapagos española mating dance ecuador",
                desc: "Blue-footed boobies performing their mating dance on Española Island — lifting each azure foot in slow, deliberate alternation.",
              },
              {
                name: "Galápagos Penguin — Bartolomé",
                query: "galapagos penguin bartolome pinnacle rock ecuador equator",
                desc: "Galápagos penguins at Pinnacle Rock — the world&apos;s second-smallest penguin, living on the equator thanks to the cold Humboldt Current.",
              },
              {
                name: "Marine Iguana — Fernandina",
                query: "marine iguana galapagos fernandina lava black ecuador",
                desc: "Marine iguanas on black lava at Fernandina — the only ocean-going lizard on earth, sneezing salt after diving for algae.",
              },
              {
                name: "Sea Lion Colony — San Cristóbal",
                query: "galapagos sea lion beach colony san cristobal ecuador",
                desc: "Sea lions at Playa de los Marinos, San Cristóbal — sleeping on benches, the dock, and the children&apos;s playground as if they own the island. They do.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The Galápagos is not cheap, but it is possible at every budget level. The one-time $200 in entry fees applies to all tiers. The main cost variable is accommodation — budget island-hopping vs mid-range eco-lodge vs luxury liveaboard all-inclusive.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-green-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Liveaboard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["✈️ Flights to Galápagos (return)", "$200–400", "$200–400", "$200–400"],
                    ["📋 Park fee + TCT (one-time)", "$200", "$200", "$200"],
                    ["🏨 Accommodation (per night)", "$25–50", "$80–160", "$600–1,200"],
                    ["🍽️ Food (per day)", "$20–35", "$40–70", "Included"],
                    ["⛵ Day tours + inter-island ferries", "$40–80/day", "$60–120/day", "Included"],
                    ["🤿 Activities (snorkel, guides)", "$60–90/day", "$80–150/day", "Included"],
                    ["TOTAL (per day, excl. flights+fees)", "$180–220", "$300–380", "$600–1,200"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget ($180–220/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostel or guesthouse in Puerto Ayora ($25–50/night), eat at local restaurants ($20–35/day), book budget day tours from the waterfront. Completely viable — you see 90% of what liveaboard guests see at the main sites.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-800 mb-1">🌟 Mid-Range ($300–380/day)</p>
                <p className="text-xs text-amber-700 font-light leading-relaxed">Eco-lodge or boutique hotel ($80–160/night), private guides and small-group tours, better naturalist commentary. The sweet spot for first-time visitors who want quality without liveaboard prices.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">✨ Liveaboard ($600–1,200/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">All-inclusive on a certified expedition yacht. Access to outer islands (Genovesa, Fernandina, Wolf/Darwin for diving). Dawn landings before day boats arrive. Best naturalist guides in the industry. If budget allows, book it.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in the Galápagos</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The main decision is liveaboard vs land-based. Liveaboards ($1,500–4,000/week) access outer islands and provide all-inclusive expedition experiences. Land-based accommodation ($80–200/night mid-range) lets you explore at your own pace from Santa Cruz, San Cristóbal, or Isabela.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Finch Bay Eco Hotel — Santa Cruz",
                  type: "Eco-luxury · Puerto Ayora waterfront",
                  price: "From $200/night",
                  badge: "Best on Santa Cruz",
                  desc: "The benchmark eco-luxury property in the Galápagos. Bungalows set in native vegetation with direct beach access, a naturalist concierge service, and the best restaurant on Santa Cruz (open to non-guests). Snorkelling and kayaking from the hotel beach. Boats to visitor sites depart from the hotel dock. Rates $200–450/night.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Albemarle Hotel — Isabela",
                  type: "Boutique · Puerto Villamil",
                  price: "From $120/night",
                  badge: "Best on Isabela",
                  desc: "The finest hotel on Isabela Island, within walking distance of the flamingo lagoons, the giant tortoise breeding centre, and the beach. Boutique property with 14 rooms, garden setting, and a knowledgeable owner who can arrange every tour on the island. Quiet, genuine, and far less visited than Santa Cruz properties.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Ecoventura Origin — Liveaboard Cruise",
                  type: "Luxury expedition yacht · 20 guests",
                  price: "$1,800–2,800/person/week",
                  badge: "Best liveaboard",
                  desc: "Ecoventura&apos;s MV Origin is consistently ranked among the top three Galápagos liveaboards. 20-passenger capacity (maximum intimacy), two certified naturalist guides, a marine biologist on board, and an itinerary covering the outer islands that land-based tours cannot reach. All-inclusive: meals, excursions, snorkelling equipment, and wetsuit rental.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Galápagos Sky — Liveaboard Dive Cruise",
                  type: "Dive liveaboard · 16 divers",
                  price: "$2,500–4,000/person/week",
                  badge: "Best dive liveaboard",
                  desc: "Specialist dive liveaboard operating the Wolf and Darwin Islands route — the best diving on earth for schooling hammerhead sharks (hundreds together), whale sharks, and manta rays. 16-diver maximum. Nitrox available. Only accessible by liveaboard. Requires advanced open water certification minimum. Book 12+ months ahead.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Hostal Los Amigos / La Peregrina — Santa Cruz",
                  type: "Budget guesthouse · Puerto Ayora",
                  price: "$25–50/night",
                  badge: "Best budget",
                  desc: "Clean budget guesthouses within walking distance of the Charles Darwin Research Station and the waterfront. Shared or private rooms, basic breakfast available, and staff who can help book day tours. The budget base for independent island-hopping — everything you need, nothing you don&apos;t.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in the Galápagos</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The Galápagos restaurant scene is anchored around Puerto Ayora on Santa Cruz. Fresh fish, lobster (in season, June–January), and ceviche are the staples. Prices are higher than mainland Ecuador but lower than you might expect for a remote island destination.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Fish Market Restaurants — Puerto Ayora",
                  t: "Fresh catch · Santa Cruz waterfront",
                  d: "The informal restaurants behind Puerto Ayora&apos;s fish market serve the freshest fish in the Galápagos, grilled to order while pelicans and sea lions compete for scraps below the cleaning tables. Grilled yellow-fin tuna, mahi-mahi, and grouper with rice and salad: $10–18. Ceviche: $8–12. Eat here at least once.",
                  b: "Most authentic",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Finch Bay Hotel Restaurant — Santa Cruz",
                  t: "Eco-luxury dining · Puerto Ayora",
                  d: "The best restaurant on Santa Cruz, open to non-guests (book ahead in peak season). Fresh Galápagos lobster in season ($35–55), yellow-fin tuna carpaccio, and Ecuadorian highland produce. The waterfront terrace at sunset is one of the best dinner settings in the islands. $40–70 per person.",
                  b: "Best for special dinner",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Cevichería Los Paisanos — Puerto Ayora",
                  t: "Local ceviche · Budget",
                  d: "A local institution in Puerto Ayora serving ceviche, encebollado (fish stew), and fresh juices at prices that remind you this is Ecuador, not a resort. A full ceviche lunch with juice: $8–12. Order the mixed seafood ceviche. Packed with locals at lunch — arrive by noon.",
                  b: "Best budget lunch",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Beachfront Restaurants — Puerto Villamil, Isabela",
                  t: "Lobster & seafood · Isabela island",
                  d: "Puerto Villamil on Isabela has several simple beachfront restaurants serving the freshest lobster in the Galápagos at prices far below Santa Cruz. Lobster meal with sides: $30–45. The combination of beach setting, flamingo lagoon behind you, and lobster the fishermen pulled up that morning is worth the ferry ride from Santa Cruz.",
                  b: "Best lobster",
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
            destination="Galápagos Islands"
            hotels={[
              {
                name: "Finch Bay Eco Hotel",
                type: "Eco-luxury · Santa Cruz waterfront",
                price: "From $200/night",
                rating: "5",
                badge: "Best on island",
                url: "https://www.booking.com/hotel/ec/finch-bay-hotel.html?aid=2820480",
              },
              {
                name: "Albemarle Hotel Isabela",
                type: "Boutique · Puerto Villamil",
                price: "From $120/night",
                rating: "4",
                badge: "Best on Isabela",
                url: "https://www.booking.com/hotel/ec/albemarle-galapagos.html?aid=2820480",
              },
              {
                name: "Royal Palm Galápagos",
                type: "Luxury highland · Santa Cruz",
                price: "From $350/night",
                rating: "5",
                badge: "Most luxurious",
                url: "https://www.booking.com/hotel/ec/royal-palm-galapagos.html?aid=2820480",
              },
              {
                name: "Red Mangrove Inn",
                type: "Eco-boutique · Academy Bay",
                price: "From $160/night",
                rating: "4",
                badge: "Best location",
                url: "https://www.booking.com/hotel/ec/red-mangrove-inn-galapagos.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "North Seymour Full Day Tour — Frigatebirds & Boobies",
                duration: "8 hrs",
                price: "From $100/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=Galapagos+North+Seymour&partner_id=PSZA5UI",
              },
              {
                name: "Kicker Rock Snorkelling — Hammerheads & Eagle Rays",
                duration: "4 hrs",
                price: "From $65/person",
                badge: "Top snorkel",
                url: "https://www.getyourguide.com/s/?q=Galapagos+Kicker+Rock&partner_id=PSZA5UI",
              },
              {
                name: "Bartolomé Island & Pinnacle Rock Day Trip",
                duration: "8 hrs",
                price: "From $120/person",
                url: "https://www.getyourguide.com/s/?q=Galapagos+Bartolome&partner_id=PSZA5UI",
              },
              {
                name: "Los Tunneles Isabela — Penguins & Seahorses",
                duration: "4 hrs",
                price: "From $80/person",
                url: "https://www.getyourguide.com/s/?q=Galapagos+Los+Tunneles+Isabela&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in the Galápagos</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "💸",
                  title: "Arriving Without USD Cash for Entry Fees",
                  desc: "The Galápagos National Park entry fee ($200) is payable on arrival at Baltra or San Cristóbal airport. While cards are sometimes accepted, the card terminal fails regularly. The $20 Transit Control Card is purchased at the mainland airport before boarding — bring USD cash. ATMs are scarce in the Galápagos and charge high fees. Withdraw USD in Guayaquil or Quito before your domestic flight. Arriving without cash has left travellers temporarily detained at the airport.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "📅",
                  title: "Not Booking Flights and Liveaboards Far Enough in Advance",
                  desc: "Domestic flights to the Galápagos (Guayaquil or Quito to Baltra or San Cristóbal) book up 6–10 weeks in advance during peak season (December–April, July–August). Last-minute tickets cost 50–100% more when available. Liveaboard cabins on top boats like Ecoventura Origin and Galápagos Sky book 12–18 months ahead. Book both as soon as your international travel dates are confirmed.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🌊",
                  title: "Underestimating the Inter-Island Ferry Crossings",
                  desc: "The inter-island speed ferries (Puerto Ayora to San Cristóbal or Isabela) cross open ocean swells and can be genuinely rough. Two to two-and-a-half hours of significant motion. If you are susceptible to seasickness, take Dramamine or Stugeron two hours before departure. Sit in the middle of the boat at water level. The bow is the worst position. Consider anti-nausea wristbands as backup.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🦭",
                  title: "Attempting to Touch the Animals",
                  desc: "Galápagos National Park regulations prohibit touching any animal, with a required 2-metre minimum distance. Sea lion bites are serious (they can break bones). Marine iguanas carry salmonella. Disturbing nesting seabirds can cause egg abandonment. The remarkable thing about the Galápagos is that you don&apos;t need to get closer than 2 metres — the animals approach you. Violating the 2-metre rule risks a $500+ fine and ejection from the national park.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🧴",
                  title: "Bringing Regular Sunscreen",
                  desc: "Sunscreen containing oxybenzone and octinoxate is harmful to coral reefs and is effectively banned for responsible use in the Galápagos. Use reef-safe mineral sunscreen (zinc oxide or titanium dioxide) only. Bring it from home — reef-safe sunscreen is expensive and hard to find in the islands. The marine ecosystems here are under significant climate pressure, and individual choices matter in a closed island system.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🚢",
                  title: "Dismissing Budget Island-Hopping as Second-Best",
                  desc: "Budget island-hopping from Puerto Ayora gives you North Seymour, Bartolomé, Kicker Rock, and the Santa Cruz highlands — all extraordinary wildlife encounters. You see 90% of the species that liveaboard guests see at accessible sites. The main thing liveaboards add is access to outer islands (Genovesa, Fernandina, Wolf/Darwin) and dawn access before day boats arrive. Both approaches deliver extraordinary experiences. Budget travellers should not feel they are missing the real Galápagos.",
                  color: "bg-blue-50 border-blue-200",
                },
              ].map((m) => (
                <TipCard key={m.title} {...m} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for the Galápagos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "Arrive at visitor sites first thing in the morning",
                  desc: "Day-trip boats from Puerto Ayora depart at 8am and reach sites between 10am–3pm — when all sites are at maximum occupancy. Live-aboards land at dawn before day boats arrive. As an independent traveller, book the earliest departure and use late afternoon for free beach time when day boats have gone.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "📷",
                  title: "Bring a GoPro or rent an underwater camera",
                  desc: "The most extraordinary Galápagos encounters happen underwater. A GoPro ($350–450 new, $150–200 secondhand) on a wrist mount captures what your eyes see — sea lions spiralling around you, penguins shooting past your mask, turtles lifting their heads from feeding. Camera rental is available in Puerto Ayora ($40–60/day). An above-water 200mm+ zoom lens is worth having for the bird colonies on Española and North Seymour.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🎒",
                  title: "Book tours via GetYourGuide for vetted operators",
                  desc: "Certified naturalist guides (Level 1 or 2) are legally required and make an enormous difference. A good guide transforms observation into education. Book vetted operators at https://www.getyourguide.com/s/?q=Galapagos+Islands&partner_id=PSZA5UI. Particularly valuable for North Seymour, Española, and Kicker Rock where biological context is the difference between watching birds and understanding them.",
                  color: "bg-indigo-50 border-indigo-200",
                },
                {
                  icon: "🌡️",
                  title: "Understand both seasons before booking",
                  desc: "June–November: cooler, rougher seas, better diving visibility, hammerhead aggregations, penguins and boobies highly active. December–May: warmer, calmer seas, baby animals (sea lion pups, tortoise hatchlings, booby chicks), albatross at Española from April. Neither season is definitively better — they offer genuinely different experiences. June–August is the busiest for visitors; December–January for baby animals.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🐧",
                  title: "Don&apos;t skip Isabela — it&apos;s the least-visited and most extraordinary",
                  desc: "Most independent travellers stick to Santa Cruz and San Cristóbal and miss Isabela entirely. Isabela is the largest island with flamingos in lagoons behind town, giant tortoises crossing roads, the Sierra Negra volcano caldera (second-largest in the world), and Los Tunneles snorkel site. Far fewer tourists than Santa Cruz. The ferry from Puerto Ayora is $35 and 2 hours.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "💧",
                  title: "Bring a reusable water bottle and reef-safe products",
                  desc: "Single-use plastics are heavily discouraged in the Galápagos. Bring a reusable bottle — drinking water is available at guesthouses and some visitor centres. Pack reef-safe sunscreen, biodegradable soap and shampoo, and avoid plastic packaging where possible. The Galápagos Marine Reserve is one of the largest on earth — the plastic problem is existential for the ecosystem.",
                  color: "bg-blue-50 border-blue-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Galápagos Islands" />

          {/* Combine With */}
          <CombineWith currentSlug="galapagos-7-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is it worth visiting the Galápagos on a budget or should I book a liveaboard?",
                  a: "Both approaches work, but they deliver different experiences. Budget island-hopping from Puerto Ayora ($180–220/day) gives you North Seymour, Bartolomé, Kicker Rock, and Santa Cruz highlands — extraordinary encounters at all the main sites. A mid-range liveaboard ($300–380/day) adds Española, Isabela, and Fernandina. A luxury liveaboard ($600–1,200/day all-inclusive) adds Genovesa, Wolf/Darwin Islands for diving, dawn access before day boats arrive, and the best naturalist guides in the industry. Budget island-hopping is genuinely excellent. A liveaboard is genuinely extraordinary. If you can afford the liveaboard, book it.",
                },
                {
                  q: "How many days do I need in the Galápagos?",
                  a: "Five days is the minimum to cover the highlights from Santa Cruz and San Cristóbal. Seven days allows the addition of Isabela or a 5-day cruise with outer island access. Ten days is the sweet spot for a comprehensive liveaboard covering all major island groups. Given the expense and time involved in reaching Ecuador from Europe or Asia, plan for at least 7 days — 5 days feels short once you are there.",
                },
                {
                  q: "What is the best island to base yourself on?",
                  a: "Santa Cruz (Puerto Ayora) is the best base for independent island-hopping — the most tour operators, the largest selection of accommodation and restaurants, and the most day-trip boats. San Cristóbal (Puerto Baquerizo Moreno) is quieter with Kicker Rock on its doorstep. Isabela (Puerto Villamil) is the most unspoiled and least visited — for travellers who want to escape relative crowds. All three are connected by speed ferries ($35, 2–2.5 hours).",
                },
                {
                  q: "Can I see giant tortoises in the wild, not in captivity?",
                  a: "Yes. Rancho Primicias in the Santa Cruz highlands has fully wild, free-roaming giant tortoises with no fences — free entry, 10km from Puerto Ayora by taxi. On Isabela, giant tortoises cross the road outside Puerto Villamil. The Charles Darwin Research Station has a captive breeding programme (important for conservation) but for wild encounters, Rancho Primicias and the Isabela roads are the benchmark.",
                },
                {
                  q: "Is the Galápagos suitable for non-swimmers or those who don&apos;t snorkel?",
                  a: "Absolutely. The land wildlife encounters — giant tortoises, blue-footed boobies dancing, frigatebirds, marine iguanas, sea lions on beaches — are as extraordinary as anything in the water. Every visitor site includes land walks with naturalist guides. Non-swimmers are fully catered for. That said, snorkelling opens an entirely different dimension: penguins, sea lions, sea turtles, sharks, and rays underwater. Most budget snorkel tours provide life jackets and guides who support nervous snorkellers.",
                },
                {
                  q: "What do the entry fees actually cover and where does the money go?",
                  a: "The $200 Galápagos National Park entry fee funds conservation operations: ranger patrols, invasive species removal (rats, goats, and feral cats have devastated some islands), tortoise breeding and reintroduction programmes, marine reserve enforcement, and scientific research. The $20 Transit Control Card funds the SESA biosecurity agency that checks all luggage for prohibited items. The Galápagos National Park is one of the world&apos;s most effectively managed protected areas — the fees are genuinely well spent.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Galápagos trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/galapagos-liveaboard-guide", label: "Liveaboard guide", icon: "🚢" },
                { href: "/blog/galapagos-budget-trip", label: "Budget island-hop", icon: "💰" },
                { href: "/blog/best-time-galapagos", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/galapagos-packing-list", label: "Packing checklist", icon: "🎒" },
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
          <RelatedGuides currentSlug="galapagos-7-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More South America Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Peru 7 Days — Machu Picchu &amp; Sacred Valley", href: "/blog/peru-machu-picchu-7-days" },
                { label: "Colombia 7 Days — Cartagena, Medellín &amp; Coffee Region", href: "/blog/colombia-7-days" },
                { label: "Chile Patagonia 7 Days — Torres del Paine", href: "/blog/chile-patagonia-7-days" },
                { label: "Ecuador &amp; Quito — Old Town &amp; Cotopaxi", href: "/blog/ecuador-quito-guide" },
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
