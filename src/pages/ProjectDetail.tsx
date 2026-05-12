import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { TopNav } from "@/components/site/TopNav";
import { Footer } from "@/components/site/Footer";
import { StrategyCallModal } from "@/components/site/StrategyCallModal";
import { FloatingActions } from "@/components/site/FloatingActions";
import { findProject, projects, type ProjectKind } from "@/data/projects";
import { useReveal } from "@/hooks/use-reveal";

interface Props {
  kind: ProjectKind;
}

/* Neutral placeholder tile when no real screenshot exists */
const PlaceholderTile = ({
  label,
  hint,
  className,
}: {
  label: string;
  hint: string;
  className?: string;
}) => (
  <div
    className={`group relative overflow-hidden border border-border bg-card transition-all duration-700 hover:border-primary/50 ${
      className ?? ""
    }`}
  >
    <div
      aria-hidden
      className="absolute inset-0 opacity-60 transition-opacity duration-700 group-hover:opacity-100"
      style={{
        background:
          "linear-gradient(135deg, hsl(228 11% 12%) 0%, hsl(228 11% 8%) 100%)",
      }}
    />
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
      style={{
        background:
          "radial-gradient(500px 280px at 50% 30%, hsl(var(--primary) / 0.18), transparent 60%)",
      }}
    />
    <div className="absolute left-6 right-6 top-6 flex items-center gap-1.5">
      <span className="h-1.5 w-1.5 bg-muted-foreground/40" />
      <span className="h-1.5 w-1.5 bg-muted-foreground/40" />
      <span className="h-1.5 w-1.5 bg-muted-foreground/40" />
    </div>
    <div className="absolute left-6 right-6 top-12 space-y-2">
      <div className="h-1 w-24 bg-muted-foreground/20" />
      <div className="h-1 w-40 bg-muted-foreground/15" />
    </div>
    <div className="absolute bottom-6 left-6 right-6">
      <div className="h-px w-1/3 bg-primary/70 transition-all duration-700 group-hover:w-full" />
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        {hint}
      </p>
      <p className="mt-1 font-display text-lg text-foreground tablet:text-xl">{label}</p>
    </div>
  </div>
);

const ImageTile = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <div
    className={`group relative overflow-hidden border border-border bg-card transition-all duration-700 hover:border-primary/50 ${
      className ?? ""
    }`}
  >
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
      style={{
        background:
          "radial-gradient(500px 280px at 50% 30%, hsl(var(--primary) / 0.14), transparent 60%)",
      }}
    />
  </div>
);

