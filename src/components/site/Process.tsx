import { useState } from "react";
import { cn } from "@/lib/utils";

const uiUxSteps = [
  {
    n: "01",
    title: "Listen for the actual problem",
    body: "Most briefs describe a symptom. I dig until we agree on the actual problem: usually it's clarity, not surface.",
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

const mvpSteps = [
  {
    n: "01",
    title: "Product Discovery",
    body: "We start with a strategy call to define the core problem, validate the idea, and ensure we're building what matters most.",
  },
  {
    n: "02",
    title: "UX & Product Structure",
    body: "We plan all the structures and roadmap. I design the essential flows and create a robust foundation in Figma.",
  },
  {
    n: "03",
    title: "Rapid MVP Build",
    body: "I build the functional product rapidly using AI-assisted workflows (Lovable, Antigravity, and Claude Code).",
  },
  {
    n: "04",
    title: "Iteration & Refinement",
    body: "We review the functional build, implement changes, and refine the experience until it's seamless and ready.",
  },
  {
    n: "05",
    title: "Launch / Pitch-Ready Delivery",
    body: "The final hand-off. We launch to users or deliver a high-fidelity, working product ready to present to investors.",
  },
];

export const Process = () => {
  const [activeTab, setActiveTab] = useState<"mvp" | "uiux">("mvp");

  const steps = activeTab === "mvp" ? mvpSteps : uiUxSteps;

  return (
    <section id="process" className="py-32 tablet:py-40">
      <div className="container-tight">
        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            03; Workflow
          </p>
          <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight tablet:text-5xl">
              How I think; and how the work actually gets made.
            </h2>
            
            {/* Tabs */}
            <div className="flex items-center gap-2 border border-border p-1 bg-background shrink-0">
              <button
                onClick={() => setActiveTab("mvp")}
                className={cn(
                  "px-6 py-2.5 text-xs font-medium uppercase tracking-[0.1em] transition-all",
                  activeTab === "mvp"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                MVP Build
              </button>
              <button
                onClick={() => setActiveTab("uiux")}
                className={cn(
                  "px-6 py-2.5 text-xs font-medium uppercase tracking-[0.1em] transition-all",
                  activeTab === "uiux"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                UI/UX Design
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 relative">
          {/* Vertical connecting line for roadmap feel */}
          <div className="absolute left-[27px] top-8 bottom-8 w-px bg-border/60 hidden tablet:block" />

          <div className="flex flex-col gap-6 tablet:gap-0">
            {steps.map((s, index) => (
              <div
                key={s.n}
                className="reveal relative flex flex-col tablet:flex-row gap-6 tablet:gap-16 tablet:py-10 group"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Step indicator node */}
                <div className="flex items-start shrink-0 tablet:w-14">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary font-mono text-sm shadow-[0_0_15px_-3px_hsl(var(--primary)/0.2)] transition-all duration-500 group-hover:border-primary/40 group-hover:bg-primary/10 relative z-10">
                    {s.n}
                  </div>
                </div>

                <div className="flex flex-col justify-center rounded-[10px] border border-border/50 bg-foreground/[0.01] p-6 tablet:p-8 flex-1 transition-all duration-500 hover:border-primary/30 hover:bg-foreground/[0.02]">
                  <h3 className="font-display text-xl text-foreground tablet:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground tablet:text-base max-w-3xl">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
