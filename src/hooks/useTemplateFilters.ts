"use client";

import { useMemo, useState } from "react";
import { Template } from "@/types/template";
import { useDebouncedValue } from "./useDebouncedValue";

export function useTemplateFilters(templates: Template[]) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const debouncedSearchTerm = useDebouncedValue(searchTerm, 350);
  const isSearchPending = searchTerm !== debouncedSearchTerm;

  const filteredTemplates = useMemo(() => {
    const term = debouncedSearchTerm.trim().toLowerCase();

    return templates.filter((template) => {
      const matchesCategory =
        activeCategory === "All" || template.category === activeCategory;

      if (!matchesCategory) return false;
      if (!term) return true;

      const haystack = [
        template.title,
        template.description,
        template.category,
        template.author,
        ...template.tags,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(term);
    });
  }, [templates, debouncedSearchTerm, activeCategory]);

  const resetFilters = () => {
    setSearchTerm("");
    setActiveCategory("All");
  };

  return {
    searchTerm,
    setSearchTerm,
    activeCategory,
    setActiveCategory,
    filteredTemplates,
    resetFilters,
    isFiltering: debouncedSearchTerm.trim() !== "" || activeCategory !== "All",
    isSearchPending,
  };
}
