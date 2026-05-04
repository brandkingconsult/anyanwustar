import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCarouselProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  basePath: "/work" | "/products";
  items: Project[];
  direction?: "left" | "right";
}

const ProjectCardImage = ({ images }: { images?: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4500); // Slightly slower for more elegance
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="absolute inset-0 z-0">
      {images.map((img, i) => (
        <img
          key={img}
          src={img}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-background/60 transition-opacity duration-700 group-hover:bg-background/40" />
    </div>
  );
};

const ProjectCard = ({
  project,
  basePath,
}: {
  project: Project;
  basePath: "/work" | "/products";
}) => {
  return (
    <Link
      to={`${basePath}/${project.slug}`}
      className="group block w-[78vw] shrink-0 sm:w-[420px] md:w-[500px]"
    >
      <div className="relative aspect-[4/3] overflow-hidden border border-border bg-card transition-all duration-700 group-hover:border-primary/60">
        {project.images && project.images.length > 0 ? (
          <ProjectCardImage images={project.images} />
        ) : (
          <div className="absolute inset-0 bg-[hsl(228,11%,10%)] transition-transform duration-[1200ms] group-hover:scale-[1.03]" />
        )}

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(500px 300px at 50% 30%, hsl(var(--primary) / 0.18), transparent 60%)",
          }}
        />

        {/* Browser chrome decoration */}
        <div className="absolute left-8 right-8 top-8 z-10 flex items-center gap-2">
          <span className="h-1 w-1 bg-white/20" />
          <span className="h-1 w-1 bg-white/20" />
          <span className="h-1 w-1 bg-white/20" />
        </div>

        <div className="absolute bottom-8 left-8 right-8 z-10">
          <div className="h-px w-1/3 bg-primary/70 transition-all duration-700 group-hover:w-full" />
          <p className="mt-4 font-display text-xl text-white md:text-2xl">
            {project.title}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {project.role} — {project.year}
          </p>
          <p className="mt-2 max-w-md text-sm text-foreground/80">
            {project.summary}
          </p>
        </div>
        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>
    </Link>
  );
};

export const ProjectCarousel = ({
  id,
  index,
  eyebrow,
  title,
  description,
  basePath,
  items,
  direction = "left",
}: ProjectCarouselProps) => {
  // Create enough clones to ensure the marquee fills the screen width
  // We need at least double the items to loop at 50%, 
  // and enough total items to cover a wide viewport.
  const getLoopItems = () => {
    if (items.length === 0) return [];
    let result = [...items];
    while (result.length < 12) { // 12 items is plenty for any resolution
      result = [...result, ...items];
    }
    // Final duplication for the 50% loop math
    return [...result, ...result];
  };

  const loop = getLoopItems();
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // Pause CSS animation while user manually scrolls horizontally; resume after idle
  useEffect(() => {
    const el = trackRef.current?.parentElement; // scroll container
    if (!el) return;
    let timer: number | null = null;
    const onScroll = () => {
      setPaused(true);
      if (timer) window.clearTimeout(timer);
      timer = window.setTimeout(() => setPaused(false), 1200);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  return (
    <section id={id} className="overflow-hidden py-28 md:py-40">
      <div className="container-tight">
        <div className="reveal flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {index} — {eyebrow}
            </p>
            <h2 className="mt-6 max-w-2xl font-display text-3xl font-medium leading-tight md:text-5xl">
              {title}
            </h2>
          </div>
          <div className="flex max-w-sm flex-col items-start gap-5">
            <p className="text-sm text-muted-foreground">{description}</p>
            <Link
              to={`/projects?type=${basePath === "/work" ? "work" : "product"}`}
              className="group inline-flex items-center gap-2 border border-border bg-foreground/[0.04] px-4 py-2.5 text-[11px] uppercase tracking-[0.22em] text-foreground transition-all hover:border-foreground/40 hover:bg-foreground/[0.08]"
            >
              View all {basePath === "/work" ? "work" : "products"}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>

      <div
        className="reveal mt-12 md:mt-16"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 4%, black 96%, transparent)",
        }}
      >
        {/* Scroll container — manual horizontal scroll on all devices */}
        <div
          className="overflow-x-auto overflow-y-hidden scrollbar-hide"
          style={{ WebkitOverflowScrolling: "touch" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => window.setTimeout(() => setPaused(false), 1500)}
        >
          <div
            ref={trackRef}
            className={`flex w-max gap-6 md:gap-8 ${
              direction === "right" ? "marquee-track-rtl" : "marquee-track"
            }`}
            style={{ animationPlayState: paused ? "paused" : "running" }}
          >
            {loop.map((p, i) => (
              <ProjectCard key={`${p.slug}-${i}`} project={p} basePath={basePath} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
