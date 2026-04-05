import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block bg-cream border border-parchment-2 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_16px_48px_rgba(22,16,8,0.1)] hover:-translate-y-1.5 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? "h-[320px]" : "h-[210px]"}`}>
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3.5 left-3.5 bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-2.5 py-1 rounded-[1px]">
          {post.category}
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[0.68rem] text-muted tracking-[0.08em] uppercase">
            {post.destination}
          </span>
          <span className="w-1 h-1 rounded-full bg-parchment-2" />
          <span className="text-[0.68rem] text-muted tracking-[0.08em] uppercase">
            {post.duration}
          </span>
          <span className="w-1 h-1 rounded-full bg-parchment-2" />
          <span className="text-[0.68rem] text-muted tracking-[0.08em] uppercase">
            {post.readTime} read
          </span>
        </div>

        <h2
          className={`font-serif font-normal text-ink leading-tight mb-3 group-hover:text-teal transition-colors duration-200 ${
            featured ? "text-[1.6rem]" : "text-[1.25rem]"
          }`}
        >
          {post.title}
        </h2>

        <p className="text-sm text-muted font-light leading-relaxed mb-5 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex gap-2 flex-wrap mb-5">
          {post.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-[0.65rem] px-2.5 py-1 rounded-full bg-parchment text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-[0.75rem] tracking-[0.1em] uppercase text-gold-dark font-medium group-hover:gap-3 transition-all duration-200">
          Read Guide <span>→</span>
        </div>
      </div>
    </Link>
  );
}
