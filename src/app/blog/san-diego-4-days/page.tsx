import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "San Diego",
  country: "USA",
  countryFlag: "🇺🇸",
  slug: "san-diego-4-days",
  heroQuery: "san diego la jolla cove california coast",
  heroAlt: "San Diego La Jolla Cove with crystal clear water and sea cliffs at golden hour",
  category: "North America",
  date: "April 5, 2026",
  readTime: "12 min read",
  intro:
    "San Diego is California at its most liveable — 70°F year-round sunshine, 70 miles of Pacific coastline, the world's finest zoo, and a craft beer scene that's earned the city the nickname 'Craft Beer Capital of America.' Balboa Park alone holds 17 museums in one gorgeous Spanish Colonial campus. La Jolla Cove puts you swimming with leopard sharks in water so clear it feels like an aquarium. Coronado Island's Hotel del Coronado has hosted every US president since Grover Cleveland. Four days gives you the zoo, the park, the coast, the USS Midway, Old Town, and all the fish tacos you can eat.",
  stats: { duration: "4 Days", budgetFrom: "$80", bestMonths: "Apr–Jun or Sep–Oct", airport: "SAN" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Balboa Park & Zoo" },
    { id: "day2", emoji: "📅", label: "Day 2 — La Jolla & Pacific Beach" },
    { id: "day3", emoji: "📅", label: "Day 3 — Coronado & USS Midway" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — US Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "B1/B2 Tourist Visa"],
        ["Processing", "6–12 weeks (schedule early)"],
        ["Fee", "$185 (non-refundable)"],
        ["Validity", "Up to 10 years, 6 months per entry"],
        ["Apply at", "US Embassy or Consulate"],
        ["Documents", "Invitation letter, bank statements, employment proof, return ticket"],
        ["Notes", "ESTA not available for Indian passport. DS-160 form + interview required. Apply 3 months ahead."],
      ],
    },
    {
      flag: "🇬🇧",
      title: "UK / EU / AU / CA — ESTA or Visa Waiver",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "ESTA (Electronic System for Travel Authorization)"],
        ["Processing", "Usually approved within 72 hours"],
        ["Fee", "$21 per person"],
        ["Validity", "2 years or until passport expiry, 90 days per visit"],
        ["Apply at", "https://esta.cbp.dhs.gov"],
        ["Passport", "Must be valid for the duration of stay"],
        ["Notes", "Apply for ESTA at least 72 hours before departure. Non-VWP countries need B1/B2 visa."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "$80–110/day",
      days: [
        {
          day: "Day 1",
          title: "Balboa Park & Gaslamp Quarter",
          items: [
            "09:00 — Balboa Park opens from dawn; free to walk the grounds — the 1,200-acre park has free outdoor attractions including the Botanical Building, Spanish Village Art Center, and the famous lily pond that Ansel Adams photographed",
            "10:30 — San Diego Museum of Art (free on the first Tuesday of each month, $15 otherwise) — the European collection and rotating temporary exhibitions are genuinely world-class for a city museum",
            "12:30 — Lunch at the park's Prado restaurant patio or grab a burrito from a taco truck on Park Boulevard for $8–10 — San Diego's breakfast burrito culture is serious and the park-adjacent trucks are popular with locals",
            "14:00 — Walk the Cabrillo Bridge into the park's historic core and visit the free outdoor performance areas around the Spreckels Organ Pavilion, home to a 5,000-pipe outdoor organ (free Sunday concerts at 2pm)",
            "18:00 — Gaslamp Quarter walking tour: the 16-block Victorian-era historic district has free self-guided walking maps; grab happy hour craft beer at a local brewery — many have $4–5 pints from 4–6pm",
            "20:00 — Fish tacos dinner at Rubio's or a local taco shop: original Baja-style fish tacos run $3.50–5 each; two tacos and a beer is a complete and satisfying San Diego dinner for under $18",
          ],
          cost: "$40–55 (food, museum, transport)",
        },
        {
          day: "Day 2",
          title: "La Jolla Cove & Pacific Beach",
          items: [
            "08:00 — La Jolla Cove at low tide: free to enter, the best snorkeling in Southern California — rent a mask and fins from a nearby shop for $15 and swim with leopard sharks, garibaldi fish, and sea lions in crystal-clear water",
            "10:30 — Walk the La Jolla coastline from the Cove to Children's Pool Beach where harbor seals haul out — the cliffside path above the cove is free and one of the most scenic coastal walks in California",
            "12:30 — Lunch in La Jolla Village: fresh fish tacos at Puesto La Jolla run $5–7 each, or visit the Farmers Market on Sunday for cheap and delicious local produce and street food",
            "15:00 — Pacific Beach boardwalk: rent a beach cruiser bicycle ($8/hour) and ride the 3-mile Mission Beach and Pacific Beach boardwalk — the longest beachfront walkable promenade in San Diego",
            "18:00 — Happy hour at a Pacific Beach bar: draft beers from $3.50 during happy hour; watch the sunset from the Crystal Pier, which is free to walk and juts 300 feet over the Pacific",
          ],
          cost: "$50–70 (snorkel rental, bike, food, transport)",
        },
        {
          day: "Day 3",
          title: "USS Midway & Coronado Ferry",
          items: [
            "09:30 — USS Midway Museum ($26 admission): the aircraft carrier turned museum is one of the most impressive military museums in the world; budget 2.5 hours — the flight simulators and cockpit access are included",
            "12:30 — Walk to the Coronado Ferry terminal at Broadway Pier — the ferry costs $5.50 each way and takes 15 minutes, offering great skyline views of downtown San Diego",
            "13:00 — Coronado Island: walk or rent a bike (rentals $15/2 hours) and cycle the 4-mile stretch of Coronado Beach — consistently rated among America's best beaches; the Hotel del Coronado is free to walk through",
            "17:00 — Ferry back to downtown and walk through Little Italy for happy hour and dinner — authentic Italian-American neighborhood with craft beer bars and restaurants; pizza by the slice from $4",
          ],
          cost: "$50–65 (USS Midway, ferry, bike, food)",
        },
        {
          day: "Day 4",
          title: "Old Town & Craft Beer Trail",
          items: [
            "09:00 — Old Town San Diego State Historic Park is free to enter — California's first European settlement has preserved adobe buildings, free museums, and the Whaley House (America's most haunted building, $6 entry)",
            "11:00 — Old Town Mexican food: breakfast at Casa de Reyes or grab a $3 tortilla made fresh on a comal at a market stall — the tortillas in Old Town are made by hand using a 200-year-old recipe",
            "14:00 — North Park craft brewery trail: Karl Strauss, Amplified Ale Works, and Mike Hess Brewing are all within walking distance; most have $5–6 pint prices and free tasting paddles on weekdays",
            "17:00 — Sunset at Sunset Cliffs Natural Park in Ocean Beach: free to visit, the dramatic rocky cliffs face due west for the most photogenic sunsets in San Diego — arrive 30 minutes before sunset for best light",
          ],
          cost: "$40–55 (food, Old Town entry, brewery flights)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "$180–260/day",
      days: [
        {
          day: "Day 1",
          title: "San Diego Zoo & Balboa Park",
          items: [
            "08:30 — San Diego Zoo opens at 9am; book online for $64 adult admission (saves time queuing) — arrive early for the pandas, gorillas, and polar bears before noon crowds; the Skyfari aerial tram gives a great overview",
            "13:00 — Lunch at the Albert's Restaurant inside the zoo (sit-down, $18–22 per plate) — eating inside saves re-entry complications; the terrace overlooks the aviaries",
            "15:30 — After the zoo, explore Balboa Park's Timken Museum of Art (free, but donate) and the Museum of Photographic Arts ($10) — both are quiet alternatives to the crowded Natural History Museum",
            "19:00 — Dinner in the Gaslamp Quarter at Jsix Restaurant or Puesto — mid-range San Diego restaurants average $25–35 per person for mains; the craft cocktail scene here rivals any US city",
          ],
          cost: "$120–150 (zoo, meals, museum, Uber)",
        },
        {
          day: "Day 2",
          title: "La Jolla Sea Cave Kayaking & Torrey Pines",
          items: [
            "08:30 — La Jolla sea cave kayaking tour ($55–65, 2 hours, book ahead) — paddle through the seven sea caves carved into the La Jolla sandstone cliffs; guides point out leopard sharks and sea lions in the kelp forests",
            "11:30 — Brunch at Brockton Villa restaurant overlooking La Jolla Cove ($20–25 per person) — the coast toast with berries and the eggs Benedict are local favourites; reserve ahead on weekends",
            "14:00 — Torrey Pines State Natural Reserve hike: the Guy Fleming Trail (1.3 miles, free) walks through the world's rarest pine trees above 300-foot sandstone cliffs over the Pacific",
            "18:00 — Sunset at La Jolla Farms beach access (lesser-known locals spot) then dinner at George's at the Cove (mid-level terrace menu $30–40/pp) with panoramic ocean views",
          ],
          cost: "$150–200 (kayak, meals, reserve parking)",
        },
        {
          day: "Day 3",
          title: "USS Midway, Little Italy & Coronado",
          items: [
            "09:00 — USS Midway Museum with audio guide ($26 + $8 audio) — the self-guided audio tour adds enormous depth; look for the Vietnam-era aircraft and the restored captain's quarters",
            "12:00 — Lunch in Little Italy at Cucina Urbana ($20–28/pp) — one of San Diego's best neighbourhood restaurants; the charcuterie board and wood-fired pizzas are exceptional",
            "14:30 — Coronado Island water taxi ($5.50) — check into a beach hotel on Coronado if splitting the trip, or spend the afternoon cycling the Silver Strand ($15 bike rental) which connects Coronado to Imperial Beach",
            "19:00 — Dinner at Stake Chophouse & Bar in Coronado ($50–65/pp) with views of the San Diego skyline — prime cuts and a wine list focused on California varietals",
          ],
          cost: "$160–200 (museum, meals, ferry, activities)",
        },
        {
          day: "Day 4",
          title: "Balboa Park Museums & Craft Breweries",
          items: [
            "09:00 — San Diego Natural History Museum ($25) — the dinosaur fossil collection and California's biodiversity galleries are impressive; the building itself is a 1933 Spanish Colonial masterpiece",
            "12:00 — Prado Restaurant lunch in Balboa Park ($18–25/pp) — mid-century décor inside a 1915 Panama-California Exposition building; the seasonal California cuisine menu changes monthly",
            "14:30 — Modern Times Beer tasting room in North Park or Stone Brewing World Bistro (take Uber from park, 10 minutes) — Stone's garden patio is one of the best beer garden settings in the USA",
            "18:00 — Sunset Cliffs then dinner in Ocean Beach at the Firehouse OB ($25–30/pp) — the surf-town neighbourhood vibe and fresh seafood make for the perfect final San Diego dinner",
          ],
          cost: "$150–180 (museum, meals, brewery, transport)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "$450–800/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Zoo VIP & Gaslamp Dining",
          items: [
            "11:00 — Check into Hotel del Coronado ($400–700/night) or Estancia La Jolla ($350–550/night) — both are historic California resort properties with world-class spas and ocean or garden views",
            "13:00 — San Diego Zoo Backstage Pass VIP experience ($175–200 per person): private behind-the-scenes access to animal care areas, meet with zookeepers, and exclusive time with the pandas and koalas",
            "18:00 — Cocktails at Raised by Wolves in UTC (hidden underground speakeasy, book a reservation, cocktails $20–25) — one of America's most awarded bar programs in a dramatic underground grotto setting",
            "20:00 — Dinner at Addison Restaurant ($195 tasting menu) — San Diego's only two-Michelin-star restaurant; Chef William Bradley's 10-course California cuisine menu uses exclusively local and seasonal ingredients",
          ],
          cost: "$700–900 (hotel, VIP zoo, cocktails, Michelin dinner)",
        },
        {
          day: "Day 2",
          title: "Private Yacht Charter & La Jolla",
          items: [
            "08:00 — Private yacht charter from Shelter Island Marina ($500–800 for 4 hours, up to 6 guests): sail past Point Loma, through the kelp forests, and anchor at La Jolla for snorkeling — crew provides equipment and food",
            "13:00 — Lunch at George's at the Cove Ocean Terrace ($40–55/pp with wine) — the prime La Jolla table with 180-degree Pacific views; the sashimi tower and Dungeness crab are seasonal highlights",
            "16:00 — Spa afternoon at Torrey Pines Lodge Spa ($200–300 for a 90-minute signature treatment) — the cliff-top spa overlooks the Pacific; the outdoor hot tub has uninterrupted ocean views at sunset",
            "20:00 — Dinner at Nobu San Diego at the Hard Rock Hotel ($80–120/pp) — black cod miso and wagyu beef enhance the Japanese-Peruvian fusion menu; request a booth with harbour views",
          ],
          cost: "$900–1,200 (yacht, meals, spa, hotel)",
        },
        {
          day: "Day 3",
          title: "Private USS Midway Tour & Rooftop Dining",
          items: [
            "09:00 — Private docent tour of USS Midway ($120/group, book through museum) — access areas not on the public tour including the engine room and the combat information centre; retired naval officers lead select tours",
            "12:00 — Helicopter scenic tour of San Diego coastline ($250–350 per person, 30 minutes) — fly over the Silver Strand, Coronado, Point Loma, and La Jolla from 1,500 feet with doors-off option available",
            "15:00 — Hotel Del Coronado pool and beach afternoon — the Victorian resort's private beach attendants set up chairs and umbrellas; order room service directly to the beach",
            "20:00 — Rooftop dinner at Coasterra on Harbor Island ($70–90/pp) — the floating restaurant on the harbour has the most dramatic downtown skyline view in San Diego; the whole grilled sea bass and the margarita programme are celebrated",
          ],
          cost: "$800–1,100 (private tour, helicopter, hotel, dinner)",
        },
        {
          day: "Day 4",
          title: "Sunrise Surf Lesson & Farewell Brunch",
          items: [
            "06:30 — Private sunrise surf lesson at Pacific Beach with a certified instructor ($150 for 2 hours, 1-on-1): San Diego is America's best city for learning to surf — gentle beach breaks, warm water, and year-round conditions",
            "10:00 — Champagne brunch at The Marine Room in La Jolla ($60–80/pp): the restaurant sits literally on the beach with waves crashing against the floor-to-ceiling windows; the Sunday brunch includes a live jazz quartet",
            "13:00 — Browse the galleries on Prospect Street in La Jolla Village — the finest art gallery district in Southern California; many sell California plein-air paintings from $500–5,000",
            "16:00 — Private car transfer to San Diego International Airport (SAN, 20 minutes from La Jolla): a luxury black car service costs $85–120 and is booked through hotel concierge",
          ],
          cost: "$500–700 (surf lesson, brunch, galleries, car service)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$30–50 (hostel or budget motel)",
      food: "$25–35 (tacos, burritos, food trucks)",
      transport: "$10–15 (bus, trolley, Uber)",
      activities: "$15–25 (select entry fees)",
      total: "$80–125/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$120–200 (3-star hotel or vacation rental)",
      food: "$60–90 (restaurants + craft beer)",
      transport: "$20–35 (Uber, rental car day)",
      activities: "$50–80 (zoo, museums, kayak)",
      total: "$180–260/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$350–700 (Hotel Del Coronado or Estancia)",
      food: "$150–250 (Michelin + fine dining)",
      transport: "$80–150 (private car, yacht)",
      activities: "$200–400 (VIP zoo, helicopter, yacht)",
      total: "$450–800+/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "$20–30 (hostel dorm near downtown)",
      food: "$15–20 (taco shops, food trucks)",
      transport: "$8–12 (trolley day pass)",
      activities: "$5–15 (free parks and beaches)",
      total: "$50–75/day",
    },
    {
      tier: "👨‍👩‍👧 Family",
      accommodation: "$200–350 (vacation rental, Mission Beach)",
      food: "$80–120 (casual dining, groceries)",
      transport: "$40–60 (rental car + parking)",
      activities: "$120–180 (zoo, Midway, LEGOLAND nearby)",
      total: "$300–450/day (family of 4)",
    },
  ],
  mistakes: [
    {
      icon: "🚗",
      title: "Not renting a car or planning transport",
      desc: "San Diego is sprawling — La Jolla, Balboa Park, Coronado, and Old Town are all 10–25 minutes apart by car but 45–90 minutes by bus. A rental car ($35–50/day) or strategic Uber use saves hours. The trolley system is excellent downtown but doesn't reach La Jolla or Coronado.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "☀️",
      title: "Underestimating the June Gloom",
      desc: "May and June bring a marine layer that keeps mornings grey and cool until noon most days. If you want guaranteed blue skies and warm beach weather, visit April, late September, or October. 'Sunny San Diego' is mostly true from July through November.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🦁",
      title: "Not booking the San Diego Zoo in advance",
      desc: "The zoo sells timed-entry tickets that frequently sell out 1–2 weeks ahead in summer. Book online at sandiegozoo.org to avoid disappointment and to save the $5 gate surcharge. The Zoo Safari Park (40 miles away) is a separate ticket and separate day.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🌮",
      title: "Eating fish tacos anywhere but a taco shop",
      desc: "San Diego is the birthplace of the American fish taco — the original came from Ensenada across the border and landed at Rubio's. The best tacos are at no-frills taco shops in Barrio Logan, City Heights, and Old Town, not at tourist-facing restaurants. Budget $3–5 per taco at the right spots.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏖️",
      title: "Spending all time in the Gaslamp Quarter",
      desc: "The Gaslamp is fun for a night out but it's the least representative part of San Diego. North Park, South Park, Ocean Beach, and Little Italy are where locals actually eat, drink, and live. The beaches at La Jolla and Coronado are vastly more beautiful than those directly downtown.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🎫",
      title: "Get the San Diego Explorer Pass for attractions",
      desc: "The San Diego Explorer Pass includes admission to 3, 4, or 5 attractions from a list of 40+ and costs from $79 — it covers the zoo, USS Midway, Balboa Park museums, and more. If visiting 3+ paid attractions, the pass saves $20–40. Book tours in advance at https://www.getyourguide.com/s/?q=San+Diego&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌊",
      title: "Visit La Jolla Cove at low tide on a weekday morning",
      desc: "La Jolla Cove is free, one of the most spectacular snorkeling spots in the USA, and best experienced early on a weekday when parking is available and the tide pools are fully exposed. The sea lion colony at Children's Pool is most active on cool mornings. Arrive before 8:30am in summer.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🍺",
      title: "San Diego's craft beer scene is the best in America",
      desc: "San Diego has over 150 craft breweries — Stone, Ballast Point, Green Flash, Modern Times, and Karl Strauss all originated here. The North Park and Mission Valley neighborhoods have the highest concentration. Most tasting rooms are free to enter with $5–7 pints; many offer free samples.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🚢",
      title: "Take the Coronado ferry, not just the bridge",
      desc: "The San Diego–Coronado Bridge is car-only. The 15-minute ferry from Broadway Pier to Coronado Ferry Landing costs $5.50 and offers the best views of the downtown skyline and the aircraft carriers at Naval Air Station North Island. The ferry runs daily from 9am–10pm every hour.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "How many days do you need in San Diego?",
      a: "Four days is ideal for a first visit — enough time for the San Diego Zoo, Balboa Park, La Jolla, Coronado Island, USS Midway, Old Town, and at least one craft brewery neighborhood. Extend to 5–6 days if you want to add the Safari Park, Tijuana day trip, or day hikes in the Cleveland National Forest.",
    },
    {
      q: "Is San Diego safe for tourists?",
      a: "San Diego consistently ranks as one of the safest large cities in the United States. The main tourist areas — La Jolla, Coronado, Little Italy, Balboa Park, and Mission Beach — are extremely safe day and night. Exercise normal big-city awareness in East Village and around the Greyhound station downtown after dark.",
    },
    {
      q: "Is a car necessary in San Diego?",
      a: "A car is not strictly necessary but makes the trip significantly easier. The MTS trolley covers downtown, Old Town, and Mission Valley well. For La Jolla, Coronado, Pacific Beach, and North Park breweries, you'll rely on Uber ($12–20 per ride) or a rental car. A rental car for Days 2–4 costs $35–50/day and is recommended for a 4-day trip.",
    },
    {
      q: "What is the best time of year to visit San Diego?",
      a: "September and October offer the best weather: warm ocean temperatures (70°F), minimal fog, low humidity, and smaller crowds than summer. April and May are also excellent with wildflower blooms in Anza-Borrego and moderate crowds. Avoid June for the marine layer (June Gloom). December through February is mild but cooler for beach activities.",
    },
  ],
  combineWith: ["los-angeles-5-days", "las-vegas-4-days", "san-francisco-4-days"],
  relatedSlugs: ["los-angeles-5-days", "las-vegas-4-days", "hawaii-7-days", "mexico-city-4-days"],
  galleryQuery: "san diego balboa park zoo coronado beach california",
};

export const metadata: Metadata = {
  title: "San Diego in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 4-day San Diego itinerary — Balboa Park, San Diego Zoo, La Jolla Cove, Coronado Island, USS Midway, fish tacos, and craft beer. Budget $80/day to luxury resorts. All visa info included.",
  keywords: [
    "San Diego itinerary",
    "San Diego 4 days",
    "San Diego travel guide 2026",
    "San Diego Zoo",
    "La Jolla Cove",
    "Coronado Island",
    "USS Midway Museum",
    "San Diego visa Indian passport",
    "Balboa Park",
    "Gaslamp Quarter",
  ],
  openGraph: {
    title: "San Diego in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Balboa Park, San Diego Zoo, La Jolla Cove, Coronado Island, USS Midway, and the best fish tacos in California — San Diego in 4 days from $80/day.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/san-diego-4-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "San Diego in 4 Days: Complete 2026 Itinerary",
    description:
      "The complete San Diego 4-day guide — zoo, La Jolla, Coronado, USS Midway, fish tacos, craft beer. Budget to luxury.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/san-diego-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "San Diego in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "San Diego in 4 Days",
          item: "https://www.incredibleitinerary.com/blog/san-diego-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "San Diego",
      description:
        "San Diego, California, USA — home to the world-famous Zoo, Balboa Park's 17 museums, La Jolla Cove, Coronado Island, the USS Midway, and America's best craft beer scene.",
      geo: { "@type": "GeoCoordinates", latitude: 32.7157, longitude: -117.1611 },
    },
  ],
};

export default function SanDiegoPage() {
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
