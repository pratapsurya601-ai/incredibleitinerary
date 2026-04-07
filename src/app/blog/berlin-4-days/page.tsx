import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Berlin 4-Day Itinerary 2026: Trip Planner",
  description:
    "Plan the perfect 4 days in Berlin — the Berlin Wall, Brandenburg Gate, Museum Island, Kreuzberg street food, techno clubs, and budgets from €55/day.",
  keywords: [
    "Berlin 4 days itinerary",
    "Berlin travel guide 2026",
    "Berlin Wall East Side Gallery",
    "Brandenburg Gate Berlin",
    "Museum Island Berlin",
    "Berlin budget guide",
    "Kreuzberg Berlin",
    "Berlin nightlife Berghain",
  ],
  openGraph: {
    title: "Berlin 4-Day Itinerary 2026: Trip Planner",
    description:
      "History, street art, world-class museums and Europe's most creative nightlife — your ultimate 4-day Berlin itinerary from €55/day to luxury.",
    url: "https://incredibleitinerary.com/blog/berlin-4-days",
    siteName: "IncredibleItinerary",
    type: "article",
    publishedTime: "2026-01-15T08:00:00Z",
    modifiedTime: "2026-04-05T08:00:00Z",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Berlin Brandenburg Gate illuminated at night with Unter den Linden boulevard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Berlin 4-Day Itinerary 2026: Trip Planner",
    description:
      "History, street art, world-class museums and Europe's most creative nightlife — your ultimate 4-day Berlin itinerary from €55/day to luxury.",
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/berlin-4-days",
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────────────── */
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Berlin in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
    description:
      "Plan the perfect 4 days in Berlin — the Berlin Wall, Brandenburg Gate, Museum Island, Kreuzberg, techno clubs, and budgets from €55/day.",
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1200&q=80",
    datePublished: "2026-01-15T08:00:00Z",
    dateModified: "2026-04-05T08:00:00Z",
    author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
    publisher: {
      "@type": "Organization",
      name: "IncredibleItinerary",
      logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://incredibleitinerary.com/blog/berlin-4-days" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
      { "@type": "ListItem", position: 3, name: "Berlin 4-Day Guide", item: "https://incredibleitinerary.com/blog/berlin-4-days" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Berlin",
    description:
      "Germany's capital and most fascinating city — where Cold War history, world-class museums, street art, multicultural food, and Europe's most legendary nightlife converge.",
    url: "https://incredibleitinerary.com/blog/berlin-4-days",
    touristType: ["History enthusiasts", "Art lovers", "Nightlife seekers", "Food travellers", "Architecture fans"],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.52,
      longitude: 13.405,
    },
    containedInPlace: {
      "@type": "Country",
      name: "Germany",
    },
  },
];

