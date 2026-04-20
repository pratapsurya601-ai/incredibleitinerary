"use client";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RelatedGuides from "@/components/blog/RelatedGuides";

const ITINERARIES = [
  {
    id: 1,
    name: "The Classic: Italy + France",
    days: "12-14 days",
    route: "Rome → Florence → Venice → Paris → Loire Valley",
    highlights:
      "Colosseum, Uffizi, Cinque Terre day-trip, Venetian canals, the Louvre, Versailles, Chateaux of the Loire. This is the first-trip-to-Europe itinerary for a reason — iconic, varied, easy to plan.",
    budget: "₹1,80,000-₹2,60,000 per person (€2,000-€2,900)",
    season: "April-June, September-October",
    bestFor: "First-timers, couples, culture lovers",
    link: "/blog/europe-travel-guide",
  },
  {
    id: 2,
    name: "Greek Islands Hopper",
    days: "10 days",
    route: "Athens → Mykonos → Naxos → Santorini → Crete",
    highlights:
      "Acropolis sunrise, whitewashed Cycladic villages, caldera views from Oia, Paleokastritsa beaches, Knossos ruins, incredible seafood tavernas. Ferries connect everything (book through Ferryhopper).",
    budget: "₹1,40,000-₹2,00,000 per person (€1,550-€2,200)",
    season: "Late May-June, September (avoid August — too hot, too packed)",
    bestFor: "Honeymooners, beach lovers, photographers",
    link: "/blog/santorini-4-days",
  },
  {
    id: 3,
    name: "The Balkans Backroads",
    days: "14 days",
    route:
      "Ljubljana → Zagreb → Plitvice Lakes → Split → Dubrovnik → Kotor → Sarajevo → Mostar",
    highlights:
      "Europe's best-value route — dramatic coastlines, medieval old towns, waterfalls, and half the price of Italy. Plitvice Lakes alone is worth the trip.",
    budget: "₹95,000-₹1,40,000 per person (€1,050-€1,550)",
    season: "May-June, September-October",
    bestFor: "Budget travelers, road-trippers, off-the-beaten-track seekers",
    link: "/blog/dubrovnik-4-days",
  },
  {
    id: 4,
    name: "Nordic Fjords & Capitals",
    days: "12 days",
    route: "Copenhagen → Oslo → Bergen (Norway in a Nutshell) → Stockholm → Helsinki",
    highlights:
      "The Flam Railway, Nærøyfjord cruise, Copenhagen's Nyhavn, Stockholm's old town, Helsinki's design district. You'll pay — but you'll never forget it.",
    budget: "₹2,20,000-₹3,20,000 per person (€2,450-€3,550)",
    season: "Mid-June to mid-August (midnight sun in the north)",
    bestFor: "Nature lovers, photographers, summer travelers",
    link: "/blog/norway-fjords-6-days",
  },
  {
    id: 5,
    name: "Iberian Circuit: Spain + Portugal",
    days: "14 days",
    route:
      "Lisbon → Porto → Madrid → Toledo → Granada → Seville → Barcelona",
    highlights:
      "Alhambra, Alcazar of Seville, Gaudí's Barcelona, Douro Valley port, Lisbon's miradouros, Madrid tapas crawls. Excellent trains (Renfe AVE) and brilliant food everywhere.",
    budget: "₹1,30,000-₹1,90,000 per person (€1,450-€2,100)",
    season: "April-May, September-October",
    bestFor: "Foodies, art lovers, couples",
    link: "/blog/barcelona-4-days",
  },
  {
    id: 6,
    name: "Central Europe Heritage",
    days: "10 days",
    route: "Prague → Vienna → Budapest → Krakow",
    highlights:
      "Prague Castle, Schönbrunn, Buda Hill, Auschwitz-Birkenau memorial, thermal baths (Széchenyi), Mozart concerts in Vienna. Cheap, beautiful, deeply historic.",
    budget: "₹95,000-₹1,40,000 per person (€1,050-€1,550)",
    season: "April-May, September-October, or December for markets",
    bestFor: "History buffs, budget travelers, winter market lovers",
    link: "/blog/prague-4-days",
  },
  {
    id: 7,
    name: "Swiss Alps Rail Loop",
    days: "8 days",
    route:
      "Zurich → Lucerne → Interlaken → Jungfraujoch → Zermatt → Lugano → Zurich",
    highlights:
      "Glacier Express, Top of Europe (Jungfraujoch), the Matterhorn from Gornergrat, Lake Lucerne steamers. Swiss Travel Pass is non-negotiable.",
    budget: "₹1,80,000-₹2,80,000 per person (€2,000-€3,100)",
    season: "June-September for hiking, December-March for skiing",
    bestFor: "Honeymooners, families, nature photographers",
    link: "/blog/switzerland-5-days",
  },
  {
    id: 8,
    name: "UK + Ireland Isles Loop",
    days: "12 days",
    route:
      "London → Cotswolds → Edinburgh → Highlands → Belfast → Galway → Dublin",
    highlights:
      "Tower of London, Edinburgh Castle, Glencoe, Giant's Causeway, Cliffs of Moher, Guinness Storehouse. Driving on the left is part of the adventure.",
    budget: "₹1,70,000-₹2,50,000 per person (€1,900-€2,800)",
    season: "May-September (long daylight, manageable rain)",
    bestFor: "English-speakers, literature fans, family trips",
    link: "/blog/edinburgh-4-days",
  },
  {
    id: 9,
    name: "Mediterranean South: Sicily + Malta",
    days: "10 days",
    route:
      "Palermo → Agrigento → Syracuse → Taormina → Catania → Valletta (Malta)",
    highlights:
      "Valley of the Temples, Mount Etna, Baroque Noto, Mdina's silent city, cannoli and arancini everywhere. Sun, sea, Greek ruins, and the best ice cream of your life.",
    budget: "₹1,10,000-₹1,60,000 per person (€1,200-€1,780)",
    season: "May-June, September-October",
    bestFor: "Couples, food lovers, ruins fans",
    link: "/blog/sicily-7-days",
  },
  {
    id: 10,
    name: "Germany + Austria Road Trip",
    days: "10 days",
    route:
      "Munich → Neuschwanstein → Salzburg → Hallstatt → Vienna → Rothenburg → Frankfurt",
    highlights:
      "Neuschwanstein castle, Sound of Music locations, Hallstatt's fairytale lakeside, Vienna's coffee houses, Romantic Road. Rent a car — German Autobahn makes it easy.",
    budget: "₹1,40,000-₹2,00,000 per person (€1,550-€2,200)",
    season: "May-September, or late November-December for Christmas markets",
    bestFor: "Road-trippers, couples, families",
    link: "/blog/germany-7-days",
  },
  {
    id: 11,
    name: "Iceland Ring Road",
    days: "9 days",
    route: "Reykjavik → Golden Circle → South Coast → Eastfjords → Akureyri → Snæfellsnes",
    highlights:
      "Gullfoss, Geysir, Seljalandsfoss, Reynisfjara black sand, Vatnajökull glacier, Northern Lights (Sept-April), puffins (May-Aug). Drive yourself — public transport doesn't cover the Ring Road.",
    budget: "₹2,00,000-₹3,00,000 per person (€2,200-€3,350)",
    season: "June-August for midnight sun; Sept-March for auroras",
    bestFor: "Adventure travelers, photographers, self-drivers",
    link: "/blog/iceland-7-days",
  },
  {
    id: 12,
    name: "Eastern Mediterranean: Turkey + Greece",
    days: "14 days",
    route:
      "Istanbul → Cappadocia → Pamukkale → Ephesus → Bodrum → Ferry to Kos → Santorini → Athens",
    highlights:
      "Hot-air balloons over fairy chimneys, Hagia Sophia, Library of Celsus, Aegean island hopping, Acropolis sunset. Two civilizations in one trip.",
    budget: "₹1,30,000-₹1,90,000 per person (€1,450-€2,100)",
    season: "April-May, September-October",
    bestFor: "History lovers, couples, photographers",
    link: "/blog/turkey-7-days",
  },
];

