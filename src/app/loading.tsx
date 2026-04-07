export default function Loading() {
  return (
    <div className="min-h-screen bg-cream pt-[72px] animate-pulse">
      {/* Hero skeleton */}
      <div className="h-[55vh] min-h-[320px] bg-ink/10" />

      {/* Content skeleton */}
      <div className="max-w-[720px] mx-auto px-6 py-12 space-y-4">
        <div className="h-3 bg-ink/8 rounded w-1/4" />
        <div className="h-8 bg-ink/8 rounded w-3/4" />
        <div className="h-4 bg-ink/8 rounded w-full" />
        <div className="h-4 bg-ink/8 rounded w-5/6" />
        <div className="h-4 bg-ink/8 rounded w-4/6" />
        <div className="mt-8 h-4 bg-ink/8 rounded w-full" />
        <div className="h-4 bg-ink/8 rounded w-11/12" />
        <div className="h-4 bg-ink/8 rounded w-5/6" />
      </div>
    </div>
  );
}
