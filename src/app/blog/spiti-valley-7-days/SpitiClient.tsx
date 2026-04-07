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
import Breadcrumb from "@/components/blog/Breadcrumb";

const SPITI_TOC = [
  { id: "decision",  emoji: "⚡",  label: "Which Spiti Are You?" },
  { id: "route",     emoji: "🚗",  label: "The Two Routes In" },
  { id: "itinerary", emoji: "📅",  label: "7-Day Itinerary" },
  { id: "budget",    emoji: "💰",  label: "Budget Breakdown" },
  { id: "altitude",  emoji: "🏔️", label: "Altitude & Safety" },
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
        className="h-full bg-slate-500 transition-all duration-100"
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
          href: `mailto:?subject=Spiti Valley 7-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Spiti+Valley+7+Days+guide&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
    <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-parchment hover:bg-parchment-2 transition-colors"
      >
        <div className="flex items-center gap-3 text-left">
          <span className="font-serif text-xl text-slate-600 font-light">{day}</span>
          <span className="text-sm text-ink font-medium">{title}</span>
        </div>
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed"
              >
                <span className="text-slate-400 mt-1 flex-shrink-0 text-xs">●</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">💰</span>
            <span className="text-xs text-muted font-light">Est. cost: </span>
            <span className="text-xs font-medium text-slate-600">{cost}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ── FAQ Accordion ─────────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span
          className={`text-slate-500 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
        >
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

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function SpitiClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeType, setActiveType] = useState<"solo" | "group" | "budget">("solo");

  const travelerTypes = [
    {
      id: "solo" as const,
      emoji: "🎒",
      label: "Solo",
      sub: "Shared jeeps, homestays",
      color: "border-slate-300 bg-slate-50 text-slate-800",
    },
    {
      id: "group" as const,
      emoji: "👥",
      label: "Group",
      sub: "Split costs, private taxi",
      color: "border-teal-300 bg-teal-50 text-teal-800",
    },
    {
      id: "budget" as const,
      emoji: "💰",
      label: "Budget",
      sub: "Under ₹3,000/day",
      color: "border-amber-300 bg-amber-50 text-amber-800",
    },
  ];

  const soloTips = [
    "Book Manali–Kaza shared jeep (Sumo) 2 days in advance in peak season — limited seats, fills up fast.",
    "Hostels and solo-friendly homestays in Kaza: Zostel Kaza, Spiti Nature Camp. Both have common areas to meet other travellers.",
    "Join WhatsApp groups for Spiti travellers — find people to share jeep costs for Chandratal and village circuits.",
    "BSNL SIM is essential. Download offline maps for entire Himachal Pradesh. Tell someone your daily plan.",
    "Women solo travellers report Spiti as very safe — locals are Buddhist, respectful, and genuinely hospitable. Trust your instincts at remote camps.",
  ];

  const groupTips = [
    "Rent a Mahindra Bolero or Scorpio from Manali (₹5,000–₹7,000/day including driver) — split 4 ways becomes very affordable.",
    "Private taxi Manali–Kaza: ₹8,000–₹12,000. Split between 4 = ₹2,000–₹3,000 per person.",
    "Groups of 4+ can book entire camps at Chandratal for a flat rate — negotiate, especially off-peak.",
    "Designate one navigator (offline maps) and one driver per day. Altitude affects judgment — rotate responsibilities.",
    "Book rooms 2–3 days ahead in peak season (July–August). Many guesthouses in Kaza have only 4–6 rooms.",
  ];

  const budgetTips = [
    "HRTC bus Manali–Kaza runs once daily in season — ₹400–₹500, rough 8–9 hour ride, but dramatically cheaper than taxi.",
    "Homestays in Kaza: ₹600–₹800/night including dinner and breakfast. This is real Spiti hospitality.",
    "Eat at local dhabas in Kaza — thukpa, momos, tsampa. ₹80–₹150 per meal.",
    "Shared jeep day trips to villages: ₹300–₹500 per person from Kaza market (ask around morning).",
    "Skip the fancy camps at Chandratal — basic tents with meals: ₹800–₹1,000/night. Same stars, same lake.",
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={SPITI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Spiti Valley" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            imageKey="spitiHero"
            fallback="/images/blog/spiti-valley-key-monastery.jpg"
            alt="Key Monastery Spiti Valley Himachal Pradesh perched on cliff"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/30" />

          {/* Breadcrumb */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Spiti Valley 7 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-slate-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  The Middle Land
                </span>
                <span className="text-white/60 text-xs">March 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">16 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Spiti Valley in 7 Days:
                <em className="italic text-slate-300"> The Complete Solo &amp; Group Itinerary</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[580px] leading-relaxed">
                Kaza · Key Monastery · Chandratal Lake · Langza fossils · Kibber snow leopards. A cold desert at 3,800–4,500m that looks more like Mars than India — and why it&apos;s worth every difficult kilometre.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🏔️ Himachal Pradesh</span>
              <span>·</span>
              <span>🗓 7 Days</span>
              <span>·</span>
              <span>💰 From ₹3,000/day</span>
            </div>
          </div>

          {/* Honest intro blockquote */}
          <blockquote className="border-l-4 border-slate-400 pl-6 mb-10 bg-slate-50 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Spiti means &ldquo;the middle land&rdquo; — between India and Tibet. A cold desert at 3,800–4,500m that receives less than 170mm of rain per year. Brown and grey moonscape punctuated by sudden turquoise lakes and 1,000-year-old Buddhist monasteries. One of the last places in India that feels genuinely remote and untouched. Also one of the most demanding.
            </p>
          </blockquote>

          {/* ── WHICH SPITI ARE YOU ── */}
          <section id="decision" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Spiti Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your traveller type — get tailored tips throughout.</p>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {travelerTypes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setActiveType(t.id);
                    document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 text-center group ${
                    activeType === t.id
                      ? "border-slate-500 shadow-md " + t.color
                      : "border-parchment-2 bg-white hover:border-slate-400 hover:shadow-sm"
                  }`}
                >
                  <div className="text-2xl mb-2">{t.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{t.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{t.sub}</p>
                  <p className="text-[0.65rem] text-slate-500 mt-2 font-medium group-hover:text-teal transition-colors">
                    See tips →
                  </p>
                </button>
              ))}
            </div>

            {/* Contextual tips based on type */}
            <div className="bg-white rounded-xl border border-parchment-2 p-5">
              <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-muted mb-3">
                {activeType === "solo" ? "Solo Traveller Tips" : activeType === "group" ? "Group Traveller Tips" : "Budget Traveller Tips"}
              </p>
              <ul className="space-y-2.5">
                {(activeType === "solo" ? soloTips : activeType === "group" ? groupTips : budgetTips).map(
                  (tip, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                      <span className="text-slate-400 mt-1 flex-shrink-0 text-xs">●</span>
                      {tip}
                    </li>
                  )
                )}
              </ul>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🏔️" label="Kaza Altitude" value="3,800m" />
            <StatCard icon="🌡️" label="Best Window" value="Jul–Sep" />
            <StatCard icon="📵" label="Network" value="BSNL / Jio" />
            <StatCard icon="💰" label="Budget From" value="₹3,000/day" />
          </div>

          {/* ── WHY SPITI ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">What Makes Spiti Worth It</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Spiti is the rain shadow of the Himalayas — the monsoon cannot cross the passes, so this high-altitude desert gets barely any rainfall. The result is a landscape that looks like Mars crossed with Tibet: brown and grey moonscape stretching to 6,000m peaks, broken only by the bright turquoise of glacial rivers and the white of stupas. And then you round a corner and there is a 1,000-year-old monastery clinging to a cliff.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                {
                  title: "Why July–September",
                  emoji: "☀️",
                  bg: "bg-green-50 border-green-200",
                  th: "text-green-800",
                  rows: [
                    ["Roads", "Fully open, repaired post-winter"],
                    ["Weather", "Clear blue skies, 15–25°C in Kaza"],
                    ["Access", "Chandratal accessible, all villages open"],
                    ["Crowds", "Still very few vs Ladakh — maybe 200 tourists/day"],
                  ],
                  note: "Peak season. Book shared jeeps and camps 2–3 days ahead.",
                },
                {
                  title: "Why October Works Too",
                  emoji: "🍂",
                  bg: "bg-amber-50 border-amber-200",
                  th: "text-amber-800",
                  rows: [
                    ["Colours", "Golden barley fields, turning trees"],
                    ["Crowds", "Significantly fewer tourists"],
                    ["Risk", "Roads start closing mid-October"],
                    ["Cost", "Lower accommodation rates"],
                  ],
                  note: "Check road status daily. Kunzum Pass closes first — sometimes without warning.",
                },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>
                    {area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/80 w-16 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">
                    ⚠️ {area.note}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-sm text-red-800 font-light">
                <strong className="font-medium">April–May: Do not go.</strong> Rohtang Pass and Kunzum Pass are closed or extremely dangerous. The Shimla route may have sections blocked by avalanche debris. Several tourists have died attempting early-season crossings. Wait for June at the earliest.
              </p>
            </div>
          </section>

          {/* ── THE TWO ROUTES ── */}
          <section id="route" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚗 The Two Routes Into Spiti</h2>
            <div className="space-y-4">
              {[
                {
                  num: "Route 1",
                  icon: "🏔️",
                  title: "Manali → Spiti via Rohtang & Kunzum Pass",
                  badge: "More dramatic",
                  color: "bg-slate-50 border-slate-200",
                  details: [
                    ["Distance", "~200km, 7–9 hours"],
                    ["Open", "June to October only"],
                    ["Passes", "Rohtang (3,978m) + Kunzum (4,590m)"],
                    ["Road", "Rough — 4WD strongly recommended"],
                  ],
                  desc: "The classic dramatic entry — crossing Rohtang, descending into lunar Lahaul, then climbing Kunzum into Spiti. You can detour to Chandratal on the way. The landscape change at Gramphu is one of the most dramatic in India: green Kullu Valley disappears, moonscape begins. Requires Rohtang Permit (book at rohtangpermit.nic.in, ₹550).",
                },
                {
                  num: "Route 2",
                  icon: "🌿",
                  title: "Shimla → Spiti via Kinnaur Valley",
                  badge: "Recommended for first-timers",
                  color: "bg-green-50 border-green-200",
                  details: [
                    ["Distance", "~400km, 14–16 hrs over 2 days"],
                    ["Open", "Year-round (paved road)"],
                    ["Highlights", "Kinnaur orchards, Nako Lake, Tabo Monastery"],
                    ["Altitude gain", "Gradual — better for acclimatisation"],
                  ],
                  desc: "Passes through Kinnaur&apos;s apple orchards, Nako Lake, and ends at Tabo Monastery before reaching Kaza. The gradual altitude gain over 2 days gives your body time to adjust. The road along the Sutlej River gorge through Kinnaur is spectacular — but narrow. Landslide risk in monsoon season.",
                },
                {
                  num: "Best Circuit",
                  icon: "🔄",
                  title: "Enter Shimla side, Exit Manali side (or reverse)",
                  badge: "Ideal plan",
                  color: "bg-amber-50 border-amber-200",
                  details: [
                    ["Total distance", "~600km circuit"],
                    ["Duration", "7–10 days minimum"],
                    ["Advantage", "Different scenery both ways"],
                    ["Chandratal", "On the Manali exit — perfect timing"],
                  ],
                  desc: "Enter Spiti from Shimla–Kinnaur for gradual acclimatisation. Explore Kaza, villages, Pin Valley. Exit via Manali with Chandratal as your grand finale before the Kunzum descent. This is the itinerary we follow in this guide.",
                },
              ].map((route) => (
                <div key={route.num} className={`rounded-xl border p-5 ${route.color}`}>
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{route.icon}</span>
                      <div>
                        <p className="text-[0.6rem] font-semibold tracking-widest uppercase text-muted">{route.num}</p>
                        <p className="font-semibold text-sm text-ink">{route.title}</p>
                      </div>
                    </div>
                    <span className="text-xs bg-white/80 text-muted px-3 py-1 rounded-full border border-white/60">
                      {route.badge}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    {route.details.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/70 flex-shrink-0">{k}:</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{route.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── 7-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 7-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6">
              Manali entry → Kaza base → Shimla exit (through-route). Best direction for acclimatisation if entering via Shimla, but this Manali-first version suits those flying into Bhuntar or coming from Ladakh.
            </p>

            <DayCard
              day="Day 1"
              title="Delhi / Chandigarh → Manali — Arrive & Acclimatise"
              cost="₹1,200–₹2,000 (bus) / ₹4,000+ (flight to Bhuntar)"
              items={[
                "Overnight Volvo bus from Delhi to Manali (₹1,200–₹1,800, 14–15 hrs) or fly into Kullu–Manali (Bhuntar) Airport. Bus from Chandigarh: 7–8 hours.",
                "Arrive Manali (2,050m). Check in. Rest. This is your acclimatisation day — do not rush to ascend.",
                "Walk Old Manali, Hadimba Temple, Vashisht village. Light exploration at 2,050m helps your body adjust.",
                "Visit HRTC bus stand or taxi stand — book your Manali–Kaza shared Sumo for Day 2 morning (fills up fast in peak season).",
                "Withdraw cash at Manali ATMs — carry ₹10,000+ in ₹500 and ₹100 notes. The Kaza ATM is unreliable.",
                "Do NOT drink alcohol tonight. At altitude, alcohol accelerates dehydration and worsens AMS.",
              ]}
            />

            <DayCard
              day="Day 2"
              title="Manali → Kaza via Kunzum Pass — The Big Drive"
              cost="₹800–₹1,500 (shared jeep) or ₹8,000–₹12,000 (private taxi)"
              items={[
                "Leave Manali by 6–7am. Rohtang Permit required (book online at rohtangpermit.nic.in, ₹550, day before). Jeep share from Manali taxi stand: ₹800–₹1,500/person.",
                "Cross Rohtang Pass (3,978m) — the landscape shifts instantly from Kullu Valley green to Lahaul moonscape. One of India&apos;s great visual transitions.",
                "Stop at Losar village — last petrol pump before Kaza. Fill up completely regardless of current level.",
                "Kunzum Pass (4,590m) — circumambulate the Kunzum Mata shrine before entering Spiti (tradition, takes 5 minutes). Extraordinary 360° Himalayan views.",
                "Optional: if arriving Kunzum before 2pm, detour to Chandratal Lake (15km rough track, 45 mins each way) — save this for Day 5 if time is tight.",
                "Arrive Kaza (3,800m) by 3–5pm. Check in. Do NOT go anywhere. Lie down, drink 2–3L water, eat light. Mild headache is normal. Severe headache + vomiting = descend immediately.",
              ]}
            />

            <DayCard
              day="Day 3"
              title="Kaza — Key Monastery & Kibber Village"
              cost="₹500–₹1,000"
              items={[
                "Acclimatisation day — do not go above 4,500m and do not rush. Your body needs 24–48 hours at 3,800m before tackling higher altitudes.",
                "Morning: Key Monastery (Ki Gompa) — 14km from Kaza at 4,166m. Largest monastery in Spiti, 1,000 years old, around 300 monks still in residence. Morning prayers at 6am open to respectful visitors. ₹50 entry. The valley view from the gompa courtyard is extraordinary.",
                "Return to Kaza for lunch. Eat local: thukpa (noodle soup), skyu (pasta stew), tsampa. Light, warm food is best at altitude.",
                "Afternoon: Kibber village (4,270m, 18km from Kaza). Used to be the world&apos;s highest motorable village. Snow leopard spotting territory — ask locally about recent sightings. Kibber Wildlife Sanctuary.",
                "Return Kaza by 4pm. Rest. Drink water constantly — 3–4L per day minimum. Altitude dehydrates you faster than you feel it.",
              ]}
            />

            <DayCard
              day="Day 4"
              title="Upper Circuit — Hikkim, Komic & Langza"
              cost="₹800–₹1,500"
              items={[
                "The high-altitude village circuit — all above 4,400m. Share a jeep from Kaza market (₹300–₹500/person) or hire a vehicle (₹1,500–₹2,500 for the circuit).",
                "Hikkim Post Office (4,400m) — the world&apos;s highest post office. Send a postcard home (₹25 stamp). The postmark is proof. Open weekday mornings.",
                "Komic village (4,520m) — one of the world&apos;s highest permanently inhabited villages. The Tangyud Monastery here is 500+ years old. Very few tourists even in peak season. Locals will offer you butter tea.",
                "Langza village (4,400m) — Spiti&apos;s fossil village. The hillsides around Langza contain marine ammonite fossils — this valley was ocean floor 50 million years ago. The giant Buddha statue overlooking the valley is one of Spiti&apos;s most photogenic sights.",
                "Back in Kaza by 1–2pm. Rest afternoon. Altitude fatigue is cumulative — do not plan anything else today.",
              ]}
            />

            <DayCard
              day="Day 5"
              title="Chandratal Lake — The Moon Lake"
              cost="₹1,500–₹3,500 (day trip) or ₹2,500–₹5,000 (overnight camping)"
              items={[
                "Leave Kaza by 6am. Chandratal is 75km on the Manali route — takes 2–2.5 hours on rough road. Hire a 4WD from Kaza (₹3,500–₹5,000/day; split between 4 = very affordable) — the last 8km requires serious ground clearance.",
                "Chandratal Lake (4,300m) — a crescent half-moon shaped lake whose colour shifts between deep turquoise, silver, and cobalt depending on light and time of day. One of the most extraordinary natural sights in India.",
                "Permit checkpoint at Batal — carry ID. Register your vehicle and number of passengers.",
                "Park at the designated area — no vehicles to the lake edge. 1km easy walk to the lake. Bring packed lunch.",
                "If camping overnight: several basic camps along the shore (₹800–₹1,500/night, meals included). No permanent structures allowed — eco-sensitive zone. The Milky Way from Chandratal at 4,300m with zero light pollution is worth the cold (bring -10°C sleeping bag).",
                "Day trip: return Kaza by 5–6pm. Temperature drops sharply after sunset at 4,300m — wear warm layers even in July.",
              ]}
            />

            <DayCard
              day="Day 6"
              title="Pin Valley & Dhankar Monastery"
              cost="₹800–₹1,800"
              items={[
                "Pin Valley — 45km from Kaza on a rough road. The valley is greener than the rest of Spiti — a different landscape. Pin Valley National Park is prime snow leopard territory. The road ends at Mud village — simple homestay available.",
                "Dhankar Monastery — 32km from Kaza, perched on a crumbling cliff at 3,890m above the confluence of the Spiti and Pin rivers. 10th century, on UNESCO&apos;s emergency heritage list. Visit before it&apos;s gone. Free entry.",
                "Dhankar Lake — 2km trek above the monastery (about 1.5 hrs return). A small lake surrounded by jagged cliffs with exceptional views of the valley below.",
                "Return to Kaza by 4pm. Pack for tomorrow — you&apos;re beginning the Shimla exit route.",
                "Final dinner in Kaza. Try the local apricot jam, dried herbs, and any locally made crafts — prices are fair and money goes directly to families.",
              ]}
            />

            <DayCard
              day="Day 7"
              title="Kaza → Shimla via Tabo, Nako & Kinnaur Valley"
              cost="₹600–₹2,000 (bus) or ₹8,000+ (private taxi)"
              items={[
                "Leave Kaza early (7–8am) — it&apos;s a long day. Kaza to Shimla: 420km, 12–14 hours. Or break at Reckong Peo (Recong Peo) for a night.",
                "Tabo (47km from Kaza) — Tabo Monastery, founded 996 CE, the &ldquo;Ajanta of the Himalayas&rdquo;. 1,000-year-old frescoes and stucco sculptures inside. ₹100 entry. Photography not allowed inside the cave temples — which forces you to really look.",
                "Nako village and lake (3,662m) — a turquoise lake in an extraordinarily remote village with a 1,000-year-old monastery. Good for a 30-minute stop.",
                "The Kinnaur descent via the Sutlej River gorge — one of the most dramatic drives in India. Sheer cliffs, river hundreds of metres below, road barely wide enough for two vehicles. Hanging rock sections visible.",
                "Reckong Peo (2,670m) — the first reliable ATM, phone network, and medical centre since Kaza. Top up. First real signal in days.",
                "Continue to Shimla (6 hours from Reckong Peo) or overnight in Sangla Valley (15km detour — lush apple orchards, very different from Spiti). Shimla has Volvo buses to Delhi (6 hours, ₹800–₹1,500).",
              ]}
            />
          </section>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-slate-300 text-center">Mid-Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🚗 Transport (shared jeep / bus)", "₹3,000–₹6,000", "₹12,000–₹20,000"],
                    ["🏨 Accommodation (6 nights)", "₹3,600–₹6,000", "₹9,000–₹18,000"],
                    ["🍽️ Food (7 days)", "₹1,400–₹2,800", "₹3,500–₹6,000"],
                    ["⛺ Chandratal camping (1 night)", "₹800–₹1,200", "₹2,500–₹5,000"],
                    ["🎯 Entry fees + permits", "₹500–₹800", "₹800–₹1,500"],
                    ["📦 Misc (SIM, offline maps, first aid)", "₹500–₹1,000", "₹1,000–₹2,000"],
                    ["TOTAL per person (7 days)", "₹9,800–₹17,800", "₹28,800–₹52,500"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="p-3.5 text-xs text-muted font-light text-center">
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                {
                  title: "Cash Warning",
                  icon: "💵",
                  color: "bg-red-50 border-red-200",
                  text: "One ATM in Kaza — frequently out of cash. Carry ₹10,000+ in small denominations from Manali or Chandigarh. No UPI in most homestays and camps.",
                },
                {
                  title: "Best Value",
                  icon: "🏡",
                  color: "bg-green-50 border-green-200",
                  text: "Homestays (₹600–₹1,000/night with dinner + breakfast) are the best way to spend money in Spiti — it goes directly to local families, and you get real hospitality.",
                },
                {
                  title: "Worth Splurging",
                  icon: "⭐",
                  color: "bg-amber-50 border-amber-200",
                  text: "Overnight camping at Chandratal. The extra ₹800–₹1,500 for a night by the lake vs a day trip is one of the best value upgrades in Spiti.",
                },
              ].map((c) => (
                <div key={c.title} className={`rounded-xl border p-4 ${c.color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{c.icon}</span>
                    <p className="font-medium text-sm text-stone-900">{c.title}</p>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>
          </section>

          <AffiliateBlock
            destination="Spiti Valley Himachal Pradesh"
            hotels={[
              {
                name: "Spiti Holiday Camp",
                type: "Camp · Kaza",
                price: "From ₹2,500/night",
                rating: "4",
                badge: "Best Kaza Base",
                url: "https://www.booking.com/hotel/in/spiti-holiday-camp.html?aid=2820480",
              },
              {
                name: "Chandratal Lake Camp",
                type: "Luxury camp · Chandratal",
                price: "From ₹4,000/night",
                rating: "4",
                badge: "Lakeside",
                url: "https://www.booking.com/hotel/in/chandratal-camp.html?aid=2820480",
              },
              {
                name: "Homestay Tabo",
                type: "Homestay · Tabo village",
                price: "From ₹800/night",
                rating: "3",
                badge: "Oldest village",
                url: "https://www.booking.com/hotel/in/homestay-tabo.html?aid=2820480",
              },
              {
                name: "Norling Guest House Kaza",
                type: "Guesthouse · Kaza town",
                price: "From ₹1,200/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/in/norling-kaza.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Spiti Valley 7-Day Guided Tour",
                duration: "7 Days",
                price: "From ₹18,000/person",
                badge: "Fully guided",
                url: "https://www.getyourguide.com/s/?q=spiti+valley&partner_id=PSZA5UI",
              },
              {
                name: "Chandratal Lake Camping",
                duration: "2 Days",
                price: "From ₹3,500/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=spiti+valley&partner_id=PSZA5UI",
              },
              {
                name: "Key Monastery + Villages Day Tour",
                duration: "Full day",
                price: "From ₹1,500/person",
                url: "https://www.getyourguide.com/s/?q=spiti+valley&partner_id=PSZA5UI",
              },
              {
                name: "Snow Leopard Safari Pin Valley",
                duration: "2 Days",
                price: "From ₹5,000/person",
                url: "https://www.getyourguide.com/s/?q=spiti+valley&partner_id=PSZA5UI",
              },
            ]}
          />

          <DestinationGallery
            title="Spiti Valley"
            subtitle="The Middle Land — between India and Tibet."
            spots={[
              {
                name: "Key Monastery",
                query: "key monastery spiti valley cliff himachal pradesh buddhist",
                desc: "1,000-year-old monastery at 4,166m — the largest in Spiti, with extraordinary valley views.",
              },
              {
                name: "Chandratal Lake",
                query: "chandratal lake spiti valley turquoise crescent moon high altitude",
                desc: "Crescent-shaped lake at 4,300m — colour shifts between turquoise, cobalt, and silver.",
              },
              {
                name: "Kibber Village",
                query: "kibber village spiti valley high altitude himachal snow leopard",
                desc: "One of the world&apos;s highest motorable villages at 4,270m — snow leopard territory.",
              },
              {
                name: "Langza Buddha",
                query: "langza village spiti valley buddha statue mountains fossil",
                desc: "Giant Buddha statue overlooking Langza — a village where marine fossils are found in the fields.",
              },
              {
                name: "Dhankar Monastery",
                query: "dhankar monastery cliff spiti valley confluence pin river",
                desc: "10th-century monastery on a crumbling cliff above the Spiti–Pin river confluence.",
              },
            ]}
          />

          {/* ── ALTITUDE & SAFETY ── */}
          <section id="altitude" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">🏔️ Altitude & Safety — Read This</h2>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-6">
              <p className="text-sm text-red-800 font-light leading-relaxed">
                <strong className="font-medium">Kaza is at 3,800m. Chandratal is at 4,300m. Komic is at 4,520m.</strong> Many visitors feel headache, nausea, and fatigue on Day 1 in Kaza. This is normal. What is not normal — and is dangerous — is severe persistent headache, vomiting, confusion, or difficulty walking straight. If these occur, descend 500m immediately and do not wait it out.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {[
                {
                  icon: "💊",
                  title: "Diamox (Acetazolamide)",
                  color: "bg-blue-50 border-blue-200",
                  points: [
                    "Prescription medication — consult your doctor before Spiti.",
                    "Prophylactic dose: 125mg twice daily, starting 2 days before ascending above 3,000m.",
                    "Common side effects: tingling fingers and toes, increased urination. Both are normal.",
                    "Controversial among some trekkers but widely used and effective for AMS prevention.",
                    "Not a substitute for proper acclimatisation — use both.",
                  ],
                },
                {
                  icon: "💧",
                  title: "Hydration & Pace",
                  color: "bg-cyan-50 border-cyan-200",
                  points: [
                    "Drink 3–4 litres of water per day. Set phone reminders if needed.",
                    "The golden rule: ascend no faster than 500m per day above 3,000m.",
                    "Do not fly into Kaza directly from sea level — acclimatise in Manali first.",
                    "Avoid alcohol and sleeping pills for the first 48 hours in Spiti.",
                    "Eat light, high-carbohydrate meals at altitude — heavy food worsens nausea.",
                  ],
                },
              ].map((card) => (
                <div key={card.title} className={`rounded-xl border p-4 ${card.color}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{card.icon}</span>
                    <p className="font-medium text-sm text-stone-900">{card.title}</p>
                  </div>
                  <ul className="space-y-1.5">
                    {card.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-700 font-light">
                        <span className="text-slate-400 mt-0.5 flex-shrink-0">●</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl border border-parchment-2 p-4">
              <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">What to Pack for Altitude</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  "Diamox (prescription)",
                  "Paracetamol / ibuprofen",
                  "Oral rehydration salts",
                  "Antiseptic + wound kit",
                  "Warm layers (even July)",
                  "Sunscreen SPF 50+ (high UV)",
                  "Sleeping bag -10°C (Chandratal)",
                  "Offline maps downloaded",
                  "BSNL SIM card",
                  "Cash ₹10,000+",
                  "Portable charger",
                  "Water purification tablets",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-muted font-light">
                    <span className="text-green-500 text-xs">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                {
                  num: "01",
                  title: "Going in April or May",
                  desc: "Both Rohtang Pass and Kunzum Pass are closed or extremely dangerous. Some visitors have been killed attempting early-season crossings. The Shimla route may also be blocked by avalanche debris. Wait for June at absolute minimum.",
                  severity: "Critical",
                  color: "border-red-200 bg-red-50",
                  sc: "text-red-700",
                },
                {
                  num: "02",
                  title: "Not carrying enough cash",
                  desc: "Kaza has one ATM that is frequently out of order or out of cash. UPI works in Kaza town but not at camps, homestays, or villages. Carry ₹10,000+ from Manali or Chandigarh in small denominations. You cannot withdraw cash anywhere between Kaza and Reckong Peo on the Shimla route.",
                  severity: "Critical",
                  color: "border-red-200 bg-red-50",
                  sc: "text-red-700",
                },
                {
                  num: "03",
                  title: "Skipping Chandratal because of time",
                  desc: "The most common regret of Spiti visitors. Chandratal is 75km from Kaza on a rough road — it takes planning, an early start, and a 4WD. But it is the single most extraordinary sight in Spiti. Rearrange your itinerary to fit it in, and ideally stay overnight.",
                  severity: "High",
                  color: "border-amber-200 bg-amber-50",
                  sc: "text-amber-700",
                },
                {
                  num: "04",
                  title: "Renting a bike without mountain road experience",
                  desc: "Spiti roads have loose gravel, sudden drops, no guardrails on cliff edges, and no phone signal if something goes wrong. Several accidents every season involve inexperienced riders. If you insist on a bike, carry a first aid kit, wear full gear, go slow, and never ride alone on remote stretches.",
                  severity: "High",
                  color: "border-amber-200 bg-amber-50",
                  sc: "text-amber-700",
                },
                {
                  num: "05",
                  title: "Not acclimatising in Manali first",
                  desc: "The &ldquo;Day 1 energy → Day 2 altitude crash&rdquo; is real and extremely common. People arrive in Kaza feeling fine, push hard on Day 1, then spend Day 2 bedridden with headache and nausea. One day in Manali (2,050m) before the drive to Kaza (3,800m) makes a significant difference.",
                  severity: "High",
                  color: "border-amber-200 bg-amber-50",
                  sc: "text-amber-700",
                },
                {
                  num: "06",
                  title: "Not booking Manali–Kaza transport in advance",
                  desc: "The shared Sumo/jeep service from Manali to Kaza runs once daily in season and fills up 1–2 days ahead in July and August. Go to the Manali taxi stand the day before and book your seat. If you miss the shared jeep and can&apos;t afford a private taxi (₹8,000–₹12,000), you&apos;re stuck.",
                  severity: "Medium",
                  color: "border-slate-200 bg-slate-50",
                  sc: "text-slate-600",
                },
                {
                  num: "07",
                  title: "Underpacking for cold",
                  desc: "Even in July and August, Chandratal reaches 4°C at night. Kaza can be cold after sunset. Pack: a down jacket, thermal underlayers, wool socks, and a sleeping bag rated to -10°C if camping. The UV at 4,000m is also extreme — sunscreen and UV-blocking sunglasses are not optional.",
                  severity: "Medium",
                  color: "border-slate-200 bg-slate-50",
                  sc: "text-slate-600",
                },
              ].map((m) => (
                <div key={m.num} className={`rounded-xl border p-4 ${m.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="font-serif text-2xl font-light text-muted/50 flex-shrink-0 leading-none mt-0.5">
                      {m.num}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <p className="font-medium text-sm text-stone-900">{m.title}</p>
                        <span className={`text-[0.6rem] font-semibold uppercase tracking-wide ${m.sc}`}>
                          {m.severity}
                        </span>
                      </div>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <TipCard
                icon="📵"
                title="Download offline maps before you go"
                desc="BSNL works in Kaza (patchy) and Jio works in Kaza town. No signal at Chandratal, Pin Valley, Kibber, Langza, or most of the Manali route. Download offline maps for entire Himachal Pradesh in Google Maps or Maps.me before leaving Manali."
                color="bg-amber-50 border-amber-200"
              />
              <TipCard
                icon="💳"
                title="BSNL SIM — not optional"
                desc="Airtel has almost no signal in Spiti. Jio works only in Kaza town. BSNL is the only network with reasonable coverage along the valley and at checkposts. Buy a BSNL SIM in Manali or Shimla before entering. Recharge with the highest data plan available."
                color="bg-blue-50 border-blue-200"
              />
              <TipCard
                icon="⛽"
                title="Petrol: fill at every opportunity"
                desc="Losar village (before Kunzum Pass on the Manali route) is the last petrol before Kaza. Kaza has a petrol pump. Then nothing reliable until Reckong Peo on the Shimla exit. Never enter Spiti with less than a full tank. Carry a 5L spare jerrycan if possible."
                color="bg-green-50 border-green-200"
              />
              <TipCard
                icon="🚗"
                title="4WD strongly recommended"
                desc="A Mahindra Bolero, Scorpio, Thar, or Fortuner is ideal. The Kunzum Pass approach, Chandratal track, and most village roads require real ground clearance. A sedan is possible on the Shimla route in summer but risky. Hatchbacks should not attempt this trip."
                color="bg-slate-50 border-slate-200"
              />
              <TipCard
                icon="🌌"
                title="The Milky Way from Chandratal"
                desc="At 4,300m with zero light pollution, the Milky Way is bright enough to read by at Chandratal. If you do one overnight camp in your life, make it here. Temperatures drop below freezing — bring a sleeping bag rated to -10°C and a down jacket."
                color="bg-purple-50 border-purple-200"
              />
              <TipCard
                icon="🙏"
                title="Monastery etiquette"
                desc="Remove shoes before entering. Ask before photographing monks. Do not touch murals or sculptures. Modest clothing (shoulders and knees covered). Morning prayers (usually 6–7am) are open to respectful visitors — this is a living practice, not a performance."
                color="bg-rose-50 border-rose-200"
              />
              <TipCard
                icon="🦁"
                title="Snow leopard spotting"
                desc="Kibber and Pin Valley are genuine snow leopard territory. Best chance: winter (Dec–Feb) when leopards descend to lower altitudes, but that is off-limits. In summer, ask the Snow Leopard Conservancy India team in Kaza — they track sightings and can direct you."
                color="bg-indigo-50 border-indigo-200"
              />
              <TipCard
                icon="🌿"
                title="Leave No Trace"
                desc="Spiti is extraordinarily fragile. The ecosystem is slow to recover at 4,000m. Carry all your waste out — no bins at Chandratal, Pin Valley, or most campsites. Do not pick fossils from Langza (illegal). Use designated toilet areas at campsites."
                color="bg-emerald-50 border-emerald-200"
              />
            </div>
          </section>

          {/* ── CTA BLOCK ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want Your Spiti Trip Planned?
            </h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[400px] mx-auto leading-relaxed">
              Spiti logistics are complex — permits, altitude acclimatisation, transport timing, jeep sharing. Tell us your dates and we&apos;ll build a complete circuit plan in 24 hours. Free.
            </p>
            <button onClick={() => setModalOpen(true)} className="btn-gold">
              Plan My Spiti Trip →
            </button>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ FAQ</h2>
            <div className="space-y-3">
              {[
                {
                  q: "When is the best time to visit Spiti Valley?",
                  a: "July to September is the sweet spot — roads fully open, blue skies, Chandratal accessible, wildflowers in mid-July. October has golden colours and fewer crowds but roads start closing. June is dramatic but some snow may still be on passes. April–May is closed or dangerous — do not attempt.",
                },
                {
                  q: "Is a permit required for Spiti Valley?",
                  a: "Indian nationals generally need no special permit for Spiti Valley itself. Some areas near the Tibet border (like Kibber Wildlife Sanctuary for trekking) may require documentation. Chandratal requires checkpoint registration. Foreigners need an Inner Line Permit obtainable at the SDM office in Kaza or Reckong Peo. Carry 5 passport photos and ID photocopies. Rules change annually — verify before going.",
                },
                {
                  q: "How do I get from Delhi or Chandigarh to Spiti?",
                  a: "Nearest airport: Bhuntar (Kullu–Manali Airport, 50km from Manali). From Delhi: overnight Volvo bus to Manali (₹1,200–₹1,800, 14–15 hrs). From Chandigarh: 7–8 hour bus to Manali. From Manali to Kaza: shared Sumo/jeep once daily in season (₹800–₹1,500, 7–9 hrs) or private taxi (₹8,000–₹12,000). Book the Manali–Kaza jeep 1–2 days in advance in July–August.",
                },
                {
                  q: "How bad is the altitude sickness in Spiti?",
                  a: "Kaza at 3,800m causes mild symptoms — headache, fatigue, nausea — in many first-time visitors on Day 1. This typically resolves within 24–48 hours. The risk intensifies above 4,300m (Chandratal, Komic, Langza). Acclimatise in Manali for 1–2 days first. Drink 3–4 litres of water daily. Consider Diamox (prescription, consult doctor). Serious AMS — severe headache, vomiting, confusion — means descend 500m immediately.",
                },
                {
                  q: "Can Spiti be done as a solo trip?",
                  a: "Yes — and many solo travellers rate it as one of their best India experiences. Spiti is safe (low crime, Buddhist communities, respectful locals). Book shared jeeps from Kaza market. Join WhatsApp groups to find travel partners for Chandratal day trips. Stay at Zostel Kaza or homestays with common areas. Tell someone your daily plan. Carry a BSNL SIM, offline maps, and first aid kit.",
                },
                {
                  q: "What is the mobile network situation in Spiti?",
                  a: "BSNL and Jio work in Kaza town (patchy). BSNL has the widest valley coverage. No signal at Chandratal, Pin Valley, most of the Manali route after Gramphoo, or in remote villages. Download offline maps before entering Spiti. WhatsApp calls work in Kaza with WiFi at guesthouses.",
                },
              ].map((item, i) => (
                <FAQItem key={i} {...item} />
              ))}
            </div>
          </section>

          <Comments />

          {/* Related links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Mountain Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Manali 5 Days — Gateway to Spiti", href: "/blog/manali-5-days" },
                { label: "Leh Ladakh 7 Days — Bucket List", href: "/blog/leh-ladakh-7-days" },
                { label: "Jibhi & Tirthan Valley 3 Days", href: "/blog/jibhi-tirthan-valley-3-days" },
                { label: "Kashmir 6 Days — Heaven on Earth", href: "/blog/kashmir-6-days" },
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

          <RelatedGuides currentSlug="spiti-valley-7-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
