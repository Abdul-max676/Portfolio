import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, Download } from "@/components/icons";
import { cn } from "@/lib/cn";

type ArrowLinkProps = {
  href: string;
  /**
   * cta: home buttons. Plain text, a colored fill wipes up from the bottom edge
   *      on hover or focus and the text inverts.
   * list: muted text link used inside .project-item. Turns accent on its own
   *      hover or when the parent group/item is hovered or focused.
   * inline: foreground text with a 1px underline under the label only.
   */
  variant?: "cta" | "list" | "inline";
  /** Optional icon shown before the label, outside the underline. */
  leadingIcon?: ReactNode;
  /** Makes this a file download. The value is the suggested file name. */
  download?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
};

const base = "relative inline-flex items-center gap-2 text-base";

const variants = {
  cta: [
    "isolate px-1.5 text-fg",
    "transition-colors duration-(--dur-ui) ease-out",
    "before:absolute before:inset-0 before:-z-10 before:origin-bottom before:scale-y-0 before:bg-hover",
    "before:transition-transform before:duration-(--dur-ui) before:ease-out",
    "hover:text-bg hover:before:scale-y-100",
    "focus-visible:text-bg focus-visible:before:scale-y-100",
  ].join(" "),
  list: [
    "text-muted transition-colors duration-(--dur-ui) ease-out",
    "hover:text-accent focus-visible:text-accent",
    "group-hover/item:text-accent group-focus-within/item:text-accent",
  ].join(" "),
  inline: "text-fg",
} as const;

export function ArrowLink({
  href,
  variant = "cta",
  leadingIcon,
  download,
  onClick,
  children,
  className,
}: ArrowLinkProps) {
  const external = /^https?:\/\//.test(href);

  const content = (
    <>
      {leadingIcon}
      {variant === "inline" ? (
        <span className="border-b border-fg pb-px">{children}</span>
      ) : (
        children
      )}
      {download ? (
        <Download className="size-3.5 shrink-0" />
      ) : (
        <ArrowUpRight
          className={cn(
            "size-3.5 shrink-0",
            variant === "list" &&
              "transition-transform duration-(--dur-ui) ease-out group-hover/item:translate-x-1.5 group-focus-within/item:translate-x-1.5",
          )}
        />
      )}
      {external && !download ? (
        <span className="sr-only">(opens in a new tab)</span>
      ) : null}
    </>
  );

  const classes = cn(base, variants[variant], className);

  // Downloads use a plain anchor so the browser saves the file instead of routing.
  if (download) {
    return (
      <a href={href} download={download} onClick={onClick} className={classes}>
        {content}
      </a>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={classes}>
      {content}
    </Link>
  );
}