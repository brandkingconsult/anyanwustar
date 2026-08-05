import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, PenTool, Layout, Layers, Sparkles, Zap, Package } from "lucide-react";
import { CinematicHero } from "../../components/temmora/hero/CinematicHero";

export const TemmoraHome = () => {
  useEffect(() => {
    document.title = "Temmora | Premium Website Templates by Anyanwu Star";
  }, []);

  return (
    <div className="w-full">
      <CinematicHero />

      {/* WHAT IS TEMMORA */}
      <section className="py-24 border-b border-border/40 bg-background/50">
        <div className="temmora-container max-w-4xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight">What exactly is Temmora?</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Temmora is a premium digital-product brand by Anyanwu Star. We create high-quality, production-ready website templates designed for modern businesses. Instead of starting from a blank canvas or dealing with bloated generic themes, Temmora provides sophisticated foundations that are ready to be customized and launched.
          </p>
        </div>
      </section>

      {/* FEATURED TEMPLATES */}
      <section className="py-24">
        <div className="temmora-container">
          <div className="mb-12 flex flex-col tablet:flex-row tablet:items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight">Featured Templates</h2>
              <p className="mt-2 text-muted-foreground">Select a premium starting point for your next project.</p>
            </div>
            <Link to="/temmora/templates" className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
              Explore all templates <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid gap-8 tablet:grid-cols-2 lg:grid-cols-3">
            {/* Featured Cards */}
            {[
              { name: "CMS Helm", category: "SaaS", price: 49 },
              { name: "Prévu Hotels", category: "Hospitality", price: 59 },
              { name: "Sitemap", category: "Portfolio", price: 49 }
            ].map((tpl) => (
              <div key={tpl.name} className="group relative flex flex-col overflow-hidden border border-border/60 bg-background transition-colors hover:border-foreground/30">
                <Link to={`/temmora/templates/${tpl.name.toLowerCase().replace(/\s+/g, "-")}`} className="absolute inset-0 z-10">
                  <span className="sr-only">View {tpl.name}</span>
                </Link>
                <div className="aspect-[16/10] bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-secondary/10 group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{tpl.category}</div>
                  <h3 className="font-display text-xl font-medium">{tpl.name}</h3>
                  <div className="mt-4 flex items-center justify-between border-t border-border/40 pt-4">
                    <span className="font-medium">From ${tpl.price}</span>
                    <span className="text-sm font-medium text-primary">View details</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TEMMORA */}
      <section className="py-24 border-y border-border/40 bg-foreground/[0.02]">
        <div className="temmora-container">
          <div className="mb-16 text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight">Why choose Temmora?</h2>
          </div>
          <div className="grid gap-12 tablet:grid-cols-3">
            <div className="flex flex-col text-center items-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Code2 className="h-8 w-8" />
              </div>
              <h3 className="mb-3 font-display text-xl font-medium">Built to Customize</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                These aren't rigid themes. They are actual code foundations built with React and Tailwind CSS, giving you complete freedom to adapt them.
              </p>
            </div>
            <div className="flex flex-col text-center items-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="mb-3 font-display text-xl font-medium">Launch Faster</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Start from a beautifully designed, complete website instead of a blank canvas. Save weeks of design and development time.
              </p>
            </div>
            <div className="flex flex-col text-center items-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Layout className="h-8 w-8" />
              </div>
              <h3 className="mb-3 font-display text-xl font-medium">Real Use Cases</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every template is built with commercial intent, featuring the layouts and sections real businesses actually need to convert visitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / CUSTOMIZATION */}
      <section id="how-it-works" className="py-24">
        <div className="temmora-container">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight mb-8">How it works</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-primary text-primary font-medium text-sm">01</div>
                  <div>
                    <h4 className="text-lg font-medium">Choose a Template</h4>
                    <p className="mt-2 text-sm text-muted-foreground">Browse the collection and find a foundation that matches your vision.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-primary text-primary font-medium text-sm">02</div>
                  <div>
                    <h4 className="text-lg font-medium">Make it yours</h4>
                    <p className="mt-2 text-sm text-muted-foreground">Use the included visual instructions to easily replace text, imagery, and branding.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-primary text-primary font-medium text-sm">03</div>
                  <div>
                    <h4 className="text-lg font-medium">Launch</h4>
                    <p className="mt-2 text-sm text-muted-foreground">Deploy it yourself instantly, or use our professional setup service.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Storytelling block */}
            <div className="relative aspect-square w-full rounded-xl border border-border/40 bg-foreground/[0.02] p-8 overflow-hidden flex flex-col items-center justify-center text-center">
              <Sparkles className="h-12 w-12 text-primary mb-6 opacity-50" />
              <h3 className="font-display text-2xl font-medium mb-4">You can actually use this.</h3>
              <p className="text-muted-foreground max-w-sm">
                Every template comes with crystal clear visual documentation showing you exactly how to edit the content and make it your own.
              </p>
              <div className="absolute -bottom-10 -right-10 h-64 w-64 bg-primary/10 rounded-full blur-3xl mix-blend-screen" />
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL SETUP */}
      <section className="py-24 border-t border-border/40">
        <div className="temmora-container">
          <div className="mb-16 text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight">Need help launching?</h2>
            <p className="mt-4 text-muted-foreground">Two ways to get your website live.</p>
          </div>

          <div className="grid gap-8 tablet:grid-cols-2 max-w-4xl mx-auto">
            <div className="flex flex-col border border-border/40 bg-background p-8">
              <h3 className="mb-2 font-display text-xl font-medium">Template Only</h3>
              <p className="mb-6 flex-1 text-sm text-muted-foreground">
                For those who want to handle customization and deployment themselves. You get the full source code and visual instructions.
              </p>
              <div className="mt-auto">
                <Link to="/temmora/templates" className="text-sm font-medium hover:underline">Browse templates →</Link>
              </div>
            </div>

            <div className="relative flex flex-col border border-primary/30 bg-primary/[0.03] p-8">
              <div className="absolute -top-3 right-8 bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                Done for you
              </div>
              <h3 className="mb-2 font-display text-xl font-medium">Template + Professional Setup</h3>
              <p className="mb-6 flex-1 text-sm text-muted-foreground">
                Don't want to configure it yourself? Select this option to have us customize the content and launch it for you.
              </p>
              <div className="mt-auto">
                <Link to="/temmora/services/setup" className="text-sm font-medium hover:underline text-primary">Learn more about setup →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUNDLE PURCHASING */}
      <section className="py-24 border-t border-border/40 bg-foreground text-background">
        <div className="temmora-container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Package className="h-12 w-12 mb-6 opacity-80" />
              <h2 className="font-display text-3xl font-semibold tracking-tight mb-4">
                Building more than one site? <br />Buy together and save.
              </h2>
              <p className="text-background/70 text-lg mb-8 max-w-md">
                Select multiple templates across the marketplace to automatically unlock bundle pricing at checkout. Perfect for agencies and freelancers.
              </p>
              <Link to="/temmora/templates" className="inline-block bg-background text-foreground px-8 py-4 font-medium hover:bg-background/90 transition-colors">
                Start a Bundle
              </Link>
            </div>
            <div className="relative aspect-[4/3] w-full border border-background/20 bg-background/5 p-8 flex items-center justify-center">
               <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                 <div className="aspect-[4/5] border border-background/20 bg-background/10 rounded-sm transform -rotate-6 translate-y-4"></div>
                 <div className="aspect-[4/5] border border-background/20 bg-background/10 rounded-sm transform rotate-3 -translate-y-2"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32">
        <div className="temmora-container text-center">
          <h2 className="font-display text-4xl tablet:text-5xl font-semibold tracking-tight">Find something worth building on.</h2>
          <div className="mt-10">
            <Link to="/temmora/templates" className="inline-block bg-foreground text-background px-8 py-4 text-sm font-medium hover:bg-foreground/90 transition-colors">
              Explore All Templates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
