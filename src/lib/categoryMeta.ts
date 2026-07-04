import { Layers, Sparkles, ShoppingBag, UserRound, Newspaper } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Category } from "@/types/template";

interface CategoryMeta {
  icon: LucideIcon;
  dot: string;
  text: string;
}

export const categoryMeta: Record<Exclude<Category, "All">, CategoryMeta> = {
  SaaS: { icon: Layers, dot: "bg-primary", text: "text-primary" },
  AI: { icon: Sparkles, dot: "bg-fuchsia-500", text: "text-fuchsia-600" },
  "E-commerce": { icon: ShoppingBag, dot: "bg-signal", text: "text-signal" },
  Portfolio: { icon: UserRound, dot: "bg-zinc-500", text: "text-zinc-600" },
  Blog: { icon: Newspaper, dot: "bg-amber-500", text: "text-amber-600" },
};

export const difficultyStyles: Record<string, string> = {
  Beginner: "bg-signal-subtle text-signal",
  Intermediate: "bg-amber-50 text-amber-700",
  Advanced: "bg-rose-50 text-rose-600",
};
