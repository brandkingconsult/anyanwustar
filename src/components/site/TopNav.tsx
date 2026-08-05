import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";
import { Logo } from "@/components/site/Logo";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Case Studies" },
  { href: "/temmora", label: "Templates" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

interface TopNavProps {
  onBookStrategyCall: () => void;
}

export const TopNav = ({ onBookStrategyCall }: TopNavProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 tablet:h-20 tablet:px-10">
        <Link to="/" onClick={close} className="group flex items-center gap-2.5">
          <Logo className="h-8 w-8 text-foreground transition-transform duration-500 group-hover:rotate-[72deg]" />
          <span className="font-display text-base font-semibold tracking-tight text-foreground">
            Star
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-1 tablet:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 tablet:flex">
          <a
            href="/star-resume.pdf"
            download="Star-Anyanwu-Resume.pdf"
            className="group inline-flex items-center gap-2 border border-border bg-foreground/[0.04] px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:border-foreground/40 hover:bg-foreground/[0.08]"
            aria-label="Download resume"
          >
            <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            Resume
          </a>
          <button
            onClick={onBookStrategyCall}
            className="bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book Strategy Call
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative flex h-10 w-10 items-center justify-center border border-border bg-foreground/[0.04] text-foreground transition-colors hover:bg-foreground/[0.08] tablet:hidden"
        >
          <span
            className={`absolute transition-all duration-300 ${
              open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            }`}
          >
            <Menu size={18} strokeWidth={2} />
          </span>
          <span
            className={`absolute transition-all duration-300 ${
              open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            }`}
          >
            <X size={18} strokeWidth={2} />
          </span>
        </button>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`tablet:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >

        <div className="border-t border-border/60 bg-background/85 px-5 pb-8 pt-4 backdrop-blur-xl">
          <nav className="flex flex-col">
            {navLinks.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className={`group flex items-center justify-between border-b border-border/40 py-4 font-display text-2xl text-foreground transition-all ${
                  open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms", transitionDuration: "500ms" }}
              >
                <span>{l.label}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-primary">
                  0{i + 1}
                </span>
              </a>
            ))}
          </nav>

          <div
            className={`mt-6 flex flex-col gap-3 transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
            style={{ transitionDelay: open ? `${80 + navLinks.length * 60}ms` : "0ms" }}
          >
            <a
              href="/star-resume.pdf"
              download="Star-Anyanwu-Resume.pdf"
              onClick={close}
              className="inline-flex items-center justify-center gap-2 border border-border bg-foreground/[0.04] px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/[0.08]"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <button
              onClick={() => {
                close();
                onBookStrategyCall();
              }}
              className="bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book Strategy Call
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
