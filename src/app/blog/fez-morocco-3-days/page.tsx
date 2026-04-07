import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Fez, Morocco",
  country: "Morocco",
  countryFlag: "🇲🇦",
  slug: "fez-morocco-3-days",
  heroQuery: "fez morocco medina old city islamic architecture",
  heroAlt: "Fez el-Bali medina rooftop view with minarets and ancient tanneries",
  category: "Africa",
  date: "April 5, 2026",
  readTime: "12 min read",
  intro:
    "Fez is the world's largest car-free urban area and arguably the most intact medieval city on the planet. The Fez el-Bali medina, a UNESCO World Heritage Site since 1981, is a living 9th-century labyrinth of 9,000 streets, 186 mosques, and the world's oldest functioning university. The Chouara tannery has been dyeing leather in the same honeycomb vats since the 11th century. Three days here is a deep immersion: spice souks that smell of cumin and rose water, pastilla pigeon pie that will ruin all other food, and a traditional hammam that will unknot muscles you forgot you had.",
  stats: { duration: "3 Days", budgetFrom: "$30", bestMonths: "Mar-May or Sep-Nov", airport: "FEZ" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Medina Arrival & Spice Souks" },
    { id: "day2", emoji: "📅", label: "Day 2 — Tanneries & Al-Qarawiyyin" },
    { id: "day3", emoji: "📅", label: "Day 3 — Hammam & Departure" },
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
        ["Processing", "10-15 business days"],
        ["Fee", "~$20-30 USD"],
        ["Validity", "Single entry, 30 days"],
        ["Apply at", "Moroccan Embassy or consulate"],
        ["Documents", "Return flight, hotel bookings, bank statements"],
        ["Notes", "Apply at least 4 weeks ahead. Invitation letter from a Moroccan contact can help approval."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US / UK / EU / AU — Visa-Free",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "Visa-Free on arrival"],
        ["Processing", "Stamp on arrival at airport"],
        ["Fee", "Free"],
        ["Validity", "90 days"],
        ["Passport", "Must be valid 6+ months beyond travel dates"],
        ["Notes", "No pre-registration needed. Show onward travel and proof of accommodation at border."],
        ["Currency", "Moroccan Dirham (MAD). USD/EUR exchangeable at airport."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$30-50/day",
      days: [
        {
          day: "Day 1",
          title: "Medina Arrival & Spice Souks",
          items: [
            "14:00 — Arrive at Fez-Saiss Airport (FEZ) and take a petit taxi to the medina gate Bab Boujloud (10 min, ~30 MAD / $3); check in to a budget riad guesthouse or hostel inside the medina — expect to pay 120-200 MAD ($12-20) per night",
            "15:30 — Walk through Bab Boujloud, the ornate blue and green gate that marks the entrance to Fez el-Bali — one of the most photographed entry points in Africa; take the main Talaa Kebira lane downhill into the heart of the medina",
            "17:00 — Explore the spice souks and Seffarine Square (coppersmiths square) — watch metalworkers hammer brass trays by hand; buy bags of cumin, ras el hanout, and dried rose petals for a fraction of supermarket prices back home",
            "19:00 — Dinner at a medina restaurant off the tourist trail: harira soup ($1), kefta brochettes ($3), and Moroccan mint tea ($0.50) at a local eatery near Rcif Square — total under $8",
            "21:00 — Evening walk back through Bab Boujloud as the medina quiets down; the lit-up gate at night is genuinely spectacular and the narrow lanes feel almost magical without daytime crowds",
          ],
          cost: "$20-30 (taxi, food, accommodation)",
        },
        {
          day: "Day 2",
          title: "Chouara Tanneries & Al-Qarawiyyin",
          items: [
            "08:30 — Walk from your riad to the Chouara tannery viewpoint before 10am when the light is best and tour groups have not yet arrived; leather shops surrounding the tannery offer free rooftop views — politely decline a purchase until you have seen the view",
            "10:00 — Nearby tannery neighbourhood (Henna Souk area): pick up a sprig of fresh mint offered by shop owners to hold to your nose near the vats — the tannery smell is memorable but intense; natural dyes include saffron yellow, poppy red, and indigo blue",
            "11:30 — Al-Qarawiyyin Mosque and University (founded 859 AD, the world's oldest continuously operating university) — non-Muslims cannot enter the mosque but can view the ornate wooden doors and the courtyard fountain from the entrance; the courtyard is beautiful",
            "13:00 — Lunch at Riad Laaroussa cafe or any medina restaurant near Medersa Bou Inania: bastilla (pigeon pie in flaky pastry with sugar and almonds, $5) or a tagine ($4-6)",
            "14:30 — Medersa Bou Inania — one of the few religious buildings in Fez open to non-Muslims; the 14th-century tilework, carved cedar wood, and stucco plasterwork are among the finest examples of Merinid architecture anywhere; entry 20 MAD ($2)",
            "17:00 — Explore the souks by category: leather souk, textile souk, woodworking souk — every craft has its own neighbourhood; buy nothing in the first hour, observe prices before negotiating",
            "19:30 — Dinner: slow-cooked lamb tagine with preserved lemon and olives at a riad restaurant ($8-12) — book ahead if possible",
          ],
          cost: "$25-35 (entry fees, meals, shopping)",
        },
        {
          day: "Day 3",
          title: "Hammam Morning & Departure",
          items: [
            "08:00 — Visit a traditional neighbourhood hammam (public bathhouse) near your riad — ask your host to recommend the local one used by residents, not a tourist hammam; entry 15-20 MAD ($1.50-2), bring flip-flops; a kessa scrub mitt costs $1 extra",
            "10:00 — Final medina wander: pick up last-minute souvenirs at the textile and lantern souks near Bab Rcif — hand-painted ceramic tagines, argan oil, and Fassi leather slippers (babouches) are the best value purchases in Fez",
            "12:00 — Lunch near Bab Boujloud before departing: msemen flatbread with honey and argan oil ($2) at a street stall, or a final harira and salad plate at a medina cafe",
            "13:30 — Petit taxi to Fez airport (~30-40 MAD / $3-4) for afternoon or evening flight; allow 45 minutes for the drive and check-in",
          ],
          cost: "$15-25 (hammam, lunch, taxi, souvenirs)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$80-140/day",
      days: [
        {
          day: "Day 1",
          title: "Riad Check-in & Medina Introduction",
          items: [
            "13:00 — Arrive FEZ Airport and arrange a private transfer or metered taxi to your riad ($5-8); check in to a mid-range riad with a courtyard fountain and rooftop terrace in Fez el-Bali — expect to pay $60-90/night with breakfast included",
            "15:00 — Guided 2-hour introduction walk with a licensed medina guide booked through your riad ($25-30) — essential on day one as the medina has over 9,000 lanes and no street signs; a good guide will explain the logic of the souk layout and save hours of getting lost",
            "17:30 — Seffarine Square aperitif: Moroccan mint tea at a coppersmiths square cafe while watching craftsmen at work; try the local pastry called cornes de gazelle (crescent cookies filled with almond paste, $0.50 each)",
            "20:00 — Riad dinner back at your accommodation: many riads serve a set Moroccan menu (400-600 MAD / $40-60 for two) featuring harira, pastilla, tagine, and cous cous; book the evening before",
          ],
          cost: "$90-120 (riad, guide, dinner)",
        },
        {
          day: "Day 2",
          title: "Tanneries, University & Bou Inania Deep Dive",
          items: [
            "08:00 — Early morning at Chouara tannery with your riad host or a guide: the early light is golden and the dye colours are most vivid; ask for the leather shop with the highest rooftop for the best panorama across the circular vats",
            "10:00 — Al-Qarawiyyin Library tour (if available): the library, restored in 2016, holds some of the world's oldest books and manuscripts; access is limited but worth enquiring about at the main entrance; the fountain courtyard visible from outside is stunning",
            "12:30 — Lunch at Cafe Clock in the medina ($12-18/person): a favourite with expats and travellers, famous for its camel burger and live Gnawa music on certain evenings; the rooftop has views over the medina roofscape",
            "14:00 — Medersa Bou Inania + Attarine Medersa (both $2-3 entry): spend an hour in each studying the zellige tilework, carved plaster, and cedarwood screens; bring a telephoto camera for the architectural details",
            "17:00 — Hammam experience at a mid-range hammam like Hammam Andalous ($15-25 including kessa scrub and black soap treatment) — far more comfortable than a local hammam but still traditional in method",
            "20:00 — Dinner at a restaurant in the Fez el-Jdid (new medina) or a rooftop restaurant overlooking the old medina: slow-roasted mechoui lamb ($20/person) or a full Moroccan feast",
          ],
          cost: "$100-140 (meals, entries, hammam)",
        },
        {
          day: "Day 3",
          title: "Merinid Tombs, Pottery & Departure",
          items: [
            "08:30 — Merinid Tombs on the hill above the medina: free access, extraordinary dawn panorama over the entire Fez el-Bali roofscape with minarets rising from the sea of terracotta; most visitors miss this entirely",
            "10:30 — Pottery cooperative workshop visit outside the medina walls: watch potters throw clay on foot-powered wheels and painters apply geometric patterns freehand; many cooperatives sell at fixed prices so no negotiation pressure",
            "13:00 — Lunch at a Fez el-Jdid restaurant near the Mellah (Jewish quarter): fresh pastilla at Dar Mnebhi or a terrace tagine near the royal palace gates",
            "15:00 — Final souvenir shopping in the leather souk: quality leather bags, wallets, and babouche slippers at negotiated prices; mid-range leather goods are excellent value compared to European equivalents",
            "17:00 — Transfer to FEZ airport for evening flight; allow at least 90 minutes before departure",
          ],
          cost: "$80-110 (meals, pottery, airport transfer)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$250-500/day",
      days: [
        {
          day: "Day 1",
          title: "Private Arrival & Rooftop Dinner",
          items: [
            "12:00 — Private airport transfer in an air-conditioned car to a luxury riad like Riad Fes, Palais Amani, or Dar Roumana ($20-30) — these properties have concierges who will escort you through the medina lanes on arrival since even luxury riads require a 5-minute walk from the nearest road",
            "14:00 — Welcome tea and riad orientation followed by a private guided tour of the immediate neighbourhood with the riad's own guide; understand the layout before exploring independently",
            "16:00 — Rooftop mint tea and pastry service at the riad with views over the medina skyline: the call to prayer echoing from multiple minarets simultaneously at sunset is a defining Fez moment",
            "20:00 — Private rooftop dinner at the riad: a full Moroccan tasting menu (7-8 courses, $60-80/person) featuring traditional pastilla, tagine variations, and bastilla au lait dessert; many luxury riads source directly from medina food artisans",
          ],
          cost: "$300-450 (riad, private guide, dinner)",
        },
        {
          day: "Day 2",
          title: "Private Tannery Tour, Cooking Class & Hammam Royal",
          items: [
            "08:00 — Private dawn tannery tour with an expert guide ($60-80 for 2 hours): access the best vantage points before tourist crowds, learn the full leather production process from raw hide to finished product, and understand the medieval guild system still operating today",
            "11:00 — Al-Qarawiyyin and Attarine Medersa private tour with a Fez historian or academic guide ($80-100): deeper context about the 9th-century founding, the scholars who studied here, and the architectural symbolism in every geometric pattern",
            "13:00 — Moroccan cooking class with a medina chef ($60-80/person including lunch): learn to make pastilla, slow-cook a lamb tagine, grind your own spice blend, and bake msemen flatbread on a traditional kanoun charcoal stove",
            "16:00 — Hammam Royal at your luxury riad or at a top-tier hammam like Palais Amani Spa ($50-80): 90-minute treatment with argan oil, black soap, kessa exfoliation, and a ghassoul (clay) mask followed by a relaxation room",
            "20:00 — Private dinner at Nur restaurant or Dar Roumana ($50-70/person): contemporary Moroccan cuisine using traditional ingredients and techniques; one of the most acclaimed restaurants in North Africa",
          ],
          cost: "$400-600 (guides, class, hammam, dinner)",
        },
        {
          day: "Day 3",
          title: "Private Pottery, Perfume Souk & Departure",
          items: [
            "08:30 — Private sunrise at Merinid Tombs with a photographer guide ($80): optimal light for photography over the medina; the guide arranges access to viewpoints not usually open to visitors",
            "10:30 — Private pottery master workshop ($100): one-on-one session with a master potter learning to throw and paint a small piece to keep; the cooperative will fire and ship your work home",
            "13:00 — Private lunch at a luxury riad restaurant followed by a bespoke perfume souk experience: a souk guide takes you through the attarine (perfume market) and a parfumeur creates a custom blend based on your preferences ($60-100)",
            "16:00 — Private car transfer to FEZ airport with full concierge service; departure in comfort with curated food parcels from the riad kitchen for the journey",
          ],
          cost: "$350-500 (private experiences, lunch, transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "Budget",
      accommodation: "$12-20 (hostel or basic riad)",
      food: "$8-15 (street food + local eateries)",
      transport: "$3-6 (petit taxis)",
      activities: "$5-10 (entry fees)",
      total: "$30-50/day",
    },
    {
      tier: "Mid-Range",
      accommodation: "$60-90 (mid-range riad with breakfast)",
      food: "$25-40 (cafes + riad dinners)",
      transport: "$8-15 (metered taxis)",
      activities: "$20-35 (guided tours + hammam)",
      total: "$80-140/day",
    },
    {
      tier: "Luxury",
      accommodation: "$200-400 (palace riad)",
      food: "$70-120 (fine dining + cooking class)",
      transport: "$20-40 (private transfers)",
      activities: "$100-200 (private tours + spa)",
      total: "$250-500/day",
    },
    {
      tier: "Ultra-Budget",
      accommodation: "$8-12 (hostel dorm)",
      food: "$5-8 (harira + street stalls)",
      transport: "$2-4 (shared taxis)",
      activities: "$2-5 (medina only)",
      total: "$20-30/day",
    },
    {
      tier: "Group of 4",
      accommodation: "$15-25 pp (shared riad room)",
      food: "$10-20 pp (shared dishes)",
      transport: "$3-5 pp (shared taxi)",
      activities: "$10-20 pp (shared guide cost)",
      total: "$40-70/day pp",
    },
  ],
  mistakes: [
    {
      icon: "🗺️",
      title: "Entering the medina without a guide on Day 1",
      desc: "Fez el-Bali has over 9,000 lanes and no street signs or logical grid. Even experienced travellers spend hours completely lost on their first day. A licensed guide for the first 2-3 hours pays for itself in saved frustration and gives you the spatial logic to navigate independently afterward.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "📸",
      title: "Going to the tanneries after 10am in summer",
      desc: "By mid-morning in peak season the leather shop rooftops fill with tour groups and the smell intensifies. Visit before 9:30am for the best light, fewest people, and most active dyeing work. Many tanneries do no dyeing at all in the afternoon.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "💰",
      title: "Accepting the first price in any souk",
      desc: "Initial prices in tourist-facing medina shops are typically 3-5 times the final expected price. Polite but firm negotiation starting at 30% of the ask is normal and expected. Walk away if needed — the vendor will often follow with a better offer. Never negotiate if you are not genuinely interested in buying.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🌡️",
      title: "Visiting in July or August",
      desc: "Fez in summer regularly reaches 40 degrees Celsius (104F). The medina has very little shade and poor airflow in the narrow lanes. March-May and September-November offer perfect 20-25 degree days that make multi-hour medina walks enjoyable rather than exhausting.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏨",
      title: "Booking a hotel outside the medina walls",
      desc: "Staying inside Fez el-Bali in a riad transforms the experience. You wake to the morning call to prayer, walk out your door directly into the souk, and experience the medina at dawn and dusk when day-trippers have left. Even a basic medina riad beats a 4-star hotel outside the walls.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🫖",
      title: "Learn the mint tea ritual",
      desc: "Moroccan mint tea (atay) is poured from height to create froth and is always served in three glasses (the first is bitter like life, the second strong like love, the third sweet like death). Never refuse it — it is an act of hospitality. Bringing your own high-quality tea as a small gift to a host is deeply appreciated. Book experiences at https://www.getyourguide.com/s/?q=Fez+Morocco&partner_id=PSZA5UI",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "👟",
      title: "Wear comfortable, closed-toe shoes",
      desc: "The medina streets are uneven cobblestones, often slippery in the morning when they are washed. You will walk 12-15 km per day easily. Sandals are not recommended. Many streets also have small streams of runoff water from workshops and the public fountain (sebil) cleaning.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "💵",
      title: "Carry small Dirham notes for souk purchases",
      desc: "Street food, hammam entry, and small souk purchases all require cash and exact change is helpful. ATMs are available near Bab Boujloud and the Rcif area. Exchange euros or dollars at a bank rather than a street exchanger for the best rate. Cards are rarely accepted inside the medina proper.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "📿",
      title: "Respect prayer times and dress codes",
      desc: "Friday midday prayer significantly slows the medina for 1-2 hours as many shops close and worshippers fill the lanes toward mosques. Women should carry a scarf to cover shoulders and knees when entering religious neighbourhoods. This is not strictly enforced for tourists but is appreciated and improves interactions with locals.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Is Fez safe for solo travellers?",
      a: "Fez is generally very safe for solo travellers including women travelling alone. The main annoyance is persistent unofficial guides (faux guides) near medina gates who will offer to show you around for a fee and become aggressive if declined. Simply say 'non merci' firmly and keep walking. Inside the medina locals are hospitable and helpful. Petty theft is low compared to other major tourist cities.",
    },
    {
      q: "How many days do I need in Fez?",
      a: "Three days is the sweet spot for Fez. Day 1 covers orientation and the spice souks. Day 2 hits the tanneries, Al-Qarawiyyin, and Medersa Bou Inania. Day 3 allows a hammam, the Merinid Tombs viewpoint, and the artisan cooperatives. Two days feels rushed. Four days allows you to slow down and explore the Fez el-Jdid (new medina) and the Mellah Jewish quarter more deeply.",
    },
    {
      q: "Can non-Muslims visit Al-Qarawiyyin?",
      a: "Non-Muslims cannot enter the Al-Qarawiyyin Mosque interior or the main prayer hall. However, the ornate carved wooden doors and the ablution fountain courtyard are visible from the entrance. The library (a separate building) occasionally allows visitors by appointment. The neighbouring Attarine Medersa, directly adjacent, is open to everyone and gives a sense of the architectural style.",
    },
    {
      q: "What is the best way to get from Fez to Marrakech?",
      a: "The overnight ONCF train from Fez to Marrakech (about 8 hours) is safe, comfortable, and costs 200-250 MAD ($20-25) for a second-class seat. It departs in the late evening and arrives in the morning, saving a night's accommodation. A CTM bus takes 7-8 hours and costs similar. Flying takes 1 hour but costs $50-100 and airport transfers add time.",
    },
  ],
  combineWith: ["marrakech-4-days", "lisbon-4-days", "seville-3-days"],
  relatedSlugs: ["marrakech-4-days", "istanbul-5-days", "cairo-4-days", "lisbon-4-days"],
  galleryQuery: "fez morocco medina tanneries islamic architecture",
};

export const metadata: Metadata = {
  title: "Fez Morocco in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The ultimate 3-day Fez itinerary — UNESCO medina, Chouara tanneries, Al-Qarawiyyin University, Medersa Bou Inania, pastilla, spice souks, and hammam. Indian passport visa info included.",
  keywords: [
    "Fez Morocco itinerary",
    "Fez 3 days",
    "Fez travel guide 2026",
    "Fez medina UNESCO",
    "Chouara tannery",
    "Al-Qarawiyyin university",
    "Medersa Bou Inania",
    "Morocco budget travel",
    "Fez visa Indian passport",
    "Fez el-Bali",
  ],
  openGraph: {
    title: "Fez Morocco in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "UNESCO medina, ancient tanneries, the world's oldest university, spice souks, and hammam rituals — Fez in 3 days from $30/day.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/fez-morocco-3-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fez Morocco in 3 Days: Complete 2026 Itinerary",
    description:
      "UNESCO medina, Chouara tanneries, Al-Qarawiyyin, and hammam rituals — the definitive Fez guide for 2026.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/fez-morocco-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Fez Morocco in 3 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Fez Morocco in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/fez-morocco-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Fez, Morocco",
      description:
        "Fez el-Bali, the world's largest car-free urban area and a UNESCO World Heritage Site — medieval medina, ancient tanneries, and the world's oldest university.",
      geo: { "@type": "GeoCoordinates", latitude: 34.0181, longitude: -5.0078 },
    },
  ],
};

export default function FezMoroccoPage() {
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
