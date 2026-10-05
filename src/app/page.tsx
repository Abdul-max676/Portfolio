import { ArrowLink } from "@/components/arrow-link";
import { Badge } from "@/components/badge";
import { StatCounter } from "@/components/stat-counter";
import { home, site } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="page-container py-hero">
      <div className="flex flex-wrap gap-2.5">
        <Badge variant="availability">{home.availability}</Badge>
        <Badge variant="neutral">{home.engagement}</Badge>
      </div>

      <h1 className="mt-6 text-display font-semibold text-fg">{site.name}</h1>

      <p className="mt-4 text-tagline text-muted">{home.roles}</p>

      <p className="mt-10 max-w-measure text-lead text-prose">{home.bio}</p>

      <ul
        aria-label="Highlights"
        className="mt-8 flex flex-wrap gap-x-10 gap-y-2"
      >
        {home.stats.map((stat) => (
          <StatCounter
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
        <ArrowLink href={home.primaryCta.href} variant="cta">
          {home.primaryCta.label}
        </ArrowLink>
        <ArrowLink href={home.secondaryCta.href} variant="cta">
          {home.secondaryCta.label}
        </ArrowLink>
      </div>
    </div>
  );
}