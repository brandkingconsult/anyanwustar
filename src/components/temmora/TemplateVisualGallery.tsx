import { PlayCircle } from "lucide-react";

interface Props {
  images: string[];
  video?: string;
}

export const TemplateVisualGallery = ({ images, video }: Props) => {
  // We want to show exactly 3 images below the video (or if no video, 4 images total, but user said 1 video and 3 images)
  const remainingImages = images.slice(0, 3);

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Primary Hero Asset: Video */}
      <div className="relative aspect-[16/9] w-full bg-muted overflow-hidden border border-border/40 rounded-sm">
        {video ? (
          <video 
            src={video} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <span className="text-muted-foreground text-sm">No video available</span>
          </div>
        )}
      </div>

      {/* Grid of exactly 3 images */}
      {remainingImages.length > 0 && (
        <div className={`grid gap-4 ${remainingImages.length === 1 ? "grid-cols-1" : remainingImages.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
          {remainingImages.map((src, i) => (
            <div key={i} className="aspect-[4/3] w-full bg-muted border border-border/40 rounded-sm overflow-hidden group">
              <img 
                src={src} 
                alt={`Gallery ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
