import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── JSON-LD ────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://incredibleitinerary.com/blog/panama-city-3-days#article",
      "headline": "Panama City in 3 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      "description":
        "Complete 3-day Panama City itinerary covering budget, mid-range and luxury options — Panama Canal, Casco Viejo, Soberanía birding, San Blas Islands, visa info and insider tips.",
      "image": "https://incredibleitinerary.com/og/panama-city-3-days.jpg",
      "author": { "@type": "Person", "name": "Surya Pratap", "url": "https://www.incredibleitinerary.com/about" },
      "publisher": {
        "@type": "Organization",
        "name": "IncredibleItinerary",
        "logo": { "@type": "ImageObject", "url": "https://incredibleitinerary.com/logo.png" },
      },
      "datePublished": "2026-01-15",
      "dateModified": "2026-04-05",
      "url": "https://incredibleitinerary.com/blog/panama-city-3-days",
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://incredibleitinerary.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://incredibleitinerary.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Panama City 3-Day Guide", "item": "https://incredibleitinerary.com/blog/panama-city-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      "name": "Panama City",
      "description":
        "The Hub of the Americas — where supertankers cross a continent through a canal that took 25,000 workers' lives to build, where a UNESCO colonial old town sits minutes from a glass-tower skyline, and where the largest urban rainforest in the world provides harpy eagles and 525 bird species within city limits.",
      "url": "https://incredibleitinerary.com/blog/panama-city-3-days",
      "touristType": ["Adventure Tourist", "Cultural Tourist", "History Enthusiast", "Birdwatcher"],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 8.9936,
        "longitude": -79.5197,
      },
      "containedInPlace": { "@type": "Country", "name": "Panama" },
    },
  ],
};

