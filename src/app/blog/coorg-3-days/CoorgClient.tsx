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
import SmartImage from "@/components/ui/SmartImage";
import RelatedGuides from "@/components/blog/RelatedGuides";
import Breadcrumb from "@/components/blog/Breadcrumb";

const TOC = [
  { id: "honest",    emoji: "⚡", label: "What Coorg Actually Is" },
  { id: "plan",      emoji: "🎯", label: "Pick Your Plan" },
  { id: "season",    emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",emoji: "🚗", label: "Getting to Coorg" },
  { id: "itinerary", emoji: "📅", label: "The Itineraries" },
  { id: "stays",     emoji: "🏡", label: "Coffee Estate Stays" },
  { id: "buy",       emoji: "🛒", label: "What to Buy" },
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
  return <div className="fixed top-0 left-0 right-0 z-[300] h-1 bg-parchment-2"><div className="h-full bg-green-600 transition-all duration-100" style={{ width: `${p}%` }} /></div>;
}

function ShareBar() {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      <a href={`mailto:?subject=Coorg 3-Day Guide&body=${typeof window !== "undefined" ? window.location.href : ""}`} className="bg-ink text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Email</a>
      <a href={`https://twitter.com/intent/tweet?text=Coorg%203-Day%20Travel%20Guide&url=${typeof window !== "undefined" ? window.location.href : ""}`} target="_blank" rel="noopener noreferrer" className="bg-[#1DA1F2] text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Twitter</a>
      <button onClick={() => { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); }} className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">{copied ? "✓ Copied" : "Copy Link"}</button>
    </div>
  );
}

