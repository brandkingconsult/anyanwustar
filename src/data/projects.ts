import sitepad01 from "@/assets/projects/Sitepad/sitepad-01.png";
import sitepad02 from "@/assets/projects/Sitepad/sitepad-02.png";
import sitepad03 from "@/assets/projects/Sitepad/sitepad-03.png";
import sitepad04 from "@/assets/projects/Sitepad/sitepad-04.png";
import sitepad05 from "@/assets/projects/Sitepad/sitepad-05.png";

import paytext01 from "@/assets/projects/Paytext/paytext-1-hero.png";
import paytext02 from "@/assets/projects/Paytext/paytext-2-chat.png";
import paytext03 from "@/assets/projects/Paytext/paytext-3-wallet.png";
import paytext04 from "@/assets/projects/Paytext/paytext-4-goals.png";
import paytext05 from "@/assets/projects/Paytext/paytext-5-security.png";

import prevu01 from "@/assets/projects/Prevu Hotel/01-hero.png";
import prevu02 from "@/assets/projects/Prevu Hotel/02-rooms.png";
import prevu03 from "@/assets/projects/Prevu Hotel/03-room-signature.png";
import prevu04 from "@/assets/projects/Prevu Hotel/04-booking.png";
import prevu05 from "@/assets/projects/Prevu Hotel/05-room-deluxe.png";

import dwellr01 from "@/assets/projects/Dwellr/dwellr-01-hero.png";
import dwellr02 from "@/assets/projects/Dwellr/dwellr-02-explore.png";
import dwellr03 from "@/assets/projects/Dwellr/dwellr-03-property.png";
import dwellr04 from "@/assets/projects/Dwellr/dwellr-04-messages.png";
import dwellr05 from "@/assets/projects/Dwellr/dwellr-05-agent.png";

export type ProjectKind = "work" | "product";

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  kind: ProjectKind;
  title: string;
  subtitle?: string;
  role: string;
  year: string;
  /** Sortable date — newest first when descending */
  date: string;
  summary: string;
  tags: string[];
  /** Structured content */
  overview: string;
  problem: string[];
  solution: string;
  keyFeatures: ProjectFeature[];
  myRole: string[];
  outcome: string;
  /** Live link — only used for "product" kind */
  url?: string;
  /** Optional image set for the bento grid (5 ideal) */
  images?: string[];
}

