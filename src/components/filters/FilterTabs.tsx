"use client";

import { cn } from "@/lib/utils";

interface FilterTabsProps {
  categories: readonly string[];
  active: string;
  onChange: (category: string) => void;
  counts: Record<string, number>;
}

export function FilterTabs({
  categories,
  active,
  onChange,
  counts,
}: FilterTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter templates by category"
      className="chip-scroll flex gap-2 overflow-x-auto pb-1"
    >
      {categories.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category)}
            className={cn(
              "flex shrink-0 items-center gap-1.5 rounded-lg border px-3.5 py-1.5 text-sm font-medium transition-colors",
              isActive
                ? "border-ink bg-ink text-white"
                : "border-line bg-surface text-muted hover:border-primary/40 hover:text-ink"
            )}
          >
            {category}
            <span
              className={cn(
                "rounded px-1.5 py-0.5 font-mono text-[10px]",
                isActive ? "bg-white/15 text-white" : "bg-canvas text-muted"
              )}
            >
              {counts[category] ?? 0}
            </span>
          </button>
        );
      })}
    </div>
  );
}
