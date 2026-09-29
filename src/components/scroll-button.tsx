"use client";

import type { ReactNode } from "react";

export function ScrollButton({ to, children, className = "", ariaCurrent, onActivate }: { to: string; children: ReactNode; className?: string; ariaCurrent?: "location"; onActivate?: () => void }) {
  return <button type="button" className={className} onClick={() => {
    onActivate?.();
    const target = document.getElementById(to);
    target?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
    target?.focus({ preventScroll: true });
  }} aria-current={ariaCurrent}>{children}</button>;
}
