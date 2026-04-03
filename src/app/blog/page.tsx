"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import { blogPosts, type BlogPost } from "@/data/blog";

export default function BlogIndexPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  const query = search.toLowerCase().trim();
  const filtered = query
    ? blogPosts.filter((p) =>
        p.title.toLowerCase().includes(query) ||
        p.destination.toLowerCase().includes(query) ||
        p.tags.some((t) => t.toLowerCase().includes(query)) ||
        p.category.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query)
      )
    : blogPosts;

  const featured = !query ? blogPosts.find((p) => p.featured) : null;
  const rest = featured ? filtered.filter((p) => !p.featured) : filtered;

  return (
    <>
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <main className="min-h-screen bg-cream pt-[72px]">
        <div className="bg-parchment py-16 px-6 md:px-12 text-center">
          <div className="max-w-[1180px] mx-auto">
            <span className="section-label">Travel Guides & Itineraries</span>
            <h1 className="serif-title text-[clamp(2.2rem,4vw,3.5rem)] text-ink mb-4">
              The IncredibleItinerary Blog
            </h1>
            <p className="text-sm text-muted font-light max-w-[480px] mx-auto leading-relaxed mb-8">
              No generic content. No filler. Just practical, decision-based
              travel guides with real timings, real budgets, and real routes.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
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
            {query && (
              <p className="text-xs text-muted mt-3">
                {filtered.length} {filtered.length === 1 ? "guide" : "guides"} found{query ? ` for "${search}"` : ""}
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
                  <PexelsImage
                    query={featured.pexelsQuery}
                    fallback={featured.image}
                    alt={featured.imageAlt}
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
                      Read Guide →
                    </span>
                  </div>
                  <div className="flex gap-2 flex-wrap mt-5 pt-5 border-t border-parchment-2">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="text-[0.65rem] px-2.5 py-1 rounded-full bg-parchment text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          )}

          {rest.length > 0 ? (
            <div>
              <p className="section-label mb-6">{query ? `Results for "${search}"` : "All Guides"}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          ) : query ? (
            <div className="text-center py-16">
              <p className="text-4xl mb-4">🔍</p>
              <h3 className="font-serif text-xl text-ink mb-2">No guides found for &ldquo;{search}&rdquo;</h3>
              <p className="text-sm text-muted font-light mb-6">Try a different destination, tag, or keyword.</p>
              <button onClick={() => setSearch("")} className="btn-gold">Show All Guides</button>
            </div>
          ) : null}

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
              Plan My Trip →
            </button>
          </div>
        </div>
      </main>
      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

// Fetches image from Pexels API via /api/image, falls back to Unsplash
function PexelsImage({
  query,
  fallback,
  alt,
  priority = false,
}: {
  query: string;
  fallback: string;
  alt: string;
  priority?: boolean;
}) {
  const [src, setSrc] = useState(fallback);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(`/api/image?q=${encodeURIComponent(query)}`)
      .then((r) => r.json())
      .then((d) => { if (d.url) setSrc(d.url); })
      .catch(() => {});
  }, [query]);

  return (
    <>
      {!loaded && <div className="absolute inset-0 bg-parchment-2 animate-pulse" />}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-all duration-700 group-hover:scale-105 ${loaded ? "opacity-100" : "opacity-0"}`}
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority={priority}
        onLoad={() => setLoaded(true)}
        onError={() => { setSrc(fallback); setLoaded(true); }}
      />
    </>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  const [src, setSrc] = useState(post.image);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(`/api/image?q=${encodeURIComponent(post.pexelsQuery)}`)
      .then((r) => r.json())
      .then((d) => { if (d.url) setSrc(d.url); })
      .catch(() => {});
  }, [post.pexelsQuery]);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group rounded-xl overflow-hidden border border-parchment-2 bg-white hover:shadow-[0_12px_36px_rgba(22,16,8,0.09)] hover:-translate-y-1 transition-all duration-300 block"
    >
      <div className="relative h-48 overflow-hidden bg-parchment-2">
        {!loaded && <div className="absolute inset-0 bg-parchment-2 animate-pulse" />}
        <Image
          src={src}
          alt={post.imageAlt}
          fill
          className={`object-cover transition-all duration-700 group-hover:scale-105 ${loaded ? "opacity-100" : "opacity-0"}`}
          sizes="(max-width: 768px) 100vw, 33vw"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[0.62rem] tracking-[0.12em] uppercase text-gold-dark bg-gold/10 px-2.5 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-muted">{post.readTime}</span>
        </div>
        <h3 className="font-serif text-[1.15rem] font-light text-ink leading-tight mb-2 group-hover:text-teal transition-colors">
          {post.title}
        </h3>
        <p className="text-xs text-muted font-light leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-parchment-2">
          <span className="text-xs text-muted">{post.date}</span>
          <span className="text-xs font-medium text-gold-dark group-hover:text-teal transition-colors">
            Read →
          </span>
        </div>
      </div>
    </Link>
  );
}
