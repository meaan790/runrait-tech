import {
  UserSearch,
  Building2,
  Hourglass,
  Package,
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
  Palette,
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
  { label: "What Gets Built", href: "#what-gets-built" },
];

export const HERO = {
  headline: "Scale your revenue without scaling your team.",
  subheadline:
    "Runrait builds AI-powered GTM systems that give your team the output of a full go-to-market org.",
  cta: "Book a Discovery Call",
  ctaHref: "https://calendar.app.google/PmoSPF4DyqnD6akk6",
};

export interface OptionCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const PROBLEM = {
  headlineLine1: "You have product-market fit.",
  headlineLine2: "You don\u2019t have a revenue engine yet.",
  body: "Customers are paying. But revenue growth is manual, founder-dependent, and not scaling.\n\nYou\u2019re doing sales from your inbox. Marketing is a landing page and some LinkedIn posts. The CRM is half set up. Nothing connects to anything.\n\nThe board is asking about pipeline. The next raise depends on showing repeatable revenue. And GTM keeps getting the leftover hours.",
  cards: [
    {
      icon: UserSearch,
      title: "Build a GTM team",
      description:
        "$500k+ in salaries before anyone\u2019s ramped. 6\u201312 months before you see results. That\u2019s runway you don\u2019t have and time you can\u2019t afford.",
    },
    {
      icon: Package,
      title: "Buy a SaaS platform",
      description:
        "Off-the-shelf tools built for someone else\u2019s workflow. They don\u2019t know your market or your motion, and they rarely fit with what you\u2019re already using.",
    },
    {
      icon: Building2,
      title: "Hire an agency",
      description:
        "They\u2019ll run a channel or produce content, but they don\u2019t build systems. You get deliverables, not infrastructure. No one owns the strategy.",
    },
    {
      icon: Hourglass,
      title: "Do it yourself",
      description:
        "You\u2019re already stretched across product, fundraising, and customer success. GTM gets whatever time is left, and it shows.",
    },
  ] as OptionCard[],
  transition: "There is a better option.",
};

export interface PhaseCard {
  number: string;
  title: string;
  tagline: string;
  body: string;
}

export const HOW_IT_WORKS: {
  headline: string;
  intro: string;
  phases: PhaseCard[];
} = {
  headline: "Discover. Build. Run.",
  intro:
    "Every startup is at a different stage. We scope the engagement to where you actually are, not a fixed checklist.",
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

export const WHAT_GETS_BUILT = {
  headline: "The GTM team you\u2019d hire. Built for you as a system.",
  intro:
    "Every engagement is different. We build AI agents that run your GTM autonomously, and AI-powered systems your team uses daily. Here\u2019s what that looks like in practice.",
  agentsLabel: "AI agents",
  agentsIntro:
    "These run autonomously across your GTM. They research, create, outreach, manage pipeline, generate demand, and handle customer operations without adding headcount.",
  agentsFootnote: "Every system is different. We scope yours during discovery.",
  poweredLabel: "AI-powered systems",
  poweredIntro:
    "The infrastructure your team uses daily. AI sits across each one, keeping everything connected, optimised, and current.",
  poweredFootnote: "Plus lead scoring, brand voice, design systems, email nurture, and more depending on what you need.",
};

export const FEATURED_AGENTS: SystemCard[] = [
  {
    icon: Search,
    title: "Product Marketing Agent",
    description:
      "Runs competitive analysis, refines positioning, builds messaging frameworks, and keeps your ICP research current.",
  },
  {
    icon: Bot,
    title: "SDR Agent",
    description:
      "Researches prospects, personalises outreach, sends sequences, handles replies, and books meetings. Runs 24/7 across your target accounts.",
  },
  {
    icon: Settings,
    title: "Revenue Ops Agent",
    description:
      "Manages deal progression, flags stalled deals, triggers follow-ups, and keeps CRM hygiene tight. Your revenue operations run without anyone chasing them.",
  },
  {
    icon: HeartHandshake,
    title: "CS Ops Agent",
    description:
      "Monitors account health, flags churn risk, prepares QBR data, and surfaces expansion opportunities.",
  },
];

export const FEATURED_SYSTEMS = [
  "Messaging and positioning",
  "Website and landing pages",
  "Pipeline management",
  "Analytics and reporting",
  "Sales enablement",
];

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
        "We don\u2019t build until we understand your product, market, and the right motion. This prevents the most common mistake in early-stage GTM: building the wrong system for the wrong audience.",
    },
    {
      icon: Layers,
      title: "Full stack, one engagement.",
      description:
        "Strategy, systems, agents, execution. No handoffs between five different vendors. Everything connects because it was built as one system.",
    },
    {
      icon: Zap,
      title: "AI amplifies your team.",
      description:
        "The agents and systems we build give your startup the GTM output of a much larger team. You stay lean. The system scales.",
    },
    {
      icon: ShieldCheck,
      title: "You own everything.",
      description:
        "No proprietary platforms. No lock-in. When we\u2019re done, the system is yours. We document everything so your team can operate and evolve it independently.",
    },
  ],
};

export interface FitItem {
  icon: LucideIcon;
  text: string;
}

export const WHO_ITS_FOR = {
  headline:
    "Built for founders who want to scale revenue with a lean team.",
  body: "Runrait works best with seed-to-Series-A startups that have proven product-market fit but haven\u2019t built a scalable go-to-market system yet.",
  fitLabel: "You might be a fit if:",
  items: [
    { icon: TrendingUp, text: "You\u2019ve raised seed or Series A and need to show revenue growth." },
    { icon: User, text: "You\u2019re the founder still doing sales and it\u2019s not scaling." },
    { icon: CircleX, text: "You\u2019ve tried an agency or marketing hire and it didn\u2019t move the needle." },
    { icon: Compass, text: "You know you need a GTM system but don\u2019t have the time or expertise to build it properly." },
    { icon: CircleCheckBig, text: "You want to scale revenue without scaling headcount." },
  ] as FitItem[],
};

export const CTA_SECTION = {
  headline: "Start with Discovery.",
  body: "Every engagement begins with a conversation. Tell us where you\u2019re at and where the gaps are. If there\u2019s a fit, we\u2019ll map the path forward together.",
  submitLabel: "Book a Discovery Call",
};
