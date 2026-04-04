import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getComparisonBySlug,
  getAllComparisonSlugs,
} from "@/data/comparisons";
import ComparisonClient from "@/components/ComparisonClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) return {};

  const url = `https://www.incredibleitinerary.com/compare/${slug}`;

  return {
    title: `${comparison.title} | IncredibleItinerary`,
    description: comparison.description,
    alternates: { canonical: url },
    openGraph: {
      title: comparison.title,
      description: comparison.description,
      url,
      siteName: "IncredibleItinerary",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: comparison.title,
      description: comparison.description,
    },
  };
}

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);
  if (!comparison) notFound();

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.incredibleitinerary.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Compare Destinations",
        item: "https://www.incredibleitinerary.com/compare",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: comparison.title,
        item: `https://www.incredibleitinerary.com/compare/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <ComparisonClient comparison={comparison} />
    </>
  );
}
