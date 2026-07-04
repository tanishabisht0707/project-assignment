"use client";

import { Search, X, Loader2 } from "lucide-react";
import { forwardRef } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  isPending?: boolean;
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  function SearchBar({ value, onChange, isPending }, ref) {
    return (
      <div className="relative w-full sm:max-w-sm">
        <span
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-mono text-sm text-primary"
          aria-hidden="true"
        >
          &gt;
        </span>
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="search title, tag, category, author..."
          aria-label="Search templates"
          className="w-full rounded-lg border border-line bg-surface py-2.5 pl-8 pr-9 font-mono text-[13px] text-ink placeholder:text-muted/70 focus-visible:border-primary"
        />
        <div className="absolute right-2.5 top-1/2 -translate-y-1/2">
          {isPending ? (
            <Loader2
              className="h-4 w-4 animate-spin text-primary"
              aria-hidden="true"
            />
          ) : value ? (
            <button
              type="button"
              onClick={() => onChange("")}
              aria-label="Clear search"
              className="rounded-full p-0.5 text-muted hover:bg-canvas hover:text-ink"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          ) : (
            <Search className="h-4 w-4 text-muted" aria-hidden="true" />
          )}
        </div>
      </div>
    );
  }
);
