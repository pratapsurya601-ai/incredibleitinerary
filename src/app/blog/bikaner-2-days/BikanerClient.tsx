"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import SmartImage from "@/components/ui/SmartImage";
import TableOfContents from "@/components/blog/TableOfContents";
import Comments from "@/components/blog/Comments";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import RelatedGuides from "@/components/blog/RelatedGuides";
import CombineWith from "@/components/blog/CombineWith";
import Breadcrumb from "@/components/blog/Breadcrumb";

const BIKANER_TOC = [
  { id: "plans",     emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary", emoji: "📅", label: "Day-by-Day Itinerary" },
  { id: "sights",    emoji: "🏰", label: "Top Sights" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Bikaner 2-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Bikaner in 2 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
export default function BikanerClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget", sub: "Under ₹4k total", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "🏨", label: "Comfortable", sub: "₹4k–10k total", color: "border-teal-300 bg-teal-50 text-teal-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BIKANER_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Bikaner" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="junagarh fort bikaner rajasthan desert"
            fallback="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=85"
            alt="Rajasthan desert cityscape with fort architecture at dusk"
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
              <span className="text-white/70">Bikaner 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Heritage & Desert
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Bikaner in 2 Days: Junagarh Fort,
                <em className="italic text-gold-light"> Camels &amp; Rajasthan&apos;s Desert Gem</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The fort that was never conquered, a temple full of sacred rats, India&apos;s only camel research farm, and the birthplace of bhujia. Bikaner rewards the travellers Jaisalmer ignores.
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
              <span>🇮🇳 Rajasthan</span>
              <span>·</span>
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From ₹3,400</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Junagarh Fort stopped me in my tracks. Not because of its size — because of what&apos;s inside. Gold-painted throne rooms, Belgian glass, mirror mosaic ceilings, and a World War II biplane in the courtyard. Nobody talks about this fort. That&apos;s their loss.
            </p>
          </blockquote>

          <p className="text-sm text-muted font-light leading-relaxed mb-6">
            Most Rajasthan itineraries end at Jaisalmer. Bikaner is 330 km further — and that distance filters out the tour groups. What you get instead: one of the finest fort interiors in India, a living rat temple that&apos;s been operating for 600 years, the world&apos;s only government camel research farm, and the original bhujia. Two days here is time well spent.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🌡️" label="Best Season" value="Oct–Feb" />
            <StatCard icon="🏰" label="Junagarh Fort" value="Never Conquered" />
            <StatCard icon="🚗" label="Distance from Jaipur" value="330 km" />
            <StatCard icon="⭐" label="Rating" value="4.5★" />
          </div>

          {/* ── BEST TIME ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗓 Best Time to Visit</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Bikaner sits in the Thar Desert. Timing your visit correctly is the difference between a comfortable trip and a genuinely unpleasant one.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { season: "Oct–Feb", emoji: "✅", title: "Best Season", desc: "October–November is warm and pleasant (15–28°C). December–January is cold (4–15°C) but manageable with layers. January brings the Camel Festival. February is ideal — warm, clear skies, and the desert is at its most photogenic.", color: "bg-emerald-50 border-emerald-200" },
                { season: "Mar–May", emoji: "🔥", title: "Getting Hot", desc: "March is still acceptable but temperatures rise fast. By April–May, Bikaner regularly hits 42–46°C. The Junagarh Fort tour becomes an exercise in survival. Sand storms are common. Avoid unless you have no choice.", color: "bg-red-50 border-red-200" },
                { season: "Jun–Sep", emoji: "🌧️", title: "Monsoon", desc: "Bikaner receives very little rainfall compared to the rest of India (desert climate). Summer heat lingers into September. The city functions but it's hot and dusty. October is when things finally improve.", color: "bg-amber-50 border-amber-200" },
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
            <p className="text-sm text-muted font-light mb-6">Same 2-day route, two comfort levels. Bikaner is one of the most affordable destinations in Rajasthan.</p>
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
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Stays</td><td className="py-2.5 px-4">Old City guesthouses (₹500–900)</td><td className="py-2.5 px-4">Heritage havelis, Bhanwar Niwas</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Transport</td><td className="py-2.5 px-4">Shared jeeps, autos, overnight train</td><td className="py-2.5 px-4">Private taxi, Ola/Uber</td></tr>
                  <tr className="border-b border-parchment-2"><td className="py-2.5 pr-4 font-medium text-ink">Food</td><td className="py-2.5 px-4">Local dhabas, kachori shops</td><td className="py-2.5 px-4">Dhabas + heritage hotel dining</td></tr>
                  <tr><td className="py-2.5 pr-4 font-medium text-ink">Total (pp)</td><td className="py-2.5 px-4 font-medium text-amber-700">Under ₹4,000</td><td className="py-2.5 px-4 font-medium text-teal">₹4,000–10,000</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── DAY-BY-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-4 leading-relaxed">
              Day 1: Junagarh Fort interiors → Lalgarh Palace exterior → Kote Gate bazaar. Day 2: Karni Mata rat temple → Camel Research Farm → camel safari → Bhandasar Jain Temple → depart.
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
                title="Junagarh Fort, Lalgarh Palace & Kote Gate Bazaar"
                items={[
                  activeTab === "A"
                    ? "Overnight train from Delhi or Jaipur → Arrive Bikaner morning → Check in Old City guesthouse (₹500–900). Bikaner Junction is central — auto-rickshaw to the Old City is ₹80."
                    : "Fly or take a comfortable train to Bikaner → Check in heritage haveli (Hotel Bhanwar Niwas, ₹2000–3000) — a restored merchant mansion in the heart of the old city.",
                  "Breakfast: Bikaner kachori at a local shop near the fort. The kachori here is smaller, crispier, and spicier than the Jaipur version — served with tangy tamarind chutney. This is the local breakfast of choice.",
                  "Junagarh Fort: Built in 1589, it is the only major Rajput fort in Rajasthan that is not on a hilltop. The Rathores of Bikaner built it on flat ground and defended it through design rather than elevation — it has never been captured in 500 years of warfare.",
                  "Fort interior highlights: Anup Mahal — the gold-painted throne room with red lacquerwork, considered one of the finest examples of Rajput interior design. Karan Mahal — built to celebrate a victory over Aurangzeb. Phool Mahal — the hall of flowers with intricate mirror mosaic work.",
                  "Don't miss the Fort Museum wing: it contains a World War II-era biplane gifted to the Bikaner royal family. Seeing a vintage aircraft inside a 16th-century fort courtyard is genuinely surreal. Allow 2.5–3 hours for the fort.",
                  "Afternoon: Walk to Lalgarh Palace (2 km from the fort) — a red sandstone Indo-Saracenic palace built for Maharaja Ganga Singh in 1902. Part of it is now a heritage hotel. The exterior and grounds are open to walk around even if not staying.",
                  "Evening: Kote Gate bazaar — the old city market for bhujia shopping (see Tips section), Rajasthani textiles, and silverware. The narrow lanes of the old city are best explored on foot at dusk.",
                ]}
                cost="₹1,800"
              />

              {/* ── Day 2 ── */}
              <DayCard
                day="Day 2"
                title="Karni Mata Temple, Camel Safari & Bhandasar Jain Temple"
                items={[
                  "Morning: Karni Mata Temple at Deshnoke (30 km from Bikaner city). Take a shared jeep from the bus stand (₹40 each way, 45 minutes). The temple is dedicated to Karni Mata — a 14th-century mystic revered as an incarnation of Durga.",
                  "The rat temple: 20,000 rats (called 'kabbas') are protected and revered at the temple. They roam freely across the marble floor. If one runs across your foot, it is considered extremely auspicious. Spotting a white rat (there are very few) brings the greatest luck. Remove shoes at the entrance.",
                  "Return to Bikaner → NRCC National Research Centre on Camel: India's only government camel research farm, open to visitors (free entry). You can see different camel breeds, learn about camel milk products (the farm sells camel milk ice cream), and watch the feeding sessions.",
                  activeTab === "A"
                    ? "Afternoon camel safari in the dunes outside the city (1 hour, ₹400–600/person). Book through your guesthouse for vetted operators. The dunes near Bikaner are less visited than Jaisalmer — you often have them to yourself."
                    : "Private camel safari at Gajner dunes (30 km, the better dunes) with sunset photography session. Book through your heritage hotel for a curated experience (₹1,500–2,500/person including transport).",
                  "Bhandasar Jain Temple: A 5-storey 15th-century Jain temple with an extraordinary origin story — it is said that ghee (clarified butter) was mixed into the mortar during construction. The walls still seep ghee on hot days. The interior features exceptional mirror work and gold leaf.",
                  activeTab === "A"
                    ? "Depart Bikaner. Overnight train back to Delhi or Jaipur. Budget: ₹1,600 total for Day 2."
                    : "Evening at leisure — sunset at Lalgarh Palace grounds or a heritage hotel dinner. Depart next morning.",
                ]}
                cost={activeTab === "A" ? "₹1,600" : "₹4,500"}
              />
            </div>
          </section>

          {/* ── TOP SIGHTS ── */}
          <section id="sights" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🏰 Top Sights in Detail</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Bikaner rewards slow exploration. Each sight here has a story that most guidebooks only skim.
            </p>
            <div className="space-y-4">
              {[
                { rank: "#1", sight: "Junagarh Fort", details: "Open 10am–4:30pm, entry ₹100 (Indians) / ₹300 (foreigners). Audio guide strongly recommended (₹150 extra). The fort complex is vast — the guided tour takes you through 37 palaces and temples spanning 400 years of architecture. The Anup Mahal's gold-painted ceiling is the single most impressive room interior you'll see in Rajasthan.", emoji: "🏰", color: "bg-amber-50 border-amber-200" },
                { rank: "#2", sight: "Karni Mata Temple, Deshnoke", details: "Open sunrise to sunset. Free entry. Shoe storage available at the entrance. The temple is 30 km from Bikaner — take a shared jeep (₹40) or auto (₹300 return). Visit early morning (7–9am) or late afternoon (4–6pm) to avoid peak heat. The temple is busy on Navratri — plan accordingly.", emoji: "🐀", color: "bg-amber-50 border-amber-200" },
                { rank: "#3", sight: "NRCC Camel Research Farm", details: "Open 3pm–5pm only for public visits (morning sessions for researchers). Free entry. Located 8 km from the city centre. Auto: ₹150 return. The farm has 250+ camels including rare breeds. The camel milk ice cream kiosk is a genuine highlight — camel milk is lower in fat than cow milk and has a slightly salty, distinctive flavour.", emoji: "🐫", color: "bg-teal-50 border-teal-200" },
                { rank: "#4", sight: "Bhandasar Jain Temple", details: "One of Bikaner's most undervisited gems. Built by a merchant named Bhandsa in the 15th century. The 5-storey structure took 50 years to complete. The ghee-in-mortar claim is local legend but the yellow staining on the walls in summer heat is real. Entry free, small donation expected. Open 8am–5pm.", emoji: "🕍", color: "bg-teal-50 border-teal-200" },
                { rank: "#5", sight: "Gajner Palace & Wildlife Sanctuary", details: "30 km from Bikaner on the Jaisalmer road. The palace sits on an artificial lake and the grounds form a wildlife sanctuary with blackbuck, chinkara, and wintering demoiselle cranes (October–February). Entry to the sanctuary: ₹50. The palace itself is now a heritage hotel but day visits to the grounds are permitted.", emoji: "🦌", color: "bg-rose-50 border-rose-200" },
              ].map((f) => (
                <div key={f.sight} className={`rounded-xl border p-5 ${f.color}`}>
                  <div className="flex items-start gap-4">
                    <div className="text-center flex-shrink-0">
                      <span className="text-2xl block">{f.emoji}</span>
                      <span className="text-xs font-bold text-gold-dark mt-1 block">{f.rank}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{f.sight}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed mt-2">{f.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SIGHTS IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="junagarh fort interior rajasthan palace"
              fallback="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=80"
              alt="Junagarh Fort Bikaner interior palace architecture"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Junagarh Fort&apos;s Anup Mahal: 500 years old, never conquered, and more ornate than anything you&apos;ve seen in Jaipur. The gold-painted throne room alone justifies the detour to Bikaner.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget", emoji: "💰", total: "Under ₹4,000", color: "bg-amber-50 border-amber-200",
                  items: [["Stay (1–2 nights)", "₹600–1,600"], ["Transport (incl. train)", "₹600–900"], ["Food", "₹500–900"], ["Entry fees", "₹200–400"], ["Camel safari", "₹400–600"]] },
                { plan: "Comfortable", emoji: "🏨", total: "₹4,000–10,000", color: "bg-teal-50 border-teal-200",
                  items: [["Stay (1–2 nights)", "₹2,000–5,000"], ["Transport", "₹1,000–2,000"], ["Food", "₹1,000–2,000"], ["Entry + audio guides", "₹400–700"], ["Camel safari (private)", "₹1,500–2,500"]] },
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
              * All prices per person. Does not include travel to/from Bikaner. Junagarh Fort and NRCC Camel Farm are the primary paid attractions. Bhandasar Jain Temple and Lalgarh Palace grounds are free.
            </p>
          </section>

          <AffiliateBlock destination="Bikaner" />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Skipping Junagarh's interior tour", desc: "Many visitors look at the fort from outside and move on. The entire value of Junagarh is inside — the throne rooms, the museum, the aircraft. Pay for the guided tour (or audio guide). The exterior is relatively plain; the interior is extraordinary.", icon: "🏰" },
                { title: "Visiting Karni Mata at midday in summer", desc: "The temple at Deshnoke is 30 km from Bikaner and gets extremely hot in peak hours. Visit early morning or late afternoon. The rats are more active in cooler temperatures and the experience is less crowded.", icon: "🐀" },
                { title: "Buying bhujia from tourist shops near the fort", desc: "The bhujia sold in tourist-facing shops near Junagarh is overpriced and often made for the tourist market. Go to the wholesale shops near Kote Gate or the Haldiram's Bikaner outlet (the original — different from the Delhi chain). Buy in bulk.", icon: "🍿" },
                { title: "Skipping the NRCC Camel Farm", desc: "It sounds like a side attraction but it's genuinely one of the most unusual things you can see in India. The farm only opens to public visitors 3–5pm — don't miss the window. Camel milk ice cream alone is worth the trip.", icon: "🐫" },
                { title: "Coming in summer (May–July)", desc: "Bikaner's desert climate means summer temperatures regularly exceed 45°C. The sand radiates heat well into the evening. October–February is the only comfortable window. March and September are borderline acceptable.", icon: "🌡️" },
                { title: "Not confirming train/bus connections in advance", desc: "Bikaner has good rail connections to Jaipur, Delhi, and Jodhpur but trains book up fast in peak season (Oct–Feb). Book your onward journey the moment you book your Bikaner hotel.", icon: "🚂" },
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
                { icon: "🏰", title: "Junagarh: Better Than Jaisalmer Fort?", desc: "Most travelers choose Jaisalmer over Bikaner. Junagarh's interiors — gold-painted throne rooms, mirror work, Belgian glass, and the WWII era aircraft — are arguably more impressive. And there are far fewer tourists.", color: "border-amber-200 bg-amber-50" },
                { icon: "🐀", title: "Karni Mata Temple Etiquette", desc: "Remove shoes before entering (free shoe storage). Rats are sacred — do not harm them. If one runs across your foot, it's considered extremely auspicious. Avoid peak morning hours (8–10 AM) when it's most crowded.", color: "border-blue-200 bg-blue-50" },
                { icon: "🍿", title: "Bikaner Bhujia: The Original", desc: "Bikaner is the birthplace of bhujia (crispy moth bean snack). The best: Bikanervala original outlet, Haldiram's Bikaner (different from the Delhi chain), or the wholesale shops near Kote Gate. Buy 2 kg minimum for gifts.", color: "border-orange-200 bg-orange-50" },
                { icon: "🐫", title: "Camel Safari Tips", desc: "The sand dunes near Bikaner (Gajner, 30 km) are better for photography than the tourist-heavy dunes at Jaisalmer. Sunrise safaris (5:30 AM) are magic. Book through your hotel for vetted operators.", color: "border-green-200 bg-green-50" },
                { icon: "🚂", title: "Best Train from Delhi", desc: "Bikaner Superfast Express overnight from Delhi (8–9 hrs) or Intercity from Jaipur (4 hrs). Bikaner Junction is central — auto to Old City is ₹80.", color: "border-purple-200 bg-purple-50" },
                { icon: "🏡", title: "Where to Stay in Bikaner", desc: "Budget: Vinayak Guest House (₹600–900), dharamshalas near the fort. Mid-range: Hotel Bhanwar Niwas (heritage haveli, ₹2000–3000). Splurge: Laxmi Niwas Palace (Maharaja's guesthouse, ₹8000+).", color: "border-red-200 bg-red-50" },
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
              Tell us your dates and we&apos;ll send a personalised Bikaner itinerary — including trains from Delhi or Jaipur, fort timings, and hotel picks — within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Bikaner Trip →
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How is Bikaner different from Jaisalmer?", a: "Jaisalmer is more famous (golden fort, sand dunes, camel safari). Bikaner is less touristed, more authentic, and has arguably better fort interiors. Bikaner's bhujia, camel research farm, and rat temple are unique. If choosing one: Jaisalmer for dunes, Bikaner for history." },
                { q: "Is the rat temple (Karni Mata) safe to visit?", a: "Yes — it's completely safe. The rats are protected and fed regularly so they are not aggressive. Some visitors find it unsettling, but it's a genuinely fascinating example of living faith. Wear closed shoes." },
                { q: "Can I combine Bikaner with Jaisalmer and Jodhpur?", a: "The classic Rajasthan circuit: Delhi → Jaipur → Pushkar → Jodhpur → Jaisalmer → Bikaner → Delhi. Bikaner to Jaisalmer is 330 km (6 hrs by road). The overnight Jaisalmer–Bikaner train takes 5 hours." },
                { q: "When is the Bikaner Camel Festival?", a: "Usually January (exact date varies). The camel beauty pageant, camel races, and cultural performances draw thousands. Book hotels 2 months ahead if visiting during the festival." },
                { q: "What is Gajner Palace near Bikaner?", a: "Gajner Palace is a royal hunting lodge 30 km from Bikaner on a lake — now a heritage hotel (₹6000–12000/night). The Gajner Wildlife Sanctuary around it has blackbuck, chinkara, and migratory birds. Worth a day visit even if not staying." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Rajasthan Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Jaisalmer — 3 Days in the Golden Fort City", href: "/blog/jaisalmer-3-days" },
                { label: "Jodhpur — 3 Days in the Blue City", href: "/blog/jodhpur-3-days" },
                { label: "Jaipur — 4 Days in the Pink City", href: "/blog/jaipur-4-days" },
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

          <CombineWith currentSlug="bikaner-2-days" />
          <RelatedGuides currentSlug="bikaner-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
