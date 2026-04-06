"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import TableOfContents from "@/components/blog/TableOfContents";
import Comments from "@/components/blog/Comments";
import DestinationGallery from "@/components/blog/DestinationGallery";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import Stay22Widget from "@/components/ui/Stay22Widget";
import SmartImage from "@/components/ui/SmartImage";
import RelatedGuides from "@/components/blog/RelatedGuides";
import Breadcrumb from "@/components/blog/Breadcrumb";

const TOC = [
  { id: "honest",    emoji: "⚡", label: "What Manali Actually Is" },
  { id: "plan",      emoji: "🎯", label: "Pick Your Plan" },
  { id: "season",    emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",emoji: "🚌", label: "How to Get There" },
  { id: "itinerary", emoji: "📅", label: "The Itineraries" },
  { id: "oldmanali", emoji: "☕", label: "Old Manali Guide" },
  { id: "rohtang",   emoji: "🏔️", label: "Rohtang Pass Guide" },
  { id: "budget",    emoji: "💰", label: "Budget Breakdown" },
  { id: "mistakes",  emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",      emoji: "💡", label: "Pro Tips" },
  { id: "faq",       emoji: "❓", label: "FAQ" },
];

function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const u = () => { const e = document.documentElement; setP(Math.min(100, (e.scrollTop / (e.scrollHeight - e.clientHeight)) * 100)); };
    window.addEventListener("scroll", u, { passive: true });
    return () => window.removeEventListener("scroll", u);
  }, []);
  return <div className="fixed top-0 left-0 right-0 z-[300] h-1 bg-parchment-2"><div className="h-full bg-green-500 transition-all duration-100" style={{ width: `${p}%` }} /></div>;
}

function ShareBar() {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      <a href={`mailto:?subject=Manali 5-Day Guide&body=${typeof window !== "undefined" ? window.location.href : ""}`} className="bg-ink text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Email</a>
      <a href={`https://twitter.com/intent/tweet?text=Manali%205-Day%20Travel%20Guide&url=${typeof window !== "undefined" ? window.location.href : ""}`} target="_blank" rel="noopener noreferrer" className="bg-[#1DA1F2] text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Twitter</a>
      <button onClick={() => { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); }} className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">{copied ? "✓ Copied" : "Copy Link"}</button>
    </div>
  );
}

function DayCard({ day, title, items, cost }: { day: string; title: string; items: string[]; cost: string }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden mb-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 bg-parchment hover:bg-parchment-2 transition-colors">
        <div className="flex items-center gap-3"><span className="font-serif text-xl text-green-600 font-light">{day}</span><span className="text-sm text-ink font-medium">{title}</span></div>
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">{items.map((item, i) => <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed"><span className="text-green-500 mt-1 flex-shrink-0 text-xs">●</span>{item}</li>)}</ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2"><span className="text-xs text-muted font-light">Est. cost: </span><span className="text-xs font-medium text-green-600">{cost}</span></div>
        </div>
      )}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors">
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-green-500 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <div className="px-5 pb-5 pt-1 border-t border-parchment-2"><p className="text-sm text-muted font-light leading-relaxed">{a}</p></div>}
    </div>
  );
}

