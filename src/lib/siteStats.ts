import { blogPosts } from "@/data/blog";

// Single source of truth — never hardcode these numbers in JSX
export const HAND_WRITTEN_COUNT = blogPosts.length; // dynamic, currently 362
export const INDIA_GUIDES_COUNT = 60; // India guides written from personal research/trips
export const TOTAL_DESTINATIONS = 300; // destinations covered including programmatic data
export const COUNTRIES_COVERED = 30; // realistic number, not "50+" or "4"
export const PDF_COUNT = 2; // actual PDFs available right now
export const TOOLS_COUNT = 2; // actual working tools (trip calculator + packing list)

// Display strings — use these in JSX
export const GUIDES_DISPLAY = `${INDIA_GUIDES_COUNT}+`; // "60+"
export const DESTINATIONS_DISPLAY = `${TOTAL_DESTINATIONS}+`; // "300+"
export const COUNTRIES_DISPLAY = `${COUNTRIES_COVERED}+`; // "30+"
