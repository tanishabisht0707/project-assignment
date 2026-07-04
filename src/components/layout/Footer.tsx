export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 font-mono text-xs text-muted sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} templates — built for review.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-ink">GitHub</a>
          <a href="#" className="hover:text-ink">Docs</a>
          <a href="#" className="hover:text-ink">Support</a>
        </div>
      </div>
    </footer>
  );
}
