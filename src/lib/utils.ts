export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatDeployCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  }
  return String(count);
}

export const gradientMap: Record<string, string> = {
  "gradient-1": "from-violet-500 via-fuchsia-500 to-orange-400",
  "gradient-2": "from-sky-500 via-blue-600 to-indigo-700",
  "gradient-3": "from-emerald-400 via-teal-500 to-cyan-600",
  "gradient-4": "from-zinc-700 via-zinc-800 to-zinc-900",
  "gradient-5": "from-rose-400 via-pink-500 to-purple-600",
  "gradient-6": "from-amber-400 via-orange-500 to-red-500",
};
