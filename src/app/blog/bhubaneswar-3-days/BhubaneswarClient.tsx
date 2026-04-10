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
import { usePageUrl } from "@/lib/hooks";

const BHUBANESWAR_TOC = [
  { id: "decision",      emoji: "⚡",  label: "Which Traveller Are You?" },
  { id: "highlights",    emoji: "🏛️",  label: "Why Bhubaneswar?" },
  { id: "itinerary",     emoji: "📅",  label: "3-Day Itinerary" },
  { id: "budget",        emoji: "💰",  label: "Budget Breakdown" },
  { id: "temple-guide",  emoji: "🛕",  label: "Temple Guide" },
  { id: "food",          emoji: "🍛",  label: "Odia Food Guide" },
  { id: "mistakes",      emoji: "❌",  label: "Mistakes to Avoid" },
  { id: "tips",          emoji: "💡",  label: "Pro Tips" },
  { id: "faq",           emoji: "❓",  label: "FAQ" },
];

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
      <div className="h-full bg-gold transition-all duration-100" style={{ width: `${progress}%` }} />
    </div>
  );
}

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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Bhubaneswar 3-Day Guide&body=Check this out: ${pageUrl}` },
        { label: "Twitter", color: "bg-[#1a6fb5] text-white", href: `https://x.com/intent/tweet?text=Bhubaneswar in 3 Days — Temples, Ashoka Edicts & Hidden Odisha&url=${pageUrl}` },
      ].map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
          className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}>
          {s.label}
        </a>
      ))}
      <button onClick={copy}
        className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">
        {copied ? "✓ Copied" : "Copy Link"}
      </button>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <p className="font-serif text-lg font-light text-ink">{value}</p>
      <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{label}</p>
    </div>
  );
}

