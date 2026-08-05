import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Edit2 } from "lucide-react";

export const ContentEditDemo = () => {
  const [step, setStep] = useState(0); // 0: before, 1: editing, 2: after
  const [typedText, setTypedText] = useState("");

  const originalText = "Build your future faster";
  const newText = "Launch your startup today";

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    if (step === 0) {
      timeout = setTimeout(() => setStep(1), 2000);
      setTypedText(originalText);
    } else if (step === 1) {
      // Simulate deleting and typing
      let current = originalText;
      let i = 0;
      
      const interval = setInterval(() => {
        if (current.length > 0) {
          current = current.slice(0, -1);
          setTypedText(current);
        } else {
          if (i < newText.length) {
            current = newText.slice(0, i + 1);
            setTypedText(current);
            i++;
          } else {
            clearInterval(interval);
            setTimeout(() => setStep(2), 500);
          }
        }
      }, 50);
      
      return () => clearInterval(interval);
    } else if (step === 2) {
      timeout = setTimeout(() => setStep(0), 3000);
    }
    
    return () => clearTimeout(timeout);
  }, [step]);

  return (
    <div className="w-full h-full bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Fake Browser Chrome */}
      <div className="w-[85%] max-w-sm h-64 border border-border/40 rounded-xl bg-background/50 backdrop-blur-sm shadow-2xl overflow-hidden flex flex-col relative z-10">
        <div className="h-10 border-b border-border/30 bg-muted/30 flex items-center px-4 gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <div className="mx-auto h-5 w-32 bg-background/60 rounded text-[10px] text-muted-foreground flex items-center justify-center font-medium">
            localhost:3000
          </div>
        </div>
        
        {/* Fake Website Content */}
        <div className="flex-1 p-6 flex flex-col items-center justify-center bg-background/80 relative">
          <div className="w-full flex justify-between items-center mb-6">
            <div className="h-4 w-12 bg-foreground/10 rounded-sm" />
            <div className="flex gap-2">
              <div className="h-2 w-8 bg-foreground/5 rounded-sm" />
              <div className="h-2 w-8 bg-foreground/5 rounded-sm" />
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center w-full relative">
            <AnimatePresence>
              {step === 1 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-6 right-4 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded-sm shadow-md flex items-center gap-1 z-20"
                >
                  <Edit2 className="w-3 h-3" /> Editing
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className={`relative px-4 py-2 rounded-lg transition-colors duration-300 ${step === 1 ? 'bg-primary/10 ring-1 ring-primary/30' : ''}`}>
              <h1 className="text-2xl font-display font-semibold tracking-tight text-center relative z-10 flex items-center justify-center h-16 w-56">
                {typedText}
                {step === 1 && (
                  <motion.span 
                    animate={{ opacity: [1, 0] }} 
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-0.5 h-6 bg-primary ml-1"
                  />
                )}
              </h1>
            </div>
            <div className="mt-4 h-2 w-3/4 bg-foreground/5 rounded-sm" />
            <div className="mt-2 h-2 w-1/2 bg-foreground/5 rounded-sm" />
            
            <div className="mt-6 h-8 w-24 bg-foreground rounded-sm" />
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />
    </div>
  );
};
