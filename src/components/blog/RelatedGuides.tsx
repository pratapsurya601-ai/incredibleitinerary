"use client";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";

interface RelatedGuidesProps {
  currentSlug: string;
}

export default function RelatedGuides({ currentSlug }: RelatedGuidesProps) {
  const current = blogPosts.find((p) => p.slug === currentSlug);
  const others = blogPosts.filter((p) => p.slug !== currentSlug);

  // Prefer posts from different categories/destinations for diversity
  const diversePosts = others.sort((a, b) => {
    const aMatch = current && a.destination === current.destination ? 1 : 0;
    const bMatch = current && b.destination === current.destination ? 1 : 0;
    return aMatch - bMatch;
  });

  const related = diversePosts.slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-parchment-2">
      <p className="text-[0.7rem] tracking-[0.22em] uppercase text-gold-dark mb-2.5 block font-sans font-medium">
        More Destinations
      </p>
      <h3 className="font-serif text-2xl font-light text-ink mb-6">
        Explore other <em className="italic text-teal">free guides</em>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-2xl overflow-hidden border border-parchment-2 hover:border-gold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
          >
            <div className="relative h-36 overflow-hidden">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
              <span className="absolute top-2.5 left-2.5 text-[0.58rem] font-semibold tracking-wider uppercase bg-gold text-ink px-2 py-0.5 rounded-full">
                {post.category}
              </span>
              <p className="absolute bottom-2.5 left-3 font-serif text-white text-lg font-light">
                {post.destination}
              </p>
            </div>
            <div className="p-3 flex items-center justify-between">
              <span className="text-xs text-muted font-light">
                <span aria-hidden="true">🗓</span> {post.duration}
              </span>
              <span className="text-xs text-teal font-medium">{post.readTime} read</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
