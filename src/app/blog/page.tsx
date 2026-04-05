"use client";
import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import SmartImage from "@/components/ui/SmartImage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import ShareButton from "@/components/ui/ShareButton";
import { blogPosts, type BlogPost } from "@/data/blog";

const PAGE_SIZE = 24;

// ── Region / country filter tabs ──
const REGION_FILTERS = [
  { id: "all",         label: "All Destinations", emoji: "✦" },
  { id: "india",       label: "India",            emoji: "🇮🇳" },
  { id: "southeast",   label: "SE Asia",          emoji: "🌏" },
  { id: "japan",       label: "Japan & Korea",    emoji: "🇯🇵" },
  { id: "middleeast",  label: "Middle East",      emoji: "🕌" },
  { id: "europe",      label: "Europe",           emoji: "🏰" },
  { id: "americas",    label: "Americas",         emoji: "🌎" },
  { id: "africa",      label: "Africa",           emoji: "🦁" },
  { id: "oceania",     label: "Oceania",          emoji: "🦘" },
];

const REGION_COUNTRIES: Record<string, string[]> = {
  india:      ["India"],
  southeast:  ["Thailand","Indonesia","Vietnam","Malaysia","Singapore","Philippines","Cambodia","Myanmar"],
  japan:      ["Japan","South Korea"],
  middleeast: ["UAE","Oman","Jordan","Saudi Arabia","Qatar","Bahrain","Kuwait"],
  europe:     ["Italy","Spain","Portugal","Greece","Turkey","France","Germany","UK","Netherlands","Austria","Switzerland","Czech Republic","Hungary","Poland","Croatia","Iceland","Norway","Sweden","Denmark","Finland","Ireland","Belgium","Malta","Cyprus","Bratislava","Wroclaw","Romania","Bulgaria"],
  americas:   ["USA","Canada","Mexico","Argentina","Brazil","Peru","Colombia","Chile","Cuba","Costa Rica","Ecuador"],
  africa:     ["Kenya","Tanzania","Rwanda","Namibia","South Africa","Morocco","Egypt","Uganda","Ethiopia","Ghana","Senegal"],
  oceania:    ["Australia","New Zealand","Fiji","Maldives","Seychelles","Mauritius"],
};

// ── Category filters ──
const CATEGORY_FILTERS = [
  { id: "all-cat",    label: "Any Category" },
  { id: "beach",      label: "Beach" },
  { id: "mountains",  label: "Mountains" },
  { id: "heritage",   label: "Heritage" },
  { id: "hillstation",label: "Hill Stations" },
  { id: "spiritual",  label: "Spiritual" },
  { id: "wildlife",   label: "Wildlife" },
  { id: "city",       label: "City" },
  { id: "food",       label: "Food Trail" },
  { id: "adventure",  label: "Adventure" },
];

// ── Duration filters ──
const DURATION_FILTERS = [
  { id: "all-dur", label: "Any Length" },
  { id: "2",       label: "2 Days" },
  { id: "3",       label: "3 Days" },
  { id: "4",       label: "4 Days" },
  { id: "5",       label: "5 Days" },
  { id: "6",       label: "6 Days" },
  { id: "7+",      label: "7+ Days" },
];

function matchesDuration(post: BlogPost, dur: string): boolean {
  if (dur === "all-dur") return true;
  const n = parseInt(post.duration);
  if (isNaN(n)) return false;
  if (dur === "7+") return n >= 7;
  return n === parseInt(dur);
}

function matchesRegion(post: BlogPost, region: string): boolean {
  if (region === "all") return true;
  // Posts without a country field are India guides
  const country = post.country ?? "India";
  const countries = REGION_COUNTRIES[region] ?? [];
  return countries.some((c) => country.toLowerCase().includes(c.toLowerCase()));
}

function matchesCategory(post: BlogPost, cat: string): boolean {
  if (cat === "all-cat") return true;
  return post.category?.toLowerCase().includes(cat.toLowerCase());
}

