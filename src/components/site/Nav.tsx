import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { href: "#work", label: "Work" },
  { href: "#products", label: "Products" },
  { href: "#process", label: "Process" },
  { href: "#consultation", label: "Consultation" },
  { href: "#contact", label: "Contact" },
];

interface NavProps {
  onBookConsultation?: () => void;
}

export const Nav = ({ onBookConsultation }: NavProps = {}) => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-tight flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-sm font-semibold tracking-tight">
          Star<span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={onHome ? l.href : `/${l.href}`}
              className="link-underline text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {onBookConsultation ? (
          <button
            onClick={onBookConsultation}
            className="hidden items-center gap-2 bg-primary px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-primary/90 md:inline-flex"
          >
            Book consultation
          </button>
        ) : (
          <a
            href="mailto:hello@star.studio"
            className="link-underline text-xs uppercase tracking-[0.18em] text-foreground"
          >
            hello@star.studio
          </a>
        )}
      </div>
    </header>
  );
};
