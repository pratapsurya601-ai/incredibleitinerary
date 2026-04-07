import type { Metadata } from "next";
import UniversalBlogClient from "@/components/blog/UniversalBlogClient";
import type { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Ibiza 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Ibiza trip in 4 days. Plan 4 days in Ibiza: Dalt Vila UNESCO old town, Café del Mar sunsets, world-famous clubs, hidden coves, Formentera day.",
  keywords: [
    "Ibiza travel guide",
    "Ibiza 4 days itinerary",
    "Dalt Vila UNESCO",
    "Ibiza clubs guide",
    "Café del Mar sunset",
    "Formentera day trip",
    "Ibiza hidden beaches",
    "Cala Conta Cala Bassa",
    "Es Vedrà Ibiza",
    "Ibiza budget travel",
  ],
  openGraph: {
    title: "Ibiza 4-Day Itinerary 2026: Trip Planner",
    description:
      "UNESCO fortress town by day, global electronic music capital by night — your complete 4-day Ibiza itinerary covering every budget.",
    url: "https://www.incredibleitinerary.com/blog/ibiza-4-days",
    siteName: "IncredibleItinerary",
    type: "article",
    locale: "en_GB",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Ibiza Dalt Vila old town at sunset with Mediterranean sea and harbour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibiza 4-Day Itinerary 2026: Trip Planner",
    description:
      "Dalt Vila, Café del Mar, hidden coves, Formentera, and the club scene — complete 4-day Ibiza guide.",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/ibiza-4-days",
  },
};

