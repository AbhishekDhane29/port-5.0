import {
  Header,
  Footer,
  ProjectCard,
  ResumeLink,
  SoftLink,
} from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import styles from "./page.module.css";

/* ─── Figma asset URLs (valid for 7 days from generation) ── */
const IMG_ACME =
  "https://www.figma.com/api/mcp/asset/30ae41d4-4e8f-44e2-b745-f7436dd4f286";
const IMG_PROPGPT =
  "https://www.figma.com/api/mcp/asset/77570dff-377b-4034-af2d-ce131e38b5e8";
const IMG_VRBO =
  "https://www.figma.com/api/mcp/asset/d45a5b73-7343-4d35-8025-5d6e9153b0e9";
const IMG_AI_TRANSCRIBE =
  "https://www.figma.com/api/mcp/asset/e88649f0-da73-4843-b97e-51de1a95671f";

const IMG_LINKEDIN =
  "https://www.figma.com/api/mcp/asset/540770af-9195-45d2-9ff6-850313ac7321";
const IMG_INSTAGRAM =
  "https://www.figma.com/api/mcp/asset/e40a314a-11c1-479c-8e55-c3ebf2120efe";
const IMG_X =
  "https://www.figma.com/api/mcp/asset/39bd18db-2284-41ac-94e5-410df8fa0fad";

/* ─── Data ──────────────────────────────────────────────── */

const NAV_ITEMS = [
  { label: "Projects", href: "/", active: false },
  { label: "Info", href: "/about", active: true },
];

const PROJECTS = [
  {
    title: "ACME",
    description:
      "A gamified dashboard system for credit-card fraud teams. Designed to boost efficiency and engagement for managers and investigators.",
    imageSrc: IMG_ACME,
    imageAlt: "ACME fraud dashboard",
    tags: [{ label: "Design" }],
  },
  {
    title: "PropGPT",
    description:
      "AI sports predictions made accessible through smart insights and UI. Built to help users make informed picks with data, trends, and models.",
    imageSrc: IMG_PROPGPT,
    imageAlt: "PropGPT app interface",
    tags: [{ label: "Design" }, { label: "Development" }],
  },
  {
    title: "VRBO",
    description:
      "Redesigned the property booking experience to reduce decision friction across search, maps, and property listings.",
    imageSrc: IMG_VRBO,
    imageAlt: "VRBO redesign",
    tags: [{ label: "Iterating..", variant: "iterating" as const }],
  },
  {
    title: "AI transcribe prototype",
    description:
      "An AI voice-to-text prototype that records, transcribes, and structures speech. Built to turn spoken thoughts into clean, editable text instantly.",
    imageSrc: IMG_AI_TRANSCRIBE,
    imageAlt: "AI transcribe prototype",
    tags: [{ label: "Iterating..", variant: "iterating" as const }],
  },
];

const SOCIAL_LINKS = [
  {
    platform: "linkedin" as const,
    href: "https://linkedin.com/in/abhishekdhane",
    icon: <img src={IMG_LINKEDIN} alt="LinkedIn" width={24} height={24} />,
  },
  {
    platform: "instagram" as const,
    href: "https://instagram.com/abhishekdhane",
    icon: <img src={IMG_INSTAGRAM} alt="Instagram" width={24} height={24} />,
  },
  {
    platform: "x" as const,
    href: "https://x.com/abhishekdhane",
    icon: <img src={IMG_X} alt="X" width={24} height={24} />,
  },
];

/* ─── Page ───────────────────────────────────────────── */

export default function HomePage() {
  return (
    <div className={styles.page}>

      {/* ── Header ──────────────────────────────────────── */}
      <Header navItems={NAV_ITEMS} statusLabel="Available for hire" />

      {/* ── Hero ────────────────────────────────────────── */}
      <Reveal
        as="section"
        className={styles.hero}
        delay={0.05}
        aria-label="Introduction"
      >
        {/* Row 1 — greeting (left) | title (right) */}
        <div className={styles.heroRow}>
          <div className={styles.heroLeft}>
            <p className={styles.heroGreeting}>
              Hi there, I&apos;m{" "}
              <span className={styles.heroNameAccent}>Abhishek</span>
            </p>
          </div>
          <div className={styles.heroRight}>
            <p className={styles.heroTitle}>Product Designer</p>
          </div>
        </div>

        {/* Row 2 — resume link (left) | bio + read more (right) */}
        <div className={styles.heroRow}>
          <div className={styles.heroLeft}>
            <ResumeLink href="/resume.pdf" />
          </div>
          <div className={styles.heroRight}>
            <div className={styles.heroBio}>
              <p className={styles.bioText}>
                I design thoughtful interaction systems for complex products,
                with strong product thinking, systems thinking, and the ability
                to move from ambiguity to clear user experiences.
              </p>
              <SoftLink href="/about" className={styles.readMore}>
                read more.
              </SoftLink>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ── Project grid ────────────────────────────────── */}
      <section className={styles.projectSection} aria-label="Projects">
        <Stagger className={styles.projectGrid}>
          {PROJECTS.map((project) => (
            <StaggerItem key={project.title}>
              <ProjectCard {...project} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ── Footer ──────────────────────────────────────── */}
      <Reveal className={styles.footerWrapper} delay={0.2}>
        <Footer
          copyright="© 2026 Abhishek Dhane • Built with Next.js"
          quote="If it looks simple, I fought for it."
          socialLinks={SOCIAL_LINKS}
        />
      </Reveal>

    </div>
  );
}
