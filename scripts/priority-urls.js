// priority-urls.js
// Outputs the 15 highest-priority pages for manual Google Search Console indexing requests.
// Run from project root: node scripts/priority-urls.js

const BASE_URL = 'https://www.incredibleitinerary.com';

const priorityUrls = [
  // Core site pages
  { label: 'Homepage',    url: BASE_URL },
  { label: 'Blog Index',  url: `${BASE_URL}/blog` },

  // Top destination posts
  { label: 'Kashmir (top destination)',         url: `${BASE_URL}/blog/kashmir-6-days` },
  { label: 'Rajasthan (top destination)',        url: `${BASE_URL}/blog/rajasthan-7-days` },
  { label: 'Goa (top destination)',              url: `${BASE_URL}/blog/goa-3-days` },
  { label: 'Kerala (top destination)',           url: `${BASE_URL}/blog/kerala-5-days` },
  { label: 'Meghalaya (top destination)',        url: `${BASE_URL}/blog/meghalaya-5-days` },
  { label: 'Golden Triangle (top destination)', url: `${BASE_URL}/blog/golden-triangle-7-days` },

  // 7 newest posts built this month
  { label: 'Wayanad (newest)',  url: `${BASE_URL}/blog/wayanad-3-days` },
  { label: 'Coorg (newest)',    url: `${BASE_URL}/blog/coorg-3-days` },
  { label: 'Kolkata (newest)',  url: `${BASE_URL}/blog/kolkata-3-days` },
  { label: 'Varkala (newest)',  url: `${BASE_URL}/blog/varkala-3-days` },
  { label: 'Chennai (newest)',  url: `${BASE_URL}/blog/chennai-2-days` },
  { label: 'Hampi (newest)',    url: `${BASE_URL}/blog/hampi-3-days` },
  { label: 'Spiti (newest)',    url: `${BASE_URL}/blog/spiti-valley-7-days` },
];

console.log('=== 15 Highest-Priority URLs for GSC Indexing Requests ===\n');

priorityUrls.forEach((entry, index) => {
  console.log(`${index + 1}. [${entry.label}]`);
  console.log(`   ${entry.url}\n`);
});

console.log(`Total: ${priorityUrls.length} URLs`);
