import type { BlogPost } from "@/data/blog";
import { getContributorPhoto } from "@/data/contributor-photos";
import { getPostBySlug } from "@/data/blog";

export interface ImageResult {
  url: string;
  alt: string;
  credit: {
    name: string;
    source: "contributor" | "unsplash" | "pexels" | "placeholder";
    instagram?: string;
    photographerUrl?: string;
  };
}

// Category fallback images — curated Unsplash URLs, no API needed
const CATEGORY_PLACEHOLDERS: Record<string, { url: string; alt: string }> = {
  beach: {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    alt: "Beautiful beach with turquoise water",
  },
  mountains: {
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    alt: "Mountain landscape with peaks and valley",
  },
  heritage: {
    url: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
    alt: "Historic fort and heritage monument",
  },
  spiritual: {
    url: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=80",
    alt: "Temple and spiritual setting",
  },
  wildlife: {
    url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80",
    alt: "Wildlife and nature scenery",
  },
  travel: {
    url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
    alt: "Travel and adventure",
  },
};

// Map common category strings to placeholder keys
function categoryToPlaceholder(category: string): string {
  const c = category.toLowerCase();
  if (c.includes("beach") || c.includes("island") || c.includes("coast") || c.includes("sea")) return "beach";
  if (c.includes("mountain") || c.includes("hill") || c.includes("trek") || c.includes("valley")) return "mountains";
  if (c.includes("heritage") || c.includes("mughal") || c.includes("fort") || c.includes("temple")) return "heritage";
  if (c.includes("spiritual") || c.includes("pilgrimage") || c.includes("holy")) return "spiritual";
  if (c.includes("wildlife") || c.includes("safari") || c.includes("national park")) return "wildlife";
  return "travel";
}

/**
 * Resolves the best available image for a blog post.
 *
 * Priority:
 * 1. Approved contributor photo for this destination
 * 2. Curated Unsplash image from blog.ts
 * 3. Parent guide's image (for derivative posts)
 * 4. Category placeholder (never shows a broken image)
 *
 * Note: Pexels images are fetched client-side by SmartImage — this resolver
 * handles the static/server side. Wire this into GeneratedPostContent or
 * any server component that renders hero images.
 */
export function resolveImage(post: BlogPost): ImageResult {
  // 1. Contributor photo
  const contributor = getContributorPhoto(post.slug);
  if (contributor) {
    return {
      url: contributor.url,
      alt: contributor.caption || `${post.destination} travel photo by ${contributor.name}`,
      credit: {
        name: contributor.name,
        source: "contributor",
        instagram: contributor.instagram,
      },
    };
  }

  // 2. Curated Unsplash image
  if (post.image && post.image.includes("unsplash.com")) {
    return {
      url: post.image,
      alt: post.imageAlt || post.title,
      credit: {
        name: "Unsplash",
        source: "unsplash",
        photographerUrl: "https://unsplash.com",
      },
    };
  }

  // 3. Parent guide image (for derivative posts — parentSlug not on BlogPost yet,
  //    but ready for when you add that field)
  const postWithParent = post as BlogPost & { parentSlug?: string };
  if (postWithParent.parentSlug) {
    const parent = getPostBySlug(postWithParent.parentSlug);
    if (parent?.image) {
      return {
        url: parent.image,
        alt: parent.imageAlt || `${post.destination} travel guide`,
        credit: {
          name: "Unsplash",
          source: "unsplash",
          photographerUrl: "https://unsplash.com",
        },
      };
    }
  }

  // 4. Category placeholder
  const placeholderKey = categoryToPlaceholder(post.category || "");
  const placeholder = CATEGORY_PLACEHOLDERS[placeholderKey] || CATEGORY_PLACEHOLDERS.travel;

  return {
    url: placeholder.url,
    alt: `${post.destination} — ${placeholder.alt}`,
    credit: {
      name: "IncredibleItinerary",
      source: "placeholder",
    },
  };
}
