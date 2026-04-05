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
import { BlogPostSchema } from "@/components/SchemaMarkup";
import GeneratedPostContent from "./GeneratedPostContent";

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
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (post) {
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

  const generatedPost = getGeneratedPostBySlug(params.slug);
  if (generatedPost) {
    return {
      title: `${generatedPost.title} — IncredibleItinerary`,
      description: generatedPost.description,
      alternates: { canonical: `https://www.incredibleitinerary.com/blog/${generatedPost.slug}` },
      openGraph: {
        title: generatedPost.title,
        description: generatedPost.description,
        images: [{ url: generatedPost.image, alt: generatedPost.destination }],
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
    return (
      <>
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
            <div className="relative h-[420px] overflow-hidden">
              <Image
                src={post!.image}
                alt={post!.imageAlt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 max-w-[860px]">
                <span className="inline-block bg-gold text-ink text-[0.62rem] tracking-[0.12em] uppercase font-medium px-2.5 py-1 rounded-[1px] mb-4">
                  {post!.category}
                </span>
                <h1 className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-light text-white leading-tight">
                  {post!.title}
                </h1>
                <p className="text-white/60 text-sm mt-3">
                  {post!.date} · {post!.readTime} read
                </p>
              </div>
            </div>

            <div className="max-w-[780px] mx-auto px-6 py-16 text-center">
              <p className="font-serif text-xl text-muted font-light italic mb-8">
                {post!.excerpt}
              </p>
              <Link href="/blog" className="btn-gold inline-flex">
                ← Back to Blog
              </Link>
            </div>
          </>
        )}

        {/* Related Guides */}
        {!PostContent && (() => {
          const related = getRelatedPosts(post!.slug, post!);
          if (!related.length) return null;
          return (
            <div className="bg-parchment border-t border-parchment-2 py-14 px-6 md:px-12">
              <div className="max-w-[860px] mx-auto">
                <p className="text-[0.65rem] tracking-[0.18em] uppercase text-gold font-medium mb-2">You Might Also Like</p>
                <h2 className="font-serif text-xl font-light text-ink mb-6">Related Destination Guides</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="group block rounded-xl overflow-hidden border border-parchment-2 hover:border-gold hover:shadow-md transition-all duration-300 bg-white"
                    >
                      <div className="relative h-28 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={r.image} alt={r.imageAlt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                        <p className="absolute bottom-2 left-3 font-serif text-sm text-white font-light">{r.destination}</p>
                      </div>
                      <div className="p-3">
                        <p className="text-[0.65rem] text-muted font-light">{r.duration} · {r.category}</p>
                        <p className="text-xs text-gold-dark font-medium mt-1 group-hover:text-teal transition-colors">Read guide →</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}

        {/* Share bar */}
        <div className="border-t border-parchment-2 bg-white py-5 px-6 md:px-12">
          <div className="max-w-[780px] mx-auto flex items-center justify-between flex-wrap gap-4">
            <p className="text-sm text-muted font-light">Enjoyed this guide? Share it with fellow travellers.</p>
            <ShareButton title={post!.title} slug={post!.slug} />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-parchment border-t border-parchment-2 py-16 px-6 md:px-12 text-center">
          <div className="max-w-[520px] mx-auto">
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.4rem)] font-light text-ink mb-3">
              Ready to Visit {post!.destination}?
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
import type { BlogPost } from "@/data/blog";

/** Score-based related post finder — same country > same category > shared tags */
function getRelatedPosts(currentSlug: string, current: BlogPost, count = 4): BlogPost[] {
  return blogPosts
    .filter((p) => p.slug !== currentSlug)
    .map((p) => {
      let score = 0;
      if (p.country === current.country) score += 3;
      if (p.category === current.category) score += 2;
      const sharedTags = p.tags.filter((t) => current.tags.includes(t)).length;
      score += sharedTags;
      return { post: p, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((x) => x.post);
}
