import { useEffect, useState } from "react";
import { TopNav } from "@/components/site/TopNav";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { WhoIWorkWith } from "@/components/site/WhoIWorkWith";
import { ProjectCarousel } from "@/components/site/ProjectCarousel";
import { Process } from "@/components/site/Process";
import { Services } from "@/components/site/Services";
import { StrategyCall } from "@/components/site/StrategyCall";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { StrategyCallModal } from "@/components/site/StrategyCallModal";
import { FloatingActions } from "@/components/site/FloatingActions";
import { useReveal } from "@/hooks/use-reveal";
import { workProjects, productProjects } from "@/data/projects";

const Index = () => {
  useReveal();
  const [consultOpen, setConsultOpen] = useState(false);

  useEffect(() => {
    document.title = "Star; Designer, Founder, Product Builder";
    const desc =
      "Star designs premium UI/UX systems in Figma, builds rapid MVPs with AI-assisted workflows, and audits websites to strengthen conversions.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav onBookStrategyCall={() => setConsultOpen(true)} />
      <main>
        <Hero onBookStrategyCall={() => setConsultOpen(true)} />
        <About />
        <WhoIWorkWith />
        <ProjectCarousel
          id="work"
          index="02"
          eyebrow="Selected work"
          title="UI/UX work for teams who care about the details."
          description="Long-form case studies, audits, and end-to-end product design I've led for B2B and consumer teams."
          basePath="/work"
          items={workProjects}
        /> 

        <ProjectCarousel
          id="products"
          index="03"
          eyebrow="Case Studies"
          title="Purposeful products built to solve real problems."
          description="Independent case studies where I identify a functional gap and build a professional solution from zero to one."
          basePath="/products"
          items={productProjects}
          direction="right"
        />
        <Process />
        <Services />
        <StrategyCall onBook={() => setConsultOpen(true)} />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StrategyCallModal open={consultOpen} onOpenChange={setConsultOpen} />
      <FloatingActions />
    </div>
  );
};

export default Index;
