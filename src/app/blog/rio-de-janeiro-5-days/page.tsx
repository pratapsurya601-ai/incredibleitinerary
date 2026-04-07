import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Rio de Janeiro",
  country: "Brazil",
  countryFlag: "🇧🇷",
  slug: "rio-de-janeiro-5-days",
  heroQuery: "rio de janeiro christ redeemer brazil sugarloaf mountain",
  heroAlt: "Christ the Redeemer statue overlooking Rio de Janeiro Brazil with Sugarloaf Mountain",
  category: "South America",
  date: "April 5, 2026",
  readTime: "16 min read",
  intro: "Rio de Janeiro at golden hour — Christ the Redeemer with his arms outstretched over the city, Sugarloaf Mountain catching the last light above Guanabara Bay, the curve of Copacabana beach stretching two kilometres below, samba drifting out of a Lapa doorway — is one of the genuinely great spectacles on earth. Five days gives you both iconic mountains, the world's most famous beaches, a Santa Teresa samba night, and a favela perspective that changes how you see the city.",
  stats: {
    duration: "5 Days",
    budgetFrom: "$50",
    bestMonths: "Apr–Jun, Aug–Oct",
    airport: "GIG (Galeão) or SDU (Santos Dumont)",
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
        ["e-Visa Required", "Indian passport holders require a Brazilian e-Visa. Apply online at gov.br/pt-br/servicos/obter-visto-para-visitar-o-brasil. Cost: approximately $40 USD. Processing time: 3–10 business days. Apply at least 10 days before travel to allow for any delays. The e-Visa is linked to your passport electronically — no sticker, no paper, no embassy visit required."],
        ["Application Documents", "Scanned passport photo page, recent passport-size photograph (digital, white background, ICAO compliant), return flight booking, first hotel confirmation, bank statements showing sufficient funds (typically R$500–1,000 per day of stay as a guideline). The system is straightforward — most applications are approved within 72 hours."],
        ["e-Visa Validity", "The Brazil e-Visa for Indian nationals is typically valid for 90 days from issuance for a maximum stay of 90 days. Confirm exact validity on your specific approval letter. The e-Visa is single or multiple entry depending on the type applied for — apply for multiple entry if you plan any border crossings (e.g., to Argentina or Uruguay)."],
        ["Currency & Carry", "Brazil uses the Brazilian Real (BRL). $1 USD ≈ R$5.50–6.00 (2026). Bring a debit card — Nubank and international ATMs are widespread in Ipanema and Copacabana. Notify your bank before travel. Credit cards are widely accepted in all tourist areas."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["USA — Visa-Free from 2024", "US passport holders no longer need a visa for Brazil since June 2023. Enter visa-free for up to 90 days. This is a recent bilateral change — previously US citizens required a $160 visa. Present passport at immigration, state purpose (tourism), show return ticket."],
        ["UK & EU — Visa-Free", "UK, EU, Canada, and Australian passport holders enter Brazil visa-free for 90 days. No pre-registration required. Passport must be valid for the duration of your stay (Brazil does not strictly require 6 months validity beyond return, but it is best practice)."],
        ["Extension Option", "The 90-day limit can sometimes be extended for another 90 days (maximum 180 days/year) at a Polícia Federal office in Rio de Janeiro. This is generally granted for tourism purposes. Fee: approximately R$250."],
        ["Yellow Fever", "Yellow fever vaccination is recommended for travel to certain Brazilian states. Rio de Janeiro state is not currently in the endemic zone, but the vaccine is recommended if you plan to visit the Amazon or Pantanal. Check the latest WHO and Brazilian Ministry of Health advisories before travel."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$50–85/day",
      days: [
        {
          day: "Day 1",
          title: "Ipanema & Copacabana Beaches",
          items: [
            "Arrive Rio — Galeão Airport (GIG) is 45 minutes from Ipanema by Uber ($15–25), the most convenient option from the airport. Santos Dumont (SDU) is for domestic arrivals and is 15 minutes from the centre. Check into a hostel in Ipanema or Copacabana ($15–30/night: Mellow Yellow Hostel Ipanema is excellent, great location on Rua Barata Ribeiro).",
            "Morning beach walk: Ipanema and Copacabana are both safest and most beautiful in the early morning (6–10am). Walk the Copacabana boardwalk (calçadão) — the iconic wave-pattern Portuguese mosaic pavement, 4km long, free. Watch the early-morning exercise crowd, the futevolei (football-volleyball) games, and the fishing boats bringing in the overnight catch.",
            "Garota de Ipanema bar and restaurant (Rua Vinicius de Moraes — the street is named for the poet) — the original location where the bossa nova standard The Girl from Ipanema was written in 1962. A toasted sandwich and coffee here: R$25–35. The location is more significant than the menu — this is where Brazilian music became international.",
            "Afternoon: rent a beach umbrella and chair on Ipanema beach (R$20–30). Each part of Ipanema beach has its own character — Post 8 is the LGBTQ+ community area (Praia do Arpoador side), Post 9 is families, Post 10 (near the rocks of Arpoador) is the surfing crowd. Swim between the flags — lifeguards are present and currents can be strong.",
            "Sunset at the Arpoador rocks — the rocky outcrop between Ipanema and Copacabana where Cariocas gather every evening for the sunset. When the sunset is particularly beautiful, the crowd applauds. A genuine Rio tradition, completely free, unmissable.",
            "Evening: beach bar (quiosque) for a cold Brahma or Skol beer (R$10–15) and a caipirinha (R$15–25). Brazilian street food from the beach barracas: churros (R$8), milho assado grilled corn (R$5), pão de queijo cheese bread (R$5).",
          ],
          cost: "R$120–200 ($22–36) total",
        },
        {
          day: "Day 2",
          title: "Christ the Redeemer & Santa Teresa",
          items: [
            "Book Christ the Redeemer online in advance (trem do corcovado.com.br or the official Trem do Corcovado site). The Corcovado cogwheel train departs from Cosme Velho station — price includes train + entrance fee: R$111 total. Book the 8am or 9am slot to arrive at the summit before the cloud and crowd build.",
            "The train ride through Tijuca National Forest takes 20 minutes each way — the world's largest urban rainforest, 32 square kilometres of Atlantic Forest inside the city. The forest canopy is at eye level as you ascend. Toucans, marmosets, and monkeys are commonly sighted from the train.",
            "Christ the Redeemer summit (700m): the 38-metre art deco statue weighs 635 tonnes and was completed in 1931. The 360-degree view from the platform is one of the great panoramas on earth — Guanabara Bay to the east, Sugarloaf Mountain to the right, Ipanema and the Atlantic to the south, the city grid spreading north into the interior. Arrive at 8–9am for the clearest sky.",
            "Descend and take a short Uber to Santa Teresa neighbourhood (R$12–18). The bohemian hillside neighbourhood of colonial mansions, cobblestone streets, artists' studios, and tile-covered stairways. Completely different from the beach districts — quieter, greener, more European in character.",
            "Parque das Ruínas — a ruined colonial mansion turned exhibition space with a rooftop terrace giving one of the finest views of Rio's centro and Guanabara Bay. Free entry. The sunset from this terrace is exceptional.",
            "Dinner in Santa Teresa: Bar do Mineiro (Rua Paschoal Carlos Magno) — one of Rio's great neighbourhood restaurants, open since 1981. Classic Mineiro (Minas Gerais state) cuisine: feijão tropeiro (beans with pork crackling and farofa), tutu de feijão, moqueca. Full meal with a beer: R$55–80. The bar fills with artists, musicians, and locals — this is not a tourist restaurant.",
          ],
          cost: "R$280–380 ($50–70) total",
        },
        {
          day: "Day 3",
          title: "Sugarloaf Mountain & Centro Histórico",
          items: [
            "Sugarloaf Mountain (Pão de Açúcar): cable car from Praia Vermelha in the Urca neighbourhood. Two-stage cable car (first to Morro da Urca at 220m, then to Sugarloaf summit at 396m), R$130 return. Book online at bondinho.com.br to avoid queues. Aim for the late afternoon — the views of Guanabara Bay with afternoon golden light and the sunset sequence from the summit is one of the great Rio experiences.",
            "From the Sugarloaf summit: the full panorama of Guanabara Bay, the Niterói bridge, the Santos Dumont airport on the water, and the full Copacabana beach arc below. On clear days, Christ the Redeemer is visible on the opposite mountain.",
            "Flamengo Park (Parque do Flamengo): the largest urban park in Rio, stretching along the bay shore south of Centro. Free, beautiful, consistently safe during daylight — Cariocas exercise here constantly. Walk through in the afternoon.",
            "Centro Histórico: Uber or metro from Flamengo to Centro ($5–8). Metropolitan Cathedral (Catedral Metropolitana do Rio de Janeiro): free entry, extraordinary brutalist concrete cone architecture, 96 metres tall, four massive stained glass windows rising to the ceiling. Divisive architecture — either magnificent or ugly, possibly both.",
            "Confeitaria Colombo (Rua Gonçalves Dias): Rio's most famous café, open since 1894. Belle Époque interior with jacaranda wood panelling, Belgian mirrors, and Portuguese tile. Afternoon tea: R$45–80 for a full selection of pastries, cakes, and sandwiches. A piece of the city's history.",
            "Evening return to Ipanema for dinner: O Navegador (budget seafood, R$35–55) or grab açaí bowls on the beachfront (R$15–30 — essential Rio snack, the purple Amazon berry blended with banana, granola, and honey).",
          ],
          cost: "R$300–420 ($55–76) total",
        },
        {
          day: "Day 4",
          title: "Day Trip — Petrópolis or Ilha Grande",
          items: [
            "Choose your day trip based on interests:",
            "Option A — Petrópolis Imperial City (easier, 1.5h bus from Rodoviária Novo Rio, R$30 return, departs every 30 minutes): the mountain imperial summer retreat of Emperor Pedro II. Crystal Palace, Museu Imperial (R$25, the crown jewels and imperial throne), and the Gothic-Revival Catedral de Petrópolis where the Imperial family is buried. The town sits at 838m — a pleasant 10–15°C cooler than Rio in summer. Return in time for Lapa nightlife.",
            "Option B — Ilha Grande (longer but extraordinary, 3h from Rio to Angra dos Reis then 1.5h ferry, R$120–180 total return): no cars, no roads, just 193km² of Atlantic Forest and pristine beaches. The Lagoa Azul (Blue Lagoon) beach is one of Brazil's most beautiful. Leave at 6am to maximise the day, return last ferry at 5pm. Bring only what fits in a daypack — the island has no baggage storage for day visitors.",
            "Evening (both options): Lapa neighbourhood nightlife. The arched Lapa Aqueduct (Arcos da Lapa) is the backdrop for Rio's samba scene. The area comes alive after 9pm on Thursday, Friday, and Saturday — outdoor samba circles (rodas de samba), live music spilling from every bar, street vendors selling caipirinhas from coolers (R$10–15). Lapa Fica (pay what you want, all-inclusive samba entrance) or Circo Voador (R$25–40 entry) are both excellent.",
          ],
          cost: "R$250–380 ($45–70) total",
        },
        {
          day: "Day 5",
          title: "Favela Tour, Selarón Steps & Farewell Churrasco",
          items: [
            "Santa Marta favela guided tour (book through Be a Local or Favela Tour operator, R$60–80): Santa Marta was Rio's first pacified favela (2008) and is the model for community tourism done right. The guided tour (always with a local guide who lives in the community) takes you through the vertical street grid, the funk recording studios, the Michaels Jackson mural (he filmed the They Don't Care About Us video here in 1996), and to the top mirador with a panoramic Rio view. Tours typically 2 hours. The income goes directly to the community.",
            "Selarón Steps (Escadaria Selarón): 10 minutes walk from Lapa. Chilean artist Jorge Selarón spent 23 years tiling this staircase with 2,000 tiles from 60 countries — he considered it his life's work and gift to the Brazilian people. Free to visit, best photographed at 8am before crowds arrive. The tiles are still being added and replaced by visitors who bring tiles from their home countries.",
            "Lunch in Lapa: Armazém São Thiago (Bar do Gomez, Rua Áurea 26, Santa Teresa, 10 minutes Uber): one of Rio's oldest and most beloved neighbourhood bars, established 1919. Bacalhau com natas (salt cod in cream), bolinhos de bacalhau (salt cod cakes, R$5 each), ice-cold draft beer. Total lunch R$40–60.",
            "Afternoon: Final Ipanema beach session or walk the entire Copacabana boardwalk end-to-end (4km, 45 minutes, the full sweep of the bay).",
            "Farewell churrasco dinner: Porcão Rio's (Parque do Flamengo, Aterro) — the most famous rodízio churrascaria in Rio. R$100–130 per person all-you-can-eat rodízio: passadors bring 20+ cuts of meat (picanha top sirloin, fraldinha flank, lombo pork loin, linguiça sausage, chicken hearts) continuously to your table. The salad bar is equally spectacular. Add unlimited caipirinha service for R$40 extra.",
            "Night: Farewell caipirinha at a Lapa or Ipanema bar. The next morning you fly home from a city that smells of cachaça, sounds like samba, and looks like nowhere else on earth.",
          ],
          cost: "R$350–500 ($64–91) total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$150–280/day",
      days: [
        {
          day: "Day 1",
          title: "Ipanema Arrival & Beach Culture",
          items: [
            "Private transfer from GIG airport ($30–40) to a 3–4 star Ipanema hotel ($120–200/night: Yoo2 Rio de Janeiro by Marriott in Ipanema, or Prodigy Santos Dumont). Check in, freshen up, and walk directly to the beach.",
            "Afternoon: Ipanema beach with a proper beach setup — rented chairs and umbrella (R$40–60), fresh coconut water from a vendor (R$8), and a caipirinha delivered to your sunchair by the quiosque staff (R$25).",
            "Late afternoon: Garota de Ipanema bar and restaurant for a proper bossa nova pilgrimage lunch (R$60–90/person for a full meal with drinks — book ahead for window seats).",
            "Sunset at Arpoador rocks with the crowd. Then walk to an Ipanema restaurant for dinner: Zuka (Rua Dias Ferreira, Leblon) — modern Brazilian cuisine, the neighbourhood spot for Carioca professionals, R$60–90/person.",
          ],
          cost: "R$500–700 ($91–127) total",
        },
        {
          day: "Day 2",
          title: "Christ the Redeemer — Private Dawn Visit",
          items: [
            "Early morning private tour to Christ the Redeemer: book with a licensed tour operator who includes private transport, guide, and early-access entry slot (R$250–350/person). The advantage over the public train is flexibility on timing and a guide who provides the art deco history, the construction story, and the religious significance.",
            "Tijuca National Forest: ask your guide for a post-summit detour into the national forest — the Cascatinha Taunay waterfall, native Atlantic Forest birds, and the Alto da Boa Vista picnic area (popular with Carioca families on weekends).",
            "Santa Teresa neighbourhood afternoon: lunch at Aprazível (Rua Aprazível 62, Santa Teresa) — one of Rio's best restaurants, built into a hillside garden with city views, contemporary Brazilian cuisine using Amazonian ingredients (tucupi, jambu, pirarucu). Tasting menu R$120–180/person.",
            "Parque das Ruínas sunset, then Lapa evening: bar-hop the Lapa neighbourhood with a local guide (book a Lapa samba walking tour, R$80–100/person including guide and entry to two samba venues).",
          ],
          cost: "R$700–950 ($127–173) total",
        },
        {
          day: "Day 3",
          title: "Sugarloaf Sunset & Waterfront Dining",
          items: [
            "Morning at leisure: the Museu do Amanhã (Museum of Tomorrow) in Porto Maravilha (R$30), a dramatic Santiago Calatrava-designed science museum on the waterfront. Riveting interactive exhibitions on climate, sustainability, and the planet's future. The building itself is extraordinary.",
            "Centro cultural lunch: MAST (Museu de Astronomia) café, or Restaurante Gambrinus in the Centro historic district for classic carioca working-lunch food at mid-range prices (R$50–80).",
            "Afternoon: Sugarloaf at 4pm for the optimal golden-hour approach. Book the Bondinho Pão de Açúcar VIP experience (R$200–280) which includes a private terrace, Champagne on arrival, and fast-track access. The sunset from the summit with Guanabara Bay going gold below is something you carry with you.",
            "Dinner after Sugarloaf in the Urca neighbourhood (one of Rio's safest, most charming residential areas): Bar Urca (Rua Cândido Gaffrée) — a seafood bar on the water literally at the foot of Sugarloaf Mountain, tables on the sea wall. Fried fish, shrimp pastéis, ice-cold beer, sunset aftermath. R$80–120/person.",
          ],
          cost: "R$600–900 ($109–164) total",
        },
        {
          day: "Day 4",
          title: "Ilha Grande Full Day",
          items: [
            "Private chartered boat from Marina da Glória to Ilha Grande ($300–400 for a private speedboat, 1.5h each way vs. the 3h public route). Depart 7am.",
            "Ilha Grande with a guide: snorkelling at Lagoa Azul (crystal blue water over white sand, tropical fish), hiking the trail to Lopes Mendes beach (regularly ranked one of Brazil's 5 best beaches, 2.5km of powdery sand, no development, no vehicles), and a swimming stop at Caxadaço beach on the return.",
            "Picnic lunch on the boat: your operator provides a cold seafood spread (camarão, lagosta, salada de polvo) with cold beer and caipirinha.",
            "Return to Rio in the late afternoon. Evening in Ipanema: Devassa Ipanema craft beer bar for a cerveja artesanal and snacks, followed by dinner at Zuka or Oro (Chef Felipe Bronze, Leblon, R$120–180/person tasting menu).",
          ],
          cost: "R$700–1,000 ($127–182) total",
        },
        {
          day: "Day 5",
          title: "Favela Tour, Selarón & Belmond Farewell",
          items: [
            "Santa Marta favela community tour with Be a Local (R$80, morning departure). The local guide's narrative about the pacification process, community arts projects, and daily life is far more nuanced than standard tourism allows. The mirador view from the top of Santa Marta is arguably better than any paid viewpoint in the city.",
            "Selarón Steps at 8am (pre-favela tour) for unobstructed photographs. Walk up the full 215 steps — the detail of the tiles increases as you climb. Look for tiles representing every country on earth.",
            "Late morning: Confeitaria Colombo in Centro for a late breakfast of pão na chapa (buttered toast) and a proper cafezinho (R$30–45 including pastries).",
            "Farewell lunch: Roberta Sudbrack restaurant or CT Boucherie (Leblon, Thomas Troisgros' butcher-steakhouse, R$120–180/person) for the finest picanha you will ever eat.",
            "Beach afternoon: final Ipanema session, then a caipirinha at the beach as the sun drops. Transfer to GIG airport (private car, R$120–160) for your departure flight.",
          ],
          cost: "R$600–850 ($109–155) total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$500–2,000+/day",
      days: [
        {
          day: "Day 1",
          title: "Belmond Arrival & Copacabana Palace",
          items: [
            "Private meet-and-greet at GIG airport. Luxury transfer (Mercedes V-Class, R$350–500) to the Belmond Copacabana Palace ($600–1,500/night) — the most legendary hotel in South America. Open since 1923, the white colonnaded facade on Copacabana Avenue has hosted every head of state, rock star, and royalty who has passed through Rio in a century. The pool is the finest hotel pool in Rio.",
            "Settle in with a poolside caipirinha crafted by the palace bartender — the Copacabana Palace's caipirinha recipe is famously superior (the key is the right cachaça and hand-squeezed lime).",
            "Afternoon: private cultural concierge takes you through the Copacabana and Ipanema neighbourhoods, the history of bossa nova (the neighbourhood is the literal birthplace of the genre), and arranges a private acoustic performance by a local bossa nova guitarist in a penthouse suite.",
            "Dinner at Cipriani at the Copacabana Palace — the hotel's Italian restaurant, one of Rio's finest. The risotto and pasta are made fresh daily. Tasting menu R$350–500/person, wine pairing R$200–300 extra.",
          ],
          cost: "R$2,000–3,500 ($364–636) total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Helicopter & Christ Redeemer at Dawn",
          items: [
            "Pre-dawn private helicopter from Helipad Lagoa or Helisight in Barra da Tijuca: R$1,200–2,000 for a 30-minute flight over Rio at sunrise (Helisight, helisight.com.br). The aerial view of Christ the Redeemer, Sugarloaf, and Guanabara Bay from a helicopter at dawn is one of the great travel experiences in the Americas. Book 1 week ahead.",
            "Post-helicopter: private guide and vehicle to Corcovado for the Trem do Corcovado first departure (9am, R$111 + guide fee R$300). The context provided by a specialist guide at the summit — the art deco sculptor Paul Landowski, the construction funded by Brazilian Catholics through a national campaign, the engineering of placing 635 tonnes on a 700m granite peak — transforms the visit.",
            "Tijuca Forest private hike: your guide leads a 2-hour hike through Atlantic Forest to the Cascatinha Taunay waterfall and the Bom Retiro lookout. Packed gourmet picnic lunch prepared by the Copacabana Palace kitchen.",
            "Afternoon: Santa Teresa neighbourhood private art tour. The neighbourhood houses some of Brazil's most significant contemporary artists — your cultural concierge arranges private studio visits with two or three of them.",
            "Evening: private samba performance arranged at the rooftop of a Santa Teresa colonial mansion. A 4-piece samba group, caipirinhas, and the lights of Rio below.",
          ],
          cost: "R$3,500–5,500 ($636–1,000) total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Sugarloaf VIP & Waterfront Dining",
          items: [
            "Private Sugarloaf sunrise: Helisight or Bondinho VIP (first gondola at 8am, private group, fast-track access, private terrace, fresh fruit and caipirinha welcome). The sunrise view from Sugarloaf over Guanabara Bay and the sleeping city is among Rio's most cinematic moments.",
            "Morning swim at Praia Vermelha beach — tucked directly below Sugarloaf, one of Rio's quietest and most beautiful urban beaches, almost never crowded. The Copacabana Palace butler packs a beach kit (monogrammed towels, Havaianas, sunscreen, cold water).",
            "Museu do Amanhã VIP access and private curator tour (R$300, arranged through concierge).",
            "Lunch at Roberta Sudbrack (Lagoa neighbourhood): one of Brazil's most celebrated chefs, R$200–280 tasting menu, the finest contemporary Brazilian cuisine in the city. Reserve 2–3 weeks ahead.",
            "Afternoon: private yacht charter in Guanabara Bay (R$2,500–4,000 for 4 hours, luxury catamaran or motor yacht) — sail past Sugarloaf, the Niterói bridge, and Ilha Fiscal, ending with a sunset caipirinha as the city lights come on.",
            "Dinner: Olympe restaurant (Lagoa, Claude Troisgros, French-Brazilian cuisine, one of Rio's three best restaurants) — R$300–450/person tasting menu.",
          ],
          cost: "R$5,000–8,000 ($909–1,455) total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Ilha Grande Private Charter",
          items: [
            "Private speedboat charter (R$2,000–3,500) departing Marina da Glória at 6:30am. A dedicated captain and crew of two for the day. Illa Grande waters.",
            "Private snorkelling with guides at Lagoa Azul, followed by a deserted beach stop at Feiticeira or Sítio Forte — white sand beaches accessible only by boat. The boat has paddleboards, snorkel gear, and a stocked cooler of ice-cold local beer and fresh coconut.",
            "Gourmet lunch on board: the Copacabana Palace kitchen prepares a cold seafood feast for your boat — lobster, grilled shrimp, octopus salad, mango salsa, and a bottle of white Burgundy chilled overnight.",
            "Afternoon hiking trail to Lopes Mendes (2.5km jungle trail, your guide carries all equipment). The beach at the end — powder white sand, Atlantic Forest meeting the ocean, no development whatsoever — is one of South America's five most beautiful beaches.",
            "Return to Rio by 6pm. Evening: Lapa neighbourhood private nightlife guide — the historical context of Lapa as Rio's bohemian quarter from the 1920s to today, VIP entry to Circo Voador (Rio's most celebrated music venue), and a private samba lesson with one of the musicians from the evening's headline act.",
          ],
          cost: "R$4,500–7,000 ($818–1,273) total (excl. hotel)",
        },
        {
          day: "Day 5",
          title: "Favela Art Tour & Grand Farewell",
          items: [
            "Private Santa Marta favela art tour with Rio On Watch — a community journalism organisation that offers tours led by journalists who grew up in Santa Marta ($150–200/person for a private group). The journalism angle provides remarkable depth: the story of pacification told by someone who experienced it, the community arts projects funded by tourism income, the current social policy debates.",
            "Selarón Steps before the private tour — the guide explains the artist's biography and the meaning of the specific tile sequences Selarón designed. Jorge Selarón was found dead on these steps in 2013 — the tile work he considered his life's offering to Brazil.",
            "Farewell lunch: Lasai restaurant (Botafogo, Chef Rafa Costa e Silva, Rio's most progressive tasting menu kitchen, R$350–480/person) — Brazilian ingredients interpreted through a European fine-dining lens. One of South America's most exciting restaurants.",
            "Final Ipanema beach afternoon with the Copacabana Palace's mobile beach butler service — staff from the hotel attend your beach umbrella, bringing cold drinks, towels, and light snacks.",
            "Farewell dinner at the hotel: Cipriani or an in-suite dinner prepared by a private chef arranged through the concierge. Table set on your balcony overlooking the Copacabana arc. The city lights below, the warm night, the sound of the ocean.",
            "Late-night private transfer to GIG. The Copacabana Palace concierge handles luggage collection and check-in formalities. Rio sends you home full of cachaça, sunshine, and a city that is simultaneously the most beautiful and most complicated place you have ever been.",
          ],
          cost: "R$3,500–5,500 ($636–1,000) total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$15–30",
      food: "$10–20",
      transport: "$8–15",
      activities: "$15–25",
      total: "$50–85/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$80–160",
      food: "$35–70",
      transport: "$20–35",
      activities: "$25–50",
      total: "$150–280/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$300–1,000",
      food: "$100–300",
      transport: "$50–150",
      activities: "$100–400",
      total: "$500–2,000+/day",
    },
  ],
  mistakes: [
    {
      icon: "📱",
      title: "Flashing Phones and Jewellery on the Street",
      desc: "Rio's petty theft problem is real and almost entirely preventable. The pattern is always the same: tourist walks along Ipanema beach road, phone in hand filming, and a motorbike passes and takes it. The rule is simple: use your phone inside cafés, restaurants, and your hotel. In transit on the street, keep it in a front pocket. Remove watches before arriving. Leave valuable jewellery at home. The beach itself (with your bag watched by a friend or left at the quiosque attendant) is generally safe during daylight hours. This is standard advice for Mumbai, Mexico City, and Barcelona too — Rio is not uniquely dangerous, just honest about the risk.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏘️",
      title: "Skipping the Favela Tour",
      desc: "Visitors who skip the favela tour because it sounds uncomfortable miss the most intellectually interesting experience in Rio. Santa Marta's guided tour (always with a community resident as your guide) gives you direct access to the story of pacification, community-led economic development through tourism, the extraordinary public art installations (including the Michael Jackson mural), and the mirador with one of Rio's best free views. The income goes directly to the community. You leave with a far more complex and accurate understanding of the city than 5 days on the beach alone can provide. Book through Be a Local or Rio On Watch — community-certified, ethical operators.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🎭",
      title: "Visiting Carnival Without Booking 1 Year Ahead",
      desc: "Carnival (February/March, dates shift annually with the Catholic calendar) is the world's largest party and it absolutely overwhelms Rio's accommodation system. During Carnival week, hotel prices are 5–10x normal rates, and the cheapest options sell out by March of the previous year. If Carnival is your reason for visiting (the Sambódromo parades, the blocos street parties, the sheer scale of it), you must book accommodation in February–March 2026 for Carnival 2027. If you arrive without accommodation during Carnival, you are sleeping in a hostel 45 minutes from the action at prices that would normally get you a 5-star hotel.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "⛪",
      title: "Going to Christ the Redeemer Without Booking",
      desc: "The Trem do Corcovado (cogwheel train to Christ the Redeemer) sells out, especially on clear days in peak season. The walk-up queue can be 2–3 hours. Book online at trem do corcovado.com.br with your preferred morning time slot. The booking system also lets you re-schedule once if you need to change for weather — Rio's weather changes fast, and cloud cover over Corcovado can close visibility entirely on a given morning. Check the weather forecast the night before and aim for the clearest morning of your trip.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "Sugarloaf at Sunset — Golden Light on Guanabara Bay",
      desc: "The optimum time for Sugarloaf Mountain is the hour before sunset (roughly 5–6pm depending on season). Guanabara Bay goes gold, the Niterói bridge turns orange, and the city silhouette sharpens against the fading sky. Take the 4pm gondola (book online to skip the queue) and position yourself on the summit terrace facing the bay before 5pm. This is objectively one of the great sunset views in the world. The caipirinha from the summit bar at this moment costs R$25 and is worth every centavo.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "⛅",
      title: "Christ the Redeemer — Early Morning for Clear Sky",
      desc: "Rio's weather follows a reliable pattern: mornings are typically clear until 10–11am, then cloud builds through the afternoon (especially in the rainy season November–March). Christ the Redeemer at 700m is frequently in cloud by 2pm. Book the earliest available slot (8am or 9am) and check the weather app the evening before — if Corcovado has clear skies forecast for the morning, your slot is perfectly timed. A cloud-shrouded Christ Redeemer is disappointingly invisible. A clear-sky Christ Redeemer is one of the great spectacles on earth.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🪜",
      title: "Selarón Steps at 8am Before the Crowds Arrive",
      desc: "The Selarón Steps (Escadaria Selarón in Lapa) are one of Rio's most photographed spots and by 10am they are packed with tour groups. Arrive at 8am and you have the 215 tiled steps essentially to yourself. The morning light from the east hits the tiles at exactly the right angle for the best photography. Walk the full length, read the tile inscriptions (many have dedications from the countries they came from), and take your time with a camera that doesn't have a stranger's elbow in every frame.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🎵",
      title: "Garota de Ipanema Bar — The Original Bossa Nova",
      desc: "The bar where Tom Jobim and Vinicius de Moraes watched Helô Pinheiro walk past in 1962 and wrote The Girl from Ipanema is still open, still serving caipirinhas, and still playing bossa nova. The street outside is now Rua Vinicius de Moraes. It is not the best restaurant in Ipanema and the food is straightforwardly average — but there is only one place on earth where this particular song was written about a particular girl walking past a particular window, and you are sitting in it. Go for a late lunch, order the caipirinha, and sit by the window.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "Is Rio de Janeiro safe for tourists?",
      a: "Rio has a complicated reputation and a complicated reality. The answer is: yes, Rio is relatively safe for tourists who stay in the tourist corridors (Ipanema, Copacabana, Leblon, Santa Teresa, Urca, Barra da Tijuca) and exercise basic precautions. The specific risks are: petty theft on the street (keep phones pocketed), mugging in poorly lit areas at night (take Ubers after 10pm rather than walking), and avoiding the Cidade de Deus, Maré, and other high-conflict favela areas without guides. Tourist police (Policía de Turismo) are present in the main beach areas and respond quickly. Millions of tourists visit Rio annually without incident. The key is predictable, sensible behaviour: no obvious wealth displayed, Uber at night, hostel/hotel in Ipanema or Copacabana.",
    },
    {
      q: "When is Carnival in Rio and how do I book for it?",
      a: "Carnival dates change annually — it is always in February or March, ending on Ash Wednesday. For 2027: February 27–March 4. For 2026: it ended in March 2026. The main Sambódromo parades (the Grupo Especial, the top 12 samba schools competing) run over 2 nights and tickets ($50–500 per person per night depending on sector) go on sale approximately 6 months in advance at liesa.com.br. The blocos (outdoor street parties) are free, spontaneous, and happen all over the city during the week. Accommodation: book 10–12 months ahead for peak Carnival week. Budget accommodation books first. The Copacabana Palace and Belmond book by February for the following year's Carnival.",
    },
    {
      q: "Ipanema vs. Copacabana — which beach is better?",
      a: "Ipanema: smaller (2.5km), calmer, widely considered more beautiful, the preferred beach of locals and upscale tourists, stronger surf, the iconic Two Brothers mountains (Dois Irmãos) as a backdrop. The vibe is stylish and local. Copacabana: longer (4km), more vibrant, more accessible, more tourist-facing, more street food and activity, the famous wave-pattern boardwalk, always busy. Both are magnificent. If forced to choose: stay near Ipanema for the better restaurant scene and neighbourhood, and walk to Copacabana for the boardwalk and the more electric atmosphere. The two beaches connect at the Arpoador point.",
    },
    {
      q: "Are favela tours ethical and safe?",
      a: "Yes to both, with the important condition: only book with community-certified operators where the tour is led by a resident of the favela, and a significant percentage of the tour fee goes directly to the community. Recommended: Be a Local (Santa Marta, community-run), Rio On Watch (community journalism-based), and Favela Tour (the original, since 1992, certified by the Brazilian tourism authority ABAV). Avoid large bus tour operations that treat the favela as a poverty zoo. Santa Marta is the safest and best-infrastructure favela for tourism — pacified by the state in 2008, with a community-built funicular, arts installations, and established tourism infrastructure. The safety record of these certified tours is excellent.",
    },
    {
      q: "Do Indian passport holders need a visa for Brazil?",
      a: "Yes. Indian nationals require a Brazilian e-Visa. Apply online at the Brazilian government portal (gov.br). Cost: approximately $40 USD. Required documents: digital passport photo, return flight confirmation, first hotel booking, recent bank statements. Processing typically takes 3–10 business days — apply at least 10 working days before departure. The e-Visa approval is electronic, linked to your passport — print the approval confirmation to show at the immigration counter. Visa is typically valid for 90 days from issuance for a single or multiple-entry stay of up to 90 days.",
    },
    {
      q: "What is the best time to visit Rio de Janeiro?",
      a: "April–June and August–October are the optimal windows. Weather: 25–30°C, low humidity, low rainfall, excellent visibility for viewpoints. These shoulder-season months also mean lower accommodation prices (20–40% below peak), smaller crowds at Christ Redeemer and Sugarloaf, and the beach culture still fully operational. Avoid November–March (rainy season: heavy afternoon downpours, 35–40°C heat, extreme humidity, and the chaos of Carnival if you haven't booked). July is dry but slightly cooler (20–24°C) — fine for sightseeing, less ideal for beach swimming. The beach culture is year-round, but the best combination of weather, value, and access is September.",
    },
  ],
  combineWith: ["buenos-aires-5-days", "peru-machu-picchu-7-days", "bali-5-days"],
  relatedSlugs: ["kenya-safari-7-days", "peru-machu-picchu-7-days", "morocco-7-days", "bali-5-days"],
  galleryQuery: "rio de janeiro brazil christ redeemer sugarloaf copacabana ipanema",
};

export const metadata: Metadata = {
  title: "Rio de Janeiro in 5 Days: Christ Redeemer, Sugarloaf, Carnival & Beaches (2026)",
  description:
    "Complete 5-day Rio de Janeiro itinerary — Christ the Redeemer booking tips, Sugarloaf sunset secrets, favela tour guide, Carnival booking, safety advice, and Ipanema vs Copacabana. Every budget covered from $50 to $2,000/day.",
  keywords: [
    "rio de janeiro itinerary 5 days",
    "rio de janeiro travel guide 2026",
    "christ redeemer booking",
    "sugarloaf mountain rio",
    "rio de janeiro safety tips",
    "carnival rio booking",
    "ipanema copacabana beach guide",
  ],
  openGraph: {
    title: "Rio de Janeiro in 5 Days: Christ Redeemer, Beaches & Carnival (2026)",
    description:
      "Christ Redeemer booking secrets, Sugarloaf sunset guide, favela tour ethics, Carnival booking timeline, and real dollar costs for every budget.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Christ the Redeemer statue overlooking Rio de Janeiro Brazil with Sugarloaf Mountain",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rio de Janeiro in 5 Days (2026)",
    description: "Christ Redeemer tips, Sugarloaf sunset, favela tours, real costs.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/rio-de-janeiro-5-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Rio de Janeiro in 5 Days: Christ Redeemer, Sugarloaf, Carnival & Beaches (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1200&q=80",
      description:
        "5-day Rio de Janeiro itinerary: Christ Redeemer, Sugarloaf, favela tours, Carnival booking, and beach life — every budget from $50 to $2,000/day.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Rio de Janeiro 5 Days",
          item: "https://www.incredibleitinerary.com/blog/rio-de-janeiro-5-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Rio de Janeiro, Brazil",
      description:
        "Brazil's most iconic city — home to Christ the Redeemer, Sugarloaf Mountain, Copacabana and Ipanema beaches, the world's largest Carnival, and a samba culture that is one of humanity's great artistic creations.",
      touristType: ["Beach lovers", "Culture enthusiasts", "Adventure travellers", "Carnival visitors"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: -22.9068,
        longitude: -43.1729,
      },
    },
  ],
};

export default function RioDeJaneiroPage() {
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
