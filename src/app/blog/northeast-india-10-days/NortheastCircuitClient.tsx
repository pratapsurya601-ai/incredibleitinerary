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
import { usePageUrl } from "@/lib/hooks";

const TOC = [
  { id: "honest", emoji: "⚡", label: "What This Circuit Actually Is" },
  { id: "permits", emoji: "📋", label: "Permits (ILP/PAP) Guide" },
  { id: "route", emoji: "🗺️", label: "Route Options" },
  { id: "itinerary", emoji: "📅", label: "10-Day Itinerary" },
  { id: "budget", emoji: "💰", label: "Budget Breakdown" },
  { id: "food", emoji: "🍛", label: "What to Eat" },
  { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
  { id: "faq", emoji: "❓", label: "FAQ" },
];

function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const u = () => { const e = document.documentElement; setP(Math.min(100, (e.scrollTop / (e.scrollHeight - e.clientHeight)) * 100)); };
    window.addEventListener("scroll", u, { passive: true });
    return () => window.removeEventListener("scroll", u);
  }, []);
  return <div className="fixed top-0 left-0 right-0 z-[300] h-1 bg-parchment-2"><div className="h-full bg-gold transition-all duration-100" style={{ width: `${p}%` }} /></div>;
}

function ShareBar() {
  const pageUrl = usePageUrl();
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      <a href={`mailto:?subject=Northeast India 10-Day Guide&body=${pageUrl}`} className="bg-ink text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Email</a>
      <a href={`https://x.com/intent/tweet?text=Northeast%20India%2010-Day%20Circuit&url=${pageUrl}`} target="_blank" rel="noopener noreferrer" className="bg-[#1a6fb5] text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Twitter</a>
      <button onClick={() => { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); }} className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">{copied ? "✓ Copied" : "Copy Link"}</button>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors">
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <div className="px-5 pb-5 pt-1 border-t border-parchment-2"><p className="text-sm text-muted font-light leading-relaxed">{a}</p></div>}
    </div>
  );
}

