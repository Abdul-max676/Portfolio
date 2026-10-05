import { ArrowLink } from "@/components/arrow-link";
import { Badge } from "@/components/badge";
import type { Project } from "@/lib/content";

type ProjectItemProps = {
  project: Pick<Project, "slug" | "name" | "status" | "description">;
};

/**
 * Renders an <li>. Place inside <ul className="project-list">.
 * Sibling dimming is handled in globals.css (.project-list / .project-item).
 * The orange bottom rule is the ::after element, drawn left to right on hover.
 */
export function ProjectItem({ project }: ProjectItemProps) {
  const { slug, name, status, description } = project;

  return (
    <li
      className={[
        "project-item group/item relative border-t border-rule pb-7 pt-1 first:border-t-0",
        "hover:z-10 focus-within:z-10",
        "after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-px after:h-px",
        "after:origin-left after:scale-x-0 after:bg-hover",
        "after:transition-transform after:duration-(--dur-rule) after:ease-out",
        "hover:after:scale-x-100 focus-within:after:scale-x-100",
      ].join(" ")}
    >
      <div className="flex flex-wrap items-center gap-2.5 transition-transform duration-(--dur-ui) ease-out group-hover/item:translate-x-2 group-focus-within/item:translate-x-2">
        <h2 className="text-heading font-semibold text-fg">{name}</h2>
        {status ? <Badge variant="status">{status}</Badge> : null}
      </div>
      <p className="mt-1.5 text-muted">{description}</p>
      <div className="mt-2.5">
        <ArrowLink href={`/projects/${slug}`} variant="list">
          View case study
          <span className="sr-only">: {name}</span>
        </ArrowLink>
      </div>
    </li>
  );
}