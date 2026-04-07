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

const PACHMARHI_TOC = [
  { id: "decision",         emoji: "⚡",  label: "Which Traveller Are You?" },
  { id: "highlights",       emoji: "🌿", label: "Why Pachmarhi?" },
  { id: "itinerary",        emoji: "📅", label: "3-Day Itinerary" },
  { id: "budget",           emoji: "💰", label: "Budget Breakdown" },
  { id: "treks",            emoji: "🥾", label: "Treks & Waterfalls Guide" },
  { id: "colonial-history", emoji: "🏛️", label: "Colonial History" },
  { id: "mistakes",         emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",             emoji: "💡", label: "Pro Tips" },
  { id: "faq",              emoji: "❓", label: "FAQ" },
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
        className="h-full bg-gold transition-all duration-100"
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Pachmarhi 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Pachmarhi in 3 Days — Satpura Waterfalls, Pandava Caves & Churchill's Viewpoint&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
                <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">{"●"}</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">{"💰"}</span>
            <span className="text-xs text-muted font-light">Est. cost: </span>
            <span className="text-xs font-medium text-ink">{cost}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Tip Card ──────────────────────────────────────────────────────────────────
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

// ── FAQ Item ──────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
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
export default function PachmarhiClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={PACHMARHI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Pachmarhi" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="pachmarhi madhya pradesh satpura waterfall hill station india"
            alt="Bee Falls waterfall in Pachmarhi surrounded by Satpura forest Madhya Pradesh"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Pachmarhi 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Central India
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Pachmarhi in 3 Days: Madhya Pradesh&apos;s Only Hill Station
                <em className="italic text-gold-light"> (Complete Guide)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Bee Falls, Pandava Caves, Churchill&apos;s viewpoint, Satpura tiger safari, and the most complete British colonial cantonment atmosphere in Central India. Budget from ₹1,700/day.
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
              <span>🇮🇳 Madhya Pradesh</span>
              <span>{"·"}</span>
              <span>🗓 3 Days</span>
              <span>{"·"}</span>
              <span>💰 From ₹1,700/day</span>
            </div>
          </div>

          {/* Intro quote */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Pachmarhi at 1,067m in the Satpura Range is the only hill station in Madhya Pradesh. It was &apos;discovered&apos; for the British by Captain James Forsyth in 1857 and within a decade had become a cantonment with red-brick bungalows, a church, and a military presence. All of that is still here — along with multiple waterfalls, 5th-century caves, and a tiger reserve that allows walking safaris.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Which Traveller Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your style to jump to the right section.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { emoji: "💧", label: "Nature & Waterfall", sub: "₹1,700–₹3,000/day", desc: "Bee Falls + Apsara Vihar + Rajat Prapat + forest walks", color: "border-amber-200 hover:border-amber-400", id: "treks" },
                { emoji: "🐯", label: "Wildlife Seeker", sub: "₹3,000–₹5,000/day", desc: "Satpura safari + forest jeep + Mahadeo Hill trek", color: "border-teal-200 hover:border-teal-400", id: "itinerary" },
                { emoji: "🏛️", label: "History Explorer", sub: "₹2,000–₹4,000/day", desc: "Colonial bungalows + Churchill + Pandava Caves + Forsyth trail", color: "border-emerald-200 hover:border-emerald-400", id: "colonial-history" },
              ].map((p) => (
                <button key={p.label} onClick={() => document.getElementById(p.id)?.scrollIntoView({ behavior: "smooth" })}
                  className={`p-4 rounded-xl border-2 border-parchment-2 bg-white hover:shadow-md transition-all duration-200 text-center group ${p.color}`}>
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-amber-700 mt-0.5 font-medium">{p.sub}</p>
                  <p className="text-[0.65rem] text-muted mt-1 font-light">{p.desc}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan {"→"}</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── WHY PACHMARHI ── */}
          <section id="highlights" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"🌿"} Why Pachmarhi?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Pachmarhi is underrated in a very specific way — most people know it as &quot;a waterfall place in MP&quot; and miss the Satpura wildlife entirely, and most wildlife tourists ignore the colonial history and the cave art. All three threads run through the same small plateau and together make it the most layered hill station in Central India.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                {
                  title: "The Waterfall Side", emoji: "💧", bg: "bg-teal-50 border-teal-200", th: "text-teal-800",
                  rows: [
                    ["Bee Falls", "35m waterfall, swimming allowed, ₹50 entry"],
                    ["Rajat Prapat", "107m — highest waterfall in MP"],
                    ["Apsara Vihar", "Fairy Pool — less crowded alternative"],
                    ["Best season", "Oct–Feb for clearest water"],
                  ],
                  note: "Go to Bee Falls before 9am. After 10am it fills with families and the pool becomes crowded. The waterfall itself is equally good at any time but the pool experience changes dramatically."
                },
                {
                  title: "The Wildlife Side", emoji: "🐯", bg: "bg-emerald-50 border-emerald-200", th: "text-emerald-800",
                  rows: [
                    ["Satpura Tiger Reserve", "Walking + boat + jeep safaris"],
                    ["Safari cost", "₹2,500–₹3,500/vehicle"],
                    ["Unique animals", "Indian giant squirrel, dhole, sloth bear"],
                    ["Tiger presence", "Low density — rare sightings"],
                  ],
                  note: "Satpura is India's only tiger reserve allowing walking safaris. The giant squirrel is the highlight — a large, striking animal found almost nowhere else in Central India."
                },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/80 w-24 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">{"⚠️"} {area.note}</p>
                </div>
              ))}
            </div>

            <h3 className="font-serif text-lg font-light text-ink mb-4 mt-8">Key Attractions at a Glance</h3>
            <div className="space-y-3">
              {[
                { name: "Bee Falls", detail: "3km from town — 35m waterfall through dense forest. Swimming allowed in the pool at the base. Entry ₹50 + parking. Best before 9am. Most picturesque waterfall in Pachmarhi.", tag: "Waterfall", color: "border-teal-200 bg-teal-50" },
                { name: "Rajat Prapat (Silver Falls)", detail: "107m waterfall — highest in Madhya Pradesh. 6km trek or jeep from town. Best post-monsoon (October–November). The silver curtain effect at full flow is genuinely dramatic.", tag: "Waterfall", color: "border-teal-200 bg-teal-50" },
                { name: "Dhupgarh (1,352m)", detail: "Highest point in Madhya Pradesh — 6km from town. Famous for sunrise. Share jeep ₹50–100/person. The panoramic view of the Satpura plateau at dawn is the classic Pachmarhi experience.", tag: "Viewpoint", color: "border-amber-200 bg-amber-50" },
                { name: "Pandava Caves", detail: "5th–9th century Buddhist and Hindu rock-cut cave chambers. Five chambers carved into rock — Pandavas allegedly sheltered here during their exile (the local legend). Free entry, low-key, rarely crowded.", tag: "Heritage", color: "border-orange-200 bg-orange-50" },
                { name: "Handi Khoh Gorge", detail: "300m deep forested gorge with a viewpoint overlooking the chasm. Legendary association with the serpent king Takshaka. A 10-minute drive from town. The depth and the silence are striking.", tag: "Nature", color: "border-green-200 bg-green-50" },
                { name: "Satpura Tiger Reserve (Jeep Safari)", detail: "₹2,500–₹3,500 per vehicle, 6am–10am slot. India's only tiger reserve with walking safaris. The Indian giant squirrel, dhole (wild dog), gaur, and sloth bear are reliably sighted. Tiger presence is low density.", tag: "Wildlife", color: "border-emerald-200 bg-emerald-50" },
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
            <StatCard icon={"🗓️"} label="Best Time" value="Oct – Feb" />
            <StatCard icon={"🏔️"} label="Altitude" value="1,067m" />
            <StatCard icon={"🚌"} label="From Bhopal" value="195km · 4hrs" />
            <StatCard icon={"🌿"} label="Only Hill Station" value="in MP" />
          </div>

          {/* ── 3-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"📅"} The 3-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6">
              Pachmarhi town is your base. All distances are from the main market area unless noted.
            </p>

            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Bee Falls · Apsara Vihar · Handi Khoh · British Cantonment Walk"
                items={[
                  "Arrive by morning — most people come from Pipariya (47km, nearest railway station) or from Bhopal (195km, 4 hours). MP Tourism buses connect Pipariya to Pachmarhi. Check into your guesthouse and start by 8am.",
                  "8am: Bee Falls (3km from town, jeep tour or walk). Arrive early — the pool is your own before 9am. The 35m waterfall drops through a gorge of dense Satpura forest into a circular pool. Entry ₹50 + parking. Swimming allowed. Bring a change of clothes. Spend 1–1.5 hours.",
                  "10:30am: Apsara Vihar (Fairy Pool) — 2km walk from the main road. A smaller pool fed by a seasonal waterfall. Less famous than Bee Falls, therefore less crowded. Good for photography without tourist traffic.",
                  "Lunch in Pachmarhi town — local dhabas near the main market. Dal, rice, roti ₹80–₹150. The food in Pachmarhi is honest Madhya Pradesh cooking — no tourist variations.",
                  "2pm: Handi Khoh Gorge (2km from town) — a 300m deep chasm covered in dense forest. The viewpoint looks directly down into the green abyss. The Nagdwar (serpent temple) nearby adds a small historical layer. 30–45 minutes.",
                  "3:30pm: British Cantonment walk — Pachmarhi retains the most intact colonial cantonment feeling in Central India. The old red-brick bungalows, St. Joseph's Church (1890s), the British Cemetery, and the broad roads lined with mature trees create a specific atmosphere unlike anywhere else in MP.",
                  "Priyadarshini viewpoint (4pm onwards): named by Indira Gandhi on a visit. Sunset over the Satpura plateau from this point is the classic Pachmarhi photograph. Jeep tours include this automatically (₹800/vehicle for an afternoon viewpoint circuit covering Priyadarshini, Handi Khoh, and Forsyth Point).",
                ]}
                cost="₹600–₹1,200 excluding accommodation" />

              <DayCard
                day="Day 2"
                title="Dhupgarh Sunrise · Pandava Caves · Mahadeo Hill · Rajat Prapat"
                items={[
                  "4:30am: Leave for Dhupgarh (6km from town) — the highest point in Madhya Pradesh at 1,352m. Share jeep from town ₹50–100 per person, private jeep ₹300–400 one way. Arrive before sunrise (around 5:45am). The Satpura plateau spread below you in dawn light is Pachmarhi's most iconic experience.",
                  "Return to town by 7:30am. Breakfast at a town dhaba — poha (₹40–60), chai (₹10).",
                  "9am: Pandava Caves (2km from town, walkable). Five rock-cut cave chambers from the 5th–9th century — a mix of Buddhist and Hindu use over the centuries. Local legend says the Pandavas sheltered here during their forest exile. Free entry. Low-key, rarely crowded. Spend 45–60 minutes.",
                  "11am: Mahadeo Hill (1,363m, 4km from town by jeep). A steep climb to a hilltop Shiva temple — the hill is considered one of the most sacred spots in the Satpura range. The view from the top over the plateau is panoramic. Jeep to base ₹150–200, then 20-minute climb on foot.",
                  "1pm: Lunch. Rest in the afternoon heat (Pachmarhi at midday in winter is comfortable but at 1,067m the midday sun is strong).",
                  "3pm: Rajat Prapat (Silver Falls) — 6km by jeep or a 6km trek through forest. MP's highest waterfall at 107m. The name means 'silver falls' — at full flow in October–November the water creates a silver curtain visible from the approach. The 6km forest trek is recommended if you have the energy.",
                  "Dutchess Falls (on the return route from Rajat Prapat) — a quieter, smaller waterfall good for a 20-minute stop.",
                ]}
                cost="₹700–₹1,300 including jeeps and guides" />

              <DayCard
                day="Day 3"
                title="Satpura Tiger Reserve Safari · Tribal Craft · Churchill's Viewpoint"
                items={[
                  "5:30am: Depart for Satpura National Park jeep safari. The main gate is 25km from Pachmarhi town — book the 6am slot in advance at the Forest Department office or through your accommodation. ₹2,500–₹3,500 per vehicle (maximum 6 passengers), plus entry fees per person.",
                  "Satpura is India's only tiger reserve allowing walking safaris (book separately, 3–4 hour guided walk ₹500–700/person). The jeep safari covers the road sections; the walking safari goes into the forest interior. Both are worth doing — the walking safari gives a completely different perspective.",
                  "Wildlife likely to see: Indian giant squirrel (large, distinctive — unlike any squirrel you've seen before), dhole (Indian wild dog), gaur (Indian bison), spotted deer, sambar deer, and four-horned antelope. Sloth bear possible. Leopard and tiger are present but low density — do not plan around a sighting.",
                  "Return to Pachmarhi by 10am. Breakfast at the Forest Rest House canteen near the park entrance.",
                  "11am: Tribal craft shopping — Gond and Baiga tribal communities live in the Satpura area. The Gond dot-painting style is one of the most striking indigenous art forms in India — dark backgrounds with intricate coloured dot patterns. MP Tourism craft shops in Pachmarhi have authentic pieces at fair prices (₹200–₹2,000 depending on size and artist).",
                  "Churchill's Viewpoint (2km from town): a real spot named for Winston Churchill, who convalesced in Pachmarhi in 1897 as a young lieutenant. The viewpoint looks east over the plateau. A surviving colonial-era bungalow is nearby. The story of the 22-year-old Churchill recuperating here after falling from a tree is documented in his diaries.",
                  "Forsyth Point (3km from town): named after Captain James Forsyth who 'discovered' the Pachmarhi plateau for the British in 1857. His account 'The Highlands of Central India' (1872) is a remarkable Victorian-era natural history of the Satpura range — worth reading before your visit if you have time.",
                  "Depart Pachmarhi — drive to Pipariya (47km, 1.5 hours) for the train or to Bhopal (195km, 4 hours) by road.",
                ]}
                cost="₹2,000–₹4,000 including safari" />
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center mt-4">
              <span className="text-xs text-green-700 uppercase tracking-wide">Total 3-Day Cost (per person) {"·"} </span>
              <span className="font-serif text-base text-ink font-light">₹5,000–₹9,000 budget · ₹12,000–₹20,000 mid-range</span>
            </div>
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"💰"} Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">🏡 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-teal-300 text-center">🏨 Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-emerald-300 text-center">✨ Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (3N)", "₹1,800–₹3,600", "₹6,000–₹12,000", "₹15,000–₹30,000"],
                    ["🍽️ Dhaba Meals (3 days)", "₹720–₹1,350", "₹1,800–₹3,000", "₹3,600–₹6,000"],
                    ["🚕 Jeep tours (2 days)", "₹800–₹1,200", "₹1,500–₹2,500", "₹3,000–₹5,000"],
                    ["🐯 Satpura Safari", "₹500–₹700", "₹800–₹1,200", "₹1,500–₹2,000"],
                    ["💧 Entry fees (all)", "₹200–₹400", "₹400–₹600", "₹600–₹800"],
                    ["🎨 Tribal craft (optional)", "₹200–₹500", "₹500–₹2,000", "₹2,000–₹5,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 3 days)</td>
                    {["₹5,000–₹9,000", "₹11,000–₹21,000", "₹26,000–₹49,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Safari cost shown per person assuming full vehicle of 6. MP Tourism accommodation (₹600–₹2,500/night) is the best value in Pachmarhi — clean, well-located, and significantly better value than most private hotels at the same price point.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Pachmarhi"
            hotels={[
              { name: "MP Tourism Satpura Retreat", type: "MP Tourism Resort · Central", price: "From ₹2,000/night", rating: "4", badge: "Best value", url: "https://www.booking.com/searchresults.en-gb.html?ss=pachmarhi+mp+tourism&aid=2820480" },
              { name: "Amaltas Resort Pachmarhi", type: "MP Tourism · Forest edge", price: "From ₹3,000/night", rating: "4", badge: "Top pick", url: "https://www.booking.com/searchresults.en-gb.html?ss=amaltas+pachmarhi&aid=2820480" },
              { name: "Budget Guesthouse Pachmarhi", type: "Guesthouse · Main Market", price: "From ₹600/night", rating: "3", badge: "Budget", url: "https://www.booking.com/searchresults.en-gb.html?ss=pachmarhi+guesthouse&aid=2820480" },
            ]}
            activities={[
              { name: "Satpura National Park Jeep Safari", duration: "4 hours", price: "From ₹600/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=satpura+national+park+safari&partner_id=PSZA5UI" },
              { name: "Pachmarhi Jeep Viewpoint Tour", duration: "Half day", price: "From ₹400/person", badge: "Best value", url: "https://www.getyourguide.com/s/?q=pachmarhi+jeep+tour&partner_id=PSZA5UI" },
              { name: "Satpura Walking Safari", duration: "3–4 hours", price: "From ₹500/person", badge: "Unique in India", url: "https://www.getyourguide.com/s/?q=satpura+walking+safari&partner_id=PSZA5UI" },
              { name: "Tribal Art Village Tour", duration: "3 hours", price: "From ₹400/person", url: "https://www.getyourguide.com/s/?q=pachmarhi+tribal+art+tour&partner_id=PSZA5UI" },
            ]}
            pdfProductId="pachmarhi-3-days-pdf"
          />

          {/* ── GALLERY ── */}
          <DestinationGallery
            title="Pachmarhi — Must-See Places"
            subtitle="Click each thumbnail to explore Pachmarhi's waterfalls, caves, safari, and colonial heritage."
            spots={[
              { name: "Bee Falls", query: "bee falls pachmarhi waterfall swimming forest madhya pradesh", desc: "The most picturesque waterfall in Pachmarhi — 35m drop through Satpura forest into a natural pool. Swimming allowed. Entry ₹50. Visit before 9am for the best experience without crowds." },
              { name: "Dhupgarh Sunrise", query: "dhupgarh highest point madhya pradesh sunrise satpura plateau", desc: "The highest point in Madhya Pradesh at 1,352m — 6km from Pachmarhi town. The Satpura plateau spread below at dawn is the most iconic Pachmarhi view." },
              { name: "Satpura National Park", query: "satpura national park forest jeep safari tiger reserve madhya pradesh", desc: "India's only tiger reserve offering walking safaris. The Indian giant squirrel, dhole, gaur, and sloth bear are reliably sighted. Lower tourist density than Bandhavgarh or Kanha." },
              { name: "Pandava Caves", query: "pandava caves pachmarhi rock cut ancient cave chambers satpura", desc: "5th–9th century rock-cut cave chambers carved into Satpura sandstone. Five chambers in a semicircle — the Pandavas allegedly sheltered here during their forest exile in the Mahabharata." },
              { name: "Rajat Prapat (Silver Falls)", query: "rajat prapat silver falls 107m highest waterfall madhya pradesh pachmarhi", desc: "The highest waterfall in Madhya Pradesh at 107m — the 'silver curtain' at full flow post-monsoon is extraordinary. 6km trek from Pachmarhi town or accessible by jeep." },
            ]}
          />

          {/* ── INLINE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="pachmarhi cantonment british colonial bungalow church madhya pradesh india"
              alt="Colonial-era red brick bungalow and St Joseph Church in Pachmarhi British cantonment Madhya Pradesh"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Pachmarhi&apos;s British cantonment — the most intact colonial hill station atmosphere in Central India. St. Joseph&apos;s Church (1890s), the British Cemetery, and red-brick bungalows line the broad tree-shaded roads.
              </p>
            </div>
          </div>

          {/* ── TREKS & WATERFALLS GUIDE ── */}
          <section id="treks" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"🥾"} Treks & Waterfalls — The Complete Guide</h2>

            <div className="space-y-4">
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-teal-800 mb-3">Waterfall Circuit</h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">Bee Falls (3km from town):</strong> 35m drop into a pool. Entry ₹50. Swimming allowed. Go before 9am. The 1km forest path to the base is shaded and pleasant. Main Pachmarhi waterfall.</p>
                  <p><strong className="text-ink">Apsara Vihar (Fairy Pool) (2km walk from main road):</strong> Smaller pool fed by seasonal waterfall. Less crowded than Bee Falls — good for photography and a quieter swim. No entry fee.</p>
                  <p><strong className="text-ink">Rajat Prapat / Silver Falls (6km):</strong> MP's highest at 107m. Best post-monsoon (Oct–Nov) when water flow is at peak. The trek route is 6km through forest — take a guide (₹200–300). Jeep access also available.</p>
                  <p><strong className="text-ink">Dutchess Falls (near Rajat Prapat route):</strong> Quieter, lesser-known waterfall on the same route. Good as an add-on to the Rajat Prapat trip. No entry fee.</p>
                  <p><strong className="text-ink">Irene Pool:</strong> Small pool on the road to Bee Falls — named after an Englishwoman who drowned here in the colonial era. Good for a 10-minute stop on the way back.</p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-amber-800 mb-3">Viewpoint Jeep Tour</h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">Standard jeep tour (₹800/vehicle, 4–6 people):</strong> Covers Priyadarshini viewpoint, Handi Khoh gorge, Forsyth Point, and Sunset Point in a half-day. The most efficient way to see the plateau viewpoints.</p>
                  <p><strong className="text-ink">Dhupgarh sunrise tour (₹300–₹400/vehicle):</strong> Separate early-morning trip to Dhupgarh at 1,352m. Leave town by 4:30am. The sunrise on the Satpura plateau is the defining Pachmarhi experience.</p>
                  <p><strong className="text-ink">Mahadeo Hill (4km, includes short climb):</strong> Hilltop Shiva temple. The ascent takes 20 minutes from the jeep drop-point. The view from the top is the most panoramic on the plateau.</p>
                  <p><strong className="text-ink">Churchill's and Forsyth's Viewpoints:</strong> Named for real individuals. Churchill convalesced here in 1897. Forsyth 'discovered' the plateau in 1857. Both are short drives from town and can be combined with the standard tour.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── COLONIAL HISTORY ── */}
          <section id="colonial-history" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"🏛️"} The Colonial History of Pachmarhi</h2>

            <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 mb-4">
              <div className="space-y-4 text-xs text-muted font-light">
                <div>
                  <p className="font-medium text-sm text-ink mb-1">Captain James Forsyth — The Discovery (1857)</p>
                  <p>Captain James Forsyth of the Bengal Lancers climbed the Satpura escarpment in 1857 and found the Pachmarhi plateau — a 1,067m tableland of forest and waterfalls previously known only to local Gond and Baiga tribals. He reported it to the British administration as a suitable sanatorium site. His account, <em>The Highlands of Central India</em> (1872), is one of the finest Victorian-era natural histories of the subcontinent and remains in print.</p>
                </div>
                <div>
                  <p className="font-medium text-sm text-ink mb-1">Winston Churchill in Pachmarhi (1897)</p>
                  <p>The 22-year-old Lieutenant Winston Churchill was posted to the 4th Hussars in India and came to Pachmarhi to convalesce after an injury. He fell from a polo pony, dislocated his shoulder, and was ordered to rest. Churchill himself recounts the Pachmarhi stay in <em>My Early Life</em> (1930). Churchill&apos;s Viewpoint is named for this period — a genuine, documented connection, not just a British-India naming convention.</p>
                </div>
                <div>
                  <p className="font-medium text-sm text-ink mb-1">What Survived</p>
                  <p>The cantonment atmosphere is remarkably intact — St. Joseph&apos;s Church (consecrated 1891), the British Cemetery with graves from the 1860s onwards, officers&apos; bungalows (now used as government residences and MP Tourism accommodation), and the broad roads that give Pachmarhi its distinctive unhurried character. Compared to the rapid commercial development of most Indian hill stations, Pachmarhi was protected by its relative inaccessibility and by being primarily a military cantonment rather than a tourist resort.</p>
                </div>
              </div>
            </div>

            <div className="bg-parchment/60 border border-parchment-2 rounded-xl p-5">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Tribal culture note:</strong> The Gond and Baiga tribal communities have lived in the Satpura range for centuries before Forsyth&apos;s &apos;discovery&apos;. The Gond dot-painting tradition — intricate, dark-background artworks made from natural pigments — is one of India&apos;s most distinctive indigenous art forms. MP Tourism craft shops in Pachmarhi stock authentic pieces. The context of the colonial history is richer when held alongside the tribal history of the same landscape.
              </p>
            </div>
          </section>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Going June–September without expecting leeches", desc: "Pachmarhi is accessible in monsoon but the Satpura forest floor becomes leech territory — every walk through the jungle involves checking your legs every few minutes. The plateau gets very wet and trails become slippery. October onwards is the correct starting point.", icon: "🌧️" },
                { title: "Expecting significant altitude cooling", desc: "At 1,067m, Pachmarhi is 5–8°C cooler than Bhopal or Jabalpur but not dramatically cooler than a hill station at 2,000m. It is pleasant in winter (15–25°C days) but not alpine. Do not come in April–May expecting relief from summer heat — it is still warm here.", icon: "🌡️" },
                { title: "Skipping the Satpura jungle safari", desc: "Most visitors focus entirely on waterfalls and viewpoints and never enter the forest. This is a significant miss. Satpura is one of the most biodiverse forests in Central India — the walking safari alone is unique in India's tiger reserve network. Book in advance at the Forest Department office.", icon: "🐯" },
                { title: "Not booking MP Tourism accommodation", desc: "Private hotels in Pachmarhi are generally overpriced for the quality. MP Tourism bungalows and resorts (Satpura Retreat, Amaltas) are well-maintained, well-located, and significantly better value. Book MP Tourism properties directly through mptourism.com.", icon: "🏨" },
                { title: "Rushing the waterfalls — treating Pachmarhi as a half-day stop", desc: "People drive from Bhopal, do Bee Falls and Dhupgarh viewpoint, and leave the same day. This sees maybe 20% of what Pachmarhi offers. Three full days is the minimum — Satpura safari, Pandava Caves, Rajat Prapat, and the colonial circuit are all genuinely worth your time.", icon: "⏰" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"💡"} Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "🌅", title: "Dhupgarh Before Every Other Visitor", desc: "Leave your guesthouse by 4:30am for Dhupgarh. You will arrive before any tour jeeps — just the plateau, the birds, and the horizon turning from black to orange. The view with nobody else there is a different experience from the 7am crowd.", color: "bg-amber-50 border-amber-200" },
                { icon: "🚶", title: "Book the Satpura Walking Safari", desc: "The walking safari in Satpura (₹500–700/person, 3–4 hours) is the only one of its kind in India's tiger reserves. You walk with an armed Forest Department guide through the core zone — a completely different perspective from the jeep. Book 24 hours in advance at the FD office.", color: "bg-amber-50 border-amber-200" },
                { icon: "🎨", title: "Buy Gond Art Direct From the Source", desc: "The Gond dot-painting tradition from this region is the real thing — not mass-produced crafts. MP Tourism craft shops have certified pieces from local Gond artists at prices from ₹200 to ₹3,000+. Ask for the artist's name and village on each piece.", color: "bg-teal-50 border-teal-200" },
                { icon: "🏡", title: "Stay in an MP Tourism Bungalow", desc: "Several MP Tourism bungalows are former British officers' residences — thick walls, high ceilings, wide verandas. The Amaltas Resort is the best example. Cold in winter mornings (bring a warm layer) but the atmosphere is exactly what Pachmarhi was built for.", color: "bg-teal-50 border-teal-200" },
                { icon: "📚", title: "Read Forsyth Before You Go", desc: "Captain James Forsyth's 'The Highlands of Central India' (1872) is available free on Project Gutenberg. Read the first three chapters before visiting Pachmarhi — his descriptions of the Satpura plateau are remarkably good and the knowledge makes every viewpoint and trail more meaningful.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "🌙", title: "Night at the Forest Rest House (Satpura)", desc: "MP Tourism operates a Forest Rest House inside Satpura National Park boundary — limited rooms, book months in advance for peak season (Oct–Feb). Staying inside the park perimeter means dawn and dusk animal movements outside your window. The experience is significantly different from a town hotel.", color: "bg-emerald-50 border-emerald-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group size, and budget — we&apos;ll send a personalised Pachmarhi itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Pachmarhi Trip {"→"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"→"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How do I reach Pachmarhi?", a: "Pachmarhi is 195km from Bhopal (4 hours by car) and 47km from Pipariya (nearest railway station on the Mumbai-Howrah main line, 1.5 hours by road). MP Tourism buses run Pipariya–Pachmarhi several times daily. From Nagpur it is 260km (5 hours). Flying to Bhopal is the fastest long-distance option." },
                { q: "Is Satpura better than Bandhavgarh or Kanha for a safari?", a: "Satpura is different, not better or worse. Tiger density is lower — do not come expecting certain sightings. What Satpura offers that others do not: walking safaris (unique in Indian tiger reserves), boat safaris on the Denwa River, lower tourist density, and remarkable biodiversity including the Indian giant squirrel, dhole, and sloth bear." },
                { q: "What is the best time to visit Pachmarhi?", a: "October to February is ideal — temperatures 15–25°C, clearest skies, most active wildlife. March–April is warmer but manageable. May–June reaches 35–38°C. July–August is accessible but leeches on jungle trails. October–November has the best waterfall flow post-monsoon." },
                { q: "Should I stay in MP Tourism accommodation?", a: "Yes — strongly recommended. MP Tourism bungalows and resorts in Pachmarhi (Satpura Retreat, Amaltas, Champak Bungalow) are well-maintained, reasonably priced (₹600–₹2,500/night), and often in former British-era buildings with character. Private hotels at similar prices are generally inferior. Book directly through mptourism.com." },
                { q: "How many days are enough for Pachmarhi?", a: "3 days minimum to do Pachmarhi properly — one day for waterfalls and colonial sites, one for caves and Dhupgarh and the viewpoint circuit, one for Satpura safari. Two days forces you to rush the safari. Four days allows Rajat Prapat trek, quieter forest walks, and deeper exploration of the cantonment history." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Central India Circuit?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Bandhavgarh Tiger Reserve — Safari Guide", href: "/blog/bandhavgarh-safari-guide" },
                { label: "Khajuraho — 2 Day Heritage Guide", href: "/blog/khajuraho-2-days" },
                { label: "Bhopal — 2 Day City Guide", href: "/blog/bhopal-2-days" },
                { label: "Kanha National Park — Safari Guide", href: "/blog/kanha-safari-guide" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{"View →"}</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="pachmarhi-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
