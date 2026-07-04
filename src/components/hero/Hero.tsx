import { HeroTerminal } from "./HeroTerminal";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line py-16 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(79,61,255,0.12),transparent)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            120+ production-ready templates
          </span>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Ship the boring 80%,
            <br />
            build the interesting 20%.
          </h1>

          <p className="mt-4 text-lg text-muted">
            Production-ready starters for SaaS, AI, e-commerce and more —
            deploy in one command instead of scaffolding from zero.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#templates"
              className="w-full rounded-lg bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary sm:w-auto"
            >
              Browse templates
            </a>
            <a
              href="#"
              className="w-full rounded-lg border border-line bg-surface px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-primary/40 sm:w-auto"
            >
              Submit your template
            </a>
          </div>
        </div>

        <HeroTerminal />
      </div>
    </section>
  );
}
