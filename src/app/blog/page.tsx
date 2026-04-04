"use client";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import { blogPosts, type BlogPost } from "@/data/blog";

// ── Filter categories ──
const FILTERS = [
  { id: "all", label: "All", emoji: "✦" },
  { id: "beach", label: "Beach", emoji: "🏖️", slugs: ["goa-3-days","andaman-5-days","gokarna-3-days","pondicherry-3-days","diu-2-days","vizag-3-days"] },
  { id: "mountains", label: "Mountains", emoji: "🏔️", slugs: ["kashmir-6-days","leh-ladakh-7-days","manali-5-days","spiti-valley-7-days","dharamshala-3-days","kasol-3-days","auli-3-days","valley-of-flowers-4-days"] },
  { id: "heritage", label: "Heritage", emoji: "🏰", slugs: ["rajasthan-7-days","jaipur-3-days","jodhpur-3-days","jaisalmer-3-days","udaipur-3-days","golden-triangle-7-days","agra-2-days","hampi-3-days","khajuraho-2-days","orchha-2-days","mysore-3-days"] },
  { id: "hillstation", label: "Hill Stations", emoji: "🌿", slugs: ["shimla-3-days","ooty-3-days","kodaikanal-3-days","mussoorie-3-days","nainital-3-days","darjeeling-4-days","mount-abu-2-days","mahabaleshwar-2-days","coorg-3-days"] },
  { id: "spiritual", label: "Spiritual", emoji: "🕯️", slugs: ["varanasi-3-days","amritsar-2-days","rishikesh-haridwar-3-days","rameswaram-2-days","dwarka-2-days","pushkar-2-days","madurai-2-days"] },
  { id: "northeast", label: "Northeast", emoji: "🌄", slugs: ["meghalaya-5-days","sikkim-6-days","shillong-3-days","kaziranga-3-days","tawang-4-days","majuli-3-days"] },
  { id: "wildlife", label: "Wildlife", emoji: "🐅", slugs: ["jim-corbett-3-days","ranthambore-3-days","kaziranga-3-days","sundarbans-3-days"] },
  { id: "weekend", label: "Weekend", emoji: "⚡", slugs: ["lonavala-2-days","mahabaleshwar-2-days","pushkar-2-days","pondicherry-3-days","coorg-3-days","jibhi-tirthan-valley-3-days","nainital-3-days","mount-abu-2-days","diu-2-days"] },
  { id: "food", label: "Food Trail", emoji: "🍛", slugs: ["amritsar-2-days","hyderabad-3-days","madurai-2-days","varanasi-3-days","jaipur-3-days","goa-3-days","bangkok-4-days","osaka-3-days"] },
  { id: "thailand", label: "Thailand", emoji: "🇹🇭", slugs: ["bangkok-4-days","phuket-5-days","chiang-mai-4-days"] },
  { id: "japan", label: "Japan", emoji: "🇯🇵", slugs: ["tokyo-5-days","kyoto-4-days","osaka-3-days"] },
  { id: "italy", label: "Italy", emoji: "🇮🇹", slugs: ["rome-4-days","florence-3-days","amalfi-coast-4-days"] },
  { id: "indonesia", label: "Indonesia", emoji: "🇮🇩", slugs: ["bali-5-days","ubud-3-days","lombok-4-days"] },
  { id: "uae", label: "UAE & Oman", emoji: "🇦🇪", slugs: ["dubai-4-days","abu-dhabi-3-days","muscat-3-days"] },
  { id: "spain", label: "Spain", emoji: "🇪🇸", slugs: ["barcelona-4-days","madrid-3-days","seville-3-days"] },
];

