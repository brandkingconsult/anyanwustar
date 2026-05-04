import { Download } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="hairline mt-32">
      <div className="container-tight flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="flex h-7 w-7 items-center justify-center bg-primary text-primary-foreground"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2l2.6 7.2L22 10l-5.8 4.4L18.5 22 12 17.7 5.5 22l2.3-7.6L2 10l7.4-.8L12 2z" />
            </svg>
          </span>
          <div>
            <p className="font-display text-sm font-semibold">Star</p>
            <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Designer · Founder · Builder
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
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
          <a href="#" className="link-underline hover:text-foreground">
            LinkedIn
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};
