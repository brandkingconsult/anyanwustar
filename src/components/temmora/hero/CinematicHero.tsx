import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TEMMORA_TEMPLATES } from "../../../data/temmoraTemplates";
import { useBundle } from "../BundleContext";
import { trackHeroTemplateSelected, trackTemplateAddedToBundle } from "../../../utils/analytics";

const ROTATING_WORDS = [
  "Premium Website Templates.",
  "Launch Faster.",
  "Built For Real Businesses.",
  "Beautifully Customizable.",
  "Websites Worth Building On."
];

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
          50
        );
      } else {
        timeout = window.setTimeout(() => setPhase("holding"), 3000);
      }
    } else if (phase === "holding") {
      timeout = window.setTimeout(() => setPhase("deleting"), 0);
    } else {
      if (display.length > 0) {
        timeout = window.setTimeout(
          () => setDisplay(word.slice(0, display.length - 1)),
          30
        );
      } else {
        setIndex((i) => (i + 1) % ROTATING_WORDS.length);
        setPhase("typing");
      }
    }
    return () => window.clearTimeout(timeout);
  }, [display, phase, index]);

  return (
    <span className="relative inline-flex items-center text-foreground">
      <span aria-live="polite">{display}</span>
      <span
        aria-hidden
        className="ml-1 inline-block h-[0.85em] w-[3px] -translate-y-[0.05em] bg-primary align-middle opacity-80"
      />
    </span>
  );
};

// Duplicate array for seamless infinite marquee loop
const LOOPED_TEMPLATES = [...TEMMORA_TEMPLATES, ...TEMMORA_TEMPLATES, ...TEMMORA_TEMPLATES];

