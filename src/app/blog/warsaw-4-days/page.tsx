import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Warsaw",
  country: "Poland",
  countryFlag: "🇵🇱",
  slug: "warsaw-4-days",
  heroQuery: "warsaw old town poland royal castle market square",
  heroAlt: "Warsaw Old Town Market Square with colourful tenements and Royal Castle at golden hour",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro:
    "Warsaw is Europe's most defiant capital — a city that was deliberately flattened to rubble in 1944 and rebuilt brick by brick from 18th-century paintings over the following decades. Its meticulously reconstructed Old Town is a UNESCO World Heritage Site not for its age, but for the sheer act of collective memory that raised it. Beyond the fairy-tale spires, Warsaw punches hard: the Warsaw Uprising Museum is the most powerful WWII exhibit in Europe, the Praga district blazes with street art, the Palace of Culture looms Soviet-grand, and a bowl of Żurek in a milk bar costs almost nothing. Four days is exactly right.",
  stats: {
    duration: "4 Days",
    budgetFrom: "€35",
    bestMonths: "May–Sep",
    airport: "WAW",
  },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Old Town & Royal Route" },
    { id: "day2", emoji: "📅", label: "Day 2 — Uprising Museum & Praga" },
    { id: "day3", emoji: "📅", label: "Day 3 — Palace of Culture & Łazienki" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Schengen Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Schengen Visa (Type C)"],
        ["Processing", "15–30 business days"],
        ["Fee", "€80 per person"],
        ["Validity", "90 days within any 180-day period"],
        ["Apply at", "Polish Consulate or VFS Global"],
        ["Documents", "Hotel bookings, return flight, 3-month bank statements"],
        ["Notes", "Apply 6–8 weeks before travel. Biometric appointment required at VFS."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free (Schengen Area)"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Validity", "90 days within any 180-day period"],
        ["ETIAS", "Required from mid-2026 (€7, register online before departure)"],
        ["Passport", "Must be valid 3+ months beyond travel dates"],
        ["Notes", "UK passport holders are visa-free post-Brexit but subject to 90/180 rule."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "€35–55/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town & Royal Route",
          items: [
            "10:00 — Arrive at Warsaw Chopin Airport (WAW); take bus 175 to the city centre (PLN 4.40, ~40 min) — the cheapest link to Old Town and most hostels in Śródmieście",
            "12:00 — Stroll Warsaw Old Town Market Square (Rynek Starego Miasta) — entirely rebuilt from 18th-century Canaletto paintings after WWII destruction; the coloured facades look 300 years old but most are post-1953",
            "13:00 — Lunch at a milk bar (Bar Mleczny) on Nowy Świat — Żurek soup (rye sour with hard-boiled egg and white sausage) costs PLN 12–18; pierogi from PLN 20; milk bars are Warsaw's cheapest and most authentic lunch option",
            "15:00 — Walk the Royal Route south from Castle Square along Krakowskie Przedmieście past the Presidential Palace, St Anne's Church, and the University of Warsaw — entirely free and one of the finest urban walking routes in Central Europe",
            "17:30 — Climb St Anne's Church bell tower (PLN 10) for a rooftop panorama over the Old Town and the Vistula — the best free-adjacent viewpoint in Warsaw",
            "19:30 — Dinner at a budget Polish restaurant near Nowy Świat — bigos (hunter's stew) or kotlet schabowy (breaded pork cutlet) for PLN 25–35; avoid the tourist restaurants inside the Old Town walls where prices double",
          ],
          cost: "PLN 80–120 / €18–28 (transport, food, tower)",
        },
        {
          day: "Day 2",
          title: "Warsaw Uprising Museum & Praga District",
          items: [
            "09:00 — Warsaw Uprising Museum (Muzeum Powstania Warszawskiego) — budget 3–4 hours minimum; entry PLN 30 (free on Sundays); the most emotionally powerful museum in Europe covering the 1944 uprising and its aftermath",
            "13:30 — Lunch near the museum on Ulica Grzybowska — a cluster of budget restaurants and good zapiekanka stalls; PLN 20–30 per person",
            "15:00 — Cross the Vistula to Praga district on tram 26 — Warsaw's bohemian east-bank neighbourhood with sprawling street art murals, Soviet-era architecture, and a completely different energy from the polished city centre",
            "16:00 — Explore Ulica Ząbkowska and Ulica Targowa street art and independent cafés — Praga Północ has the highest density of murals in Poland; the area was untouched by WWII so the pre-war Warsaw tenements survive here",
            "18:00 — Craft beer at Jabeerwocky Praga (Praga's best craft bar) — local Piwoteka beers from PLN 15–18 per pint; the bar is set in a converted 19th-century building",
            "20:00 — Dinner at Bar Studio or a Praga milk bar — PLN 30–40 for a full meal; Praga remains one of the most affordable dining areas in Warsaw",
          ],
          cost: "PLN 90–130 / €20–30 (museum, trams, food, beer)",
        },
        {
          day: "Day 3",
          title: "Palace of Culture, Łazienki Park & Chopin",
          items: [
            "10:00 — Palace of Culture and Science (PKiN) viewing terrace (PLN 25) — Stalin's 'gift' to Warsaw looms 237m; the observation deck on the 30th floor gives the clearest panorama of the flat Warsaw cityscape spreading in every direction",
            "11:30 — Browse Złote Tarasy shopping mall basement food court for cheap breakfast or coffee — PLN 10–15",
            "13:00 — Walk south to Łazienki Park (entry free) — Warsaw's finest park with the Palace on the Isle, peacocks wandering freely, and the famous Chopin monument where free open-air piano concerts are held every Sunday at noon and 4pm May–September",
            "15:00 — Wilanów Palace exterior walk (entry to gardens PLN 10) — the Polish Versailles 8km south of centre; the baroque palace exterior and formal gardens are stunning even without paying the full interior ticket",
            "18:30 — Return to centre; dinner at a milk bar or a budget zapiekanka (Polish open sandwich) stall at Plac Zbawiciela — PLN 20–25",
            "20:30 — Evening walk along Nowy Świat and to the Copernicus Science Centre area — the Vistula embankment from the Świętokrzyski Bridge is especially beautiful at night",
          ],
          cost: "PLN 70–100 / €16–24 (PKiN, gardens, food)",
        },
        {
          day: "Day 4",
          title: "POLIN Museum & Departure",
          items: [
            "09:00 — POLIN Museum of the History of Polish Jews (PLN 35, free on Thursdays) — one of the most architecturally and narratively stunning museums in Europe; covers 1,000 years of Jewish life in Poland and the Holocaust; allow 2.5–3 hours",
            "12:00 — Walk around the Ghetto Heroes Monument and the surrounding Muranów neighbourhood — the entire district was levelled in 1943 and rebuilt on top of 6 metres of rubble; a deeply moving urban experience",
            "13:30 — Final lunch at a Muranów milk bar or café (PLN 20–30), then bus or train back to Chopin Airport",
          ],
          cost: "PLN 70–100 / €16–24 (museum, food, airport transport)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "€75–110/day",
      days: [
        {
          day: "Day 1",
          title: "Old Town, Royal Castle & Fine Polish Dinner",
          items: [
            "12:00 — Check in to a 3-star hotel in Śródmieście or the Old Town area (€60–90/night) — Hotel Bellotto on Senatorska or Duval Apartments in the Old Town are excellent mid-range options",
            "13:30 — Royal Castle interior tour (PLN 50) — the interiors were entirely reconstructed from surviving photographs and paintings after the Nazi demolition in 1944; the Canaletto Room with its original 18th-century paintings is exceptional",
            "15:30 — Old Town walking tour with a private guide (2 hours, PLN 180/group) — essential context about the reconstruction; a good guide transforms the Old Town from pretty facades into one of history's most remarkable acts of cultural defiance",
            "18:00 — Aperitif at a rooftop bar above the Old Town — Bar Studio at the Palace of Culture or the Level 27 bar offer panoramic views; cocktails PLN 35–50",
            "20:00 — Dinner at Restauracja Polska Różana or Stary Dom — traditional Polish fine dining with updated presentations; wild boar, duck confit with sauerkraut, and pierogi with truffle cream; PLN 80–120/pp",
          ],
          cost: "€100–130 (hotel, castle, tour, dinner)",
        },
        {
          day: "Day 2",
          title: "Warsaw Uprising Museum & Neon Museum",
          items: [
            "09:30 — Warsaw Uprising Museum (PLN 30) with an English audio guide (PLN 15) — the premium audio guide provides oral testimonies from uprising survivors; 3.5 hours well spent",
            "13:30 — Lunch at a Wola district restaurant near the museum — Zoni or Charlotte Menora offer modern Polish cuisine from PLN 50–70/pp",
            "15:30 — Neon Museum (Muzeum Neonów, PLN 20) in Praga — a collection of 300+ salvaged communist-era neon signs; one of the quirkiest and most photogenic museums in Poland",
            "17:30 — Explore Praga's street art and vintage shops along Ulica Ząbkowska — the 11-storey mural by Polish artist M-City at the corner of Inżynierska is extraordinary",
            "20:00 — Dinner at Koneser Centrum Wódki restaurant in the Praga Koneser Centre — the vodka museum complex also houses excellent restaurants; PLN 70–100/pp including Polish vodka tasting",
          ],
          cost: "€90–120 (museums, lunch, dinner, drinks)",
        },
        {
          day: "Day 3",
          title: "Łazienki, Wilanów & Chopin Concert",
          items: [
            "10:00 — Łazienki Park morning walk — rent a rowing boat on the lake (PLN 30/hour) and circle the Palace on the Isle; the park is at its most beautiful in morning light",
            "12:00 — Wilanów Palace full interior visit (PLN 50) — the authentic 17th-century baroque interiors survived WWII intact; the ceiling frescoes and tiled stoves are among the finest in Poland",
            "14:30 — Lunch at the Wilanów Palace garden café or the restaurant near the estate gates — PLN 50–70/pp for Polish cuisine in an aristocratic setting",
            "17:00 — Return to centre; Chopin Piano Concert at Ostrogski Castle (PLN 50–80) — intimate evening recitals of Chopin's works held in the museum where Chopin lived; buy tickets at the Chopin Museum (PLN 30 to visit)",
            "21:00 — Late dinner at a wine bar on Mokotowska Street — the city's most fashionable dining street; PLN 60–90/pp",
          ],
          cost: "€100–130 (palace, concert, meals)",
        },
        {
          day: "Day 4",
          title: "POLIN Museum, Ghetto Walk & Departure",
          items: [
            "09:00 — POLIN Museum with a ticketed English guided tour (PLN 80 including entry) — a 2-hour guided tour through 1,000 years of Polish-Jewish history; a genuinely world-class museum experience",
            "12:00 — Guided Ghetto Remembrance Walk with a local guide (PLN 100–150/person, 2 hours) — covers the Warsaw Ghetto boundary markers, the Umschlagplatz deportation site, and the street patterns that record what was once Europe's second-largest Jewish city",
            "14:30 — Final lunch at Charlotte Bakery on Plac Zbawiciela (PLN 40–55) — Warsaw's best coffee and pastry spot; then taxi or Uber to Chopin Airport (~PLN 50)",
          ],
          cost: "€80–110 (museums, guided walk, lunch, airport)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "€200–350/day",
      days: [
        {
          day: "Day 1",
          title: "Grand Arrival & Private Old Town Tour",
          items: [
            "12:00 — Private airport transfer to hotel (PLN 200–300 sedan) — check in to Hotel Bristol Warsaw (a Leading Hotels of the World property on Krakowskie Przedmieście) or Raffles Europejski Warsaw; both are historic grand hotel restorations on the Royal Route",
            "15:00 — Private Old Town walking tour with a specialist historian guide (2 hours, PLN 400–600) — bespoke narration of the reconstruction story with access to private courtyards and interiors not open to the public",
            "18:00 — Cocktails at the Europejski Terrace bar or Hotel Bristol's 1901 bar — Warsaw's most beautiful hotel bars with period interiors; cocktails PLN 60–90",
            "20:00 — Dinner at Atelier Amaro (Warsaw's first Michelin-starred restaurant) — 10-course tasting menu of Polish foraged and wild ingredients from PLN 400/pp; reserve 4–6 weeks ahead",
          ],
          cost: "€280–380 (hotel, private tour, Michelin dinner)",
        },
        {
          day: "Day 2",
          title: "VIP Museum Access & Vodka Masterclass",
          items: [
            "09:00 — Private opening-time visit to POLIN Museum with a curator-led tour (PLN 500+, arranged through hotel concierge) — access to the conservation labs and archival photographs not shown in the main exhibition",
            "12:00 — Warsaw Uprising Museum VIP experience with a private guide (PLN 300) — hearing survivor testimonies via the premium audio guide and accessing the rooftop section of the museum",
            "14:00 — Lunch at Senses Restaurant (Michelin recommended) — contemporary Polish cuisine with French technique; PLN 180–250/pp",
            "17:00 — Private vodka masterclass at the Koneser Vodka Museum (PLN 250/person) — tasting of 20+ Polish vodkas with food pairing and distillery history in the renovated Praga distillery complex",
            "21:00 — Dinner at Zoni (modern Polish fine dining) — seasonal tasting menu PLN 250–350/pp",
          ],
          cost: "€300–420 (museums, Michelin lunch, vodka class, dinner)",
        },
        {
          day: "Day 3",
          title: "Royal Residences & Private Chopin Concert",
          items: [
            "09:30 — Wilanów Palace private pre-opening tour (PLN 600, arranged through hotel) — a curator walks you through the 17th-century interiors before the public arrives; the king's private apartments and the gallery of Polish portraits are extraordinary",
            "12:30 — Lunch at Wilanów Palace restaurant in the orangery — PLN 150–200/pp for a tasting menu in a baroque setting",
            "15:00 — Private Łazienki Park horse-drawn carriage tour (PLN 300) followed by a rowboat hour on the lake — the park was designed for exactly this kind of leisurely aristocratic afternoon",
            "19:00 — Private Chopin recital at Ostrogski Palace or a private salon in the Old Town (PLN 500–800/group, arranged through hotel) — intimate piano performances in historic interiors",
            "21:30 — Late dinner at Stary Dom or a private chef dinner arranged by the hotel — PLN 300–500/pp",
          ],
          cost: "€380–500 (palace tour, carriage, concert, dinner)",
        },
        {
          day: "Day 4",
          title: "Artisan Workshop & Departure",
          items: [
            "09:00 — Private amber and silver jewellery workshop at a Krakowskie Przedmieście artisan studio (PLN 400) — Poland is one of the world's largest amber producers; hand-craft a piece with a master jeweller",
            "12:00 — Farewell lunch at Restauracja Polska Różana — the most iconic traditional Polish fine dining room; PLN 200–300/pp for the full dégustation",
            "14:30 — Private transfer back to Chopin Airport (PLN 250–350 for luxury sedan)",
          ],
          cost: "€300–420 (workshop, Michelin lunch, private transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€12–22 (hostel dorm or budget guesthouse)",
      food: "€8–15 (milk bars, zapiekanka stalls)",
      transport: "€2–5 (trams, buses)",
      activities: "€5–12 (select museums, free parks)",
      total: "€35–55/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€55–90 (3-star hotel, central location)",
      food: "€25–40 (restaurants, occasional fine dining)",
      transport: "€5–10 (Uber, trams, day pass)",
      activities: "€20–35 (main museums, guided tours)",
      total: "€75–110/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€180–400 (Hotel Bristol, Raffles Europejski)",
      food: "€100–200 (Michelin restaurants, fine dining)",
      transport: "€30–80 (private transfers, Uber Black)",
      activities: "€80–200 (private tours, exclusive access)",
      total: "€200–350+/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "€8–14 (hostel dorm, Oki Doki or Chmielna)",
      food: "€5–10 (milk bars only, self-catering)",
      transport: "€1–3 (24-hour transit pass PLN 15)",
      activities: "€3–8 (free parks, Sunday museum free entry)",
      total: "€20–35/day",
    },
    {
      tier: "👨‍👩‍👧 Family",
      accommodation: "€80–150 (apartment rental, Airbnb)",
      food: "€35–60 (mix of restaurants and supermarkets)",
      transport: "€8–15 (family tram passes, occasional taxi)",
      activities: "€30–60 (Copernicus Science Centre, parks)",
      total: "€90–140/day",
    },
  ],
  mistakes: [
    {
      icon: "🏰",
      title: "Eating only inside the Old Town walls",
      desc: "Restaurants inside the UNESCO Old Town charge tourist premiums — PLN 60–80 for dishes that cost PLN 25–35 one street outside the walls on Nowy Świat or in the Śródmieście district. The food quality is often lower despite the higher price.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌉",
      title: "Skipping the Praga district entirely",
      desc: "Most tourists never cross the Vistula, but Praga is where pre-war Warsaw survives. The tenement houses, street murals, Neon Museum, and craft beer scene make it the most authentically Polish neighbourhood in the city. Tram 26 from the centre takes 15 minutes.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🏛️",
      title: "Underestimating the Warsaw Uprising Museum",
      desc: "Many visitors budget 1–2 hours and leave feeling overwhelmed at the halfway point. The museum requires 3.5–4 hours to experience properly. Book English audio guides online in advance and go on a weekday to avoid school groups.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🛏️",
      title: "Booking hotels on the airport side of the city",
      desc: "Staying near Chopin Airport (southern Warsaw) means a €10–15 taxi every time you want to visit the Old Town or Uprising Museum, all of which are in the centre or west. Stay in Śródmieście or Wola for easy access to everything on foot or by tram.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🗓️",
      title: "Missing POLIN's free Thursday",
      desc: "POLIN Museum of the History of Polish Jews is free every Thursday. If your itinerary allows, save POLIN for Thursday and spend the PLN 35 entrance fee on a better dinner in Praga instead. Many of Warsaw's top museums have one free day per week.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🥣",
      title: "Eat at milk bars (Bar Mleczny) every chance you get",
      desc: "Warsaw's communist-era milk bars are subsidised canteens still serving the cheapest genuine Polish food in the city. Żurek costs PLN 12, bigos PLN 18, pierogi PLN 20. Bar Mleczny Familijny near the Palace of Culture and Bar Studio near the National Theatre are the most beloved. Book tours at https://www.getyourguide.com/s/?q=Warsaw&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🎵",
      title: "Attend a free Chopin concert in Łazienki Park",
      desc: "Every Sunday from May to September, free open-air Chopin piano concerts are held at the Chopin Monument in Łazienki Park at noon and 4pm. Warsaw-born Chopin is treated as a national saint; the concerts draw both tourists and Varsovians who bring picnic blankets.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🚃",
      title: "Buy a 24-hour transit pass on your phone",
      desc: "Warsaw's trams and metro cover almost everything a tourist needs. A 24-hour pass costs PLN 15 (€3.50) via the Warsaw Public Transport app. Single tickets are PLN 4.40 — if you ride more than 3 times in a day, the day pass saves money. Validate immediately on boarding.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🌆",
      title: "View the city from the Palace of Culture rooftop at sunset",
      desc: "The PKiN observation deck (PLN 25) is best visited at sunset when Warsaw's flat skyline glows orange. Come 30 minutes before sunset, watch the city lights come on, and stay for the first hour of darkness — the view of the illuminated Old Town from 30 floors up is memorable.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Is Warsaw safe for tourists?",
      a: "Warsaw is one of the safest capitals in Europe. Violent crime against tourists is very rare. The main concern is petty theft on crowded trams and at the central railway station (Warszawa Centralna). Keep valuables in a zipped bag and be aware in Praga at night, though the neighbourhood has gentrified considerably since 2010. Overall, Warsaw is safer than Paris, Rome, or Barcelona for tourists.",
    },
    {
      q: "What currency is used in Warsaw and can I pay by card?",
      a: "Poland uses the Polish Złoty (PLN), not the Euro. Card payments are accepted almost everywhere in Warsaw including milk bars and market stalls. ATMs are widely available — use those affiliated with Polish banks (PKO, Pekao) and decline the 'dynamic currency conversion' option to avoid poor exchange rates. Budget approximately PLN 4.30 per euro as of 2026.",
    },
    {
      q: "How do I get from Warsaw Chopin Airport to the city centre?",
      a: "Bus 175 runs from the airport to the Old Town and city centre (PLN 4.40, ~40 minutes, runs every 10–15 minutes). The suburban SKM train to Warszawa Centralna costs PLN 4.40 and takes 25 minutes. A taxi or Uber from the airport to the centre costs PLN 40–60 and takes 20–35 minutes depending on traffic. Night buses S1 and S7 run through the night.",
    },
    {
      q: "When is the best time to visit Warsaw?",
      a: "May to September offers the best weather, outdoor Chopin concerts, and café terraces open along the Vistula embankment. July and August are the warmest but Warsaw never gets as crowded as Western European capitals — even in peak season. Winter (November–February) is cold and grey but Christmas markets in December are excellent and hotel prices drop 30–40%. Avoid early November around All Saints Day when Poles travel to cemeteries and transport is busy.",
    },
  ],
  combineWith: ["krakow-4-days", "berlin-4-days", "prague-4-days"],
  relatedSlugs: ["krakow-4-days", "berlin-4-days", "budapest-4-days", "prague-4-days"],
  galleryQuery: "warsaw poland old town vistula river",
};

export const metadata: Metadata = {
  title: "Warsaw in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 4-day Warsaw itinerary — Old Town reconstruction, Warsaw Uprising Museum, Palace of Culture, Żurek soup, and Praga street art. Budget €35/day to luxury grand hotels. All visa info included.",
  keywords: [
    "Warsaw itinerary",
    "Warsaw 4 days",
    "Warsaw travel guide 2026",
    "Warsaw budget travel",
    "Warsaw Uprising Museum",
    "Poland travel guide",
    "Warsaw Old Town",
    "Warsaw visa Indian passport",
  ],
  openGraph: {
    title: "Warsaw in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Old Town reconstruction, Warsaw Uprising Museum, Palace of Culture, Żurek soup, and Praga street art — Warsaw in 4 days from €35/day to luxury grand hotels.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/warsaw-4-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Warsaw in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Old Town reconstruction, Warsaw Uprising Museum, Palace of Culture, Żurek soup, and Praga street art — Warsaw in 4 days from €35/day.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/warsaw-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Warsaw in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
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
          name: "Warsaw in 4 Days",
          item: "https://www.incredibleitinerary.com/blog/warsaw-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Warsaw",
      description:
        "Warsaw, Poland — a city rebuilt from rubble, home to the Warsaw Uprising Museum, UNESCO Old Town, Palace of Culture, and vibrant Praga district.",
      geo: { "@type": "GeoCoordinates", latitude: 52.2297, longitude: 21.0122 },
    },
  ],
};

export default function WarsawPage() {
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
