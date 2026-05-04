import { ArrowUpRight } from "lucide-react";

const includes = [
  "60-minute working session",
  "Audit of your current digital presence",
  "Concrete, prioritized recommendations",
  "Follow-up note within 48 hours",
];

interface ConsultationProps {
  onBook: () => void;
}

export const Consultation = ({ onBook }: ConsultationProps) => {
  return (
    <section id="consultation" className="py-32 md:py-40">
      <div className="container-tight">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="reveal md:col-span-6">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              06 — Consultation
            </p>
            <h2 className="mt-6 font-display text-3xl font-medium leading-tight md:text-5xl">
              A strategic consultation for businesses serious about clarity.
            </h2>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              An optional one-off engagement for teams who suspect their site,
              product, or digital presence is leaving real value on the table.
              No retainer pitch. Just direct, useful, honest work — from me.
            </p>

            <button
              onClick={onBook}
              className="group mt-10 inline-flex items-center gap-3 border border-foreground px-6 py-3 text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Request consultation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>

          <div className="reveal md:col-span-6">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              What's included
            </p>
            <ul className="hairline mt-6">
              {includes.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline justify-between gap-6 border-b border-border py-6"
                >
                  <span className="text-base text-foreground md:text-lg">{item}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
