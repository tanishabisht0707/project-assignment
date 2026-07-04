# Eshkon Frontend Assessment — Templates Page Redesign & Product Audit

A production-focused redesign of the core browsing experience from Vercel Templates using Next.js (App Router), React, TypeScript, Tailwind CSS, and reusable component architecture.

---

## Overview

This project is an improved Version 2 of the Vercel Templates page, built as part of the Eshkon Frontend Engineer Assessment.

The goal was not to clone the full product, but to:

- Analyze the live product experience
- Identify UX, UI, and frontend improvement opportunities
- Rebuild the most important browsing flows using scalable frontend engineering practices

The implemented experience focuses on the core user journey:

- Discover templates
- Search templates
- Filter templates
- Preview templates
- Explore template detail pages

---

## Features Implemented

### Core UI

- Hero section
- Navbar
- Footer
- Featured templates section
- Templates grid
- Category-based filtering
- Search bar
- Preview modal

---

### Frontend Functionality

- Dynamic routing using Next.js App Router
- Debounced search (350ms)
- Skeleton loading states
- Empty state handling
- Responsive layout for desktop, tablet, and mobile

---

### Accessibility

- Semantic HTML
- Keyboard-friendly navigation
- Focus-visible states
- Proper aria-labels
- Accessible modal support
- Screen-reader friendly result updates

---

## Tech Stack

Built using:

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

---

## Getting Started

Install dependencies:

```bash
npm install
```

### Project Structure 

├── src/
│   ├── app/
│   │   ├── template/
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Template detail route
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx              # Main homepage route
│   ├── components/
│   │   ├── filters/              # Filter components
│   │   ├── hero/                 # Hero section and terminal UI
│   │   ├── layout/               # Global layout components
│   │   └── templates/            # Template-specific UI components
│   │       ├── EmptyState.tsx
│   │       ├── FeaturedTemplates.tsx
│   │       ├── PreviewModal.tsx
│   │       ├── TemplateCard.tsx
│   │       ├── TemplateGrid.tsx
│   │       └── TemplateSkeleton.tsx
│   ├── data/
│   │   └── templates.ts          # Main template data source
│   ├── hooks/                    # Custom application hooks
│   │   ├── useDebouncedValue.ts
│   │   └── useTemplateFilters.ts
│   ├── lib/                      # Utility functions and shared logic
│   └── types/
│       └── template.ts           # TypeScript interfaces and types
├── public/                       # Static assets (image)
├── next.config.js
├── package.json
└── tailwind.config.js           