export default function BestEuropeanItinerariesClient() {
  return (
    <div className="min-h-screen bg-parchment">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500039436846-25ae2f11882e?w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 pb-12 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-3">
            Europe Travel · April 2026
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-4">
            Best European Itineraries: 12 Perfect Europe Trips for Every Traveler
          </h1>
          <p className="text-lg md:text-xl font-light max-w-3xl">
            Twelve curated routes across Europe — classic, Nordic, Balkans,
            Iberian, Greek Islands and more. Pick one, steal it, go.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-ink leading-relaxed font-light">
            Europe isn't a single trip — it's dozens of them. The Italy-France
            classic is completely different from a Nordic summer, which is
            different again from island-hopping the Cyclades or road-tripping
            the Balkans. The challenge isn't finding things to do. It's
            choosing which Europe you want.
          </p>
          <p className="text-lg text-ink leading-relaxed font-light mt-5">
            After a decade of planning Europe trips for readers (and getting
            them wrong the first few times), I've distilled the continent into
            twelve itineraries that actually work. Each one has been built
            around a clear theme — the food, the history, the scenery, the
            pace — with honest durations, real budget ranges in both rupees
            and euros, and the season that actually makes sense (not the
            season travel agencies sell you).
          </p>
          <p className="text-lg text-ink leading-relaxed font-light mt-5">
            Budgets below are per person, sharing twin, including mid-range
            hotels, trains, entry fees, and daily food — but excluding
            long-haul flights from India. Add roughly ₹55,000-₹90,000 for
            economy airfare depending on season and booking window.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-600 p-5 my-8 rounded-r">
            <p className="text-sm text-ink font-medium mb-1">
              Schengen visa reminder
            </p>
            <p className="text-sm text-muted font-light">
              Apply 6-8 weeks ahead through VFS. Biometric appointments in
              peak season (April-June) fill up fast. Carry proof of
              accommodation, return tickets, and travel insurance covering
              €30,000 of medical cover.
            </p>
          </div>
        </div>
      </section>

      {/* Itineraries */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-ink mb-10 text-center">
          The 12 Itineraries
        </h2>
        <div className="space-y-8">
          {ITINERARIES.map((it) => (
            <article
              key={it.id}
              className="bg-white border border-parchment-2 rounded-xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="font-serif text-4xl text-amber-600 font-light leading-none">
                  {String(it.id).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl text-ink font-light mb-1">
                    {it.name}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-amber-700">
                    {it.days} · Best for: {it.bestFor}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted font-medium mb-2">
                <span className="text-ink">Route:</span> {it.route}
              </p>
              <p className="text-base text-ink font-light leading-relaxed mb-4">
                {it.highlights}
              </p>
              <div className="grid md:grid-cols-2 gap-3 pt-4 border-t border-parchment-2">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-wide text-muted mb-1">
                    Budget
                  </p>
                  <p className="text-sm text-ink font-medium">{it.budget}</p>
                </div>
                <div>
                  <p className="text-[0.65rem] uppercase tracking-wide text-muted mb-1">
                    Best season
                  </p>
                  <p className="text-sm text-ink font-medium">{it.season}</p>
                </div>
              </div>
              <Link
                href={it.link}
                className="inline-block mt-5 text-sm text-amber-700 hover:text-amber-900 font-medium"
              >
                Read the detailed guide →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* How to choose */}
      <section className="bg-white border-y border-parchment-2 py-14">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-light text-ink mb-6">
            How to pick the right itinerary
          </h2>
          <div className="space-y-4 text-ink font-light leading-relaxed">
            <p>
              <strong>First time in Europe?</strong> Go with the Italy-France
              classic or the Central Europe heritage loop. They're the
              easiest, the signage is most tourist-friendly, and the "big
              sights" really do deliver.
            </p>
            <p>
              <strong>Tight budget?</strong> The Balkans, Central Europe, and
              Iberian circuits will get you 14 days of Europe for what you'd
              spend in 8 days in Switzerland or Scandinavia.
            </p>
            <p>
              <strong>Honeymoon?</strong> Greek Islands, Swiss Alps, Amalfi
              (part of Italy-France), or Nordic fjords. Picture-perfect
              without question.
            </p>
            <p>
              <strong>Summer (July-August) trip?</strong> Go north. Nordic
              fjords, Iceland, UK-Ireland, or the Baltics. Southern Europe in
              August is hot, expensive, and overcrowded.
            </p>
            <p>
              <strong>December trip?</strong> Central Europe (Christmas
              markets in Vienna, Prague, Budapest, Krakow) or Iceland
              (northern lights + blue lagoon).
            </p>
          </div>
        </div>
      </section>

      {/* Budget Quick Reference */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <h2 className="font-serif text-3xl font-light text-ink mb-6 text-center">
          Quick Budget Reference (per person, 10-day trip)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm bg-white border border-parchment-2 rounded-xl">
            <thead className="bg-parchment border-b border-parchment-2">
              <tr>
                <th className="text-left p-4 font-medium text-ink">Region</th>
                <th className="text-left p-4 font-medium text-ink">
                  Backpacker
                </th>
                <th className="text-left p-4 font-medium text-ink">
                  Mid-range
                </th>
                <th className="text-left p-4 font-medium text-ink">Luxury</th>
              </tr>
            </thead>
            <tbody className="font-light text-ink">
              <tr className="border-t border-parchment-2">
                <td className="p-4">Balkans / Central Europe</td>
                <td className="p-4">₹55k / €610</td>
                <td className="p-4">₹1,00k / €1,110</td>
                <td className="p-4">₹2,00k+ / €2,220+</td>
              </tr>
              <tr className="border-t border-parchment-2 bg-parchment/40">
                <td className="p-4">Iberia / Italy-France</td>
                <td className="p-4">₹75k / €835</td>
                <td className="p-4">₹1,40k / €1,555</td>
                <td className="p-4">₹3,00k+ / €3,335+</td>
              </tr>
              <tr className="border-t border-parchment-2">
                <td className="p-4">Greek Islands / Turkey</td>
                <td className="p-4">₹70k / €780</td>
                <td className="p-4">₹1,30k / €1,445</td>
                <td className="p-4">₹2,80k+ / €3,110+</td>
              </tr>
              <tr className="border-t border-parchment-2 bg-parchment/40">
                <td className="p-4">Switzerland / Nordic / Iceland</td>
                <td className="p-4">₹1,20k / €1,335</td>
                <td className="p-4">₹2,20k / €2,445</td>
                <td className="p-4">₹4,50k+ / €5,000+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-parchment border-t border-parchment-2 py-14">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-light text-ink mb-6">
            Universal tips for every Europe trip
          </h2>
          <ul className="space-y-3 text-ink font-light leading-relaxed">
            <li>
              <strong>Book train tickets early.</strong> France (SNCF),
              Italy (Trenitalia), Germany (DB), and Spain (Renfe) sell
              advance tickets at 50-70% off face value, released 90 days
              ahead.
            </li>
            <li>
              <strong>Skip Eurail if you're doing under 8 journeys.</strong>
              Point-to-point bookings are almost always cheaper than a global
              pass unless you're zigzagging heavily.
            </li>
            <li>
              <strong>Carry a credit card with no forex markup.</strong> Niyo,
              Fi, or Scapia debit cards work well. Europe is now 90%+
              contactless.
            </li>
            <li>
              <strong>Use Omio and Trainline</strong> for comparison
              shopping across operators — they show you trains, buses, and
              flights side-by-side.
            </li>
            <li>
              <strong>Book Colosseum / Eiffel / Anne Frank / Sagrada
              Familia / Alhambra tickets weeks in advance.</strong> Walk-ups
              are essentially impossible in peak season.
            </li>
            <li>
              <strong>Download offline Google Maps</strong> for every city
              before landing — roaming can be patchy in old towns.
            </li>
            <li>
              <strong>Buy an eSIM</strong> (Airalo, Holafly, or Nomad) rather
              than roaming. €10-€20 gets you 10 GB across 30+ countries.
            </li>
            <li>
              <strong>Eat the set lunch menu (menu del dia / menu du jour /
              pranzo)</strong> — it's how Europeans eat cheaply. €12-€18 for
              three courses and a glass of wine in Spain, Italy, and France.
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <h2 className="font-serif text-3xl font-light text-ink mb-8">
          FAQ
        </h2>
        <div className="space-y-6">
          <div>
            <p className="font-medium text-ink mb-1">
              How many countries should I visit on my first Europe trip?
            </p>
            <p className="text-ink font-light">
              Two to three. Any more and you'll spend your vacation in
              transit. A 10-day trip is perfect across two countries; 14 days
              works for three.
            </p>
          </div>
          <div>
            <p className="font-medium text-ink mb-1">
              What's the cheapest way to fly between European cities?
            </p>
            <p className="text-ink font-light">
              Ryanair, EasyJet, Wizz Air, and Vueling offer €20-€60 flights
              if booked 3+ weeks ahead. Carry-on only — checked bags cost
              more than the ticket.
            </p>
          </div>
          <div>
            <p className="font-medium text-ink mb-1">
              Is a Schengen visa one visa for all of Europe?
            </p>
            <p className="text-ink font-light">
              It covers 29 Schengen countries including France, Germany,
              Italy, Spain, Greece, the Nordics, and most of Central Europe.
              The UK, Ireland, Turkey, and the non-EU Balkans (Serbia,
              Bosnia, Montenegro, Albania) need separate visas — check each.
            </p>
          </div>
          <div>
            <p className="font-medium text-ink mb-1">
              Which Europe itinerary is best for a honeymoon?
            </p>
            <p className="text-ink font-light">
              Greek Islands (Santorini + Mykonos), Swiss Alps, Amalfi Coast,
              or Norwegian fjords. All photogenic, romantic, and easy to
              lounge into.
            </p>
          </div>
          <div>
            <p className="font-medium text-ink mb-1">
              Is Europe safe for solo female travelers?
            </p>
            <p className="text-ink font-light">
              Yes — especially the Nordics, Switzerland, Netherlands,
              Austria, and Ireland. Pickpocketing is the main concern in
              Rome, Paris, Barcelona, and Prague; violent crime against
              tourists is rare anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-white py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-light mb-4">
            Ready to plan your Europe trip?
          </h2>
          <p className="text-lg font-light text-amber-100 mb-6">
            Browse our detailed city guides for route-by-route planning,
            real-world budgets, and the mistakes to skip.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-amber-500 text-ink px-8 py-3 rounded-full font-medium hover:bg-amber-400 transition-colors"
          >
            Explore all guides
          </Link>
        </div>
      </section>

      <RelatedGuides currentSlug="best-european-itineraries" />
      <Footer />
    </div>
  );
}
