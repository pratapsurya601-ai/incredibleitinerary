import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { getGeneratedPostBySlug, getPublishedGeneratedPosts } from "@/data/generated-posts";
import type { GeneratedPost } from "@/data/generated-posts";
import Footer from "@/components/layout/Footer";
import BlogSlugNav from "./BlogSlugNav";
import ShareButton from "@/components/ui/ShareButton";
import { BlogPostSchema, GeneratedPostSchema } from "@/components/SchemaMarkup";
import GeneratedPostContent from "./GeneratedPostContent";
import AdUnit from "@/components/ads/AdUnit";
import AutoPdfCta from "@/components/blog/AutoPdfCta";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import StickyTOCSidebar from "@/components/blog/StickyTOCSidebar";
import AffiliateDisclosure from "@/components/blog/AffiliateDisclosure";
import AuthorBio from "@/components/blog/AuthorBio";
import RelatedGuides from "@/components/blog/RelatedGuides";
import { getGeneratedPostDescription } from "@/lib/generated-meta";
import { Calendar, Clock, MapPin, RefreshCw } from "lucide-react";

interface Props {
  params: { slug: string };
}

// Generate static params for all posts
export async function generateStaticParams() {
  const regularParams = blogPosts.map((post) => ({ slug: post.slug }));
  const generatedParams = getPublishedGeneratedPosts().map((post) => ({ slug: post.slug }));
  return [...regularParams, ...generatedParams];
}

// Dynamic metadata per post
const SITE = "https://www.incredibleitinerary.com";
const AUTHORS = [{ name: "IncredibleItinerary Editorial Team", url: `${SITE}/about` }];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (post) {
    return {
      title: `${post.title} — IncredibleItinerary`,
      description: post.excerpt,
      authors: AUTHORS,
      alternates: { canonical: `${SITE}/blog/${post.slug}` },
      // Noindex shell posts until dedicated pages with full content are built
      ...(SHELL_SLUGS.has(params.slug) ? { robots: { index: false, follow: true } } : {}),
      openGraph: {
        title: post.title,
        description: post.excerpt,
        url: `${SITE}/blog/${post.slug}`,
        type: "article",
        publishedTime: post.date,
        authors: ["IncredibleItinerary Editorial Team"],
        images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }],
      },
    };
  }

  const generatedPost = getGeneratedPostBySlug(params.slug);
  if (generatedPost) {
    // All generated posts (from generated-posts.ts) are noindexed.
    // Only hand-written posts from blog.ts should be indexed.
    const metaDescription = getGeneratedPostDescription(generatedPost);

    return {
      title: `${generatedPost.title} — IncredibleItinerary`,
      description: metaDescription,
      authors: AUTHORS,
      alternates: { canonical: `${SITE}/blog/${generatedPost.slug}` },
      robots: { index: false, follow: true },
      openGraph: {
        title: generatedPost.title,
        description: metaDescription,
        url: `${SITE}/blog/${generatedPost.slug}`,
        type: "article",
        publishedTime: generatedPost.publishDate,
        images: [{ url: generatedPost.image, width: 1200, height: 630, alt: generatedPost.destination }],
      },
    };
  }

  return { title: "Post Not Found" };
}

