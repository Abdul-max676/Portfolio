import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ChipProps = {
  children: ReactNode;
  className?: string;
};

/** Renders an <li>. Place inside a <ul> that provides the flex-wrap layout. */
export function Chip({ children, className }: ChipProps) {
  return (
    <li
      className={cn(
        "inline-flex items-center rounded-pill border border-line px-3.5 py-1 text-base leading-6 text-fg",
        className,
      )}
    >
      {children}
    </li>
  );
}