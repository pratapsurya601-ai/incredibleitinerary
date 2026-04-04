import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Buenos Aires",
  country: "Argentina",
  countryFlag: "🇦🇷",
  slug: "buenos-aires-5-days",
  heroQuery: "buenos aires tango argentina colorful la boca neighbourhood",
  heroAlt: "Colourful corrugated iron houses of Caminito street in La Boca neighbourhood, Buenos Aires Argentina",
  category: "South America",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro: "Buenos Aires is one of those cities that convinces you to stay a week longer than you planned. It has everything great cities have — grand European architecture, world-class restaurants, a vibrant arts scene — plus things only Buenos Aires has: the best beef on the planet served at midnight, tango in the street at 3am, a Sunday market that fills an entire neighbourhood, and a melancholy beauty in the crumbling belle-époque façades that the city carries like a badge of honour. Five days barely scratches it.",
  stats: { duration: "5 Days", budgetFrom: "$30", bestMonths: "Sep–Nov, Mar–May", airport: "EZE (Ministro Pistarini International)" },
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
        ["Visa-Free Entry", "Argentina added India to its visa-free list in 2023. Indian passport holders can enter Argentina for up to 90 days without a prior visa — no application, no fee, no approval required. Simply arrive at EZE airport with a valid passport and onward/return ticket."],
        ["Entry Requirements", "Valid Indian passport (at least 6 months remaining validity), proof of accommodation (hotel bookings or host address), onward or return ticket, and sufficient funds for your stay. Immigration officers may ask for hotel bookings — have these printed or accessible on your phone."],
        ["Important Note", "The visa-free arrangement is for tourism only. Working or conducting business without a work visa remains illegal. The 90-day stay limit resets after you leave Argentina — some travellers cross to Uruguay for a day to reset their 90-day clock, which is technically allowed."],
        ["Currency Advice", "Argentina has a complex dual exchange rate system. Your Indian debit/credit card at ATMs gives the official rate. Local currency exchange houses ('cuevas' or exchange offices) may offer a significantly higher 'blue rate' — understand the current situation before travel, as the rate gap has narrowed significantly under recent economic reforms."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passport Holders",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["Visa-Free — 90 Days", "USA, UK, Canada, Australia, EU, and most Western passport holders enter Argentina visa-free for up to 90 days for tourism. No pre-approval, no fee, no ETIAS equivalent required. Simply land at EZE with valid passport and onward ticket."],
        ["EZE Airport", "Ministro Pistarini International Airport (EZE) is 35km from the city centre. Taxi: $20–30 (official remis from the taxi desk inside arrivals, not street drivers). Bus: Tienda León shuttle ($16, drops at various city hotels). Local bus (Route 8): $1 but requires an SUBE card."],
        ["Currency Exchange", "USD cash is king for the best exchange rates in Argentina. Bring clean, crisp USD 100 bills — torn or written-on bills are refused. Exchange at official cambios downtown for the best legal rate. ATM withdrawals give official rates plus $5–8 bank fees per transaction."],
        ["SUBE Card", "Buy an SUBE card ($1 at any kiosk) on day one — it covers all buses and the Subte (metro) at $0.15–0.30 per ride, compared to $1.50+ for individual tickets. Buenos Aires has one of the world's most extensive bus networks."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$30–55/day",
      days: [
        {
          day: "Day 1",
          title: "San Telmo & La Boca — Tango, Markets & Colour",
          items: [
            "9:00am — San Telmo neighbourhood: start at Plaza Dorrego. On Sundays, the Feria de San Telmo fills the entire neighbourhood — antiques, vintage clothing, street performers, tango dancers in the square. Free to walk, $2–5 if you want a snack.",
            "11:00am — San Telmo Mercado (indoor market): a restored 1897 iron-and-glass market hall now filled with artisanal food stalls, empanada vendors, fresh juice bars, and specialty coffee roasters. Lunch here: empanadas (3 for ARS 2,000–3,000, roughly $2–3) and a glass of Malbec (ARS 1,500).",
            "1:00pm — La Boca district: Caminito pedestrian street, 15 minutes by taxi from San Telmo ($3–4). The brightly painted corrugated iron houses are as photogenic as advertised. Stay on Caminito and the immediate surrounding streets — this is the tourist zone. Do not wander into the surrounding La Boca residential streets with your camera and phone out.",
            "La Boca street tango: pairs of dancers perform on Caminito for tips (ARS 500–1,000, roughly $0.50–1 is appropriate, more if you photograph them for several minutes). The dancing is real tango — not the watered-down tourist version.",
            "4:00pm — Return to San Telmo. Explore Defensa Street's antique shops and the neighbourhood's crumbling belle-époque architecture. Coffee at Bar Británico (Defensa 399) — open since 1928, unchanged.",
            "8:00pm — Dinner: bife de chorizo (strip steak) at La Brigada or El Desnivel in San Telmo. Expect ARS 5,000–8,000 ($5–8) for a 400g steak with chimichurri, salad, and bread. This is globally exceptional beef at budget prices.",
            "10:00pm — Café Tortoni (Avenida de Mayo 825) for a final coffee, medialunas, and the atmosphere of Buenos Aires' most historic café (1858). Tango shows here run $25–50 and are tourist-oriented — better to find a milonga for authentic dancing.",
          ],
          cost: "$20–35 total",
        },
        {
          day: "Day 2",
          title: "Palermo — Parks, Modern Art & Neighbourhood Life",
          items: [
            "9:00am — Bosques de Palermo (Palermo Woods): Buenos Aires' great public park. Rowboat hire on the lake ($3/hour), joggers, dog walkers, families. Free entirely. The rose garden (Jardín de Rosas) within the park is an understated gem.",
            "11:00am — MALBA: Museo de Arte Latinoamericano de Buenos Aires. Entry: $10. The building is as impressive as the collection — a striking glass-and-concrete cube housing 7,000 works of Latin American 20th-century art. Frida Kahlo originals, Xul Solar, Antonio Berni. Allow 2 hours.",
            "1:30pm — Lunch in Palermo Soho: Fernet-Branca (Argentina's national spirit, mixed with cola) at a sidewalk café, plus a choripán (chorizo in a crusty roll, ARS 1,500–2,000) from a street parilla. This is what portenos (Buenos Aires locals) actually eat for lunch.",
            "3:00pm — Palermo Soho boutique shopping: Argentine designers on Thames Street and Gurruchaga — leather goods, handwoven textiles, silver jewellery, ceramic. Better quality and far cheaper than airport shops. Budget $20–50 for gifts.",
            "5:00pm — Palermo Hollywood: the restaurant and bar district that dominates Buenos Aires nightlife. Too early for dinner (porteños don't eat before 9pm) but perfect for a craft beer or natural wine at one of the dozens of wine bars along Fitz Roy and Thames.",
            "9:30pm — Dinner in Palermo: El Preferido de Palermo (Jorge Luis Borges and Gurruchaga) — a classic neighbourhood almacén (grocery-turned-restaurant) serving excellent milanesa, pasta, and house Malbec. ARS 8,000–12,000 ($8–12) per person.",
          ],
          cost: "$25–40 total",
        },
        {
          day: "Day 3",
          title: "Recoleta — Cemetery, Architecture & Afternoon Tea",
          items: [
            "9:00am — Recoleta Cemetery: free entry, opens at 8am. Walk the marble-mausoleum avenues of Buenos Aires' most aristocratic neighbourhood of the dead. Locate Eva Perón's tomb (well-signposted, usually with flowers). The scale and architectural variety — art deco, neoclassical, Egyptian revival — make this one of the world's great cemeteries. Allow 1.5 hours.",
            "11:00am — MNBA: Museo Nacional de Bellas Artes. Entry: free. A serious European-style fine arts collection: Rodin, El Greco, Rembrandt, Gauguin, Renoir — plus an exceptional collection of Argentine art. One of South America's finest museums and it costs nothing.",
            "1:00pm — Floralis Genérica: the Eduardo Catalano steel flower sculpture in Plaza de las Naciones Unidas. The petals open at sunrise and close at sunset — see it in the afternoon light when the steel catches the sun.",
            "2:00pm — Afternoon tea at Café La Biela (Quintana 596, facing the cemetery): a Buenos Aires institution since 1950. Media lunas, facturas (Argentine pastries), and coffee under the enormous rubber tree on the terrace. ARS 2,000–3,000 for two people.",
            "4:00pm — Recoleta neighbourhood walk: Alvear Avenue (Buenos Aires' most elegant street), the French Embassy, the Pilar Basilica. The architecture is uniformly belle-époque Hausmann Paris — Buenos Aires spent the 1880–1920 beef boom trying to become Europe.",
            "7:00pm — Dinner in Recoleta: Rodi Bar (classic neighbourhood bar-restaurant with excellent milanesa napolitana) for ARS 6,000–9,000. Or splurge slightly at La Cabrera in Palermo ($15–20) for what many consider the finest cut of beef in the city.",
          ],
          cost: "$20–35 total",
        },
        {
          day: "Day 4",
          title: "Puerto Madero & Tigre Delta Day Trip",
          items: [
            "7:00am — Tigre day trip: take the Mitre train from Retiro station to Tigre (1 hour, ARS 500 return — roughly $0.50 with SUBE card). The train runs every 20 minutes.",
            "9:00am — Tigre town: the Paraná Delta begins here — a 14,000 km² river delta of islands, willows, stilt houses, and motor launches. The Tigre Art Museum (free, excellent) and the Puerto de Frutos (riverside craft market) are worth an hour.",
            "10:30am — Delta boat tour: lanchas colectivas (public water taxis) run fixed routes through the delta for ARS 800–1,500 ($0.80–1.50). Or hire a private lancha for $10–15 per hour for a tour of the residential islands where porteños spend weekends. The delta has a completely different character to the city.",
            "1:00pm — Lunch in Tigre: riverside restaurant on the Luján River with fresh river fish. ARS 4,000–6,000 per person.",
            "3:30pm — Return train to Buenos Aires.",
            "5:00pm — Puerto Madero waterfront walk: free. The converted dock warehouses now house trendy restaurants and bars. The Puente de la Mujer (Santiago Calatrava's rotating pedestrian bridge) is architecturally striking. The waterfront promenade along the ecological reserve is a pleasant hour.",
            "Saturday evening note — MALBA free entry 7–9pm on Saturdays. If your timing aligns, this is the city's best free evening cultural activity.",
          ],
          cost: "$15–30 total (Tigre train + boat + lunch)",
        },
        {
          day: "Day 5",
          title: "Historic Centre, Teatro Colón & Farewell Asado",
          items: [
            "9:00am — Plaza de Mayo: the political heart of Buenos Aires. The Casa Rosada (presidential palace, famous pink exterior) is free to view from the plaza — the balcony where Eva Perón addressed the masses. The Metropolitan Cathedral (free) across the square contains José de San Martín's mausoleum.",
            "10:30am — Teatro Colón: guided tour of Buenos Aires' legendary opera house ($15). The main hall has near-perfect acoustics — ranked among the world's top 5 opera houses. The building took 18 years to construct (1889–1908). Even without attending a performance, the tour is impressive.",
            "12:30pm — Obelisco: Buenos Aires' most recognisable monument, at the intersection of Avenida 9 de Julio (claimed to be the world's widest avenue at 140 metres, 18 lanes). The surrounding Corrientes avenue is the theatre and bookshop district.",
            "2:00pm — Corrientes bookshops: Buenos Aires has more bookshops per capita than any city on earth. El Ateneo Grand Splendid (Santa Fe 1860) is the most beautiful — a converted 1919 theatre with the stage now a café and the stalls filled with books. Free to browse.",
            "4:00pm — Palermo for last-minute leather goods or gifts: good leather jacket from a reputable San Telmo or Palermo shop runs $80–200 (exceptional quality, Argentine leather is a genuine global standout).",
            "8:00pm — Farewell asado: if your accommodation has a grill (most Airbnbs do), buy meat from a carnicería (butcher) — vacío (flank), entraña (skirt steak), chorizo, morcilla (black pudding) — and grill at home. Budget ARS 6,000–10,000 ($6–10) for meat for 2. Otherwise, a traditional parrilla (steakhouse) dinner at Don Julio (Palermo) or La Cabrera is the perfect last meal.",
          ],
          cost: "$25–45 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$100–200/day",
      days: [
        {
          day: "Day 1",
          title: "San Telmo, La Boca & Professional Tango Show",
          items: [
            "Stay in a boutique hotel in San Telmo or Palermo ($60–120/night) — Buenos Aires' most atmospheric neighbourhoods for mid-range travellers.",
            "Morning: San Telmo with a food and culture walking tour (Airbnb Experience or BA Free Tours private option, $25–40 per person) — local guide covering the neighbourhood history, best empanada shops, the antique trade, and the Feria on Sundays.",
            "La Boca afternoon: Caminito plus a visit to the Boca Juniors stadium museum (La Bombonera, $10 entry, includes museum and a walk on the pitch). The museum covers the history of Argentina's most passionate football club and the Diego Maradona memorabilia is extraordinary.",
            "Evening: professional tango dinner show at Señor Tango ($100–130 per person, includes dinner and full show) or Rojo Tango at the Faena Hotel ($150 per person). These are tourist productions but with genuinely world-class dancers — the acrobatic tango performed at this level is a distinct art form.",
          ],
          cost: "$120–180 total",
        },
        {
          day: "Day 2",
          title: "Palermo Design & Wine",
          items: [
            "MALBA with an audio guide, followed by the contemporary art galleries of Palermo Soho — Miau Miau, Galería Rubbers, Ruth Benzacar in the San Telmo tunnels.",
            "Lunch at Don Julio (Guatemala 4691) — listed on Latin America's 50 Best Restaurants. The provoleta (grilled provolone cheese), the tira de asado (short ribs), and the house Malbec selection. Reserve in advance; mid-range price: $25–35 per person.",
            "Afternoon: wine tasting at Aramburu Bistró or a Mendoza wine salon in Palermo — curated Argentine wine tasting sessions ($30–50 per person) covering Malbec, Torrontés, and the high-altitude Cafayate wines.",
            "Evening: Palermo Hollywood dinner at El Baqueano (contemporary Argentine haute cuisine, $40–60 per person) or Tegui (tasting menu, $60–80 per person, book 2 weeks ahead).",
          ],
          cost: "$130–200 total",
        },
        {
          day: "Day 3",
          title: "Recoleta Luxury Quarter & Authentic Milonga",
          items: [
            "Morning: Recoleta Cemetery with a private guide specialising in Argentine history ($40–60/person, 2 hours) — the stories behind the mausoleums include presidents, generals, oligarchs, and the complicated history of the Perón family.",
            "Afternoon: Alvear Palace Hotel afternoon tea ($30–40 per person) — the grandest hotel in Buenos Aires has been serving afternoon tea in its French baroque salon since 1932. Scones, pastries, champagne optional.",
            "Evening: authentic milonga. La Viruta (Armenia 1366) or El Beso (Riobamba 416) — these are where porteños go to actually dance tango, not to watch tourists. Entry $5–10 includes first drink. Arrive after 11pm for the best atmosphere. Dance lessons available before the milonga from 9–11pm ($10–15).",
          ],
          cost: "$100–160 total",
        },
        {
          day: "Day 4",
          title: "Tigre Delta Private Boat & Puerto Madero",
          items: [
            "Tigre Delta private boat tour (2–3 hours, $40–80 for private lancha hire with local pilot) exploring the residential island life of the Buenos Aires upper class — weekenders, rowing clubs, floating restaurants.",
            "Lunch at Il Nuovo María de Tigre (seafood, river views, mid-range, $20–30 per person).",
            "Return to Buenos Aires: afternoon at Puerto Madero's Faena Hotel for a drink at the El Mercado restaurant terrace — the design hotel by Alan Faena and Philippe Starck is worth seeing even if you are not staying.",
            "Evening: Faena Arts Center cultural event or a performance at one of the Corrientes Avenue theatres ($20–50 per ticket) — Buenos Aires has a genuinely world-class theatrical tradition.",
          ],
          cost: "$100–160 total",
        },
        {
          day: "Day 5",
          title: "Cultural Quarter & Farewell Dinner",
          items: [
            "Morning: Teatro Colón guided backstage tour ($20) plus the surrounding Microcentro architecture — the Supreme Court, the Banco Nación, the Centro Cultural Kirchner (largest cultural centre in South America, free, in a restored 1928 post office building).",
            "Afternoon: Mataderos Sunday fair (if timing allows, last Sunday of the month only) — the most authentic festival in Buenos Aires, in the old slaughterhouse neighbourhood, with folk music, gaucho horsemanship displays, and traditional crafts. An hour from the centre by bus.",
            "Farewell dinner: Chila (Puerto Madero, $60–80 per person tasting menu) or a classic parrilla for the final Argentine steak — Cabaña Las Lilas in Puerto Madero ($40–60/person) is the most famous and consistently the best.",
          ],
          cost: "$100–150 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$350–900+/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival & Private City Introduction",
          items: [
            "Arrival at EZE. Private transfer to the Alvear Palace Hotel (Recoleta, $400–800/night) or the Faena Hotel Buenos Aires (Puerto Madero, $500–1,000/night). Both are among South America's finest hotels.",
            "Private afternoon walking tour with a Buenos Aires cultural historian ($80–150, 3 hours) covering the architectural history of the city — the Avenida de Mayo, the French-inspired Recoleta boulevards, and the story of how Buenos Aires built itself as the Paris of South America during the 1880–1920 beef boom.",
            "Evening: cocktails at the Florería Atlántico bar (Arroyo 872) — consistently voted one of the world's 50 best bars, hidden in a flower shop. Then dinner at Elena restaurant (Four Seasons Buenos Aires) — the finest beef in Argentina presented in a grand steakhouse setting. $60–100/person.",
          ],
          cost: "$400–700 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Palermo Arts & Private Tango Lesson",
          items: [
            "Private MALBA opening with a curator-level art specialist ($150–300 for a private 2-hour session): Latin American modernism, the Diego Rivera works, the Frida Kahlo. Without the crowds and with context.",
            "Lunch at Tegui (tasting menu, $80–100 per person) or Mishiguene (contemporary Jewish-Argentine cuisine, $60–80 per person) — both routinely on Latin America's 50 Best Restaurant lists.",
            "Private tango lesson with a professional couple in a Palermo or San Telmo studio ($80–150/hour). Then attend a milonga that same evening — the lesson gives you enough to participate rather than just observe.",
            "Late dinner at Aramburu ($100–150 per person, contemporary Argentine tasting menu, 20-seat restaurant in a Retiro townhouse — book weeks in advance).",
          ],
          cost: "$500–900 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Recoleta & Tigre Luxury Delta",
          items: [
            "Recoleta Cemetery private guided tour with a historian specialising in Argentine political history: the Perón family politics, the oligarchy of the 1900s, the 'disappeared' of the 1976–83 military dictatorship — the cemetery as a complete mirror of Argentine history.",
            "Lunch at the Alvear Palace Hotel's La Bourgogne restaurant — the finest French-Argentine fusion in the country, $80–120 per person. The wine list includes the best Argentine Malbec verticals in existence.",
            "Afternoon: private Tigre Delta boat excursion to the exclusive island restaurants and clubs. Some delta clubs offer day membership to hotel guests — lunch, rowing, the extraordinary silence of the delta.",
          ],
          cost: "$400–700 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Teatro Colón Private Access & Gaucho Experience",
          items: [
            "Teatro Colón private backstage tour with the artistic director or a musical specialist ($100–200 for private access) — the stage, the workshops where sets are built and costumes sewn, the history of the 1908 opening night.",
            "If a performance is on during your visit, tickets for the main hall (orchestra or box seats: $50–200) are the finest musical evening Buenos Aires offers.",
            "Optional: half-day gaucho experience at an estancia (ranch) outside the city ($100–200 including transport, asado lunch, horse riding, boleadora demonstrations). The gaucho culture is Argentina's most distinctive contribution to world heritage.",
          ],
          cost: "$400–600 total (excl. hotel)",
        },
        {
          day: "Day 5",
          title: "Shopping, Spa & Farewell Dinner",
          items: [
            "Morning: personal shopping on Alvear Avenue and Florida Street — Prüne (luxury Argentine leather), Escorihuela Gascón (wine shop with the best Mendoza selection in Buenos Aires), Palermo boutiques for locally made jewellery and textiles.",
            "Afternoon: spa at the Alvear or Faena — both have world-class treatment menus. The Faena's spa has a 25-metre heated pool and offers a 90-minute treatment starting at $150.",
            "Farewell dinner at the restaurant of your choice from the above — or book Chila ($80–100/person tasting menu) or Osadia de Crear ($120–150/person, new Argentine fine dining in San Telmo) for a memorable final evening.",
            "Private transfer to EZE airport (arrange through the hotel concierge, $60–80 in a luxury vehicle).",
          ],
          cost: "$400–700 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "$10–25", food: "$8–15", transport: "$3–8", activities: "$5–12", total: "$30–55/day" },
    { tier: "✨ Mid-Range", accommodation: "$60–120", food: "$20–40", transport: "$10–20", activities: "$20–40", total: "$100–200/day" },
    { tier: "💎 Luxury", accommodation: "$200–800", food: "$60–150", transport: "$30–80", activities: "$80–200", total: "$350–900+/day" },
  ],
  mistakes: [
    {
      icon: "🏠",
      title: "Staying in La Boca",
      desc: "Caminito and the tourist zone of La Boca are safe to visit during the day. The surrounding La Boca neighbourhood — away from the painted streets — has a high petty crime rate and is emphatically not an area for walking around after dark or with expensive cameras. Book accommodation in San Telmo, Palermo, or Recoleta instead. La Boca is a 20-minute taxi ride; it is not a base.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "💱",
      title: "Converting Money at the Airport",
      desc: "The currency exchange desks inside EZE arrivals give the worst rates in Argentina — often 20–30% below the rates available in the city centre. Exchange only a small amount at the airport for taxis and immediate needs. Convert properly in the downtown cambios or use the ATMs in the city centre. Bring USD cash in good condition for the best exchange rates.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "💃",
      title: "Only Watching Tourist Tango Shows, Never Dancing",
      desc: "The professional dinner-and-show tango is spectacular and worth seeing once. But it is a performance, not tango. Authentic tango — the milonga — is danced by ordinary portenos in neighbourhood clubs from 11pm to 4am. Entry costs $5–10. Beginners are welcomed with lessons before the dancing begins. The culture of the milonga is how Buenos Aires has kept tango alive for 130 years; a tourist show is how it exports it.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "📅",
      title: "Missing the Sunday San Telmo Market",
      desc: "The Feria de San Telmo runs every Sunday along Defensa Street — 300+ stalls of antiques, vintage goods, leather, silver, craft beer, artisan food, and street performers with tango couples dancing in Plaza Dorrego. It is one of South America's finest weekly markets. If your 5 days include a Sunday, restructure your itinerary to make Day 1 the Sunday market day.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🏛️",
      title: "Recoleta Cemetery at 9am — Before the Tour Groups",
      desc: "The cemetery opens at 8am. Tour buses arrive from 10am onwards. At 9am on a weekday, you have the marble avenues and extravagant mausoleums almost entirely to yourself. The early morning light through the cypress trees is extraordinary. Eva Perón's tomb is unmarked from the outside — look for the Duarte family vault and the flowers.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🥩",
      title: "Steak Lunch Costs 30% Less Than Steak Dinner",
      desc: "The same restaurant serving the same cut will charge significantly less at lunch than dinner — it is the Argentine restaurant convention. The lunch menu (menú del mediodía) at most parrillas includes a cut of beef, salad, glass of house Malbec, and bread for $10–15. The identical order at dinner is $15–25. Eat your main steak lunch, have lighter dinners.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🌊",
      title: "Sunday Tigre Delta — With Local Crowds",
      desc: "The Tigre Delta on a Sunday afternoon is how Buenos Aires families spend weekends — not tourists on a day trip. The lanchas colectivas (water taxis) are full of locals with coolers and mate thermoses heading to island houses. Joining this is one of the most authentically Argentine experiences available to a visitor, and it costs less than $2 in transport.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "💃",
      title: "El Ateneo Grand Splendid: World's Most Beautiful Bookshop",
      desc: "El Ateneo Grand Splendid on Avenida Santa Fe was a 1919 opera theatre converted into a bookshop. The original stage is now a café, the boxes are reading alcoves, and the painted ceiling dome looks down on three floors of books. Entry is free; the café on the stage serves excellent coffee. Even if you buy nothing, it is one of the most beautiful interior spaces in Buenos Aires.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "Is Buenos Aires safe for tourists in 2026?",
      a: "Buenos Aires is generally safe for tourists with standard precautions. The main risks are pickpocketing and phone snatching in tourist-heavy areas (La Boca, the bus terminal, and crowded markets), and 'express kidnappings' (brief forced ATM withdrawals) if you take unlicensed street taxis. Use Uber or the registered remis taxi service from your hotel exclusively. Keep a second lower-value card for ATM use. Most visitors complete 5-day visits without any incident.",
    },
    {
      q: "What is the exchange rate situation in Argentina?",
      a: "Argentina has had a complex dual exchange rate system for years. As of 2026, the Milei government has made significant steps toward currency unification. The official and unofficial ('blue dollar') rates have narrowed significantly. Use official bank ATMs or licensed exchange offices downtown. Bring crisp USD 100 bills for cash exchange if you want the best rates — Argentine peso cash spending is significantly cheaper than card payments at the official rate.",
    },
    {
      q: "Do Indian citizens need a visa for Argentina?",
      a: "No. As of 2023, Argentina added India to its visa-free agreement. Indian passport holders can enter Argentina for up to 90 days for tourism without any prior visa or approval. Simply present your valid Indian passport at immigration with a return ticket and proof of accommodation.",
    },
    {
      q: "Can I do Patagonia from Buenos Aires?",
      a: "Yes, and it is spectacular. El Calafate (Perito Moreno Glacier) is a 3-hour flight from Buenos Aires (AeroLineas Argentinas, $100–200 return). Add 3–4 days to your Buenos Aires trip for Patagonia — or make it a separate return trip. Bariloche (Argentine Lake District, ski resort, German-influenced town) is also 2.5 hours by flight. Both are dramatically different from Buenos Aires and worth the addition.",
    },
    {
      q: "Where do I eat the best steak in Buenos Aires?",
      a: "At every price point, the beef in Buenos Aires is exceptional — even a mid-range neighbourhood parrilla will serve better beef than most of the world. Specific recommendations by tier: Budget — El Desnivel in San Telmo or La Brigada. Mid-range — La Cabrera in Palermo or Siga La Vaca in Puerto Madero. Fine dining — Don Julio (Latin America's 50 Best), Cabaña Las Lilas, or Elena at the Four Seasons. The cut to order: bife de chorizo (sirloin) or ojo de bife (ribeye), medium-rare.",
    },
  ],
  combineWith: ["rio-de-janeiro-5-days", "peru-machu-picchu-7-days", "colombia-7-days"],
  relatedSlugs: ["rio-de-janeiro-5-days", "peru-machu-picchu-7-days", "colombia-7-days", "lisbon-4-days"],
  galleryQuery: "buenos aires recoleta palermo tango argentina beef parrilla",
};

export const metadata: Metadata = {
  title: "Buenos Aires in 5 Days: Tango, Steak, Recoleta & La Boca (2026)",
  description: "Complete 5-day Buenos Aires guide covering San Telmo markets, Recoleta Cemetery, Palermo design district, authentic milonga tango, and the world's best beef — with real costs and visa-free entry info for Indians.",
  keywords: ["buenos aires itinerary 5 days", "buenos aires travel guide 2026", "argentina tango guide", "recoleta cemetery", "buenos aires budget travel", "india visa argentina", "buenos aires steak restaurants"],
  openGraph: {
    title: "Buenos Aires in 5 Days: Tango, Steak & Recoleta (2026)",
    description: "From the Sunday San Telmo market to a midnight milonga — 5-day Buenos Aires guide with real costs, authentic experiences, and visa-free entry for Indians.",
    images: [{ url: "https://images.unsplash.com/photo-1583997683064-7bde4a0c3428?w=1200&q=80", width: 1200, height: 630, alt: "La Boca colourful neighbourhood Buenos Aires Argentina" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Buenos Aires in 5 Days (2026)", description: "Tango, steak, Recoleta, La Boca — complete guide with real costs." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/buenos-aires-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Buenos Aires in 5 Days: Tango, Steak, Recoleta & La Boca (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1583997683064-7bde4a0c3428?w=1200&q=80",
      description: "Complete 5-day Buenos Aires guide with tango, steak, markets, and museum recommendations at every budget level.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Buenos Aires 5 Days", item: "https://www.incredibleitinerary.com/blog/buenos-aires-5-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Buenos Aires, Argentina",
      description: "South America's most European city — home to world-class tango, the finest beef on the planet, grand belle-époque architecture, and one of the world's most vibrant cultural scenes.",
      touristType: ["Food lovers", "Cultural tourists", "Dance enthusiasts", "Architecture enthusiasts"],
      geo: { "@type": "GeoCoordinates", latitude: -34.6037, longitude: -58.3816 },
    },
  ],
};

export default function BuenosAiresPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
