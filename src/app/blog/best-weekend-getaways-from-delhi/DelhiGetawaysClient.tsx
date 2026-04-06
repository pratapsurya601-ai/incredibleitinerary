"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import BlogSlugNav from "@/app/blog/[slug]/BlogSlugNav";
import TableOfContents from "@/components/blog/TableOfContents";
import InlineSignup from "@/components/email/InlineSignup";
import RelatedGuides from "@/components/blog/RelatedGuides";

const tocItems = [
  { id: "quick-picks", label: "Quick Picks by Type", emoji: "⚡" },
  { id: "under-3hrs", label: "Under 3 Hours (Day Trips)", emoji: "🚗" },
  { id: "3-6hrs", label: "3–6 Hours Away", emoji: "🛣️" },
  { id: "6-plus", label: "6+ Hours (Long Weekend)", emoji: "⛰️" },
  { id: "seasonal-tips", label: "When to Go", emoji: "📅" },
  { id: "faq", label: "FAQ", emoji: "❓" },
];

interface Getaway {
  name: string;
  slug?: string;
  distance: string;
  time: string;
  bestFor: string;
  bestSeason: string;
  avoid: string;
  stay: string;
  cost: string;
  verdict: string;
}

const UNDER_3HRS: Getaway[] = [
  {
    name: "Agra — Taj Mahal",
    slug: "agra-2-days",
    distance: "200km via Yamuna Expressway",
    time: "2.5–3 hrs",
    bestFor: "Taj Mahal, Agra Fort, Fatehpur Sikri, Mathura-Vrindavan",
    bestSeason: "Oct–Mar (mild weather, clear skies for photography)",
    avoid: "Apr–Jun heat (40°C+), June–Aug monsoon haze obscures the Taj from distance",
    stay: "Day trip works, or ITC Mughal / Trident for overnight luxury; Hotel Kamal for budget",
    cost: "₹2,500–5,000 for 2 (day trip including expressway toll + entry fees + meals)",
    verdict: "The Taj in morning light is India's single greatest sight. Leave Delhi by 5:30am, arrive for sunrise tickets (₹1,100/person foreigners, ₹50 Indians — one of the world's most underpriced experiences). Combine with Mathura and Vrindavan on the return for a complete loop.",
  },
  {
    name: "Sariska Tiger Reserve",
    distance: "200km via NH48",
    time: "3 hrs",
    bestFor: "Tiger safari, Kankwari Fort, ancient Shiva temples",
    bestSeason: "Oct–May (park closed Jun–Sep monsoon)",
    avoid: "Monsoon — park is closed",
    stay: "RTDC Castle Sariska (heritage) or Alwar city hotels",
    cost: "₹4,000–8,000 for 2 including safari",
    verdict: "Less famous than Ranthambore but rewarding. Tiger sightings are more exclusive here — fewer jeeps means a better experience when you do see one. The Kankwari Fort inside the park has a wild camping option.",
  },
  {
    name: "Mathura & Vrindavan",
    slug: "agra-2-days",
    distance: "150km via NH19",
    time: "2.5 hrs",
    bestFor: "Krishna birthplace, Banke Bihari temple, Radha Raman, Holi celebrations",
    bestSeason: "Oct–Mar; Holi (Feb–Mar) is extraordinary",
    avoid: "Peak summer — extremely hot, crowds at river ghats",
    stay: "Day trip or stay at ISKCON guesthouse Vrindavan",
    cost: "₹1,500–3,000 for 2 (mostly petrol + prasad)",
    verdict: "Vrindavan's evening Radha Raman aarti (7pm) is one of North India's most atmospheric devotional experiences — not designed for tourists, just very real. Combine with Mathura's Krishna Janmabhoomi and the riverside ghats. Don't miss the parikrama path at dawn.",
  },
];

