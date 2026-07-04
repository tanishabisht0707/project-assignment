"use client";

import { useEffect, useState } from "react";

const COMMANDS = [
  { cmd: "npx create-app --template", highlight: "ai-chatbot" },
  { cmd: "npx create-app --template", highlight: "saas-starter" },
  { cmd: "npx create-app --template", highlight: "commerce-storefront" },
];

export function HeroTerminal() {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing"
  );

  useEffect(() => {
    const full = COMMANDS[index].highlight;

    if (phase === "typing") {
      if (typed.length < full.length) {
        const t = setTimeout(() => setTyped(full.slice(0, typed.length + 1)), 55);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("pausing"), 1400);
      return () => clearTimeout(t);
    }

    if (phase === "pausing") {
      const t = setTimeout(() => setPhase("deleting"), 300);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (typed.length > 0) {
        const t = setTimeout(() => setTyped(typed.slice(0, -1)), 25);
        return () => clearTimeout(t);
      }
      setIndex((i) => (i + 1) % COMMANDS.length);
      setPhase("typing");
    }
  }, [typed, phase, index]);

  return (
    <div
      className="mx-auto w-full max-w-lg overflow-hidden rounded-xl border border-line bg-ink text-left shadow-card-hover"
      role="img"
      aria-label={`Terminal showing command: npx create-app --template ${COMMANDS[index].highlight}`}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="ml-2 font-mono text-[11px] text-white/40">
          templates.sh
        </span>
      </div>
      <div className="px-5 py-6 font-mono text-sm">
        <span className="text-signal">➜</span>{" "}
        <span className="text-white/50">~</span>{" "}
        <span className="text-white">{COMMANDS[index].cmd}</span>{" "}
        <span className="text-primary-subtle text-[#B7AEFF]">{typed}</span>
        <span
          className="ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 animate-blink bg-white/80 align-middle"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
