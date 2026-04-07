import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Paris",
  country: "France",
  countryFlag: "🇫🇷",
  slug: "paris-5-days",
  heroQuery: "paris eiffel tower seine river france cityscape",
  heroAlt: "Paris Eiffel Tower reflected in the Seine river at golden hour France",
  category: "Europe",
  date: "April 5, 2026",
  readTime: "15 min read",
  intro: "Paris at 7am — the Eiffel Tower catching the first light over an empty Champ de Mars, a still-warm croissant from the boulangerie on the corner, the Seine glittering silver before the tour boats begin — is one of the genuinely great travel experiences on earth. Five days gives you the Louvre without the panic, Montmartre before the crowds, Versailles in an afternoon, and enough time left over to simply sit at a café and watch the city move.",
  stats: { duration: "5 Days", budgetFrom: "€60", bestMonths: "Apr–Jun, Sep–Oct", airport: "CDG (Charles de Gaulle)" },
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
        ["Schengen Visa Required", "France is part of the Schengen Zone. Apply for a short-stay Schengen visa at the French embassy or VFS Global. Fee: €80. Processing time: 15–45 days. Book your VFS appointment well in advance — slots fill up 3–4 weeks out."],
        ["Key Documents", "Passport valid 3 months beyond your return date, bank statements showing at least €100/day, confirmed hotel bookings, return flight tickets, employment letter or business registration, and travel insurance covering a minimum of €30,000."],
        ["90/180 Day Rule", "A Schengen visa allows a maximum stay of 90 days within any 180-day period across all Schengen countries combined — not just France. Plan accordingly if combining Paris with other European countries."],
        ["Travel Insurance", "Minimum €30,000 medical coverage is a mandatory requirement for the visa application. Most travel insurance policies purchased from India meet this — check the policy wording explicitly."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["Visa-Free Access", "USA, UK, Canada, Australia, and New Zealand passport holders can enter France (and the Schengen area) visa-free for up to 90 days within any 180-day period. No pre-approval required."],
        ["ETIAS from 2025", "A new ETIAS travel authorization is required from 2025 for visa-exempt travelers (including USA, Canada, Australia). Cost: €7, valid 3 years. Apply at etias.eu.int before travel — takes minutes online."],
        ["UK Post-Brexit Note", "UK passport holders are no longer EU citizens. They enter under the visa-free 90/180 rule and will need ETIAS. Ensure your passport has at least 6 months validity remaining."],
        ["Schengen Days Count", "Days spent anywhere in the Schengen Zone — Germany, Spain, Italy, Greece, etc. — all count toward your 90-day allowance. Track your days carefully if Paris is part of a longer Europe trip."],
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
          title: "Eiffel Tower & the Seine",
          items: [
            "7:00am — Walk to Champ de Mars for sunrise views of the tower before the crowds arrive. The tower faces northeast — morning light hits the ironwork beautifully.",
            "9:00am — Buy your Eiffel Tower ticket online in advance (essential). Stairs to the 2nd floor: €11.80. Lift to the summit: €29.40. The stairs take 20 minutes and the views from each landing are just as dramatic.",
            "10:30am — Cross to Trocadéro esplanade for the best full-tower photograph in Paris. The fountain pools make a natural foreground — arrive before 11am for clean shots.",
            "12:30pm — Picnic on Champ de Mars: baguette (€1.10), a wedge of Comté or Brie (€2–3), and a small bottle of rosé (€4) from the Franprix on Rue du Commerce. Eat on the grass where a Michelin-starred restaurant would charge €80 for the same view.",
            "3:00pm — Walk the Left Bank along Quai Branly to Pont d'Iéna. Cross the river and explore the 16th arrondissement residential streets — calm, elegant, un-touristy.",
            "6:00pm — Return to Champ de Mars for the tower sparkling at dusk (every hour on the hour after dark for 5 minutes — until 1am).",
            "8:00pm — Dinner on Rue Cler market street (7th arr.) — one of Paris's best food streets. The rotisserie chickens for €12, or sit at Café du Marché for steak frites and a glass of house red for €20.",
          ],
          cost: "€35–50 total",
        },
        {
          day: "Day 2",
          title: "Louvre & St-Germain-des-Prés",
          items: [
            "8:30am — Buy Louvre tickets online (€22) — never buy at the gate. Arrive at 9am on a Wednesday or Friday when the museum opens until 9:45pm (visit the evening section too if you want).",
            "9:00am — Strategic Louvre: go directly to the Denon Wing (ground floor, then first floor). Mona Lisa → Winged Victory of Samothrace → Venus de Milo → Dutch/Flemish Masters → Egyptian Antiquities. That's 5 rooms, 3 hours, everything worth seeing. The museum has 35,000 rooms worth of art — don't try to do all of it.",
            "12:30pm — Lunch at Café Marly inside the Louvre courtyard (€18–25 for a plat du jour) or walk to Rue de Rivoli for a cheaper croque-monsieur from a brasserie (€9).",
            "2:00pm — Tuileries Garden — free, beautiful, the best public garden in Paris for a walk or to sit in a green metal chair watching Parisians do the same.",
            "3:30pm — Palais Royal arcades and garden — completely free, architecturally stunning, almost no tourists. Daniel Buren's black-and-white column installation in the courtyard is worth 15 minutes.",
            "5:30pm — Walk across Pont Neuf to the Left Bank. St-Germain-des-Prés neighborhood — Café de Flore and Les Deux Magots are expensive tourist traps; have a coffee there for the history but eat elsewhere.",
            "8:00pm — Dinner in St-Germain: Le Relais de l'Entrecôte (no reservations, queue from 7pm, one dish: steak frites with secret sauce, €28 — worth every euro).",
          ],
          cost: "€40–60 total",
        },
        {
          day: "Day 3",
          title: "Montmartre & Canal Saint-Martin",
          items: [
            "8:00am — Montmartre before the tourist buses: take the Métro to Abbesses (line 12), not Anvers. The small square with the Art Nouveau Métro entrance is the real Montmartre.",
            "8:30am — Sacré-Cœur basilica (free entry) at opening — the mosaic Christ in Majesty is one of the largest in the world. The panoramic view over Paris from the parvis is exceptional.",
            "10:00am — Place du Tertre artist square — hopelessly touristy by 11am, but at 10am you can actually see the artists working. Walk the vineyard path behind the basilica.",
            "11:00am — Moulin Rouge exterior (Rue Lepic side street for the windmill view, not the tourist entrance side). Walk down Rue Lepic — the market street where Amélie was filmed.",
            "1:00pm — Lunch at a bistro in the 18th or 9th arrondissement — one step away from Montmartre and prices drop by 40%. Try Le Bon Bock (Rue de Douai) for classic French fare at €12–15 for a plat.",
            "3:00pm — Canal Saint-Martin (10th arr.) — Paris's coolest neighborhood. Iron footbridges, boutiques, cafés, independent bookshops. The canal-side walk from République to Jaurès takes 45 minutes and is genuinely lovely.",
            "7:00pm — République neighborhood for dinner — local, diverse, affordable. Le Galopin (Rue Sainte-Marthe) for modern French bistro cooking at €15–20 mains.",
          ],
          cost: "€30–45 total",
        },
        {
          day: "Day 4",
          title: "Le Marais, Île de la Cité & the Latin Quarter",
          items: [
            "9:00am — Le Marais district: start at Place des Vosges (free) — Paris's oldest planned square, arcaded walkways, Victor Hugo's house (free museum). Coffee at Ma Bourgogne under the arches.",
            "10:30am — Centre Pompidou exterior — the inside-out building is as photogenic as any classic monument. The plaza outside is free; museum entry is €15 if you go in. The view from the rooftop (free with ticket) is Paris at its most industrial-beautiful.",
            "12:00pm — Marais lunch: L'As du Fallafel (Rue des Rosiers, €7) — Paris's most famous falafel. Expect a queue but it moves fast. The Jewish Quarter surrounding it has some of the city's best street eating.",
            "2:00pm — Walk to Île de la Cité across Pont Marie. Notre-Dame de Paris exterior — reconstruction is ongoing after the 2019 fire, but the cathedral reopened in December 2024. Check official restoration status; exterior viewing is always possible.",
            "3:30pm — Sainte-Chapelle (€13.50, book online) — the upper chapel's 15 stained glass windows covering 600m² of Gothic tracery are among the most extraordinary interiors in Europe. Go in morning or afternoon sun for maximum light through the glass.",
            "5:00pm — Shakespeare and Company bookshop (free, Rue de la Bûcherie) — the most famous English-language bookshop in Paris, facing Notre-Dame across the Seine. Buy a book, get it stamped.",
            "7:30pm — Latin Quarter evening: Rue Mouffetard market street for dinner — crêpe stands, Greek restaurants, traditional brasseries. Budget €12–18 for a full meal.",
          ],
          cost: "€35–55 total",
        },
        {
          day: "Day 5",
          title: "Versailles Day Trip",
          items: [
            "7:30am — Leave Paris early. Take RER C from Gare d'Austerlitz or Pont de l'Alma to Versailles-Château-Rive Gauche (€7.30 return, 35 minutes). Trains run every 15 minutes.",
            "9:00am — Palace of Versailles opens at 9am (€20, book online). Arrive at opening to beat the 11am tour groups. Hall of Mirrors is the centerpiece — 357 mirrors, 20,000 candles when lit.",
            "10:30am — Royal Apartments, King's Chamber, Queen's Chamber. Budget 2 hours for the interior. The Baroque excess is deliberately overwhelming — that's the point.",
            "12:30pm — Gardens of Versailles (free entry except fountain show days — check the schedule). The Grand Canal extends for 1.5km with nothing but France around it. Rent a rowboat (€9/hour) on the canal.",
            "2:00pm — Grand Trianon and Petit Trianon palaces — included in the Passport ticket (€32) or €12 separate. Marie Antoinette's Hamlet (the fake farm village) is 20 minutes' walk through the gardens.",
            "4:30pm — Return RER C to Paris. Back in the city by 5:30pm.",
            "7:00pm — Final Paris dinner: anywhere in the 11th or 12th arrondissement — Paris's best value dining. Le Servan (Rue Saint-Maur) for exceptional modern bistro cooking at €18–25 mains.",
          ],
          cost: "€40–55 total (incl. Versailles transport + entry)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "€150–250/day",
      days: [
        {
          day: "Day 1",
          title: "Eiffel Tower at Sunset & Seine Cruise",
          items: [
            "10:00am — Check into a 3-star hotel on the Left Bank (Rue Cler area or 7th arrondissement). Proximity to the tower without the inflated prices of the 1st arr.",
            "12:00pm — Lunch at Le Jules Verne (the Eiffel Tower's first-floor brasserie, not the summit restaurant) or 58 Tour Eiffel — €45–65/person for modern French food with the tower as your dining room.",
            "3:00pm — Summit by lift at the optimal time: 4–5pm in spring when the light is golden and the city is at its warmest glow.",
            "6:30pm — Evening Seine cruise with Bateaux Mouches (€17 per person, 1 hour) — the illuminated monuments from the water are genuinely spectacular.",
            "8:30pm — Dinner at a classic Left Bank brasserie: Brasserie Lipp (Boulevard Saint-Germain) for choucroute garnie and Alsatian wine, €40–55/person.",
          ],
          cost: "€150–200 total",
        },
        {
          day: "Day 2",
          title: "Louvre with Guide & Musée d'Orsay",
          items: [
            "9:00am — Louvre with a 2-hour private or small-group guided tour (€60–90/person including entry). A good guide eliminates the navigation chaos and gives the masterworks their proper context.",
            "11:30am — Angelina tearoom (Rue de Rivoli) — Paris's most famous hot chocolate (€9 per cup). Decadently thick. Queue is 10–20 minutes; worth it once.",
            "1:00pm — Lunch at Café Marly in the Louvre courtyard, or cross the Tuileries to Le Grand Véfour in the Palais Royal for a €45 lunch menu.",
            "3:00pm — Musée d'Orsay (€16, book online) — the Impressionist collection in a converted railway station. Monet's water lilies studies, Renoir's Moulin de la Galette, Van Gogh's self-portraits. Give it 2–2.5 hours.",
            "6:00pm — Sunset walk on Pont des Arts or Pont Alexandre III — the latter is the most ornate bridge in Paris, worth seeing in golden hour.",
            "8:00pm — Dinner reservation at Septime (Rue de Charonne, 11th arr.) — book 2–3 weeks ahead. Modern French tasting menu, €60–80/person, one of the most consistently celebrated restaurants in Paris.",
          ],
          cost: "€180–240 total",
        },
        {
          day: "Day 3",
          title: "Montmartre Food Tour & Le Marais Vintage",
          items: [
            "9:00am — Montmartre with a food tour (Context Travel or Airbnb Experience, €70–90/person) — croissants from a proper boulangerie, charcuterie tasting, local market visit, Sacré-Cœur history.",
            "1:00pm — Le Marais afternoon: vintage shopping on Rue de Bretagne and Rue Charlot, the Marché des Enfants Rouges (Paris's oldest covered market, 1615) for lunch — stalls selling Moroccan, Japanese, Italian, €12–18.",
            "4:00pm — Musée Carnavalet (Paris history museum, free) — two Renaissance mansions filled with Napoleon's furniture, Proust's bedroom, and 600,000 objects tracing Paris from prehistoric times.",
            "7:30pm — Dinner at Le Chateaubriand (Avenue Parmentier, 11th arr.) — book 2 weeks ahead. Progressive French tasting menu at €80–100/person. One of Paris's most exciting kitchens.",
          ],
          cost: "€160–220 total",
        },
        {
          day: "Day 4",
          title: "Versailles with Trianon Palaces",
          items: [
            "8:30am — RER C to Versailles with the Passport ticket (€32, covers everything including Trianon palaces and the gardens on fountain-show days).",
            "9:00am — Palace interior with audio guide (included). Spend 2 hours in the state apartments and Hall of Mirrors.",
            "11:30am — Champagne picnic in the gardens: pick up a bottle of Champagne from the Nicolas wine shop near Versailles station and a cheese selection from a Versailles fromagerie.",
            "2:00pm — Grand Trianon and Petit Trianon — the more intimate royal retreats Louis XVI built for privacy (and Marie Antoinette's legendary pastoral fantasy at Hameau de la Reine).",
            "5:00pm — Return to Paris. Evening drinks at a wine bar in the 11th arrondissement — Le Verre Volé (Canal Saint-Martin) for natural wines by the glass, €7–12.",
          ],
          cost: "€130–170 total",
        },
        {
          day: "Day 5",
          title: "Giverny or Épernay Day Trip",
          items: [
            "Option A — Giverny: Train from Gare Saint-Lazare to Vernon (€28 return, 1h15min), then shuttle bus or bicycle to Monet's garden (€12 entry). The water lily garden and the Japanese bridge — the subjects of the paintings you saw at the Musée d'Orsay, in real life. Go in May for full bloom.",
            "Option B — Épernay Champagne region: Train from Gare de l'Est (€30–45 return, 1h20min). Avenue de Champagne is lined with Moët & Chandon, Perrier-Jouët, Pol Roger cellars. Cave tour + tasting at 2 houses, €30–50. Lunch at a local brasserie with a half-bottle of local Champagne.",
            "Evening: Return to Paris for a final dinner at Bistrot Paul Bert (11th arr.) — the definitive Paris bistro experience. Bone marrow, entrecôte, Paris-Brest dessert. €45–55/person.",
          ],
          cost: "€100–160 total including day trip",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "€400+/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival & Jules Verne Dinner",
          items: [
            "Check in to Hôtel de Crillon (Place de la Concorde) or Shangri-La Paris (16th arr., Eiffel Tower view rooms) or Le Bristol (8th arr., legendary service). Rates €800–2,500/night depending on room and season.",
            "Private transfer from CDG by luxury car service — Blacklane or Chauffeur Privé, €80–120.",
            "Afternoon: personal shopping concierge on Avenue Montaigne or Rue du Faubourg Saint-Honoré — Dior, Chanel, Hermès flagship stores.",
            "8:30pm — Jules Verne restaurant on the Eiffel Tower second floor (€250+/person, 3-course menu). Book 3 months in advance. The lift takes you directly to the restaurant; the view over illuminated Paris at dinner is unrepeatable.",
          ],
          cost: "€600–1,000 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Louvre After-Hours Tour",
          items: [
            "10:00am — Spa morning at your hotel. Le Bristol's spa or the Crillon's Les Ambassadeurs treatment suites offer 90-minute treatments from €200.",
            "Lunch at L'Ambroisie (Place des Vosges, 3 Michelin stars) — one of France's most revered restaurants. Tasting menu €350+/person. Reserve 4–6 weeks in advance.",
            "4:00pm — Private after-hours Louvre tour (available through select concierge services and tour operators; €500–800 for small groups). The museum empty of visitors, guided by a specialist. The Mona Lisa without the crowd is a completely different encounter.",
            "9:00pm — Dinner at Le Grand Véfour (Palais Royal, 2 Michelin stars) — the most beautiful restaurant room in Paris, serving since 1784. Napoleon's table is still reserved for VIPs.",
          ],
          cost: "€800–1,400 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Private Versailles Royal Tour",
          items: [
            "8:00am — Private guide picks up from hotel for Versailles before public opening (€300–500 for specialist guide, museum entry extra).",
            "Access the Hall of Mirrors, Royal Bedchambers, and private apartments before the 9am crowds with an expert who provides documented historical context unavailable in the standard audio guide.",
            "Lunch at Ore — Ducasse au Château de Versailles (the only restaurant inside the palace grounds, €60–90/person).",
            "Afternoon: Trianon palaces and a horse-drawn carriage tour of the grand gardens (available seasonally through the palace authority).",
            "Evening Paris return. Dinner at Alain Ducasse au Plaza Athénée (3 Michelin stars) — the naturalist cuisine movement with exceptional ingredients, €350+/person tasting menu.",
          ],
          cost: "€700–1,200 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Art, Couture & Michelin Evening",
          items: [
            "10:00am — Musée d'Orsay private opening slot (contact museum VIP services). The Impressionist collection with a curator-level guide.",
            "Lunch at Le Cinq (Four Seasons George V, 3 Michelin stars) — €185 lunch menu in one of Paris's grandest dining rooms.",
            "3:00pm — Bespoke perfume creation at Guerlain (68 Champs-Élysées) or Fragonard — private session, 2 hours, create your signature Paris scent.",
            "Evening: cocktails at Bar Hemingway (Ritz Paris) — the most storied bar in Europe. Hemingway claimed to have liberated it in 1944. Cocktails €30–40.",
            "Dinner at Le Meurice Alain Ducasse (2 Michelin stars, Tuileries view) — €200+/person tasting menu.",
          ],
          cost: "€700–1,000 total (excl. hotel)",
        },
        {
          day: "Day 5",
          title: "Farewell Paris at Its Best",
          items: [
            "Morning: Sunrise from the roof terrace of your hotel or a private hot-air balloon flight over Paris (€300–500/person, departures from Versailles or Chantilly area).",
            "Late breakfast at Ladurée (Champs-Élysées) — the original macaron house. Box of 12 macarons as a gift, €24.",
            "Afternoon: Père Lachaise Cemetery private tour (oddly magnificent — Oscar Wilde, Chopin, Édith Piaf) with a literary guide.",
            "Private transfer back to CDG. The driver waits inside arrivals; your bags were collected from the room while you finished breakfast.",
          ],
          cost: "€400–700 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "€30–60", food: "€15–25", transport: "€5–10", activities: "€15–30", total: "€65–125/day" },
    { tier: "✨ Mid-Range", accommodation: "€100–180", food: "€40–70", transport: "€15–25", activities: "€30–60", total: "€185–335/day" },
    { tier: "💎 Luxury", accommodation: "€400–1,500", food: "€100–300", transport: "€30–80", activities: "€100–300", total: "€630–2,180/day" },
  ],
  mistakes: [
    { icon: "🎟️", title: "Buying Eiffel Tower Tickets at the Gate", desc: "The queues to buy tickets at the Eiffel Tower are routinely 2–3 hours long in peak season. Book online at tour-eiffel.fr at least 2 days ahead (often 1–2 weeks in summer). Slots sell out. This is not optional advice — it determines whether you actually go up.", color: "bg-red-50 border-red-200" },
    { icon: "🗺️", title: "Visiting the Louvre Without a Plan", desc: "The Louvre is 60,000 square meters — larger than the Vatican. Without a plan, visitors wander for 3 hours and see nothing memorable. Pick five anchors: Mona Lisa (Denon Wing, Room 711), Venus de Milo (Sully Wing, Room 346), Winged Victory (Denon staircase), Egyptian Antiquities, Dutch Masters. Set a 3-hour limit and leave satisfied.", color: "bg-orange-50 border-orange-200" },
    { icon: "🍽️", title: "Eating Near Tourist Landmarks", desc: "Restaurants within 200 meters of the Eiffel Tower, Louvre, or Notre-Dame charge 3x the price for food that's 3x worse. Walk 5–10 minutes in any direction. The Rue Cler market street (7th arr., near the tower) has excellent neighborhood restaurants at normal Paris prices.", color: "bg-yellow-50 border-yellow-200" },
    { icon: "🚶", title: "Not Building in Enough Walking Time", desc: "Paris's greatest moments happen between destinations — the perfect cheese shop, the courtyard you stumbled through, the conversation in a square. Google Maps will say 12 minutes between sites; budget 20–25. The city rewards slow travel far more than efficient itinerary-ticking.", color: "bg-pink-50 border-pink-200" },
  ],
  tips: [
    { icon: "🎫", title: "The Paris Museum Pass Is Genuinely Worth It", desc: "The Museum Pass (€52/2 days, €67/4 days, €78/6 days) covers the Louvre (€22), Versailles (€20), Sainte-Chapelle (€13.50), Musée d'Orsay (€16), and 50+ other museums — and critically, lets you skip the ticket queue at every one. If you visit 3+ sites, it pays for itself and saves 30–45 minutes per site.", color: "bg-amber-50 border-amber-200" },
    { icon: "🚇", title: "The Navigo Découverte Weekly Pass Beats Individual Tickets", desc: "A single Paris Métro journey costs €2.15. The Navigo Découverte weekly pass costs €30 and covers unlimited travel on Métro, RER, bus, and tram — including the RER C to Versailles and RER B to CDG airport. If you're in Paris for 5 days and making day trips, this is the most economical transport option by far. Buy it at any Métro station with a passport photo (or use the photo machine in the station, €5).", color: "bg-teal-50 border-teal-200" },
    { icon: "🏛️", title: "Paris Has Excellent Free Museums Most Visitors Miss", desc: "Three free permanent collections worth an afternoon each: Musée Carnavalet (Paris city history, in Le Marais — astonishing), Petit Palais (fine arts from antiquity to 1914, gorgeous building), and Musée d'Art Moderne de Paris (20th century collection including Matisse and Picasso). Free every day, no booking required.", color: "bg-green-50 border-green-200" },
    { icon: "🥖", title: "The Supermarket Picnic Strategy", desc: "Franprix and Monoprix supermarkets are everywhere in Paris and are one of the city's hidden pleasures. A baguette costs €1.10 by law (regulated price). Excellent cave-aged cheese: €2–5. Decent wine: from €4 a bottle. Jambon de Paris: €2. A picnic at the Trocadéro, Champ de Mars, or along the Seine costs €10 per person and beats every tourist restaurant near the landmarks.", color: "bg-blue-50 border-blue-200" },
  ],
  faqs: [
    { q: "How many days do I need in Paris?", a: "5 days is the ideal first visit — it covers the Eiffel Tower, Louvre, Versailles day trip, Montmartre, and Le Marais without rushing. 3 days is the minimum but forces hard choices. Extend to 7+ days if you want Giverny, the Champagne region, or deeper neighborhood exploration." },
    { q: "When is the best time to visit Paris?", a: "April–June and September–October. Spring brings chestnut blossoms, outdoor café culture, and moderate crowds. September is arguably the best month — summer heat gone, tourist volumes down 30%, the city returns to locals. July–August is genuinely hot (sometimes 38°C+) and exhaustingly crowded at major sites. December–January is cold but the Christmas markets and festive lights on the Champs-Élysées are magical." },
    { q: "Is Paris safe for tourists?", a: "Paris is generally safe. The main practical risks are pickpockets at the Eiffel Tower, Louvre, Sacré-Cœur, and on Métro line 1 (the tourist line). Use an anti-theft bag or keep wallets in front pockets. Avoid Châtelet-Les Halles station late at night. The city has significant homeless populations around some stations — not dangerous, but be aware. Women traveling solo report Paris as safe with standard precautions." },
    { q: "How do I get from CDG Airport to central Paris?", a: "The RER B train is the best option: €12.10, runs every 10–15 minutes, takes 35 minutes to central Paris (Châtelet-Les Halles, Luxembourg, Saint-Michel). Catch it directly from CDG Terminal 2 or Terminal 1 via the CDGVAL automated shuttle. A taxi costs €50–70 fixed fare to Paris (the fixed rate is legally mandated). Avoid unlicensed drivers outside the terminal who will charge €100+." },
    { q: "What should I eat in Paris?", a: "In order of importance: a croissant from a proper boulangerie (not a café — the key is freshly baked, not reheated), steak frites at a classic bistro (Le Relais de l'Entrecôte has mastered this one dish), French onion soup at a brasserie in cold weather, crêpes from a street stand in Montmartre, macarons from Pierre Hermé (better than Ladurée — the Rue Bonaparte shop has the full range), and at least one supermarket picnic on the Seine." },
  ],
  combineWith: ["nice-3-days", "lyon-3-days", "london-4-days"],
  relatedSlugs: ["nice-3-days", "lyon-3-days", "barcelona-4-days", "rome-4-days"],
  galleryQuery: "paris france eiffel tower seine montmartre louvre",
};

export const metadata: Metadata = {
  title: "Paris in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description: "5 complete Paris plans with Eiffel Tower booking secrets, Louvre strategy, real euro costs, and the Paris only locals know — from croissant spots to hidden Métro hacks.",
  keywords: ["paris itinerary 5 days", "paris travel guide 2026", "paris budget travel", "eiffel tower guide", "paris things to do", "france travel guide"],
  openGraph: {
    title: "Paris in 5 Days: Budget to Luxury 2026 Itinerary",
    description: "Eiffel Tower booking secrets, Louvre strategy, Versailles tips, and real euro costs for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80", width: 1200, height: 630, alt: "Paris Eiffel Tower Seine River France" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Paris in 5 Days (2026)", description: "5 plans, Eiffel Tower secrets, real euro costs, Louvre strategy." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/paris-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Paris in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",
      description: "5 complete Paris plans with Eiffel Tower booking secrets, Louvre strategy, real euro costs, and the Paris only locals know.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Paris 5 Days", item: "https://www.incredibleitinerary.com/blog/paris-5-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Paris, France",
      description: "The capital of France and one of the world's great cities — home to the Eiffel Tower, the Louvre, Notre-Dame, Versailles, and an unmatched café culture.",
      touristType: ["Cultural tourists", "Architecture enthusiasts", "Food lovers", "History buffs"],
    },
  ],
};

export default function ParisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
