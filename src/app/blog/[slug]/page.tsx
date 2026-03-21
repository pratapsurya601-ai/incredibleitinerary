import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/data/blog";
import Footer from "@/components/layout/Footer";

interface Props {
  params: { slug: string };
}

// Generate static params for all posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// Dynamic metadata per post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — IncredibleItinerary`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  // Redirect to the dedicated page for known posts
  // Each post has its own Client component for full interactivity
  const PostContent = getPostContent(params.slug);

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-[200] h-[72px] flex items-center justify-between px-6 md:px-12 bg-cream/97 backdrop-blur-md shadow-[0_1px_0_rgba(22,16,8,0.07)]">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-serif text-2xl font-light text-ink tracking-wide">
            Incredible<span className="text-gold">Itinerary</span>
          </span>
          <span className="text-[0.58rem] tracking-[0.18em] uppercase text-muted">
            Curated Journeys Across India
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#destinations" className="text-[0.73rem] tracking-[0.13em] uppercase text-muted hover:text-gold transition-colors">Destinations</Link>
          <Link href="/#packages" className="text-[0.73rem] tracking-[0.13em] uppercase text-muted hover:text-gold transition-colors">Packages</Link>
          <Link href="/blog" className="text-[0.73rem] tracking-[0.13em] uppercase text-gold font-medium border-b border-gold pb-px">Blog</Link>
          <Link
            href="/"
            className="bg-gold text-ink px-5 py-2.5 text-[0.73rem] tracking-[0.1em] uppercase font-medium rounded-[1px] hover:bg-gold-dark hover:text-white transition-all duration-300"
          >
            Plan My Trip ↗
          </Link>
        </div>
      </div>

      <main className="pt-[72px] bg-cream min-h-screen">
        {PostContent ? (
          <PostContent />
        ) : (
          // Fallback for future posts not yet built
          <>
            <div className="relative h-[420px] overflow-hidden">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 max-w-[860px]">
                <span className="inline-block bg-gold text-ink text-[0.62rem] tracking-[0.12em] uppercase font-medium px-2.5 py-1 rounded-[1px] mb-4">
                  {post.category}
                </span>
                <h1 className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-light text-white leading-tight">
                  {post.title}
                </h1>
                <p className="text-white/60 text-sm mt-3">
                  {post.date} · {post.readTime} read
                </p>
              </div>
            </div>

            <div className="max-w-[780px] mx-auto px-6 py-16 text-center">
              <p className="font-serif text-xl text-muted font-light italic mb-8">
                {post.excerpt}
              </p>
              <Link href="/blog" className="btn-gold inline-flex">
                ← Back to Blog
              </Link>
            </div>
          </>
        )}

        {/* Bottom CTA */}
        <div className="bg-parchment border-t border-parchment-2 py-16 px-6 md:px-12 text-center">
          <div className="max-w-[520px] mx-auto">
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] font-light text-ink mb-3">
              Ready to Visit {post.destination}?
            </h2>
            <p className="text-sm text-muted font-light mb-7 leading-[1.8]">
              We&apos;ll build a personalised itinerary around your exact dates, group size, and budget — completely free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/" className="btn-gold inline-flex">
                Plan My Free Trip →
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-parchment-2 text-muted text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:border-gold hover:text-gold transition-all duration-200"
              >
                More Guides
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

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
