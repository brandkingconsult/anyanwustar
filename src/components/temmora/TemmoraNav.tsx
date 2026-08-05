import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowLeft } from "lucide-react";

import { TemmoraLogo } from "./TemmoraLogo";

const navLinks = [
  { href: "/temmora/templates", label: "Templates" },
  { href: "/temmora/services/setup", label: "Professional Setup" },
  { href: "/temmora/services/custom", label: "Custom Websites" },
];

export const TemmoraNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <div className="flex items-center gap-6">
          <Link to="/temmora" onClick={close} className="group flex items-center gap-2.5">
            <TemmoraLogo className="h-8 w-auto text-foreground" />
            <span className="sr-only">Temmora</span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-1 tablet:flex border-l border-border/40 pl-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`px-4 py-2 text-sm transition-colors hover:text-foreground ${
                  location.pathname === l.href ? "text-foreground font-medium" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 tablet:flex">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Anyanwu Star
          </Link>
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
              <Link
                key={l.href}
                to={l.href}
                onClick={close}
                className={`group flex items-center justify-between border-b border-border/40 py-4 font-display text-2xl text-foreground transition-all ${
                  open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms", transitionDuration: "500ms" }}
              >
                <span>{l.label}</span>
              </Link>
            ))}
          </nav>

          <div
            className={`mt-8 pt-4 border-t border-border/40 transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
            style={{ transitionDelay: open ? `${80 + navLinks.length * 60}ms` : "0ms" }}
          >
            <Link
              to="/"
              onClick={close}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Return to Anyanwu Star
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
