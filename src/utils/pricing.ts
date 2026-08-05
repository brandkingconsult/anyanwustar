import { TEMMORA_TEMPLATES, TemmoraTemplate } from "../data/temmoraTemplates";

export type PurchaseType = "template_only" | "template_setup";

export interface OrderItem {
  templateId: string;
  slug: string;
  name: string;
  purchaseType: PurchaseType;
  originalPrice: number;
  currentPrice: number;
  setupPrice: number;
  discountApplied: number;
}

export interface OrderSummary {
  subtotal: number;
  bundleDiscount: number;
  setupSavings: number;
  total: number;
  savings: number;
  items: OrderItem[];
}

export const calculateOrder = (cart: { slug: string; purchaseType: PurchaseType }[]): OrderSummary => {
  let subtotal = 0;
  let setupSavings = 0;
  let items: OrderItem[] = [];

  const BUNDLE_DISCOUNT_PERCENT = 0.30;
  const SETUP_STANDALONE_PRICE = 200; // Fake standalone price to calculate savings

  const isEligibleForBundle = cart.length >= 2;

  cart.forEach((cartItem) => {
    const template = TEMMORA_TEMPLATES.find((t) => t.slug === cartItem.slug);
    if (!template) return;

    let itemPrice = template.price;
    if (cartItem.purchaseType === "template_setup") {
      itemPrice += template.setupPrice;
      setupSavings += (SETUP_STANDALONE_PRICE - template.setupPrice);
    }

    subtotal += itemPrice;

    items.push({
      templateId: template.slug,
      slug: template.slug,
      name: template.name,
      purchaseType: cartItem.purchaseType,
      originalPrice: template.originalPrice,
      currentPrice: template.price,
      setupPrice: template.setupPrice,
      discountApplied: 0,
    });
  });

  let bundleDiscount = 0;
  if (isEligibleForBundle) {
    bundleDiscount = subtotal * BUNDLE_DISCOUNT_PERCENT;
  }

  // Assign individual discounts based on their proportion of the bundle
  items = items.map((item) => {
    const itemBase = item.currentPrice + (item.purchaseType === "template_setup" ? item.setupPrice : 0);
    return {
      ...item,
      discountApplied: isEligibleForBundle ? itemBase * BUNDLE_DISCOUNT_PERCENT : 0,
    };
  });

  const total = subtotal - bundleDiscount;
  const totalSavings = bundleDiscount + setupSavings;

  return {
    subtotal,
    bundleDiscount,
    setupSavings,
    total,
    savings: totalSavings,
    items,
  };
};
