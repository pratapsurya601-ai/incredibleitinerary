/**
 * DEPRECATED — This file is no longer used for indexing decisions.
 *
 * Previous behaviour: only 8 international destinations + all India posts were indexed.
 * Current behaviour (as of 2026-04): ALL generated posts (from generated-posts.ts)
 * are noindexed regardless of country or destination. Only hand-written posts
 * from blog.ts are indexed. This is enforced directly in
 * src/app/blog/[slug]/page.tsx via `robots: { index: false, follow: true }` on
 * every generated post branch — no destination-based exceptions.
 *
 * This export is retained to avoid breaking any imports that may still reference
 * it elsewhere, but it is not consulted by any routing or metadata logic.
 */
export const INDEXED_INTERNATIONAL_DESTINATIONS = new Set<string>();
