export function TemplateSkeleton() {
  return (
    <div
      className="overflow-hidden rounded-xl border border-line bg-surface"
      aria-hidden="true"
    >
      <div className="h-36 animate-pulse bg-canvas" />
      <div className="space-y-3 p-4">
        <div className="h-3 w-16 animate-pulse rounded bg-canvas" />
        <div className="h-4 w-3/4 animate-pulse rounded bg-canvas" />
        <div className="h-3 w-full animate-pulse rounded bg-canvas" />
        <div className="h-3 w-2/3 animate-pulse rounded bg-canvas" />
        <div className="flex gap-1.5 pt-1">
          <div className="h-5 w-14 animate-pulse rounded bg-canvas" />
          <div className="h-5 w-14 animate-pulse rounded bg-canvas" />
        </div>
        <div className="h-8 w-full animate-pulse rounded-lg bg-canvas" />
      </div>
    </div>
  );
}

export function TemplateSkeletonGrid({ count = 8 }: { count?: number }) {
  return (
    <div
      role="status"
      aria-label="Loading templates"
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
    >
      {Array.from({ length: count }).map((_, i) => (
        <TemplateSkeleton key={i} />
      ))}
    </div>
  );
}
