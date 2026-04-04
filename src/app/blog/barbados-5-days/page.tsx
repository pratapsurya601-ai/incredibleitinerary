import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Barbados",
  country: "Barbados",
  countryFlag: "🇧🇧",
  slug: "barbados-5-days",
  heroQuery: "barbados beach caribbean turquoise water pink sand west coast",
  heroAlt: "Barbados west coast beach with turquoise Caribbean water and palm trees",
  category: "Caribbean",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro:
    "The most British island in the Caribbean — where cricket is a religion and rum is a sacrament — Barbados has been civilizing travellers since 1703. Eat flying fish cutters from a food truck at Oistins Fish Fry on a Friday night while a steel band plays beside you. Swim in west coast water so calm and clear you can see sergeant-major fish from the surface without a mask. Tour the world's oldest rum distillery, still producing the same bottle since 1703. This is Barbados: the most civilized island in the Caribbean.",
  stats: {
    duration: "5 Days",
    budgetFrom: "$100",
    bestMonths: "Dec–May (dry season)",
    airport: "BGI (Grantley Adams)",
  },
  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan?" },
    { id: "itineraries", emoji: "📅", label: "Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "beaches", emoji: "🏖️", label: "Best Beaches" },
    { id: "food", emoji: "🍽️", label: "Food & Rum" },
    { id: "getaround", emoji: "🚌", label: "Getting Around" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa Required", "Yes — Indian passport holders need a visa for Barbados"],
        ["Where to Apply", "Barbados High Commission in New Delhi, or online portal"],
        ["Fee", "Approximately $50 USD"],
        ["Processing", "5–10 business days; apply at least 3 weeks before travel"],
        ["Documents", "Passport, bank statements, hotel booking, return flight, cover letter"],
        ["Duration", "Usually granted for trip duration; extensions possible on arrival"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "US / UK / EU / Australian Passports",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa Required", "No — visa-free entry for US, UK, EU, Australian citizens"],
        ["Duration", "Up to 6 months (may be granted on arrival)"],
        ["Immigration", "Show return flight, accommodation proof, and sufficient funds"],
        ["Extension", "Can apply for extension at Immigration Department in Bridgetown"],
        ["Note", "Barbados is part of CARICOM — straightforward entry for Western passports"],
        ["Tip", "Dress neatly at immigration — Barbados immigration officers are courteous but formal"],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$100/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive & West Coast Beach Walk",
          items: [
            "Arrive at BGI, take the Route 11 public bus into Bridgetown ($1.75 USD) — buses are reliable and air-conditioned",
            "Check into a guesthouse or small B&B in Hastings or St Lawrence Gap area ($50–70/night) — Sunbay Hotel or Yellow Bird are reliable budget choices",
            "Walk to Accra Beach (Rockley Beach) — the main public beach, free, calm water, and beach vendors for coconut water ($2)",
            "Lunch at a local café in Oistins town: flying fish cutter (sandwich) for $5–8 — the national dish",
            "Stroll the boardwalk from Accra to Hastings in the late afternoon",
            "Dinner at Oistins Fish Fry (open nightly, best on Fridays) — grilled mahi-mahi, flying fish, or barracuda for $12–18 with sides",
          ],
          cost: "$90–110 (accommodation + food + transport)",
        },
        {
          day: "Day 2",
          title: "Bridgetown UNESCO Heritage Walk + Rum Shop",
          items: [
            "Morning: walk UNESCO-listed Bridgetown — Parliament Buildings, National Heroes Square, St Michael's Cathedral (free)",
            "Visit the Nidhe Israel Synagogue (est. 1654, one of the oldest in the Americas — $10 entry)",
            "Chattel House Village at Holetown for local craft shopping — no obligation to buy",
            "Cheap lunch: local rum shop for fish sandwich and Banks beer — $8–10 total",
            "Afternoon: public bus to Speightstown (Route 1B, $1.75) — the second city, quieter, authentic",
            "Walk the Speightstown waterfront and browse the Arlington House Museum ($7)",
            "Return bus to accommodation — buy a bottle of locally-produced ESA Field Rum from a rum shop for $8",
          ],
          cost: "$60–80 (bus + food + entry fees)",
        },
        {
          day: "Day 3",
          title: "Harrison's Cave + Bathsheba Atlantic Coast",
          items: [
            "Morning: Harrison's Cave tram tour ($32) — underground caverns, stalactites, streams, and a spectacular cave pool in the Scotland District",
            "Hike Welchman Hall Gully adjacent to Harrison's Cave — tropical gardens with howler monkeys ($10)",
            "Packed lunch from a local shop — rum cake, bake and saltfish, coconut bread",
            "Afternoon: public bus or taxi share to Bathsheba on the rugged Atlantic coast ($8 share taxi)",
            "Walk Bathsheba's boulder-strewn beach — wild surf, dramatic sea stacks, completely different from the west coast",
            "Tea at Round House Restaurant, Bathsheba — sit on the terrace overlooking the Atlantic $15–20",
            "Watch surfers tackling the Soup Bowl at Bathsheba — best surf in Barbados",
          ],
          cost: "$75–100 (cave + transport + food)",
        },
        {
          day: "Day 4",
          title: "Mount Gay Rum Distillery + Platinum Coast Swim",
          items: [
            "Morning: Mount Gay Rum Distillery tour in Bridgetown ($30 — Spirit of Barbados tour) — world's oldest rum producer, established 1703",
            "The tour includes tasting 4 expressions and a history of Caribbean rum production",
            "Lunch at Bridgetown market — local hot food stall for macaroni pie + pork $8",
            "Afternoon: take the Route 1 bus to Mullins Bay on the Platinum Coast ($1.75) — pristine white sand, calm clear water",
            "Free beach afternoon — buy a rum punch from the Mullins Beach Bar for $7",
            "Sunset drinks watching the green flash over the Caribbean — a Bajan ritual",
            "Dinner back in St Lawrence Gap area — Café Sol for Tex-Mex crossover for $18–25",
          ],
          cost: "$80–100 (distillery + bus + food + drinks)",
        },
        {
          day: "Day 5",
          title: "Animal Flower Cave + Departure",
          items: [
            "Early morning: share taxi to North Point for Animal Flower Cave ($8 each way, share taxi) — sea cave with sea anemones and ocean windows carved by Atlantic waves",
            "Entry $10, swim inside the cave if sea conditions permit",
            "Quick stop at Cove Bay lookout — the most dramatic cliff view in Barbados",
            "Return to Bridgetown or Holetown for final shopping — rum, hot sauce, local pottery",
            "Final flying fish cutter at the airport or Oistins before departure — don't leave without one",
            "BGI airport (allow 2 hrs check-in for international flights)",
          ],
          cost: "$60–80 (transport + entry + food + souvenirs)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$220/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive in Style — West Coast Hotel & Sunset Cruise",
          items: [
            "Private taxi from BGI to Holetown or Mullins ($30) — check into a 4-star west coast hotel (Crystal Cove, Turtle Beach, Mango Bay — $180–250/night)",
            "West coast hotels have calm, swimmable beach directly on property — check in and get straight in the water",
            "Afternoon: snorkel with sea turtles — nearly every west coast hotel can arrange this ($35–50, hotel-organised)",
            "Sunset rum punch on the beach — complimentary at most mid-range all-inclusive properties",
            "Dinner at The Tides restaurant, Holetown — right on the beach, Caribbean catch of the day $45–65/person",
          ],
          cost: "$300–380 (hotel + dinner + activity)",
        },
        {
          day: "Day 2",
          title: "St Nicholas Abbey Great House & Rum + Hunte's Gardens",
          items: [
            "Morning: private taxi to St Nicholas Abbey great house ($30 one way) — a 1658 Jacobean plantation great house producing their own St Nicholas Abbey rum, $30 entry includes rum tasting",
            "Tour the distillery, watch the original steam locomotive that powered the sugar mill",
            "Lunch in the abbey's heritage kitchen — rum cake and local food",
            "Afternoon: Hunte's Gardens ($15) — a hidden valley garden of extraordinary tropical plants carved into a sinkhole, genuinely one of the most beautiful gardens in the Caribbean",
            "Anthony Hunte, the owner, may give you a personal tour and a rum punch",
            "Evening: dinner at Champers wine bar & restaurant, Rockley — sea view, excellent wine list, $55–75/person",
          ],
          cost: "$200–280 (transport + entry + dining)",
        },
        {
          day: "Day 3",
          title: "Catamaran Cruise & Oistins Fish Fry Friday",
          items: [
            "Morning: Tiami catamaran cruise ($120/person) — full-day cruise with snorkelling with turtles, shipwreck dive, open bar, and BBQ lunch on the boat",
            "Swim at secluded coves accessible only by boat — the best swimming of the trip",
            "Afternoon rest at your hotel beach",
            "Evening: Oistins Fish Fry on Friday night — the cultural heart of Barbados ($25–35 for full meal + drinks)",
            "Steel band, domino games, grilled seafood, flying fish, and the entire island gathering in one spot",
            "This is unmissable — stay until midnight to see it at full energy",
          ],
          cost: "$200–250 (catamaran + dinner + drinks)",
        },
        {
          day: "Day 4",
          title: "Crane Beach + Bathsheba + Bridgetown Heritage",
          items: [
            "Morning: private taxi to Crane Beach ($30) — the dramatic Atlantic-side beach with pink coral sand and powerful waves, rated one of the top 10 beaches in the world",
            "Swim in the natural rock pool at Crane or at Foul Bay nearby (calmer, local secret)",
            "Drive along the Scotland District scenic route to Bathsheba — stop at Cattlewash for the view",
            "Lunch at The Atlantis Hotel, Bathsheba ($30–40) — serving Bajan Sunday lunch since 1885",
            "Afternoon: back to Bridgetown for Garrison Savannah (UNESCO World Heritage Site) — historic British military buildings",
            "Mount Gay Rum Legacy Tasting Experience ($65) — premium tasting with rum sommelier",
          ],
          cost: "$200–270 (transport + activities + dining)",
        },
        {
          day: "Day 5",
          title: "Payne's Bay Snorkelling & Farewell Dinner",
          items: [
            "Morning: kayak or paddleboard rental at Payne's Bay ($30/hour) — calm, crystal-clear water",
            "Final snorkel with turtles — they congregate around Payne's Bay every morning",
            "Holetown browsing: Limegrove Lifestyle Centre for premium shopping and people-watching",
            "Farewell lunch at Scarlet restaurant, Payne's Bay — lobster Bajan style $45",
            "Final beach hour and hotel check-out — most hotels offer late checkout for $30",
            "Transfer to BGI — allow 2.5 hours for international departures",
          ],
          cost: "$180–240 (activities + farewell lunch + transfer)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$500/day",
      days: [
        {
          day: "Day 1",
          title: "Sandy Lane Arrival & Beach Welcome",
          items: [
            "Private helicopter transfer from BGI to Sandy Lane helipad (optional) or private luxury vehicle ($80)",
            "Check into Sandy Lane Hotel ($800–2,000/night) or Coral Reef Club ($500–900/night) — both legendary Platinum Coast properties",
            "Butler-assisted arrival, champagne welcome, private beach setting with assigned sun loungers and cabana",
            "Spa treatment at Sandy Lane's award-winning spa — 90-min Caribbean ritual $250",
            "Dinner at Sandy Lane's L'Acajou restaurant — finest dining on the island, Bajan ingredients prepared with French technique, $150–200/person",
          ],
          cost: "$1,200–1,800 (hotel + spa + dinner)",
        },
        {
          day: "Day 2",
          title: "Private Yacht Charter & Turtle Snorkel",
          items: [
            "Full-day private yacht charter ($1,200–1,800 for 40ft vessel, all-inclusive for 2–6 people) — circumnavigate the island or sail to secluded anchorages",
            "Private chef on board preparing fresh-caught sashimi and Caribbean lobster",
            "Snorkel with hawksbill sea turtles at Folkestone Marine Reserve",
            "Sundowner cocktails as you sail back to the Platinum Coast at golden hour",
            "Dinner at The Cliff restaurant ($150–200/person) — the most spectacular restaurant in Barbados, built into a coral cliff above the sea",
          ],
          cost: "$1,500–2,200 (yacht + dinner)",
        },
        {
          day: "Day 3",
          title: "St Nicholas Abbey Exclusive Tour & Polo",
          items: [
            "Private guided tour of St Nicholas Abbey plantation ($150 private booking) — with the owner explaining 350 years of sugar and rum history",
            "Exclusive tasting of St Nicholas Abbey 12-year and 18-year rum expressions — extraordinarily rare",
            "Polo at Holders Hill Polo Club — watch or try a polo lesson ($200)",
            "Champagne lunch at the polo grounds — a classic Bajan experience",
            "Afternoon: Hunte's Gardens private visit with Anthony Hunte personally ($100 private booking)",
            "Dinner at Cin Cin By The Sea, Prospect — fresh seafood, $100–130/person",
          ],
          cost: "$700–1,000 (exclusive tours + polo + dining)",
        },
        {
          day: "Day 4",
          title: "Crane Estate & Atlantic Side Exploration",
          items: [
            "Private villa morning at Sandy Lane before checkout if departing next day",
            "Helicopter scenic tour of the island ($400/person, 20 minutes) — the only way to see Barbados's full geography from Scotland District cliffs to Platinum Coast",
            "Lunch at Crane Beach Resort's infinity pool restaurant ($60/person) — overlooking the pink sand and Atlantic",
            "Visit Codrington College, St John's Parish Church and the dramatic East Coast cliffs (private driver)",
            "Return to west coast for sundowners at Harbour Lights beach bar — sunset drinks $20",
            "Final luxury dinner at Daphne's (sister restaurant to London's Daphne's) — $120–150/person",
          ],
          cost: "$900–1,200 (helicopter + dining + transport)",
        },
        {
          day: "Day 5",
          title: "Final Morning Spa & Departure",
          items: [
            "Morning spa at Sandy Lane or Coral Reef Club — couples massage $300–350",
            "Final swim in the Caribbean — watch the hawksbill turtles glide past the beach one last time",
            "Checkout and a farewell rum punch from the beach bar",
            "Champagne brunch at The Cliff or Sandy Lane — $80–100/person",
            "Private luxury transfer to BGI ($100) — VIP check-in assistance",
            "Depart with a bottle of St Nicholas Abbey 12-year rum ($80) and the knowledge that you've seen the finest island in the Caribbean",
          ],
          cost: "$600–900 (spa + brunch + transfer + souvenirs)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$50–70 (guesthouse/B&B)",
      food: "$20–30 (local spots + rum shops)",
      transport: "$5–15 (public buses)",
      activities: "$25–40 (cave + distillery)",
      total: "$100–155/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$180–250 (4-star west coast)",
      food: "$50–80 (restaurants)",
      transport: "$25–50 (taxi + bus mix)",
      activities: "$80–120 (catamaran + tours)",
      total: "$335–500/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$500–2,000 (Sandy Lane/Coral Reef Club)",
      food: "$120–200 (fine dining)",
      transport: "$80–400 (private driver/helicopter)",
      activities: "$150–500 (yacht/private tours)",
      total: "$850–3,100/day",
    },
    {
      tier: "🍹 Rum & Dining",
      accommodation: "As above",
      food: "$35–200 (from rum shop to The Cliff)",
      transport: "Included",
      activities: "$30–150 (distillery tours)",
      total: "Add $65–350/person",
    },
    {
      tier: "🤿 Water Activities",
      accommodation: "Not applicable",
      food: "As above",
      transport: "$30–1,800 (catamaran/yacht)",
      activities: "$35–120 (snorkel/dive)",
      total: "$65–1,920 (one-off)",
    },
  ],
  mistakes: [
    {
      icon: "🚗",
      title: "Ignoring the public bus system",
      desc: "Barbados has an excellent public bus network — Route 11 runs the south coast, Route 1 runs the west coast, and buses cost $1.75 USD flat. Tourists default to taxis and spend 5x more. Buses run 6am–midnight and are generally on time. Learn the route numbers before you arrive.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "📅",
      title: "Missing Oistins Fish Fry on a Friday",
      desc: "Oistins Fish Fry happens every night but Friday is the night — the whole island shows up. If your trip doesn't include a Friday, go on another night, but Friday is a genuine cultural event. Book your trip dates around a Friday in Barbados if you possibly can.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "🏖️",
      title: "Spending all your time on the west coast",
      desc: "The west coast (Platinum Coast) is beautiful and calm, but the east coast (Bathsheba, Crane Beach, Cattlewash) is dramatically different — wild Atlantic surf, pink coral sand, rugged cliffs. Missing it means missing half of what makes Barbados remarkable. Allocate at least one full day on the east coast.",
      color: "border-yellow-200 bg-yellow-50",
    },
    {
      icon: "🌧️",
      title: "Visiting during hurricane season without trip insurance",
      desc: "Barbados's hurricane season runs June–November. The island rarely takes a direct hit (it's the most easterly Caribbean island), but tropical storms can disrupt flights and close beaches. If visiting June–November, comprehensive travel insurance with flight disruption cover is essential.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "🥃",
      title: "Not trying local rum beyond Mount Gay",
      desc: "Mount Gay is world-famous but don't miss St Nicholas Abbey rum (12-year is extraordinary), Foursquare Distillery's expressions, and ESA Field white rum (the local mixing rum, NZD $8 a bottle). Every rum shop will advise you. Barbados produces some of the most complex aged rum in the world.",
      color: "border-purple-200 bg-purple-50",
    },
  ],
  tips: [
    {
      icon: "🐢",
      title: "Swim with turtles — it's free at Payne's Bay",
      desc: "Hawksbill sea turtles congregate at Payne's Bay on the west coast every morning. You don't need a tour — just swim out 50 metres and they'll be there. Tours charge $50. All you need is a mask and fins (rent for $10). Go between 8–10am for the best encounters before tour boats arrive.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🏏",
      title: "Check the cricket schedule at Kensington Oval",
      desc: "If a Test match or ODI is scheduled during your visit, go. Kensington Oval is one of cricket's most atmospheric grounds, and the Bajan crowd is spectacular. Tickets start at $30. The beer is cold, the music is loud, and the cricket is passionate. This is what Barbados does best.",
      color: "border-teal-200 bg-teal-50",
    },
    {
      icon: "🍽️",
      title: "Order the flying fish — everywhere, always",
      desc: "Barbados's national dish is flying fish and cou-cou (cornmeal and okra). Flying fish is delicate, sweet, and unlike any fish you've had elsewhere. Order it fried in a cutter (sandwich), steamed with Creole sauce, or whole at Oistins. It's the taste of Barbados.",
      color: "border-amber-200 bg-amber-50",
    },
    {
      icon: "☀️",
      title: "The east and west coasts are completely different climates",
      desc: "The west coast (Platinum Coast) is sheltered, calm, and gets fewer clouds. The east coast is windier, wilder, and sometimes gets afternoon rain. Pack a light layer for east coast days. The contrast is what makes Barbados special — it's essentially two different environments on one small island.",
      color: "border-purple-200 bg-purple-50",
    },
  ],
  faqs: [
    {
      q: "Do Indian passport holders need a visa for Barbados?",
      a: "Yes. Indian passport holders require a visa to enter Barbados. Apply at the Barbados High Commission (India has one in New Delhi) or through the online visa portal. The fee is approximately $50 USD and processing takes 5–10 business days. You'll need your passport, bank statements, hotel bookings, return flight confirmation, and a cover letter explaining your trip. Apply at least 3 weeks before travel.",
    },
    {
      q: "Is Barbados expensive compared to other Caribbean islands?",
      a: "Barbados is mid-to-high range for the Caribbean. Budget travellers using public buses, guesthouses, and eating at rum shops and Oistins can manage on $100/day. Mid-range with a west coast hotel runs $220–350/day. The luxury tier (Sandy Lane, Coral Reef Club) is among the most expensive in the Caribbean at $500–3,000/day. Eating locally and using buses can reduce costs dramatically.",
    },
    {
      q: "When is the best time to visit Barbados?",
      a: "December to May is the dry season — warm, sunny, and relatively low humidity. This is peak season (prices are higher, especially December–February). The Crop Over Festival in July–August is the island's biggest cultural event — a raucous Bajan carnival worth building a trip around if you can handle occasional rain. Avoid the heart of hurricane season (August–October) unless you have good travel insurance.",
    },
    {
      q: "Is Barbados safe for solo travellers?",
      a: "Barbados is one of the safest islands in the Caribbean with a low crime rate and well-established tourism infrastructure. Solo travellers — including solo women — generally feel very safe on the island. Exercise normal urban precautions in Bridgetown at night (as you would in any city), stick to tourist-frequented beach areas, and use registered taxis. The Bajan people are exceptionally welcoming to visitors.",
    },
  ],
  combineWith: ["st-lucia-4-days", "antigua-3-days", "trinidad-carnival", "grenada-4-days"],
  relatedSlugs: ["jamaica-5-days", "turks-and-caicos-4-days", "dominican-republic-5-days", "cuba-7-days"],
  galleryQuery: "barbados caribbean beach rum turquoise water plantation",
};

export const metadata: Metadata = {
  title: "Barbados in 5 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
  description:
    "Plan your perfect 5-day Barbados trip. Flying fish at Oistins, sea turtles at Payne's Bay, Mount Gay Rum, Harrison's Cave, Crane Beach — all budgets covered.",
  keywords: [
    "Barbados travel guide",
    "Barbados 5 days itinerary",
    "Barbados Caribbean",
    "Oistins Fish Fry",
    "Mount Gay Rum distillery",
    "Harrison's Cave Barbados",
    "Crane Beach Barbados",
    "Barbados visa Indian passport",
    "Platinum Coast beaches",
    "Barbados budget travel",
  ],
  openGraph: {
    title: "Barbados in 5 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    description:
      "The most civilized island in the Caribbean — flying fish, sea turtles, the world's oldest rum, and west coast beaches that defy description. Your complete 5-day guide.",
    type: "article",
    url: "https://incredibleitinerary.com/blog/barbados-5-days",
    images: [
      {
        url: "https://images.unsplash.com/photo-1548574505-5e239809f769?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Barbados west coast beach with turquoise Caribbean water",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbados in 5 Days: The Complete Travel Guide 2026",
    description: "Flying fish, sea turtles, the world's oldest rum — your complete Barbados itinerary for every budget.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/barbados-5-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Barbados in 5 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "Flying fish, sea turtles, the world's oldest rum distillery, Crane Beach, and the legendary Oistins Fish Fry. Your complete 5-day Barbados guide from budget to Sandy Lane luxury.",
      image: "https://images.unsplash.com/photo-1548574505-5e239809f769?w=1200&h=630&fit=crop",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: "https://incredibleitinerary.com/blog/barbados-5-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Barbados 5 Days",
          item: "https://incredibleitinerary.com/blog/barbados-5-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Barbados",
      description:
        "The most easterly Caribbean island, known for its calm west coast beaches, world-class rum production, flying fish cuisine, cricket culture, and welcoming Bajan hospitality.",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 13.1939,
        longitude: -59.5432,
      },
      touristType: ["Beach traveller", "Rum tourist", "Cultural traveller", "Luxury traveller"],
      includesAttraction: [
        { "@type": "TouristAttraction", name: "Oistins Fish Fry" },
        { "@type": "TouristAttraction", name: "Mount Gay Rum Distillery" },
        { "@type": "TouristAttraction", name: "Harrison's Cave" },
        { "@type": "TouristAttraction", name: "Crane Beach" },
        { "@type": "TouristAttraction", name: "St Nicholas Abbey" },
        { "@type": "TouristAttraction", name: "Animal Flower Cave" },
      ],
    },
  ],
};

export default function BarbadosPage() {
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
