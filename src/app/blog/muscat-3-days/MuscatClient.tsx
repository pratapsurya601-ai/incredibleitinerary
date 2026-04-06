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

const MUSCAT_TOC = [
  { id: "plans",       emoji: "\u26A1", label: "Which Plan Are You?" },
  { id: "practical",   emoji: "\u2727", label: "Practical Info" },
  { id: "itineraries", emoji: "\u2727", label: "The Itineraries" },
  { id: "budget",      emoji: "\u2727", label: "Budget Breakdown" },
  { id: "mistakes",    emoji: "\u274C", label: "Mistakes to Avoid" },
  { id: "tips",        emoji: "\u2727", label: "Pro Tips" },
  { id: "faq",         emoji: "\u2753", label: "FAQ" },
];

function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => { const el = document.documentElement; setProgress(Math.min(100, (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100)); };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (<div className="fixed top-0 left-0 right-0 z-[300] h-1 bg-parchment-2"><div className="h-full bg-gold transition-all duration-100" style={{ width: `${progress}%` }} /></div>);
}

function ShareBar() {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      {[
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Muscat 3-Day Itinerary&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://twitter.com/intent/tweet?text=Muscat in 3 Days guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
      ].map((s) => (<a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}>{s.label}</a>))}
      <button onClick={copy} className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">{copied ? "\u2713 Copied" : "Copy Link"}</button>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (<div className="bg-white rounded-xl border border-parchment-2 p-4 text-center"><div className="text-2xl mb-1">{icon}</div><p className="font-serif text-lg font-light text-ink">{value}</p><p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{label}</p></div>);
}

