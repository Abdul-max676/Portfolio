import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <div className="page-container flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-9 text-muted">
        <p>
          © {site.year} {site.name}
        </p>
        <p>{site.city}</p>
      </div>
    </footer>
  );
}