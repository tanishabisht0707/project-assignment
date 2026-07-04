export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type Category =
  | "All"
  | "SaaS"
  | "AI"
  | "E-commerce"
  | "Portfolio"
  | "Blog"
  ;

export interface Template {
  // Basic identifiers
  id: string;
  slug: string;

  // Main content
  title: string;
  description: string;
  longDescription: string;

  // Classification
  category: Exclude<Category, "All">;
  tags: string[];

  // Status
  featured: boolean;
  difficulty: Difficulty;

  // Media
  image: string;
  heroImage: string;
  gallery: string[];

  // Author + stats
  author: string;
  deploys: number;

  // Links
  demoUrl: string;
  repoUrl: string;

  // Product data
  features: string[];
  techStack: string[];
}