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

function sectionAbsTop(id: string) {
  const section = document.getElementById(id);
  if (!section) return null;
  return window.scrollY + section.getBoundingClientRect().top;
}

export function CaseStudyToc({ links }: CaseStudyTocProps) {
  const [activeId, setActiveId] = useState(links[0]?.id ?? "");
  const [indicator, setIndicator] = useState({ top: 0, height: 14 });
  const listRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const homeIdRef = useRef(links[0]?.id ?? "");
  const reduceMotionRef = useRef(false);

  const placeOnLink = useCallback((id: string) => {
    const list = listRef.current;
    const link = linkRefs.current.get(id);
    if (!list || !link) return;

    const listBox = list.getBoundingClientRect();
    const linkBox = link.getBoundingClientRect();
    setIndicator({
      top: linkBox.top - listBox.top,
      height: Math.max(12, linkBox.height),
    });
    setActiveId(id);
  }, []);

  const updateFromScroll = useCallback(() => {
    const ids = links.map((link) => link.id);
    const list = listRef.current;
    if (ids.length === 0 || !list) return;

    if (!homeIdRef.current || !ids.includes(homeIdRef.current)) {
      homeIdRef.current = ids[0];
    }

    const homeId = homeIdRef.current;
    const homeIndex = ids.indexOf(homeId);
    const homeLink = linkRefs.current.get(homeId);
    if (!homeLink || homeIndex < 0) return;

    const listBox = list.getBoundingClientRect();
    const homeBox = homeLink.getBoundingClientRect();
    const homeTop = homeBox.top - listBox.top;
    const homeHeight = Math.max(12, homeBox.height);
    const homeBottom = homeTop + homeHeight;
    const probeY = window.scrollY + SCROLL_PROBE;
    const homeStart = sectionAbsTop(homeId);
    if (homeStart == null) return;

    const nextId = ids[homeIndex + 1];
    const prevId = ids[homeIndex - 1];

    if (reduceMotionRef.current) {
      let committed = ids[0];
      for (const id of ids) {
        const top = sectionAbsTop(id);
        if (top != null && top <= probeY) committed = id;
      }
      homeIdRef.current = committed;
      placeOnLink(committed);
      return;
    }

    // Stretch down toward the next section; snap the instant we arrive.
    if (nextId) {
      const nextStart = sectionAbsTop(nextId);
      const nextLink = linkRefs.current.get(nextId);
      if (nextStart != null && nextLink) {
        const range = nextStart - homeStart;
        const progress = range > 0 ? (probeY - homeStart) / range : 0;

        if (progress >= 1) {
          homeIdRef.current = nextId;
          placeOnLink(nextId);
          return;
        }

        if (progress > 0) {
          const nextBox = nextLink.getBoundingClientRect();
          const nextTop = nextBox.top - listBox.top;
          const eased = smoothstep(progress);
          // Keep the top pinned; only the leading edge grows downward.
          const height = homeHeight + (nextTop - homeTop) * eased;
          setIndicator({ top: homeTop, height: Math.max(homeHeight, height) });
          setActiveId(homeId);
          return;
        }
      }
    }

    // Stretch up toward the previous section while scrolling back.
    if (prevId && probeY < homeStart) {
      const prevStart = sectionAbsTop(prevId);
      const prevLink = linkRefs.current.get(prevId);
      if (prevStart != null && prevLink) {
        const range = homeStart - prevStart;
        const progress = range > 0 ? (homeStart - probeY) / range : 0;

        if (progress >= 1) {
          homeIdRef.current = prevId;
          placeOnLink(prevId);
          return;
        }

        if (progress > 0) {
          const prevBox = prevLink.getBoundingClientRect();
          const prevTop = prevBox.top - listBox.top;
          const eased = smoothstep(progress);
          // Keep the bottom pinned; grow the top edge upward.
          const top = homeTop + (prevTop - homeTop) * eased;
          setIndicator({
            top,
            height: Math.max(homeHeight, homeBottom - top),
          });
          setActiveId(homeId);
          return;
        }
      }
    }

    // Resting on the snapped section.
    setIndicator({ top: homeTop, height: homeHeight });
    setActiveId(homeId);
  }, [links, placeOnLink]);

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
                homeIdRef.current = link.id;
                placeOnLink(link.id);
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
