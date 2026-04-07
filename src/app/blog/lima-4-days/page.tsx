import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Lima",
  country: "Peru",
  countryFlag: "🇵🇪",
  slug: "lima-4-days",
  heroQuery: "lima peru miraflores ocean cliffs cityscape",
  heroAlt: "Lima Miraflores cliffs overlooking the Pacific Ocean at sunset",
  category: "South America",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro:
    "Lima is the food capital of the Americas — home to Central, Maido, and Astrid y Gaston, three restaurants that routinely rank in the World's 50 Best. But the city is far more than its kitchens. Miraflores perches on 80-metre cliffs above the Pacific, Barranco spills with bohemian murals and pisco bars, and the Larco Museum holds the most dazzling pre-Columbian gold collection on earth. Four days lets you devour Lima's flavours, plan your Machu Picchu adventure, and still catch a sunset from the paragliders' launch above the cliffs.",
  stats: { duration: "4 Days", budgetFrom: "$35", bestMonths: "Dec–Mar (summer)", airport: "LIM" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Miraflores & Cliffs" },
    { id: "day2", emoji: "📅", label: "Day 2 — Larco Museum & Barranco" },
    { id: "day3", emoji: "📅", label: "Day 3 — Ceviche & Machu Picchu Planning" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Tourist Visa required"],
        ["Processing", "10–20 business days"],
        ["Fee", "Approx. $30 USD"],
        ["Validity", "Up to 183 days stay permitted on entry"],
        ["Apply at", "Embassy of Peru or online via Peruvian consulate"],
        ["Documents", "Return flight, hotel bookings, bank statements, travel insurance"],
        ["Notes", "Apply 4–6 weeks before travel. Some travellers report easier processing with a full itinerary."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free entry"],
        ["Processing", "No visa needed"],
        ["Fee", "Free"],
        ["Stay Allowed", "Up to 183 days on arrival"],
        ["Passport", "Must be valid at least 6 months beyond travel dates"],
        ["Entry Card", "Andean Migration Card (TAM) issued on arrival, keep it safe"],
        ["Notes", "No ETIAS or advance registration required. Proof of onward travel recommended."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "$35–55/day",
      days: [
        {
          day: "Day 1",
          title: "Miraflores Cliffs & Ceviche Markets",
          items: [
            "13:00 — Check in to a hostel in Miraflores (dorm $12–18/night) — Miraflores is safe, well-connected by bus, and walking distance to the cliff parks and Larcomar mall",
            "15:00 — Walk to Parque del Amor and the Larcomar cliffs — the 80-metre coastal escarpment above the Pacific is free to explore; watch paragliders launch from Parque Raimondi for $80 tandem if budget allows",
            "17:30 — Ceviche and causa at Mercado de Surquillo No. 1 — a 10-minute walk from Miraflores; the market has a seafood section where full ceviche plates cost $4–6, far cheaper than tourist restaurants",
            "19:30 — Pisco sour at a Miraflores bar — La Lucha Sangucheria serves great budget Peruvian sandwiches and the bars nearby pour pisco sours from $4; the Peruvian national cocktail deserves at least two",
            "21:00 — Evening stroll along Malecón de la Reserva above the lit-up cliffs — the city glow against the Pacific is spectacular and completely free",
          ],
          cost: "$25–35 (food, pisco sour, hostel already counted)",
        },
        {
          day: "Day 2",
          title: "Larco Museum & Barranco Art Walk",
          items: [
            "09:30 — Museo Larco in Pueblo Libre district — entry $15, take a bus or Uber ($3) from Miraflores; the museum holds 45,000 pre-Columbian artefacts including the famous erotic pottery vault and extraordinary gold work",
            "12:30 — Lunch at the Museo Larco cafe ($8–10) or nearby local picanterias on Av. Bolivar where set lunches (menu del dia) cost $3–5 including soup, main, and a small drink",
            "14:30 — Barranco district by Uber ($4) — Barranco is Lima's bohemian quarter; walk from Plaza de Barranco down to the Puente de los Suspiros (Bridge of Sighs), then along Bajada de Baños to the ocean",
            "16:00 — Street art and gallery walk around Calle Centenario and Av. Pedro de Osma — free murals by internationally known artists; galleries like Lucia de la Puente have free entry",
            "19:00 — Budget dinner at La Canta Rana in Barranco — casual cevicheria with queues of locals, plates $8–12",
          ],
          cost: "$30–40 (museum, transport, meals)",
        },
        {
          day: "Day 3",
          title: "Machu Picchu Planning & Historic Centre",
          items: [
            "09:00 — Historic centre of Lima (Centro Historico) — free to walk; Plaza Mayor with the Presidential Palace and Cathedral of Lima, then Jiron de la Union pedestrian boulevard; the UNESCO-listed colonial architecture is among the best in South America",
            "11:00 — Convento de San Francisco and the Catacombs ($5 entry) — 70,000 human remains are laid out in geometric patterns in the underground catacombs; genuinely remarkable and rarely crowded in the morning",
            "13:00 — Lunch at a Centro Historico picanterias — lomo saltado or aji de gallina for $4–6 at local spots near Mercado Central",
            "15:00 — Return to hostel and spend 2 hours planning Machu Picchu: book Machu Picchu entry tickets online at the official government site (machupicchu.gob.pe); tickets sell out 1–3 months ahead; budget $50–60 entry + train + bus",
            "20:00 — Farewell pisco sour and anticuchos (beef heart skewers) from a street cart near Miraflores park — $3 for two skewers; the best street food in Peru",
          ],
          cost: "$25–35 (historic centre, catacombs, planning admin)",
        },
        {
          day: "Day 4",
          title: "Surfer Beach & Departure",
          items: [
            "08:00 — Breakfast at a corner bakery near your hostel — pan de yema and café americano for $2; Lima bakeries open at 7am",
            "10:00 — Barranco or Miraflores beach walk — Playa Miraflores and Playa La Herradura are accessible by clifftop paths; the ocean is cold (Humboldt Current) but the scenery is dramatic",
            "12:00 — Final ceviche lunch — La Mar in Miraflores has a budget set menu at lunch ($15) vs. its dinner price; or Mercado de Surquillo for $5 ceviche one final time",
            "14:00 — Head to Jorge Chavez International Airport — allow 2 hours for traffic; Uber costs $12–18 from Miraflores to LIM",
          ],
          cost: "$25–35 (breakfast, lunch, airport transfer)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "$120–180/day",
      days: [
        {
          day: "Day 1",
          title: "Miraflores Arrival & Cliffside Sundowner",
          items: [
            "13:00 — Check in to a boutique hotel in Miraflores ($80–120/night) — hotels along Av. Larco or near Parque Kennedy put you a 5-minute walk from the cliff parks",
            "15:30 — Tandem paragliding from Parque Raimondi cliffs ($80 including video) — 15-minute flight above the Miraflores coastline; pilots are certified and the experience is one of the best in South America",
            "17:30 — Pisco sour cocktail class at BarBarian or similar Lima cocktail school ($35, 90 minutes) — learn the Peruvian vs. Chilean pisco debate, make three variations, and drink your homework",
            "20:00 — Dinner at Maido ($90/pp tasting menu reservation essential, book 3–4 weeks ahead) — ranked in World's 50 Best; Peruvian-Japanese (Nikkei) cuisine with 15 courses; the tuna sashimi with tiger's milk is extraordinary",
          ],
          cost: "$200–250 (hotel, paragliding, cocktail class, fine dinner)",
        },
        {
          day: "Day 2",
          title: "Larco Museum, Barranco & Peruvian Wine",
          items: [
            "09:30 — Museo Larco ($15) with an audio guide ($5) — spend 2 hours with the chronological collection; the gold and silver metalwork room contains pieces that rival anything in the British Museum",
            "12:00 — Lunch at Museo Larco restaurant ($25–30/pp) — set in a beautiful colonial garden; the causa de langostinos and ceviche del dia use the same ingredients as Lima's top restaurants",
            "14:30 — Barranco gallery and market walk — visit MATE (Mario Testino Museum) for $12; the photographer's archive of Lima society and fashion photography is beautifully curated",
            "17:00 — Cata (wine tasting) at a Barranco bar — Peru has a small but serious wine scene from the Ica valley; boutique bars near Calle Grau offer pisco and Peruvian wines by the glass ($5–8)",
            "20:00 — Dinner at Isolina in Barranco ($35/pp) — a beloved neighbourhood restaurant serving traditional Lima criolla food; the seco de cordero and cau cau are outstanding",
          ],
          cost: "$140–170 (museum, MATE, lunch, dinner, tastings)",
        },
        {
          day: "Day 3",
          title: "Central Food Tour & Machu Picchu Planning",
          items: [
            "09:00 — Centro Historico walking tour ($25, 3 hours with licensed guide) — covers the Cathedral, Palacio de Gobierno, Convento de San Francisco catacombs, and the best colonial courtyards; guides contextualise the Spanish conquest and Republican Lima",
            "13:00 — Lunch at Central ($120/pp, 17-course tasting menu, reservation essential months ahead) — consistently ranked in World's Top 5; each course is an altitude — from Pacific ocean floor to 4,000m Andean highlands; the most impressive food experience in South America",
            "16:00 — Return to hotel and book Machu Picchu arrangements — tickets at machupicchu.gob.pe, train via Peru Rail ($50–90 each way), and accommodation in Aguas Calientes ($60–100) or Ollantaytambo ($40–70)",
            "19:30 — Drinks and anticuchos at El Bolivarcito near the hotel — Peru's craft beer scene has expanded dramatically; Barranco Beer Company and Sierra Andina make excellent Andean ales",
          ],
          cost: "$200–280 (tour, Central tasting menu, Machu Picchu bookings)",
        },
        {
          day: "Day 4",
          title: "Surfrider Coast & Departure",
          items: [
            "08:00 — Breakfast at cafe Tostaduria Bisetti in Barranco ($10–12) — Lima's best third-wave coffee using Peruvian highland beans; the affogato and avocado toast are exceptional",
            "10:00 — Clifftop walk from Miraflores to Barranco along the Malecon — the 4km ocean-view path passes sculpture gardens, viewpoints, and historic mansions; entirely free",
            "12:30 — Final lunch at La Mar cevicheria ($25–35/pp, arrives at noon to beat the queue) — the signature mixed ceviche with leche de tigre and the chupe de camarones are Lima's finest seafood",
            "15:00 — Uber to Jorge Chavez Airport ($15–20); allow 2 hours minimum from Miraflores due to Lima traffic",
          ],
          cost: "$70–100 (breakfast, lunch, airport transfer)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "$350–600/day",
      days: [
        {
          day: "Day 1",
          title: "Belmond Miraflores Park Arrival & Private Pisco Experience",
          items: [
            "12:00 — Check in to Belmond Miraflores Park ($350–500/night) — an ocean-facing luxury hotel on the Malecón with a rooftop pool overlooking the Pacific; the butler service and Peruvian art collection are superb",
            "14:00 — Private paragliding flight with champagne landing ($200) — private operator arranged by hotel concierge; longer 25-minute flight with personalised route above the Lima coastline",
            "17:00 — Private pisco masterclass with Peru's leading sommelier at the hotel ($150, 2 hours) — blind-tasting of 12 premium piscos, comparative pisco sour making, and a deep dive into Peru's appellation rules",
            "20:30 — Dinner at Astrid y Gaston ($150/pp, reservation 6–8 weeks ahead) — Gaston Acurio's flagship restaurant in a beautiful San Isidro mansion; the Casa Moreyra tasting menu captures 500 years of Peruvian culinary history",
          ],
          cost: "$600–800 (hotel, paragliding, masterclass, Astrid y Gaston)",
        },
        {
          day: "Day 2",
          title: "Private Larco & Lima Food Heritage Tour",
          items: [
            "09:00 — Private Museo Larco after-hours access ($200, arranged by hotel) — a private curator guides you through the 45,000-piece collection with access to the conservation lab and private vaults not open to the public",
            "12:30 — Lunch at Kjolle in Miraflores ($80/pp, reservation essential) — Central's sister restaurant run by chef Pia Leon, named World's Best Female Chef; the Amazonian ingredients and coastal-mountain menu are extraordinary",
            "15:00 — Private art tour of Barranco galleries with a Lima art critic ($120, 2 hours) — covers MATE, the street art scene, and private collections; ends with a sundowner at a Barranco rooftop bar",
            "20:00 — Dinner at Central ($200/pp with full pisco pairing) — the most celebrated restaurant in South America; a 17-altitude tasting menu exploring Peru's entire ecosystem from sea floor to Andes summit",
          ],
          cost: "$700–900 (private museum, Kjolle, art tour, Central with pairing)",
        },
        {
          day: "Day 3",
          title: "Machu Picchu Private Arrangement & Lima Historic Centre",
          items: [
            "09:00 — Private guided tour of Centro Historico with a specialist art historian ($150, 3 hours) — covers the cathedral's paintings by the Cusco School, the Convento de San Francisco gold sacristy, and three private colonial palaces not open to the public",
            "13:00 — Lunch at Rafael in Miraflores ($60/pp) — Rafael Osterling's flagship; Italian-Peruvian fusion in a beautiful dining room; the burrata with huacatay oil and the lamb shank with aji panca are outstanding",
            "15:30 — Hotel concierge arranges private Machu Picchu journey: private Hiram Bingham luxury train ($500 round trip), Belmond Sanctuary Lodge accommodation at Machu Picchu ($900/night), private guide booking",
            "19:30 — Rooftop cocktails at Belmond Miraflores Park pool bar ($20/drink) with Pacific sunset; the hotel bar serves Peru's finest piscos",
          ],
          cost: "$500–700 (private tour, luxury lunch, Machu Picchu arrangements)",
        },
        {
          day: "Day 4",
          title: "Clifftop Breakfast & Private Transfer",
          items: [
            "08:00 — Private breakfast on the hotel terrace overlooking the Pacific ($30–40 included with suite rates) — the full Peruvian breakfast spread includes quinoa porridge, fresh ceviche, and tamales",
            "10:00 — Final private shopping experience in Miraflores — personal shopper arranged by hotel visits premium alpaca wool boutiques and silver jewellery artisans on Av. Larco ($100–200 for guide, purchases extra)",
            "12:00 — Farewell pisco sour at La Mar bar ($15/drink) — even on a luxury budget, La Mar remains a Lima institution; the bar is animated and the view of the ceviche bar prep kitchen is mesmerising",
            "14:00 — Private car transfer to Jorge Chavez Airport ($50 via hotel service) with meet-and-greet, luggage handling, and VIP lounge access arranged by concierge",
          ],
          cost: "$200–350 (breakfast, shopping, bar, private transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$12–18 (hostel dorm in Miraflores)",
      food: "$15–22 (markets + picanterias)",
      transport: "$4–8 (Uber + local bus)",
      activities: "$5–15 (select museums)",
      total: "$35–55/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$80–120 (boutique hotel Miraflores)",
      food: "$40–65 (restaurants + cevicherias)",
      transport: "$10–20 (Uber + tours)",
      activities: "$25–50 (museums + experiences)",
      total: "$120–180/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$350–500 (Belmond or similar)",
      food: "$150–250 (fine dining + tastings)",
      transport: "$30–80 (private car + hotel transfers)",
      activities: "$150–300 (private tours + classes)",
      total: "$350–600/day",
    },
    {
      tier: "🍽️ Food-Only Day",
      accommodation: "$0 (day trip from existing hotel)",
      food: "$80–200 (Central or Maido tasting menu)",
      transport: "$10–20 (Uber to restaurant)",
      activities: "$0–30 (gallery visits)",
      total: "$80–200/day",
    },
    {
      tier: "🏔️ Machu Picchu Add-On",
      accommodation: "$60–900 (Aguas Calientes to Sanctuary Lodge)",
      food: "$20–60 (Aguas Calientes restaurants)",
      transport: "$50–500 (train + bus, budget to Hiram Bingham)",
      activities: "$50–60 (Machu Picchu entry)",
      total: "$180–1500 for 2-day add-on",
    },
  ],
  mistakes: [
    {
      icon: "🚌",
      title: "Staying outside Miraflores or Barranco",
      desc: "Lima is a sprawling city of 11 million and traffic can be brutal. Staying in Miraflores or Barranco keeps you near the best restaurants, the safest streets, and the cliff parks. Staying downtown saves $10 but costs 90 minutes per trip in traffic.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🎟️",
      title: "Not booking Central or Maido months in advance",
      desc: "Lima's top restaurants rank in the global top 10 and book out 2–3 months ahead. Central requires reservations 6–8 weeks minimum; Maido 3–4 weeks. Showing up without a reservation is simply not an option at these establishments.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🏔️",
      title: "Leaving Machu Picchu tickets until the last minute",
      desc: "The Peruvian government caps Machu Picchu daily entries and tickets sell out weeks to months ahead, especially June to August. Book online at machupicchu.gob.pe as soon as your dates are confirmed.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🌊",
      title: "Expecting warm Pacific beaches",
      desc: "The Humboldt Current keeps Lima's Pacific Ocean at 16–19 degrees Celsius year-round. The beaches are beautiful for walking and surfing but cold swimming. Lima's summer (Dec–Mar) is cloudy and humid; the sun often only appears January to March.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "💱",
      title: "Changing money at the airport",
      desc: "Lima airport cambios offer rates 15–20% below street rates. Use ATMs in Miraflores (Scotiabank and BCP have low fees) or visit a casa de cambio on Av. Larco for excellent sol exchange rates. Never change money with street touts.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🐟",
      title: "Eat ceviche only at lunch",
      desc: "Lima cevicheros traditionally serve ceviche for lunch only — the fish is freshest in the morning. The best local spots open at noon and close by 4pm. Mercado de Surquillo has excellent ceviche from $4. Book tours via https://www.getyourguide.com/s/?q=Lima+Peru&partner_id=PSZA5UI for culinary experiences.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🚖",
      title: "Use Uber exclusively in Lima",
      desc: "Lima taxis have no meters and haggling is the norm; tourists regularly overpay 300%. Uber is cheap ($3–15 for most Miraflores trips), safe, and tracked. Download it before arriving. InDriver is a cheaper alternative for longer trips.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🏨",
      title: "Book accommodation via Booking.com for flexible cancellation",
      desc: "Lima hotels frequently have better rates online with free cancellation. Miraflores fills up during Peruvian public holidays (July 28, December) and during Lima Food Festival weeks. Always book with free cancellation on Booking.com to stay flexible.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🌄",
      title: "Plan Machu Picchu from Lima, not Cusco",
      desc: "Lima is the best hub to arrange the full Peru trip: flights to Cusco ($60–100 return), Machu Picchu tickets, train, and guide can all be organised 1–2 days before departure. Fly into Cusco the day before Machu Picchu to acclimatise to 3,400m altitude.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Is Lima safe for tourists?",
      a: "Miraflores and Barranco are among the safest districts in South America for tourists, with strong street lighting, regular tourist police patrols, and low violent crime rates. The Historic Centre is safe during daylight but avoid it at night. Use Uber rather than hailing street taxis, keep phones out of sight on the street, and do not wear expensive jewellery in public. Lima is significantly safer than most people expect.",
    },
    {
      q: "How many days should I spend in Lima before Machu Picchu?",
      a: "Two days in Lima minimum if you want to eat at a top restaurant and visit the Larco Museum. Four days is ideal for a full Lima experience plus Machu Picchu planning. When heading to Cusco and Machu Picchu, spend at least one night in Cusco (3,400m) to acclimatise before the ruins; altitude sickness is genuinely debilitating if you rush.",
    },
    {
      q: "What is the best time to visit Lima?",
      a: "Lima has two seasons: summer (Dec–Mar) with warm temperatures (22–28C) and some sun, and winter (May–Oct) when the garua sea mist keeps the city grey and 16–20C. Ironically, the rest of Peru has its best weather in winter (dry season May–Oct), which is also the best time to visit Machu Picchu. Many travellers visit Lima in its grey season but enjoy perfect Andean conditions inland.",
    },
    {
      q: "Can I visit Machu Picchu as a day trip from Lima?",
      a: "Technically possible but strongly discouraged. Lima to Cusco is a 90-minute flight; Cusco to Aguas Calientes (Machu Picchu town) is a 3.5-hour train journey; then a 30-minute bus to the ruins. A day trip means 20 hours of travel for 2–3 hours at the ruins. Always spend at least one night in Aguas Calientes or Ollantaytambo and allow acclimatisation time in Cusco.",
    },
  ],
  combineWith: ["santiago-chile-4-days", "mendoza-argentina-4-days", "bogota-4-days"],
  relatedSlugs: ["santiago-chile-4-days", "mendoza-argentina-4-days", "bogota-4-days", "cartagena-4-days"],
  galleryQuery: "lima peru miraflores barranco ceviche",
};

export const metadata: Metadata = {
  title: "Lima in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 4-day Lima itinerary — Miraflores cliffs, Larco Museum gold, Barranco murals, ceviche at Central, pisco sours, and Machu Picchu planning. Budget $35/day to Belmond luxury.",
  keywords: [
    "Lima itinerary",
    "Lima 4 days",
    "Lima travel guide 2026",
    "Lima food guide",
    "Miraflores cliffs",
    "Larco Museum Lima",
    "Machu Picchu planning",
    "Lima visa Indian passport",
    "ceviche Lima",
    "pisco sour Lima",
  ],
  openGraph: {
    title: "Lima in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Miraflores cliffs, Larco Museum, Barranco art, ceviche at Central, and pisco sours — Lima in 4 days from $35/day to Belmond luxury.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/lima-4-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lima in 4 Days: Complete 2026 Itinerary",
    description: "The world's best food city in 4 days — Miraflores, Larco Museum, Barranco, ceviche, pisco sours, and Machu Picchu planning hub.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/lima-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Lima in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Lima in 4 Days",
          item: "https://www.incredibleitinerary.com/blog/lima-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Lima",
      description:
        "Lima, Peru — the food capital of the Americas, with Miraflores cliffs, the Larco Museum, Barranco bohemian district, and world-ranking restaurants including Central and Maido.",
      geo: { "@type": "GeoCoordinates", latitude: -12.0464, longitude: -77.0428 },
    },
  ],
};

export default function LimaPage() {
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
