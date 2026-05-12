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

// Lier PC Visuals
import lier01 from "@/assets/UIUX Projects/Leir/cover-1.png";
import lier02 from "@/assets/UIUX Projects/Leir/cover-2.png";
import lier03 from "@/assets/UIUX Projects/Leir/cover-3.png";
import lier04 from "@/assets/UIUX Projects/Leir/cover-4.png";
import lier05 from "@/assets/UIUX Projects/Leir/cover-5.png";

// BookTiqo Visuals
import booktiqo01 from "@/assets/UIUX Projects/BookTiqo/booktiqo-cover-1.png";
import booktiqo02 from "@/assets/UIUX Projects/BookTiqo/booktiqo-cover (1).png";
import booktiqo03 from "@/assets/UIUX Projects/BookTiqo/booktiqo-cover-3.png";
import booktiqo04 from "@/assets/UIUX Projects/BookTiqo/booktiqo-cover-4.png";
import booktiqo05 from "@/assets/UIUX Projects/BookTiqo/booktiqo-cover-5.png";

// Cellar Visuals
import cellar01 from "@/assets/UIUX Projects/Cellar/cellar-cover-1.png";
import cellar02 from "@/assets/UIUX Projects/Cellar/cellar-cover-2.png";
import cellar03 from "@/assets/UIUX Projects/Cellar/cellar-cover-3.png";
import cellar04 from "@/assets/UIUX Projects/Cellar/cellar-cover-4.png";
import cellar05 from "@/assets/UIUX Projects/Cellar/cellar-cover-5.png";