export default function ManaliClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A"|"B"|"C"|"D">("B");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget",  sub: "₹8k–15k total" },
    { id: "B" as const, emoji: "💑", label: "Couple",  sub: "₹20k–35k for two" },
    { id: "C" as const, emoji: "🎉", label: "Group",   sub: "Best with 4–8 friends" },
    { id: "D" as const, emoji: "🏔️", label: "Adventure",sub: "Treks + snow sports" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Manali" />
      <main className="bg-cream min-h-screen">

        {/* HERO */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage imageKey="manaliHero" fallback="https://images.unsplash.com/photo-1580289143286-f80b2fd4ac08?w=1600&q=85" alt="Manali mountains snow Himachal Pradesh" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/30" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link><span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link><span>/</span>
              <span className="text-white/70">Manali 5 Days</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-green-600 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">Himachal Pradesh</span>
                <span className="text-white/60 text-xs">March 21, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Manali in 5 Days:<em className="italic text-green-300"> Solang Valley, Rohtang & Old Manali</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">Snow, cafes, mountains and the gateway to Ladakh — the complete guide with 4 plans, Rohtang Pass permit guide and the Old Manali secret most tourists never find.</p>
            </div>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted"><span>🏔️ Manali</span><span>·</span><span>🗓 5 Days</span><span>·</span><span>💰 From ₹8,000</span></div>
          </div>

          {/* HONEST INTRO */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Manali Actually Is</h2>
            <blockquote className="border-l-4 border-green-500 pl-6 mb-6 bg-green-50 rounded-r-xl py-4 pr-4">
              <p className="font-serif text-[1.05rem] italic text-ink-mid leading-relaxed">Manali is two completely different places. Mall Road Manali is crowded, touristy and overpriced — full of tour groups and honeymooners in rented snow suits. Old Manali, 3km uphill, is one of the most pleasant places in India — quiet cafes, apple orchards, ancient temples, and the real Himalayan atmosphere most people come here looking for.</p>
            </blockquote>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">At 2,050m above sea level, Manali is the launchpad for Ladakh, Spiti Valley and some of India&apos;s best treks. The Beas River runs through it. Pine forests climb the slopes above town. In winter the surrounding peaks get 6–8 feet of snow. In summer the valley is green and cool when the rest of India is unbearable.</p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">The key to enjoying Manali: stay in Old Manali, go to Solang Valley and Rohtang early (before 9am), and spend your evenings in the cafes rather than the souvenir shops on Mall Road.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: "🏔️", val: "2,050m", label: "Manali altitude" },
                { icon: "🌡️", val: "Dec–Jun", label: "Best months" },
                { icon: "🚌", val: "14–16hrs", label: "Volvo from Delhi" },
                { icon: "💰", val: "₹8,000+", label: "Budget from" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <p className="font-serif text-lg font-light text-ink">{s.val}</p>
                  <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PICK PLAN */}
          <section id="plan" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🎯 Pick Your Plan</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-green-400 hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-green-600 mt-2 font-medium group-hover:underline">Plan {p.id} →</p>
                </button>
              ))}
            </div>
          </section>

          {/* BEST TIME */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { season: "Dec–Feb", icon: "❄️", title: "Winter — Snow Season", desc: "Solang Valley and Rohtang buried in snow. Skiing, sledging, snowball fights. Manali town gets snow periodically. Cold (-5°C nights) but magical. Best for snow lovers.", best: "Best for snow activities", color: "bg-blue-50 border-blue-200" },
                { season: "Mar–May", icon: "🌸", title: "Spring — Most Popular", desc: "Snow still on high peaks, Rohtang opens April–May, pleasant 10–20°C. Apple blossoms in Kullu Valley. Most tourists come in May — book accommodation 2–3 weeks ahead.", best: "Best overall season", color: "bg-green-50 border-green-200" },
                { season: "Jun–Sep", icon: "🌧️", title: "Monsoon — Avoid", desc: "Heavy rain, landslides on National Highway 3, Rohtang closed. Manali town itself is pleasant but surrounding areas dangerous. Not recommended.", best: "Avoid Jun–Aug", color: "bg-red-50 border-red-200" },
                { season: "Oct–Nov", icon: "🍁", title: "Autumn — Hidden Gem", desc: "Golden apple orchards, clear mountain views, very few tourists, cool 5–15°C. Best photography season. Rohtang closes in October — so no snow pass, but everything else is perfect.", best: "Best for fewer crowds", color: "bg-amber-50 border-amber-200" },
              ].map((s) => (
                <div key={s.season} className={`rounded-xl p-4 border ${s.color}`}>
                  <div className="flex items-center gap-2 mb-2"><span className="text-xl">{s.icon}</span><div><p className="font-medium text-sm text-ink">{s.season} — {s.title}</p><p className="text-[0.65rem] font-medium text-teal">{s.best}</p></div></div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* HOW TO REACH */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚌 How to Get to Manali</h2>
            <div className="space-y-3">
              {[
                { icon: "🚌", title: "Volvo AC Bus from Delhi (recommended)", desc: "Delhi (Kashmere Gate ISBT) → Manali: 14–16hrs, Rs.900–Rs.1,800. Depart 5–7pm, arrive Manali early morning. HRTC buses are reliable and comfortable. Book on makemytrip.com or redbus.in. Semi-sleeper or sleeper options available.", badge: "Best value", color: "bg-green-50 border-green-200" },
                { icon: "🚗", title: "Drive from Delhi (10–12hrs)", desc: "540km via Chandigarh → Mandi → Kullu → Manali. Beautiful drive through Kullu Valley. NH3 has regular landslide risk July–August. Best to drive in summer/winter.", badge: "Most scenic", color: "bg-amber-50 border-amber-200" },
                { icon: "✈️", title: "Fly to Kullu (Bhuntar Airport)", desc: "Delhi → Bhuntar: 1hr (Rs.3,000–Rs.8,000). Then taxi Bhuntar → Manali: 50km, 1.5hrs, Rs.1,200–Rs.1,500. Weather-dependent — flights cancel frequently. Not as convenient as it sounds.", badge: "Fastest but unreliable", color: "bg-blue-50 border-blue-200" },
                { icon: "🚂", title: "Train + Bus combo", desc: "Train Delhi → Chandigarh/Ambala (2.5hrs, Rs.200–Rs.600), then Volvo bus Chandigarh → Manali (9–10hrs, Rs.600–Rs.1,000). Saves some time, same cost. Chandigarh has more frequent departures.", badge: "For train lovers", color: "bg-parchment border-parchment-2" },
              ].map((t) => (
                <div key={t.title} className={`rounded-xl p-4 border ${t.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{t.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <p className="font-semibold text-sm text-ink">{t.title}</p>
                        <span className="text-xs bg-white/70 text-muted px-2.5 py-1 rounded-full border border-white/50">{t.badge}</span>
                      </div>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ITINERARIES */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">📅 The Itineraries</h2>
            <div className="flex gap-2 flex-wrap mb-8 p-1 bg-parchment rounded-xl">
              {plans.map((p) => (
                <button key={p.id} onClick={() => setActiveTab(p.id)}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 ${activeTab === p.id ? "bg-white shadow text-ink border border-parchment-2" : "text-muted hover:text-ink"}`}>
                  {p.emoji} {p.label}
                </button>
              ))}
            </div>

            {/* PLAN A — BUDGET */}
            {activeTab === "A" && (
              <div>
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">💰</span>
                  <div><p className="text-sm font-medium text-amber-800">Budget Plan — Rs.8,000–Rs.15,000 per person for 5 days</p><p className="text-xs text-amber-600 font-light">Volvo bus · Hostel/budget stay · Shared taxis</p></div>
                </div>
                <DayCard day="Day 1" title="Arrive + Old Manali Exploration"
                  items={[
                    "Arrive Manali early morning by overnight Volvo. Take a local auto to Old Manali (Rs.50–Rs.80) — NOT the taxis that will try to take you to Mall Road hotels.",
                    "Check in to an Old Manali guesthouse or hostel — Rs.400–Rs.800/night (dorm) or Rs.800–Rs.1,500 (private). Zostel Manali, The Hosteller, or any of the small family-run guesthouses on the main Old Manali lane.",
                    "After rest: walk Old Manali village. Manu Temple (ancient, free, 10-min walk). The lane above the temple with apple orchards and mountain views.",
                    "Evening: dinner at Cafe 1947 (best pizzas in Manali, Rs.200–Rs.350) or Dylan&apos;s Toasted and Roasted for the best coffee and sandwiches (Rs.150–Rs.250).",
                  ]} cost="Rs.1,000–Rs.2,000" />
                <DayCard day="Day 2" title="Solang Valley — Snow Activities"
                  items={[
                    "Book Rohtang permit online at rohtangpermit.com the PREVIOUS evening (Rs.550, only 1,200 permits/day — sells out). OR go to Solang Valley only (no permit needed for Solang).",
                    "Shared taxi Old Manali → Solang Valley (14km, Rs.200–Rs.300/seat). Leave by 8am — slopes get crowded by 10am and lines form.",
                    "Solang Valley activities: skiing (Rs.500–Rs.1,000/hr with instructor), sledging (Rs.200–Rs.300), snow tubing (Rs.200), zorbing (Rs.300). Snow sports gear rental on site.",
                    "Return by 2pm to avoid traffic. Afternoon: Beas Kund trek starting point near Solang (free, beautiful even a 1km walk in).",
                    "Evening back in Old Manali. Try the apple cider — Manali is apple country.",
                  ]} cost="Rs.1,500–Rs.3,000" />
                <DayCard day="Day 3" title="Rohtang Pass (if permit available)"
                  items={[
                    "Start at 6am — traffic to Rohtang is severe after 9am. Shared taxi Manali → Rohtang (51km, Rs.400–Rs.600/seat).",
                    "Rohtang Pass at 3,978m — a vast snow-covered plateau. The views of the Himalayan range are extraordinary. Snow even in summer.",
                    "Important: do NOT rent the colourful snow suits offered at the bottom — they&apos;re overpriced (Rs.400–Rs.600) and unnecessary if you have warm clothes. Bring your own layers.",
                    "Return by 1pm. Afternoon: local Manali market for Himachali shawls and dry fruits (much cheaper than Delhi).",
                    "Alternative if Rohtang is closed: Naggar Castle (22km, Rs.100 entry) — 15th century castle with Himalayan views, art gallery inside.",
                  ]} cost="Rs.1,000–Rs.2,000" />
                <DayCard day="Day 4" title="Kasol / Manikaran Day Trip"
                  items={[
                    "Shared taxi or local bus Manali → Kasol (76km, 2.5hrs, Rs.300–Rs.400/seat). The Parvati Valley route is extraordinarily beautiful.",
                    "Kasol: small Israeli-influence village on the Parvati River. Great cafes, great treks, the most relaxed vibe in Himachal. Jim Morrison Cafe (budget), Evergreen Cafe (Rs.150–Rs.300/meal).",
                    "Manikaran Sahib Gurudwara (5km from Kasol): hot springs inside, free langar (community meal), one of the most spiritual experiences in Himachal. Mandatory stop.",
                    "Return Manali by evening. Total day cost if shared: Rs.600–Rs.800 transport + food.",
                  ]} cost="Rs.900–Rs.1,500" />
                <DayCard day="Day 5" title="Hadimba Temple + Depart"
                  items={[
                    "Morning: Hadimba Devi Temple (5-min auto from Old Manali, Rs.30 entry) — ancient wooden temple in cedar forest, 16th century. Beautiful architecture, peaceful surroundings at 7am before tourists arrive.",
                    "Vashisht village (2km from Old Manali): natural hot spring baths (Rs.20–Rs.50), ancient Vashisht temple, good views of Manali town below.",
                    "Afternoon: Manali Market for last shopping. Overnight Volvo back to Delhi departs 5–6pm.",
                    "Pro tip: buy apples, apricot jam, Himachali rajma (kidney beans) and dry fruits at Manali market — significantly cheaper than anywhere else.",
                  ]} cost="Rs.500–Rs.1,000" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center mt-2">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 5-Day Budget · </span>
                  <span className="font-serif text-base text-ink font-light">Rs.8,000–Rs.15,000 per person including bus from Delhi</span>
                </div>
              </div>
            )}

            {/* PLAN B — COUPLE */}
            {activeTab === "B" && (
              <div>
                <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 rounded-xl mb-6">
                  <span className="text-2xl">💑</span>
                  <div><p className="text-sm font-medium text-rose-800">Couple Plan — Rs.20,000–Rs.35,000 for two</p><p className="text-xs text-rose-600 font-light">Boutique hotel · Private cab · Romantic mountain dinners</p></div>
                </div>
                <DayCard day="Day 1" title="Arrive + Settle in Old Manali"
                  items={[
                    "Arrive by overnight Volvo or morning flight. Private cab from bus stand to Old Manali (Rs.300–Rs.500).",
                    "Stay at The Orchard Greens, Snow Valley Resorts or Manu Allaya Resort (Rs.3,000–Rs.6,000/night) — mountain views, private balcony, breakfast included.",
                    "Afternoon walk through Old Manali village and apple orchards. Coffee at Dylan&apos;s Toasted and Roasted — best coffee in Manali, outstanding mountain view from the terrace.",
                    "Sunset at Manu Temple hilltop — you can see the full Manali valley and the Beas River below. No tourists at sunset.",
                  ]} cost="Rs.4,000–Rs.7,000 for two" />
                <DayCard day="Day 2" title="Solang Valley — Snow & Views"
                  items={[
                    "Private cab to Solang Valley and back (Rs.1,200–Rs.1,500 for the cab).",
                    "Solang Valley together — skiing or snowboarding with a private instructor (Rs.1,200–Rs.1,800/person), hot chocolate at the cafes at the top of the slope.",
                    "Atal Tunnel (9.02km tunnel opened 2020) — drive through to the other side for snow views in Sissu village, then back. Free, beautiful.",
                    "Evening: dinner at Casa Bella Vista — best dinner restaurant in Manali for couples, wood-fired pizzas, mountain views, Rs.1,500–Rs.2,500 for two.",
                  ]} cost="Rs.5,000–Rs.9,000 for two" />
                <DayCard day="Day 3" title="Rohtang Pass — The Snow Pass"
                  items={[
                    "Private cab to Rohtang and back (Rs.2,500–Rs.3,500 for the cab — pre-book with your hotel). Leave 6am sharp.",
                    "Rohtang at sunrise — the pass is empty at 6:30–7am before the day-trippers arrive. The colour of the snow at dawn is extraordinary.",
                    "Bring your own thermals and warm jacket — skip the overpriced rental gear. The cold at 3,978m is significant even in May.",
                    "Return afternoon. Evening: couples&apos; Ayurvedic massage at any Old Manali spa (Rs.1,500–Rs.2,500 for two). Well deserved after the mountain day.",
                  ]} cost="Rs.5,000–Rs.8,000 for two" />
                <DayCard day="Day 4" title="Parvati Valley — Kasol + Manikaran"
                  items={[
                    "Private cab to Kasol (Rs.2,500–Rs.3,000 return). Drive through Kullu Valley — river, mountains, apple orchards.",
                    "Kasol for lunch — try the Israeli food (hummus, shakshuka, pita) at Evergreen Cafe or Moon Dance.",
                    "Manikaran Sahib together — the natural hot spring ritual, the langar, the spiritual atmosphere. One of Himachal&apos;s most moving experiences.",
                    "Return via Kullu — stop at Shawambhala or any local shawl weaver for genuine Kullu shawls (Rs.800–Rs.2,500).",
                  ]} cost="Rs.4,000–Rs.6,000 for two" />
                <DayCard day="Day 5" title="Hadimba Temple + Departure"
                  items={[
                    "Hadimba Temple at 7am (Rs.60 for two). The cedar forest around it is extraordinary at dawn.",
                    "Vashisht hot springs together (Rs.40–Rs.100 for two). The natural hot sulfur springs are unusually good for the skin.",
                    "Final Old Manali breakfast at Cafe 1947 — their French toast with honey is extraordinary.",
                    "Overnight Volvo departs 5–6pm. Or extend and do Naggar Castle or a Beas Kund day trek.",
                  ]} cost="Rs.2,000–Rs.4,000 for two" />
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-center mt-2">
                  <span className="text-xs text-rose-700 uppercase tracking-wide">Total 5-Day Couple Cost · </span>
                  <span className="font-serif text-base text-ink font-light">Rs.20,000–Rs.35,000 for two including bus/transport from Delhi</span>
                </div>
              </div>
            )}

            {/* PLAN C — GROUP */}
            {activeTab === "C" && (
              <div>
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">🎉</span>
                  <div><p className="text-sm font-medium text-purple-800">Group Plan (4–8 people) — Rs.8,000–Rs.14,000 per person</p><p className="text-xs text-purple-600 font-light">Rented Innova/Tempo · Shared accommodation · Group activities</p></div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-6">
                  <p className="font-medium text-sm text-purple-800 mb-2">Why Manali is perfect for groups</p>
                  <ul className="space-y-1.5">{[
                    "Rent an Innova Crysta (Rs.4,000–Rs.5,000/day) — split between 6–7 people = Rs.600–Rs.700/person/day. Cheaper than shared taxis",
                    "Book a whole villa/cottage in Old Manali — 4–5 bedroom properties Rs.4,000–Rs.8,000/night, split = Rs.800–Rs.2,000/person",
                    "Group snow activities are more fun and cheaper (group rates available at Solang)",
                    "Manali nightlife is limited — evening bonfires, cafe hopping and card games beat clubs",
                  ].map((tip, i) => <li key={i} className="text-xs text-purple-700 font-light flex items-start gap-2"><span className="text-purple-400 mt-0.5">✓</span>{tip}</li>)}</ul>
                </div>
                <DayCard day="Day 1–2" title="Arrive + Old Manali + Solang Valley"
                  items={[
                    "Arrive by multiple Volvo buses (book together, sit separately — buses fill up). Rent Innova from Manali for 5 days (Rs.20,000–Rs.25,000 total, Rs.4,000–Rs.5,000 split 5–6 ways).",
                    "Book a cottage in Old Manali — 5-6 people in a 3-bedroom is affordable and more fun than hotel rooms.",
                    "Day 2: Solang Valley group day. Group skiing rates, snowboarding, snow fights. Book Rohtang permits for the group the night before.",
                  ]} cost="Rs.3,000–Rs.5,000/person for 2 days" />
                <DayCard day="Day 3–4" title="Rohtang + Kasol Trip"
                  items={[
                    "Day 3: Rohtang Pass (start 6am sharp). Group photos at the pass. Return by 1pm.",
                    "Day 3 afternoon: group cooking session or bonfire at your cottage — some guesthouses offer this. Buy Himachali rajma, trout fish and vegetables from the local market.",
                    "Day 4: Kasol + Kheerganga trek. Kheerganga is a 12km trek (5hrs each way) with a natural hot spring at the top. Not for the unfit but extraordinary for groups of friends. Book a guide (Rs.500–Rs.800) if first time.",
                  ]} cost="Rs.1,500–Rs.3,000/person per day" />
                <DayCard day="Day 5" title="Hadimba + Local Day + Depart"
                  items={[
                    "Morning: Hadimba Temple as a group. Vashisht hot springs.",
                    "Manali market: dry fruits (buy bulk — walnuts, almonds, apricots are 40–60% cheaper than Delhi), Kullu shawls, Himachali caps.",
                    "Afternoon bonfire + goodbye lunch at The Lazy Dog (best cafe in Old Manali, rooftop mountain view).",
                    "Evening Volvo buses back to Delhi. Book return tickets before arriving — they sell out on weekends.",
                  ]} cost="Rs.800–Rs.1,500/person" />
              </div>
            )}

            {/* PLAN D — ADVENTURE */}
            {activeTab === "D" && (
              <div>
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                  <span className="text-2xl">🏔️</span>
                  <div><p className="text-sm font-medium text-blue-800">Adventure Plan — Treks + Snow Sports + Biking</p><p className="text-xs text-blue-600 font-light">Beas Kund Trek · Kheerganga · Paragliding · Mountain biking</p></div>
                </div>
                {[
                  { name: "Beas Kund Trek (2 days)", level: "Moderate", distance: "14km", desc: "From Solang Valley base to the glacial Beas Kund lake at 3,700m. Best July–September. Snow-covered even in summer. No guide needed but carry warm layers and start early. Camping at the lake is extraordinary.", cost: "Rs.500–Rs.800 (camping gear rental)" },
                  { name: "Kheerganga Trek (1 day)", level: "Moderate", distance: "12km", desc: "Parvati Valley. Natural hot spring at the top (3,050m). One of India&apos;s most popular short treks. Overnight camping at the spring is magical. Forest trail, river crossings, rhododendron forest.", cost: "Rs.800–Rs.1,500 (guide optional)" },
                  { name: "Paragliding at Solang Valley", level: "Beginner", distance: "N/A", desc: "Tandem paragliding with a certified instructor from Solang Valley. 10–15 minute flight over the valley, mountain views in every direction. Rs.1,200–Rs.2,000 per flight.", cost: "Rs.1,200–Rs.2,000" },
                  { name: "Mountain Biking", level: "Intermediate", distance: "Various", desc: "Hire a mountain bike (Rs.500–Rs.800/day) and ride the trails around Old Manali, Naggar and Jagatsukh. The Manali–Naggar road is beautiful and manageable.", cost: "Rs.500–Rs.800/day" },
                  { name: "Manali to Leh Bike/Car Trip (extend 10 days)", level: "Advanced", distance: "479km", desc: "If you have 10+ days, continue from Manali to Ladakh on the Manali–Leh highway — one of the world&apos;s great road journeys. See our complete Leh Ladakh guide.", cost: "Rs.15,000–Rs.30,000 additional" },
                ].map((activity) => (
                  <div key={activity.name} className="bg-white rounded-xl border border-parchment-2 p-4 mb-3">
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <p className="font-medium text-sm text-ink">{activity.name}</p>
                      <div className="flex gap-2">
                        <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full border border-blue-200">{activity.level}</span>
                        <span className="text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full border border-green-200">{activity.cost}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-700 font-light leading-relaxed">{activity.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* OLD MANALI GUIDE */}
          <section id="oldmanali" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">☕ Old Manali — The Secret Most Tourists Miss</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">Old Manali is 3km uphill from Mall Road. The tourist buses stop at Mall Road and most people never make it here. This is the real Manali.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { name: "Cafe 1947", type: "Best pizza + views", desc: "Wood-fired pizza (Rs.220–Rs.380), pasta, continental breakfast. The rooftop terrace has the best mountain view of any restaurant in Manali. Book ahead in peak season.", icon: "🍕" },
                { name: "Dylan's Toasted and Roasted", type: "Best coffee", desc: "Named after Bob Dylan. Exceptional coffee, toasted sandwiches, books to borrow. The terrace over the apple orchards at 10am with a cappuccino is one of Manali&apos;s great pleasures.", icon: "☕" },
                { name: "The Lazy Dog", type: "Best vibe", desc: "Rooftop cafe with mountain panorama. Best for evenings — live music sometimes, great cocktails (try the apple cider), Himachali thali (Rs.250–Rs.350). The most atmospheric place in Manali.", icon: "🐾" },
                { name: "Manu Temple", type: "Ancient temple", desc: "The oldest temple in Manali — dedicated to the sage Manu, the progenitor of humanity in Hindu mythology. Ancient stone structure, cedar forest, peaceful even in peak season. Free.", icon: "🛕" },
                { name: "Apple orchards walk", type: "Free, beautiful", desc: "The lanes above Old Manali wind through working apple orchards. In spring (April–May) they&apos;re in blossom. In September you can buy apples directly from farmers. No tourists.", icon: "🍎" },
                { name: "Vashisht village", type: "Hot springs + temple", desc: "2km from Old Manali. Natural hot sulfur springs (separate men&apos;s/women&apos;s baths, Rs.20–Rs.50), ancient Vashisht temple, good mountain views. Popular with long-term backpackers.", icon: "♨️" },
              ].map((item) => (
                <div key={item.name} className="bg-white rounded-xl border border-parchment-2 p-4 hover:border-green-300 transition-colors">
                  <div className="flex items-center gap-2 mb-1"><span className="text-xl">{item.icon}</span><p className="font-medium text-sm text-ink">{item.name}</p></div>
                  <p className="text-[0.65rem] text-green-600 font-medium mb-2">{item.type}</p>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ROHTANG GUIDE */}
          <section id="rohtang" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🏔️ Rohtang Pass — Complete Permit Guide</h2>
            <p className="text-sm text-muted font-light mb-6">Rohtang Pass (3,978m) is the most popular day trip from Manali. Without this permit your vehicle gets turned back. Most tourists don&apos;t know this until they&apos;re at the checkpost.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { title: "How to book", icon: "💻", content: "Go to rohtangpermit.com. Book the PREVIOUS day (permits for tomorrow are available from 8pm tonight). Select your vehicle type, enter registration number, pay Rs.550 (petrol) or Rs.650 (diesel). Print or screenshot the permit." },
                { title: "How many permits available", icon: "🎫", content: "Only 1,200 vehicles allowed per day. On weekends and holidays, permits sell out by 11pm the previous night. On weekdays you can usually book same-morning. Never assume availability — book the evening before." },
                { title: "When Rohtang is open", icon: "📅", content: "Typically open May to October, weather permitting. Closed Nov–April (heavy snow). Closed Tuesdays for maintenance. Closed during heavy snowfall or rain at any time. Always check current status at himachalservices.nic.in." },
                { title: "What you see at Rohtang", icon: "🏔️", content: "Snow-covered plateau at 3,978m, surrounded by high Himalayan peaks. The Lahaul valley opens up on the other side. Clear views of Gepan, Shigri and Bara Shigri glaciers on a clear day. The Atal Tunnel (9km) is now an alternative route." },
              ].map((item) => (
                <div key={item.title} className="bg-parchment rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center gap-2 mb-2"><span className="text-xl">{item.icon}</span><p className="font-medium text-sm text-ink">{item.title}</p></div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800 font-light leading-relaxed"><strong className="font-medium">💡 The Atal Tunnel alternative:</strong> Since 2020, the 9.02km Atal Tunnel connects Manali to Sissu in Lahaul Valley — bypassing Rohtang Pass completely. No permit needed. Drive through the tunnel for free, see snow on the other side, and return. Not as dramatic as the pass itself, but worth doing regardless.</p>
            </div>
          </section>

          {/* BUDGET TABLE */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead><tr className="bg-parchment">
                  <th className="text-left p-3.5 text-xs font-medium text-muted">Category</th>
                  <th className="p-3.5 text-xs font-medium text-amber-700 text-center">💰 Budget</th>
                  <th className="p-3.5 text-xs font-medium text-rose-700 text-center">💑 Couple</th>
                  <th className="p-3.5 text-xs font-medium text-purple-700 text-center">🎉 Group</th>
                  <th className="p-3.5 text-xs font-medium text-blue-700 text-center">🏔️ Adventure</th>
                </tr></thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🚌 Transport (Delhi return)", "₹1,800–₹3,600", "₹3,600–₹7,200", "₹3,600–₹7,200", "₹1,800–₹3,600"],
                    ["🏨 Accommodation (5N)", "₹2,000–₹4,000", "₹7,500–₹15,000", "₹2,000–₹4,000", "₹2,500–₹5,000"],
                    ["🚗 Local Transport", "₹1,500–₹2,500", "₹4,000–₹7,000", "₹1,500–₹2,500", "₹2,000–₹4,000"],
                    ["🍽 Food", "₹1,500–₹2,500", "₹3,500–₹6,000", "₹1,500–₹2,500", "₹1,500–₹2,500"],
                    ["🎯 Activities + Permit", "₹1,500–₹3,000", "₹3,000–₹5,000", "₹1,500–₹3,000", "₹4,000–₹8,000"],
                    ["TOTAL per person", "₹8,000–₹15,000", "₹10,000–₹17,500", "₹6,000–₹11,000", "₹12,000–₹25,000"],
                  ].map(([cat,...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v,i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <AffiliateBlock
            destination="Manali Himachal Pradesh"
            hotels={[
              { name: "The Orchard Greens", type: "Boutique · Old Manali", price: "From ₹3,500/night", rating: "4", badge: "Best location", url: "https://www.booking.com/hotel/in/the-orchard-greens-manali.html?aid=2820480" },
              { name: "Snow Valley Resorts", type: "Mountain Resort · Manali", price: "From ₹4,500/night", rating: "4", badge: "Mountain views", url: "https://www.booking.com/hotel/in/snow-valley-resorts-manali.html?aid=2820480" },
              { name: "Zostel Manali", type: "Hostel · Old Manali", price: "From ₹450/bed", rating: "4", badge: "Best budget", url: "https://www.booking.com/hotel/in/zostel-manali.html?aid=2820480" },
              { name: "Manu Allaya Resort", type: "Luxury · Old Manali", price: "From ₹6,000/night", rating: "5", badge: "Most luxurious", url: "https://www.booking.com/hotel/in/manu-allaya-resort-manali.html?aid=2820480" },
            ]}
            activities={[
              { name: "Solang Valley Snow Activities",     duration: "Full day", price: "From ₹800/person",   badge: "Must do",    url: `https://www.getyourguide.com/s/?q=manali&partner_id=PSZA5UI` },
              { name: "Rohtang Pass Day Trip",             duration: "Full day", price: "From ₹1,200/person", badge: "Iconic",     url: `https://www.getyourguide.com/s/?q=manali&partner_id=PSZA5UI` },
              { name: "Paragliding at Solang Valley",      duration: "15 mins",  price: "From ₹1,200/person", url: `https://www.getyourguide.com/s/?q=manali&partner_id=PSZA5UI` },
              { name: "Kasol + Kheerganga Trek Day Trip",  duration: "Full day", price: "From ₹1,500/person", url: `https://www.getyourguide.com/s/?q=manali&partner_id=PSZA5UI` },
              { name: "Beas Kund Trek 2-Day",              duration: "2 Days",   price: "From ₹2,500/person", url: `https://www.getyourguide.com/s/?q=manali&partner_id=PSZA5UI` },
            ]}
          />

          <Stay22Widget destination="Manali, Himachal Pradesh, India" label="Manali" />

          <DestinationGallery
            title="Manali — Must-See Places"
            subtitle="The Himachal classic — click to explore."
            spots={[
              { name: "Solang Valley Snow", query: "solang valley manali snow mountains skiing himachal", desc: "India&apos;s most popular snow destination — skiing, sledging, snow tubing at 2,480m. 14km from Manali." },
              { name: "Rohtang Pass", query: "rohtang pass manali snow mountains himachal pradesh", desc: "3,978m mountain pass with panoramic Himalayan views. Snow even in summer. Permit required." },
              { name: "Old Manali Cafes", query: "old manali cafe mountains himachal pradesh apple orchard", desc: "The real Manali — quiet lanes, apple orchards, Cafe 1947 and Dylan&apos;s with mountain views." },
              { name: "Hadimba Temple", query: "hadimba devi temple manali cedar forest ancient wood", desc: "Ancient 16th-century wooden temple in cedar forest. Peaceful at dawn before tourists arrive." },
              { name: "Kasol Parvati Valley", query: "kasol parvati valley river himachal mountains cafe", desc: "76km from Manali — the most relaxed village in Himachal, on the Parvati River." },
            ]}
          />

          {/* MISTAKES */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { icon: "🏨", title: "Staying on Mall Road", desc: "Mall Road is noisy, crowded, touristy and overpriced. Old Manali is 3km uphill, quieter, cheaper, has better cafes and the actual Himalayan vibe you came for. Always stay in Old Manali.", color: "bg-white border-parchment-2" },
                { icon: "📋", title: "Not booking Rohtang permit in advance", desc: "1,200 permits per day. On weekends they sell out the previous night. The permit must match your vehicle registration. Book at rohtangpermit.com the evening before, not the morning of.", color: "bg-white border-parchment-2" },
                { icon: "⏰", title: "Arriving at Solang Valley after 10am", desc: "Solang Valley has queues for snow activities that stretch 1–2hrs by midday on weekends. Arrive by 8am. You get better snow, no lines and better light for photos.", color: "bg-white border-parchment-2" },
                { icon: "🧥", title: "Renting the colourful snow suits", desc: "The bright-coloured snow suits rented near Solang Valley (Rs.400–Rs.600) are unnecessary if you have warm layers. Bring thermals, a fleece and a waterproof outer layer — much warmer and costs nothing extra.", color: "bg-white border-parchment-2" },
                { icon: "🌧️", title: "Visiting July–August", desc: "Manali is prone to flash floods and landslides during peak monsoon. NH3 (the main highway) gets blocked regularly. Rohtang is closed. Not worth the risk — come December–June instead.", color: "bg-white border-parchment-2" },
              ].map((m) => (
                <div key={m.title} className={`rounded-xl p-4 border ${m.color}`}>
                  <div className="flex items-start gap-3"><span className="text-xl flex-shrink-0">{m.icon}</span><div><p className="font-medium text-sm text-ink mb-1">❌ {m.title}</p><p className="text-xs text-gray-700 font-light leading-relaxed">{m.desc}</p></div></div>
                </div>
              ))}
            </div>
          </section>

          {/* PRO TIPS */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "🍎", title: "Buy Himachali produce at the source", desc: "Manali market has walnuts, almonds, apricot jam, rajma (kidney beans) and fresh apples at 40–60% below Delhi prices. Buy extra — it makes excellent gifts. September is apple harvest season.", color: "bg-green-50 border-green-200" },
                { icon: "🌅", title: "The Beas River at 6am", desc: "Walk down from Old Manali to the Beas River early morning — mist over the river, deodar cedar forest, zero tourists. The most peaceful 30 minutes in Manali. Free.", color: "bg-blue-50 border-blue-200" },
                { icon: "🏔️", title: "Atal Tunnel — no permit needed", desc: "The 9.02km Atal Tunnel bypasses Rohtang completely. Free, no permit. Drive through to Sissu village on the other side — snow visible, Himalayan views, a completely different landscape. Worth doing regardless.", color: "bg-amber-50 border-amber-200" },
                { icon: "🎒", title: "Extend to Spiti Valley (5+ days extra)", desc: "Manali is the gateway to Spiti Valley via Kunzum Pass. The most remote valley in Himachal — ancient monasteries, lunar landscapes. Add 5 days and a sturdy 4WD. One of India&apos;s most extraordinary routes.", color: "bg-purple-50 border-purple-200" },
                { icon: "🐟", title: "Manali trout is excellent and cheap", desc: "The Beas River is a trout river. Several restaurants in Old Manali and Vashisht serve fresh Beas trout (Rs.250–Rs.450 for a whole fish). Far better than anything on Mall Road.", color: "bg-rose-50 border-rose-200" },
                { icon: "📅", title: "October is underrated", desc: "Off-season October: golden deodar forests, clear mountain views, half the tourists, 20–30% lower prices, no Rohtang crowds. Rohtang closes but everything else is perfect. The best month for photography.", color: "bg-teal-50 border-teal-200" },
              ].map((t) => (
                <div key={t.title} className={`rounded-xl p-4 border ${t.color}`}>
                  <div className="flex items-start gap-3"><span className="text-xl flex-shrink-0">{t.icon}</span><div><p className="font-medium text-sm text-ink mb-1">{t.title}</p><p className="text-xs text-gray-700 font-light leading-relaxed">{t.desc}</p></div></div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want Your Manali Trip Planned?</h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">Tell us your dates, group and what you want — snow, cafes, treks or all three — and we&apos;ll send a personalised Manali plan in 24 hours. Free.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Manali Trip →</button>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:border-gold transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "What is the best time to visit Manali?", a: "December–February for snow sports. March–June for pleasant weather and Rohtang access. October–November is underrated — golden forests, fewer crowds. Avoid July–August (monsoon, landslides)." },
                { q: "How do I get to Manali from Delhi?", a: "Overnight Volvo AC bus from Kashmere Gate ISBT (14–16hrs, Rs.900–Rs.1,800). Most reliable and best value. Departs 5–7pm, arrives early morning. Book on redbus.in or makemytrip.com." },
                { q: "Is Rohtang Pass permit required?", a: "Yes — book at rohtangpermit.com the previous evening. Rs.550 petrol, Rs.650 diesel. Only 1,200 permits/day — book early. Closed Nov–April and Tuesdays." },
                { q: "What is Old Manali and why should I stay there?", a: "Old Manali is 3km uphill from Mall Road. It has the best cafes (Cafe 1947, Dylan's, The Lazy Dog), quieter vibe, apple orchards and better accommodation value. Mall Road is overpriced and touristy." },
                { q: "Can I go to Leh from Manali?", a: "Yes — the Manali–Leh highway (479km) opens late May to early October. One of the world's great road trips. By car: 2 days. By bike: 2–3 days. See our complete Leh Ladakh guide for the full trip." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          <Comments />

          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">Extend Your Mountain Trip</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Leh Ladakh 7 Days — Continue from Manali", href: "/blog/leh-ladakh-7-days" },
                { label: "Kashmir 6 Days — Heaven on Earth", href: "/blog/kashmir-6-days" },
                { label: "Rajasthan 7 Days — Royal Circuit", href: "/blog/rajasthan-7-days" },
                { label: "Golden Triangle 7 Days", href: "/blog/golden-triangle-7-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">Read →</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="manali-5-days" />
        </div>
      </main>
      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
