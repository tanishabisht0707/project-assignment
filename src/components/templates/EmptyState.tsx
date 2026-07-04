import { SearchX } from "lucide-react";

interface EmptyStateProps {
  searchTerm: string;
  onReset: () => void;
}

export function EmptyState({ searchTerm, onReset }: EmptyStateProps) {
  return (
    <div
      role="status"
      className="flex flex-col items-center justify-center rounded-xl border border-dashed border-line py-16 text-center"
    >
      <div className="rounded-full bg-canvas p-3">
        <SearchX className="h-6 w-6 text-muted" aria-hidden="true" />
      </div>
      <h3 className="mt-4 font-display text-base font-semibold text-ink">
        No templates found
      </h3>
      <p className="mt-1 max-w-sm text-sm text-muted">
        {searchTerm
          ? `Nothing matches "${searchTerm}". Try a different term or reset your filters.`
          : "No templates match this filter. Try another category."}
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-5 rounded-lg bg-ink px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-primary"
      >
        Reset filters
      </button>
    </div>
  );
}
