export const CASE_META = {
  title: "PropGPT",
  subtitle: "AI props analysis",
  hero: "Making Winning Easier for Sports Bettors",
  downloadLabel: "Download here",
  downloadHref: "#",
  role: "Product Designer/Engineer",
  stack: "Figma, React Native, JS, Storybook, Github, Cursor",
  team: "Eyal (Founder), Alex (Engineer), Shai (Engineer)",
  timeline: "Jan 2025 – Oct 2025",
};

export const SIDEBAR_LINKS = [
  { id: "context", label: "Context" },
  { id: "problem", label: "Problem" },
  { id: "improvements", label: "Improvements" },
  { id: "new-flows", label: "New flows" },
  { id: "features", label: "Features" },
  { id: "conclusion", label: "Conclusion" },
] as const;

export const CONTEXT = {
  label: "Context",
  heading: "How I turned Curiosity into Clarity",
  paragraphs: [
    "I joined PropGPT without a deep sports-betting background. That outsider lens became an advantage: every screen, label, and decision path had to make sense without tribal knowledge. Raw sports data is dense — odds, lines, models, and confidence signals stacked on top of each other — and the product had to turn that density into something bettors could act on quickly.",
    "Under tight deadlines I redesigned the core experience from the ground up: simplifying evaluation flows, separating discovery from commitment, and building a scalable design system so engineering could ship consistently. The goal was clarity — not more charts — so users could move from curiosity to a confident pick without leaving the app.",
  ],
};

export const PROBLEM = {
  label: "Problem",
  heading:
    "PropGPT’s power was hidden behind confusing flows and cluttered screens.",
  cards: [
    {
      title: "One Flow Tried to Do Two Jobs",
      body: "Evaluating a single bet and building a parlay lived in the same tangled path. Users couldn’t tell whether they were exploring a pick or committing to a slip, which slowed decisions and created avoidable mistakes.",
    },
    {
      title: "No Discovery, Users Went to Discord",
      body: "Without a trustworthy in-app way to scan insights quickly, people left for Discord and other side channels. The product’s intelligence never got a chance to earn confidence at the moment of discovery.",
    },
    {
      title: "Every Bet Was Auto-Saved to Parlays",
      body: "Individual bets were automatically dumped into parlays. There was no clean separation between “save this pick” and “build a multi-leg slip,” which frustrated users who wanted control over what stuck around.",
    },
  ],
};

export const FEEDBACK = {
  label: "Some of the comments users made in testing",
  comments: [
    {
      user: "QuantumNomad42",
      meta: "commented on post",
      body: "I like the picks but I never know if I’m just looking or already building a parlay.",
    },
    {
      user: "VelvetPineapple",
      meta: "commented on post",
      body: "I end up asking in Discord what’s good today because the home screen doesn’t help me scan fast.",
    },
    {
      user: "NachoAverageJoe",
      meta: "commented on post",
      body: "Why did that bet show up in my parlays? I only wanted to check the line.",
    },
    {
      user: "StatLineSam",
      meta: "commented on post",
      body: "Too many numbers at once. Tell me what matters for this prop, then let me dig.",
    },
    {
      user: "ParlayParker",
      meta: "commented on post",
      body: "Building a slip feels bolted onto evaluating a single bet. Split those jobs.",
    },
    {
      user: "ClarityClaire",
      meta: "commented on post",
      body: "If I trusted the discovery feed more, I wouldn’t leave the app mid-session.",
    },
  ],
};

export const IMPROVEMENTS = {
  label: "Improvements",
  heading: "Bringing Clarity in every flow",
  paragraphs: [
    "We rebuilt the information architecture around one principle: each screen should answer a single job. Discovery, evaluation, and parlay-building became distinct modes with clear entry and exit points.",
    "Labels, hierarchy, and progressive disclosure were tightened so model confidence and supporting stats appear when they help — not before the user knows what they’re looking at.",
  ],
};

export const NEW_FLOWS = {
  label: "New flows",
  heading: "Evaluate Bet user flow",
  steps: [
    {
      title: "Evaluate Bet user flow — Explore",
      body: "Users land on a focused evaluation surface for a single prop: the claim, the line, and the primary signal. Secondary stats stay available without crowding the first decision.",
    },
    {
      title: "Evaluate Bet user flow — Decide",
      body: "Confidence, context, and risk are staged so the next action is obvious — dig deeper, save the pick, or move on — without accidentally mutating a parlay.",
    },
    {
      title: "Evaluate Bet user flow — Commit",
      body: "Commitment is explicit. Saving a bet, adding to a parlay, or sharing an insight are separate actions with clear confirmation, so intent always matches outcome.",
    },
  ],
};

export const FEATURES = {
  label: "Features",
  heading: "What shipped to support the new model",
  items: [
    {
      title: "Discovery that earns trust",
      body: "A scannable insights surface keeps high-signal props in-product, reducing the need to bounce to Discord for “what’s good today.”",
    },
    {
      title: "Evaluate vs. build, separated",
      body: "Single-bet evaluation and parlay construction no longer share one ambiguous path. Each flow has its own structure, language, and exit.",
    },
    {
      title: "Intentional saving",
      body: "Bets are no longer auto-saved into parlays. Users choose what persists, which lowers frustration and makes slips feel deliberate.",
    },
  ],
};

export const CONCLUSION = {
  label: "Conclusion",
  heading: "Clarity compounds",
  paragraphs: [
    "PropGPT’s edge was never missing data — it was buried under flows that asked users to do two jobs at once. Separating discovery, evaluation, and commitment made the product feel faster even when the underlying models stayed the same.",
    "The design system and clearer IA also gave engineering a stable base to iterate. The result is an experience where bettors can move from curiosity to a confident action without leaving the app — and without fighting the UI.",
  ],
};
