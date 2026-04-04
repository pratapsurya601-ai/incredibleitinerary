import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Cappadocia",
  country: "Turkey",
  countryFlag: "🇹🇷",
  slug: "cappadocia-3-days",
  heroQuery: "cappadocia hot air balloons fairy chimneys turkey sunrise dawn",
  heroAlt: "Cappadocia hot air balloons rising over fairy chimney rock formations at dawn Turkey",
  category: "Europe",
  date: "April 4, 2026",
  readTime: "12 min read",
  intro: "A dawn balloon flight over 200 floating hot air balloons is the most surreal experience in travel — the entire valley turns rose-gold as baskets rise silently between the fairy chimneys. Add cave hotels carved into volcanic rock, underground cities 8 floors deep built by early Christians, and a lunar landscape that makes you question what planet you're on.",
  stats: { duration: "3 Days", budgetFrom: "₺400", bestMonths: "Apr – Jun, Sep – Nov", airport: "NAV (Nevşehir) or KYA (Kayseri)" },
  toc: [
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-amber-50", border: "border-amber-200", titleColor: "text-amber-800",
      items: [
        ["E-Visa", "Apply at evisa.gov.tr — $60 USD, instant to 24-hr processing."],
        ["Getting There", "Fly Istanbul–Nevşehir (1 hr, ₺400–800 one way) or Istanbul–Kayseri. Bus from Istanbul takes 10–12 hrs overnight."],
        ["Base Town", "Stay in Göreme — the central village with cave hotels, balloon companies, and ATV rentals. Ürgüp is slightly more upscale."],
        ["Balloon Booking", "Book your balloon flight 4–6 weeks ahead for peak season. Flights cancel on windy days — get travel insurance."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["E-Visa", "USA, UK, Canada, Australia need E-Visa ($60). Apply at evisa.gov.tr."],
        ["Flights", "Turkish Airlines, Pegasus, and AnadoluJet fly Istanbul–Cappadocia (Nevşehir or Kayseri) in 1 hour."],
        ["Transport", "Rent a car for maximum flexibility (₺800–1,200/day). Tour company minibuses also available."],
        ["Tip", "Göreme village is walkable. The main sites — Rose Valley, Devrent, Derinkuyu — need a car or ATV."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "₺400–700/day (~$13–23)",
      days: [
        {
          day: "Day 1",
          title: "Göreme & Open Air Museum",
          items: [
            "Arrive, check in to cave hostel in Göreme (₺300–500/night for a private cave room)",
            "10:00am — Göreme Open Air Museum (₺400) — rock-cut churches with 10th–12th century frescoes",
            "1:00pm — Lunch at a local gözleme (stuffed flatbread) stall, ₺80",
            "3:00pm — Hike Rose Valley (free, 2–3 hrs) — fairy chimneys, cave churches, pigeon houses carved into cliffs",
            "Sunset from Rose Valley viewpoint — the entire landscape turns red and orange",
            "8:00pm — Dinner at a Göreme restaurant — testi kebabi (clay pot kebab) ₺200",
          ],
          cost: "₺600–800 total",
        },
        {
          day: "Day 2",
          title: "Underground City & Ihlara Valley",
          items: [
            "9:00am — Derinkuyu Underground City (₺500) — 8-floor underground city built by early Christians, tunnels for 20,000 people",
            "11:30am — Ihlara Valley (₺100 entry + ₺50 boat) — 14km canyon with rock-cut churches along a river",
            "Walk a 5km section of the valley between Ihlara and Belisırma villages",
            "1:30pm — Lunch at Belisirma village river restaurants (₺150)",
            "4:00pm — Selime Monastery (free) — huge rock-cut monastery at the end of Ihlara",
            "Evening: Return to Göreme. Local wine tasting at a cave bar (₺150–200)",
          ],
          cost: "₺650–800 total",
        },
        {
          day: "Day 3",
          title: "Balloon Flight & Devrent Valley",
          items: [
            "4:30am — Wake up call for balloon flight pickup",
            "5:30am — Balloon launch (₺3,000–4,000 budget company, includes champagne and certificate). 1-hour flight over the fairy chimneys",
            "8:00am — Return to hotel for breakfast",
            "10:00am — Rent an ATV or scooter (₺400/hr) to explore Devrent Valley (Imagination Valley) and Paşabağ Fairy Chimneys",
            "1:00pm — Avanos pottery village — watch potters on wheels using Red River clay technique",
            "3:00pm — Çavuşin village ruins — abandoned cave village on a cliff",
            "5:00pm — Return, pack, depart or stay another night",
          ],
          cost: "₺4,000–5,000 on balloon day",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "₺1,500–3,000/day (~$50–100)",
      days: [
        {
          day: "Day 1",
          title: "Arrival & Cave Hotel",
          items: [
            "Cave suite hotel in Göreme (₺1,500–2,500/night)",
            "Private guided Göreme Open Air Museum tour (₺800)",
            "Sunset wine tasting at a local winery — Cappadocia has excellent Öküzgözü red wine",
            "Dinner at Topdeck Cave Restaurant",
          ],
          cost: "₺2,500–3,500",
        },
        {
          day: "Day 2",
          title: "Full Private Tour",
          items: [
            "Private driver and guide for Derinkuyu + Ihlara Valley (₺2,000/day for car + guide)",
            "Lunch at a traditional Cappadocian home with cooking demonstration",
            "Evening: Turkish night show at a cave venue (whirling dervishes + folk dance, ₺500)",
          ],
          cost: "₺2,500–3,500",
        },
        {
          day: "Day 3",
          title: "Premium Balloon & Pottery",
          items: [
            "Royal Balloon or Butterfly Balloons — premium operators (₺5,000–7,000)",
            "Post-balloon breakfast at your cave hotel terrace",
            "Private pottery lesson in Avanos (₺600)",
            "Farewell dinner at Dibek restaurant — Ottoman copper pots, cave dining",
          ],
          cost: "₺6,000–8,000",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "₺5,000+/day (~$165+)",
      days: [
        {
          day: "Days 1–3",
          title: "Cappadocia in Full Luxury",
          items: [
            "Museum Hotel or Argos in Cappadocia — the world's most unique cave luxury hotels",
            "Private sunrise balloon with champagne breakfast on the landing field",
            "Private helicopter tour of the valleys (₺8,000 for 30 min)",
            "Personal archaeologist guide for all sites",
            "Private whirling dervish ceremony in a cave church",
            "Turkish hamam treatment in a carved rock spa",
          ],
          cost: "₺10,000–20,000/day",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "₺300–500", food: "₺150–250", transport: "₺100–200", activities: "₺500–800 (balloon day ₺3,500)", total: "₺550–1,000 (₺4,000 balloon day)" },
    { tier: "✨ Mid-Range", accommodation: "₺1,500–2,500", food: "₺400–800", transport: "₺300–600", activities: "₺1,000–5,000", total: "₺3,200–8,900/day" },
    { tier: "💎 Luxury", accommodation: "₺5,000–12,000", food: "₺1,000–3,000", transport: "₺500–2,000", activities: "₺2,000–8,000", total: "₺8,500–25,000/day" },
  ],
  mistakes: [
    { icon: "🎈", title: "Not Booking the Balloon Far Enough Ahead", desc: "Balloon flights sell out 4–6 weeks ahead in peak season (April–June, September–November). Book the moment you fix your travel dates. Flights cancel for wind — book on your first available morning so you have backup days.", color: "bg-red-50 border-red-200" },
    { icon: "🚗", title: "Relying on Tour Buses", desc: "Group tours rush you through sites in 20 minutes. Renting a car or ATV (₺400–800/day) lets you stop at unnamed valleys, hidden churches, and viewpoints that tour buses skip. Roads are easy — the area is small.", color: "bg-orange-50 border-orange-200" },
    { icon: "📸", title: "Going to the Balloon Viewpoint Without Riding", desc: "Yes, the balloon viewpoint is free and beautiful. But riding IN a balloon is completely different — looking down at 200 other balloons from above, floating in silence over the fairy chimneys. Do both if budget allows.", color: "bg-yellow-50 border-yellow-200" },
    { icon: "🌡️", title: "Visiting in July–August Peak Heat", desc: "Cappadocia in July hits 35°C. Hiking Rose Valley and Ihlara in that heat is exhausting. April–June and September–November are ideal — comfortable temperatures, wildflowers in spring, golden light in autumn.", color: "bg-pink-50 border-pink-200" },
  ],
  tips: [
    { icon: "🌅", title: "The 4:30am Wakeup is Worth It", desc: "Balloon flights launch at 5:30–6:00am to catch the thermal winds. The pickup comes at 4:30am. Every traveler who complains about the early start says the same thing afterward: 'I'd do it again in a second.' The morning light is everything.", color: "bg-amber-50 border-amber-200" },
    { icon: "🦅", title: "Hike Rose Valley at 5pm", desc: "Rose Valley turns a deep crimson at sunset as the volcanic rock catches the low light. Start the hike at 5pm (2–3 hours to complete) and you'll finish just as it's getting dark. Bring a headlamp for the last stretch.", color: "bg-teal-50 border-teal-200" },
    { icon: "🍷", title: "Cappadocia Wine is Genuinely Good", desc: "The volcanic soil of Cappadocia produces excellent wine from indigenous grapes — Öküzgözü and Boğazkere for reds. Kocabağ and Turasan wineries offer free or cheap tastings. A bottle costs ₺150–300.", color: "bg-green-50 border-green-200" },
    { icon: "🏺", title: "Buy Pottery Directly from the Potter in Avanos", desc: "The pottery workshops in Avanos let you watch and try wheel throwing using Red River clay — a technique unchanged for 4,000 years. Buy directly from the craftspeople, not the tourist shops. Negotiate and you'll pay much less.", color: "bg-blue-50 border-blue-200" },
  ],
  faqs: [
    { q: "How much does a Cappadocia balloon flight cost?", a: "Budget operators charge ₺3,000–4,000 per person (~$100–130). Mid-range (Royal Balloon, Butterfly Balloons) cost ₺5,000–7,000 (~$165–230). All include hotel pickup, champagne on landing, and flight certificate. Book via the company website — tour agencies add 20% markup." },
    { q: "What if my balloon flight is cancelled?", a: "Balloon companies cancel flights when winds exceed safe limits — this happens about 20% of days year-round, more in winter. Book travel insurance that covers flight cancellations, and build extra days into your trip if possible. Most companies reschedule you to the next available day." },
    { q: "Which is better — Göreme or Ürgüp?", a: "Göreme is the hub — central, walkable, more budget options, better atmosphere. Ürgüp is slightly bigger with better restaurants and more upscale hotels but less character. First-time visitors should base in Göreme." },
    { q: "How do I get from Istanbul to Cappadocia?", a: "Fly (1 hour, ₺400–800 one way on Pegasus or AnadoluJet, cheapest option). Overnight bus (10–12 hours, ₺500–700 including seat-bed, scenic but long). Driving (750km, 8 hours, worth it if you have time to stop at Konya). Flying is recommended for short trips." },
    { q: "Can I see Cappadocia in 2 days?", a: "2 days covers the essentials — one day for the Open Air Museum and Rose Valley hike, one day for the balloon flight and Devrent/Pasabag valleys. 3 days adds Derinkuyu Underground City and Ihlara Valley, which are essential for understanding the full Cappadocia story." },
  ],
  combineWith: ["istanbul-5-days", "antalya-3-days", "athens-3-days"],
  relatedSlugs: ["istanbul-5-days", "antalya-3-days", "athens-3-days", "dubai-4-days"],
  galleryQuery: "cappadocia turkey hot air balloons fairy chimneys cave hotels",
};

export const metadata: Metadata = {
  title: "Cappadocia in 3 Days: Complete Guide (Hot Air Balloons, Cave Hotels & Underground Cities, 2026)",
  description: "How to do Cappadocia in 3 days — balloon flight booking tips, best cave hotels, Rose Valley hike, Derinkuyu underground city, and real Turkish Lira costs.",
  keywords: ["cappadocia itinerary 3 days", "cappadocia balloon flight guide", "cappadocia travel guide 2026", "goreme cave hotel", "cappadocia underground city"],
  openGraph: {
    title: "Cappadocia in 3 Days: Balloons, Caves & Fairy Chimneys 2026",
    description: "Balloon booking guide, cave hotels, real costs in TRY.",
    images: [{ url: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=1200&q=80", width: 1200, height: 630, alt: "Cappadocia hot air balloons Turkey" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Cappadocia in 3 Days (2026)", description: "Balloon booking guide, cave hotels, underground cities." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/cappadocia-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Cappadocia in 3 Days: Complete Guide (2026)",
      datePublished: "2026-04-04T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Cappadocia 3 Days", item: "https://www.incredibleitinerary.com/blog/cappadocia-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Cappadocia, Turkey",
      description: "Region in central Turkey with unique volcanic rock formations, cave dwellings, underground cities, and hot air balloon flights.",
    },
  ],
};

export default function CappadociaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
