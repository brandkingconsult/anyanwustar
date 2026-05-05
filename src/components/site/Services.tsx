const services = [
  {
    title: "UI/UX Design",
    items: ["Product surfaces", "Design systems", "Flow & IA audits", "Mobile & web"],
  },
  {
    title: "Product Build",
    items: ["AI-assisted development", "MVP in weeks", "Frontend + integrations", "Founder-mode pacing"],
  },
  {
    title: "Digital Strategy",
    items: ["Site & presence audits", "Positioning clarity", "Conversion structure", "Stack recommendations"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 tablet:py-40">
      <div className="container-tight">
        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            05 — Services
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tablet:text-5xl">
            Three ways to work with me.
          </h2>
        </div>

        <div className="mt-16 grid gap-8 tablet:grid-cols-3">

          {services.map((s) => (
            <div
              key={s.title}
              className="reveal flex h-full flex-col border border-border p-8 transition-colors duration-500 hover:border-primary/60"
            >
              <h3 className="font-display text-xl">{s.title}</h3>
              <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                {s.items.map((i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="h-px w-4 bg-primary/70" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
