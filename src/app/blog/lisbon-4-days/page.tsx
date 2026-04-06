import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Lisbon",
  country: "Portugal",
  countryFlag: "🇵🇹",
  slug: "lisbon-4-days",
  heroQuery: "lisbon alfama neighborhood tram colorful buildings portugal",
  heroAlt: "Lisbon Alfama neighborhood with yellow trams and colorful buildings Portugal",
  category: "Europe",
  date: "April 4, 2026",
  readTime: "14 min read",
  intro: "Lisbon rewards the unhurried traveller — cobblestone alleys that lead nowhere and everywhere, yellow trams grinding uphill past tiled facades, and the melancholy ache of fado drifting out of a restaurant door. Europe's oldest capital is also its most affordable western city, and that combination is hard to beat.",
  stats: {
    duration: "4 Days",
    budgetFrom: "€40",
    bestMonths: "Mar–May, Sep–Oct",
    airport: "LIS (Lisbon Humberto Delgado)",
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
        ["Schengen Visa", "Portugal is in the Schengen Zone. Apply for a Schengen visa at the Portuguese embassy or consulate. Fee: €80. Processing time: 15–45 working days."],
        ["Documents", "Valid passport (3 months beyond stay), bank statements (€100/day minimum), hotel bookings, return tickets, travel insurance (€30,000 minimum coverage), employment letter."],
        ["Duration", "Tourist stay up to 90 days within 180 days across the entire Schengen area. Cannot extend once inside."],
        ["Apply Early", "Apply at least 6–8 weeks before travel. Portuguese embassy appointments can be scarce — use VFS Global centres where available."],
      ],
    },
    {
      flag: "🌍",
      title: "EU, USA, UK, Canada, Australia",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free", "EU citizens move freely. USA, Canada, Australia, New Zealand get 90 days visa-free in Schengen."],
        ["ETIAS (2026)", "Non-EU travellers (USA, UK, Australia, Canada) will need ETIAS travel authorisation from 2026 — €7, valid 3 years. Apply at etias.eu.int."],
        ["UK Passports", "Post-Brexit UK passports are stamped on entry. Ensure your passport is valid for the duration of your stay plus has been issued within the last 10 years."],
        ["Tip", "Days in any Schengen country count toward your 90-day quota. Portugal plus Spain plus France = one combined allowance."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "€40–65/day",
      days: [
        {
          day: "Day 1",
          title: "Alfama, São Jorge Castle & Fado Night",
          items: [
            "Morning — Walk through Alfama, Lisbon's oldest neighborhood — narrow zigzagging streets, laundry lines, azulejo tiles on every surface",
            "10:00am — São Jorge Castle (€10) — Moorish hilltop fortress with sweeping views over Lisbon and the Tagus River estuary",
            "12:30pm — Miradouro das Portas do Sol viewpoint (free) — one of Lisbon's most photogenic spots, Alfama rooftops below",
            "2:00pm — Lunch at a tascas (local tavern) in Alfama — bacalhau à brás (salted cod with eggs and potatoes) for €10–13",
            "4:00pm — Wander to Miradouro da Graça (free) — fewer tourists than Portas do Sol, equally stunning",
            "7:30pm — Fado dinner at a local Alfama restaurant — traditional Portuguese fado music performed live while you eat (€15–25 for food, some venues charge a music cover of €10)",
          ],
          cost: "€40–55 total",
        },
        {
          day: "Day 2",
          title: "Tram 28, LX Factory & Time Out Market",
          items: [
            "9:00am — Board Tram 28 (€3 on board, €1.61 with Viva Viagem card) at Martim Moniz — ride through Graça, Alfama, Baixa, and Estrela. Stand near the driver or back of the tram to enjoy the views",
            "11:00am — Explore Príncipe Real neighborhood — antique shops, design boutiques, small palace gardens",
            "1:00pm — Time Out Market in Cais do Sodré (€15–20 for food) — world's first curated food hall, 35 of Lisbon's best chefs in one space. Try the pastéis de bacalhau (codfish cakes)",
            "3:30pm — LX Factory (Sunday market is best, but always open) — repurposed 19th century industrial complex. Bookshop Ler Devagar is worth a visit alone",
            "6:00pm — Sunset walk along the waterfront promenade at Ribeira das Naus",
            "8:00pm — Dinner in Cais do Sodré or Bairro Alto — both lively in the evening",
          ],
          cost: "€30–45 total",
        },
        {
          day: "Day 3",
          title: "Day Trip to Sintra",
          items: [
            "8:30am — Train from Lisbon Rossio station to Sintra (€4.50 each way, 40 min). Trains run every 20 min",
            "9:30am — Arrive Sintra village — UNESCO World Heritage landscape of romantic palaces and forested hills",
            "10:00am — Pena Palace (€14) — the most outrageous palace in Europe. Bright yellow and red towers on a forested crag, mist permitting",
            "12:30pm — Walk down to Moorish Castle (€8) — 8th century ramparts with views to the Atlantic on a clear day",
            "2:00pm — Lunch in Sintra village — pastéis de Sintra (local almond pastry) and a sit-down lunch for €12–15",
            "3:30pm — Wander the village, buy local almond cakes, get an ice cream",
            "5:30pm — Train back to Lisbon",
          ],
          cost: "€35–50 total including transport",
        },
        {
          day: "Day 4",
          title: "Belém: Towers, Monasteries & Pastéis",
          items: [
            "9:00am — Tram 15E or bus from Praça do Comércio to Belém (30 min, €1.61 with card)",
            "9:30am — Queue at Pastéis de Belém — the original, invented here in 1837. Order 3–4 (€1.10 each), eat warm with cinnamon and powdered sugar. The queue looks long but moves fast",
            "10:30am — Jerónimos Monastery (€10) — Portugal's finest Manueline Gothic architecture. The cloisters are jaw-dropping",
            "12:30pm — Belém Tower (€6) — 16th century fortified tower on the Tagus, the departure point of Vasco da Gama's voyage to India",
            "2:00pm — Lunch at a café in Belém — grilled fish sandwich for €8–10",
            "4:00pm — Monument to the Discoveries (€6 or free from outside) — 52-metre stone monument at the water's edge",
            "6:00pm — Return to central Lisbon for a final evening in Bairro Alto",
          ],
          cost: "€35–45 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€120–200/day",
      days: [
        {
          day: "Day 1",
          title: "Alfama Private Tour & Fado Dinner",
          items: [
            "9:00am — Private walking tour of Alfama with a local guide (€50–70 per person, 2.5 hours)",
            "11:30am — São Jorge Castle with audio guide",
            "1:30pm — Lunch at Solar dos Presuntos — classic upscale Portuguese cuisine, €25–35 per person",
            "4:00pm — Tuk-tuk tour of Lisbon's miradouros (viewpoints) — €30 per person for 1.5 hours",
            "8:00pm — Fado show at Clube de Fado or Senhor Vinho — proper venue, reserved table, full dinner (€50–80 per person all-in)",
          ],
          cost: "€130–160 total",
        },
        {
          day: "Day 2",
          title: "Chiado, Príncipe Real & LX Factory",
          items: [
            "10:00am — Chiado neighborhood — literary cafés, Fernando Pessoa's statue at Café A Brasileira",
            "11:30am — Museu Nacional do Azulejo (€5) — stunning Portuguese tile museum in a former convent",
            "1:30pm — Lunch at Taberna da Rua das Flores — modern Portuguese small plates",
            "3:30pm — Príncipe Real antique market (Saturdays) or the gardens and design shops",
            "7:00pm — Cocktails at Park Bar (rooftop on a parking garage with city views)",
            "9:00pm — Dinner at 100 Maneiras — creative Portuguese tasting menu",
          ],
          cost: "€130–180 total",
        },
        {
          day: "Day 3",
          title: "Sintra with Private Driver",
          items: [
            "8:30am — Private driver to Sintra (€80–100 return for the day)",
            "9:30am — Pena Palace (€14) with audio guide — skip the queue with online pre-booking",
            "11:30am — Quinta da Regaleira (€10) — mystical estate with initiation wells and Masonic symbolism",
            "1:30pm — Lunch at Tivoli Palácio de Seteais — one of Portugal's most beautiful historic hotel restaurants",
            "3:30pm — Moorish Castle at sunset",
          ],
          cost: "€150–200 total",
        },
        {
          day: "Day 4",
          title: "Belém & Wine Experience",
          items: [
            "9:30am — Pastéis de Belém (the real ones)",
            "10:30am — Jerónimos Monastery — book skip-the-line tickets online",
            "12:00pm — Museu de Arte, Arquitetura e Tecnologia (MAAT) — waterfront contemporary art museum (€9)",
            "2:00pm — Portuguese wine tasting lunch at a wine bar near Cais do Sodré (€35–50 per person with food)",
            "5:00pm — Sunset river cruise on the Tagus (€25–35 per person, 1.5 hours)",
          ],
          cost: "€120–160 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€350+/day",
      days: [
        {
          day: "Day 1",
          title: "Bairro Alto Hotel & Private Alfama",
          items: [
            "Check in to Bairro Alto Hotel, Memmo Alfama, or Verride Palácio Santa Catarina — all with Tagus views",
            "Private expert-guided tour of Alfama and São Jorge Castle with a historian",
            "Lunch at Belcanto — José Avillez's 2 Michelin-star restaurant in Chiado (book 6–8 weeks ahead)",
            "Afternoon: private photography session around the miradouros",
            "Evening: reserved fado show at Clube de Fado followed by late dinner at Alma",
          ],
          cost: "€500–700 total",
        },
        {
          day: "Day 2",
          title: "Private Sintra & Palace Lunch",
          items: [
            "Private car to Sintra with a specialist guide",
            "Skip-the-line access to Pena Palace and Quinta da Regaleira",
            "Lunch at Tivoli Palácio de Seteais dining room",
            "Afternoon: Cabo da Roca — westernmost point of continental Europe",
            "Return via Cascais for sunset at the harbor",
          ],
          cost: "€400–550 total",
        },
        {
          day: "Day 3",
          title: "Douro Wine Country Day Trip",
          items: [
            "Private driver to Douro Valley (2 hours each way)",
            "Vineyard tour and tasting at a quinta (estate) in the Douro",
            "River boat cruise through the terraced vineyards",
            "Lunch at DOC restaurant by Rui Paula — Michelin-starred, right on the Douro river",
            "Return to Lisbon by evening",
          ],
          cost: "€450–600 total",
        },
        {
          day: "Day 4",
          title: "Belém VIP & Farewell Dinner",
          items: [
            "Private morning at Jerónimos Monastery with a cultural guide",
            "MAAT contemporary art museum",
            "Afternoon: cooking class with a Lisbon chef — learn to make bacalhau and pastéis de nata",
            "Farewell dinner at Loco — Michelin-starred avant-garde Portuguese cuisine",
          ],
          cost: "€350–500 total",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "€15–35", food: "€15–25", transport: "€5–10", activities: "€10–20", total: "€45–90/day" },
    { tier: "✨ Mid-Range", accommodation: "€80–150", food: "€40–70", transport: "€15–25", activities: "€20–40", total: "€155–285/day" },
    { tier: "💎 Luxury", accommodation: "€200–500", food: "€100–250", transport: "€50–120", activities: "€80–200", total: "€430–1,070/day" },
  ],
  mistakes: [
    {
      icon: "🚋",
      title: "Taking Tram 28 as a Gimmick Only",
      desc: "Tram 28 is a legitimate local commuter route — not a tourist attraction. Stand at Martim Moniz or Praça da Figueira to board (not the tourist-packed terminus). Locals use it to get to work. Ride it like they do, not like a sightseeing bus.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🍽️",
      title: "Eating on Rua Augusta",
      desc: "Rua Augusta is Lisbon's main pedestrian shopping street. Every restaurant on it and around Praça do Comércio charges tourist prices for mediocre food. Walk two streets in either direction and prices drop 40%. Alfama tascas and Mouraria backstreets have the real food.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🏰",
      title: "Skipping Sintra",
      desc: "It's only 40 minutes by train and the UNESCO palace landscape is unlike anything in Western Europe. Most first-timers hear it's 'a bit far' and skip it. That is the single biggest mistake you can make on a Lisbon trip.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🍒",
      title: "Not Trying Ginjinha",
      desc: "Ginjinha is Lisbon's sour cherry liqueur, served in a chocolate cup for €1.50 at Ginjinha Sem Rival near Rossio Square. It's been served there since 1840. You drink the shot and eat the chocolate cup. Miss this and you've missed a piece of Lisbon culture.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🥐",
      title: "Pastéis de Nata Warm from Pastéis de Belém",
      desc: "The queue outside Pastéis de Belém always looks alarming — it moves in 10 minutes. Order 3 or 4, eat them warm at the marble counter inside with cinnamon and powdered sugar. The recipe has been secret since 1837 and is kept by only three people.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🌅",
      title: "Miradouros at Sunset — Nossa Senhora do Monte Is the Best",
      desc: "Lisbon has over a dozen viewpoints (miradouros). Nossa Senhora do Monte in Graça has the most complete panorama — Alfama rooftops, São Jorge Castle, the Tagus, the 25 de Abril Bridge. It's less known than Portas do Sol and nearly always has space to sit.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🛍️",
      title: "LX Factory on Sunday Has Lisbon's Best Vintage Market",
      desc: "LX Factory opens every day but Sunday transforms it — vintage clothing, vinyl records, handmade jewellery, artisan food stalls. It runs noon–7pm. The Ler Devagar bookshop inside (with bikes suspended from the ceiling) is one of the most beautiful bookshops in the world.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🚶",
      title: "Lisbon Hills Will Exhaust You — Plan Accordingly",
      desc: "Lisbon is built on seven hills. The climbs between neighborhoods are genuinely steep. Use trams (28, 15E, 18E), elevadores (funiculars), and the Santa Justa Lift to navigate between elevations. Don't try to walk everything — your knees will not forgive you.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "Is Lisbon better than Porto?",
      a: "Different cities, different energy. Lisbon is the capital — larger, grander, more cosmopolitan, with more museums and nightlife. Porto is smaller, more intimate, with better wine (it's right there in the Douro Valley) and arguably more beautiful architecture. Most visitors do both in one trip — Lisbon 4 days, Porto 3 days, train in between (3 hours, from €15).",
    },
    {
      q: "Can I do a Sintra day trip from Lisbon?",
      a: "Absolutely — it's one of the best day trips in Europe. Train from Rossio station takes 40 minutes and costs €4.50 each way. Trains run every 20–30 minutes. Buy your Pena Palace tickets online before you go (they sell out in summer). A full Sintra day needs at least 6–7 hours.",
    },
    {
      q: "What is the best time to visit Lisbon?",
      a: "March to May and September to October. Spring has mild weather (18–22°C), low crowds, and green countryside for the Sintra day trip. September and October have warm sea temperatures plus summer crowds have gone. July–August is hot (35°C+), very crowded, and hotel prices peak. November–February is off-peak, cooler, and cheapest.",
    },
    {
      q: "How much does 4 days in Lisbon cost?",
      a: "Budget traveller: €40–65/day. This covers hostel dorm (€20–30), local food at tascas (€15–20), tram/metro transport, and one or two paid attractions per day. Mid-range: €120–200/day. Luxury: €350+/day. Lisbon is significantly cheaper than Paris, London, or Amsterdam — the same budget goes further here.",
    },
    {
      q: "Is Lisbon safe for solo travellers?",
      a: "Lisbon is one of the safest capitals in Europe and consistently ranks in the top 10 safest cities in the world. Solo female travellers report feeling comfortable. Standard urban precautions apply — watch your pockets on Tram 28 and in crowded Alfama alleyways. The nightlife areas (Bairro Alto, Cais do Sodré) are lively but not dangerous.",
    },
  ],
  combineWith: ["porto-3-days", "algarve-4-days", "madrid-3-days"],
  relatedSlugs: ["porto-3-days", "algarve-4-days", "madrid-3-days", "barcelona-4-days"],
  galleryQuery: "lisbon portugal alfama tram belém sintra fado",
};

export const metadata: Metadata = {
  title: "Lisbon in 4 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description: "3 complete Lisbon plans — Budget, Mid-Range, Luxury — with Sintra day trip, Tram 28 secrets, Pastéis de Belém tips, and the mistakes every first-timer makes.",
  keywords: [
    "lisbon itinerary 4 days",
    "lisbon travel guide 2026",
    "sintra day trip from lisbon",
    "lisbon budget travel",
    "tram 28 lisbon",
    "pasteis de belem",
    "lisbon trip planner",
    "portugal travel guide",
  ],
  openGraph: {
    title: "Lisbon in 4 Days: Budget to Luxury Itinerary 2026",
    description: "Sintra day trip, Tram 28 secrets, Pastéis de Belém — 3 complete Lisbon plans with real costs in euros.",
    images: [{ url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80", width: 1200, height: 630, alt: "Lisbon Alfama trams colorful buildings Portugal" }],
    type: "article",
    publishedTime: "2026-04-04T00:00:00Z",
    authors: ["IncredibleItinerary"],
    tags: ["Lisbon", "Portugal", "Travel", "Itinerary", "Europe"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lisbon in 4 Days: The Only Guide You Need (2026)",
    description: "3 plans, Sintra day trip, Tram 28 tips, real euro costs.",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"],
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/lisbon-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.incredibleitinerary.com/blog/lisbon-4-days#article",
      headline: "Lisbon in 4 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
      description: "3 complete Lisbon plans with Sintra day trip, Tram 28 secrets, Pastéis de Belém tips, and real costs in euros.",
      image: { "@type": "ImageObject", url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80", width: 1200, height: 630 },
      datePublished: "2026-04-04T00:00:00Z",
      dateModified: "2026-04-04T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com", logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" } },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.incredibleitinerary.com/blog/lisbon-4-days" },
      keywords: "lisbon itinerary, lisbon 4 days, sintra day trip, tram 28, pasteis de belem, alfama, portugal travel",
      articleSection: "Travel Guides",
      inLanguage: "en",
      wordCount: 5200,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Lisbon in 4 Days", item: "https://www.incredibleitinerary.com/blog/lisbon-4-days" },
      ],
    },
        {
      "@type": "TouristDestination",
      name: "Lisbon, Portugal",
      description: "Europe's oldest and most affordable western capital, known for yellow trams, Moorish Alfama, fado music, and the pastéis de nata invented at Pastéis de Belém in 1837.",
      url: "https://www.incredibleitinerary.com/blog/lisbon-4-days",
      touristType: ["Cultural Tourism", "Culinary Tourism", "Urban Tourism", "Heritage Tourism"],
    },
  ],
};


// FAQPage schema — separate block (must NOT be inside @graph with Article)
// Google requires FAQPage as standalone script to avoid "Duplicate field" error
const faqLd = {
  "@context": "https://schema.org",
  
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Is Lisbon better than Porto?", acceptedAnswer: { "@type": "Answer", text: "Different cities, different energy. Lisbon is larger, grander, more cosmopolitan. Porto is smaller and more intimate with better wine access. Most visitors do both — Lisbon 4 days, Porto 3 days, with a 3-hour train between them." } },
        { "@type": "Question", name: "Can I do a Sintra day trip from Lisbon?", acceptedAnswer: { "@type": "Answer", text: "Yes — train from Rossio takes 40 minutes, €4.50 each way. Trains every 20–30 minutes. Book Pena Palace tickets online in advance. Allow 6–7 hours for a full day." } },
        { "@type": "Question", name: "What is the best time to visit Lisbon?", acceptedAnswer: { "@type": "Answer", text: "March–May and September–October. Mild weather, fewer crowds, affordable hotels. July–August is hot (35°C+) and very crowded. November–February is cheapest but cooler." } },
        { "@type": "Question", name: "How much does 4 days in Lisbon cost?", acceptedAnswer: { "@type": "Answer", text: "Budget: €40–65/day. Mid-range: €120–200/day. Luxury: €350+/day. Lisbon is one of Western Europe's most affordable capitals." } },
        { "@type": "Question", name: "Is Lisbon safe for solo travellers?", acceptedAnswer: { "@type": "Answer", text: "Lisbon is one of the safest capitals in Europe, ranking in the top 10 globally. Solo female travellers report feeling comfortable. Watch pockets on Tram 28 and in crowded Alfama." } },
      ],
};

export default function LisbonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* FAQPage schema — standalone to avoid duplicate FAQPage error */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <UniversalBlogClient data={data} />
    </>
  );
}
