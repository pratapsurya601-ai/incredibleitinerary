"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GeneratedPost, getGeneratedPostsByParent, GeneratedPostType } from "@/data/generated-posts";
import { BlogPost } from "@/data/blog";
import { generateContent, ParentMeta } from "@/lib/content-generators";
import ShareButton from "@/components/ui/ShareButton";
import AdUnit from "@/components/ads/AdUnit";
import AutoPdfCta from "@/components/blog/AutoPdfCta";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import AutoTableOfContents from "@/components/blog/AutoTableOfContents";
import InlineSignup from "@/components/email/InlineSignup";
import RelatedGuides from "@/components/blog/RelatedGuides";

// ---------------------------------------------------------------------------
// Type badge config
// ---------------------------------------------------------------------------
const TYPE_CONFIG: Record<
  GeneratedPostType,
  { label: string; color: string; icon: string }
> = {
  "best-time": { label: "Best Time to Visit", color: "bg-teal/10 text-teal border-teal/20", icon: "☀" },
  "cost-breakdown": { label: "Trip Cost", color: "bg-gold/10 text-gold-dark border-gold/20", icon: "₹" },
  "how-to-reach": { label: "How to Reach", color: "bg-ink/5 text-ink border-ink/10", icon: "✈" },
  "travel-tips": { label: "Travel Tips", color: "bg-rust/10 text-rust border-rust/20", icon: "✦" },
};

const SIBLING_ORDER: GeneratedPostType[] = [
  "best-time",
  "cost-breakdown",
  "how-to-reach",
  "travel-tips",
];

