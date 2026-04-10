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
const ATHENS_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Athens Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
  { id: "landmarks",  emoji: "🏛️", label: "Landmark Guide" },
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
          href: `mailto:?subject=Athens 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Athens in 3 Days — Acropolis, Plaka and rooftop bars with Parthenon views&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/athens-3-days"
        imageUrl="https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=80"
        description="Athens in 3 Days: Acropolis timing secrets, Parthenon at dawn, Plaka alleyways, rooftop bars with Parthenon views — complete guide with real euro costs."
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
export default function AthensClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={ATHENS_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="athens acropolis parthenon greece ancient hill"
            fallback="https://images.unsplash.com/photo-1555993539-1732b0258235?w=1600&q=80"
            alt="Athens Acropolis and Parthenon on rocky hill against blue sky Greece"
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
              <span className="text-white/70">Athens 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Athens in 3 Days:
                <em className="italic text-amber-300"> Acropolis, Plaka &amp; the Cradle of Democracy</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The Acropolis at 8am before the tour buses arrive, Plaka alleyways, rooftop bars with the Parthenon lit up at night — and souvlaki from the place with the handwritten Greek menu. The complete guide.
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
              <span>🏛️ Athens, Greece</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From €35/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Acropolis at 8am — standing where democracy was invented, looking down at a city that has been continuously inhabited for 3,400 years — is one of the great travel experiences. The rest of Athens matches it: Plaka alleyways, Ancient Agora stones, and the Parthenon glowing white against a sky that seems impossibly blue.
            </p>
          </blockquote>

          {/* ── WHAT ATHENS ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Athens Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Athens is not a city that eases you in gently. The Acropolis dominates the skyline from almost anywhere you stand, the ancient Agora is in the middle of the modern city, and the streets of Plaka run directly beneath 2,500-year-old ruins. Most European capitals arrange their history in museums. Athens wears it outdoors, at full scale, in the middle of everyday life.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The city has been continuously inhabited since approximately 1,400 BCE — making it one of the oldest still-inhabited cities in the world. At the height of the Classical period (5th century BCE) it gave the world democracy, the jury trial, the philosophical tradition that underpins Western thought, and some of the greatest architecture ever constructed. The Parthenon, completed in 432 BCE, remains one of the most technically sophisticated stone structures ever built.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Modern Athens often surprises visitors: it is a lively, noisy, graffiti-covered city with excellent food, a real café culture, and neighborhoods — Psyrri, Exarcheia, Koukaki — that have nothing to do with ancient history and everything to do with ordinary Greek urban life. The two Athenses coexist without apology, which is what makes it worth more than a single day.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Main Airport" value="ATH" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Jun, Sep–Oct" />
              <StatCard icon="🏛️" label="Sites on Acropolis" value="7+" />
              <StatCard icon="💰" label="Budget From" value="€35/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Athens</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "18–28°C, warm enough for the Acropolis in a light layer, cool enough to walk without wilting. Wildflowers on Filopappou Hill. Crowds are building but not yet peak. April–May is the sweet spot — good light, manageable queues, reasonable hotel rates.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Autumn — Excellent",
                  d: "22–28°C, sea still warm enough to swim, summer crowds thinning by mid-September. October is arguably the best single month: golden light, fewer tourists, and the same blue skies. One of the best times in the entire Mediterranean.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🔥",
                  t: "Summer — Hot and Crowded",
                  d: "37–42°C. The Acropolis hill has no shade. The combination of white marble reflecting heat, zero tree cover, and thousands of tourists makes it genuinely difficult. If you must visit in summer, arrive at 7:45am for the 8am opening and be off the hill by 10:30am. Do everything else in the evening.",
                  b: "Go early or not at all",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Nov–Mar",
                  i: "🌧️",
                  t: "Winter — Quiet and Mild",
                  d: "10–16°C. Athens winters are mild by northern European standards but can be wet and grey. Almost no tourists at major sites — you can have the Ancient Agora almost to yourself. Hotels are 30–50% cheaper. Christmas to January: the city is decorated, the museums are empty, and a souvlaki in the sun on a mild December day is surprisingly good.",
                  b: "For independent travellers",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Athens</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Athens International Airport Eleftherios Venizelos (ATH) is 33km east of the city centre. The <strong className="font-medium">Metro Line 3</strong> connects the airport directly to Syntagma (city centre) in 40 minutes for €10. It runs from 5:30am to midnight. No need for a taxi unless you arrive after midnight.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚇",
                  t: "Metro Line 3 from ATH Airport (recommended)",
                  d: "ATH Airport → Syntagma: 40 minutes, €10 single / €18 return. Trains run every 30 minutes, 5:30am to midnight. Air-conditioned, direct, no traffic. The single best way to reach the centre. Buy tickets at the airport metro station before boarding.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "Express Bus X95 (Syntagma)",
                  d: "Airport to Syntagma Square: 60–90 minutes depending on traffic, €6.40. Runs 24 hours. Slower than the metro but cheaper and useful for late-night arrivals. Bus stop is at the airport arrivals level.",
                  b: "24hr option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚕",
                  t: "Taxi from Airport",
                  d: "Fixed rate from ATH Airport: €38 during the day (5am–midnight), €54 at night. Takes 30–50 minutes depending on traffic. Use official yellow taxis from the designated rank — avoid touts inside the terminal. Useful for groups of 3–4 splitting the cost.",
                  b: "Groups / late arrivals",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🇮🇳",
                  t: "Flying from India",
                  d: "Mumbai / Delhi to ATH: typically one stop via Dubai, Doha, Istanbul, or Frankfurt. Total journey 9–14 hours. Airlines: Air India, Emirates, Qatar Airways, Turkish Airlines, Lufthansa. Direct flights are rare — most routes connect through the Gulf or Europe. Book 6–8 weeks ahead for best fares. Schengen visa required for Indian passport holders.",
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

          {/* ── 3-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Athens Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is designed around the single most important timing rule in Athens: arrive at the Acropolis at 8am before tour groups descend. Everything else follows from that.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Acropolis · Acropolis Museum · Plaka · Monastiraki · Filopappou Hill Sunset"
                cost="€45–60"
                items={[
                  "7:45am — Arrive at the Acropolis ticket office before it opens at 8am. The combined ticket is €30 and covers the Acropolis, Ancient Agora, Roman Agora, Kerameikos Cemetery, Hadrian&apos;s Library, and more — valid for 5 days. Individual tickets for the same sites would cost €70+.",
                  "8:00am — Enter the Acropolis. For the first 30–45 minutes you have the hill nearly to yourself. The Parthenon in early morning light, with the city spread out below and almost no one around, is one of the defining travel experiences in Europe. By 10:30am, tour groups arrive in waves of 500.",
                  "9:30am — Erechtheion and the Caryatid Porch — the six female figures holding up the roof on the north side of the Acropolis. The ones you see are casts; the originals are in the Acropolis Museum. Temple of Athena Nike at the entrance — the smallest and oldest temple on the hill.",
                  "11:00am — Acropolis Museum (included in the combined ticket, a short walk downhill). This is where the actual sculptures are — the Elgin Marbles controversy is visible here, with empty spaces in the Parthenon frieze where the pieces taken to London should be. Give it 90 minutes minimum.",
                  "1:00pm — Lunch in Monastiraki — souvlaki pita (€3–5) from Kostas on Adrianou Street or Thanasis on Mitropoleos. These are the real spots; avoid the tourist tavernas on Monastiraki Square with the photo menus.",
                  "3:00pm — Walk through Plaka — the oldest surviving neighborhood in Athens, Ottoman-era houses mixed with neoclassical architecture, narrow alleys, and small Byzantine churches. Tower of the Winds (Roman Agora, €8) is the 2,000-year-old marble clock tower at the edge of Plaka.",
                  "5:30pm — Filopappou Hill (free) — a 10-minute walk from the Acropolis. Better unobstructed view of the Parthenon than Lycabettus Hill, with half the tourists and a proper path through pines. The hill turns golden in the last light.",
                  "8:00pm — Dinner at a Plaka taverna — moussaka, a Greek salad with proper block feta, and a carafe of house wine for €15–20.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="National Archaeological Museum · Ancient Agora · Monastiraki Flea Market · Rooftop Bar"
                cost="€35–55"
                items={[
                  "9:00am — National Archaeological Museum (€15, Patission Street). The world&apos;s best collection of ancient Greek art — the Mask of Agamemnon, the Antikythera Mechanism (the world&apos;s first analogue computer, 100 BCE), the Artemision Bronze, and rooms of sculpture, pottery, and jewelry spanning 5,000 years. Give it 2.5 to 3 hours.",
                  "12:00pm — Lunch in Exarcheia — the bohemian neighborhood just behind the museum. Cheap, genuine, no tourist menus. Spanakopita from a bakery (€2) and coffee at one of the square cafés.",
                  "2:30pm — Monastiraki Flea Market — permanent stalls along Ifestou Street selling antiques, vintage clothing, coins, and everything else. Sunday is a full open-air market extending into Avissinias Square. Weekdays are calmer.",
                  "4:00pm — Ancient Agora (included in combined ticket) — where Socrates argued philosophy, St. Paul preached to the Athenians, and the first democratic assembly met. The Stoa of Attalos (fully reconstructed) now houses a museum. The Temple of Hephaestus at the top of the site is the best-preserved ancient Greek temple in existence.",
                  "6:30pm — Aperitivo hour at a Monastiraki bar — ouzo or tsipouro (€4–6), served with small snacks (mezedes). This is how Athens actually drinks in the early evening.",
                  "8:00pm — A for Athens rooftop bar (Monastiraki Square) — the Parthenon is directly in front of you, lit white against the night sky. Cocktails from €12. Arrive before 9pm for a table with the view.",
                  "9:30pm — Dinner in Psyrri — the neighborhood just west of Monastiraki. Cheaper than Plaka, same quality food, and where actual Athenians eat. Loukoumades (Greek honey donuts) from the stall near the flea market for dessert.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Cape Sounion Day Trip or Piraeus Ferry · Farewell Dinner"
                cost="€25–55"
                items={[
                  "Option A (recommended): Cape Sounion — KTEL bus from Pedion Areos terminal (€7.40 each way, 90 minutes). The Temple of Poseidon stands on a cliff 60m above the Aegean, built in 444 BCE. Byron carved his name in the stone here. The view of the Aegean from the temple — especially in late afternoon light — is one of the finest in Greece. Return by evening.",
                  "Option B: Athens Riviera — tram from Syntagma (€1.40) to Glyfada beach (30 minutes). Swim in the Saronic Gulf, eat fresh grilled fish at a harbour taverna, and return by evening. Easy, free from crowds, and a completely different side of Athens from the ancient sites.",
                  "Option C: Piraeus ferry to Aegina — ferry from Piraeus (€9 each way, 1 hour by conventional ferry or 35 minutes by Flying Dolphin). Aegina is the most accessible Greek island from Athens — no cars, pistachio groves, the Temple of Aphaia (contemporary with the Parthenon), and proper island seafood. A complete day trip.",
                  "Evening: Final dinner in Psyrri or Koukaki — the neighborhood just south of the Acropolis has become the best eating-out area in Athens for non-tourists. Grilled octopus, fresh tzatziki, and a bottle of Assyrtiko white wine from Santorini.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Athens" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Athens Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. The €30 combined ticket covers the Acropolis and six other major sites — buy it at any of them and it is valid for 5 days.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "The Acropolis",
                  e: "€30 combined ticket",
                  d: "The rocky hill above the city crowned by the Parthenon, Erechtheion, Temple of Athena Nike, and Propylaia. The combined ticket covers entry here and six other sites. Arrive at opening (8am). The climb from the main entrance takes about 10 minutes.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "The Parthenon",
                  e: "Included in Acropolis ticket",
                  d: "The Doric temple dedicated to Athena, completed in 432 BCE. One of the most studied and copied buildings in history. The figures you see on the frieze are casts — originals are split between the Acropolis Museum and the British Museum in London. Ongoing restoration work is visible from the outside.",
                  t: "Icon · 30–45 mins",
                },
                {
                  n: "Acropolis Museum",
                  e: "Included in combined ticket",
                  d: "One of the finest purpose-built museum experiences in Europe — the building has glass floors over an ongoing excavation. The Parthenon Gallery on the top floor has the frieze sculptures at original scale, with the Aegean visible through the windows. The museum makes the Acropolis itself significantly more legible.",
                  t: "Must see · 1.5–2 hrs",
                },
                {
                  n: "Erechtheion & Caryatid Porch",
                  e: "Included in Acropolis ticket",
                  d: "The temple with six female figures (Caryatids) supporting the roof on its south porch — one of the most recognisable images of ancient Greece. The originals are in the Acropolis Museum. Built on the most sacred spot of the Acropolis where Athena and Poseidon competed for patronage of the city.",
                  t: "Acropolis · 20 mins",
                },
                {
                  n: "Theatre of Dionysus",
                  e: "Included in combined ticket",
                  d: "The world&apos;s first purpose-built theatre, where the works of Sophocles, Euripides, and Aristophanes were first performed in the 5th century BCE. Carved into the south slope of the Acropolis hill. The front-row marble seats with carved armrests were reserved for priests and officials.",
                  t: "Historical · 30 mins",
                },
                {
                  n: "Ancient Agora",
                  e: "Included in combined ticket",
                  d: "The civic centre of ancient Athens — marketplace, law courts, administrative offices, and philosophical lecture halls. Socrates was tried and condemned to death here. The Temple of Hephaestus at the western end is the best-preserved ancient Greek temple in the world — never converted, never demolished.",
                  t: "Must see · 1–1.5 hrs",
                },
                {
                  n: "National Archaeological Museum",
                  e: "€15",
                  d: "The world&apos;s most important collection of ancient Greek art and archaeology. Key highlights: Mask of Agamemnon (1550 BCE), Antikythera Mechanism (100 BCE), Artemision Bronze (460 BCE), the Thira frescoes from Santorini. Rooms span 5,000 years from the Neolithic to the Roman period.",
                  t: "Full morning · 2.5–3 hrs",
                },
                {
                  n: "Cape Sounion (day trip)",
                  e: "€8 site entry + €7.40 bus",
                  d: "The Temple of Poseidon at Cape Sounion — 60km from Athens on a cliff above the Aegean, built in 444 BCE, the same decade as the Parthenon. Byron&apos;s carved name is visible on one of the columns. The last bus back departs around 7pm — time the visit to see the sunset over the Aegean from the temple.",
                  t: "Day trip · All day",
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
            title="Athens — Acropolis, Plaka &amp; the Ancient City"
            subtitle="Where democracy was born and marble meets the Mediterranean sky."
            spots={[
              {
                name: "Parthenon at Dawn",
                query: "parthenon acropolis athens greece sunrise dawn ancient marble",
                desc: "The Parthenon in early morning light before the tour buses arrive — the single best reason to be at the Acropolis entrance at 7:45am.",
              },
              {
                name: "Plaka Neighborhood",
                query: "plaka athens neighborhood alleyway greece neoclassical old town",
                desc: "The oldest surviving neighborhood in Athens — Ottoman-era houses, Byzantine churches, and bougainvillea-draped alleyways beneath the Acropolis.",
              },
              {
                name: "Ancient Agora & Temple of Hephaestus",
                query: "ancient agora athens temple hephaestus greece ruins",
                desc: "The Temple of Hephaestus in the Ancient Agora — the best-preserved ancient Greek temple in existence, where Socrates once argued and democracy was practiced.",
              },
              {
                name: "Cape Sounion Temple of Poseidon",
                query: "cape sounion temple poseidon greece aegean cliff sunset",
                desc: "The Temple of Poseidon at Cape Sounion — 60m above the Aegean on a promontory 60km south of Athens, built in 444 BCE.",
              },
              {
                name: "Monastiraki & Acropolis View",
                query: "monastiraki square athens acropolis view greece flea market",
                desc: "Monastiraki Square with the Acropolis on the hill behind — the view that defines Athens for most visitors.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Athens is significantly cheaper than Paris, Amsterdam, or London — but entry fees add up. The €30 combined ticket is the single most important purchase: it replaces €70+ in individual admissions and is valid for 5 days.
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
                    ["🏨 Accommodation (2 nights)", "€20–40/night", "€80–150/night", "€200–500/night"],
                    ["🍽️ Food (3 days)", "€10–20/day", "€30–60/day", "€80–200/day"],
                    ["🚇 Transport (3 days)", "€3–8/day", "€15–30/day", "€30–100/day"],
                    ["🏛️ Activities & entry fees", "€10–20/day", "€20–50/day", "€100–300/day"],
                    ["TOTAL per day", "€43–88/day", "€145–290/day", "€410–1,100/day"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (€35–60/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostel dorm or cheap guesthouse in Psyrri or Koukaki (€20–40/night), souvlaki for lunch (€5), taverna dinner for two with carafe of wine (€25–30), metro everywhere. Completely comfortable and authentic Athens experience.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-800 mb-1">✨ Mid-Range (€120–200/day)</p>
                <p className="text-xs text-amber-700 font-light leading-relaxed">Boutique hotel in Plaka or Monastiraki with Acropolis views (€80–150/night), proper sit-down meals, the odd guided tour or food tour, rooftop bar cocktails. The sweet spot for most visitors to Athens.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (€350+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Hotel Grande Bretagne or Electra Metropolis (Acropolis-view suites from €300/night), Michelin-starred restaurants (Spondi, Hytra, Funky Gourmet), private Acropolis tour at dawn, private yacht to Cape Sounion.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Athens</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Athens has five distinct neighborhoods worth considering. Plaka and Monastiraki put you within walking distance of every ancient site. Koukaki and Psyrri give you a more local feel. Syntagma is central and convenient but prices are higher.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Monastiraki",
                  type: "Lively & central · Next to Ancient Agora",
                  price: "€70–200/night",
                  badge: "Best for first-timers",
                  desc: "The most animated neighborhood in central Athens — the flea market, the metro hub, and the rooftop bars with the Parthenon directly in view. Walking distance to the Acropolis, Ancient Agora, and Plaka. Noisier than Plaka at night.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Plaka",
                  type: "Historic & atmospheric · Below the Acropolis",
                  price: "€80–250/night",
                  badge: "Most atmospheric",
                  desc: "The oldest neighborhood in Athens — quiet alleyways, neoclassical houses, and small Byzantine churches. The Acropolis is visible from many windows. More upscale and quieter than Monastiraki. Excellent base if you want to wander at night without crowds.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Syntagma",
                  type: "Business & luxury · Parliament Square",
                  price: "€150–600/night",
                  badge: "Best luxury",
                  desc: "The Hotel Grande Bretagne and Electra Metropolis are here — both with Acropolis views and five-star service. Central for everything, on the metro, and with easy airport access. Hotel prices are the highest in the city but the location is unbeatable.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Koukaki",
                  type: "Residential & local · South of the Acropolis",
                  price: "€50–130/night",
                  badge: "Best local feel",
                  desc: "A quiet residential neighborhood that has become popular with longer-stay visitors. Good independent restaurants and cafés, 10-minute walk to the Acropolis south slope, and significantly cheaper than Plaka or Syntagma. Filopappou Hill is on the doorstep.",
                  color: "border-green-200 bg-green-50",
                },
                {
                  name: "Exarcheia",
                  type: "Bohemian & student · Behind the National Museum",
                  price: "€35–90/night",
                  badge: "Most authentic",
                  desc: "The edgy, politically-charged neighborhood that Athenians actually live in — independent bookshops, radical cafés, the best cheap food in the city, and a lively night scene. Not polished tourist Athens but a completely different and real face of the city. Very safe for visitors during the day.",
                  color: "border-rose-200 bg-rose-50",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Athens</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Athens has one of the best food cultures in Europe. The tourist trap is the photo-menu taverna on Monastiraki Square. The real experience is a backstreet place in Psyrri or Koukaki where the waiter tells you what&apos;s good today and the house carafe of wine costs €6.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Kostas (souvlaki)",
                  t: "Street souvlaki · Adrianou Street, Monastiraki",
                  d: "The most famous souvlaki spot in central Athens — a tiny counter on Adrianou Street that has been serving pork or chicken souvlaki pita since 1950. €3.50 per pita. Cash only. There is always a queue; it moves fast. This is the benchmark against which all other Athenian souvlaki is measured.",
                  b: "Iconic",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Varvakios Central Market",
                  t: "Food market · Athinas Street",
                  d: "The main covered food market of Athens — fish hall, meat hall, spice stalls, and surrounding shops selling olives, cheese, and produce. Not a tourist attraction: this is where Athenian restaurants buy their ingredients. The fish hall at 8am is extraordinary. The surrounding cafés serve cheap, excellent breakfast.",
                  b: "Morning market",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  n: "Psyrri tavernas",
                  t: "Neighbourhood dining · West of Monastiraki",
                  d: "The best neighborhood for dinner in central Athens. Grilled octopus, lamb chops, fresh tzatziki, and proper Greek salad with block feta — typically €15–25 for a full meal with wine. The kitchens open late (9pm is normal) and the atmosphere is lively without being touristy. Ask the waiter what is good today.",
                  b: "Best for dinner",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Spanakopita & bakery breakfast",
                  t: "Bakeries throughout the city",
                  d: "Every neighborhood in Athens has a proper bakery (φούρνος). Spanakopita (spinach and feta in flaky pastry), tiropita (cheese pie), and koulouri (sesame bread ring) for breakfast cost €1.50–€3. This is how most Athenians start the day — far better than a hotel buffet and a fraction of the cost.",
                  b: "Local breakfast",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Rooftop bars with Parthenon views",
                  t: "Cocktail bars · Monastiraki & Plaka",
                  d: "A for Athens (Monastiraki Square), Couleur Locale (Normanou Street), and several others offer direct Acropolis views from their rooftop terraces. Cocktails from €12. Arrive before 9pm for outdoor seating. The Parthenon lit white against the night sky while drinking a Greek gin and tonic is a singular Athens experience.",
                  b: "Evening essential",
                  c: "bg-purple-50 border-purple-200",
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
            destination="Athens Greece"
            hotels={[
              {
                name: "Hotel Grande Bretagne",
                type: "5-star luxury · Syntagma Square",
                price: "From €300/night",
                rating: "5",
                badge: "Most iconic",
                url: "https://www.booking.com/hotel/gr/grande-bretagne.html?aid=2820480",
              },
              {
                name: "Electra Metropolis Athens",
                type: "Luxury boutique · Syntagma",
                price: "From €180/night",
                rating: "5",
                badge: "Best rooftop view",
                url: "https://www.booking.com/hotel/gr/electra-metropolis-athens.html?aid=2820480",
              },
              {
                name: "Athens Center Square Hotel",
                type: "Mid-range · Monastiraki",
                price: "From €90/night",
                rating: "4",
                badge: "Best location",
                url: "https://www.booking.com/hotel/gr/athens-center-square.html?aid=2820480",
              },
              {
                name: "Tempi Hotel",
                type: "Budget boutique · Monastiraki",
                price: "From €50/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/gr/tempi.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Athens Acropolis Skip-the-Line Guided Tour",
                duration: "3 hrs",
                price: "From €35/person",
                badge: "Most booked",
                url: "https://www.getyourguide.com/s/?q=athens+acropolis+guided+tour&partner_id=PSZA5UI",
              },
              {
                name: "Athens Food Tour — Monastiraki & Psyrri",
                duration: "3.5 hrs",
                price: "From €65/person",
                badge: "Top rated",
                url: "https://www.getyourguide.com/s/?q=athens+food+tour&partner_id=PSZA5UI",
              },
              {
                name: "Cape Sounion & Temple of Poseidon Day Trip",
                duration: "5 hrs",
                price: "From €25/person",
                badge: "Best day trip",
                url: "https://www.getyourguide.com/s/?q=cape+sounion+day+trip+athens&partner_id=PSZA5UI",
              },
              {
                name: "Athens Evening Walking Tour with Dinner",
                duration: "4 hrs",
                price: "From €55/person",
                url: "https://www.getyourguide.com/s/?q=athens+evening+walking+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Athens</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🕛",
                  title: "Arriving at the Acropolis After 10am",
                  desc: "By 10:30am, tour groups arrive in waves. You will share the Parthenon with 500 people. The ticket office opens at 8am — be there at 7:45am. The 1.5-hour head start changes the entire experience and is the single most useful tip for visiting Athens.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🌡️",
                  title: "Visiting in July–August Unprepared",
                  desc: "Athens in July hits 37–42°C. The Acropolis has zero shade and the white marble reflects heat back at you. If you must visit in summer, be at the entrance before 8am. April–June and September–October give the same blue skies at 22–28°C with 40% fewer tourists.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🎭",
                  title: "Skipping the Acropolis Museum",
                  desc: "Most first-timers spend everything on the hill and rush the museum or skip it entirely. This is a mistake. The museum houses the actual Caryatids, the original Parthenon frieze sculptures, and a level of interpretive clarity that makes the Acropolis itself far more meaningful. Allow 90 minutes.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🗺️",
                  title: "Eating on Monastiraki Square",
                  desc: "The tavernas ringing Monastiraki Square with photo menus and touts outside are tourist traps. Walk one block in any direction — into Psyrri, into Plaka&apos;s back streets, or along Adrianou — and the price drops by 40% while the quality doubles. Rule: never eat anywhere with laminated photos on the menu.",
                  color: "bg-pink-50 border-pink-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Athens</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🎟️",
                  title: "Buy the €30 Combined Ticket",
                  desc: "The combined ticket covers the Acropolis, Ancient Agora, Roman Agora, Kerameikos Cemetery, Hadrian&apos;s Library, and three other sites — valid for 5 days. Individual tickets add up to €70+. It pays for itself before lunch on Day 1.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌃",
                  title: "The Acropolis is Lit Until Midnight",
                  desc: "The Parthenon is illuminated every night until midnight, visible from dozens of rooftop bars and from the streets of Plaka. The best rooftop view over cocktails: A for Athens (Monastiraki) and Couleur Locale (Psyrri). No entry fee, just the price of a drink.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🚇",
                  title: "Athens Metro is Exceptional",
                  desc: "€1.40 per journey, clean, punctual, and air-conditioned. The metro has archaeological exhibitions on the platforms at Syntagma and Monastiraki stations — artifacts found during construction displayed in glass cases. Worth a look even if you&apos;re not catching a train.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🍋",
                  title: "Order What the Waiter Recommends",
                  desc: "Avoid laminated photo menus. Ask what is good today — Greek cooking is highly seasonal and the daily specials (often not on the menu) are always the best dishes. The house wine in a carafe (oinomelo) is almost universally good and costs €5–8 for half a litre.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🏛️",
                  title: "Filopappou Hill Over Lycabettus",
                  desc: "The guidebooks send everyone to Lycabettus Hill for the Acropolis view — it&apos;s further away and requires a funicular or long climb. Filopappou Hill is a 10-minute walk from the Acropolis entrance, free, with a closer and less-obstructed view of the Parthenon. Far fewer tourists. Go here instead for sunset.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "💧",
                  title: "Tap Water is Safe in Athens",
                  desc: "Athens tap water is fully safe to drink and tastes clean — one of the few major Southern European cities where this is true. You do not need to buy bottled water. Save the €2–3 per bottle for a second souvlaki.",
                  color: "bg-rose-50 border-rose-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Athens" />

          {/* Combine With */}
          <CombineWith currentSlug="athens-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days do I need in Athens?",
                  a: "3 days is ideal — Acropolis plus Acropolis Museum takes a full morning. Day 2 covers the National Archaeological Museum and the Ancient Agora. Day 3 is best used for a day trip to Cape Sounion, Hydra island, or the Athens Riviera beaches. 2 days is the absolute minimum to see the main sites without feeling rushed.",
                },
                {
                  q: "Is Athens safe for tourists?",
                  a: "Athens is generally safe for tourists. The main risks are petty theft in crowded areas — the Monastiraki flea market, the metro at rush hour, and the areas around Omonia Square at night. Keep bags in front of you, use inside pockets for phones and wallets. The Exarcheia neighborhood has occasional political demonstrations but is safe for visitors during daylight hours.",
                },
                {
                  q: "What is the best area to stay in Athens?",
                  a: "Monastiraki or Plaka for first-timers — both are walking distance to every major ancient site, and the Acropolis is visible from many streets. Koukaki for a quieter and cheaper residential neighborhood just south of the Acropolis. Exarcheia for a genuinely local experience and the cheapest accommodation in the centre.",
                },
                {
                  q: "Can I drink tap water in Athens?",
                  a: "Yes — Athens tap water is safe to drink and tastes good. The city has a high-quality water supply from the mountains of Attica. You do not need to buy bottled water, which saves you €2–4 per bottle throughout the day.",
                },
                {
                  q: "What Greek foods should I try in Athens?",
                  a: "Souvlaki (grilled meat in a pita, €3–5), moussaka (layered aubergine, minced meat, and béchamel), spanakopita (spinach and feta pie), loukoumades (honey doughnuts), fresh tzatziki, taramasalata (fish roe dip), and proper Greek salad with a block of feta — not crumbled. Ouzo or tsipouro with mezedes in the early evening is a ritual worth participating in.",
                },
                {
                  q: "Do I need a visa to visit Athens from India?",
                  a: "Yes. Greece is in the Schengen Zone. Indian passport holders need a Schengen visa — apply at the Greek embassy or consulate. Processing time is 15–45 days. The fee is €80. You need bank statements showing approximately €100 per day, hotel bookings, a return flight, travel insurance with minimum €30,000 medical cover, and an employment letter. Apply well in advance of travel.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Athens trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-athens", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/athens-budget-guide", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/athens-airport-to-city", label: "Airport to city", icon: "✈️" },
                { href: "/blog/athens-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="athens-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Europe Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Santorini 4 Days — Caldera &amp; Sunsets", href: "/blog/santorini-4-days" },
                { label: "Rome 4 Days — Colosseum &amp; Vatican", href: "/blog/rome-4-days" },
                { label: "Barcelona 4 Days — Gaudí &amp; Beaches", href: "/blog/barcelona-4-days" },
                { label: "Istanbul 5 Days — Two Continents", href: "/blog/istanbul-5-days" },
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