function DayCard({ day, title, items, cost }: { day: string; title: string; items: string[]; cost: string }) {
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
                <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">●</span>
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

function TipCard({ icon, title, desc, color }: { icon: string; title: string; desc: string; color: string }) {
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

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 border-t border-parchment-2">
          <p className="text-sm text-muted font-light leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function BhubaneswarClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BHUBANESWAR_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Bhubaneswar" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="lingaraj temple bhubaneswar odisha india ancient architecture"
            alt="Lingaraj Temple ancient Kalinga architecture Bhubaneswar Odisha"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Bhubaneswar 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  East India
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Bhubaneswar in 3 Days: Temples, Ashoka&apos;s Battlefield & Hidden Shrines
                <em className="italic text-gold-light"> (Complete Guide)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                India&apos;s most underrated temple city — 500+ shrines in 5km², Ashoka&apos;s 2,300-year-old rock inscriptions, and a 9th-century Yogini temple that almost nobody visits. Budget from ₹5,000.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇮🇳 Odisha, India</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹5,000</span>
            </div>
          </div>

          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Most tourists pass through Bhubaneswar on their way to Puri. That is a profound mistake. The city has 500+ temples in 5 square kilometres — the highest density of ancient shrines anywhere in India. And 30km away sits one of the rarest sacred structures on earth: a 9th-century circular Yogini temple that almost nobody knows about.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Traveller Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your focus to get the most from 3 days.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { emoji: "🛕", label: "Temple Circuit", sub: "₹1,500–₹2,500/day", desc: "Lingaraj, Mukteswara, Rajarani, Parasuramesvara — the full Kalinga architecture sequence", color: "border-amber-200 hover:border-amber-400", id: "temple-guide" },
                { emoji: "🏛️", label: "History & Archaeology", sub: "₹2,000–₹3,500/day", desc: "Dhauli Ashoka edicts, Udayagiri Jain caves, Odisha State Museum, Hirapur Yogini temple", color: "border-teal-200 hover:border-teal-400", id: "highlights" },
                { emoji: "🌿", label: "Full Odisha Experience", sub: "₹3,000–₹5,000/day", desc: "All of the above + Puri + Konark — the complete Golden Triangle circuit", color: "border-emerald-200 hover:border-emerald-400", id: "itinerary" },
              ].map((p) => (
                <button key={p.label} onClick={() => document.getElementById(p.id)?.scrollIntoView({ behavior: "smooth" })}
                  className={`p-4 rounded-xl border-2 border-parchment-2 bg-white hover:shadow-md transition-all duration-200 text-center group ${p.color}`}>
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-amber-700 mt-0.5 font-medium">{p.sub}</p>
                  <p className="text-[0.65rem] text-muted mt-1 font-light">{p.desc}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan →</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── WHY BHUBANESWAR ── */}
          <section id="highlights" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🏛️ Why Bhubaneswar?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Bhubaneswar was once the capital of the Kalinga Empire — the same Kalinga whose destruction transformed Emperor Ashoka from a conqueror into a Buddhist convert and peace propagandist. Over 1,400 years (7th–13th century AD), Kalinga&apos;s rulers built more than 7,000 temples here. About 500 survive. The architectural tradition — called Kalinga or Odishan style — is distinct from every other regional temple style in India.
            </p>
            <div className="space-y-3">
              {[
                { name: "Lingaraj Temple (11th century)", detail: "The crowning achievement of Kalinga architecture — 55m Rekha Deula tower, immense scale, continuous ritual activity. Non-Hindus cannot enter the inner sanctum but an ASI viewing platform on the north wall provides an external view of the temple complex. Free for Hindus; platform free for all.", tag: "Temple", color: "border-amber-200 bg-amber-50" },
                { name: "Mukteswara Temple (10th century)", detail: "The most ornate small temple in all of Bhubaneswar — sometimes called the Gem of Kalinga Architecture. 35m tall, intricate carvings on every surface, a beautifully carved torana (gateway arch) considered a masterpiece. Entry free for all. Allow 45 minutes.", tag: "Gem", color: "border-orange-200 bg-orange-50" },
                { name: "Dhauli Shanti Stupa & Rock Edicts", detail: "8km south of city. Where the Kalinga War was fought in 261 BCE — Ashoka witnessed 100,000 deaths on this plain and converted to Buddhism. The 2,300-year-old Brahmi script rock edicts are here. The white Japanese-built Shanti Stupa overlooks the battlefield. One of the most historically charged sites in India.", tag: "History", color: "border-blue-200 bg-blue-50" },
                { name: "Hirapur Chausathi Yogini Temple (9th century)", detail: "30km from city. A roofless circular shrine containing 64 yogini figures in black chlorite stone. One of only four such circular Yogini temples in India. Free entry. This is barely mentioned in mainstream guides — possibly the most extraordinary ancient site in Odisha.", tag: "Hidden Gem", color: "border-purple-200 bg-purple-50" },
                { name: "Udayagiri & Khandagiri Caves", detail: "7km from city. 1st-century BCE Jain caves carved into twin hills. Rani Gumpha (Queen&apos;s Cave) has India&apos;s earliest known narrative relief sculptures. Entry ₹25 (ASI). Climb both hills — Khandagiri summit has a Jain temple with city views.", tag: "Ancient", color: "border-teal-200 bg-teal-50" },
                { name: "Rajarani Temple (11th century)", detail: "Surrounded by extraordinary erotic and narrative sculptures. No idol inside — treated as an ASI monument open to all. Entry ₹25. Set in a garden — unusual among the dense urban temple cluster.", tag: "Sculpture", color: "border-emerald-200 bg-emerald-50" },
              ].map((attr) => (
                <div key={attr.name} className={`rounded-xl border p-4 ${attr.color}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-sm text-ink">{attr.name}</p>
                        <span className="text-[0.6rem] bg-white/70 border border-white/60 px-2 py-0.5 rounded-full text-muted uppercase tracking-wide">{attr.tag}</span>
                      </div>
                      <p className="text-xs text-muted font-light leading-relaxed">{attr.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="📅" label="Best Time" value="Oct – Mar" />
            <StatCard icon="🛕" label="Temples in 5km²" value="500+" />
            <StatCard icon="🚂" label="From Kolkata" value="450km · 5hr train" />
            <StatCard icon="💃" label="Odissi Dance" value="2,000-yr tradition" />
          </div>

          {/* ── 3-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 The 3-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6">
              Bhubaneswar is well-connected by rail. The old temple district is 3–4km from the railway station.
            </p>

            <DayCard
              day="Day 1"
              title="Lingaraj & the Temple Cluster · Bindu Sagar Tank"
              items={[
                "Morning: Start at Bindu Sagar — the sacred tank at the centre of the old temple city. Circumambulate the tank (1km walk) to understand the density of the surrounding temple complex. Over 100 small shrines ring this tank. It is one of the oldest continuously active sacred bodies of water in India.",
                "Parasuramesvara Temple (7th century, free): One of the oldest surviving temples in Bhubaneswar — built in the early Kalinga style before the full decorative vocabulary developed. The exterior carvings are restrained and powerful. A 10-minute walk from Bindu Sagar.",
                "Mukteswara Temple (10th century, free): The architectural highlight of Bhubaneswar for most scholars. The torana (entrance arch) spanning the gateway is one of the finest stone carvings in South Asia. Spend 45 minutes here — walk around the entire circumference twice.",
                "Rajarani Temple (11th century, ₹25 ASI): Set in a garden 500m away. The sculptures here are more expressive and sensual than the austere early temples — a full range of human figures, celestial maidens (surasundaris), and narrative panels. No idol inside (designated ASI monument) so all visitors can enter.",
                "Lingaraj Temple (11th century): The main event — 55m tower dominating the old city skyline. Hindu pilgrims enter freely. Non-Hindus use the ASI viewing platform built on the north outer wall — a raised terrace giving a clear view of the main shikhara and outer gopuram. The scale is extraordinary from this vantage.",
                "Afternoon: Return to your hotel for a rest. Bhubaneswar in October–March is manageable (25–32°C) but temple walking in the midday sun is tiring.",
                "Evening: Kedar Gouri Temple area (near Lingaraj) — smaller temples, evening aarti, local pilgrims. The atmosphere around the temple complex at dusk is the most authentic Bhubaneswar experience. Dinner at a local restaurant — Odia thali ₹80–150.",
              ]}
              cost="₹500–₹800 (auto + entry fees + meals)" />

            <DayCard
              day="Day 2"
              title="Dhauli · Nandankanan Zoo · Odisha State Museum"
              items={[
                "8am: Dhauli Shanti Stupa (8km south, auto ₹80–100 one way): The white peace stupa built by the Japan Buddha Sangha overlooks the Daya River valley — where the Kalinga War was fought in 261 BCE. Ashoka watched 100,000 people die here and renounced warfare. The stupa is large, white, and commands a view of the plain below.",
                "Dhauli Rock Edicts: At the base of the hill, the 2,300-year-old Brahmi script edicts of Ashoka are carved directly into a large rock face — protected by an iron fence. The inscriptions are in a script that went undeciphered for 1,000 years until James Prinsep decoded it in 1837. This is one of the oldest written records in India. Free, open access.",
                "Elephant carving: At the base of the Dhauli rock, a large elephant is carved emerging from the stone — one of the oldest free-standing sculptures in India, predating even the Ashoka edicts.",
                "10:30am: Drive to Nandankanan Zoological Park (12km north of city, ₹60 entry). One of the better-maintained zoos in India — famous for its white tigers (one of the largest captive white tiger populations in the world) and mugger crocodiles. Allow 2–3 hours. The zoo sits within the Chandaka forest and feels spacious.",
                "Afternoon: Odisha State Museum (Bhubaneswar city centre, ₹10 entry, Tuesday–Sunday): Excellent collection of tribal artefacts from the 62 tribal communities of Odisha, palm-leaf manuscripts (some of the finest in India), Odishan sculpture, and natural history. Often overlooked — genuinely interesting.",
                "Evening: Rabindra Mandap — check the performance schedule. This is Bhubaneswar&apos;s main cultural venue. Odissi classical dance performances are held here periodically (₹50–100 entry). Odissi is one of India&apos;s 8 classical dance forms — characterised by distinctive torso movements (tribhangi) unlike any other Indian dance tradition.",
              ]}
              cost="₹500–₹900 (transport + entry + dinner)" />

            <DayCard
              day="Day 3"
              title="Hirapur Yogini Temple · Udayagiri & Khandagiri Caves"
              items={[
                "Morning: Hirapur (30km from city — hire auto or taxi for the day, ₹600–₹800 round trip): The Chausathi Yogini temple here is a 9th-century circular roofless shrine with 64 yogini figures in black chlorite stone placed in niches around the inner wall. One of only four such circular Yogini temples in India. The yoginis are tantric goddess forms — each different, each with her own attributes and posture. The atmosphere of standing in the centre of this circular shrine, surrounded by 64 goddess figures looking inward, is unlike anything else in India. Free entry. Very few tourists. Allow 45 minutes.",
                "Note on Hirapur: This site is barely mentioned in mainstream Bhubaneswar tourist guides. It requires hiring a dedicated vehicle. Do not skip it — it is possibly the most extraordinary sacred site in all of Odisha.",
                "11am: Udayagiri and Khandagiri Caves (7km from city, ₹25 ASI): Two low hills riddled with 1st-century BCE Jain caves. King Kharavela of Kalinga had these caves carved as residences for Jain monks. Rani Gumpha (Cave 1, Udayagiri) has India&apos;s earliest known narrative relief sculptures — royal processions, hunting scenes, and festive celebrations carved in continuous bands around the cave walls. Allow 1.5 hours.",
                "Khandagiri Hill: Climb to the summit (10 minutes) — there is a 19th-century Jain temple at the top. The view from here takes in modern Bhubaneswar stretching north, an interesting contrast against the ancient caves below.",
                "Afternoon: If departing today, return to city centre for final shopping — Ekamra Haat crafts market has Odisha&apos;s famous pattachitra paintings, dokra metalwork, ikat fabric (Sambalpuri), and silver filigree work. Prices are fixed (government emporium).",
                "Depart: Bhubaneswar has good rail and air connections — Chennai (1,400km by rail, overnight), Kolkata (450km, 5 hours), and Delhi (1,700km, 20 hours by Rajdhani).",
              ]}
              cost="₹700–₹1,200 (taxi + entry + crafts shopping)" />

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center mt-4">
              <span className="text-xs text-green-700 uppercase tracking-wide">Total 3-Day Cost (per person) · </span>
              <span className="font-serif text-base text-ink font-light">₹5,000–₹8,000 budget · ₹10,000–₹18,000 mid-range</span>
            </div>
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">🌾 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-teal-300 text-center">🏔 Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-emerald-300 text-center">⭐ Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (3N)", "₹2,100–₹4,200 (₹700–1,400/night)", "₹5,400–₹10,500", "₹12,000–₹21,000"],
                    ["🍽 Food (3 days)", "₹480–₹750 (₹160–250/day)", "₹1,200–₹2,000", "₹2,500–₹4,000"],
                    ["🛺 Transport (auto/taxi)", "₹600–₹900", "₹1,500–₹2,500", "₹3,000–₹5,000"],
                    ["🎯 Entry fees (all sites)", "₹185", "₹185", "₹185"],
                    ["🎭 Odissi performance (optional)", "₹100", "₹100", "₹200–₹500"],
                    ["🛍 Handicrafts (optional)", "₹500–₹1,000", "₹1,000–₹3,000", "₹3,000–₹10,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 3 days)</td>
                    {["₹3,965–₹7,135", "₹9,385–₹18,285", "₹20,685–₹40,685"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Entry to most temples free (Lingaraj, Mukteswara, Parasuramesvara). ASI monuments (Rajarani, Udayagiri, Khandagiri) ₹25 each. Nandankanan ₹60. Odisha State Museum ₹10. Hirapur Yogini temple free. Hiring a taxi for Day 3 (Hirapur + Udayagiri/Khandagiri) costs ₹600–800 and is recommended over auto for comfort.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Bhubaneswar"
            hotels={[
              { name: "Hotel Swosti Premium", type: "Hotel · Bhubaneswar city centre", price: "From ₹2,500/night", rating: "5", badge: "Top pick", url: "https://www.booking.com/searchresults.en-gb.html?ss=bhubaneswar+hotel&aid=2820480" },
              { name: "Mayfair Lagoon", type: "Resort · Nayapalli, Bhubaneswar", price: "From ₹5,000/night", rating: "5", badge: "Premium", url: "https://www.booking.com/searchresults.en-gb.html?ss=bhubaneswar+resort&aid=2820480" },
              { name: "Budget Hotel near Railway Station", type: "Hotel · Bhubaneswar Station area", price: "From ₹700/night", rating: "3", badge: "Budget", url: "https://www.booking.com/searchresults.en-gb.html?ss=bhubaneswar+budget+hotel&aid=2820480" },
            ]}
            activities={[
              { name: "Bhubaneswar Temple Heritage Walk", duration: "Half day", price: "From ₹600/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=bhubaneswar+temple+tour&partner_id=PSZA5UI" },
              { name: "Odisha Tribal & Crafts Day Tour", duration: "Full day", price: "From ₹1,200/person", badge: "Cultural", url: "https://www.getyourguide.com/s/?q=odisha+cultural+tour&partner_id=PSZA5UI" },
              { name: "Dhauli + Hirapur Heritage Drive", duration: "Full day", price: "From ₹900/person", badge: "History", url: "https://www.getyourguide.com/s/?q=bhubaneswar+day+trip&partner_id=PSZA5UI" },
            ]}
            pdfProductId="bhubaneswar-3-days-pdf"
          />

          {/* ── GALLERY ── */}
          <DestinationGallery
            title="Bhubaneswar — Temples, Edicts & Ancient Shrines"
            subtitle="From Kalinga temple towers to Ashoka&apos;s battlefield — Bhubaneswar&apos;s most remarkable sites."
            spots={[
              { name: "Lingaraj Temple", query: "lingaraj temple bhubaneswar tower kalinga architecture shikhara", desc: "The 11th-century crown of Kalinga architecture — a 55m Rekha Deula tower rising over the old city, surrounded by smaller shrines. One of the grandest temple complexes in India." },
              { name: "Mukteswara Temple", query: "mukteswara temple bhubaneswar ornate carvings tenth century odisha", desc: "The 10th-century Gem of Kalinga Architecture — smaller than Lingaraj but more intricately carved, with a celebrated stone torana gateway considered a masterpiece of Indian sculpture." },
              { name: "Dhauli Rock Edicts", query: "dhauli rock edicts ashoka bhubaneswar kalinga war buddhism", desc: "Where Ashoka converted to Buddhism in 261 BCE after witnessing the Kalinga War. The 2,300-year-old Brahmi script edicts are carved directly into a riverside rock." },
              { name: "Hirapur Yogini Temple", query: "hirapur yogini temple circular shrine odisha ancient tantric", desc: "A 9th-century roofless circular shrine with 64 tantric yogini goddess figures. One of only four circular Yogini temples in India — barely known outside specialist circles." },
              { name: "Udayagiri Jain Caves", query: "udayagiri caves jain bhubaneswar ancient rock cut first century", desc: "First-century BCE caves cut by King Kharavela for Jain monks, with the earliest narrative relief sculptures in India in the Rani Gumpha (Queen's Cave)." },
            ]}
          />

          {/* ── TEMPLE GUIDE ── */}
          <section id="temple-guide" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🛕 Temple Architecture Guide — Understanding Kalinga Style</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Bhubaneswar&apos;s temples span 700 years (7th–13th century AD) and show the evolution of a single regional architectural tradition. Knowing what to look for makes the temple circuit far more rewarding.
            </p>
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-amber-800 mb-3">Key Architectural Elements</h3>
                <div className="space-y-3">
                  {[
                    { term: "Rekha Deula", desc: "The tall curvilinear tower over the main sanctum — the defining element of Kalinga architecture. The profile is distinctive: it curves inward as it rises, unlike the straight-sided towers of North Indian temples. Lingaraj has the finest example at 55m." },
                    { term: "Jagamohana", desc: "The prayer hall attached to the Rekha Deula — typically pyramid-shaped with a flat roof. Worshippers gather here during pujas." },
                    { term: "Torana", desc: "A decorated gateway arch — the Mukteswara torana is considered one of the finest in India, with carvings of dwarves, celestial figures, and foliage in high relief." },
                    { term: "Surasundari", desc: "Celestial maiden figures carved on the exterior walls — present on nearly all Bhubaneswar temples from the 9th century onward. Their postures and expressions evolved over centuries." },
                    { term: "Amalaka", desc: "The stone disc at the very top of the Rekha Deula, just below the finial — its ribbed, flattened form is distinctive to Odishan temples and is one of the easiest identifying features." },
                  ].map((e) => (
                    <div key={e.term} className="flex gap-3 text-xs border-t border-amber-100 pt-3 first:border-0 first:pt-0">
                      <span className="font-medium text-ink w-28 flex-shrink-0">{e.term}</span>
                      <p className="text-muted font-light leading-relaxed">{e.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-teal-800 mb-3">Access Rules by Temple</h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  {[
                    ["Lingaraj Temple", "Hindus only inside. Non-Hindus: ASI viewing platform on north outer wall. Free.", "amber"],
                    ["Mukteswara Temple", "Open to all visitors. Free entry. No restriction.", "green"],
                    ["Rajarani Temple", "Open to all (ASI monument, no idol). ₹25 entry.", "green"],
                    ["Parasuramesvara Temple", "Open to all. Free entry.", "green"],
                    ["Hirapur Yogini Temple", "Open to all. Free entry.", "green"],
                    ["Udayagiri/Khandagiri", "Open to all (Jain/Buddhist). ₹25 ASI entry.", "green"],
                  ].map(([temple, rule]) => (
                    <div key={temple} className="flex gap-2 border-t border-teal-100 pt-2 first:border-0 first:pt-0">
                      <span className="font-medium text-ink w-48 flex-shrink-0 text-xs">{temple}</span>
                      <span className="text-muted font-light text-xs leading-relaxed">{rule}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── FOOD GUIDE ── */}
          <section id="food" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍛 Odia Food Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Odia cuisine is one of India&apos;s most distinct regional traditions — it influenced the Mughal court kitchen via the Jagannath temple&apos;s Mahaprasad. The flavours are mild, aromatic, and rely on a specific combination of spices rarely used elsewhere.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="space-y-3">
                {[
                  { name: "Dalma", price: "₹60–90", desc: "Lentils cooked with mixed vegetables and tempered with dry chillies, garlic, and a specific Odishan panch phoran spice blend. The national dish of Odisha — served at the Jagannath Puri temple as Mahaprasad. Simpler and more nutritious than it sounds." },
                  { name: "Pakhala", price: "₹40–60", desc: "Fermented rice soaked overnight in water, served with fried vegetables and pickles — a working-class summer staple, cooling and probiotic. Rarely found in restaurants (too simple) but available in dhabas. Ask for it." },
                  { name: "Chhena Poda", price: "₹30–50 per piece", desc: "Literally &quot;burnt cheese&quot; — fresh paneer baked in a sealed pot with sugar and cardamom until it develops a caramelized crust. The dessert is Odia-specific and has GI protection. Found at any decent sweet shop." },
                  { name: "Machha Besara", price: "₹80–120", desc: "Fish cooked in a mustard-based sauce with raw mustard paste, turmeric, and green chillies — characteristic of the coastal Odia approach to fish. Robust, aromatic, nothing like Bengali fish curry." },
                  { name: "Rasabali", price: "₹25–40 per piece", desc: "Deep-fried chhena (cottage cheese) patties soaked in sweetened, cardamom-spiced milk. A temple sweet from the Kendupatna area. Found at sweet shops near temple areas." },
                ].map((d) => (
                  <div key={d.name} className="flex gap-3 text-xs border-t border-amber-100 pt-3 first:border-0 first:pt-0">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-ink">{d.name}</span>
                        <span className="text-amber-700 font-medium">{d.price}</span>
                      </div>
                      <p className="text-muted font-light leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Only spending 1 day and rushing to Puri", desc: "The standard tourist move is to spend a few hours in Bhubaneswar en route to Puri. This misses everything that makes the city extraordinary. The Hirapur Yogini temple alone is worth a full day visit. Give Bhubaneswar at least 3 days.", icon: "⏱️" },
                { title: "Missing Hirapur Yogini temple", desc: "30km from the city, requiring a hired vehicle. Almost absent from mainstream guidebooks. This 9th-century circular shrine with 64 yogini figures is possibly the most atmospheric ancient site in Odisha. Not visiting is the single biggest mistake Bhubaneswar visitors make.", icon: "🌀" },
                { title: "Expecting Lingaraj interior access", desc: "Non-Hindus cannot enter the Lingaraj inner sanctum — this is a longstanding rule. The ASI viewing platform on the north wall gives an excellent external view. Arriving expecting to enter is frustrating and avoidable with 2 minutes of research.", icon: "🛕" },
                { title: "Skipping the Dhauli site", desc: "Many tourists skip Dhauli because it sounds like just a modern Buddhist monument. The modern stupa is indeed recent — but the 2,300-year-old Ashoka rock edicts at the base of the hill are the real reason to go. The physical connection between Ashoka&apos;s battlefield conversion and the place where it happened is moving in a way that photographs cannot convey.", icon: "🏛️" },
                { title: "Not pairing with Puri and Konark", desc: "Bhubaneswar, Puri (60km), and Konark Sun Temple (65km) form the Odishan Golden Triangle. Each is extraordinary on its own but together they form one of the finest heritage circuits in India. Plan 5–6 days minimum for the full triangle.", icon: "📍" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "🌅", title: "Temples at 6–7am Are a Different Experience", desc: "The temple cluster around Lingaraj is at its most atmospheric in the early morning — devotees arriving for dawn puja, incense and temple bells, relatively uncrowded. Plan Day 1 to start at 6am at Bindu Sagar tank.", color: "bg-amber-50 border-amber-200" },
                { icon: "🎭", title: "Check Rabindra Mandap Programme in Advance", desc: "Odissi classical dance performances at Rabindra Mandap are scheduled irregularly — check the programme online before your visit. Performances typically run October–March. Entry ₹50–100. Odissi is worth seeing in a proper performance space, not just street-level glimpses.", color: "bg-amber-50 border-amber-200" },
                { icon: "🛍️", title: "Ekamra Haat for Authentic Handicrafts", desc: "Odisha produces extraordinary handicrafts — pattachitra paintings (narrative scroll art), dokra metalwork (ancient lost-wax casting), Sambalpuri ikat fabric, and Cuttack silver filigree. Ekamra Haat is a government crafts market with fixed prices and genuine artisans. Better value and more authentic than airport shops.", color: "bg-teal-50 border-teal-200" },
                { icon: "🚂", title: "Bhubaneswar Has Excellent Rail Connections", desc: "Bhubaneswar Railway Station is on the main Chennai–Kolkata trunk line. The Rajdhani Express to Delhi takes ~20 hours. Overnight trains to Chennai (18 hours) and Kolkata (5 hours) are comfortable and cheap. Better value than flying for medium distances.", color: "bg-teal-50 border-teal-200" },
                { icon: "📷", title: "Best Photography: Mukteswara Torana at 8am", desc: "The carved stone torana (gateway arch) of Mukteswara Temple catches the low morning light beautifully between 8–9am — the carvings become three-dimensional when lit from the side. This is the best single photography opportunity in the entire temple circuit.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "🗺️", title: "Hire a Local Guide for the Temple Cluster", desc: "A local ASI-certified guide (₹400–600 for 3 hours) makes the temple cluster dramatically more rewarding — identifying iconography, explaining the difference between Nagara and Kalinga styles, pointing out specific carvings. Context transforms the experience.", color: "bg-emerald-50 border-emerald-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want This Planned for You?</h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates and whether you want to add Puri and Konark — we&apos;ll send a personalised Odisha itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Bhubaneswar Trip →</button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "Can non-Hindus enter Lingaraj Temple?", a: "Non-Hindus cannot enter the inner sanctum of Lingaraj Temple. The Archaeological Survey of India has built a viewing platform on the north outer wall — from here, non-Hindu visitors can see the main 55m tower and observe the outer complex. The Mukteswara Temple (200m away, equally beautiful) is open to all visitors." },
                { q: "What is the Hirapur Yogini temple?", a: "A 9th-century circular roofless shrine 30km from Bhubaneswar containing 64 yogini (tantric goddess) figures in black chlorite stone. One of only four such circular Yogini temples in India. Free entry. Requires a hired vehicle. Almost absent from mainstream tourist guides — it is the most extraordinary ancient site in Odisha and should not be missed." },
                { q: "How many days do you need for Bhubaneswar?", a: "3 days covers the main sites — Lingaraj, Mukteswara, Rajarani, Dhauli, Nandankanan Zoo, Hirapur, and Udayagiri/Khandagiri. Most visitors spend only 1 day and miss the best sites entirely. 5 days allows you to add Puri (60km) and Konark Sun Temple (65km) — the Odishan Golden Triangle." },
                { q: "What is the best time to visit Bhubaneswar?", a: "October to March is best — temperatures 18–32°C, no rain. November–January is the coolest and most pleasant. April–June is very hot (35–42°C). Monsoon (July–September) brings heavy rain but the temples are beautifully lit in grey light if you can handle the humidity." },
                { q: "What is Odissi dance and where can I see it?", a: "Odissi is one of India's 8 classical dance forms — originating in the temple rituals of Bhubaneswar and Puri. It is characterised by the tribhangi posture (three body bends) and fluid, sculptural movements unlike any other Indian dance. Rabindra Mandap hosts performances periodically (₹50–100 entry). Check the programme before visiting." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          <Comments />

          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Complete Your Odisha Golden Triangle</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Puri — 3 Day Jagannath Temple Guide", href: "/blog/puri-3-days" },
                { label: "Konark Sun Temple — 2 Day Guide", href: "/blog/konark-2-days" },
                { label: "Kolkata — 3 Day Heritage Guide", href: "/blog/kolkata-3-days" },
                { label: "Khajuraho — 2 Day Temple Guide", href: "/blog/khajuraho-2-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="bhubaneswar-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
