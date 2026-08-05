import { useState } from "react";
import { TEMMORA_TEMPLATES } from "../../data/temmoraTemplates";
import { ContentEditDemo } from "./instructions/ContentEditDemo";
import { ColorThemeDemo } from "./instructions/ColorThemeDemo";
import { ImageReplaceDemo } from "./instructions/ImageReplaceDemo";
import { DeployDemo } from "./instructions/DeployDemo";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  slug: string;
}

export const TemplateVisualInstructions = ({ slug }: Props) => {
  const template = TEMMORA_TEMPLATES.find(t => t.slug === slug);
  const instructions = template?.instructions || TEMMORA_TEMPLATES[0].instructions;
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < instructions.length - 1) setCurrentStep(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  const renderVisual = (visualType: string) => {
    switch (visualType) {
      case "content-edit": return <ContentEditDemo />;
      case "color-theme": return <ColorThemeDemo />;
      case "image-replace": return <ImageReplaceDemo />;
      case "deploy": return <DeployDemo />;
      default: return <div className="w-full h-full bg-muted flex items-center justify-center">Visual Not Found</div>;
    }
  };

  const step = instructions[currentStep];

  return (
    <div className="w-full mt-16 border-t border-border/40 pt-16">
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <h2 className="font-display text-2xl font-medium tracking-tight">How to customize {template?.name || "this template"}</h2>
        <p className="mt-3 text-muted-foreground text-sm">
          A quick look at how you'll make this template your own. Every download includes comprehensive developer documentation.
        </p>
      </div>

      <div className="w-full border border-border/60 bg-background overflow-hidden rounded-lg shadow-sm flex flex-col">
        {/* Progress Bar */}
        <div className="w-full h-1 bg-muted">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / instructions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Visual Area */}
        <div className="w-full h-[400px] bg-muted/20 border-b border-border/40 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              {renderVisual(step.visualType)}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1">
            <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Step {currentStep + 1} of {instructions.length}</div>
            <h3 className="font-display text-xl font-medium mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
              {step.description}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              disabled={currentStep === instructions.length - 1}
              className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
