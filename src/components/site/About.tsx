const disciplines = [
  { label: "UI/UX Design", desc: "Premium interface systems, product surfaces, and end-to-end UX in Figma." },
  { label: "MVP Build", desc: "Rapid, functional product building via AI-assisted workflows." },
  { label: "Website Audit", desc: "Actionable improvements to strengthen feel, flow, and drive conversions." },
];

export const About = () => {
  return (
    <section id="about" className="py-32 tablet:py-40">
      <div className="container-tight grid gap-16 tablet:grid-cols-12">
        <div className="reveal tablet:col-span-7">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            01; About
          </p>
          <h2 className="mt-6 font-display text-3xl font-medium leading-tight tablet:text-5xl">
            I think in systems and ship in weeks.
          </h2>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground tablet:text-lg">
            <p>
              I help founders and startups build modern MVPs, startup platforms, and digital products using AI-assisted workflows. My practice started in UI/UX design: the discipline of making complex systems feel obvious; and grew into building the actual products around them.
            </p>
            <p>
              Today, my work spans three core pillars: designing premium UI/UX systems in Figma, building rapid MVPs with AI-assisted development, and auditing existing websites to improve flow, conversion, and user experience. No drawn-out hand-offs. Just direct, intentional craft; delivered fast.
            </p>
          </div>
        </div>

        <div className="tablet:col-span-5">

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
