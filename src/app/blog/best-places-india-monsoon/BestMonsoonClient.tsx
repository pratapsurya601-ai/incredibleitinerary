"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import BlogSlugNav from "@/app/blog/[slug]/BlogSlugNav";
import TableOfContents from "@/components/blog/TableOfContents";
import InlineSignup from "@/components/email/InlineSignup";
import RelatedGuides from "@/components/blog/RelatedGuides";

const tocItems = [
  { id: "overview", label: "The Monsoon Split", emoji: "🌧️" },
  { id: "rainshadow", label: "Rain Shadow — Stay Dry", emoji: "☀️" },
  { id: "embrace", label: "Beautiful in the Rain", emoji: "💚" },
  { id: "avoid", label: "What to Avoid", emoji: "🚫" },
  { id: "tips", label: "Practical Tips", emoji: "📋" },
  { id: "faq", label: "FAQ", emoji: "❓" },
];

interface Destination {
  number: number;
  name: string;
  slug?: string;
  type: "dry" | "rain";
  temp: string;
  rain: string;
  bestFor: string;
  highlight: string;
  verdict: string;
}

const RAIN_SHADOW: Destination[] = [
  {
    number: 1,
    name: "Leh-Ladakh",
    slug: "leh-ladakh-7-days",
    type: "dry",
    temp: "25–30°C (day), 12–15°C (night)",
    rain: "Almost zero — rain shadow zone",
    bestFor: "Everyone — July-August is Ladakh's peak season for a reason",
    highlight: "All passes open (Khardung La, Chang La, Baralacha La), Pangong Lake at its most accessible, blue skies while rest of India is in rain, wildflowers in Nubra Valley",
    verdict: "Ladakh in July-August is as good as India travel gets. The Manali-Leh highway is fully open, all passes are accessible, temperatures are mild and pleasant, and the entire Himalayan high-altitude landscape is walkable without winter's harshness. Pangong Lake, Tso Moriri, Nubra Valley with its double-humped camels — all peak-accessible. The only downside: it's also peak season, so book accommodation and inner-line permits well ahead.",
  },
  {
    number: 2,
    name: "Spiti Valley",
    slug: "spiti-valley-7-days",
    type: "dry",
    temp: "20–28°C (day), 8–12°C (night)",
    rain: "Minimal — same rain shadow as Ladakh",
    bestFor: "Adventure travellers, those wanting Ladakh-level drama without Ladakh's crowds",
    highlight: "Chandratal Lake surrounded by wildflowers (July is peak wildflower month), Key Monastery, Pin Valley National Park snow leopard territory, fossil-rich mountains",
    verdict: "Spiti gets considerably fewer visitors than Ladakh while offering comparable dramatic landscapes. July is actually the best month — Chandratal Lake is surrounded by meadows of wildflowers, the Spiti River runs blue-green, and all villages are accessible. The Pin-Parvati Pass crossing (for serious trekkers) only works July-September. Stay in Kaza and explore outward — Kibber, Langza (fossils), Komic (world's highest motorable village).",
  },
  {
    number: 3,
    name: "Kashmir Valley",
    slug: "kashmir-6-days",
    type: "dry",
    temp: "22–28°C",
    rain: "Light showers, nothing like the Western Ghats",
    bestFor: "Families, couples, first-timers to the Himalayas wanting accessibility",
    highlight: "Dal Lake at its greenest with lotus flowers in bloom, Pahalgam meadows lush, Gulmarg's alpine flowers, Betaab Valley post-rain freshness",
    verdict: "Kashmir in July-August is green in a way it simply isn't in winter. The Mughal gardens at Nishat and Shalimar are at their most lush. Shikara rides on Dal Lake past lotus fields are a genuinely beautiful experience. Betaab Valley and Aru Valley near Pahalgam are at their most vibrant. It does rain — light showers most days — but nothing that stops travel. The crowds are manageable compared to peak winter snow season.",
  },
  {
    number: 4,
    name: "Zanskar Valley",
    type: "dry",
    temp: "18–25°C",
    rain: "Very little — extreme rain shadow",
    bestFor: "Serious adventure travellers, trekkers",
    highlight: "Padum town, Phugtal Monastery (built into a cliff face), Chadar trek summer alternative, Zanskar River gorge",
    verdict: "Zanskar is only accessible July-September — the rest of the year the road is blocked by snow or dangerous. It's one of India's most remote inhabited valleys: no ATMs, limited mobile signal, no hospital within hours. Go with proper preparation. The Phugtal Monastery carved into a cliff is one of the most extraordinary human-built structures in India. For trekkers, the Zanskar-Ladakh route is world-class.",
  },
];

