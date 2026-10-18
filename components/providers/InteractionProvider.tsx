"use client";

import { MotionConfig } from "motion/react";
import { useEffect, type ReactNode } from "react";
import { sound } from "@/lib/sound";

/**
 * Unlocks Web Audio on the first real user gesture and applies
 * Motion's reduced-motion preference globally.
 */
export function InteractionProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    let unlocked = false;

    const unlock = () => {
      if (unlocked) return;
      unlocked = true;
      void sound.unlock();
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };

    window.addEventListener("pointerdown", unlock, { passive: true });
    window.addEventListener("keydown", unlock);

    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
    };
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
