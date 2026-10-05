import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionLabelProps = {
  /**
   * section: uppercase tracked label (Summary, Experience, Skills).
   * group: sentence-case sub-label (skill group names).
   */
  variant?: "section" | "group";
  as?: "h2" | "h3";
  id?: string;
  children: ReactNode;
  className?: string;
};

export function SectionLabel({
  variant = "section",
  as,
  id,
  children,
  className,
}: SectionLabelProps) {
  const Tag = as ?? (variant === "section" ? "h2" : "h3");

  return (
    <Tag
      id={id}
      className={cn(
        "text-base text-muted",
        variant === "section" && "uppercase tracking-label",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
