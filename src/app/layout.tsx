import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "versel assignment",
  description:
    "versiol my version 2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-canvas text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
