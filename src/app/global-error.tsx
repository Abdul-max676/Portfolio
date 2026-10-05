"use client";

import { useEffect } from "react";
import "./globals.css";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-dvh">
        <div className="page-container py-page">
          <h1 className="text-title font-semibold text-fg">
            Something went wrong
          </h1>
          <p className="mt-3 max-w-measure text-lead text-muted">
            The site could not be loaded. Please try again in a moment.
          </p>

          <div className="mt-10">
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
          </div>
        </div>
      </body>
    </html>
  );
}