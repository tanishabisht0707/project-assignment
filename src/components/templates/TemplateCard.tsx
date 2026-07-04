"use client";

import { useState } from "react";
import { Bookmark, Copy, Check } from "lucide-react";
import { Template } from "@/types/template";
import { formatDeployCount } from "@/lib/utils";
import Link from "next/link";

interface TemplateCardProps {
  template: Template;
  onPreview: (template: Template) => void;
}

export function TemplateCard({
  template,
  onPreview,
}: TemplateCardProps) {
  const [bookmarked, setBookmarked] = useState(() => {
    if (typeof window === "undefined") return false;

    const saved = JSON.parse(
      localStorage.getItem("bookmarkedTemplates") || "[]"
    );

    return saved.some((item: Template) => item.id === template.id);
  });

  const [copied, setCopied] = useState(false);

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const existing = JSON.parse(
      localStorage.getItem("bookmarkedTemplates") || "[]"
    );

    let updated = [];

    if (bookmarked) {
      updated = existing.filter(
        (item: Template) => item.id !== template.id
      );
    } else {
      updated = [...existing, template];
    }

    localStorage.setItem(
      "bookmarkedTemplates",
      JSON.stringify(updated)
    );

    setBookmarked(!bookmarked);
  };

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    await navigator.clipboard.writeText(
      `${window.location.origin}/template/${template.slug}`
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Link href={`/template/${template.slug}`}>
      <article className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0d0d0d] transition-all duration-500 hover:border-white/20 hover:shadow-[0_20px_80px_rgba(139,92,246,0.18)]">
        
        {/* Top */}
        <button
          onClick={(e) => {
            e.preventDefault();
            onPreview(template);
          }}
          className="relative h-72 w-full overflow-visible rounded-t-[30px]"
        >
          {/* Glow */}
          <div className="absolute left-1/2 top-16 h-44 w-44 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[100px] opacity-40 transition-all duration-700 group-hover:scale-125 group-hover:opacity-70" />

          {/* Image */}
          <div className="absolute left-1/2 top-20 -translate-x-1/2">
            <div
              className="relative h-52 w-[330px] overflow-hidden rounded-[26px] border border-white/10 bg-[#111] shadow-[0_30px_60px_rgba(0,0,0,0.7)] transition-all duration-700
              [transform:perspective(1400px)_rotateX(18deg)_rotateY(-12deg)_translateY(40px)]
              group-hover:[transform:perspective(1400px)_rotateX(10deg)_rotateY(0deg)_translateY(-15px)_scale(1.04)]"
            >
              <img
                src={template.image}
                alt={template.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Shine */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            </div>
          </div>

          {/* Featured */}
          {template.featured && (
            <span className="absolute left-5 top-5 z-20 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-xl">
              Featured
            </span>
          )}

          {/* Difficulty */}
          <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] uppercase text-white/60 backdrop-blur-xl">
            {template.difficulty}
          </span>
        </button>

        {/* Content */}
        <div className="relative z-10 space-y-5 px-5 pb-5 pt-12">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-violet-300/70">
              {template.category}
            </span>

            <h3 className="mt-2 text-2xl font-semibold text-white transition-colors group-hover:text-violet-300">
              {template.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-white/50 line-clamp-2">
              {template.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {template.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase text-white/60 backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-white/10 pt-4">
            <span className="font-mono text-sm text-white/40">
              {formatDeployCount(template.deploys)} DEPLOYS
            </span>

            <div className="flex gap-2">
              {/* Bookmark */}
              <button
                onClick={handleBookmark}
                className="rounded-xl p-2 text-white/30 transition-all hover:bg-white/5 hover:text-white"
              >
                <Bookmark
                  size={15}
                  fill={bookmarked ? "white" : "none"}
                />
              </button>

              {/* Copy */}
              <button
                onClick={handleCopy}
                className="rounded-xl p-2 text-white/30 transition-all hover:bg-white/5 hover:text-white"
              >
                {copied ? (
                  <Check size={15} className="text-green-400" />
                ) : (
                  <Copy size={15} />
                )}
              </button>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}