import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const ProfessionalSetup = () => {
  useEffect(() => {
    document.title = "Professional Setup | Temmora";
  }, []);

  return (
    <div className="py-24">
      <div className="temmora-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-semibold tracking-tight tablet:text-5xl">
            Template + Professional Setup
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Don't want to build it yourself? Choose the Professional Setup option when purchasing a template and have it customized and launched for you.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-4xl border border-border/40 bg-background/50">
          <div className="grid tablet:grid-cols-2">
            <div className="p-10">
              <h2 className="font-display text-2xl font-medium">How it works</h2>
              <ol className="mt-8 space-y-8">
                <li className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">1</div>
                  <div>
                    <h3 className="font-medium">Purchase</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Select the "Template + Setup" option on any template page. You get a 30% discount on the template itself.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">2</div>
                  <div>
                    <h3 className="font-medium">Onboarding</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Use your secure post-purchase link to fill out a brief project questionnaire and upload your logo and brand assets.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">3</div>
                  <div>
                    <h3 className="font-medium">Consultation</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Schedule a 30-minute call to discuss your exact needs and finalize the scope of your customization.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">4</div>
                  <div>
                    <h3 className="font-medium">Customization & Launch</h3>
                    <p className="mt-1 text-sm text-muted-foreground">We modify the template to fit your brand perfectly and help you go live.</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="border-t border-border/40 bg-muted/20 p-10 tablet:border-l tablet:border-t-0">
              <h2 className="font-display text-2xl font-medium">Pricing</h2>
              <div className="mt-8 flex items-baseline gap-2">
                <span className="text-sm text-muted-foreground">Starts at</span>
                <span className="font-display text-4xl font-semibold">$99</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Final pricing depends on the scope of customization discussed during your included consultation call. 
              </p>
              
              <ul className="mt-10 space-y-4">
                <li className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Includes initial 30-minute consultation.</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Brand application (colors, fonts, logo).</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Content population and image replacement.</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Deployment assistance.</span>
                </li>
              </ul>

              <div className="mt-12">
                <Link
                  to="/temmora/templates"
                  className="group flex w-full items-center justify-center gap-2 bg-foreground px-4 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                >
                  Browse Templates to get started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  Already bought a template? You can upgrade to professional setup later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