const THREE_TO_SIX: Getaway[] = [
  {
    name: "Jaipur — Pink City",
    slug: "jaipur-3-days",
    distance: "270km via NH48",
    time: "4.5–5 hrs",
    bestFor: "Amber Fort, Hawa Mahal, City Palace, street food, shopping",
    bestSeason: "Oct–Mar",
    avoid: "May–Jun — 45°C heat on Amber Fort's marble, brutal",
    stay: "Dera Mandawa or Narain Niwas (heritage havelis, ₹3,000–7,000); Hotel Pearl Palace (budget)",
    cost: "₹6,000–14,000 for 2 (2 nights in a heritage haveli)",
    verdict: "Delhi to Jaipur via NH48 is an excellent road — arrive in 4.5 hrs. Amber Fort at 7am before crowds is the highlight. The Jaipur–Delhi expressway makes same-day return viable. Stay in the old city, not the new city hotels.",
  },
  {
    name: "Rishikesh",
    slug: "rishikesh-haridwar-3-days",
    distance: "240km via NH58",
    time: "5–6 hrs",
    bestFor: "River rafting, yoga, Triveni Ghat aarti, Laxman Jhula, Rajaji National Park",
    bestSeason: "Sep–Nov and Feb–Jun (rafting season Mar–Jun and Sep–Nov)",
    avoid: "Monsoon Jul–Aug — Ganga in flood, rafting cancelled, roads slippery",
    stay: "Beatles Ashram area guesthouses ₹800–2,500; Aloha on the Ganges (mid-range), Glasshouse on the Ganges (luxury)",
    cost: "₹3,000–8,000 for 2 (1 night + rafting + food)",
    verdict: "The most complete North Indian weekend trip. Morning yoga, afternoon rafting (₹600–1,500/person), evening Ganga aarti at Triveni Ghat. The Beatles Ashram (now Chaurasi Kutia) is open and fascinating. Cafes in Tapovan serve excellent food. Leave Friday night or Saturday 4am.",
  },
  {
    name: "Haridwar",
    slug: "rishikesh-haridwar-3-days",
    distance: "200km via NH58",
    time: "4.5 hrs",
    bestFor: "Har Ki Pauri Ganga aarti, ghats, temple hopping, Kumbh Mela (every 12 years)",
    bestSeason: "Oct–Mar (Kumbh Mela years: 2028, 2040)",
    avoid: "Summer heat + very large crowds at Navratra",
    stay: "Day trip from Rishikesh or budget dharamshalas ₹300–1,000",
    cost: "₹1,500–3,500 for 2 (mostly petrol + puja materials)",
    verdict: "The evening Har Ki Pauri aarti is one of India's great spectacles — thousands of oil lamps float on the Ganga while priests perform fire rituals. Combine with Rishikesh for a classic 2-day trip. Mansa Devi temple by ropeway has queue issues — skip and hike instead.",
  },
  {
    name: "Jim Corbett National Park",
    slug: "jim-corbett-3-days",
    distance: "250km via NH9 through Moradabad",
    time: "5 hrs",
    bestFor: "Tiger safari, elephant safari, Ramganga river, Corbett Museum",
    bestSeason: "Nov–Jun (Bijrani zone open all year; Dhikala zone closed monsoon)",
    avoid: "Monsoon — Dhikala (best zone) fully closed",
    stay: "Corbett Terraces or Quality Inn (mid-range ₹5,000–10,000); Forest Rest Houses (book via Uttarakhand tourism)",
    cost: "₹8,000–18,000 for 2 (2 nights + 2 safaris)",
    verdict: "India's most established tiger reserve. Dhikala zone (deep forest cantonments) has the best tiger density but requires overnight stay inside the park. Book Dhikala Forest Rest House 45 days ahead at uttarakhandforest.gov.in — it books out in minutes of opening.",
  },
  {
    name: "Pushkar",
    slug: "pushkar-2-days",
    distance: "390km via NH48 to Ajmer",
    time: "6 hrs",
    bestFor: "Only Brahma temple in India, Pushkar Lake, camel fair, desert bazaars",
    bestSeason: "Oct–Mar; Pushkar Camel Fair (Kartik Poornima, Oct–Nov) is extraordinary",
    avoid: "June–Aug heat",
    stay: "Brahma Horizon Hotel or backpacker guesthouses around the lake ₹700–2,500",
    cost: "₹4,000–8,000 for 2 (1 night)",
    verdict: "India's most surreal small town. The lakeside ghats with the Aravalli hills backdrop is magical. Pushkar has one of India's most vibrant traveller cultures without being touristy-cynical. The camel fair week (Nov) is genuinely chaotic and extraordinary — book 6+ months ahead for accommodation.",
  },
  {
    name: "Amritsar",
    slug: "amritsar-2-days",
    distance: "465km via NH44",
    time: "7 hrs (or 6hr train — recommended)",
    bestFor: "Golden Temple, Wagah Border closing ceremony, Jallianwala Bagh, langar",
    bestSeason: "Oct–Mar",
    avoid: "May–Jun heat, festival crowds on Baisakhi (Apr 13)",
    stay: "Hotel MK or Golden Tulip near Golden Temple ₹2,000–5,000",
    cost: "₹5,000–10,000 for 2 (1–2 nights)",
    verdict: "The Golden Temple at 4am, when pilgrims wade in the pool and Gurbani plays in the dawn quiet, is one of North India's transcendent experiences. Drive is long (7hrs). Better to take Shatabdi Express from New Delhi (6hrs, ₹800–1,200) — very efficient. Wagah Border ceremony is worth the evening detour.",
  },
  {
    name: "Lansdowne",
    distance: "250km via Kotdwar",
    time: "5 hrs",
    bestFor: "Quiet hill station, Garhwali culture, Tip-n-Top viewpoint, forest walks",
    bestSeason: "Mar–Jun, Sep–Dec",
    avoid: "Peak monsoon Jul–Aug (roads sometimes blocked)",
    stay: "Garhwal Rifle Mess guesthouse (if connected), local hotels ₹1,200–3,500",
    cost: "₹4,000–7,000 for 2",
    verdict: "Mussoorie's quieter, more authentic cousin. Almost no tourist infrastructure — one main bazaar, army cantonment ambiance, extremely clean. Tip-n-Top point has Himalayan views from Chaukhamba to Kedarnath range. Perfect if you want to disappear for a weekend without Instagram crowds.",
  },
];