function DayCard({ day, title, items, cost }: { day: string; title: string; items: string[]; cost: string }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 bg-parchment hover:bg-parchment-2 transition-colors">
        <div className="flex items-center gap-3 text-left"><span className="font-serif text-xl text-amber-900 font-light">{day}</span><span className="text-sm text-ink font-medium">{title}</span></div>
        <span className="text-muted text-lg">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (<div className="p-5"><ul className="space-y-2.5 mb-4">{items.map((item, i) => (<li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed"><span className="text-amber-800 mt-1 flex-shrink-0 text-xs">{"\u25CF"}</span>{item}</li>))}</ul><div className="pt-3 border-t border-parchment-2 flex items-center gap-2"><span className="text-lg">{"\uD83D\uDCB0"}</span><span className="text-xs text-muted font-light">Est. cost: </span><span className="text-xs font-medium text-ink">{cost}</span></div></div>)}
    </div>
  );
}

function TipCard({ icon, title, desc, color }: { icon: string; title: string; desc: string; color: string }) {
  return (<div className={`rounded-xl p-5 border ${color}`}><div className="flex items-start gap-3"><span className="text-xl flex-shrink-0">{icon}</span><div><p className="font-medium text-sm text-ink mb-1">{title}</p><p className="text-xs text-muted font-light leading-relaxed">{desc}</p></div></div></div>);
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors">
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (<div className="px-5 pb-5 pt-1 border-t border-parchment-2"><p className="text-sm text-muted font-light leading-relaxed">{a}</p></div>)}
    </div>
  );
}

export default function MuscatClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("B");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "OMR 20\u201340/day ($52\u2013$104)", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\u2728", label: "Comfortable", sub: "OMR 40\u201380/day ($104\u2013$208)", color: "border-blue-300 bg-blue-50 text-blue-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MUSCAT_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Muscat" />

      <main className="bg-cream min-h-screen">
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="muscat oman mosque architecture mountains"
            fallback="https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=1600&q=85"
            alt="Muscat Oman mosque with mountain backdrop"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link><span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link><span>/</span>
              <span className="text-white/70">Muscat 3 Days</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">Culture & Coast</span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">{"\u00B7"}</span><span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">{"\u00B7"}</span><span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Muscat in 3 Days: The Only Guide You Need
                <em className="italic text-gold-light"> (Budget to Comfortable, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                2 complete plans with real timings, actual costs in OMR and USD &mdash; the anti-Dubai Middle East experience you didn&apos;t know you needed.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>{"\uD83C\uDDF4\uD83C\uDDF2"} Oman</span><span>{"\u00B7"}</span>
              <span>{"\uD83D\uDDD3"} 3 Days</span><span>{"\u00B7"}</span>
              <span>{"\uD83D\uDCB0"} From OMR 60</span>
            </div>
          </div>

          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Muscat is the anti-Dubai &mdash; no glass towers, no artificial islands, just mountain-backed coastline and an Arabian hospitality that makes you feel genuinely welcomed. This is the Middle East before the mega-malls.
            </p>
          </blockquote>

          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\u26A1"} Which Plan Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your budget level.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itineraries")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-ink">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} {"\u2192"}</p>
                </button>
              ))}
            </div>
          </section>

          <section id="practical" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\u2727"} Before You Go</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">Essential info for Oman.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "Visa Requirements", emoji: "\uD83D\uDCC4", bg: "bg-blue-50 border-blue-200", th: "text-blue-800",
                  rows: [["Indian passport","Oman e-visa required \u2014 apply online at evisa.rop.gov.om, OMR 20 ($52), 1\u20133 working days"],["US / UK / EU / AU","Visa-on-arrival, OMR 20, 30 days. Passport must be valid 6+ months."],["Important","A UAE visa does NOT cover Oman. You need a separate Oman visa even if coming from Dubai."]],
                  note: "Apply for the e-visa at least 1 week before travel. The website can be slow during peak season." },
                { title: "Getting Around", emoji: "\uD83D\uDE97", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Rental car","Highly recommended. OMR 10\u201320/day ($26\u2013$52). Muscat is spread over 50km along the coast. Driving is easy, roads are excellent."],["Taxi","Metered taxis available. Budget OMR 2\u20135 per ride within Muscat. No Uber \u2014 use OTaxi app."],["Airport","MCT to city centre: taxi OMR 8\u201312, 20 min"],["Fuel","OMR 0.18/litre ($0.47) \u2014 among the cheapest in the world"]],
                  note: "Rent a car if you\u2019re doing wadi day trips. Muscat is too spread out for public transport alone." },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}><span>{area.emoji}</span>{area.title}</h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (<div key={k} className="flex gap-2 text-xs"><span className="font-medium text-ink/60 w-24 flex-shrink-0">{k}</span><span className="text-muted font-light">{v}</span></div>))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">{"\u26A0\uFE0F"} {area.note}</p>
                </div>
              ))}
            </div>
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Currency note:</strong> 1 OMR = ~$2.60 USD = ~217 INR. The Omani rial is one of the strongest currencies in the world. Don&apos;t panic at the numbers &mdash; OMR 5 is a decent meal.
              </p>
            </div>
          </section>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="3 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value="OMR 60" />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Oct \u2013 Mar" />
            <StatCard icon={"\u2708\uFE0F"} label="Airport" value="MCT" />
          </div>

          <section id="itineraries" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\u2727"} The Itineraries</h2>
            <p className="text-sm text-muted font-light mb-6">Click a plan &mdash; days are expandable/collapsible.</p>

            <div className="flex gap-2 flex-wrap mb-8 p-1 bg-parchment rounded-xl">
              {plans.map((p) => (
                <button key={p.id} onClick={() => setActiveTab(p.id)}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 ${activeTab === p.id ? "bg-white shadow text-ink border border-parchment-2" : "text-muted hover:text-ink"}`}>{p.emoji} {p.label}</button>
              ))}
            </div>

            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDCB0"}</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan &mdash; Ruwi / Al Khuwair Base</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Budget hotel &middot; OMR 10&ndash;20/night ($26&ndash;$52) &middot; Rental car recommended</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Sultan Qaboos Mosque + Mutrah Souq + Old Muscat"
                  items={[
                    "8am: Sultan Qaboos Grand Mosque \u2014 free entry, opens 8am\u201311am for non-Muslims (Sat\u2013Thu). Arrive at opening for empty prayer halls.",
                    "The main prayer hall has one of the world\u2019s largest hand-woven carpets (4,263 sqm) and a Swarovski crystal chandelier. Budget 1.5 hours.",
                    "10:30am: Drive to Mutrah (20 min). Walk the Corniche \u2014 the most photogenic waterfront in the Gulf",
                    "11am: Mutrah Souq \u2014 the oldest souq in the Arabian Peninsula. Buy frankincense (OMR 1\u20133), khanjar daggers (OMR 5\u201315), and Omani halwa (OMR 1\u20132)",
                    "1pm: Lunch at Bin Ateeq \u2014 traditional Omani food, OMR 3\u20135 for shuwa or chicken machboos",
                    "3pm: Old Muscat \u2014 Al Alam Palace (exterior only, free), Jalali and Mirani forts from the waterfront",
                    "5:30pm: Sunset from Mutrah Corniche \u2014 the mountains behind the harbour turn pink",
                    "Dinner at a local restaurant in Ruwi \u2014 OMR 2\u20134 for Indian/Pakistani food",
                  ]}
                  cost="OMR 10\u201320 excluding accommodation and car" />
                <DayCard day="Day 2" title="Wadi Shab Day Trip \u2014 The Highlight"
                  items={[
                    "7am: Drive to Wadi Shab (150km, 1.5hrs via the coast road). Start early to beat the heat.",
                    "9am: Boat crossing (OMR 1) then 45-min hike along the wadi. The trail is well-marked but bring water shoes.",
                    "Swim through turquoise pools between canyon walls. The hidden waterfall at the end requires swimming through a narrow cave passage.",
                    "Bring: water shoes, dry bag for phone, 2 litres water, snacks. No facilities inside the wadi.",
                    "1pm: Return to car park. Lunch at Tiwi village \u2014 small local restaurants, OMR 2\u20134",
                    "3pm: Stop at Bimmah Sinkhole on the return \u2014 free, stunning turquoise limestone pool, 15 min stop",
                    "5pm: Back in Muscat. Dinner at Kargeen Cafe \u2014 outdoor Omani restaurant, OMR 4\u20137",
                  ]}
                  cost="OMR 15\u201325 excluding accommodation and car" />
                <DayCard day="Day 3" title="Qurum Beach + Royal Opera House + Departure"
                  items={[
                    "8am: Qurum Beach walk \u2014 long, clean public beach backed by a nature park. Free, quiet in the morning.",
                    "10am: Qurum Natural Park \u2014 free, mangroves and birdwatching. A peaceful contrast to the souqs.",
                    "12pm: Royal Opera House Muscat \u2014 free guided tours at 8:30am and 10am (book online). The architecture is stunning even from outside.",
                    "1pm: Lunch at Turkish House restaurant, Al Khuwair \u2014 OMR 3\u20135",
                    "3pm: Last shopping at Mutrah Souq or modern Muscat Grand Mall",
                    "Airport. MCT is 20 min from most Muscat hotels.",
                  ]}
                  cost="OMR 8\u201315 excluding accommodation and car" />
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-amber-700 uppercase tracking-wide">Total 3-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">OMR 60\u2013120 ($156\u2013$312 USD) including accommodation + rental car</span>
                </div>
              </div>
            )}

            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\u2728"}</span>
                  <div>
                    <p className="text-sm font-medium text-blue-800">Comfortable Plan &mdash; Qurum / Shatti Al Qurum Base</p>
                    <p className="text-xs text-blue-600 font-light">Stay: 4-star hotel &middot; OMR 30&ndash;50/night ($78&ndash;$130) &middot; Rental car</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Grand Mosque + Mutrah + Cultural Dinner"
                  items={[
                    "8am: Sultan Qaboos Grand Mosque \u2014 arrive at opening for near-empty prayer halls. The morning light through stained glass is extraordinary.",
                    "10:30am: Drive to Mutrah Corniche \u2014 coffee at a waterfront cafe with harbour views, OMR 1\u20132",
                    "11am: Mutrah Souq deep exploration \u2014 frankincense, rose water, Omani silver jewelry. Bargaining is expected but gentle.",
                    "1pm: Lunch at Bait Al Luban overlooking Mutrah harbour \u2014 OMR 5\u20138 for traditional Omani with a view",
                    "3pm: Old Muscat \u2014 National Museum (OMR 5, excellent galleries on Omani maritime history), Al Alam Palace grounds",
                    "6pm: Sunset dhow cruise from Marina Bandar Al Rowdha \u2014 OMR 15\u201325 per person including drinks and snacks",
                    "8pm: Dinner at The Restaurant at The Chedi \u2014 OMR 20\u201335 for fine dining in one of the most beautiful hotels in the Middle East",
                  ]}
                  cost="OMR 35\u201360 excluding accommodation" />
                <DayCard day="Day 2" title="Wadi Shab + Coastal Scenery"
                  items={[
                    "7am: Drive to Wadi Shab (1.5hrs). Stop at the coast road viewpoints \u2014 dramatic cliffs meeting turquoise sea.",
                    "9am: Boat crossing and 45-min hike to the swimming pools. The canyon narrows until you\u2019re swimming between walls 50m high.",
                    "Swim to the hidden waterfall through the cave. Bring water shoes and a dry bag \u2014 non-negotiable.",
                    "12:30pm: Return hike. Lunch at Sur (45 min further east) \u2014 visit the dhow-building yard if time allows, OMR 5\u20138 lunch",
                    "Or: Bimmah Sinkhole stop (free, 15 min from Wadi Shab) for a quick swim in the limestone pool",
                    "5pm: Back in Muscat. Sundowner drinks at Crowne Plaza rooftop \u2014 OMR 5\u20138",
                    "8pm: Dinner at Kargeen Cafe \u2014 traditional Omani outdoor restaurant with cushioned seating, OMR 6\u201310",
                  ]}
                  cost="OMR 25\u201345 excluding accommodation" />
                <DayCard day="Day 3" title="Jebel Akhdar Day Trip OR Beach + Culture"
                  items={[
                    "Option A: Jebel Akhdar (Green Mountain, 2hrs drive). Requires a 4x4. Terraced rose gardens, canyon viewpoints, traditional villages at 2,000m altitude.",
                    "Option B (no 4x4): Royal Opera House tour (free, 10am) + Qurum Beach morning + Al Mouj Marina lunch",
                    "12pm: Lunch at Ubhar for elevated Omani cuisine \u2014 OMR 8\u201315",
                    "2pm: Last visit to Mutrah Souq for souvenirs \u2014 frankincense burners (OMR 3\u20138) make the best Oman gift",
                    "4pm: Yiti Beach (30 min from Muscat) \u2014 secluded cove with turquoise water, almost no tourists",
                    "6pm: Head to airport. MCT is well-positioned \u2014 20 min from most hotels.",
                  ]}
                  cost="OMR 25\u201350 excluding accommodation" />
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <span className="text-xs text-blue-700 uppercase tracking-wide">Total 3-Day Cost (solo) &middot; </span>
                  <span className="font-serif text-base text-ink font-light">OMR 150\u2013280 ($390\u2013$728 USD) including accommodation + rental car</span>
                </div>
              </div>
            )}
          </section>

          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment">
                    <th className="text-left p-3.5 text-xs font-medium text-muted">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-700 text-center">{"\uD83D\uDCB0"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-700 text-center">{"\u2728"} Comfortable</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (3N)", "OMR 30\u201360", "OMR 90\u2013150"],
                    ["\uD83C\uDF7D Food & Drinks", "OMR 12\u201325", "OMR 30\u201360"],
                    ["\uD83D\uDE97 Car Rental + Fuel", "OMR 10\u201320", "OMR 15\u201325"],
                    ["\uD83C\uDFAF Activities", "OMR 5\u201315", "OMR 20\u201345"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person)</td>
                    {["OMR 60\u2013120\n($156\u2013$312)","OMR 150\u2013280\n($390\u2013$728)"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center whitespace-pre-line">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">All prices in OMR (2026). 1 OMR = ~$2.60 USD = ~217 INR.</p>
          </section>

          <DestinationGallery
            title="Muscat \u2014 Must-See Places"
            subtitle="Click each thumbnail to explore Muscat's most stunning landscapes and heritage sites."
            spots={[
              { name: "Sultan Qaboos Grand Mosque", query: "sultan qaboos grand mosque muscat oman interior dome architecture",  desc: "One of the world's largest mosques with a 4,263 sqm hand-woven carpet. Free entry, morning only for non-Muslims." },
              { name: "Mutrah Souq",                query: "mutrah souq muscat oman traditional market spices architecture",     desc: "The oldest souq in the Arabian Peninsula. Frankincense, silver, and Omani halwa in a labyrinth of covered alleyways." },
              { name: "Wadi Shab",                  query: "wadi shab oman turquoise water canyon swimming rocks nature",        desc: "Turquoise pools between towering canyon walls. The hidden waterfall at the end requires swimming through a cave." },
              { name: "Mutrah Corniche",            query: "mutrah corniche muscat oman harbour waterfront mountains",           desc: "The most beautiful waterfront walk in the Gulf. Mountains behind, harbour ahead, morning light is best." },
              { name: "Bimmah Sinkhole",            query: "bimmah sinkhole oman turquoise limestone pool natural wonder",       desc: "A surreal turquoise limestone pool 15 minutes from Wadi Shab. Free entry, quick swim on your way back." },
            ]}
          />

          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="wadi shab oman turquoise canyon pool hiking nature"
              fallback="https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=900&q=80"
              alt="Wadi Shab turquoise pools in Oman"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Wadi Shab &mdash; turquoise pools between canyon walls. The 45-minute hike is worth every step. Bring water shoes.
              </p>
            </div>
          </div>

          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u274C"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Not renting a car", desc: "Muscat stretches 50km along the coast. Public transport is limited. A rental car costs OMR 10\u201320/day and petrol is almost free.", icon: "\uD83D\uDE97" },
                { title: "Visiting the mosque on Friday", desc: "The Grand Mosque is closed to non-Muslim visitors on Friday. Plan your mosque visit for Saturday\u2013Thursday, 8am\u201311am only.", icon: "\uD83D\uDD4C" },
                { title: "Skipping Wadi Shab", desc: "The most spectacular natural attraction in Oman. Many visitors only do the city. The 3-hour round trip from Muscat is worth it.", icon: "\uD83C\uDFDE\uFE0F" },
                { title: "Assuming Dubai visa covers Oman", desc: "A UAE visa does NOT work in Oman. You need a separate Oman e-visa. Apply at least a week before travel.", icon: "\uD83D\uDCC4" },
                { title: "Only exchanging at the airport", desc: "Airport exchange rates are poor. ATMs throughout the city give better rates. Credit cards accepted at most hotels and restaurants.", icon: "\uD83D\uDCB3" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "\uD83D\uDC4B", title: "Omani Hospitality is Real", desc: "If an Omani invites you for coffee, accept. It\u2019s a genuine cultural gesture, not a sales pitch. You\u2019ll get dates, halwa, and Arabic coffee in tiny cups.", color: "bg-amber-50 border-amber-200" },
                { icon: "\u26F0\uFE0F", title: "Wadi Shab Early Bird", desc: "Arrive by 9am at the latest. The boat crossing starts at 8am. By noon it\u2019s crowded and hot. Bring 2L water, water shoes, and a dry bag.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF39", title: "Frankincense is the Gift", desc: "Oman produces the world\u2019s best frankincense. Buy it at Mutrah Souq (OMR 1\u20133/bag). The resin and a small burner make the perfect souvenir.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDF05", title: "Mutrah Sunset", desc: "The Corniche faces east, so sunsets light up the mountains behind the harbour. Walk from the souq end at 5pm for the best light.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDC57", title: "Dress Code", desc: "More conservative than Dubai. Cover shoulders and knees in public. Swimwear only at beaches and hotel pools. Free abayas at the Grand Mosque.", color: "bg-rose-50 border-rose-200" },
                { icon: "\u26FD", title: "Fuel is Almost Free", desc: "OMR 0.18/litre ($0.47). Fill up whenever you can. A full tank costs OMR 7\u20139 and lasts 500km+ of highway driving.", color: "bg-rose-50 border-rose-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want This Planned for You?</h2>
            <p className="text-sm text-white/55 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">Tell us your dates, group and budget &mdash; we&apos;ll send a personalised Muscat itinerary within 24 hours. Free.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Muscat Trip {"\u2192"}</button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"\u2192"}</a>
            </div>
          </div>

          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\u2753"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days do you need in Muscat?", a: "3 days covers the city, Wadi Shab, and the coastline. 5\u20137 days lets you add Nizwa, Jebel Akhdar, and Wahiba Sands for the full Oman experience." },
                { q: "Is Oman safe for solo travellers?", a: "Extremely safe. Oman is one of the safest countries in the world. Solo female travellers consistently report feeling comfortable and welcomed." },
                { q: "How much does a 3-day Muscat trip cost?", a: "Budget: OMR 60\u2013120 ($156\u2013$312) including everything. Comfortable: OMR 150\u2013280 ($390\u2013$728). Oman is more affordable than most people expect." },
                { q: "Do I need a separate visa for Oman?", a: "Yes. An Oman e-visa (OMR 20) is separate from UAE visas. Indian passport holders must apply online. Western passport holders get visa-on-arrival (OMR 20)." },
                { q: "What is the best time to visit?", a: "October\u2013March for outdoor comfort (22\u201330\u00B0C). November and February are ideal. April\u2013September is 40\u00B0C+ and most wadis dry up." },
                { q: "Can I combine Muscat with Dubai?", a: "Yes. Flights are 1 hour and often under $80. Or drive from Dubai (4.5 hours) through spectacular desert scenery. Many travellers do 4 days Dubai + 3 days Muscat." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          <Comments />

          <AffiliateBlock
            destination="Muscat"
            hotels={[
              { name: "Ibis Muscat", type: "Budget Modern \u00B7 Al Khuwair", price: "From OMR 15/night", rating: "3", badge: "Budget pick", url: "https://www.booking.com/hotel/om/ibis-muscat.html?aid=2820480" },
              { name: "Mysk Al Mouj", type: "Boutique Beach \u00B7 Al Mouj", price: "From OMR 40/night", rating: "4", badge: "Best value", url: "https://www.booking.com/hotel/om/mysk-al-mouj.html?aid=2820480" },
              { name: "The Chedi Muscat", type: "Luxury Resort \u00B7 Ghubrah", price: "From OMR 100/night", rating: "5", badge: "Luxury", url: "https://www.booking.com/hotel/om/the-chedi-muscat.html?aid=2820480" },
            ]}
            activities={[
              { name: "Wadi Shab Guided Hike", duration: "Full day", price: "From OMR 25", badge: "Must do", url: "https://www.getyourguide.com/s/?q=muscat&partner_id=PSZA5UI" },
              { name: "Mutrah Souq Walking Tour", duration: "2 hours", price: "From OMR 10", badge: "Cultural", url: "https://www.getyourguide.com/s/?q=muscat&partner_id=PSZA5UI" },
              { name: "Sunset Dhow Cruise", duration: "2 hours", price: "From OMR 15", url: "https://www.getyourguide.com/s/?q=muscat&partner_id=PSZA5UI" },
              { name: "Jebel Akhdar Day Trip", duration: "Full day", price: "From OMR 35", badge: "Adventure", url: "https://www.getyourguide.com/s/?q=muscat&partner_id=PSZA5UI" },
            ]}
          />

          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Longer Middle East Trip?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Dubai \u2014 4 Day Guide", href: "/blog/dubai-4-days" },
                { label: "Abu Dhabi \u2014 3 Day Guide", href: "/blog/abu-dhabi-3-days" },
                { label: "Browse All Itineraries", href: "/blog" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View {"\u2192"}</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="muscat-3-days" />
          <RelatedGuides currentSlug="muscat-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
