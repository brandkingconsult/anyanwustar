import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight, Search, LayoutGrid, Rows3, X } from "lucide-react";
import { TopNav } from "@/components/site/TopNav";
import { Footer } from "@/components/site/Footer";
import { ConsultationModal } from "@/components/site/ConsultationModal";
import { FloatingActions } from "@/components/site/FloatingActions";
import { projects, type ProjectKind } from "@/data/projects";
import { useReveal } from "@/hooks/use-reveal";

type FilterType = "all" | ProjectKind;
type SortKey = "newest" | "oldest" | "az";
type ViewMode = "grid" | "list";

const TYPE_LABELS: Record<FilterType, string> = {
  all: "All",
  work: "UI/UX Work",
  product: "Built Products",
};

const SORT_LABELS: Record<SortKey, string> = {
  newest: "Newest first",
  oldest: "Oldest first",
  az: "A — Z",
};

const Projects = () => {
  useReveal();
  const [params, setParams] = useSearchParams();
  const [consultOpen, setConsultOpen] = useState(false);

  const initialType = (params.get("type") as FilterType) || "all";
  const [type, setType] = useState<FilterType>(initialType);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("newest");
  const [view, setView] = useState<ViewMode>("grid");

  useEffect(() => {
    document.title = "All Projects — Star";
  }, []);

  // sync ?type= into URL
  useEffect(() => {
    const next = new URLSearchParams(params);
    if (type === "all") next.delete("type");
    else next.set("type", type);
    setParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = projects.filter((p) => (type === "all" ? true : p.kind === type));
    if (q) {
      list = list.filter((p) =>
        [p.title, p.subtitle ?? "", p.summary, p.tags.join(" "), p.role]
          .join(" ")
          .toLowerCase()
          .includes(q),
      );
    }
    list = [...list].sort((a, b) => {
      if (sort === "az") return a.title.localeCompare(b.title);
      if (sort === "oldest") return a.date.localeCompare(b.date);
      return b.date.localeCompare(a.date);
    });
    return list;
  }, [type, query, sort]);

  const counts = useMemo(
    () => ({
      all: projects.length,
      work: projects.filter((p) => p.kind === "work").length,
      product: projects.filter((p) => p.kind === "product").length,
    }),
    [],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav onBookConsultation={() => setConsultOpen(true)} />

      <main className="pt-32 tablet:pt-40">
        <div className="container-tight">
          <div className="reveal">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Archive
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-medium leading-[1.05] tablet:text-6xl lg:text-7xl">
              Every project, in one place.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground tablet:text-lg">
              Search across UI/UX work and shipped products. Filter by type, sort by date or name.
            </p>
          </div>
        </div>


        {/* Sticky filter bar */}
        <div className="sticky top-16 z-30 mt-16 border-y border-border bg-background/85 backdrop-blur-xl tablet:top-20">
          <div className="container-tight">
            <div className="flex flex-col gap-4 py-4 tablet:flex-row tablet:items-center tablet:justify-between">
              {/* Search */}
              <div className="group relative flex w-full items-center tablet:max-w-md">

                <Search className="pointer-events-none absolute left-3 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-foreground" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects, tags, role…"
                  className="w-full border border-border bg-foreground/[0.03] py-2.5 pl-10 pr-10 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground/40"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="absolute right-2 flex h-7 w-7 items-center justify-center text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {/* Type chips */}
                <div className="flex items-center gap-1 border border-border bg-foreground/[0.03] p-1">
                  {(Object.keys(TYPE_LABELS) as FilterType[]).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setType(t)}
                      className={`px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] transition-colors ${
                        type === t
                          ? "bg-foreground text-background"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {TYPE_LABELS[t]}
                      <span className="ml-1.5 text-[9px] opacity-60">
                        {counts[t]}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Sort */}
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortKey)}
                    className="appearance-none border border-border bg-foreground/[0.03] py-2 pl-3 pr-8 text-[11px] uppercase tracking-[0.18em] text-foreground outline-none transition-colors hover:bg-foreground/[0.06]"
                  >
                    {(Object.keys(SORT_LABELS) as SortKey[]).map((k) => (
                      <option key={k} value={k} className="bg-background">
                        {SORT_LABELS[k]}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[8px] text-muted-foreground">
                    ▼
                  </span>
                </div>

                {/* View toggle */}
                <div className="hidden items-center gap-1 border border-border bg-foreground/[0.03] p-1 tablet:flex">

                  <button
                    type="button"
                    onClick={() => setView("grid")}
                    aria-label="Grid view"
                    className={`flex h-7 w-7 items-center justify-center transition-colors ${
                      view === "grid"
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <LayoutGrid className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setView("list")}
                    aria-label="List view"
                    className={`flex h-7 w-7 items-center justify-center transition-colors ${
                      view === "list"
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Rows3 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="container-tight py-16 tablet:py-20">

          <p className="mb-8 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "project" : "projects"}
            {query && (
              <span className="ml-2 text-foreground">· "{query}"</span>
            )}
          </p>

          {filtered.length === 0 ? (
            <div className="border border-dashed border-border p-16 text-center">
              <p className="font-display text-2xl">No projects match.</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Try a different search or clear filters.
              </p>
              <button
                onClick={() => {
                  setQuery("");
                  setType("all");
                }}
                className="mt-6 inline-flex items-center gap-2 border border-foreground px-4 py-2 text-[11px] uppercase tracking-[0.2em] hover:bg-foreground hover:text-background"
              >
                Reset
              </button>
            </div>
          ) : view === "grid" ? (
            <div className="grid gap-px bg-border tablet:grid-cols-2 lg:grid-cols-3">

              {filtered.map((p) => {
                const basePath = p.kind === "work" ? "/work" : "/products";
                return (
                  <Link
                    key={p.slug}
                    to={`${basePath}/${p.slug}`}
                    className="group flex flex-col bg-background p-6 transition-colors hover:bg-card tablet:p-8"
                  >

                    <div className="flex items-center justify-between">
                      <span className="border border-border px-2 py-0.5 text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                        {p.kind === "work" ? "UI/UX" : "Product"}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        {p.year}
                      </span>
                    </div>
                    <h2 className="mt-10 font-display text-2xl leading-tight text-foreground tablet:text-3xl">
                      {p.title}
                    </h2>

                    {p.subtitle && (
                      <p className="mt-2 text-sm text-muted-foreground">
                        {p.subtitle}
                      </p>
                    )}
                    <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {p.summary}
                    </p>
                    <div className="mt-auto flex items-end justify-between pt-10">
                      <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {p.tags.slice(0, 2).join(" · ")}
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="border-t border-border">
              {filtered.map((p) => {
                const basePath = p.kind === "work" ? "/work" : "/products";
                return (
                  <Link
                    key={p.slug}
                    to={`${basePath}/${p.slug}`}
                    className="group grid grid-cols-12 items-center gap-4 border-b border-border px-2 py-6 transition-colors hover:bg-card"
                  >
                    <span className="col-span-2 font-mono text-xs text-muted-foreground tablet:col-span-1">
                      {p.year}
                    </span>
                    <div className="col-span-10 tablet:col-span-6">
                      <p className="font-display text-lg text-foreground tablet:text-xl">
                        {p.title}
                      </p>

                      {p.subtitle && (
                        <p className="text-sm text-muted-foreground">
                          {p.subtitle}
                        </p>
                      )}
                    </div>
                    <span className="col-span-6 hidden text-xs uppercase tracking-[0.18em] text-muted-foreground tablet:col-span-3 tablet:block">
                      {p.tags.slice(0, 2).join(" · ")}
                    </span>
                    <span className="col-span-5 hidden text-right text-[10px] uppercase tracking-[0.22em] text-muted-foreground tablet:col-span-1 tablet:block">
                      {p.kind === "work" ? "UI/UX" : "Product"}
                    </span>

                    <ArrowUpRight className="col-span-1 h-5 w-5 justify-self-end text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <Footer />
      <ConsultationModal open={consultOpen} onOpenChange={setConsultOpen} />
      <FloatingActions />
    </div>
  );
};

export default Projects;
