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
const ALGARVE_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Algarve Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "4-Day Itinerary" },
  { id: "beaches",    emoji: "🏖️", label: "Beach & Landmark Guide" },
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
          href: `mailto:?subject=Algarve 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Algarve in 4 Days — golden cliffs, Benagil Cave and Sagres sunset&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/algarve-4-days"
        imageUrl="https://images.unsplash.com/photo-1548625361-58a9d86b2c46?w=1200&q=80"
        description="Algarve in 4 Days: Ponta da Piedade sea caves, Benagil Cave, Sagres sunset and the golden cliff beaches — complete itinerary with euro costs."
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
export default function AlgarveClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={ALGARVE_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Algarve" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="algarve golden cliffs rock arches ponta da piedade portugal coast"
            fallback="https://images.unsplash.com/photo-1548625361-58a9d86b2c46?w=1600&q=80"
            alt="Algarve golden limestone cliffs and rock arches at Ponta da Piedade Portugal coast"
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
              <span className="text-white/70">Algarve 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-teal-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Europe&apos;s Atlantic Coast
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Algarve in 4 Days:
                <em className="italic text-amber-300"> Golden Cliffs, Sea Caves &amp; Europe&apos;s Southwestern Tip</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                150km of Atlantic coastline, limestone arches you can kayak through, a cave with a hole in its ceiling, and the most dramatic sunset in Southern Europe. The complete guide.
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
              <span>🇵🇹 Algarve, Portugal</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From €50/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Algarve&apos;s 150 kilometres of Atlantic coastline contains some of the most extraordinary coastal geology in Europe — golden limestone arches rising from turquoise water, grottos accessible only by kayak, cliff-top fortresses at Europe&apos;s southwestern tip, and a cave with a hole in its ceiling that floods with golden light at midday.
            </p>
          </blockquote>

          {/* ── WHAT ALGARVE ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Algarve Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Algarve is southern Portugal&apos;s coastal region — 150 kilometres of Atlantic shoreline that stretches from the Spanish border in the east to Cabo de São Vicente, the southwesternmost point of continental Europe, in the west. What makes it remarkable is not just that it has beaches, but what those beaches are made of: golden limestone cliffs sculpted over millions of years into arches, stacks, grottos, and sea caves that glow amber in afternoon light.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Ponta da Piedade, just south of Lagos, is the centrepiece — a kilometre of golden limestone formations with arches wide enough to kayak through, hidden grottos that only appear at low tide, and water so clear you can see the seabed ten metres down. Benagil Cave, further east near Carvoeiro, has a vaulted ceiling with a natural circular oculus that floods the interior with a cone of golden light at midday. Sagres, at the very tip of the western cape, is where the Atlantic truly takes over: wilder, windier, less touristy, with cliffs that drop 75 metres straight into the ocean.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Four days is the right amount of time for the Algarve: enough to see the key highlights without rushing, enough to spend a morning kayaking and an afternoon on a beach, and enough to make the drive west to Sagres and still have time for the central coast. Rent a car at Faro Airport. The Algarve does not work without one.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="FAO (Faro)" />
              <StatCard icon="🌡️" label="Best Season" value="May–Jun, Sep–Oct" />
              <StatCard icon="🏖️" label="Coastline" value="150 km" />
              <StatCard icon="💰" label="Budget From" value="€50/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit the Algarve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "May–Jun",
                  i: "🌸",
                  t: "Late Spring — Best Season",
                  d: "24–28°C, sea temperature rising to 19–21°C, spring wildflowers still clinging to the cliff tops, and dramatically fewer crowds than summer. Benagil Cave boat tours are available at the first slot (9am) with the cave largely to yourselves. The ideal window for most travellers.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🌅",
                  t: "Early Autumn — Equally Good",
                  d: "Warm sea after a full summer of heating (22–23°C water temperature), air temperatures 24–28°C, smaller crowds than peak, and lower prices. September is when the Algarve locals go back to the beach. October starts to cool but remains excellent for exploring. Our second recommendation.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🔥",
                  t: "Summer — Popular but Crowded",
                  d: "Peak season: traffic jams on every coastal road, queues at every beach, hotel prices doubled or tripled, and Benagil Cave with 30–50 boats circling it at once. The weather is excellent (30–35°C) but the infrastructure is strained. Only worthwhile if these are the only weeks you can travel.",
                  b: "Avoid if possible",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Mar",
                  i: "🌧️",
                  t: "Winter — Quiet and Mild",
                  d: "The Algarve has the mildest winter in mainland Europe (14–18°C). Most beach facilities close but the cliff walks, Sagres, and the interior towns are peaceful and atmospheric. Some Benagil boat operators run year-round in calm weather. Good for surf (west coast), hiking, and off-season prices. Not a beach holiday.",
                  b: "For off-season explorers",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to the Algarve</h2>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-teal-800 font-light">
                <strong className="font-medium">Key detail:</strong> Faro Airport (FAO) is the Algarve&apos;s own international airport, located 3km from Faro city centre. Pick up your hire car at the airport — it&apos;s the single most important thing you can do on arrival. The Algarve&apos;s best coastline requires a car.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Direct flight from the UK (recommended)",
                  d: "London (LGW, STN, LTN, BRS), Manchester, Birmingham, Edinburgh and dozens of other UK airports fly direct to Faro year-round. Ryanair and easyJet fares from £30–£90 one-way in shoulder season. Flight time: 2.5 hours. Faro is one of the UK&apos;s most-served sunshine destinations — more flights than almost anywhere in Europe.",
                  b: "Best option from UK",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "From India via Lisbon or Madrid",
                  d: "No direct flights from India to Faro. Fly to Lisbon (LIS) with TAP, Air India, or via a Gulf hub (Emirates, Qatar, Etihad) then connect to Faro (45-min domestic flight, €30–60). Alternatively fly into Lisbon and drive 3 hours south — a very scenic route through the Alentejo. The drive option gives you Évora en route.",
                  b: "Via Lisbon",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚗",
                  t: "Hire car — essential",
                  d: "Pick up at Faro Airport on arrival. All major rental companies are represented. €20–35/day in shoulder season (May–June, September–October). €40–60/day in July–August. A convertible on the Sagres coastal road is one of the great drives of Southern Europe. Book in advance for July–August — cars sell out.",
                  b: "Non-negotiable",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚌",
                  t: "Bus from Lisbon (budget option)",
                  d: "Rede Expressos coaches run Lisbon Sete Rios → Faro in 3.5–4 hours (€20–25). From Faro, Eva Transportes buses connect to Lagos (1.5 hrs, €5), Portimão (1 hr, €5), and Sagres (2.5 hrs from Faro, €8). Viable for a town-based trip but limits beach access dramatically.",
                  b: "Budget / no car",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Algarve Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is based in Lagos for Days 1–3 (best access to Ponta da Piedade and Sagres), then moves east to Carvoeiro for Benagil Cave on Day 4. All prices in EUR with USD equivalents.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Lagos · Ponta da Piedade · First Sunset"
                cost="€55–75 including hire car (≈ $60–82)"
                items={[
                  "Arrive Faro Airport, collect hire car — this is the most important task of the trip. Drive 1 hour west to Lagos on the A22 motorway (toll-free for the coastal stretch). Lagos will be your base for the first three days.",
                  "Check in to your accommodation — budget guesthouses in the old town from €35–55/night; mid-range boutique hotels €80–130/night.",
                  "Afternoon (2pm): Walk 20 minutes south from Lagos town centre to Ponta da Piedade. No entry fee, no booking required — just walk to the cliff edge. The first view of the limestone arches, stacks, and sea caves rising from turquoise water is one of the great moments in European travel.",
                  "Descend the wooden staircase to water level — the perspective from below the cliffs, looking up through the arches, is completely different from the clifftop. Allow 45–60 minutes.",
                  "Sunset from the clifftop above Ponta da Piedade — the golden limestone turns amber and the sea colours shift from turquoise to cobalt. One of the best free sunsets in Southern Europe.",
                  "Dinner in Lagos old town — walk away from the main tourist square (Praça Gil Eanes) one street in any direction for better prices and more local restaurants. Grilled dourada (sea bream) or fresh tuna steak for €12–18. A full dinner for two with wine: €35–55.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Kayak Ponta da Piedade · Praia Dona Ana · Lagos Old Town"
                cost="€50–70 total (≈ $55–77)"
                items={[
                  "9:00am: Kayak tour through Ponta da Piedade sea caves (€28–35 per person, 2.5 hours with a local guide). The guided kayak accesses grottos and sea chambers that are impossible to reach on foot — guides squeeze you into hidden rooms, under natural arches at water level, and into the cathedral-like main grotto. Book the night before; morning slots fill fast in May–September.",
                  "Alternatively, rent a kayak independently from the beach for €20–25 and explore at your own pace. The arches are well-marked and the water is calm in the morning.",
                  "12:00pm: Return to Lagos, dry off. Lunch at Mercado de Lagos (the food hall on the port) — generous portions for €9–13. Fresh grilled fish, bifanas (pork rolls), and pastéis de nata for dessert (€1.20 each).",
                  "2:30pm: Praia Dona Ana — Lagos&apos;s most photographed beach, a 15-minute walk east of town. Small, intimate, hemmed in by golden cliffs on both sides. Good for a post-lunch swim. Gets busy in July–August; arrive early or late.",
                  "5:30pm: Walk the historic old town walls of Lagos — the 16th-century fortifications are mostly intact and the views from the Forte da Ponta da Bandeira (€2) over the harbour are lovely.",
                  "8:00pm: Dinner at a Lagos tasca — cataplana (the iconic Algarve copper-pot seafood stew with clams, prawns, chorizo, and vegetables) for €16–24 per person. Some restaurants require 24-hour notice for cataplana as it takes 40 minutes to cook.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Sagres · Cabo de São Vicente · Praia do Beliche"
                cost="€30–50 total (≈ $33–55)"
                items={[
                  "9:00am: Drive 30km west from Lagos to Sagres (35 minutes). Sagres is the least touristy major town in the Algarve — a genuine fishing port, windswept and dramatic, with Atlantic light that is completely different from the sheltered southern coast.",
                  "10:00am: Fortaleza de Sagres (€3) — the clifftop fortress from which Henry the Navigator coordinated the Portuguese Age of Exploration in the 15th century. The enormous Rosa dos Ventos (wind compass), 43 metres in diameter, is carved into the ground inside the fortress walls. The cliffs here drop straight to the Atlantic.",
                  "11:30am: Drive 6km further to Cabo de São Vicente — the southwesternmost point of continental Europe. The lighthouse sits on 75-metre cliffs with nothing between you and South America on a clear day. The wind here is permanent and fierce; bring a layer. Free to visit.",
                  "1:00pm: Lunch in Sagres harbour — the freshest fish in the Algarve. Sagres is a working fishing port; the catch has not travelled far. Grilled sea bream, fresh tuna, or monkfish cataplana for €10–16 per person at the harbour restaurants.",
                  "3:30pm: Praia do Beliche — the small, dramatic beach below Cabo de São Vicente, reached via stairs cut into the cliff face. Sheltered from the wind, dramatically framed by the headland, and largely unknown to package tourists.",
                  "6:00pm: Stay for sunset at Cabo de São Vicente — one of the most dramatic sunsets in Europe. The cliffs turn amber as the sun drops into the Atlantic, the lighthouse beam begins at dusk, and the horizon is unbroken for 360 degrees. This is the moment the trip is built around.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Benagil Cave · Carvoeiro · Ferragudo · Faro"
                cost="€45–65 total (≈ $50–72)"
                items={[
                  "Drive east from Lagos to Carvoeiro (1 hour 15 minutes on the A22). Arrive by 9am — boat tours start at 9–9:30am and sell out fast. There is limited parking above the beach; arrive early.",
                  "9:00am: Benagil Cave boat tour (€20–35 per person, 50–60 minutes). Benagil is one of the great natural wonders of the European coastline: a sea cave with a vaulted ceiling and a circular hole at the top (an oculus) through which golden light floods the interior at midday. The effect — turquoise water, sandy floor, domed ceiling, cone of light — is genuinely extraordinary. Book online the evening before.",
                  "10:30am: Praia de Benagil beach — small, dramatic, backed by the same golden limestone as Ponta da Piedade. Good for a swim while the morning light is still on the cliffs.",
                  "12:30pm: Drive east to Ferragudo village — a charming working fishing village across the estuary from Portimão. Lunch at a harbour restaurant: fresh grilled fish for €12–16. Much more local-feeling than the main tourist towns.",
                  "3:00pm: Optional final beach stop — Praia da Rocha (wide, sandy, more resort-style) or drive back along the coast for a final swim at one of the cliff coves near Carvoeiro.",
                  "5:30pm: Drive to Faro Airport (1 hour from Carvoeiro). Return hire car, depart — or check in to Faro for a final night and explore the old town and the Ria Formosa lagoon the next morning.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Algarve" onPlanTrip={() => setModalOpen(true)} />

          {/* ── BEACH & LANDMARK GUIDE ── */}
          <section id="beaches" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏖️ Beach &amp; Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The Algarve&apos;s 150km of coastline is not one beach — it is dozens, each with a different character. The most important sites in order of priority, with honest notes on what to expect.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Ponta da Piedade",
                  e: "Free",
                  d: "The centrepiece of the western Algarve — a kilometre of golden limestone arches, stacks, and sea caves south of Lagos. Walk to the cliff edge for the overview, then descend the wooden stairs to water level. The perspective from below the arches is essential. Arrive at golden hour (late afternoon) for the best light. Kayak tours from €20.",
                  t: "Must see · Free · 1.5–2 hrs",
                },
                {
                  n: "Benagil Cave",
                  e: "Via boat tour €20–35",
                  d: "A sea cave near Carvoeiro with a natural circular oculus in its vaulted ceiling that floods the interior with golden light at midday. One of the most-photographed natural features in Portugal. Only accessible by boat tour (€20–35) or guided kayak. Do not attempt to swim from Benagil beach — it is a dangerous 200m open-sea swim in Atlantic swell.",
                  t: "Must see · Boat tour required · 1 hr",
                },
                {
                  n: "Cabo de São Vicente",
                  e: "Free",
                  d: "The southwesternmost point of continental Europe. 75-metre cliffs, a working lighthouse, and nothing between you and South America. The sunset here is one of the great sunsets of the continent. Always windy — bring a layer even in summer. Drive 6km from Sagres.",
                  t: "Sunset essential · Free · 30–45 mins",
                },
                {
                  n: "Fortaleza de Sagres",
                  e: "€3",
                  d: "The clifftop fortress from which Henry the Navigator launched the Age of Exploration. The enormous wind compass (Rosa dos Ventos) carved into the ground is the most striking element. The fortification walls give cliff-edge views over the Atlantic. Combine with Cabo de São Vicente on the same morning.",
                  t: "Historical · €3 · 45 mins",
                },
                {
                  n: "Praia Dona Ana",
                  e: "Free",
                  d: "Lagos&apos;s most iconic beach — small, intimate, hemmed in by golden cliffs. Beautiful for swimming. Gets busy in July–August. 15-minute walk from Lagos town centre. Best in the morning before the day trippers arrive.",
                  t: "Iconic beach · Free · Half day",
                },
                {
                  n: "Praia da Marinha",
                  e: "Free",
                  d: "Widely considered the most beautiful beach in the Algarve by Portuguese standards. Dramatic limestone rock formations in the water, crystal-clear sea, accessible by cliff stairs. Located between Carvoeiro and Lagoa — combine with Benagil on Day 4. Small car park above; arrive early.",
                  t: "Most beautiful · Free · 2 hrs",
                },
                {
                  n: "Silves Castle",
                  e: "€3",
                  d: "The Algarve&apos;s Moorish capital, 30 minutes inland from the coast. The red sandstone castle is the best-preserved Moorish fortification in southern Portugal. The medieval town below is quiet and authentic. Good for a half-day when you need a break from beaches.",
                  t: "Historical inland · €3 · Half day",
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
            title="Algarve — Cliffs, Caves &amp; Atlantic Light"
            subtitle="The Algarve&apos;s extraordinary golden limestone coastline."
            spots={[
              {
                name: "Ponta da Piedade Arches",
                query: "ponta da piedade limestone arches rock formations lagos portugal",
                desc: "The golden limestone arches and sea stacks at Ponta da Piedade — the most dramatic stretch of coastline in the western Algarve.",
              },
              {
                name: "Benagil Cave",
                query: "benagil cave sea cave oculus golden light portugal algarve",
                desc: "Benagil Cave&apos;s vaulted ceiling and natural oculus flooding the interior with golden light — one of the great natural wonders of the European coast.",
              },
              {
                name: "Cabo de São Vicente",
                query: "cabo de sao vicente lighthouse cliffs sunset portugal algarve",
                desc: "The lighthouse at Cabo de São Vicente at sunset — Europe&apos;s southwesternmost point, with 75-metre cliffs dropping into the Atlantic.",
              },
              {
                name: "Praia da Marinha",
                query: "praia da marinha beach limestone rocks algarve portugal",
                desc: "Praia da Marinha — widely considered the most beautiful beach in the Algarve, with dramatic limestone formations rising from crystal-clear water.",
              },
              {
                name: "Lagos Old Town",
                query: "lagos old town algarve portugal historic walls harbour",
                desc: "Lagos old town — 16th-century fortification walls, cobbled streets, and the harbour that launched the Portuguese Age of Exploration.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The Algarve is moderately priced by Western European standards — comfortably cheaper than France, Italy, or Spain&apos;s Mediterranean coast. The main costs are accommodation and hire car. Food and activities are very reasonable.
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
                    ["🏨 Accommodation (3 nights)", "€90–150", "€240–420", "€750–1,800"],
                    ["🚗 Hire car (4 days incl. fuel)", "€100–140", "€140–200", "€200–300"],
                    ["🍽️ Food (4 days)", "€60–100", "€160–240", "€400–800"],
                    ["🏖️ Activities & tours", "€60–90", "€120–200", "€300–600"],
                    ["✈️ Flights (return, ex-UK)", "€60–120", "€120–200", "€300–600"],
                    ["TOTAL (per person)", "€370–600", "€780–1,260", "€1,950–4,100"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€50–75/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostel or budget guesthouse (€20–40/night), self-catering lunch from supermarkets (€5–8), dinner at a local tasca (€12–18), kayak rental rather than guided tours. Very comfortable — the Algarve&apos;s budget infrastructure is excellent.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (€130–200/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique hotel in Lagos old town (€80–130/night), sit-down lunches, guided kayak tours, good restaurant dinners with wine (€30–45/person). This is the sweet spot for a comfortable Algarve trip without spending on luxury resorts.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (€400+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Resort hotel (Vila Vita Parc, Conrad Algarve, Bela Vista — €250–600/night), private boat tours, Michelin-star dinners (Ocean Restaurant at Vila Vita has 2 Michelin stars — book months in advance). The Algarve&apos;s luxury tier is genuinely world-class.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in the Algarve</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The Algarve is a long coastline — where you stay determines what you can access easily. For a 4-day trip focused on this itinerary, Lagos is the best base.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Lagos Old Town",
                  type: "Best overall base · Western Algarve",
                  price: "€35–130/night",
                  badge: "Recommended base",
                  desc: "The best base for this itinerary. Walking distance to Ponta da Piedade, easy drive to Sagres (30 min), and good access to Benagil (75 min east). The old town has genuine character — cobbled streets, historic walls, a lively restaurant scene that isn&apos;t entirely tourist-oriented. Budget guesthouses and boutique hotels both available.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Carvoeiro",
                  type: "Central coast · Best for Benagil",
                  price: "€50–150/night",
                  badge: "Best for central coast",
                  desc: "A small, pretty cliff-top village between Lagos and Faro. Best positioned for Benagil Cave access. Praia da Marinha is 10 minutes away. Less nightlife than Lagos but more local-feeling than Albufeira. Good mid-range hotel options on the cliff edge with sea views.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Albufeira",
                  type: "Central · Best resort infrastructure",
                  price: "€40–200/night",
                  badge: "Most facilities",
                  desc: "The Algarve&apos;s biggest tourist town — the best resort infrastructure, widest range of hotels and apartments, and the strongest nightlife. Less authentic than Lagos or Carvoeiro but very practical for families and groups. Central location gives good access to both west and east Algarve. Very busy in July–August.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Sagres",
                  type: "Western tip · Wild and quiet",
                  price: "€40–120/night",
                  badge: "Most remote",
                  desc: "Staying in Sagres itself gives you the dramatic west-coast experience — wilder, less crowded, genuinely Atlantic. Good for surfers and travellers who want the least-touristy version of the Algarve. Limited nightlife and fewer restaurants but the sunsets from Cabo de São Vicente are yours every evening.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Quinta do Lago / Vale do Lobo",
                  type: "Luxury resort area · Eastern Algarve",
                  price: "€250–600/night",
                  badge: "Luxury tier",
                  desc: "The Algarve&apos;s luxury belt — resort hotels, golf courses, Michelin-starred restaurants, and private beach clubs. Home to Vila Vita Parc, Conrad Algarve, and Bela Vista Hotel. Best for a luxury trip focused on golf, spa, and fine dining. Less convenient for the western cliff beaches.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in the Algarve</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The Algarve has some of the best seafood in Europe. The key dishes: cataplana (copper-pot seafood stew), grilled dourada (sea bream) and robalo (sea bass), fresh tuna steak from Sagres waters, arroz de marisco (seafood rice), and piri piri chicken from the charcoal grill. Budget €12–22 per main course at a good local restaurant.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "O Camilo, Lagos",
                  t: "Clifftop seafood · Praia do Camilo, Lagos",
                  d: "Built into the cliff face above its own small beach south of Lagos. The freshest fish and seafood in Lagos — grilled dourada, cataplana, and tuna carpaccio with cliff and ocean views from the terrace. Mains €16–28. Book a table on the terrace in advance for lunch. One of the genuinely great restaurant settings in Portugal.",
                  b: "Best setting",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Restaurante Pont&apos;a Pé, Sagres",
                  t: "Harbour fish · Sagres port",
                  d: "The best-known restaurant in Sagres harbour — catch of the day on a terrace overlooking the fishing boats. The tuna, sea bream, and monkfish come from boats you can see in the harbour. Simple, honest cooking at honest prices: mains €11–18. Very popular — arrive before 12:30pm or after 2pm.",
                  b: "Best in Sagres",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "A Fábrica do Costa, Carvoeiro",
                  t: "Traditional Algarvio · Carvoeiro village",
                  d: "A local institution in Carvoeiro serving traditional Algarve cooking — cataplana cooked to order (allow 40 minutes, serves two), arroz de polvo (octopus rice), and piri piri chicken from the charcoal grill. Indoor and outdoor seating. Mains €13–22. Ask for the catch of the day — it&apos;s always the best choice.",
                  b: "Best cataplana",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Pastelaria Garrett, Lagos",
                  t: "Café · Lagos old town",
                  d: "The best pastéis de nata in Lagos — the flaky custard tarts that are Portugal&apos;s greatest contribution to world food (€1.20 each). Breakfast here with a bica (Portuguese espresso) before heading to Ponta da Piedade. Open from 7:30am. Also good for a mid-afternoon coffee break in the old town.",
                  b: "Best pastéis de nata",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Piri Piri Chicken at any Churrasqueira",
                  t: "Street food · Throughout the Algarve",
                  d: "Every Algarvian town has a churrasqueira (charcoal grill restaurant) serving piri piri chicken — half a free-range chicken flame-grilled over charcoal with a piri piri chilli and olive oil baste. €7–10 per half chicken, served with chips and salad. The best piri piri in Portugal is here, not in Lisbon. Look for the smoke.",
                  b: "Essential local food",
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
            destination="Algarve Portugal"
            hotels={[
              {
                name: "Bela Vista Hotel & Spa",
                type: "Boutique luxury · Praia da Rocha, Portimão",
                price: "From €180/night",
                rating: "5",
                badge: "Most historic",
                url: "https://www.booking.com/hotel/pt/bela-vista.html?aid=2820480",
              },
              {
                name: "Vila Vita Parc Resort",
                type: "5-star resort · Porches (2 Michelin stars)",
                price: "From €350/night",
                rating: "5",
                badge: "Most luxurious",
                url: "https://www.booking.com/hotel/pt/vila-vita-parc.html?aid=2820480",
              },
              {
                name: "Vivenda Miranda, Lagos",
                type: "Boutique · Lagos cliffs",
                price: "From €130/night",
                rating: "4",
                badge: "Best Lagos hotel",
                url: "https://www.booking.com/hotel/pt/vivenda-miranda.html?aid=2820480",
              },
              {
                name: "Casa da Pedra, Carvoeiro",
                type: "Guesthouse · Carvoeiro village",
                price: "From €65/night",
                rating: "4",
                badge: "Best value",
                url: "https://www.booking.com/hotel/pt/casa-da-pedra-carvoeiro.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Ponta da Piedade Guided Kayak Tour",
                duration: "2.5 hrs",
                price: "From €28/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=ponta+da+piedade+kayak+lagos&partner_id=PSZA5UI",
              },
              {
                name: "Benagil Cave Boat Tour from Carvoeiro",
                duration: "1 hr",
                price: "From €20/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=benagil+cave+boat+tour&partner_id=PSZA5UI",
              },
              {
                name: "Algarve Coast Full Day Tour from Lagos",
                duration: "8 hrs",
                price: "From €45/person",
                url: "https://www.getyourguide.com/s/?q=algarve+coast+tour+lagos&partner_id=PSZA5UI",
              },
              {
                name: "Sagres & Cape St Vincent Tour",
                duration: "4 hrs",
                price: "From €35/person",
                url: "https://www.getyourguide.com/s/?q=sagres+cape+st+vincent+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🌊",
                  title: "Trying to Swim into Benagil Cave",
                  desc: "Every season people get into trouble attempting to swim into Benagil Cave from the beach. It requires a 200-metre open-sea swim around a headland in Atlantic swell — not a calm bay. The cave is inaccessible on foot. Book a boat tour (€20–35) or guided kayak (€28–35). The cave is entirely worth the cost; the independent swim is not worth the risk.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🗺️",
                  title: "Skipping Sagres",
                  desc: "Most Algarve visitors cluster around Lagos, Albufeira, and the central coast. Sagres, 30km further west, is where the Atlantic truly takes over — wilder, less touristy, with the most dramatic sunsets on the peninsula. The Fortaleza de Sagres (€3) and Cabo de São Vicente (free) are the most historically and visually significant stops in the Algarve. Sagres takes half a day; make it Day 3.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🚌",
                  title: "Not Renting a Car",
                  desc: "The Algarve has a reasonable bus network connecting towns (Eva Transportes), but the bus does not go to Ponta da Piedade, Praia Dona Ana, Praia da Marinha, Cabo de São Vicente, or any of the cliff-path beaches. If you don&apos;t rent a car, you will spend the trip in the towns rather than on the coastline. Hire a car at Faro Airport on arrival — €20–35/day in shoulder season.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "☀️",
                  title: "Visiting in July or August",
                  desc: "Peak summer means traffic queues on every coastal road, full car parks at every beach by 10am, hotel prices 60–100% higher than shoulder season, and Benagil Cave with 40 boats circling it simultaneously. May–June and September–October deliver 90% of the beauty at 40–50% of the crowds and significantly lower prices. The water is warm and the weather is just as good.",
                  color: "bg-pink-50 border-pink-200",
                },
                {
                  icon: "🏖️",
                  title: "Staying on One Stretch of Coast",
                  desc: "Travellers who base themselves in Albufeira and don&apos;t drive west often miss the Algarve entirely. The western stretch — Lagos, Ponta da Piedade, Sagres — is the most dramatic. The central coast (Carvoeiro, Benagil) is the most unusual. The east (Tavira, Meia Praia) is the most local. Drive the whole coastline; that is what the hire car is for.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for the Algarve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🚗",
                  title: "Rent a Car at Faro Airport — Non-Negotiable",
                  desc: "Public transport connects towns but not beaches. Half the best coastal scenery requires a short drive and a cliff-path walk. Book in advance for shoulder season (better rates and guaranteed availability). A convertible on the Sagres coastal road on a clear September afternoon is one of the great drives of Southern Europe.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "⏰",
                  title: "Book Benagil Tour for 9am — First Slot",
                  desc: "By 11am in any season, Benagil Cave has 20–40 boats anchored inside. The first tours at 9–9:30am often have the cave largely to themselves. Book online the night before (or earlier in July–August when tours sell out days in advance). Arrive at the Carvoeiro beach jetty 15 minutes early.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🏖️",
                  title: "Every Beach Is Different — Drive the Coast",
                  desc: "The Algarve is not one beach. West-coast beaches (Praia do Amado, Praia da Arrifana) face the open Atlantic with surf. South-coast cliff coves (Ponta da Piedade, Praia Dona Ana) are sheltered and turquoise. East-coast beaches (Tavira island, Meia Praia) are long, flat, and sandy. Drive the full 150km if you can.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🐟",
                  title: "Eat Fish in Sagres, Not at a Tourist Strip",
                  desc: "Sagres is a working fishing port. The harbour restaurants serve fish caught that morning at prices that have nothing to do with the tourist Algarve. Grilled sea bream for €11, fresh tuna steak for €14, monkfish cataplana for two for €28. This is what the Algarve actually tastes like, before it became a holiday destination.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🌅",
                  title: "Cabo de São Vicente at Sunset — Arrive Early",
                  desc: "In summer, dozens of cars park at Cabo de São Vicente for the sunset. Arrive 45 minutes before to find a good spot on the cliff edge. In shoulder season (May–June, September–October), it&apos;s quieter but still worth arriving early to walk the headland before the light changes. Bring a windproof layer — the cape is always windy.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "💳",
                  title: "Portugal Is Not Cheap in High Season",
                  desc: "The Algarve in July–August is not budget travel. Hotels treble, hire cars double, and beach parking can cost €10–15/day. In May–June and September–October, the same hotel room costs 40–60% less and the coastline is dramatically less crowded. The Algarve is Europe&apos;s most price-sensitive summer destination — the timing difference is significant.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Algarve" />

          {/* Combine With */}
          <CombineWith currentSlug="algarve-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "What is the best base for an Algarve trip?",
                  a: "Lagos for the western cliff beaches (Ponta da Piedade, Praia Dona Ana) and easy access to Sagres. Carvoeiro or Portimão for central coast access including Benagil Cave. Tavira for the east — quieter, more authentic, beautiful Roman bridge. Lagos is the most popular choice for 4-day trips because it has the most character and best access to both the western cliffs and Sagres.",
                },
                {
                  q: "Do I need a car in the Algarve?",
                  a: "For a 4-day trip covering multiple beaches and Sagres, yes. Public buses connect towns but the most dramatic coastline is only reachable by car and short hikes. Renting at Faro Airport is straightforward — international chains plus local companies. €20–35/day in shoulder season. Parking at beaches can be tight in July–August.",
                },
                {
                  q: "Is Benagil Cave accessible without a tour?",
                  a: "No safe independent access exists for most people. You cannot walk to it along the cliffs. Swimming from Benagil beach requires a 200m open-sea swim around a headland in Atlantic swell — dangerous for anyone without strong open-water swimming experience. Boat tours (€20–35) and guided kayak tours (€28–35) are the correct options. Book online the evening before or earlier in peak season.",
                },
                {
                  q: "What is the best time to visit the Algarve?",
                  a: "May–June is ideal — warm weather (24–28°C), sea temperature rising to 19–21°C, spring wildflowers still on the cliff tops, and dramatically fewer crowds than summer. September–October is equally good — warm sea after a full summer of heating, smaller crowds, lower prices. Avoid July–August unless you enjoy queues and premium prices. November–March is quiet but some beach facilities close.",
                },
                {
                  q: "How does the Algarve compare to other European beach destinations?",
                  a: "The Algarve&apos;s distinctive element is its geology — the golden limestone cliffs, arches, and sea caves are uniquely dramatic compared to the Mediterranean. The water is cooler than Greece or Turkey (Atlantic versus Mediterranean) but the coastal landscape is more theatrical. It is also significantly cheaper than the Amalfi Coast or Santorini. Best for active travellers who want kayaking and cliff walks alongside beach time.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Algarve trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-algarve", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/algarve-budget-guide", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/benagil-cave-guide", label: "Benagil Cave guide", icon: "🏖️" },
                { href: "/blog/sagres-portugal-guide", label: "Sagres guide", icon: "🌊" },
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
          <RelatedGuides currentSlug="algarve-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Coastal Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Lisbon in 4 Days — History &amp; Tiles", href: "/blog/lisbon-4-days" },
                { label: "Porto in 3 Days — Wine &amp; Bridges", href: "/blog/porto-3-days" },
                { label: "Barcelona in 4 Days — Gaudí &amp; Coast", href: "/blog/barcelona-4-days" },
                { label: "Madrid in 3 Days — Museums &amp; Tapas", href: "/blog/madrid-3-days" },
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
