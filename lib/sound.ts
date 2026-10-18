/**
 * Lightweight Web Audio sound bus for short UI SFX.
 * No asset files — tiny synthesized tones keep the first paint fast.
 * AudioContext stays suspended until unlock() after a user gesture.
 */

export type SoundId = "tap" | "soft" | "hover";

type SoundOptions = {
  volume?: number;
};

type Tone = {
  frequency: number;
  duration: number;
  type: OscillatorType;
  attack: number;
  volume: number;
};

const TONES: Record<SoundId, Tone> = {
  tap: { frequency: 620, duration: 0.045, type: "triangle", attack: 0.004, volume: 0.08 },
  soft: { frequency: 420, duration: 0.08, type: "sine", attack: 0.01, volume: 0.06 },
  hover: { frequency: 880, duration: 0.03, type: "sine", attack: 0.002, volume: 0.03 },
};

class SoundEngine {
  private ctx: AudioContext | null = null;
  private unlocked = false;
  private enabled = true;
  private lastHoverAt = 0;

  isUnlocked() {
    return this.unlocked;
  }

  isEnabled() {
    return this.enabled;
  }

  setEnabled(enabled: boolean) {
    this.enabled = enabled;
  }

  async unlock() {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      this.enabled = false;
      return;
    }

    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();
    }

    if (this.ctx.state === "suspended") {
      await this.ctx.resume();
    }

    this.unlocked = this.ctx.state === "running";
  }

  play(id: SoundId, options: SoundOptions = {}) {
    if (!this.enabled || !this.unlocked || !this.ctx) return;

    if (id === "hover") {
      const now = performance.now();
      if (now - this.lastHoverAt < 90) return;
      this.lastHoverAt = now;
    }

    const tone = TONES[id];
    const volume = Math.max(0, Math.min(1, options.volume ?? tone.volume));
    const now = this.ctx.currentTime;

    const oscillator = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    oscillator.type = tone.type;
    oscillator.frequency.setValueAtTime(tone.frequency, now);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + tone.attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + tone.duration);

    oscillator.connect(gain);
    gain.connect(this.ctx.destination);

    oscillator.start(now);
    oscillator.stop(now + tone.duration + 0.02);
  }
}

export const sound = new SoundEngine();
