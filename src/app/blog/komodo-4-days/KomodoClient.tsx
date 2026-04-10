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
import { usePageUrl } from "@/lib/hooks";

// ── Table of Contents ─────────────────────────────────────────────────────────
const KOMODO_TOC = [
  { id: "honest",      emoji: "🦎",  label: "What Komodo Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "4-Day Itinerary" },
  { id: "landmarks",   emoji: "🏝️", label: "Landmark Guide" },
  { id: "budget",      emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",         emoji: "🍽️", label: "Where to Eat" },
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
          href: `mailto:?subject=Komodo 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Komodo in 4 Days — dragons, pink beach and world-class diving&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/komodo-4-days"
        imageUrl="https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1200&q=80"
        description="Komodo in 4 Days: trek with Komodo dragons, dive Castle Rock, swim at Pink Beach, hike Padar Island — complete travel guide with budget breakdown."
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
export default function KomodoClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={KOMODO_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="komodo dragon indonesia flores pink beach national park labuan bajo"
            fallback="https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1600&q=80"
            alt="Komodo dragon on Komodo Island Indonesia with ranger and pink sand beach"
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
              <span className="text-white/70">Komodo 4 Days</span>
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
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Komodo in 4 Days:
                <em className="italic text-amber-300"> Dragons, Pink Beach &amp; World-Class Diving</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The world&apos;s largest lizard, Castle Rock reef sharks, Pink Beach, Padar Island&apos;s three-bay viewpoint, and a wooden phinisi sailing between volcanic islands. Indonesia&apos;s wildest corner. Complete 2026 guide.
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
              <span>🇮🇩 Indonesia</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From $80/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The world&apos;s largest lizard — up to 3 metres, 70kg, venomous saliva capable of killing a buffalo in days — wanders through dry scrub while you walk with a ranger carrying a forked stick as your only protection. Pink sand beaches get their colour from crushed red coral. Castle Rock is rated among the best five dive sites on Earth. A wooden phinisi schooner carries you between volcanic islands as the sun sets over Flores. This is Komodo — Indonesia&apos;s wildest corner.
            </p>
          </blockquote>

          {/* ── WHAT KOMODO ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">🦎 What Komodo Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Komodo National Park is a UNESCO World Heritage Site in the eastern Indonesian province of East Nusa Tenggara, covering three main islands — Komodo, Rinca, and Padar — plus dozens of smaller uninhabited islands. The park sits in the Wallacea biogeographic zone, the transition line between Asian and Australasian wildlife, which is why its fauna is unlike anywhere else on earth.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Komodo dragon (Varanus komodoensis) is the park&apos;s apex predator: the largest living lizard species, found only on Komodo, Rinca, Flores, Gili Motang, and Padar. An estimated 5,700 individuals survive. The dragons are not caged — they roam freely across the islands, and ranger-guided treks take you into their territory on foot. The forked stick your ranger carries is not theatre. It is the actual safety tool used to redirect a charging dragon.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Below the surface, the park is equally extraordinary. The convergence of cold upwellings from the deep Banda Sea and warm Flores Sea water creates some of the highest marine biodiversity on earth. Castle Rock, a submerged seamount near the park&apos;s northern edge, is consistently ranked among the world&apos;s top five dive sites. Manta rays, reef sharks, whale sharks in season, sea turtles, and mola mola (ocean sunfish the size of cars) are all regularly encountered. Even snorkeling in basic gear at Batu Bolong or Pink Beach reveals a reef in extraordinary condition.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Gateway Airport" value="LBJ, Labuan Bajo" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Aug" />
              <StatCard icon="🦎" label="Komodo Dragons" value="5,700+" />
              <StatCard icon="💰" label="Budget From" value="$80/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Komodo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Aug",
                  i: "☀️",
                  t: "Dry Season — Best Overall",
                  d: "Calm seas, 30+ metre diving visibility, optimal manta ray encounters at Manta Point, and Komodo dragons active in the morning sun. April and May have fewer crowds than July–August peak. The ideal window for diving, snorkeling, and dragon trekking.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep",
                  i: "🌅",
                  t: "Late Dry — Still Good",
                  d: "Seas usually still calm in September, though swell begins building toward the end of the month. Diving visibility remains good (20–30m). Crowds thin out after August peak season. A solid second choice if April–August is fully booked.",
                  b: "Acceptable",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Oct–Nov",
                  i: "🌧️",
                  t: "Transition — Use Caution",
                  d: "The west monsoon begins building. Seas become rougher, boat crossings to Komodo and Rinca less comfortable, and diving visibility drops. Some dive sites become inaccessible in heavy swells. Not recommended unless you have no other option.",
                  b: "Caution advised",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec–Mar",
                  i: "🌊",
                  t: "Wet Season — Avoid for Diving",
                  d: "Peak west monsoon. Large ocean swells, strong currents, poor visibility (5–10m). Many dive sites closed. Boat trips to Komodo Island can be rough and uncomfortable. Dragon trekking is still possible but island hopping is significantly impaired. Not recommended for a diving-focused trip.",
                  b: "Not recommended",
                  c: "bg-red-50 border-red-200",
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

          {/* ── HOW TO REACH ── */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Labuan Bajo</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> You cannot fly internationally direct to Labuan Bajo. The gateway is <strong className="font-medium">LBJ Airport (Komodo Airport)</strong> in Labuan Bajo, Flores — reached via domestic flights from Bali (1–1.5 hrs, IDR 400,000–800,000) or Jakarta (3 hrs). Most travellers route through Bali.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly Bali (DPS) → Labuan Bajo (LBJ) — recommended",
                  d: "Multiple daily flights on Garuda Indonesia, Lion Air, Batik Air, and TransNusa. Flight time 1–1.5 hours. Cost IDR 400,000–800,000 one way. Garuda&apos;s 6:30am departure arrives in Labuan Bajo by 8am, leaving time to board a boat by 9am on Day 1. Book in advance — seats sell out in peak season (Jul–Aug).",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "Fly Jakarta (CGK/HLP) → Labuan Bajo (LBJ)",
                  d: "Direct flights from Jakarta on Lion Air, Garuda, and Batik Air. Flight time approximately 3 hours. Cost IDR 600,000–1,500,000. Good option if connecting from Jakarta or transiting from outside Indonesia without a Bali stopover.",
                  b: "Good option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚢",
                  t: "Liveaboard from Bali — for serious divers",
                  d: "Luxury and mid-range liveaboards depart from Bali and cruise east to Komodo over 5–10 days. Cost $80–300/person/night including all diving, meals, and accommodation aboard. The Bali–Komodo route passes through Lombok, Sumbawa, and Moyo Island. This is the optimal way to experience the full dive circuit.",
                  b: "For divers",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚌",
                  t: "Overland from Flores — for adventurers",
                  d: "If already on Flores island, public buses and shared vans connect Ende, Maumere, and other Flores towns to Labuan Bajo. Journey times are long (3–8 hours depending on start point) but the cross-Flores drive through volcanoes, rice terraces, and traditional villages is genuinely spectacular.",
                  b: "Adventurous",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Komodo Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary is designed for a budget-to-mid-range independent traveller using shared day boat tours. Adjust to a private phinisi charter or liveaboard for a more premium experience.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrive Labuan Bajo — Town Exploration, Sunset Hill &amp; Boat Arrangements"
                cost="$30–50"
                items={[
                  "Arrive at Labuan Bajo (LBJ) airport. The town is a 5-minute drive from the terminal. Budget accommodation in guesthouses and losmen on the main waterfront strip costs $12–25/night. La Prima Hotel is the best-value mid-range option at $40–70/night with bay views.",
                  "Afternoon — Explore the waterfront harbour. Labuan Bajo is a small fishing port rapidly transforming into Indonesia&apos;s flagship eco-tourism base. The harbour is filled with wooden phinisi boats of all sizes. The contrast between traditional blue-painted fishing boats and modern dive liveaboards is striking.",
                  "4:30pm — Walk to Bukit Cinta (Love Hill) or Puncak Waringin viewpoint for sunset over the bay. Both are free, 10–15 minutes from the waterfront. The view — dozens of islands turning purple against orange sky with phinisi boats at anchor below — is one of those views that feels genuinely unreal.",
                  "Evening — Arrange your boat tour for Days 2–3 at one of the licensed tour operators along the waterfront. Budget option: join a shared open boat day tour to Komodo Island, Pink Beach, and Padar Island ($25–40/person/day including national park fees, ranger, basic lunch, and snorkeling gear). Shared boats depart around 7am.",
                  "Dinner: fresh seafood at the night market or a local warung on the waterfront. Grilled snapper with sambal and rice: $4–7. Cold Bintang beer: $2–3.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Komodo Island Dragon Trek + Pink Beach + Padar Island Viewpoint"
                cost="$60–85"
                items={[
                  "6:30am — Depart harbour on shared open boat. The boat ride to Komodo Island takes 2–3 hours through the Flores Sea, passing between volcanic islands. Bring sunscreen and a light jacket — open boats are cold at speed in the early morning.",
                  "9:00am — Komodo Island (national park entry fee IDR 150,000, on top of boat tour price). You are assigned a ranger with a forked wooden stick. Komodo dragons roam freely — they are not caged. The ranger keeps you at safe distance. On a standard 1–2 hour short trek you may encounter 3–15 dragons. The largest old males can exceed 3 metres and 90kg.",
                  "11:30am — Pink Beach (Pantai Merah): the colour comes from microscopic foraminifera (red coral organisms) mixed into the white sand, producing a distinctly pink tint most vivid in low-angle morning or late afternoon light. The water is exceptionally clear. Snorkeling reveals staghorn coral and reef fish at 2–5 metres depth.",
                  "1:30pm — Lunch on the boat: nasi campur or grilled fish. Simple but functional, and eating between volcanic islands in the Flores Sea is its own experience.",
                  "2:30pm — Padar Island viewpoint hike (30–45 minutes each way up the ridge). The summit view is Indonesia&apos;s most photographed image: three bays of different sand colours — white, black, and pink — in a volcanic crater landscape. The hike is steep but not technical. On a clear day, this view justifies the entire trip.",
                  "5:00pm — Return to Labuan Bajo harbour. Sunset over the bay from the boat as you arrive is a bonus.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Rinca Island Dragon Encounter + Manta Point Snorkeling + Batu Bolong"
                cost="$55–80"
                items={[
                  "7:00am — Second boat day: Rinca Island (1.5 hours from Labuan Bajo, closer than Komodo). Rinca is considered better for dragon sightings — the ranger station has resident dragons that congregate near the kitchen. Seeing 5–10 dragons in the first 10 minutes of arrival is common. The landscape — dry savannah, lontar palm groves, hill viewpoints — differs from Komodo&apos;s more forested terrain.",
                  "9:30am — Manta Point snorkeling. Manta rays congregate at a cleaning station in the waters between Rinca and Komodo. The mantas here are reef mantas with 2–4 metre wingspan, habituated to snorkelers. The cleaning station involves manta rays circling slowly above cleaner fish — often for 20–40 minutes at a time. Do not touch or chase: respectful distance viewing produces better encounters.",
                  "12:00pm — Kanawa Island or a quiet reef for snorkeling. The water clarity around these smaller islands reaches 30 metres visibility in April–July. Even basic snorkeling gear reveals sea turtles, reef sharks, and dense schools of fish around an intact reef.",
                  "2:30pm — Batu Bolong dive site (diving add-on for certified divers: $25–40 extra on a budget shared boat). This submerged rocky pinnacle is a current-swept reef covered in sea fans and black coral, with Napoleon wrasse, bumphead parrotfish, and reef sharks circling. Even from the surface, the fish density at Batu Bolong is visible.",
                  "5:30pm — Return to Labuan Bajo. Final evening: explore the bar strip on the waterfront for sunset cocktails ($4–8). The best viewpoints fill by 5:30pm.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Optional Sunrise + Castle Rock Dive or Free Morning &amp; Departure"
                cost="$30–60"
                items={[
                  "6:00am — Optional sunrise at Puncak Waringin viewpoint (free, 15 minutes walk from town). Sunrise over the bay equals the sunset — islands glow orange and the harbour boats silhouette against the reflection.",
                  "8:00am — Optional half-day dive or snorkel trip to Castle Rock or Crystal Rock (world-class dive sites: $35–50 additional for boat and divemaster if not included in your tour). Castle Rock is a current-swept seamount regularly ranked among the top 5 dive sites on Earth by PADI and international dive publications. Grey reef sharks, barracuda, giant trevally, and manta rays in season.",
                  "10:00am — Explore Labuan Bajo town: the fish market at the harbour (most active 5am–7am, but worth visiting at 9am), local coffee shops serving Flores drip coffee (one of Indonesia&apos;s underrated coffee regions), and artisan shops selling ikat weaving from the surrounding Flores villages.",
                  "12:00pm — Final lunch: fresh grilled barracuda with sambal matah and steamed rice at a waterfront warung ($5–8).",
                  "2:00pm — Transfer to LBJ airport for departure. The airport is small but efficient — arrive 90 minutes before domestic flights to Bali.",
                  "Evening — If connecting to Bali, you have a full evening in Seminyak, Canggu, or Ubud. The contrast between Bali&apos;s resort scene and Komodo&apos;s rawness is immediate and slightly disorienting.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Komodo" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏝️ Komodo Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in Komodo National Park in order of priority. National park fees apply at each island: IDR 150,000 base entry. Confirm current fee structures before travel — they have been restructured in recent years.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Komodo Island — Dragon Trek",
                  e: "IDR 150,000 entry + IDR 80,000 ranger fee",
                  d: "The flagship island. Home to the largest concentration of Komodo dragons and the most famous ranger-led trekking routes. Short trek (1–2 hours) recommended for first-timers; long trek (2–3 hours) goes deeper into the island&apos;s dry forest. Dragons are most active in the morning. Arrive before 9am to beat shared tour boats.",
                  t: "Must do · 2–3 hrs",
                },
                {
                  n: "Padar Island — Three-Bay Viewpoint",
                  e: "Included in national park ticket",
                  d: "Indonesia&apos;s most photographed landscape: three bays of white, black, and pink sand in a volcanic crater bowl, viewed from a ridge 360 metres above sea level. The hike to the viewpoint takes 30–45 minutes each way on a steep but well-maintained trail. Late afternoon light (3–5pm) produces the best photographs.",
                  t: "Must do · 1.5–2 hrs",
                },
                {
                  n: "Pink Beach (Pantai Merah)",
                  e: "Included in national park ticket",
                  d: "One of only seven pink sand beaches in the world. The colour comes from foraminifera — microscopic organisms with red shells — mixed into the white coral sand. The beach is most vivid at low tide in morning light. Snorkeling directly offshore reveals staghorn coral gardens at 2–5 metres. Best visited between 8am and 10am on a private boat.",
                  t: "Must do · 1–2 hrs",
                },
                {
                  n: "Manta Point",
                  e: "Included in boat tour",
                  d: "A marine cleaning station where reef mantas (2–4 metre wingspan) congregate to have parasites removed by cleaner fish. The mantas are habituated to snorkelers and regularly stay at the cleaning station for 20–40 minutes. Best visibility April–August. Do not touch or swim directly below mantas — observe from the side.",
                  t: "Snorkeling · 45–90 mins",
                },
                {
                  n: "Castle Rock — World-Class Dive Site",
                  e: "Accessible by boat (included in dive operators&apos; tours)",
                  d: "A submerged seamount near the northern boundary of Komodo National Park. Consistently ranked among the world&apos;s top five dive sites. Strong current concentrates grey reef sharks, barracuda schools, giant trevally, manta rays, eagle rays, and (in season) whale sharks around the pinnacle. Recommended for Open Water certified divers with logged experience. Non-divers can snorkel the surface during slack current.",
                  t: "Expert recommended · 2 dives",
                },
                {
                  n: "Rinca Island — Dragon Encounter",
                  e: "IDR 150,000 entry + ranger fee",
                  d: "Often preferred over Komodo Island for dragon sightings because the ranger station&apos;s kitchen attracts resident dragons. Seeing 5–10 dragons in the first 10 minutes is common. The dry savannah landscape and lontar palm groves differ from Komodo&apos;s forest. Rinca is closer to Labuan Bajo (1.5 hours vs 2.5 hours) — good for time-limited itineraries.",
                  t: "Must do · 2 hrs",
                },
                {
                  n: "Batu Bolong — Reef Dive & Snorkel",
                  e: "Included in boat tour",
                  d: "A submerged rocky pinnacle between Komodo and Rinca with one of the highest fish densities in the park. Sea fans up to 3 metres wide, pygmy seahorses, Napoleon wrasse, and bumphead parrotfish schools. The fish density is visible from the surface — non-divers snorkeling at Batu Bolong still encounter an extraordinary reef.",
                  t: "All levels · 1.5 hrs",
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
            title="Komodo National Park — Dragons, Reefs &amp; Volcanic Islands"
            subtitle="Indonesia&apos;s wildest UNESCO World Heritage Site."
            spots={[
              {
                name: "Komodo Dragon Up Close",
                query: "komodo dragon close up ranger indonesia wildlife national park",
                desc: "The world&apos;s largest living lizard — up to 3 metres, with venomous saliva and an ambush hunting style that has remained unchanged for millions of years.",
              },
              {
                name: "Padar Island Three Bays",
                query: "padar island three bays viewpoint indonesia komodo aerial",
                desc: "Indonesia&apos;s most photographed view: three bays of white, black, and pink sand in a volcanic crater landscape viewed from the island&apos;s central ridge.",
              },
              {
                name: "Pink Beach Flores",
                query: "pink beach pantai merah komodo indonesia pink sand snorkeling",
                desc: "One of seven pink sand beaches in the world. The colour comes from foraminifera mixed into the coral sand — most vivid at low tide in morning light.",
              },
              {
                name: "Manta Ray Snorkeling Komodo",
                query: "manta ray snorkeling komodo manta point indonesia reef",
                desc: "Reef mantas with 2–4 metre wingspans at Manta Point&apos;s cleaning station — one of the most reliable manta ray encounters in Southeast Asia.",
              },
              {
                name: "Labuan Bajo Harbour Phinisi",
                query: "labuan bajo harbour phinisi boat sunset flores indonesia",
                desc: "The harbour of Labuan Bajo filled with traditional wooden phinisi boats at sunset — the gateway to Komodo National Park.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Komodo is not the cheapest destination in Southeast Asia — the national park fees, boat charters, and remote location add up. But the experience — walking with dragons, diving Castle Rock, sleeping on a phinisi — justifies the cost at every tier.
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
                    ["✈️ Flights Bali–LBJ (return)", "$40–80", "$80–150", "$150–300"],
                    ["🏨 Accommodation (3 nights)", "$36–75", "$180–360", "$900–1,800"],
                    ["🛥️ Boat tours (2 days)", "$50–80", "$150–300", "$600–1,200"],
                    ["🦎 Park fees + ranger (2 islands)", "$30–45", "$30–45", "$60–100"],
                    ["🍽️ Food (4 days)", "$40–80", "$100–200", "$320–600"],
                    ["🤿 Diving add-ons (optional)", "$25–50", "$80–160", "$200–400"],
                    ["TOTAL (per person, 4 days)", "$221–410", "$620–1,215", "$2,230–4,400"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💰 Budget ($80–130/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in Labuan Bajo guesthouses ($12–25/night), eat at local warungs and the night market, join shared day-boat tours ($25–40/person/day). Completely doable and the shared tours cover all the main sites.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">✨ Mid-Range ($180–280/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay at Hotel Jayakarta Labuan Bajo or Golo Hilltop Hotel ($60–120/night), book a private 2-day phinisi charter ($250–450 for a group of 2–4), and dine at Bajo Café or Lounge 27 ($15–35/meal).</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury ($450–900/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Stay at Ayana Komodo Resort ($300–600/night clifftop villas), charter a private liveaboard dive vessel ($600–1,200/day), and book a marine biologist guide for snorkeling and a naturalist for the dragon trek.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Labuan Bajo</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              All accommodation for Komodo National Park is based in Labuan Bajo — the gateway town on the western tip of Flores. Staying on the water or with a bay view is worth the small premium. Alternatives are liveaboards for dedicated divers.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Ayana Komodo Resort",
                  type: "Luxury clifftop resort · Labuan Bajo",
                  price: "From $300/night",
                  badge: "Most stunning",
                  desc: "Clifftop infinity pool, panoramic bay views, ocean-view villas with butler service, and a private harbour with dedicated boat access to the national park. The benchmark for luxury accommodation in eastern Indonesia. Book well in advance for peak season.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Hotel Jayakarta Labuan Bajo",
                  type: "Mid-range hotel · Waterfront",
                  price: "From $60/night",
                  badge: "Best mid-range value",
                  desc: "Well-established waterfront hotel with bay views, a pool, and reliable service. The best combination of location, comfort, and price in Labuan Bajo&apos;s mid-range segment. Close to tour operators and the harbour.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "La Prima Hotel",
                  type: "Mid-range boutique · Town centre",
                  price: "From $40/night",
                  badge: "Best location",
                  desc: "Clean, comfortable mid-range hotel within walking distance of the waterfront tour operators and night market. Good breakfast, helpful staff who assist with boat bookings. Popular with independent travellers on a mid-range budget.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Labuan Bajo Budget Guesthouses",
                  type: "Budget · Waterfront strip",
                  price: "$12–25/night",
                  badge: "Best budget",
                  desc: "Several clean guesthouses and losmen cluster along the main waterfront road and the streets directly behind it. Basic rooms with fan or air-conditioning. The waterfront-facing rooms are worth the few extra dollars for the sunset view. Book through Booking.com or walk-in.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Liveaboard Phinisi",
                  type: "Boat accommodation · On the water",
                  price: "$80–300/person/night",
                  badge: "Best for divers",
                  desc: "For dedicated divers and snorkelers, a liveaboard phinisi provides unlimited access to dive sites, dawn arrival at every island before day boats, sleeping under Flores stars, and a floating base that moves with your itinerary. The 2-day 1-night phinisi charter is the optimal Komodo experience for groups of 3+.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Labuan Bajo</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Labuan Bajo&apos;s food scene has improved dramatically as tourism has grown. The waterfront strip has a good mix of local warungs, seafood restaurants, and cafés serving Flores coffee. On the islands, boat crews provide basic meals — simple but acceptable.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Bajo Café",
                  t: "Mid-range restaurant · Waterfront",
                  d: "One of Labuan Bajo&apos;s best mid-range restaurants. Good grilled fish, lobster ($20–35), Indonesian and western dishes. The rooftop terrace has direct sunset views over the bay — arrive by 5:30pm for a table with the best view. $12–30/person.",
                  b: "Best sunset dining",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Lounge 27",
                  t: "Bar and restaurant · Waterfront strip",
                  d: "Popular with mid-range and luxury travellers. Good cocktails ($6–10), Flores seafood, and wood-fired pizza. The covered terrace is well positioned for the harbour view at dusk. One of the few places in Labuan Bajo with a proper bar atmosphere.",
                  b: "Best drinks",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Waterfront Night Market",
                  t: "Local food stalls · Harbour area",
                  d: "The most authentic and affordable eating in Labuan Bajo. Grilled fish and seafood by the kilo, nasi goreng, mie goreng, and local sweets. Active from around 6pm. A full meal with a grilled snapper, rice, and sambal costs $4–6. The freshest fish in town — it came off a boat 2 hours ago.",
                  b: "Best value",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Warung Makan Local (various)",
                  t: "Local warung · Town streets",
                  d: "The local warungs on the streets behind the main waterfront serve nasi campur (mixed rice) for $2–3 — a mound of rice with 4–5 side dishes. Nasi campur at a local warung is the most economical and authentic meal in Labuan Bajo. Ask the owner what is fresh.",
                  b: "Authentic local",
                  c: "bg-parchment border-parchment-2",
                },
                {
                  n: "Flores Coffee Shops",
                  t: "Specialty coffee · Town",
                  d: "Flores is one of Indonesia&apos;s underrated coffee regions. Several small specialty cafés in Labuan Bajo serve single-origin Flores drip coffee ($2–4). The Flores Bajawa arabica has a distinctive nutty, medium-bodied profile very different from Bali or Toraja coffees. Worth seeking out on Day 4 morning.",
                  b: "For coffee lovers",
                  c: "bg-blue-50 border-blue-200",
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
            destination="Komodo National Park"
            hotels={[
              {
                name: "Ayana Komodo Resort",
                type: "Luxury clifftop resort · Bay views",
                price: "From $300/night",
                rating: "5",
                badge: "Most stunning",
                url: "https://www.booking.com/hotel/id/ayana-komodo-resort.html?aid=2820480",
              },
              {
                name: "Hotel Jayakarta Labuan Bajo",
                type: "Mid-range · Waterfront",
                price: "From $60/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/id/jayakarta-labuan-bajo.html?aid=2820480",
              },
              {
                name: "La Prima Hotel",
                type: "Boutique · Town centre",
                price: "From $40/night",
                rating: "4",
                badge: "Best location",
                url: "https://www.booking.com/hotel/id/la-prima-labuan-bajo.html?aid=2820480",
              },
              {
                name: "Budget Guesthouses Labuan Bajo",
                type: "Budget · Waterfront strip",
                price: "From $12/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/searchresults/id/labuan-bajo.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Komodo Dragon Trek with Ranger",
                duration: "3–4 hrs",
                price: "From $35/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=komodo+dragon+trek&partner_id=PSZA5UI",
              },
              {
                name: "Komodo Island Boat Day Tour",
                duration: "Full day",
                price: "From $40/person",
                badge: "Most popular",
                url: "https://www.getyourguide.com/s/?q=komodo+island+boat+tour&partner_id=PSZA5UI",
              },
              {
                name: "Manta Point Snorkeling & Padar Island",
                duration: "Full day",
                price: "From $45/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=manta+point+komodo+snorkeling&partner_id=PSZA5UI",
              },
              {
                name: "Castle Rock Scuba Diving",
                duration: "2 dives",
                price: "From $80/person",
                url: "https://www.getyourguide.com/s/?q=castle+rock+komodo+diving&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Komodo</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🦎",
                  title: "Going Without a Ranger or Leaving the Trail",
                  desc: "Komodo dragons are ambush predators that can accelerate to 20km/h over short distances. Every year, visitors are injured by ignoring ranger instructions or drifting off marked paths. The forked stick rangers carry is not theatrical — it is the standard tool for redirecting a charging dragon. Do not walk without your assigned ranger, do not approach dragons closer than directed, and do not make rapid movements near them. The national park rules exist because they are necessary.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🌊",
                  title: "Booking the Cheapest Unofficial Boat",
                  desc: "The Flores Sea can be rough, particularly outside the April–August calm season. Unofficial boats — men with motorized canoes offering cut-price tours on the waterfront — are often uninsured, unlicensed, and without lifejackets or radio communication. Several tourist boats have sunk in Komodo waters. Book through licensed operators with visible life jackets, a working radio, an EPIRB beacon, and a registered guide. Budget shared day tours from reputable operators cost $30–50/person. This is not a place to save $10 on safety.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "📅",
                  title: "Visiting in October–March (Rough Sea Season)",
                  desc: "The Flores Sea transitions to rough swell from October to March. The west monsoon brings large waves, strong currents, and poor visibility for diving and snorkeling. Many dive sites are inaccessible. Boat crossings to Komodo become uncomfortable and sometimes dangerous. The best season is April to August — calm seas, best diving visibility (30+ metres), and the optimal window for manta ray and Komodo dragon encounters.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "💳",
                  title: "Assuming You Can Pay the Park Fee by Card",
                  desc: "The Komodo National Park entrance fee (IDR 150,000 base + ranger fees) must typically be paid in cash IDR at the ranger station. Some operators include fees in the tour price — confirm before departure. There are no ATMs on Komodo or Rinca islands. The ATMs in Labuan Bajo sometimes run low on busy weekends. Withdraw sufficient cash the evening before your island departure.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🐠",
                  title: "Using Chemical Sunscreen in the National Park",
                  desc: "Komodo National Park&apos;s reefs are among the most biodiverse and least damaged in the world. Regular sunscreen containing oxybenzone and octinoxate is highly toxic to coral and is banned in the national park. Rangers at snorkeling sites will check. Use reef-safe mineral sunscreen (zinc oxide or titanium dioxide) or — better — wear a rash guard instead of any sunscreen. This is both the most environmentally responsible and most effective solution.",
                  color: "bg-green-50 border-green-200",
                },
              ].map((m) => (
                <TipCard key={m.title} {...m} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Komodo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "Arrive at Komodo Island Before 9am",
                  desc: "The first shared day tours from Labuan Bajo arrive at Komodo Island around 9:30am. A private charter or overnight phinisi gets you there by 8am — and the dragon encounters at 8am, when animals bask in the morning sun along the ridge paths, are far more dramatic than midday. Book a private boat or overnight phinisi for this access window.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🤿",
                  title: "Do At Least One Dive at Castle Rock",
                  desc: "Castle Rock is consistently rated among the best five dive sites in the world. The seamount rises from 200 metres to just below the surface and the current concentrates extraordinary fish density. Even a single dive — grey reef sharks circling, a manta ray from the blue, barracuda overhead — justifies the cost of diving certification. If not yet certified, this destination is worth getting certified for.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "📸",
                  title: "Pink Beach at Low Tide in the Morning",
                  desc: "The pink colour of Pantai Merah is most vivid when wet sand reflects morning light at low tide. Check tide tables before booking your boat schedule. Most shared tours reach Pink Beach at midday when the pink pigment is least visible and crowds peak. Arranging to arrive between 8am and 10am at low tide — possible on a private boat — produces the photographs you&apos;ve seen online.",
                  color: "bg-pink-50 border-pink-200",
                },
                {
                  icon: "🛥️",
                  title: "Overnight Phinisi is Worth It for 3+",
                  desc: "A 2-day, 1-night phinisi charter gives you dawn access to every island, the ability to stay at Manta Point after shared boats leave, a sunset at sea, and sleeping on the water under Flores stars. For a group of 4–6, the per-person cost of a private overnight phinisi ($150–250/person for 2 days) is comparable to or cheaper than 2 days of shared tours plus a mid-range hotel night in Labuan Bajo — and incomparably more atmospheric.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "💉",
                  title: "Get Your Visa Before LBJ — Not After",
                  desc: "Visa on Arrival is not available at Labuan Bajo airport. Indian and most international passport holders must enter Indonesia through Bali (DPS) first and obtain their Visa on Arrival there (IDR 500,000, ~$35). Alternatively, apply for the e-Visa at molina.imigrasi.go.id before departure to skip the VoA queue entirely. Plan your itinerary accordingly — fly Bali first, then connect to LBJ.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🎒",
                  title: "Pack Light — You&apos;re Boarding Boats Daily",
                  desc: "You will be boarding and disembarking boats 1–3 times per day. A single carry-on sized bag or 30L backpack is the maximum practical size. Leave large luggage at your Labuan Bajo hotel. Bring: rash guard, reef-safe sunscreen, dry bag for electronics and passport, water bottle, and light rain jacket for open boat rides. Flip-flops for the boat, proper shoes for the dragon trek.",
                  color: "bg-green-50 border-green-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Komodo" />

          {/* Combine With */}
          <CombineWith currentSlug="komodo-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is it safe to visit Komodo Island? Are the dragons dangerous?",
                  a: "Komodo Island is safe when you follow the ranger&apos;s instructions. Komodo dragons are genuine apex predators with venomous saliva and powerful claws. They have killed humans, though rarely. The risk is entirely manageable: stay with your ranger at all times, do not approach dragons unprompted, do not run (it triggers a chase response), and be aware that the rangers&apos; forked sticks are actual safety equipment. Hundreds of thousands of tourists visit annually without incident.",
                },
                {
                  q: "How do I get to Labuan Bajo from Bali?",
                  a: "Fly Bali (DPS) to Labuan Bajo (LBJ) on Garuda Indonesia, Lion Air, Batik Air, or TransNusa. Flight time is 1–1.5 hours. Multiple daily departures — the 6:30am Garuda flight arrives by 8am giving you time to board a tour boat that same morning. Tickets cost IDR 400,000–800,000 one way. Book in advance during peak season (Jul–Aug) as seats sell out. Note: Visa on Arrival is not available at LBJ — get it at Bali on arrival.",
                },
                {
                  q: "Is Castle Rock really one of the best dive sites in the world?",
                  a: "Castle Rock in Komodo National Park is consistently listed among the top dive sites globally by PADI, Sport Diver magazine, and experienced divers. The combination of strong current concentrating enormous fish schools, regular manta ray, reef shark, eagle ray, and occasionally whale shark sightings, the sea fan garden below 15 metres, and dramatic seamount topography makes it extraordinary. The strong current means it is recommended for experienced divers. Snorkelers on the surface during calm current still see sharks and mantas.",
                },
                {
                  q: "How much does a 4-day Komodo trip cost in total?",
                  a: "Budget: $220–410 per person for 4 days (Bali–LBJ flights included) staying in guesthouses and doing shared boat day tours. Mid-range: $620–1,215 for 4 days with a private phinisi charter and mid-range accommodation. Luxury: $2,230–4,400 for 4 days with Ayana Komodo Resort and a private liveaboard dive boat. The national park fee is IDR 150,000 base per visit — confirm current fees as they have been restructured in recent years.",
                },
                {
                  q: "What is a phinisi boat and is it worth chartering one?",
                  a: "A phinisi is a traditional two-masted Indonesian wooden sailing schooner, historically used for trade across the archipelago. In Komodo, they are the preferred vessel for overnight island-hopping. A private phinisi charter costs IDR 3,500,000–10,000,000 per day ($200–600) for a boat sleeping 2–10 people. For a group of 3+, the per-person cost of a private overnight phinisi for 2 days is comparable to 2 days of shared tours plus a hotel night — and the experience of sleeping on a wooden boat in a Flores bay under stars is impossible to replicate.",
                },
                {
                  q: "Do I need to be a certified diver to enjoy Komodo?",
                  a: "No — snorkeling at Pink Beach, Manta Point, Batu Bolong surface, and Kanawa Island is genuinely excellent and accessible to anyone who can swim. Manta rays and reef sharks are regularly seen from the surface. Diving certifications open up Castle Rock, Crystal Rock, and the deeper Batu Bolong cleaning station — an entirely different level of encounter. If you&apos;re on the fence, consider getting an Open Water certification (available in Bali) before your Komodo trip.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Komodo trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-komodo", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/komodo-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-komodo", label: "How to get there", icon: "✈️" },
                { href: "/blog/komodo-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="komodo-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Southeast Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Bali in 5 Days — Temples &amp; Beaches", href: "/blog/bali-5-days" },
                { label: "Nusa Penida 3 Days — Cliffs &amp; Snorkeling", href: "/blog/nusa-penida-3-days" },
                { label: "Lombok 4 Days — Volcanoes &amp; Beaches", href: "/blog/lombok-4-days" },
                { label: "Raja Ampat 5 Days — World&apos;s Best Diving", href: "/blog/raja-ampat-5-days" },
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
