import type { Metadata } from "next";
import { ArrowLink } from "@/components/arrow-link";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="page-container py-page">
      <h1 className="text-title font-semibold text-fg">Page not found</h1>
      <p className="mt-3 max-w-measure text-lead text-muted">
        The page you are looking for does not exist or has moved.
      </p>

      <div className="mt-10">
        <ArrowLink href="/" variant="cta">
          Back to home
        </ArrowLink>
      </div>
    </div>
  );
}