import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Ghent",
  country: "Belgium",
  countryFlag: "🇧🇪",
  slug: "ghent-3-days",
  heroQuery: "ghent belgium graslei waterfront medieval guild houses canal",
  heroAlt: "Ghent Graslei waterfront with medieval guild houses reflected in the Leie river, Belgium",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "11 min read",
  intro:
    "Ghent is the Belgium that Bruges wishes it still was — a fully living medieval city with canals, guild houses, a 12th-century castle, and the most important painting in the history of northern European art, all surrounded by a genuine university city energy that keeps restaurants full, bars loud, and the streets interesting after 10pm. Three days is the right amount: enough for the Ghent Altarpiece, the castle, the waterfront, the beef stew, and one lingering afternoon doing nothing on a canal-side terrace.",
  stats: {
    duration: "3 Days",
    budgetFrom: "€50",
    bestMonths: "Apr-Jun, Sep-Oct",
    airport: "BRU (Brussels, 40 min train) or CRL (Charleroi)",
  },
  toc: [
    { id: "visa",        emoji: "🛂", label: "Visa & Entry" },
    { id: "plans",       emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips",        emoji: "💡", label: "Pro Tips" },
    { id: "faq",         emoji: "❓", label: "FAQ" },
    { id: "day1",        emoji: "📅", label: "Day 1 - Castle & Mystic Lamb" },
    { id: "day2",        emoji: "📅", label: "Day 2 - Graslei & SMAK" },
    { id: "day3",        emoji: "📅", label: "Day 3 - Food & Bruges Day Trip" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — Schengen Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "Schengen Short-Stay Visa (Type C)"],
        ["Fee", "€80 per person"],
        ["Processing", "15-30 business days; apply 6-8 weeks ahead"],
        ["Apply at", "Belgian Embassy or VFS Global"],
        ["Validity", "90 days within any 180-day Schengen period"],
        ["Documents", "Hotel bookings, return flights, 3-month bank statements, travel insurance min. €30,000"],
        ["Notes", "One Schengen visa covers Belgium, France, Netherlands, and 24 other countries on the same trip"],
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
        ["Duration", "90 days within any 180-day period"],
        ["ETIAS", "Required from mid-2026 (€7, apply at etias.eu.int before departure)"],
        ["UK Passports", "Visa-free post-Brexit but subject to 90/180 rule and ETIAS"],
        ["Passport", "Must be valid 3+ months beyond travel dates"],
        ["Notes", "Days spent in Belgium count toward the overall 90-day Schengen allowance"],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "€50-80/day",
      days: [
        {
          day: "Day 1",
          title: "Gravensteen Castle, Ghent Altarpiece & Graslei",
          items: [
            "09:00 — Gravensteen Castle (€12). The 12th-century castle of the Counts of Ghent rises straight out of the city centre like a stage set — fully intact stone towers, a moat, a drawbridge, and a dungeon. The rooftop gives unobstructed views across the entire medieval skyline and out to the modern city beyond.",
            "11:00 — Walk through the Patershol neighbourhood (free). The cobblestoned streets immediately north of Gravensteen are where Ghent's best restaurants cluster — evening bookings are essential but a morning walk reveals which konobas have handwritten menus. Witloof (Belgian endive) dishes and Gentse Stoverij (Ghent beef stew) appear on every board.",
            "12:00 — Lunch at a Patershol brasserie: Gentse Stoverij with a glass of local beer, €12-16. The stew is cooked in Ghent Tripel ale and served with thick-cut frites.",
            "13:30 — Ghent Altarpiece at St Bavo's Cathedral (€12). Jan van Eyck's Adoration of the Mystic Lamb (1432) is the most complex and theologically layered painting in the history of northern European art. Stolen by Napoleon, confiscated by Prussia, damaged in two world wars, and two panels stolen in 1934 — one was not recovered until 2010. The recently restored panels are displayed in the Vijdt Chapel.",
            "16:00 — Graslei and Korenlei waterfront (free). The most beautiful stretch of medieval waterfront in Belgium — 12th-16th century guild houses lining both banks of the Leie river. Find a bench facing the water or take a boat tour from the Graslei jetty (€8-10, 40 minutes) for the canal-level view.",
            "19:00 — Dinner in the student quarter near Ghent University: Korenmarkt area has brasseries from €12-20 for a full meal. The density of good cheap restaurants in Ghent reflects the 60,000-strong student population. Try the local Gentse Neus (Ghent nose — a pink waterzooi sausage) for a genuine local experience.",
          ],
          cost: "€45-70 total",
        },
        {
          day: "Day 2",
          title: "SMAK Modern Art, Stam City Museum & Vrijdagmarkt",
          items: [
            "10:00 — SMAK (Stedelijk Museum voor Actuele Kunst) (€15). Ghent's museum of modern and contemporary art occupies a pavilion in the Citadelpark. The permanent collection includes Panamarenko's flying machines, Luc Tuymans, and Joseph Beuys — genuinely important European contemporary art that most Bruges visitors completely miss.",
            "12:30 — Lunch in the Citadelpark area: the park has food trucks and small cafes in summer. Alternatively the Overpoort student strip (5 minutes' walk) has falafel and curry for €5-8.",
            "14:00 — Stam Ghent City Museum (€12). A city history museum in the 15th-century Bijloke complex — medieval hospital buildings with extraordinary preserved beamed ceilings. The history of Ghent from its founding to the present, including its role as the birthplace of the European labour movement.",
            "16:00 — Vrijdagmarkt square (free). The Friday Market is Ghent's largest public square — historically the site of public executions, guild festivals, and workers' protests. The statue of Jacob van Artevelde at the centre marks where the 14th-century weaver leader addressed crowds of 60,000. The surrounding cafe terraces are excellent for an afternoon beer.",
            "18:00 — Pre-dinner aperitif: Ghent has a thriving craft beer scene. Dulle Griet bar (Vrijdagmarkt) has 500+ Belgian beers and requires you to leave a shoe as deposit for their signature yard-glass Kwak beer. Entirely worth the experience.",
            "20:00 — Dinner: Brasserie HA' (Korenmarkt) for modern Belgian cuisine with Ghent-sourced produce. Flemish stew, seasonal fish, Belgian cheese board. €25-35/person.",
          ],
          cost: "€50-75 total",
        },
        {
          day: "Day 3",
          title: "Ghent Market Morning & Bruges Day Trip",
          items: [
            "08:00 — Morning market at Bevrijdingsplein or the weekly Saturday market — fresh witloof, local cheeses, and Belgian waffles from street vendors (€2-3). The Saturday morning market in Ghent is one of the best food markets in Belgium.",
            "09:30 — Sint-Niklaaskerk (free). The 13th-century church at the foot of the Graslei is free to enter and contains remarkable Gothic interior architecture — the nave is Ghent's oldest. Less visited than St Bavo's Cathedral but architecturally impressive.",
            "10:30 — Train to Bruges (30 minutes, €10 each way, trains every 30 minutes). Bruges in half a day covers the Markt Square, the Belfry (€14), and the Rozenhoedkaai canal bend. The contrast between tourist-heavy Bruges and lived-in Ghent is immediately apparent.",
            "13:00 — Lunch in Bruges away from the Markt: a canal-side brasserie on the Dijver for carbonnade flamande and Brugse Zot beer, €14-18.",
            "15:00 — Canal boat tour in Bruges (€10.50). The Bruges canal circuit is different from Ghent's — narrower, more intimate, with more bridges. Book a tour in advance at https://www.getyourguide.com/s/?q=Bruges+Ghent+Belgium&partner_id=PSZA5UI",
            "17:30 — Train back to Ghent. Evening in the Overpoort student strip or a final canal-side bar in the Graslei area.",
          ],
          cost: "€40-65 total including transport",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "€130-220/day",
      days: [
        {
          day: "Day 1",
          title: "Private Guided Tour & Mystic Lamb",
          items: [
            "Check in to Ghent Marriott Hotel (Korenlei, directly on the canal, rooms from €130-200/night) or Hotel Harmony (Kraanlei, canal-view boutique hotel, €140-220/night).",
            "10:00 — Private walking tour of Ghent's medieval centre (€80-120/person, 2.5 hours, Context Travel or local guides). The history of Ghent's weaver guilds, Charles V's birthplace, and the city's extraordinary political history — it resisted Spanish rule, French occupation, and Napoleon more successfully than almost any other Belgian city.",
            "13:00 — Lunch at Brasserie HA' (Korenmarkt, modern Belgian, €25-35/person). The seasonal menu draws from Flemish farms and East Flanders produce.",
            "15:00 — Ghent Altarpiece with private art historian (€120-180 for 2 hours, guide only — entry is €12 extra). The theological programme of the Mystic Lamb takes an expert to decode: the central panel alone contains 250+ identifiable figures and a system of iconographic references that took van Eyck a decade to design.",
            "18:00 — Aperitif at the Graslei waterfront terraces. Gentse Tripel or a local witbier at golden hour with the guild houses glowing behind you.",
            "20:00 — Dinner at Publiek (Ham 39, 1 Michelin star) — modern Belgian cooking using hyper-local Ghent produce. Natural wines, seasonal menu. €55-75/person. Book 1 week ahead.",
          ],
          cost: "€200-320 total",
        },
        {
          day: "Day 2",
          title: "SMAK, Patershol & Canal Boat",
          items: [
            "10:00 — SMAK modern art museum (€15) with audio guide (€4). Allow 2.5 hours — the temporary exhibitions are often as strong as the permanent collection.",
            "13:00 — Long lunch in Patershol neighbourhood at Brasserie Pakhuis (Schuurkenstraat, cavernous 19th-century warehouse, Belgian classics, €25-40/person). Book ahead — locals fill it every lunch service.",
            "16:00 — Private canal boat tour (€80-120/hour exclusive hire). The guide takes the boat through the wider Ghent canals including the Portus Ganda area where the medieval harbour was located — a very different experience from the tourist canal boats.",
            "19:00 — Early evening: craft beer at Dulle Griet or a glass of jenever (Belgian gin) at a brown bar near Vrijdagmarkt.",
            "20:30 — Dinner at Restaurant Vrijmoed (Vlaanderenstraat, 1 Michelin star) — Belgium's most creative plant-forward tasting menu. The 7-course menu (€90/person) reinterprets Flemish ingredients with unusual technique.",
          ],
          cost: "€210-340 total",
        },
        {
          day: "Day 3",
          title: "Bruges with a Private Guide",
          items: [
            "09:00 — Train to Bruges (30 minutes, €10). A private guide in Bruges costs €120-180 for 3 hours and transforms the city from a backdrop into a story — the Flemish trading empire, van Eyck's workshop, the 1490 harbour silting that froze the city in medieval amber.",
            "13:00 — Lunch at a canal-side brasserie in Bruges (€20-30/person). Carbonnade flamande with Brugse Zot, or North Sea fish soup.",
            "15:00 — Groeningemuseum (€14) for the Flemish Primitive collection. Having already seen the Mystic Lamb in Ghent, the artistic context for van Eyck's work in Bruges hits differently.",
            "17:30 — Train back to Ghent.",
            "20:00 — Farewell dinner at Vrijmoed or Brasserie HA' with a full Ghent witbier and a final Gentse Stoverij.",
          ],
          cost: "€220-340 total",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "€350-800+/day",
      days: [
        {
          day: "Day 1",
          title: "Private Ghent, Mystic Lamb & Michelin Dinner",
          items: [
            "Check in to Hotel Harmony (Kraanlei, boutique canal-view property, €200-350/night) or a luxury apartment on the Graslei (€250-450/night through premium rental operators).",
            "Private transfer from Brussels Airport (€120-180, 50 minutes).",
            "10:00 — Private 3-hour tour of Ghent with a specialist art historian (€250-350). The city's extraordinary medieval guild history, Charles V's birthplace and its political significance, and the story of the Altarpiece's survival through five centuries of war and theft.",
            "13:30 — Lunch at Publiek (Ham 39, 1 Michelin star) with the full 5-course menu and wine pairing (€100-140/person).",
            "16:00 — Private Ghent Altarpiece session — arrange through the hotel or a specialist cultural tour operator for exclusive early or late access with a specialist curator (€300-500 for the private arrangement).",
            "20:00 — Dinner at Restaurant Vrijmoed (Vlaanderenstraat, 1 Michelin star), 10-course tasting menu with natural wine pairing (€150-200/person).",
          ],
          cost: "€600-950 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Canal Tour, SMAK & Craft Beer",
          items: [
            "09:30 — Private canal boat full morning (€300-400 for 3 hours, exclusive). The captain takes you to the areas of Ghent's canal system closed to standard tours — the Portus Ganda medieval harbour, the industrial canal locks, and the Bijloke hospital gardens seen from the water.",
            "12:30 — Lunch at Brasserie Pakhuis with a private dining room booking (€50-70/person, pre-arranged through the restaurant). Champagne, seasonal Belgian fish, regional cheeses.",
            "15:00 — SMAK with a curator-led private tour (arrange through the museum's education department or hotel concierge, €200-300 for 90 minutes). The permanent collection has multiple works normally in storage that appear in private viewings.",
            "18:00 — Jenever tasting at a specialist distillery (Ghent has several micro-distilleries reviving traditional Belgian gin). A guided tasting is €45-60/person.",
            "20:30 — Dinner at a private dining experience in Patershol — several Ghent chefs offer chef's table evenings in their restaurant kitchen for 2-6 guests (€120-180/person, pre-book 2-3 weeks ahead).",
          ],
          cost: "€700-1,100 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Bruges by Private Car & Brussels Grand Place",
          items: [
            "09:00 — Private car to Bruges (40 minutes). Art historian guide for the Groeningemuseum collection and a private Belfry visit at opening (€350-500 for a 3-hour specialist tour with pre-arranged access).",
            "13:00 — Lunch at De Karmeliet in Bruges (1 Michelin star, €60-80/person). Refined Belgian cuisine; the lunch menu is considerably better value than dinner.",
            "16:00 — Car continues to Brussels (80 minutes). Grand Place at dusk with the gold guild facades catching the last light — even for jaded travellers, it is genuinely beautiful.",
            "18:30 — Champagne at Hotel Amigo bar (5-star, steps from the Grand Place, €30-40/glass).",
            "20:30 — Dinner at Comme Chez Soi (Brussels, 2 Michelin stars, €150-220/person). Belgium's most celebrated classical French-Belgian dining room with an extraordinary Art Nouveau interior. Book 6-8 weeks ahead.",
          ],
          cost: "€800-1,300 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€18-35 (hostel or university guesthouse)",
      food: "€12-22 (student brasseries + markets)",
      transport: "€5-10 (tram + day trips)",
      activities: "€15-27 (castle + Altarpiece)",
      total: "€50-94/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€90-160 (3-star canal hotel)",
      food: "€40-70 (brasseries + 1 Michelin lunch)",
      transport: "€10-20 (tram + canal boat)",
      activities: "€30-55 (guided tours + SMAK)",
      total: "€170-305/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€200-450 (boutique canal property)",
      food: "€120-300 (two Michelin tables)",
      transport: "€50-180 (private car + canal boat)",
      activities: "€100-300 (private curator tours)",
      total: "€470-1,230/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "€14-20 (hostel dorm)",
      food: "€8-15 (student strip + supermarket)",
      transport: "€3-8 (mostly walking)",
      activities: "€12-15 (Altarpiece only)",
      total: "€37-58/day",
    },
    {
      tier: "👨‍👩‍👧 Family",
      accommodation: "€100-180 (family room, city centre)",
      food: "€45-80 (brasseries with kids menus)",
      transport: "€15-25 (tram + canal boat)",
      activities: "€40-65 (castle + Altarpiece + SMAK)",
      total: "€200-350/day",
    },
  ],
  mistakes: [
    {
      icon: "⏰",
      title: "Treating Ghent as a Half-Day Trip from Bruges",
      desc: "Most tourists visit Ghent for 3 hours as a day trip from Bruges and leave wondering what the fuss was about. The Ghent Altarpiece alone demands 90 minutes of unhurried time. The Patershol neighbourhood only reveals itself at dinner. The SMAK is a full morning. Ghent rewards at least 2 full days based in the city, not a rushed afternoon from Bruges.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🎨",
      title: "Skipping the Ghent Altarpiece",
      desc: "Many visitors walk past St Bavo's Cathedral without going in. The Ghent Altarpiece (€12) is the most stolen, most fought-over, most theologically layered painting in the history of northern European art. It was stolen by Napoleon, seized by Prussia, partly stolen again in 1934, and featured prominently in the Monuments Men story. Not seeing it in Ghent is like visiting Florence and skipping the David.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🍺",
      title: "Drinking Only Mainstream Belgian Beers",
      desc: "Jupiler and Stella Artois are Belgian but they tell you nothing about Belgian beer culture. Ghent has several craft producers and every bar worth visiting has a list of 50+ beers. Ask for Gentse Tripel, Gruut (brewed with herbs instead of hops, a medieval recipe revived in Ghent), or Dulle Griet's house selection. The difference between mass-market Belgian lager and artisan Ghent beer is as wide as the difference between Godiva chocolate and a real praline.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🗺️",
      title: "Ignoring the Student City Energy",
      desc: "Ghent's 60,000 university students keep the city alive at a price point and energy level that Bruges has lost entirely. The Overpoort strip is where students eat, drink, and socialise — cheap, chaotic, and genuinely fun. Even if you are not a student, eating a €8 meal among Ghent locals is a better experience than a €28 tourist lunch near Markt Square in Bruges.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "📅",
      title: "Visiting Only in Peak Summer Without Advance Bookings",
      desc: "Ghent has far fewer tourists than Bruges but the good restaurants in Patershol fill up fast from June through August. Publiek and Vrijmoed (both Michelin) book out 2-3 weeks ahead in summer. The Saturday morning market draws a city-wide crowd. Book restaurants 1 week ahead in shoulder season, 2-3 weeks in summer. The Ghent Altarpiece has timed entry slots that sell out in summer mornings.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  tips: [
    {
      icon: "🎫",
      title: "The Ghent City Card Covers Everything",
      desc: "The Ghent City Card (€30 for 48 hours, €35 for 72 hours) covers the Altarpiece, Gravensteen, SMAK, Stam, canal boat, and public transport. If you plan to visit more than 2 paid attractions it pays for itself. Available at the tourist office in the old post building on Korenmarkt.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌅",
      title: "Graslei at Dawn Is One of Belgium's Best Free Sights",
      desc: "The Graslei waterfront at 7am — before tour groups arrive — is the medieval Belgium that paintings show. The guild houses reflect in the still canal, delivery boats load from the quays, and the morning mist occasionally sits on the Leie river. Completely free and completely unforgettable.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🍲",
      title: "Eat Gentse Stoverij at a Patershol Konoba",
      desc: "Gentse Stoverij (Ghent beef stew braised in Ghent Tripel ale with mustard and fresh herbs) is the city's signature dish and is done properly only in the Patershol neighbourhood. Ask if it is made in house — the best versions simmer for 4+ hours and are served with hand-cut frites and extra mustard. Cost: €14-18 at a proper konoba.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🏛️",
      title: "The Gravensteen Rooftop Is Free with Entry",
      desc: "The Gravensteen Castle entry (€12) includes full rooftop access — the best medieval skyline view in Belgium. Unlike Bruges's Belfry (€14, 366 steps, timed entry), Gravensteen gives the same panoramic reward with a less crowded climb and a castle interior that actually looks like a real castle. Book guided tours in advance at https://www.getyourguide.com/s/?q=Ghent+Belgium&partner_id=PSZA5UI",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Is Ghent better than Bruges for a first-time visit to Belgium?",
      a: "Ghent is better if you want a city that feels authentically Belgian — real residents, student energy, restaurants that locals use, and the most important medieval painting in northern European art. Bruges is better if you want the most beautiful medieval streetscape with canal views that Ghent cannot quite match. For 3 days in Belgium, Ghent wins on depth. For a 1-day visit, Bruges wins on visual impact.",
    },
    {
      q: "What is the Ghent Altarpiece and why does it matter?",
      a: "The Ghent Altarpiece (Adoration of the Mystic Lamb) is a 12-panel polyptych completed by Jan and Hubert van Eyck in 1432. It is considered the most important painting in the history of northern European art for its revolutionary technique (oil glazing, near-photographic realism) and its extraordinary theological complexity. It was stolen by Napoleon in 1794, seized by Prussia after World War I, and two panels were stolen in 1934 — one was never recovered until 2010. It is displayed in the Vijdt Chapel of St Bavo's Cathedral (€12).",
    },
    {
      q: "How do I get from Brussels to Ghent?",
      a: "Direct train from Brussels Midi to Ghent Sint-Pieters takes 30-35 minutes and costs €10-15. Trains run every 15-20 minutes. From Brussels Airport (Zaventem), take a train to Brussels Midi first (20 minutes), then change to the Ghent train. Total journey from airport to Ghent: approximately 55-65 minutes. Private transfer from Brussels Airport to Ghent costs €80-100 and takes 45-60 minutes by car.",
    },
    {
      q: "What is witloof and Gentse Neus?",
      a: "Witloof (Belgian endive) is a bitter chicory vegetable grown underground in darkness to keep it pale and tender — Belgium is the world's largest producer. In Ghent it appears braised in butter, wrapped in ham and bechamel, or raw in salads. Gentse Neus (Ghent nose) is a traditional pink sausage made from pork offal seasoned with herbs — a local delicacy available at butchers and the Saturday market. Neither is particularly adventurous by Belgian standards but both are genuinely local to Ghent.",
    },
  ],
  combineWith: ["bruges-3-days", "amsterdam-4-days", "paris-5-days"],
  relatedSlugs: ["bruges-3-days", "amsterdam-4-days", "paris-5-days", "brussels-2-days"],
  galleryQuery: "ghent belgium graslei waterfront gravensteen castle canal",
};

export const metadata: Metadata = {
  title: "Ghent in 3 Days: Gravensteen, Ghent Altarpiece, Graslei & Belgian Food (2026)",
  description:
    "Complete 3-day Ghent guide covering Gravensteen Castle, the Mystic Lamb Altarpiece, Graslei waterfront, Gentse Stoverij beef stew, witloof, SMAK modern art, and student city energy — real euro costs for every budget.",
  keywords: [
    "ghent itinerary 3 days",
    "ghent travel guide 2026",
    "ghent altarpiece mystic lamb",
    "gravensteen castle ghent",
    "graslei waterfront ghent",
    "gentse stoverij recipe",
    "ghent budget travel",
    "belgium travel guide 2026",
  ],
  openGraph: {
    title: "Ghent in 3 Days: Altarpiece, Castle & Belgian Food (2026)",
    description:
      "Gravensteen Castle, the Ghent Altarpiece, Graslei waterfront, Gentse Stoverij, and the real Belgium tourists miss — real euro costs for every budget.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/ghent-3-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghent in 3 Days (2026)",
    description: "Gravensteen, Mystic Lamb, Graslei, Gentse Stoverij — the real Belgium.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/ghent-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Ghent in 3 Days: Gravensteen, Ghent Altarpiece, Graslei & Belgian Food (2026)",
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
          name: "Ghent in 3 Days",
          item: "https://www.incredibleitinerary.com/blog/ghent-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Ghent",
      description:
        "A fully living medieval Belgian city with the Gravensteen Castle, the Ghent Altarpiece (Mystic Lamb), the Graslei waterfront, Gentse Stoverij beef stew, and a 60,000-strong student population keeping the city vibrant.",
      geo: { "@type": "GeoCoordinates", latitude: 51.0543, longitude: 3.7174 },
    },
  ],
};

export default function GhentPage() {
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
