// top-urls.js
// Outputs the top 30 blog post URLs for manual Google Search Console indexing requests.
// Run from project root: node scripts/top-urls.js

const BASE_URL = 'https://www.incredibleitinerary.com';

// Top 30 slugs from src/data/blog.ts (newest first)
const top30Slugs = [
  'honeymoon-under-50000',
  'maldives-trip-cost-couple',
  'char-dham-yatra-guide',
  'yamunotri-temple-guide',
  'badrinath-temple-guide',
  'kedarnath-trek-guide',
  'gangotri-glacier-trek',
  'kashmir-6-days',
  'golden-triangle-7-days',
  'rajasthan-7-days',
  'kerala-5-days',
  'goa-3-days',
  'varanasi-3-days',
  'andaman-5-days',
  'leh-ladakh-7-days',
  'manali-5-days',
  'coorg-3-days',
  'rishikesh-haridwar-3-days',
  'jibhi-tirthan-valley-3-days',
  'hampi-3-days',
  'spiti-valley-7-days',
  'meghalaya-5-days',
  'sikkim-6-days',
  'pondicherry-3-days',
  'gujarat-7-days',
  'amritsar-2-days',
  'dharamshala-3-days',
  'udaipur-3-days',
  'jaipur-3-days',
  'ooty-3-days',
];

console.log('=== Top 30 URLs for GSC Indexing Requests ===\n');

top30Slugs.forEach((slug, index) => {
  console.log(`${index + 1}. ${BASE_URL}/blog/${slug}`);
});

console.log(`\nTotal: ${top30Slugs.length} URLs`);
