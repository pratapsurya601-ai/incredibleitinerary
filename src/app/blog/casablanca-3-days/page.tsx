import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const siteUrl = "https://www.incredibleitinerary.com";

const data: UniversalBlogData = {
  destination: "Casablanca",
  country: "Morocco",
  countryFlag: "🇲🇦",
  slug: "casablanca-3-days",
  heroQuery: "casablanca morocco hassan ii mosque ocean atlantic",
  heroAlt: "Hassan II Mosque in Casablanca rising above the Atlantic Ocean at sunset",
  category: "Africa",
  date: "April 5, 2026",
  readTime: "12 min read",
  intro:
    "Casablanca confounds expectations in the best possible way — it is not Marrakech, it is not Fez, and that is exactly the point. Morocco's largest city is a working metropolis with the world's third-largest mosque suspended over the Atlantic, a walkable Corniche lined with Art Deco masterpieces, a central market where fishmongers argue over price in three languages, and a Rick's Cafe that plays Casablanca-era jazz every night. Three days is enough to cover the mosque interior, the Ain Diab beach, and the flaky bastilla pastry that will permanently ruin you for any other Moroccan dish.",
  stats: {
    duration: "3 Days",
    budgetFrom: "MAD 250",
    bestMonths: "Mar–May or Sep–Nov",
    airport: "CMN",
  },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Mosque & Corniche" },
    { id: "day2", emoji: "📅", label: "Day 2 — Art Deco & Central Market" },
    { id: "day3", emoji: "📅", label: "Day 3 — Ain Diab Beach & Departure" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Tourist Visa (must apply in advance)"],
        ["Processing", "10–15 business days"],
        ["Fee", "MAD 230 (approx. USD 23)"],
        ["Validity", "Single-entry, 90 days"],
        ["Apply at", "Moroccan Embassy or Consulate"],
        ["Documents", "Return flight, hotel booking, bank statements, passport photos"],
        ["Notes", "Morocco does not offer visa on arrival to Indian passport holders. Apply at least 3 weeks before travel. Some embassies process faster."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Validity", "90 days per visit"],
        ["Passport", "Must be valid 6+ months beyond travel dates"],
        ["Entry form", "Disembarkation card filled on the plane"],
        ["Notes", "Morocco is one of Africa's most straightforward visa-free destinations for Western passport holders. Border control is efficient at CMN airport."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "MAD 250–380/day",
      days: [
        {
          day: "Day 1",
          title: "Hassan II Mosque & Corniche Promenade",
          items: [
            "09:00 — Hassan II Mosque exterior is free to view from the plaza — the minaret at 210 metres is the tallest religious structure in the world; the mosque sits on a promontory over the Atlantic so that worshippers pray above the ocean as the Quran says God's throne was built on water",
            "10:30 — Mosque interior guided tour (MAD 120, non-Muslims permitted; tours depart at set times, book at the entrance) — the main prayer hall holds 25,000 worshippers, the retractable roof opens in good weather, and the hand-carved plasterwork ceiling is breathtaking",
            "13:00 — Lunch at a cafe near the old Medina: harira soup (MAD 10), kefta brochette sandwich (MAD 25), and fresh-squeezed orange juice (MAD 10) — Morocco produces the best oranges in the world and they cost less than water",
            "15:00 — Walk the Corniche (Boulevard de la Corniche) from the mosque toward Ain Diab — 4km of oceanfront promenade with waves crashing on the sea wall; free, always open, best at golden hour",
            "18:00 — Sunset at Ain Diab beach: sit on the sea wall and watch the Atlantic sunset with a mint tea from a nearby cafe (MAD 15)",
            "20:00 — Budget dinner at a neighbourhood restaurant in the Maarif district: bastilla (sweet-savoury chicken or pigeon pastry in filo, dusted with cinnamon and sugar) for MAD 55–75",
          ],
          cost: "MAD 200–280 (mosque tour, food, transit)",
        },
        {
          day: "Day 2",
          title: "Art Deco Walking Tour & Central Market",
          items: [
            "09:00 — Self-guided Art Deco walking tour of the city centre: start at Place Mohammed V and the wilaya (prefecture) building, walk to the former Banque d'Etat, the Excelsior Hotel facade, and the Cinema Rialto on Rue Mohammed el Qory — all within a 1km radius; free",
            "11:00 — Marche Central (Central Market) on Boulevard Mohammed V — Casablanca's covered food market where fishermen bring the day's Atlantic catch; watch the price negotiations, buy fresh dates (MAD 20 per bag), and browse the spice stalls with 50 varieties of ras el hanout",
            "12:30 — Lunch at a restaurant inside or near the Central Market: fish tagine for MAD 60 or grilled sardines (Morocco is the world's largest sardine exporter) for MAD 35; the freshness is extraordinary",
            "14:30 — Old Medina of Casablanca — smaller and less touristy than Marrakech or Fez; walk the narrow lanes around Place Jamaet and the old Portuguese fortifications along the sea wall; free",
            "17:00 — Habous Quarter (New Medina) — built by the French in the 1930s as a planned Moroccan-style neighbourhood; the patisseries sell msemen flatbread and chebakia honey cookies by the dozen for MAD 30",
            "20:00 — Rick's Cafe on Boulevard Sour Jdid (MAD 80–120 for a meal and drink) — the replica of the Humphrey Bogart film bar has live jazz nightly; reservations recommended at weekends",
          ],
          cost: "MAD 200–300 (food, entrance if any, transport)",
        },
        {
          day: "Day 3",
          title: "Ain Diab Beach & Airport Departure",
          items: [
            "09:00 — Ain Diab beach in the morning before crowds arrive — Casablanca's main beach is clean, the Atlantic water is cold but invigorating; sunbed rental MAD 20, free if you bring your own towel",
            "11:30 — Breakfast at a Corniche cafe: msemen (griddle bread) with argan oil and honey for MAD 25, cafe au lait for MAD 15",
            "13:00 — Final lunch at the Marche Central: freshly grilled lobster or sea bass with chermoula herb marinade (MAD 80–120) — the best value seafood meal in North Africa",
            "15:00 — Tram or petit taxi to Mohammed V International Airport (CMN) — tram line T1 from the city centre costs MAD 6; petit taxi MAD 50–70; journey 45–60 minutes",
          ],
          cost: "MAD 150–220 (beach, food, airport transport)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "MAD 700–1,100/day",
      days: [
        {
          day: "Day 1",
          title: "Hassan II Mosque Private Tour & Corniche Dinner",
          items: [
            "10:00 — Check in to a 4-star hotel in the Maarif or Gauthier district (MAD 500–800/night) — these neighbourhoods have the best restaurant access and are 15 minutes from the mosque by taxi",
            "11:00 — Hassan II Mosque: join the official non-Muslim guided tour (MAD 120) or hire a private licensed guide from the tourist office (MAD 300 for 2 hours) for the full architectural history — the carved cedar screens, Italian marble floors, and Italian-Moroccan mosaic hammam are explained in detail",
            "14:00 — Lunch at La Sqala inside the old Portuguese bastion (MAD 80–120/pp) — a garden restaurant in a 17th-century fort serving traditional Moroccan tagines and bastilla in a setting unlike anywhere else in Casablanca",
            "17:00 — Corniche walk to Ain Diab; aperitif at a rooftop bar overlooking the Atlantic at sunset (MAD 80–120 for cocktails)",
            "20:00 — Dinner at La Bodega restaurant in the Maarif (MAD 100–150/pp) — one of Casablanca's best Moroccan-international fusion restaurants with excellent wine selection; the duck pastilla and lamb rack with preserved lemon are standout dishes",
          ],
          cost: "MAD 800–1,100 (hotel, meals, mosque)",
        },
        {
          day: "Day 2",
          title: "Art Deco Architecture Tour & Rick's Cafe",
          items: [
            "09:30 — Guided Art Deco architecture tour of Casablanca with a local architect or heritage guide (MAD 350–500 for 3 hours) — Casablanca has the largest intact Art Deco urban ensemble outside of Miami; the guide accesses building interiors and rooftops normally closed to the public",
            "12:30 — Marche Central for a fish-buying experience: the guide or your hotel can arrange for you to select fresh catch and have it prepared at a nearby restaurant (MAD 50–80 for the fish, MAD 40 cooking fee)",
            "15:00 — Habous Quarter with the guide: the Royal Palace exterior, the Grand Mosque of Casablanca in the quarter, and the honey-and-almond pastry shops with free tasting",
            "17:30 — Mohammed V Square: the French-era fountain and palm trees at the civic heart of the city",
            "20:00 — Rick's Cafe dinner reservation (MAD 150–220/pp) — the jazz programme changes nightly; the menu is Lebanese-Moroccan fusion and the setting is worth every dirham; book ahead online",
          ],
          cost: "MAD 750–1,000 (hotel, tour, meals)",
        },
        {
          day: "Day 3",
          title: "Ain Diab Beach Club & Airport",
          items: [
            "09:00 — Ain Diab beach club (MAD 100–150 day pass including sunbed, umbrella, and shower facilities) — the private beach clubs along the Corniche between Ain Diab and Sidi Abderrahman offer clean swimming with Atlantic waves and poolside service",
            "12:00 — Lunch at the beach club restaurant (MAD 100–150/pp) — grilled Atlantic bass, prawn tagine, and sea-view terrace tables",
            "14:30 — Taxi to a final cafe in the Maarif for mint tea and chebakia sweets to take as gifts (pastry boxes from MAD 50–80)",
            "16:00 — Grand taxi to Mohammed V Airport (MAD 200–250 for the full car) — 45-minute journey; book through hotel concierge for reliability",
          ],
          cost: "MAD 500–750 (hotel, beach club, meals, airport taxi)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "MAD 3,000–6,000/day",
      days: [
        {
          day: "Day 1",
          title: "Private Mosque Tour & Oceanfront Suite",
          items: [
            "12:00 — Check in to Four Seasons Casablanca or Hyatt Regency (MAD 2,500–5,000/night) — the Four Seasons has oceanfront suites with direct Atlantic views and a private beach",
            "14:00 — Private VIP tour of Hassan II Mosque arranged through hotel concierge (MAD 600–900 for a private English-speaking theologian-architect guide) — access to the roof terrace, the underground hammam at timed entry, and the minaret base normally closed to the public",
            "17:30 — Cocktails on the Four Seasons terrace above the Atlantic (MAD 200–300 for cocktails) — the resort is positioned on the Corniche for the best ocean sunset views in the city",
            "20:00 — Dinner at La Maison du Gourmet or the hotel's signature restaurant (MAD 400–600/pp) — the finest French-Moroccan tasting menu in Casablanca with Moroccan wine pairing",
          ],
          cost: "MAD 4,000–7,000 (hotel, private tour, fine dining)",
        },
        {
          day: "Day 2",
          title: "Private Art Deco & Cultural Immersion",
          items: [
            "09:00 — Private architectural tour with a Casablanca heritage architect (MAD 1,200 for half-day) — rooftop access to the finest Art Deco building interiors, the Villa des Arts contemporary gallery, and the Cinematheque de Casablanca archive",
            "13:00 — Lunch at La Sqala (private garden terrace booking, MAD 200–300/pp) — traditional Moroccan bastilla, slow-cooked lamb mechoui, and freshly baked madfouna flatbread",
            "15:30 — Moroccan cooking class at a private riad in the Habous (MAD 800/pp, 3 hours) — a chef teaches bastilla construction, tagine spice blending, and harira timing",
            "20:00 — Rick's Cafe private table reservation with champagne (MAD 300–450/pp) — the jazz is live and the Bogart-era film projections run throughout the evening; the best table overlooks the piano stage",
          ],
          cost: "MAD 3,500–6,000 (hotel, private guide, cooking class, Rick's)",
        },
        {
          day: "Day 3",
          title: "Ain Diab Luxury Beach & Departure",
          items: [
            "09:00 — Four Seasons private beach morning: early morning swim, beachside breakfast service (MAD 300–400/pp), and complimentary watersports including paddleboarding",
            "12:00 — Hydrotherapy spa session at the hotel (MAD 600–900 for 90 minutes) — thalassotherapy using Atlantic seawater in the Moroccan hammam tradition with argan oil treatment",
            "14:30 — Private chef bastilla preparation in-suite (MAD 1,500 arranged by concierge) — a pastilla master prepares the full pigeon-almond-cinnamon version table-side with an explanation of the Fes royal court origins of the dish",
            "17:00 — Private luxury transfer to Mohammed V Airport (MAD 400–600 in a Mercedes S-Class) — hotel concierge arranges meet-and-greet service at the departure terminal",
          ],
          cost: "MAD 2,500–4,500 (hotel, spa, private chef, airport car)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "🎒 Backpacker",
      accommodation: "MAD 40–80 (hostel dorm)",
      food: "MAD 40–70 (harira, kefta, street stalls)",
      transport: "MAD 6–20 (tram + walking)",
      activities: "MAD 0–40 (free promenades, Corniche)",
      total: "MAD 100–180/day",
    },
    {
      tier: "💰 Budget",
      accommodation: "MAD 80–150 (hostel private or budget guesthouse)",
      food: "MAD 80–120 (street food, neighbourhood restaurants)",
      transport: "MAD 30–60 (tram + petit taxi)",
      activities: "MAD 30–120 (mosque tour, markets — mostly free)",
      total: "MAD 250–380/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "MAD 500–800 (4-star hotel)",
      food: "MAD 200–350 (restaurants + cafes)",
      transport: "MAD 80–150 (grand taxi + tram)",
      activities: "MAD 150–350 (guided tours, beach clubs)",
      total: "MAD 700–1,100/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "MAD 2,500–5,000 (Four Seasons or Hyatt Regency)",
      food: "MAD 800–1,500 (fine dining + private chef)",
      transport: "MAD 400–600 (private car)",
      activities: "MAD 600–1,500 (private guides, spa, cooking class)",
      total: "MAD 3,000–6,000+/day",
    },
    {
      tier: "👑 Ultra-Luxury",
      accommodation: "MAD 6,000–12,000 (Four Seasons Royal Suite)",
      food: "MAD 2,000–4,000 (private chef + wine cellar pairing)",
      transport: "MAD 1,000–2,000 (private helicopter Casablanca–Fes)",
      activities: "MAD 2,000–5,000 (VIP mosque access + royal hammam)",
      total: "MAD 10,000–20,000+/day",
    },
  ],
  mistakes: [
    {
      icon: "🕌",
      title: "Skipping the Hassan II Mosque interior",
      desc: "The exterior is free and impressive but the interior tour (MAD 120, non-Muslims welcome) reveals the full scale of the ambition: a 25,000-capacity prayer hall with a retractable roof, a heated marble floor with underfloor system visible in the basement, and the most intricate zellige tilework and stucco carving in any modern building in Morocco.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🎬",
      title: "Expecting Rick's Cafe to be cheap",
      desc: "Rick's Cafe is a high-quality restaurant and jazz venue, not a budget bar. Main courses run MAD 120–200 and cocktails are MAD 80–120. Make a reservation for weekends as it fills up. The experience — live jazz, the Casablanca decor, and the cocktails — is genuinely excellent and worth the price for one evening.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🚕",
      title: "Taking unmetered taxis without agreeing on price first",
      desc: "Petit taxis in Casablanca should use their meters but many drivers prefer to negotiate. Always confirm the price before getting in or insist on the meter. Short city trips should cost MAD 15–30. Uber works well in Casablanca and eliminates negotiation entirely — highly recommended for airport transfers.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🏺",
      title: "Treating Casablanca as just a stopover",
      desc: "Most Morocco itineraries fly into CMN and head straight to Marrakech or Fez. Casablanca deserves 2–3 days of its own. The Art Deco architecture is unique in Africa, the Corniche is one of the finest urban waterfronts on the continent, and the seafood quality at the Central Market is exceptional. It is a genuinely interesting city.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🥐",
      title: "Not trying bastilla before leaving Morocco",
      desc: "Bastilla (also spelled pastilla) is Morocco's most complex and impressive dish: slow-cooked pigeon or chicken with almonds, eggs, and spices, wrapped in layers of paper-thin warka pastry and dusted with cinnamon and icing sugar. The sweet-savoury combination sounds odd and tastes extraordinary. It is the royal dish of Fes but widely available in Casablanca restaurants for MAD 55–90.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🕌",
      title: "Visit the mosque at different times of day",
      desc: "The Hassan II Mosque looks entirely different at dawn (golden light on the white marble), midday (Atlantic spray catches the sunlight around the minaret), and at night (lit from below, reflected in the seawater). The plaza around it is always freely accessible. Book mosque tours and Casablanca excursions at https://www.getyourguide.com/s/?q=Casablanca&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🐟",
      title: "Eat at the Central Market for the freshest Atlantic seafood",
      desc: "Morocco's Atlantic coast produces exceptional fish — sardines, sea bass, sole, and red mullet arrive fresh daily at the Marche Central. The adjacent restaurants will cook your market purchase for a small fee (MAD 30–40). This is the best-value seafood lunch in North Africa. Book accommodation in Casablanca at https://www.booking.com/city/ma/casablanca.html?aid=2820480",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🏛️",
      title: "Walk the Art Deco district without a guide first",
      desc: "The area bounded by Place Mohammed V, Boulevard Mohammed V, and the old Medina has the highest concentration of Art Deco buildings in Africa. Simply walk with your eyes upward: carved concrete facades, ornamental ironwork balconies, and Arabic-geometric hybrid motifs on every block. The Wilaya building and Cinema Rialto are the two unmissable landmarks.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🌊",
      title: "The Atlantic at Ain Diab is cold even in summer",
      desc: "Unlike the Mediterranean, the Moroccan Atlantic coast is cooled by the Canary Current and rarely exceeds 22C even in August. Bring a rash guard or wetsuit for extended swimming. The waves are excellent for bodyboarding and there are several surf schools along the Corniche renting boards and equipment from MAD 100–150 per session.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Is Casablanca worth visiting or should I go straight to Marrakech?",
      a: "Casablanca is absolutely worth 2–3 days. It offers something Marrakech cannot: an authentic Moroccan city that is not primarily a tourist destination. The Hassan II Mosque is a once-in-a-lifetime architectural experience. The Art Deco district is the best in Africa. The Corniche seafood restaurants are exceptional. And the city gives you a realistic picture of modern Morocco beyond the medinas and souks.",
    },
    {
      q: "What is bastilla (pastilla) and where should I eat it?",
      a: "Bastilla is Morocco's most celebrated dish — a large round pie of paper-thin warka pastry filled with slow-cooked pigeon or chicken, beaten eggs, almonds, and spices, then dusted with cinnamon and powdered sugar. The sweet-savoury combination is the flavour identity of Moroccan royal cuisine. In Casablanca, try it at La Sqala in the Portuguese bastion, the Habous Quarter restaurants, or the Maarif neighbourhood restaurants. Expect to pay MAD 55–90 for a portion.",
    },
    {
      q: "How do I get from Casablanca Airport (CMN) to the city?",
      a: "The ONCF train runs directly from Mohammed V Airport (CMN) to Casablanca Port and Casablanca Voyageurs stations every 30 minutes for MAD 45 (35-minute journey). It is the cheapest and most reliable option. Taxis cost MAD 200–350 depending on negotiation skill. Uber works from the airport and costs MAD 120–180 to the city centre.",
    },
    {
      q: "Is it safe to walk around Casablanca at night?",
      a: "The Maarif and Gauthier neighbourhoods, the Corniche, and the area around the Hassan II Mosque are all safe for evening walks and are lively after dark. The old Medina is best visited during the day. As with any large city, be aware of your belongings in crowded areas. The Corniche especially is a popular evening destination for locals of all ages and feels very safe.",
    },
  ],
  combineWith: ["morocco-7-days", "lisbon-4-days", "madrid-3-days"],
  relatedSlugs: ["morocco-7-days", "lisbon-4-days", "madrid-3-days", "marseille-3-days"],
};

export const metadata: Metadata = {
  title: "Casablanca in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 3-day Casablanca itinerary — Hassan II Mosque, Corniche promenade, Art Deco architecture, Rick's Cafe, Central Market, Ain Diab beach, and bastilla pastry. Budget MAD 250/day to luxury. All visa info included.",
  keywords: [
    "Casablanca itinerary",
    "Casablanca 3 days",
    "Morocco travel guide 2026",
    "Hassan II Mosque Casablanca",
    "Art Deco Casablanca",
    "Rick's Cafe Casablanca",
    "bastilla Morocco",
    "Casablanca visa Indian passport",
  ],
  openGraph: {
    title: "Casablanca in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Hassan II Mosque, Corniche, Art Deco architecture, Rick's Cafe, Central Market, and bastilla pastry — Casablanca in 3 days from MAD 250/day to luxury.",
    type: "article",
    url: `${siteUrl}/blog/casablanca-3-days`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Casablanca in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Hassan II Mosque, Corniche, Art Deco architecture, Rick's Cafe, Central Market, and bastilla pastry — Casablanca in 3 days from MAD 250/day to luxury.",
  },
  alternates: {
    canonical: `${siteUrl}/blog/casablanca-3-days`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Casablanca in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: siteUrl,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Casablanca in 3 Days",
          item: `${siteUrl}/blog/casablanca-3-days`,
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Casablanca",
      description:
        "Casablanca, Morocco — Hassan II Mosque, Art Deco architecture, Corniche promenade, Ain Diab beach, Rick's Cafe, Central Market, and bastilla cuisine.",
      geo: { "@type": "GeoCoordinates", latitude: 33.5731, longitude: -7.5898 },
    },
  ],
};

export default function CasablancaPage() {
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