/* ── Page Data ────────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Berlin",
  country: "Germany",
  countryFlag: "🇩🇪",
  slug: "berlin-4-days",
  heroQuery: "berlin brandenburger gate east side gallery germany night",
  heroAlt: "Berlin Brandenburg Gate illuminated at night with Unter den Linden boulevard",
  category: "Europe",
  date: "January 15, 2026",
  readTime: "16 min read",

  intro:
    "Berlin is the most fascinating city in Europe — a place where the scars of history are visible on every street corner, where the East Side Gallery stretches 1.3km of the Berlin Wall as the world's longest open-air gallery, where techno clubs open on Friday and don't close until Monday morning in repurposed Soviet-era power stations, and where a simple sausage smothered in curry-ketchup — the currywurst — has achieved UNESCO-candidate status as the city's defining dish. Europe's most creative, brutally honest, and endlessly complex capital will get under your skin in four days and never quite leave.",

  stats: {
    duration: "4 Days",
    budgetFrom: "€55",
    bestMonths: "May–Sep",
    airport: "BER (Brandenburg)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry Info" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "gallery", emoji: "🖼️", label: "Photo Gallery" },
    { id: "tours", emoji: "🎟️", label: "Tours & Activities" },
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
        ["Visa Required", "Schengen visa (Category C) via German consulate or VFS Global"],
        ["Fee", "€80 per adult (€40 under 12)"],
        ["Processing", "15–30 business days; apply at least 6 weeks before travel"],
        ["Duration", "Up to 90 days within any 180-day Schengen period"],
        ["Documents", "Bank statements, confirmed accommodation, return flight, travel insurance (€30,000 minimum cover)"],
        ["Tip", "Berlin embassy handles applications — VFS Global Berlin accepts biometrics for most states"],
      ],
    },
    {
      flag: "🇺🇸🇬🇧🇪🇺",
      title: "US / UK / EU / AU Passport Holders",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["Visa Required", "No — Schengen zone free movement"],
        ["ETIAS (2025+)", "€7 ETIAS travel authorisation required from mid-2025"],
        ["Duration", "90 days in any 180-day period across all Schengen countries"],
        ["Passport Validity", "Must be valid 3 months beyond planned departure"],
        ["UK Citizens (post-Brexit)", "Visa-free up to 90 days; ETIAS required once live"],
        ["Tip", "Apply for ETIAS online before departure at etias.com — instant approval in most cases"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "€55/day",
      days: [
        {
          day: "Day 1",
          title: "Berlin Wall, Checkpoint Charlie & Cold War History",
          items: [
            "Start at the East Side Gallery (free entry always) — 1.3km of original Berlin Wall covered in 105 murals by international artists. Arrive before 9am to photograph without crowds.",
            "Walk west along the Spree River waterfront to Oberbaumbrücke — the iconic twin-tower bridge connecting former East and West Berlin",
            "Checkpoint Charlie: the former American military checkpoint — the outdoor museum boards are free; skip the paid museum itself (overpriced and outdated)",
            "Lunch at Curry 36 in Kreuzberg — Berlin's most legendary currywurst stand, under €5 for a portion with chips",
            "Afternoon: Berlin Wall Memorial on Bernauer Strasse (free) — the most moving and authentic Wall site with the preserved 'death strip'",
            "Brandenburg Gate and Holocaust Memorial (Denkmal für die ermordeten Juden Europas) — both free. Walk between the 2,711 concrete stelae at dusk for maximum impact.",
            "Evening: grab a döner kebab in Kreuzberg (from €5) and walk Görlitzer Park neighbourhood",
          ],
          cost: "€30–40",
        },
        {
          day: "Day 2",
          title: "Museum Island, Alexanderplatz & Prenzlauer Berg",
          items: [
            "Museum Island (Museumsinsel) — five world-class museums on a UNESCO island in the Spree. The Berlin Museum Pass (€29, 3 days) covers all five plus dozens of others — essential purchase.",
            "Pergamon Museum: the reconstructed Pergamon Altar and Ishtar Gate from ancient Babylon — some of the most jaw-dropping ancient architecture in the world",
            "Alte Nationalgalerie: 19th-century German art — Caspar David Friedrich, Schinkel, and the Romantic masters",
            "Lunch at one of the island cafes or at the market near Hackescher Markt (€8–10)",
            "Afternoon: Alexanderplatz — the TV Tower (Fernsehturm) exterior (observation deck €22, optional), the Soviet-era architecture and the World Clock",
            "Hackesche Höfe: a series of interconnected art nouveau courtyards in Mitte — indie shops, cafes, galleries",
            "Evening: explore Prenzlauer Berg — former East Berlin neighbourhood now full of vintage shops, craft beer bars and excellent pizza. Mauerpark flea market on Sunday mornings is legendary.",
          ],
          cost: "€40–50",
        },
        {
          day: "Day 3",
          title: "Kreuzberg, Street Art & Tempelhof",
          items: [
            "Morning: Bergmannstrasse in Kreuzberg — Berlin's most characterful street market, antique shops, bakeries and the Turkish market vibe",
            "Turkish Market on Maybachufer canal (Tuesdays and Fridays) — the real multicultural heart of Kreuzberg. Fresh flatbread, olives, produce and textiles.",
            "Lunch: Mustafa's Gemüse Kebab — the queue is worth it (30 min wait normal), legendary €5 vegetable döner",
            "Afternoon: Tempelhof Field — the former Nazi-built airport is now a vast public park. Hire a bike (€12/day) and cycle its 300-hectare expanse. Barbecues, kite-flying, urban gardens.",
            "Street art tour: RAW Gelände in Friedrichshain — an abandoned railway repair yard turned arts/club complex covered in murals. Free to explore in the day.",
            "Evening: Club der Visionäre in Treptow — a riverside summer bar and small club that captures Berlin's easy, creative energy. Open air terrace, techno, natural wine.",
          ],
          cost: "€35–45",
        },
        {
          day: "Day 4",
          title: "Charlottenburg, Tiergarten & Farewell Berlin",
          items: [
            "Morning: Charlottenburg Palace (€12 entry for main wing) — Berlin's baroque royal palace with formal French gardens",
            "KaDeWe department store food hall — the Kaufhaus des Westens has 7 floors and a legendary gourmet floor (6th) — free to explore, budget for a coffee and pastry (€6)",
            "Walk the Kurfürstendamm (Ku'damm) — West Berlin's main boulevard; note the bombed-out Kaiser Wilhelm Memorial Church kept deliberately as a ruin",
            "Lunch: Tiergarten picnic — buy supplies from an Aldi near Zoologischer Garten, eat in the vast central park",
            "Afternoon: the Reichstag dome (book free tickets at bundestag.de weeks in advance — worth doing) — the glass dome above the German parliament offers 360° views and is conceptually powerful",
            "Sunset at the Victory Column (Siegessäule) in Tiergarten — climb for panoramic golden-hour views over the city (€4)",
            "Farewell dinner: Markthalle Neun in Kreuzberg on Thursday Street Food Thursday (weekly event, multiple vendors, €10–15) or a proper sit-down Berliner Schnitzel at Zum Schusterjungen",
          ],
          cost: "€40–55",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€120/day",
      days: [
        {
          day: "Day 1",
          title: "Cold War Berlin — Guided Wall Tour & Refined Dinner",
          items: [
            "Check in to Hotel Amano Mitte or nhow Berlin (€90–120/night) — well-located in the former East",
            "Private 3-hour Cold War Berlin walking tour with a specialist guide who lived through the division (€40pp via GetYourGuide) — covers Wall, Stasi, DDR daily life",
            "East Side Gallery with knowledgeable context from the guide — understand what the murals actually mean",
            "Lunch at Cafe Cinema in Mitte — Berlin's coolest old-school GDR-aesthetic cafe (€15)",
            "Checkpoint Charlie Museum visit (skip the outdoor tourist trap, enter the museum — €17, controversial but informative)",
            "Brandenburg Gate evening walk; Holocaust Memorial dusk visit with the guide's optional extended tour",
            "Dinner at Rutz Weinbar (1 Michelin star) — creative German cuisine and extraordinary wine list (€80pp)",
          ],
          cost: "€110–140",
        },
        {
          day: "Day 2",
          title: "Museum Island & Boat Tour on the Spree",
          items: [
            "Berlin Museum Pass day — Pergamon, Neues Museum (Nefertiti bust, original — one of the world's great museum experiences), Bode Museum",
            "Neues Museum pre-booking essential — Nefertiti's limestone portrait bust has been captivating visitors since 1912",
            "Lunch at Borchardt — the most famous brasserie in Berlin, schnitzel the size of the plate, €25pp",
            "Afternoon: Spree River boat tour through the government quarter and Museum Island (1.5 hrs, €20pp) — magnificent architecture from the water",
            "Topography of Terror (former Gestapo headquarters site) — free and profound documentation of Nazi persecution",
            "Evening: Hackesche Höfe for cocktails at Buck and Breck (reservation required, €18 cocktails) then dinner at Tim Raue restaurant (2 Michelin stars, Asian-German fusion, €100pp)",
          ],
          cost: "€130–160",
        },
        {
          day: "Day 3",
          title: "Charlottenburg, Design & Kreuzberg Evening",
          items: [
            "Charlottenburg Palace private tour with an art historian — understand the Hohenzollern dynasty and Prussian history (€60pp private guide)",
            "Afternoon: Design Panoptikum at the Hamburger Bahnhof — contemporary art museum in a former train station (€16)",
            "Coffee break at The Barn — Berlin's finest specialty coffee roaster, multiple locations (€4–6 a cup)",
            "Bike rental and Tiergarten circuit — 8km loop through the green heart of Berlin",
            "Kreuzberg evening: Markthalle Neun or Knofi delicatessen for provisions, canal-side beers at Freischwimmer",
            "Dinner: Horváth (2 Michelin stars, Austrian cuisine, Kreuzberg) — exceptional tasting menu on the canal (€120pp)",
          ],
          cost: "€140–170",
        },
        {
          day: "Day 4",
          title: "Reichstag, Potsdam Day Trip & Farewell",
          items: [
            "Morning: Reichstag dome at opening time (pre-booked, free) — see the German parliament in session if sitting",
            "Train to Potsdam (30 min, €4 with Berlin ABC ticket) — a half-day trip to the Prussian royal palaces",
            "Sanssouci Palace and Park: Frederick the Great's summer palace — arguably Germany's most beautiful palace and gardens (€14 palace entry; park free)",
            "Lunch in Potsdam's Dutch Quarter — charming 18th-century district built for Dutch craftsmen",
            "Return to Berlin mid-afternoon; final shopping on Prenzlauer Berg or Hackescher Markt",
            "Farewell dinner: Nobelhart & Schmutzig (1 Michelin star, radical locavore Berlin cuisine, €95pp tasting menu)",
          ],
          cost: "€120–150",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€280/day",
      days: [
        {
          day: "Day 1",
          title: "Private Arrival, Cold War Briefing & Fine Dining",
          items: [
            "Check in to Hotel Adlon Kempinski Berlin (from €500/night) — Berlin's most iconic hotel, next to the Brandenburg Gate since 1907",
            "Private Cold War historian for a bespoke 4-hour deep dive — Stasi headquarters, Wall documentation centre, hidden checkpoints unknown to tourists",
            "Berliner Philharmonie private tour — the world's greatest concert hall, designed by Hans Scharoun (advance arrangement required)",
            "Lunch at Lorenz Adlon Esszimmer (2 Michelin stars, in the hotel) — views of the Brandenburg Gate with the finest tasting menu in Berlin (€180pp)",
            "Holocaust Memorial private guided experience with a memorial historian — deeply moving",
            "Reichstag evening visit (pre-book, free) — sunset from the dome, the most dramatic light in Berlin",
            "Dinner at Rutz (1 Michelin star) or alternative reservation at Amador (3 Michelin stars, 90 min from Berlin) for the serious diner",
          ],
          cost: "€450–600",
        },
        {
          day: "Day 2",
          title: "Private Museum Island + Collector's Berlin",
          items: [
            "Museum Island private curator-led tour: access the Pergamon and Neues Museum before opening to the public (special arrangement, €200pp) — Pergamon in silence is extraordinary",
            "Nefertiti bust private viewing with an Egyptology specialist",
            "Lunch at Crackers in Mitte — a Berlin classic, modern European cooking in a stylish two-floor restaurant (€60pp)",
            "Art gallery afternoon: König Galerie, Sprüth Magers, Esther Schipper — Berlin's leading contemporary art galleries, mostly free to enter",
            "Private street art tour with a working Berlin muralist — meet artists and understand the scene from inside (€120pp)",
            "Evening: Dinner at Nobelhart & Schmutzig (revolutionary locavore cooking, €100pp) followed by cocktails at Victoria Bar",
          ],
          cost: "€350–500",
        },
        {
          day: "Day 3",
          title: "Potsdam Private Day + Opera Evening",
          items: [
            "Private Mercedes transfer to Potsdam (45 min) with historian guide",
            "Sanssouci Palace private tour including rooms not on the public route — Frederick the Great's personal chambers",
            "Cecilienhof Palace — where the 1945 Potsdam Conference reshaped the post-war world",
            "Lunch at Speckers Landhaus Potsdam — refined Brandenburg cuisine in a 1930s villa (€60pp)",
            "Return to Berlin; hotel spa afternoon at the Adlon Wellness Suite",
            "Berlin Philharmonic or Deutsche Oper performance (book 6 months ahead — premium seats €150–300pp)",
            "Post-opera supper at Borchardt — the traditional choice for Berlin's opera-goers (€50pp late night menu)",
          ],
          cost: "€400–550",
        },
        {
          day: "Day 4",
          title: "Private Art Collection, Farewell Champagne & Departure",
          items: [
            "Breakfast at the Adlon — the full Prussian breakfast spread (€45pp but exceptional)",
            "Private access to a Berlin collector's personal art collection (arranged through concierge — Berlin has Europe's most active private collecting scene)",
            "Charlottenburg Palace state rooms with private guide — Porcelain Cabinet and the Golden Gallery ceiling",
            "Final lunch at restaurant tim raue (2 Michelin stars, Kreuzberg) — the most intellectually exciting cooking in Berlin (€120pp)",
            "Late afternoon: KaDeWe food hall sourcing gifts — Riesling, German mustards, Niederegger marzipan",
            "Farewell champagne at the Adlon Bar — the most historically layered bar in Germany (Michael Jackson dangled his baby from the window above)",
            "Private airport transfer — BER Brandenburg",
          ],
          cost: "€350–500",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "Budget",
      accommodation: "€18–28 (hostel dorm — Ostel DDR, Generator Berlin)",
      food: "€12–18 (currywurst, döner, supermarket)",
      transport: "€9 (Berlin AB day pass)",
      activities: "€10–15 (Museum Pass best value)",
      total: "€55/day",
    },
    {
      tier: "Mid-Range",
      accommodation: "€80–120 (3-star boutique, Mitte or Prenzlauer Berg)",
      food: "€35–50 (restaurants + one Michelin-adjacent dinner)",
      transport: "€12–18 (AB pass + occasional taxi)",
      activities: "€25–40 (guided tour + museums)",
      total: "€120/day",
    },
    {
      tier: "Luxury",
      accommodation: "€250–500 (Hotel Adlon, Soho House, Das Stue)",
      food: "€100–180 (Michelin starred dining)",
      transport: "€60–100 (private transfers)",
      activities: "€60–120 (private guides, special access)",
      total: "€280+/day",
    },
    {
      tier: "Nightlife Focus",
      accommodation: "€25–60 (check in Friday, check out Monday)",
      food: "€20–30 (kebabs, club snacks)",
      transport: "€15 (night S-Bahn + taxi)",
      activities: "€20–30 (club entry — Berghain free to €20)",
      total: "€80–120/day",
    },
    {
      tier: "Museum Pass",
      accommodation: "Any tier",
      food: "Any tier",
      transport: "€9 (AB pass)",
      activities: "€29 (Berlin Museum Pass — 3 days, 30+ museums)",
      total: "€29 saves €80+ in museum entry",
    },
  ],

  mistakes: [
    {
      icon: "🏛️",
      title: "Not Buying the Berlin Museum Pass",
      desc: "At €29, the Berlin Museum Pass gives 3 days of access to 30+ museums including all five on Museum Island (Pergamon alone costs €22). It pays for itself in your first museum visit. Available at any participating museum or online — buy it on day one.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🎵",
      title: "Trying to 'Plan' Berghain",
      desc: "Berghain, the world's most famous techno club, has a notoriously selective door policy with no confirmed method for entry. Dress down (black, functional), go in a small group, don't explain yourself to the bouncer, and don't photograph inside. Many people get in, many don't — accept either outcome with grace. Sunday morning is the most legendary session.",
      color: "border-purple-200 bg-purple-50",
    },
    {
      icon: "🚇",
      title: "Buying Single Tickets on the U-Bahn",
      desc: "Berlin's U-Bahn, S-Bahn, tram and bus are all on one ticket system. A single trip costs €3.50. The Berlin AB Day Pass costs €9 and covers unlimited travel all day within zones A and B (which covers all tourist areas). The 7-day pass (€36) is excellent value for a week-long stay.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "📸",
      title: "Skipping the Berlin Wall Memorial for the East Side Gallery",
      desc: "The East Side Gallery is impressive but heavily commercialised. The Berlin Wall Memorial (Gedenkstätte Berliner Mauer) on Bernauer Strasse is the most historically authentic and emotionally powerful Wall site — it preserves the actual 'death strip', guard towers, and documentation centre. Many visitors only see the Gallery and miss what the Wall truly was.",
      color: "border-yellow-200 bg-yellow-50",
    },
    {
      icon: "🍽️",
      title: "Eating Only in Touristy Mitte When the Food Is in Kreuzberg",
      desc: "Central Mitte has convenience but Kreuzberg, Neukölln, and Prenzlauer Berg have the best food in Berlin — Turkish markets, Vietnamese canteens, natural wine bars, creative bakeries. The Bergmannstrasse and Maybachufer areas offer authentic multicultural Berlin eating at a fraction of tourist-zone prices.",
      color: "border-blue-200 bg-blue-50",
    },
  ],

  tips: [
    {
      icon: "🎟️",
      title: "Book the Reichstag Dome Months in Advance (It's Free)",
      desc: "The Reichstag glass dome is one of Berlin's most iconic experiences — free to enter, with a spiralling walkway and audio guide. The catch: it requires advance registration at bundestag.de, and popular slots (sunset, weekend) book out 2–3 months ahead. Register as soon as your travel dates are confirmed. Bring your passport — it's used for security checks.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🌆",
      title: "Berlin's Best Neighbourhoods Each Have a Different Personality",
      desc: "Mitte (history, museums, government); Prenzlauer Berg (families, vintage, craft beer); Kreuzberg (multicultural, radical, market culture); Neukölln (artists, cheap, authentic now); Friedrichshain (clubs, young, East Berlin pride); Charlottenburg (old West Berlin, upscale, museums). Plan your days by neighbourhood to minimise U-Bahn time.",
      color: "border-blue-200 bg-blue-50",
    },
    {
      icon: "🌙",
      title: "Berlin's Nightlife Starts Much Later Than You Think",
      desc: "Berlin's club scene genuinely starts at 1–2am and runs through Sunday. Pre-gaming at a Spätkauf (late-night convenience kiosk — Berlin's most beloved institution, open 24/7) with cheap beers on the street is the local warm-up ritual. Don't arrive at a club before midnight — you'll be queueing alone.",
      color: "border-amber-200 bg-amber-50",
    },
    {
      icon: "🚲",
      title: "Cycling Is the Fastest Way to See Berlin",
      desc: "Berlin is one of Europe's most cycling-friendly cities with over 1,000km of bike lanes. Nextbike and Lidl-Bike offer affordable rental (from €1/30 min). A bike makes Tiergarten, the Wall trail, Tempelhof, and neighbourhood-hopping completely fluid. Cycling from the Reichstag to the East Side Gallery along the Spree is one of Berlin's great urban routes.",
      color: "border-purple-200 bg-purple-50",
    },
  ],

  faqs: [
    {
      q: "How many days do you actually need in Berlin?",
      a: "Berlin rewards time — most travellers say they needed more days than they had. Four days gives you time to cover the headline history (Wall, Brandenburg Gate, Holocaust Memorial), Museum Island, two or three neighbourhoods properly, and experience the food and bar scene. A week allows you to go deeper into Potsdam, the Stasi Museum, and the club culture without rushing.",
    },
    {
      q: "Is Berlin safe for tourists?",
      a: "Berlin is one of Western Europe's safest major cities for tourists. Violent crime against visitors is rare. The main concerns are: pickpockets on the U-Bahn and in crowded tourist areas (Alexanderplatz especially), bicycle theft (always use a D-lock), and the occasional scam in the more touristy parts of Mitte. Kreuzberg and Neukölln have a reputation but are genuinely safe for visitors during the day and evening.",
    },
    {
      q: "What is ETIAS and do I need it for Berlin?",
      a: "ETIAS (European Travel Information and Authorisation System) is the EU's equivalent of the US ESTA — a pre-travel electronic authorisation costing €7. It will be required for all visa-exempt non-EU visitors (including US, UK, Australian, Canadian citizens) entering Schengen countries including Germany. It was expected to launch from mid-2025. Apply at etias.com before your trip.",
    },
    {
      q: "What's the difference between the East Side Gallery and the Berlin Wall Memorial?",
      a: "The East Side Gallery (Friedrichshain) is 1.3km of surviving Wall sections turned into an open-air art gallery — visually stunning, historically somewhat decontextualised, and very touristy. The Berlin Wall Memorial (Bernauer Strasse, Mitte) is the most authentic site: it preserves the original 'death strip' with guard towers, the no-man's-land, escape tunnels, and a deeply moving documentation centre. If you only visit one, go to the Memorial.",
    },
  ],

  combineWith: ["munich-3-days", "prague-4-days", "amsterdam-3-days", "warsaw-3-days"],
  relatedSlugs: ["munich-3-days", "prague-4-days", "amsterdam-3-days", "vienna-4-days"],
  galleryQuery: "berlin wall east side gallery brandenburg gate kreuzberg museum island",
};

/* ── Page Component ───────────────────────────────────────────────────────── */
export default function BerlinPage() {
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
