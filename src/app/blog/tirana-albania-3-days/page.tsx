import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Tirana, Albania",
  country: "Albania",
  countryFlag: "🇦🇱",
  slug: "tirana-albania-3-days",
  heroQuery: "tirana albania colourful buildings skanderbeg square",
  heroAlt: "Tirana Albania colourful buildings and Skanderbeg Square with Et'hem Bey Mosque at golden hour",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "12 min read",
  intro:
    "Tirana is Europe's most overlooked capital — a city of extraordinary contradictions where bunkers from Enver Hoxha's paranoid communist dictatorship sit beneath bars serving the best cocktails on the Adriatic coast, and where former mayor Edi Rama painted entire residential blocks in psychedelic colours as an act of political optimism. The Bunk'Art museum system has converted two of Hoxha's nuclear bunkers into the most chilling and compelling Cold War museums in Europe. The Blloku district, once reserved exclusively for the communist elite, is now packed with the most inventive cafe and bar culture in the Western Balkans. Three days is perfect: enough time to understand the communist past, explore the colourful present, eat byrek pastry for breakfast, and take the Dajti cable car above the city to the mountain that watched over everything.",
  stats: { duration: "3 Days", budgetFrom: "€30", bestMonths: "Apr–Jun or Sep–Oct", airport: "TIA" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Bunkers & Old Town" },
    { id: "day2", emoji: "📅", label: "Day 2 — Blloku & Mosaic" },
    { id: "day3", emoji: "📅", label: "Day 3 — Dajti & Departure" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Albania visa — NOT in Schengen, separate visa required"],
        ["Processing", "10–15 business days at Albania Embassy"],
        ["Fee", "€30–50 depending on visa type"],
        ["Validity", "Single or multiple entry, up to 30 days typically"],
        ["Apply at", "Embassy of Albania or consular section"],
        ["Documents", "Hotel bookings, return flight, bank statements, travel insurance"],
        ["Notes", "Holders of valid Schengen, US, UK, or EU residence permits may enter Albania visa-free for 90 days — verify current bilateral agreement before travel."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free (Albania grants unilateral visa-free access)"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Validity", "90 days in a 180-day period"],
        ["ETIAS", "Not applicable — Albania is not EU or Schengen member state"],
        ["Passport", "Must be valid 3+ months beyond travel dates"],
        ["Notes", "Albania is an EU candidate country. No ETIAS required. Seasonal summer entry may extend to 12 months for some passport holders — check current rules."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "€30–50/day",
      days: [
        {
          day: "Day 1",
          title: "Bunk'Art Bunker Museum & Skanderbeg Square",
          items: [
            "10:00 — Bunk'Art 1 museum in the communist-era nuclear bunker on the Dajti mountain road (€5, take taxi for €4 or bus 5 for €0.40) — a 5-storey bunker with 106 rooms built for Hoxha and the Politburo, now a museum on communist Albania's paranoid Cold War history",
            "13:00 — Lunch at a local byrek bakery (€1–2 for a slice of the flaky spinach or meat pastry) — byrek is Albania's national street food and the best versions are from old-fashioned neighbourhood bakeries, not tourist cafes",
            "15:00 — Skanderbeg Square: the rebuilt communist-era main square with the equestrian statue of Albania's national hero; the National History Museum mosaic on the north side of the square is one of socialist realism's largest artworks (€5 museum entry)",
            "17:00 — Et'hem Bey Mosque (free) — an 18th-century Ottoman mosque that survived Hoxha's 1967 campaign to make Albania the world's first atheist state; the interior frescoes depicting trees, waterfalls, and bridges are unique in Islamic art",
            "20:00 — Dinner in the Blloku district (€8–12) — the former communist elite residential zone now packed with restaurants; try taverna-style grilled lamb, fergese (peppers with cottage cheese and offal), and raki spirit",
          ],
          cost: "€25–35 (museum, lunch, dinner, local transport)",
        },
        {
          day: "Day 2",
          title: "Blloku District, Colourful Buildings & National Museum",
          items: [
            "10:00 — Bunk'Art 2 museum in the Ministry of Internal Affairs bunker in central Tirana (€5) — focuses on the Sigurimi secret police, political prisoners, and the full human cost of 45 years of Hoxha's communist dictatorship",
            "12:30 — Walking tour of Edi Rama's colourful buildings in the Blloku district (free) — the former mayor and current Prime Minister painted the communist-era apartment blocks in vivid geometric patterns as urban renewal; every block is a different palette",
            "14:00 — Lunch at a Blloku cafe (€5–8) — the neighbourhood has the best coffee culture in Albania and the most inventive cafe interiors; Tirana cafes rival Sarajevo for the depth of the coffee ritual",
            "16:00 — National History Museum on Skanderbeg Square (€5) — traces Albanian history from Illyrian times through Ottoman rule, the National Renaissance, and communist era to independence; the ancient Illyrian collection and communist-era photographs are exceptional",
            "20:00 — Blloku bar crawl (budget €10–15 for the evening) — the district has dozens of bars in converted villas with garden terraces; local Tirana beer costs €1.50, cocktails €3–5",
          ],
          cost: "€25–38 (museums, food, evening drinks)",
        },
        {
          day: "Day 3",
          title: "Dajti Mountain Cable Car & Departure",
          items: [
            "09:00 — Dajti Express cable car from the eastern edge of Tirana (€800 lek return, about €6.50) — the gondola rises 1,613m to the top of Mount Dajti national park in 15 minutes; the view back over Tirana spread across its bowl below the mountains is the city's best photograph",
            "10:30 — Dajti mountain walk through the pine forest (free) — the trails from the cable car station wind through 3,000 hectares of national park; a 90-minute loop reaches a viewpoint overlooking the Adriatic coast on clear days",
            "13:00 — Lunch at the Panorama restaurant at the cable car summit (€10–15) — grilled mountain lamb, local white cheese, and a cold Korce beer while looking down at the city",
            "15:00 — Return cable car to Tirana; last walk through the Grand Bazaar area (Pazari i Ri new bazaar) for local cheese, olives, and spices as gifts",
            "17:00 — Transfer to Mother Teresa Airport by taxi (€8–12) or Rinas Express bus (€3, 40 min)",
          ],
          cost: "€25–38 (cable car, lunch, airport transport, market)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "€80–120/day",
      days: [
        {
          day: "Day 1",
          title: "Boutique Hotel Arrival & Guided Bunker Tour",
          items: [
            "13:00 — Check in to a boutique hotel in the Blloku district or old bazaar area (€50–90/night) — Tirana has excellent mid-range boutique accommodation that opened in the past decade as the city modernised",
            "15:00 — Guided Bunk'Art 1 tour with an English-speaking guide who was a child during the communist era (€25/person including entry) — the personal testimony transforms the bunker from a historical exhibit into lived experience",
            "18:00 — Walking tour of the Blloku colourful buildings and former communist villa district with a local guide (€20, 90 min) — includes the house of Enver Hoxha himself, now a private residence behind a wall",
            "21:00 — Dinner at Era restaurant in Blloku (€25–35/pp) — considered Tirana's finest traditional Albanian restaurant; try the tavce gravce bean stew, grilled offal, and the local raki made from grapes or mulberries",
          ],
          cost: "€95–120 (hotel, guided tours, dinner)",
        },
        {
          day: "Day 2",
          title: "National Museum, Ottoman Tirana & Pazari i Ri",
          items: [
            "10:00 — National History Museum full visit with audio guide (€8 including audio guide) — allow 2 hours for the complete collection from Illyrian archaeology to 20th-century photography",
            "13:00 — Lunch at Pazari i Ri (New Bazaar) in the restored Ottoman market hall (€12–18/pp) — the covered market was renovated in 2016 and now houses food stalls, restaurants, and local produce; the best byrek, petulla fried dough, and grilled corn in Tirana",
            "15:00 — Et'hem Bey Mosque and Clock Tower guided visit (€10 for both with guide) — the Clock Tower next to the mosque dates from 1822 and is climbable for panoramic old town views",
            "18:00 — Bunk'Art 2 and then coffee at a classic Blloku cafe (€3 for a macchiato); the Albanian macchiato is shorter and stronger than Italian and is the standard order",
            "21:00 — Blloku restaurant dinner and cocktail bar visit (€30–40/pp for dinner and drinks)",
          ],
          cost: "€100–130 (hotel, museums, meals, bars)",
        },
        {
          day: "Day 3",
          title: "Dajti, Kruje Day Trip & Departure",
          items: [
            "08:00 — Private taxi to Kruje fortress town 32km north of Tirana (€30 return, 45 min) — Skanderbeg's castle, the National Museum inside the fortress, and the Ottoman bazaar selling traditional crafts; Kruje is the most important historical site in Albania",
            "11:00 — Kruje Bazaar: hand-woven kilim rugs, copper craft, embroidered textiles, and antiques at prices far below Tirana tourist shops (€20–50 for quality pieces)",
            "13:00 — Return to Tirana; Dajti Express cable car afternoon ride for the mountain views (€6.50 return)",
            "16:00 — Farewell coffee in Blloku and last byrek from a street bakery (€1.50)",
            "18:00 — Transfer to Mother Teresa Airport (taxi €10 or Rinas bus €3)",
          ],
          cost: "€90–115 (Kruje taxi, cable car, crafts, airport transport)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "€200–350/day",
      days: [
        {
          day: "Day 1",
          title: "Art Hotel Arrival & Private Bunker Experience",
          items: [
            "12:00 — Private transfer from Mother Teresa Airport to Tirana's finest hotel (€20) — the Tirana International Hotel and the Plaza Tirana are the luxury benchmarks; a new wave of design hotels has opened in Blloku in the past 5 years",
            "15:00 — Private guided Bunk'Art 1 experience with the museum director and a Cold War historian (€150/2 hours) — includes access to rooms not on the public tour and a private documentary screening in the bunker's cinema",
            "19:00 — Cocktails at a rooftop bar in Blloku with panoramic city and Dajti mountain views (€15/cocktail)",
            "21:00 — Dinner at Mullixhiu restaurant (€60–80/pp) — Tirana's most acclaimed modern Albanian restaurant, led by chef Bledar Kola who trained in Scandinavia and returned to reinvent Albanian cuisine; the fermented dairy, wild herb, and preserved vegetable dishes are revelatory",
          ],
          cost: "€250–350 (hotel, private bunker, dinner)",
        },
        {
          day: "Day 2",
          title: "Private Art Tour & Blloku Design Walk",
          items: [
            "10:00 — Private art tour of Tirana's contemporary galleries and Edi Rama's architectural interventions with an art historian (€100/2 hours) — Rama was a professional painter before becoming mayor; his urban colour interventions are documented and contextualised by few guides",
            "13:00 — Private cooking class with a traditional Albanian cook in Blloku (€80/person, 3 hours including lunch) — learn to make byrek from scratch, fergese, tavce gravce, and tave kosi yogurt-baked lamb; eat what you cooked with local wine",
            "17:00 — National History Museum private curator-led visit (€80 for exclusive after-hours tour) — the communist-era photography archive and the Illyrian gold collection rarely shown to the public",
            "21:00 — Dinner at Era or a private chef dinner arranged by hotel concierge at a Blloku villa (€80–100/pp)",
          ],
          cost: "€280–380 (hotel, art tour, cooking class, private museum, dinner)",
        },
        {
          day: "Day 3",
          title: "Dajti Sunrise & Kruje Private Tour",
          items: [
            "07:00 — Private sunrise Dajti cable car trip with a mountain guide (€100 for exclusive first-morning ride + guide) — the city emerging from dawn mist below, the Adriatic visible on the horizon, and the mountains of Macedonia behind",
            "10:00 — Private car to Kruje with a historian guide (€150 including transport, 3 hours) — private access to the Skanderbeg Museum archive, the castle battlements, and a private artisan workshop demonstration in the Ottoman bazaar",
            "14:00 — Farewell lunch at a Kruje family restaurant (€40/pp) — whole-roast lamb, local cheese board, and the best petulla sweet fried dough in Albania",
            "17:00 — Return to Tirana; private transfer to airport (€20)",
          ],
          cost: "€280–400 (cable car, private Kruje tour, lunch, transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€10–20 (hostel or budget guesthouse)",
      food: "€6–12 (byrek, taverna meals, street food)",
      transport: "€2–6 (buses + local taxis)",
      activities: "€5–15 (Bunk'Art, museums, cable car)",
      total: "€30–50/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€50–90 (boutique hotel in Blloku)",
      food: "€20–40 (restaurants + cafes)",
      transport: "€10–20 (taxis + Kruje day trip)",
      activities: "€20–35 (guided tours, all museums)",
      total: "€80–120/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€120–250 (design hotel or 5-star)",
      food: "€60–120 (Mullixhiu level dining + cooking class)",
      transport: "€30–80 (private car, transfers)",
      activities: "€80–200 (private tours, exclusive access)",
      total: "€200–350/day",
    },
    {
      tier: "🎟 Day Trip Only",
      accommodation: "N/A (based in Kotor or Split)",
      food: "€8–12 (byrek + taverna lunch)",
      transport: "€20–30 (bus or shared shuttle from Kotor)",
      activities: "€5–10 (Bunk'Art or museum)",
      total: "€33–52/day trip",
    },
    {
      tier: "🍽 Food Budget",
      accommodation: "N/A",
      food: "€3–6 (byrek + petulla + Turkish coffee)",
      transport: "€0 (walking Blloku and Skanderbeg Square)",
      activities: "€0 (mosque and square are free)",
      total: "€3–6/food day",
    },
  ],
  mistakes: [
    {
      icon: "⏰",
      title: "Skipping Bunk'Art because it sounds grim",
      desc: "Bunk'Art is not a grim experience — it is a brilliant one. The bunker architecture is extraordinary, the Cold War photography is world-class, and the testimony of Albanians who lived through Hoxha's rule is unlike anything in any Western European museum. It is the single most important thing to do in Tirana.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "☕",
      title: "Ordering coffee in a hurry",
      desc: "Albanian cafe culture is serious and slow. The macchiato is drunk standing at the bar over 15 minutes. Ordering a takeaway coffee to go will get you confused looks. Sit down, pay €0.80–1.50, and treat the coffee as the social ritual Albanians understand it to be.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "💶",
      title: "Assuming Albanian prices are like Western Europe",
      desc: "Tirana is one of the cheapest capital cities in Europe. A full restaurant meal is €6–10, a museum is €5, a cable car is €6.50, and a decent hotel room is €25–40. Travellers who budget €80/day in Tirana will feel wealthy. Over-budgeting means under-exploring.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🏛️",
      title: "Not visiting Kruje on a day trip",
      desc: "Kruje — 32km north of Tirana — has Skanderbeg's castle, the finest Ottoman bazaar in the country, and the museum that explains why Albanians consider themselves the oldest nation in Europe. The taxi costs €30 return. This is the most rewarding 3-hour day trip in the Western Balkans.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🗺️",
      title: "Missing Blloku district at night",
      desc: "Blloku by day is colourful architecture and boutique cafes. By night it transforms into the best bar district in the Balkans — garden terraces in former communist villas, cocktail bars in converted garages, and a crowd of young Albanians who have made their city one of Europe's most unexpectedly vibrant capitals.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🎫",
      title: "Book tours in advance on GetYourGuide",
      desc: "Bunk'Art guided tours, Kruje day trips, and Dajti mountain hikes all have free cancellation on GetYourGuide — useful in Albania where sudden summer heat can change plans. Book at https://www.getyourguide.com/s/?q=Tirana+Albania&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🥐",
      title: "Eat byrek every morning for breakfast",
      desc: "Byrek is Albania's defining food: layers of filo pastry filled with spinach and feta, meat and onion, or pumpkin, baked in rounds and sold by the slice for €1–1.50. The best byrek bakeries open at 6am and sell out by 10am. Ask locals to direct you to the nearest furrore (bakery) rather than a tourist cafe.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🎨",
      title: "Walk the Blloku colourful building route with a map",
      desc: "Edi Rama's painted building programme covers dozens of blocks across Tirana. The most photographed stretch runs from the Italian Embassy down Rruga Ismail Qemali. Download the offline map on Maps.me before going — the alleys between the painted blocks are not always on Google Maps.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🚡",
      title: "Take the Dajti cable car in the morning for clear views",
      desc: "Afternoon cloud cover over Mount Dajti is common May through September. The cable car at 9–10am on a clear morning gives unobstructed views across Tirana, the Adriatic 30km west, and the Albanian Alps to the north. Check the weather app the night before and go early on a clear day.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Is Albania safe for tourists?",
      a: "Tirana and the main tourist areas of Albania are safe for international travellers. Albania has one of the lowest violent crime rates in the Balkans. The main issues are traffic (drive or cross roads carefully) and occasional petty theft in crowded areas like Skanderbeg Square. Locals are extremely hospitable toward foreign visitors — the Albanian concept of besa (word of honour toward guests) is a deeply held cultural value.",
    },
    {
      q: "What currency does Albania use?",
      a: "Albania uses the Albanian Lek (ALL). As of 2026, approximately 100 ALL equals €0.90. Euros are widely accepted in hotels and larger restaurants but you will get worse exchange rates. ATMs are plentiful in Tirana and dispense Lek. Keep small denomination notes for street food, buses, and local taxis. Credit cards are accepted in most Blloku restaurants but often not in traditional konobas or markets.",
    },
    {
      q: "How do I get to Tirana from neighbouring countries?",
      a: "From Montenegro: bus from Podgorica (3 hours, €8–12) or Kotor via Podgorica (5 hours total, €15). From Kosovo: bus from Pristina (4 hours, €10). From North Macedonia: bus from Ohrid (3 hours, €8). From Greece: bus from Thessaloniki (6 hours, €20) or Athens (9 hours, €30). Tirana International Airport also has direct flights from London, Rome, Vienna, Istanbul, and most major European hubs.",
    },
    {
      q: "What is the Bunk'Art experience like?",
      a: "There are two Bunk'Art museums in Tirana. Bunk'Art 1 is a 5-storey nuclear bunker on the Dajti road built for Hoxha and the Politburo with 106 rooms including a cinema, communications room, and personal apartments. Bunk'Art 2 is downtown and focuses on the Sigurimi secret police. Both cost €5. Allow 2 hours for Bunk'Art 1 and 90 minutes for Bunk'Art 2. The combination of architecture, history, and photography makes them the most powerful museum experience in southeast Europe.",
    },
  ],
  combineWith: ["kotor-montenegro-3-days", "split-croatia-4-days", "athens-4-days"],
  relatedSlugs: ["kotor-montenegro-3-days", "split-croatia-4-days", "venice-4-days", "florence-4-days"],
  galleryQuery: "tirana albania blloku colourful buildings skanderbeg square",
};

export const metadata: Metadata = {
  title: "Tirana Albania in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 3-day Tirana Albania itinerary — Bunk'Art bunker museum, Edi Rama colourful buildings, Blloku district bars, National History Museum mosaic, Et'hem Bey Mosque, byrek pastry, and Dajti mountain cable car. Budget €30/day to design hotel luxury. Visa info included.",
  keywords: [
    "Tirana Albania itinerary",
    "Tirana 3 days",
    "Tirana travel guide 2026",
    "Bunk'Art museum Tirana",
    "Blloku district Tirana",
    "Tirana colourful buildings Edi Rama",
    "Dajti mountain cable car",
    "Albania travel guide",
    "Tirana visa Indian passport",
    "byrek Albania food",
  ],
  openGraph: {
    title: "Tirana Albania in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Bunk'Art bunker museum, Edi Rama colourful buildings, Blloku bars, and Dajti cable car — Tirana Albania in 3 days from €30/day to design hotel luxury.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/tirana-albania-3-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tirana Albania in 3 Days: Complete 2026 Itinerary",
    description:
      "Cold War bunker museums, psychedelic apartment blocks, excellent byrek, and the best bar district in the Balkans. The complete Tirana guide.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/tirana-albania-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Tirana Albania in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Tirana Albania in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/tirana-albania-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Tirana, Albania",
      description:
        "Tirana, Albania — a vibrant capital city of Cold War bunker museums, psychedelic painted buildings, and Europe's most underrated bar and cafe culture.",
      geo: { "@type": "GeoCoordinates", latitude: 41.3275, longitude: 19.8187 },
    },
  ],
};

export default function TiranaAlbaniaPage() {
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
