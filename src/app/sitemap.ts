import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.incredibleitinerary.com";
  const now = new Date();

  return [
    { url: base,                                      lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/blog`,                            lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/quiz`,                            lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/shop`,                            lastModified: now, changeFrequency: "weekly",  priority: 0.85 },
    { url: `${base}/about`,                           lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`,                         lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy`,                         lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/terms`,                           lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/cookies`,                         lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/blog/kashmir-6-days`,             lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/leh-ladakh-7-days`,          lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/manali-5-days`,              lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/golden-triangle-7-days`,     lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/rajasthan-7-days`,           lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/andaman-5-days`,             lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/kerala-5-days`,              lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/goa-3-days`,                 lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/varanasi-3-days`,            lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/coorg-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/rishikesh-haridwar-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/jibhi-tirthan-valley-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/hampi-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/spiti-valley-7-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/meghalaya-5-days`, lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/blog/sikkim-6-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/pondicherry-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/gujarat-7-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/amritsar-2-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/dharamshala-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/udaipur-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/jaipur-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/ooty-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.86 },
    { url: `${base}/blog/darjeeling-4-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/mysore-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.86 },
    { url: `${base}/blog/gokarna-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/shimla-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/kasol-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.86 },
    { url: `${base}/blog/nainital-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.86 },
    { url: `${base}/blog/agra-2-days`, lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/blog/jodhpur-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/jaisalmer-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/khajuraho-2-days`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/orchha-2-days`, lastModified: now, changeFrequency: "monthly", priority: 0.84 },
    { url: `${base}/blog/mussoorie-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.86 },
    { url: `${base}/blog/auli-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/kodaikanal-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.86 },
    { url: `${base}/blog/jim-corbett-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/ranthambore-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/alleppey-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/munnar-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.86 },
    { url: `${base}/blog/wayanad-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/pushkar-2-days`, lastModified: now, changeFrequency: "monthly", priority: 0.84 },
    { url: `${base}/blog/madurai-2-days`, lastModified: now, changeFrequency: "monthly", priority: 0.86 },
    { url: `${base}/blog/hyderabad-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/vizag-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.84 },
    { url: `${base}/blog/kanyakumari-2-days`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/rameswaram-2-days`, lastModified: now, changeFrequency: "monthly", priority: 0.84 },
    { url: `${base}/blog/mount-abu-2-days`, lastModified: now, changeFrequency: "monthly", priority: 0.84 },
    { url: `${base}/blog/diu-2-days`, lastModified: now, changeFrequency: "monthly", priority: 0.83 },
    { url: `${base}/blog/dwarka-2-days`, lastModified: now, changeFrequency: "monthly", priority: 0.83 },
    { url: `${base}/blog/lonavala-2-days`, lastModified: now, changeFrequency: "monthly", priority: 0.84 },
    { url: `${base}/blog/kaziranga-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/shillong-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/mahabaleshwar-2-days`, lastModified: now, changeFrequency: "monthly", priority: 0.83 },
    { url: `${base}/blog/tawang-4-days`, lastModified: now, changeFrequency: "monthly", priority: 0.86 },
    { url: `${base}/blog/sundarbans-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/valley-of-flowers-4-days`, lastModified: now, changeFrequency: "monthly", priority: 0.86 },
    { url: `${base}/blog/majuli-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.84 },
    { url: `${base}/compare/goa-vs-pondicherry`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/compare/shimla-vs-manali`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/compare/kashmir-vs-ladakh`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/compare/jaipur-vs-udaipur`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/compare/ooty-vs-kodaikanal`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/compare/thailand-vs-bali`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/compare/goa-vs-phuket`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/compare/tokyo-vs-kyoto`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/compare/dubai-vs-singapore`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/compare/barcelona-vs-rome`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    // International
    { url: `${base}/blog/bangkok-4-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/phuket-5-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/chiang-mai-4-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/tokyo-5-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/kyoto-4-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/osaka-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/rome-4-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/florence-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/amalfi-coast-4-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    // Tools
    { url: `${base}/tools/trip-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/tools/visa-checker`, lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    // Indonesia
    { url: `${base}/blog/bali-5-days`, lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/blog/ubud-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/lombok-4-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    // UAE & Oman
    { url: `${base}/blog/dubai-4-days`, lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/blog/abu-dhabi-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/muscat-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.86 },
    // Spain
    { url: `${base}/blog/barcelona-4-days`, lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/blog/madrid-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/seville-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    // Vietnam
    { url: `${base}/blog/hanoi-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/ho-chi-minh-city-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/ha-long-bay-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    // Greece
    { url: `${base}/blog/athens-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/blog/santorini-4-days`, lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    { url: `${base}/blog/crete-5-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    // Turkey
    { url: `${base}/blog/istanbul-5-days`, lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    { url: `${base}/blog/cappadocia-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/blog/antalya-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    // Maldives
    { url: `${base}/blog/maldives-5-days`, lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    // Singapore
    { url: `${base}/blog/singapore-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    // Portugal
    { url: `${base}/blog/lisbon-4-days`, lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/blog/porto-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/algarve-4-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    // Malaysia
    { url: `${base}/blog/kuala-lumpur-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/blog/langkawi-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/penang-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    // France
    { url: `${base}/blog/paris-5-days`,             lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    { url: `${base}/blog/nice-3-days`,              lastModified: now, changeFrequency: "monthly", priority: 0.89 },
    { url: `${base}/blog/lyon-3-days`,              lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/bordeaux-3-days`,          lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/provence-4-days`,          lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/mont-saint-michel-2-days`, lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/strasbourg-3-days`,        lastModified: now, changeFrequency: "monthly", priority: 0.87 },
    { url: `${base}/blog/marseille-3-days`,         lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    // USA
    { url: `${base}/blog/new-york-5-days`,     lastModified: now, changeFrequency: "monthly", priority: 0.93 },
    { url: `${base}/blog/los-angeles-5-days`,  lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    { url: `${base}/blog/hawaii-7-days`,       lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    { url: `${base}/blog/las-vegas-4-days`,    lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    { url: `${base}/blog/miami-4-days`,        lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/blog/grand-canyon-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    // UK
    { url: `${base}/blog/london-5-days`,    lastModified: now, changeFrequency: "monthly", priority: 0.93 },
    { url: `${base}/blog/edinburgh-4-days`, lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    { url: `${base}/blog/bath-2-days`,      lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/blog/cotswolds-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.89 },
    // Australia
    { url: `${base}/blog/sydney-5-days`,           lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    { url: `${base}/blog/melbourne-4-days`,        lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    { url: `${base}/blog/great-barrier-reef-4-days`, lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    { url: `${base}/blog/uluru-3-days`,            lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    // Japan (more)
    { url: `${base}/blog/hiroshima-2-days`, lastModified: now, changeFrequency: "monthly", priority: 0.89 },
    { url: `${base}/blog/hokkaido-5-days`,  lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    // Africa
    { url: `${base}/blog/morocco-7-days`,        lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    { url: `${base}/blog/kenya-safari-7-days`,   lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    // More Africa
    { url: `${base}/blog/tanzania-zanzibar-7-days`, lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    { url: `${base}/blog/cape-town-5-days`,         lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    // South America
    { url: `${base}/blog/peru-machu-picchu-7-days`,  lastModified: now, changeFrequency: "monthly", priority: 0.93 },
    { url: `${base}/blog/rio-de-janeiro-5-days`,     lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    // More Europe
    { url: `${base}/blog/amsterdam-4-days`, lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    { url: `${base}/blog/germany-7-days`,   lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    // Central Europe
    { url: `${base}/blog/prague-4-days`,       lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    { url: `${base}/blog/budapest-4-days`,     lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    { url: `${base}/blog/vienna-4-days`,       lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    // East Asia (more)
    { url: `${base}/blog/seoul-5-days`,        lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    { url: `${base}/blog/taipei-4-days`,       lastModified: now, changeFrequency: "monthly", priority: 0.89 },
    { url: `${base}/blog/nusa-penida-3-days`,  lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    // Scandinavia
    { url: `${base}/blog/iceland-7-days`,      lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    { url: `${base}/blog/norway-fjords-6-days`, lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/blog/copenhagen-3-days`,   lastModified: now, changeFrequency: "monthly", priority: 0.89 },
    // MENA + More
    { url: `${base}/blog/egypt-7-days`,        lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    { url: `${base}/blog/buenos-aires-5-days`, lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    { url: `${base}/blog/colombia-7-days`,     lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    // Croatia + More Europe
    { url: `${base}/blog/dubrovnik-4-days`,    lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    { url: `${base}/blog/switzerland-5-days`,  lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    // Middle East
    { url: `${base}/blog/jordan-5-days`,       lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    // South Asia
    { url: `${base}/blog/nepal-7-days`,        lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    { url: `${base}/blog/sri-lanka-7-days`,    lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    // SE Asia (more)
    { url: `${base}/blog/palawan-4-days`,      lastModified: now, changeFrequency: "monthly", priority: 0.89 },
    { url: `${base}/blog/hoi-an-3-days`,       lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    // China
    { url: `${base}/blog/beijing-5-days`,      lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    // Canada
    { url: `${base}/blog/banff-5-days`,        lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    // Ireland
    { url: `${base}/blog/dublin-4-days`,       lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    // Belgium
    { url: `${base}/blog/bruges-3-days`,       lastModified: now, changeFrequency: "monthly", priority: 0.89 },
    // Poland
    { url: `${base}/blog/krakow-4-days`,       lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    // Sweden
    { url: `${base}/blog/stockholm-4-days`,    lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    // Vietnam (more)
    { url: `${base}/blog/mekong-delta-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.89 },
    // Cambodia
    { url: `${base}/blog/angkor-wat-4-days`,   lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    // Myanmar
    { url: `${base}/blog/bagan-4-days`,        lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    // Bhutan
    { url: `${base}/blog/bhutan-5-days`,       lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    // Chile
    { url: `${base}/blog/chile-patagonia-7-days`, lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    // Cuba
    { url: `${base}/blog/havana-4-days`,       lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    // USA (more)
    { url: `${base}/blog/austin-3-days`,        lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/blog/washington-dc-4-days`, lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    { url: `${base}/blog/boston-3-days`,        lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/blog/nashville-3-days`,     lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/blog/san-francisco-4-days`, lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    { url: `${base}/blog/chicago-3-days`,       lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/blog/new-orleans-4-days`,   lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    { url: `${base}/blog/seattle-3-days`,       lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    // Italy (more)
    { url: `${base}/blog/milan-3-days`,         lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    { url: `${base}/blog/naples-pompeii-4-days`, lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    { url: `${base}/blog/venice-4-days`,        lastModified: now, changeFrequency: "monthly", priority: 0.93 },
    { url: `${base}/blog/sicily-7-days`,        lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    { url: `${base}/blog/cinque-terre-3-days`,  lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    // Spain (more)
    { url: `${base}/blog/mallorca-4-days`,      lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    { url: `${base}/blog/san-sebastian-3-days`, lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/blog/granada-4-days`,       lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    // Mexico
    { url: `${base}/blog/mexico-city-4-days`,   lastModified: now, changeFrequency: "monthly", priority: 0.93 },
    { url: `${base}/blog/oaxaca-4-days`,        lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    { url: `${base}/blog/tulum-4-days`,         lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    // Central America
    { url: `${base}/blog/costa-rica-7-days`,    lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    { url: `${base}/blog/antigua-guatemala-4-days`, lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    // South America (more)
    { url: `${base}/blog/cartagena-4-days`,     lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    // Baltic States
    { url: `${base}/blog/tallinn-3-days`,       lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/blog/riga-3-days`,          lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/blog/vilnius-3-days`,       lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    // Indian Ocean
    { url: `${base}/blog/seychelles-5-days`,    lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    { url: `${base}/blog/mauritius-5-days`,     lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    // Africa (more)
    { url: `${base}/blog/victoria-falls-4-days`, lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    // Middle East (more)
    { url: `${base}/blog/alula-3-days`,         lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    { url: `${base}/blog/doha-3-days`,          lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/blog/jerusalem-4-days`,     lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    // Slovenia
    { url: `${base}/blog/ljubljana-3-days`,     lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    // Finland
    { url: `${base}/blog/helsinki-3-days`,      lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    // Balkans
    { url: `${base}/blog/sarajevo-3-days`,      lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/blog/belgrade-3-days`,      lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    // Europe (more)
    { url: `${base}/blog/kotor-3-days`,         lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/blog/mykonos-4-days`,       lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    { url: `${base}/blog/munich-3-days`,        lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    { url: `${base}/blog/berlin-4-days`,        lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    { url: `${base}/blog/tbilisi-4-days`,       lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    // South America (more)
    { url: `${base}/blog/medellin-4-days`,      lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    // Central America (more)
    { url: `${base}/blog/panama-city-3-days`,   lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    // Africa (more)
    { url: `${base}/blog/botswana-okavango-6-days`, lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    { url: `${base}/blog/uruguay-4-days`,       lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/blog/bolivia-salar-5-days`, lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    { url: `${base}/blog/galapagos-7-days`,     lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    // Africa (more)
    { url: `${base}/blog/rwanda-gorillas-5-days`, lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    { url: `${base}/blog/namibia-7-days`,       lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    { url: `${base}/blog/ethiopia-lalibela-5-days`, lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    // Pacific
    { url: `${base}/blog/fiji-5-days`,          lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    { url: `${base}/blog/queenstown-4-days`,    lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    // Caribbean (more)
    { url: `${base}/blog/barbados-5-days`,      lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/blog/jamaica-5-days`,       lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    // South Korea
    { url: `${base}/blog/busan-4-days`,         lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    // China (more)
    { url: `${base}/blog/xian-4-days`,          lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    { url: `${base}/blog/guilin-3-days`,        lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    // Hong Kong
    { url: `${base}/blog/hong-kong-4-days`,     lastModified: now, changeFrequency: "monthly", priority: 0.93 },
    { url: `${base}/blog/shanghai-4-days`,      lastModified: now, changeFrequency: "monthly", priority: 0.92 },
    // Canada (more)
    { url: `${base}/blog/montreal-4-days`,      lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    { url: `${base}/blog/toronto-4-days`,       lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    { url: `${base}/blog/quebec-city-3-days`,   lastModified: now, changeFrequency: "monthly", priority: 0.90 },
    { url: `${base}/blog/vancouver-4-days`,     lastModified: now, changeFrequency: "monthly", priority: 0.91 },
    // Tools
    { url: `${base}/tools/packing-list`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
    { url: `${base}/tools/currency-converter`, lastModified: now, changeFrequency: "monthly", priority: 0.88 },
  ];
}
