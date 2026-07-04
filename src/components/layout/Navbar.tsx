"use client";

import { Terminal } from "lucide-react";

export function Navbar({ onSearchClick }: { onSearchClick?: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a
          href="#"
          className="flex items-center gap-2 font-display text-[15px] font-semibold tracking-tight text-ink"
          aria-label="Templates home"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-ink text-canvas">
            <Terminal className="h-4 w-4" aria-hidden="true" />
          </span>
          templates
        </a>

        <button
          type="button"
          onClick={onSearchClick}
          className="hidden items-center gap-3 rounded-lg border border-line bg-surface px-3 py-1.5 text-sm text-muted transition-colors hover:border-primary/40 hover:text-ink sm:flex"
          aria-label="Focus search (Command K)"
        >
          <span className="font-mono text-xs">search templates</span>
          <kbd className="rounded border border-line bg-canvas px-1.5 py-0.5 font-mono text-[10px] font-medium text-muted">
            ⌘K
          </kbd>
        </button>

        <a
          href="#"
          className="rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary"
        >
          Submit template
        </a>
      </nav>
    </header>
  );
}
