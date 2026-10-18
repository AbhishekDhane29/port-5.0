"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function smoothstep(t: number) {
  const x = clamp(t);
  return x * x * (3 - 2 * x);
}

export function CaseStudyToc({ links }: CaseStudyTocProps) {
  const [activeId, setActiveId] = useState(links[0]?.id ?? "");
  const [indicator, setIndicator] = useState({ top: 0, height: 14 });
  const listRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const reduceMotionRef = useRef(false);

  const updateFromScroll = useCallback(() => {
    const ids = links.map((link) => link.id);
    const list = listRef.current;
    if (ids.length === 0 || !list) return;

    const listBox = list.getBoundingClientRect();
    const probeY = window.scrollY + SCROLL_PROBE;
    const atBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 48;

    let index = 0;
    for (let i = 0; i < ids.length; i += 1) {
      const section = document.getElementById(ids[i]);
      if (!section) continue;
      const sectionTop = window.scrollY + section.getBoundingClientRect().top;
      if (sectionTop <= probeY) index = i;
    }
    if (atBottom) index = ids.length - 1;

    const currentId = ids[index];
    const nextId = ids[index + 1];
    const currentLink = linkRefs.current.get(currentId);
    const nextLink = nextId ? linkRefs.current.get(nextId) : undefined;
    if (!currentLink) return;

    const currentBox = currentLink.getBoundingClientRect();
    const fromTop = currentBox.top - listBox.top;
    const fromHeight = Math.max(12, currentBox.height);
    const fromBottom = fromTop + fromHeight;

    let progress = 0;
    if (nextId && nextLink && !atBottom) {
      const currentSection = document.getElementById(currentId);
      const nextSection = document.getElementById(nextId);
      if (currentSection && nextSection) {
        const start =
          window.scrollY + currentSection.getBoundingClientRect().top;
        const end = window.scrollY + nextSection.getBoundingClientRect().top;
        const range = end - start;
        progress = range > 0 ? clamp((probeY - start) / range) : 0;
      }
    }

    const eased = smoothstep(progress);

    if (reduceMotionRef.current || !nextLink) {
      setIndicator({ top: fromTop, height: fromHeight });
    } else {
      const nextBox = nextLink.getBoundingClientRect();
      const toTop = nextBox.top - listBox.top;
      const toBottom = toTop + Math.max(12, nextBox.height);

      // Grow the black segment along the track toward the next item,
      // then let the trailing edge catch up so it settles/snaps there.
      const head = fromBottom + (toBottom - fromBottom) * eased;
      const tail = fromTop + (toTop - fromTop) * Math.max(0, (eased - 0.35) / 0.65);

      const top = Math.min(tail, head);
      const height = Math.max(fromHeight, Math.abs(head - tail));
      setIndicator({ top, height });
    }

    const highlightId =
      nextId && eased >= 0.5 && !atBottom ? nextId : currentId;
    setActiveId(highlightId);
  }, [links]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotionRef.current = media.matches;

    const onMotionChange = () => {
      reduceMotionRef.current = media.matches;
      updateFromScroll();
    };
    media.addEventListener("change", onMotionChange);

    updateFromScroll();

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateFromScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      media.removeEventListener("change", onMotionChange);
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateFromScroll]);

  return (
    <nav className={styles.toc} aria-label="On this page">
      <div className={styles.tocTrack} aria-hidden="true">
        <div
          className={styles.tocIndicator}
          style={{
            transform: `translate3d(0, ${indicator.top}px, 0)`,
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