const BEAUTIFUL_RAIN: Destination[] = [
  {
    number: 5,
    name: "Meghalaya",
    slug: "meghalaya-5-days",
    type: "rain",
    temp: "20–25°C",
    rain: "Heavy — Cherrapunji is the world's wettest place",
    bestFor: "Those who specifically want the monsoon experience — waterfalls, root bridges, cloud forests",
    highlight: "Living root bridges at full glory, Nohsngithiang Falls (Seven Sisters) roaring, Mawsmai Cave with streams flowing, Dawki River clarity still visible",
    verdict: "Meghalaya in monsoon isn't incidental — it's the point. The double-decker living root bridge at Nongriat (3km trek down and up, 3,000 steps) is surrounded by waterfalls in July. Seven Sisters Falls near Cherrapunji is India's most spectacular waterfall — it barely exists in dry season. Yes, you'll get wet. Yes, there are leeches on the trails. Wear gaiters, carry salt, embrace it. The misty forest scenes here are genuinely unlike anywhere else in India.",
  },
  {
    number: 6,
    name: "Coorg",
    slug: "coorg-3-days",
    type: "rain",
    temp: "18–24°C",
    rain: "Heavy Western Ghats rain",
    bestFor: "Coffee estate fans, nature walkers, those wanting green India at its most intense",
    highlight: "Coffee berries forming on bushes (green, then turning red in Oct-Nov), Abbey Falls at full flow, Iruppu Falls dramatic, Raja's Seat in morning mist",
    verdict: "Coorg in monsoon is the Western Ghats at their most alive. The coffee estates are intensely green, waterfalls run full, and the mist over the hills is constant. Leeches exist on forest trails — wear gaiters or stick to the roads. The Omkareshwara Temple in Madikeri surrounded by mist is atmospheric. Accommodation is cheap (50% off peak rates). If you don't need sunshine, this is one of India's great monsoon escapes.",
  },
  {
    number: 7,
    name: "Wayanad",
    type: "rain",
    temp: "20–26°C",
    rain: "Heavy — Western Ghats",
    bestFor: "Nature lovers, those wanting Kerala's interior without the backwaters",
    highlight: "Soochipara and Meenmutty waterfalls at peak flow, GHNP rivers full and dramatic, Edakkal Caves accessible, misty forests",
    verdict: "Wayanad is Coorg's Kerala equivalent — same Western Ghats system, same monsoon intensity. Soochipara Falls (3-tiered, 200m total) is genuinely impressive in July-August when it's running full. The Kabini reservoir nearby has crocodiles visible along the banks in monsoon. Stay in a plantation bungalow and watch the rain roll in across the hills — it's one of India's most restorative travel experiences if you like rain.",
  },
  {
    number: 8,
    name: "Goa (Off-Season)",
    slug: "goa-3-days",
    type: "rain",
    temp: "26–30°C",
    rain: "Heavy — roughly 2,500mm June-September",
    bestFor: "Culture travellers, budget travellers, those wanting Goa without Goa",
    highlight: "Dudhsagar Falls (only properly accessible July-September), Old Goa's Portuguese churches in monsoon mist, cheap accommodation, Panjim riverfront cafe culture",
    verdict: "Monsoon Goa is a completely different destination from tourist Goa. The beaches are closed (rough seas, no swimming), most beach shacks are shut for maintenance, and you'll have the Portuguese churches, old town streets, and spice plantations entirely to yourself. Dudhsagar Falls — on the Goa-Karnataka border — is one of India's great natural spectacles and only worth visiting in monsoon when it's flowing at full volume. Accommodation in North Goa drops 60-70%. Best for travellers who've already done the beach version.",
  },
  {
    number: 9,
    name: "Dudhsagar Falls",
    type: "rain",
    temp: "26–30°C",
    rain: "Access only possible July-September",
    bestFor: "Waterfall chasers, those combining with Goa trip",
    highlight: "India's second highest waterfall (310m) at full four-tiered flow, railway bridge crossing above the falls, jungle jeep safari approach",
    verdict: "Dudhsagar means Sea of Milk — and in July-August, that's accurate. The four-tiered falls drop 310m, with the iconic railway viaduct crossing in front. The approach is a jungle jeep safari (booked from Mollem) through Bhagwan Mahaveer Wildlife Sanctuary — you'll cross multiple river fords. A monsoon-only experience: in any other month it's a trickle. Combine with a Goa-Karnataka border trip — Dudhsagar is about 60km from Panaji.",
  },
  {
    number: 10,
    name: "Valley of Flowers (Uttarakhand)",
    slug: "valley-of-flowers-4-days",
    type: "rain",
    temp: "15–20°C",
    rain: "Moderate — high altitude Himalayan rain",
    bestFor: "Trekkers, botanists, those wanting a UNESCO World Heritage trek",
    highlight: "300+ species of Himalayan wildflowers in a 87 sq km valley, Hemkund Sahib Gurudwara at 4,329m, Ghangaria base camp",
    verdict: "Valley of Flowers is only open July to mid-September and for good reason — the wildflowers bloom specifically during the monsoon season. The valley turns into a carpet of brahmakamal, blue poppy, cobra lily, and hundreds of other Himalayan species. It's a 17km trek from Govindghat to the valley (via Ghangaria overnight). No camping inside the valley — day visits only. UNESCO World Heritage status is deserved. This is one trek that genuinely requires the rain to be worth it.",
  },
];