export default function BlogIndexPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Read URL params on mount (?q= for search, ?filter= for category)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    const f = params.get("filter");
    if (q) setSearch(q);
    if (f) setActiveFilter(f);
  }, []);

  const query = search.toLowerCase().trim();

  const filtered = useMemo(() => {
    let posts = blogPosts;

    // Apply category filter
    if (activeFilter !== "all") {
      const filter = FILTERS.find((f) => f.id === activeFilter);
      if (filter && "slugs" in filter && filter.slugs) {
        const slugs = filter.slugs;
        posts = posts.filter((p) => slugs.includes(p.slug));
      }
    }

    // Apply search
    if (query) {
      posts = posts.filter((p) =>
        p.title.toLowerCase().includes(query) ||
        p.destination.toLowerCase().includes(query) ||
        p.tags.some((t) => t.toLowerCase().includes(query)) ||
        p.category.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query)
      );
    }

    return posts;
  }, [query, activeFilter]);

  const showFeatured = !query && activeFilter === "all";
  const featured = showFeatured ? blogPosts.find((p) => p.featured) : null;
  const rest = featured ? filtered.filter((p) => !p.featured) : filtered;

  return (
    <>
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <main className="min-h-screen bg-cream pt-[72px]">
        <div className="bg-parchment py-16 px-6 md:px-12 text-center">
          <div className="max-w-[1180px] mx-auto">
            <span className="section-label">Travel Guides & Itineraries</span>
            <h1 className="serif-title text-[clamp(2.2rem,4vw,3.5rem)] text-ink mb-2">
              {blogPosts.length} Free Travel Guides
            </h1>
            <p className="text-sm text-muted font-light max-w-[480px] mx-auto leading-relaxed mb-8">
              Real budgets. Real timings. Real routes. No filler. Pick a destination or browse by category.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative mb-6">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search destinations, tags, or topics..."
                className="w-full px-5 py-3.5 pl-12 border border-parchment-2 rounded-full bg-white text-ink text-sm font-light outline-none transition-colors duration-200 focus:border-gold placeholder:text-muted/50 shadow-sm"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/40" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted/40 hover:text-ink transition-colors text-lg">&times;</button>
              )}
            </div>

            {/* Category filter pills */}
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => { setActiveFilter(f.id); setSearch(""); }}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-200 border ${
                    activeFilter === f.id
                      ? "bg-gold text-ink border-gold shadow-sm"
                      : "bg-white text-muted border-parchment-2 hover:border-gold hover:text-gold-dark"
                  }`}
                >
                  <span aria-hidden="true">{f.emoji}</span>
                  {f.label}
                  {"slugs" in f && f.slugs && (
                    <span className={`text-[0.6rem] ml-0.5 ${activeFilter === f.id ? "text-ink/50" : "text-muted/50"}`}>
                      {f.slugs.length}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {(query || activeFilter !== "all") && (
              <p className="text-xs text-muted mt-4">
                {filtered.length} {filtered.length === 1 ? "guide" : "guides"} found
                {query ? ` for "${search}"` : ""}
                {activeFilter !== "all" ? ` in ${FILTERS.find((f) => f.id === activeFilter)?.label}` : ""}
              </p>
            )}
          </div>
        </div>

        <div className="max-w-[1180px] mx-auto px-6 md:px-12 py-16">
          {featured && (
            <div className="mb-14">
              <p className="section-label mb-6">Featured Guide</p>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-parchment-2 hover:shadow-[0_16px_48px_rgba(22,16,8,0.1)] transition-all duration-300"
              >
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[0.65rem] tracking-[0.15em] uppercase bg-gold/15 text-gold-dark px-3 py-1 rounded-full">
                      {featured.category}
                    </span>
                    <span className="text-xs text-muted">{featured.readTime}</span>
                  </div>
                  <h2 className="font-serif text-[1.7rem] font-light text-ink leading-tight mb-4 group-hover:text-teal transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-muted font-light leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted">{featured.date}</span>
                    <span className="text-sm font-medium text-gold-dark group-hover:text-teal transition-colors">
                      Read Guide &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {rest.length > 0 ? (
            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="section-label mb-0">
                  {query ? `Results for "${search}"` : activeFilter !== "all" ? FILTERS.find((f) => f.id === activeFilter)?.label + " Destinations" : "All Guides"}
                </p>
                <span className="text-xs text-muted">{rest.length} guides</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-4xl mb-4">🔍</p>
              <h3 className="font-serif text-xl text-ink mb-2">
                No guides found{query ? ` for "${search}"` : ""}
              </h3>
              <p className="text-sm text-muted font-light mb-6">Try a different filter or search term.</p>
              <button onClick={() => { setSearch(""); setActiveFilter("all"); }} className="btn-gold">
                Show All Guides
              </button>
            </div>
          )}

          <div className="mt-20 text-center bg-parchment rounded-2xl p-12">
            <span className="section-label">Can&apos;t Find Your Destination?</span>
            <h2 className="serif-title text-[clamp(1.8rem,3vw,2.5rem)] text-ink mb-4">
              Get a Custom Itinerary Built for You
            </h2>
            <p className="text-sm text-muted font-light mb-8 max-w-[420px] mx-auto leading-relaxed">
              Tell us where you want to go and we&apos;ll send you a personalised
              day-by-day plan within 24 hours. Free.
            </p>
            <button onClick={() => setModalOpen(true)} className="btn-gold">
              Plan My Trip &rarr;
            </button>
          </div>
        </div>
      </main>
      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group rounded-xl overflow-hidden border border-parchment-2 bg-white hover:shadow-[0_12px_36px_rgba(22,16,8,0.09)] hover:-translate-y-1 transition-all duration-300 block"
    >
      <div className="relative h-48 overflow-hidden bg-parchment-2">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
        <span className="absolute bottom-3 left-3 text-white font-serif text-base font-light drop-shadow-lg">
          {post.destination}
        </span>
        <span className="absolute top-2.5 right-2.5 text-[0.58rem] font-semibold tracking-wider uppercase bg-gold text-ink px-2 py-0.5 rounded-full">
          {post.duration}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2.5">
          <span className="text-[0.62rem] tracking-[0.12em] uppercase text-gold-dark bg-gold/10 px-2.5 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-[0.62rem] text-muted">{post.readTime}</span>
        </div>
        <h3 className="font-serif text-[1.05rem] font-light text-ink leading-snug mb-2 group-hover:text-teal transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-xs text-muted font-light leading-relaxed mb-3 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-parchment-2">
          <span className="text-[0.62rem] text-muted">{post.date}</span>
          <span className="text-xs font-medium text-gold-dark group-hover:text-teal transition-colors">
            Read &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
