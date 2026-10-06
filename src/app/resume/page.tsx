import type { Metadata } from "next";
import { ArrowLink } from "@/components/arrow-link";
import { Chip } from "@/components/chip";
import { ExperienceEntry } from "@/components/experience-entry";
import { SectionLabel } from "@/components/section-label";
import { resume } from "@/lib/content";

export const metadata: Metadata = { title: "Resume" };

export default function ResumePage() {
  return (
    <div className="page-container py-page">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <h1 className="text-title font-semibold text-fg">Resume</h1>
        <ArrowLink
          href={resume.download.href}
          download={resume.download.filename}
          variant="cta"
        >
          {resume.download.label}
        </ArrowLink>
      </div>

      <section aria-labelledby="summary-heading" className="mt-12">
        <SectionLabel id="summary-heading">Summary</SectionLabel>
        <p className="mt-5 max-w-measure text-lead text-prose">
          {resume.summary}
        </p>
      </section>

      <section aria-labelledby="experience-heading" className="mt-section">
        <SectionLabel id="experience-heading">Experience</SectionLabel>
        <ol className="experience-list mt-5">
          {resume.experience.map((entry) => (
            <ExperienceEntry key={entry.company} {...entry} />
          ))}
        </ol>
      </section>

      <section aria-labelledby="skills-heading" className="mt-section">
        <SectionLabel id="skills-heading">Skills</SectionLabel>
        <div className="mt-4">
          {resume.skills.map((group, index) => (
            <div key={group.label} className={index > 0 ? "mt-6" : undefined}>
              <SectionLabel variant="group">{group.label}</SectionLabel>
              <ul
                aria-label={group.label}
                className="mt-2 flex flex-wrap gap-x-2.5 gap-y-3"
              >
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="languages-heading" className="mt-section">
        <SectionLabel id="languages-heading">
          Languages and Interests
        </SectionLabel>
        <p className="mt-5 text-muted">{resume.languagesAndInterests}</p>
      </section>
    </div>
  );
}