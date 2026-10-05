import type { ExperienceItem } from "@/lib/content";

/**
 * Renders an <li>. Place inside <ol className="experience-list">.
 * Title row: role (foreground, semibold) and company (muted), date range right
 * aligned on wide screens. Description sits below, capped at the entry measure.
 * On narrow screens the date drops under the title.
 * Hover: siblings dim (globals.css), the title shifts right and an orange rule
 * draws left to right under the entry.
 */
export function ExperienceEntry({
  role,
  company,
  description,
  dateRange,
}: ExperienceItem) {
  return (
    <li
      className={[
        "experience-item group/item relative border-t border-rule py-6 first:border-t-0 first:pt-0",
        "hover:z-10",
        "after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-px after:h-px",
        "after:origin-left after:scale-x-0 after:bg-hover",
        "after:transition-transform after:duration-(--dur-rule) after:ease-out",
        "hover:after:scale-x-100",
      ].join(" ")}
    >
      <div className="grid gap-x-8 gap-y-1.5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline">
        <h3 className="text-heading text-muted transition-transform duration-(--dur-ui) ease-out group-hover/item:translate-x-2">
          <span className="font-semibold text-fg">{role}</span>
          <span aria-hidden="true">{" \u2014 "}</span>
          <span className="sr-only"> at </span>
          {company}
        </h3>
        <p className="text-muted sm:col-start-2 sm:row-start-1 sm:whitespace-nowrap sm:text-right">
          {dateRange}
        </p>
        <p className="max-w-entry text-muted sm:col-start-1">{description}</p>
      </div>
    </li>
  );
}