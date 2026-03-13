import {
  UserSearch,
  Building2,
  Hourglass,
  Package,
  TrendingUp,
  ShieldCheck,
  User,
  CircleX,
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
    "Runrait builds AI-powered GTM systems that give your team the output of a full go-to-market org, without the headcount.",
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
  headlineLine2: "You don\u2019t have a revenue engine\u2026 yet.",
  body: "Customers are paying. But revenue growth is manual, founder-dependent, and not scaling.",
  cards: [
    {
      icon: User,
      title: "Founder-led sales",
      description:
        "You\u2019re closing every deal yourself. It works, but it doesn\u2019t scale.",
    },
    {
      icon: CircleX,
      title: "Disconnected tools",
      description:
        "CRM half set up. Outbound inconsistent. Analytics you don\u2019t trust. Nothing connects.",
    },
    {
      icon: TrendingUp,
      title: "No repeatable process",
      description:
        "Revenue grows when you push. It stalls when you stop. There\u2019s no system running without you.",
    },
  ] as OptionCard[],
  transition: "You don\u2019t need more tactics. You need a repeatable system to power revenue.",
};

export const TYPICAL_OPTIONS = {
  headline: "The usual paths don\u2019t solve the problem.",
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
  transition: "There is a 5th option.",
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
    "Runrait embeds with your team and builds an AI-powered GTM system. Here\u2019s how we do it.",
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
      body: "We ship in sprints, not full projects. You get outcomes in your first sprint, not quarters. Each component goes live as it\u2019s ready, so value compounds while we\u2019re still building.",
    },
    {
      number: "03",
      title: "Run",
      tagline: "Handover or ongoing. Your call.",
      body: "We document everything and train your team for a clean handover. Or stay embedded month to month, optimising based on real data.",
    },
  ],
};

export const GTM_OS = {
  headlineLine1: "The GTM team you\u2019d hire.",
  headlineLine2: "Built as your operating system.",
  intro:
    "Your founding team and one GTM hire, augmented by AI agents and AI-powered systems.",
  introLine2: "The output of a full go-to-market org.",
  traditionalCost: "$500k+/year in salaries. 6\u201312 months before results.",
  closing:
    "Every system is different. Yours is scoped during discovery based on your product, market, and current state.",
};

export const TRADITIONAL_ROLES = [
  "Marketing Manager",
  "SDR",
  "Content Marketer",
  "Demand Gen Exec",
  "Rev Ops Analyst",
  "CS Manager",
];

export const GTM_HIRE_AGENTS = [
  { name: "Product Marketing Agent", desc: "Positioning, messaging, ICP research" },
  { name: "SDR Agent", desc: "Outbound prospecting, sequences, meetings" },
  { name: "Content Agent", desc: "Blog, case studies, social, distribution" },
  { name: "Demand Gen Agent", desc: "Campaigns, lead gen, nurture" },
  { name: "Revenue Ops Agent", desc: "Pipeline, deal progression, CRM hygiene" },
  { name: "CS Ops Agent", desc: "Account health, renewals, expansion" },
  { name: "Marketing Ops Agent", desc: "Attribution, automation, reporting" },
];

export const GTM_HIRE_SYSTEMS = [
  { name: "Messaging AI", desc: "Positioning and value props" },
  { name: "Website AI", desc: "Landing pages and conversion" },
  { name: "Pipeline AI", desc: "CRM and deal tracking" },
  { name: "Analytics AI", desc: "Dashboards and reporting" },
  { name: "Enablement AI", desc: "Decks, one-pagers, battlecards" },
  { name: "Lead Scoring AI", desc: "Intent signals and prioritisation" },
  { name: "Email Nurture AI", desc: "Drip campaigns and sequences" },
  { name: "Brand Voice AI", desc: "Tone, style, consistency" },
  { name: "Design System AI", desc: "Templates and brand assets" },
  { name: "Competitive Intel AI", desc: "Market and competitor tracking" },
  { name: "Social AI", desc: "Distribution and engagement" },
  { name: "SEO AI", desc: "Search visibility and content" },
  { name: "AEO / GEO AI", desc: "AI and generative engine optimisation" },
  { name: "Data Enrichment AI", desc: "Lead and account data" },
  { name: "Attribution AI", desc: "Channel and campaign performance" },
  { name: "Onboarding AI", desc: "Customer activation flows" },
];

