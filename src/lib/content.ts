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
    slug: "audiobook",
    name: "Audiobook Idea",
    status: "Not Started",
    description: "Turns PDF books into audio for people who'd rather listen than stare at a screen.",
    stack: ["Python", "Open AI"],
    liveHref: "https://example.com/project-two",
    repoHref: "https://example.com/your-handle/project-two",
    sections: [
      {
        label: "Problem",
        body: "Many people only have a book as a PDF, can't get a print copy, and find reading on a screen tiring. They needed an app that reads the PDF aloud so they can listen instead.",
      },
      {
        label: "Outcome",
        body: "I built the app end to end as the only developer and since it hasn't commenced, I'm open to collaboration. It now converts PDF books into audio that anyone can listen to anywhere.",
      },
    ],
  },
  {
    slug: "portfolio",
    name: "Portfolio",
    status: "In Progress",
    description: "A personal portfolio to showcase my work and skills, and to reach out to potential clients and collaborators.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    liveHref: "https://abdulmalik-ajiboye.vercel.app/",
    repoHref: "https://github.com/Abdul-max676/Portfolio",
    sections: [
      {
        label: "Problem",
        body: "[Project One: two sentences describing who needed this project and what they needed it to do.]",
      },
      {
        label: "Outcome",
        body: "[Project One: sentence describing your contribution and role.] [Project One: sentence describing what was delivered.]",
      },
    ],
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