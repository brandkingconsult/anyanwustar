import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const CustomWebsite = () => {
  useEffect(() => {
    document.title = "Custom Website Design | Temmora";
  }, []);

  return (
    <div className="py-24">
      <div className="temmora-container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-semibold tracking-tight tablet:text-5xl">
            Custom Website Design
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Need something completely unique? We design and build high-performance custom websites tailored exactly to your brand and business goals.
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-4xl border border-border/40 bg-background/50">
          <div className="grid tablet:grid-cols-2">
            <div className="p-10">
              <h2 className="font-display text-2xl font-medium">The Process</h2>
              <ol className="mt-8 space-y-8">
                <li className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">1</div>
                  <div>
                    <h3 className="font-medium">Project Form</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Submit your initial project details so we can understand your objectives.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">2</div>
                  <div>
                    <h3 className="font-medium">Discovery Call</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Pay the $10 discovery fee to secure your 30-minute consultation. We'll discuss your exact needs and scope.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">3</div>
                  <div>
                    <h3 className="font-medium">Proposal & Payment</h3>
                    <p className="mt-1 text-sm text-muted-foreground">You receive a custom project proposal. If you proceed, the $10 fee is credited toward your project.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">4</div>
                  <div>
                    <h3 className="font-medium">Design & Development</h3>
                    <p className="mt-1 text-sm text-muted-foreground">We design and build your custom website from scratch.</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="border-t border-border/40 bg-muted/20 p-10 tablet:border-l tablet:border-t-0">
              <h2 className="font-display text-2xl font-medium">Start a Project</h2>
              <p className="mt-4 text-sm text-muted-foreground">
                To respect our mutual time and ensure we focus on serious inquiries, we charge a nominal $10 fee for initial discovery calls.
              </p>
              
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>30-minute Google Meet consultation.</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Fee is 100% credited toward your project.</span>
                </li>
              </ul>

              <div className="mt-12 rounded-lg border border-border/60 bg-background p-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-medium">Discovery Call</span>
                  <span className="text-xl font-semibold">$10</span>
                </div>
                <button
                  className="group flex w-full items-center justify-center gap-2 bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Start a call with $10
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              
              <p className="mt-6 text-center text-xs text-muted-foreground">
                Looking for a more affordable option? <Link to="/temmora/templates" className="underline hover:text-foreground">Check out our templates.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
