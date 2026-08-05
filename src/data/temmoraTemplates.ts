import sitepad01 from "@/assets/projects/Sitepad/sitepad-01.png";
import sitepad02 from "@/assets/projects/Sitepad/sitepad-02.png";
import sitepad03 from "@/assets/projects/Sitepad/sitepad-03.png";
import sitepad04 from "@/assets/projects/Sitepad/sitepad-04.png";

import paytext01 from "@/assets/projects/Paytext/paytext-1-hero.png";
import paytext02 from "@/assets/projects/Paytext/paytext-2-chat.png";
import paytext03 from "@/assets/projects/Paytext/paytext-3-wallet.png";
import paytext04 from "@/assets/projects/Paytext/paytext-4-goals.png";

import prevu01 from "@/assets/projects/Prevu Hotel/01-hero.png";
import prevu02 from "@/assets/projects/Prevu Hotel/02-rooms.png";
import prevu03 from "@/assets/projects/Prevu Hotel/03-room-signature.png";
import prevu04 from "@/assets/projects/Prevu Hotel/04-booking.png";

import dwellr01 from "@/assets/projects/Dwellr/dwellr-01-hero.png";
import dwellr02 from "@/assets/projects/Dwellr/dwellr-02-explore.png";
import dwellr03 from "@/assets/projects/Dwellr/dwellr-03-property.png";
import dwellr04 from "@/assets/projects/Dwellr/dwellr-04-messages.png";

export interface InstructionStep {
  id: string;
  title: string;
  description: string;
  visualType: "content-edit" | "color-theme" | "image-replace" | "deploy";
}

export interface TemplateLicense {
  type: string;
  commercialUse: boolean;
  clientProjects: boolean;
  resaleAllowed: boolean;
  attributionRequired: boolean;
  description: string;
}

export type TemplateStatus = "Published" | "Coming Soon" | "Updating" | "Beta";

export interface TemmoraTemplate {
  slug: string;
  name: string;
  price: number;
  originalPrice: number;
  setupPrice: number;
  discountLabel: string;
  setupAvailable: boolean;
  thumbnail: string;
  heroDemoVideo?: string;
  galleryImages: string[];
  instructions: InstructionStep[];
  hasDeveloperGuide: boolean;
  
  // New Fields
  description: string;
  creator: string;
  publishedAt: string;
  categories: string[];
  features: string[];
  license: TemplateLicense;
  status: TemplateStatus;
  livePreviewUrl?: string;
}

// Mock generic media for now until actual assets are provided
const PLACEHOLDER_THUMBNAIL = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600";

const GENERIC_INSTRUCTION_STEPS: InstructionStep[] = [
  {
    id: "step-1",
    title: "Edit your website content",
    description: "Replace the placeholder text with your own messaging. The UI updates instantly as you type.",
    visualType: "content-edit",
  },
  {
    id: "step-2",
    title: "Customize global colors",
    description: "Easily switch your primary and secondary theme colors. These changes automatically apply across all components.",
    visualType: "color-theme",
  },
  {
    id: "step-3",
    title: "Replace images",
    description: "Upload your own assets to swap out the placeholders. All imagery scales beautifully without breaking the layout.",
    visualType: "image-replace",
  },
  {
    id: "step-4",
    title: "Deploy your project",
    description: "Push your code and deploy your live website with a single click. Instant global edge delivery.",
    visualType: "deploy",
  }
];

const DEFAULT_LICENSE: TemplateLicense = {
  type: "Standard License",
  commercialUse: true,
  clientProjects: true,
  resaleAllowed: false,
  attributionRequired: false,
  description: "Use this template for personal or commercial projects. You may use it for client work. Redistribution or resale is strictly prohibited."
};

const DEFAULT_FEATURES = [
  "Responsive design",
  "SEO optimized",
  "Accessible UI",
  "Modern architecture",
  "Framer Motion animations",
  "Customizable tokens"
];

const GENERIC_VIDEO = "https://cdn.dribbble.com/uploads/47174/original/1fdf26e83f3f98016912389146522c07.mp4?1685645601";