const SIX_PLUS: Getaway[] = [
  {
    name: "Shimla",
    slug: "shimla-3-days",
    distance: "380km via NH44 to Kalka then NH5",
    time: "7–8 hrs (or Kalka-Shimla toy train: 5hrs from Kalka)",
    bestFor: "Mall Road, Jakhu Temple, Kufri, Christ Church, colonial heritage",
    bestSeason: "Mar–Jun (pleasant 15–25°C), Nov–Jan (snow possible)",
    avoid: "Dec–Jan Christmastime — massively overpriced and crowded",
    stay: "Hotel Combermere (heritage), Wildflower Hall Mashobra (luxury), HPTDC hotels (budget reliable)",
    cost: "₹6,000–14,000 for 2 (2 nights)",
    verdict: "The classic Delhi–Shimla trip is still worth doing once. The Kalka–Shimla UNESCO toy train is a genuine experience (book at irctc.co.in 60 days ahead). Mall Road and Kufri are touristy but functional. For more authentic Himachal, continue to Kasauli (lower, less crowded) or Narkanda (apple orchards, 65km beyond Shimla).",
  },
  {
    name: "Mussoorie",
    distance: "290km via Dehradun",
    time: "5.5–6 hrs via NH58",
    bestFor: "Kempty Falls, Landour, gun hill, colonial architecture, Camel's Back Road",
    bestSeason: "Mar–Jun, Sep–Nov",
    avoid: "May–Jun summer — every Delhiite is there",
    stay: "Kasmanda Palace (heritage), Hotel Broadway, the famous Rokeby Manor in Landour",
    cost: "₹5,000–12,000 for 2",
    verdict: "Closer and less crowded than Shimla on weekdays. The Landour area (above the main Mall Road) is where Ruskin Bond lives — a quieter, more charming part. Sister's Bazaar and Char Dukan have excellent cafes. The drive via Mussoorie Lake is better than the direct route.",
  },
  {
    name: "Kasol & Kheerganga",
    slug: "kasol-3-days",
    distance: "520km via NH44 to Bhuntar",
    time: "10–12 hrs",
    bestFor: "Trekking to Kheerganga hot spring, Parvati Valley, Israeli food culture",
    bestSeason: "May–Jun (pre-monsoon), Sep–Nov (post-monsoon)",
    avoid: "Monsoon Jul–Aug — landslides on mountain roads common",
    stay: "River-facing camps ₹600–1,500 or guesthouses ₹800–2,500",
    cost: "₹5,000–9,000 for 2",
    verdict: "Best as an overnight bus trip — HRTC Volvo from ISBT Kashmiri Gate (₹900–1,400, 12hrs). Wake up in Kasol. The Kheerganga trek (14km, 4–5hrs up) to natural hot springs at 2,950m is the highlight. Don't rush — Parvati Valley rewards slow travel.",
  },
  {
    name: "Manali",
    slug: "manali-5-days",
    distance: "550km via NH44 (Chandigarh route)",
    time: "10–14 hrs (overnight Volvo recommended)",
    bestFor: "Solang Valley (skiing/snow), Rohtang Pass, Old Manali cafes, Hadimba Temple",
    bestSeason: "Oct (golden poplars) and Apr–May (last snow before summer crowds)",
    avoid: "Jul–Aug — Rohtang crowded, traffic jams, monsoon rain",
    stay: "Old Manali guesthouses ₹700–2,000, Span Resort (mid-range), Rohtang La resort",
    cost: "₹6,000–12,000 for 2 (2 nights via overnight bus)",
    verdict: "The overnight Volvo to Manali (₹900–1,500, 12hrs from ISBT Kashmiri Gate) is perfectly comfortable and saves a day. Solang Valley snow activities in winter (Dec–Mar). Rohtang Pass (3,978m) requires advance permit at hptdc.in (₹500, book a day ahead). Old Manali is significantly better than Mall Road — stay there.",
  },
  {
    name: "Spiti Valley",
    slug: "spiti-valley-7-days",
    distance: "700km via Manali or 650km via Shimla",
    time: "14–16 hrs to first Spiti villages (Kaza is further)",
    bestFor: "High-altitude desert, Key Monastery, Chandratal Lake, fossil-rich mountains",
    bestSeason: "Jun–Sep ONLY (road is closed rest of year)",
    avoid: "Everything before June — Rohtang Pass and Kunzum La blocked by snow",
    stay: "Homestays in Kaza, Kibber, Langza ₹500–1,500/night with meals",
    cost: "₹8,000–15,000 for 2 (5 days minimum)",
    verdict: "Not a weekend trip — minimum 5 days. The Manali-Spiti road via Atal Tunnel (Rohtang bypass) + Kunzum La is an extraordinary drive through planetary landscapes. Go as early in June as road conditions permit — Chandratal Lake before crowds is one of India's greatest sights.",
  },
];

