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

const TOC = [
  { id: "honest", emoji: "⚡", label: "Why This Route" },
  { id: "route", emoji: "🗺️", label: "The Route Logic" },
  { id: "itinerary", emoji: "📅", label: "14-Day Itinerary" },
  { id: "spiti", emoji: "🏔️", label: "Spiti Valley Add-On" },
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
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      <a href={`mailto:?subject=Himachal Pradesh 14 Days — Complete Circuit&body=${typeof window !== "undefined" ? window.location.href : ""}`} className="bg-ink text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Email</a>
      <a href={`https://x.com/intent/tweet?text=Himachal%20Pradesh%2014%20Days%20—%20Complete%20Circuit&url=${typeof window !== "undefined" ? window.location.href : ""}`} target="_blank" rel="noopener noreferrer" className="bg-[#1DA1F2] text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Twitter</a>
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

const days = [
  {
    day: "Day 1", title: "Delhi → Shimla (Toy Train)",
    items: [
      { time: "6am", content: "Shatabdi Express from New Delhi to Kalka — 4 hours, ₹500–₹800. Or overnight Volvo bus direct to Shimla (₹800–₹1,200, arrives 6am — skip the train in this case).", tip: null },
      { time: "11am", content: "Kalka–Shimla Toy Train (UNESCO World Heritage) — 96km through 102 tunnels, 800+ bridges, and 18 curves through pine-covered Himalayan foothills. 5–6 hours. ₹300–₹800 depending on class. One of India's great railway journeys.", tip: "Take the Toy Train one way (up) for the experience, bus the other way to save time. The train is magical but 5 hours is long. First class has better views." },
      { time: "5pm", content: "Arrive Shimla. Check in near Mall Road or The Ridge. Evening walk on Mall Road — colonial architecture, Christ Church (1857), the Gaiety Theatre. Shimla at dusk with mountain views is genuinely charming.", tip: null },
    ],
  },
  {
    day: "Day 2", title: "Shimla — Ridge, Jakhu & Kufri",
    items: [
      { time: "7am", content: "Mall Road at 7am before the tourist swarm — grab breakfast at Wake & Bake cafe. That early morning walk alone is worth the trip. The Ridge opens up with Himalayan panorama on clear days.", tip: null },
      { time: "9am", content: "Jakhu Temple — 2.5km uphill walk from The Ridge (or ₹500 return by taxi). The 108-foot Hanuman statue is visible from everywhere in Shimla. Monkeys are aggressive — don't carry food openly.", tip: null },
      { time: "12pm", content: "Kufri — 16km from Shimla (₹500–₹800 return taxi). Mini hill station at 2,622m. Horse rides, yak photos, and Himalayan views. Touristy but fun for an afternoon. In winter (Dec–Feb) there's actual snow here.", tip: null },
      { time: "4pm", content: "Return to Shimla. Scandal Point on The Ridge for sunset. Indian Coffee House on Mall Road — the circular building, the waiters in fan-shaped hats, filter coffee ₹40. A Shimla institution since 1957.", tip: null },
    ],
  },
  {
    day: "Day 3", title: "Shimla → Jibhi / Tirthan Valley",
    items: [
      { time: "8am", content: "Drive Shimla to Jibhi — 180km, 5–6 hours via Mandi. The road drops from Shimla, crosses the Sutlej at Bilaspur, and climbs back into the Tirthan Valley. The landscape shifts from colonial hill station to hidden Himalayan valley.", tip: null },
      { time: "2pm", content: "Arrive Jibhi. Check into a riverside cottage or treehouse (₹800–₹2,500/night). Jibhi is what Manali was 15 years ago — no traffic, no malls, no tourist buses. Just river, forest, and silence.", tip: null },
      { time: "4pm", content: "Walk to Jibhi Waterfall (30 min from town). Small but beautiful — the pool at the base is swimmable in summer. Then explore Jibhi village on foot — the wooden Himachali houses, the temples, the apple orchards.", tip: null },
      { time: "Evening", content: "Bonfire at your homestay. The Tirthan River at night — just the sound of water and stars. Dinner: home-cooked Himachali food (rajma chawal, siddu, babru). This is the Himachal most tourists miss entirely.", tip: null },
    ],
  },
  {
    day: "Day 4", title: "Tirthan Valley — Jalori Pass & GHNP",
    items: [
      { time: "7am", content: "Drive to Jalori Pass (3,120m) — 22km from Jibhi, 1.5 hours on a mountain road. The pass has panoramic views of the Himalayas. In May, patches of snow remain. Walk to Serolsar Lake (5km trek from the pass, 2 hours one way) — a sacred lake surrounded by deodar forest.", tip: "Serolsar Lake trek is moderate difficulty. Carry water and snacks. The lake itself is small but the forest walk is extraordinary — giant deodar cedars, moss-covered rocks, birdsong." },
      { time: "1pm", content: "Return to Jibhi. Lunch at a riverside dhaba — trout (locally caught), ₹200–₹350 for a plate. The trout in Tirthan Valley is genuinely excellent.", tip: null },
      { time: "3pm", content: "Optional: Great Himalayan National Park (GHNP) entry point at Rolla — 15km from Jibhi. Short nature walks available (2–3 hours, ₹50 entry). For serious trekking (Tirthan Valley to Pin Valley crossing), you need 4–5 days and a guide.", tip: null },
    ],
  },
  {
    day: "Day 5", title: "Jibhi → Manali",
    items: [
      { time: "8am", content: "Drive Jibhi to Manali — 130km, 4–5 hours via Kullu. The road follows the Beas River valley — one of the most scenic stretches in Himachal. Stop at Kullu for a shawl factory visit if interested.", tip: null },
      { time: "1pm", content: "Arrive Manali. Check in to Old Manali — NOT Mall Road. Completely different vibe. Wood-fired pizza, apple orchards, mountain cafes, the Manalsu River running through it. Mall Road is traffic, souvenir shops, and noise.", tip: "The 3km between Mall Road and Old Manali is the difference between hating Manali and loving it. Stay in Old Manali. Always." },
      { time: "3pm", content: "Hadimba Temple — 16th-century pagoda-style temple in a cedar forest. Free entry. The forest setting is more impressive than the temple itself. Then Jogini Waterfall — 3km trek from Vashisht, easy and beautiful.", tip: null },
      { time: "7pm", content: "Dinner in Old Manali — Lazy Dog Lounge or Johnson's Cafe. Wood-fired pizza ₹300–₹450, apple cider (local), live music some evenings. This is Manali at its best.", tip: null },
    ],
  },
  {
    day: "Day 6", title: "Manali — Solang Valley & Rohtang/Atal Tunnel",
    items: [
      { time: "7am", content: "Solang Valley (14km from Manali, 30 min) — paragliding at 2,480m (₹1,500–₹3,000 tandem), skiing in winter, zorbing, zip-lining. Go early before the crowd arrives. The valley with snow-capped peaks behind it is stunning.", tip: null },
      { time: "11am", content: "Rohtang Pass (3,978m) — if open (May–October). Permit required: ₹500, book at hptdc.in or atal tunnel permit portal at least 1 day ahead. Snow even in summer. The views from the top are extraordinary. OR take the Atal Tunnel (9.02km, world's longest above 3,000m) to Sissu valley — dramatic Lahaul landscape on the other side.", tip: "Rohtang permit is mandatory — no permit, no entry. Book online 1–2 days ahead. Limited vehicles allowed per day. If Rohtang is closed, the Atal Tunnel to Sissu is equally rewarding." },
      { time: "4pm", content: "Return to Manali. Vashisht Hot Springs — natural hot water baths in a village temple setting, free. Then the Vashisht Temple itself — stone carvings, peaceful courtyard.", tip: null },
      { time: "Evening", content: "Old Manali cafes — there are 30+ cafes within 500m, each with mountain views. Pick one with a fireplace if it's cold. Manali evenings in a good cafe are one of India's great simple pleasures.", tip: null },
    ],
  },
  {
    day: "Day 7", title: "Manali → Kasol (Parvati Valley)",
    items: [
      { time: "8am", content: "Drive Manali to Kasol — 80km, 3 hours via Bhuntar and the Parvati Valley road. The Beas River becomes the Parvati River at Bhuntar — narrower, greener, wilder. The valley tightens as you approach Kasol.", tip: null },
      { time: "11am", content: "Arrive Kasol. Check in near the main market or cross the bridge for quieter stays. The Parvati River runs right through town — ice-cold, crystal clear.", tip: null },
      { time: "12pm", content: "Walk to Chalal village — 20 minutes along the Parvati River, trail starts behind the market. Quieter cafes, riverside hammock spots, zero traffic noise. Best free activity in the entire valley. Spend 2–3 hours.", tip: null },
      { time: "4pm", content: "Walk or bus to Manikaran Sahib Gurudwara (4km, 45 min walk or ₹20 bus). Natural hot springs where water literally boils — locals cook rice and dal in the spring water. Free langar (community meal) served daily. The hot springs are right there — dip your feet in naturally heated water next to an ice-cold river.", tip: null },
      { time: "Evening", content: "Dinner at an Israeli cafe on the main strip — falafel plate ₹150–₹200, shakshuka, hummus. Kasol has the most unusual food scene in Himachal — Israeli, Italian, Tibetan, and Himachali all within 200m.", tip: null },
    ],
  },
  {
    day: "Day 8", title: "Kheerganga Trek (Overnight)",
    items: [
      { time: "6am", content: "Bus from Kasol to Barshaini (₹30, 45 min). The Kheerganga trek starts from Barshaini. 12km one way, 5–7 hours depending on pace. Two routes: via Nakthan (easier, longer) or via Kalga (steeper, shorter).", tip: "Carry light. Chai stops every 2–3km — Maggi ₹50, chai ₹20. Don't carry too much food. Waterproof trekking shoes are mandatory — the stone steps are wet 300 days a year. Sneakers will fail." },
      { time: "1pm", content: "Reach Kheerganga (3,050m). Natural hot springs in an alpine meadow — soaking in hot water at 3,050m after a 12km hike. It's earned and it's incredible.", tip: null },
      { time: "3pm", content: "Set up camp. Tent rental ₹300–₹500, or basic room ₹400–₹600. Dinner at campsite ₹150–₹250.", tip: null },
      { time: "Evening", content: "Sunset from Kheerganga meadow — unforgettable. Stars at night with zero light pollution. The Milky Way is visible with naked eyes on clear nights. This is the single best overnight camping experience in Himachal.", tip: null },
    ],
  },
  {
    day: "Day 9", title: "Kheerganga → Tosh → Kasol",
    items: [
      { time: "6am", content: "Sunrise at Kheerganga. Morning dip in the hot springs — the water feels different at dawn. Pack up, begin descent — 3–4 hours back to Barshaini.", tip: null },
      { time: "11am", content: "From Barshaini, take shared auto to Tosh (₹20, 15 min). Tosh village is better than Kasol now — quieter, better views, fewer tourists. Mountain views on all sides, small cafes with valley panoramas. Lunch at a Tosh cafe ₹150–₹250.", tip: null },
      { time: "2pm", content: "Return to Kasol. Rest — your legs need it after Kheerganga. Afternoon at a riverside cafe doing nothing. This is perfectly fine.", tip: null },
      { time: "Evening", content: "Last evening in Kasol. Pack for Dharamshala tomorrow.", tip: null },
    ],
  },
  {
    day: "Day 10", title: "Kasol → Dharamshala / McLeodGanj",
    items: [
      { time: "7am", content: "Drive Kasol to Dharamshala — 270km, 7–8 hours via Mandi and Kangra. Long driving day but the landscape shifts from Parvati Valley pines to Kangra Valley tea gardens to the Dhauladhar range behind Dharamshala.", tip: "Break the drive at Mandi (halfway) for lunch. The Mandi–Dharamshala stretch is scenic with Kangra Valley views." },
      { time: "3pm", content: "Arrive McLeodGanj (upper Dharamshala). Check in — stay in McLeodGanj, not lower Dharamshala. It's a 30-min drive uphill and wastes an hour daily if you stay below.", tip: null },
      { time: "4pm", content: "Tsuglagkhang Complex — the Dalai Lama's temple. Free entry, open 8am–6pm. Tibet Museum inside is genuinely moving. 1.5 hours minimum. Namgyal Monastery next door — watch monks debate in the courtyard.", tip: null },
      { time: "7pm", content: "Dinner on Jogiwara Road — thukpa + momos at a Tibetan joint, ₹120–₹200. Then check if Cloud 9 or Café Shillong has live music tonight — Dharamshala has a surprisingly good live music scene.", tip: null },
    ],
  },
  {
    day: "Day 11", title: "Dharamshala — Bhagsu, Norbulingka & Dharamkot",
    items: [
      { time: "8am", content: "Bhagsu Waterfall — 2km walk from McLeodGanj. In monsoon and post-monsoon (Jul–Oct) the waterfall is at full force — this is actually the best time to see it. Bhagsu Nag Temple on the way — ancient stone temple, 10 minutes, free.", tip: null },
      { time: "10am", content: "Auto to Norbulingka Institute (₹150, 20 min). Traditional Tibetan arts — thangka painting, wood carving. Entry ₹100. The temple inside is one of the most beautiful in the region. Lunch at Norbulingka's own restaurant — Tibetan + continental in a garden setting, ₹200–₹300.", tip: null },
      { time: "2pm", content: "Walk to Dharamkot village (2km uphill from McLeodGanj). Better cafes at half the price of the main market. Trek & Dine, Moonpeak Cafe — pancakes, smoothie bowls ₹200–₹350.", tip: null },
      { time: "5pm", content: "Dharamkot viewpoint — Dhauladhar peaks on clear days, dramatic cloud cover on monsoon days. Both are worth it.", tip: null },
      { time: "Evening", content: "Tibetan market in McLeodGanj — singing bowls, prayer flags, yak wool shawls. Bargain 40% off the first price. Dinner at Nick's Italian — wood-fired pizza ₹250–₹350, every backpacker ends up here.", tip: null },
    ],
  },
  {
    day: "Day 12", title: "Dharamshala → Bir Billing (Paragliding Day)",
    items: [
      { time: "7am", content: "Drive Dharamshala to Bir — 70km, 2 hours. Bir Billing is the paragliding capital of India — hosted the Paragliding World Cup.", tip: null },
      { time: "10am", content: "Tandem paragliding from Billing takeoff site (2,400m) — you literally run off a mountain and fly. 15–25 minute flight depending on thermals. ₹2,500–₹3,500 per person. Book only with Billing Paragliding Association certified operators — ask for certification before paying.", tip: "Go in the morning (9–11am) for the most stable thermals. Afternoon flights can be bumpy. Carry sunglasses and a light jacket — it's cold at 2,400m even in summer." },
      { time: "12pm", content: "Landing in Bir. Walk to the Tibetan Colony — Chokling Monastery and Bir's Tibetan refugee settlement. Peaceful, colourful, and completely different from McLeodGanj's more commercialised Tibetan Quarter.", tip: null },
      { time: "2pm", content: "Lunch at a Bir cafe — Garden Cafe or Silver Linings. ₹150–₹300. Bir has an unexpectedly good cafe culture for a small town.", tip: null },
      { time: "4pm", content: "Drive back to Dharamshala (2 hours) or continue to Chandigarh/Delhi for departure. If ending the trip here: overnight Volvo from Dharamshala to Delhi (₹1,200–₹1,500, leaves ~6pm, arrives 6am).", tip: null },
    ],
  },
  {
    day: "Day 13", title: "Buffer Day / Naddi Viewpoint / Shopping",
    items: [
      { time: "Morning", content: "Slow morning. Auto to Naddi viewpoint (₹100) — best panoramic valley view in the Dharamshala area. 30 minutes is enough but the view earns more.", tip: null },
      { time: "11am", content: "Final walk through McLeodGanj market for last-minute shopping — Tibetan handicrafts, singing bowls, prayer flags, warm shawls.", tip: null },
      { time: "1pm", content: "Final lunch — Tibetan momo feast. Try every variety: steamed, fried, jhol (soup), tandoori. McLeodGanj has the best momos in Himachal.", tip: null },
      { time: "3pm", content: "Departure: overnight Volvo to Delhi (₹1,200–₹1,500, arrives 6am). Or drive to Gaggal airport (DHM, 30 min) for flight. Kangra airport has limited flights — check availability.", tip: null },
    ],
  },
  {
    day: "Day 14", title: "Arrive Delhi / Departure",
    items: [
      { time: "6am", content: "Arrive Delhi (if overnight bus). Transfer to airport or railway station for onward journey. Trip complete.", tip: null },
      { time: "Note", content: "If you're adding Spiti Valley (7 extra days), replace Days 12–14 with the Spiti add-on below. Drive from Manali to Kaza via Rohtang/Atal Tunnel + Kunzum Pass instead of going to Kasol.", tip: null },
    ],
  },
];

export default function HimachalCircuitClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Himachal Pradesh" />
      <main className="bg-cream min-h-screen">

        {/* HERO */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage query="manali old town himalaya snow peaks himachal pradesh india mountains" fallback="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=85" alt="Himalayan peaks above Old Manali with snow and pine forests Himachal Pradesh" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link><span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link><span>/</span>
              <span className="text-white/70">Himachal Pradesh 14 Days</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-600 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">Full Circuit</span>
                <span className="text-white/60 text-xs">April 9, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">20 min read</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">Himachal Pradesh in 14 Days:<em className="italic text-amber-300"> Shimla to Dharamshala — the Complete Mountain Circuit</em></h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">A UNESCO toy train, a hidden valley, Himalayan hot springs, Tibetan monasteries, paragliding off a mountain, and India&apos;s best cafe culture — one state, every elevation.</p>
            </div>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted"><span>🏔️ Himachal Pradesh</span><span>·</span><span>🗓 14 Days</span><span>·</span><span>💰 From ₹20,000</span></div>
          </div>

          {/* HONEST INTRO */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ Why This Route</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">Himachal Pradesh has 6 completely different regions — each with its own landscape, culture, food, and vibe. Most first-timers pick Shimla + Manali and think they&apos;ve seen Himachal. They&apos;ve seen 30% of it. This circuit covers the full state: colonial hill station (Shimla), hidden valley (Jibhi/Tirthan), adventure hub (Manali), backpacker valley (Kasol/Kheerganga), Tibetan exile capital (Dharamshala), and paragliding capital (Bir Billing).</p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">The route moves west-to-east across the state, each stop completely different from the last. You&apos;ll go from a UNESCO toy train to a riverside bonfire to a 3,050m hot spring to a Tibetan monastery to running off a mountain with a paraglider strapped to your back — all in 14 days, all in one state.</p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">Add 7 days for Spiti Valley (June–October only) if you want the cold desert at 4,500m. The Spiti add-on is covered below.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: "🏔️", val: "6", label: "Regions covered" },
                { icon: "🗺️", val: "950 km", label: "Total distance" },
                { icon: "🥾", val: "3,050m", label: "Highest trek" },
                { icon: "💰", val: "₹20,000+", label: "Budget from" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <p className="font-serif text-lg font-light text-ink">{s.val}</p>
                  <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ROUTE LOGIC */}
          <section id="route" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗺️ The Route Logic</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">South to north, each stop flowing into the next. No backtracking except the final return to Delhi.</p>
            <div className="space-y-2">
              {[
                { stop: "Day 1–2: Shimla", km: "Start", why: "UNESCO Toy Train, colonial architecture, Mall Road at dawn. The gentle introduction to Himachal.", link: "/blog/shimla-3-days" },
                { stop: "Day 3–4: Jibhi / Tirthan Valley", km: "180 km", why: "The hidden gem — riverside cottages, Jalori Pass, trout fishing, Great Himalayan National Park. What Manali used to be.", link: "/blog/jibhi-tirthan-valley-3-days" },
                { stop: "Day 5–6: Manali", km: "130 km", why: "Old Manali cafes, Solang Valley snow sports, Rohtang Pass/Atal Tunnel. India's most popular mountain town (stay in Old Manali to love it).", link: "/blog/manali-5-days" },
                { stop: "Day 7–9: Kasol + Kheerganga", km: "80 km", why: "Parvati Valley backpacker scene, Israeli cafes, Manikaran hot springs. Kheerganga trek: 12km to hot springs at 3,050m — the best overnight trek in Himachal.", link: "/blog/kasol-3-days" },
                { stop: "Day 10–13: Dharamshala / McLeodGanj", km: "270 km", why: "Dalai Lama's temple, Tibetan monasteries, Bhagsu Waterfall, live rock music, mountain cafes. India's Tibetan exile capital.", link: "/blog/dharamshala-3-days" },
                { stop: "Day 12: Bir Billing (day trip)", km: "70 km", why: "Paragliding capital of India — tandem flight from 2,400m. Tibetan Colony, cafe culture. ₹2,500–₹3,500 per flight.", link: "/blog/bir-billing-3-days" },
                { stop: "Day 14: Return to Delhi", km: "—", why: "Overnight Volvo from Dharamshala (₹1,200–₹1,500) or fly from Kangra airport.", link: "/blog/delhi-3-days" },
              ].map((s) => (
                <Link key={s.stop} href={s.link} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-parchment-2 hover:border-gold transition-all group">
                  <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded whitespace-nowrap mt-0.5">{s.km}</span>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-ink group-hover:text-teal transition-colors">{s.stop}</p>
                    <p className="text-xs text-muted font-light">{s.why}</p>
                  </div>
                  <span className="text-xs text-muted self-center">Guide →</span>
                </Link>
              ))}
            </div>

            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-sm text-amber-800 font-light leading-relaxed"><strong className="font-medium">When to go:</strong> March–June for pleasant weather and snow on passes. September–November for clear skies and the best trekking. December–February for snow sports (Solang, Kufri). <strong>Avoid July–August</strong> — heavy monsoon rain across all of Himachal, landslides on every major road, leeches on trails.</p>
            </div>
          </section>

          {/* ITINERARY */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">📅 The 14-Day Itinerary</h2>
            {days.map((d) => (
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

            <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-sm text-red-800 font-light leading-relaxed"><strong className="font-medium">Short on time?</strong> Cut Shimla (save 2 days — fly/bus direct to Manali) or skip Jibhi (save 2 days). But don&apos;t cut both — Jibhi is the highlight most tourists miss, and the Toy Train is a once-in-a-lifetime experience. Never cut Kheerganga or Dharamshala.</p>
            </div>
          </section>

          {/* SPITI ADD-ON */}
          <section id="spiti" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🏔️ Spiti Valley Add-On (+7 Days, June–October Only)</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">If you&apos;re visiting June–October, add Spiti Valley after Manali (replace the Kasol/Dharamshala leg). Spiti is India&apos;s cold desert — the most dramatic landscape in the country. Minimum 7 days, altitude acclimatisation essential.</p>
            <div className="space-y-3">
              {[
                { day: "Day 7–8", title: "Manali → Atal Tunnel → Kunzum Pass (4,590m) → Kaza", desc: "2 days of driving through the most dramatic mountain passes in India. Cross Kunzum at 4,590m — snow, prayer flags, glaciers. Arrive Kaza (3,800m) — acclimatise." },
                { day: "Day 9", title: "Kaza → Key Monastery → Kibber → Chicham", desc: "Key Monastery — 1,000 years old, perched on a cliff. Kibber — one of the highest villages in the world. Chicham Bridge — highest bridge in Asia. All within 30km of Kaza." },
                { day: "Day 10", title: "Langza + Hikkim + Komic", desc: "Langza — 300-million-year-old marine fossils at 4,400m (this was once an ocean floor). Hikkim — world's highest post office, send a postcard. Komic — one of the highest inhabited villages on earth." },
                { day: "Day 11", title: "Pin Valley National Park", desc: "Snow leopard territory (sightings are rare but the valley is extraordinary). Himalayan ibex, blue sheep. The drive into Pin Valley through narrow gorges is spectacular." },
                { day: "Day 12", title: "Chandratal Lake", desc: "The most beautiful lake in North India — at 4,300m, crescent-shaped, surrounded by barren mountains. The colour shifts with the light — turquoise, emerald, sapphire. Camp overnight." },
                { day: "Day 13", title: "Chandratal → Manali (via Kunzum/Rohtang)", desc: "Return drive. Equally dramatic in reverse. Arrive Manali evening. From here continue to Kasol/Dharamshala as per the main itinerary, or return to Delhi." },
              ].map((s) => (
                <div key={s.day} className="bg-white rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded">{s.day}</span>
                    <p className="font-medium text-sm text-ink">{s.title}</p>
                  </div>
                  <p className="text-xs text-muted font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-sm text-blue-800 font-light leading-relaxed"><strong className="font-medium">Altitude warning:</strong> Spiti is above 3,500m throughout. Altitude sickness is real — headache, nausea, breathlessness. Acclimatise 2 days in Kaza before going higher. Carry Diamox (consult doctor). Don&apos;t fly into Leh and drive to Pangong the same day logic applies here too.</p>
            </div>
            <div className="mt-3">
              <Link href="/blog/spiti-valley-7-days" className="inline-flex items-center gap-2 text-sm text-teal hover:underline font-light">Full Spiti Valley 7-Day Guide →</Link>
            </div>
          </section>

          {/* BUDGET */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown (14 Days, Per Person)</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead><tr className="bg-ink">
                  <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                  <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                  <th className="p-3.5 text-xs font-medium text-teal-300 text-center">Mid-Range</th>
                  <th className="p-3.5 text-xs font-medium text-purple-300 text-center">Premium</th>
                </tr></thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (14N)", "₹5,600–₹12,000", "₹21,000–₹42,000", "₹49,000–₹84,000"],
                    ["🍽 Food", "₹5,600–₹8,400", "₹11,200–₹21,000", "₹21,000–₹42,000"],
                    ["🚗 Transport (all)", "₹4,000–₹7,000", "₹15,000–₹25,000", "₹25,000–₹40,000"],
                    ["🪂 Activities (paragliding, treks)", "₹3,000–₹5,000", "₹5,000–₹10,000", "₹10,000–₹20,000"],
                    ["🚂 Toy Train + misc", "₹500–₹1,000", "₹800–₹1,500", "₹1,500–₹3,000"],
                    ["TOTAL", "₹20,000–₹35,000", "₹50,000–₹80,000", "₹1,00,000–₹1,80,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">Budget assumes HRTC buses + shared transport. Mid-range uses private car for some legs. Add ₹20,000–₹35,000 per person for the Spiti Valley add-on. Overnight Volvo buses Delhi–Shimla/Manali/Dharamshala: ₹800–₹1,500.</p>
          </section>

          {/* FOOD */}
          <section id="food" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🍛 What to Eat Across Himachal</h2>
            <p className="text-sm text-muted font-light mb-6">The food changes with every valley — and every version is comfort food at altitude.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { dish: "Siddu", where: "Kullu Valley, Manali, Jibhi", price: "₹60–₹100", desc: "Steamed wheat bread stuffed with poppy seed paste or dry fruit, served with ghee and dal. Himachal's signature dish — warm, filling, perfect at altitude. Every homestay makes it differently.", color: "bg-amber-50 border-amber-200" },
                { dish: "Thukpa + Momos", where: "Dharamshala, McLeodGanj, Manali", price: "₹80–₹200", desc: "Tibetan noodle soup and dumplings — the defining meal of upper Himachal. Steamed, fried, jhol (soup) momos. McLeodGanj has the best momos in all of North India. The chilli sauce is non-negotiable.", color: "bg-green-50 border-green-200" },
                { dish: "Trout", where: "Tirthan Valley, Jibhi, Kullu", price: "₹200–₹350", desc: "Locally caught rainbow trout, pan-fried or grilled with lemon and butter. The Tirthan Valley trout is genuinely excellent — served at riverside dhabas where the fish was swimming 2 hours ago.", color: "bg-blue-50 border-blue-200" },
                { dish: "Falafel + Israeli Food", where: "Kasol, Old Manali", price: "₹150–₹250", desc: "Kasol's Israeli cafe scene is unlike anywhere else in India — falafel plates, shakshuka, hummus, pita. The result of decades of Israeli backpackers passing through the Parvati Valley. Genuinely good, not tourist imitation.", color: "bg-red-50 border-red-200" },
                { dish: "Rajma Chawal", where: "Everywhere in Himachal", price: "₹60–₹100", desc: "Red kidney bean curry with rice — the universal Himachali comfort food. Every dhaba, every homestay, every town. Simple, hearty, and somehow tastes better at 2,000m with mountain views.", color: "bg-purple-50 border-purple-200" },
                { dish: "Wood-Fired Pizza", where: "Old Manali, Dharamkot", price: "₹250–₹450", desc: "Old Manali's cafe culture includes surprisingly authentic wood-fired pizza — Lazy Dog, Johnson's Cafe, Drifters. The Italian backpacker influence runs deep. Pizza + apple cider + mountain view = peak Manali.", color: "bg-pink-50 border-pink-200" },
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
            destination="Himachal Pradesh"
            hotels={[
              { name: "The Himalayan, Manali", type: "Luxury · Mountain views", price: "From ₹8,000/night", rating: "5", badge: "Manali best", url: "https://www.booking.com/searchresults.html?ss=Manali&aid=2820480" },
              { name: "Raju Bharti Homestay, Jibhi", type: "Homestay · Riverside", price: "From ₹1,200/night", rating: "4", badge: "Jibhi gem", url: "https://www.booking.com/searchresults.html?ss=Jibhi&aid=2820480" },
              { name: "Norbu House, McLeodGanj", type: "Boutique · Tibetan style", price: "From ₹3,500/night", rating: "4", badge: "Dharamshala pick", url: "https://www.booking.com/searchresults.html?ss=McLeodGanj&aid=2820480" },
              { name: "Hotel Willow Banks, Shimla", type: "Heritage · Mall Road", price: "From ₹4,000/night", rating: "4", badge: "Shimla classic", url: "https://www.booking.com/searchresults.html?ss=Shimla&aid=2820480" },
            ]}
            activities={[
              { name: "Tandem Paragliding Bir Billing", duration: "15–25 min flight", price: "From ₹2,500/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=bir+billing+paragliding&partner_id=PSZA5UI" },
              { name: "Solang Valley Adventure Sports", duration: "Half day", price: "From ₹1,500/person", url: "https://www.getyourguide.com/s/?q=solang+valley+manali&partner_id=PSZA5UI" },
              { name: "Kalka–Shimla Toy Train", duration: "5–6 hours", price: "From ₹300/person", badge: "UNESCO", url: "https://www.getyourguide.com/s/?q=kalka+shimla+toy+train&partner_id=PSZA5UI" },
              { name: "Kheerganga Trek Guided", duration: "2 days", price: "From ₹2,000/person", url: "https://www.getyourguide.com/s/?q=kheerganga+trek&partner_id=PSZA5UI" },
            ]}
          />

          <DestinationGallery
            title="Himachal Pradesh — Every Elevation"
            subtitle="From colonial hill stations to cold deserts at 4,500m."
            spots={[
              { name: "Kalka–Shimla Toy Train", query: "kalka shimla toy train UNESCO heritage railway hills india", desc: "UNESCO World Heritage railway — 96km through 102 tunnels and 800+ bridges." },
              { name: "Tirthan Valley, Jibhi", query: "tirthan valley jibhi river cottage himachal pradesh green forest india", desc: "The hidden valley — what Manali was before it got discovered. River, forest, silence." },
              { name: "Old Manali Cafes", query: "old manali cafe mountain view himalaya snow peaks india", desc: "Wood-fired pizza, apple orchards, and mountain views — the real Manali." },
              { name: "Kheerganga Hot Springs", query: "kheerganga hot springs trek himachal pradesh alpine meadow camping", desc: "Natural hot springs at 3,050m — the reward after a 12km Himalayan trek." },
              { name: "McLeodGanj, Dharamshala", query: "mcleodganj dharamshala tibetan monastery dalai lama temple mountains india", desc: "India's Little Lhasa — the Dalai Lama's temple, Tibetan monasteries, mountain views." },
              { name: "Paragliding, Bir Billing", query: "bir billing paragliding himachal pradesh flying mountains india tandem", desc: "Run off a mountain at 2,400m — India's paragliding capital." },
            ]}
          />

          {/* MISTAKES */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { icon: "🏨", title: "Staying on Mall Road in Manali", desc: "Mall Road Manali is traffic jams, souvenir shops, and noise. Old Manali (3km uphill) is wood-fired pizza, river sounds, and mountain cafes. The 3km difference is the difference between hating and loving Manali. Always stay in Old Manali.", color: "bg-red-50 border-red-200" },
                { icon: "🏃", title: "Trying to see everything in 7 days", desc: "Shimla + Manali + Kasol + Dharamshala in 7 days means spending 80% of the trip on winding mountain roads feeling carsick. Pick 2–3 regions for a week. The mountains reward slow travel — the deeper you go into one valley, the better it gets.", color: "bg-red-50 border-red-200" },
                { icon: "🌧️", title: "Visiting in July–August", desc: "Every major highway in Himachal faces landslides during peak monsoon. The Manali–Chandigarh highway can be blocked for days. Leeches on every trail. Rohtang closed. It's genuinely risky. Come March–June or September–November.", color: "bg-white border-parchment-2" },
                { icon: "👟", title: "Wearing sneakers on Kheerganga", desc: "The stone steps on the Kheerganga trek are wet 300 days a year. Sneakers have no grip on wet rock. Bring actual waterproof trekking shoes with ankle support. This isn't optional — it's a safety issue.", color: "bg-white border-parchment-2" },
                { icon: "🪂", title: "Booking uncertified paragliding", desc: "At Bir Billing, only fly with Billing Paragliding Association (BPA) certified operators. Ask for certification before paying. Uncertified operators charge less but the safety difference is real. ₹2,500–₹3,500 for a certified tandem flight.", color: "bg-white border-parchment-2" },
                { icon: "🏔️", title: "Skipping Jibhi/Tirthan for Manali", desc: "Jibhi is what Manali was 15 years ago — no traffic, no tourist buses, genuine Himachali hospitality. The trout, the Jalori Pass trek, the riverside bonfires. Skipping Jibhi for more time in crowded Manali is the most common Himachal mistake.", color: "bg-white border-parchment-2" },
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
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want This Circuit Planned for You?</h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">Tell us your dates, group size and budget — we&apos;ll plan the buses, stays and day-by-day routing for the full Himachal circuit. Free.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Himachal Trip →</button>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:border-gold transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "Can I do this circuit in 7 days?", a: "Yes — pick 2–3 regions. Best 7-day combos: Shimla + Manali + Kasol (adventure focus) or Manali + Kasol + Dharamshala (backpacker + culture). But don't try all 6 regions in 7 days — you'll spend more time in buses than in mountains." },
                { q: "Is public transport enough?", a: "Yes for most of the route. HRTC buses connect all major towns. Overnight Volvos from Delhi to Shimla/Manali/Dharamshala (₹800–₹1,500). Local buses between towns are cheap (₹50–₹200). Only Jibhi and Bir Billing have limited bus connectivity — shared taxis fill the gaps." },
                { q: "When should I add Spiti Valley?", a: "June to October only — the Manali–Kaza route via Kunzum Pass is closed by snow the rest of the year. The Shimla–Kaza route via Kinnaur opens earlier (May). Spiti needs 7 days minimum. Altitude acclimatisation is essential — 2 rest days in Kaza before going higher." },
                { q: "Best time for snow?", a: "December to February — Solang Valley, Kufri, and upper reaches of Manali have real snow. Shimla gets occasional snowfall. Rohtang is closed but Atal Tunnel stays open. Carry serious thermals — Himachal winter is -5°C to 10°C." },
                { q: "Is the Kheerganga trek difficult?", a: "Moderate. 12km one way, 5–7 hours. No technical climbing — just a long uphill walk on stone steps and forest trails. The challenge is the distance and the climb back up. Start early, carry light, wear waterproof trekking shoes. If you can walk 15,000 steps in a day, you can do Kheerganga." },
                { q: "Is Himachal safe for solo travellers?", a: "Very safe. Shimla, Manali, Kasol, Dharamshala all have excellent backpacker infrastructure — hostels, cafes, other travellers. The Kheerganga trail is busy enough that you're never alone. Women solo travellers will find Dharamshala and Jibhi particularly comfortable. Standard precautions apply everywhere." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          <Comments />

          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">Individual Destination Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Shimla 3 Days — Toy Train & Colonial Hill Station", href: "/blog/shimla-3-days" },
                { label: "Jibhi & Tirthan Valley 3 Days — Hidden Gem", href: "/blog/jibhi-tirthan-valley-3-days" },
                { label: "Manali 5 Days — Solang, Rohtang & Old Manali", href: "/blog/manali-5-days" },
                { label: "Kasol & Kheerganga 3 Days — Parvati Valley", href: "/blog/kasol-3-days" },
                { label: "Dharamshala 3 Days — Tibetan Culture", href: "/blog/dharamshala-3-days" },
                { label: "Bir Billing 3 Days — Paragliding Capital", href: "/blog/bir-billing-3-days" },
                { label: "Spiti Valley 7 Days — Cold Desert Circuit", href: "/blog/spiti-valley-7-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">Read →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="himachal-pradesh-14-days" />

          <RelatedGuides currentSlug="himachal-pradesh-14-days" />
        </div>
      </main>
      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
