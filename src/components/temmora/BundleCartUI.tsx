import { ShoppingBag, X } from "lucide-react";
import { useBundle } from "./BundleContext";
import { useState } from "react";
import { Link } from "react-router-dom";

export const BundleCartUI = () => {
  const { cart, pricing, removeTemplate, openCheckoutFor } = useBundle();
  const [isExpanded, setIsExpanded] = useState(false);

  if (cart.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
      <div className="temmora-container pb-6 pointer-events-none flex justify-end">
        
        {/* Floating Cart Wrapper */}
        <div className="bg-background border border-border/60 shadow-2xl rounded-lg w-full max-w-sm overflow-hidden pointer-events-auto transition-all duration-300">
          
          {/* Header / Toggle */}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between p-4 bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-colors border-b border-border/40"
          >
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-foreground" />
              <span className="font-medium text-sm">Your Bundle ({cart.length})</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold text-sm">${pricing.total.toFixed(2)}</span>
            </div>
          </button>

          {/* Expanded State */}
          {isExpanded && (
            <div className="p-4 bg-background">
              <div className="space-y-3 mb-4 max-h-48 overflow-y-auto scrollbar-hide">
                {cart.map(({ slug }) => (
                  <div key={slug} className="flex items-center justify-between group">
                    <span className="text-sm text-foreground capitalize truncate max-w-[200px]">
                      {slug.replace("-", " ")}
                    </span>
                    <button 
                      onClick={() => removeTemplate(slug)}
                      className="text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label={`Remove ${slug}`}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2 border-t border-border/40 pt-4 mb-4 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${pricing.subtotal.toFixed(2)}</span>
                </div>
                {pricing.isEligibleForDiscount && (
                  <div className="flex justify-between text-primary font-medium">
                    <span>Bundle Discount (30%)</span>
                    <span>-${pricing.discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between font-semibold text-foreground pt-2 border-t border-border/40">
                  <span>Final Total</span>
                  <span>${pricing.total.toFixed(2)}</span>
                </div>
                {pricing.isEligibleForDiscount && (
                  <div className="text-xs text-muted-foreground text-right mt-1">
                    You saved ${pricing.savings.toFixed(2)}
                  </div>
                )}
              </div>
              
              <button 
                onClick={() => openCheckoutFor()} 
                className="block w-full text-center bg-foreground text-background py-3 text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                Continue to checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
