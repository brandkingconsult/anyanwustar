import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, CheckCircle2, Globe } from "lucide-react";

export const DeployDemo = () => {
  const [step, setStep] = useState(0); // 0: idle, 1: building, 2: deployed

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    if (step === 0) {
      timeout = setTimeout(() => setStep(1), 1500);
    } else if (step === 1) {
      timeout = setTimeout(() => setStep(2), 2500);
    } else if (step === 2) {
      timeout = setTimeout(() => setStep(0), 3000);
    }
    
    return () => clearTimeout(timeout);
  }, [step]);

  return (
    <div className="w-full h-full bg-background flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Fake UI Component */}
      <div className="w-[85%] max-w-sm border border-border/40 rounded-xl bg-background/50 backdrop-blur-sm shadow-2xl p-5 relative z-10 flex flex-col gap-4">
        
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Globe className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-sm">Production Deployment</h4>
            <p className="text-[10px] text-muted-foreground">temmora-project.vercel.app</p>
          </div>
        </div>

        {/* Terminal Window */}
        <div className="w-full h-32 rounded-lg bg-black/90 border border-border/40 overflow-hidden flex flex-col">
          <div className="h-6 bg-white/10 flex items-center px-3 gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/80" />
            <div className="w-2 h-2 rounded-full bg-amber-500/80" />
            <div className="w-2 h-2 rounded-full bg-green-500/80" />
            <span className="ml-2 text-[9px] text-white/50 font-mono flex items-center gap-1">
              <Terminal className="w-3 h-3" /> build
            </span>
          </div>
          
          <div className="p-3 font-mono text-[10px] flex flex-col gap-1.5 relative overflow-hidden h-full">
            <AnimatePresence>
              {step >= 1 && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="text-white/70"
                >
                  $ npm run build
                </motion.div>
              )}
              {step >= 1 && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 0.5 }}
                  className="text-blue-400"
                >
                  vite v5.0.0 building for production...
                </motion.div>
              )}
              {step >= 1 && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 1.2 }}
                  className="text-white/50"
                >
                  ✓ 142 modules transformed.
                </motion.div>
              )}
              {step >= 2 && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="text-green-400 font-bold mt-1 flex items-center gap-1"
                >
                  ✓ built in 1.2s. Ready to deploy.
                </motion.div>
              )}
            </AnimatePresence>
            
            {step === 1 && (
              <motion.div 
                animate={{ opacity: [1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-1.5 h-3 bg-white/70 mt-1"
              />
            )}
          </div>
        </div>
        
        {/* Deploy Button */}
        <motion.button 
          layout
          className={`w-full py-2.5 rounded-md flex items-center justify-center gap-2 text-sm font-medium transition-colors ${
            step === 0 ? "bg-primary text-primary-foreground" : 
            step === 1 ? "bg-primary/50 text-primary-foreground cursor-wait" : 
            "bg-green-500 text-white"
          }`}
        >
          {step === 0 && "Deploy to Vercel"}
          {step === 1 && "Deploying..."}
          {step === 2 && (
            <>
              <CheckCircle2 className="w-4 h-4" /> Live
            </>
          )}
        </motion.button>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-green-500/10 blur-3xl rounded-full" />
    </div>
  );
};
