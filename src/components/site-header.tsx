import { MobileMenu } from "@/components/mobile-menu";
import { NavLink } from "@/components/nav-link";
import { nav, site } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="min-h-header border-b border-rule">
      <div className="page-container flex min-h-header items-center justify-between gap-4 py-3">
        <NavLink href="/" variant="wordmark">
          <span aria-hidden="true" className="md:hidden">
            {site.initials}
          </span>
          <span className="sr-only md:hidden">{site.name}</span>
          <span className="hidden md:inline">{site.name}</span>
        </NavLink>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}