import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Mendoza",
  country: "Argentina",
  countryFlag: "🇦🇷",
  slug: "mendoza-argentina-4-days",
  heroQuery: "mendoza argentina malbec vineyard andes aconcagua",
  heroAlt: "Mendoza Argentina Malbec vineyards with Aconcagua and the Andes mountains in the background",
  category: "South America",
  date: "April 5, 2026",
  readTime: "13 min read",
  intro:
    "Mendoza is the wine capital of the southern hemisphere — 1,800 bodegas producing Malbec in the shadow of Aconcagua, the highest peak outside the Himalayas. But it is not just about the wine. The bike-and-wine tours through Lujan de Cuyo are one of the great travel experiences on earth, the asado culture here reaches a religious intensity, and the olive oil estates of Clos de los Siete produce oils that beat Tuscany in global competitions. Four days lets you taste the full altitude spectrum of Argentine wine, watch gaucho horsemanship, and sit under a pergola of vines eating the best beef you have ever encountered.",
  stats: { duration: "4 Days", budgetFrom: "$45", bestMonths: "Mar–May (harvest) or Sep–Nov", airport: "MDZ" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Mendoza City & Lujan de Cuyo" },
    { id: "day2", emoji: "📅", label: "Day 2 — Bike and Wine Tour" },
    { id: "day3", emoji: "📅", label: "Day 3 — Clos de los Siete & Asado" },
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
        ["Fee", "Approx. $50–80 USD (reciprocity-style fee may apply)"],
        ["Validity", "Up to 90 days stay, 10-year multiple entry"],
        ["Apply at", "Argentine Embassy or consulate"],
        ["Documents", "Return flight, hotel bookings, bank statements, proof of funds"],
        ["Notes", "Argentina has liberalised visa policy since 2024. Confirm current requirements at Argentine consulate 6–8 weeks before travel."],
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
        ["Fee", "Free (reciprocity fees abolished)"],
        ["Stay Allowed", "Up to 90 days on arrival, extendable"],
        ["Passport", "Must be valid throughout stay"],
        ["Entry Card", "Migration card issued on arrival — keep it safe for exit"],
        ["Notes", "Argentine immigration is generally straightforward. Declare all cash over $10,000 USD."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "$45–65/day",
      days: [
        {
          day: "Day 1",
          title: "Mendoza City & First Bodega Walk",
          items: [
            "13:00 — Check in to a hostel in central Mendoza or Godoy Cruz ($12–20 dorm) — Mendoza city centre has good budget accommodation; the tree-lined Sarmiento pedestrian zone and Plaza Independencia are your base",
            "15:00 — Walk Plaza Independencia and the surrounding plazas — Mendoza was rebuilt after an 1861 earthquake and designed with four smaller plazas around the main one; the tree-lined streets and outdoor cafes are excellent for orientation",
            "16:30 — Mercado Central for empanadas and local wine — the market on Av. Las Heras has a wine section where you can taste 3 local Malbecs for $3–5 total; the empanada stalls sell Mendocino-style baked versions with distinctive flavouring",
            "18:30 — Sunset walk along Parque General San Martin — a 320-hectare park at the edge of the city with Andes views; the rose garden and lake are popular with locals on weekend evenings; completely free",
            "20:00 — Asado dinner at a neighbourhood parrilla — Argentina's parillas do a standard parrillada mixta (mixed grill) for $10–15 including sausage, ribs, and flank steak; order a house Malbec carafe for $4–6",
          ],
          cost: "$30–40 (food, wine tasting, dinner)",
        },
        {
          day: "Day 2",
          title: "Bike and Wine Tour — Lujan de Cuyo",
          items: [
            "09:00 — Rent a bike from a Mendoza hostel or bike shop ($10/day) and cycle to Lujan de Cuyo via the vineyard road — a 25km route through low-altitude vineyards; flat terrain, safe cycle paths, and spectacular Andes backdrop",
            "10:30 — Bodega Ruca Malen free walk-in tasting ($8–12 for 3 wines) — one of the most visitor-friendly budget bodegas in Lujan de Cuyo; the Malbec Reserve is outstanding and the cellar is beautiful",
            "12:30 — Lunch at a local almacen (general store-restaurant) in Lujan de Cuyo — milanesa napolitana (breaded beef with tomato and cheese) or locro stew for $6–8; these spots are for locals, not tourists",
            "14:30 — Bodega Achaval Ferrer tasting ($15 for 4 wines) — the Finca Altamira Malbec is considered one of Argentina's finest wines; even the entry-level pour demonstrates why Mendoza Malbec differs from French Cahors",
            "17:00 — Cycle back to Mendoza; evening of wine, cheese, and cold cuts from a Mendoza deli ($8 for a generous board)",
          ],
          cost: "$40–55 (bike, bodega tastings, lunch, dinner)",
        },
        {
          day: "Day 3",
          title: "Clos de los Siete & Olive Oil Tour",
          items: [
            "09:30 — Remise (private taxi) to Valle de Uco ($20 each way or shared minibus tour $25 including guide) — Valle de Uco at 1,000–1,200m altitude produces Mendoza's most elegant high-altitude Malbecs and Cabernets",
            "11:00 — Clos de los Siete estate walk — an extraordinary 850-hectare French wine project by Michel Rolland; seven chateaux share a single terroir; the panoramic view of the estates against the snow-capped Andes is genuinely spectacular; tastings from $15",
            "13:30 — Finca Decero or Zuccardi Valle de Uco wine lunch ($20–30 including food) — Zuccardi is a James Suckling 100-point winery; even the budget lunch pairing features wines rarely available outside Argentina",
            "16:30 — Olive oil estate at Laur Olivos ($10 tasting) — Mendoza produces internationally prizewinning olive oils from high-altitude groves; the compound extra virgin with fresh bread is excellent",
            "19:30 — Return to Mendoza; final budget asado at a central parrilla ($12–15)",
          ],
          cost: "$50–65 (transport, winery tastings, lunch, olive oil, dinner)",
        },
        {
          day: "Day 4",
          title: "Aconcagua Viewpoint & Departure",
          items: [
            "08:00 — Breakfast at a Mendoza corner cafe — medialunas (Argentine croissants) and cortado for $3; the medialunas in Mendoza are famously good",
            "09:30 — Day trip to Uspallata and Aconcagua viewpoint by local bus ($5 each way, 2 hours) or remise ($40 return) — Ruta 7 through the pre-Andean gorge passes the Villavicencio natural park before climbing to views of Aconcagua at 6,961m",
            "12:30 — Lunch at Uspallata village — simple restaurant fare; locro or empanadas in a mountain village for $6–8",
            "15:00 — Return bus to Mendoza; afternoon at Parque San Martin",
            "18:00 — Transfer to El Plumerillo Airport (MDZ) — 15 minutes by remise from centre ($8–10)",
          ],
          cost: "$30–40 (breakfast, bus, lunch, airport transfer)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "$120–170/day",
      days: [
        {
          day: "Day 1",
          title: "Mendoza Wine Hotel Arrival & City Food Tour",
          items: [
            "13:00 — Check in to a boutique hotel or wine hotel in central Mendoza or Chacras de Coria ($80–120/night) — wine hotel properties like The Vines Resort & Spa have spectacular Andes views from rooms; Chacras de Coria is a wine village 15 minutes from the city centre",
            "15:30 — Guided Mendoza food and wine walking tour ($40, 3 hours) — visits the Mercado Central, a wine bar, an empanada bakery, and a dulce de leche shop; guides explain the regional varietals and Cuyo cuisine",
            "19:00 — Pisco sour (Chilean) vs. fernet con Coca (Argentine) aperitivo debate at a Mendoza wine bar — Argentines drink 75% of the world's fernet; Mendoza bars serve both with olives and peanuts",
            "20:30 — Dinner at Francesco ($30/pp) in central Mendoza — Italian-Argentine fusion; the hand-made pasta with Bolognese ragu and the tiramisu are outstanding; order the Zuccardi Serie A Malbec",
          ],
          cost: "$140–170 (hotel, food tour, dinner, wine bar)",
        },
        {
          day: "Day 2",
          title: "Private Bike and Wine Tour — Lujan de Cuyo Bodegas",
          items: [
            "09:00 — Guided bike and wine tour of Lujan de Cuyo ($55, full day including bikes, guide, and tastings) — the best organised bike wine tour in Mendoza; visits 3 bodegas with paired wine and cheese at each",
            "11:00 — Bodega Carmelo Patti tasting (included in tour) — a legendary boutique winery run by a single winemaker producing 15,000 bottles per year; the Gran Assemblage Cabernet is considered Argentina's finest",
            "13:00 — Asado lunch at a vineyard ($25–35 included in tour) — fire-cooked provoleta, chorizo, and bondiola under a vine pergola with Andes views; the quintessential Mendoza experience",
            "16:00 — Bodega Clos de Chacras visit and vertical tasting ($20 self-directed after bike tour) — high-quality small bodega with exceptional Malbec Reserva",
            "20:00 — Dinner at Siete Cocinas ($35/pp) — a restaurant celebrating the seven Argentine regional cuisines; the Cuyo region tasting plate and the Patagonian lamb are outstanding",
          ],
          cost: "$130–160 (bike tour, bodega visits, dinner)",
        },
        {
          day: "Day 3",
          title: "Valle de Uco High-Altitude Wine Day",
          items: [
            "09:00 — Private minibus transfer to Valle de Uco ($40 each way or $60 guided day tour) — the high-altitude valley is 100km south of Mendoza; the drive up to 1,200m altitude passes through Andean scrubland with Aconcagua visible to the north",
            "11:00 — Zuccardi Valle de Uco winery ($30 for guided tour and tasting) — four-time consecutive winner of Best Winery in the World at The Drinks Business Global Masters; the modern winery architecture by Tom Hughes is extraordinary",
            "13:00 — Lunch at Zuccardi's Pan y Oliva restaurant ($30–40/pp) — wood-fired bread, Mendoza olive oils, charcuterie, and pairing with their single-vineyard Malbecs; a superb wine-country lunch",
            "16:00 — Clos de los Siete estate visit ($20) — Michel Rolland's seven-chateau project; the evening light across the low vines with the Andes silhouette is one of South America's most spectacular wine views",
            "19:30 — Return to Mendoza hotel; farewell wine at hotel bar",
          ],
          cost: "$140–170 (transport, Zuccardi tour, lunch, Clos de los Siete)",
        },
        {
          day: "Day 4",
          title: "Aconcagua Provincial Park & Departure",
          items: [
            "08:00 — Guided half-day Aconcagua hike tour ($60 including transport and park entry) — the tour drives to Horcones viewpoint inside Aconcagua Provincial Park at 2,800m; on clear days the summit at 6,961m is visible; condors regularly circle overhead",
            "13:00 — Return to Mendoza; farewell lunch at a Mendoza wine restaurant ($20/pp) — order the Mendocino lamb stew with Valle de Uco Cabernet Franc",
            "15:30 — Shopping for Argentine wine to take home — DHL or FedEx at Mendoza airport ship wine internationally for $30–60; or buy padded wine carriers from airport shops",
            "17:00 — Uber or remise to MDZ airport ($15); allow 2 hours before international flight",
          ],
          cost: "$100–130 (Aconcagua tour, lunch, wine shopping, airport transfer)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "$450–800/day",
      days: [
        {
          day: "Day 1",
          title: "The Vines Resort Arrival & Private Bodega Experience",
          items: [
            "12:00 — Check in to The Vines Resort & Spa in Lujan de Cuyo ($500–700/night) — each villa has its own vineyard plot; guests can blend their personal wine during their stay; the Andes views from the infinity pool are extraordinary",
            "14:30 — Private helicopter tour over Lujan de Cuyo bodegas and Aconcagua ($450, 45 minutes) — the scale of the wine region from the air, with 1,800 bodegas spread across the Andes foothills, is breathtaking",
            "17:30 — Private master class with the resort sommelier ($150, 2 hours) — blind tasting of 12 premium Argentine Malbecs from different altitudes; the contrast between 600m and 1,400m fruit is extraordinary",
            "21:00 — Dinner at La Bourgogne Mendoza ($120/pp) — French-Argentine fine dining in a beautiful estate dining room; the venison with native berries and the Achaval Ferrer Malbec pairing is exceptional",
          ],
          cost: "$900–1200 (resort, helicopter, masterclass, La Bourgogne)",
        },
        {
          day: "Day 2",
          title: "Private Bodegas & Gaucho Day",
          items: [
            "09:00 — Private bodega tour of Carmelo Patti, Achaval Ferrer, and Catena Zapata ($250, private guide and vehicle, includes tastings) — the Catena Zapata pyramid winery designed by architect Cesar Pelli is one of the most spectacular winery buildings on earth",
            "13:00 — Asado lunch at a private estancia ($80/pp) — a traditional Argentine gaucho ranch lunch with a live asado display by a parrillero; provoleta, empanadas, tira de asado, and multiple Malbecs; the full Argentine beef ceremony",
            "16:00 — Gaucho horsemanship demonstration and riding ($120, 2 hours) — a private estancia near Lujan de Cuyo offers a 2-hour private riding lesson with a certified gaucho instructor through vineyard rows",
            "20:00 — Private dinner at Zuccardi Valle de Uco ($200/pp with chef's table and wine pairing) — Zuccardi's chef's table seats only 8; the terroir dinner uses ingredients grown on the estate with their own olive oil, herbs, and vegetables",
          ],
          cost: "$800–1000 (private bodega tour, estancia lunch, riding, Zuccardi chef's table)",
        },
        {
          day: "Day 3",
          title: "Clos de los Siete & Olive Oil Excellence",
          items: [
            "09:00 — Private vehicle to Valle de Uco ($80 each way, resort-arranged) — depart early to catch the morning light on the vineyards before the valley heats up",
            "10:00 — Clos de los Siete private estate experience ($150) — access to all seven chateaux with a private guide; includes a horizontal tasting comparing the seven wines from the same vintage grown on the same terroir; a world-class wine education",
            "13:00 — Lunch at Siete restaurant at Clos de los Siete ($60/pp) — the estate restaurant uses vegetables from the garden and serves Provencal-Argentinian cuisine that reflects the French founders; the Malbec and lamb pairing is perfect",
            "16:00 — Laur Olivos premium olive oil tasting and private mill tour ($50) — a specialist agronomist explains the altitude advantage of Mendoza olive oil production and guides a tasting of 8 single-variety oils against the Andes backdrop",
            "20:00 — Resort spa treatment ($150, 90 minutes) with Malbec grape seed body wrap; then dinner at The Vines resort restaurant ($80/pp)",
          ],
          cost: "$650–900 (transport, Clos de los Siete, lunch, olive oil, spa, dinner)",
        },
        {
          day: "Day 4",
          title: "Personal Blend Completion & Private Departure",
          items: [
            "09:00 — Complete your personal wine blend at The Vines winery ($200 experience, 12 bottles of your blend included) — the resort's enologist guides guests through a final blending session; bottles are labelled with your name and can be shipped home",
            "12:00 — Farewell champagne brunch at the resort terrace ($50/pp included with butler service) — the full Argentine spread: medialunas, smoked cheeses, Patagonian salmon, and dulce de leche tarts with a sparkling Chandon Brut from Lujan de Cuyo",
            "14:00 — Private helicopter transfer to MDZ airport ($300) — arrive in style; baggage handling and lounge access arranged by the resort concierge",
            "16:00 — International departure from Mendoza El Plumerillo Airport with bottles of your personal blend checked through to your home country",
          ],
          cost: "$600–900 (personal blend, brunch, helicopter transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$12–20 (hostel dorm central Mendoza)",
      food: "$15–22 (parrillas + markets + empanadas)",
      transport: "$5–15 (local bus + remise)",
      activities: "$15–25 (bodega tastings + bike rental)",
      total: "$45–65/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$80–120 (boutique hotel or wine hotel)",
      food: "$40–65 (restaurants + winery lunch)",
      transport: "$20–50 (remise + guided tours)",
      activities: "$30–60 (private bodega visits + Aconcagua tour)",
      total: "$120–170/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$500–700 (The Vines Resort or Cavas Wine Lodge)",
      food: "$150–300 (chef's table + fine dining + estancia asado)",
      transport: "$80–450 (private vehicle + helicopter)",
      activities: "$200–500 (private bodega tours + gaucho experience + personal blend)",
      total: "$450–800/day",
    },
    {
      tier: "🍷 Wine-Only Day",
      accommodation: "$0 (day trips from existing hotel)",
      food: "$20–60 (winery restaurant lunch)",
      transport: "$15–80 (remise to Lujan de Cuyo or Valle de Uco)",
      activities: "$20–150 (bodega tastings + tours)",
      total: "$55–290 for a full wine day",
    },
    {
      tier: "🏔️ Aconcagua Day",
      accommodation: "$0 (day trip from Mendoza hotel)",
      food: "$8–20 (Uspallata lunch)",
      transport: "$10–60 (local bus or guided tour return)",
      activities: "$10–60 (park entry + guide)",
      total: "$28–140 for Aconcagua day trip",
    },
  ],
  mistakes: [
    {
      icon: "🥃",
      title: "Drinking Argentine Malbec without understanding altitude",
      desc: "Lujan de Cuyo at 900m and Valle de Uco at 1,200m produce dramatically different wines from the same grape. Budget drinkers taste only the Lujan wines; the real revelation is a Valle de Uco comparison tasting. Always ask a bodega for an altitude comparison tasting.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "💱",
      title: "Using official bank exchange rates in Argentina",
      desc: "Argentina has multiple exchange rates and the official rate is often 30–50% below the informal rate. As of 2026, the exchange rate situation has stabilised under economic reforms, but always check the current blue dollar or official rate before converting significant sums. Use licensed cambios in Mendoza city centre for the best legal rates.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🚲",
      title: "Attempting the bike tour without booking in advance",
      desc: "The organised bike and wine tours to Lujan de Cuyo fill up weeks in advance during March harvest season and October-November spring. Book through GetYourGuide or directly with Ampora Wine Tours or Mr Hugo at least 2 weeks ahead. Self-guided cycling is possible but guided tours visit bodegas not open to walk-ins.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🌡️",
      title: "Visiting in January or February without altitude sunscreen",
      desc: "Mendoza at 800m in the Andean summer gets intense UV radiation even on mild days. The combination of altitude, dry air, and Andean reflection means UV burns happen even when temperatures feel comfortable. SPF 50 is essential; even locals apply it religiously.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🍽️",
      title: "Expecting dinner before 9pm",
      desc: "Mendoza runs on Argentine time. Restaurants that open at 8pm are empty until 9:30pm; peak dinner is 10pm to midnight. Tourist restaurants will seat you at 7pm but the ambience is absent. Embrace the late dinner culture — have a longer wine tasting session in the evening and eat late like a Mendocino.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  tips: [
    {
      icon: "🍇",
      title: "Visit during the March harvest festival (Vendimia)",
      desc: "The Fiesta Nacional de la Vendimia in early March is Mendoza's greatest celebration — grape queens, folklore dancing, and harvest tastings across the entire region. Hotel rates double so book 3–6 months ahead. Book harvest experiences and bodega tours via https://www.getyourguide.com/s/?q=Mendoza+wine+tour&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🥩",
      title: "Order your steak at punto or jugoso, not bien cocido",
      desc: "Argentine beef is exceptional but loses its character when overcooked. Punto (medium) keeps the flavour; jugoso (medium-rare to rare) is how Argentines actually eat it. Bien cocido (well-done) is a travesty the parillero will perform silently but reluctantly. Mendoza beef is Angus-cross, dry-aged, and extraordinary.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🏨",
      title: "Stay in Chacras de Coria for a vineyard-village atmosphere",
      desc: "Chacras de Coria is a 15-minute remise from central Mendoza and feels like a Provencal wine village. Boutique hotels and B&Bs here are 30% cheaper than equivalent properties in the city centre and put you walking distance from several bodegas. Book early on Booking.com as properties here are small and fill fast.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🌄",
      title: "Time your Aconcagua viewpoint for morning clarity",
      desc: "The Andes above Mendoza are clearest in the morning before valley heat creates afternoon haze. Leave Mendoza by 8am for Uspallata and the Horcones park entrance. Afternoon drives often find Aconcagua in cloud. The mountain also looks spectacular in winter (June–August) when fully snow-covered and the air is clear.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "How do I get from Mendoza to the bodegas without a car?",
      a: "The best options are the organised bike and wine tours (guided, all transport included, $40–60), remise taxis (private hire cars common in Mendoza, $20–40 for Lujan de Cuyo round trip), or local buses that run to Lujan de Cuyo (Bus 10 from central Mendoza, $0.50, 40 minutes). Do not rent a car if you plan to taste wine — DUI enforcement is strict in Mendoza province. Remises are the safest and most flexible option.",
    },
    {
      q: "Is Mendoza worth visiting without drinking wine?",
      a: "Absolutely. Mendoza has the Aconcagua mountain region for trekking and mountaineering, the thermal spa town of Cacheuta (60km away), excellent olive oil and gourmet food tourism, gaucho culture on the estancias, and the rafting and kayaking on the Mendoza River. The city itself is elegant with tree-lined boulevards and excellent restaurants. Wine is the hero but not the only reason to come.",
    },
    {
      q: "What is the best bodega to visit in Mendoza?",
      a: "For architecture and prestige: Catena Zapata (Mayan-pyramid winery, Lujan de Cuyo). For pure wine quality: Zuccardi Valle de Uco (4x Best Winery in World). For an intimate small-producer experience: Carmelo Patti (one winemaker, 15,000 bottles per year). For a great bike-tour accessible visit: Bodega Ruca Malen (stunning views, visitor-friendly). For the full French wine-estate experience: Clos de los Siete (Valle de Uco, Michel Rolland project).",
    },
    {
      q: "Can I combine Mendoza with Buenos Aires?",
      a: "Mendoza to Buenos Aires is a 1-hour 45-minute Aerolineas Argentinas or LATAM flight ($50–100); or an overnight bus (15 hours, $25–45 in fully reclining cama seats). A classic Argentina itinerary pairs 4 nights in Mendoza wine country with 3–4 nights in Buenos Aires for tango, architecture, and the city's extraordinary steak restaurant scene. Fly Buenos Aires to Mendoza at the start and bus back overnight at the end to save time.",
    },
  ],
  combineWith: ["santiago-chile-4-days", "lima-4-days", "buenos-aires-4-days"],
  relatedSlugs: ["santiago-chile-4-days", "lima-4-days", "buenos-aires-4-days", "patagonia-7-days"],
  galleryQuery: "mendoza argentina malbec vineyard aconcagua bodega",
};

export const metadata: Metadata = {
  title: "Mendoza Argentina in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 4-day Mendoza itinerary — Malbec wine at Lujan de Cuyo bodegas, Aconcagua views, bike-and-wine tours, asado culture, olive oil estates, and Clos de los Siete. Budget $45/day to The Vines Resort luxury.",
  keywords: [
    "Mendoza Argentina itinerary",
    "Mendoza 4 days",
    "Mendoza wine tour",
    "Malbec tasting Mendoza",
    "Lujan de Cuyo bodegas",
    "Aconcagua day trip",
    "Clos de los Siete",
    "Mendoza visa Indian passport",
    "bike wine tour Mendoza",
    "Argentine wine guide 2026",
  ],
  openGraph: {
    title: "Mendoza Argentina in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Malbec at Lujan de Cuyo, Aconcagua views, bike-and-wine tours, asado culture, olive oil estates, and Clos de los Siete — Mendoza in 4 days from $45/day.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/mendoza-argentina-4-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mendoza Argentina in 4 Days: Complete 2026 Itinerary",
    description: "The wine capital of the southern hemisphere in 4 days — Malbec bodegas, Aconcagua, bike tours, asado, and Clos de los Siete.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/mendoza-argentina-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Mendoza Argentina in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Mendoza Argentina in 4 Days",
          item: "https://www.incredibleitinerary.com/blog/mendoza-argentina-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Mendoza",
      description:
        "Mendoza, Argentina — the wine capital of the southern hemisphere, home to 1,800 Malbec bodegas in the shadow of Aconcagua, the highest peak outside Asia, with world-ranked Zuccardi and the extraordinary Clos de los Siete estate.",
      geo: { "@type": "GeoCoordinates", latitude: -32.8908, longitude: -68.8272 },
    },
  ],
};

export default function MendozaPage() {
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
