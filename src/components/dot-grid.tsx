"use client";

import { useEffect, useRef } from "react";

/**
 * Two fixed layers behind all content: a faint static dot grid, and a brighter
 * copy of it revealed through a radial mask that follows the pointer.
 * Styles live in globals.css (.dot-layer, .dot-layer--base, .dot-layer--lit).
 * The reveal is skipped for touch input and reduced-motion preferences.
 */
export function DotGrid() {
  const litRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lit = litRef.current;
    if (!lit) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const apply = () => {
      frame = 0;
      lit.style.setProperty("--mx", `${x}px`);
      lit.style.setProperty("--my", `${y}px`);
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      x = event.clientX;
      y = event.clientY;

      if (lit.dataset.active !== "true") {
        // First move after entering: jump to the pointer, then fade in,
        // so the reveal does not sweep in from off-screen.
        lit.style.transition = "opacity 400ms ease-out";
        apply();
        lit.dataset.active = "true";
        requestAnimationFrame(() => {
          lit.style.transition = "";
        });
        return;
      }

      if (!frame) frame = requestAnimationFrame(apply);
    };

    const onLeave = () => {
      lit.dataset.active = "false";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div aria-hidden="true" className="dot-layer dot-layer--base" />
      <div
        ref={litRef}
        aria-hidden="true"
        data-active="false"
        className="dot-layer dot-layer--lit"
      />
    </>
  );
}