export const CinematicHero = () => {
  const [activeSlug, setActiveSlug] = useState<string>(TEMMORA_TEMPLATES[0].slug);
  const [paused, setPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  const heroRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const rAFRef = useRef<number | null>(null);
  
  const navigate = useNavigate();

  // Dual-video crossfade state
  const [primaryVideo, setPrimaryVideo] = useState(TEMMORA_TEMPLATES[0].heroDemoVideo);
  const [secondaryVideo, setSecondaryVideo] = useState<string | undefined>();
  const [isFading, setIsFading] = useState(false);

  // Update primary video when active slug changes
  useEffect(() => {
    const newTemplate = TEMMORA_TEMPLATES.find(t => t.slug === activeSlug);
    if (!newTemplate || newTemplate.heroDemoVideo === primaryVideo) return;

    setSecondaryVideo(primaryVideo);
    setPrimaryVideo(newTemplate.heroDemoVideo);
    setIsFading(true);

    const timer = setTimeout(() => {
      setIsFading(false);
      setSecondaryVideo(undefined);
    }, 1000);

    return () => clearTimeout(timer);
  }, [activeSlug, primaryVideo]);

  // Determine which templates to preload videos for
  const preloadSlugs = useRef<Set<string>>(new Set([TEMMORA_TEMPLATES[0].slug]));
  useEffect(() => {
    const currentIndex = TEMMORA_TEMPLATES.findIndex(t => t.slug === activeSlug);
    if (currentIndex !== -1) {
      const prev = TEMMORA_TEMPLATES[(currentIndex - 1 + TEMMORA_TEMPLATES.length) % TEMMORA_TEMPLATES.length].slug;
      const next = TEMMORA_TEMPLATES[(currentIndex + 1) % TEMMORA_TEMPLATES.length].slug;
      preloadSlugs.current = new Set([activeSlug, prev, next]);
    }
  }, [activeSlug]);

  // Intersection Observer to pause rAF when Hero is off-screen
  useEffect(() => {
    if (!heroRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // rAF loop to detect center card
  const checkCenterCard = useCallback(() => {
    if (!isVisible || !trackRef.current) {
      if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
      return;
    }

    const containerCenter = window.innerWidth / 2;
    let closestSlug = activeSlug;
    let minDistance = Infinity;

    // Use querySelectorAll to find cards, dataset.slug tracks the actual template
    const cards = trackRef.current.querySelectorAll("[data-slug]");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const elCenter = rect.left + rect.width / 2;
      const distance = Math.abs(containerCenter - elCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestSlug = (card as HTMLElement).dataset.slug as string;
      }
    });

    if (closestSlug !== activeSlug) {
      setActiveSlug(closestSlug);
    }

    rAFRef.current = requestAnimationFrame(checkCenterCard);
  }, [activeSlug, isVisible]);

  useEffect(() => {
    if (isVisible) {
      rAFRef.current = requestAnimationFrame(checkCenterCard);
    }
    return () => {
      if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
    };
  }, [checkCenterCard, isVisible]);

  // Handle Card Click (UX refinement)
  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>, slug: string) => {
    e.preventDefault();
    if (slug === activeSlug) {
      // Double click or clicking active -> navigate
      navigate(`/temmora/templates/${slug}`);
    } else {
      // Single click inactive -> center it
      setActiveSlug(slug);
      trackHeroTemplateSelected(slug);
      const el = e.currentTarget;
      el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      
      // Pause briefly to let user appreciate the snap
      setPaused(true);
      setTimeout(() => setPaused(false), 2000);
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative w-full overflow-hidden bg-background flex flex-col justify-between" 
      style={{ height: "100svh" }}
    >
      
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 bg-background pointer-events-none">
        
        {secondaryVideo !== undefined && (
          <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none motion-reduce:duration-0 opacity-0 z-0">
             {secondaryVideo && (
                <video src={secondaryVideo} autoPlay loop muted playsInline className="w-full h-full object-cover" />
             )}
          </div>
        )}

        <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none motion-reduce:duration-0 z-10 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
           {primaryVideo && (
              <video src={primaryVideo} autoPlay loop muted playsInline className="w-full h-full object-cover" />
           )}
        </div>

        {/* Hidden Preload Container for adjacent videos */}
        <div className="hidden">
           {TEMMORA_TEMPLATES.map(t => (
             t.heroDemoVideo && preloadSlugs.current.has(t.slug) && t.heroDemoVideo !== primaryVideo && t.heroDemoVideo !== secondaryVideo ? (
               <video key={t.slug} src={t.heroDemoVideo} preload="auto" muted playsInline />
             ) : null
           ))}
        </div>

        {/* Cinematic Overlay - Dark enough for text readability but transparent enough to see motion */}
        <div className="absolute inset-0 z-20 bg-background/70 md:bg-background/50 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Main Content Area (Navbar space + Typography) */}
      <div className="relative z-30 flex-1 flex flex-col justify-center w-full pt-20 pb-8 pointer-events-none temmora-container">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-foreground/80">
          <TypingWord />
        </h1>
        <p className="mt-4 max-w-md text-base tablet:text-lg text-foreground/70">
          Select a premium starting point for your next project.
        </p>
      </div>

      {/* Template Carousel (Bottom anchored) */}
      <div 
        className="relative z-30 w-full pb-8 pointer-events-auto"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)"
        }}
      >
        <div
          ref={scrollRef}
          className="overflow-x-auto overflow-y-hidden scrollbar-hide"
          style={{ WebkitOverflowScrolling: "touch" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setTimeout(() => setPaused(false), 1500)}
        >
          <div
            ref={trackRef}
            data-paused={paused}
            className="testimonial-track flex w-max gap-4 px-5 tablet:gap-5 tablet:px-10 items-center"
          >
            {LOOPED_TEMPLATES.map((tpl, i) => {
              const isActive = tpl.slug === activeSlug;
              
              return (
                <div 
                  key={`${tpl.slug}-${i}`}
                  data-slug={tpl.slug}
                  onClick={(e) => handleCardClick(e, tpl.slug)}
                  className={`shrink-0 cursor-pointer rounded-xl overflow-hidden bg-muted transition-all duration-500 ease-out flex flex-col border group
                    w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] aspect-video
                    ${isActive 
                      ? "border-primary/40 shadow-[0_0_25px_rgba(var(--primary),0.15)] scale-[1.03] opacity-100 z-10 ring-1 ring-primary/20" 
                      : "border-border/30 shadow-sm scale-95 opacity-50 hover:opacity-80 z-0 hover:-translate-y-1"
                    }
                  `}
                >
                  <img 
                    src={tpl.thumbnail} 
                    alt={`${tpl.name} thumbnail`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
};
