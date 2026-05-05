const steps = [
  {
    n: "01",
    title: "Listen for the actual problem",
    body: "Most briefs describe a symptom. I dig until we agree on the actual problem — usually it's clarity, not surface.",
  },
  {
    n: "02",
    title: "Design the system, not the screen",
    body: "Every interface is a system of decisions. I design the rules first; the screens fall out of them.",
  },
  {
    n: "03",
    title: "Build it for real",
    body: "I ship working product using AI-assisted development. Less hand-off, more momentum, fewer translation losses.",
  },
  {
    n: "04",
    title: "Tie it back to the business",
    body: "Design choices have business consequences. I make those consequences explicit and measurable.",
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-32 tablet:py-40">
      <div className="container-tight">
        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            04 — Process
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tablet:text-5xl">
            How I think — and how the work actually gets made.
          </h2>
        </div>

        <div className="mt-16 grid gap-px bg-border sm:grid-cols-2">
          {steps.map((s) => (
            <div
              key={s.n}
              className="reveal bg-background p-8 tablet:p-10"
            >
              <p className="font-mono text-xs text-primary">{s.n}</p>
              <h3 className="mt-6 font-display text-xl text-foreground tablet:text-2xl">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground tablet:text-base">

                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
