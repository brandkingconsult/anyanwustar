import { motion, AnimatePresence } from "framer-motion";
import { useBundle } from "./BundleContext";
import { X, Check } from "lucide-react";
import { PurchaseType } from "../../utils/pricing";

export const CheckoutModal = () => {
  const { isCheckoutOpen, setCheckoutOpen, pricing, updatePurchaseType } = useBundle();

  return (
    <AnimatePresence>
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCheckoutOpen(false)}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full h-full md:h-auto max-h-[100dvh] md:max-h-[90vh] md:max-w-6xl md:rounded-2xl bg-background border-border/40 md:border shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 md:px-8 border-b border-border/40">
              <h2 className="font-display text-2xl font-semibold tracking-tight">Your Temmora Purchase</h2>
              <button 
                onClick={() => setCheckoutOpen(false)}
                className="p-2 -mr-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Close Checkout"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto flex flex-col lg:flex-row">
              {/* Left Column: Purchase Options */}
              <div className="flex-1 p-5 md:p-8 lg:border-r border-border/40 space-y-8">
                {pricing.items.map((item) => (
                  <div key={item.slug} className="space-y-4">
                    <h3 className="font-display text-xl font-medium tracking-tight border-b border-border/30 pb-2">
                      {item.name}
                    </h3>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Template Only Option */}
                      <div 
                        onClick={() => updatePurchaseType(item.slug, "template_only")}
                        className={`relative cursor-pointer rounded-xl border p-5 transition-all duration-300 ${
                          item.purchaseType === "template_only" 
                            ? "border-foreground bg-foreground/[0.02]" 
                            : "border-border/40 hover:border-border"
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-medium">Template Only</div>
                          <div className="font-semibold">${item.currentPrice}</div>
                        </div>
                        <p className="text-xs text-muted-foreground mb-4">
                          For people who want the files and instructions.
                        </p>
                        <ul className="space-y-2 text-xs text-muted-foreground">
                          <li className="flex gap-2"><Check className="h-3.5 w-3.5 text-foreground shrink-0" /> Template files</li>
                          <li className="flex gap-2"><Check className="h-3.5 w-3.5 text-foreground shrink-0" /> Visual instructions</li>
                          <li className="flex gap-2"><Check className="h-3.5 w-3.5 text-foreground shrink-0" /> Developer documentation</li>
                        </ul>
                      </div>

                      {/* Template + Setup Option */}
                      <div 
                        onClick={() => updatePurchaseType(item.slug, "template_setup")}
                        className={`relative cursor-pointer rounded-xl border p-5 transition-all duration-300 ${
                          item.purchaseType === "template_setup" 
                            ? "border-primary bg-primary/5 ring-1 ring-primary/20" 
                            : "border-border/40 hover:border-border"
                        }`}
                      >
                        {/* Recommended Badge */}
                        <div className="absolute -top-3 left-4 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded shadow-sm flex items-center gap-1">
                          <span>⭐ Recommended</span>
                        </div>

                        <div className="flex justify-between items-start mb-2 mt-1">
                          <div className="font-medium text-foreground">Template + Setup</div>
                          <div className="font-semibold text-foreground">${item.currentPrice + item.setupPrice}</div>
                        </div>
                        <p className="text-xs text-muted-foreground mb-4">
                          For people who want everything configured and ready.
                        </p>
                        <ul className="space-y-2 text-xs text-muted-foreground">
                          <li className="flex gap-2"><Check className="h-3.5 w-3.5 text-foreground shrink-0" /> Everything in Template Only</li>
                          <li className="flex gap-2"><Check className="h-3.5 w-3.5 text-foreground shrink-0" /> Configuration</li>
                          <li className="flex gap-2"><Check className="h-3.5 w-3.5 text-foreground shrink-0" /> Deployment assistance</li>
                          <li className="flex gap-2"><Check className="h-3.5 w-3.5 text-foreground shrink-0" /> Consultation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: Order Summary */}
              <div className="w-full lg:w-[380px] xl:w-[420px] bg-muted/30 p-5 md:p-8 flex flex-col">
                <h3 className="font-display text-xl font-medium tracking-tight mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6 flex-1">
                  {pricing.items.map((item) => (
                    <div key={item.slug} className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-sm">{item.name}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {item.purchaseType === "template_setup" ? "Template + Setup" : "Template Only"}
                        </div>
                      </div>
                      <div className="font-medium text-sm">
                        ${item.currentPrice + (item.purchaseType === "template_setup" ? item.setupPrice : 0)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-6 border-t border-border/40 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${pricing.subtotal.toFixed(2)}</span>
                  </div>
                  
                  {pricing.bundleDiscount > 0 && (
                    <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-medium">
                      <span>Bundle Discount</span>
                      <span>-${pricing.bundleDiscount.toFixed(2)}</span>
                    </div>
                  )}

                  {pricing.setupSavings > 0 && (
                    <div className="flex justify-between text-primary font-medium">
                      <span>Setup Savings</span>
                      <span>-${pricing.setupSavings.toFixed(2)}</span>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-border/40">
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-medium text-lg">Total</span>
                    <span className="font-bold text-2xl">${pricing.total.toFixed(2)}</span>
                  </div>
                  
                  {pricing.savings > 0 && (
                    <div className="text-right text-sm text-muted-foreground mb-6">
                      You save <span className="font-medium text-foreground">${pricing.savings.toFixed(2)}</span> today
                    </div>
                  )}

                  <button className="w-full bg-foreground text-background font-medium py-3.5 rounded flex items-center justify-center transition-transform hover:scale-[1.02] active:scale-[0.98]">
                    Continue to Secure Checkout &rarr;
                  </button>
                  <p className="text-center text-xs text-muted-foreground mt-4">
                    Payments processed securely via Lemon Squeezy
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
