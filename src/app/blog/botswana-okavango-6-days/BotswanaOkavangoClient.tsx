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
const BOTSWANA_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What the Okavango Delta Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "6-Day Itinerary" },
  { id: "landmarks",  emoji: "🐘",  label: "Landmark Guide" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",       emoji: "🏕️", label: "Where to Stay" },
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
          href: `mailto:?subject=Botswana Okavango 6-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Botswana Okavango Delta in 6 Days — mokoro canoes, elephants and Africa&apos;s wildest wilderness&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/botswana-okavango-6-days"
        imageUrl="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80"
        description="Botswana Okavango Delta in 6 Days: mokoro canoe safaris, Chobe elephants, Moremi Game Reserve, Mombo Camp luxury — complete safari guide with budget breakdown."
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
export default function BotswanaOkavangoClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BOTSWANA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Okavango Delta" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="botswana okavango delta elephant herd crossing water channel africa safari sunset"
            fallback="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&q=80"
            alt="Botswana Okavango Delta elephant herd crossing water channel at sunset Africa"
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
              <span className="text-white/70">Botswana Okavango 6 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="text-white/60 text-xs">January 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">16 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Okavango Delta, Botswana in 6 Days:
                <em className="italic text-amber-300"> Mokoro Canoes, Chobe Elephants &amp; Africa&apos;s Last Wilderness</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                15,000 sq km of inland delta, the world&apos;s highest elephant concentration at Chobe, light aircraft transfers between camps, and a mokoro at dawn through water lilies. Africa&apos;s conservation success story — the complete 6-day guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="January 2026" readTime="16 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇧🇼 Botswana, Africa</span>
              <span>·</span>
              <span>🗓 6 Days</span>
              <span>·</span>
              <span>💰 From $300/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The Okavango River flows inland from Angola, travels 1,000 kilometres southeast, and then disappears into the Kalahari Desert — not into a sea, not into a lake, but into the sand itself, creating a 15,000 square kilometre labyrinth of channels, islands, and lagoons that becomes the greatest concentration of wildlife in Africa.
            </p>
          </blockquote>

          {/* ── WHAT THE OKAVANGO DELTA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What the Okavango Delta Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              A Batswana guide poles your mokoro — a dugout canoe carved from a sausage tree — in silence through carpets of water lilies while an elephant drinks 5 metres from your bow. A lion pride circles your game-drive vehicle at dusk while your guide says simply, &quot;they&apos;re just curious.&quot; This is the Okavango Delta: the world&apos;s largest inland delta, a UNESCO World Heritage Site, and by any honest measure the finest wildlife experience on Earth.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Botswana has made a conscious political choice to be the world&apos;s most expensive safari destination: low-volume, high-cost, conservation-first. That policy has worked with remarkable results. The wilderness here is genuinely wild in a way that is harder to find anywhere else on the continent. Botswana has more elephants than any country in the world — roughly 130,000 — and Chobe National Park, in the north of the country, has the single highest elephant concentration on Earth. Herds of 200 or more wade into the Chobe River daily during the dry season.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The inner delta is only accessible by mokoro canoe or light aircraft — there are no roads. Luxury camps like Mombo Camp on Chief&apos;s Island (widely regarded as Africa&apos;s finest safari camp, from $1,200/night) and Sandibe Okavango Safari Lodge sit in private concessions where the wildlife is so dense and habituated that the question is not whether you will see lions today, but how close they will come. Budget travellers are not excluded — a community mokoro operator from Maun delivers the same channel silence and water lily experience for $20–30 per person. This guide covers the full range, from $300/day to $1,500/day.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Gateway Airport" value="Maun (MUB)" />
              <StatCard icon="🌡️" label="Best Season" value="Jun–Oct" />
              <StatCard icon="🐘" label="Elephants in Botswana" value="130,000+" />
              <StatCard icon="💰" label="Budget From" value="$300/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Botswana</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Jun–Oct",
                  i: "☀️",
                  t: "Dry Season — Best for Wildlife",
                  d: "The definitive Botswana safari window. Water recedes and animals concentrate around permanent water sources. The Okavango flood actually peaks in July–August from Angolan rains arriving months later — the seemingly paradoxical combination of dry season above and flooded delta below. Temperatures 18–28°C by day, cold at night (5–10°C in June–July). Wildlife density is extraordinary. Book 12+ months ahead for top camps.",
                  b: "Strongly Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Nov–Jan",
                  i: "🌿",
                  t: "Green Season — Lower Crowds, Lower Prices",
                  d: "The wet season brings lush vegetation, dramatic thunderstorm skies, and 30–40% discounts at most camps. Wildlife sightings are harder as animals disperse into thick vegetation. However, migratory birds arrive in force and baby animals are everywhere. Malaria risk is higher — take additional precautions and start medication earlier.",
                  b: "Good value",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Feb–Apr",
                  i: "🌧️",
                  t: "Late Wet Season — Avoid for Safari",
                  d: "Heaviest rainfall, highest malaria risk, thickest bush. Some camps close entirely between January and March. Wildlife is at its most dispersed and hardest to spot. This window is only for specialist birders wanting nesting species. For any standard safari or mokoro experience, avoid this period entirely.",
                  b: "Not recommended",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "May",
                  i: "🌅",
                  t: "Shoulder — Excellent and Underrated",
                  d: "May is increasingly regarded as one of the best months in the delta. The rains are tapering off, the bush is still lush and green, the delta flood is building, and camps are at 70–80% of peak rates. Wildlife is active and predator sightings are outstanding as the grass begins to thin. For value-conscious travellers who still want quality wildlife, May is the ideal compromise.",
                  b: "Underrated gem",
                  c: "bg-amber-50 border-amber-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Botswana</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Maun Airport (MUB) is the gateway to the Okavango Delta — not Gaborone (GBE), the capital. Fly to <strong className="font-medium">Johannesburg OR Tambo (JNB)</strong> first, then connect to Maun on Airlink or Air Botswana (2 hrs). Once in Maun, a light aircraft (Cessna 206 or Caravan) transfers you to your camp in 20–45 minutes. Most luxury camps include this in their all-inclusive rate.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "International flight to Johannesburg (JNB)",
                  d: "Most routes to Botswana connect via OR Tambo International Airport, Johannesburg. Direct flights from London (~11 hrs), New York (~15 hrs), Dubai (~8 hrs). From India (Mumbai or Delhi), fly via Dubai, Nairobi, or Addis Ababa — 14–18 hrs total. Cost: $400–$1,800 return depending on origin and class. Johannesburg is the hub of southern Africa — connections to Maun, Kasane, and Victoria Falls all depart from here.",
                  b: "Main hub",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🛩️",
                  t: "Johannesburg → Maun (MUB) domestic connection",
                  d: "Airlink and Air Botswana fly JNB–MUB daily (2 hrs). Tickets run $150–$350 one-way. Book as far in advance as possible — the Maun route fills quickly in peak season (July–September). Alternatively fly to Kasane Airport (BBK) near Chobe if starting with the elephant safari — Airlink flies JNB–BBK daily ($180–$380 one-way).",
                  b: "Delta gateway",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🛩️",
                  t: "Maun → Safari camp (light aircraft transfer)",
                  d: "From Maun&apos;s busy little airstrip, a Cessna 206 or Cessna Caravan flies you to your camp in 20–45 minutes over the delta channels. The aerial view alone — elephants visible in herds from 1,000 feet, the waterways glinting — is worth the flight. Budget: $120–$180 each way shared. Luxury camps include this. Strict bag limit: 15–20kg total in a soft duffel bag only. Hard suitcases stay in Maun.",
                  b: "Essential",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Overland from Victoria Falls or Zimbabwe",
                  d: "If combining with Victoria Falls, Kasane (Chobe&apos;s gateway) is approximately 80km from Victoria Falls — around 1 hour by road. The new Kazungula road bridge has replaced the old pontoon crossing, making this route fast and straightforward. From Kasane, fly or drive to Maun (4 hrs by road). This overland route works well for a Botswana–Zimbabwe or Botswana–Zambia combination trip.",
                  b: "Victoria Falls combo",
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

          {/* ── 6-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 6-Day Botswana Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Three itinerary tiers — Budget (~$300/day), Mid-Range (~$600/day), and Luxury (~$1,500/day). Each day card is collapsible. The core logic is the same at every budget: Okavango Delta first, then Chobe for the elephant spectacle, with an optional Victoria Falls finale.
            </p>

            {/* Budget */}
            <h3 className="font-serif text-xl font-light text-ink mb-3 mt-6">💰 Budget — ~$300/day</h3>
            <div className="space-y-4 mb-8">
              <DayCard
                day="Day 1"
                title="Arrive Maun + Community Mokoro Day Trip"
                cost="$90–120 (guesthouse + mokoro + meals)"
                items={[
                  "Fly into Maun (MUB) via Johannesburg and check into a budget guesthouse — Audi Camp ($30–50/night) is the long-established traveller base, with a network of trusted community mokoro operators. Clean, basic, and well-located.",
                  "Afternoon: self-arrange a 2-hour community mokoro trip from the delta edge near Maun ($20–30pp). Even the delta periphery immediately delivers the channel-and-water-lily experience: herons fishing from lily pads, impala grazing on the bank, hippos surfacing at a respectful distance.",
                  "Wildlife starts immediately in Botswana. A 2-hour community mokoro from the Maun area costs less than a museum entry in London and delivers something most museums cannot: silence, movement, and genuine wilderness within metres.",
                  "Evening: dinner at Bon Arrivée restaurant in Maun (~$12–18 for a full meal); plan your overnight safari booking for tomorrow with operators at the guesthouse reception or noticeboards.",
                  "Important note: budget in Botswana still means guided, organised experiences — this is not a backpacker-hostel, do-it-yourself destination. The minimum baseline is a registered operator. Going into the delta independently is not permitted and not safe.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Overnight Delta Mokoro Safari — Island Camp"
                cost="$130–170 (2-day/1-night package, all inclusive)"
                items={[
                  "Book a 2-day/1-night community mokoro overnight safari from Maun ($120–160pp, all-inclusive for food, guide, tent, and poling). Several operators at Maun&apos;s airstrip precinct arrange these — confirm your booking the previous evening.",
                  "Pole deep into the channels for 3–4 hours. Your poler-guide reads the water from a standing position, identifies animals by tracks and sound, and navigates to a dry island where a tented camp has been set up in advance.",
                  "Lunch is cooked at the island camp on an open fire; afternoon guided game walk on the delta island — lion, wild dog, and buffalo tracks are often visible in the sand paths between islands.",
                  "Sunset on the water: watch elephants cross the channel 30 metres from your mokoro as the light turns amber and gold. This is the definitive Okavango experience, available at every budget level.",
                  "Night in a tent on a delta island — no phone signal, no light pollution. The sounds of hippos bellowing, reed frogs, and a fish eagle at dawn are your alarm clock.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Return from Delta + Maun Town"
                cost="$50–70 (guesthouse + meals + museum)"
                items={[
                  "Morning mokoro back to shore: wildlife is consistently most active in the first two hours after sunrise — your poler-guide will prioritise this window for movement.",
                  "Return to Maun by midday, shower at your guesthouse, recharge camera batteries, and sort your kit for the Chobe leg of the trip.",
                  "Afternoon: the Nhabe Museum in Maun is free and worth 90 minutes — it covers Okavango Delta ecology, the Batswana peoples of the delta, and the history of Botswana&apos;s conservation policy. Better than most wildlife documentaries.",
                  "Browse Maun&apos;s small craft market for Botswana basketry — the coiled palm-leaf baskets of the Wayeyi and Hambukushu peoples are among the finest traditional weaving in Africa. Authentic pieces start from $15–30.",
                  "Evening: sundowner beer by the Thamalakane River; plan tomorrow&apos;s transport to Kasane for the Chobe section.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Chobe National Park — Budget Boat Safari"
                cost="$100–130 (transport + boat + lodge)"
                items={[
                  "Shared shuttle or intercity bus from Maun to Kasane, gateway town for Chobe National Park (~$30 shared, 4 hours on a reasonably good road). Book the day before at a Maun travel agent.",
                  "Afternoon shared boat safari on the Chobe River ($25pp, 2 hrs) — at this price, this is one of the single most wildlife-dense 2 hours you can buy in Africa. This is not a compromise.",
                  "Elephants drink, swim, and actively cross in front of the boat; hippos surface alongside; crocodiles line the sandbanks; and a typical 2-hour Chobe boat trip records 60–100 bird species for the birders on board.",
                  "Budget lodge in Kasane (~$40/night — Chobe Backpackers or similar properties near the river). Book in advance for the June–October dry season.",
                  "Evening: sundowner on the lodge veranda watching elephant herds file down to the Chobe floodplain in the last light. This is the highest elephant concentration on Earth — even from a budget lodge the spectacle is the same.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Chobe Morning Game Drive + Optional Return"
                cost="$80–100 (game drive + transport + meals)"
                items={[
                  "6am shared 4WD game drive inside Chobe National Park ($35pp, 3 hrs including park entry). Your guide is a trained Chobe specialist who has been tracking movements before dawn.",
                  "Chobe in the dry season delivers staggering wildlife density: lion, leopard, elephant, buffalo, giraffe, zebra, waterbuck, puku, roan antelope, sable antelope, and African wild dog are all present. The Big Five are reliably seen across a 2–3 day Chobe stay.",
                  "Optional mid-morning: 1-hour browse of Kasane&apos;s craft stalls — mopane wood carvings, woven baskets, and Botswana textiles. Lightweight, distinctive souvenirs.",
                  "Afternoon: shared vehicle back toward Maun, or if extending, a connecting bus toward Victoria Falls on the Zimbabwe side (about 4 hrs from Kasane via the Kazungula border).",
                  "This Chobe game drive at $35 is not a lesser experience — the wildlife density in Chobe means a shared drive here outperforms luxury drives at some other African destinations.",
                ]}
              />
              <DayCard
                day="Day 6"
                title="Makgadikgadi Pans Day Trip or Victoria Falls Detour"
                cost="$80–150 (depending on option chosen)"
                items={[
                  "Option A: Makgadikgadi Pans guided day trip from Maun ($60 with a local operator). October–November sees a massive zebra and wildebeest migration across the ancient salt flats — one of the largest land migrations in the world, and almost entirely unknown outside southern Africa.",
                  "The meerkat encounter at Makgadikgadi is genuinely charming: a habituated colony uses humans as warm, high lookout posts. They climb onto your head and sit there while scanning the horizon. The ancient salt flats stretch perfectly flat to the horizon under a 360-degree sky.",
                  "Option B: bus or shared taxi from Kasane to Victoria Falls (4 hrs, or a 30-minute flight from $80–120). Victoria Falls is the world&apos;s largest waterfall by volume — entry is $30 on the Zimbabwe side. A genuinely awe-inspiring experience even on a tight budget.",
                  "Departure from Maun (MUB) or Kasane (BBK) to Johannesburg (JNB) for international onward connections. Most intercontinental flights depart OR Tambo in the evening.",
                  "Botswana&apos;s silence follows you home: the delta at dawn, the elephants on the river, the night sky with zero light pollution. There is no safari quite like this one, at any budget.",
                ]}
              />
            </div>

            {/* Mid-Range */}
            <h3 className="font-serif text-xl font-light text-ink mb-3 mt-8">✨ Mid-Range — ~$600/day</h3>
            <div className="space-y-4 mb-8">
              <DayCard
                day="Day 1"
                title="Arrive Maun + Light Aircraft to Moremi Game Reserve"
                cost="$280–350 (lodge + flights + game drive, all-inclusive)"
                items={[
                  "Fly into Maun (MUB) via Johannesburg; check into a mid-range all-inclusive lodge at Moremi Game Reserve or Khwai Community Area ($150–200pp/night with all meals, two game drives, and activities included).",
                  "Light aircraft transfer from Maun airstrip to your camp (30 min, $80–120 each way on a shared Cessna 206). The aerial view of the delta from the air — channels, elephant herds, floodplains — is an experience worth having independently of everything else.",
                  "Moremi Game Reserve is the protected core of the Okavango Delta, declared by the Batawana people in 1963 — the first community in Africa to set aside their own land for wildlife conservation. Best combination of permanent water and wildlife density in the delta.",
                  "Evening game drive with a professional guide and tracker from camp (included in most all-inclusive packages) — golden hour in Moremi is frequently the best game drive of the entire trip.",
                  "Sundowner drinks in the bush; dinner under the Botswana stars at your camp&apos;s outdoor dining table by firelight.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Full Delta Day: Dawn Drive + Mokoro + Afternoon Drive"
                cost="$200–280 (all-inclusive lodge day)"
                items={[
                  "5:30am game drive before the heat — lion, leopard, and African wild dog are most active at sunrise. Your guide will have checked camera trap footage and been in radio contact with other guides since before dawn to locate predators.",
                  "Hot breakfast back at camp; mid-morning mokoro safari (3 hrs) through the delta channels with a professional poler-guide. A very different experience from a game drive — closer to the water, quieter, and in some ways more intimate.",
                  "Your guide pole-stands and reads the delta ahead: leopard paw prints on an island bank, an elephant crossing 40 metres ahead with a calf, a jacana walking on lily pads, a malachite kingfisher watching from a papyrus stalk.",
                  "Afternoon siesta — the African tradition, and non-negotiable in the midday heat. Most camps offer a spa treatment, fishing from the deck, or simply hammock time with a book.",
                  "Late afternoon game drive as the light turns gold: the hour before sunset is when Moremi is at its photographic best, and your guide knows exactly where to be.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Khwai Community Area + Night Drive"
                cost="$250–320 (lodge + flight + activities)"
                items={[
                  "Move by light aircraft to Khwai Community Area on the northern edge of Moremi (~$100 flight, 20 min, shared). Khwai is community-run — every dollar you spend goes directly to the villages that border and protect this wildlife corridor.",
                  "Khwai&apos;s forest-floodplain junction is one of the best locations in Botswana for African wild dog — packs of 8–20 animals are regularly seen here, particularly at dawn and dusk. Also exceptional for lion and leopard at the woodland edge.",
                  "Afternoon game drive through the Khwai floodplain. In September–October, buffalo herds of 300–500 are common, and where buffalo concentrate, lions and hyenas follow in numbers.",
                  "Sundowner stop in the open wilderness; evening night drive with spotlight ($40pp at most camps). Night drives reveal civets, genets, porcupines, spring hares, and — occasionally — the extraordinary aardvark or pangolin.",
                  "Return to camp for dinner; your guide shares Batswana tracking lore and conservation stories around the fire. This is a significant part of the Botswana experience.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Transfer to Chobe + River Boat Safari"
                cost="$300–380 (lodge + boat + activities, all-inclusive)"
                items={[
                  "Vehicle transfer or shared light aircraft to Chobe ($100–150); check into a mid-range lodge on the Chobe River ($180–220/night all-inclusive). Several well-run properties sit directly on the riverfront in Kasane.",
                  "Afternoon shared boat safari on the Chobe River (2 hrs, included in most lodge packages) — your guide identifies the elephant family groups (some bulls are known individuals tracked for years) as herds wade into the river.",
                  "Chobe has the highest elephant concentration on Earth. The boat perspective is fundamentally different from a land game drive — quiet approach, eye-level with the animals, and no vehicle between you and a herd of 150 elephants at the bank.",
                  "Hippos surface and yawn beside the boat; crocodiles line the white sandbanks in the sun; the bird count on a 2-hour Chobe boat trip regularly exceeds 80 species — serious birders need 3–4 days here.",
                  "Sundowner on the water as the sun drops behind the tree line; dinner at your lodge with the river sounds carrying through the night.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Chobe Dawn Drive + Victoria Falls"
                cost="$280–340 (game drive + Vic Falls entry + lodge)"
                items={[
                  "6am game drive in Chobe National Park (3 hrs, included in lodge package) — lion, sable antelope, and wild dog are all regularly seen. Chobe&apos;s lion prides have developed specialised hunting behaviour including coordinated elephant-calf hunting, observed nowhere else at this frequency.",
                  "Brunch at lodge; private vehicle or shared transfer to Victoria Falls ($60–80, 1 hour from Kasane). The Kazungula bridge crossing is fast and straightforward — new infrastructure as of 2021.",
                  "Victoria Falls entry: $30 on the Zimbabwe side (Rainforest entry, the classic curtain view), $20 on the Zambia side. The two sides give completely different perspectives — if you have time, do both.",
                  "Devil&apos;s Pool swim (seasonal — available approximately September to December): a natural rock lip at the very edge of the falls allows swimming with a 100-metre drop below. One of the most thrilling, slightly terrifying, and wholly memorable experiences in southern Africa.",
                  "Lodge in Livingstone, Zambia or Victoria Falls, Zimbabwe ($80–120/night) with views of the permanent spray column rising against the sunset.",
                ]}
              />
              <DayCard
                day="Day 6"
                title="Victoria Falls Morning + Departure"
                cost="$280–380 (helicopter + activities + airport)"
                items={[
                  "Morning helicopter flight over the falls ($150–180pp, 15 min, &apos;Flight of Angels&apos;) — the only way to fully comprehend the scale. From the air, the gorge system, the width of the curtain, and the spray column rising 500 metres are genuinely awe-inspiring.",
                  "Optional: half-day white-water rafting on the Zambezi below the falls (Grade V rapids in low water, $120pp). The Batoka Gorge is regarded as one of the world&apos;s top commercial white-water experiences. Not suitable for non-swimmers or those with back problems.",
                  "Lunch in Livingstone town (several good restaurants near the main square, $15–25pp); transfer to Harry Mwanga Nkumbula Airport (LVI) for the flight to Johannesburg.",
                  "Onward international connections from OR Tambo, Johannesburg — most intercontinental flights depart in the evening, giving you a comfortable connection from Livingstone.",
                  "Depart Botswana and the Victoria Falls region with Africa&apos;s most intact wilderness still in the memory.",
                ]}
              />
            </div>

            {/* Luxury */}
            <h3 className="font-serif text-xl font-light text-ink mb-3 mt-8">💎 Luxury — ~$1,500/day</h3>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Private Fly-in to Mombo Camp, Chief&apos;s Island"
                cost="$1,400–2,000 (private charter + Mombo Camp, all-inclusive)"
                items={[
                  "Business class to Johannesburg (OR Tambo); private charter or premium scheduled Airlink connection to Maun with lounge access ($800–1,200 for a private 4-seat charter from JNB, or $250–350 scheduled with lounge).",
                  "Wilderness Safaris Mombo Camp on Chief&apos;s Island — widely regarded as Africa&apos;s finest safari camp ($1,200–2,000pp/night all-inclusive with all meals, activities, park fees, and light aircraft transfer included). Alternatively: &Beyond Xaranna Okavango Delta Camp in the western delta at comparable rates.",
                  "Private light aircraft from Maun to Mombo (30–45 min). Your guide and expert tracker meet you at the airstrip — they already know which lions were active last night and where the leopard was spotted this morning.",
                  "Afternoon game drive on Chief&apos;s Island with your dedicated private guide and tracker. Mombo&apos;s concession is the most wildlife-dense area in the Okavango — big cat sightings here are exceptional year-round. A leopard in a tree before dinner is not unusual.",
                  "Sundowner drinks in the wilderness; multi-course gourmet dinner under the stars at Mombo&apos;s outdoor dining table — the southern African night sky above, no light pollution, a glass of South African Stellenbosch wine in hand.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Private Mokoro + Walking Safari + Sunset Drive"
                cost="$1,200–1,800 (all-inclusive ultra-luxury camp day)"
                items={[
                  "Pre-dawn tea at 4:45am; 5am game drive with your private guide and expert tracker. Mombo&apos;s lion prides are among the most studied and camera-habituated in Africa — within metres of the vehicle, completely unbothered.",
                  "Hot breakfast at camp prepared by your chef; mid-morning private mokoro through Mombo&apos;s own channel system with a personal poler. One canoe, one couple or family, one poler — total silence and total access.",
                  "Walking safari with an armed, specialist guide on a nearby delta island: reading animal tracks in the sand, learning the medicinal plants the San people have used for millennia, standing 20 metres from a sleeping pod of hippos.",
                  "Afternoon siesta in your luxury tent: private plunge pool on the deck, outdoor shower under a leadwood tree, 1,000-thread-count Egyptian cotton linen, butler service with afternoon tea and fresh fruit.",
                  "Sunset game drive in golden light — photographs of elephants crossing a floodplain backlit against the orange sky, a leopard draped over a mopane branch, a herd of red lechwe bounding through shallow water.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Private Helicopter Safari Over the Delta"
                cost="$1,500–2,200 (helicopter + all-inclusive ultra-camp day)"
                items={[
                  "Private helicopter over the full Okavango Delta: 1-hour aerial perspective over the labyrinth of channels, elephant herds clearly visible from 1,000 feet, the floodwaters catching the morning light in complex silver patterns across the Kalahari ($1,000+ for a private 4-seater helicopter from your camp).",
                  "Land on a remote island for a bush breakfast prepared by your camp chef: eggs cooked to order, fresh pastries baked in camp, sliced fruit, excellent coffee — a linen-covered table in the absolute middle of the wilderness.",
                  "Return by mokoro through a different channel system — your poler choosing routes based on animal activity from years of working this specific water.",
                  "Afternoon: tigerfish fishing in the delta with a specialist fishing guide (Botswana operates strict catch-and-release, $80pp with equipment). Tigerfish are aggressive, powerful fighters — one of southern Africa&apos;s great sport fish and a genuine highlight for fishing enthusiasts.",
                  "Camp dinner: 5-course menu designed by your camp chef with South African and Argentinian wines, served under a sky so dark and clear that the Milky Way casts a shadow. This is what the all-inclusive rate at $1,500/day looks like in practice.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Private Charter to Chobe: Luxury River Camp"
                cost="$1,300–1,800 (private charter + ultra-luxury Chobe, all-inclusive)"
                items={[
                  "Private charter flight from Chief&apos;s Island/Moremi to Kasane/Chobe ($400–600 for a private Cessna 206, 4-seater). The flight passes over the Linyanti Marshes and the Savute Channel — another extraordinary wilderness system worth noting for a future trip.",
                  "Check into Wilderness Safaris Chobe Under Canvas or &Beyond Chobe Chilwero (from $900pp/night all-inclusive). Chobe Chilwero sits on a hill above the Chobe River with private plunge pools, unobstructed river views, and the Chobe floodplain spread below each tent.",
                  "Afternoon private boat safari on the Chobe River — your own dedicated boat, private guide, and a sundowner setup on the water at sunset. Complete exclusivity on one of Africa&apos;s most wildlife-dense rivers.",
                  "Watch elephant herds crossing the river in their hundreds as the sun drops behind the Namibia treeline — a spectacle that even guides who have done it a thousand times still stop to watch in silence.",
                  "Private dinner on your camp&apos;s river deck; hippos calling, elephants drinking 50 metres below, the full African night around you.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Victoria Falls: Private Helicopter + Devil&apos;s Pool"
                cost="$1,000–1,400 (private car + helicopter + lodge)"
                items={[
                  "Private vehicle to Victoria Falls with a dedicated driver and guide (1 hour from Kasane, through the Kazungula crossing). Your guide explains the falls&apos; history: the Kololo name &apos;Mosi-oa-Tunya&apos; (The Smoke That Thunders), David Livingstone&apos;s 1855 arrival by canoe, and the formation of the 100-metre-deep Batoka Gorge.",
                  "Private 2-seat helicopter over the falls ($250, 30 min) — lower circuits than the commercial flights, your own pilot briefing, and a landing at a private viewpoint where you have the gorge edge to yourselves for 10 minutes.",
                  "Devil&apos;s Pool swim (September to December only, water levels permitting): a private safety guide accompanies you across the rocks to the natural pool at the lip of the falls. Swim to the rock edge with a 100-metre drop below — genuinely one of the most visceral experiences in southern Africa.",
                  "Lunch at The Victoria Falls Hotel — built in 1904, still grand and colonial, the Bridge Terrace veranda overlooks the spray forest and is worth $50pp for the occasion alone.",
                  "Afternoon guided rainforest walk on the Zimbabwe side through the spray forest that lines the gorge: some tree species here exist nowhere else on Earth, nourished entirely by the falls&apos; permanent mist.",
                ]}
              />
              <DayCard
                day="Day 6"
                title="Makgadikgadi Pans or Departure in Style"
                cost="$800–1,500 (Makgadikgadi or direct departure)"
                items={[
                  "Option A: private charter to Makgadikgadi Pans ($500 private charter, approximately 1 hour from Maun). Wilderness Safaris&apos; Jack&apos;s Camp on the Makgadikgadi is extraordinary — luxury tents positioned at the edge of the world&apos;s largest salt pans, with nothing between you and the horizon in every direction.",
                  "The habituated meerkat colony at Makgadikgadi Pans National Park has been habituated to humans since the 1990s — they use you as a warm, elevated lookout post at sunrise, sitting on your head and shoulder to scan for predators. This is one of Africa&apos;s most charming wildlife encounters.",
                  "Full-moon quad bike ride across the salt pans — a surface so hard and flat that you can ride at speed to the horizon and back under a moon bright enough to cast shadows. The silence of the pans at night is absolute. One of the most otherworldly experiences in Africa.",
                  "Option B: direct departure from Kasane Airport (BBK) or Livingstone Airport (LVI) — private transfer, lounge access, and the Wilderness Safaris departure gift.",
                  "Connection to Johannesburg (OR Tambo) for international departures. Depart Botswana with the delta&apos;s silence still resonating — the mokoro at dawn, the elephant herds on the river, the night sky with the Milky Way overhead.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Botswana Okavango" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🐘 Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Botswana&apos;s key destinations in priority order. Fees and rates are 2026 estimates — confirm current rates when booking. All prices in USD.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Okavango Delta — Mokoro Canoe Safari",
                  e: "$20–30 (community day) / $120–160 (overnight)",
                  d: "The defining Botswana experience. A mokoro polled in silence through water lily channels, an elephant drinking at the bank, hippos just below the surface. Even the cheapest community day trip from Maun delivers this. The overnight mokoro deepens it — sleeping on a delta island to hippos and reed frogs. Non-negotiable regardless of budget.",
                  t: "Must do · All budgets",
                },
                {
                  n: "Moremi Game Reserve",
                  e: "$30 park entry/person/day",
                  d: "The protected core of the Okavango Delta — declared by the Batawana people in 1963, the first community-led conservation area in Africa. Home to the Big Five, African wild dog, cheetah, and over 500 bird species. Best accessed by light aircraft from Maun ($80–180 each way shared). The combination of water and wildlife in Moremi is unmatched anywhere in the delta.",
                  t: "Essential · 2+ days",
                },
                {
                  n: "Chobe National Park",
                  e: "$15 park entry/person/day",
                  d: "Home to the highest elephant concentration on Earth — over 50,000 elephants use the park, with herds of 200+ swimming the Chobe River daily in the dry season. Also exceptional for lion, leopard, wild dog, sable antelope, and Chobe bushbuck (endemic). Game drives ($35pp shared) and boat safaris ($25pp shared) are the two core activities. Kasane is the gateway town.",
                  t: "Essential · 1–2 days",
                },
                {
                  n: "Chief&apos;s Island — Mombo Concession",
                  e: "From $1,200pp/night (Mombo Camp, all-inclusive)",
                  d: "The largest island in the Okavango Delta and home to Mombo Camp — widely described as Africa&apos;s finest safari camp. The Mombo concession is renowned for extraordinary big cat density and habituated predator sightings year-round. Only accessible by light aircraft from Maun. If your budget allows one genuine splurge in Africa, Mombo is the considered choice.",
                  t: "Bucket list · Luxury",
                },
                {
                  n: "Khwai Community Area",
                  e: "$20–40pp community activities",
                  d: "A community-run wildlife corridor on the northern edge of Moremi — no private concession fees, wildlife moves freely between Moremi and Khwai. Excellent for African wild dog, lion, leopard, and elephant at 30–40% below private concession costs. Old Bridge Backpackers has a stunning floodplain campsite for ~$20/night. The best wildlife value in Botswana.",
                  t: "Best value · All budgets",
                },
                {
                  n: "Victoria Falls — Day Trip from Kasane",
                  e: "$30 entry (Zimbabwe) / $20 (Zambia)",
                  d: "The world&apos;s largest waterfall by combined width and height — 1,708 metres wide, 108 metres tall, 500 million litres per minute at peak flow. One hour by road from Kasane. The Zimbabwe side gives the classic full-face curtain view; the Zambia side gives access to Devil&apos;s Pool (September–December only). A helicopter at $150–180 is the most dramatic perspective.",
                  t: "Day trip · All budgets",
                },
                {
                  n: "Makgadikgadi Pans National Park",
                  e: "$60 guided day trip from Maun",
                  d: "The world&apos;s largest salt pans — remnant of a massive ancient lake that covered most of Botswana 10,000 years ago. October–November sees a huge zebra and wildebeest migration. Habituated meerkat colonies climb on you at sunrise. Full-moon quad bike rides across the pans are a surreal and memorable experience. A natural extension to any Botswana itinerary.",
                  t: "Extension · Day trip",
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
            title="Botswana — Delta, Elephants &amp; the African Wild"
            subtitle="The Okavango Delta and Chobe: Africa&apos;s conservation success story in images."
            spots={[
              {
                name: "Okavango Delta Mokoro Canoe at Dawn",
                query: "okavango delta mokoro canoe water lilies botswana africa safari dawn",
                desc: "A mokoro gliding through water lily channels at dawn in the Okavango — the definitive Botswana experience available at every budget.",
              },
              {
                name: "Chobe Elephant Herd River Crossing",
                query: "chobe national park elephant herd swimming river crossing botswana safari",
                desc: "Elephant herds of 200+ crossing the Chobe River daily in the dry season — the highest elephant concentration on Earth.",
              },
              {
                name: "Moremi Game Reserve Lion Pride",
                query: "moremi game reserve lion pride okavango botswana safari africa",
                desc: "A lion pride in Moremi Game Reserve — the protected core of the Okavango Delta, home to the Big Five and African wild dog.",
              },
              {
                name: "Botswana Luxury Safari Camp",
                query: "botswana luxury safari camp okavango delta tent sundowner africa",
                desc: "A luxury tented camp in the Okavango Delta — sundowners on the deck, elephant herds on the floodplain, and a sky full of stars.",
              },
              {
                name: "Victoria Falls Aerial View Zimbabwe",
                query: "victoria falls helicopter aerial view zimbabwe zambia africa curtain",
                desc: "Victoria Falls from the air: 1,708 metres wide, the world&apos;s largest waterfall by combined width and height — one hour from Chobe by road.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Botswana is the most expensive safari destination in Africa by deliberate government policy. The budget tier still delivers extraordinary, world-class wildlife. All prices in USD; Botswana Pula (BWP) is the local currency (1 USD ≈ 13.5 BWP in 2026).
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">✨ Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-yellow-200 text-center">💎 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (per night)", "$30–50 (Maun guesthouse)", "$150–250 (lodge, all-inc.)", "$1,200–2,000 (Mombo / Xaranna)"],
                    ["🍽 Food (per day)", "$15–25 (Maun restaurants)", "$0 (all-inclusive)", "$0 (all-inclusive + wine)"],
                    ["🛩️ Light aircraft (internal)", "$120–180/flight (shared)", "$80–150/flight (shared)", "$400–1,200 (private charter)"],
                    ["🐘 Activities (game drives/boat)", "$25–35/activity (shared)", "Included in lodge rate", "$200–1,000 (private)"],
                    ["✈️ Getting there (international)", "$400–1,000 (economy)", "$800–1,500 (flexible eco.)", "$2,500+ (business class)"],
                    ["Total per day (in-country)", "~$300/day", "~$600/day", "~$1,500/day"],
                    ["Total 6-day trip (all-in)", "$2,200–3,500", "$5,000–7,500", "$12,000–22,000"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (~$300/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Maun guesthouses ($30–50/night), community mokoro day trips ($20–30), shared game drives ($35pp) and Chobe boat safaris ($25pp). Botswana&apos;s wildlife density means even the cheapest option here outperforms luxury at many other African destinations.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (~$600/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">All-inclusive Moremi or Khwai lodge ($150–250pp/night), shared light aircraft transfers ($80–150), professional guide and tracker included. The sweet spot for the full Botswana experience — mokoro, game drives, boat safari, and Chobe — without the ultra-luxury price.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-800 mb-1">💎 Luxury (~$1,500/day)</p>
                <p className="text-xs text-amber-700 font-light leading-relaxed">Mombo Camp, &Beyond Xaranna, Chobe Chilwero ($1,200–2,000pp/night all-inclusive). Private aircraft, private guides, helicopter excursions, gourmet dining under the stars. The finest safari experience on Earth — and the consensus verdict of anyone who has done it.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏕️ Where to Stay in Botswana</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Accommodation ranges from community campsite to the most exclusive safari camps in the world. The key decision is whether to stay in Maun (budget base with day excursions) or inside the delta or Chobe (full immersion). Remote delta camps are only accessible by light aircraft.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Mombo Camp — Chief&apos;s Island, Moremi",
                  type: "Ultra-luxury · Wilderness Safaris · Chief&apos;s Island",
                  price: "From $1,200pp/night (all-inclusive)",
                  badge: "Africa&apos;s finest",
                  desc: "Nine luxury tents on Chief&apos;s Island, the most wildlife-dense area of the Okavango. Extraordinary big cat activity, arguably the best guides in Africa, private plunge pools, and 5-course dinners under the stars. Widely regarded as the finest safari experience on the continent. Book 12–18 months ahead for peak season.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Sandibe Okavango Safari Lodge",
                  type: "Ultra-luxury · &Beyond · Moremi/Khwai corridor",
                  price: "From $1,000pp/night (all-inclusive)",
                  badge: "Most architecturally remarkable",
                  desc: "The &Beyond Sandibe is built into the delta landscape — its organic architecture echoes a pangolin curling through the vegetation. Twelve suites in a private concession at the Moremi–Khwai corridor junction. A private guide and vehicle allocated to each unit. Outstanding sustainability credentials and exceptional guiding.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Camp Moremi — Xakanaxa Lagoon",
                  type: "Mid-range · &Beyond · Moremi Game Reserve",
                  price: "From $400pp/night (all-inclusive)",
                  badge: "Best mid-range delta",
                  desc: "Set on the shores of Xakanaxa Lagoon in the heart of Moremi Game Reserve, Camp Moremi has been one of the most respected mid-range options in the delta for over 30 years. Twelve comfortable tents, excellent professional guides, and access to both land and water activities.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Chobe Game Lodge — Inside Chobe NP",
                  type: "Luxury · Chobe National Park",
                  price: "From $350pp/night (all-inclusive)",
                  badge: "Only lodge inside Chobe",
                  desc: "The only lodge with a concession inside Chobe National Park itself — directly on the Chobe River. Exclusive boat and game drive access inside the park boundary means you are already in the wildlife area from the moment you wake up. Famous for the elephant herd that walks through the lodge grounds to the river most dry-season mornings.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Audi Camp Maun / Old Bridge Backpackers Khwai",
                  type: "Budget · Maun + Khwai",
                  price: "$20–50/night (camping or private room)",
                  badge: "Best budget base",
                  desc: "Audi Camp in Maun is the long-established traveller base for organising delta trips — tents, dorms, and private rooms plus a trusted network of community mokoro operators on site. Old Bridge Backpackers in Khwai sits on the floodplain with extraordinary wildlife visible from the campsite itself for approximately $20/night. Both offer exceptional value.",
                  color: "border-green-200 bg-green-50",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Botswana</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              At luxury and mid-range camps, all meals are included in the rate and the cooking is genuinely exceptional — bush breakfasts in the wilderness, multi-course camp dinners by firelight. For budget travellers based in Maun or Kasane, these are the best options.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Bon Arrivée Restaurant, Maun",
                  t: "International · Maun town centre",
                  d: "The best restaurant in Maun — a pleasant courtyard, a full menu of international and Batswana dishes (seswaa slow-cooked beef, morogo wild greens, pap), and a decent wine list by Botswana standards. Reliable and consistent; a good place to meet other travellers over a meal. Main courses $12–22.",
                  b: "Best in Maun",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Old Bridge River Bar, Khwai",
                  t: "Casual · Old Bridge Backpackers campsite",
                  d: "The kitchen at Old Bridge Backpackers sits directly on the Khwai floodplain with elephants and buffalo sometimes visible from the tables. Simple but good food — burgers, grills, fresh sandwiches — and a cold Botswana beer after a game drive. The setting is extraordinary for the price. Mains $8–15.",
                  b: "Best atmosphere",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "The Victoria Falls Hotel Terrace, Zimbabwe",
                  t: "Colonial grand dining · Victoria Falls",
                  d: "Built in 1904 and still magnificent — the Bridge Terrace lunch offers a grand colonial experience with views of the spray column. High tea, grilled meats, and the kind of calm formality that African safari travel was built on. Lunch $40–60pp. Worth it for the setting and the occasion, especially if you have just been to the falls.",
                  b: "Most historic",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Bush Dinner at Your Safari Camp",
                  t: "Gourmet · Your all-inclusive camp",
                  d: "The best meal in Botswana will be at your camp. A bush dinner set in the wilderness — white linen table under the stars, paraffin lanterns, the sounds of the African night, and a chef who has been cooking game-country cuisine for years. Seswaa, Kalahari truffles in season, mopane worms if you are curious, and excellent South African wines. Included in your all-inclusive lodge rate.",
                  b: "Unmissable",
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
            destination="Botswana Okavango Delta"
            hotels={[
              {
                name: "Chobe Game Lodge",
                type: "Luxury · Only lodge inside Chobe National Park",
                price: "From $350pp/night",
                rating: "5",
                badge: "Best Chobe location",
                url: "https://www.booking.com/hotel/bw/chobe-game-lodge.html?aid=2820480",
              },
              {
                name: "Cresta Maun Hotel",
                type: "Mid-range · Maun town",
                price: "From $120/night",
                rating: "4",
                badge: "Best mid-range Maun",
                url: "https://www.booking.com/hotel/bw/cresta-riley-s.html?aid=2820480",
              },
              {
                name: "Audi Camp Maun",
                type: "Budget · Delta gateway base camp",
                price: "From $20/night",
                rating: "3",
                badge: "Best budget base",
                url: "https://www.booking.com/hotel/bw/audi-camp.html?aid=2820480",
              },
              {
                name: "Chobe Safari Lodge",
                type: "Mid-range · Kasane, Chobe River",
                price: "From $180/night",
                rating: "4",
                badge: "Best Chobe value",
                url: "https://www.booking.com/hotel/bw/chobe-safari-lodge.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Okavango Delta Mokoro Safari",
                duration: "Full day",
                price: "From $25/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=Okavango+Delta+mokoro+safari&partner_id=PSZA5UI",
              },
              {
                name: "Chobe National Park Boat Safari",
                duration: "2 hrs",
                price: "From $25/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=Chobe+National+Park+boat+safari&partner_id=PSZA5UI",
              },
              {
                name: "Chobe Game Drive (shared)",
                duration: "3 hrs",
                price: "From $35/person",
                badge: "Big 5",
                url: "https://www.getyourguide.com/s/?q=Chobe+National+Park+game+drive&partner_id=PSZA5UI",
              },
              {
                name: "Victoria Falls Helicopter Flight",
                duration: "15 min",
                price: "From $150/person",
                badge: "Unmissable",
                url: "https://www.getyourguide.com/s/?q=Victoria+Falls+helicopter&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🌞",
                  title: "Going in the wet season expecting a dry-season safari",
                  desc: "The best time for wildlife is June–October when animals concentrate around shrinking water sources. The wet season (November–January) brings lush greenery and baby animals, but thick vegetation makes sightings significantly harder. The Okavango floods from February to July, peaking in July–August from Angolan rains arriving months later. If wildlife density is your priority — and in Botswana, why would it not be — plan for June–October without compromise.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🔋",
                  title: "Not budgeting for the light aircraft transfers",
                  desc: "Remote Okavango camps are only accessible by light aircraft — there are no roads. Budget travellers frequently miss this cost. A shared Cessna flight from Maun to a Moremi camp runs $120–180 each way per person. Luxury camps include flights in their all-inclusive rates. Factor in $300–600 for internal flying when calculating your total Botswana budget, or you will find yourself stranded in Maun without a way to reach the wildlife.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "💊",
                  title: "Skipping malaria prevention",
                  desc: "The Okavango Delta is a malaria zone year-round, with higher risk during the wet season (November–April). Consult your doctor 6 weeks before travel — Doxycycline or Malarone are commonly prescribed and must start before arrival. Wear long sleeves at dusk, apply 50% DEET, and sleep under a mosquito net. All camps provide nets. The medication must start before you board the plane.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "📷",
                  title: "Bringing only a phone camera to Africa&apos;s finest wildlife destination",
                  desc: "The Okavango and Chobe have extraordinary wildlife but demanding light conditions: harsh midday sun, low golden hour, moving vehicles on rough tracks. A camera with at least 300mm zoom (Sony RX10 IV, Canon SX70, or a mirrorless with a 100–400mm lens) transforms your experience and your photographs. Phone cameras struggle at distance and in low light. Rent a wildlife camera in Johannesburg if you do not own one — rental houses operate near OR Tambo.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🎒",
                  title: "Overpacking — light aircraft weight limits are absolute",
                  desc: "Luxury camps are accessed by Cessna 206 or similar small aircraft — baggage limits are strictly 15–20kg total in a soft-sided bag only. Hard-shell suitcases will be left at your Maun lodge and a storage fee charged. Pack a soft duffel: neutral-coloured clothes (khaki, olive, grey — no white or bright colours on game drives), long sleeves for cold evenings, binoculars, high-SPF sunscreen, a wide hat, and camera gear. Your camp provides everything else.",
                  color: "bg-blue-50 border-blue-200",
                },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} color={m.color} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Botswana</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🐘",
                  title: "Book 12+ months ahead for peak camps in peak season",
                  desc: "Mombo Camp, &Beyond Xaranna, and Wilderness Safaris&apos; top Botswana properties have 12–18 month waitlists for July and August. Even mid-range Moremi lodges book out by February for the June–October season. Botswana&apos;s low-volume policy means there are genuinely only a few hundred beds in the entire delta. Book through a specialist Africa safari operator rather than direct.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🛶",
                  title: "A mokoro sunrise is the defining Okavango moment",
                  desc: "A motorboat game drive is spectacular. A mokoro canoe at 6am in absolute silence, with your poler reading the channels ahead and an elephant drinking 20 metres away, is transcendent. Even budget travellers who do nothing else in Botswana should spend one morning in a mokoro. Book vetted community operators via GetYourGuide: getyourguide.com with partner_id=PSZA5UI.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🦁",
                  title: "Combine Okavango + Chobe for the complete experience",
                  desc: "Botswana is small enough that combining the Okavango Delta (water wilderness, mokoro, birds, leopard) with Chobe National Park (world&apos;s highest elephant concentration, 4WD drives, river boats) in a single 6–8 day trip is entirely manageable. Kasane is 4 hours by road or 45 minutes by charter from Maun. Covering both transforms a good safari into an exceptional one.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "⭐",
                  title: "Khwai Community Area rivals private reserves at lower cost",
                  desc: "Khwai is community-run and open-access — no private concession fees. Wildlife moves freely between Moremi and Khwai, meaning you get equivalent game (wild dog, lion, leopard, elephant, buffalo) for 30–40% less than a private concession camp. Old Bridge Backpackers has a stunning floodplain campsite for ~$20/night. The single best wildlife value in Botswana.",
                  color: "bg-pink-50 border-pink-200",
                },
                {
                  icon: "🌙",
                  title: "Night drives are one of Botswana&apos;s best-kept secrets",
                  desc: "Night drives are permitted in private concessions (not national parks) and reveal a completely different ecosystem after dark: genets, civets, porcupines, spring hares, servals, and occasionally leopard on a kill. Most mid-range and luxury camps offer night drives at $40pp. If you have done one morning drive and want a radically different experience the same day, a night drive delivers it.",
                  color: "bg-indigo-50 border-indigo-200",
                },
                {
                  icon: "💱",
                  title: "Carry USD cash for tips and incidentals",
                  desc: "Luxury camp rates and most activities are priced and paid in USD. Guide tips in USD: $10–20pp per day at mid-range camps, $20–30 at luxury camps is the accepted standard. Bring clean, non-torn USD bills — some remote camps have limited card facilities. ATMs exist in Maun but are not always reliable in peak season. Carry sufficient cash for your full stay.",
                  color: "bg-orange-50 border-orange-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Botswana Okavango" />

          {/* Combine With */}
          <CombineWith currentSlug="botswana-okavango-6-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is Botswana really the most expensive safari destination in Africa?",
                  a: "Deliberately, yes. Botswana&apos;s government established a high-cost, low-volume tourism policy in the 1990s, restricting the total number of safari beds across the delta to protect the ecosystem from the overuse that has damaged parks in Kenya and Tanzania. The cheapest way to experience the Okavango costs around $200–300 per day. Private lodge all-inclusive rates run $800–2,000 per person per night. Compared to budget-tier Kenya or Tanzania safaris at $100–150/day, Botswana is significantly more expensive — but the wildlife density, absence of crowds, and genuine wilderness justify every dollar.",
                },
                {
                  q: "What is the best camp in the Okavango Delta?",
                  a: "Mombo Camp (Wilderness Safaris) on Chief&apos;s Island is widely regarded as Africa&apos;s finest safari camp — extraordinary big cat activity, impeccable guiding, and exceptional food at $1,200–2,000pp/night all-inclusive. &Beyond Xaranna offers comparable luxury in the western delta. For mid-range, Camp Moremi ($400pp), Sanctuary Chief&apos;s Camp, and Khwai River Lodge consistently receive the highest reviews. For budget, Old Bridge Backpackers in Khwai (~$20/night camping) and Audi Camp in Maun ($30–50) are the most respected base camps.",
                },
                {
                  q: "Do I need a visa for Botswana?",
                  a: "Most Western passports (US, UK, EU, Australia, Canada) and Indian passports are visa-free for up to 90 days on arrival at Maun Airport or any land border. South African, Zimbabwean, and Zambian citizens are also visa-free. A small number of nationalities require visas — check the Botswana Department of Immigration website before travel. Yellow fever vaccination is required if arriving from a yellow fever-endemic country such as Kenya, Uganda, or the DRC.",
                },
                {
                  q: "Can I self-drive in the Okavango Delta?",
                  a: "Not in the inner delta — channels, islands, and floodplains are accessible only by mokoro or light aircraft. However, you can self-drive to the eastern delta periphery and Moremi&apos;s Third Bridge area in a capable 4WD (Land Cruiser or Hilux class), dramatically reducing costs. Self-drive Moremi from Maun is possible with camping equipment and experience — but the tracks are notoriously rough and flood seasonally. Breakdowns in remote areas without phone signal are a real risk. Not recommended for first-time Africa visitors.",
                },
                {
                  q: "What is better for game drives — Moremi or Chobe?",
                  a: "They are genuinely different experiences and ideally you do both. Moremi offers the combination of water wilderness and wildlife in an intimate, less-visited setting — elephants in the channels, leopard in riparian woodland, wild dog on open floodplains. Chobe offers sheer wildlife volume: the Chobe River in the dry season with herds of 200+ elephants swimming across is one of the most spectacular wildlife spectacles on Earth. A typical Botswana itinerary spends 3–4 nights in the Okavango area and 1–2 nights at Chobe.",
                },
                {
                  q: "Is a Victoria Falls day trip from Chobe worth it?",
                  a: "Absolutely. Kasane (Chobe&apos;s gateway town) to Victoria Falls town is approximately 80km — about 1 hour by road via the new Kazungula bridge. A half-day at the falls (Zimbabwe side entry $30, Zambia side $20) combined with a morning Chobe game drive makes for an extraordinary single day. If your budget allows, the helicopter over the falls ($150–180pp) is the most dramatic perspective and worth every dollar. Combining Chobe with Victoria Falls is one of southern Africa&apos;s classic double-header itineraries.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Botswana safari</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/botswana-visa-guide", label: "Visa guide", icon: "📋" },
                { href: "/blog/botswana-packing-list", label: "Packing list", icon: "🎒" },
                { href: "/blog/okavango-delta-mokoro", label: "Mokoro tips", icon: "🛶" },
                { href: "/blog/chobe-elephant-safari", label: "Chobe elephants", icon: "🐘" },
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
          <RelatedGuides currentSlug="botswana-okavango-6-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Africa Safari Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kenya Masai Mara — 7-Day Safari Guide", href: "/blog/kenya-safari-7-days" },
                { label: "Victoria Falls — The Complete Guide", href: "/blog/victoria-falls-guide" },
                { label: "South Africa Cape Town — 5 Days", href: "/blog/south-africa-cape-town" },
                { label: "Chobe National Park — Day Trip Guide", href: "/blog/chobe-national-park" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group"
                >
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">
                    {link.label}
                  </span>
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
