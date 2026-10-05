import type { Metadata } from "next";
import { ProjectItem } from "@/components/project-item";
import { projects, projectsPage } from "@/lib/content";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="page-container py-page">
      <h1 className="text-title font-semibold text-fg">Projects</h1>
      <p className="mt-3 text-lead text-muted">{projectsPage.intro}</p>

      {/* Order in content.ts is most recent first. */}
      <ul className="project-list mt-10">
        {projects.map((project) => (
          <ProjectItem key={project.slug} project={project} />
        ))}
      </ul>
    </div>
  );
}