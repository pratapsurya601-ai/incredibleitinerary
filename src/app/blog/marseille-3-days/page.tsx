import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Marseille",
  country: "France",
  countryFlag: "🇫🇷",
  slug: "marseille-3-days",
  heroQuery: "marseille vieux port france mediterranean coast",
  heroAlt: "Marseille Vieux-Port with boats and Notre-Dame de la Garde basilica France",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "12 min read",
  intro:
    "Marseille is France's oldest city and its most misunderstood — a port of 900,000 people where the morning fish market at the Vieux-Port has run uninterrupted for 2,600 years, where the limestone Calanques plunge 400 metres into turquoise water just 20 minutes from the city centre, and where the best bouillabaisse on earth is ladled from copper pots in restaurants that haven't changed their recipe since the 19th century. Three days gives you the old port, the oldest neighbourhood in France, an island fortress from a Dumas novel, and one of the most spectacular coastlines in Europe.",
  stats: {
    duration: "3 Days",
    budgetFrom: "€60",
    bestMonths: "May–Sep",
    airport: "MRS (Marseille Provence)",
  },
  toc: [
    { id: "plans",       emoji: "⚡", label: "Which Plan Are You?" },
    { id: "visa",        emoji: "📋", label: "Visa & Entry" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget",      emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes",    emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips",        emoji: "💡", label: "Pro Tips" },
    { id: "faq",         emoji: "❓", label: "FAQ" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-amber-50",
      border: "border-amber-200",
      titleColor: "text-amber-800",
      items: [
        [
          "Schengen Visa Required",
          "France is a full Schengen member. Apply for a short-stay Type C Schengen visa at the French embassy or VFS Global before travel. Fee: €80. Processing time: 15–45 working days. Peak season (June–August) VFS appointment slots fill up 4–6 weeks in advance — book early.",
        ],
        [
          "Key Documents",
          "Passport valid for at least 3 months beyond your planned departure date, 3 months of bank statements showing a minimum balance of €100/day of stay, confirmed accommodation bookings, return flight tickets, a covering letter from your employer or business, and travel insurance with a minimum of €30,000 medical coverage.",
        ],
        [
          "90/180 Day Rule",
          "A Schengen visa permits a maximum of 90 days within any 180-day rolling period across all Schengen countries combined. If combining Marseille with Paris, Spain, Italy, or any other Schengen destination, all days count together toward the 90-day ceiling.",
        ],
        [
          "Travel Insurance",
          "A minimum of €30,000 medical and repatriation coverage is a mandatory Schengen visa requirement — not optional. Verify that your Indian travel insurance policy explicitly states coverage in France/EU. Most comprehensive international policies sold in India meet this threshold.",
        ],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        [
          "Visa-Free Access",
          "USA, Canada, Australia, New Zealand, and most EU/EEA passport holders enter France visa-free for up to 90 days within any 180-day period. No pre-approval is required — just a valid passport.",
        ],
        [
          "ETIAS from 2025",
          "From 2025, visa-exempt nationalities (USA, Canada, Australia, New Zealand, and others) are required to obtain ETIAS travel authorisation before entering the Schengen zone. Cost: €7, valid for 3 years with multiple entries. Apply at etias.eu.int — the online process takes under 10 minutes.",
        ],
        [
          "UK Post-Brexit Note",
          "UK passport holders enter under the Schengen 90/180 visa-free rule and will require ETIAS. Ensure your passport was issued within the last 10 years and has at least 6 months of remaining validity.",
        ],
        [
          "Calanques Access Note",
          "The Calanques National Park imposes seasonal access restrictions from mid-June through mid-September due to forest fire risk. Some coastal paths require a free online permit (préfecture-13.gouv.fr). Check restrictions before your visit — they change year to year.",
        ],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "€60–90/day",
      days: [
        {
          day: "Day 1",
          title: "Vieux-Port, Le Panier & Notre-Dame de la Garde",
          items: [
            "7:30am — Vieux-Port fish market (Quai des Belges) — the poissonnerie has operated at the eastern end of the old port since Marseille was a Greek colony. Fishermen arrive by 6am; the market is at peak activity from 7:30–9:30am. Tourists rarely make it this early. Watch the fishwives (poissonnières) shout prices in Marseillais French and sell sea urchins, rascasse, and rouget directly off the boats. Free to watch; €3–5 for a small bag of sea urchins if you're adventurous.",
            "9:00am — Café and pastry at a bar on the Vieux-Port quayside — coffee and a croissant for €4–5. The port is best at this hour: boats rocking gently, the basilica watching from the hill, the fish market winding down behind you.",
            "10:00am — Le Panier district — Marseille's oldest neighbourhood, built on the hillside above the port. The streets are steep, narrow, and covered in commissioned street art (the 'Le Murmure' mural on Rue du Refuge is 20 metres tall). Wander without a map: Rue du Panier, Place des Moulins, Montée des Accoules. The Vieille Charité almshouse (Place des Moulins) has a magnificent Baroque chapel — exterior is free, the small interior museum is €6.",
            "12:30pm — Lunch in Le Panier. Street food options: a panisse (fried chickpea fritter, €2–3) from a market stall, or a full lunch at a neighbourhood restaurant for €12–16 (formule menu: entrée, plat, dessert). The soupe de poisson with rouille and croutons at port-side brasseries is €8–10 — the budget version of bouillabaisse, made from the same fish stock.",
            "2:30pm — Walk up to Notre-Dame de la Garde basilica (La Bonne Mère). The city's iconic symbol sits at 162 metres above sea level. The walk from the port takes 35–45 minutes uphill through residential streets; the No. 60 bus also runs there (€1.70). The Romano-Byzantine basilica is free to enter — the interior is covered in ex-voto offerings (model ships, crutches, paintings) left by sailors and their families over 150 years. The panoramic view from the terrace is the finest in Marseille: the entire port, the islands, the Calanques coastline, the Alps in the far distance.",
            "5:00pm — Walk back down to the Corniche Kennedy (coastal road) for sunset. The flat rocks below the Corniche are where Marseillais locals swim and sunbathe from May onwards — no beach infrastructure, no sun-lounger fee, just flat limestone and the sea.",
            "7:30pm — Aperitif (pastis and water, €4–5) at a Vieux-Port bar. Pastis is the anise-spirit of Provence — mixed 1:5 with cold water it turns milky yellow. It's the ritual drink of Marseille evenings.",
            "8:30pm — Dinner: soupe de poisson with rouille, croutons, and gruyère at a port brasserie, €10–14. Or try a Marseillais pieds et paquets (lamb tripe, €14–16) at a traditional bistro — an acquired taste but the city's other great dish alongside bouillabaisse.",
          ],
          cost: "€45–65 total",
        },
        {
          day: "Day 2",
          title: "Calanques Boat Tour & Château d'If",
          items: [
            "8:30am — Ferry to Château d'If from the Vieux-Port quay (Frioul If Express, €12 return, departs every 60–90 minutes from 9am). The island fortress was built by François I in 1524 and became a prison for Protestant heretics, political prisoners, and the inspiration for Alexandre Dumas' 'The Count of Monte Cristo'. The crossing takes 20 minutes across the bay — the view of Marseille from the sea is extraordinary.",
            "9:30am — Explore Château d'If (€9 entry, included if you ask — sometimes bundled in ferry ticket). See the 'cell of Edmond Dantès' (a fictional addition for tourists but worth the laugh), climb the towers, and walk the ramparts for 360-degree bay views. Allow 90 minutes.",
            "11:30am — Return ferry to Vieux-Port. On the same Frioul If Express you can extend your ticket to visit the Frioul archipelago (€16 total return for both islands). The Frioul islands have a sheltered sandy beach (rare in this area) and ruins of a 17th-century quarantine hospital.",
            "1:00pm — Quick lunch back at the port — a baguette sandwich with local charcuterie from the Marché des Capucins (Cours Belsunce direction, 10 min walk from port) for €4–6.",
            "2:30pm — Calanques boat tour from the Vieux-Port (depart from Quai des Belges). Budget boat tours run €25–35 for a 2-hour trip that passes 5–7 Calanques — Sormiou, Morgiou, Sugiton, En-Vau. The limestone cliffs drop vertically into water that runs from jade to electric blue depending on depth. This is the essential Marseille experience. Book the day before in summer.",
            "5:30pm — Return to port. Walk along the Corniche to the Vallon des Auffes — a tiny fishing village cut into the cliffs below the Corniche road, barely large enough for two fishing boats. The fishermen still live here. The restaurant Chez Fonfon has served bouillabaisse from this spot since 1952.",
            "7:30pm — Evening in the Cours Julien neighbourhood (15 min walk from port). This is Marseille's bohemian quarter — street art on every building, independent record shops, vintage clothing, and outdoor café terraces. Budget dinner here: Thai, Lebanese, or North African restaurants where a full meal costs €10–15.",
          ],
          cost: "€55–75 total (incl. ferry + boat tour)",
        },
        {
          day: "Day 3",
          title: "MuCEM, Cours Julien & Optional Aix-en-Provence",
          items: [
            "9:30am — MuCEM — Museum of European and Mediterranean Civilisations (J4 pier, next to Fort Saint-Jean). Entry €9.50. The building itself justifies the ticket: Rudy Ricciotti's 2013 design is a concrete lattice cube connected to the 17th-century Fort Saint-Jean by a hanging footbridge over the sea. The permanent collection spans 5,000 years of Mediterranean civilisation — agriculture, religion, trade routes, and the three monotheistic faiths. Allow 2–2.5 hours.",
            "11:30am — Walk the Fort Saint-Jean footbridge (free with MuCEM ticket) for views back toward the port, the islands, and the basilica. The fort gardens are planted with Mediterranean herbs and offer the best close-up view of the MuCEM building's extraordinary façade.",
            "12:30pm — Lunch at the MuCEM rooftop café (€12–18) or walk to the nearby Le Panier for a cheaper option. The market at Marché de la Plaine (Place Jean Jaurès, Tuesday/Thursday/Saturday mornings) has excellent prepared foods and fresh produce for a picnic.",
            "2:30pm — Cours Julien market (Wednesday morning is best, but the neighbourhood is worth walking any day). Antiques, vinyl records, secondhand books, artisan ceramics. The street murals here are some of the finest legal street art in France — work by Lek & Sowat, C215, and other internationally recognised artists.",
            "4:00pm — L'Estaque (30 min by bus from the port). This former fishing village north of Marseille was where Paul Cézanne painted his earliest landscapes of the coast in the 1870s, followed by Georges Braque in 1906–1908 — the Braque paintings made here are considered among the first Cubist works. Today it's an ordinary suburb, but the view of the bay from the Église Saint-Sébastien is exactly as Cézanne painted it. A handful of restaurants serve grilled fish at the waterfront for €15–20.",
            "7:00pm — Final evening at the Vieux-Port. Sit on the Quai du Port (north side, quieter than the south) and watch the port lights come on across the water. The reflection of Notre-Dame de la Garde's illuminated gilded Madonna on the night water is one of the great images of France.",
          ],
          cost: "€35–55 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€130–220/day",
      days: [
        {
          day: "Day 1",
          title: "Vieux-Port, Guided Le Panier & La Bonne Mère Sunset",
          items: [
            "8:00am — Early morning walk along the Vieux-Port fish market with a French coffee from Café de la Marine or Bar de la Marine (made famous by Marcel Pagnol's Marseille novels). The Bar de la Marine (Quai de Rive Neuve, south side of port) is an institution — the set of Pagnol's Marius trilogy, unchanged in spirit since 1929.",
            "10:00am — Guided walking tour of Le Panier with a local guide (€25–35/person via GetYourGuide or local operators). A good guide covers the Greek founding of Massalia in 600 BC, the medieval fortifications, the 19th-century renovation controversies, and the street art renaissance. 2 hours.",
            "12:00pm — Lunch at a Le Panier restaurant. La Cantinetta (Rue de la Lorette) serves excellent Italian-Marseillais fusion — pasta with sea urchin butter, socca fritters, €18–25 for two courses. Or La Mercerie (Cours Saint-Louis) for a more modern bistro format at €22–30.",
            "2:00pm — Vieille Charité museum interior (€6) — the 17th-century almshouse designed by Pierre Puget has three wings of archaeology and African art around a perfect domed chapel. Less visited than MuCEM but genuinely excellent.",
            "4:30pm — Taxi or Uber to Notre-Dame de la Garde for sunset (€12–15 each way). The basilica glows orange-gold at sunset and the views over the islands intensify as the light drops. The interior ex-voto collection is quietly moving — hundreds of model ships and aircraft left by survivors of disasters at sea and in the air.",
            "7:00pm — Aperitif at Le Café des Épices (Rue du Lacydon, off the port) — a contemporary Provençal wine bar with an excellent selection of southern Rhône and Côtes de Provence wines by the glass, €5–9 each.",
            "8:30pm — Dinner at L'Épuisette (Vallon des Auffes, below the Corniche) — this is Marseille's most celebrated seafood restaurant: rock fish, sea urchin, and bouillabaisse in a glass-walled dining room built into the sea cliffs of the Vallon. Two courses €45–60, or the full bouillabaisse experience at €65/person.",
          ],
          cost: "€150–200 total",
        },
        {
          day: "Day 2",
          title: "Calanques Kayak or Hike + Château d'If & Frioul",
          items: [
            "8:00am — Half-day kayak tour of the Calanques from Callelongue or La Madrague de Montredon (€45–65/person for guided 3-hour tour via Calanques Kayak or Raskas Kayak). Kayaking allows access to Calanques inaccessible by boat or foot — you paddle directly to the foot of 400-metre limestone walls and into sea caves. The water is clear enough to see the seabed at 8 metres depth.",
            "11:30am — Return and freshen up at the hotel.",
            "1:00pm — Lunch at a restaurant in Cassis (45 min drive or boat from Marseille) if combining with the Calanques boat — or a fish lunch at the Vallon des Auffes waterfront.",
            "2:30pm — Château d'If ferry (Frioul If Express, €16 return for both islands). Visit the château, then continue to the Frioul archipelago. The islands have a protected swimming cove (Calanque de Morgiou), the ruined Hôpital Caroline quarantine facility, and a far quieter atmosphere than the mainland. Bring a picnic.",
            "5:30pm — Return ferry to Vieux-Port.",
            "7:00pm — Walk the Corniche Kennedy during the golden hour — the 4km coastal road carved into the limestone cliffs above the sea is best on foot at this time of day. The Café Julien on the Corniche has a good terrace for an evening drink.",
            "8:30pm — Dinner at Miramar (Quai du Port, Vieux-Port) — one of Marseille's most historic restaurants, open since 1966, and widely considered the gold standard for traditional bouillabaisse. The full ritual bouillabaisse (served in two services: the broth first, then the fish brought to the table) costs €55–70/person. Book ahead.",
          ],
          cost: "€170–240 total",
        },
        {
          day: "Day 3",
          title: "MuCEM, Aix-en-Provence Half-Day & Farewell Dinner",
          items: [
            "9:00am — MuCEM with audio guide (€11.50 with guide). The permanent exhibition 'Connecting the World' traces Mediterranean trade, religion, and civilisation with exceptional object-based storytelling. The hanging footbridge to Fort Saint-Jean and the rooftop café are included.",
            "11:30am — Train from Gare Saint-Charles to Aix-en-Provence (TER, €8, 30 minutes, trains every 30 min). Aix is one of the finest provincial cities in France — Cours Mirabeau is a canopied boulevard of 17th-century hotels particuliers and café terraces, the old town is almost entirely car-free.",
            "12:30pm — Lunch on the Cours Mirabeau in Aix — Les Deux Garçons (open since 1792, Cézanne and Zola drank here) for the history, or one of the newer Provençal bistros for better food at €20–30.",
            "2:00pm — Aix: Fondation Vasarely (Op-Art museum in a building designed by Victor Vasarely, €13) or the Musée Granet (Cézanne paintings plus classical French art, €8). The Cours Mirabeau antique bookshops and calisson confiseries are worth 45 minutes of slow wandering.",
            "4:30pm — Train back to Marseille (30 min). Check into hotel, freshen up.",
            "7:30pm — Cours Julien evening — the neighbourhood fills with locals after 7pm. Aperitif at La Caravelle (Quai du Port) — a first-floor bar with a ship's-captain atmosphere and a wide terrace over the port.",
            "9:00pm — Farewell dinner at Une Table au Sud (Quai du Port, 1 Michelin star) — chef Ludovic Turac's contemporary Provençal menu uses Marseille's exceptional market produce: local sea bass, lamb from Sisteron, seasonal vegetables with Provençal herbs. Tasting menu €65–85/person.",
          ],
          cost: "€160–220 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€300–550/day",
      days: [
        {
          day: "Day 1",
          title: "Hôtel Dieu Arrival, Private City Tour & Bouillabaisse",
          items: [
            "Check in to InterContinental Marseille – Hôtel Dieu (Place Daviel, €320–600/night) — a 12th-century hospice designed by Jacques Hardouin-Mansart (the architect of Versailles) and converted to a 5-star hotel in 2013. The original stone vaulted corridors, the grand 18th-century staircase, and the rooftop pool with port views make this the most architecturally significant luxury hotel in the city.",
            "2:00pm — Private half-day city tour with a historian-guide (€200–280 for 3 hours) covering the Greek city of Massalia, the Roman docks (visible through the glass floor of the Musée d'Histoire de Marseille, €5 entry), the baroque architecture of Le Panier, and the story of Marseille as Europe's gateway to North Africa and the Middle East.",
            "6:00pm — Sunset from the Notre-Dame de la Garde terrace by private transfer (€30–40 return by taxi). Champagne on the hotel rooftop afterward.",
            "8:30pm — Bouillabaisse dinner at Le Miramar (Quai du Port) — the full ceremonial bouillabaisse with a minimum of five fish varieties, the rouille served in a mortar, the broth poured at the table. €65–75/person. This is the meal Marseille is famous for. Book 3–5 days ahead in high season.",
          ],
          cost: "€400–600 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Calanques Boat Charter & Château d'If",
          items: [
            "9:00am — Private sailing boat charter from the Vieux-Port for a full-day Calanques cruise (€500–900 for the boat, 4–8 people). A private yacht allows stops inside the Calanques that are inaccessible to the large tour boats — you can anchor in the En-Vau Calanque and swim in water of an implausible blue-green, eat lunch on the boat with a catered picnic, and explore at your own pace.",
            "10:00am — Château d'If from the sea — ask the skipper to circle the island fortress before entering the bay. The profile of the prison rising from the bare rock is dramatic in a way the tourist ferry doesn't convey.",
            "1:00pm — Catered picnic lunch on the boat in a sheltered Calanque. Suggested: charcuterie from Maison Perez in the Noailles market, cheese from the Marché des Capucins, rosé from Bandol (the Calanques' own appellation).",
            "3:00pm — Return to port. Afternoon at the hotel spa or private pool.",
            "7:30pm — Cocktails at the InterContinental rooftop bar overlooking the illuminated Vieux-Port.",
            "9:00pm — Dinner at AM par Alexandre Mazzia (Rue François Rocca, 3 Michelin stars — highest in Marseille). Chef Mazzia's 25-course tasting menu is one of the most inventive in France: Congolese-Marseillais flavour combinations, extraordinary technique, hypnotic pacing. €220–280/person. Book 3–4 weeks in advance.",
          ],
          cost: "€600–1,000 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Cassis by Private Car, MuCEM VIP & Farewell",
          items: [
            "9:30am — Private car to Cassis (45 minutes, €80–120 return). Cassis is one of the most beautiful fishing ports in Provence: white limestone cliffs, a harbour of pastel houses, and direct boat access to the finest Calanques. Book a private boat tour from the Cassis port for a 2-hour circuit of Cap Canaille (the highest cliff face in France) and the innermost Calanques.",
            "1:00pm — Lunch at Villa Madie (Cassis, 2 Michelin stars) — Dimitri Droisneau's Mediterranean menu is among the top restaurant experiences in France. The terrace overlooks the Calanques. Tasting menu €130–180/person. Book 2–3 weeks ahead.",
            "3:30pm — Private car back to Marseille.",
            "5:00pm — MuCEM private tour with a curator or architect guide (arrange via hotel concierge, €150–250) — an after-hours experience of the building and the collection without tourist crowds. The lattice façade changes entirely depending on the angle of light.",
            "7:30pm — Final aperitif at La Caravelle (Quai du Port) — a bottle of Bandol rosé, the port at dusk, the basilica's golden Madonna beginning to light up on the hill above.",
            "9:00pm — Farewell dinner at Une Table au Sud (1 Michelin star, Quai du Port) or a private chef dinner arranged through the hotel's concierge team in one of the private dining rooms in the Hôtel Dieu's vaulted 12th-century cellars.",
          ],
          cost: "€500–900 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "€20–40",
      food: "€15–22",
      transport: "€8–15",
      activities: "€15–20",
      total: "€60–90/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "€90–160",
      food: "€40–65",
      transport: "€20–35",
      activities: "€30–55",
      total: "€130–220/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "€300–600",
      food: "€100–280",
      transport: "€50–150",
      activities: "€100–300",
      total: "€300–550/day",
    },
  ],
  mistakes: [
    {
      icon: "🍲",
      title: "Ordering Bouillabaisse in the Wrong Place",
      desc: "Bouillabaisse is Marseille's defining dish — and one of the most abused words in French restaurant marketing. Authentic bouillabaisse requires a minimum of four specific fish varieties (rascasse, grondin, saint-pierre, and at least one more), a saffron-and-fennel broth made from whole fish, and the rouille served separately. It costs €45–70/person at proper restaurants and is always made to order. If a menu shows bouillabaisse for €18, you are not eating bouillabaisse. Go to Le Miramar, Chez Fonfon, or L'Épuisette and pay the real price once.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "⛰️",
      title: "Attempting the Calanques in Mid-Summer Without a Permit",
      desc: "The Calanques National Park closes many of its coastal hiking paths from mid-June through mid-September due to forest fire risk. The specific paths and dates vary by year — some require a free online reservation from the préfecture website (préfecture-13.gouv.fr). Showing up at the trailhead in August without checking will result in a fine or a turned-away journey. Either check the current access status before your visit, or take a boat tour (which bypasses the fire-risk access rules entirely).",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🗺️",
      title: "Staying Only Around the Vieux-Port",
      desc: "The port is the heart of Marseille, but limiting yourself to it misses the city's real texture. Le Panier (10 min walk north) is the oldest neighbourhood in France and contains some of the finest street art in Europe. Cours Julien (15 min walk east) is the bohemian quarter with the best independent restaurants and a genuine Marseillais atmosphere. The Noailles neighbourhood (10 min from port) is one of the great North African market quarters in Europe — spice stalls, pastry shops selling msemen and sfenj. Marseille rewards explorers more than most cities.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🚌",
      title: "Dismissing Marseille's Public Transport",
      desc: "Marseille has a functional metro, tram, and bus network that reaches most key sites. The No. 60 bus goes to Notre-Dame de la Garde. The metro reaches Gare Saint-Charles and the city centre. The Frioul If Express ferry runs from the Vieux-Port quay. A single ticket is €1.70; a 24-hour pass is €5.30. Taxis are legitimate but add up quickly. Using public transport is not a budget compromise — it's how Marseillais actually move around the city.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "⛵",
      title: "Book Calanques Boat Tours the Day Before in Summer",
      desc: "The standard 2-hour Calanques boat tours departing from Quai des Belges (Vieux-Port) fill up significantly in July and August. Tours run by Croisières Marseille Calanques and GTP cost €25–35. The best experience is the morning departure (9:30am) when the light hits the limestone faces at low angles and turns the water a more intense colour. Book at the ticket kiosks on the quayside the previous afternoon — same-day booking in summer is unreliable.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🫙",
      title: "The Noailles Market Is the Real Marseille",
      desc: "The Noailles neighbourhood, centred on the Marché des Capucins (Cours Belsunce), is Marseille's densest and most atmospheric market quarter — a labyrinth of spice stalls, North African pastry shops, olive merchants, and halal butchers reflecting the city's deep ties to Algeria, Tunisia, and Morocco. This is not a tourist attraction; it's a functioning neighbourhood market. Go between 9am and 1pm on a weekday. A bag of cumin, harissa paste, and fresh merguez from here costs €6 and is more authentically Marseillais than anything from a souvenir shop.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🌅",
      title: "The Best Sunrise View Is from Notre-Dame de la Garde",
      desc: "Most visitors visit La Bonne Mère in the late afternoon or evening. The least-known great experience in Marseille is arriving at the basilica at 7am to watch the sun come up over the Calanques and the sea. The esplanade is empty at this hour; the city below is beginning to wake; the light on the gilded Madonna is extraordinary. The basilica opens at 7am daily. Take the No. 60 bus from the Vieux-Port at 6:45am, or walk the 40 minutes uphill in the morning cool.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🚆",
      title: "Aix-en-Provence Is 30 Minutes by Train — Not an Excursion, a Side Trip",
      desc: "Aix-en-Provence (TGV hub, Cézanne's birthplace, one of the finest historic city centres in Provence) is 30 minutes from Marseille Gare Saint-Charles by TER train (€8, trains every 30 min). This is close enough to go for half a day, not a full-day excursion. Cassis (Calanques by boat, whitewashed port village, Bandol wine country) is 45 minutes by train or ferry. Both make excellent morning half-days combined with an afternoon back in Marseille.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "Is Marseille safe for tourists?",
      a: "Yes — with common-sense precautions. Marseille has a reputation for crime that is significantly worse than the reality for tourists. The areas you will spend your time in — the Vieux-Port, Le Panier, MuCEM, Cours Julien, the Corniche, and Notre-Dame de la Garde — are all safe, busy, and well-policed. As in any large city, be aware of pickpockets in crowded areas (the Vieux-Port quays, the Noailles market), don't leave valuables visible in cars, and avoid the northern housing estates (La Castellane, Les Quartiers Nord) which have no tourist sites and are the areas where Marseille's gang-related violence is concentrated. The vast majority of visitors have no incidents whatsoever.",
    },
    {
      q: "What is bouillabaisse and why does it cost so much?",
      a: "Bouillabaisse is Marseille's traditional fishermen's stew — originally made from the unsellable rockfish (rascasse, vive, grondin, saint-pierre) left at the end of the market day. The authentic version requires cooking specific fish varieties in a fennel-saffron broth, serving the broth first as a soup with rouille (garlic-saffron mayonnaise) and croutons, then presenting the whole fish at the table. The labour, the specific fish species required, and the ceremony of the service justify the price. Expect €50–70/person at serious restaurants. The 'budget bouillabaisse' is soupe de poisson (the same broth, pureed, without the whole fish), which costs €8–12 at port brasseries and is a genuine part of the Marseille culinary tradition.",
    },
    {
      q: "How do I get from Marseille Provence Airport (MRS) to the city?",
      a: "The Navette Marseille airport shuttle bus (operated by Cartreize) runs every 15–20 minutes from both terminals directly to Gare Saint-Charles (the main train station) in 25–30 minutes. Cost: €10.40 one way. Taxis from MRS to the city centre cost €45–60 depending on traffic. There is no direct rail link between the airport and the city. From Gare Saint-Charles, the metro (Line 1) takes you to the Vieux-Port area in 5 minutes.",
    },
    {
      q: "When should I visit Marseille for the Calanques?",
      a: "The optimal window is May–June and September–mid-October. In May and June the Calanques hiking paths are fully open, the water is warming (18–22°C), and tourist numbers are manageable. In September, the water reaches its annual peak temperature (24–26°C) and the fire-risk path closures begin to ease. July and August are high season — the beaches near Marseille are busy, the ferry queues for Château d'If are long, and many Calanques paths are closed due to fire risk. That said, boat tours to the Calanques run year-round regardless of path closures.",
    },
    {
      q: "Can I do a day trip to Cassis from Marseille?",
      a: "Easily. Cassis is 45 minutes from Marseille by TER train (changing at La Ciotat, total €8–10) or 45 minutes by boat from the Vieux-Port (seasonal ferry service, €30–40 return). From the Cassis port, boat tours of the Calanques run for €15–25 and are the best way to see the innermost Calanques (En-Vau, Port-Pin, Port-Miou) which are accessible by foot only via long hikes. The town itself — chalk-white port, outdoor fish restaurants, the famous Cassis AOC white wine — is worth 2–3 hours on foot.",
    },
    {
      q: "How do I get from Paris to Marseille?",
      a: "The TGV from Paris Gare de Lyon to Marseille Saint-Charles takes 3 hours 10 minutes (some services do it in 3h05). Tickets range from €40 in advance on a slow train to €110 for a flexible same-day fare. There are typically 15–20 daily services. Book on SNCF Connect or Trainline. The train is faster than flying once airport time is factored in. CDG airport to Marseille via air takes approximately 1h30 of flight time plus check-in and transit — making the TGV roughly equal in total journey time at a fraction of the stress.",
    },
  ],
  combineWith: ["nice-3-days", "barcelona-4-days", "lyon-3-days"],
  relatedSlugs: ["nice-3-days", "paris-5-days", "barcelona-4-days", "florence-3-days"],
  galleryQuery: "marseille calanques vieux-port notre-dame de la garde france",
};

export const metadata: Metadata = {
  title: "Marseille in 3 Days: Complete Travel Guide 2026 (Budget to Luxury)",
  description:
    "3 days in Marseille with bouillabaisse guides, Calanques boat tours, Château d'If, MuCEM, and Le Panier. Real euro costs, practical timings, and honest tips.",
  keywords: [
    "marseille itinerary 3 days",
    "marseille travel guide 2026",
    "calanques marseille",
    "bouillabaisse marseille",
    "marseille france things to do",
    "chateau d'if marseille",
    "mucem marseille",
    "marseille budget travel",
  ],
  openGraph: {
    title: "Marseille in 3 Days: Complete France Travel Guide 2026",
    description:
      "Calanques boat tours, Château d'If, authentic bouillabaisse, and Le Panier street art — the complete Marseille itinerary from budget to luxury.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Marseille Vieux-Port with Notre-Dame de la Garde basilica France",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marseille in 3 Days (2026)",
    description:
      "Calanques, bouillabaisse, Château d'If, Le Panier — the complete Marseille itinerary with real costs.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/marseille-3-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Marseille in 3 Days: Complete Travel Guide 2026 (Budget to Luxury)",
      datePublished: "2026-04-05T00:00:00Z",
      dateModified: "2026-04-05T00:00:00Z",
      author: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.incredibleitinerary.com/logo.png",
        },
      },
      image:
        "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=80",
      description:
        "3 days in Marseille with bouillabaisse guides, Calanques boat tours, Château d'If, MuCEM, Le Panier street art, and Aix-en-Provence day trip options.",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.incredibleitinerary.com/blog/marseille-3-days",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.incredibleitinerary.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.incredibleitinerary.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Marseille 3 Days",
          item: "https://www.incredibleitinerary.com/blog/marseille-3-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Marseille, France",
      description:
        "France's oldest city and second-largest — a Mediterranean port of 900,000 people with the Calanques National Park, the Vieux-Port fish market, Le Panier street art district, MuCEM, Château d'If island fortress, and the world's finest bouillabaisse.",
      touristType: [
        "Food lovers",
        "Hikers and outdoor enthusiasts",
        "Cultural tourists",
        "Beach travellers",
        "History and architecture enthusiasts",
      ],
      hasMap: "https://maps.google.com/?q=Marseille,France",
    },
  ],
};

export default function MarseillePage() {
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