export const COMPARISON = {
  headline: "Not an agency. Not a hire. A GTM system.",
  headers: ["", "Agency", "GTM Hires", "Runrait"],
  rows: [
    ["What you get", "Tactics and deliverables", "4–6 hires", "A working GTM system"],
    ["Time to value", "Ongoing, incremental", "6\u201312 months", "Quick wins in weeks. Full system over time."],
    ["Strategy included", "Rarely", "Depends on the hire", "Always. Discovery first."],
    ["Execution included", "Partial (their channel)", "Depends on bandwidth", "End-to-end"],
    ["System thinking", "Siloed", "Varies", "Core to the approach"],
    ["Cost", "$5\u201315k/mo retainer", "$500k+/year in salaries", "Project-based, outcome-aligned"],
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
    { icon: ShieldCheck, text: "You want to own the system \u2014 no lock-in, no proprietary platforms." },
  ] as FitItem[],
};

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is Runrait?",
    answer:
      "Runrait builds AI-powered go-to-market systems for startups. We embed with your founding team, build AI agents that run your GTM autonomously, and set up the AI-powered systems your team uses daily. The result is the output of a full go-to-market org without the headcount.",
  },
  {
    question: "How is Runrait different from a marketing agency?",
    answer:
      "Agencies run channels and produce deliverables on a monthly retainer. Runrait builds the underlying system. We create AI agents and connected infrastructure that your team owns and operates long after the engagement ends. You get a working GTM operating system, not a deck and a monthly report.",
  },
  {
    question: "What kind of startups does Runrait work with?",
    answer:
      "We work best with seed-to-Series A startups in New Zealand and Australia that have proven product-market fit but haven't built a scalable revenue engine yet. If you're a founder still doing sales yourself and you know it's not scaling, you're exactly who we built this for.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "You'll see outcomes in your first sprint. We ship in sprints, not full projects, so value compounds while we're still building. Most founders see meaningful pipeline impact within the first few weeks.",
  },
  {
    question: "Do I need to hire a GTM team first?",
    answer:
      "No. That's the point. Instead of hiring 4-6 people at $500k+/year and waiting 6-12 months for them to ramp, you hire one GTM person and we augment them with AI agents and systems that deliver the same output. You get a full GTM function without the full headcount.",
  },
  {
    question: "Does Runrait work with startups in New Zealand and Australia?",
    answer:
      "Yes. Runrait is based in New Zealand and works with startups across New Zealand and Australia. We embed remotely with founding teams and have deep understanding of the ANZ startup ecosystem, from seed-stage founders through to Series A growth.",
  },
  {
    question: "What AI agents and systems does Runrait build?",
    answer:
      "Every engagement is different. Common AI agents include product marketing, SDR, content, demand gen, revenue ops, CS ops, and marketing ops. AI-powered systems cover everything from messaging and website to pipeline management, analytics, sales enablement, and more. Yours are scoped during discovery based on your product, market, and current state.",
  },
  {
    question: "Are you locked into a specific AI platform?",
    answer:
      "No. We're platform and model agnostic. We work across all major AI models and set things up so you can move between providers as the landscape evolves. No lock-in, no proprietary wrappers. You own the system and the flexibility to switch.",
  },
  {
    question: "How much does Runrait cost?",
    answer:
      "Runrait is project-based and outcome-aligned, not a monthly retainer. Every engagement starts with a Discovery phase where we scope exactly what needs to be built. Pricing depends on complexity, but it's a fraction of the cost of hiring a full GTM team.",
  },
];

export const CTA_SECTION = {
  headline: "Start with Discovery.",
  body: "Every engagement begins with a conversation. Tell us where you\u2019re at and where the gaps are. If there\u2019s a fit, we\u2019ll map the path forward together.",
  submitLabel: "Book a Discovery Call",
};