// ---------------------------------------------------------------------------
// Slug builders for sibling posts
// ---------------------------------------------------------------------------
function buildSiblingSlug(type: GeneratedPostType, destination: string): string {
  const dest = destination.toLowerCase().replace(/\s+/g, "-");
  const prefixes: Record<GeneratedPostType, string> = {
    "best-time": "best-time-to-visit-",
    "cost-breakdown": "cost-of-trip-to-",
    "how-to-reach": "how-to-reach-",
    "travel-tips": "travel-tips-for-",
  };
  return `${prefixes[type]}${dest}`;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function GeneratedPostContent({
  post,
  parent,
}: {
  post: GeneratedPost;
  parent: BlogPost | null;
}) {
  const [shareReady] = useState(true);

  // Build ParentMeta from either the parent BlogPost or the generated post itself
  const parentMeta: ParentMeta = {
    slug: post.parentSlug,
    destination: post.destination,
    country: post.country ?? parent?.country ?? "India",
    duration: post.duration ?? parent?.duration ?? "5 Days",
    category: post.category ?? parent?.category ?? "Travel",
    image: post.image ?? parent?.image ?? "",
  };

  const heroImage = parent?.image ?? post.image;
  const heroAlt = parent?.imageAlt ?? post.destination;
  const typeConfig = TYPE_CONFIG[post.type];

  // Sibling posts (other 3 types for same destination)
  const allSiblings = getGeneratedPostsByParent(post.parentSlug);
  const siblings = SIBLING_ORDER.filter((t) => t !== post.type).map((type) => {
    // Try to find actual sibling in data
    const found = allSiblings.find((s) => s.type === type);
    if (found) return { type, slug: found.slug, title: found.title, exists: true };
    // Fallback: construct the likely slug
    return {
      type,
      slug: buildSiblingSlug(type, post.destination),
      title: `${TYPE_CONFIG[type].label}: ${post.destination}`,
      exists: false,
    };
  });

  // Format publish date nicely
  const formattedDate = (() => {
    try {
      return new Date(post.publishDate).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return post.publishDate;
    }
  })();

  const content = generateContent(post, parentMeta);

  return (
    <main className="pt-[72px] bg-cream min-h-screen">
      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                                */}
      {/* ------------------------------------------------------------------ */}
      <div className="relative h-[440px] md:h-[520px] overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage}
            alt={heroAlt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-6 left-0 right-0 px-6 md:px-12">
          <nav className="flex items-center gap-1.5 text-white/60 text-[0.68rem] tracking-wide">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            {parent && (
              <>
                <Link
                  href={`/blog/${post.parentSlug}`}
                  className="hover:text-white transition-colors"
                >
                  {post.destination}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-white/40 truncate max-w-[200px]">{typeConfig.label}</span>
          </nav>
        </div>

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-10 max-w-[900px]">
          {/* Type badge */}
          <span
            className={`inline-flex items-center gap-1.5 border text-xs tracking-[0.1em] uppercase font-medium px-2.5 py-1 rounded-[2px] mb-4 ${typeConfig.color}`}
          >
            <span aria-hidden="true">{typeConfig.icon}</span>
            {typeConfig.label}
          </span>

          <h1 className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-light text-white leading-tight mb-3">
            {post.title}
          </h1>

          <p className="text-white/60 text-sm font-light">
            {formattedDate}
            {parent && (
              <>
                {" · "}
                <Link
                  href={`/blog/${post.parentSlug}`}
                  className="hover:text-white transition-colors underline underline-offset-2"
                >
                  See the {post.duration} {post.destination} itinerary →
                </Link>
              </>
            )}
          </p>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* BODY                                                                */}
      {/* ------------------------------------------------------------------ */}
      <div className="max-w-[780px] mx-auto px-6 py-12 md:py-16">
        {/* Description lede */}
        <p className="font-serif text-lg md:text-xl font-light text-muted italic leading-relaxed mb-8 border-b border-parchment-2 pb-8">
          {post.description}
        </p>

        {/* Auto Table of Contents — sticky sidebar on desktop, pill on mobile */}
        <AutoTableOfContents />

        {/* Generated content */}
        {content}

        {/* Auto PDF CTA — shows if parent slug has a PDF */}
        {post.parentSlug && <AutoPdfCta blogSlug={post.parentSlug} />}

        {/* Email capture */}
        <InlineSignup />

        {/* Affiliate block — hotels + tours for this destination */}
        <AffiliateBlock destination={post.destination} />

        {/* Internal linking to related guides */}
        <RelatedGuides currentSlug={post.parentSlug || post.slug} />

        {/* Mid-article ad */}
        <AdUnit slot="5913027384" format="auto" />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SIBLING POSTS                                                       */}
      {/* ------------------------------------------------------------------ */}
      <div className="bg-parchment border-t border-parchment-2 py-14 px-6 md:px-12">
        <div className="max-w-[860px] mx-auto">
          <p className="text-[0.65rem] tracking-[0.18em] uppercase text-gold font-medium mb-2">
            Also Read
          </p>
          <h2 className="font-serif text-xl font-light text-ink mb-6">
            More About {post.destination}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {siblings.map((sibling) => {
              const cfg = TYPE_CONFIG[sibling.type];
              return (
                <Link
                  key={sibling.type}
                  href={`/blog/${sibling.slug}`}
                  className="group block bg-white rounded-xl border border-parchment-2 hover:border-gold/50 hover:shadow-md transition-all duration-300 p-5"
                >
                  <span
                    className={`inline-flex items-center gap-1 text-xs tracking-[0.1em] uppercase font-medium border px-2 py-0.5 rounded-[2px] mb-3 ${cfg.color}`}
                  >
                    <span aria-hidden="true">{cfg.icon}</span>
                    {cfg.label}
                  </span>
                  <p className="text-sm font-medium text-ink leading-snug group-hover:text-gold-dark transition-colors">
                    {cfg.label}: {post.destination}
                  </p>
                  <p className="text-xs text-gold-dark font-medium mt-2 group-hover:text-teal transition-colors">
                    Read guide →
                  </p>
                </Link>
              );
            })}

            {/* Parent itinerary card */}
            {parent && (
              <Link
                href={`/blog/${post.parentSlug}`}
                className="group block bg-white rounded-xl border border-parchment-2 hover:border-gold/50 hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-24 overflow-hidden">
                  <Image
                    src={parent.image}
                    alt={parent.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="280px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                  <p className="absolute bottom-2 left-3 font-serif text-sm text-white font-light">
                    {post.destination} Itinerary
                  </p>
                </div>
                <div className="p-4">
                  <p className="text-xs text-muted font-light">
                    {parent.duration} · {parent.category}
                  </p>
                  <p className="text-xs text-gold-dark font-medium mt-1 group-hover:text-teal transition-colors">
                    Full guide →
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* CTA BOX                                                             */}
      {/* ------------------------------------------------------------------ */}
      <div className="bg-cream border-t border-parchment-2 py-16 px-6 md:px-12 text-center">
        <div className="max-w-[520px] mx-auto">
          <span className="text-xs tracking-[0.2em] uppercase text-gold font-medium">
            Free · Personalised · No commitment
          </span>
          <h2 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] font-light text-ink mt-3 mb-3">
            Ready to Visit {post.destination}?
          </h2>
          <p className="text-sm text-muted font-light mb-7 leading-[1.8]">
            We&apos;ll build a personalised itinerary around your exact dates, group size, and
            budget — completely free. Most travellers have their plan within 24 hours.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-ink text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-gold-dark hover:text-white transition-all duration-200"
            >
              Get My Free Itinerary →
            </Link>
            {parent && (
              <Link
                href={`/blog/${post.parentSlug}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-parchment-2 text-muted text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:border-gold hover:text-gold transition-all duration-200"
              >
                {post.duration} Guide
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SHARE BAR                                                           */}
      {/* ------------------------------------------------------------------ */}
      {shareReady && (
        <div className="border-t border-parchment-2 bg-white py-5 px-6 md:px-12">
          <div className="max-w-[780px] mx-auto flex items-center justify-between flex-wrap gap-4">
            <p className="text-sm text-muted font-light">
              Found this useful? Share it with fellow travellers.
            </p>
            <ShareButton title={post.title} slug={post.slug} />
          </div>
        </div>
      )}
    </main>
  );
}
