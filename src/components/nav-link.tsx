"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type NavLinkProps = {
  href: string;
  /** "nav" marks the current route with an underline. "wordmark" underlines on hover only. */
  variant?: "nav" | "wordmark";
  children: ReactNode;
};

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const variants = {
  // The current route keeps a white underline, which turns orange on hover.
  nav: "aria-[current=page]:after:scale-x-100",
  // The wordmark is bolder and underlines on hover only, even on the home page.
  wordmark: "font-semibold",
} as const;

export function NavLink({ href, variant = "nav", children }: NavLinkProps) {
  const pathname = usePathname();
  const active = isActive(pathname, href);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative inline-block text-base leading-6 text-fg transition-colors duration-(--dur-ui) ease-out",
        "hover:text-hover focus-visible:text-hover",
        // 2px underline, drawn from the left, sitting just below the line box
        "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-fg",
        "after:transition-[transform,background-color] after:duration-(--dur-ui) after:ease-out",
        "hover:after:scale-x-100 hover:after:bg-hover focus-visible:after:scale-x-100 focus-visible:after:bg-hover",
        variants[variant],
      )}
    >
      {children}
    </Link>
  );
}