/*
  Placeholder content only. Every user-facing string is a bracketed slot that
  matches the real slot's length and rhythm. Links use example.com values.
  Replace these values with your own content.
*/

export type NavItem = { label: string; href: string };

export type Stat = { value: number; suffix: string; label: string };

export type ExperienceItem = {
  role: string;
  company: string;
  description: string;
  dateRange: string;
};

export type SkillGroup = { label: string; items: string[] };

export type CaseStudySection = { label: string; body: string };

export type Project = {
  slug: string;
  name: string;
  status?: string;
  description: string;
  stack: string[];
  liveHref: string;
  repoHref?: string;
  sections: CaseStudySection[];
};

export type ContactKind = "email" | "phone" | "social";

export type ContactItem = {
  kind: ContactKind;
  label: string;
  value: string;
  href: string;
};

/** Builds ["[Skill 01]", "[Skill 02]", ...] style placeholders. */
function placeholders(noun: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return `[${noun} ${n}]`;
  });
}

export const site = {
  name: "Abdulmalik Ajiboye",
  initials: "AA",
  description: "[One-sentence description of this portfolio.]",
  city: "Lagos, Nigeria",
  year: "2026",
};

export const nav: NavItem[] = [
  { label: "Resume", href: "/resume" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const home = {
  availability: "Available for collaborations",
  engagement: "Internship, Collaboration, Part-time",
  roles: "Software Engineer · Frontend Developer",
  bio: "I'm a frontend developer based in Lagos, with 1 year of experience. I'm currently working on my portfolio as a collaborative developer. I spend part of most weeks honing my skills.",
  stats: [
    { value: 1, suffix: "+", label: "year of experience" },
    { value: 1, suffix: "+", label: "handled projects" },
    { value: 1, suffix: "+", label: "projects deployed" },
    { value: 0, suffix: "+", label: "collaborations" },
  ] satisfies Stat[],
  primaryCta: { label: "View Resume", href: "/resume" },
  secondaryCta: { label: "View Projects", href: "/projects" },
};

export const resume = {
  summary:
    "I’m a second-year Computer Science student building practical experience in web development and software development, with a growing focus on creating useful, real-world applications. My current stack includes HTML, CSS, JavaScript, React, Vite, Git, and GitHub, with Python as a developing strength and an interest in AI-assisted development. I’m currently focused on improving my frontend development skills, building projects, learning modern development workflows, and gradually expanding into full-stack development. One of my flagship projects is LearnTech Oto, an educational resource platform concept designed to improve access to learning materials, alongside smaller projects such as personal websites, habit-tracking tools, and experiments with AI-assisted development. I also enjoy breaking down what I learn, helping others understand technical concepts, and developing my ability to teach through practical examples" ,
  experience: [
    {
      role: "[Role Title One]",
      company: "[Company Name One]",
      description:
        "[Sentence describing the scope of this role.] [Sentence describing the tools and responsibilities.] [Sentence describing the outcome or growth that followed.]",
      dateRange: "[Month Year] to [Month Year]",
    },
    {
      role: "[Role Title Two]",
      company: "[Company Name Two]",
      description:
        "[Sentence describing the scope of this role.] [Sentence describing the tools and responsibilities.]",
      dateRange: "[Month Year] to [Month Year]",
    },
    {
      role: "[Role Title Three]",
      company: "[Company Name Three]",
      description:
        "[Sentence describing the scope of this role.] [Sentence describing the tools and responsibilities.] [Sentence describing the outcome or growth that followed.]",
      dateRange: "[Month Year] to [Month Year]",
    },
    {
      role: "[Role Title Four]",
      company: "[Company Name Four]",
      description:
        "[Sentence describing the scope of this role.] [Sentence describing the tools and responsibilities.]",
      dateRange: "[Month Year] to [Month Year]",
    },
    {
      role: "[Role Title Five]",
      company: "[Company Name Five]",
      description: "[Sentence describing the scope of this role.]",
      dateRange: "[Month Year] to [Month Year]",
    },
  ] satisfies ExperienceItem[],
  skills: [
    { label: "[Skill Group One]", items: placeholders("Skill", 14) },
    {
      label: "[Skill Group Two]",
      items: placeholders("Tool", 4),
    },
  ] satisfies SkillGroup[],
  languagesAndInterests:
    "[Languages: Language One, Language Two.] [Interests: Interest One, Interest Two.]",
};

const caseStudySections: CaseStudySection[] = [
  {
    label: "Problem",
    body: "A developer needed a personal portfolio to showcase their skills, projects, and experience. It needed to give potential collaborators and employers a clear view of their work.",
  },
  {
    label: "Outcome",
    body: "I designed and developed an AI-assisted responsive portfolio to showcase my skills, projects, and experience. It features a clean, modern design, intuitive navigation, and interactive elements that highlight my work. The portfolio is optimized for performance and accessibility, ensuring a seamless experience across devices.",
  },
];

export const projects: Project[] = [
  {
  slug: "project-one",
  name: "Portfolio",
  status: "In Progress",
  description: "A developer portfolio showcasing my work, skills, and what it’s like to collaborate with me.",
  stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  liveHref: "https://example.com/project-one",
  repoHref: "https://github.com/Abdul-max676/Portfolio",
  sections: caseStudySections,
  },
  {
    slug: "project-two",
    name: "[Project Two]",
    status: "[Category Label]",
    description: "[One-line description of the project and who it serves.]",
    stack: placeholders("Tech", 5),
    liveHref: "https://example.com/project-two",
    repoHref: "https://github.com/Abdul-max676/Portfolio",
    sections: caseStudySections,
  },
  {
    slug: "project-three",
    name: "[Project Three]",
    description: "[One-line description of the project.]",
    stack: placeholders("Tech", 4),
    liveHref: "https://example.com/project-three",
    repoHref: "https://github.com/Abdul-max676/Portfolio",
    sections: caseStudySections,
  },
  {
    slug: "project-four",
    name: "[Project Four]",
    description: "[One-line description of the project.]",
    stack: placeholders("Tech", 4),
    liveHref: "https://example.com/project-four",
    repoHref: "https://github.com/Abdul-max676/Portfolio",
    sections: caseStudySections,
  },
  {
    slug: "project-five",
    name: "[Project Five]",
    description: "[One-line description of the project.]",
    stack: placeholders("Tech", 3),
    liveHref: "https://example.com/project-five",
    repoHref: "https://github.com/Abdul-max676/Portfolio",
    sections: caseStudySections,
  },
  {
    slug: "project-six",
    name: "[Project Six]",
    status: "[Highlight Label]",
    description: "[One-line description of the project and what it manages.]",
    stack: placeholders("Tech", 6),
    liveHref: "https://example.com/project-six",
    repoHref: "https://github.com/Abdul-max676/Portfolio",
    sections: caseStudySections,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectsPage = {
  intro: "A list of everything i've made. Most recent first.",
};

export const contact = {
  intro:
    "Based in Lagos, Nigeria, and open to part-time work. The fastest way to reach me is by sending a mail.",
  items: [
    {
      kind: "email",
      label: "Email",
      value: "malikajiboye7@gmail.com",
      href: "mailto:malikajiboye7@gmail.com",
    },
    {
      kind: "phone",
      label: "Whatsapp / Phone",
      value: "07083276843",
      href: "tel:+2347083276843",
    },
    {
      kind: "social",
      label: "LinkedIn",
      value: "example.com/in/your-handle",
      href: "https://example.com/in/your-handle",
    },
  ] satisfies ContactItem[],
};