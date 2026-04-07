import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Nice",
  country: "France",
  countryFlag: "🇫🇷",
  slug: "nice-3-days",
  heroQuery: "nice france promenade des anglais mediterranean riviera azure coast",
  heroAlt: "Nice France Promenade des Anglais turquoise Mediterranean coast with palm trees",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "11 min read",
  intro: "Nice is the French Riviera without the pretension — a real city of 340,000 where the morning flower market fills the Cours Saleya with roses and basil, the old town's ochre alleyways smell of socca on griddles, and the Mediterranean stretches turquoise past the Promenade des Anglais for as far as you can see. Three days is enough to swim in it, eat your way through Vieux-Nice, take the train to Monaco, and climb to Èze to look down at the coast from 427 meters.",
  stats: { duration: "3 Days", budgetFrom: "€55", bestMonths: "May–Jun, Sep–Oct", airport: "NCE (Nice Côte d'Azur)" },
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
        ["Schengen Visa Required", "France is part of the Schengen Zone. Apply for a short-stay Schengen visa at the French embassy or VFS Global. Fee: €80. Processing time: 15–45 days. Book your VFS Global appointment well in advance — peak-season slots fill up 3–4 weeks out."],
        ["Key Documents", "Passport valid 3 months beyond your return date, bank statements showing at least €100/day of stay, confirmed hotel bookings, return flight tickets, employment letter or business registration, and travel insurance covering a minimum of €30,000."],
        ["90/180 Day Rule", "A Schengen visa allows a maximum stay of 90 days within any 180-day period across all Schengen countries combined. If combining Nice with Paris, Spain, or Italy, all days count together toward the 90-day limit."],
        ["Travel Insurance", "Minimum €30,000 medical coverage is a mandatory requirement for the Schengen visa application. Most comprehensive travel insurance policies purchased in India meet this threshold — verify the policy wording explicitly before applying."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["Visa-Free Access", "USA, UK, Canada, Australia, and New Zealand passport holders can enter France and the broader Schengen area visa-free for up to 90 days within any 180-day period. No pre-approval required."],
        ["ETIAS from 2025", "A new ETIAS travel authorization is required from 2025 for visa-exempt travelers (USA, Canada, Australia, and others). Cost: €7, valid 3 years, multiple entries. Apply at etias.eu.int before travel — the process takes minutes online."],
        ["UK Post-Brexit Note", "UK passport holders enter under the visa-free 90/180 Schengen rule and will require ETIAS. Ensure your passport has at least 6 months of validity remaining and was issued within the last 10 years."],
        ["Monaco Note", "Monaco is not part of the EU or Schengen, but it has an open border with France. If you can enter France, you can enter Monaco without any additional documentation or passport check."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "€55–85/day",
      days: [
        {
          day: "Day 1",
          title: "Promenade, Vieux-Nice & Castle Hill",
          items: [
            "8:00am — Morning walk along the Promenade des Anglais (free) — the 7km seafront promenade is Nice's spine. Walk east from the airport direction toward the old town. The pebble beach at this hour has locals swimming and doing yoga.",
            "9:00am — Cours Saleya flower market in Vieux-Nice (open Tuesday–Sunday, 6am–1pm). The market fills with cut flowers, potted herbs, lavender from the hills, and fresh vegetables. Go at 9am for the full spectacle — it starts winding down by noon.",
            "10:00am — Socca from Chez René Socca (Rue Miralheti, near the market) — the definitive Nice experience. Socca is a thin pancake made from chickpea flour, olive oil, and black pepper, cooked in a wood-fired oven, served hot in folded paper. €3–4 per portion. Eat it immediately, standing at the counter.",
            "11:00am — Wander Vieux-Nice (Old Town) on foot. The narrow streets (rues) are best explored without a map — Rue de la Boucherie, Rue Droite, Rue du Marché. Baroque churches appear unexpectedly: the Chapelle de la Miséricorde (free, ornate interior), the Cathédrale Sainte-Réparate.",
            "1:00pm — Lunch at a Niçoise café in the old town. Pan bagnat (the Nice tuna sandwich in a round bread roll, €6) or a full salade niçoise (€12–15). Not the tourist version with green beans — the real one has canned tuna, hard-boiled egg, anchovies, olives, raw vegetables.",
            "3:00pm — Castle Hill (Colline du Château) — take the free elevator from the eastern end of the Promenade or walk the stairs. The hilltop park has ruins of a medieval castle (demolished by Louis XIV), waterfalls, and the best panoramic view of the Baie des Anges and the old town rooftops. Allow 1 hour.",
            "5:30pm — Rauba Capeu viewpoint (east of Castle Hill, at the base of the hill by the war memorial) — the most photographed Nice angle: the full sweep of the Promenade with the Baie des Anges behind it. Best light is late afternoon.",
            "8:00pm — Dinner in Vieux-Nice — La Merenda (Rue Raoul Bosio) is famously excellent for traditional Niçoise cooking (pissaladière, daube, socca again) but tiny and takes no reservations — arrive at 7:30pm and wait. Budget option: any of the trattorias on Rue de la Terrasse for €14–18 for a full meal.",
          ],
          cost: "€45–60 total",
        },
        {
          day: "Day 2",
          title: "Monaco Day Trip by Train",
          items: [
            "8:30am — Take the train from Nice-Ville station to Monaco-Monte-Carlo (€4.20 each way, 25 minutes, trains run every 30 minutes). The coastal line clings to cliffs and tunnels — sit on the right side leaving Nice for sea views.",
            "9:30am — Arrive Monaco. Walk to the Casino de Monte-Carlo for exterior photos (free, impressive Belle Époque architecture, gardens with Ferrari-standard cars). The casino interior requires €18 entry and smart dress code — optional.",
            "11:00am — Monaco-Ville (the old town on the rock): walk up to Prince's Palace for the Changing of the Guard at 11:55am (free, watched from the square), then Palace museum (€13 if interested in royal apartments).",
            "12:30pm — Lunch in Monaco: expensive by definition. Budget: sandwiches from the U Cavagnëtu market stall (€6–9). Mid option: Café de Paris terrace (€20–25 for a Monégasque croque-monsieur and view of the casino).",
            "2:00pm — Oceanographic Museum (€20) — founded by Prince Albert I in 1910, one of the finest marine museums in the world. Live sharks in the tank directly beneath your feet. The rooftop terrace has 360° views over Monaco.",
            "4:00pm — Walk the Monaco Grand Prix circuit on foot — the full F1 street circuit is accessible as public roads. The hairpin at Casino Square, the tunnel section, and the swimming pool chicane section are all walkable and free.",
            "5:30pm — Train back to Nice. Arrive by 6pm.",
            "8:00pm — Dinner in Nice: Rue Masséna area or try the more local Rue Bonaparte for €15–20 pasta or a formule menu (starter + main + glass of wine).",
          ],
          cost: "€50–70 total (incl. Monaco transport and entry)",
        },
        {
          day: "Day 3",
          title: "Èze Village & Beaulieu-sur-Mer",
          items: [
            "9:00am — Bus 82 from Nice (Jean Médecin stop) to Èze-le-Village (€1.50, 25 minutes). The bus climbs the Grande Corniche mountain road — the views of the coast grow more dramatic with every turn.",
            "9:45am — Èze perched village: a medieval village built on a cliff 427 meters above the sea. The car-free village of pale stone houses is vertigo-inducing in the best way. Walk up to the ruined château at the summit — cactus garden below, the Mediterranean directly below you, Monaco visible to the east.",
            "10:30am — Fragonard perfume factory (free guided tour, 20 minutes) — one of the world's finest perfumeries has been operating in Èze since 1926. The tour explains the extraction of Grasse flowers into essence. No obligation to buy.",
            "12:00pm — Lunch in Èze with sea views. Nid d'Aigle (Eagle's Nest restaurant) has the most dramatic terrace — €20–30 for a meal with one of the best views on the Riviera. Book ahead or arrive early.",
            "2:00pm — Bus or walk down to Èze-sur-Mer (the coastal village below — different from Èze-le-Village). Take the train west toward Nice and stop at Beaulieu-sur-Mer (€2.70, 5 minutes) — a quieter, calmer bay with a proper beach and clear water.",
            "3:30pm — Swim at Beaulieu-sur-Mer beach (free public section) or walk the Promenade Maurice Rouvier coastal path along the cliff to Saint-Jean-Cap-Ferrat (45 minutes, spectacular).",
            "6:00pm — Train back to Nice. Arrive by 6:30pm.",
            "8:00pm — Final evening in Vieux-Nice. Aperitif of a pastis (€4–5) in a square, then dinner. La Rossettisserie (Rue Rossetti) for spit-roasted meats — lamb, chicken, suckling pig — with ratatouille, €15–22.",
          ],
          cost: "€40–55 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€130–200/day",
      days: [
        {
          day: "Day 1",
          title: "Markets, Museums & Rooftop Evening",
          items: [
            "9:00am — Cours Saleya flower and food market — socca breakfast from Chez René Socca, then explore the adjacent food stalls for tapenade, olive oil, and crystallized fruits from the Nice hinterland.",
            "10:30am — Matisse Museum (164 Avenue des Arènes de Cimiez, €10) — housed in a 17th-century Genoese villa, the permanent collection covers Matisse's entire career with 68 paintings, 236 drawings, and the original paper cut-outs for his late works. The olive-tree garden outside is lovely.",
            "1:00pm — Lunch at Le Chantecler (Hotel Negresco) for a blowout, or more affordably at Les Agaves (Rue des Ponchettes) for excellent modern Niçoise cooking at €25–35 for two courses.",
            "3:00pm — Marc Chagall National Museum (Avenue Dr Ménard, €10) — 17 large-format Biblical Message paintings in a space designed by Chagall himself. The stained glass windows in the concert hall are extraordinary.",
            "6:00pm — Sunset aperitif at a rooftop bar: La Terrasse at the Hotel Windsor or the rooftop of the Hotel Aston La Scala with views over the old town.",
            "8:30pm — Dinner at La Merenda (Rue Raoul Bosio) — book by phone or visit in person the day before. The chef Jacques Maximin's simplified Niçoise menu changes with season and market. Around €35–45/person for a full meal. No credit cards.",
          ],
          cost: "€140–180 total",
        },
        {
          day: "Day 2",
          title: "Private Monaco & Èze Tour, Beach Club",
          items: [
            "9:00am — Private half-day tour of Monaco and Èze (€65–90/person for small groups via local operators, or book through your hotel). A guide provides context on the principality's history, architecture, and the Grimaldi family that has ruled Monaco since 1297.",
            "11:00am — Oceanographic Museum in Monaco with your guide's commentary — significantly better experience than going alone.",
            "1:30pm — Lunch at a Monaco restaurant. Café de Paris terrace for the experience, or Beefbar Monaco for exceptional burgers and truffle fries at €25–35.",
            "3:00pm — Return to Nice and spend the afternoon at a private beach club. Castel Plage or Blue Beach offer sun loungers (€20–35) with waitress service, calm water, and far fewer tourists than the main Promenade sections.",
            "6:00pm — Walk the Monaco Grand Prix circuit section near the harbor — the yacht-filled Port Hercule at golden hour is spectacular.",
            "8:30pm — Dinner at Keisuke Matsushima (Nice, Rue de France) — a French-Japanese fusion from a Nice-based Japanese chef. Tasting menu €55–75/person.",
          ],
          cost: "€160–210 total",
        },
        {
          day: "Day 3",
          title: "Antibes, Picasso Museum & Îles de Lérins",
          items: [
            "9:00am — Train from Nice to Antibes (€4.50 each way, 25 minutes). Antibes has one of the best-preserved old town walled cities on the Riviera and was home to Picasso, Graham Greene, and F. Scott Fitzgerald.",
            "10:00am — Picasso Museum (Château Grimaldi, €8) — Picasso lived and worked here in 1946 and donated the works he created during this period. The terrace of the château overlooks the sea.",
            "12:00pm — Marché Provençal in Antibes old town (morning market, closes 1pm) — cheeses, charcuterie, fresh herbs, tapenade. Buy picnic supplies.",
            "1:30pm — Boat to Île Sainte-Marguerite (€20 return, 15 minutes from Antibes port or €20 from Cannes) — the island where the Man in the Iron Mask was imprisoned. Pine forest, turquoise bays, almost no cars. Swim in the crystal-clear water off the fort rocks.",
            "4:00pm — Return boat to mainland. Train back to Nice.",
            "8:00pm — Final dinner in Nice at La Petite Maison (Rue Saint-François de Paule) — famous for its Niçoise food and its celebrity clientele. Pissaladière, socca, grilled fish, rosé from Provence. €45–60/person.",
          ],
          cost: "€150–190 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€400+/day",
      days: [
        {
          day: "Day 1",
          title: "Negresco Arrival & Promenade Evening",
          items: [
            "Check in to Hotel Negresco (Promenade des Anglais, €400–900/night) — the pink dome of this 1913 palace hotel is the symbol of Nice. Each room is uniquely decorated with period antiques. Alternatively, La Pérouse hotel is perched directly on Castle Hill with private pool and terrace sea views.",
            "Afternoon: private city walking tour with a local historian (€150–250 for 2 hours) covering Vieux-Nice, the Belle Époque architecture of the Promenade, and Nice's complex political history.",
            "6:00pm — Sunset cocktails at the Negresco's Relais bar or the terrace at the Hotel Radisson Blu overlooking the Promenade.",
            "8:30pm — Dinner at Le Chantecler (Hotel Negresco, 1 Michelin star) — the most formally grand restaurant in Nice, with Regency furniture, chandeliers, and a wine list of 15,000 bottles. Tasting menu €130–180/person.",
          ],
          cost: "€500–800 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Helicopter to Monaco & Private Beach",
          items: [
            "10:00am — Helicopter to Monaco from Nice airport (Héli Air Monaco, €150 one-way, 7 minutes). The coastal cliff view from the helicopter makes the Riviera make visual sense in a way that ground travel cannot.",
            "11:00am — Monaco with a private guide. The palace state rooms, the collection at Musée Océanographique with a curator-arranged visit, lunch at the Hôtel de Paris Monte-Carlo (Joel Robuchon's Restaurant Le Louis XV, 3 Michelin stars, €250+/person).",
            "3:00pm — Return to Nice by luxury transfer. Afternoon at Beau Rivage beach club (private cabana, €80–150, directly in front of Nice's best-positioned beach).",
            "8:00pm — Dinner at Jan (Rue Lascaris, Nice) — South African chef Jan Hendrik van der Westhuizen's Michelin-starred restaurant. A unique voice in the French Riviera dining scene, €90–130/person tasting menu.",
          ],
          cost: "€600–1,000 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Èze by Private Transfer & Villa d'Époque",
          items: [
            "9:00am — Private car to Èze-le-Village (30 minutes via the Moyenne Corniche, €80–120 return). The driver waits while you explore the village.",
            "Èze with a private art and history guide (€200 for 2 hours) — the medieval fortifications, the Fragonard perfumery VIP tour and bespoke scent consultation (€200–400 for a personalized fragrance).",
            "1:00pm — Lunch at Château Eza (the 5-star hotel built into the village rocks) — terrace restaurant with sheer cliff drops to the Mediterranean. €60–90/person for a Mediterranean-French menu.",
            "3:00pm — Drive to Villefranche-sur-Mer (15 minutes west of Nice) — arguably the most beautiful bay on the Riviera. Jean Cocteau decorated the fishermen's chapel here (Chapelle Saint-Pierre, €3). Private boat charter for a 2-hour coastal cruise (€300–500 for the boat).",
            "Evening: final dinner at La Petite Maison (Nice) or a request through the Negresco concierge for a private chef dinner in the hotel's private dining room.",
          ],
          cost: "€500–900 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "€25–45", food: "€15–20", transport: "€5–10", activities: "€10–15", total: "€55–90/day" },
    { tier: "✨ Mid-Range", accommodation: "€100–180", food: "€35–60", transport: "€15–25", activities: "€25–50", total: "€175–315/day" },
    { tier: "💎 Luxury", accommodation: "€300–800", food: "€80–200", transport: "€50–150", activities: "€100–300", total: "€530–1,450/day" },
  ],
  mistakes: [
    { icon: "🪨", title: "Expecting Sand Beaches", desc: "Nice's beaches are pebble, not sand. This surprises first-time visitors who arrive in flip-flops and can't walk to the water. Pack or rent beach shoes (available at beachside shops for €5–8). The water is crystal clear and the pebbles are smoothed, but barefoot access is genuinely uncomfortable. Sand beaches do exist: Villefranche-sur-Mer (15 min by train) and Antibes (25 min) have small sandy sections.", color: "bg-red-50 border-red-200" },
    { icon: "🏘️", title: "Skipping Vieux-Nice Entirely", desc: "Many visitors spend their time on the Promenade and miss the old town entirely. This is a serious error. Vieux-Nice is one of the finest baroque old towns in France — the color-washed façades, the labyrinthine alleyways, the Cours Saleya market, and the street food scene are the reason Nice is worth visiting at all. Budget at least half a day here, preferably a full morning.", color: "bg-orange-50 border-orange-200" },
    { icon: "🌸", title: "Missing the Morning Flower Market", desc: "The Cours Saleya market runs Tuesday to Sunday from 6am to 1pm. By noon it's visibly winding down — vendors packing up, fewer flowers, less atmosphere. Go at 9am for the full experience: the flower stalls in full display, socca vendors firing up their pans, locals shopping for the week. It's free to browse and one of the best markets in southern France.", color: "bg-yellow-50 border-yellow-200" },
    { icon: "🎰", title: "Overpaying for Monaco", desc: "Monaco is a walkable principality and largely free to experience. The architecture, the palace, the harbor of superyachts, the Grand Prix circuit, the Oceanographic Museum rooftop view — all either free or reasonably priced. The casino interior charges €18 entry and requires smart dress. Worth seeing once from the outside; going inside is optional and expensive. Don't let Monaco become a money-drain when a day trip can be done for €15–25 total.", color: "bg-pink-50 border-pink-200" },
  ],
  tips: [
    { icon: "🎫", title: "French Riviera Pass Covers the Bus Network", desc: "The French Riviera Pass (€29/1 day, €49/3 days, €69/7 days) includes unlimited travel on the Nice bus network, the Nice tramway, and entrance to several museums including the Matisse Museum and Marc Chagall Museum. If you're using public buses to explore (and you should be — they go to Èze, Antibes, Monaco and back), the 3-day pass pays for itself quickly.", color: "bg-amber-50 border-amber-200" },
    { icon: "🍕", title: "Socca Is Nice's Great Street Food — Understand It First", desc: "Socca is made from chickpea flour, water, olive oil, and black pepper — mixed to a liquid batter, poured into enormous copper pans, cooked in a wood-fired oven at 300°C for 5–7 minutes, and served folded in a piece of paper while still hot. It's crispy at the edges, soft and custardy in the center, and tastes of nothing else in French cuisine. Chez René Socca near the market is the most recommended. Eat it fresh — it deteriorates within minutes.", color: "bg-teal-50 border-teal-200" },
    { icon: "🏖️", title: "The Best Beaches Are Not on the Main Promenade", desc: "The central Promenade beaches are fine but crowded in summer. Castel Plage (far eastern end of the Promenade, below Castle Hill) is notably quieter. Better still: take the train 15 minutes to Villefranche-sur-Mer for the horseshoe bay with calmer, cleaner water and a more authentic atmosphere. Beaulieu-sur-Mer (10 minutes by train) is another excellent alternative — protected bay, warm water, pleasant promenade.", color: "bg-green-50 border-green-200" },
    { icon: "📅", title: "Late September Is the Optimal Time to Visit Nice", desc: "Mid-July through August: beaches packed, accommodation prices peak (often 60–80% above shoulder season), temperatures 30–35°C. Late September: sea temperature still 24°C (warmer than peak summer due to thermal lag), hotel prices down 40–50%, crowds dropped sharply, the light in October turns golden and theatrical. If you have flexibility, September 20–October 10 is the best window on the Riviera.", color: "bg-blue-50 border-blue-200" },
  ],
  faqs: [
    { q: "Is Nice worth visiting compared to other Riviera towns?", a: "Yes — and not just as a beach destination. Nice is the only proper city on the Riviera with real cultural infrastructure: world-class museums (Matisse, Chagall), a genuinely excellent old town with authentic street food, a functioning daily market, and diverse dining at all price points. Cannes, Monaco, and Saint-Tropez are beautiful but resort-focused. Use Nice as your base for 3 days and take day trips to those towns." },
    { q: "What exactly is socca?", a: "Socca is Nice's iconic street food — a thin, unleavened pancake made from chickpea flour, olive oil, water, and black pepper, cooked at very high heat in a wood-fired oven in large copper pans. It has crispy, slightly charred edges and a soft, almost custardy center with a faintly nutty flavor. It's unique to the Nice region (a similar version called farinata exists in Genoa across the Italian border). Nothing in French cuisine quite resembles it. Cost: €3–4 a portion." },
    { q: "How do I get from Nice Airport to the city center?", a: "Tram Line 2 (Tramway du Pays Niçois) runs directly from both airport terminals to the city center (Jean Médecin or Vieux-Nice-Garibaldi stop). Cost: €1.70, journey time: 8–12 minutes depending on your stop. A taxi to the city center costs €25–35. The tram is clearly the best option — frequent, fast, cheap, and drops you in the center." },
    { q: "What is the best day trip from Nice?", a: "Monaco by train is the easiest and most practical — 25 minutes each way, €4.20 return, a full day of walking, museums, and the principality's unique character. Èze village is more scenic and spiritual — the medieval cliff village at 427m with perfume factory and spectacular coastal views. Antibes is the best for combining beach, old town, and the Picasso Museum. Cannes (30 min, €6 return) for the Croisette glamour. All are doable in a single day." },
    { q: "Can I swim in Nice in October?", a: "Yes. The Mediterranean has significant thermal mass and stays warm well into autumn. Average water temperature in October is 21–23°C — comfortable for swimming. Late September water temperature is 24–25°C, warmer than many northern European beach destinations in July. November cools noticeably (18°C). For swimming, May through late October is entirely viable, with July–September being peak warmth." },
  ],
  combineWith: ["paris-5-days", "barcelona-4-days", "rome-4-days"],
  relatedSlugs: ["paris-5-days", "barcelona-4-days", "florence-3-days", "lyon-3-days"],
  galleryQuery: "nice france riviera promenade mediterranean old town",
};

export const metadata: Metadata = {
  title: "Nice in 3 Days: French Riviera Itinerary 2026 (Budget to Luxury)",
  description: "3 days in Nice with the French Riviera's best day trips — Monaco, Èze, Antibes. Real costs, socca spots, beach guide, and the Promenade timing secret.",
  keywords: ["nice itinerary 3 days", "nice france travel guide", "french riviera itinerary", "monaco day trip from nice", "nice budget travel"],
  openGraph: {
    title: "Nice in 3 Days: French Riviera 2026 Itinerary",
    description: "Monaco day trips, Èze village, socca guide, real euro costs — complete Nice itinerary from budget to luxury.",
    images: [{ url: "https://images.unsplash.com/photo-1491166617655-0723a0567989?w=1200&q=80", width: 1200, height: 630, alt: "Nice France Promenade des Anglais Mediterranean coast" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Nice in 3 Days (2026)", description: "Monaco, Èze, socca, real euro costs — the complete French Riviera itinerary." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/nice-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Nice in 3 Days: French Riviera Itinerary 2026 (Budget to Luxury)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1491166617655-0723a0567989?w=1200&q=80",
      description: "3 days in Nice with the French Riviera's best day trips — Monaco, Èze, Antibes. Real costs, socca spots, and beach guide.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Nice 3 Days", item: "https://www.incredibleitinerary.com/blog/nice-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Nice, France",
      description: "The capital of the French Riviera — a city of Baroque churches, pebble beaches, morning flower markets, socca street food, and the turquoise Mediterranean.",
      touristType: ["Beach travelers", "Cultural tourists", "Food lovers", "Day-trippers to Monaco and Èze"],
    },
  ],
};

export default function NicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
