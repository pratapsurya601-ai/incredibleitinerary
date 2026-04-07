import { blogPosts } from "@/data/blog";

// Single source of truth — never hardcode these numbers in JSX
export const HAND_WRITTEN_COUNT = blogPosts.length; // dynamic, currently 362
export const TOTAL_DESTINATIONS = 300; // destinations covered including programmatic data
export const COUNTRIES_COVERED = 30; // realistic number, not "50+" or "4"
export const PDF_COUNT = 50; // actual PDFs in private-pdfs/ (verified)
export const TOOLS_COUNT = 2; // actual working tools (trip calculator + packing list)

// Display strings — use these in JSX
export const GUIDES_DISPLAY = `${HAND_WRITTEN_COUNT}+`; // "362+"
export const DESTINATIONS_DISPLAY = `${TOTAL_DESTINATIONS}+`; // "300+"
export const COUNTRIES_DISPLAY = `${COUNTRIES_COVERED}+`; // "30+"
export const PDF_DISPLAY = `${PDF_COUNT}`; // "50"