// Landing Templates Visuals
import template01 from "@/assets/UIUX Projects/Template/landing-cover-1.png";
import template02 from "@/assets/UIUX Projects/Template/landing-cover-2.png";
import template03 from "@/assets/UIUX Projects/Template/2.png";
import template04 from "@/assets/UIUX Projects/Template/landing-cover-4.png";
import template05 from "@/assets/UIUX Projects/Template/landing-cover-5.png";


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
  /** Sortable date; newest first when descending */
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
  /** Live link: only used for "product" kind */
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
      "We approached SitePad as an experience-first product; presenting the interface as part of the storytelling, using motion and interaction to guide attention, and creating moments of realization through perspective shifts. Instead of simply showing the product, the experience was designed to simulate usage through the landing page itself.",
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
    solution: "We designed a chat-first experience where users interact with their finances the same way they communicate daily: through simple messages in English or Pidgin. The system interprets user intent and converts it into real actions like transfers, savings, and navigation.",
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
  {
    slug: "lier-pc",
    kind: "work",
    title: "Lier PC Rep",
    subtitle: "IT Repair & Consulting Platform",
    role: "UI/UX Designer",
    year: "2025",
    date: "2025-04-20",
    summary: "A professional one-page website designed to make tech support feel personal, trustworthy, and accessible for a modern IT brand.",
    tags: ["UI/UX", "Web", "Service Design", "Consulting"],
    overview: "Lier PC Rep is an IT repair and consulting brand that needed a digital presence as reliable as their service. The project involved designing a comprehensive one-page website that balances technical authority with a personal, approachable touch. The goal was to simplify the process of getting tech help, from browsing services to booking remote sessions.",
    problem: [
      "Traditional IT support websites feel cold, overly technical, and intimidating for non-experts.",
      "Fragmented service information makes it difficult for users to identify which plan fits their needs.",
      "High friction in the transition from identifying a problem to initiating a support session."
    ],
    solution: "We designed a single-page experience centered on trust and accessibility. By using a clean, professional aesthetic and a clear information hierarchy, we transformed complex service offerings into easy-to-understand plans. The integration of a direct 'Book a Session' flow ensures that users can get help the moment they need it.",
    keyFeatures: [
      {
        title: "Clear Service Breakdown",
        description: "Modular sections detailing PC repair, consulting, custom builds, and remote support for easy scanning."
      },
      {
        title: "Trust-Focused Pricing Plans",
        description: "Tiered support plans tailored specifically for individuals, families, and businesses."
      },
      {
        title: "Integrated Remote Session System",
        description: "One-click access to AnyDesk and TeamViewer sessions, reducing technical hurdles for clients."
      },
      {
        title: "Smooth Single-Page Navigation",
        description: "Anchor-linked navigation providing a seamless journey from hero section to contact form."
      },
      {
        title: "Professional Visual Identity",
        description: "A color palette and typography choice that conveys both expertise and friendliness."
      }
    ],
    myRole: [
      "Designed the end-to-end user experience and visual interface.",
      "Structured the service hierarchy and pricing model presentation.",
      "Created the workflow for the integrated ticketing and remote support system.",
      "Owned the visual storytelling to ensure the brand feels trustworthy and accessible."
    ],
    outcome: "The result is a high-converting one-page site that establishes Lier PC as a premium tech partner. The design successfully lowers the barrier for users seeking help, leading to a more efficient support ecosystem.",
    images: [lier01, lier02, lier03, lier04, lier05]
  },


  {
    slug: "landing-templates",
    kind: "work",
    title: "Landing Page Templates",
    subtitle: "Multi-Industry Design Foundation",
    role: "UI/UX Designer",
    year: "2025",
    date: "2025-03-15",
    summary: "A versatile set of 4 unique landing page structures designed to serve as a high-quality foundation for any digital product or service.",
    tags: ["UI/UX", "Systems", "Web", "Templates"],
    overview: "In collaboration with a developer, I designed a suite of four landing page templates. The objective was to create a flexible 'starter pack' that maintains high design standards while being easily adaptable across various industries; from SaaS to creative services.",
    problem: [
      "Starting every landing page from scratch leads to inconsistent UX and delayed launches.",
      "Generic templates often lack the narrative structure required for effective product storytelling.",
      "Difficulty in maintaining visual polish while ensuring layouts are developer-friendly and customizable."
    ],
    solution: "I crafted four distinct yet flexible layout structures, each optimized for different conversion goals. These templates prioritize clean typography, logical content flow, and a modular component system that allows for rapid customization without breaking the design's integrity.",
    keyFeatures: [
      {
        title: "4 Unique Layout Structures",
        description: "Distinct visual directions ranging from minimal-clean to bold-modern to suit different brand voices."
      },
      {
        title: "Story-Driven UX",
        description: "Pre-structured sections designed to lead the user through a logical conversion funnel."
      },
      {
        title: "Multi-Industry Adaptability",
        description: "Flexible components that work equally well for software products, services, or personal portfolios."
      },
      {
        title: "Developer-Ready Design",
        description: "Consistent spacing and grid systems designed for efficient implementation and scalability."
      }
    ],
    myRole: [
      "Researched high-converting landing page patterns across multiple sectors.",
      "Designed the visual systems and layout hierarchies for all four templates.",
      "Built a modular component library for each structure.",
      "Ensured all designs were optimized for responsive behavior and clear storytelling."
    ],
    outcome: "The templates provide a robust design framework that allows for the rapid deployment of professional landing pages, significantly reducing the time-to-market for new projects.",
    images: [template01, template02, template03, template04, template05]
  },

  {
    slug: "cellar",
    kind: "work",
    title: "Cellar",
    subtitle: "Digital Record Shelf & Library",
    role: "UI/UX Designer",
    year: "2024",
    date: "2024-12-10",
    summary: "A minimalist library platform concept that reimagines digital music storage as a tactile and organized personal record shelf.",
    tags: ["UI/UX", "Music", "Concept", "Minimalism"],
    overview: "Cellar is a design concept for a clean, minimal library platform. The goal was to move away from the 'infinite stream' model of modern music apps and return to the feeling of owning a collection. It's designed for people who love to keep their files organized and want a digital experience that feels as intentional as a physical record shelf.",
    problem: [
      "Mainstream music platforms focus on algorithmic discovery, often neglecting personal file management.",
      "Digital music libraries often feel like cluttered folders rather than curated collections.",
      "The 'ritual' of browsing and rediscovering music has been lost in complex, data-heavy interfaces."
    ],
    solution: "Cellar introduces a 'Shelf-First' interface that emphasizes visual covers and minimalist organization. By stripping away distractions, we created a digital space where users can focus on the music they love, making the process of storage and rediscovery simple, tactile, and enjoyable.",
    keyFeatures: [
      {
        title: "Minimalist Record Shelf",
        description: "A visually-driven layout that treats digital files with the same respect as physical records."
      },
      {
        title: "Frictionless Organization",
        description: "Intuitive tagging and categorization systems designed for collectors with large libraries."
      },
      {
        title: "Tactile Browsing Experience",
        description: "An interaction model focused on the joy of browsing and uncovering 'hidden gems' in one's own collection."
      },
      {
        title: "Clean, Focused Aesthetic",
        description: "A distraction-free UI that lets the album artwork and music take center stage."
      }
    ],
    myRole: [
      "Conceived the 'Digital Record Shelf' product concept and visual direction.",
      "Designed the library management system and browsing interactions.",
      "Prototyped the unique 'shelf' navigation model.",
      "Created a minimal visual language that resonates with music enthusiasts."
    ],
    outcome: "A high-fidelity conceptual project that demonstrates how digital organization can be transformed into a premium, emotionally resonant user experience.",
    images: [cellar01, cellar02, cellar03, cellar04, cellar05]
  },

  {
    slug: "booktiqo",
    kind: "work",
    title: "BookTiqo",
    subtitle: "Secure Student Event Ticketing",
    role: "UI/UX Designer",
    year: "2024",
    date: "2024-10-05",
    summary: "A digital ticketing platform for university students that eliminates the risks of physical ticket loss and fraud through secure, encoded digital passes.",
    tags: ["UI/UX", "Education", "Security", "Web"],
    overview: "BookTiqo was developed to modernize event ticketing in the university space. Traditionally, student events relied on hard-copy tickets which were easily lost or resold. BookTiqo replaces this with a secure digital system, making it easier for students to attend events and for organizers to manage them.",
    problem: [
      "Physical tickets are frequently lost, stolen, or damaged, leading to student frustration.",
      "Unregulated trading of hard-copy tickets creates security risks and pricing issues for organizers.",
      "The manual printing and distribution of tickets is a massive logistical burden for event owners."
    ],
    solution: "I designed a secure digital ticketing ecosystem where passes are uniquely encoded to individual users. This 'digital-first' approach ensures that tickets cannot be lost or traded illicitly, while providing event owners with a streamlined dashboard for ticket creation and real-time verification.",
    keyFeatures: [
      {
        title: "User-Specific Encoded Tickets",
        description: "Digital passes that are uniquely tied to the student's identity, preventing unauthorized resale."
      },
      {
        title: "Seamless Mobile Wallet",
        description: "A central location for students to store and access all their upcoming event tickets."
      },
      {
        title: "Event Owner Dashboard",
        description: "A simplified tool for creating events, managing ticket tiers, and tracking sales data."
      },
      {
        title: "Real-Time Scan & Verify",
        description: "A fast, reliable verification system for event entry that reduces wait times and human error."
      }
    ],
    myRole: [
      "Conducted user research with students and event organizers to identify key pain points.",
      "Designed the end-to-end ticketing flow from purchase to entry.",
      "Developed the visual identity and mobile-first interface for the platform.",
      "Collaborated on the security logic for ticket encoding and verification."
    ],
    outcome: "Successfully redefined the student event experience by replacing an outdated physical system with a secure, efficient, and user-friendly digital platform.",
    images: [booktiqo01, booktiqo02, booktiqo03, booktiqo04, booktiqo05]
  },


  /*
  {
    slug: "lumen-banking",
    kind: "work",
    title: "Lumen; Mobile Banking",
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
      { title: "Calm typographic system", description: "One typeface, four weights, strict scale: readable across long sessions." },
      { title: "Four-tab navigation", description: "Reduced cognitive load with a flatter primary IA." },
      { title: "Trust surfaces", description: "Account verification, fees, and limits surfaced early; not buried in settings." },
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
    title: "Northbeam; Operator CRM",
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
      "No keyboard model: every action required a mouse",
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
    title: "Atlas; Clinic Operations",
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
    title: "Field; Studio Site",
    subtitle: "Editorial Architecture Portfolio",
    role: "Designer & Builder",
    year: "2023",
    date: "2023-04-22",
    summary: "An editorial portfolio site for a small architecture studio.",
    tags: ["UI/UX", "Web"],
    overview:
      "The studio wanted a site that felt like their built work; quiet, confident, generous. Built around case studies, not services.",
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
      { title: "Suggestion-only AI", description: "AI nudges, never auto-writes; voice stays yours." },
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
      "Existing trackers reward addiction patterns. Signal rewards honesty: one screen, one weekly question, local-first by default.",
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
      "Small studios wanted a financial picture without learning double-entry accounting. LedgerLite answered three real questions owners ask weekly; without the jargon.",
    problem: [
      "Existing tools assume an accounting background",
      "Studio owners just want three numbers, weekly",
      "Setup friction killed adoption every time",
    ],
    solution:
      "Designed around three real questions owners ask weekly. Shipped a working MVP in five weeks.",
    keyFeatures: [
      { title: "Three-number dashboard", description: "Cash in, cash out, runway: the only view most owners need." },
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
