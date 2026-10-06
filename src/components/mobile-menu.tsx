"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLink } from "@/components/arrow-link";
import { Mail, Phone, Social } from "@/components/icons";
import { contact, nav, resume, site } from "@/lib/content";

const socialIcons = {
  email: Mail,
  phone: Phone,
  social: Social,
} as const;

/**
 * Mobile only (hidden from 768px up). A hamburger button that morphs into an X
 * and opens a full-viewport overlay: logo top-left, links stacked in the center,
 * contact and social icons near the bottom. The button stays above the overlay
 * so the same control opens and closes it.
 */
export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  // Close after navigating to another route.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close if the viewport grows into the tablet and desktop layout.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 48rem)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // While open: lock page scroll, close on Escape, keep Tab inside the menu.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      const overlay = overlayRef.current;
      const button = buttonRef.current;
      if (!overlay || !button) return;

      const items = [
        button,
        ...Array.from(
          overlay.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
        ),
      ];
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="group relative z-60 -mr-2 block size-12"
      >
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 block h-0.5 w-7 -translate-x-1/2 -translate-y-2 bg-fg transition-all duration-(--dur-ui) ease-out group-hover:bg-hover group-focus-visible:bg-hover group-aria-expanded:w-9 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-45"
        />
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 block h-0.5 w-7 -translate-x-1/2 -translate-y-1/2 bg-fg transition-all duration-(--dur-ui) ease-out group-hover:bg-hover group-focus-visible:bg-hover group-aria-expanded:scale-x-0 group-aria-expanded:opacity-0"
        />
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 block h-0.5 w-7 -translate-x-1/2 translate-y-2 bg-fg transition-all duration-(--dur-ui) ease-out group-hover:bg-hover group-focus-visible:bg-hover group-aria-expanded:w-9 group-aria-expanded:translate-y-0 group-aria-expanded:-rotate-45"
        />
      </button>

      <div
        id="mobile-menu"
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        data-open={open}
        className="menu-dots invisible fixed inset-x-0 top-0 z-50 flex h-dvh flex-col bg-bg opacity-0 transition-[opacity,visibility] duration-(--dur-ui) ease-out data-[open=true]:visible data-[open=true]:opacity-100"
      >
        {/* Dot grid, painted above the overlay background and below its content. */}
        <div
          aria-hidden="true"
          className="dot-layer -z-10 [--dot-color:var(--dot-menu)]"
        />

        {/* Top row mirrors the header so the logo and the button line up. */}
        <div className="page-container flex min-h-header items-center justify-between py-3">
          <Link
            href="/"
            onClick={close}
            className="inline-block text-base font-semibold leading-6 text-fg transition-colors duration-(--dur-ui) ease-out hover:text-hover focus-visible:text-hover"
          >
            <span aria-hidden="true">{site.initials}</span>
            <span className="sr-only">{site.name}</span>
          </Link>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-12">
          <nav aria-label="Primary">
            <ul className="flex flex-col items-center gap-8 text-center">
              {nav.map((item) => {
                const active =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      aria-current={active ? "page" : undefined}
                      className="relative inline-block text-display font-semibold text-fg transition-colors duration-(--dur-ui) ease-out after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-fg after:transition-[transform,background-color] after:duration-(--dur-ui) after:ease-out hover:text-hover hover:after:bg-hover focus-visible:text-hover aria-[current=page]:after:scale-x-100"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <ArrowLink
            href={resume.download.href}
            download={resume.download.filename}
            variant="cta"
            onClick={close}
          >
            {resume.download.label}
          </ArrowLink>
        </div>

        <div className="page-container pb-12">
          <ul aria-label="Contact and social" className="flex justify-center gap-4">
            {contact.items.map((item) => {
              const Icon = socialIcons[item.kind];
              const external = /^https?:\/\//.test(item.href);
              return (
                <li key={item.kind}>
                  <a
                    href={item.href}
                    aria-label={item.label}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : undefined)}
                    className="flex size-12 items-center justify-center rounded-pill border border-line text-muted transition-colors duration-(--dur-ui) ease-out hover:border-hover hover:text-hover focus-visible:border-hover focus-visible:text-hover"
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}