export default function DelhiGetawaysClient() {
  return (
    <>
      <BlogSlugNav />
      <TableOfContents items={tocItems} />

      <main className="pt-[72px] bg-cream min-h-screen">
        {/* Hero */}
        <div className="relative h-[380px] md:h-[440px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80"
            alt="Rishikesh Ganga river suspension bridge Lakshman Jhula weekend trip from Delhi"
            fill className="object-cover" priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 max-w-[900px]">
            <span className="inline-block bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-2.5 py-1 rounded-[1px] mb-4">
              Weekend Trips
            </span>
            <h1 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-light text-white leading-tight">
              20 Best Weekend Getaways from Delhi (2026)
            </h1>
            <p className="text-white/65 text-sm mt-3">April 7, 2026 · 14 min read</p>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto px-5 md:px-8 py-10 md:py-14">

          {/* Lede */}
          <p className="font-serif text-xl font-light text-muted italic leading-relaxed mb-8">
            Delhi sits in the centre of a 600km radius that covers the Taj Mahal, the Himalayas, Rajasthan&apos;s desert, the Ganga&apos;s source, and national parks with tigers. Few cities in the world have this much within reach. These are all the trips worth making — honest about the ones to skip.
          </p>

          {/* Quick picks */}
          <section id="quick-picks">
            <h2 className="font-serif text-2xl font-light text-ink mb-4">Quick Picks by Type</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 my-6">
              {[
                { type: "Best Heritage", pick: "Agra — Taj Mahal + Fort at sunrise", emoji: "🏛️" },
                { type: "Best Royalty", pick: "Jaipur — Amber Fort + haveli stay", emoji: "👑" },
                { type: "Best Nature", pick: "Rishikesh — rafting + aarti + yoga", emoji: "🌊" },
                { type: "Best Wildlife", pick: "Jim Corbett — Dhikala zone tigers", emoji: "🐯" },
                { type: "Best Hill Station", pick: "Mussoorie — closer, less crowded than Shimla", emoji: "⛰️" },
                { type: "Best Spiritual", pick: "Haridwar — Har Ki Pauri aarti", emoji: "🪔" },
                { type: "Best Adventure", pick: "Kasol → Kheerganga hot spring trek", emoji: "🏕️" },
                { type: "Best Budget", pick: "Mathura–Vrindavan — ₹1,500 total", emoji: "💰" },
                { type: "Best Escape", pick: "Lansdowne — quiet cantonment hill", emoji: "🌿" },
              ].map((item) => (
                <div key={item.type} className="bg-white border border-parchment-2 rounded-xl p-4">
                  <p className="text-lg mb-1">{item.emoji}</p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#8B6835] mb-1">{item.type}</p>
                  <p className="text-sm text-ink font-light">{item.pick}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Under 3 hrs */}
          <section id="under-3hrs" className="mt-12">
            <h2 className="font-serif text-2xl font-light text-ink mb-1">🚗 Under 3 Hours — Day Trips</h2>
            <p className="text-sm text-muted font-light mb-6">These work as same-day trips. Leave Delhi by 5:30am, return by 8pm.</p>
            <div className="space-y-6">
              {UNDER_3HRS.map((g) => <GetawayCard key={g.name} g={g} />)}
            </div>
          </section>

          {/* 3–6 hrs */}
          <section id="3-6hrs" className="mt-14">
            <h2 className="font-serif text-2xl font-light text-ink mb-1">🛣️ 3–6 Hours — Weekend Trips</h2>
            <p className="text-sm text-muted font-light mb-6">Leave Friday night. Return Sunday evening. The sweet spot for 2 full days.</p>
            <div className="space-y-6">
              {THREE_TO_SIX.map((g) => <GetawayCard key={g.name} g={g} />)}
            </div>
          </section>

          <InlineSignup />

          {/* 6+ hrs */}
          <section id="6-plus" className="mt-14">
            <h2 className="font-serif text-2xl font-light text-ink mb-1">⛰️ 6+ Hours — Long Weekends</h2>
            <p className="text-sm text-muted font-light mb-6">These need 3+ nights. Best for long weekends or leave-extended trips.</p>
            <div className="space-y-6">
              {SIX_PLUS.map((g) => <GetawayCard key={g.name} g={g} />)}
            </div>
          </section>

          {/* Seasonal tips */}
          <section id="seasonal-tips" className="mt-14">
            <h2 className="font-serif text-2xl font-light text-ink mb-4">📅 When to Go: Delhi Getaway Calendar</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment border-b border-parchment-2">
                    <th className="text-left p-3 text-xs font-medium text-ink">Season</th>
                    <th className="text-left p-3 text-xs font-medium text-ink">Best Destinations</th>
                    <th className="text-left p-3 text-xs font-medium text-ink hidden md:table-cell">Avoid</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { season: "Oct–Feb (Peak)", best: "Agra, Jaipur, Rajasthan, Jim Corbett, Rishikesh", avoid: "Manali (cold), Spiti (closed)", rowClass: "bg-teal/5" },
                    { season: "Mar–May (Pre-Summer)", best: "Shimla, Mussoorie, Kasol, Rishikesh rafting season", avoid: "Plains (getting hot)", rowClass: "bg-white" },
                    { season: "Jun–Aug (Monsoon)", best: "Mussoorie (misty), higher altitudes (Spiti opens Jun)", avoid: "Kasol (landslides), Corbett (closed)", rowClass: "bg-parchment/40" },
                    { season: "Sep (Post-Monsoon)", best: "Rishikesh (best rafting water), Corbett, all hills", avoid: "Nothing — Sep is great for almost everything", rowClass: "bg-white" },
                  ].map((row) => (
                    <tr key={row.season} className={row.rowClass}>
                      <td className="p-3 text-xs font-medium text-ink">{row.season}</td>
                      <td className="p-3 text-xs text-muted font-light">{row.best}</td>
                      <td className="p-3 text-xs text-muted font-light hidden md:table-cell">{row.avoid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mt-12">
            <h2 className="font-serif text-2xl font-light text-ink mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What is the single best weekend trip from Delhi?",
                  a: "Rishikesh for first-timers. It combines three distinct experiences — the spiritual (Triveni Ghat aarti), the adventurous (river rafting), and the reflective (yoga/ashrams) — within a short drive. Jaipur if you want heritage. Jim Corbett if you want wildlife. Agra if you're international and only have one day."
                },
                {
                  q: "Which Delhi getaway is best in summer (April–June)?",
                  a: "Go up. Shimla, Mussoorie, Kasol, and Manali are all good in summer — the hills are a relief from Delhi's 42°C heat. Kasol in May–June before monsoon is excellent for Kheerganga trek. Chopta–Tungnath (near Rishikesh) is very beautiful in May with rhododendron flowers. Avoid Agra, Jaipur, and Rajasthan entirely in May–June."
                },
                {
                  q: "Can I visit Jim Corbett without a guide?",
                  a: "For safaris inside the national park zones (Bijrani, Jhirna, Dhikala), you MUST hire an official guide and a designated jeep. No self-driving inside the core zones. Book through the Uttarakhand Forest Department portal or a registered safari operator in Ramnagar. Dhikala zone requires overnight stay inside the park (FRH) for the best zones."
                },
                {
                  q: "What are the best Delhi getaways by train?",
                  a: "Agra: Gatimaan Express from Hazrat Nizamuddin (100min, ₹700–1,500). Shimla: Shatabdi to Kalka, then toy train (6hrs total). Amritsar: Shatabdi Express (6hrs, ₹800–1,200). Jaipur: Shatabdi or intercity (4.5–5hrs, ₹500–1,100). Haridwar: Shatabdi (4.5hrs). All bookable at irctc.co.in — book 60 days ahead for the best seats."
                },
              ].map((faq, i) => (
                <div key={i} className="border border-parchment-2 rounded-xl p-5 bg-white">
                  <p className="text-sm font-medium text-ink mb-2">{faq.q}</p>
                  <p className="text-sm text-muted font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-12 bg-ink rounded-2xl p-7">
            <p className="font-serif text-xl font-light text-white mb-3">Want a Custom North India Itinerary?</p>
            <p className="text-sm text-white/60 font-light leading-relaxed mb-5">
              Tell us your dates, group size, and interests — we&apos;ll build a personalised multi-stop plan covering Rajasthan, the hills, and everything in between.
            </p>
            <Link href="/" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-ink font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors">
              Get My Free Itinerary →
            </Link>
          </div>

          <RelatedGuides currentSlug="best-weekend-getaways-from-delhi" />
        </div>
      </main>
      <Footer />
    </>
  );
}

function GetawayCard({ g }: { g: Getaway }) {
  return (
    <div className="bg-white border border-parchment-2 rounded-2xl overflow-hidden">
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            {g.slug ? (
              <Link href={`/blog/${g.slug}`} className="font-serif text-lg font-light text-ink hover:text-gold transition-colors">
                {g.name}
              </Link>
            ) : (
              <h3 className="font-serif text-lg font-light text-ink">{g.name}</h3>
            )}
            <p className="text-xs text-muted font-light mt-0.5">{g.distance} · {g.time}</p>
          </div>
          {g.slug && (
            <Link href={`/blog/${g.slug}`} className="shrink-0 text-xs bg-gold/10 hover:bg-gold/20 text-[#8B6835] font-medium px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap">
              Full Guide →
            </Link>
          )}
        </div>

        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm mb-4">
          <div>
            <span className="text-[0.65rem] uppercase tracking-widest text-[#8B6835] font-medium">Best For</span>
            <p className="text-ink font-light mt-0.5">{g.bestFor}</p>
          </div>
          <div>
            <span className="text-[0.65rem] uppercase tracking-widest text-[#8B6835] font-medium">Best Season</span>
            <p className="text-ink font-light mt-0.5">{g.bestSeason}</p>
          </div>
          <div>
            <span className="text-[0.65rem] uppercase tracking-widest text-muted font-medium">Avoid</span>
            <p className="text-muted font-light mt-0.5 text-xs">{g.avoid}</p>
          </div>
          <div>
            <span className="text-[0.65rem] uppercase tracking-widest text-muted font-medium">Cost (2 people)</span>
            <p className="text-muted font-light mt-0.5 text-xs">{g.cost}</p>
          </div>
        </div>

        <div className="bg-parchment rounded-xl p-4">
          <p className="text-[0.65rem] uppercase tracking-widest text-[#8B6835] font-medium mb-1">Verdict</p>
          <p className="text-sm text-muted font-light leading-relaxed">{g.verdict}</p>
        </div>
      </div>
    </div>
  );
}
