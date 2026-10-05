import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = {
  /**
   * status: accent-tinted pill (project status or category).
   * availability: neutral pill with an accent dot.
   * neutral: neutral pill, muted text.
   */
  variant?: "status" | "availability" | "neutral";
  children: ReactNode;
  className?: string;
};

const variants = {
  status: "border-accent/30 bg-accent/10 px-3 py-px text-accent",
  availability: "border-line px-3.5 py-1 text-muted",
  neutral: "border-line px-3.5 py-1 text-muted",
} as const;

export function Badge({
  variant = "neutral",
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 whitespace-nowrap rounded-pill border text-pill",
        variants[variant],
        className,
      )}
    >
      {variant === "availability" ? (
        <span aria-hidden="true" className="size-2 rounded-pill bg-accent" />
      ) : null}
      {children}
    </span>
  );
}