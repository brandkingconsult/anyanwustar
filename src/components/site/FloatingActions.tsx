import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/2349160735891";

export const FloatingActions = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      {/* Resume now lives in the top-nav hamburger; FAB removed to reduce clutter */}

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto flex h-12 w-12 items-center justify-center bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor" aria-hidden>
          <path d="M16.003 3C9.376 3 4 8.373 4 14.997c0 2.367.689 4.572 1.876 6.428L4 29l7.78-1.84a12.93 12.93 0 0 0 4.22.7h.005C22.629 27.86 28 22.487 28 15.863 28 12.65 26.748 9.63 24.475 7.358 22.2 5.083 19.18 3 16.003 3zm0 21.78h-.004a10.78 10.78 0 0 1-3.66-.643l-.262-.094-4.616 1.092 1.111-4.5-.171-.276a10.74 10.74 0 0 1-1.654-5.732c0-5.95 4.844-10.79 10.798-10.79 2.883 0 5.593 1.124 7.633 3.165a10.71 10.71 0 0 1 3.16 7.629c0 5.95-4.84 10.79-10.79 10.79zm6.21-8.083c-.34-.17-2.014-.994-2.326-1.108-.312-.114-.539-.17-.766.171-.227.34-.879 1.108-1.078 1.336-.198.227-.397.255-.737.085-.34-.17-1.437-.529-2.737-1.69-1.012-.902-1.696-2.018-1.894-2.358-.198-.34-.021-.524.149-.694.153-.152.34-.397.51-.595.17-.198.227-.34.34-.567.114-.227.057-.425-.028-.595-.085-.17-.766-1.85-1.05-2.534-.276-.665-.557-.575-.766-.586l-.652-.012c-.227 0-.595.085-.907.425-.312.34-1.19 1.163-1.19 2.836 0 1.673 1.218 3.29 1.388 3.517.17.227 2.396 3.66 5.806 5.131.811.35 1.444.559 1.937.715.814.259 1.555.222 2.14.135.653-.097 2.014-.823 2.298-1.618.284-.794.284-1.475.198-1.617-.085-.142-.312-.227-.652-.397z"/>
        </svg>
      </a>

      <button
        type="button"
        onClick={scrollTop}
        aria-label="Back to top"
        className={`pointer-events-auto flex h-12 w-12 items-center justify-center border border-border text-foreground shadow-lg transition-all hover:border-foreground/40 hover:bg-foreground/[0.08] active:scale-95 ${
          visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
        }`}
        style={{ backgroundColor: "hsl(var(--surface))" }}
      >
        <ArrowUp size={20} strokeWidth={2} />
      </button>
    </div>
  );
};
