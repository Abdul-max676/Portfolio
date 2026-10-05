[Your Name] | Portfolio

What the portfolio is

The personal portfolio of [Your Name], [Role One] and [Role Two]. It brings together my background, selected projects and the best ways to reach me in four pages:

- Home: who I am, what I am available for and a few highlights.
- Resume: summary, experience, skills, languages and interests.
- Projects: a running list of what I have built, each with its own case-study page covering the problem, my contribution and the tech stack.
- Contact: the fastest ways to get in touch.

The site is also a piece of work in its own right. I designed and built it from scratch as a restrained, typography-led dark interface, where borders and whitespace create the hierarchy instead of shadows or gradients.

Tech stack

- Framework: Next.js (App Router) and React
- Language: TypeScript in strict mode
- Styling: Tailwind CSS v4, with every design value defined as a token
- Typography: Inter through `next/font`
- Dependencies: no component libraries and no animation libraries; interactions use CSS transitions, `IntersectionObserver` and a small amount of client JavaScript

Features

- Case studies for every project: each project has a dedicated page for the problem, the outcome and the stack used.
- Design system: colors, type scale, spacing, widths and motion timings live in one token file, which keeps the interface consistent.
- Interactive dot grid: a faint dotted background that lights up around the mouse pointer. It is turned off for touch devices and for visitors who prefer reduced motion.
- Animated highlights: home page counters that count up once when they scroll into view.
- Considered interactions: project list hover states, animated link underlines and a bottom-up fill on the main buttons.
- Mobile-first navigation: below 768px the header collapses into a hamburger button that opens a full-screen menu with stacked links and contact icons.
- Graceful errors: runtime errors and unknown URLs show on-brand pages with no technical details exposed.
- Responsive and accessible: semantic HTML, a skip link, visible focus states, full keyboard support and reduced-motion support.
- Fast by default: pages are generated statically at build time.

Getting started

To run the project locally you need Node.js 20.9 or newer.

```bash
git clone [repository-url]
cd [project-folder]
npm install
npm run dev
```

Then open `http://localhost:3000`.

| Script | What it does |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm start` | Serves the production build |
| `npm run typecheck` | Runs the TypeScript compiler without emitting files |

Live demo

[View the live site](https://example.com)

Contact

I am open to [Engagement Type] opportunities. The fastest ways to reach me:

- Email: name@example.com
- LinkedIn: [example.com/in/your-handle](https://example.com/in/your-handle)
- Location: [City], [Country]