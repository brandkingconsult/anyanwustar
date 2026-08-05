import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, FileCode2 } from "lucide-react";
import { TEMMORA_TEMPLATES } from "../../data/temmoraTemplates";
import { ContentEditDemo } from "./instructions/ContentEditDemo";
import { ColorThemeDemo } from "./instructions/ColorThemeDemo";
import { ImageReplaceDemo } from "./instructions/ImageReplaceDemo";
import { DeployDemo } from "./instructions/DeployDemo";
import { DevDocsDemo } from "./instructions/DevDocsDemo";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onClose: () => void;
}

export const GlobalInstructionModal = ({ onClose }: Props) => {
  // Use the generic instructions from the first template, plus add a final step for Developer Guide
  const baseSteps = TEMMORA_TEMPLATES[0].instructions;
  
  const steps = [
    ...baseSteps,
    {
      id: "dev-docs",
      title: "Developer Documentation",
      description: "Ready to hand the project over to a developer? Every template includes a detailed Developer Guide. This PDF explains the project architecture, styling system, routing, and exact customization points, so any React developer can take over instantly.",
      visualType: "dev-docs"
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(c => c + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(c => c - 1);
    }
  };

  const renderVisual = (visualType: string) => {
    switch (visualType) {
      case "content-edit": return <ContentEditDemo />;
      case "color-theme": return <ColorThemeDemo />;
      case "image-replace": return <ImageReplaceDemo />;
      case "deploy": return <DeployDemo />;
      case "dev-docs": return <DevDocsDemo />;
      default: return <div className="w-full h-full bg-muted flex items-center justify-center">Visual Not Found</div>;
    }
  };

  const step = steps[currentStep];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl bg-background border border-border/60 shadow-2xl overflow-hidden flex flex-col tablet:flex-row max-h-[90vh] tablet:h-[600px]">
        
        {/* Media Side (Left on Desktop, Top on Mobile) */}
        <div className="w-full tablet:w-1/2 bg-muted/20 relative border-b tablet:border-b-0 tablet:border-r border-border/40 min-h-[250px] tablet:min-h-0 overflow-hidden">
          <button 
            onClick={onClose}
            className="absolute top-4 left-4 z-20 tablet:hidden bg-background/50 backdrop-blur-md p-1.5 rounded-full text-foreground"
            aria-label="Close instructions"
          >
            <X className="h-5 w-5" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              {renderVisual(step.visualType)}
            </motion.div>
          </AnimatePresence>
          
          {/* Subtle gradient overlay to ensure it feels embedded */}
          <div className="absolute inset-0 bg-gradient-to-tr from-background/5 to-transparent mix-blend-overlay pointer-events-none" />
        </div>

        {/* Content Side (Right on Desktop, Bottom on Mobile) */}
        <div className="w-full tablet:w-1/2 flex flex-col bg-background">
          {/* Header */}
          <div className="hidden tablet:flex items-center justify-between px-8 py-6 border-b border-border/20">
            <h2 className="font-display text-lg font-medium tracking-tight text-muted-foreground">How Templates Work</h2>
            <button 
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="Close instructions"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Text Content */}
          <div className="flex-1 p-6 tablet:p-8 flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-2">
               <span className="text-xs uppercase tracking-widest text-primary font-bold">Step 0{currentStep + 1}</span>
            </div>
            
            <h3 className="font-display text-2xl font-medium text-foreground mb-4 leading-tight">
              {step.title}
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              {step.description}
            </p>

            {/* Special icon for dev docs */}
            {step.id === "dev-docs" && (
              <div className="mt-6 p-4 border border-border/40 bg-foreground/[0.02] flex items-center gap-3 rounded-md">
                <FileCode2 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Included in all template downloads</span>
              </div>
            )}
          </div>

          {/* Footer Navigation */}
          <div className="p-6 tablet:p-8 pt-0 flex flex-col gap-4">
             {/* Progress Dots */}
             <div className="flex justify-center gap-1.5 mb-2">
                {steps.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 rounded-full transition-all duration-300 ${i === currentStep ? 'w-6 bg-primary' : 'w-2 bg-border'}`} 
                  />
                ))}
             </div>
             
             {/* Controls */}
             <div className="flex items-center justify-between gap-4">
                <button 
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className="flex-1 py-3 px-4 border border-border text-sm font-medium hover:bg-foreground/[0.02] disabled:opacity-30 disabled:hover:bg-transparent transition-colors flex items-center justify-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" /> Previous
                </button>
                <button 
                  onClick={handleNext}
                  className="flex-1 py-3 px-4 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2"
                >
                  {currentStep === steps.length - 1 ? "Finish" : "Next"} <ChevronRight className="h-4 w-4" />
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};
