import {
  UserSearch,
  Building2,
  Hourglass,
  Search,
  PenTool,
  Bot,
  Megaphone,
  Settings,
  HeartHandshake,
  Target,
  Globe,
  Database,
  SlidersHorizontal,
  TrendingUp,
  Presentation,
  Mail,
  Sparkles,
  Layers,
  Zap,
  ShieldCheck,
  User,
  CircleX,
  Users,
  Compass,
  CircleCheckBig,
  type LucideIcon,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Who It's For", href: "#who-its-for" },
];

export const HERO = {
  headline: "Scale your revenue without scaling your team.",
  subheadline:
    "Runrait builds AI-powered GTM systems that give founders the output of a full go-to-market team. Without the headcount.",
  cta: "Book a Discovery Call",
  ctaHref: "https://calendar.app.google/PmoSPF4DyqnD6akk6",
};

export const PROBLEM = {
  headlineLine1: "You have product-market fit.",
  headlineLine2: "You don\u2019t have a revenue engine yet.",
  body: "Customers are paying. Retention looks good. But growth looks like this:",
  symptoms: [
    { icon: User, label: "Founder-led sales", detail: "You\u2019re closing every deal yourself. It works, but it doesn\u2019t scale." },
    { icon: CircleX, label: "Disconnected tools", detail: "CRM half set up. Outbound inconsistent. Analytics you don\u2019t trust. Nothing connects." },
    { icon: TrendingUp, label: "No repeatable process", detail: "Revenue grows when you push. It stalls when you stop. There\u2019s no system running without you." },
  ],
  closing: "You don\u2019t need more tactics. You need a revenue engine.",
};

export interface OptionCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const TYPICAL_OPTIONS: {
  headline: string;
  cards: OptionCard[];
  transition: string;
} = {
  headline: "The usual paths don\u2019t solve the problem.",
  cards: [
    {
      icon: UserSearch,
      title: "Build a GTM team",
      description:
        "$500k+ in salaries across 5 hires. 6\u201312 months before it\u2019s working. And you\u2019re managing a team.",
    },
    {
      icon: Building2,
      title: "Bring in an Agency",
      description:
        "Deliverables, not infrastructure. No one owns strategy. Pieces don\u2019t connect.",
    },
    {
      icon: Hourglass,
      title: "Do It Yourself",
      description:
        "You\u2019re stretched across product, fundraising, and hiring. GTM gets whatever time is left.",
    },
  ],
  transition: "There\u2019s a fourth option.",
};

export const WHAT_RUNRAIT_DOES = {
  headline: "The GTM team you\u2019d hire. Built as a system.",
  body: "Runrait embeds with your team and builds an AI-powered go-to-market system that does the work of a full GTM org. Outreach, pipeline management, content, lead gen, reporting, customer success. All running, all connected, without the headcount.",
  body2: "We start with discovery to find the right motion for your product and market. Then we build iteratively, shipping components that generate results early, not a 6-month buildout you have to wait on. Each piece connects to the last, so the system compounds as it grows.",
  body3: "You stay lean. Your capital goes further.\nAnd your revenue engine scales without your team needing to.",
};

export interface PhaseCard {
  number: string;
  title: string;
  tagline: string;
  body: string;
}

export const HOW_IT_WORKS: {
  headline: string;
  phases: PhaseCard[];
} = {
  headline: "Discover. Build. Run.",
  phases: [
    {
      number: "01",
      title: "Discover",
      tagline: "Understand the right motion before building anything.",
      body: "We dig into your product, market, customers, and current GTM state. We map the fastest path to repeatable revenue. Available as a standalone engagement.",
    },
    {
      number: "02",
      title: "Build",
      tagline: "Quick wins first. Full system over time.",
      body: "We ship in chunks, not phases. You see results in weeks, not quarters. Each component goes live as it\u2019s ready, so value compounds while we\u2019re still building.",
    },
    {
      number: "03",
      title: "Run",
      tagline: "Handover or ongoing. Your call.",
      body: "We document everything and train your team for a clean handover. Or stay embedded month to month, optimising based on real data.",
    },
  ],
};

export interface SystemCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SYSTEM_AGENTS: SystemCard[] = [
  {
    icon: Search,
    title: "Product Marketing Agent",
    description:
      "Runs competitive analysis, refines positioning, builds messaging frameworks, and keeps your ICP research current. Feeds strategy into content, campaigns, and outbound.",
  },
  {
    icon: PenTool,
    title: "Content Agent",
    description:
      "Generates content against your messaging framework, maintains publishing cadence, repurposes across channels, and distributes on schedule.",
  },
  {
    icon: Bot,
    title: "SDR Agent",
    description:
      "Researches prospects, personalises outreach, sends sequences, handles replies, and books meetings. Runs 24/7 across your target accounts.",
  },
  {
    icon: Megaphone,
    title: "Demand Gen Agent",
    description:
      "Generates demand across channels, coordinates inbound and outbound motions, runs campaigns, and optimises based on performance data. Fills the top of your pipeline without a dedicated hire.",
  },
  {
    icon: Settings,
    title: "Revenue Ops Agent",
    description:
      "Manages deal progression, flags stalled deals, triggers follow-ups, keeps CRM hygiene tight, and maintains pipeline accuracy. Your revenue operations run without anyone chasing them.",
  },
  {
    icon: HeartHandshake,
    title: "CS Ops Agent",
    description:
      "Monitors account health, prepares QBR data, flags churn risk, pulls usage reports, and surfaces expansion opportunities. Keeps CS operations tight without manual tracking.",
  },
];

