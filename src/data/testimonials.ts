export interface Testimonial {
  slug: string;
  name: string;
  role: string;
  shortQuote: string;
  before: string;
  shift: string;
  after: string;
  pullQuote: string;
  /** ISO date — newest first ordering */
  date: string;
  tags: string[];
}

export const testimonials: Testimonial[] = [
  {
    slug: "imani-o",
    name: "Imani O.",
    role: "Founder, B2B SaaS",
    shortQuote:
      "Star reframed our product in a single session. We shipped a redesign in five weeks that we'd been postponing for a year.",
    before:
      "Imani's team had been sitting on a redesign for fourteen months. Three failed attempts, two contractors, and a product that quietly leaked customers every release.",
    shift:
      "One 90-minute session reframed the actual problem — it wasn't visual, it was conceptual. We rebuilt the information architecture in week one and shipped a working redesign in five.",
    after:
      "Activation up 28%. Two enterprise deals closed citing the new product surface. The internal team picked up the system and is shipping faster than they have in two years.",
    pullQuote:
      "We'd been postponing this for a year. Star moved us forward in a single session.",
    date: "2025-09-12",
    tags: ["B2B SaaS", "Redesign"],
  },
  {
    slug: "daniel-r",
    name: "Daniel R.",
    role: "Head of Product",
    shortQuote:
      "A rare combination of taste, systems thinking, and the ability to actually ship the thing.",
    before:
      "Daniel's product had grown organically for three years. Every screen was a slightly different version of the last designer's preference.",
    shift:
      "Star audited 140 screens in a week, killed half of them, and rebuilt the rest on a single typographic and spacing system. He stayed in the codebase to make sure the system actually shipped.",
    after:
      "Engineering velocity on UI work nearly doubled. Designers stopped re-litigating spacing and color in every PR. The system has held for over a year.",
    pullQuote:
      "He didn't just hand off Figma files. He stayed until the system actually held in the codebase.",
    date: "2025-08-03",
    tags: ["Design Systems", "Product"],
  },
  {
    slug: "mira-k",
    name: "Mira K.",
    role: "Co-founder, Fintech",
    shortQuote:
      "We hired him for design and got a sharper business along with it.",
    before:
      "Mira's fintech was pre-PMF. The team was building everything for everyone. Every weekly meeting ended with three new feature ideas and zero decisions cut.",
    shift:
      "Star refused to design anything until we'd narrowed the customer. Two weeks of interviews later we had one segment, one job, and a 4-screen MVP plan.",
    after:
      "MVP shipped in nine weeks. First paying customer in week eleven. The clarity on who we were building for outlasted the design work.",
    pullQuote:
      "I expected screens. I got a sharper business — the screens were almost a side effect.",
    date: "2025-06-21",
    tags: ["Fintech", "Strategy"],
  },
  {
    slug: "tomas-a",
    name: "Tomás A.",
    role: "CTO, HealthTech",
    shortQuote:
      "Every detail considered. Every decision defended with reasoning. Working with Star raised the bar for our whole team.",
    before:
      "Clinical software with strong logic and weak interface. Doctors loved the data, hated the experience. Adoption was stalling at the second clinic rollout.",
    shift:
      "Star embedded with two pilot clinics for a week, watched real shifts, and redesigned the three highest-friction surfaces around what nurses actually do at 6am.",
    after:
      "Average check-in time fell from 4m20s to 1m45s. Clinic three onboarded in four days instead of three weeks. The team's design quality bar permanently moved up.",
    pullQuote:
      "He raised the bar for our whole team — and the bar stayed raised after he left.",
    date: "2025-04-09",
    tags: ["HealthTech", "Workflow"],
  },
  {
    slug: "aicha-b",
    name: "Aïcha B.",
    role: "Growth Lead",
    shortQuote:
      "He doesn't just design screens — he builds clarity. Our onboarding conversion went from 31% to 58% in one quarter.",
    before:
      "Onboarding was a nine-step funnel with a 31% completion rate. Every growth experiment touched copy and pixels but never the underlying logic.",
    shift:
      "Star rebuilt the funnel as a three-step decision tree, not a form. Every screen earned its existence by answering one question the user actually had.",
    after:
      "Completion went from 31% to 58% in one quarter. Customer support tickets on signup fell 70%. The funnel hasn't been touched since.",
    pullQuote:
      "We didn't redesign the funnel. We earned each screen back, one user question at a time.",
    date: "2025-02-14",
    tags: ["Growth", "Onboarding"],
  },
  {
    slug: "henrik-s",
    name: "Henrik S.",
    role: "Founder, Marketplace",
    shortQuote:
      "Calm, precise, and refreshingly fast. The first designer I've worked with who actually understood the business model.",
    before:
      "A two-sided marketplace with a beautiful supply side and a confusing demand side. Buyers were bouncing in seconds.",
    shift:
      "Star spent three days with our financial model before opening Figma. He understood unit economics before he picked a typeface — and the work showed it.",
    after:
      "Buyer-side conversion lifted 41%. Average order value up 18%. We finally have a marketplace that respects both sides equally.",
    pullQuote:
      "He understood our unit economics before he picked a typeface. That changed everything.",
    date: "2024-11-30",
    tags: ["Marketplace", "Conversion"],
  },
];

export const findTestimonial = (slug: string) =>
  testimonials.find((t) => t.slug === slug);