export const projects: Project[] = [
  {
    slug: "sitepad",
    kind: "product",
    title: "SitePad",
    subtitle: "Website Builder Experience Platform",
    role: "Designer & Developer",
    year: "2025",
    date: "2025-03-01",
    summary:
      "An experience-first website builder that lets users feel the product before they sign up.",
    tags: ["Full-stack", "SaaS", "Web", "Motion"],
    overview:
      "SitePad is a modern website builder platform designed to simplify how users create websites through a visual, no-code experience. The goal of this project was to move beyond traditional SaaS landing pages and create an immersive product experience that allows users to feel like they are interacting with the product before even signing up.",
    problem: [
      "Rely heavily on static sections and generic layouts",
      "Fail to communicate the actual product experience effectively",
      "Lack interaction-driven storytelling that engages users",
    ],
    solution:
      "We approached SitePad as an experience-first product — presenting the interface as part of the storytelling, using motion and interaction to guide attention, and creating moments of realization through perspective shifts. Instead of simply showing the product, the experience was designed to simulate usage through the landing page itself.",
    keyFeatures: [
      {
        title: "Scroll-Based Perspective Reveal",
        description:
          "A dynamic zoom-out interaction that reveals users have been interacting with a product interface during scroll.",
      },
      {
        title: "Guided Attention System",
        description:
          "A subtle visual pointer that directs focus to key elements and call-to-actions throughout the page.",
      },
      {
        title: "Immersive Hero Section",
        description:
          "Product-first layout with interface preview to immediately communicate value.",
      },
      {
        title: "Bento Feature Layout",
        description:
          "Modular grid system used to showcase product capabilities in a structured, visually engaging way.",
      },
      {
        title: "Light & Dark Mode",
        description: "Theme toggle for improved accessibility and user preference.",
      },
      {
        title: "Responsive & Optimized Layout",
        description:
          "Fully optimized for mobile with strict layout constraints and smooth interaction behavior.",
      },
    ],
    myRole: [
      "Designed the overall product experience and interaction model",
      "Defined the scroll-based storytelling and perspective-shift moments",
      "Built the bento feature layout system and theme tokens",
      "Owned responsive behavior across desktop and mobile",
    ],
    outcome:
      "The final result is a premium, interaction-driven SaaS experience that positions SitePad as a modern and intuitive website builder. The project demonstrates how combining storytelling, motion, and product design can transform a landing page into a product experience.",
    url: "https://sitepad.vercel.app/",
    images: [sitepad01, sitepad03, sitepad02, sitepad04, sitepad05],
  },
  {
    slug: "paytext",
    kind: "product",
    title: "Paytext",
    subtitle: "Talk to Your Money",
    role: "Designer & Developer",
    year: "2025",
    date: "2025-02-15",
    summary: "A conversational fintech application that allows users to manage their finances by simply chatting.",
    tags: ["Full-stack", "Fintech", "AI", "Mobile"],
    overview: "Paytext is a conversational fintech application that allows users to manage their finances by simply chatting. Instead of navigating complex interfaces, users can send money, check balances, and manage goals using natural language.",
    problem: [
      "Traditional fintech apps rely heavily on structured interfaces",
      "Interfaces can feel overwhelming or inefficient for everyday users",
      "Friction in fast, informal financial contexts"
    ],
    solution: "We designed a chat-first experience where users interact with their finances the same way they communicate daily — through simple messages in English or Pidgin. The system interprets user intent and converts it into real actions like transfers, savings, and navigation.",
    keyFeatures: [
      { title: "Conversational UI", description: "Natural language interface for all financial actions." },
      { title: "Smart Transfers", description: "Send money via simple text messages." },
      { title: "Real-time Display", description: "Instant balance and activity feedback within the chat." },
      { title: "Goal Tracking", description: "Manage savings and financial goals conversationally." },
      { title: "AI Navigation", description: "Smart routing from chat to specific app pages." },
      { title: "Secure PIN Flow", description: "Robust security with conversational transaction confirmation." }
    ],
    myRole: [
      "Designed the end-to-end conversational experience",
      "Built the core user interfaces and transaction flows",
      "Implemented the natural language intent mapping"
    ],
    outcome: "Transformed traditional fintech interaction into a more natural experience, reduced task friction, and established a scalable AI-driven foundation.",
    url: "https://paytext2.vercel.app/",
    images: [paytext01, paytext02, paytext03, paytext04, paytext05]
  },
  {
    slug: "prevu",
    kind: "product",
    title: "Prévu",
    subtitle: "Hotel Experience Platform",
    role: "Designer & Developer",
    year: "2024",
    date: "2024-11-20",
    summary: "A modern hotel experience platform designed to help users understand their stay before booking.",
    tags: ["Full-stack", "Travel", "Web", "Experience"],
    overview: "Prévu is a modern hotel experience platform designed to help users understand their stay before booking. The goal was to move beyond traditional hotel listings by introducing room-level exploration, location awareness, and decision-focused interactions.",
    problem: [
      "Generic hotel-level information lacks transparency",
      "Difficulty in differentiating between room types and locations",
      "Non-specific reviews make decision-making hard"
    ],
    solution: "Prévu introduces a room-first booking experience, allowing users to explore rooms by floor, understand exact locations within the hotel, and view room-specific amenities and benefits.",
    keyFeatures: [
      { title: "Floor-Based Selection", description: "Simplified floor navigation for precise room choosing." },
      { title: "Room Experience System", description: "Deep dive into amenities, views, and noise levels per room." },
      { title: "Seamless Booking", description: "Structured flow from selection to payment with clear breakdowns." },
      { title: "Location Reviews", description: "Feedback focused on specific rooms and floor locations." },
      { title: "Video Hero", description: "Immersive video previews of the hotel environment." }
    ],
    myRole: [
      "Designed full platform architecture and user flows",
      "Built the room-first selection and review systems",
      "Engineered the scalable platform structure"
    ],
    outcome: "Shifted hotel booking from generic listings to a context-driven platform that improves transparency and user confidence.",
    url: "https://prevuhotels.vercel.app/",
    images: [prevu01, prevu02, prevu03, prevu04, prevu05]
  },
  {
    slug: "dwellr",
    kind: "product",
    title: "Dwellr",
    subtitle: "Experience Homes Before You Decide",
    role: "Designer & Developer",
    year: "2024",
    date: "2024-09-05",
    summary: "A modern real estate platform combining structured listings with agent-recorded walkthrough videos.",
    tags: ["Full-stack", "Real Estate", "Video", "Trust"],
    overview: "Dwellr is a modern real estate platform designed to help users experience properties before committing to a visit or purchase. The platform focuses on visual clarity and trust by combining structured listings with agent-recorded walkthrough videos.",
    problem: [
      "Static images lead to uncertainty in decision-making",
      "Wasted time on unnecessary physical inspections",
      "Low user confidence in property listings"
    ],
    solution: "We designed Dwellr to shift property discovery from imagination to experience using agent-recorded walkthrough videos and a paid viewing system to filter for serious inquiries.",
    keyFeatures: [
      { title: "Video-First Listings", description: "Agent-recorded walkthroughs for every property." },
      { title: "Agent Dashboards", description: "Full property management interface for realtors." },
      { title: "In-App Messaging", description: "Secure communication channel between users and agents." },
      { title: "Paid Viewing System", description: "Verification flow to reduce agent inefficiency." }
    ],
    myRole: [
      "Collaborated on product structure and interaction design",
      "Built the user and agent dashboard experiences",
      "Designed the paid inspection request flow"
    ],
    outcome: "Created a transparent and efficient real estate discovery process that helps users make better decisions remotely.",
    url: "https://dwellre.vercel.app/",
    images: [dwellr01, dwellr02, dwellr03, dwellr04, dwellr05]
  },
  /*
  {
    slug: "lumen-banking",
    kind: "work",
    title: "Lumen — Mobile Banking",
    subtitle: "Neobank App Redesign",
    role: "Lead UI/UX Designer",
    year: "2024",
    date: "2024-09-12",
    summary:
      "Redesigning a European neobank's mobile experience around clarity and trust.",
    tags: ["UI/UX", "Mobile", "Fintech"],
    overview:
      "Lumen is a fast-growing European neobank. After two years of feature growth, the app had become cluttered and activation was slipping after onboarding. The redesign focused on clarity, trust, and a calmer information hierarchy.",
    problem: [
      "Activation dropped after onboarding completion",
      "Support tickets clustered around navigation friction",
      "Visual system had drifted across seven product squads",
    ],
    solution:
      "Audited every primary flow, reduced primary navigation from seven destinations to four, rebuilt the transaction surface around user intent, and shipped a tighter visual system based on a single neutral grayscale.",
    keyFeatures: [
      { title: "Intent-led transactions", description: "Send / Request / Pay grouped by user goal, not product type." },
      { title: "Calm typographic system", description: "One typeface, four weights, strict scale — readable across long sessions." },
      { title: "Four-tab navigation", description: "Reduced cognitive load with a flatter primary IA." },
      { title: "Trust surfaces", description: "Account verification, fees, and limits surfaced early — not buried in settings." },
    ],
    myRole: [
      "Led discovery, IA, and end-to-end visual design",
      "Partnered with engineering on a shared component library",
      "Ran weekly usability tests across two markets",
    ],
    outcome:
      "Activation up 22%. Support volume on navigation halved within two release cycles. Internal design team adopted the system across web and mobile.",
  },
  {
    slug: "northbeam-crm",
    kind: "work",
    title: "Northbeam — Operator CRM",
    subtitle: "Keyboard-first Revenue Workspace",
    role: "Product Designer",
    year: "2024",
    date: "2024-06-18",
    summary: "A focused CRM for revenue operators who live inside spreadsheets.",
    tags: ["UI/UX", "SaaS", "B2B"],
    overview:
      "Northbeam was beautiful but not opinionated. Operators kept exporting data to spreadsheets to do real work. The redesign reframed the product around the actual decision loops operators run every day.",
    problem: [
      "Daily work happened outside the product, in spreadsheets",
      "Saved views were buried and felt secondary",
      "No keyboard model — every action required a mouse",
    ],
    solution:
      "Mapped real operator decision loops, designed a keyboard-first inbox, and made saved views a first-class object with shareable URLs.",
    keyFeatures: [
      { title: "Keyboard inbox", description: "Triage, assign, and update without leaving the home row." },
      { title: "Saved views, first-class", description: "URL-addressable, shareable, pin-able to the sidebar." },
      { title: "Bulk actions surface", description: "Operators can act on 50 records as easily as on one." },
    ],
    myRole: [
      "Owned the redesign end-to-end",
      "Ran ride-alongs with five operator teams",
      "Designed the keyboard model with engineering",
    ],
    outcome:
      "Daily active sessions doubled. Spreadsheet exports dropped 60% in the first month after release.",
  },
  {
    slug: "atlas-health",
    kind: "work",
    title: "Atlas — Clinic Operations",
    subtitle: "Front-desk Operating System",
    role: "UI/UX Designer",
    year: "2023",
    date: "2023-11-04",
    summary: "Calming, confident interfaces for a high-pressure clinical environment.",
    tags: ["UI/UX", "Healthcare"],
    overview:
      "Front-desk staff at multi-site clinics juggled three different tools to check in a single patient. Errors were common and quietly costly. Atlas consolidated the surface and reduced eye strain across long shifts.",
    problem: [
      "Three tools for one patient check-in",
      "Errors caused billing and scheduling drift",
      "High-contrast UI was fatiguing across 8-hour shifts",
    ],
    solution:
      "Consolidated check-in into one surface and built a soft-contrast typographic system tuned for long-shift readability.",
    keyFeatures: [
      { title: "One-screen check-in", description: "ID, insurance, and consent in a single guided flow." },
      { title: "Soft-contrast type system", description: "Calmer palette tuned for long shifts and low-light rooms." },
      { title: "Clinic-aware shortcuts", description: "Per-site quick actions that match how each clinic actually runs." },
    ],
    myRole: [
      "Sole designer through discovery, prototyping, and rollout",
      "Worked with two pilot clinics over a 12-week test",
    ],
    outcome:
      "Average check-in time fell from 4m20s to 1m45s across pilot clinics.",
  },
  {
    slug: "field-studio",
    kind: "work",
    title: "Field — Studio Site",
    subtitle: "Editorial Architecture Portfolio",
    role: "Designer & Builder",
    year: "2023",
    date: "2023-04-22",
    summary: "An editorial portfolio site for a small architecture studio.",
    tags: ["UI/UX", "Web"],
    overview:
      "The studio wanted a site that felt like their built work — quiet, confident, generous. Built around case studies, not services.",
    problem: [
      "Existing site read like a services template",
      "Beautiful built work was buried in a generic gallery",
      "Inbound leads weren't pre-qualified",
    ],
    solution:
      "Custom typography pairing, slow horizontal galleries, and a structure built around case studies, not services.",
    keyFeatures: [
      { title: "Case-study first IA", description: "Each project gets the editorial space it deserves." },
      { title: "Slow horizontal galleries", description: "Built for viewing work at the studio's natural pace." },
      { title: "Custom type pairing", description: "A display + text pairing tuned to the studio's tone." },
    ],
    myRole: ["Designed and built the site end-to-end"],
    outcome: "Inbound qualified leads tripled in the quarter following launch.",
  },

  {
    slug: "draft-os",
    kind: "product",
    title: "Draft OS",
    subtitle: "Investor-update Writing Surface",
    role: "Founder & Builder",
    year: "2024",
    date: "2024-08-05",
    summary: "A writing surface for founders shipping their first investor updates.",
    tags: ["Product", "AI-assisted", "Writing"],
    overview:
      "First-time founders kept rewriting investor updates from scratch. The blank page was the bottleneck. Draft OS gives them a calm writing surface with templates derived from real updates.",
    problem: [
      "Blank-page paralysis on every monthly update",
      "Generic templates didn't match real founder voice",
      "AI tools over-generated and felt off-brand",
    ],
    solution:
      "Designed and shipped Draft OS in six weeks using AI-assisted development. Templates derived from real updates, light AI suggestions, no autoplay generation.",
    keyFeatures: [
      { title: "Calm writing surface", description: "No formatting toolbar, just structure and flow." },
      { title: "Real-update templates", description: "Derived from anonymized monthly updates, not generic prompts." },
      { title: "Suggestion-only AI", description: "AI nudges, never auto-writes — voice stays yours." },
    ],
    myRole: [
      "Sole founder, designer, and builder",
      "Shipped v1 in six weeks with AI-assisted development",
    ],
    outcome:
      "400+ founders on the early list within 30 days. Featured in three operator newsletters.",
    url: "https://example.com",
  },
  {
    slug: "signal-tracker",
    kind: "product",
    title: "Signal",
    subtitle: "Weekly Reflection Tracker",
    role: "Founder & Builder",
    year: "2024",
    date: "2024-02-10",
    summary: "A quiet habit tracker built around weekly reflection, not streaks.",
    tags: ["Product", "Mobile"],
    overview:
      "Existing trackers reward addiction patterns. Signal rewards honesty — one screen, one weekly question, local-first by default.",
    problem: [
      "Streak-based trackers create guilt, not insight",
      "Daily check-ins feel like another job",
      "Most apps want your data more than your honesty",
    ],
    solution: "Built solo in three weeks. One screen. One weekly question. Local-first by default.",
    keyFeatures: [
      { title: "One weekly question", description: "Asked Sunday evening, answerable in 30 seconds." },
      { title: "Local-first storage", description: "Your reflections live on your device by default." },
      { title: "No streaks, no guilt", description: "Built around honesty, not addictive loops." },
    ],
    myRole: ["Sole founder, designer, and builder"],
    outcome: "Steady organic growth via word of mouth in indie product communities.",
    url: "https://example.com",
  },
  {
    slug: "ledgerlite",
    kind: "product",
    title: "LedgerLite",
    subtitle: "Bookkeeping for Studios",
    role: "Founder & Builder",
    year: "2023",
    date: "2023-07-15",
    summary: "Simple bookkeeping for service businesses that hate accounting tools.",
    tags: ["Product", "SaaS"],
    overview:
      "Small studios wanted a financial picture without learning double-entry accounting. LedgerLite answered three real questions owners ask weekly — without the jargon.",
    problem: [
      "Existing tools assume an accounting background",
      "Studio owners just want three numbers, weekly",
      "Setup friction killed adoption every time",
    ],
    solution:
      "Designed around three real questions owners ask weekly. Shipped a working MVP in five weeks.",
    keyFeatures: [
      { title: "Three-number dashboard", description: "Cash in, cash out, runway — the only view most owners need." },
      { title: "Friendly categorization", description: "Plain-language buckets, not chart-of-accounts codes." },
      { title: "Weekly digest", description: "A Monday email summarizing the week without opening the app." },
    ],
    myRole: ["Sole founder, designer, and builder"],
    outcome: "Profitable within four months. Sold to a strategic buyer in 2024.",
    url: "https://example.com",
  },
  */
];

export const workProjects = projects.filter((p) => p.kind === "work");
export const productProjects = projects.filter((p) => p.kind === "product");

export const findProject = (slug: string) => projects.find((p) => p.slug === slug);