export const TEMMORA_TEMPLATES: TemmoraTemplate[] = [
  {
    slug: "sitepad",
    name: "SitePad",
    categories: ["SaaS", "Website Builder", "Motion"],
    price: 179,
    originalPrice: 358,
    setupPrice: 70,
    discountLabel: "August Launch Discount",
    setupAvailable: true,
    thumbnail: sitepad01,
    heroDemoVideo: GENERIC_VIDEO,
    galleryImages: [sitepad02, sitepad03, sitepad04],
    instructions: GENERIC_INSTRUCTION_STEPS,
    hasDeveloperGuide: true,
    description: "An experience-first website builder template that lets users feel the product before they sign up. Features scroll-based perspective reveals and immersive hero sections.",
    creator: "Anyanwu Star",
    publishedAt: "2025-03-01T10:00:00Z",
    features: ["Scroll-based animations", "Bento feature layout", "Light & Dark Mode", ...DEFAULT_FEATURES],
    license: DEFAULT_LICENSE,
    status: "Published",
    livePreviewUrl: "https://sitepad.vercel.app/"
  },
  {
    slug: "paytext",
    name: "Paytext",
    categories: ["Fintech", "AI", "Mobile"],
    price: 149,
    originalPrice: 298,
    setupPrice: 70,
    discountLabel: "August Launch Discount",
    setupAvailable: true,
    thumbnail: paytext01,
    heroDemoVideo: GENERIC_VIDEO,
    galleryImages: [paytext02, paytext03, paytext04],
    instructions: GENERIC_INSTRUCTION_STEPS,
    hasDeveloperGuide: true,
    description: "A conversational fintech template that allows users to manage their finances by simply chatting. Perfect for AI-driven financial applications.",
    creator: "Anyanwu Star",
    publishedAt: "2025-02-15T10:00:00Z",
    features: ["Conversational UI", "Real-time Display", "Secure PIN Flow", ...DEFAULT_FEATURES],
    license: DEFAULT_LICENSE,
    status: "Published",
    livePreviewUrl: "https://paytext2.vercel.app/"
  },
  {
    slug: "prevu-hotels",
    name: "Prévu Hotels",
    categories: ["Travel", "Booking", "Experience"],
    price: 199,
    originalPrice: 398,
    setupPrice: 70,
    discountLabel: "August Launch Discount",
    setupAvailable: true,
    thumbnail: prevu01,
    heroDemoVideo: GENERIC_VIDEO,
    galleryImages: [prevu02, prevu03, prevu04],
    instructions: GENERIC_INSTRUCTION_STEPS,
    hasDeveloperGuide: true,
    description: "A modern hotel experience platform designed to help users understand their stay before booking. Introduces room-level exploration and immersive video heroes.",
    creator: "Anyanwu Star",
    publishedAt: "2024-11-20T10:00:00Z",
    features: ["Room Experience System", "Seamless Booking", "Floor-Based Selection", ...DEFAULT_FEATURES],
    license: DEFAULT_LICENSE,
    status: "Published",
    livePreviewUrl: "https://prevuhotels.vercel.app/"
  },
  {
    slug: "dwellr",
    name: "Dwellr",
    categories: ["Real Estate", "Video", "Trust"],
    price: 129,
    originalPrice: 258,
    setupPrice: 70,
    discountLabel: "August Launch Discount",
    setupAvailable: true,
    thumbnail: dwellr01,
    heroDemoVideo: GENERIC_VIDEO,
    galleryImages: [dwellr02, dwellr03, dwellr04],
    instructions: GENERIC_INSTRUCTION_STEPS,
    hasDeveloperGuide: true,
    description: "A modern real estate platform combining structured listings with agent-recorded walkthrough videos. Built to shift property discovery from imagination to experience.",
    creator: "Anyanwu Star",
    publishedAt: "2024-09-05T10:00:00Z",
    features: ["Video-First Listings", "Agent Dashboards", "In-App Messaging", ...DEFAULT_FEATURES],
    license: DEFAULT_LICENSE,
    status: "Published",
    livePreviewUrl: "https://dwellre.vercel.app/"
  }
];
