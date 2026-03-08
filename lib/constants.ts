import {
  UserSearch,
  Building2,
  Hourglass,
  Search,
  PenTool,
  Bot,
  Workflow,
  Rocket,
  HeartHandshake,
  Target,
  Globe,
  Database,
  SlidersHorizontal,
  TrendingUp,
  Presentation,
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
  headline: "The revenue engine your startup is missing.",
  subheadline:
    "Runrait builds complete go-to-market systems for early-stage startups. Strategy, infrastructure, and AI agents, all connected as one system.",
  cta: "Book a Discovery Call",
  ctaHref: "#cta",
};

export const PROBLEM = {
  headline: "You have product-market fit. You don\u2019t have a revenue engine.",
  body: "Revenue growth is manual, founder-dependent, and not scaling. Your CRM is half set up. Outbound is inconsistent. Nothing connects.",
  closing: "You don\u2019t need more tactics. You need a system.",
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
      title: "Hire a Head of Growth",
      description:
        "$180\u2013250k+. 6\u201312 months before results. High risk of a bad hire.",
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
  headline: "Your GTM system. Designed, built, and ready to run.",
  body: "Runrait embeds with your team and builds the complete go-to-market system your startup needs. We start with discovery to find the right motion for your product and market. Then we design the strategy, build the infrastructure, and deploy AI agents that keep the system running.",
  body2:
    "We\u2019re not an agency selling tactics. We\u2019re not a hire you need to manage. We build the system, connect every piece, and make it yours.",
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
      tagline: "Build what\u2019s missing. Fix what\u2019s broken. Connect everything.",
      body: "We build the GTM infrastructure in components. Everything connected, everything measurable, everything yours. No lock-in, no proprietary tools.",
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
    title: "Research agent",
    description:
      "Monitors market signals, competitor moves, and ICP behaviour. Keeps your positioning sharp with data instead of guesswork. Feeds insights into content and outbound.",
  },
  {
    icon: PenTool,
    title: "Content agent",
    description:
      "Generates content against your messaging framework, maintains publishing cadence, repurposes across channels, and distributes on schedule.",
  },
  {
    icon: Bot,
    title: "SDR agent",
    description:
      "Researches prospects, personalises outreach, sends sequences, handles replies, and books meetings. Runs 24/7 across your target accounts.",
  },
  {
    icon: Workflow,
    title: "Pipeline agent",
    description:
      "Monitors deal activity, flags stalled deals, triggers follow-ups, updates your CRM, and keeps pipeline hygiene tight without anyone chasing it.",
  },
  {
    icon: Rocket,
    title: "Onboarding agent",
    description:
      "Triggers activation sequences for new customers, monitors first-value milestones, escalates at-risk accounts early, and bridges the gap between closing and retention.",
  },
  {
    icon: HeartHandshake,
    title: "Customer success agent",
    description:
      "Monitors usage patterns, flags churn risk, triggers onboarding sequences, and surfaces expansion opportunities based on behaviour signals.",
  },
];

export const SYSTEM_POWERED: SystemCard[] = [
  {
    icon: Target,
    title: "Positioning and messaging",
    description:
      "AI-driven research, competitor analysis, and message testing. Your team makes the strategic calls on a foundation of data, not guesswork.",
  },
  {
    icon: Globe,
    title: "Website and landing pages",
    description:
      "AI-built, conversion-optimised, and continuously tested. Connected to your analytics and updated based on performance data.",
  },
  {
    icon: Database,
    title: "CRM and pipeline architecture",
    description:
      "AI-configured deal stages, lead scoring, and automated workflows. A single source of truth for your pipeline that stays clean on its own.",
  },
  {
    icon: SlidersHorizontal,
    title: "Lead scoring and qualification",
    description:
      "AI scores and routes based on behaviour and fit. Sets the rules, learns from outcomes, and gets sharper over time.",
  },
  {
    icon: TrendingUp,
    title: "Analytics and reporting",
    description:
      "AI surfaces insights, detects anomalies, and generates reports. Your team interprets and acts on what matters.",
  },
  {
    icon: Presentation,
    title: "Sales enablement",
    description:
      "AI generates decks, case studies, and objection handling materials from your data. Your team refines for context and uses them to close.",
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
    ["Time to value", "Ongoing, incremental", "6\u201312 months", "Weeks, not months"],
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
      title: "End-to-end.",
      description:
        "Strategy, infrastructure, AI agents, and ongoing management. No handoffs between teams. Everything connects because one team holds the whole picture.",
    },
    {
      icon: Zap,
      title: "AI agents built in.",
      description:
        "Parts of your GTM system run themselves. AI handles outreach, pipeline management, and routine operations at scale. You get a system that works while you sleep.",
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
    "Built for founders closing the gap between PMF and repeatable revenue.",
  body: "Seed-to-Series-A startups with proven PMF but no scalable GTM system.",
  fitLabel: "You might be a fit if:",
  items: [
    { icon: User, text: "You\u2019re the CEO doing sales and it\u2019s not scaling." },
    { icon: CircleX, text: "Agencies and marketing hires haven\u2019t moved the needle." },
    { icon: Users, text: "Paying customers but no repeatable process to find more." },
    { icon: Compass, text: "Not sure if you should be inbound, outbound, or product-led." },
    { icon: CircleCheckBig, text: "You need someone who gets it, not someone to manage." },
  ] as FitItem[],
};

export const CTA_SECTION = {
  headline: "Start with Discovery.",
  body: "Tell us where you\u2019re at and where the gaps are. If there\u2019s a fit, we\u2019ll map the path forward.",
  submitLabel: "Book a Discovery Call",
};
