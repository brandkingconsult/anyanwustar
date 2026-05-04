const disciplines = [
  { label: "Design", desc: "Interface systems, product surfaces, end-to-end UX." },
  { label: "Build", desc: "Real, shipped products via AI-assisted development." },
  { label: "Strategy", desc: "Digital presence, structure, and business clarity." },
];

export const About = () => {
  return (
    <section id="about" className="py-32 md:py-40">
      <div className="container-tight grid gap-16 md:grid-cols-12">
        <div className="reveal md:col-span-7">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            01 — About
          </p>
          <h2 className="mt-6 font-display text-3xl font-medium leading-tight md:text-5xl">
            I think in systems and ship in weeks.
          </h2>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              I work at the intersection of design, product, and business. My
              practice started in interface design — the discipline of making
              complex systems feel obvious — and grew into building the actual
              products around them.
            </p>
            <p>
              Today, I help founders and teams clarify their digital presence,
              design the experience, and ship the product. No drawn-out
              hand-offs. No template work. Just direct, intentional craft —
              delivered fast.
            </p>
          </div>
        </div>

        <div className="md:col-span-5">
          <ul className="hairline">
            {disciplines.map((d, i) => (
              <li
                key={d.label}
                className="reveal flex items-start justify-between gap-6 border-b border-border py-6"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div>
                  <p className="font-display text-lg">{d.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{d.desc}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
