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

const ALMORA_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "food",      emoji: "🍲", label: "Kumaoni Food" },
  { id: "budget",    emoji: "💰", label: "Budget Breakdown" },
  { id: "mistakes",  emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",      emoji: "💡", label: "Pro Tips" },
  { id: "faq",       emoji: "❓", label: "FAQ" },
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

// ── Share Button ──────────────────────────────────────────────────────────────
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Almora 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Almora in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function AlmoraClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹5k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹5k–12k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={ALMORA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Almora" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="himalayan mountains panorama kumaon hills uttarakhand"
            fallback="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85"
            alt="Himalayan peaks panorama from Kumaon hills Almora Uttarakhand"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          {/* Breadcrumb overlay */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Almora 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Kumaon Hills
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Almora in 3 Days: Kasar Devi,
                <em className="italic text-gold-light"> Binsar &amp; Himalayan Panoramas</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The hill town where Swami Vivekananda meditated, Bob Dylan visited, and 65 Himalayan peaks are visible on a clear morning. Two complete plans for Uttarakhand&apos;s most underrated destination.
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
              <span>🇮🇳 Uttarakhand</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹3,500</span>
            </div>
          </div>

          {/* Intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              I stood at Kasar Devi at 6 AM and watched the sun come up over the Himalayas. Three dozen peaks in one frame. No other tourists. A dog asleep by the temple wall. This is what Uttarakhand looks like before the crowds arrived.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Almora sits at 1,638m in the Kumaon hills, 360 km from Delhi. It&apos;s not Nainital — it&apos;s quieter, older, more authentic. The bazaar has been selling traditional copper goods since the 16th century. Kasar Devi temple sits on a Van Allen Belt magnetic anomaly that has attracted meditators for 150 years. Binsar, 30 km away, offers what many say is the finest Himalayan panorama in Uttarakhand. Three days is exactly the right amount of time.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌸" label="Best Season" value="Mar–Jun, Oct–Nov" />
            <StatCard icon="⛰️" label="Altitude" value="1,638 m" />
            <StatCard icon="🚗" label="Distance from Delhi" value="360 km" />
            <StatCard icon="⭐" label="Rating" value="4.5★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Almora rewards year-round visits but has clear windows. Avoid monsoon for road safety.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Mar–Jun", emoji: "🌸", title: "Spring & Summer", desc: "15–25°C, rhododendrons in bloom (March–April), clear mornings for Himalayan views. The most popular season. Book accommodation ahead during Indian school holidays (May).", color: "bg-emerald-50 border-emerald-200" },
                { season: "Oct–Nov", emoji: "✅", title: "Autumn Peak", desc: "Crystal clear skies (8–20°C), best visibility for Binsar peaks. Post-monsoon green is spectacular. Fewer crowds than summer. The finest photography conditions of the year.", color: "bg-amber-50 border-amber-200" },
                { season: "Jul–Sep", emoji: "🌧️", title: "Monsoon — Caution", desc: "Heavy rains and landslide risk on the narrow Kathgodam–Almora road. Roads can close for days. If you must come, check road conditions daily and carry extra days of flexibility.", color: "bg-red-50 border-red-200" },
              ].map((s) => (
                <div key={s.season} className={`rounded-xl border p-5 ${s.color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{s.emoji}</span>
                    <span className="text-xs font-semibold tracking-widest uppercase text-muted">{s.season}</span>
                  </div>
                  <p className="font-serif text-base text-ink mb-2">{s.title}</p>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── PICK YOUR PLAN ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Pick Your Plan</h2>
            <p className="text-sm text-muted font-light mb-6">Same 3-day route, two comfort levels. Almora is affordable compared to Himachal or Uttarakhand&apos;s more commercial destinations.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-5 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan →</p>
                </button>
              ))}
            </div>

            {/* Plan comparison */}
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-parchment-2">
                    <th className="text-left py-3 pr-4 text-muted font-medium uppercase tracking-wider">Category</th>
                    <th className="text-left py-3 px-4 text-amber-700 font-medium">Budget</th>
                    <th className="text-left py-3 px-4 text-teal font-medium">Comfortable</th>
                  </tr>
                </thead>
                <tbody className="text-muted font-light">
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Guesthouses (₹500–900/night)</td><td className="py-2.5 px-4">Mid-range hotels (₹1500–2500/night)</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Bus + shared jeep</td><td className="py-2.5 px-4">Private taxi for all days</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Food</td><td className="py-2.5 px-4">Local dhabas + market</td><td className="py-2.5 px-4">Hotel meals + café dining</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹5,000</td><td className="py-2.5 px-4 font-medium text-teal">₹5,000–12,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Arrive, Bright End Corner, Chitai Golu Devta Temple. Day 2: Kasar Devi, Deer Park, Simtola. Day 3: Binsar Zero Point, depart.
            </p>

            {/* Plan tabs */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {plans.map((p) => (
                <button key={p.id} onClick={() => setActiveTab(p.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                    activeTab === p.id
                      ? `${p.color} shadow-sm`
                      : "bg-white border border-parchment-2 text-muted hover:border-gold"
                  }`}>
                  {p.emoji} {p.label}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {/* ── Day 1 ── */}
              <DayCard
                day="Day 1"
                title="Arrive + Bright End Corner + Chitai Temple"
                items={[
                  activeTab === "A"
                    ? "Bus from Delhi Anand Vihar (10 hrs overnight, ₹400–600). Arrive in the morning at Almora bus stand. Grab breakfast at the bazaar — bal mithai (dark fudge coated in white sugar balls) is Almora's most famous sweet and costs ₹20–40 per piece."
                    : "Drive from Delhi or fly to Pantnagar (135 km, 3 hrs by taxi ₹2500–3500). Or overnight bus from Anand Vihar — comfortable enough. Alternatively, train to Kathgodam + private taxi (₹1500–2000, 3 hrs).",
                  activeTab === "A"
                    ? "Check in to guesthouse (₹500–900). Several good options near the Mall Road and bazaar area."
                    : "Check in to mid-range hotel (₹1500–2500). Hotel Shikhar or similar — good views from the terrace, comfortable rooms.",
                  "Bright End Corner — a 10-minute walk from the bazaar. Almora's famous sunset viewpoint with a 270-degree Himalayan panorama including Nanda Devi (7,816m). Dramatic in the late afternoon. Come for sunset: the sky turns gold over the snow peaks.",
                  "Chitai Golu Devta Temple — 4 km from Almora (shared taxi ₹20 per person). The 'wishing temple' where thousands of petitioners have tied letters and bells to the railings. The sound of all those bells in the wind is extraordinary. One of Kumaon's most distinctive cultural sites.",
                  "Almora bazaar walk — the main bazaar is one of the finest in Uttarakhand. Copper goods, handmade woolens, local spices, and Kumaoni handicrafts. The old stone-paved market streets date to the Chand kings era (16th century).",
                  "Balbhadra Shah temple — small but historic, worth a quick visit near the bazaar.",
                ]}
                cost={activeTab === "A" ? "₹2,000" : "₹3,500–5,000"}
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Kasar Devi Temple + Deer Park + Simtola"
                items={[
                  "7:00am: Head to Kasar Devi Temple (3 km from town, shared taxi ₹20 or walk 45 min uphill). This is the reason many people come to Almora. The temple sits on the Van Allen Belt magnetic anomaly — a zone of unusual geomagnetic readings.",
                  "Swami Vivekananda meditated here in the late 1800s. In the 1960s–70s, it became part of the 'Crank's Ridge' hippie trail: Timothy Leary, Bob Dylan, Cat Stevens, and Allen Ginsberg all visited. The view of the Himalayas from the temple courtyard is arguably the finest in Almora.",
                  "Spend 1–2 hours here. Sit, walk the trail around the ridge, and look at the mountains. You will see what the fuss is about.",
                  "10:30am: Deer Park (near Simtola, 2 km from Kasar Devi). Small wildlife park with barking deer, Himalayan langur, and pheasants. Pleasant forest walk.",
                  "Simtola Eco Park — forested hilltop, good views, pleasant picnic spot. Less-visited than the main sights.",
                  activeTab === "A"
                    ? "Optional (experienced trekkers only): Kalimath and Dunagiri trek (15 km, full day). Requires physical fitness and local guide (₹500–800). The ridge walk has stunning views of Trishul and Nanda Devi."
                    : "Afternoon option: hire a private taxi and driver to explore the villages around Kasar Devi and the forested ridgelines above Almora (₹800–1200 for half-day). Much of this area is accessible only by 4WD or on foot.",
                  "Evening: Dinner at Hotel Shikhar or Dolma's Café. Try kafuli (spinach-fenugreek curry) and chainsoo (black lentil dish).",
                ]}
                cost={activeTab === "A" ? "₹1,500" : "₹2,500–4,000"}
              />

              {/* ── Day 3 ── */}
              <DayCard
                day="Day 3"
                title="Binsar Zero Point + Depart"
                items={[
                  "6:30am: Depart for Binsar Wildlife Sanctuary (30 km, 1 hr).",
                  activeTab === "A"
                    ? "Hire a private jeep from Almora for the day (₹1200 return to Binsar Zero Point, shared jeep if you can find other travelers — check at your guesthouse the evening before)."
                    : "Private taxi from hotel (₹1500–2000 return). The sanctuary entrance fee is ₹150 per person + ₹150 vehicle fee.",
                  "Zero Point lookout at Binsar (2,412m) — on a clear day, 65+ Himalayan peaks are visible in one panoramic view: Nanda Devi, Kedarnath, Chaukhamba, Trishul, Panchachuli, and more. This is widely considered one of the finest Himalayan viewpoints in Uttarakhand.",
                  "Go by 7–8 AM. Clouds build by 10 AM and can obscure the view completely. The walk from the parking area to the viewpoint is 1 km — easy but steady uphill.",
                  "Bird watching en route: Binsar has 200+ species. Look for Himalayan monal (the state bird of Uttarakhand), cheer pheasant, and various woodpeckers.",
                  "Return to Almora by noon. Lunch and depart for Kathgodam (84 km, 3 hrs shared taxi ₹200 or private ₹1500) for onward train to Delhi.",
                ]}
                cost={activeTab === "A" ? "₹2,000" : "₹3,000–4,500"}
              />
            </div>
          </section>

          {/* ── KUMAONI FOOD ── */}
          <section id="food" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🍲 Kumaoni Cuisine Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Kumaoni food is one of India&apos;s least-known regional cuisines. Almora is the best place to try it properly.
            </p>
            <div className="space-y-4">
              {[
                { rank: "#1", dish: "Bal Mithai", where: "Any sweet shop in the bazaar", price: "₹200–400/100g", note: "Almora's most famous export. Dark, fudgy sweet made from roasted khoya, coated in white sugar balls. Unique to this region. Buy from the shops near the Clock Tower — the Almora bazaar versions are far superior to anything sold elsewhere.", emoji: "🍫", color: "bg-amber-50 border-amber-200" },
                { rank: "#2", dish: "Kafuli", where: "Hotel Shikhar, Dolma's Café", price: "₹80–150", note: "A thick spinach-fenugreek curry slow-cooked with local spices. Deeply flavourful, slightly bitter from the fenugreek, finished with ghee. The quintessential Kumaoni winter dish.", emoji: "🥬", color: "bg-amber-50 border-amber-200" },
                { rank: "#3", dish: "Bhaang ki Chutney", where: "Local restaurants, dhabas", price: "₹30–60", note: "A chutney made from cannabis seeds (bhang) — completely legal, used as a spice. Slightly nutty, mildly intoxicating at large quantities (you won't get close). Try it with roti or on the side of any meal.", emoji: "🌿", color: "bg-teal-50 border-teal-200" },
                { rank: "#4", dish: "Chainsoo", where: "Home-style restaurants, thali places", price: "₹60–120", note: "Black gram (urad dal) roasted and then cooked into a thick, smoky curry. Rustic and hearty. One of the most protein-rich dishes in the Kumaoni repertoire. Essential with rice.", emoji: "🫘", color: "bg-teal-50 border-teal-200" },
                { rank: "#5", dish: "Singori", where: "Bazaar sweet shops", price: "₹15–25 per piece", note: "A cone made from maalu leaf (a local wild leaf), filled with khoya mixed with dry fruits. The leaf imparts a faint herbal flavour to the sweet. You can only get this in Kumaon — it doesn't travel.", emoji: "🌿", color: "bg-rose-50 border-rose-200" },
              ].map((f) => (
                <div key={f.dish} className={`rounded-xl border p-5 ${f.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <span className="text-2xl block">{f.emoji}</span>
                      <span className="text-xs font-bold text-gold-dark mt-1 block">{f.rank}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{f.dish}</p>
                      <p className="text-[0.65rem] text-gold-dark mt-0.5">{f.where} · {f.price}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{f.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FOOD IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="himalayan village market hill station uttarakhand food"
              fallback="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
              alt="Almora bazaar Kumaoni market hills"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Almora&apos;s bazaar has been selling copper goods, woolens, and bal mithai since the Chand kings built it in the 16th century. Buy your sweets here — the Almora versions are unlike anything sold elsewhere.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹5,000", color: "bg-amber-50 border-amber-200",
                  items: [["Stays (2 nights)", "₹1,000–1,800"], ["Transport (bus + shared)", "₹600–900"], ["Food (3 days)", "₹900–1,500"], ["Binsar jeep", "₹1,200"], ["Entry fees + misc", "₹300–500"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹5,000–12,000", color: "bg-teal-50 border-teal-200",
                  items: [["Stays (2 nights)", "₹3,000–5,000"], ["Private taxi (3 days)", "₹2,000–4,000"], ["Food + café dining", "₹1,500–2,500"], ["Binsar + entry fees", "₹500–800"], ["Misc + shopping", "₹500–1,500"]] },
              ].map((b) => (
                <div key={b.plan} className={`rounded-xl border p-5 ${b.color}`}>
                  <div className="text-center mb-4">
                    <span className="text-2xl">{b.emoji}</span>
                    <p className="font-serif text-base text-ink mt-1">{b.plan}</p>
                    <p className="font-serif text-xl text-ink font-medium mt-1">{b.total}</p>
                    <p className="text-xs text-muted uppercase tracking-wider">per person</p>
                  </div>
                  <div className="space-y-2">
                    {b.items.map(([k, v]) => (
                      <div key={k} className="flex justify-between text-xs">
                        <span className="text-muted font-light">{k}</span>
                        <span className="text-ink font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted font-light mt-4 italic">
              * All prices per person. Does not include travel from Delhi to Kathgodam (train ₹200–500) or Kathgodam to Almora (₹200 shared, ₹1500 private).
            </p>
          </section>

          <AffiliateBlock destination="Almora" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Arriving at Binsar Zero Point after 10 AM", desc: "Clouds build rapidly after 9–10 AM and obscure the entire peak panorama. Go at 7–8 AM. If you get clouds, come back the next morning — the views change completely.", icon: "⏰" },
                { title: "Missing Kasar Devi in favour of more commercial sights", desc: "Tourists who skip Kasar Devi in favour of Nainital-style attractions are missing Almora's soul. The Van Allen Belt anomaly, the meditation history, and the Himalayan view at dawn are what make Almora special.", icon: "🙏" },
                { title: "Taking the tourist bus in monsoon", desc: "The Kathgodam–Almora road has hairpin bends and landslide risk in monsoon. Check road conditions before departing. If you're stuck in Kathgodam, wait — it's far safer than a road closure at altitude.", icon: "🌧️" },
                { title: "Buying bal mithai at Kathgodam or in Delhi", desc: "The bal mithai sold outside Almora is a different product — softer, sweeter, less authentic. Buy it in Almora's bazaar directly, packed fresh, and carry it home as a gift.", icon: "🍫" },
                { title: "Assuming Almora is on the main Nainital tourist circuit", desc: "Almora requires a specific detour — there are no through-buses to Nainital via Almora on the main routes. Plan it as a standalone destination or combine deliberately with Ranikhet or Munsiyari.", icon: "🗺️" },
                { title: "Not bringing warm layers even in summer", desc: "At 1,638m, temperatures drop to 10–15°C at night even in May–June. A fleece is mandatory. October–November nights are 2–6°C — bring a proper jacket.", icon: "🧥" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "🔋", title: "Kasar Devi: Why People Feel It", desc: "The area sits on the Van Allen radiation belt, creating a natural magnetic/electromagnetic anomaly. Scientists have measured unusual geomagnetic readings here. Many meditators report feeling unusually calm. Whether scientific or placebo, it's a remarkable experience.", color: "bg-amber-50 border-amber-200" },
                { icon: "🏔️", title: "Zero Point at Binsar: Weather Matters", desc: "Clear days (morning, Oct–Nov, Mar–Apr) reveal 65+ peaks. By 10 AM, clouds build. Go at 7–8 AM for the best chance. The sanctuary has no jeep park at the viewpoint — you walk 1 km.", color: "bg-amber-50 border-amber-200" },
                { icon: "🍲", title: "Kumaoni Cuisine to Try", desc: "Bal mithai (dark fudge coated in sugar balls, Almora's most famous sweet), bhaang ki chutney (cannabis seeds, legal and delicious), kafuli (spinach-fenugreek curry), and chainsoo (black lentil dish). Taste everything at Hotel Shikhar or Dolma's Café.", color: "bg-teal-50 border-teal-200" },
                { icon: "🚌", title: "Getting to Almora", desc: "Bus from Delhi Anand Vihar (10–11 hrs, ₹400–600). Nearest train: Kathgodam (84 km). From Kathgodam: shared jeep/taxi (₹200 shared, 3 hrs). Car from Kathgodam is the most comfortable option (₹1500–2000 private).", color: "bg-teal-50 border-teal-200" },
                { icon: "🌙", title: "Cold Nights Even in Summer", desc: "At 1,638m, temperatures drop to 10–15°C at night even in May–June. Pack a fleece regardless of season. October–November nights are 2–6°C.", color: "bg-rose-50 border-rose-200" },
                { icon: "💡", title: "Combine with Ranikhet or Munsiyari", desc: "Ranikhet is 50 km (1.5 hrs) — good for an overnight extension. Munsiyari is 133 km (5 hrs) — the gateway to Milam Glacier, recommended for trekkers.", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates and group — we&apos;ll send a personalised Almora itinerary with Binsar logistics within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Almora Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "What is Kasar Devi's connection to famous foreigners?", a: "Swami Vivekananda meditated here in the late 1800s. In the 1960s-70s, it became part of the 'Crank's Ridge' hippie trail — Timothy Leary, Bob Dylan, Cat Stevens, and Allen Ginsberg all visited. Several still maintain properties in the area. The cosmic vibration belief isn't just spiritual — the Van Allen Belt anomaly here has been scientifically measured." },
                { q: "Is Almora better than Nainital?", a: "Different experiences. Nainital is more commercial — boat lake, malls, heavy tourist traffic. Almora is quieter, more authentic, and has better Himalayan views (Nainital's lake is the attraction, not the peaks). For peace and genuine hill culture, Almora wins. For families and first-timers, Nainital is easier." },
                { q: "What is Binsar Wildlife Sanctuary famous for?", a: "Binsar is known for Zero Point — a 2,412m viewpoint with arguably the best Himalayan panorama in Uttarakhand (65+ peaks on clear days). It's also a birding sanctuary with 200+ species including Himalayan monal, koklass pheasant, and cheer pheasant. Wildlife includes leopard, barking deer, and rhesus macaque." },
                { q: "Best time to visit Almora?", a: "March–June (pleasant, 15–25°C, blossoming rhododendrons) and October–November (crystal clear skies, best peak views, 8–20°C). Avoid December–February (cold, snow possible) and July–September (monsoon, landslide risk on roads)." },
                { q: "Is Almora safe for solo women travelers?", a: "Yes — Almora is a small, conservative hill town with low crime. The bazaar and popular sights are safe. Carry a flashlight for evening walks (street lighting is inconsistent). The hippie community around Kasar Devi has made the area slightly more internationally accustomed." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Almora — Highlights"
            subtitle="The best of Almora in photos."
            spots={[
              { name: "Almora Landscape", query: "almora india landscape scenic beautiful travel", desc: "The stunning landscapes of Almora." },
              { name: "Almora Temple", query: "almora temple architecture heritage india", desc: "Historic temples and architecture in Almora." },
              { name: "Almora Street Scene", query: "almora street market local culture india", desc: "Local life and culture in Almora." },
              { name: "Almora Nature", query: "almora nature hills forest river india", desc: "Natural beauty around Almora." },
              { name: "Almora Sunset", query: "almora sunset golden hour india travel", desc: "Almora at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Exploring More of Kumaon?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Ranikhet — 2 Days in Kumaon's Army Hill Town", href: "/blog/ranikhet-2-days" },
                { label: "Nainital — 3 Days Complete Guide", href: "/blog/nainital-3-days" },
                { label: "Munsiyari — Gateway to Milam Glacier", href: "/blog/munsiyari-3-days" },
                { label: "Browse All India Packages", href: "/#packages" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="almora-3-days" />
          <RelatedGuides currentSlug="almora-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
