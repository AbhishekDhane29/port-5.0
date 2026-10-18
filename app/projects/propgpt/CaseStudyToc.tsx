"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { sound } from "@/lib/sound";
import styles from "./page.module.css";

export type CaseStudyTocLink = {
  id: string;
  label: string;
};

type CaseStudyTocProps = {
  links: readonly CaseStudyTocLink[];
};

const SCROLL_PROBE = 120;

export function CaseStudyToc({ links }: CaseStudyTocProps) {
  const [activeId, setActiveId] = useState(links[0]?.id ?? "");
  const [indicator, setIndicator] = useState({ top: 0, height: 14 });
  const listRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  const measureIndicator = useCallback((id: string) => {
    const list = listRef.current;
    const link = linkRefs.current.get(id);
    if (!list || !link) return;

    const listBox = list.getBoundingClientRect();
    const linkBox = link.getBoundingClientRect();

    setIndicator({
      top: linkBox.top - listBox.top,
      height: Math.max(12, linkBox.height),
    });
  }, []);

  const resolveActiveSection = useCallback(() => {
    const ids = links.map((link) => link.id);
    if (ids.length === 0) return;

    const doc = document.documentElement;
    const atBottom =
      window.innerHeight + window.scrollY >= doc.scrollHeight - 48;

    if (atBottom) {
      setActiveId(ids[ids.length - 1]);
      return;
    }

    let current = ids[0];
    for (const id of ids) {
      const section = document.getElementById(id);
      if (!section) continue;
      if (section.getBoundingClientRect().top <= SCROLL_PROBE) {
        current = id;
      }
    }

    setActiveId(current);
  }, [links]);

  useEffect(() => {
    resolveActiveSection();

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(resolveActiveSection);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [resolveActiveSection]);

  useLayoutEffect(() => {
    measureIndicator(activeId);
  }, [activeId, measureIndicator]);

  useEffect(() => {
    const onResize = () => measureIndicator(activeId);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeId, measureIndicator]);

  return (
    <nav className={styles.toc} aria-label="On this page">
      <div className={styles.tocTrack} aria-hidden="true">
        <div
          className={styles.tocIndicator}
          style={{
            transform: `translateY(${indicator.top}px)`,
            height: `${indicator.height}px`,
          }}
        />
      </div>

      <div className={styles.tocLinks} ref={listRef}>
        {links.map((link) => {
          const active = link.id === activeId;
          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${styles.tocLink} ${active ? styles.tocLinkActive : ""}`.trim()}
              aria-current={active ? "true" : undefined}
              ref={(node) => {
                if (node) linkRefs.current.set(link.id, node);
                else linkRefs.current.delete(link.id);
              }}
              onClick={() => {
                sound.play("tap");
                setActiveId(link.id);
              }}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
