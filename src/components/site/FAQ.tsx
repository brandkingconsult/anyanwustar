import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Vibe Coding?",
    a: "Vibe Coding is my shorthand for AI-assisted development — using AI as a high-leverage collaborator to design and ship real, working software fast, without sacrificing intent or craft.",
  },
  {
    q: "Do you only design, or do you also build?",
    a: "Both. Most of my engagements include design and a working build. Design-only engagements are possible but rarer.",
  },
  {
    q: "What does a typical timeline look like?",
    a: "A focused product sprint with me runs 4–8 weeks. Strategy and audits typically take 1–2 weeks. Consultations are single sessions.",
  },
  {
    q: "How is your pricing structured?",
    a: "Fixed-scope projects with a clear deliverable and timeline. No hourly billing. I quote after a short discovery call.",
  },
  {
    q: "Do you take on retainers?",
    a: "Occasionally — for partners I've already shipped with. My default is project-based.",
  },
  {
    q: "Can you work with an existing team?",
    a: "Yes. I integrate cleanly with internal designers, engineers, and PMs. I bring opinions, not ego.",
  },
  {
    q: "What industries do you focus on?",
    a: "Fintech, SaaS, and founder-led companies. Anywhere clarity and speed of execution matter more than ceremony.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-32 md:py-40">
      <div className="container-tight grid gap-16 md:grid-cols-12">
        <div className="reveal md:col-span-4">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            08 — Questions
          </p>
          <h2 className="mt-6 font-display text-3xl font-medium leading-tight md:text-4xl">
            Common questions, answered directly.
          </h2>
        </div>

        <div className="reveal md:col-span-8">
          <Accordion type="single" collapsible className="hairline">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="py-6 text-left font-display text-base font-medium text-foreground hover:no-underline md:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
