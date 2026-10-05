"use client";

import { useEffect } from "react";
import { ArrowLink } from "@/components/arrow-link";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

/**
 * Catches runtime errors inside any route and shows a generic message.
 * Error details are logged to the console only, never rendered.
 */
export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="page-container py-page">
      <h1 className="text-title font-semibold text-fg">Something went wrong</h1>
      <p className="mt-3 max-w-measure text-lead text-muted">
        This page could not be loaded. Please try again, or head back to the
        home page.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
        <button
          type="button"
          onClick={reset}
          className={[
            "relative isolate inline-flex items-center gap-2 px-1.5 text-base text-fg",
            "transition-colors duration-(--dur-ui) ease-out",
            "before:absolute before:inset-0 before:-z-10 before:origin-bottom before:scale-y-0 before:bg-hover",
            "before:transition-transform before:duration-(--dur-ui) before:ease-out",
            "hover:text-bg hover:before:scale-y-100",
            "focus-visible:text-bg focus-visible:before:scale-y-100",
          ].join(" ")}
        >
          Try again
        </button>
        <ArrowLink href="/" variant="cta">
          Back to home
        </ArrowLink>
      </div>
    </div>
  );
}
