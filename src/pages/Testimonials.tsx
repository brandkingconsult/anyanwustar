import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Quote, Search } from "lucide-react";
import { TopNav } from "@/components/site/TopNav";
import { Footer } from "@/components/site/Footer";
import { ConsultationModal } from "@/components/site/ConsultationModal";
import { FloatingActions } from "@/components/site/FloatingActions";
import { useReveal } from "@/hooks/use-reveal";
import { testimonials } from "@/data/testimonials";

const allTags = Array.from(new Set(testimonials.flatMap((t) => t.tags))).sort();

const Testimonials = () => {
  useReveal();
  const location = useLocation();
  const [consultOpen, setConsultOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Testimonials — Star";
  }, []);

  // Sort newest → oldest
  const sorted = useMemo(
    () =>
      [...testimonials].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      ),
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sorted.filter((t) => {
      if (activeTag && !t.tags.includes(activeTag)) return false;
      if (!q) return true;
      return (
        t.name.toLowerCase().includes(q) ||
        t.role.toLowerCase().includes(q) ||
        t.shortQuote.toLowerCase().includes(q) ||
        t.before.toLowerCase().includes(q) ||
        t.shift.toLowerCase().includes(q) ||
        t.after.toLowerCase().includes(q)
      );
    });
  }, [sorted, query, activeTag]);

  // Scroll to anchored testimonial when arriving via #slug
  useEffect(() => {
    const hash = location.hash?.replace("#", "");
    if (!hash) return;
    const t = window.setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
    return () => window.clearTimeout(t);
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav onBookConsultation={() => setConsultOpen(true)} />

      <main className="pt-32 md:pt-40">
        <section className="container-tight">
          <Link
            to="/"
            className="link-underline inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back home
          </Link>

          <div className="reveal mt-12 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Testimonials · {sorted.length} stories
            </p>
            <h1 className="mt-8 font-display text-4xl font-medium leading-[1.05] md:text-6xl lg:text-7xl">
              Before, the shift, and what came after.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Every founder below started with a real problem. These pages tell
              the full arc — the friction they were stuck in, the work we did
              together, and where they landed on the other side.
            </p>
          </div>

          {/* Search + filters */}
          <div className="reveal mt-16 flex flex-col gap-4 border-y border-border py-6 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-sm">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by founder, role, or keyword…"
                className="w-full border border-border bg-transparent py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTag(null)}
                className={`border px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] transition-colors ${
                  activeTag === null
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                  className={`border px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] transition-colors ${
                    activeTag === tag
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Stories — newest first */}
          <div className="mt-16 space-y-24 md:mt-24 md:space-y-32">
            {filtered.length === 0 && (
              <p className="text-sm text-muted-foreground">
                No stories match that search yet.
              </p>
            )}
            {filtered.map((t, i) => (
              <article
                key={t.slug}
                id={t.slug}
                className="reveal scroll-mt-32 border-t border-border pt-12 md:pt-16"
              >
                <div className="grid gap-10 md:grid-cols-12 md:gap-16">
                  <aside className="md:col-span-4">
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      Story {String(i + 1).padStart(2, "0")} ·{" "}
                      {new Date(t.date).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                    <h2 className="mt-6 font-display text-2xl font-medium leading-tight md:text-3xl">
                      {t.name}
                    </h2>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {t.role}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {t.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-border px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </aside>

                  <div className="space-y-10 md:col-span-8">
                    <figure className="border-l-2 border-primary/60 bg-card/40 p-6 md:p-8">
                      <Quote className="h-6 w-6 text-primary/70" strokeWidth={1.5} />
                      <blockquote className="mt-4 font-display text-xl leading-snug text-foreground md:text-2xl">
                        "{t.pullQuote}"
                      </blockquote>
                    </figure>

                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                        Before
                      </p>
                      <p className="mt-3 text-base leading-relaxed text-foreground/90 md:text-lg">
                        {t.before}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
                        The shift
                      </p>
                      <p className="mt-3 text-base leading-relaxed text-foreground/90 md:text-lg">
                        {t.shift}
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                        After
                      </p>
                      <p className="mt-3 text-base leading-relaxed text-foreground/90 md:text-lg">
                        {t.after}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="reveal mt-32 border-t border-border py-16 text-center">
            <h3 className="mx-auto max-w-xl font-display text-2xl leading-tight md:text-4xl">
              Ready to write the next one of these together?
            </h3>
            <button
              onClick={() => setConsultOpen(true)}
              className="group mt-8 inline-flex items-center gap-3 bg-primary px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-all hover:bg-primary/90"
            >
              Book a consultation
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <ConsultationModal open={consultOpen} onOpenChange={setConsultOpen} />
      <FloatingActions />
    </div>
  );
};

export default Testimonials;
