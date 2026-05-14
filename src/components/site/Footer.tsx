import { Download } from "lucide-react";
import { Logo } from "@/components/site/Logo";

export const Footer = () => {
  return (
    <footer className="hairline mt-32">
      <div className="container-tight flex flex-col gap-10 py-12 tablet:flex-row tablet:items-center tablet:justify-between">
        <div className="flex items-center gap-3">
          <Logo className="h-8 w-8 text-foreground" />
          <div>
            <p className="font-display text-sm font-semibold">Star</p>
            <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Designer · Founder · Builder
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 text-xs uppercase tracking-[0.18em] text-muted-foreground tablet:flex-row tablet:items-center tablet:gap-x-6 tablet:gap-y-3">
          <a href="mailto:brandkingconsult@gmail.com" className="link-underline hover:text-foreground">
            brandkingconsult@gmail.com
          </a>
          <a
            href="/star-resume.pdf"
            download="Star-Anyanwu-Resume.pdf"
            className="link-underline inline-flex items-center gap-2 hover:text-foreground"
          >
            <Download className="h-3 w-3" />
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/anyanwu-soroudochi/"
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/anyanwu_star19"
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-foreground"
          >
            Twitter (X)
          </a>
          <span className="pt-2 tablet:pt-0">© {new Date().getFullYear()}</span>
        </div>
      </div>

    </footer>
  );
};
