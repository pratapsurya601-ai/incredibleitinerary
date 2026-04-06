import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const siteUrl = "https://www.incredibleitinerary.com";

const data: UniversalBlogData = {
  destination: "Wroclaw",
  country: "Poland",
  countryFlag: "\uD83C\uDDF5\uD83C\uDDF1",
  slug: "wroclaw-3-days",
  heroQuery: "wroclaw market square rynek colorful facades poland",
  heroAlt: "Wroclaw Market Square with colourful Baroque facades reflected in cobblestones at dusk",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "11 min read",
  intro:
    "Wroclaw is the city that Central Europe forgot to over-promote. The Market Square (Rynek) is one of the largest medieval squares in Europe and its coloured Baroque townhouses rival anything in Prague at half the tourist density. Cathedral Island (Ostrow Tumski) is the oldest part of the city — a gas-lit island of Gothic spires that feels like it was dropped in from the 13th century. Then there are the gnomes: 700 tiny bronze statues hidden across the city in a hunt that sends visitors down alleyways most tourists never find. Three days is the sweet spot for Wroclaw, and this guide covers everything from milk-bar pierogi to craft beer and the vast panoramic painting that changed how the world understood Napoleonic warfare.",
  stats: {
    duration: "3 Days",
    budgetFrom: "PLN 120",
    bestMonths: "May-Jun or Sep-Oct",
    airport: "WRO",
  },
  toc: [
    { id: "visa", emoji: "\uD83D\uDEC2", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "\uD83D\uDCC5", label: "The Itineraries" },
    { id: "budget", emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "\uD83D\uDCA1", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "\uD83D\uDCC5", label: "Day 1 — Rynek & Old Town" },
    { id: "day2", emoji: "\uD83D\uDCC5", label: "Day 2 — Cathedral Island & Gnomes" },
    { id: "day3", emoji: "\uD83D\uDCC5", label: "Day 3 — Centennial Hall & Craft Beer" },
  ],
  visa: [
    {
      flag: "\uD83C\uDDEE\uD83C\uDDF3",
      title: "Indian Passport — Schengen Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Schengen Visa (Type C)"],
        ["Processing", "15–30 business days"],
        ["Fee", "EUR 80 per person"],
        ["Validity", "90 days within any 180-day period"],
        ["Apply at", "Polish Consulate or VFS Global"],
        ["Documents", "Hotel bookings, return flight, 3-month bank statements"],
        ["Notes", "Apply 6–8 weeks before travel. Poland processes Schengen visas efficiently — biometric appointment required at VFS."],
      ],
    },
    {
      flag: "\uD83C\uDDFA\uD83C\uDDF8",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free (Schengen Area)"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Validity", "90 days within any 180-day period"],
        ["ETIAS", "Required from mid-2026 (EUR 7, register online before departure)"],
        ["Passport", "Must be valid 3+ months beyond travel dates"],
        ["Notes", "UK passport holders are visa-free post-Brexit under the 90/180 rule. ETIAS will be required from 2026."],
      ],
    },
  ],
  plans: [
    {
      label: "\uD83D\uDCB0 Budget",
      sub: "PLN 120–180/day",
      days: [
        {
          day: "Day 1",
          title: "Rynek Market Square & Old Town",
          items: [
            "10:00 — Start at Rynek (Market Square): the second-largest medieval market square in Europe at 213m x 178m; the coloured Baroque townhouse facades lining all four sides were reconstructed after WWII with meticulous attention to the original 14th-17th century designs",
            "11:00 — Enter the Town Hall (Ratusz) for free from the exterior and pay PLN 12 to climb the tower: views across the red-tiled rooftops to Cathedral Island and the Sudeten Mountains on clear days",
            "13:00 — Lunch at a milk bar (bar mleczny): Pod Skorupkami on Swidnicka Street serves traditional Polish dishes — pierogi ruskie (potato-and-cheese dumplings), bigos (hunter's stew), and zurek (sour rye soup with egg) for PLN 12–18 total",
            "15:00 — Walk the Odra River promenade to the Tumski Bridge hung with padlocks, then cross to Cathedral Island for the exterior of Cathedral of St John the Baptist (free); pay PLN 5 to climb the tower for the best view in the city",
            "18:00 — Sunset on Rynek with a Polish craft beer from a takeaway window (PLN 10–12); sit on the square and watch the town hall turn gold as the gas lamps of Cathedral Island light up across the river",
            "20:00 — Dinner at a Rynek-area milk bar or a budget pierogi restaurant: a full meal of fried pierogi with sour cream and a kompot fruit drink for PLN 25",
          ],
          cost: "PLN 60–90 (meals, tower entries, beer)",
        },
        {
          day: "Day 2",
          title: "Gnome Hunt, Cathedral Island & University Quarter",
          items: [
            "09:00 — Download the Wroclaw Gnome app or pick up a free gnome map at the tourist information office on Rynek: the city has over 700 bronze dwarf (krasnoludzik) statues hidden in plain sight since 2001; find as many as you can in the morning hours",
            "11:00 — Cathedral Island (Ostrow Tumski): the oldest part of Wroclaw still lit by gas lamps each evening; explore the Cathedral of St John the Baptist, the Church of the Holy Cross, and the tranquil Archbishop's Garden",
            "13:30 — Lunch at Pierogarnia na Swidnickiej ($): a dedicated pierogi restaurant where PLN 20–25 gets you a plate of 8 dumplings in any combination — duck and caramelised onion, spinach and feta, or traditional potato and cheese",
            "15:00 — Wroclaw University main building (Collegium Maximum, free exterior): the Baroque aula leopoldina lecture hall is one of the most beautiful Baroque interiors in Central Europe (PLN 12 entry); built for Emperor Leopold I in 1702",
            "17:30 — National Museum of Wroclaw (PLN 20): strong collection of Silesian medieval art and the famous Wroclaw panorama preview; closed Mondays",
            "19:30 — Dinner on ulica Swidnicka at a budget restaurant: zupa ogorkowa (pickle soup), roast pork with red cabbage, and a Silesian dumpling for PLN 30 total",
          ],
          cost: "PLN 70–100 (museums, meals, map)",
        },
        {
          day: "Day 3",
          title: "Centennial Hall, Panorama & Departure",
          items: [
            "09:30 — Tram to Centennial Hall (UNESCO, 1913, free exterior): the 65m steel-and-concrete dome was the largest reinforced concrete structure in the world when built; the surrounding Szczytnicki Park contains one of Poland's oldest oak trees and the Japanese Garden (open May-October, PLN 5)",
            "11:30 — Panorama of the Battle of Raclawice (PLN 35): a 360-degree oil painting measuring 114m long and 15m high, housed in a circular pavilion near the National Museum; depicts the 1794 battle in which Polish peasant scythe-bearers defeated Russian artillery, painted by Jan Styka and Wojciech Kossak in 1894; one of the most spectacular artworks in Poland",
            "14:00 — Final lunch at a Rynek milk bar (PLN 20): barszcz czerwony (beetroot soup) and potato pancakes before departure",
            "15:30 — Last gnome photo hunt on the walk back to your accommodation; the tourist office on Rynek stocks a souvenir gnome figurine for PLN 25",
          ],
          cost: "PLN 60–80 (Panorama, park, lunch, tram)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "PLN 320–500/day",
      days: [
        {
          day: "Day 1",
          title: "Rynek Deep Dive & Riverside Dinner",
          items: [
            "10:00 — Check into a design hotel or boutique guesthouse on or near Rynek (PLN 250–400/night): Hotel Monopol is Wroclaw's Grand Dame (art nouveau, 1892); Puro Hotel has a rooftop bar overlooking the square",
            "11:00 — Guided Old Town walking tour (PLN 80 per person, 2 hours): a licensed guide covers the Rynek's history from the 13th century market to WWII destruction and Communist-era reconstruction, the Town Hall astronomical clock, and the story of Wroclaw's shifting national identity (German Breslau until 1945)",
            "13:30 — Lunch at Bernard Restaurant on Rynek (PLN 50–70): Czech-style restaurant serving Pilsner Urquell tank beer and Bohemian-influenced dishes like svickova (beef in cream sauce) on the square's finest outdoor terrace",
            "16:00 — Wroclaw Panorama: book the combined Museum of Wroclaw and Panorama ticket (PLN 45 combined); the full circuit of the 1894 battle painting with audio guide takes 45 minutes",
            "20:00 — Dinner at Kurna Chata (PLN 80–100 per person): traditional Silesian hunting-lodge cuisine in a reconstructed cottage interior; roast duck, wild boar stew, and potato dumplings",
          ],
          cost: "PLN 320–420 (hotel, guide, meals, museums)",
        },
        {
          day: "Day 2",
          title: "Cathedral Island, Craft Beer & Gnomes",
          items: [
            "09:00 — Guided Cathedral Island tour with a theology or art-history guide (PLN 100, 2 hours): access the cathedral treasury with medieval illuminated manuscripts, 14th-century chalices, and the archive of Silesian church history",
            "12:00 — Lunch at Jadka Restaurant near Cathedral Island (PLN 60–80): modern Polish cuisine in a converted 14th-century wine cellar; seasonal Silesian dishes such as white asparagus with hollandaise in May and June",
            "14:30 — Centennial Hall and Szczytnicki Park: hire a city bike (PLN 5 per 30 min) to ride through the park, visit the Japanese Garden, and explore the steel pergola and four water towers built alongside the hall in 1913",
            "17:00 — Craft beer tasting at Kontynuacja or Browar Stu Mostow (100 Bridges Brewery, 3 PLN 12–18 per pint): Wroclaw's craft beer scene is one of the finest in Poland; Stu Mostow has 10 taps including their flagship IPA and seasonal sour ales brewed on-site",
            "20:00 — Dinner at Mleczarnia in Dzielnica Czterech Wyznań (Four Faiths Quarter, PLN 50–70): atmospheric art nouveau interiors in a former dairy, serving modern Polish-Jewish fusion cuisine in the revived Jewish heritage neighbourhood",
          ],
          cost: "PLN 350–480 (guide, meals, bike hire, beer)",
        },
        {
          day: "Day 3",
          title: "Four Faiths Quarter, University & Farewell Dinner",
          items: [
            "10:00 — Dzielnica Czterech Wyznań (Four Faiths Quarter): a single block in the Srodmiescie district where a Catholic church, Lutheran church, Orthodox church, and synagogue all stand within 200m of each other — a surviving remnant of pre-war Breslau's religious pluralism",
            "11:30 — Wroclaw University Aula Leopoldina (PLN 12): arguably the most beautiful Baroque hall in Poland, painted with illusionistic frescoes by Johann Christoph Handke in 1732; the mathematical ceiling reveals hidden perspectives from specific floor positions",
            "13:30 — Lunch at Restauracja Wroclaw (PLN 50–65): modern Polish cuisine with Silesian roots; try the cream of mushroom soup with truffle oil and the venison loin with pickled red cabbage",
            "16:00 — Final gnome count and souvenir shopping in the Old Town: handcrafted amber jewellery, linen clothing, and carved wooden gnome figurines at quality craft shops off Rynek",
            "19:00 — Farewell dinner at Spiz Brewery Restaurant inside the Town Hall (PLN 80–100): the only brewery in a medieval town hall in Europe; their unfiltered Ratuszowe beer is brewed 30m below where you are sitting",
          ],
          cost: "PLN 300–450 (meals, university, final shopping)",
        },
      ],
    },
    {
      label: "\uD83D\uDC8E Luxury",
      sub: "PLN 900–1,500/day",
      days: [
        {
          day: "Day 1",
          title: "Grand Arrival & Private Old Town Tour",
          items: [
            "12:00 — Check into Hotel Monopol (PLN 700–900/night): Wroclaw's most celebrated hotel, where Pablo Picasso and Marlene Dietrich once stayed; the 1892 art nouveau building faces the Municipal Theatre and has a spa, rooftop terrace, and one of the city's best restaurants",
            "14:00 — Private Old Town tour with a museum curator or architectural historian (PLN 400, 3 hours): access the Town Hall archives, the medieval underground cellars beneath Rynek, and get a scholarly explanation of how the city was reconstructed after 1945 from pre-war photographs",
            "18:00 — Cocktails at the Hotel Monopol Sky Bar (PLN 30–45 per drink): panoramic rooftop views across the city; the Silesian G&T uses local botanicals including juniper harvested from the Sudeten foothills",
            "20:30 — Dinner at Zoni Restaurant (PLN 200–250 per person): Wroclaw's finest modern European restaurant with a 7-course tasting menu; the chef sources exclusively from Silesian farms and foragers, and the wine list features biodynamic Polish wine from Lubuskie and Lower Silesian producers",
          ],
          cost: "PLN 1,100–1,500 (luxury hotel, private guide, dinner)",
        },
        {
          day: "Day 2",
          title: "Private Cathedral Island & Panorama Experience",
          items: [
            "09:00 — Private Cathedral Island tour including the cathedral treasury with a canon guide (PLN 200): exclusive access to vestments, reliquaries, and illuminated manuscripts from the 12th century Piast dynasty",
            "11:30 — Private viewing session at the Panorama of Raclawice before public opening (PLN 300, arranged through the museum): the full 114m painting from the elevated central platform with a museum director providing historical context, without other visitors present",
            "14:00 — Lunch at Jadka in the cathedral quarter (PLN 120–150 per person): Michelin-recommended Polish cuisine; the white asparagus and Silesian duck are the signature dishes",
            "17:00 — Centennial Hall private architectural tour with an engineering heritage guide (PLN 150): access the roof structure, the mechanical systems, and the 1913 original blueprints from the Stadtarchiv",
            "20:30 — Private dinner at the Polish Academy of Sciences Ossolineum Library (PLN 400 per person including wine): an exclusive event-dining experience in the 18th-century Baroque reading hall, arranged only for special occasions through the hotel concierge",
          ],
          cost: "PLN 1,200–1,600 (private tours, fine dining, premium experiences)",
        },
        {
          day: "Day 3",
          title: "Day Trip to Lower Silesia & Departure",
          items: [
            "08:00 — Private chauffeur to Ksiaz Castle, Lower Silesia's largest castle (PLN 200 round trip): 400-room castle above the Pelcznica river gorge with a Nazi underground tunnels tour (PLN 50) included in the castle entry; 1 hour from Wroclaw",
            "12:30 — Lunch at Restauracja Zamkowa inside Ksiaz Castle (PLN 100–130 per person): castle restaurant with views over the forested gorge and traditional Silesian cuisine sourced from castle estate farms",
            "15:00 — Return to Wroclaw for final walk through the Four Faiths Quarter and the last gnome photo opportunities",
            "18:00 — Farewell drinks and charcuterie at Mercato Wroclaw (PLN 60–80 per person): Wroclaw's finest wine and cheese bar with an outstanding Polish natural wine collection from the Oder Valley region",
            "20:00 — Departure from Wroclaw Airport or overnight train to Warsaw, Berlin, or Prague",
          ],
          cost: "PLN 800–1,100 (castle day trip, luxury meals, chauffeur)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "\uD83D\uDCB0 Budget",
      accommodation: "PLN 60–100 (hostel or budget guesthouse)",
      food: "PLN 30–50 (milk bars and pierogi restaurants)",
      transport: "PLN 5–15 (tram and city bus)",
      activities: "PLN 30–50 (Panorama, university, parks)",
      total: "PLN 120–180/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "PLN 200–350 (boutique hotel near Rynek)",
      food: "PLN 80–130 (restaurants and brewery dinners)",
      transport: "PLN 10–25 (tram and city bike)",
      activities: "PLN 50–100 (guided tours, museums)",
      total: "PLN 320–500/day",
    },
    {
      tier: "\uD83D\uDC8E Luxury",
      accommodation: "PLN 700–1,000 (Hotel Monopol or equivalent)",
      food: "PLN 200–400 (fine dining and tasting menus)",
      transport: "PLN 80–200 (private chauffeur and transfers)",
      activities: "PLN 300–500 (private tours, exclusive access)",
      total: "PLN 900–1,500/day",
    },
    {
      tier: "\uD83C\uDF7A Craft Beer Traveller",
      accommodation: "PLN 120–180 (mid guesthouse)",
      food: "PLN 50–80 (mix of milk bar and pub food)",
      transport: "PLN 10–20 (tram and walking)",
      activities: "PLN 40–60 (brewery tours and tastings)",
      total: "PLN 200–320/day",
    },
    {
      tier: "\uD83D\uDDFD Day Trip Add-On",
      accommodation: "PLN 200–300 (Wroclaw base)",
      food: "PLN 60–90 (city meals + castle lunch)",
      transport: "PLN 80–120 (private car to Ksiaz or Sudeten)",
      activities: "PLN 50–80 (castle + mine entries)",
      total: "PLN 380–550/day",
    },
  ],
  mistakes: [
    {
      icon: "\uD83D\uDD5B",
      title: "Visiting the Panorama Without Booking Ahead",
      desc: "The Panorama of the Battle of Raclawice sells out weeks ahead in summer and Polish school holiday periods. Book online at least 3–5 days ahead at panrama.pl. The PLN 35 entry is non-refundable and time-slotted — you cannot simply queue on the day in peak season.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "\uD83D\uDCB6",
      title: "Not Using Zloty Cash at Milk Bars",
      desc: "Traditional milk bars (bar mleczny) are cashonly at most locations and payment by card is not accepted. Withdraw PLN 100–200 from an ATM (Euronet charges fees — use bank ATMs like PKO or Santander) and carry cash for the best budget meals in the city.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "\uD83C\uDF7D\uFE0F",
      title: "Eating Only on or Near Rynek",
      desc: "Restaurants directly on the Market Square charge 40–60% more than those one or two streets away. Walk to ulica Swidnicka, ulica Kuznisza, or the Nowy Targ area for excellent Polish cooking at local prices. The best pierogi restaurants are never on the square.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "\uD83E\uDDAD",
      title: "Skipping Cathedral Island in the Evening",
      desc: "Cathedral Island (Ostrow Tumski) is the only street in Poland still lit by gas lamps. The lamplighter (latarnik) lights them each evening at dusk. Visiting after dark transforms the island into a 19th-century scene. Most visitors see it only by day and miss the defining Wroclaw experience.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "\uD83D\uDDFD",
      title: "Treating the Gnome Hunt as Optional",
      desc: "The 700+ bronze gnomes hidden across Wroclaw are the most effective way to discover the city's back streets, courtyards, and lesser-known neighbourhoods. Pick up the free map from the tourist office, set a target of 20 gnomes, and you will walk parts of Wroclaw that no standard itinerary covers.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "\uD83C\uDFAB",
      title: "Buy the Wroclaw Tourist Card",
      desc: "The Wroclaw Tourist Card (PLN 49 for 24 hours, PLN 79 for 48 hours) includes unlimited tram and bus transport plus discounts or free entry to 40+ museums and attractions including the National Museum, City Museum, and the Botanical Garden. Available at the tourist office on Rynek. Book local experiences at https://www.getyourguide.com/s/?q=Wroclaw&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "\uD83C\uDF7A",
      title: "Visit Stu Mostow Brewery on a Weekday",
      desc: "Browar Stu Mostow (100 Bridges Brewery) is Wroclaw's best craft beer destination but gets packed on Friday and Saturday evenings. Visit Tuesday through Thursday for a seat at the tasting bar, a tour of the brewing hall, and conversation with the brewers. Their sour ales and Baltic porters are exceptional.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "\uD83D\uDE87",
      title: "Use Trams for Everything",
      desc: "Wroclaw has one of Poland's best tram networks with lines connecting Rynek to Cathedral Island, Centennial Hall, and all major museums. A single tram ticket costs PLN 3.40 (20 minutes) or PLN 4.60 (60 minutes). The entire old city and Ostrow Tumski are walkable, but trams save 20–30 minutes to Centennial Hall.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "\uD83C\uDF31",
      title: "Time Szczytnicki Park for May to June",
      desc: "The Japanese Garden in Szczytnicki Park adjacent to Centennial Hall is open only May through October (PLN 5 entry). In May the cherry blossoms are out; in June the iris garden peaks. The park is also home to one of the oldest oak trees in Poland, estimated at 700 years old.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "How do I get from Wroclaw Airport to the city centre?",
      a: "Tram line 106 runs from the airport to the city centre (Rynek area) in 35–40 minutes and costs PLN 4.60 for a 60-minute ticket. Validate your ticket at the machine on the tram platform before boarding. Taxis cost PLN 40–60 and take 20–25 minutes depending on traffic. Bolt and Uber operate in Wroclaw and are cheaper than traditional taxis.",
    },
    {
      q: "Is Wroclaw safe for tourists?",
      a: "Wroclaw is one of the safest cities in Central Europe for tourists. Violent crime against visitors is extremely rare. Standard urban precautions apply: watch for pickpockets in crowded areas like Rynek on summer weekends, use ATMs attached to bank branches rather than standalone Euronet machines, and book taxis through apps rather than flagging on the street. The city is well-lit, well-policed, and actively manages tourist safety.",
    },
    {
      q: "What language is spoken in Wroclaw and do people speak English?",
      a: "Polish is the official language. English is widely spoken in hotels, restaurants, tourist attractions, and by people under 40 throughout the city. German is also common given Wroclaw's history as Breslau. Learning a few Polish words (dzien dobry for good morning, dziekuje for thank you, prosze for please) is appreciated by locals and often prompts immediate warmth.",
    },
    {
      q: "What is the best time to visit Wroclaw?",
      a: "May and June offer the best combination of mild weather (18–24 degrees Celsius), open gardens, and long evenings for outdoor dining on Rynek. September and October are excellent as the summer crowds thin, autumn colours hit the parks, and the craft beer festival season peaks. December brings a Christmas market on Rynek that is consistently rated among Europe's best. July and August are warmest but also busiest.",
    },
  ],
  combineWith: ["krakow-4-days", "prague-3-days", "warsaw-3-days"],
  relatedSlugs: ["krakow-4-days", "prague-3-days", "berlin-4-days", "budapest-4-days"],
  galleryQuery: "wroclaw poland rynek cathedral old town",
};

export const metadata: Metadata = {
  title: "Wroclaw in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 3-day Wroclaw itinerary: Market Square colourful facades, Cathedral Island gas lamps, gnome statues, Centennial Hall UNESCO, milk bar pierogi, craft beer, and the Panorama of Raclawice. Budget PLN 120/day to luxury. Full visa info included.",
  keywords: [
    "Wroclaw itinerary",
    "Wroclaw 3 days",
    "Wroclaw travel guide 2026",
    "Wroclaw budget travel",
    "Rynek Market Square",
    "Cathedral Island Ostrow Tumski",
    "Wroclaw gnomes",
    "Wroclaw visa Indian passport",
  ],
  openGraph: {
    title: "Wroclaw in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Market Square facades, Cathedral Island gas lamps, gnome hunts, pierogi, craft beer, and the Raclawice Panorama — Wroclaw in 3 days from PLN 120/day.",
    type: "article",
    url: `${siteUrl}/blog/wroclaw-3-days`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Wroclaw in 3 Days: Complete 2026 Itinerary",
    description:
      "Budget to luxury guide for 3 days in Wroclaw, Poland — gnomes, pierogi, craft beer, Cathedral Island, and the Panorama of Raclawice.",
  },
  alternates: {
    canonical: `${siteUrl}/blog/wroclaw-3-days`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Wroclaw in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
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
          name: "Wroclaw in 3 Days",
          item: `${siteUrl}/blog/wroclaw-3-days`,
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Wroclaw",
      description:
        "Wroclaw, Poland — medieval Market Square, Cathedral Island gas lamps, 700 bronze gnome statues, UNESCO Centennial Hall, and one of Europe's finest craft beer scenes.",
      geo: { "@type": "GeoCoordinates", latitude: 51.1079, longitude: 17.0385 },
    },
  ],
};

export default function WroclawPage() {
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
