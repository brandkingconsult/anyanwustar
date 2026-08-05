import { Link } from "react-router-dom";

export const TemmoraFooter = () => {
  return (
    <footer className="hairline mt-32 border-t border-border/40 bg-background/50">
      <div className="temmora-container flex flex-col gap-10 py-12 tablet:flex-row tablet:items-center tablet:justify-between">
        <div className="flex flex-col items-start gap-3">
          <span className="font-display text-xl font-bold tracking-widest text-foreground uppercase">
            Temmora
          </span>
          <div>
            <p className="text-sm text-muted-foreground">
              Ready-to-use websites for businesses ready to launch.
            </p>
            <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
              By Anyanwu Star
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 text-xs uppercase tracking-[0.18em] text-muted-foreground tablet:flex-row tablet:items-center tablet:gap-x-6 tablet:gap-y-3">
          <Link to="/temmora/templates" className="link-underline hover:text-foreground">
            Templates
          </Link>
          <Link to="/temmora/services/setup" className="link-underline hover:text-foreground">
            Professional Setup
          </Link>
          <Link to="/temmora/services/custom" className="link-underline hover:text-foreground">
            Custom Website
          </Link>
          <a
            href="mailto:brandkingconsult@gmail.com"
            className="link-underline hover:text-foreground"
          >
            Support
          </a>
          <span className="pt-2 tablet:pt-0">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};