const hardDays = [
  { day: "Day 1", title: "Guwahati Arrival + Drive to Shillong", items: [
    { time: "Morning", content: "Arrive Guwahati airport (flights from Delhi 2.5hrs, Kolkata 1.5hrs). The airport is well-connected daily. Hire a car for the circuit — ₹3,000–₹4,500/day for an SUV with driver is standard in the Northeast.", tip: "Book your car in advance through your hotel or a local tour operator. An Innova or Scorpio is essential — sedans can't handle Arunachal Pradesh roads." },
    { time: "10am", content: "Drive Guwahati to Shillong — 100km, 3 hours via NH6. Good highway. Stop at Umiam Lake (Barapani) for the view — a massive blue reservoir surrounded by pine hills. Arrive Shillong by 1pm.", tip: null },
    { time: "2pm", content: "Explore Shillong — Police Bazar (the main market), Ward's Lake, Don Bosco Museum (7 floors on Northeast India's tribal cultures — one of the best museums in India, ₹100 entry). Evening at Cafe Shillong for live music — Shillong is India's rock music capital.", tip: null },
  ]},
  { day: "Day 2", title: "Cherrapunji (Sohra) + Living Root Bridges", items: [
    { time: "7am", content: "Drive Shillong to Cherrapunji (Sohra) — 55km, 2 hours. Once the wettest place on earth (Mawsynram nearby now holds the record). The drive down to the Khasi Hills plateau is dramatic — you drop through clouds.", tip: null },
    { time: "9am", content: "Living root bridges — the Umshiang Double Decker Root Bridge near Nongriat requires a 3,500-step trek down (and back up). The trek takes 3–4 hours round trip. The bridge itself is made from the aerial roots of rubber fig trees, trained over 15–30 years to grow across rivers. There is nothing else like this on earth.", tip: "The Nongriat trek is serious — 3,500 steps down, 3,500 back up. Carry water, wear good shoes. Start early to avoid the afternoon heat. Hire a local guide (₹500–₹800) for safety." },
    { time: "1pm", content: "Nohkalikai Falls — India's tallest plunge waterfall (340m). The turquoise pool at the base is extraordinary after monsoon. Then Seven Sisters Falls, Mawsmai Cave (₹20 entry, limestone cave you can walk through).", tip: null },
    { time: "5pm", content: "Return to Shillong or stay in Cherrapunji (limited hotel options). Overnight Shillong.", tip: null },
  ]},
  { day: "Day 3", title: "Shillong → Kaziranga", items: [
    { time: "7am", content: "Drive Shillong to Kaziranga — 330km, 7–8 hours. Long driving day through the hills down to the Brahmaputra plains. The landscape shifts dramatically — from misty Khasi Hills to flat Assamese rice paddies and tea gardens.", tip: "This is the longest single drive on the circuit. Break it with chai stops. The road is mostly good but can have patches of damage." },
    { time: "3pm", content: "Arrive Kaziranga. Check in to a lodge near the Central Range gate. Evening: walk around the tea gardens near your resort. Early dinner — you need to be up at 4:30am for the safari.", tip: null },
  ]},
  { day: "Day 4", title: "Kaziranga — Jeep Safari + Elephant Ride", items: [
    { time: "5am", content: "Elephant safari at the Central Range — the original way to see rhinos. You ride through tall elephant grass where jeeps can't go. Sightings of one-horned rhinos are almost guaranteed (Kaziranga has ~2,600 of the world's 4,000). ₹1,800–₹2,500 per person. Book through your lodge or KNP office.", tip: "Elephant safaris are available November–April only. Book at least 2 days ahead. The 5am slot is best — mist, soft light, rhinos grazing in the open." },
    { time: "8am", content: "Breakfast, then jeep safari (₹3,500–₹5,000 per jeep, seats 4–6). Central Range is the most popular; Western Range has fewer tourists. 2–3 hour safari. You'll see rhinos, wild buffalo, possibly elephants and if extremely lucky, a Bengal tiger (Kaziranga has the highest tiger density of any park in India).", tip: null },
    { time: "1pm", content: "Afternoon rest. Optional: visit the Kaziranga National Orchid & Biodiversity Park (₹100) or the Panbari Reserved Forest for birdwatching (hoolock gibbons possible).", tip: null },
    { time: "3pm", content: "Optional second jeep safari at the Eastern Range — less visited, good for bird species. Or rest and prepare for tomorrow's early departure.", tip: null },
  ]},
  { day: "Day 5", title: "Kaziranga → Jorhat → Majuli", items: [
    { time: "7am", content: "Drive Kaziranga to Jorhat — 100km, 2.5 hours. Then Jorhat to Nimati Ghat — 20km, 30 minutes. Government ferry to Majuli: ₹15–₹20 per person, 1–1.5 hours. Ferries run morning and afternoon (schedules change — check locally). Your car stays on the mainland.", tip: "The Nimati Ghat ferry has limited departures. Aim for the 10–11am ferry. If you miss it, you wait until afternoon. There's also a car-capable ferry but availability is unreliable." },
    { time: "12pm", content: "Arrive Majuli — the world's largest river island, in the Brahmaputra. 420 sq km, population ~170,000. The island is shrinking every year due to erosion — 30% has been lost since the 1900s. This is a disappearing landscape.", tip: null },
    { time: "2pm", content: "Explore Majuli by bike or rented scooter (₹200–₹400/day). Visit the Satras — neo-Vaishnavite monasteries established 500 years ago. Kamalabari Satra and Auniati Satra are the most important. The monks perform traditional Bhaona (one-act plays) and Sattriya dance.", tip: null },
    { time: "5pm", content: "Sunset on the Brahmaputra — the river is so wide here it looks like an inland sea. The silence and scale are extraordinary. Overnight in a bamboo cottage on Majuli.", tip: null },
  ]},
  { day: "Day 6", title: "Majuli → Dibrugarh", items: [
    { time: "8am", content: "Morning in Majuli — visit mask-making workshops (Samaguri Satra is famous for its mask-making tradition), explore village life. The pottery and weaving traditions here are ancient and unbroken.", tip: null },
    { time: "11am", content: "Ferry back to Nimati Ghat. Drive Jorhat to Dibrugarh — 80km, 2 hours. Dibrugarh is Assam's tea capital. Optional: visit a tea estate — Maijan or Jalan tea estates offer tours and tasting (₹200–₹500).", tip: null },
    { time: "4pm", content: "Arrive Dibrugarh. Rest. This is your last comfortable night before the Tawang drive. Stock up on snacks, medicines, warm clothes (Tawang is cold even in autumn). Overnight Dibrugarh.", tip: "If you're taking the alternative route (skip Tawang, add Kohima), drive Dibrugarh to Kohima instead — 350km, 8–9 hours. See the alternative itinerary below." },
  ]},
  { day: "Day 7", title: "Dibrugarh → Tezpur → Bomdila", items: [
    { time: "5am", content: "Early departure. Drive Dibrugarh to Tezpur — 200km, 4 hours. Then Tezpur to Bomdila — 150km, 5–6 hours on winding mountain roads. Total driving: 9–10 hours. This is a hard day — the road from Tezpur to Bomdila climbs from 80m to 2,400m through dense forest.", tip: "ILP checkpoint at Bhalukpong (Arunachal border). Keep your Inner Line Permit ready — they check every vehicle. Indians: apply at arunachalilp.com (₹100 fee, 24–72 hours processing). Foreigners: need Protected Area Permit (PAP) — apply through a registered tour operator." },
    { time: "3pm", content: "Arrive Bomdila (2,400m). Bomdila Monastery — a smaller Tibetan Buddhist monastery with views of the eastern Himalayas. The Apple Orchid restaurant for Arunachali food. Overnight Bomdila — acclimatise to the altitude.", tip: null },
  ]},
  { day: "Day 8", title: "Bomdila → Sela Pass → Tawang", items: [
    { time: "6am", content: "Drive Bomdila to Tawang — 180km, 7–8 hours. The road crosses Sela Pass (4,170m) — one of the highest motorable passes in India. Snow possible October–April. The pass has a sacred lake (Sela Lake) and a war memorial for the soldiers who died in the 1962 India-China war.", tip: "Sela Pass can be blocked by snow. Check road conditions before departure. Carry warm clothes — it's genuinely cold at 4,170m even in October. Altitude sickness is possible — drink water, move slowly." },
    { time: "12pm", content: "Stop at Jaswant Garh War Memorial — honouring Jaswant Singh Rawat who held off a Chinese advance single-handedly during the 1962 war. A powerful and sobering stop.", tip: null },
    { time: "2pm", content: "Arrive Tawang (3,048m). Check in. Rest and acclimatise — the altitude hits after the drive. Light lunch. Walk to the main market for momos and thukpa (Tibetan noodle soup).", tip: null },
    { time: "4pm", content: "Tawang Monastery — the largest monastery in India and the second-largest in the world (after Potala Palace). Founded in 1680 by Mera Lama. The 8-metre-tall gilded Buddha statue, the library of Buddhist manuscripts, and the views of the Tawang valley from the monastery walls are extraordinary.", tip: null },
  ]},
  { day: "Day 9", title: "Tawang Exploration", items: [
    { time: "8am", content: "Tawang War Memorial — India's largest war memorial, commemorating soldiers who died in the 1962 India-China war. The light and sound show (evening) is powerful. Free entry.", tip: null },
    { time: "10am", content: "Urgelling Monastery — the birthplace of the 6th Dalai Lama (1683). A small, intimate monastery. Then the Nuranang Falls (also called Bong Bong Falls or Jang Falls) — a 100m waterfall near Jang, 30km from Tawang.", tip: null },
    { time: "1pm", content: "Bumla Pass day trip (if permits allow and road is open) — 35km from Tawang, at the India-China border (4,633m). Indian and Chinese soldiers meet here on designated days. Requires additional military permit — arrange through your tour operator. Not always accessible.", tip: "Bumla Pass requires a separate permit obtained through the DC office in Tawang. Your hotel or tour operator can arrange this. It takes 1 day to process. Road may be closed in winter." },
    { time: "5pm", content: "Evening at the monastery — the evening prayers with monks chanting is one of the most peaceful experiences in India. Overnight Tawang.", tip: null },
  ]},
  { day: "Day 10", title: "Tawang → Return Journey", items: [
    { time: "6am", content: "Departure. The return is the same route — Tawang → Sela Pass → Bomdila → Tezpur. Total driving: 12–14 hours to Tezpur (or break at Bomdila overnight if you can extend to 11 days). From Tezpur: fly out from Tezpur airport (limited flights) or drive to Guwahati (180km, 3.5 hours).", tip: null },
    { time: "Alternative", content: "If flying out from Guwahati: reach Tezpur by afternoon (7–8 hours from Tawang), then overnight in Tezpur and drive to Guwahati next morning (3.5 hours). Or push through to Guwahati in one long day (14–16 hours from Tawang — extremely tiring but doable).", tip: "Many travellers fly out from Dibrugarh instead of backtracking to Guwahati. In that case, skip the Tawang return entirely and fly Tezpur → Dibrugarh (if flights available) or drive Tezpur → Jorhat → Dibrugarh (5 hours)." },
  ]},
];

