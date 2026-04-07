import type { Metadata } from "next";
import UniversalBlogClient, { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Kotor",
  country: "Montenegro",
  countryFlag: "🇲🇪",
  slug: "kotor-3-days",
  heroQuery: "kotor bay montenegro old town fortress medieval adriatic",
  heroAlt: "Kotor Bay Montenegro medieval walled city and fortress walls on mountain",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "12 min read",
  intro:
    "A perfectly preserved medieval walled city wedged between a fjord-like bay and a mountain so steep you can see the ancient walls zigzagging vertically up the rock face to a fortress 1,350 steps above — Kotor, Montenegro's Adriatic jewel, is somehow still a secret that most visitors to Croatia miss entirely. It sits two hours south of Dubrovnik, costs half as much, has half the crowds, and is arguably the most dramatic medieval urban setting in the entire Balkans. UNESCO called it one of the best-kept secrets in European heritage. They were right.",

  stats: {
    duration: "3 Days",
    budgetFrom: "€45",
    bestMonths: "May–Jun or Sep–Oct",
    airport: "TIV (Tivat, 8km) or DBV (Dubrovnik, 2hr)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan?" },
    { id: "itineraries", emoji: "📅", label: "Day-by-Day Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "highlights", emoji: "🌟", label: "Top Highlights" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "getting-around", emoji: "🚌", label: "Getting Around" },
    { id: "gallery", emoji: "🖼️", label: "Photo Gallery" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa required?", "No visa required — Indian passport holders enter Montenegro visa-free"],
        ["Stay allowed", "30 days on arrival"],
        ["Entry type", "Stamp on arrival at border or airport"],
        ["Note", "Montenegro is NOT in the EU or Schengen — it is a separate country"],
        ["Pro tip", "Montenegro visa-free access makes it one of the easiest European countries for Indian passport holders"],
        ["Extend?", "Extensions must be applied for at the police station (Uprava policije)"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺🇦🇺",
      title: "US / UK / EU / AU Passports",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa required?", "No visa required — visa-free for all major Western passports"],
        ["Stay allowed", "Up to 90 days"],
        ["Currency", "Euro (€) — Montenegro uses EUR despite not being in the EU"],
        ["Note", "Montenegro is an EU candidate country — accession expected in coming years"],
        ["Combination", "Pair with Croatia (Schengen area) — no internal passport check on the coast road"],
        ["Pro tip", "Fly Dubrovnik (DBV) → bus/taxi to Kotor (2 hrs, €15–25) for cheapest access"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "€45/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive Kotor — Old Town Wander & City Walls Hike",
          items: [
            "Arrive by bus from Dubrovnik (2 hrs, €8–12) or taxi/shuttle from Tivat airport (8km, €10–15)",
            "Check into a hostel in or near Kotor Old Town — Old Town Hostel or Hostel Marija Matavulj from €18–22/night",
            "Walk through the Sea Gate (Vrata od Mora) into the Old Town — the main entrance, free",
            "Explore the maze of medieval streets — find the Cathedral of St Tryphon (Romanesque, 1166 AD, €3 entry)",
            "Count the cats — Kotor is famous for its cats, which have been here since the seafaring days",
            "Afternoon: hike the City Walls (Bedemi) — 1,350 steps to San Giovanni Fortress (€8 per person)",
            "The views from the top over the Bay of Kotor (Boka Kotorska) are staggering — allow 2 hrs return",
            "Sunset from the fortress walls — the entire bay turns golden below you",
            "Dinner: grilled fish at a small konoba restaurant in the Old Town (~€10–15pp)",
          ],
          cost: "€40–55 including accommodation",
        },
        {
          day: "Day 2",
          title: "Perast Village & Our Lady of the Rocks Island",
          items: [
            "Morning: local bus or shared taxi to Perast (30 min, €2–4 by local bus)",
            "Perast is a tiny Baroque village on the bay shore — 16 churches for 16 families, perfectly preserved",
            "Hire a water taxi from Perast to Our Lady of the Rocks (Gospa od Škrpjela) — man-made island church, €5pp return",
            "This island was built by sailors placing stones every year on their return voyage — it took 500 years",
            "Inside: a stunning collection of 2,500 silver votive tablets from grateful sailors",
            "Lunch: seafood at a restaurant in Perast — black risotto (crni rižot) and grilled sea bass (~€12–15pp)",
            "Afternoon: return to Kotor, walk the Piazza of Arms (Trg od Oružja) and the Clock Tower",
            "Evening: cold Nikšičko beer at a café on the square — Montenegro's national beer, €2–3/pint",
            "Street food: burek (flaky cheese or meat pastry) from a pekara bakery (~€1.50)",
          ],
          cost: "€35–50",
        },
        {
          day: "Day 3",
          title: "Budva Beach Town & Sveti Stefan Photo Stop",
          items: [
            "Morning bus to Budva (30 min, €3) — Montenegro's beach capital",
            "Budva Old Town — another walled medieval city, smaller than Kotor but with beach access immediately outside",
            "Walk Mogren Beach — long sandy crescent below the old town walls",
            "Drive or taxi south to Sveti Stefan (15 min, €8–10 taxi) — the iconic island hotel village connected by a causeway",
            "Sveti Stefan is now a private Aman resort — you cannot enter — but the view from the road is one of the most photographed in Europe",
            "Photo stop at the official viewpoint above the causeway (free, €0)",
            "Return bus to Kotor (1 hr, €4)",
            "Final evening: walk the full Old Town circuit of the walls at night — free, completely different atmosphere",
            "Farewell dinner at Galion restaurant just outside the walls — seafood with bay views (~€18pp)",
          ],
          cost: "€35–45",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€100/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive Kotor — Boutique Hotel & Private Walls Tour",
          items: [
            "Taxi from Tivat airport or private transfer from Dubrovnik ($40–60 for the car)",
            "Check into a boutique hotel inside or just outside the Old Town walls — Hotel Cattaro or Astoria Hotel (€80–120/night)",
            "Private guided tour of Kotor Old Town (€30–40pp, 2 hrs) — covering St Tryphon's Cathedral, Maritime Museum, the clock tower and the hidden courtyards",
            "Private City Walls hike with a guide who knows the history of each tower and gate (€40pp including entry)",
            "Sunset dinner at Scala Santa restaurant on the walls steps — Adriatic fish and local wine (€35pp)",
          ],
          cost: "€100–130 including accommodation",
        },
        {
          day: "Day 2",
          title: "Bay of Kotor Boat Tour & Perast",
          items: [
            "Private boat tour of the Bay of Kotor (half day, €60–80pp) — circumnavigates the inner bay, stops at Perast and Our Lady of the Rocks",
            "Private water taxi to Our Lady of the Rocks island — included in boat tour",
            "Lunch at Conte restaurant in Perast — one of the best seafood restaurants on the Montenegrin coast (€30pp)",
            "Afternoon: return to Kotor by boat, afternoon free in the Old Town",
            "Visit the Maritime Museum (Pomorski Muzej) — Kotor was a great sea power under Venice (€5)",
            "Evening: aperol spritz at a rooftop bar overlooking the cat-filled piazzas",
            "Dinner at Forza Mare hotel restaurant in Dobrota — Michelin-standard seafood outside the tourist scrum (€45pp)",
          ],
          cost: "€100–120",
        },
        {
          day: "Day 3",
          title: "Cetinje, Lovćen & Sveti Stefan",
          items: [
            "Hire a car or private driver for the day (€60–80 for the car)",
            "Drive the serpentine mountain road to Lovćen National Park — 25 switchbacks above Kotor, the views are insane",
            "Visit the Njegoš Mausoleum on the summit of Lovćen (€3) — Montenegro's greatest poet, buried in a mountain-top tomb",
            "Drive to Cetinje — Montenegro's historic royal capital and museum city",
            "Lunch in Cetinje — try the njeguški prošek (smoked ham and cheese) starter (€20pp)",
            "Drive down the Budva Riviera coast — stop at Sveti Stefan viewpoint for the iconic photograph",
            "Swim at Przno beach near Sveti Stefan (less crowded than Budva)",
            "Return to Kotor — farewell dinner at Bastion restaurant in the old town moat (€35pp)",
          ],
          cost: "€100–130",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€250/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive in Style — Aman Sveti Stefan & Private Walls Access",
          items: [
            "Private helicopter transfer from Dubrovnik to Tivat (20 min, €600 for the charter — for couples this is €300pp)",
            "Check into Regent Porto Montenegro in Tivat or Aman Sveti Stefan (€400–800/night) — the most exclusive addresses on the Montenegrin coast",
            "Private evening transfer to Kotor Old Town (€30 one way)",
            "After-hours private access to the City Walls for sunset — arranged through your concierge",
            "Private guided tour of St Tryphon's Cathedral with an art historian",
            "Dinner at a private dining experience in a medieval Kotor palazzo (€120pp, arranged by your hotel)",
          ],
          cost: "€500–700 including accommodation",
        },
        {
          day: "Day 2",
          title: "Private Yacht Day — Bay of Kotor & Perast",
          items: [
            "Private yacht charter for the full day on the Bay of Kotor (€400–600 for the yacht)",
            "Swim in the crystal-clear bay waters off the boat — water clarity rivals the Greek islands",
            "Stop at Perast for a private tour of the island church with a cultural guide",
            "Gourmet lunch catered on board — fresh Adriatic fish, local wine, prosecco",
            "Afternoon: anchor in a quiet bay cove and swim",
            "Sunset return sail to Kotor — one of the most beautiful approaches in Europe",
            "Dinner at Forza Mare — the finest restaurant on the bay (€80–100pp, reserve weeks ahead)",
          ],
          cost: "€300–400",
        },
        {
          day: "Day 3",
          title: "Lovćen Helicopter, Cetinje Palace & Aman Farewell",
          items: [
            "Helicopter loop over Lovćen National Park and the Bay of Kotor — the aerial view of the walls and bay is extraordinary (€300pp)",
            "Private car to Cetinje for a behind-the-scenes palace museum tour with a state historian (€100pp)",
            "Njeguši village lunch — Montenegro's most famous village for prosciutto, cheese and rakija (€25pp)",
            "Afternoon: spa treatment at Aman Sveti Stefan — pool, treatment rooms with bay views",
            "Sunset from the Aman Sveti Stefan private terrace with champagne",
            "Farewell dinner at Aman's restaurant overlooking the island — 6-course tasting menu with Montenegrin wine flight (€150pp)",
          ],
          cost: "€400–600",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "Budget",
      accommodation: "€18–25 (hostel dorm)",
      food: "€10–15 (konobas, bakeries)",
      transport: "€5–10 (local buses)",
      activities: "€8–15 (walls entry, museums)",
      total: "€45/day",
    },
    {
      tier: "Mid-Range",
      accommodation: "€80–120 (boutique hotel)",
      food: "€30–45 (mid-range restaurants)",
      transport: "€15–25 (taxi + bus combo)",
      activities: "€25–50 (boat tours, guides)",
      total: "€100/day",
    },
    {
      tier: "Luxury",
      accommodation: "€200–800 (Aman / Regent)",
      food: "€70–150 (Forza Mare, Aman dining)",
      transport: "€50–200 (private car, helicopter)",
      activities: "€80–300 (yacht, private guides)",
      total: "€250+/day",
    },
    {
      tier: "Peak Season (Jul–Aug)",
      accommodation: "+50–100% premium",
      food: "€15–50 (as above)",
      transport: "€8–30 (as above)",
      activities: "€15–80 (as above)",
      total: "€70–300+/day",
    },
    {
      tier: "Day Tripper from Dubrovnik",
      accommodation: "N/A",
      food: "€15–30",
      transport: "€20–30 (bus return)",
      activities: "€10–20",
      total: "€50–80 (day trip only)",
    },
  ],

  mistakes: [
    {
      icon: "☀️",
      title: "Visiting in July or August",
      desc: "The cruise ship problem: in peak summer, up to 8 cruise ships dock in the bay simultaneously, disgorging 15,000 passengers into a medieval city designed for a few hundred. The Old Town becomes an elbow-to-elbow queue. May–June and September–October give you 90% of the beauty with 20% of the crowd. Spring also has the green mountain backdrop at its most vivid.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🏔️",
      title: "Skipping the City Walls hike",
      desc: "It's €8 and 1,350 steps and it's the best thing you can do in Kotor. The view from San Giovanni Fortress of the bay, the mountains and the tiny medieval city below is among the great European travel moments. Many people look at the steps and skip it. Don't be that person.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🚗",
      title: "Not renting a car for day 3",
      desc: "Kotor on foot is wonderful. But the Montenegrin coast rewards a rental car. The drive up the 25 switchbacks to Lovćen, the Cetinje royal capital, the coastal road to Sveti Stefan — none of this is properly accessible by public bus. One car day transforms the trip. Cars cost €30–50/day from Tivat airport.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "💶",
      title: "Not knowing Montenegro uses Euros",
      desc: "Montenegro is not in the EU but uses the Euro as its currency. ATMs are available in Kotor Old Town and throughout the bay towns. Cards are accepted at hotels and most restaurants. Smaller konobas and bus tickets often require cash. Bring €50–100 in small notes for your first day.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🐱",
      title: "Missing the cat culture",
      desc: "Kotor's cats are not a gimmick — they've been a fixture of the maritime city since Venetian times, kept to control the rat population on ships in the harbour. There are over 100 cats in the Old Town, they have a dedicated cat museum (Muzej Mačaka, €1), and feeding or photographing them is one of the unexpected joys of the city. Don't let anyone tell you this is touristy.",
      color: "border-red-200 bg-red-50",
    },
  ],

  tips: [
    {
      icon: "🚌",
      title: "Kotor is the perfect add-on to a Croatia itinerary",
      desc: "Dubrovnik to Kotor is 2 hours by bus (€8–12) or 1 hour by car. The border crossing at Debeli Brijeg is quick with an EU passport and only slightly slower for other nationalities. Kotor is dramatically cheaper than Dubrovnik for equivalent quality — often 40–50% less for food and accommodation. Do 4 nights Croatia, 3 nights Montenegro as one combined trip.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🕐",
      title: "Do the City Walls at sunrise, not midday",
      desc: "The walls open at sunrise (approximately 7am in summer). At that time: no crowds, cool temperature, golden light on the bay, and a sense of having the medieval city entirely to yourself. By 10am the cruise ship tourists arrive. Beat them by 3 hours.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🍷",
      title: "Montenegro's wine is genuinely excellent and unknown",
      desc: "Vranac is Montenegro's indigenous red grape and produces a full-bodied, deeply coloured wine that pairs perfectly with the local smoked meats and black risotto. Plantaže — the enormous state winery near Podgorica — produces excellent vranac for €8–12 a bottle in restaurants. Order it over Macedonian or Serbian reds.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🎟️",
      title: "GetYourGuide has the best Bay of Kotor boat tours",
      desc: "Bay of Kotor boat tours and Perast day trips are well represented on GetYourGuide with verified reviews. Private and shared options available — private is worth it for the flexibility. The best tours include a swimming stop in the bay, Perast village and the island church.",
      color: "border-blue-200 bg-blue-50",
    },
  ],

  faqs: [
    {
      q: "Is Kotor worth visiting without going to Dubrovnik?",
      a: "Absolutely. Kotor is a complete destination in its own right. The Old Town is UNESCO-listed and arguably more authentic than Dubrovnik (which has been heavily commercialised by Game of Thrones tourism). The bay setting — enclosed by mountains, dotted with medieval villages — is unique in Europe. Fly into Tivat (TIV) directly from many European cities and skip Dubrovnik entirely if you prefer.",
    },
    {
      q: "How many days do you need in Kotor?",
      a: "Two days gets you the essential Kotor: Old Town, City Walls, a Perast day trip and some beach time. Three days allows you to add the inland mountains (Lovćen), Cetinje, the coastal road to Sveti Stefan, and a proper boat tour of the bay. Four days lets you breathe and relax. We recommend 3 days as the sweet spot.",
    },
    {
      q: "Is Kotor good for swimming?",
      a: "Yes — but the Bay of Kotor (Boka Kotorska) is a fjord-like bay, not an open sea beach. Swimming is best from the rocks and small cove beaches along the bay, or from a boat. For classic sandy beaches, base yourself in Budva (30 min south) which has proper sandy beaches including Mogren and Jaz Beach. Kotor itself has a small town beach but it's not the main draw.",
    },
    {
      q: "Is Kotor expensive compared to Croatia?",
      a: "Montenegro is significantly cheaper than Croatia for comparable experiences. Kotor hostel dorms cost €18–22 vs €28–35 in Dubrovnik. Restaurant meals are 30–40% cheaper. The City Walls entry (€8) costs less than the Dubrovnik walls (€35). This makes Kotor an extraordinary value for the quality of the medieval experience — arguably the best value historic walled city in the Adriatic.",
    },
  ],

  combineWith: ["Croatia", "Albania", "Bosnia & Herzegovina"],
  relatedSlugs: ["dubrovnik-3-days", "albania-5-days", "split-3-days"],
  galleryQuery: "kotor bay montenegro old town walls perast sveti stefan budva adriatic",
};

export const metadata: Metadata = {
  title: "Kotor in 3 Days: The Complete Montenegro Travel Guide (2026)",
  description:
    "The complete Kotor 3-day itinerary — City Walls hike, Perast & Our Lady of the Rocks, Sveti Stefan, Budva beaches and Lovćen mountains. From €45/day budget to luxury. Indian passport visa-free.",
  keywords: [
    "Kotor travel guide",
    "Montenegro itinerary",
    "Kotor old town",
    "Bay of Kotor boat tour",
    "Perast Montenegro",
    "Sveti Stefan Montenegro",
    "Kotor City Walls hike",
    "Montenegro visa Indian passport",
    "Kotor 3 days",
    "Balkans travel 2026",
  ],
  openGraph: {
    title: "Kotor in 3 Days: Montenegro's Most Dramatic Medieval City (2026)",
    description:
      "A UNESCO walled city, a fjord-like bay, fortress walls zigzagging up a mountain — Kotor from €45/day. The Adriatic's best-kept secret.",
    url: "https://incredibleitinerary.com/blog/kotor-3-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://incredibleitinerary.com/og/kotor-3-days.jpg",
        width: 1200,
        height: 630,
        alt: "Kotor Bay Montenegro medieval walled city and fortress walls on mountain",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kotor in 3 Days — Montenegro's Adriatic Masterpiece",
    description: "More dramatic than Dubrovnik, half the price, a fraction of the crowds. Kotor is Europe's best-kept secret.",
    images: ["https://incredibleitinerary.com/og/kotor-3-days.jpg"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/kotor-3-days",
  },
};

export default function KotorPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Kotor in 3 Days: The Complete Montenegro Travel Guide (2026)",
      description:
        "Complete 3-day Kotor itinerary covering the UNESCO Old Town, City Walls hike, Perast, Sveti Stefan and Budva for every budget.",
      image: "https://incredibleitinerary.com/og/kotor-3-days.jpg",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
      },
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      url: "https://incredibleitinerary.com/blog/kotor-3-days",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Kotor 3 Days",
          item: "https://incredibleitinerary.com/blog/kotor-3-days",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "TouristDestination",
      name: "Kotor",
      description:
        "UNESCO-listed medieval walled city on the Bay of Kotor in Montenegro, the most dramatic Adriatic city in the Balkans.",
      url: "https://incredibleitinerary.com/blog/kotor-3-days",
      touristType: ["History lovers", "Budget travellers", "Hikers", "Cruise travellers", "Couples"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 42.4247,
        longitude: 18.7712,
      },
      hasMap: "https://maps.google.com/?q=Kotor,Montenegro",
      containedInPlace: {
        "@type": "Place",
        name: "Montenegro",
      },
    },
  ];

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
