import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, UploadCloud } from "lucide-react";

export const ImageReplaceDemo = () => {
  const [step, setStep] = useState(0); // 0: placeholder, 1: uploading, 2: actual image

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    if (step === 0) {
      timeout = setTimeout(() => setStep(1), 1500);
    } else if (step === 1) {
      timeout = setTimeout(() => setStep(2), 1200);
    } else if (step === 2) {
      timeout = setTimeout(() => setStep(0), 3000);
    }
    
    return () => clearTimeout(timeout);
  }, [step]);

  return (
    <div className="w-full h-full bg-background flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Fake UI Component */}
      <div className="w-[85%] max-w-sm border border-border/40 rounded-xl bg-background/50 backdrop-blur-sm shadow-2xl p-4 relative z-10 flex flex-col gap-4">
        
        {/* The Image Container */}
        <div className="w-full h-48 rounded-lg overflow-hidden relative border border-border/40 group bg-muted/20">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div 
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/50 border-2 border-dashed border-border/60 bg-muted/10 m-2 rounded-md"
              >
                <ImageIcon className="w-8 h-8 mb-2" />
                <span className="text-xs font-medium">Hero_Image.jpg</span>
              </motion.div>
            )}
            
            {step === 1 && (
              <motion.div 
                key="uploading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-primary/10 m-2 rounded-md border-2 border-primary/40"
              >
                <UploadCloud className="w-8 h-8 mb-2 text-primary animate-bounce" />
                <span className="text-xs font-medium text-primary">Uploading...</span>
                
                {/* Fake progress bar */}
                <div className="w-1/2 h-1 bg-primary/20 rounded-full mt-4 overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1 }}
                    className="h-full bg-primary"
                  />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.img 
                key="actual-image"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600"
                alt="New upload"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
          </AnimatePresence>
        </div>
        
        {/* Supporting UI elements */}
        <div className="flex flex-col gap-2 px-2">
          <div className="h-4 w-3/4 bg-foreground/10 rounded-sm" />
          <div className="h-2 w-full bg-muted-foreground/20 rounded-sm" />
          <div className="h-2 w-5/6 bg-muted-foreground/20 rounded-sm" />
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute bottom-1/2 right-1/4 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full" />
    </div>
  );
};