export default function BlogIndexPage() {
  const [modalOpen, setModalOpen]       = useState(false);
  const [search, setSearch]             = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [regionFilter, setRegionFilter] = useState("all");
  const [catFilter, setCatFilter]       = useState("all-cat");
  const [durFilter, setDurFilter]       = useState("all-dur");
  const [page, setPage]                 = useState(1);
  const searchRef = useRef<HTMLDivElement>(null);

  // Read URL params on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    const r = params.get("region");
    if (q) setSearch(q);
    if (r) setRegionFilter(r);
  }, []);

  // Close autocomplete on outside click
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const query = search.toLowerCase().trim();

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setPage(1);
  }, [query, regionFilter, catFilter, durFilter]);

  const filtered = useMemo(() => {
    return blogPosts.filter((p) => {
      if (!matchesRegion(p, regionFilter)) return false;
      if (!matchesCategory(p, catFilter)) return false;
      if (!matchesDuration(p, durFilter)) return false;
      if (query) {
        return (
          p.title.toLowerCase().includes(query) ||
          p.destination.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query)) ||
          p.category.toLowerCase().includes(query) ||
          p.excerpt.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [query, regionFilter, catFilter, durFilter]);

  // Autocomplete suggestions
  const suggestions = useMemo(() => {
    if (!query || query.length < 2) return [];
    return blogPosts
      .filter(
        (p) =>
          p.destination.toLowerCase().includes(query) ||
          p.title.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query))
      )
      .slice(0, 8);
  }, [query]);

  const hasActiveFilter =
    query || regionFilter !== "all" || catFilter !== "all-cat" || durFilter !== "all-dur";

  const showFeatured = !hasActiveFilter;
  const featured = showFeatured ? blogPosts.find((p) => p.featured) : null;
  const rest = featured ? filtered.filter((p) => !p.featured) : filtered;

  // Pagination
  const totalPages = Math.ceil(rest.length / PAGE_SIZE);
  const pageStart  = (page - 1) * PAGE_SIZE;
  const pageEnd    = pageStart + PAGE_SIZE;
  const pageItems  = rest.slice(pageStart, pageEnd);

  function clearAllFilters() {
    setSearch("");
    setRegionFilter("all");
    setCatFilter("all-cat");
    setDurFilter("all-dur");
  }

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
            <div ref={searchRef} className="max-w-xl mx-auto relative mb-8">
              <div className="relative">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setShowDropdown(true); }}
                  onFocus={() => setShowDropdown(true)}
                  onKeyDown={(e) => { if (e.key === "Escape") setShowDropdown(false); }}
                  placeholder="Search any destination — Kashmir, Bali, Japan, Paris..."
                  className="w-full px-5 py-4 border-2 border-parchment-2 rounded-2xl bg-white text-ink text-sm font-light outline-none transition-all duration-200 focus:border-gold focus:shadow-[0_4px_20px_rgba(0,0,0,0.08)] placeholder:text-muted/40 shadow-sm"
                  style={{ paddingLeft: "3.25rem" }}
                />
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/40" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                </svg>
                {search && (
                  <button
                    onClick={() => { setSearch(""); setShowDropdown(false); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-parchment-2 text-muted hover:bg-parchment-2/80 hover:text-ink transition-all flex items-center justify-center text-sm"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Autocomplete */}
              {showDropdown && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-parchment-2 shadow-[0_16px_48px_rgba(22,16,8,0.12)] z-50 overflow-hidden">
                  <p className="text-[0.6rem] tracking-[0.14em] uppercase text-muted font-medium px-4 pt-3 pb-1">
                    Jump to destination
                  </p>
                  {suggestions.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      onClick={() => setShowDropdown(false)}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-parchment transition-colors group"
                    >
                      <div className="relative w-11 h-11 rounded-xl overflow-hidden flex-shrink-0 bg-parchment-2">
                        <img
                          src={`${post.image.split("?")[0]}?w=100&q=60`}
                          alt={post.destination}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <p className="text-sm font-medium text-ink leading-tight truncate group-hover:text-gold transition-colors">{post.destination}</p>
                        <p className="text-[0.68rem] text-muted font-light truncate">{post.duration} · {post.category}</p>
                      </div>
                      <span className="text-xs text-gold-dark flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">Read →</span>
                    </Link>
                  ))}
                  {filtered.length > suggestions.length && (
                    <button
                      onClick={() => setShowDropdown(false)}
                      className="w-full text-left px-4 py-3 border-t border-parchment-2 text-xs text-gold-dark hover:bg-parchment transition-colors"
                    >
                      See all {filtered.length} results below ↓
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* ── Filters row ── */}
            <div className="space-y-4">
              {/* Region tabs */}
              <div className="flex flex-wrap justify-center gap-2">
                {REGION_FILTERS.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setRegionFilter(f.id)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-200 border ${
                      regionFilter === f.id
                        ? "bg-gold text-ink border-gold shadow-sm"
                        : "bg-white text-muted border-parchment-2 hover:border-gold hover:text-gold-dark"
                    }`}
                  >
                    <span aria-hidden="true">{f.emoji}</span>
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Category + Duration row */}
              <div className="flex flex-wrap justify-center gap-3">
                {/* Category select */}
                <select
                  value={catFilter}
                  onChange={(e) => setCatFilter(e.target.value)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide border cursor-pointer transition-all duration-200 bg-white outline-none ${
                    catFilter !== "all-cat"
                      ? "border-gold text-gold-dark shadow-sm"
                      : "border-parchment-2 text-muted hover:border-gold"
                  }`}
                >
                  {CATEGORY_FILTERS.map((c) => (
                    <option key={c.id} value={c.id}>{c.label}</option>
                  ))}
                </select>

                {/* Duration select */}
                <select
                  value={durFilter}
                  onChange={(e) => setDurFilter(e.target.value)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide border cursor-pointer transition-all duration-200 bg-white outline-none ${
                    durFilter !== "all-dur"
                      ? "border-gold text-gold-dark shadow-sm"
                      : "border-parchment-2 text-muted hover:border-gold"
                  }`}
                >
                  {DURATION_FILTERS.map((d) => (
                    <option key={d.id} value={d.id}>{d.label}</option>
                  ))}
                </select>

                {/* Clear filters */}
                {hasActiveFilter && (
                  <button
                    onClick={clearAllFilters}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-medium tracking-wide border border-ink/20 text-ink/60 hover:border-ink hover:text-ink transition-all bg-white"
                  >
                    ✕ Clear
                  </button>
                )}
              </div>
            </div>

            {hasActiveFilter && (
              <p className="text-xs text-muted mt-4">
                {filtered.length} {filtered.length === 1 ? "guide" : "guides"} found
                {query ? ` for "${search}"` : ""}
              </p>
            )}
          </div>
        </div>

        <div className="max-w-[1180px] mx-auto px-6 md:px-12 py-16">
          {/* Featured (only when no filters active) */}
          {featured && (
            <div className="mb-14">
              <p className="section-label mb-6">Featured Guide</p>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-parchment-2 hover:shadow-[0_16px_48px_rgba(22,16,8,0.1)] transition-all duration-300"
              >
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <SmartImage
                    query={featured.pexelsQuery || featured.destination}
                    fallback={featured.image}
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

          {/* Guide grid */}
          {rest.length > 0 ? (
            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="section-label mb-0">
                  {query
                    ? `Results for "${search}"`
                    : regionFilter !== "all"
                    ? REGION_FILTERS.find((f) => f.id === regionFilter)?.label + " Guides"
                    : "All Guides"}
                </p>
                <span className="text-xs text-muted">
                  {pageStart + 1}–{Math.min(pageEnd, rest.length)} of {rest.length} guides
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pageItems.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-12">
                  <button
                    onClick={() => { setPage((p) => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    disabled={page === 1}
                    className="px-4 py-2 text-xs font-medium tracking-wide uppercase border border-parchment-2 rounded-full text-muted hover:border-gold hover:text-gold-dark transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    ← Prev
                  </button>

                  {/* Page numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((n) => n === 1 || n === totalPages || Math.abs(n - page) <= 1)
                    .reduce<(number | "…")[]>((acc, n, idx, arr) => {
                      if (idx > 0 && n - (arr[idx - 1] as number) > 1) acc.push("…");
                      acc.push(n);
                      return acc;
                    }, [])
                    .map((item, idx) =>
                      item === "…" ? (
                        <span key={`ellipsis-${idx}`} className="px-2 text-xs text-muted">…</span>
                      ) : (
                        <button
                          key={item}
                          onClick={() => { setPage(item as number); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                          className={`w-9 h-9 text-xs font-medium rounded-full border transition-all ${
                            page === item
                              ? "bg-gold text-ink border-gold"
                              : "border-parchment-2 text-muted hover:border-gold hover:text-gold-dark"
                          }`}
                        >
                          {item}
                        </button>
                      )
                    )}

                  <button
                    onClick={() => { setPage((p) => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    disabled={page === totalPages}
                    className="px-4 py-2 text-xs font-medium tracking-wide uppercase border border-parchment-2 rounded-full text-muted hover:border-gold hover:text-gold-dark transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Next →
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-4xl mb-4">🔍</p>
              <h3 className="font-serif text-xl text-ink mb-2">
                No guides found{query ? ` for "${search}"` : ""}
              </h3>
              <p className="text-sm text-muted font-light mb-6">Try a different filter or search term.</p>
              <button onClick={clearAllFilters} className="btn-gold">
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
    <div className="group rounded-xl overflow-hidden border border-parchment-2 bg-white hover:shadow-[0_12px_36px_rgba(22,16,8,0.09)] hover:-translate-y-1 transition-all duration-300 block">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-48 overflow-hidden bg-parchment-2">
          <SmartImage
            query={post.pexelsQuery || post.destination}
            fallback={post.image}
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
      {/* Share row */}
      <div className="px-5 pb-4 flex items-center justify-between border-t border-parchment-2/50 pt-3">
        <span className="text-[0.65rem] text-muted/60 font-light">Share this guide</span>
        <ShareButton title={post.title} slug={post.slug} />
      </div>
    </div>
  );
}