export default function NortheastCircuitClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Northeast India" />
      <main id="main-content" className="bg-cream min-h-screen">

        {/* HERO */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage query="living root bridge meghalaya cherrapunji northeast india mist waterfall" fallback="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85" alt="Northeast India mountains mist valley" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link><span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link><span>/</span>
              <span className="text-white/70">Northeast India 10 Days</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-600 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">Offbeat Circuit</span>
                <span className="text-white/60 text-xs">April 8, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">18 min read</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">Northeast India in 10 Days:<em className="italic text-amber-300"> Shillong, Kaziranga, Majuli & Tawang</em></h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">The hardest circuit in India — living root bridges, one-horned rhinos, a shrinking river island and the second-largest Buddhist monastery in the world.</p>
            </div>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted"><span>🏔️ Northeast India</span><span>·</span><span>🗓 10 Days</span><span>·</span><span>💰 From ₹38,000</span></div>
          </div>

          {/* HONEST INTRO */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What This Circuit Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">This is not a leisurely holiday. The Northeast is India&apos;s most logistically challenging region — rough roads, long drives, unreliable infrastructure and mandatory permits for some states. 10 days is tight. You will spend several days mostly in a car. The Tawang leg alone requires two full driving days each way.</p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">But here&apos;s why it&apos;s worth it: the Northeast is India at its most different. Living root bridges grown over decades by Khasi tribes. One-horned rhinos in elephant grass. A river island that&apos;s slowly disappearing into the Brahmaputra. A 17th-century monastery at 3,000m where monks chant at sunrise. Nothing here looks or feels like the rest of India.</p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">Be honest with yourself about what kind of traveller you are. If rough roads, basic accommodation and 10-hour drives sound exhausting rather than adventurous, consider the &quot;soft&quot; alternative route below that skips Tawang.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: "🏔️", val: "4,170 m", label: "Sela Pass altitude" },
                { icon: "🦏", val: "2,600+", label: "Rhinos in Kaziranga" },
                { icon: "🌉", val: "500+", label: "Living root bridges" },
                { icon: "💰", val: "₹38,000+", label: "Budget from" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <p className="font-serif text-lg font-light text-ink">{s.val}</p>
                  <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PERMITS */}
          <section id="permits" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📋 Permits (ILP/PAP) — The Complete Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">Arunachal Pradesh and Nagaland require permits. Meghalaya and Assam do not.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { title: "Arunachal Pradesh — ILP (Indians)", icon: "🇮🇳", content: "Apply online at arunachalilp.com. Fee: ₹100. Processing: 24–72 hours. You need: Aadhaar/voter ID copy, passport-size photo, travel dates and places. The ILP is checked at Bhalukpong checkpoint (entry point from Assam). Carry 2 printed copies." },
                { title: "Arunachal Pradesh — PAP (Foreigners)", icon: "🌏", content: "Foreigners need a Protected Area Permit (PAP). Must apply through a registered Indian tour operator. Processing: 2–4 weeks. Cost varies. Minimum group of 2 required. Solo foreign travellers must hire a guide/tour operator. The PAP specifies exact districts you can visit." },
                { title: "Nagaland — ILP (Indians)", icon: "🇮🇳", content: "Apply online at irlp.nagaland.gov.in or get one on arrival at Dimapur railway station or Kohima checkpost. Fee: ₹50. Usually issued same day. Required for all Indian citizens who are not from Nagaland." },
                { title: "Meghalaya & Assam", icon: "✅", content: "No permits required for Indian citizens or foreigners. Open access. This is why many Northeast itineraries focus on just Meghalaya and Assam — no permit hassle." },
              ].map((item) => (
                <div key={item.title} className="bg-parchment rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center gap-2 mb-2"><span className="text-lg">{item.icon}</span><p className="font-medium text-sm text-stone-900">{item.title}</p></div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ROUTE OPTIONS */}
          <section id="route" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🗺️ Two Route Options</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="font-medium text-sm text-red-900 mb-2">🔴 Hard Route (with Tawang)</h3>
                <p className="text-xs text-red-800 font-light leading-relaxed mb-3">Guwahati → Shillong (2N) → Kaziranga (2N) → Majuli (1N) → Dibrugarh (1N) → Bomdila (1N) → Tawang (2N) → Return</p>
                <p className="text-xs text-red-700 font-light">Includes Sela Pass at 4,170m. 2 days of 8–10 hour drives for Tawang. ILP mandatory for Arunachal. The reward: India&apos;s largest monastery at 3,000m. For experienced travellers.</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-medium text-sm text-green-900 mb-2">🟢 Soft Route (skip Tawang, add Nagaland)</h3>
                <p className="text-xs text-green-800 font-light leading-relaxed mb-3">Guwahati → Shillong (2N) → Kaziranga (2N) → Majuli (1N) → Jorhat → Kohima (2N) → Dzukou Valley day trek → Dimapur → Guwahati</p>
                <p className="text-xs text-green-700 font-light">No extreme altitude. Shorter driving days. Adds Naga culture, WWII history and the stunning Dzukou Valley trek. Still requires Nagaland ILP but it&apos;s easier than Arunachal PAP. Better for first-time Northeast visitors.</p>
              </div>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-sm text-amber-800 font-light leading-relaxed"><strong className="font-medium">Honest advice:</strong> You cannot do both Tawang AND Nagaland in 10 days without burning out. Choose one. The hard route below follows the Tawang option. If you choose the soft route, replace Days 7–10 with: Jorhat → Kohima (6hrs) → Kohima WWII Cemetery + Naga Heritage Village (1 day) → Dzukou Valley trek (1 day) → Dimapur → Guwahati.</p>
            </div>
          </section>

          {/* ITINERARY */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">📅 The 10-Day Itinerary (Hard Route — with Tawang)</h2>
            {hardDays.map((d) => (
              <div key={d.day} className="bg-white rounded-xl border border-parchment-2 overflow-hidden mb-4">
                <div className="bg-parchment px-5 py-4 flex items-center gap-3">
                  <span className="font-serif text-xl text-amber-900 font-light">{d.day}</span>
                  <span className="text-sm text-ink font-medium">{d.title}</span>
                </div>
                <div className="p-5 space-y-3">
                  {d.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded whitespace-nowrap mt-0.5">{item.time}</span>
                      <div>
                        <p className="text-sm text-muted font-light leading-relaxed">{item.content}</p>
                        {item.tip && <p className="text-xs text-teal bg-teal/10 px-3 py-1.5 rounded-lg mt-1.5 font-light">💡 {item.tip}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* BUDGET */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown (10 Days, Per Person)</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead><tr className="bg-ink">
                  <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                  <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                  <th className="p-3.5 text-xs font-medium text-teal-300 text-center">Mid-Range</th>
                  <th className="p-3.5 text-xs font-medium text-purple-300 text-center">Luxury</th>
                </tr></thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (10N)", "₹8,000–₹15,000", "₹20,000–₹40,000", "₹40,000–₹80,000"],
                    ["🍽 Food", "₹5,000–₹8,000", "₹10,000–₹18,000", "₹18,000–₹35,000"],
                    ["🚗 Car + driver + fuel", "₹18,000–₹25,000", "₹30,000–₹45,000", "₹45,000–₹65,000"],
                    ["🦏 Kaziranga safaris", "₹3,500–₹5,000", "₹5,000–₹8,000", "₹8,000–₹12,000"],
                    ["📋 Permits + entries", "₹500–₹1,000", "₹500–₹1,000", "₹500–₹1,000"],
                    ["TOTAL per person", "₹38,000–₹55,000", "₹70,000–₹1,15,000", "₹1,20,000–₹2,00,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">Car hire is the biggest expense — sharing with 2–4 people brings the per-person cost down significantly. Northeast India is not cheap to travel independently.</p>
          </section>

          {/* FOOD */}
          <section id="food" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🍛 What to Eat in the Northeast</h2>
            <p className="text-sm text-muted font-light mb-6">Northeast food is completely different from the rest of India — minimal spice, lots of fermented ingredients, bamboo shoot, smoked meats and Tibetan influences as you go higher.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { dish: "Momos", where: "Everywhere — best in Tawang and Shillong", price: "₹60–₹120", desc: "Tibetan dumplings — steamed or fried, stuffed with pork, chicken or vegetables. The Northeast makes the best momos in India. The chilli sauce is non-negotiable.", color: "bg-amber-50 border-amber-200" },
                { dish: "Thukpa", where: "Tawang, Bomdila, Shillong", price: "₹80–₹150", desc: "Tibetan noodle soup with vegetables and meat. Hot, filling, perfect after a cold day of driving through mountain passes. The best comfort food at altitude.", color: "bg-green-50 border-green-200" },
                { dish: "Jadoh", where: "Shillong, Khasi Hills", price: "₹100–₹180", desc: "Khasi rice and pork dish — the signature food of Meghalaya. Rice cooked in pork blood and fat with turmeric. Sounds unusual, tastes extraordinary. Try it at a Khasi restaurant in Shillong.", color: "bg-blue-50 border-blue-200" },
                { dish: "Smoked Pork with Bamboo Shoot", where: "Nagaland, Meghalaya", price: "₹120–₹200", desc: "The defining dish of the Northeast — fermented bamboo shoot gives a sharp, pungent flavour that's unlike any Indian cuisine. Acquired taste. Essential experience.", color: "bg-red-50 border-red-200" },
                { dish: "Assamese Thali", where: "Kaziranga, Jorhat, Dibrugarh", price: "₹100–₹200", desc: "Rice with dal, fish curry (Assam is a fish-loving state), aloo pitika (mashed potato with mustard oil), khar (alkaline preparation unique to Assam). Simple, clean flavours.", color: "bg-purple-50 border-purple-200" },
                { dish: "Assam Tea", where: "Tea gardens near Jorhat and Dibrugarh", price: "₹10–₹30", desc: "Fresh from the source — Assam produces 50% of India's tea. Drink it strong with milk at a roadside stall near a tea estate. Different from anything in a box.", color: "bg-pink-50 border-pink-200" },
              ].map((f) => (
                <div key={f.dish} className={`rounded-xl p-4 border ${f.color}`}>
                  <div className="flex items-center justify-between mb-1 flex-wrap gap-1">
                    <p className="font-medium text-sm text-stone-900">{f.dish}</p>
                    <span className="text-[0.65rem] font-medium text-teal">{f.price}</span>
                  </div>
                  <p className="text-[0.65rem] text-muted mb-2">{f.where}</p>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <AffiliateBlock
            destination="Northeast India"
            hotels={[
              { name: "Diphlu River Lodge, Kaziranga", type: "Safari lodge · River view", price: "From ₹8,000/night", rating: "5", badge: "Best in Kaziranga", url: "https://www.booking.com/searchresults.html?ss=Kaziranga&aid=2820480" },
              { name: "Hotel Polo Towers, Shillong", type: "Mid-range · Police Bazar", price: "From ₹3,500/night", rating: "4", badge: "Shillong pick", url: "https://www.booking.com/searchresults.html?ss=Shillong&aid=2820480" },
              { name: "Hotel Tawang Heights", type: "Mid-range · Town centre", price: "From ₹2,500/night", rating: "3", badge: "Tawang pick", url: "https://www.booking.com/searchresults.html?ss=Tawang&aid=2820480" },
            ]}
            activities={[
              { name: "Kaziranga Jeep Safari", duration: "3 hours", price: "From ₹3,500/jeep", badge: "Must do", url: "https://www.getyourguide.com/s/?q=kaziranga+safari&partner_id=PSZA5UI" },
              { name: "Living Root Bridge Trek, Cherrapunji", duration: "Full day", price: "From ₹1,500/person", badge: "Unique", url: "https://www.getyourguide.com/s/?q=cherrapunji+root+bridge&partner_id=PSZA5UI" },
              { name: "Shillong & Cherrapunji Tour", duration: "2 days", price: "From ₹4,000/person", url: "https://www.getyourguide.com/s/?q=shillong+cherrapunji&partner_id=PSZA5UI" },
              { name: "Northeast India Multi-Day Tour", duration: "7-10 days", price: "From ₹35,000/person", url: "https://www.getyourguide.com/s/?q=northeast+india+tour&partner_id=PSZA5UI" },
            ]}
          />

          <DestinationGallery
            title="Northeast India — The Last Frontier"
            subtitle="Where India meets Tibet, Myanmar and Bangladesh."
            spots={[
              { name: "Living Root Bridge, Cherrapunji", query: "living root bridge meghalaya cherrapunji double decker nongriat india", desc: "Grown over decades from rubber fig tree roots — the double-decker root bridge at Nongriat is the most famous." },
              { name: "Kaziranga Rhino", query: "kaziranga national park one horned rhino grassland assam india safari", desc: "One-horned rhinoceros in elephant grass — Kaziranga has 2,600 of the world's 4,000 remaining." },
              { name: "Tawang Monastery", query: "tawang monastery arunachal pradesh india largest buddhist monastery mountains", desc: "India's largest Buddhist monastery — founded 1680, at 3,048m, with views across the Tawang valley." },
              { name: "Majuli River Island", query: "majuli island assam brahmaputra river island sunset boat india", desc: "The world's largest river island — shrinking every year, home to 500-year-old Vaishnavite monasteries." },
              { name: "Nohkalikai Falls", query: "nohkalikai falls cherrapunji meghalaya tallest waterfall india turquoise pool", desc: "India's tallest plunge waterfall — 340m, with a turquoise pool at the base." },
            ]}
          />

          {/* MISTAKES */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { icon: "📋", title: "Forgetting the ILP for Arunachal", desc: "The ILP is checked at Bhalukpong checkpoint. If you don't have it, you're turned back. Apply at arunachalilp.com at least 72 hours before your Arunachal entry date. Carry 2 printed copies. No exceptions, no bribes, no workarounds.", color: "bg-red-50 border-red-200" },
                { icon: "🚗", title: "Underestimating driving times", desc: "350km in the Northeast is not the same as 350km on a national highway. Tezpur to Tawang is 350km but takes 12–14 hours. Roads are single-lane, winding, and can be blocked by landslides. Add 30% to Google Maps time estimates.", color: "bg-white border-parchment-2" },
                { icon: "🌧️", title: "Visiting during monsoon (June–September)", desc: "The Northeast gets the heaviest rainfall in India. Roads wash out, landslides close passes, Kaziranga floods and closes entirely (July–September). October to April is the window. November–March is ideal.", color: "bg-white border-parchment-2" },
                { icon: "🏔️", title: "Ignoring altitude at Sela Pass and Tawang", desc: "Sela Pass is 4,170m. Tawang is 3,048m. Altitude sickness is real — headaches, nausea, breathlessness. Drink water, don't exert yourself on arrival day, carry Diamox if you're prone. The overnight at Bomdila (2,400m) helps acclimatise.", color: "bg-white border-parchment-2" },
                { icon: "💳", title: "Relying on cards and UPI outside cities", desc: "ATMs are unreliable beyond Shillong and Guwahati. Many lodges in Majuli, Kaziranga outskirts and Tawang are cash-only. Carry enough cash for the entire trip — ₹30,000–₹50,000 minimum. Withdraw in Guwahati before starting.", color: "bg-white border-parchment-2" },
              ].map((m) => (
                <div key={m.title} className={`rounded-xl p-4 border ${m.color}`}>
                  <div className="flex items-start gap-3"><span className="text-xl flex-shrink-0">{m.icon}</span><div><p className="font-medium text-sm text-stone-900 mb-1">❌ {m.title}</p><p className="text-xs text-gray-700 font-light leading-relaxed">{m.desc}</p></div></div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want This Planned for You?</h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">The Northeast needs careful logistics. Tell us your dates and we&apos;ll plan the car hire, permits, hotels and routing. Free.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Northeast Trip →</button>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:border-gold transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "Do I need a permit for Northeast India?", a: "Arunachal Pradesh: ILP required for Indians (₹100, apply at arunachalilp.com), PAP for foreigners (through tour operator). Nagaland: ILP required for all non-Naga Indians. Meghalaya and Assam: no permits needed." },
                { q: "Is 10 days enough?", a: "Barely. 10 days covers Meghalaya + Assam + either Tawang or Nagaland. Not both. If you can extend to 14 days, add Kohima and the Dzukou Valley. The soft route (skip Tawang) is more comfortable in 10 days." },
                { q: "How bad are the roads really?", a: "Guwahati–Shillong: excellent (3hrs, NH6). Kaziranga highway: good. Shillong–Cherrapunji: decent. Tezpur–Tawang: genuinely difficult — single-lane, winding, 12–14 hours for 350km. Expect delays, potholes and possibly landslides." },
                { q: "Best time to visit?", a: "October to April. November–March is ideal — clear skies, cold but manageable, Kaziranga open. March–April adds rhododendron blooms in Arunachal. Avoid June–September (monsoon, road closures, Kaziranga floods)." },
                { q: "Can I do this circuit by public transport?", a: "Partially. Guwahati–Shillong and Guwahati–Kaziranga have regular buses. Beyond that, public transport is unreliable and extremely slow. A hired car with driver is essentially mandatory for Tawang and recommended for the full circuit." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          <Comments />

          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">Individual Northeast Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Shillong 3 Days — Rock Capital", href: "/blog/shillong-3-days" },
                { label: "Meghalaya 5 Days — Living Root Bridges", href: "/blog/meghalaya-5-days" },
                { label: "Kaziranga 3 Days — Rhino Safari", href: "/blog/kaziranga-3-days" },
                { label: "Tawang 4 Days — India's Largest Monastery", href: "/blog/tawang-4-days" },
                { label: "Majuli 3 Days — Disappearing Island", href: "/blog/majuli-3-days" },
                { label: "Kohima 3 Days — WWII & Naga Culture", href: "/blog/kohima-3-days" },
                { label: "Imphal 3 Days — Kangla Fort & Loktak", href: "/blog/imphal-3-days" },
                { label: "Dibrugarh 3 Days — Tea City", href: "/blog/dibrugarh-3-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">Read →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="northeast-india-10-days" />

          <RelatedGuides currentSlug="northeast-india-10-days" />
        </div>
      </main>
      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
