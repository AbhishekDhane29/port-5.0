import { Header, Footer, Text, ResumeLink } from "@/components/ui";

const NAV_ITEMS = [
  { label: "Projects", href: "/" },
  { label: "Info", href: "/about", active: true },
];

export default function AboutPage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundColor: "var(--color-bg-primary)" }}>
      <Header navItems={NAV_ITEMS} statusLabel="Available for hire" />

      <main
        style={{
          maxWidth: "var(--layout-max-width)",
          margin: "0 auto",
          paddingTop: "var(--space-12)",
          paddingInline: "var(--layout-page-gutter-x)",
          paddingBottom: "var(--space-10)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-10)",
        }}
      >
        <div>
          <Text variant="hero" color="secondary" as="h1">
            {"About "}
            <Text variant="hero" color="primary" as="span">
              Abhishek
            </Text>
          </Text>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)", maxWidth: "640px" }}>
          <Text variant="body-large" color="primary">
            I design thoughtful interaction systems for complex products, with
            strong product thinking, systems thinking, and the ability to move
            from ambiguity to clear user experiences.
          </Text>
          <Text variant="body-large" color="secondary">
            I design products from 0 → 1 that scale, stick, and ship fast.
          </Text>
        </div>

        <ResumeLink href="/resume.pdf" />
      </main>

      <div
        style={{
          maxWidth: "var(--layout-max-width)",
          margin: "0 auto",
          paddingInline: "var(--layout-page-gutter-x)",
          paddingBottom: "var(--space-9)",
        }}
      >
        <Footer
          copyright="© 2026 Abhishek Dhane • Built with Next.js"
          quote="If it looks simple, I fought for it."
        />
      </div>
    </div>
  );
}
