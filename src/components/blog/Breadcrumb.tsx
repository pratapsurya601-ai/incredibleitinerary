import Link from "next/link";

interface BreadcrumbProps {
  destination: string;
}

export default function Breadcrumb({ destination }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-1.5 text-xs text-muted font-light">
        <li>
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
        </li>
        <li aria-hidden="true" className="text-muted/40">›</li>
        <li>
          <Link href="/blog" className="hover:text-gold transition-colors">Travel Guides</Link>
        </li>
        <li aria-hidden="true" className="text-muted/40">›</li>
        <li className="text-ink font-medium">{destination}</li>
      </ol>
    </nav>
  );
}