/* ── JSON-LD ─────────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Ibiza in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "Plan 4 days in Ibiza with day-by-day itineraries for budget, mid-range, and luxury travellers. Covers Dalt Vila, Café del Mar, clubs, Formentera, and secret beaches.",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      datePublished: "2026-01-15",
      dateModified: "2026-04-05",
      url: "https://www.incredibleitinerary.com/blog/ibiza-4-days",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Ibiza 4 Days", item: "https://www.incredibleitinerary.com/blog/ibiza-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Ibiza",
      description:
        "Ibiza is a Spanish Balearic island that exists simultaneously as a UNESCO World Heritage medieval fortress town and the global capital of electronic dance music, home to crystal-clear Mediterranean coves and world-famous clubs.",
      url: "https://www.incredibleitinerary.com/blog/ibiza-4-days",
      touristType: ["Club culture", "Beach traveller", "History lover", "Luxury traveller", "Budget traveller"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 38.9067,
        longitude: 1.4206,
      },
      containedInPlace: {
        "@type": "Country",
        name: "Spain",
      },
    },
  ],
};

/* ── Page data ───────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Ibiza",
  country: "Spain",
  countryFlag: "🇪🇸",
  slug: "ibiza-4-days",
  heroQuery: "ibiza old town dalt vila sunset white mediterranean nightclub",
  heroAlt: "Ibiza Dalt Vila old town at sunset with Mediterranean sea and harbour",
  category: "Europe",
  date: "15 Jan 2026",
  readTime: "13 min read",
  intro:
    "Ibiza exists simultaneously as two completely different places: a UNESCO World Heritage medieval fortress town with whitewashed walls and sunset terrace bars where everyone arrives at 9pm holding a drink, and the global capital of electronic dance music where Pacha and Amnesia have launched careers since 1973. There are clifftop hiking trails to hidden coves that have no road access whatsoever. There's a beachside shack serving paella that has been run by the same family since before the clubs arrived. The hippie market at Las Dalias on a Saturday morning feels like a different century. Ibiza, Spain's most gloriously contradictory island, refuses to be just one thing.",

  stats: {
    duration: "4 Days",
    budgetFrom: "€70",
    bestMonths: "May–Jun or Sep (avoid peak Jul–Aug)",
    airport: "IBZ (Ibiza)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "highlights", emoji: "🏝️", label: "Top Highlights" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "gallery", emoji: "📸", label: "Photo Gallery" },
    { id: "combine", emoji: "✈️", label: "Combine With" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa Required", "Schengen visa (Spain)"],
        ["Fee", "€80 (adults)"],
        ["Processing", "15–30 working days"],
        ["Apply At", "Spanish Consulate / VFS Global"],
        ["Duration", "Up to 90 days in any 180"],
        ["Tip", "Apply 6+ weeks before travel for summer trips"],
      ],
    },
    {
      flag: "🌍",
      title: "UK / US / EU / AUS Passports",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa", "Visa-free (Schengen area)"],
        ["ETIAS", "Required from mid-2025 (€7, online, pre-travel)"],
        ["Duration", "Up to 90 days in any 180"],
        ["UK Note", "UK passports need ETIAS despite Brexit proximity"],
        ["Passport", "Valid 3+ months beyond departure date"],
        ["Entry", "Direct EU entry — no border card needed"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "~€70/day",
      days: [
        {
          day: "Day 1",
          title: "Ibiza Town & Dalt Vila",
          items: [
            "Arrive at IBZ — take the public bus L10 to Ibiza Town (€1.50) rather than a taxi",
            "Check into a budget hostel in Ibiza Town or nearby Santa Eulària (hostel dorms €22–30/night in shoulder season)",
            "Explore Dalt Vila on foot — the UNESCO walled old town is completely free and genuinely stunning",
            "Walk the ramparts at sunset — this is the famous Ibiza sunset ritual, and the walls are arguably better than any club terrace",
            "Grab tapas and a glass of house wine at a bar in the Marina for €10–15",
            "Evening: walk the Marina area and enjoy the free spectacle of Ibiza Town at night",
          ],
          cost: "€45–55 (hostel + food + bus)",
        },
        {
          day: "Day 2",
          title: "Beaches: Ses Salines & Cala Conta",
          items: [
            "Take bus L5 towards Ses Salines beach (€2) — the most beautiful beach on the island, backed by a salt flat nature reserve",
            "Morning swim and sunbathe — the water here is genuinely Caribbean quality",
            "Bus to Cala Conta (bus + taxi combination, €5–8) — two coves with sunbeds available (€8) or just use the rocks",
            "Fresh fish lunch at the Cala Conta beach bar (set menu €14–18)",
            "Return to Ibiza Town via San Antonio — walk the Sunset Strip at Café del Mar (free to stand outside, drinks €8–12)",
            "This is the famous Ibiza sunset ritual — arrive by 8pm for a good spot",
          ],
          cost: "€55–70 (beaches + food + transport)",
        },
        {
          day: "Day 3",
          title: "Formentera Day Trip & Las Dalias Market",
          items: [
            "Saturday only: start at Las Dalias hippie market in San Carlos (bus from Ibiza Town, €2) — open 10am–8pm in season",
            "If not Saturday: take the early ferry to Formentera from Ibiza Town port (€25–35 return, 15–30 mins)",
            "Formentera: rent a bike at the ferry port (€12/day) and cycle to Ses Illetes beach — consistently rated one of Europe's best beaches",
            "The turquoise water at Ses Illetes looks photoshopped but is completely real",
            "Return ferry by late afternoon",
            "Budget dinner: fresh bocadillos from a bakery in Ibiza Town old town (€4–6)",
          ],
          cost: "€60–75 (ferry + bike + food)",
        },
        {
          day: "Day 4",
          title: "North Ibiza & Es Vedrà",
          items: [
            "Rent a scooter (€25–35/day) or join a shared tour to the north of the island",
            "San Juan Bautista village — the arts and crafts community of Ibiza, with artisan shops and a quiet café",
            "Drive to the Es Vedrà viewpoint (free) near Cala d'Hort — the mysterious 413m rock island rising from the sea",
            "Cala Salada for a final swim — one of the island's most beautiful pine-fringed coves",
            "Return to Ibiza Town and bus/taxi to airport",
          ],
          cost: "€50–65 (scooter + food + activities)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "~€160/day",
      days: [
        {
          day: "Day 1",
          title: "Ibiza Town, Dalt Vila & First Night Out",
          items: [
            "Taxi from IBZ airport to Ibiza Town hotel (€15–20) — book a boutique hotel in the old town or Marina (€100–140/night)",
            "Afternoon exploring Dalt Vila — the Archaeological Museum of Ibiza and Formentera (€3) and the Cathedral of Ibiza (free)",
            "Sunset cocktails on a Dalt Vila terrace bar (€12–18/drink but worth it for the views)",
            "Dinner at a mid-range restaurant in the Marina: fresh grilled fish or rice dishes (€35–50/person)",
            "Optional: visit a pre-party bar — the clubs don't fill until midnight so start at Benirrás Beach sundowner or a Marina cocktail bar",
          ],
          cost: "€130–170 (hotel + dinner + cocktails)",
        },
        {
          day: "Day 2",
          title: "Cala Bassa, Cala Conta & One Big Club Night",
          items: [
            "Rent a car (€35–50/day) to access the west coast beaches properly",
            "Cala Bassa: rent a sunbed (€15) at this pine-forest-backed cove — the Cala Bassa Beach Club serves food all day",
            "Cala Conta for the afternoon — two interlinked coves with the best sea colours on the island",
            "Return to hotel, nap from 5–9pm — this is not optional for a proper club night",
            "Pick one club: Pacha (the original, opened 1973), Amnesia (cave-like, legendary foam parties), or Hi Ibiza (newer, superclub format)",
            "Tickets: pre-book online — €50–100 depending on the DJ and date. Shows start midnight, peak around 3am",
          ],
          cost: "€160–210 (hire car + beach club + club entry + drinks)",
        },
        {
          day: "Day 3",
          title: "Formentera & Recovery Beach Day",
          items: [
            "Late start (you earned it) — ferry to Formentera at noon (€28–38 return)",
            "Rent a bike or golf cart at La Savina port (€15–25/day)",
            "Ses Illetes beach: clear water, white sand, no development — one of Europe's finest beaches without question",
            "Lunch at Juan y Andrea restaurant (Ses Illetes) — famous for the freshest seafood directly on the beach (€40–60/person)",
            "Swim at Migjorn beach on the return — calmer, fewer people",
            "Return ferry and early night",
          ],
          cost: "€130–170 (ferry + bike + lunch)",
        },
        {
          day: "Day 4",
          title: "North Ibiza, Es Vedrà & Hippie Market",
          items: [
            "Morning drive to the north — San Juan village, artisan market on summer Sundays",
            "Punta Galera for a swim: flat rocks perfect for sunbathing, no beach, but extraordinarily beautiful",
            "Es Vedrà viewpoint — walk down to Cala d'Hort and kayak around the mysterious rock (kayak hire €15/hr)",
            "Lunch at Es Boldado restaurant at Cala d'Hort (€30–40/person) — famously good seafood with Es Vedrà as the view",
            "Return hire car, airport transfer",
          ],
          cost: "€110–150 (fuel + kayak + lunch)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "~€450/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival & Atzaró Agroturismo",
          items: [
            "Private transfer from IBZ to Atzaró Agroturismo or Can Domo (luxury finca hotels in the rural north, €60–80)",
            "Check in to a luxury rural hotel — private pool villa, orange grove grounds, spa (€400–800/night)",
            "Afternoon spa session (included in premium properties) — hammam, massage, pool",
            "Private chef dinner using local Ibizan ingredients at the finca — or transfer to Ibiza Town's La Brisa or Nobu",
            "Sunset cocktails on your private terrace — the north of the island is remarkably quiet and beautiful",
          ],
          cost: "€550–750 (finca + spa + dinner + transfer)",
        },
        {
          day: "Day 2",
          title: "Private Boat Charter & Beaches",
          items: [
            "Private boat charter from Ibiza Town marina (€600–1,200/day for up to 10 guests, skipper included)",
            "Sail to Formentera — anchor off Ses Illetes for a private swim, snorkel from the boat",
            "Lunch served on deck by the boat's crew or at Juan y Andrea beach restaurant",
            "Sail around Es Vedrà at sunset — one of the most atmospheric experiences on the island",
            "Return to Ibiza Town — exclusive table at a premium beach club: Experimental Beach, Blue Marlin, or Destino",
          ],
          cost: "€700–1,000 (boat charter + lunch + dinner)",
        },
        {
          day: "Day 3",
          title: "Club Culture Done Right",
          items: [
            "Late morning: personal shopping for club night outfits at Ibiza Town's boutiques",
            "Afternoon at Ushuaïa (the open-air dayclub/hotel) — day party starts at 3pm (tickets €50–100)",
            "Pre-club dinner at STK Ibiza or Zela (trendy restaurants near the port, €70–100/person)",
            "VIP table at Pacha or Hi Ibiza — book via their concierge service or a club promoter",
            "VIP table minimums: €500–2,000+ depending on night and DJ — includes bottle service",
            "Premium car service back to your hotel — never drive after a club night",
          ],
          cost: "€600–1,200 (day party + dinner + VIP table + transfers)",
        },
        {
          day: "Day 4",
          title: "Wellness & Departure",
          items: [
            "Full morning spa day at Atzaró or Six Senses Ibiza (the island's finest spa, non-guest treatments available)",
            "Juice bar breakfast, yoga class, or meditation session — the wellness scene in Ibiza's north is genuinely world-class",
            "Farewell lunch at Amante Ibiza — a clifftop restaurant above a private beach, one of the island's most beautiful settings",
            "Private transfer to IBZ airport — upgrade to a premium lounge for your departure",
          ],
          cost: "€400–600 (spa + lunch + transfer)",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€22–30 (hostel, shoulder season)",
      food: "€15–22 (markets, tapas bars)",
      transport: "€8–12 (buses, scooter share)",
      activities: "€20–30 (ferry, 1 club entry)",
      total: "€70–95/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€100–140 (boutique hotel)",
      food: "€40–60 (restaurants)",
      transport: "€35–50 (hire car)",
      activities: "€50–100 (club, beach club, kayak)",
      total: "€160–220/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€400–800 (finca / 5-star)",
      food: "€80–120 (fine dining)",
      transport: "€60–100 (private transfers)",
      activities: "€200–500 (boat, VIP tables, spa)",
      total: "€450–800/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "€18–22 (dorm)",
      food: "€10–15 (supermarket + bakeries)",
      transport: "€5–8 (bus)",
      activities: "€10–20 (beaches are mostly free)",
      total: "€50–65/day",
    },
    {
      tier: "👫 Couple (Mid)",
      accommodation: "€120–180 (double room shared)",
      food: "€50–80 (dining out)",
      transport: "€35–50 (hire car shared)",
      activities: "€60–120 (per couple, shared)",
      total: "€130–215/day pp",
    },
  ],

  mistakes: [
    {
      icon: "🌡️",
      title: "Going in July or August on a budget",
      desc: "Ibiza in peak season (mid-July to late August) is extraordinarily expensive — hostel dorms hit €60–80/night, beaches are overcrowded, club queues are hours long, and restaurant prices double. May–June and September give you 80% of the experience at 40% of the cost, with better weather than you'd think.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🎫",
      title: "Not pre-booking club tickets and turning up at the door",
      desc: "Walking up to Pacha or Amnesia on a peak night and expecting to pay at the door is a mistake that will cost you €150+ or get you refused entry entirely. Buy tickets online at least a week ahead — official websites only, avoid touts. The cheapest tickets sell out first.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏝️",
      title: "Only visiting the party side and missing the island's beauty",
      desc: "The north of Ibiza — San Juan, Portinatx, Cala Salada — is a completely different world: pine forests, traditional fincas, hidden coves, and a pace of life that hasn't changed in decades. Even if you're there for the music, spend at least half a day in the north.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "⛴️",
      title: "Missing Formentera because it seems complicated",
      desc: "Formentera is a 15-minute ferry from Ibiza Town and has some of the most beautiful beaches in the entire Mediterranean. Many visitors never go because they think it requires extra planning — it doesn't. Buy a return ticket at the port on the day (shoulder season) or online (peak season) and go.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🚖",
      title: "Relying on taxis on club nights",
      desc: "After major club nights (2–5am), getting a taxi in Ibiza is extremely difficult. Uberpool doesn't operate here. Plan your return transport before you go out — book a driver in advance, use the official taxi rank queue, or stay somewhere within walking distance of the club. Getting stranded at 4am is miserable.",
      color: "bg-red-50 border-red-200",
    },
  ],

  tips: [
    {
      icon: "🌅",
      title: "The Café del Mar sunset is free — you don't have to buy a drink",
      desc: "The famous Sunset Strip along San Antonio Bay is a public promenade. You can watch the exact same sunset that everyone is paying €15 for a cocktail to see, from the path outside for free. The music still reaches you, the view is identical. If you want the terrace experience, go on a weeknight and arrive early.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🏄",
      title: "Cala Salada is the best beach most tourists don't find",
      desc: "Most tourists cluster at Ses Salines and Cala Conta (both excellent, but very crowded). Cala Salada near San Antonio has pine-forest shade, crystalline water, and a fraction of the crowds. It's only accessible by a steep path or by boat — which keeps it quieter. Go early morning for the best experience.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🎶",
      title: "Boat parties are often better value than club nights",
      desc: "Boat parties like SuperMartXé, Elrow, and various smaller operators offer 4-hour cruises with top DJs, open bars, and Mediterranean swimming stops for €50–80. Compared to a club night at €80–150 entry plus €15–20 per drink, a boat party often gives you more music, better atmosphere, and a swim in the sea. Book via official websites.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🧭",
      title: "The GetYourGuide Ibiza tours include things you'd never find alone",
      desc: "Some of Ibiza's best experiences are hard to arrange independently — kayaking to sea caves, night snorkelling trips, and guided jeep tours of the north. Browse options at the link below and filter by reviews. The island kayaking tours consistently get 5 stars and cost €35–55.",
      color: "bg-purple-50 border-purple-200",
    },
  ],

  faqs: [
    {
      q: "Is Ibiza worth visiting if you don't like clubs?",
      a: "Absolutely — Ibiza has some of the best beaches in the Mediterranean, a UNESCO World Heritage old town, excellent walking and cycling routes, Formentera next door, hippie markets, and a flourishing wellness and yoga scene. The club reputation is real but it only applies to a specific part of the island (mostly around San Antonio and Playa d'en Bossa). Stay in the north or Ibiza Town and you can entirely avoid the party atmosphere if you choose.",
    },
    {
      q: "Which clubs should a first-time visitor go to?",
      a: "Pacha is the most iconic — founded in 1973, the original Ibiza club, intimate by superclub standards, famous for its cherry logo and terrace. Amnesia is the cave-like legendary venue with a glass roof that opens during the day (it's genuinely extraordinary). Hi Ibiza is the most modern, with incredible production values. For a daytime party, Ushuaïa is the open-air superclub pool venue. Pick one for a first visit and do it properly rather than trying to visit multiple.",
    },
    {
      q: "When is the Ibiza club season?",
      a: "The club season runs from the opening parties in late May through to the closing parties in early October. July and August are peak — the biggest names, the highest prices, the most people. June and September offer nearly the same lineup at significantly lower ticket prices and without the extreme crowds. Outside the season (October–April), the island is very quiet — most clubs are closed, but prices drop dramatically and the island is beautiful in winter.",
    },
    {
      q: "How do I get from Ibiza to Formentera?",
      a: "Regular ferry services run from Ibiza Town port (Estació Marítima) to La Savina on Formentera. The fast ferry takes 25–35 minutes, the slower one about 1 hour. Return tickets cost €25–38 depending on season and operator — Baleàlia Lines and Trasmapi are the main operators. In peak season (July–August), pre-book online. The first ferries depart around 7–8am and the last return is around 10pm.",
    },
  ],

  combineWith: ["mallorca-5-days", "barcelona-4-days", "formentera-2-days", "valencia-3-days"],
  relatedSlugs: ["tenerife-4-days", "valencia-3-days", "mallorca-5-days", "barcelona-4-days"],
  galleryQuery: "ibiza dalt vila beach mediterranean sunset cala",
};

/* ── Page component ──────────────────────────────────────────────────────── */
export default function IbizaPage() {
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
