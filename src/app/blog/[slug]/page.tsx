import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/data/blog";
import Footer from "@/components/layout/Footer";
import BlogSlugNav from "./BlogSlugNav";
import ShareButton from "@/components/ui/ShareButton";
import { BlogPostSchema } from "@/components/SchemaMarkup";

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
      {/* Schema for posts using this fallback template (no dedicated page.tsx) */}
      {!PostContent && <BlogPostSchema post={post} />}
      <BlogSlugNav />

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

        {/* Share bar */}
        <div className="border-t border-parchment-2 bg-white py-5 px-6 md:px-12">
          <div className="max-w-[780px] mx-auto flex items-center justify-between flex-wrap gap-4">
            <p className="text-sm text-muted font-light">Enjoyed this guide? Share it with fellow travellers.</p>
            <ShareButton title={post.title} slug={post.slug} />
          </div>
        </div>

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
