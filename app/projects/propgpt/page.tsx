import type { Metadata } from "next";
import { SoftLink } from "@/components/ui";
import {
  CASE_META,
  SIDEBAR_LINKS,
  CONTEXT,
  PROBLEM,
  FEEDBACK,
  IMPROVEMENTS,
  NEW_FLOWS,
  FEATURES,
  CONCLUSION,
} from "./content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "PropGPT — Abhishek Dhane",
  description:
    "Case study: Making winning easier for sports bettors with PropGPT AI props analysis.",
};

function MediaPlaceholder({
  label,
  className,
  caption,
}: {
  label: string;
  className?: string;
  caption?: string;
}) {
  return (
    <figure className={className}>
      <div className={styles.mediaFill} role="img" aria-label={label} />
      {caption ? (
        <figcaption className={styles.mediaCaption}>{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export default function PropGptCaseStudyPage() {
  return (
    <div className={styles.page}>
      <header className={styles.topNav}>
        <div className={styles.topNavInner}>
          <SoftLink href="/" className={styles.brandName}>
            Abhishek Dhane
          </SoftLink>

          <p className={styles.status} role="status">
            <span className={styles.statusDot} aria-hidden="true" />
            Open to Work
          </p>

          <div className={styles.topNavRight}>
            <SoftLink href="/" className={styles.topNavLink}>
              Projects
            </SoftLink>
            <SoftLink href="/about" className={styles.topNavLink}>
              Info
            </SoftLink>
            <SoftLink
              href="/"
              className={styles.closeLink}
              aria-label="Close case study"
            >
              ×
            </SoftLink>
          </div>
        </div>
      </header>

      <div className={styles.shell}>
        <aside className={styles.sidebar} aria-label="Case study navigation">
          <div className={styles.sidebarBrand}>
            <p className={styles.sidebarTitle}>{CASE_META.title}</p>
            <p className={styles.sidebarSubtitle}>{CASE_META.subtitle}</p>
          </div>

          <nav className={styles.toc} aria-label="On this page">
            {SIDEBAR_LINKS.map((link) => (
              <a key={link.id} href={`#${link.id}`} className={styles.tocLink}>
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#"
            className={styles.prototypeLink}
            aria-label="Open prototype (link coming soon)"
          >
            Prototype <span aria-hidden="true">↗</span>
          </a>
        </aside>

        <main className={styles.main}>
          {/* Hero */}
          <header className={styles.hero}>
            <div className={styles.heroTop}>
              <h1 className={styles.heroTitle}>{CASE_META.hero}</h1>
              <a href={CASE_META.downloadHref} className={styles.downloadLink}>
                {CASE_META.downloadLabel}{" "}
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <MediaPlaceholder
              className={styles.heroMedia}
              label="PropGPT hero app preview — image coming soon"
            />

            <dl className={styles.meta}>
              <div className={styles.metaItem}>
                <dt className={styles.metaLabel}>Role</dt>
                <dd className={styles.metaValue}>{CASE_META.role}</dd>
              </div>
              <div className={styles.metaItem}>
                <dt className={styles.metaLabel}>Stack</dt>
                <dd className={styles.metaValue}>{CASE_META.stack}</dd>
              </div>
              <div className={styles.metaItem}>
                <dt className={styles.metaLabel}>Team</dt>
                <dd className={styles.metaValue}>{CASE_META.team}</dd>
              </div>
              <div className={styles.metaItem}>
                <dt className={styles.metaLabel}>Timeline</dt>
                <dd className={styles.metaValue}>{CASE_META.timeline}</dd>
              </div>
            </dl>
          </header>

          {/* Context */}
          <section id="context" className={styles.section}>
            <p className={styles.sectionLabel}>{CONTEXT.label}</p>
            <h2 className={styles.sectionHeadingSm}>{CONTEXT.heading}</h2>
            <div className={styles.bodyStack}>
              {CONTEXT.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className={styles.body}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Problem */}
          <section id="problem" className={styles.section}>
            <p className={styles.sectionLabel}>{PROBLEM.label}</p>
            <h2 className={styles.sectionHeading}>{PROBLEM.heading}</h2>

            <div className={styles.phoneGallery} aria-label="Legacy app screens">
              {PROBLEM.gallery.map((frame) => (
                <MediaPlaceholder
                  key={frame.caption}
                  className={styles.phoneFrame}
                  label={`${frame.caption} — image coming soon`}
                  caption={frame.caption}
                />
              ))}
            </div>

            <div className={styles.problemCards}>
              {PROBLEM.cards.map((card) => (
                <article key={card.title} className={styles.problemCard}>
                  <div className={styles.problemCardCopy}>
                    <h3 className={styles.problemTitle}>{card.title}</h3>
                    <p className={styles.body}>{card.body}</p>
                  </div>
                  <MediaPlaceholder
                    className={styles.problemThumb}
                    label={`${card.mediaLabel} — image coming soon`}
                  />
                </article>
              ))}
            </div>

            <div className={styles.feedbackBlock}>
              <p className={styles.sectionLabel}>{FEEDBACK.label}</p>
              <div className={styles.feedbackGrid}>
                {FEEDBACK.comments.map((comment) => (
                  <article key={comment.user} className={styles.feedbackCard}>
                    <div className={styles.feedbackHeader}>
                      <span
                        className={styles.feedbackAvatar}
                        role="img"
                        aria-label={`${comment.user} avatar placeholder`}
                      />
                      <div className={styles.feedbackIdentity}>
                        <p className={styles.feedbackUser}>{comment.user}</p>
                        <p className={styles.feedbackMeta}>{comment.meta}</p>
                      </div>
                    </div>
                    <p className={styles.feedbackBody}>{comment.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Improvements */}
          <section id="improvements" className={styles.section}>
            <p className={styles.sectionLabel}>{IMPROVEMENTS.label}</p>
            <h2 className={styles.sectionHeading}>{IMPROVEMENTS.heading}</h2>
            <div className={styles.bodyStack}>
              {IMPROVEMENTS.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className={styles.body}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* New flows */}
          <section id="new-flows" className={styles.section}>
            <p className={styles.sectionLabel}>{NEW_FLOWS.label}</p>
            <h2 className={styles.sectionHeading}>{NEW_FLOWS.heading}</h2>
            <div className={styles.flowList}>
              {NEW_FLOWS.steps.map((step, index) => (
                <article
                  key={`${step.mediaLabel}-${index}`}
                  className={styles.flowItem}
                >
                  <div className={styles.flowCopy}>
                    <h3 className={styles.flowTitle}>{step.title}</h3>
                    <p className={styles.body}>{step.body}</p>
                  </div>
                  <MediaPlaceholder
                    className={styles.flowMedia}
                    label={`${step.mediaLabel} — image coming soon`}
                  />
                </article>
              ))}
            </div>
          </section>

          {/* Features */}
          <section id="features" className={styles.section}>
            <p className={styles.sectionLabel}>{FEATURES.label}</p>
            <h2 className={styles.sectionHeading}>{FEATURES.heading}</h2>
            <div className={styles.featureList}>
              {FEATURES.items.map((item) => (
                <article key={item.title} className={styles.featureItem}>
                  <h3 className={styles.featureTitle}>{item.title}</h3>
                  <p className={styles.body}>{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion" className={styles.section}>
            <p className={styles.sectionLabel}>{CONCLUSION.label}</p>
            <h2 className={styles.sectionHeading}>{CONCLUSION.heading}</h2>
            <div className={styles.bodyStack}>
              {CONCLUSION.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className={styles.body}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
