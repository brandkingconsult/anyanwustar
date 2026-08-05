import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileCode2, Terminal, Code2, Layers } from "lucide-react";

export const DevDocsDemo = () => {
  const [step, setStep] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-background flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Fake UI Component */}
      <div className="w-[85%] max-w-sm border border-border/40 rounded-xl bg-background/50 backdrop-blur-sm shadow-2xl p-5 relative z-10 flex flex-col gap-4">
        
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <FileCode2 className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-sm">Developer Guide</h4>
            <p className="text-[10px] text-muted-foreground">included in download</p>
          </div>
        </div>

        {/* Documentation Structure */}
        <div className="w-full rounded-lg bg-card border border-border/40 overflow-hidden flex flex-col">
          <div className="h-8 border-b border-border/40 flex items-center px-3 bg-muted/30">
             <span className="text-[10px] font-mono text-muted-foreground">DEVELOPER_GUIDE.md</span>
          </div>
          
          <div className="p-3 font-mono text-[10px] flex flex-col gap-3 relative overflow-hidden h-32">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div 
                  key="architecture"
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: 10 }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-center gap-2 text-primary">
                    <Layers className="w-3 h-3" /> <span className="font-bold">Architecture</span>
                  </div>
                  <div className="text-muted-foreground pl-5 flex flex-col gap-1">
                    <span>▸ src/components/</span>
                    <span>▸ src/pages/</span>
                    <span>▸ src/data/</span>
                    <span>▸ src/utils/</span>
                  </div>
                </motion.div>
              )}
              {step === 1 && (
                <motion.div 
                  key="stack"
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: 10 }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-center gap-2 text-primary">
                    <Code2 className="w-3 h-3" /> <span className="font-bold">Tech Stack</span>
                  </div>
                  <div className="text-muted-foreground pl-5 flex flex-col gap-1">
                    <span>• React 18</span>
                    <span>• Vite</span>
                    <span>• Tailwind CSS</span>
                    <span>• Framer Motion</span>
                  </div>
                </motion.div>
              )}
              {step === 2 && (
                <motion.div 
                  key="cli"
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: 10 }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-center gap-2 text-primary">
                    <Terminal className="w-3 h-3" /> <span className="font-bold">Quick Start</span>
                  </div>
                  <div className="text-muted-foreground pl-5 flex flex-col gap-1">
                    <span className="text-foreground/70">$ npm install</span>
                    <span className="text-foreground/70">$ npm run dev</span>
                    <span className="text-green-500 mt-1">✓ Server ready</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-secondary/20 blur-3xl rounded-full" />
    </div>
  );
};
