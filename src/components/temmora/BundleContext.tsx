import React, { createContext, useContext, useState, useMemo } from 'react';
import { calculateOrder, OrderSummary, PurchaseType } from '../../utils/pricing';

export interface CartItem {
  slug: string;
  purchaseType: PurchaseType;
}

interface BundleContextType {
  cart: CartItem[];
  addTemplate: (slug: string) => void;
  removeTemplate: (slug: string) => void;
  updatePurchaseType: (slug: string, type: PurchaseType) => void;
  isTemplateInBundle: (slug: string) => boolean;
  pricing: OrderSummary;
  isCheckoutOpen: boolean;
  setCheckoutOpen: (open: boolean) => void;
  checkoutItemSlugs: string[] | null; // null means use full cart, otherwise overrides cart for checkout
  openCheckoutFor: (slugs?: string[]) => void;
}

const BundleContext = createContext<BundleContextType | undefined>(undefined);

export const BundleProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutItemSlugs, setCheckoutItemSlugs] = useState<string[] | null>(null);

  const addTemplate = (slug: string) => {
    setCart((prev) => {
      if (prev.some((item) => item.slug === slug)) return prev;
      return [...prev, { slug, purchaseType: "template_only" }];
    });
  };

  const removeTemplate = (slug: string) => {
    setCart((prev) => prev.filter((t) => t.slug !== slug));
  };

  const updatePurchaseType = (slug: string, type: PurchaseType) => {
    setCart((prev) => 
      prev.map((item) => item.slug === slug ? { ...item, purchaseType: type } : item)
    );
  };

  const isTemplateInBundle = (slug: string) => cart.some((t) => t.slug === slug);

  const openCheckoutFor = (slugs?: string[]) => {
    if (slugs && slugs.length > 0) {
      // Ensure they exist in cart, else add them
      slugs.forEach(slug => addTemplate(slug));
      setCheckoutItemSlugs(slugs);
    } else {
      setCheckoutItemSlugs(null);
    }
    setCheckoutOpen(true);
  };

  // If checkoutItemSlugs is set, calculate pricing only for those items, else calculate for entire cart
  const activeCart = useMemo(() => {
    if (!checkoutItemSlugs) return cart;
    return cart.filter(item => checkoutItemSlugs.includes(item.slug));
  }, [cart, checkoutItemSlugs]);

  const pricing = useMemo(() => calculateOrder(activeCart), [activeCart]);

  return (
    <BundleContext.Provider
      value={{
        cart,
        addTemplate,
        removeTemplate,
        updatePurchaseType,
        isTemplateInBundle,
        pricing,
        isCheckoutOpen,
        setCheckoutOpen,
        checkoutItemSlugs,
        openCheckoutFor
      }}
    >
      {children}
    </BundleContext.Provider>
  );
};

export const useBundle = () => {
  const context = useContext(BundleContext);
  if (context === undefined) {
    throw new Error('useBundle must be used within a BundleProvider');
  }
  return context;
};
