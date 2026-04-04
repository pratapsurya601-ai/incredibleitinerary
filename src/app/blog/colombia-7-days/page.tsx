import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Colombia",
  country: "Colombia",
  countryFlag: "🇨🇴",
  slug: "colombia-7-days",
  heroQuery: "cartagena colombia colonial old city walls caribbean sea",
  heroAlt: "Colonial old city walls of Cartagena de Indias at sunset with the Caribbean Sea, Colombia",
  category: "South America",
  date: "April 5, 2026",
  readTime: "17 min read",
  intro: "Colombia's transformation over the past two decades is one of the most remarkable stories in travel. The country that was synonymous with danger is now one of South America's most visited destinations — and for good reason. Bogotá has the most important pre-Columbian gold collection on earth. Medellín has reinvented itself from the world's most dangerous city into a model of urban innovation. And Cartagena, behind its 16th-century Spanish walls on the Caribbean, is simply one of the most beautiful cities anywhere.",
  stats: { duration: "7 Days", budgetFrom: "$35", bestMonths: "Dec–Mar, Jun–Aug (dry)", airport: "BOG (El Dorado) + CTG (Cartagena)" },
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
      bg: "bg-amber-50", border: "border-amber-200", titleColor: "text-amber-800",
      items: [
        ["e-Visa Required", "Indian citizens require a pre-travel visa for Colombia. Apply online at migrationcolombia.gov.co at least 10–15 days before departure. Fee: approximately COP 75,000–100,000 (~$20 USD). The process is fully online and straightforward."],
        ["Visa Type", "Apply for the V-Tourism visa (Visa de Turismo). Duration granted is typically 90 days. The application requires: passport scan, passport-size photo, return flight ticket, hotel bookings, and bank statement showing sufficient funds."],
        ["Processing Time", "Typically 3–7 business days. Apply well in advance. The visa is issued electronically — print or save the PDF approval to present at immigration alongside your passport."],
        ["Entry Requirements", "Present visa approval, passport valid at least 6 months beyond entry date, return or onward ticket, and proof of accommodation. Colombian immigration officers may ask to see your financial means — keep a bank statement accessible."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passport Holders",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["Visa-Free — 90 Days", "USA, UK, Canada, Australia, EU, and most Western passport holders enter Colombia completely visa-free for up to 90 days for tourism. No prior approval, no fee, no ETIAS. Simply arrive at Bogotá El Dorado or Cartagena airport with a valid passport."],
        ["Extension Option", "The 90 days can be extended at a Migración Colombia office for an additional 90 days (COP 85,000 fee). The total maximum stay is 180 days per calendar year."],
        ["Bogotá Airport (BOG)", "El Dorado International is Colombia's main hub. The airport is modern and well-organised. Official taxis from the arrivals hall: COP 40,000–60,000 ($10–15) to the city centre. Uber also works from the pickup zone. Do not take unmarked taxis outside the terminal."],
        ["Cartagena Airport (CTG)", "Rafael Núñez International serves Cartagena directly from major US cities (American, United, JetBlue). It is 15 minutes from the walled city. Taxis: COP 15,000–25,000 ($4–6). A fixed-rate app (InDriver or Cabify) saves negotiation."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$35–65/day",
      days: [
        {
          day: "Day 1–2",
          title: "Bogotá — Gold Museum, La Candelaria & Monserrate",
          items: [
            "Day 1 morning — Monserrate: the 3,152m hill overlooking Bogotá. Take the cable car (COP 28,000 return, about $7) or hike the 1,500-step path (free, 1 hour up, 45 minutes down — done by thousands of Bogotanos daily for exercise). The panoramic view over 10 million people in the Andean bowl is staggering.",
            "Important altitude note — Bogotá sits at 2,600m above sea level. If you arrive from sea level, take Day 1 gently: drink water, avoid alcohol, and do not rush. Altitude sickness (soroche) is rare but headaches and fatigue in the first 24 hours are very common.",
            "Day 1 afternoon — Museo del Oro (Gold Museum). Entry: COP 4,000 (~$1). This is the most important pre-Columbian gold collection on earth — 55,000 gold and tumbaga pieces, including the Muisca raft that inspired the El Dorado legend. The light-and-sound room showing the 8,000-piece gold collection in darkness is one of the most extraordinary museum experiences in South America. Allow 2 hours.",
            "La Candelaria — Bogotá's historic colonial district (free to walk): Plaza Bolívar (the main square, surrounded by the Capitol, Cathedral, and Mayor's office), the Primatial Cathedral (free), street art (Colombia has a legal street art culture — La Candelaria has world-class murals).",
            "Day 1 evening — Arepas de chócolo (sweet corn arepas, COP 2,000–3,000) from a street vendor, then dinner at a La Candelaria restaurante for bandeja paisa (the Colombian national plate: red beans, rice, ground meat, chicharrón, egg, arepa, plantain — COP 20,000–35,000).",
            "Day 2 — Zona Rosa / Chapinero Norte: Bogotá's upmarket shopping and café district. Free to walk. Juan Valdez Café (Colombia's national coffee chain) for the best tinto (black coffee, COP 3,500) you will taste anywhere. The coffee here is grown within 500km of where you are drinking it.",
            "Day 2 evening — Usaquén neighbourhood Sunday flea market (if timing allows) or Andrés Carne de Res dinner experience in Chía (30 min from Bogotá, the largest restaurant-nightclub in the world, COP 40,000–80,000 per person for food and entrance).",
          ],
          cost: "$25–45 total (both days)",
        },
        {
          day: "Day 3–4",
          title: "Medellín — Innovation City, Comunas & Botero",
          items: [
            "Fly Bogotá to Medellín (45 min, COP 60,000–120,000 on Avianca or Latam — book in advance). Or take the 8-hour bus (COP 50,000) through spectacular Andean scenery. Medellín sits at 1,495m — warmer than Bogotá, nicknamed 'the city of eternal spring.'",
            "Day 3 morning — Plaza Botero (free): 23 oversized bronze sculptures by Fernando Botero, Colombia's most famous artist, in an open plaza outside the Palacio de la Cultura. The 'Mona Lisa Gorda' (fat Mona Lisa) is the most photographed. Adjacent Museum of Antioquia (COP 20,000) houses more Botero works plus Colombian art history.",
            "Day 3 afternoon — MetroCable to Comunas (COP 4,700 per journey, about $1.20). The cable car system connecting the formerly impoverished hillside comunas to the city metro below is both practical infrastructure and a symbol of Medellín's transformation. Lines K and L take you up through the city's most densely populated hillsides for panoramic views. The neighbourhood at the top (Santo Domingo Savio) has been transformed — libraries, parks, escalators. A genuine urban miracle.",
            "Day 3 evening — El Poblado neighbourhood: Medellín's expat and tourist hub. Parque Lleras and the surrounding streets have excellent restaurants, craft beer bars (COP 6,000–10,000 per beer), and the best nightlife in Colombia. Budget dinner: bandeja paisa COP 25,000 or pizza COP 18,000.",
            "Day 4 — Free walking tour (Real City Tours, 0800–1200, free + tip): these are consistently excellent and deeply informative — local guides cover Medellín's history from industrial city to drug war epicentre to innovation laboratory with personal family context. 3 hours.",
            "Pablo Escobar tour ($20–30 per person, book through your hostel or tour companies in El Poblado): controversial and handled very differently by different operators. The best operators centre the tour on victims and the city's transformation, not glorification. Medellín residents themselves have complex feelings about this tourism. Worth doing with the right operator; do your research.",
            "Day 4 afternoon — Parque Arví by cable car (Línea L extension, COP 7,000): a forest eco-park above the city with hiking trails, bird life, and a local artisan market on weekends. The cable car journey itself — passing over the comunas and into the cloud forest — is one of the most memorable short journeys in Colombia.",
          ],
          cost: "$25–45 total (both days, excl. flight)",
        },
        {
          day: "Day 5–7",
          title: "Cartagena — Walled City, Caribbean Islands & Getsemaní",
          items: [
            "Fly Medellín to Cartagena (1h, COP 70,000–150,000). Check in to a hostel or guesthouse in Getsemaní (the authentic neighbourhood) or inside the walled city (more expensive but atmospheric).",
            "Day 5 — Ciudad Amurallada (Walled City): UNESCO World Heritage Site, free to walk the entirety of the 11km of 16th-century Spanish colonial walls. The colourful bougainvillea-draped buildings, the clock tower gate, the Plaza de los Coches and Plaza de la Aduana — wander freely for hours.",
            "Castillo San Felipe de Barajas — EGP: COP 37,000 (~$9). The most complete 16th-century Spanish fortress in the Americas, built on a hill overlooking the bay. The tunnel system inside the walls is extraordinary. Visit in the morning (cooler, better light for photographs).",
            "Day 5 evening — sunset from the city walls (free): Cartagena's most famous experience. The walk along the restored sea walls at dusk, with the Caribbean turning orange and the white towers of the old city behind you, is genuinely beautiful. Crowds gather from 5:30pm — arrive earlier for the best spot.",
            "Day 6 — Rosario Islands day trip ($30–50 per person, book through a hostel or dock agency): speedboat 45 minutes to the Islas del Rosario, a protected national park with coral reefs in the clear Caribbean. Snorkelling equipment included. The city beaches of Cartagena (Bocagrande) are not recommended — murky water, vendor-heavy. The Rosarios are genuinely beautiful.",
            "Day 6 evening — Getsemaní neighbourhood: Cartagena's authentic barrio. Once considered rough, now Colombia's most beloved backpacker neighbourhood — street art, outdoor bars on Plaza Trinidad, live vallenato music, and the best budget food in Cartagena. Arepas de huevo (COP 3,000), fresh ceviche (COP 8,000), cold Club Colombia beer (COP 5,000).",
            "Day 7 — Cartagena morning exploration: Palacio de la Inquisición museum (COP 20,000, the history of the Spanish Inquisition in the Americas — disturbing and important). Las Bóvedas (old dungeon-turned-artisan-market, free to browse). Café del Mar on the walls for a final coffee with Caribbean views before departure.",
          ],
          cost: "$30–55 total (three days, excl. Medellín-Cartagena flight)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$100–180/day",
      days: [
        {
          day: "Day 1–2",
          title: "Bogotá with a Cultural Guide",
          items: [
            "Stay in a boutique hotel in Chapinero or Zona Rosa ($60–100/night) — better located than La Candelaria for safety and restaurant access. Check in, take the afternoon gently for altitude acclimatisation.",
            "Day 1 — Private Bogotá cultural tour with a local historian guide ($50–80/person, 4–5 hours). La Candelaria, the Gold Museum with expert context on the El Dorado myth, the street art of the Comunas, and a coffee tasting at a specialty roaster (Café Cultor or Azahar Coffee) covering Colombia's six coffee-growing regions.",
            "Day 1 evening — Dinner at Leo (Calle 27B, Bogotá's flagship fine dining restaurant with a focus on Amazonian ingredients and Colombian biodiversity). $30–50 per person. Or Criterion (Zona Rosa, French-Colombian fusion, $25–40/person).",
            "Day 2 — Monserrate at dawn (cable car COP 28,000) before the morning cloud; Museo Nacional (free, comprehensive Colombian history from pre-Columbian to modern); afternoon coffee tour of the specialty roasting scene in Quinta Camacho neighbourhood.",
            "Day 2 evening — Usaquén neighbourhood: the Sunday antiques market or a Friday night dinner on the plaza. Restaurants on the cobblestoned streets offer some of the best dining in Bogotá — Ocio or Harry Sasson for $25–40/person.",
          ],
          cost: "$100–160 total (both days)",
        },
        {
          day: "Day 3–4",
          title: "Medellín: Urban Innovation & Fine Food",
          items: [
            "Fly or bus to Medellín. Stay in El Poblado boutique hotel ($60–100/night). The neighbourhood has excellent mid-range restaurants, a safe and walkable layout, and is 20 minutes from all major sites.",
            "Day 3 — Urban Innovation tour: the Medellín metro system (one of the only metro systems in Colombia, opened 1995 as part of the city's transformation plan), the Biblioteca España (the famous 'black rock' library in Comunas 13, which was the epicentre of the most violent neighbourhood in the 1990s), the Parques del Río urban renewal project. Book with a specialist social enterprise tour operator ($30–50/person).",
            "Comunas 13 street art tour ($15–25 per person, 2 hours): the comunas that were once controlled by paramilitaries are now famous for an extraordinary outdoor mural scene. Local guides from the community tell stories of the transformation firsthand.",
            "Day 3 evening — Dinner at Carmen (El Poblado, modern Colombian cuisine with Caribbean and Andean influences, $25–40/person) or El Cielo (progressive Colombian tasting menu, $40–60/person, book ahead).",
            "Day 4 — Finca visit: a half-day tour to a coffee or flower farm in the Medellín foothills ($40–60 including transport and tasting). Seeing coffee processing from cherry to cup, with a cupping session, is one of the best experiences in Colombia for food-focused travelers.",
          ],
          cost: "$100–170 total (both days)",
        },
        {
          day: "Day 5–7",
          title: "Cartagena Walled City, Luxury & Islands",
          items: [
            "Fly to Cartagena. Stay in a boutique hotel inside the walled city ($100–200/night) — the colonial buildings converted into small hotels (Casa San Agustín, Bastión Luxury, Hotel Agua) are architecturally exceptional and centrally positioned.",
            "Day 5 — Walled city deep exploration: Castillo San Felipe early morning, then a 2-hour colonial history walking tour with a local guide ($20–30/person) covering the slave trade history, the Spanish colonial power structure, and the stories behind the individual buildings. Afternoon: spa or rooftop pool at your hotel.",
            "Day 5 evening — Sunset on the walls with a cocktail from one of the wall-side bars. Dinner at La Vitrola (classic Cartagena institution, live Cuban music, seafood, $25–35/person) or El Santísimo (contemporary Caribbean cuisine in a 17th-century building, $30–45/person).",
            "Day 6 — Private Rosario Islands trip ($80–120/person for private boat hire): faster than the shared trips, stop at the best snorkelling sites, have lunch on a private island. The coral reef system is genuinely spectacular — Caribbean blue, parrotfish, sea turtles.",
            "Day 6 evening — Getsemaní neighbourhood: hire a guide from the neighbourhood cooperative ($10–15 per person) for a 2-hour street art and history tour that covers the gentrification tension as well as the murals. Then dinner at Demente (contemporary Colombian, Getsemaní, $20–30/person).",
            "Day 7 — Morning at leisure: final walk on the walls at sunrise (6am — tourists arrive from 10am, it is yours at 6am). Coffee and arepas at a corner café. Afternoon departure.",
          ],
          cost: "$130–200 total (three days)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$300–800+/day",
      days: [
        {
          day: "Day 1–2",
          title: "Bogotá Private & Cultural Immersion",
          items: [
            "Stay at the Casa Medina (historic boutique hotel, Zona Rosa, $200–400/night) or W Bogotá ($200–350/night). Private transfer from El Dorado airport.",
            "Day 1 — Private Egyptologist-equivalent: a Colombian cultural historian for a full day ($150–250) covering the Gold Museum in depth, the Botero Museum (Botero donated his entire collection to the Colombian state — 208 works, free to public), La Candelaria architecture, and a private cupping session at a single-origin specialty coffee roaster.",
            "Day 1 evening — Dinner at Leo ($60–80/person tasting menu) — Colombia's only female chef on Latin America's 50 Best Restaurants. The Amazonian ingredients are extraordinary: ants, Amazon river fish, native peppers, fermented jungle fruits. A genuinely unique culinary experience.",
            "Day 2 — Private Monserrate visit at dawn before opening for a photography session with a local photographer ($100–200 including guide). Followed by a private helicopter tour of the Bogotá savanna and Andean peaks ($400–600 for the flight). Afternoon: private shopping at Artesanías de Colombia (the government artisan enterprise) for premium Colombian crafts — emeralds, leather, Wayuu bags, hammered copper.",
          ],
          cost: "$500–900 total (both days, excl. hotel)",
        },
        {
          day: "Day 3–4",
          title: "Medellín Design Hotel & Private Social Tours",
          items: [
            "Private plane or business class to Medellín. Stay at the Charlee Lifestyle Hotel (El Poblado, rooftop pool with city views, $200–400/night) or Casa Dann Carlton ($150–300/night).",
            "Day 3 — Private architectural tour of Medellín's urban transformation: the metro system, the cable car infrastructure, the architectural design of the communal spaces with an urban planner guide ($100–200, 5 hours). This is the most intellectually rigorous version of the transformation story — understanding the policy and design behind how a city reinvents itself.",
            "Day 3 evening — Private cooking class at the chef's home restaurant ($100–150 per person including dinner) covering arepas, bandeja paisa, sancocho, and Colombian cocktails with aguardiente and lulo fruit.",
            "Day 4 — Private Comunas 13 immersive tour with community arts cooperative leaders ($50–80/person) — understand the transformation from the inside, meet the mural artists, visit the community library and music school. Then: day trip to Guatapé ($60–100 private transfer) — the El Peñol rock (740 steps to the summit, panoramic view over the reservoir lakes) and the colourful zócalos (painted facades) of Guatapé town.",
          ],
          cost: "$500–800 total (both days, excl. hotel)",
        },
        {
          day: "Day 5–7",
          title: "Cartagena — Walled City in Style",
          items: [
            "Private flight or business class to Cartagena. Stay at Casa San Agustín ($400–700/night) or Hotel Casa de Las Palmas ($300–500/night) — both are converted colonial mansions inside the walled city with private pools and butler service.",
            "Day 5 — Private colonial history tour with a specialist in Caribbean history ($100–200, 3 hours), followed by a private cooking class at a top Cartagena chef's kitchen ($150–200/person) — Caribbean coast Colombian cuisine: ceviche, coconut rice, pargo rojo (red snapper), ají amarillo desserts.",
            "Day 5 evening — Rooftop dinner at Alma restaurant (Hotel Casa San Agustín, Caribbean modern cuisine, $50–80/person) watching the sun set over the Spanish colonial towers.",
            "Day 6 — Private catamaran to the Rosario Islands ($200–400 for a private half-day charter) with a marine biologist guide, snorkelling over the best coral sections, lunch on a private island beach. Return via the Bocachica fort for a sunset gin and tonic on deck.",
            "Day 6 evening — Private salsa lesson and then a night at one of Cartagena's rooftop clubs (Café del Mar, Alquímico cocktail bar — one of Latin America's 50 Best Bars). Alquímico is a converted colonial building with a ground-floor bar, mezzanine lounge, and rooftop; arguably the best bar in Colombia.",
            "Day 7 — Sunrise walk on the empty walls (6am). Breakfast at the hotel. Private transfer to CTG airport. Depart.",
          ],
          cost: "$600–1,200 total (three days, excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "$10–22", food: "$8–18", transport: "$5–12", activities: "$8–18", total: "$35–65/day" },
    { tier: "✨ Mid-Range", accommodation: "$60–100", food: "$20–40", transport: "$15–25", activities: "$20–40", total: "$100–180/day" },
    { tier: "💎 Luxury", accommodation: "$200–600", food: "$60–150", transport: "$40–100", activities: "$80–200", total: "$300–800+/day" },
  ],
  mistakes: [
    {
      icon: "🚕",
      title: "Taking Unregistered Street Taxis",
      desc: "Street taxis hailed in Bogotá and Medellín have been associated with 'paseo millonario' (millionaire's ride) — where drivers and accomplices force passengers to ATMs. Always use Uber, Cabify, InDriver, or have your hotel or restaurant call a registered taxi for you. This is the single most important safety rule in Colombian cities. In Cartagena, taxis are safer but still negotiate prices before entering.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "⛰️",
      title: "Underestimating Bogotá's Altitude",
      desc: "Bogotá is at 2,600m — higher than most European ski resorts. If arriving from sea level, expect headaches, shortness of breath, and fatigue for the first 24–48 hours. Do not drink alcohol on arrival day. Hydrate aggressively. Walk slowly. Coca tea (available everywhere, legal in Colombia) genuinely helps. Don't plan your most physically demanding activities on Day 1.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🏙️",
      title: "Only Staying in El Poblado, Medellín",
      desc: "El Poblado is safe, comfortable, and full of good restaurants — it is also overwhelmingly expat and tourist, and gives you very little sense of the real Medellín. Spend time in Laureles (authentic local neighbourhood), El Centro (the real commercial city), and the Comunas via the cable car. These areas are safe with standard precautions and entirely different from El Poblado's bubble.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🏖️",
      title: "Swimming at Cartagena City Beaches Instead of the Islands",
      desc: "Bocagrande and the Cartagena city beaches are heavily developed, polluted from the port and city runoff, and crowded with vendors. They are not swimming beaches. The Rosario Islands, 45 minutes by speedboat, have clear blue Caribbean water, coral reefs, and actual swimming conditions. Budget $30–50 for the trip — it is not optional if you want a Caribbean beach experience.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🚡",
      title: "Medellín MetroCable for City Views — COP 4,700",
      desc: "The MetroCable system connecting the hillside comunas to the metro costs COP 4,700 (about $1.20) and provides 20-minute cable car rides over densely packed hillside neighbourhoods with spectacular views of the entire Medellín valley. It is both the cheapest and most panoramic activity in the city — and it is genuine urban infrastructure, not a tourist cable car. Take Line K towards Acevedo and then the extension to Parque Arví.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🌅",
      title: "Cartagena Walled City at Sunrise — Before the Tourists Arrive",
      desc: "The walled city is empty before 8am. Tour groups, day-trippers from cruise ships, and hotels check out all between 9am and 11am. At 6–7am, the ochre colonial streets are lit by horizontal sunrise light, street vendors are setting up, and local residents are walking to work. The most beautiful photographs of Cartagena are taken before 8am. The most peaceful experience of the city exists before 9am.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🏆",
      title: "The Gold Museum, Bogotá — Profoundly Underrated",
      desc: "The Museo del Oro in Bogotá is one of the most important museums in the world, costs the equivalent of $1, and is visited by a fraction of the tourists who queue 90 minutes for a selfie at Machu Picchu. The 55,000 gold pieces include the Muisca raft ceremony that created the El Dorado legend — a miniature gold figurine of a chief covered in gold dust performing a ritual — and the darkened Sala Dorada where 8,000 gold pieces are revealed in a light show. Allocate 3 hours.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🦶",
      title: "Free Walking Tours in Every City — The Best Introduction",
      desc: "Real City Tours operates excellent free walking tours in Bogotá, Medellín, and Cartagena (3–4 hours, tip-based, COP 20,000–40,000 suggested). These run every morning and are led by local English-speaking guides who provide context you will not find in a guidebook. Do these on your first morning in each city — they orient you geographically, introduce the history, and give you restaurant and neighbourhood recommendations from someone who actually lives there.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "Is Colombia safe for tourists in 2026?",
      a: "Colombia has transformed dramatically. Bogotá, Medellín, and Cartagena are all considered safe for tourists with standard urban precautions — the same precautions you would use in any major Latin American city. Use Uber or app-based taxis exclusively, avoid displaying expensive jewellery and phones, stay in recommended neighbourhoods, and take guided tours to the comunas rather than wandering independently. The coca-growing regions, the Pacific coast outside of specific tourist areas, and the Venezuelan border regions have different advisories — stick to the main tourism circuit for a first visit.",
    },
    {
      q: "Do Indian citizens need a visa for Colombia?",
      a: "Yes. Indian passport holders require a pre-travel e-Visa for Colombia. Apply online at migrationcolombia.gov.co at least 10–15 days before travel. Cost: approximately $20 USD. The visa allows a 90-day stay for tourism. The application is straightforward and fully online. Western passport holders (USA, UK, Canada, EU, Australia) enter visa-free for 90 days.",
    },
    {
      q: "Is Pablo Escobar tourism in Medellín ethical?",
      a: "This is a genuine and active debate in Medellín. The city's residents — especially in the comunas most affected by the cartel violence — have mixed feelings about Escobar being a tourist attraction. The best operators centre tours on victims' testimonies, the city's transformation, and the broader political context rather than glamorising the cartel. Avoid any tour that glorifies Escobar. The contrast between the violence of the 1990s and the city's current innovation is a genuinely important story — told properly, it is among the most educational things you can do in Colombia.",
    },
    {
      q: "Where is the best Colombian coffee experience?",
      a: "Colombia grows more varieties of specialty coffee than almost anywhere on earth — Huila, Nariño, Antioquia, and the Eje Cafetero are the main regions. In cities: specialty coffee shops in Bogotá's Quinta Camacho and Chapinero, Café Velvet in Medellín, and Café de la Oficina in Cartagena. For a coffee farm visit: day trips from Medellín to Guatapé-area fincas, or a detour to the Eje Cafetero (Coffee Region) adding 2–3 days. The Eje Cafetero — Salento, Filandia, the Cocora Valley with its wax palms — is often rated the most beautiful part of Colombia.",
    },
    {
      q: "How bad is the altitude sickness in Bogotá?",
      a: "Bogotá at 2,600m is high enough to cause mild altitude symptoms in most travellers arriving from sea level: headaches (most common), fatigue, shortness of breath, and poor sleep. Symptoms typically peak in the first 24–36 hours and resolve by day 2–3. Do not drink alcohol on arrival day, hydrate aggressively, and plan easy activities for Day 1. Coca tea (available in every café and hotel in Bogotá) genuinely helps and is legal. If symptoms are severe or persist beyond 48 hours, descend to a lower altitude or consult a doctor.",
    },
    {
      q: "Cartagena vs. Santa Marta — which is the better Caribbean base?",
      a: "Both are excellent but different. Cartagena is the most beautiful colonial city in South America — architecture, culture, history, and nightlife make it the obvious first choice. Santa Marta is more laid-back, gives access to Tayrona National Park (one of South America's most spectacular beach parks, jungle-backed Caribbean coves), and is the jumping-off point for the Ciudad Perdida (Lost City) trek. If you have 7+ days in Colombia, do Cartagena first (3 nights) and add Santa Marta and Tayrona (2–3 nights) as an extension. They are 5 hours apart by bus or 1 hour by flight.",
    },
  ],
  combineWith: ["buenos-aires-5-days", "peru-machu-picchu-7-days", "rio-de-janeiro-5-days"],
  relatedSlugs: ["buenos-aires-5-days", "peru-machu-picchu-7-days", "rio-de-janeiro-5-days", "miami-4-days"],
  galleryQuery: "cartagena colombia bogota medellin walled city caribbean colonial",
};

export const metadata: Metadata = {
  title: "Colombia in 7 Days: Bogotá, Medellín, Cartagena & the Caribbean Coast (2026)",
  description: "Complete 7-day Colombia itinerary covering Bogotá's Gold Museum, Medellín's urban transformation, and Cartagena's UNESCO walled city — with safety tips, real COP costs, and visa info for Indian travelers.",
  keywords: ["colombia itinerary 7 days", "colombia travel guide 2026", "cartagena walled city", "medellin travel", "bogota gold museum", "colombia budget travel", "india visa colombia"],
  openGraph: {
    title: "Colombia in 7 Days: Bogotá, Medellín & Cartagena (2026)",
    description: "From Bogotá's Gold Museum to Medellín's cable car comunas to Cartagena's Caribbean sunsets — 7-day Colombia guide with real costs and the safety truth.",
    images: [{ url: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=1200&q=80", width: 1200, height: 630, alt: "Cartagena walled city Colombia Caribbean coast at sunset" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Colombia in 7 Days (2026)", description: "Bogotá, Medellín, Cartagena — complete guide with safety tips and real costs." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/colombia-7-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Colombia in 7 Days: Bogotá, Medellín, Cartagena & the Caribbean Coast (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=1200&q=80",
      description: "7-day Colombia itinerary covering Bogotá, Medellín, and Cartagena with safety advice, real costs, and cultural context.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Colombia 7 Days", item: "https://www.incredibleitinerary.com/blog/colombia-7-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Colombia",
      description: "South America's most transformed travel destination — home to pre-Columbian gold, colonial Caribbean cities, urban innovation in Medellín, and some of the world's finest coffee.",
      touristType: ["Cultural tourists", "History enthusiasts", "Food lovers", "Adventure travelers"],
      geo: { "@type": "GeoCoordinates", latitude: 4.5709, longitude: -74.2973 },
    },
  ],
};

export default function ColombiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