export const SYSTEM_POWERED: SystemCard[] = [
  {
    icon: Target,
    title: "Messaging AI",
    description:
      "AI-driven research, competitor analysis, and message testing. Your team makes the strategic calls on a foundation of data, not guesswork.",
  },
  {
    icon: Globe,
    title: "Website AI",
    description:
      "AI-built, conversion-optimised, and continuously tested. Connected to your analytics and updated based on performance data.",
  },
  {
    icon: Database,
    title: "CRM AI",
    description:
      "AI-configured deal stages, lead scoring, and automated workflows. A single source of truth for your pipeline that stays clean on its own.",
  },
  {
    icon: SlidersHorizontal,
    title: "Lead Scoring AI",
    description:
      "Scores and routes based on behaviour and fit. Sets the rules, learns from outcomes, and gets sharper over time.",
  },
  {
    icon: TrendingUp,
    title: "Analytics AI",
    description:
      "Surfaces insights, detects anomalies, and generates reports. Your team interprets and acts on what matters.",
  },
  {
    icon: Presentation,
    title: "Sales Enablement AI",
    description:
      "Generates decks, case studies, and objection handling materials from your data. Your team refines for context and uses them to close.",
  },
  {
    icon: Mail,
    title: "Email Nurture AI",
    description:
      "Drip campaigns, intent-based triggers, and lifecycle nurtures. Automated follow-up at scale, personalised to where each lead is in the journey.",
  },
  {
    icon: Sparkles,
    title: "Brand Voice AI",
    description:
      "Tone enforcement, copy review, and style guide alignment across all outputs. Keeps every touchpoint consistent without manual QA.",
  },
];

export const SYSTEM_SECTION = {
  headline: "The system, not a stack of deliverables.",
  intro:
    "The scope is different for every startup. But here\u2019s what a complete GTM system looks like when all the pieces are in place.",
  agentsLabel: "AI agents",
  poweredLabel: "AI-powered systems",
  closing: "Scoped to what you need. Connected as one system. Yours to keep.",
};

export const COMPARISON = {
  headline: "Not an agency. Not a hire. A system.",
  headers: ["", "Agency", "GTM Hire", "Runrait"],
  rows: [
    ["What you get", "Tactics and deliverables", "A person (eventually)", "A working GTM system"],
    ["Time to value", "Ongoing, incremental", "6\u201312 months", "Quick wins in weeks. Full system over time."],
    ["Strategy included", "Rarely", "Depends on the hire", "Always. Discovery first."],
    ["Execution included", "Partial (their channel)", "Depends on bandwidth", "End-to-end"],
    ["System thinking", "Siloed", "Varies", "Core to the approach"],
    ["Cost", "$5\u201315k/mo retainer", "$180\u2013250k+ salary", "Project-based, outcome-aligned"],
  ],
};

export interface WhyBlock {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const WHY_IT_WORKS: {
  headline: string;
  blocks: WhyBlock[];
} = {
  headline: "Four reasons this model works.",
  blocks: [
    {
      icon: Search,
      title: "Discovery first.",
      description:
        "We don\u2019t build until we understand your product, market, and the right motion. This prevents the number one mistake in early-stage GTM: building the wrong system for the wrong audience.",
    },
    {
      icon: Layers,
      title: "Quick wins, then compound.",
      description:
        "We don\u2019t disappear for 6 months and hand you a system. You get working pieces from week one. Each component goes live as it\u2019s ready, so results start before the full build is done.",
    },
    {
      icon: Zap,
      title: "AI replaces headcount.",
      description:
        "Your SDR, pipeline manager, content engine, and customer success workflows run as AI agents. You get the output of a full GTM team without the salaries, the management overhead, or the ramp time.",
    },
    {
      icon: ShieldCheck,
      title: "You own everything.",
      description:
        "No proprietary platforms. No lock-in. When we\u2019re done, the system is yours. We document everything so your team can operate and evolve it.",
    },
  ],
};

export interface FitItem {
  icon: LucideIcon;
  text: string;
}

export const WHO_ITS_FOR = {
  headline:
    "Built for founders who want to scale revenue, not headcount.",
  body: "Runrait works best with seed-to-Series-A startups (typically B2B SaaS, marketplace, fintech, or tech-enabled services) that have proven product-market fit but haven\u2019t built a scalable go-to-market system yet.",
  fitLabel: "You might be a fit if:",
  items: [
    { icon: User, text: "You\u2019re the CEO doing sales and it\u2019s not scaling." },
    { icon: CircleX, text: "You\u2019d rather spend capital on product and engineering than a GTM team." },
    { icon: Users, text: "You\u2019ve tried an agency or a marketing hire and it didn\u2019t move the needle." },
    { icon: Compass, text: "You have paying customers but no repeatable process to find more of them." },
    { icon: CircleCheckBig, text: "You want the output of a GTM team without building one." },
  ] as FitItem[],
};

export const CTA_SECTION = {
  headline: "Start with Discovery.",
  body: "Tell us where you\u2019re at and where the gaps are. If there\u2019s a fit, we\u2019ll map the path forward.",
  submitLabel: "Book a Discovery Call",
};
