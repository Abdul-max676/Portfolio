import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLink } from "@/components/arrow-link";
import { Badge } from "@/components/badge";
import { Chip } from "@/components/chip";
import { ArrowLeft, GitHub } from "@/components/icons";
import { SectionLabel } from "@/components/section-label";
import { getProject, projects } from "@/lib/content";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? project.name : "Not found" };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <div className="page-container py-page">
      <Link href="/projects" className="inline-flex items-center gap-2 text-muted">
        <ArrowLeft className="size-3.5" />
        All projects
      </Link>

      <div className="mt-8 flex flex-wrap items-center gap-2.5">
        <h1 className="text-title font-semibold text-fg">{project.name}</h1>
        {project.status ? (
          <Badge variant="status">{project.status}</Badge>
        ) : null}
      </div>

      <p className="mt-3 text-tagline text-muted">{project.description}</p>

      <ul
        aria-label="Technology stack"
        className="mt-8 flex flex-wrap gap-x-2.5 gap-y-3"
      >
        {project.stack.map((tech) => (
          <Chip key={tech}>{tech}</Chip>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
        <ArrowLink href={project.liveHref} variant="inline">
          Live site
        </ArrowLink>
        {project.repoHref ? (
          <ArrowLink
            href={project.repoHref}
            variant="inline"
            leadingIcon={<GitHub className="size-4.5 shrink-0" />}
          >
            Repository
          </ArrowLink>
        ) : null}
      </div>

      {project.sections.map((section, index) => {
        const headingId = `${section.label.toLowerCase()}-heading`;
        return (
          <section
            key={section.label}
            aria-labelledby={headingId}
            className={index === 0 ? "mt-14" : "mt-12"}
          >
            <SectionLabel id={headingId}>{section.label}</SectionLabel>
            <p className="mt-5 max-w-measure text-lead text-prose">
              {section.body}
            </p>
          </section>
        );
      })}
    </div>
  );
}