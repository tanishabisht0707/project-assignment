"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { SearchBar } from "@/components/filters/SearchBar";
import { FilterTabs } from "@/components/filters/FilterTabs";
import { FeaturedTemplates } from "@/components/templates/FeaturedTemplates";
import { TemplateGrid } from "@/components/templates/TemplateGrid";
import { TemplateSkeletonGrid } from "@/components/templates/TemplateSkeleton";
import { PreviewModal } from "@/components/templates/PreviewModal";
import { useTemplateFilters } from "@/hooks/useTemplateFilters";
import { templates, categories } from "@/data/templates";
import { Template } from "@/types/template";

export default function Home() {
  const {
    searchTerm,
    setSearchTerm,
    activeCategory,
    setActiveCategory,
    filteredTemplates,
    resetFilters,
    isSearchPending,
  } = useTemplateFilters(templates);

  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Simulates the initial fetch — this is what would gate a real API call.
  useEffect(() => {
    const t = setTimeout(() => setIsInitialLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  // Cmd/Ctrl+K focuses search, matching the navbar's ⌘K affordance.
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
        searchInputRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: templates.length };
    for (const category of categories) {
      if (category === "All") continue;
      map[category] = templates.filter((t) => t.category === category).length;
    }
    return map;
  }, []);

  const showFeatured = !searchTerm && activeCategory === "All";
  const showSkeleton = isInitialLoading || isSearchPending;

  return (
    <>
      <Navbar onSearchClick={() => searchInputRef.current?.focus()} />
      <main id="main-content">
        <Hero />

        <section
          id="templates"
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
        >
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <SearchBar
              ref={searchInputRef}
              value={searchTerm}
              onChange={setSearchTerm}
              isPending={isSearchPending}
            />
            <FilterTabs
              categories={categories}
              active={activeCategory}
              onChange={setActiveCategory}
              counts={counts}
            />
          </div>

          {showFeatured && !isInitialLoading && (
            <FeaturedTemplates templates={templates} onPreview={setPreviewTemplate} />
          )}

          <h2 className="mb-4 font-display text-lg font-semibold text-ink">
            {showFeatured
              ? "All templates"
              : `${filteredTemplates.length} template${
                  filteredTemplates.length === 1 ? "" : "s"
                } found`}
          </h2>

          {showSkeleton ? (
            <TemplateSkeletonGrid count={8} />
          ) : (
            <TemplateGrid
              templates={filteredTemplates}
              searchTerm={searchTerm}
              onReset={resetFilters}
              onPreview={setPreviewTemplate}
            />
          )}
        </section>
      </main>
      <Footer />

      <PreviewModal template={previewTemplate} onClose={() => setPreviewTemplate(null)} />
    </>
  );
}
