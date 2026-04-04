import type { Metadata } from "next";
import UniversalBlogClient from "@/components/blog/UniversalBlogClient";
import type { UniversalBlogData } from "@/components/blog/UniversalBlogClient";

/* ── SEO Metadata ───────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Transylvania in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026) | IncredibleItinerary",
  description:
    "Plan the perfect 4-day Transylvania itinerary — Bran Castle, Peleş Castle, Sighişoara, Braşov, and Sibiu. Budget tips, visa info, and day-by-day plans for every budget.",
  keywords: [
    "Transylvania travel guide",
    "Transylvania 4 days itinerary",
    "Bran Castle Dracula Romania",
    "Peles Castle Romania",
    "Brasov travel",
    "Sighisoara medieval citadel",
    "Romania budget travel",
    "Transylvania 2026",
  ],
  openGraph: {
    title: "Transylvania in 4 Days: The Complete Travel Guide (2026)",
    description:
      "Gothic castles, fortified churches, and medieval Saxon towns. Your complete guide to Transylvania — from Bran Castle to Sighişoara — at every budget.",
    url: "https://incredibleitinerary.com/blog/transylvania-4-days",
    siteName: "IncredibleItinerary",
    images: [
      {
        url: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Bran Castle Transylvania Romania medieval fortress mountains Dracula",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transylvania in 4 Days: Complete Guide (2026)",
    description:
      "Day-by-day itinerary for Transylvania — Bran Castle, Peleş, Sighişoara, Braşov. Budget from €40/day.",
    images: ["https://images.unsplash.com/photo-1589998059171-988d887df646?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://incredibleitinerary.com/blog/transylvania-4-days",
  },
};

/* ── JSON-LD Structured Data ────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Transylvania in 4 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "Plan the perfect 4-day Transylvania itinerary covering Bran Castle, Peleş Castle, Sighişoara, Braşov, and Sibiu across all budgets.",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=1200&q=80",
      datePublished: "2026-01-15",
      dateModified: "2026-04-05",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://incredibleitinerary.com/logo.png" },
      },
      mainEntityOfPage: "https://incredibleitinerary.com/blog/transylvania-4-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Transylvania 4 Days",
          item: "https://incredibleitinerary.com/blog/transylvania-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Transylvania",
      description:
        "A region of Gothic castles, fortified churches, and medieval Saxon towns in Romania, home to Bran Castle, Peleş Castle, Sighişoara, Braşov, and Sibiu.",
      url: "https://incredibleitinerary.com/blog/transylvania-4-days",
      touristType: ["History Enthusiasts", "Castle Lovers", "Nature Travellers", "Budget Travellers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 45.6427,
        longitude: 25.5887,
      },
      containedInPlace: {
        "@type": "Country",
        name: "Romania",
      },
    },
  ],
};

/* ── Page Data ──────────────────────────────────────────────────────────── */
const data: UniversalBlogData = {
  destination: "Transylvania",
  country: "Romania",
  countryFlag: "🇷🇴",
  slug: "transylvania-4-days",
  heroQuery: "transylvania romania bran castle dracula mountains medieval",
  heroAlt: "Bran Castle Transylvania Romania medieval fortress mountains Dracula",
  category: "Europe",
  date: "January 15, 2026",
  readTime: "14 min read",

  intro:
    "A region of Gothic castles, fortified churches, and medieval Saxon towns that genuinely inspired Bram Stoker's Dracula — bears roaming the forests outside Braşov, Sighişoara's perfectly preserved medieval citadel where Vlad the Impaler was born, and a country where the landscape is more beautiful than the postcard and costs a quarter of Western Europe. This is Transylvania, Romania's most beautiful region.",

  stats: {
    duration: "4 Days",
    budgetFrom: "€40",
    bestMonths: "May–Sep or Oct–Nov (autumn colours)",
    airport: "CLJ (Cluj-Napoca) or OTP (Bucharest, 170km)",
  },

  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "4-Day Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "highlights", emoji: "🏰", label: "Top Highlights" },
    { id: "getting-there", emoji: "✈️", label: "Getting There" },
    { id: "affiliate", emoji: "🎟️", label: "Book Tours & Activities" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Visa Required", "Schengen visa (Romania)"],
        ["Fee", "€80 application fee"],
        ["Validity", "15–30 day tourist visa"],
        ["Apply At", "Romanian Embassy or VFS Global"],
        ["Processing", "10–15 working days typical"],
        ["Documents", "Bank statements, hotel bookings, return ticket"],
        ["Note", "Romania joined Schengen in 2024 (air/sea); full integration including land borders from 2025"],
      ],
    },
    {
      flag: "🇪🇺",
      title: "Western Passport Holders (US/UK/EU/AU)",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["EU Citizens", "No visa required — freedom of movement"],
        ["US/UK/AU/CA", "Visa-free entry up to 90 days"],
        ["ETIAS (EU)", "ETIAS authorisation required from late 2026 for non-EU"],
        ["Schengen 2024", "Romania joined Schengen air/sea borders in 2024"],
        ["Land Borders", "Full Schengen land border integration in 2025"],
        ["Currency", "Romanian Leu (RON) — not the Euro yet"],
        ["Passport", "Valid for at least 3 months beyond stay"],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "€40/day",
      days: [
        {
          day: "Day 1",
          title: "Braşov Arrival & Old Town",
          items: [
            "Arrive Braşov by train or bus from Bucharest (OTP) or Cluj (CLJ) — budget train tickets from €8",
            "Check into a hostel dorm in the city centre (€10–12/night)",
            "Walk the entire Braşov Old Town for free — Piaţa Sfatului (Council Square) and colourful Saxon houses",
            "Visit the Black Church (Biserica Neagră) — €5 entry, largest Gothic church in Romania",
            "Hike up Tampa Mountain free — 45-minute trail to the Hollywood-style BRAŞOV sign and stunning valley views",
            "Dinner at a local crama (wine cellar restaurant) — mici (grilled sausages), polenta and beer ~€7",
          ],
          cost: "€35–40 including accommodation, food, one paid attraction",
        },
        {
          day: "Day 2",
          title: "Bran Castle & Râşnov Fortress",
          items: [
            "Early bus from Braşov to Bran village — €1.50 each way",
            "Bran Castle (Dracula's Castle) — €15 entry, explore the Gothic towers, secret staircases, and Romanian royal apartments",
            "Walk the village market stalls — handmade wooden crafts and local cheese",
            "Bus to Râşnov — €1.50, visit the hillside Râşnov Fortress (€5), sweeping views across the Transylvanian plain",
            "Return to Braşov by bus — grab a langos (fried dough) from a street stall for €2",
            "Evening walk along the medieval city walls — free",
          ],
          cost: "€30–35 including transport, Bran Castle, Râşnov Fortress",
        },
        {
          day: "Day 3",
          title: "Sighişoara — The Living Medieval Citadel",
          items: [
            "Morning train Braşov to Sighişoara — €6 second-class, 2.5 hrs, spectacular Saxon farmland scenery",
            "Climb the Clock Tower (Turnul cu Ceas) — €5, built 1360, views over the perfectly-preserved citadel",
            "Find Vlad Tepeş's birthplace — the yellow house on the hill, now a restaurant (look, don't pay the tourist prices)",
            "Walk the covered wooden staircase (175 steps) to the hilltop Church on the Hill — €3",
            "Lunch at a local spot in the lower town — goulash and bread €6",
            "Return train to Braşov evening — €6",
          ],
          cost: "€28–35 including train fare, entry tickets, meals",
        },
        {
          day: "Day 4",
          title: "Peleş Castle & Departure",
          items: [
            "Early morning train Braşov to Sinaia — €4, 45 mins, through the Carpathian mountain pass",
            "Peleş Castle — most beautiful castle in Eastern Europe, neo-Renaissance fairy-tale palace built 1883 — €20 full interior tour",
            "Pelişor Castle next door — smaller but perfectly preserved, Queen Marie's private residence — €10",
            "Lunch in Sinaia town — trout with polenta at a mountain restaurant ~€9",
            "Train from Sinaia to Bucharest (OTP) or back to Braşov for departure — budget €8–15",
            "Browse souvenir stalls for handpainted Orthodox icons and embroidered textiles",
          ],
          cost: "€45–55 including Peleş, Pelişor, transport, meals",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€85/day",
      days: [
        {
          day: "Day 1",
          title: "Braşov: Old Town, Black Church & Tampa",
          items: [
            "Fly into Cluj-Napoca (CLJ) and take a pre-booked private transfer to Braşov — €35–50",
            "Check into a boutique guesthouse in the historic centre (€45–55/night B&B)",
            "Guided walking tour of the Old Town — €20pp, hear Saxon history, medieval fortifications, and lore about the Black Death",
            "Black Church visit with audio guide — €7",
            "Tampa Mountain cable car — €8 return, skip the hike, same stunning views",
            "Dinner at a proper Romanian restaurant — ciorbă de burtă (tripe soup), sarmale (stuffed cabbage), local wine — €25pp",
          ],
          cost: "€80–90 including accommodation, guided tour, cable car, dinner",
        },
        {
          day: "Day 2",
          title: "Bran, Râşnov & Bear-Watching",
          items: [
            "Private car hire or taxi for the day — €60–70 for Bran-Râşnov-Braşov circuit",
            "Bran Castle — €15 entry with skip-the-line booking",
            "Râşnov Fortress — €5, ride the tourist train up the hill",
            "Afternoon: book a bear-watching tour from Braşov — €40pp, sunset hide near forest edge, see brown bears in the wild",
            "Dinner at Sergiana restaurant Braşov — legendary local institution, grilled meats and house-smoked meats — €20pp",
          ],
          cost: "€85–100 including car hire, bear tour, meals",
        },
        {
          day: "Day 3",
          title: "Sighişoara & Sibiu (Saxon Double)",
          items: [
            "Private transfer Braşov to Sighişoara — €55 (2.5 hrs via scenic route through Transylvanian villages)",
            "Clock Tower, Church on the Hill, and citadel walking tour with local guide — €30pp",
            "Drive onward to Sibiu (1.5 hrs) — European Capital of Culture 2007",
            "Check into Sibiu boutique hotel (€55/night)",
            "Explore the Large Square (Piaţa Mare), Brukenthal Museum (€10), and the famous Liars' Bridge — free",
            "Dinner in Sibiu's atmospheric medieval cellars — €25pp, Saxon-influenced cuisine with local Fetească Neagră red wine",
          ],
          cost: "€80–100 including transfer, guided tour, hotel, dinner",
        },
        {
          day: "Day 4",
          title: "Peleş Castle & Sinaia Mountain Resort",
          items: [
            "Morning drive from Sibiu to Sinaia via Transfăgărășan Highway viewpoint (seasonal, May–Oct) — €70 private transfer",
            "Peleş Castle full interior tour — €20, see the ornate Turkish salon, armoury, and tapestry hall",
            "Pelişor Castle — €10, Queen Marie's Art Nouveau private retreat",
            "Lunch at Caraiman Hotel Sinaia, traditional Romanian set menu — €18",
            "Sinaia Monastery (free), a beautiful 17th-century Orthodox monastery",
            "Transfer to Bucharest airport or Braşov station for onward journey — €35–50",
          ],
          cost: "€85–100 including transfers, castle entry, lunch",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€200/day",
      days: [
        {
          day: "Day 1",
          title: "Private Braşov Discovery & Candelit Dinner",
          items: [
            "Private airport transfer from OTP or CLJ in premium vehicle — €80–120",
            "Check into a luxury boutique hotel like Casa Wagner or Ambient Hotel Braşov (€120–160/night)",
            "Private 3-hour walking tour of Braşov's fortifications, Saxon history, and Black Church with specialist guide — €80pp",
            "Afternoon wellness: thermal spa session at hotel — €40",
            "Private cable car booking or helicopter scenic flight over the Carpathians — €150–300pp",
            "Fine dining at Casa Românească — tasting menu with Romanian wine pairing — €60–80pp",
          ],
          cost: "€200–250 including hotel, private guide, dinner, spa",
        },
        {
          day: "Day 2",
          title: "Bran Castle Private Access & Brown Bear Safari",
          items: [
            "Private car and driver for the day — €100",
            "Bran Castle VIP early-morning access before crowds — €50pp (pre-arranged with tour operator)",
            "Private horse-and-cart ride through Bran village — €30",
            "Luxury lunch at a traditional villa guesthouse in Bran — €40pp, home-cooked Romanian feast with home-made plum brandy",
            "Premium bear-watching experience — private hide, professional wildlife guide, guaranteed sightings — €120pp",
            "Return to Braşov, evening cocktails at rooftop bar",
          ],
          cost: "€200–230 including private car, VIP castle, bear safari, meals",
        },
        {
          day: "Day 3",
          title: "Sighişoara Private & Fortified Church Villages",
          items: [
            "Private driver to Sighişoara (2.5 hrs) via fortified Saxon church villages — Biertan (UNESCO), Viscri (Prince Charles's village) — stops en route",
            "Private Sighişoara citadel tour with certified medieval historian guide — €60pp",
            "Afternoon: Viscri village experience — visit Prince Charles's restored 18th-century farmhouse guesthouse (book ahead)",
            "Check into a restored Saxon farmhouse in a Transylvanian village — €130–180/night, authentic experience",
            "Private dinner in your farmhouse — locally-sourced multi-course meal prepared by host — €50pp",
          ],
          cost: "€200–250 including private driver, specialist guide, boutique farmhouse stay",
        },
        {
          day: "Day 4",
          title: "Peleş Castle VIP & Carpathian Farewell",
          items: [
            "Chauffeur transfer to Sinaia via mountain scenic route — €80",
            "Peleş Castle private guided tour with royal history specialist — €60pp",
            "Pelişor Castle — Queen Marie's personal art collection tour with dedicated guide — €40pp",
            "Gourmet lunch at Caraiman Palace restaurant, five-star setting — €50pp",
            "Optional: Sinaia casino visit (historical building) or chairlift to Bucegi Mountains plateau",
            "Private transfer to Bucharest OTP airport in luxury vehicle — €80",
          ],
          cost: "€220–260 including chauffeur, specialist castle tours, fine dining",
        },
      ],
    },
  ],

  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€10–15 (hostel dorm)",
      food: "€12–15 (local restaurants)",
      transport: "€5–8 (trains/buses)",
      activities: "€8–12 (paid sights)",
      total: "€40/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€45–60 (boutique guesthouse)",
      food: "€25–35 (restaurant meals + wine)",
      transport: "€15–25 (private transfer/taxi)",
      activities: "€20–30 (guided tours)",
      total: "€85/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€120–180 (luxury hotel/farmhouse)",
      food: "€50–70 (fine dining)",
      transport: "€80–120 (private car/driver)",
      activities: "€50–80 (private guides, VIP access)",
      total: "€200+/day",
    },
    {
      tier: "🎯 Backpacker",
      accommodation: "€8–10 (hostel dorm)",
      food: "€8–10 (street food + self-catering)",
      transport: "€3–5 (bus/train)",
      activities: "€5 (selective free/cheap sights)",
      total: "€28/day",
    },
    {
      tier: "👨‍👩‍👧 Family",
      accommodation: "€70–100 (private apartment)",
      food: "€30–45 (mix of restaurant/supermarket)",
      transport: "€20–35 (car rental shared)",
      activities: "€25–40 (family tickets)",
      total: "€95/day",
    },
  ],

  mistakes: [
    {
      icon: "⏰",
      title: "Arriving in Braşov without booking Bran Castle timed entry",
      desc: "Bran Castle sells out, especially in October and over weekends. Book online (bran-castle.com) at least a few days ahead — turning up without a ticket means queuing or being turned away at peak season.",
      color: "border-red-200 bg-red-50",
    },
    {
      icon: "🚗",
      title: "Underestimating distances between the main sights",
      desc: "Sighişoara is 130km from Braşov, Sibiu is 150km. It's easy to plan all three in a day and spend most of it in a car or bus. Spread things out or focus on one sub-region per day.",
      color: "border-orange-200 bg-orange-50",
    },
    {
      icon: "💶",
      title: "Forgetting Romania uses the Leu (RON), not Euros",
      desc: "Despite joining the Schengen Zone, Romania hasn't adopted the Euro. Prices at tourist sites are sometimes listed in Euros but you'll pay in RON. ATMs are widely available in cities — use local ATMs and decline 'dynamic currency conversion'.",
      color: "border-yellow-200 bg-yellow-50",
    },
    {
      icon: "🎃",
      title: "Going only in Halloween week expecting a horror festival",
      desc: "Bran Castle holds a Halloween event that's popular but extremely commercialised and expensive. October is peak season for good reason (autumn colours, atmosphere) but skip the Halloween gimmick unless you've specifically booked the event.",
      color: "border-purple-200 bg-purple-50",
    },
    {
      icon: "🏰",
      title: "Skipping Sibiu to 'save time' for the Dracula sights",
      desc: "Sibiu is arguably the most beautiful city in Romania — its medieval squares, colourful Baroque buildings, and 'eyelid windows' (house windows that look like eyes) are extraordinarily photogenic. Many first-timers regret skipping it.",
      color: "border-blue-200 bg-blue-50",
    },
  ],

  tips: [
    {
      icon: "🚂",
      title: "Take the train between Braşov and Sinaia",
      desc: "The train through the Carpathian mountain pass between Braşov and Sinaia is one of the most scenic rail journeys in Europe — mountain valleys, medieval castles glimpsed through the trees. Book CFR (Romanian Railways) tickets at cfrcalatori.ro.",
      color: "border-teal-200 bg-teal-50",
    },
    {
      icon: "🐻",
      title: "Book bear watching in advance through a reputable operator",
      desc: "Brown bear watching near Braşov is one of Europe's great wildlife experiences — Romania has the largest brown bear population in Europe outside Russia. Book with Absolute Carpathian or similar responsible operators (€35–120pp). Evening hides near Zărneşti give the best sightings.",
      color: "border-green-200 bg-green-50",
    },
    {
      icon: "🏰",
      title: "Visit the fortified churches, not just the famous castles",
      desc: "The UNESCO fortified Saxon churches — Biertan, Viscri, Prejmer, Câlnic — are Transylvania's secret treasure. These 13th-15th century fortified churches with multiple defensive walls and grain stores are extraordinary and almost entirely tourist-free outside summer.",
      color: "border-amber-200 bg-amber-50",
    },
    {
      icon: "🌄",
      title: "Drive (or hire a driver for) the Transfăgărășan Highway",
      desc: "Often called the world's most beautiful road, the Transfăgărășan (open Jun–Oct) crosses the Carpathian Mountains at 2,042m with hairpin bends, tunnels, and a mountain lake (Bâlea Lac) at the summit. A day trip from Braşov or Sibiu — absolutely unmissable if open.",
      color: "border-indigo-200 bg-indigo-50",
    },
  ],

  faqs: [
    {
      q: "Is Transylvania safe to visit?",
      a: "Very safe. Romania consistently ranks as one of the safest countries in Europe with very low violent crime. Standard precautions apply in Bucharest and tourist areas (pickpockets at crowded markets), but the towns and villages of Transylvania are exceptionally safe for solo travellers, including women travelling alone.",
    },
    {
      q: "Is Bran Castle actually Dracula's Castle?",
      a: "Yes and no. Bram Stoker never visited Romania, but Bran Castle closely matches his literary description and is one of the few places Vlad the Impaler (the historical inspiration for Dracula) may have been briefly imprisoned. The 'Dracula' label is largely a marketing invention, but the castle itself is genuinely impressive and atmospheric — worth visiting for its own merits, not just the vampire mythology.",
    },
    {
      q: "When is the best time to visit Transylvania?",
      a: "May–June for green countryside, wildflowers, and mild weather. September–November for stunning autumn foliage and harvest atmosphere — the Carpathian forests turn extraordinary shades of red and orange. Winter (December–February) is cold but magical — snow-covered fortresses and Christmas markets in Braşov and Sibiu. Avoid August peak season if you dislike crowds at Bran Castle.",
    },
    {
      q: "Can I do Transylvania as a day trip from Bucharest?",
      a: "Technically yes — Sinaia and Peleş Castle are 1.5 hours from Bucharest. But Transylvania rewards time — the UNESCO citadel of Sighişoara and the fortified churches alone need two days. Ideally spend at least 3–4 nights in Braşov as your base, or 2 nights Braşov + 1 night Sibiu.",
    },
  ],

  combineWith: ["Budapest", "Prague", "Belgrade", "Sofia", "Istanbul"],
  relatedSlugs: [
    "budapest-4-days",
    "prague-4-days",
    "athens-3-days",
    "istanbul-5-days",
    "krakow-4-days",
  ],

  galleryQuery: "transylvania romania medieval castles forests autumn",
};

/* ── Page Component ─────────────────────────────────────────────────────── */
export default function TransylvaniaPage() {
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