export default function BestMonsoonClient() {
  return (
    <>
      <BlogSlugNav />
      <TableOfContents items={tocItems} />

      <main className="pt-[72px] bg-cream min-h-screen">
        {/* Hero */}
        <div className="relative h-[380px] md:h-[440px] overflow-hidden">
          <Image
            src="/images/blog/india-monsoon-travel.jpg"
            alt="Leh Ladakh India monsoon blue sky dry landscape July August travel"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 max-w-[900px]">
            <span className="inline-block bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-2.5 py-1 rounded-[1px] mb-4">
              Travel Planning
            </span>
            <h1 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-light text-white leading-tight">
              Best Places to Visit in India in Monsoon (July–August 2026)
            </h1>
            <p className="text-white/65 text-sm mt-3">April 7, 2026 · 8 min read · By Surya Pratap</p>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto px-5 md:px-8 py-10 md:py-14">

          {/* Lede */}
          <p className="font-serif text-xl font-light text-muted italic leading-relaxed mb-8">
            India&apos;s monsoon is the most misunderstood travel season. Most people assume it means staying home. The reality is more interesting: Ladakh has blue skies and peak accessibility while Mumbai gets 500mm of rain. Meghalaya becomes the most dramatic landscape in Asia. Kashmir turns green. The trick is knowing which India you&apos;re looking for — and the rain shadow zones change everything.
          </p>

          {/* Quick summary boxes */}
          <div className="grid sm:grid-cols-3 gap-3 my-8">
            {[
              { type: "Stay Dry", pick: "Ladakh, Spiti, Kashmir — rain shadow zones", emoji: "☀️", color: "text-amber-600" },
              { type: "Embrace Rain", pick: "Meghalaya, Coorg, Valley of Flowers", emoji: "💚", color: "text-emerald-600" },
              { type: "Avoid", pick: "Rajasthan, Andaman, Kerala backwaters", emoji: "🚫", color: "text-red-500" },
            ].map((item) => (
              <div key={item.type} className="bg-white border border-parchment-2 rounded-xl p-4">
                <p className="text-lg mb-1">{item.emoji}</p>
                <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${item.color}`}>{item.type}</p>
                <p className="text-sm text-ink font-light">{item.pick}</p>
              </div>
            ))}
          </div>

          {/* Overview */}
          <section id="overview" className="mt-12">
            <h2 className="font-serif text-2xl font-light text-ink mb-4">The Monsoon Split — How India Divides</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-5">
              The southwest monsoon enters India at the Kerala coast around June 1st, sweeps up the Western Ghats, crosses the Deccan, and reaches Delhi by early July. By July, most of India is wet. But the Himalayas create a rain shadow — their northern and eastern flanks (Ladakh, Spiti, parts of Kashmir) receive almost no rainfall. This geographic fact creates the best monsoon travel opportunities.
            </p>
            <div className="bg-white border border-parchment-2 rounded-2xl p-6 mb-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#8B6835] font-semibold mb-3">Rain Shadow (Stays Dry)</p>
                  <ul className="space-y-2 text-sm text-muted font-light">
                    <li className="flex gap-2">
                      <span className="text-amber-500 shrink-0">☀</span>
                      <span>Leh-Ladakh — peak season, all passes open</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 shrink-0">☀</span>
                      <span>Spiti Valley — wildflowers, full accessibility</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 shrink-0">☀</span>
                      <span>Kashmir — light showers, lush green</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-500 shrink-0">☀</span>
                      <span>Zanskar — only season it&apos;s accessible</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-emerald-600 font-semibold mb-3">Beautiful IN the Rain</p>
                  <ul className="space-y-2 text-sm text-muted font-light">
                    <li className="flex gap-2">
                      <span className="text-emerald-500 shrink-0">💧</span>
                      <span>Meghalaya — world&apos;s wettest place, spectacular</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-500 shrink-0">💧</span>
                      <span>Coorg/Wayanad — Western Ghats at their greenest</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-500 shrink-0">💧</span>
                      <span>Valley of Flowers — only blooms in monsoon</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-500 shrink-0">💧</span>
                      <span>Dudhsagar Falls — only spectacular July-Sep</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Rain Shadow */}
          <section id="rainshadow" className="mt-14">
            <h2 className="font-serif text-2xl font-light text-ink mb-1">
              ☀️ Rain Shadow Zones — The Dry Himalayas
            </h2>
            <p className="text-sm text-muted font-light mb-6">
              These places are geographically shielded from the southwest monsoon. July-August is actually their peak season — all roads open, no rain, clear blue skies.
            </p>
            <div className="space-y-6">
              {RAIN_SHADOW.map((d) => <DestinationCard key={d.number} d={d} />)}
            </div>
          </section>

          {/* Beautiful in Rain */}
          <section id="embrace" className="mt-14">
            <h2 className="font-serif text-2xl font-light text-ink mb-1">
              💚 Beautiful in the Rain — Embrace the Monsoon
            </h2>
            <p className="text-sm text-muted font-light mb-6">
              These destinations don&apos;t just survive the monsoon — they require it. Waterfalls, wildflowers, living root bridges, and green landscapes that don&apos;t exist in dry season.
            </p>
            <div className="space-y-6">
              {BEAUTIFUL_RAIN.map((d) => <DestinationCard key={d.number} d={d} />)}
            </div>
          </section>

          <InlineSignup />

          {/* Avoid */}
          <section id="avoid" className="mt-14">
            <h2 className="font-serif text-2xl font-light text-ink mb-4">🚫 What to Avoid in Monsoon</h2>
            <div className="space-y-4">
              {[
                {
                  place: "Rajasthan",
                  reason: "Roads flood in low-lying areas, Jaisalmer&apos;s desert logic evaporates in rain, Thar sand dunes become muddy, and the romantic camel-in-desert imagery simply doesn&apos;t work when it&apos;s raining. Save Rajasthan for October-March.",
                },
                {
                  place: "Most Himalayan Mountain Roads (except Ladakh/Spiti)",
                  reason: "The Manali-Kasol-Rohtang-Solang road is prone to landslides in July-August. NH3 (Manali-Spiti via Rohtang) is frequently blocked. NH58 towards Badrinath has landslide points. If you&apos;re not going to Ladakh or Spiti via the specific verified roads, Himalayan road trips in July-August are genuinely risky.",
                },
                {
                  place: "Andaman Islands",
                  reason: "The Bay of Bengal gets rough, underwater visibility drops from 20m to under 5m, diving is often cancelled, and ferry services to outer islands get suspended for days at a time. The Andaman&apos;s entire appeal (clear water, snorkeling, diving) is gone in monsoon.",
                },
                {
                  place: "Kerala Backwaters (Alleppey, Kumarakom)",
                  reason: "Heavy rain, choppy backwater conditions, limited visibility, and the houseboat experience is miserable when it&apos;s raining sideways. Kerala is best October-February.",
                },
                {
                  place: "Goa Beaches",
                  reason: "All beach shacks close, rough sea swimming is dangerous, and the humidity with rain is intense. Cultural Goa is fine in monsoon — beaches are not.",
                },
                {
                  place: "Darjeeling, Sikkim",
                  reason: "Pre and during-monsoon fog and rain completely obscure Kanchenjunga. The entire point of Darjeeling is the Himalayan panorama. You&apos;ll spend a week in fog waiting for a mountain that won&apos;t appear. Come in October-November instead.",
                },
              ].map((item) => (
                <div key={item.place} className="bg-white border border-parchment-2 rounded-xl p-5">
                  <p className="text-sm font-semibold text-ink mb-1.5">{item.place}</p>
                  <p className="text-sm text-muted font-light leading-relaxed">{item.reason}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Practical Tips */}
          <section id="tips" className="mt-14">
            <h2 className="font-serif text-2xl font-light text-ink mb-4">📋 Practical Tips for Monsoon Travel</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment border-b border-parchment-2">
                    <th className="text-left p-3 text-xs font-medium text-ink">Category</th>
                    <th className="text-left p-3 text-xs font-medium text-ink">What to Know</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cat: "Ladakh Permits", note: "Inner Line Permit (ILP) required for Nubra Valley, Pangong, Tso Moriri, Dah-Hanu. Get at DC Office Leh or online. Takes a few hours.", rowClass: "bg-white" },
                    { cat: "Booking Ladakh", note: "July-August is peak season — book guesthouses in Leh, Nubra, and Pangong 3-4 weeks ahead. Budget options fill fast.", rowClass: "bg-parchment/40" },
                    { cat: "Meghalaya Leeches", note: "Wear gaiters or tuck trousers into socks on forest trails. Carry salt or tobacco to remove leeches. They are not dangerous, just annoying.", rowClass: "bg-white" },
                    { cat: "Road Conditions", note: "Check BRO Twitter daily for Ladakh road status. Manali-Leh is generally reliable but can be blocked for 1-2 days after heavy rain near Lahaul.", rowClass: "bg-parchment/40" },
                    { cat: "Altitude (Ladakh/Spiti)", note: "Acclimatise 2 full rest days in Leh before driving to high passes. AMS (altitude sickness) risk is real — Diamox available at pharmacies with prescription.", rowClass: "bg-white" },
                    { cat: "Packing Rain Travel", note: "Waterproof backpack cover, rain jacket (not umbrella for treks), quick-dry clothes. Meghalaya: pack as if everything will get wet — because it will.", rowClass: "bg-parchment/40" },
                  ].map((row) => (
                    <tr key={row.cat} className={row.rowClass}>
                      <td className="p-3 text-xs font-semibold text-ink align-top">{row.cat}</td>
                      <td className="p-3 text-xs text-muted font-light">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Season calendar */}
            <div className="mt-6 overflow-x-auto rounded-xl border border-parchment-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment border-b border-parchment-2">
                    <th className="text-left p-3 text-xs font-medium text-ink">Destination</th>
                    <th className="text-left p-3 text-xs font-medium text-ink">July</th>
                    <th className="text-left p-3 text-xs font-medium text-ink">August</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { dest: "Leh-Ladakh", jul: "Peak — excellent", aug: "Peak — excellent", julClass: "text-emerald-600", augClass: "text-emerald-600" },
                    { dest: "Spiti Valley", jul: "Peak — wildflowers", aug: "Peak — good", julClass: "text-emerald-600", augClass: "text-emerald-600" },
                    { dest: "Kashmir", jul: "Good — lush green", aug: "Good — lush green", julClass: "text-emerald-600", augClass: "text-emerald-600" },
                    { dest: "Meghalaya", jul: "Spectacular — peak rain", aug: "Very good", julClass: "text-emerald-600", augClass: "text-emerald-600" },
                    { dest: "Valley of Flowers", jul: "Peak — wildflower bloom", aug: "Good", julClass: "text-emerald-600", augClass: "text-emerald-600" },
                    { dest: "Coorg / Wayanad", jul: "Heavy rain — embrace it", aug: "Easing off slightly", julClass: "text-amber-600", augClass: "text-amber-600" },
                    { dest: "Dudhsagar Falls", jul: "Full flow — accessible", aug: "Full flow — accessible", julClass: "text-emerald-600", augClass: "text-emerald-600" },
                    { dest: "Rajasthan", jul: "Avoid", aug: "Avoid", julClass: "text-red-500", augClass: "text-red-500" },
                    { dest: "Andaman Islands", jul: "Avoid", aug: "Avoid", julClass: "text-red-500", augClass: "text-red-500" },
                    { dest: "Goa (beaches)", jul: "Avoid beaches", aug: "Avoid beaches", julClass: "text-red-500", augClass: "text-red-500" },
                  ].map((row) => (
                    <tr key={row.dest} className="border-b border-parchment-2 last:border-0 bg-white even:bg-parchment/30">
                      <td className="p-3 text-xs font-semibold text-ink">{row.dest}</td>
                      <td className={`p-3 text-xs font-light ${row.julClass}`}>{row.jul}</td>
                      <td className={`p-3 text-xs font-light ${row.augClass}`}>{row.aug}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mt-14">
            <h2 className="font-serif text-2xl font-light text-ink mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Where should I travel in India in July and August?",
                  a: "Leh-Ladakh and Spiti Valley are the standout answers — rain shadow zones with blue skies while the rest of India is wet. July-August is their peak season. Meghalaya is the opposite: spectacular precisely because of the monsoon — waterfalls and living root bridges at full glory. Kashmir is also excellent — lush, cool, comfortable.",
                },
                {
                  q: "What is a rain shadow zone and why does it matter?",
                  a: "A rain shadow zone is shielded from rainfall by a mountain range. The Himalayas block the southwest monsoon from reaching Ladakh and Spiti — these areas receive almost no rain. This is why Leh is sunny in July while Mumbai gets 500mm. Knowing rain shadow zones is the key to planning good monsoon travel.",
                },
                {
                  q: "Is Meghalaya worth visiting in monsoon?",
                  a: "Yes — for certain travellers, Meghalaya in monsoon is the single best experience in India. Living root bridges surrounded by waterfalls, Seven Sisters Falls roaring, cloud forests. You will get wet. There are leeches. Wear gaiters, carry salt, embrace it. The double-decker root bridge at Nongriat in July is genuinely unlike anywhere else.",
                },
                {
                  q: "Can I drive to Ladakh in July and August?",
                  a: "Yes — July-August is peak season for the Manali-Leh and Srinagar-Leh highways. Both fully open, all passes accessible. Roads are maintained by BRO. July-August is actually the best time for the Manali-Leh drive — Rohtang, Baralacha La, and Tanglang La are all clear.",
                },
                {
                  q: "Is Goa worth visiting in monsoon?",
                  a: "For beaches: no. For culture: yes. Dudhsagar Falls is only spectacular July-September. Old Goa's Portuguese churches in monsoon mist are atmospheric. Prices drop 60-70%. Come for culture, waterfalls, and cheap eats — not for beaches.",
                },
                {
                  q: "What are the worst places in India during monsoon?",
                  a: "Rajasthan (roads flood, desert loses its appeal), Andaman (rough seas, no diving visibility), Kerala backwaters (heavy rain, choppy conditions), most Himalayan mountain roads outside Ladakh/Spiti (landslide risk), and any beach destination where the sea is the point.",
                },
              ].map((faq, i) => (
                <div key={i} className="border border-parchment-2 rounded-xl p-5 bg-white">
                  <p className="text-sm font-medium text-ink mb-2">{faq.q}</p>
                  <p className="text-sm text-muted font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mt-12 bg-ink rounded-2xl p-7">
            <p className="font-serif text-xl font-light text-white mb-3">
              Plan Your Monsoon India Trip
            </p>
            <p className="text-sm text-white/60 font-light leading-relaxed mb-5">
              Tell us your dates, whether you want rain shadow or rain-embrace travel, and your group — we&apos;ll build an itinerary around what&apos;s genuinely good in July-August India.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-ink font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
            >
              Get My Free Itinerary →
            </Link>
          </div>

          <RelatedGuides currentSlug="best-places-india-monsoon" />
        </div>
      </main>
      <Footer />
    </>
  );
}

function DestinationCard({ d }: { d: Destination }) {
  const isDry = d.type === "dry";
  return (
    <div className="bg-white border border-parchment-2 rounded-2xl overflow-hidden">
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span
                className={`text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center shrink-0 ${
                  isDry
                    ? "text-amber-700 bg-amber-50"
                    : "text-emerald-700 bg-emerald-50"
                }`}
              >
                {d.number}
              </span>
              {d.slug ? (
                <Link
                  href={`/blog/${d.slug}`}
                  className="font-serif text-lg font-light text-ink hover:text-gold transition-colors"
                >
                  {d.name}
                </Link>
              ) : (
                <h3 className="font-serif text-lg font-light text-ink">{d.name}</h3>
              )}
              <span
                className={`text-[0.6rem] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full ${
                  isDry
                    ? "text-amber-700 bg-amber-50"
                    : "text-emerald-700 bg-emerald-50"
                }`}
              >
                {isDry ? "Stays Dry" : "Beautiful in Rain"}
              </span>
            </div>
            <p className="text-xs text-muted font-light mt-0.5 ml-8">{d.temp}</p>
          </div>
          {d.slug && (
            <Link
              href={`/blog/${d.slug}`}
              className="shrink-0 text-xs bg-gold/10 hover:bg-gold/20 text-[#8B6835] font-medium px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap"
            >
              Full Guide →
            </Link>
          )}
        </div>

        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm mb-4 ml-8">
          <div>
            <span className="text-[0.65rem] uppercase tracking-widest text-[#8B6835] font-medium">
              Rainfall
            </span>
            <p className="text-ink font-light mt-0.5">{d.rain}</p>
          </div>
          <div>
            <span className="text-[0.65rem] uppercase tracking-widest text-[#8B6835] font-medium">
              Best For
            </span>
            <p className="text-ink font-light mt-0.5">{d.bestFor}</p>
          </div>
          <div className="sm:col-span-2">
            <span className="text-[0.65rem] uppercase tracking-widest text-muted font-medium">
              Highlight
            </span>
            <p className="text-muted font-light mt-0.5 text-xs">{d.highlight}</p>
          </div>
        </div>

        <div className="bg-parchment rounded-xl p-4 ml-8">
          <p className="text-[0.65rem] uppercase tracking-widest text-[#8B6835] font-medium mb-1">
            Verdict
          </p>
          <p className="text-sm text-muted font-light leading-relaxed">{d.verdict}</p>
        </div>
      </div>
    </div>
  );
}
