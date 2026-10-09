
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
  media?: MediaItem;
  sections: CaseStudySection[];
};

export type ContactKind = "email" | "phone" | "social";

export type ContactItem = {
  kind: ContactKind;
  label: string;
  value: string;
  href: string;
};

export type MediaItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster: string; alt: string };

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
  description: "Personal portfolio for showcasing skills, and collaborations",
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
    { value: 1, suffix: "+", label: "handled project" },
    { value: 1, suffix: "+", label: "project deployed" },
    { value: 0, suffix: "+", label: "collaborations" },
  ] satisfies Stat[],
  primaryCta: { label: "View Resume", href: "/resume" },
  secondaryCta: { label: "View Projects", href: "/projects" },
};

export const resume = {
  summary:
    "I'm a frontend developer based in Lagos, with 1 year of experience. I'm currently working on my portfolio as a collaborative developer. I spend part of most weeks honing my skills.",
  download: {
    label: "Resume (PDF)",
    href: "/resume.pdf",
    filename: "resume.pdf",
  },
  experience: [
  {
  role: "Junior developer",
  company: "NIIT ForteSoft",
  description:
    "Underwent the prerequisites required to learn and syntax based language such as Python, I was later guided towards learning python generally, took and exam, and then proceeded to learn some of the frameworks required to implement it.",
  dateRange: "August 2026 — Present",
  },

  {
  role: "IT training coordinator",
  company: "Ikorodu Local Government",
  description:
    "Managed high-velocity digital marketing campaigns and organic growth strategies for a flagship consumer brand. Leveraged Google Analytics, Hubspot, and SQL to optimize conversion funnels and execute multivariate testing. The initiative expanded organic web traffic by 60% and scaled paid media ROI by 2.5x year-over-year.",
  dateRange: "June 2025 — Dec 2025",
  },
  
  ] satisfies ExperienceItem[],
    skills: [
    {
      label: "Languages and Frameworks",
      items: [
        "Python",
        "HTML",
        "CSS",
      ],
    },
    {
      label: "Tools and Platforms",
      items: ["Git", "GitHub", "Vercel"],
    },
  ] satisfies SkillGroup[],
  languagesAndInterests:
    "Languages: English, Interests: Movies, AI",
};

export const projects: Project[] = [
  {
    slug: "typesage",
    name: "Type Sage",
    status: "Not started",
    description: "Turns PDF books into audio for people who'd rather listen than stare at a screen.",
    stack: ["Python", "Open AI"],
    liveHref: "https://example.com/project-two",
    repoHref: "https://example.com/your-handle/project-two",
    media: {
    type: "image",
    src: "/portfolio.webp",
    alt: "An image of this project",
    },

    sections: [
      {
        label: "Problem",
        body: "TypeSage is a typing tutor platform that helps users improve their typing speed, accuracy, and consistency through interactive practice.",
      },
      {
        label: "Outcome",
        body: "I designed and developed TypeSage using AI-assisted tools, guiding its functionality, interface, and user experience. The result is an interactive typing tutor that helps users practise typing, track performance, and improve speed and accuracy.",
      },
    ],
  },

  {
    slug: "portfolio",
    name: "Portfolio",
    description: "A personal portfolio to showcase my work and skills, and to reach out to potential clients and collaborators.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    liveHref: "https://abdulmalik-ajiboye.vercel.app/",
    sections: [
      {
        label: "Problem",
        body: "A developer portfolio showcasing my work, skills, and what it’s like to collaborate with me.",
      },
      {
        label: "Outcome",
        body: "I designed and developed the project with AI-assisted tools, making key decisions on its structure, content, and user experience. The result is a responsive, user-focused website built to deliver a clear and accessible browsing experience.",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const projectsPage = {
  intro: "A list of everything i've made.Most recent first.",
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
      value: "linkedin.com/in/abdulmalik-ajiboye",
      href: "https://www.linkedin.com/in/abdulmalik-ajiboye/",
    },
  ] satisfies ContactItem[],
};