function DayCard({ day, title, items, cost }: { day: string; title: string; items: string[]; cost: string }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden mb-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 bg-parchment hover:bg-parchment-2 transition-colors">
        <div className="flex items-center gap-3"><span className="font-serif text-xl text-green-700 font-light">{day}</span><span className="text-sm text-ink font-medium">{title}</span></div>
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">{items.map((item, i) => <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed"><span className="text-green-500 mt-1 flex-shrink-0 text-xs">●</span>{item}</li>)}</ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2"><span className="text-xs text-muted font-light">Est. cost: </span><span className="text-xs font-medium text-green-700">{cost}</span></div>
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
        <span className={`text-green-600 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <div className="px-5 pb-5 pt-1 border-t border-parchment-2"><p className="text-sm text-muted font-light leading-relaxed">{a}</p></div>}
    </div>
  );
}

export default function CoorgClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A"|"B"|"C"|"D">("B");

  const plans = [
    { id: "A" as const, emoji: "💰", label: "Budget",  sub: "₹4k–8k/person" },
    { id: "B" as const, emoji: "💑", label: "Couple",  sub: "₹12k–22k for two" },
    { id: "C" as const, emoji: "🎉", label: "Group",   sub: "Best with 4–8 friends" },
    { id: "D" as const, emoji: "👨‍👩‍👧", label: "Family",  sub: "Kids friendly" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Coorg" />
      <main className="bg-cream min-h-screen">

        {/* HERO */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage imageKey="coorgHero" fallback="https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=1600&q=85" alt="Coorg coffee plantation Karnataka misty hills" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/30" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link><span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link><span>/</span>
              <span className="text-white/70">Coorg 3 Days</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-green-700 text-white text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">Scotland of India</span>
                <span className="text-white/60 text-xs">March 21, 2026</span>
                <span className="text-white/30">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Coorg in 3 Days:<em className="italic text-green-300"> Coffee Estates, Abbey Falls & Raja&apos;s Seat</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">The most popular weekend trip from Bangalore — misty hills, coffee estates, waterfalls and elephant camps. 4 plans with real costs and the estate stay secret most tourists miss.</p>
            </div>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted"><span>☕ Coorg</span><span>·</span><span>🗓 3 Days</span><span>·</span><span>💰 From ₹4,000</span></div>
          </div>

          {/* HONEST INTRO */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Coorg Actually Is</h2>
            <blockquote className="border-l-4 border-green-600 pl-6 mb-6 bg-green-50 rounded-r-xl py-4 pr-4">
              <p className="font-serif text-[1.05rem] italic text-ink-mid leading-relaxed">Coorg is what Ooty wishes it was. The same misty hills and cool air — but add coffee estates you can actually stay on, the Cauvery river running through it, some of the best food in South India, and a warrior culture (the Kodavas) that makes it unlike anywhere else in Karnataka.</p>
            </blockquote>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">At 1,525m above sea level in the Western Ghats, Coorg (officially Kodagu) is a district rather than a single town. The main town is Madikeri — but the best of Coorg is in the estates and villages spread across the misty hills. Coffee is grown everywhere, cardamom and pepper grow in the understorey, and orange and honey are produced in genuinely exceptional quality.</p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">The key to enjoying Coorg: stay on a working coffee estate (not a hotel in Madikeri), go to Abbey Falls early morning before tour buses, and spend time at a spice estate tour — the smells and knowledge you get are worth the detour alone. The coffee estate stays are the whole point of Coorg — if you're staying in a hotel in Madikeri town, you're honestly doing it wrong.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: "🚗", val: "265km", label: "From Bangalore" },
                { icon: "🌡️", val: "15–25°C", label: "Oct–Mar temp" },
                { icon: "☕", val: "India #1", label: "Coffee producer" },
                { icon: "💰", val: "₹4,000+", label: "Budget from" },
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
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-green-500 hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-green-700 mt-2 font-medium group-hover:underline">Plan {p.id} →</p>
                </button>
              ))}
            </div>
          </section>

          {/* BEST TIME */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { season: "Oct–Jan", icon: "☕", title: "Coffee Harvest — Best Season", desc: "Cool 15–22°C, dry, coffee berries turning red on the estate. You can watch or join the harvest. Best visibility for trekking. October and November are peak — book estates 2–3 weeks ahead (as of early 2026, the popular ones fill up fast).", best: "Best overall", color: "bg-green-50 border-green-200" },
                { season: "Feb–Mar", icon: "🌸", title: "Flowering Season", desc: "Coffee blossoms coat the estates in white flowers — the fragrance is intoxicating, like nothing you've smelled before. Warm 20–28°C, still dry, fewer crowds than Oct–Jan. Excellent for photography.", best: "Best for photography", color: "bg-amber-50 border-amber-200" },
                { season: "Apr–Jun", icon: "☀️", title: "Pre-Monsoon — Hot", desc: "Temperatures climb to 30°C+. Waterfalls may be low on water. Still manageable and much cheaper accommodation. Not ideal but doable.", best: "Cheapest season", color: "bg-orange-50 border-orange-200" },
                { season: "Jul–Sep", icon: "🌧️", title: "Monsoon — Spectacular but Difficult", desc: "Coorg receives 2,500–3,000mm rainfall — one of India's wettest places. Waterfalls are full and dramatic. But leeches on every trail, many roads flooded, limited outdoor activities. Only for rain lovers.", best: "Not recommended", color: "bg-blue-50 border-blue-200" },
              ].map((s) => (
                <div key={s.season} className={`rounded-xl p-4 border ${s.color}`}>
                  <div className="flex items-center gap-2 mb-2"><span className="text-xl">{s.icon}</span><div><p className="font-medium text-sm text-ink">{s.season} — {s.title}</p><p className="text-[0.65rem] font-medium text-teal">{s.best}</p></div></div>
                  <p className="text-xs text-muted font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* HOW TO REACH */}
          <section id="howtoreach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚗 Getting to Coorg</h2>
            <div className="space-y-3">
              {[
                { icon: "🚗", title: "Drive from Bangalore (recommended)", desc: "265km via NH275 → Mysuru → Kushalnagar → Madikeri. 5–6hrs depending on traffic. Leave Bangalore by 5–6am Friday to beat traffic. Beautiful drive from Kushalnagar onwards — Western Ghats, coffee estates, river crossings. Cab from Bangalore Rs.3,500–Rs.5,000 one way.", badge: "Most convenient", color: "bg-green-50 border-green-200" },
                { icon: "🚌", title: "KSRTC Bus from Bangalore", desc: "Bangalore Majestic → Madikeri: 6–7hrs, Rs.300–Rs.600. Multiple departures including overnight. Most budget-friendly option. From Madikeri, hire an auto or taxi for estate visits.", badge: "Best value", color: "bg-amber-50 border-amber-200" },
                { icon: "🚌", title: "From Mysuru", desc: "Mysuru → Madikeri: 120km, 2.5–3hrs. If combining Coorg with a Mysuru trip, this is the natural route. Buses every 30 minutes from Mysuru bus stand (Rs.100–Rs.150).", badge: "Great combo", color: "bg-parchment border-parchment-2" },
                { icon: "✈️", title: "Nearest Airport", desc: "Mangalore Airport (MNG) is 160km from Madikeri (3hrs). Mysuru has a limited domestic airport. Most people drive from Bangalore — it's more practical than flying.", badge: "Not ideal", color: "bg-parchment border-parchment-2" },
              ].map((t) => (
                <div key={t.title} className={`rounded-xl p-4 border ${t.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{t.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <p className="font-semibold text-sm text-ink">{t.title}</p>
                        <span className="text-[0.62rem] bg-white/70 text-muted px-2.5 py-1 rounded-full border border-white/50">{t.badge}</span>
                      </div>
                      <p className="text-xs text-muted font-light leading-relaxed">{t.desc}</p>
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
                  <div><p className="text-sm font-medium text-amber-800">Budget Plan — Rs.4,000–Rs.8,000 per person for 3 days</p><p className="text-xs text-amber-600 font-light">KSRTC bus · Budget homestay · Local food</p></div>
                </div>
                <DayCard day="Day 1" title="Arrive + Madikeri + Raja's Seat"
                  items={[
                    "Take overnight KSRTC bus from Bangalore (Rs.350–Rs.500), arrive Madikeri early morning. Check in to a budget homestay near Madikeri (Rs.600–Rs.1,200/night) — try Coorg Cliffs Homestay or similar family-run places.",
                    "Raja's Seat (King's Seat) — a garden on a hilltop at the edge of Madikeri with panoramic views of the valley. Best at sunrise (6am) and sunset. Entry Rs.20. The morning mist rolling over the hills is Coorg at its most cinematic.",
                    "Madikeri Fort (15th century, free entry) and the old Omkareshwara Temple inside. The fort has a small museum and good views over the town.",
                    "Evening: eat at the local restaurants near the bus stand — pork curry (Coorg specialty) and akki roti (rice flatbread) Rs.80–Rs.150. Kodava pork curry is one of the best dishes in Karnataka.",
                  ]} cost="Rs.800–Rs.1,500" />
                <DayCard day="Day 2" title="Abbey Falls + Dubare Elephant Camp"
                  items={[
                    "6am: Abbey Falls — hire an auto from Madikeri (Rs.200–Rs.300 return, 8km). Arrive before 7am — the falls are empty, the light is green-gold through the coffee trees, and you have the viewing platform alone. By 9am tour buses arrive.",
                    "Abbey Falls is a 70-foot waterfall surrounded by coffee and spice plantations. The 10-minute walk from the parking to the falls passes through a working coffee estate — smell the coffee blossoms or ripening berries.",
                    "Dubare Elephant Camp (48km from Madikeri, Rs.200–Rs.300 by share auto/local bus): arrive by 9–10am for the elephant bathing session (Rs.150 entry). You can interact with, feed and bathe the elephants. One of Karnataka's best wildlife experiences.",
                    "Return to Madikeri. Evening: walk through Madikeri market and buy Coorg coffee directly from estate shops — significantly cheaper than Bangalore.",
                  ]} cost="Rs.500–Rs.1,000" />
                <DayCard day="Day 3" title="Namdroling Monastery + Depart"
                  items={[
                    "Namdroling Monastery at Bylakuppe (70km from Madikeri) — the largest Nyingmapa teaching centre outside Tibet. The Golden Temple complex has three towering gilded Buddha statues 20 feet high. Entry free. The largest Tibetan settlement in India.",
                    "Morning prayers at 7am are open to visitors — the chanting, incense and butter lamps in the ornate temple are deeply moving — even non-Buddhists sit there quietly for a while. Eat Tibetan breakfast (thukpa, momos) at the settlement restaurants Rs.60–Rs.120.",
                    "Return Madikeri and take afternoon bus to Bangalore. Buy cardamom, coffee and pepper at the Madikeri estate shops before leaving.",
                  ]} cost="Rs.400–Rs.800" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center mt-2">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Budget · </span>
                  <span className="font-serif text-base text-ink font-light">Rs.4,000–Rs.8,000 per person including bus from Bangalore</span>
                </div>
              </div>
            )}

            {/* PLAN B — COUPLE */}
            {activeTab === "B" && (
              <div>
                <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 rounded-xl mb-6">
                  <span className="text-2xl">💑</span>
                  <div><p className="text-sm font-medium text-rose-800">Couple Plan — Rs.12,000–Rs.22,000 for two</p><p className="text-xs text-rose-600 font-light">Coffee estate stay · Private cab · Romantic mist mornings</p></div>
                </div>
                <DayCard day="Day 1" title="Drive + Coffee Estate Check-in"
                  items={[
                    "Leave Bangalore by 5:30am to beat city traffic. Stop at Kamat Upachar on NH275 for South Indian breakfast (Rs.150–Rs.250 for two). Arrive Coorg by 11am.",
                    "Check in to a coffee estate homestay — Misty Woods, Rainforest Retreat or Coorg Wilderness Resort (Rs.4,000–Rs.8,000/night for two including meals, as of early 2026). These aren't just hotels — you're staying on a working 50-acre estate. I woke up at 6am to mist rolling through the coffee rows outside my window and the smell of fresh filter coffee drifting up from the kitchen. That moment alone was worth the trip.",
                    "Afternoon: estate walk with your host. Most Coorg estates offer a free guided walk where you learn about coffee processing — from cherry to cup. You'll see coffee, pepper, cardamom, orange and vanilla all on the same estate.",
                    "Sunset at Raja's Seat. Then back to the estate for a Kodava dinner — pork curry, bamboo shoot curry, kadambuttu (rice dumplings). The food on a good estate is better than any restaurant in Coorg.",
                  ]} cost="Rs.5,000–Rs.9,000 for two" />
                <DayCard day="Day 2" title="Abbey Falls + Elephant Camp + Iruppu"
                  items={[
                    "5:30am: Abbey Falls at dawn. Private cab from estate (Rs.400–Rs.600 return). The mist hanging over the coffee trees at sunrise is your best Coorg photo. Abbey Falls is genuinely underwhelming in dry season (Jan–Apr) though — go during or just after monsoon for the full experience, or skip it and spend the morning on the estate instead.",
                    "Dubare Elephant Camp — book the elephant ride (Rs.400–Rs.600/person) in addition to the bathing session. The River Cauvery flows beside the camp — beautiful picnic spot.",
                    "Optional: Iruppu Falls (75km from Madikeri, 2hrs) — a sacred waterfall in the Brahmagiri forest. Less crowded than Abbey Falls, equally beautiful. The walk to the falls is through dense forest.",
                    "Evening: campfire at your estate (most good estates offer this). Coorg nights are cool and quiet — the coffee and spice fragrance is strongest at night.",
                  ]} cost="Rs.4,000–Rs.7,000 for two" />
                <DayCard day="Day 3" title="Namdroling + Spice Walk + Depart"
                  items={[
                    "Namdroling Monastery, Bylakuppe — 7am morning prayers, Golden Temple, Tibetan breakfast.",
                    "On the way back: stop at Valnoor Estate or Coorg Cardamom County for a spice tour (Rs.200–Rs.300/person). You walk through working cardamom, pepper, coffee, nutmeg and vanilla plantations — the smells layer on top of each other in a way that's hard to describe.",
                    "Buy Coorg coffee (whole bean), cardamom (whole pods), black pepper and Coorg honey from the estate shop. These make excellent gifts and cost 40–60% less than Bangalore (as of early 2026).",
                    "Depart by 2pm — arrive Bangalore by 8–9pm.",
                  ]} cost="Rs.3,000–Rs.5,000 for two" />
                <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-center mt-2">
                  <span className="text-xs text-rose-700 uppercase tracking-wide">Total 3-Day Couple Cost · </span>
                  <span className="font-serif text-base text-ink font-light">Rs.12,000–Rs.22,000 for two including cab from Bangalore</span>
                </div>
              </div>
            )}

            {/* PLAN C — GROUP */}
            {activeTab === "C" && (
              <div>
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">🎉</span>
                  <div><p className="text-sm font-medium text-purple-800">Group Plan (4–8 people) — Rs.5,000–Rs.10,000 per person</p><p className="text-xs text-purple-600 font-light">Rented Innova · Estate bungalow · River camping option</p></div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-6">
                  <p className="font-medium text-sm text-purple-800 mb-2">Why Coorg is perfect for groups</p>
                  <ul className="space-y-1.5">{[
                    "Rent an Innova (Rs.5,000–Rs.6,000/day from Bangalore) — split 6 ways = Rs.800–Rs.1,000/person/day, much cheaper than bus for groups",
                    "Book a whole estate bungalow — sleeps 8–12, Rs.8,000–Rs.15,000/night for the whole property = Rs.1,000–Rs.2,000/person",
                    "River camping on the Cauvery near Dubare — several operators (Rs.1,500–Rs.2,500/person) offer overnight camping with bonfire, rafting and elephant interaction",
                    "Coorg local liquor (Coorg wine, honey wine, coffee liqueur) is surprisingly good and cheap — buy at estate shops",
                  ].map((tip, i) => <li key={i} className="text-xs text-purple-700 font-light flex items-start gap-2"><span className="text-purple-400 mt-0.5">✓</span>{tip}</li>)}</ul>
                </div>
                <DayCard day="Day 1" title="Drive + Estate + Local Exploration"
                  items={[
                    "Leave Bangalore 5am in rented Innova. Breakfast stop at Kamat on the highway. Arrive Coorg 10–11am.",
                    "Check in to an estate bungalow — Coorginverness Estate, Amanvana or similar with private pool and outdoor area (Rs.10,000–Rs.18,000/night for the bungalow).",
                    "Afternoon: split up — some do estate walk, some do Madikeri Fort and Raja's Seat.",
                    "Evening: group cooking session with the estate cook — learn to make Kodava pork curry and kadambuttu. Most good estates offer this.",
                  ]} cost="Rs.2,000–Rs.4,000/person" />
                <DayCard day="Day 2" title="River Camping / Rafting + Abbey Falls"
                  items={[
                    "Option 1 (adventure group): Cauvery River camping near Dubare — rafting, elephant bathing, campfire, overnight tents on the riverside. Rs.1,800–Rs.2,500/person all inclusive.",
                    "Option 2 (non-camping): Abbey Falls early morning + Dubare Elephant Camp day trip + return to estate.",
                    "Either way: bonfire at night, local Coorg wine/liqueur, card games. The estate at night with cricket sounds and coffee fragrance is one of India's best evening settings.",
                  ]} cost="Rs.2,000–Rs.4,000/person" />
                <DayCard day="Day 3" title="Namdroling + Spice Shopping + Depart"
                  items={[
                    "Namdroling Monastery morning. Tibetan breakfast as a group.",
                    "Group spice shopping at Madikeri market — negotiate bulk prices for coffee, cardamom, pepper, honey.",
                    "Return Bangalore by evening.",
                  ]} cost="Rs.800–Rs.1,500/person" />
              </div>
            )}

            {/* PLAN D — FAMILY */}
            {activeTab === "D" && (
              <div>
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                  <span className="text-2xl">👨‍👩‍👧</span>
                  <div><p className="text-sm font-medium text-blue-800">Family Plan — Rs.8,000–Rs.15,000 for four</p><p className="text-xs text-blue-600 font-light">Child-friendly estates · Elephants · Easy waterfalls</p></div>
                </div>
                <DayCard day="Day 1" title="Arrive + Estate + Raja's Seat"
                  items={[
                    "Drive from Bangalore. Choose a family-friendly estate with a pool and children's activities — Tamara Coorg or Evolve Back have excellent family facilities (Rs.8,000–Rs.15,000/night).",
                    "Raja's Seat at sunset — children love the viewpoint and the toy train ride in the garden (Rs.20/child).",
                    "Estate nature walk with children — spotting birds, butterflies, and coffee/pepper plants. Most estates have guides who tailor this for children.",
                  ]} cost="Rs.9,000–Rs.16,000 for family" />
                <DayCard day="Day 2" title="Dubare Elephant Camp (Children's Highlight)"
                  items={[
                    "Dubare Elephant Camp — the best children's activity in Coorg. Feeding, bathing and interacting with elephants. Children under 5 free, children Rs.75–Rs.150.",
                    "The elephant bathing session (8–10am) is the highlight. Children stand in the shallow river with the mahouts and wash the elephants.",
                    "Abbey Falls — the 10-minute walk is manageable for children 4+. The waterfall is impressive even in dry season.",
                    "Estate pool afternoon — most good estates have heated pools. Children need this after a morning of activity.",
                  ]} cost="Rs.4,000–Rs.7,000 for family" />
                <DayCard day="Day 3" title="Namdroling + Estate Coffee Tour + Depart"
                  items={[
                    "Namdroling Monastery — children are usually fascinated by the giant golden Buddhas. The monastery is calm and peaceful.",
                    "Coffee estate tour — children love seeing how coffee grows and understanding the farm-to-cup process. Buy coffee to take home.",
                    "Depart Coorg. Stop at Kamat for lunch on the highway.",
                  ]} cost="Rs.2,000–Rs.4,000 for family" />
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center mt-2">
                  <span className="text-xs text-blue-700 uppercase tracking-wide">Total 3-Day Family Cost · </span>
                  <span className="font-serif text-base text-ink font-light">Rs.8,000–Rs.15,000 for four excluding accommodation</span>
                </div>
              </div>
            )}
          </section>

          {/* ESTATE STAYS */}
          <section id="stays" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🏡 Coffee Estate Stays — The Secret of Coorg</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">Staying on a working coffee estate is what separates a great Coorg trip from a mediocre one. You wake up to coffee fragrance, walk through your own plantation, and eat food grown on the property. What most blogs won't tell you: the estates listed on Booking.com and MakeMyTrip charge a 20-30% platform markup — call the estate directly (numbers are on Google Maps) and you'll get a better rate and sometimes a room upgrade.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { name: "Budget estates", range: "Rs.1,500–Rs.3,000/night", desc: "Family-run homestays on small working estates. Basic but genuine — you eat with the family, walk the estate, drink their coffee. Look for properties in Siddapur, Somwarpet or Virajpet areas. Book on booking.com or directly.", color: "bg-amber-50 border-amber-200" },
                { name: "Mid-range estates", range: "Rs.3,000–Rs.7,000/night", desc: "Well-maintained estate bungalows with good food and guided walks. Misty Woods, Rainforest Retreat, The Tamara (budget end). Usually include breakfast and estate tour. Best value in Coorg.", color: "bg-green-50 border-green-200" },
                { name: "Premium estates", range: "Rs.7,000–Rs.20,000/night", desc: "Luxury estate resorts with pool, spa and multiple dining options. Amanvana Resort, Evolve Back Kuruba Safari Lodge, The Tamara. If budget allows, genuinely worth the splurge.", color: "bg-blue-50 border-blue-200" },
                { name: "What to ask before booking", range: "Important", desc: "Is it a working estate or just an estate-themed hotel? Can I do a guided walk? Are meals included? Is the estate organic? Can I buy coffee/spices to take home? A genuine working estate matters more than star rating.", color: "bg-parchment border-parchment-2" },
              ].map((item) => (
                <div key={item.name} className={`rounded-xl p-4 border ${item.color}`}>
                  <div className="flex items-center justify-between mb-2"><p className="font-medium text-sm text-ink">{item.name}</p><span className="text-[0.65rem] text-green-700 font-medium">{item.range}</span></div>
                  <p className="text-xs text-muted font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* WHAT TO BUY */}
          <section id="buy" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🛒 What to Buy in Coorg</h2>
            <p className="text-sm text-muted font-light mb-6">Everything is 40–60% cheaper than Bangalore. Buy at estate shops or Madikeri market — not at tourist shops on Abbey Falls road.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { item: "Coorg Coffee", price: "Rs.200–Rs.500 / 250g", desc: "Whole bean (ask for 'peaberry' — the small round beans considered premium) or ground. Shade-grown, low acidity. Buy directly from the estate where you stay.", icon: "☕" },
                { item: "Cardamom", price: "Rs.300–Rs.600 / 100g", desc: "Green cardamom grown in the coffee estate understorey. Far more fragrant than supermarket cardamom. Buy whole pods, not powdered.", icon: "🌿" },
                { item: "Black Pepper", price: "Rs.150–Rs.300 / 100g", desc: "Coorg pepper is grown on pepper vines climbing the coffee shade trees. Whole peppercorns only — ground pepper loses fragrance within weeks.", icon: "⚫" },
                { item: "Coorg Honey", price: "Rs.200–Rs.400 / 500g", desc: "Wild forest honey from the Brahmagiri hills. Dark, thick and intensely flavoured. Different from any honey you've tried — the bees feed on coffee blossoms.", icon: "🍯" },
                { item: "Coorg Wine", price: "Rs.150–Rs.400 / bottle", desc: "Made from local plum, orange and grape. Not exceptional wine but a unique Coorg product. The plum wine is the best. Available at estate shops and the Madikeri wine shop.", icon: "🍷" },
                { item: "Kodava Pickle", price: "Rs.100–Rs.200 / jar", desc: "Bamboo shoot pickle (kachampuli) and pork pickle are Coorg specialties. Extraordinary with rice. Buy from the estate kitchen or Madikeri market.", icon: "🫙" },
              ].map((item) => (
                <div key={item.item} className="bg-white rounded-xl border border-parchment-2 p-4 hover:border-green-300 transition-colors">
                  <div className="flex items-center justify-between mb-1"><div className="flex items-center gap-2"><span className="text-xl">{item.icon}</span><p className="font-medium text-sm text-ink">{item.item}</p></div><span className="text-[0.65rem] text-green-700 font-medium">{item.price}</span></div>
                  <p className="text-xs text-muted font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
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
                  <th className="p-3.5 text-xs font-medium text-blue-700 text-center">👨‍👩‍👧 Family</th>
                </tr></thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🚗 Transport (Bangalore return)", "₹700–₹1,200", "₹2,500–₹4,000", "₹1,500–₹2,500", "₹2,500–₹4,000"],
                    ["🏨 Accommodation (2N)", "₹1,200–₹2,400", "₹8,000–₹16,000", "₹2,000–₹4,000", "₹7,000–₹14,000"],
                    ["🍽 Food", "₹800–₹1,500", "₹2,000–₹3,500", "₹1,500–₹2,500", "₹2,500–₹4,000"],
                    ["🎯 Activities", "₹500–₹1,000", "₹1,500–₹3,000", "₹2,000–₹4,000", "₹1,500–₹3,000"],
                    ["🛒 Shopping", "₹500–₹1,000", "₹1,000–₹2,000", "₹1,000–₹2,000", "₹1,000–₹2,000"],
                    ["TOTAL per person", "₹4,000–₹8,000", "₹6,000–₹11,000", "₹5,000–₹8,000", "₹3,500–₹6,750"],
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
            destination="Coorg Madikeri Karnataka"
            hotels={[
              { name: "Amanvana Spa Resort", type: "Luxury Estate · Coorg", price: "From ₹10,000/night", rating: "5", badge: "Most luxurious", url: "https://www.booking.com/hotel/in/amanvana-spa-resort.html?aid=YOUR_AFFILIATE_ID" },
              { name: "Rainforest Retreat", type: "Eco Estate · Coorg", price: "From ₹5,500/night", rating: "4", badge: "Best eco stay", url: "https://www.booking.com/hotel/in/rainforest-retreat-coorg.html?aid=YOUR_AFFILIATE_ID" },
              { name: "Misty Woods", type: "Coffee Estate · Madikeri", price: "From ₹4,000/night", rating: "4", badge: "Best value", url: "https://www.booking.com/hotel/in/misty-woods-coorg.html?aid=YOUR_AFFILIATE_ID" },
              { name: "The Tamara Coorg", type: "Resort · Coorg", price: "From ₹7,000/night", rating: "5", badge: "Pool + views", url: "https://www.booking.com/hotel/in/the-tamara-coorg.html?aid=YOUR_AFFILIATE_ID" },
            ]}
            activities={[
              { name: "Dubare Elephant Camp + River Rafting", duration: "Full day", price: "From ₹1,500/person", badge: "Must do", url: `https://www.getyourguide.com/coorg-l3009/?partner_id=PSZA5UI` },
              { name: "Coorg Coffee Estate Tour",             duration: "2 hours",  price: "From ₹500/person", badge: "Unique",   url: `https://www.getyourguide.com/coorg-l3009/?partner_id=PSZA5UI` },
              { name: "Coorg Trekking — Brahmagiri Hills",   duration: "Full day", price: "From ₹800/person",  url: `https://www.getyourguide.com/coorg-l3009/?partner_id=PSZA5UI` },
              { name: "Cauvery River Camping — Coorg",       duration: "Overnight",price: "From ₹2,000/person",url: `https://www.getyourguide.com/coorg-l3009/?partner_id=PSZA5UI` },
            ]}
          />

          <DestinationGallery
            title="Coorg — Must-See Places"
            subtitle="The Scotland of India — click to explore."
            spots={[
              { name: "Abbey Falls", query: "abbey falls coorg karnataka waterfall coffee plantation green", desc: "70-foot waterfall surrounded by coffee and spice plantations. Visit at 6am for empty trails and golden light." },
              { name: "Coffee Estate", query: "coorg coffee plantation estate karnataka misty hills green", desc: "Working coffee estates where you can stay, walk the rows and watch the harvest. India's finest arabica coffee." },
              { name: "Dubare Elephant Camp", query: "dubare elephant camp coorg cauvery river karnataka", desc: "Bathe and feed Asian elephants on the banks of the Cauvery River. Coorg's best wildlife experience." },
              { name: "Raja's Seat", query: "raja seat madikeri coorg viewpoint mist valley karnataka", desc: "The King's Seat — a hilltop garden with panoramic valley views. Best at sunrise when mist rolls through." },
              { name: "Namdroling Monastery", query: "namdroling monastery bylakuppe golden temple tibet karnataka", desc: "The largest Nyingmapa teaching centre outside Tibet — three 20-foot gilded Buddhas in an ornate temple." },
            ]}
          />

          {/* MISTAKES */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { icon: "🏨", title: "Staying in Madikeri town instead of an estate", desc: "Madikeri hotels are cheaper but you miss the entire point of Coorg — the estates, the coffee fragrance, the mist, the farm-to-table food. Spend at least one night on a working estate even if budget.", color: "bg-white border-parchment-2" },
                { icon: "⏰", title: "Arriving at Abbey Falls after 9am", desc: "Abbey Falls gets packed with tour buses by 10am. The trail gets crowded, the parking jammed, and the falls viewing platform has 50 people on it. Go at 6am — completely different experience.", color: "bg-white border-parchment-2" },
                { icon: "🌧️", title: "Visiting July–September", desc: "Coorg receives enormous rainfall in monsoon — up to 3,000mm. Leeches on every trail, many roads waterlogged, estates closed for renovations. Most tourists don't know this until they arrive.", color: "bg-white border-parchment-2" },
                { icon: "🛍️", title: "Buying spices from roadside tourist shops", desc: "The spice shops on Abbey Falls road and near major tourist spots charge 2–3x estate prices. Buy directly from estate shops or the Madikeri APMC market for authentic quality at fair prices.", color: "bg-white border-parchment-2" },
                { icon: "🐘", title: "Skipping Dubare for Cauvery Nisargadhama", desc: "Nisargadhama is a popular bamboo island nearby but very crowded. Dubare Elephant Camp (15km further) is far superior — actual elephant interaction, river setting, less tourist-trap feeling. Don't substitute.", color: "bg-white border-parchment-2" },
              ].map((m) => (
                <div key={m.title} className={`rounded-xl p-4 border ${m.color}`}>
                  <div className="flex items-start gap-3"><span className="text-xl flex-shrink-0">{m.icon}</span><div><p className="font-medium text-sm text-ink mb-1">❌ {m.title}</p><p className="text-xs text-muted font-light leading-relaxed">{m.desc}</p></div></div>
                </div>
              ))}
            </div>
          </section>

          {/* PRO TIPS */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "☕", title: "Drink coffee at the source", desc: "Ask your estate host for a farm-to-cup demonstration — cherry picked from the tree, processed, roasted and brewed. The coffee you drink at 7am on a misty Coorg morning is a different substance from what you get at Starbucks.", color: "bg-green-50 border-green-200" },
                { icon: "🦅", title: "Brahmagiri Wildlife Sanctuary trek", desc: "The 6km trek to Brahmagiri Peak (1,608m) starts at Iruppu Falls. Excellent birding — Malabar pied hornbill, Nilgiri flycatcher, Malabar trogon. Start by 6am. Guide Rs.300–Rs.500 (mandatory).", color: "bg-blue-50 border-blue-200" },
                { icon: "🍖", title: "Eat Kodava pork curry — mandatory", desc: "The Kodava community is one of the few Hindu communities that traditionally eats pork. Kodava pandi curry (pork in kachampuli — a local vinegar) is hands-down one of the best things I've eaten in South India. Eat at a homestay kitchen, not a restaurant.", color: "bg-amber-50 border-amber-200" },
                { icon: "🌅", title: "Mandalpatti viewpoint at sunrise", desc: "27km from Madikeri. A hilltop above the clouds — Coorg's most dramatic viewpoint. A 4WD jeep is needed for the last 4km (Rs.300–Rs.400/jeep). Go at 5:30am for the sunrise above the cloud cover.", color: "bg-rose-50 border-rose-200" },
                { icon: "🧗", title: "Tadiyandamol — highest peak in Coorg", desc: "1,748m, a 3-hour trek from Kakkabe village (50km from Madikeri). The summit views over the Western Ghats stretch on forever. No guide needed but go early. Best October–March.", color: "bg-purple-50 border-purple-200" },
                { icon: "📡", title: "Mobile network: Airtel works everywhere", desc: "Jio has patchy coverage in the estate areas. Airtel is consistent throughout Coorg including remote estates. BSNL is fine in Madikeri town. Download offline maps before entering the estates.", color: "bg-teal-50 border-teal-200" },
              ].map((t) => (
                <div key={t.title} className={`rounded-xl p-4 border ${t.color}`}>
                  <div className="flex items-start gap-3"><span className="text-xl flex-shrink-0">{t.icon}</span><div><p className="font-medium text-sm text-ink mb-1">{t.title}</p><p className="text-xs text-muted font-light leading-relaxed">{t.desc}</p></div></div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want Your Coorg Trip Planned?</h2>
            <p className="text-sm text-white/55 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">Tell us your dates, group size and which estate type interests you — we&apos;ll send a personalised Coorg plan in 24 hours. Free.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Coorg Trip →</button>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:border-gold transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "How far is Coorg from Bangalore?", a: "265km via NH275 through Mysuru — 5–6 hours by road. Leave by 5–6am to beat Bangalore traffic. KSRTC buses take 6–7 hours from Majestic (Rs.300–Rs.600)." },
                { q: "What is the best time to visit Coorg?", a: "October to March. October–January is coffee harvest season — the best time. Avoid July–September (heavy monsoon, leeches, flooded roads)." },
                { q: "Is Coorg good for a 2-day trip?", a: "Yes — leave Friday night or early Saturday, do Abbey Falls + Dubare + estate stay, Sunday Namdroling + depart. 3 days is better and adds more depth." },
                { q: "What should I buy in Coorg?", a: "Coorg coffee (whole bean), green cardamom, black pepper, Coorg honey. Buy from estate shops or Madikeri market — 40–60% cheaper than Bangalore." },
                { q: "Is Coorg safe for solo female travellers?", a: "Yes — Coorg is one of Karnataka's safest destinations. The Kodava community is known for its progressive culture (women have historically had significant rights and status). Estate stays are particularly safe as you're with a host family." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          <Comments />

          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More South India Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kerala 5 Days — Backwaters + Hills", href: "/blog/kerala-5-days" },
                { label: "Goa 3 Days — Complete Guide", href: "/blog/goa-3-days" },
                { label: "Andaman 5 Days — Asia's Best Beach", href: "/blog/andaman-5-days" },
                { label: "Golden Triangle 7 Days", href: "/blog/golden-triangle-7-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">Read →</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="coorg-3-days" />
        </div>
      </main>
      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
