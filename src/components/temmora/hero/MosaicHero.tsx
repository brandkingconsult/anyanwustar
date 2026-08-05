import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { MosaicTile } from "./MosaicTile";

// Minimal template visual assets (would be loaded dynamically later)
const TEMPLATE_VISUALS = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=600",
];

export const MosaicHero = () => {
  const [grid, setGrid] = useState({ cols: 12, rows: 6, gap: "0.5rem" });
  const [isFlipped, setIsFlipped] = useState(false);

  // Responsive Grid Logic
  useEffect(() => {
    const updateGrid = () => {
      const w = window.innerWidth;
      // Using 5 rows on mobile for a better cinematic aspect ratio, 6 on larger screens
      if (w < 768) setGrid({ cols: 5, rows: 6, gap: "0.25rem" });
      else if (w < 1024) setGrid({ cols: 8, rows: 6, gap: "0.5rem" });
      else setGrid({ cols: 12, rows: 6, gap: "0.5rem" });
    };

    updateGrid();
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, []);

  // Choreography State Machine
  useEffect(() => {
    let timeout1: ReturnType<typeof setTimeout>;
    let timeout2: ReturnType<typeof setTimeout>;

    const cycle = () => {
      // Hold templates for 4s, then reveal logo
      timeout1 = setTimeout(() => {
        setIsFlipped(true);
        // Hold logo for 5s, then revert
        timeout2 = setTimeout(() => {
          setIsFlipped(false);
        }, 5000);
      }, 4000);
    };

    const interval = setInterval(cycle, 10000);
    cycle();

    return () => {
      clearInterval(interval);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  const totalTiles = grid.cols * grid.rows;

  // Curated visual distribution
  const tileVisuals = useMemo(() => {
    return Array.from({ length: totalTiles }).map((_, i) => {
      // Deterministic but scattered assignment
      return TEMPLATE_VISUALS[(i * 3 + 7) % TEMPLATE_VISUALS.length];
    });
  }, [totalTiles]);

  return (
    <div className="relative w-full overflow-hidden bg-background pt-20 tablet:pt-24">
      {/* 
        The Hero Mosaic Container 
        Intentionally full-bleed horizontally if needed, but constrained on ultrawides to prevent excessive stretching.
      */}
      <div className="mx-auto max-w-[1600px] px-2 tablet:px-6 lg:px-10">
        
        {/* Floating Hero Text (respects global container logic) */}
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center text-center">
          <div className="bg-background/80 backdrop-blur-md px-8 py-6 rounded-2xl border border-border/40 shadow-2xl transition-opacity duration-1000 motion-reduce:transition-none"
               style={{ opacity: isFlipped ? 0 : 1 }}>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground tablet:text-5xl">
              Premium website templates, <br />built to be yours.
            </h1>
            <p className="mt-4 text-muted-foreground text-sm font-medium tracking-widest uppercase">
              By Anyanwu Star
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 pointer-events-auto">
              <Link to="/temmora/templates" className="bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors">
                Explore Templates
              </Link>
              <a href="#how-it-works" className="border border-border/60 bg-background/50 px-6 py-3 text-sm font-medium hover:bg-muted transition-colors">
                How Temmora Works
              </a>
            </div>
          </div>
        </div>

        {/* The Grid */}
        <div
          className="relative w-full grid"
          style={
            {
              gap: grid.gap,
              gridTemplateColumns: `repeat(${grid.cols}, minmax(0, 1fr))`,
              "--cols": grid.cols,
              "--rows": grid.rows,
              "--grid-gap": grid.gap,
            } as React.CSSProperties
          }
        >
          {Array.from({ length: totalTiles }).map((_, i) => {
            const col = i % grid.cols;
            const row = Math.floor(i / grid.cols);

            return (
              <MosaicTile
                key={`${grid.cols}-${i}`}
                col={col}
                row={row}
                cols={grid.cols}
                rows={grid.rows}
                isFlipped={isFlipped}
                visual={tileVisuals[i]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
