import { Users, Building2, Rocket, Code2, LineChart, Lightbulb } from "lucide-react";

const audiences = [
  {
    icon: Code2,
    title: "Product Teams & SaaS Founders",
    desc: "Requiring scalable, premium interface systems and end-to-end UX designed in Figma to satisfy users and elevate their brand.",
  },
  {
    icon: Rocket,
    title: "Startup & Idea-Stage Founders",
    desc: "Needing to turn a vision into a functional MVP rapidly using AI-assisted workflows to build momentum and pitch investors.",
  },
  {
    icon: LineChart,
    title: "Growth-Focused Businesses",
    desc: "Looking to strengthen their existing digital presence with actionable website audits that improve user flow and drive conversions.",
  },
];

export const WhoIWorkWith = () => {
  return (
    <section className="py-32 tablet:py-40 border-y border-border/40 bg-foreground/[0.02]">
      <div className="container-tight">
        <div className="reveal text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-medium leading-tight tablet:text-5xl">
            Who I Work With
          </h2>
          <p className="mt-6 text-base text-muted-foreground tablet:text-lg">
            I partner with forward-thinking individuals and teams who value speed, quality, and direct communication over red tape.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, i) => (
            <div
              key={audience.title}
              className="reveal flex flex-col items-start rounded-[10px] border border-border bg-background p-8 transition-colors duration-500 hover:border-primary/60"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-6 rounded-full bg-primary/10 p-3 text-primary">
                <audience.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-medium">{audience.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {audience.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
