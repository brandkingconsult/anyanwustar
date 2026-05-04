import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import heroImage from "@/assets/star-hero.png";

interface HeroProps {
  onBookConsultation: () => void;
}

const ROTATING_WORDS = ["Clarity", "Vision", "Direction"];

const TypingWord = () => {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");

  useEffect(() => {
    const word = ROTATING_WORDS[index];
    let timeout: number;

    if (phase === "typing") {
      if (display.length < word.length) {
        timeout = window.setTimeout(
          () => setDisplay(word.slice(0, display.length + 1)),
          90,
        );
      } else {
        timeout = window.setTimeout(() => setPhase("holding"), 1600);
      }
    } else if (phase === "holding") {
      timeout = window.setTimeout(() => setPhase("deleting"), 1200);
    } else {
      if (display.length > 0) {
        timeout = window.setTimeout(
          () => setDisplay(word.slice(0, display.length - 1)),
          45,
        );
      } else {
        setIndex((i) => (i + 1) % ROTATING_WORDS.length);
        setPhase("typing");
      }
    }

    return () => window.clearTimeout(timeout);
  }, [display, phase, index]);

  return (
    <span className="relative inline-flex items-center text-primary/70">
      <span aria-live="polite">{display}</span>
      <span
        aria-hidden
        className="ml-1 inline-block h-[0.85em] w-[3px] -translate-y-[0.05em] bg-primary/70 align-middle hero-caret"
      />
    </span>
  );
};

export const Hero = ({ onBookConsultation }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative w-full bg-background p-3 pt-20 md:p-4 md:pt-24"
      style={{ height: "100svh", minHeight: "640px" }}
    >
      {/* Inner hero panel */}
      <div
        className="hero-anim-panel relative flex h-full w-full flex-col overflow-hidden"
        style={{ backgroundColor: "hsl(var(--surface))" }}
      >
        {/* Soft ambient gradient */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-60"
          style={{
            background:
              "radial-gradient(800px 500px at 80% 10%, hsl(var(--primary) / 0.10), transparent 60%), radial-gradient(700px 500px at 10% 90%, hsl(var(--primary) / 0.06), transparent 60%)",
          }}
        />

        {/* Headline — sits behind image */}
        <div className="pointer-events-none absolute inset-x-0 top-[8%] z-10 flex flex-col items-start justify-center px-6 text-left md:items-center md:text-center md:top-[12%] md:px-4">
          <h1
            className="hero-anim-text font-display font-semibold leading-[1] tracking-tight text-foreground/[0.18] md:leading-[0.95] text-[60px] md:text-[100px] lg:text-[125px]"
          >
            Start Your Brand
            <br />
            with <TypingWord />
          </h1>
        </div>

        {/* Hero image — luminous by default, true color on hover (desktop) */}
        <div className="hero-anim-image group pointer-events-auto absolute inset-x-0 bottom-0 z-20 flex w-full justify-center overflow-hidden">
          <img
            src={heroImage}
            alt="Star — designer, founder, and product builder at his desk"
            className="hero-portrait mx-auto block h-auto select-none object-contain"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Bottom vignette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-25 h-24"
          style={{
            background:
              "linear-gradient(to top, hsl(var(--surface)) 0%, hsl(var(--surface) / 0) 100%)",
          }}
        />

        {/* CTA buttons — stacked on mobile (16px gap), inline on desktop */}
        <div className="hero-anim-cta absolute inset-x-0 bottom-5 z-30 flex w-full items-center justify-center px-4 md:bottom-10">
          <div className="flex w-full max-w-md flex-col items-stretch justify-center gap-4 md:max-w-none md:w-auto md:flex-row md:gap-3">
            <button
              onClick={onBookConsultation}
              className="bg-primary px-6 py-3.5 text-center text-sm font-medium text-primary-foreground shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.6)] transition-all hover:bg-primary/90 hover:shadow-[0_14px_36px_-10px_hsl(var(--primary)/0.7)] md:py-3"
            >
              Book a 30 mins Consultation
            </button>
            <a
              href="#work"
              className="flex items-center justify-center border border-border bg-foreground/[0.04] px-6 py-3.5 text-center text-sm font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-foreground/[0.08] md:py-3"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Mobile-only resume floating chip in hero (subtle) */}
        <a
          href="/star-resume.pdf"
          download="Star-Anyanwu-Resume.pdf"
          className="absolute right-3 top-3 z-30 inline-flex items-center gap-1.5 border border-border bg-background/40 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.18em] text-foreground backdrop-blur-md transition-colors hover:bg-background/70 md:hidden"
          aria-label="Download resume"
        >
          <Download className="h-3 w-3" />
          CV
        </a>
      </div>
    </section>
  );
};
