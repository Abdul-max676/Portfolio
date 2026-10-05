"use client";

import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  /** Target value. Placeholder default is 0. */
  value?: number;
  suffix?: string;
  label: string;
  durationMs?: number;
};

/**
 * Renders an <li>. Place inside a <ul>.
 * Counts from 0 to `value` once, when the element first scrolls into view.
 * Skips the animation for reduced-motion users and when IntersectionObserver
 * is unavailable. Assistive tech reads the final value, never the animated one.
 */
export function StatCounter({
  value = 0,
  suffix = "",
  label,
  durationMs = 1200,
}: StatCounterProps) {
  const ref = useRef<HTMLLIElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (
      reducedMotion ||
      value <= 0 ||
      typeof IntersectionObserver === "undefined"
    ) {
      setDisplay(value);
      return;
    }

    let frame = 0;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / durationMs, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(value * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          run();
        }
      },
      { threshold: 0.6 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, durationMs]);

  return (
    <li ref={ref} className="flex items-baseline gap-1.5 text-base">
      <span aria-hidden="true" className="tabular-nums text-fg">
        {display}
        {suffix}
      </span>
      <span className="sr-only">
        {value}
        {suffix}
      </span>
      <span className="text-muted">{label}</span>
    </li>
  );
}