const ProjectDetail = ({ kind }: Props) => {
  useReveal();
  const { slug = "" } = useParams();
  const project = findProject(slug);
  const [consultOpen, setConsultOpen] = useState(false);

  useEffect(() => {
    if (project) {
      document.title = `${project.title}; Star`;
    }
    window.scrollTo({ top: 0 });
  }, [project]);

  if (!project || project.kind !== kind) {
    return <Navigate to="/" replace />;
  }

  const others = projects
    .filter((p) => p.kind === kind && p.slug !== project.slug)
    .sort((a, b) => b.date.localeCompare(a.date));
  const moreProjects = others.slice(0, 3);
  const basePath = kind === "work" ? "/work" : "/products";
  const isProduct = kind === "product";

  const placeholderTiles = [
    { label: "Hero / Landing", hint: "Tile 01" },
    { label: "Core feature", hint: "Tile 02" },
    { label: "Detail / flow", hint: "Tile 03" },
    { label: "Mobile view", hint: "Tile 04" },
    { label: "System / kit", hint: "Tile 05" },
  ];

  // Use up to 5 real images if provided; otherwise fall back to placeholders.
  const tiles = Array.from({ length: 5 }).map((_, i) => {
    const img = project.images?.[i];
    if (img) {
      return { type: "image" as const, src: img };
    }
    return { type: "placeholder" as const, ...placeholderTiles[i] };
  });

  const tileClasses = [
    "tablet:col-span-4 tablet:row-span-2 tablet:min-h-[480px] aspect-[4/3] tablet:aspect-auto",
    "tablet:col-span-2 aspect-[4/3] tablet:aspect-auto",
    "tablet:col-span-2 aspect-[4/3] tablet:aspect-auto",
    "tablet:col-span-3 aspect-[4/3] tablet:aspect-auto",
    "tablet:col-span-3 aspect-[4/3] tablet:aspect-auto",
  ];


  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav onBookStrategyCall={() => setConsultOpen(true)} />

      <article className="pt-32 tablet:pt-40">
        <div className="container-tight">

          <Link
            to="/"
            className="link-underline inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </Link>

          <div className="reveal mt-12">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {isProduct ? "Case study" : "Selected work"} · {project.year}
            </p>
            <h1 className="mt-8 max-w-4xl font-display text-4xl font-medium leading-[1.05] tablet:text-6xl lg:text-7xl">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="mt-4 font-display text-xl text-muted-foreground tablet:text-2xl">
                {project.subtitle}
              </p>
            )}
            <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground tablet:text-lg">
              {project.summary}
            </p>


            {isProduct && project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-3 bg-primary px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-all hover:bg-primary/90"
              >
                Visit the live site
                <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
          </div>

          <div className="reveal mt-16 grid gap-8 border-y border-border py-8 text-xs uppercase tracking-[0.18em] tablet:grid-cols-4">

            <div>
              <p className="text-muted-foreground">Role</p>
              <p className="mt-2 text-foreground">{project.role}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Year</p>
              <p className="mt-2 text-foreground">{project.year}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Discipline</p>
              <p className="mt-2 text-foreground">{project.tags.join(" · ")}</p>
            </div>
            {project.url && (
              <div>
                <p className="text-muted-foreground">Live</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline mt-2 inline-flex items-center gap-2 text-foreground"
                >
                  Visit <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Bento grid */}
        <div className="container-tight mt-20 tablet:mt-24">
          <div className="reveal mb-8 flex items-end justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Visual tour
            </p>
            <p className="hidden text-xs text-muted-foreground tablet:block">
              5 selected views
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 tablet:grid-cols-6 tablet:grid-rows-2 tablet:gap-5 tablet:[grid-auto-rows:minmax(220px,auto)]">

            {tiles.map((tile, i) => (
              <div key={i} className={`reveal ${tileClasses[i]}`}>
                {tile.type === "image" ? (
                  <ImageTile
                    src={tile.src}
                    alt={`${project.title}: view ${i + 1}`}
                    className="h-full w-full"
                  />
                ) : (
                  <PlaceholderTile
                    label={tile.label}
                    hint={tile.hint}
                    className="h-full w-full"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Structured case study */}
        <div className="container-tight mt-24 grid gap-16 tablet:grid-cols-12 tablet:gap-24">
          <aside className="tablet:col-span-4">
            <p className="sticky top-28 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Case study
            </p>
          </aside>

          <div className="space-y-20 tablet:col-span-8">
            <section className="reveal">
              <h2 className="font-display text-2xl text-foreground tablet:text-3xl">
                Overview
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground tablet:text-lg">
                {project.overview}
              </p>
            </section>


            {project.problem.length > 0 && (
              <section className="reveal">
                <h2 className="font-display text-2xl text-foreground md:text-3xl">
                  Problem
                </h2>
                <ul className="mt-6 space-y-3">
                  {project.problem.map((p, i) => (
                    <li
                      key={i}
                      className="flex gap-4 text-base leading-relaxed text-muted-foreground md:text-lg"
                    >
                      <span className="mt-3 h-px w-6 shrink-0 bg-primary/70" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section className="reveal">
              <h2 className="font-display text-2xl text-foreground md:text-3xl">
                Solution
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                {project.solution}
              </p>
            </section>

            {project.keyFeatures.length > 0 && (
              <section className="reveal">
                <h2 className="font-display text-2xl text-foreground tablet:text-3xl">
                  Key features
                </h2>
                <div className="mt-8 grid gap-px bg-border tablet:grid-cols-2">
                  {project.keyFeatures.map((f, i) => (
                    <div key={i} className="bg-background p-6">
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-3 font-display text-lg text-foreground">
                        {f.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {f.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}


            {project.myRole.length > 0 && (
              <section className="reveal">
                <h2 className="font-display text-2xl text-foreground tablet:text-3xl">
                  My role
                </h2>
                <ul className="mt-6 space-y-3">
                  {project.myRole.map((r, i) => (
                    <li
                      key={i}
                      className="flex gap-4 text-base leading-relaxed text-muted-foreground tablet:text-lg"
                    >
                      <span className="mt-3 h-px w-6 shrink-0 bg-primary/70" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}


            <section className="reveal">
              <h2 className="font-display text-2xl text-foreground tablet:text-3xl">
                Outcome
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground tablet:text-lg">
                {project.outcome}
              </p>
            </section>


            {isProduct && project.url && (
              <section className="reveal border border-border bg-card/40 p-8 tablet:p-10">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  See it live
                </p>
                <h3 className="mt-4 font-display text-2xl leading-tight tablet:text-3xl">
                  This solution is live and functional; explore it in the real world.
                </h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-6 inline-flex items-center gap-3 border border-foreground px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-foreground transition-all hover:bg-transparent hover:text-foreground"
                >
                  View project live
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </section>
            )}
          </div>
        </div>

        {/* More projects of the same kind */}
        {moreProjects.length > 0 && (
          <div className="container-tight mt-32 border-t border-border pt-16">
            <div className="reveal flex items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  More {isProduct ? "case studies" : "UI/UX work"}
                </p>
                <h2 className="mt-4 font-display text-3xl font-medium leading-tight tablet:text-5xl">
                  Keep exploring.
                </h2>
              </div>
              <Link
                to={`/projects?type=${isProduct ? "product" : "work"}`}
                className="link-underline hidden items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground tablet:inline-flex"
              >
                View all <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="mt-12 grid gap-px bg-border tablet:grid-cols-3">
              {moreProjects.map((p) => (
                <Link
                  key={p.slug}
                  to={`${basePath}/${p.slug}`}
                  className="group block bg-background p-6 transition-colors hover:bg-card tablet:p-8"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {p.year} · {p.tags[0]}
                  </p>
                  <h3 className="mt-6 font-display text-xl text-foreground tablet:text-2xl">
                    {p.title}
                  </h3>

                  <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
                    {p.summary}
                  </p>
                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Read case
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                </Link>
              ))}
            </div>

            <Link
              to={`/projects?type=${isProduct ? "product" : "work"}`}
              className="link-underline mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground tablet:hidden"
            >
              View all <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>

          </div>
        )}
      </article>

      <Footer />
      <StrategyCallModal open={consultOpen} onOpenChange={setConsultOpen} />
      <FloatingActions />
    </div>
  );
};

export default ProjectDetail;
