import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <div className="page-container flex flex-nowrap items-center justify-between gap-x-4 py-9 text-pill text-muted md:gap-x-6 md:text-base">
        <p className="min-w-0 truncate whitespace-nowrap">
          © {site.year} {site.name}
        </p>
        <p className="shrink-0 whitespace-nowrap">{site.city}</p>
      </div>
    </footer>
  );
}