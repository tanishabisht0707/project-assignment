"use client";

import { useEffect, useRef } from "react";
import { X, ExternalLink } from "lucide-react";
import { Template } from "@/types/template";
import { cn, gradientMap } from "@/lib/utils";
import { categoryMeta, difficultyStyles } from "@/lib/categoryMeta";

interface PreviewModalProps {
  template: Template | null;
  onClose: () => void;
}

export function PreviewModal({ template, onClose }: PreviewModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!template) return;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [template, onClose]);

  if (!template) return null;
  const meta = categoryMeta[template.category];
  const CategoryIcon = meta.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="preview-title"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg overflow-hidden rounded-2xl bg-surface shadow-2xl"
      >
        {/* <div
          className={cn(
            "relative flex h-44 items-center justify-center bg-gradient-to-br",
            gradientMap[template.image]
          )}
        >
          <CategoryIcon className="h-10 w-10 text-white/25" strokeWidth={1.5} aria-hidden="true" />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="absolute right-3 top-3 rounded-full bg-white/90 p-1.5 text-ink hover:bg-white"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div> */}

        <div className="p-6">
          <div className="flex items-center gap-1.5">
            <span className={cn("h-1.5 w-1.5 rounded-full", meta.dot)} />
            <span className={cn("font-mono text-[11px] uppercase tracking-wide", meta.text)}>
              {template.category}
            </span>
          </div>
          <h2 id="preview-title" className="mt-1.5 font-display text-xl font-semibold text-ink">
            {template.title}
          </h2>
          <p className="mt-2 text-sm text-muted">{template.description}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {template.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-canvas px-2.5 py-1 font-mono text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <dl className="mt-5 grid grid-cols-2 gap-3 font-mono text-xs">
            <div>
              <dt className="text-muted">difficulty</dt>
              <dd className={cn("mt-0.5 inline-block rounded px-1.5 py-0.5 font-medium uppercase", difficultyStyles[template.difficulty])}>
                {template.difficulty}
              </dd>
            </div>
            <div>
              <dt className="text-muted">author</dt>
              <dd className="mt-0.5 font-medium text-ink">~/{template.author}</dd>
            </div>
            <div>
              <dt className="text-muted">deploys</dt>
              <dd className="mt-0.5 font-medium text-ink">{template.deploys.toLocaleString()}</dd>
            </div>
            <div>
              <dt className="text-muted">id</dt>
              <dd className="mt-0.5 font-medium text-ink">#{template.id.padStart(4, "0")}</dd>
            </div>
          </dl>

          <div className="mt-6 flex gap-3">
            <a
              href={template.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-white hover:bg-primary"
            >
              Live demo <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a
              href={template.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center rounded-lg border border-line px-4 py-2.5 text-sm font-medium text-ink hover:border-primary/40"
            >
              View repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
