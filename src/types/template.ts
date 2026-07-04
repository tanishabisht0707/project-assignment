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
  id: string;
  slug: string;

  title: string;
  description: string;
  longDescription: string;

  category: Exclude<Category, "All">;
  tags: string[];

  featured: boolean;
  difficulty: Difficulty;

  image: string;
  heroImage: string;
  gallery: string[];

  author: string;
  deploys: number;

  demoUrl: string;
  repoUrl: string;

  features: string[];
  techStack: string[];
}