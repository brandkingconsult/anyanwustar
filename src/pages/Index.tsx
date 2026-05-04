import { useEffect, useState } from "react";
import { TopNav } from "@/components/site/TopNav";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { ProjectCarousel } from "@/components/site/ProjectCarousel";
import { Process } from "@/components/site/Process";
import { Services } from "@/components/site/Services";
import { Consultation } from "@/components/site/Consultation";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { ConsultationModal } from "@/components/site/ConsultationModal";
import { FloatingActions } from "@/components/site/FloatingActions";
import { useReveal } from "@/hooks/use-reveal";
import { workProjects, productProjects } from "@/data/projects";

const Index = () => {
  useReveal();
  const [consultOpen, setConsultOpen] = useState(false);

  useEffect(() => {
    document.title = "Star — Designer, Founder, Product Builder";
    const desc =
      "Star designs interfaces, builds real products with AI-assisted development, and helps businesses sharpen their digital presence.";
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
      <TopNav onBookConsultation={() => setConsultOpen(true)} />
      <main>
        <Hero onBookConsultation={() => setConsultOpen(true)} />
        <About />
        {/* 
        <ProjectCarousel
          id="work"
          index="02"
          eyebrow="Selected work"
          title="UI/UX work for teams who care about the details."
          description="Long-form case studies, audits, and end-to-end product design I've led for B2B and consumer teams."
          basePath="/work"
          items={workProjects}
        /> 
        */}
        <ProjectCarousel
          id="products"
          index="03"
          eyebrow="Built products"
          title="Real products I've shipped — not concepts in a deck."
          description="Founder-built and client products I've taken end-to-end with AI-assisted development."
          basePath="/products"
          items={productProjects}
          direction="right"
        />
        <Process />
        <Services />
        <Consultation onBook={() => setConsultOpen(true)} />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ConsultationModal open={consultOpen} onOpenChange={setConsultOpen} />
      <FloatingActions />
    </div>
  );
};

export default Index;
