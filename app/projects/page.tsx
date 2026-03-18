import { Header, Text } from "@/components/ui";

const NAV_ITEMS = [
  { label: "Projects", href: "/projects", active: true },
  { label: "Info", href: "/about" },
];

export default function ProjectsPage() {
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
        }}
      >
        <Text variant="hero" color="secondary" as="h1">
          All Projects
        </Text>
        <div style={{ marginTop: "var(--space-10)" }}>
          <Text variant="body-large" color="secondary">
            More coming soon.
          </Text>
        </div>
      </main>
    </div>
  );
}
