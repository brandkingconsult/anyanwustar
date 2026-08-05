import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const ColorThemeDemo = () => {
  const [theme, setTheme] = useState(0); // 0: default, 1: blue, 2: green

  const themes = [
    { primary: "bg-foreground", border: "border-foreground", text: "text-background" }, // Black/White
    { primary: "bg-blue-600", border: "border-blue-600", text: "text-white" },
    { primary: "bg-emerald-600", border: "border-emerald-600", text: "text-white" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTheme((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-background flex flex-col items-center justify-center relative overflow-hidden gap-8">
      
      {/* Theme Selector UI */}
      <div className="bg-background border border-border/40 shadow-xl rounded-lg p-4 flex flex-col gap-3 relative z-10">
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Primary Color</span>
        <div className="flex gap-2">
          {themes.map((_, i) => (
            <div 
              key={i} 
              className={`w-8 h-8 rounded-full border-2 transition-all ${theme === i ? "border-primary scale-110" : "border-transparent scale-100 opacity-60"}`}
            >
              <div className={`w-full h-full rounded-full ${i === 0 ? "bg-foreground" : i === 1 ? "bg-blue-600" : "bg-emerald-600"}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Fake UI Component responding to theme */}
      <div className="w-[85%] max-w-sm border border-border/40 rounded-xl bg-background shadow-2xl p-6 relative z-10 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1.5">
             <div className="h-4 w-32 bg-foreground rounded-sm" />
             <div className="h-2 w-20 bg-muted-foreground/30 rounded-sm" />
          </div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-700 ${themes[theme].primary}`}>
            <span className={themes[theme].text + " text-[10px]"}>US</span>
          </div>
        </div>
        
        <div className="h-24 w-full bg-muted/30 rounded-md border border-border/40 flex items-center justify-center mt-2">
           <div className="h-8 w-8 rounded-sm bg-foreground/10" />
        </div>

        <motion.div 
          layout
          className={`w-full py-3 rounded-md flex items-center justify-center transition-colors duration-700 font-medium text-sm mt-2 ${themes[theme].primary} ${themes[theme].text}`}
        >
          Confirm Payment
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-pink-500/10 blur-3xl rounded-full" />
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full" />
    </div>
  );
};
