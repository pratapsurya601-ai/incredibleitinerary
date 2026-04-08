export type GeneratedPostType = "best-time" | "cost-breakdown" | "how-to-reach" | "travel-tips";

export interface GeneratedPost {
  slug: string;
  title: string;
  description: string;
  type: GeneratedPostType;
  parentSlug: string;
  destination: string;
  country: string;
  duration: string;
  category: string;
  image: string;
  publishDate: string;
  generated: true;
}

export const generatedPosts: GeneratedPost[] = [];

export function getGeneratedPostBySlug(slug: string): GeneratedPost | undefined {
  return generatedPosts.find((p) => p.slug === slug);
}

export function getPublishedGeneratedPosts(): GeneratedPost[] {
  return [];
}

export function getGeneratedPostsByParent(parentSlug: string): GeneratedPost[] {
  return generatedPosts.filter((p) => p.parentSlug === parentSlug);
}