export default function BlogPostPage({ params }: Props) {
  // Check regular blog posts first
  const post = getPostBySlug(params.slug);

  // Check generated posts if not found in regular posts
  const generatedPost = !post ? getGeneratedPostBySlug(params.slug) : null;

  if (!post && !generatedPost) notFound();

  // If it's a generated post, find the parent blog post and render GeneratedPostContent
  if (generatedPost) {
    const parentBlogPost = generatedPost.parentSlug
      ? getPostBySlug(generatedPost.parentSlug) ?? null
      : null;

    // Build FAQ schema based on post type — helps Google show rich FAQ snippets
    const dest = generatedPost.destination;
    const dur = parentBlogPost?.duration ?? "a few days";
    const faqsByType: Record<string, Array<{ q: string; a: string }>> = {
      "best-time": [
        { q: `What is the best time to visit ${dest}?`, a: `The best time to visit ${dest} depends on your priorities. Generally Oct–Mar is ideal for most Indian hill and heritage destinations. Check our month-by-month guide above for weather, crowd levels, and pricing by month.` },
        { q: `Is ${dest} good to visit in monsoon?`, a: `Monsoon (Jun–Sep) brings challenges and beauty in equal measure for most Indian destinations — lush scenery but possible trail closures. The cost-benefit varies strongly by destination type. See the month guide above for specifics on ${dest}.` },
        { q: `When is ${dest} cheapest to visit?`, a: `Off-peak season (typically Apr–Jun or Jul–Sep for Indian destinations) offers accommodation 30–50% cheaper. You trade peak weather for significant savings. For ${dest} specifically, see the seasonal breakdown above.` },
      ],
      "cost-breakdown": [
        { q: `How much does a trip to ${dest} cost?`, a: `A ${dur} trip to ${dest} costs approximately ₹2,000–5,000/day on a budget, ₹5,000–12,000/day mid-range, or ₹12,000–35,000/day for luxury travel — per person excluding long-distance transport. See the full breakdown above.` },
        { q: `Is ${dest} expensive for Indian travellers?`, a: `${dest} is generally accessible for Indian travellers with options across all budgets. Accommodation is the biggest variable — choosing wisely between budget guesthouses and mid-range stays can halve your daily cost.` },
        { q: `What is the budget for ${dur} in ${dest}?`, a: `For ${dur} in ${dest}: budget travellers can manage on ₹2,000–4,000/day including accommodation, food, and local transport. Mid-range travel runs ₹5,000–10,000/day. See the complete breakdown by category above.` },
      ],
      "how-to-reach": [
        { q: `How to reach ${dest} from Delhi?`, a: `${dest} is accessible by flight, train, or road from Delhi depending on location. Flights are fastest; trains offer better value and views; road trips give maximum flexibility. The full route breakdown with costs and durations is listed above.` },
        { q: `How to reach ${dest} from Mumbai?`, a: `From Mumbai, ${dest} is typically reached by flight (2–3hrs for most Indian destinations) or overnight train. Flight prices from Mumbai tend to be competitive with Delhi fares. See transport options above.` },
        { q: `What is the nearest airport to ${dest}?`, a: `The nearest airport and transport details for ${dest} are covered in the how-to-reach guide above, including taxi/bus connections from the airport to the destination.` },
      ],
      "travel-tips": [
        { q: `What are the must-know tips for visiting ${dest}?`, a: `Key tips for ${dest}: book accommodation ahead during peak season, carry sufficient cash for areas with limited ATMs, respect local customs and dress codes, and plan activities around weather patterns. The full tips by category are above.` },
        { q: `Is ${dest} safe for solo travellers?`, a: `${dest} is generally safe for solo travel. Standard precautions apply: share your itinerary, use registered transport, and avoid unmarked trails alone. Women should research destination-specific safety context. Tips for ${dest} are in the guide above.` },
        { q: `What should I pack for ${dest}?`, a: `Packing for ${dest} depends on season and activities planned. Core items: comfortable walking shoes, sun protection, layers for temperature changes (especially hills), and a small first-aid kit. Destination-specific packing tips are in the guide above.` },
      ],
    };

    const faqItems = faqsByType[generatedPost.type] ?? faqsByType["best-time"];
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    };

    return (
      <>
        <GeneratedPostSchema
          slug={generatedPost.slug}
          title={generatedPost.title}
          description={generatedPost.description}
          destination={generatedPost.destination}
          publishDate={generatedPost.publishDate}
          image={generatedPost.image}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <BlogSlugNav />
        <GeneratedPostContent post={generatedPost} parent={parentBlogPost} />
        <Footer />
      </>
    );
  }

  // Regular blog post rendering below
  // Redirect to the dedicated page for known posts
  // Each post has its own Client component for full interactivity
  const PostContent = getPostContent(params.slug);

  return (
    <>
      {/* Schema for posts using this fallback template (no dedicated page.tsx) */}
      {!PostContent && <BlogPostSchema post={post!} />}
      <BlogSlugNav />

      <main className="pt-[72px] bg-cream min-h-screen">
        {PostContent ? (
          <PostContent />
        ) : (
          // Fallback for future posts not yet built
          <>
            {/* ── HERO ── 60vh, dark overlay, breadcrumb + meta row */}
            <div className="relative min-h-[60vh] flex flex-col justify-end overflow-hidden">
              <Image
                src={post!.image}
                alt={post!.imageAlt}
                fill
                className="object-cover"
                priority
              />
              {/* Multi-stop gradient: readable top (breadcrumb) + dark bottom (title) */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(10,6,2,0.55) 0%, rgba(10,6,2,0.18) 35%, rgba(10,6,2,0.55) 65%, rgba(10,6,2,0.92) 100%)",
                }}
              />

              {/* Breadcrumb — top left */}
              <div className="absolute top-[80px] left-0 right-0 px-6 md:px-12">
                <nav className="text-[0.7rem] text-white/60 flex items-center gap-1.5 max-w-[860px]">
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  <span>/</span>
                  <Link href="/blog" className="hover:text-white transition-colors">Guides</Link>
                  <span>/</span>
                  <span className="text-white/40 truncate max-w-[200px]">{post!.destination}</span>
                </nav>
              </div>

              {/* Title block — bottom */}
              <div className="relative z-10 px-6 md:px-12 pb-10 pt-8 max-w-[860px]">
                <span className="inline-block bg-gold text-ink text-[0.65rem] tracking-[0.15em] uppercase font-semibold px-2.5 py-1 rounded-[1px] mb-4">
                  {post!.category}
                </span>
                <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.18] mb-5">
                  {post!.title}
                </h1>
                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  <span className="flex items-center gap-1.5 text-white/65 text-xs">
                    <Calendar size={12} strokeWidth={1.75} />
                    {post!.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-white/65 text-xs">
                    <Clock size={12} strokeWidth={1.75} />
                    {post!.readTime} read
                  </span>
                  <span className="flex items-center gap-1.5 text-white/65 text-xs">
                    <MapPin size={12} strokeWidth={1.75} />
                    {post!.destination}
                  </span>
                  <span className="flex items-center gap-1.5 text-white/65 text-xs">
                    <RefreshCw size={12} strokeWidth={1.75} />
                    Verified Apr 2026
                  </span>
                </div>
              </div>
            </div>

            {/* ── ARTICLE BODY — two-column on desktop ── */}
            <div className="max-w-[1060px] mx-auto px-6 py-12 lg:flex lg:gap-12 lg:items-start">

              {/* Left: article content */}
              <article className="flex-1 min-w-0 max-w-[680px]">
                {/* Mobile: inline collapsible TOC accordion (hidden on lg+) */}
                <StickyTOCSidebar mode="mobile" />

                {/* Excerpt / intro */}
                <p className="font-serif text-[1.15rem] text-muted font-light italic leading-[1.75] mb-8 border-l-2 border-gold/40 pl-5">
                  {post!.excerpt}
                </p>

                {/* Affiliate disclosure */}
                <AffiliateDisclosure />

                {/* Auto PDF CTA — shows only if this destination has a PDF */}
                <AutoPdfCta blogSlug={post!.slug} />

                {/* Affiliate block — hotels + tours */}
                <AffiliateBlock destination={post!.destination} />

                {/* Mid-article AdSense */}
                <AdUnit slot="2847391056" format="auto" />

                {/* Author bio */}
                <AuthorBio date={post!.date} readTime={post!.readTime} />

                {/* Related guides */}
                <RelatedGuides currentSlug={post!.slug} />

                <div className="mt-10 pt-6 border-t border-parchment-2">
                  <Link href="/blog" className="text-sm text-muted hover:text-gold transition-colors font-light">
                    ← Back to all guides
                  </Link>
                </div>
              </article>

              {/* Right: sticky sidebar TOC (hidden on mobile, visible on lg+) */}
              <StickyTOCSidebar mode="sidebar" />
            </div>
          </>
        )}

        {/* Share bar */}
        {!PostContent && (
          <div className="border-t border-parchment-2 bg-white py-5 px-6 md:px-12">
            <div className="max-w-[720px] mx-auto flex items-center justify-between flex-wrap gap-4">
              <p className="text-sm text-muted font-light">Enjoyed this guide? Share it with fellow travellers.</p>
              <ShareButton title={post!.title} slug={post!.slug} />
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        {!PostContent && (
          <div className="bg-ink py-16 px-6 md:px-12 text-center">
            <div className="max-w-[520px] mx-auto">
              <h2 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] font-light text-white mb-3">
                Ready to Visit {post!.destination}?
              </h2>
              <p className="text-sm text-white/55 font-light mb-7 leading-[1.8]">
                We&apos;ll build a personalised itinerary around your exact dates, group size, and budget — completely free.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link href="/contact" className="btn-gold inline-flex">
                  Plan My Free Trip →
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white/60 text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:border-gold/60 hover:text-gold transition-all duration-200"
                >
                  More Guides
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

// Slugs that use the fallback template (no dedicated folder yet)
// These are noindexed in generateMetadata until dedicated pages are built
// NOTE: All 14 original shells now have dedicated pages — set is empty
const SHELL_SLUGS = new Set<string>();

// Map slug → dedicated post component
// Add new posts here as you create them
function getPostContent(slug: string): (() => React.JSX.Element) | null {
  const contentMap: Record<string, () => React.JSX.Element> = {
    // "goa-3-days" has its own page at /blog/goa-3-days/page.tsx
    // This [slug] route is a fallback for future posts
  };
  return contentMap[slug] ?? null;
}

// React import needed for JSX.Element type
import React from "react";
