import { useMemo } from "react";
import { TemmoraLogo } from "../TemmoraLogo";

interface MosaicTileProps {
  col: number;
  row: number;
  cols: number;
  rows: number;
  isFlipped: boolean;
  visual: string;
}

export const MosaicTile = ({ col, row, cols, rows, isFlipped, visual }: MosaicTileProps) => {
  // Choreography: calculate delay based on distance from center (radial wave)
  const delay = useMemo(() => {
    const centerCol = (cols - 1) / 2;
    const centerRow = (rows - 1) / 2;
    const dist = Math.sqrt(Math.pow(col - centerCol, 2) + Math.pow(row - centerRow, 2));
    
    // Add slight deterministic randomness to make it feel organic, not perfectly robotic
    const organicOffset = (col * 13 + row * 7) % 50; 
    
    return dist * 80 + organicOffset;
  }, [col, row, cols, rows]);

  return (
    <div
      className="group relative aspect-square w-full perspective-[1200px]"
      style={
        {
          "--col-index": col,
          "--row-index": row,
        } as React.CSSProperties
      }
    >
      <div
        className="relative h-full w-full transform-style-3d transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:duration-0"
        style={{
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transitionDelay: `${delay}ms`,
        }}
      >
        {/* FRONT FACE: Template Visual */}
        <div className="absolute inset-0 backface-hidden overflow-hidden rounded-md bg-muted/20 border border-border/20 shadow-sm">
          <img
            src={visual}
            alt=""
            className="h-full w-full object-cover opacity-80 mix-blend-luminosity transition-all duration-700 group-hover:opacity-100 group-hover:mix-blend-normal"
          />
          {/* Subtle lighting overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent mix-blend-overlay" />
        </div>

        {/* BACK FACE: Mathematical Logo Reveal */}
        <div
          className="absolute inset-0 backface-hidden overflow-hidden rounded-md bg-foreground border border-foreground/90 shadow-lg"
          style={{ transform: "rotateY(180deg)" }}
        >
          {/* 
            The Magic Canvas: 
            This div is the exact size of the entire mosaic grid.
            By translating it negatively based on this tile's column and row, 
            the logo reconstructs perfectly across all tiles with zero fragmentation.
          */}
          <div
            className="absolute flex items-center justify-center"
            style={{
              width: "calc(var(--cols) * 100% + (var(--cols) - 1) * var(--grid-gap))",
              height: "calc(var(--rows) * 100% + (var(--rows) - 1) * var(--grid-gap))",
              left: "calc(var(--col-index) * -100% - var(--col-index) * var(--grid-gap))",
              top: "calc(var(--row-index) * -100% - var(--row-index) * var(--grid-gap))",
            }}
          >
            {/* The Logo, centered in the virtual canvas. Sized beautifully relative to the grid. */}
            <TemmoraLogo className="w-1/3 text-background opacity-95 drop-shadow-2xl" />
          </div>
          
          {/* Subtle cinematic edge lighting */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        </div>
      </div>
    </div>
  );
};
