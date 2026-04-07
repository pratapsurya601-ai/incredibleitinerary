import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Havana",
  country: "Cuba",
  countryFlag: "🇨🇺",
  slug: "havana-4-days",
  heroQuery: "havana cuba classic cars malecon colonial architecture",
  heroAlt: "Classic 1950s American cars on the Malecón seawall, Old Havana, Cuba at golden hour",
  category: "Caribbean",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro: "Havana is unlike any other city — a perfectly preserved time capsule where 1950s American Chevrolets cruise past crumbling colonial palaces, where Hemingway's bar stool is still warm, and where the rhythm of son and salsa pours out of every doorway after dark. Four days lets you absorb Old Havana's UNESCO streets, drive the Malecón in a convertible, take the essential day trip to Trinidad, and understand why Cuba — complicated, contradictory, and utterly captivating — gets under your skin the way nowhere else does.",
  stats: {
    duration: "4 Days",
    budgetFrom: "$60",
    bestMonths: "Nov–Apr",
    airport: "HAV (José Martí International)",
  },
  toc: [
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-amber-50",
      border: "border-amber-200",
      titleColor: "text-amber-800",
      items: [
        ["Tourist Card Required", "Indian passport holders need a Cuban Tourist Card (Tarjeta del Turista) — commonly called a 'pink card' or 'tourist visa'. Cost is approximately $25–30 USD. You can obtain it through your airline at check-in, a Cuban consulate, or specialist travel agencies. It is NOT a visa sticker; it's a card you keep with your passport throughout your stay."],
        ["Where to Get It", "Most airlines flying to Cuba sell the tourist card at check-in or at the boarding gate ($25 from most carriers). If flying via Canada, the card may be green (for non-US routing) vs pink (for US routing). Book through your airline's Cuba check-in counter — they handle the paperwork. Some travel agencies also pre-arrange cards."],
        ["Health Insurance Mandatory", "Cuba legally requires all tourists to have active health insurance. Many airlines include basic coverage in the ticket price — check your booking confirmation. If not included, purchase a policy before travel. Cuban immigration may ask to see proof of insurance on arrival."],
        ["Duration & Currency", "Tourist card allows 30 days, extendable once for another 30 days at an immigration office in Cuba (~$40 extension fee). Cuban peso (CUP) is the local currency; $1 ≈ 25 CUP in 2026. The MLC card (a convertible account for tourists) is accepted at some shops — ask your casa particular host for the current practical guidance on currency as the system changes frequently."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Tourist Card (All Nationalities)", "All visitors to Cuba require a tourist card regardless of passport. UK, Canadian, European, and Australian passport holders obtain the same $25–30 tourist card through their airline or a consulate. Cuba does not issue visa-free entry to any nationality — the tourist card is the universal entry mechanism."],
        ["US Citizens — Check Current Rules", "US travel to Cuba is subject to OFAC regulations requiring travel under one of 12 specific license categories (family visits, educational activities, support for Cuban people, journalism, etc.). General tourism is technically prohibited for US passport holders. US citizens should consult the US Treasury OFAC website for current regulations before booking. This is a complex and frequently changing legal situation."],
        ["No US Cards Work", "Credit and debit cards issued by US banks do not work in Cuba — Visa, Mastercard, and Amex issued in the USA are declined everywhere. US travelers must bring sufficient cash (euros, Canadian dollars, or other non-USD currency convert best). Non-US travelers' bank cards generally work at larger hotels; cash is still advisable for street vendors and casas particulares."],
        ["Health Insurance", "Cuba requires proof of health insurance for all visitors. Airlines frequently include basic coverage; verify your booking. Cuban hospitals are technically free for locals but charge tourists — having documented insurance prevents complications at immigration and protects you if you need medical care."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$60–90/day",
      days: [
        {
          day: "Day 1",
          title: "Old Havana (Habana Vieja) — UNESCO Streets & Classic Car Ride",
          items: [
            "Arrive and check into a casa particular (private homestay with a Cuban family, $25–50/night). Casas particulares are marked by blue anchor signs outside the door. Staying with a family is categorically better value and experience than state-owned hotels — you get a local host, home-cooked breakfast, and genuine insight into Cuban daily life.",
            "Old Havana morning — Plaza de la Catedral: the Baroque cathedral (free entry) and the surrounding colonial palaces are among the finest 18th-century architecture in the Americas. The square fills with artists, dancers, and cigar sellers by mid-morning — arrive at 9am before the heat and the crowds.",
            "Plaza Vieja — the most photogenic square in Havana, surrounded by restored colonial buildings in yellow, blue, and terracotta. The Camera Obscura on the corner ($2, top-floor panoramic view) is underrated. Climb the narrow stairs for the best rooftop view of Old Havana.",
            "El Capitolio — Cuba's Capitol building (modeled on Washington DC, actually taller than the US version). Entry to the main hall $6; exterior is free and architecturally stunning. The Parque Central opposite has the best collection of vintage American cars in Havana congregating for taxi fares.",
            "Evening — Book a vintage car ride for sunset ($20–30/hour in an open-top 1950s Chevrolet, Buick, or Ford). Drive the Malecón at golden hour, wind in your hair, watching the sea crash against the seawall — this is one of the great city experiences in the Caribbean.",
          ],
          cost: "$35–55 total",
        },
        {
          day: "Day 2",
          title: "Malecón, Revolution Square & Hemingway's Havana",
          items: [
            "Morning — Walk the Malecón seawall (8km from Old Havana to Vedado district, completely flat, free). Havana's promenade is where everyone comes — fishermen casting lines at dawn, lovers at dusk, musicians at night. The crumbling buildings behind the seawall and the blue-green sea in front frame one of the most cinematic urban walks in the world.",
            "Revolution Square (Plaza de la Revolución) — the vast concrete square where Fidel Castro addressed crowds of over a million. The Che Guevara steel outline on the Interior Ministry building is the most-photographed image in Cuba. Free entry to the square. José Martí Memorial: take the elevator to the top ($5) for a 360° panoramic view over the entire city.",
            "Vedado neighbourhood lunch — eat at a paladar (private restaurant, far better than state-run restaurants). La Guarida (Concordia 418) is Cuba's most famous paladar — set in a crumbling Havana mansion featured in the film Fresa y Chocolate. Lunch $15–25, dinner $25–40. Book ahead.",
            "Hemingway pilgrimage — La Bodeguita del Medio (Calle Empedrado): Hemingway's mojito bar, walls covered in signatures, touristy but the mojitos are excellent ($6–8 each). Then: Finca Vigía, Hemingway's house-museum in San Francisco de Paula ($5, 30min taxi, the house preserved exactly as he left it in 1960 — typewriter, books, mounted fish, 9,000 empty rum bottles allegedly).",
            "Evening — El Floridita bar (Obispo 557) for a daiquiri at Hemingway's seat at the bar (marked with a statue). The bar invented the frozen daiquiri; the drinks are $8–12 each, excellent. Live band plays from 11am onwards.",
          ],
          cost: "$40–65 total",
        },
        {
          day: "Day 3",
          title: "Trinidad Day Trip — Cuba's Most Perfect Colonial City",
          items: [
            "Early morning bus to Trinidad (5 hours, $10–15 with Viazul or collective taxi $25–35 for faster, more comfortable shared taxi service). Trinidad is the best-preserved colonial city in Cuba — founded in 1514, it barely changed between 1850 and 1990. The cobblestone streets, pastel houses, and horse-drawn carriages create an atmosphere unlike anywhere else in the Caribbean.",
            "Plaza Mayor — Trinidad's central square surrounded by the Museo de Arte Colonial, a perfectly restored 18th-century mansion with original furniture ($2), the Iglesia Parroquial Mayor church (free), and the Palacio Brunet. The square is paved with the same grey cobblestones that have been there since colonial times.",
            "Valley of the Sugar Mills (Valle de los Ingenios, UNESCO) — the 78 sugar mills that made Trinidad the richest city in Cuba in the 19th century. Taxi tour $20–25. Climb the Iznaga Tower (45m, $1) for views over the valley — the plantation bell that called enslaved workers to the fields still hangs at the top.",
            "Afternoon — Casa de la Música in Trinidad for afternoon salsa. The steps of the Iglesia become an outdoor music venue. CUP 50 entry ($2). Local Cuban couples dance as well as any you'll see in Havana — Trinidad is a working city, not a tourist performance.",
            "Return to Havana evening bus or stay in Trinidad at a casa particular ($25–35/night — the old colonial city accommodation is excellent and well-priced).",
          ],
          cost: "$45–75 total (incl. transport)",
        },
        {
          day: "Day 4",
          title: "Rum, Street Art, Coppelia & Farewell Son Music",
          items: [
            "Morning — Museo del Ron (Rum Museum, Fundación Havana Club, Avenida del Puerto). The 30-minute guided tour ($7, includes a mojito at the end) explains the sugar-to-rum production process with original 19th-century distillery equipment. Havana Club 7 Years Añejo is the benchmark — buy a bottle at the museum shop for less than you'll find anywhere else.",
            "Museum of the Revolution (Museo de la Revolución, CUP 100, ~$4) — housed in the former Presidential Palace with original bullet holes still in the walls from the 1957 attack on Batista. The museum is unapologetically one-sided and propaganda-filled; it is also genuinely fascinating for understanding how Cuba narrates its own history.",
            "Coppelia ice cream parlour (Calle 23 and L, Vedado, free entry, CUP 10–20 per portion) — a legendary institution. Cubans queue for hours for the subsidized state ice cream. Join the Cuban queue rather than the tourist queue ($1 entry but no wait). It's one of the great slow-travel experiences — watching Cuban families eat ice cream on a hot afternoon, talking across the tables.",
            "Afternoon — Street art tour of Havana Centro: Callejón de Hamel (a vibrant alley of murals, Afro-Cuban art, and weekend rumba performances — free). The street is also a live Santería shrine; the artistic and religious overlap is uniquely Cuban.",
            "Farewell — Final live son or salsa at Casa de la Música (Galiano 267, Vedado, $5–10 cover) or El Sauce (local bar near Malecón). Havana's music scene is the best in the Caribbean — the real son (pre-Buena Vista Social Club era) is played in small bars, not the tourist shows.",
          ],
          cost: "$30–55 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$150–280/day",
      days: [
        {
          day: "Day 1",
          title: "Old Havana with History Guide & Sunset Car Tour",
          items: [
            "Check into Hotel Saratoga (on El Capitolio, $150–250/night, reopened after a major restoration) or a premium casa particular in Old Havana ($80–120/night with pool, private rooms, and proper breakfast). The top-end casas in Havana are genuinely lovely — Spanish colonial architecture, rooftop terraces, antique furnishings.",
            "Private walking tour of Old Havana with a licensed guide ($40–60 for 3 hours). The difference is access to stories unavailable in a guidebook: the history of each family who owns a building, the underground music scene, the political subtext of every mural. Guides are legally registered and provide depth unavailable walking alone.",
            "La Guarida paladar for lunch ($20–30/person) — book a table in the upstairs dining room with the peeling frescoed ceiling. One of the best private restaurant experiences in Cuba.",
            "Classic convertible car sunset tour — upgrade to a 1957 Chevrolet Bel Air convertible with a driver-guide for 2 hours ($50–70). Drive from Old Havana along the Malecón past the Hotel Nacional, around Revolution Square, and back to Vedado as the city turns golden.",
          ],
          cost: "$150–220 total",
        },
        {
          day: "Day 2",
          title: "Hemingway Deep Dive & Hotel Nacional",
          items: [
            "Private Hemingway tour with specialist guide ($60–80, covers La Bodeguita del Medio, El Floridita, Finca Vigía, and the Ambos Mundos hotel Room 511 where he wrote sections of For Whom the Bell Tolls — now a museum room, $2 entry).",
            "Hotel Nacional de Cuba for afternoon drinks — this 1930 Art Deco landmark hosted Churchill, Frank Sinatra, and Meyer Lansky. The grounds bar overlooking the sea is $8–12 per cocktail and absolutely worth it for the setting.",
            "Dinner at El Chanchullero (Barrio de la Luz) or Los Mercaderes (Calle Mercaderes, Old Havana) — two of the best private restaurants in the city. Budget $30–45/person for food and drinks.",
          ],
          cost: "$160–240 total",
        },
        {
          day: "Day 3",
          title: "Trinidad in Comfort — Private Transfer & Colonial Tour",
          items: [
            "Private taxi to Trinidad (2.5 hours vs. 5 hours by bus, $50–70 each way). Arrive early enough to beat the tour group buses.",
            "Private Trinidad guide ($40–60, 3 hours) — the colonial history of Trinidad, the sugar economy and its connection to the slave trade, the families who built the mansions and what happened to them after the Revolution.",
            "Lunch at Restaurante Vista Gourmet (private paladar with Trinidad valley views, $20–30/person). Sit on the terrace and eat ropa vieja (shredded beef) with congrí rice and fried plantain while looking out over the UNESCO valley.",
            "Afternoon: Valley of the Sugar Mills in your private taxi ($25 additional). Evening: Casa de la Música for early salsa before the return to Havana.",
          ],
          cost: "$180–260 total",
        },
        {
          day: "Day 4",
          title: "Cuban Art Scene & Farewell Fine Dining",
          items: [
            "Fábrica de Arte Cubano (FAC, Calle 26 and 11, Vedado, $2 entry) — the converted vegetable oil factory that became Havana's premier arts and music space. Thursdays–Sundays, multiple gallery spaces, live music, film screenings, and bar all simultaneously. The most exciting cultural venue in Cuba.",
            "Private rum masterclass at a licensed rum house ($40–60/person) — comparative tasting of Havana Club Añejo 3, 7, and 15 year expressions with explanation of the solera aging system.",
            "Farewell dinner at La Guarida (book ahead, $40–60/person tasting menu with wine) or Paladar Vistamar (seafood, Miramar district, sea views, $35–50/person). Both require reservations 1–2 days in advance.",
          ],
          cost: "$170–250 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$400–900+/day",
      days: [
        {
          day: "Day 1",
          title: "Gran Hotel Manzana & Private Havana by Night",
          items: [
            "Gran Hotel Manzana Kempinski (the only true 5-star in Cuba, Parque Central, $400–800/night depending on season and room). The restored 1910 Manzana building was Havana's first shopping arcade — now beautifully converted with a rooftop pool overlooking the city.",
            "Private art historian guide for Old Havana ($80–120, 3 hours) — access to private family collections and art studios unavailable on standard tours.",
            "Dinner at San Cristóbal Paladar (Cuba's most famous restaurant — Barack Obama dined here in 2016 during his historic visit, $50–70/person). Reservations essential, 2+ days ahead.",
            "Private nightlife guide through Havana's underground music scene ($80–120/evening) — live son at authentic venues, not tourist shows. The guide knows which bars have the best traditional musicians performing on which nights.",
          ],
          cost: "$400–700 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Hemingway Yacht Trip & Rooftop Dining",
          items: [
            "Private boat charter (4 hours, $300–500) from Hemingway Marina — Hemingway famously fished these waters from his boat El Pilar. Deep sea fishing for marlin and tuna, rum drinks on deck, the Havana skyline receding behind you. The marina bears Hemingway's name for good reason.",
            "Hotel Nacional for the Winston Churchill Suite experience — even if not staying, the hotel concierge arranges private access to the historical suite for drinks and presentation ($60–100 per arrangement).",
            "Rooftop dinner at a private paladar with pre-arranged sunset view of the Malecón ($60–90/person). Several casas particulares in Old Havana with rooftop access can be arranged privately for exclusive dinners.",
          ],
          cost: "$500–900 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Private Trinidad Helicopter & Valley of Sugar Mills",
          items: [
            "Scenic helicopter flight Havana-Trinidad (available through luxury charter operators, $500–800/person one-way, 40 minutes with aerial views of the Cuban countryside). A road that takes 2.5 hours becomes a breathtaking aerial journey.",
            "Exclusive Trinidad experience: private guide, closed colonial mansion access, private rum and tobacco tasting at a finca outside the city.",
            "Hacienda lunch in the Valley of the Sugar Mills with a private family who maintains one of the original plantation estates. The food is simple but the setting — original 19th-century sugar estate dining room — is irreplaceable.",
            "Private transfer back to Havana by air-conditioned car.",
          ],
          cost: "$700–1,200 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Private Cigar Factory & Fábrica de Arte VIP",
          items: [
            "Private access tour of Partagás cigar factory (special access arranged through Gran Hotel Kempinski concierge — the factory's standard tours book out weeks in advance; VIP access sees the master rollers at work and includes tasting of fresh-rolled Cohiba, Montecristo, and Romeo y Julieta). Budget $100–200 for the private arrangement.",
            "Bespoke rum blending session with a Havana Club master blender ($150–250/person, 2 hours, blend your own 7-year añejo expression and take bottles home).",
            "Farewell dinner at La Guarida private dining room — the upstairs table overlooking the staircase, private service, degustación menu paired with Cuban cocktails. $80–120/person all-in.",
          ],
          cost: "$500–900 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$25–50",
      food: "$15–25",
      transport: "$5–15",
      activities: "$10–20",
      total: "$60–110/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$80–180",
      food: "$35–60",
      transport: "$20–40",
      activities: "$30–60",
      total: "$165–340/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$300–800",
      food: "$70–150",
      transport: "$50–150",
      activities: "$80–200",
      total: "$500–1,300/day",
    },
  ],
  mistakes: [
    {
      icon: "🏨",
      title: "Staying Only in Havana and Missing Trinidad",
      desc: "Nearly every first-time visitor to Cuba makes this mistake — staying in Havana for all 4 days and skipping Trinidad. Trinidad is one of the best-preserved colonial cities in the Americas: cobblestone streets, pastel mansions, and a working Cuban community that has been living inside a UNESCO World Heritage Site since 1514. The bus is $10–15 and takes 5 hours. A shared taxi is $25–35 and takes 2.5 hours. There is no excuse. Trinidad is unmissable.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏩",
      title: "Staying in State Hotels Instead of Casas Particulares",
      desc: "Cuba's state-owned hotels charge similar prices to casas particulares but deliver significantly worse service, worse food, and no genuine Cuban experience. A casa particular gives you a Cuban family as hosts, home-cooked breakfast (ripe mangoes, fresh juice, eggs, black beans — the best breakfast in the Caribbean), local knowledge unavailable in any guidebook, and money that goes directly to a family rather than the state. Always choose casas particulares.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "👝",
      title: "Carrying All Your Cash in One Place",
      desc: "Petty theft in Havana is real — particularly in crowded tourist areas like Plaza de la Catedral and the Malecón at night. Split your cash across multiple locations: hotel safe for the bulk, a small amount in a front pocket for daily use, and a backup emergency stash in your bag. Keep photocopies of your passport and tourist card separate from the originals. Credit cards work at some ATMs and hotels but Cuba's infrastructure is unreliable — always have enough cash for 2–3 days.",
      color: "bg-yellow-50 border-yellow-200",
    },
  ],
  tips: [
    {
      icon: "🚗",
      title: "Vintage Car Tour at Golden Hour — The Malecón Photograph",
      desc: "The iconic Havana image — a 1955 Chevrolet convertible cruising the Malecón with the sea spray behind and the crumbling colonial skyline ahead — is best captured in the hour before sunset. Book your vintage car tour to start 90 minutes before sunset. Negotiate the price beforehand ($20–30/hour is fair, agree on the route). The late afternoon light turns everything the colour of old photographs. This is the single best hour you'll spend in Havana.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "💃",
      title: "Trinidad's Casa de la Música — The Most Authentic Salsa in Cuba",
      desc: "The tourist salsa shows in Havana are professionally performed but feel staged. Trinidad's Casa de la Música (the steps of the Iglesia at the top of the cobblestone square) is where Cubans actually dance — couples who've danced together for 20 years, children learning from their grandparents, musicians playing for themselves as much as the audience. CUP 50 entry ($2). Go at 9pm when it properly starts. Stand at the edge of the dance floor for 5 minutes and someone will ask you to dance.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🍦",
      title: "Coppelia Ice Cream — Wait in the Cuban Queue",
      desc: "Coppelia is Havana's legendary state-run ice cream parlour, open since 1966, subsidized to CUP 10–20 per portion (less than $1). There are two queues: a fast tourist queue ($1 entry, no wait) and the Cuban queue (free entry, 20–40 minute wait). Wait in the Cuban queue. The wait is how you meet Cubans — families, couples, elderly men in guayabera shirts — who have been coming here every Sunday for decades. The ice cream is good. The experience of sitting in a concrete 1960s ice cream palace eating chocolate ice cream with Cuban families is extraordinary.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "Is Cuba expensive for tourists?",
      a: "Cuba occupies a strange position: basic necessities (public transport CUP 1–5, local street food CUP 50–200) are extremely cheap because they're subsidized for Cubans. But tourist prices are substantially higher — casa particulares $25–80/night, private restaurant meals $15–30/person, tourist taxis $10–20 for short rides. Budget travelers can get by on $60–90/day by staying in casas, eating at paladares, and using public transport. The biggest variable is the frequent transportation costs (Havana to Trinidad and back is $30–70 depending on transport choice).",
    },
    {
      q: "How does internet access work in Cuba?",
      a: "Internet in Cuba is state-controlled and intentionally restricted. WiFi is available at hotels and designated hotspots through ETECSA (Cuba's state telecom company). Buy an ETECSA WiFi card (CUP 20–30/hour, available at ETECSA offices and from street vendors at a small markup). The cards give you a username and password that works at any ETECSA hotspot — look for people on their phones in plazas, that's a hotspot. Many casas particulares now have their own WiFi through ETECSA packages. Download maps, translation apps, and guidebook content before arrival — Google Maps offline works well with pre-downloaded Cuba maps.",
    },
    {
      q: "How confusing is the Cuban currency system?",
      a: "Cuba simplified its currency to a single Cuban peso (CUP) in 2021, ending the dual CUC/CUP system. However in practice, tourists encounter two additional realities: the official CUP exchange rate and an informal exchange rate for cash. Additionally, the MLC (Moneda Libremente Convertible) system uses a separate card account for foreign currency-denominated purchases. The most practical approach: bring euros or Canadian dollars (better rates than USD due to US sanctions), exchange at a CADECA exchange house, use CUP for everything, and ask your casa particular host for current guidance on the best way to handle cash when you arrive.",
    },
    {
      q: "Can US citizens visit Cuba?",
      a: "US citizens can visit Cuba but US Treasury OFAC regulations require travel under one of 12 specific authorized categories — general tourism is not one of them. The most commonly used categories are 'Support for the Cuban People' and 'Educational Activities'. US citizens cannot use US bank cards in Cuba and must self-certify their travel category. Airlines do fly from the US to Havana with minimal documentation requirements. The rules change frequently — check the US Treasury OFAC website and consult a travel attorney if uncertain. Citizens of all other countries have no restrictions.",
    },
  ],
  combineWith: ["mexico-city-4-days", "colombia-cartagena-4-days", "cancun-3-days"],
  relatedSlugs: ["colombia-cartagena-4-days", "mexico-city-4-days", "costa-rica-7-days"],
  galleryQuery: "havana cuba vintage cars malecón colonial streets old havana",
};

export const metadata: Metadata = {
  title: "Havana in 4 Days: Classic Cars, Colonial Havana, Rum & Trinidad (2026)",
  description: "Complete 4-day Havana travel guide: casa particulares, vintage car tours, Trinidad day trip, Hemingway bars, real costs from $60/day, and Cuba tourist card explained.",
  keywords: [
    "havana itinerary 4 days",
    "cuba travel guide 2026",
    "havana travel tips",
    "trinidad cuba day trip",
    "cuba tourist card",
    "havana budget travel",
  ],
  openGraph: {
    title: "Havana in 4 Days: Classic Cars, Rum & Trinidad (2026)",
    description: "Vintage car tours, Trinidad day trip, Hemingway bars, and real costs — complete 4-day Havana travel guide.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Classic vintage cars on Havana Malecón Cuba",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Havana 4 Days (2026)",
    description: "Classic cars, Hemingway bars, Trinidad — complete Cuba travel guide.",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/havana-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Havana in 4 Days: Classic Cars, Colonial Havana, Rum & Trinidad (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?w=1200&q=80",
      description:
        "Complete 4-day Havana travel guide covering Old Havana, the Malecón, Trinidad day trip, Hemingway bars, and Cuba tourist card requirements.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Havana 4 Days",
          item: "https://www.incredibleitinerary.com/blog/havana-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Havana, Cuba",
      description:
        "A perfectly preserved time capsule — 1950s American cars, colonial palaces, Hemingway's favourite bars, and the best live music in the Caribbean.",
      geo: { "@type": "GeoCoordinates", latitude: 23.1136, longitude: -82.3666 },
      touristType: ["History enthusiasts", "Music lovers", "Architecture fans", "Food and rum tourists"],
    },
  ],
};

export default function HavanaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