/* ── Page data ──────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Panama City",
  country: "Panama",
  countryFlag: "🇵🇦",
  slug: "panama-city-3-days",
  heroQuery: "panama canal locks ships miraflores casco viejo city",
  heroAlt: "Panama Canal Miraflores Locks with ships passing and Panama City skyline",
  category: "Central America",
  date: "January 15, 2026",
  readTime: "12 min read",

  intro:
    "There is only one city in the world where you can watch a supertanker the length of three football fields cross an entire continent — and it costs $20 to do it from an air-conditioned visitor centre with a rum sour in your hand. The Panama Canal took 10 years, $375 million, and an estimated 25,000 workers' lives to build, and it still handles 5% of global trade every single day. Five minutes away, Casco Viejo's cobblestone streets and Spanish colonial churches feel so perfectly preserved that film crews use it as a stand-in for Havana. Outside the city, Soberanía National Park contains the world's largest urban rainforest — 525 bird species including the harpy eagle, Panama's national bird, live within 45 minutes of downtown. The US dollar is the official currency, English is widely spoken in tourist areas, and infrastructure is better than anywhere else in Central America. Panama — the Hub of the Americas — might be the most underrated city break in the Western hemisphere.",

  stats: {
    duration: "3 Days",
    budgetFrom: "$70",
    bestMonths: "Dec–Apr (dry season)",
    airport: "PTY (Tocumen International)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "highlights", emoji: "🌟", label: "Top Highlights" },
    { id: "affiliate", emoji: "🎟️", label: "Book Activities" },
    { id: "related", emoji: "🗺️", label: "Related Guides" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa required?", "Yes — Indian passport holders require a Panama tourist visa"],
        ["How to apply", "Apply at the Panamanian consulate or embassy in your country"],
        ["Fee", "Approximately $50 USD (varies by consulate)"],
        ["Processing", "5–10 business days; apply at least 4 weeks before travel"],
        ["Documents", "Valid passport, return ticket, bank statement, passport photos, application form"],
        ["Validity", "Usually single-entry, 30–90 days depending on approval"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "US / UK / EU / Australian Passport",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa required?", "No — visa-free entry for US, UK, EU and Australian passport holders"],
        ["Stay allowed", "90–180 days depending on nationality; US gets 180 days"],
        ["Currency", "US Dollar (USD) is the official currency — no exchange needed"],
        ["Entry proof", "Return/onward ticket required; proof of funds ($500+ recommended)"],
        ["Health", "No mandatory vaccinations; hepatitis A and typhoid recommended"],
        ["Extension", "Apply at Servicio Nacional de Migración; typically 90 more days"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~$70/day",
      days: [
        {
          day: "Day 1",
          title: "Panama Canal + Casco Viejo Exploration",
          items: [
            "Take a Metrobús ($0.35) or taxi ($8) from PTY airport to your Casco Viejo hostel (dorms from $15)",
            "Morning: Miraflores Locks Visitor Center — $20 entry includes museum, 4 floors of viewing platforms, and a film",
            "Watch at least two ships transit — they come every 15–30 minutes between 8am and 4pm",
            "Afternoon: walk Casco Viejo independently — Plaza de la Independencia, Iglesia de San José, Metropolitan Cathedral (all free)",
            "Evening: sunset from the Casco Viejo seawall watching container ships queue for the Canal",
          ],
          cost: "$45–55 (hostel + canal entry + food + transport)",
        },
        {
          day: "Day 2",
          title: "Metropolitan Natural Park + Amador Causeway",
          items: [
            "Morning: Metropolitan Natural Park ($5 entry) — jungle 10 minutes from city centre, 45 bird species, walking trails 1–3 hrs",
            "Bring binoculars if you have them; early morning (6–8am) has the best bird activity",
            "Afternoon: walk or cycle the Amador Causeway ($10 bike rental) with views of the Canal entrance and Bridge of the Americas",
            "Ceviche lunch at a causeway restaurant (~$8)",
            "Evening: cheap beers and street food in Casco Viejo — try the area around Plaza Herrera",
          ],
          cost: "$40–55 (park + bike + food)",
        },
        {
          day: "Day 3",
          title: "Panama Viejo Ruins + Miraflores Museum Revisit",
          items: [
            "Morning: Panama Viejo ruins ($15 entry) — the original 1519 city destroyed by Henry Morgan in 1671, UNESCO site",
            "Tower climb for panoramic views of old and new Panama City side by side",
            "Afternoon: wander the Bella Vista / Marbella area for local restaurants and food courts",
            "If budget allows: Biomuseo ($22) — Frank Gehry–designed building explaining how Panama's isthmus changed global biodiversity",
            "Evening departure from PTY; Metrobús to airport (~$0.35)",
          ],
          cost: "$50–65 (entry fees + food + transport)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~$150/day",
      days: [
        {
          day: "Day 1",
          title: "Canal VIP Visit + Casco Viejo Evening",
          items: [
            "Private transfer from PTY to Casco Viejo boutique hotel ($30–40; try American Trade Hotel area)",
            "Boutique hotel in Casco Viejo from $90/night — stay inside the UNESCO zone for best access",
            "Miraflores Locks ($20) + upgrade to the Miraflores Restaurant for lunch with Canal views ($25pp)",
            "Afternoon: guided Casco Viejo walking tour ($25, 2.5 hrs, covers colonial history and modern gentrification)",
            "Dinner at Donde José ($50pp tasting menu) — Panama's most celebrated restaurant, Panamanian ingredients, reservation essential",
          ],
          cost: "$140–170 (hotel + tour + canal + dinner)",
        },
        {
          day: "Day 2",
          title: "Soberanía Birding + Gamboa + Causeway",
          items: [
            "Early morning guided birding tour in Soberanía National Park ($65, 4 hrs with specialist guide)",
            "Pipeline Road in Soberanía: one of the world's top 10 birdwatching sites — 525 species including harpy eagle",
            "Lunch at Gamboa resort overlooking the Canal and rainforest (~$20)",
            "Afternoon: Amador Causeway and Biomuseo ($22) — Frank Gehry's tropical building",
            "Sunset cocktails at the American Trade Hotel bar in Casco Viejo",
          ],
          cost: "$140–160 (birding tour + meals + museum)",
        },
        {
          day: "Day 3",
          title: "San Blas Islands Day Charter",
          items: [
            "Charter flight to San Blas (Guna Yala) — 30 min, ~$100pp return, most airlines do day trips",
            "The San Blas archipelago: 365 islands, most under indigenous Guna Yala governance — pristine Caribbean water",
            "Snorkel, swim, eat fresh lobster for $10, and sleep on a sandbank (day trip or overnight stays)",
            "Return flight to Panama City by late afternoon",
            "Farewell dinner in Casco Viejo rooftop restaurant — Tantalo Hotel rooftop has the best city views",
          ],
          cost: "$160–200 (charter flight + island food + hotel + dinner)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~$350/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival + Canal Private Tour + Fine Dining",
          items: [
            "Business class arrival at PTY; private luxury transfer to American Trade Hotel or Sofitel ($200+/night)",
            "Private guided Canal experience: access to Miraflores + Gatún Locks, boat ride on the Canal ($200pp private)",
            "Canal crossing: book a Panama Canal partial transit cruise (available Saturdays, ~$150pp) for the once-in-a-lifetime full passage",
            "Afternoon: private Casco Viejo historical walking tour with conservation architect ($80)",
            "Dinner at Maito — Panama's highest-rated restaurant, 12-course indigenous ingredients tasting menu, ~$100pp",
          ],
          cost: "$350–450 (hotel + private canal tour + fine dining)",
        },
        {
          day: "Day 2",
          title: "Private Birding + Harpy Eagle Encounter",
          items: [
            "Pre-dawn departure: private ornithologist guides to Soberanía National Park for harpy eagle watching",
            "Pipeline Road: birding with a private expert — harpy eagle nests are monitored by local guides ($120pp private)",
            "Lunch at Gamboa Rainforest Resort — private wildlife encounter on resort grounds",
            "Afternoon: helicopter over the Canal (available via private charter, ~$300 for 2 people, 30 min)",
            "Sundowners at the American Trade Hotel pool bar; dinner at Segundo Muelle",
          ],
          cost: "$400–500 (private guides + helicopter + fine dining)",
        },
        {
          day: "Day 3",
          title: "San Blas Private Island + Departure",
          items: [
            "Private charter flight to San Blas Guna Yala ($300–400 for a 4-seater plane)",
            "Private island arrangement through a Guna Yala operator — your own sandbank for a morning",
            "Snorkelling the coral reefs with a private guide; fresh lobster lunch cooked on the island",
            "Return charter to Panama City by 3pm",
            "Pre-flight spa at hotel; farewell cocktail on the Tantalo rooftop or Casco Viejo lookout",
          ],
          cost: "$400–500 (private charter + island experience + spa)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$15–25 (hostel dorm/room)",
      food: "$12–18 (street food, markets)",
      transport: "$5–10 (Metrobús, shared taxis)",
      activities: "$20–35 (Canal + ruins)",
      total: "~$70/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$85–130 (boutique hotel)",
      food: "$30–45 (restaurants)",
      transport: "$20–35 (Uber, private transfers)",
      activities: "$40–70 (guided tours, birding)",
      total: "~$150/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$200–350 (5-star, Casco Viejo)",
      food: "$70–120 (fine dining)",
      transport: "$50–100 (private car, helicopter)",
      activities: "$120–250 (private Canal, San Blas charter)",
      total: "~$350/day",
    },
    {
      tier: "🏝 San Blas Add-On",
      accommodation: "$50–200 (overwater hut)",
      food: "$10–30 (island seafood)",
      transport: "$100–400 (charter flight)",
      activities: "$20–60 (snorkel, guide)",
      total: "$180–690 extra",
    },
    {
      tier: "🗓️ Avg Trip (3d)",
      accommodation: "$45–1,050 total",
      food: "$36–360 total",
      transport: "$15–300 total",
      activities: "$60–750 total",
      total: "$210–1,050 total",
    },
  ],

  mistakes: [
    {
      icon: "🌧️",
      title: "Visiting during the rainy season (May–November)",
      desc: "Panama City receives 1,800mm of rain per year, almost entirely between May and November. The wet season means daily afternoon downpours that can last 3+ hours, flooding Casco Viejo streets and making outdoor Canal viewing unpleasant. The dry season (Dec–Apr) is dramatically better. If you must travel in the wet season, plan mornings outdoors and afternoons in museums.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "📸",
      title: "Missing the ship transit timing at Miraflores",
      desc: "Ships transit the Canal continuously but visibility from the viewing platforms is best when a ship is actually in the lock chamber. Check the AIS (Automatic Identification System) ship tracker app or ask at the visitor centre entrance for the next scheduled transit. Peak traffic is between 8am and 2pm. Going at noon in the middle of a clear day is the optimal strategy.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🚕",
      title: "Not negotiating taxi fares or using rideshare apps",
      desc: "Panama City taxis don't use meters. Always agree on a price before getting in, or use Uber (widely available and significantly cheaper). From PTY airport to Casco Viejo, the fair taxi price is $25–30; taxis will try $50+. Uber runs $12–18 for the same trip.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏨",
      title: "Staying in the financial district (Punta Paitilla) instead of Casco Viejo",
      desc: "The financial district looks impressive in photos but it's a glass-tower business zone with almost nothing to do on foot. Stay in Casco Viejo — you'll walk to the best restaurants, the seawall, and the old-town atmosphere that makes Panama City worth visiting. It's also 20% cheaper than the financial district for equivalent quality.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🦅",
      title: "Skipping the birding because 'it's not your thing'",
      desc: "Soberanía National Park is 45 minutes from downtown Panama City and contains 525 bird species. Even non-birders find Pipeline Road extraordinary — the jungle is dense, howler monkeys move overhead, and a harpy eagle sighting (the world's most powerful eagle) is a genuinely primal experience. A guided morning walk costs $30–65 and will likely become a highlight of the trip.",
      color: "bg-green-50 border-green-200",
    },
  ],

  tips: [
    {
      icon: "⚓",
      title: "Take a partial Canal transit on a Saturday",
      desc: "Panama Canal Authority runs Saturday partial transit cruises for tourists — you board at Gamboa and transit through Miraflores Locks in an actual vessel with a Canal pilot on board. The experience of rising and falling 8.5 metres in the lock chambers takes about 4 hours and costs ~$165. Book weeks ahead at pancanal.com. It is one of the great travel experiences in the Americas.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🦜",
      title: "Go birding at 6am, not 9am",
      desc: "Pipeline Road in Soberanía is one of the world's legendary birding sites. All the best activity — including harpy eagle, keel-billed toucan, motmots, and antbirds — happens in the two hours after sunrise. A guide who knows the territory makes a transformative difference. Book via GetYourGuide: https://www.getyourguide.com/s/?q=Panama+City+birding+Soberania&partner_id=PSZA5UI",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "💵",
      title: "Panama uses USD — the easiest country in Latin America for money",
      desc: "The Panamanian Balboa is at 1:1 parity with the US dollar and US bills circulate everywhere. There is no currency exchange required, no black market, and no confusing calculations. ATMs give USD. This makes Panama the most financially straightforward destination in all of Central and South America.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🏝️",
      title: "San Blas is worth the $100 charter flight",
      desc: "The San Blas (Guna Yala) archipelago — 365 islands under indigenous governance — has some of the clearest water and whitest sand in the Caribbean. It takes 4 hours by 4WD + boat from Panama City, or 30 minutes by charter flight. The indigenous Guna community controls access and the islands are deliberately undeveloped. Stay at least one night for the full experience.",
      color: "bg-blue-50 border-blue-200",
    },
  ],

  faqs: [
    {
      q: "How many days do I need in Panama City?",
      a: "Three days covers the core experience: Panama Canal, Casco Viejo, Panama Viejo ruins, and Metropolitan Natural Park. Add a fourth day for Soberanía birding or a San Blas overnight. Panama City also works well as a hub — it's a major airline hub with cheap connecting flights to Colombia, Costa Rica, and the rest of Central and South America.",
    },
    {
      q: "Is Panama City safe for tourists?",
      a: "Casco Viejo and the financial district are safe and heavily touristed. The Canal area and Soberanía are perfectly safe during daylight with a guide. Avoid the El Chorrillo and Curundú neighbourhoods (adjacent to Casco Viejo) at night — they're visually close but socially distinct. Like any major city, exercise normal urban awareness: don't display expensive cameras or phones unnecessarily.",
    },
    {
      q: "What's the difference between Miraflores and Gatún Locks for visiting the Canal?",
      a: "Miraflores Locks are 20 minutes from Panama City and the standard tourist choice — excellent visitor centre, museum, multiple observation decks, and a restaurant. Gatún Locks are on the Caribbean (Atlantic) side, 1.5 hours away near Colón, and see the largest ships. Gatún also has a dam, a crocodile-populated lake, and an interactive presentation. Most 3-day visitors do Miraflores; Gatún suits travellers with a car and an extra half day.",
    },
    {
      q: "Can I visit San Blas as a day trip from Panama City?",
      a: "Yes — charter flights from Albrook Airport (PAC) to San Blas take 25–30 minutes and operators run day trips for $100–150 return. The overland route by 4WD + boat takes 4 hours each way and is not recommended as a day trip. For day trippers, the charter flight makes San Blas genuinely viable. Overnight stays on simple island huts ($30–80pp including meals) are strongly recommended for the full experience.",
    },
  ],

  combineWith: ["costa-rica-7-days", "colombia-cartagena", "medellin-4-days", "san-blas-islands"],
  relatedSlugs: ["medellin-4-days", "botswana-okavango-6-days", "costa-rica-jungle"],

  galleryQuery: "panama canal locks casco viejo colonial san blas islands jungle birds",
};

/* ── Metadata ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Panama City in 3 Days: Complete Travel Guide 2026 (Budget to Luxury) | IncredibleItinerary",
  description:
    "Your complete 3-day Panama City itinerary: Panama Canal transit, Casco Viejo UNESCO old town, San Blas Islands, Soberanía birding, visa info, budget breakdown and pro tips for 2026.",
  keywords: [
    "Panama City travel guide",
    "Panama City 3 days",
    "Panama Canal visit",
    "Casco Viejo Panama",
    "San Blas Islands day trip",
    "Soberania National Park birding",
    "Panama travel 2026",
    "Panama City itinerary",
    "Miraflores Locks",
    "Panama tourist visa India",
  ],
  openGraph: {
    title: "Panama City in 3 Days: Complete Travel Guide 2026 | IncredibleItinerary",
    description:
      "Watch supertankers cross a continent, walk a UNESCO colonial old town, and fly to 365-island Caribbean paradise — 3-day Panama City guide for every budget.",
    url: "https://incredibleitinerary.com/blog/panama-city-3-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://incredibleitinerary.com/og/panama-city-3-days.jpg",
        width: 1200,
        height: 630,
        alt: "Panama Canal Miraflores Locks with ships passing and Panama City skyline",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panama City in 3 Days: Complete Travel Guide 2026",
    description:
      "From the Canal to Casco Viejo to the San Blas Islands — the complete 3-day Panama City guide for every budget.",
    images: ["https://incredibleitinerary.com/og/panama-city-3-days.jpg"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/panama-city-3-days",
  },
};

/* ── Page component ─────────────────────────────────────────────────────── */
export default function PanamaCityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UniversalBlogClient data={data} />
    </>
  );
}
