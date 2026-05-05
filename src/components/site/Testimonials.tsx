import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // Pause auto-scroll while user manually scrolls; resume after idle
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let timer: number | null = null;
    const onScroll = () => {
      setPaused(true);
      if (timer) window.clearTimeout(timer);
      timer = window.setTimeout(() => setPaused(false), 1400);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  // Duplicate for seamless marquee loop
  const loop = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative overflow-hidden py-32 tablet:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 400px at 50% 0%, hsl(var(--primary) / 0.05), transparent 60%)",
        }}
      />
      <div className="container-tight">
        <div className="reveal flex flex-col gap-6 tablet:flex-row tablet:items-end tablet:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              07 — Said about the work
            </p>
            <h2 className="mt-6 max-w-xl font-display text-3xl font-medium leading-tight tablet:text-5xl">
              Words from the founders I've shipped with.
            </h2>
          </div>
          <div className="flex flex-col gap-4 tablet:items-end">
            <p className="max-w-sm text-sm text-muted-foreground">
              Real notes from real teams — written after we shipped together.
            </p>
            <Link
              to="/testimonials"
              className="group inline-flex items-center gap-3 self-start border border-foreground px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-foreground hover:text-background tablet:self-auto"
            >
              Read every story
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Horizontal carousel — auto-marquee + manual scroll */}
      <div
        className="reveal mt-16"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
        }}
      >
        <div
          ref={scrollRef}
          className="overflow-x-auto overflow-y-hidden scrollbar-hide"
          style={{ WebkitOverflowScrolling: "touch" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => window.setTimeout(() => setPaused(false), 1500)}
        >
          <div
            data-paused={paused}
            className="testimonial-track flex w-max gap-5 px-5 tablet:gap-6 tablet:pl-10"
          >
            {loop.map((t, i) => (
              <figure
                key={`${t.slug}-${i}`}
                className="group relative flex w-[82vw] shrink-0 flex-col border border-border/60 bg-card/40 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-card sm:w-[420px] tablet:w-[460px] md:p-8"

              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <Quote
                  className="h-6 w-6 text-primary/70 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]"
                  strokeWidth={1.5}
                />
                <blockquote className="mt-5 font-display text-base leading-snug text-foreground md:text-lg">
                  "{t.shortQuote}"
                </blockquote>
                <figcaption className="mt-8">
                  <div className="h-px w-8 bg-primary/70 transition-all duration-500 group-hover:w-16" />
                  <p className="mt-4 text-sm text-foreground">{t.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {t.role}
                  </p>
                </figcaption>

                <Link
                  to={`/testimonials#${t.slug}`}
                  className="mt-6 inline-flex items-center gap-2 self-start border-b border-border pb-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                >
                  Read full story
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
