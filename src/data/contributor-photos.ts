export interface ContributorPhoto {
  id: string;
  destination: string;   // matches blog post slug
  url: string;           // Cloudinary URL or /public/images/contributors/ path
  caption: string;
  name: string;
  instagram?: string;    // @handle
  email: string;
  approved: boolean;
  submittedAt: string;   // ISO date string
}

// Start empty — add entries manually when you receive and approve photos:
//
// How to add a photo after someone emails you:
// 1. Download the best photo they sent
// 2. Upload to /public/images/contributors/[slug]-[name].jpg
//    OR upload to Cloudinary and use that URL
// 3. Add an entry below with approved: true
// 4. Deploy — the blog post will automatically show their photo with credit
//
// Example entry:
// {
//   id: "cp-001",
//   destination: "kashmir-6-days",
//   url: "/images/contributors/kashmir-priya-dal-lake.jpg",
//   caption: "Dal Lake at sunrise from our houseboat",
//   name: "Priya Sharma",
//   instagram: "@priya.travels",
//   email: "priya@example.com",
//   approved: true,
//   submittedAt: "2026-04-15",
// },

export const contributorPhotos: ContributorPhoto[] = [];

export function getContributorPhoto(slug: string): ContributorPhoto | undefined {
  return contributorPhotos.find((p) => p.destination === slug && p.approved);
}

export function getAllApprovedPhotos(): ContributorPhoto[] {
  return contributorPhotos.filter((p) => p.approved);
}
