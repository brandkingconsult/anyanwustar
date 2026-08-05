/**
 * Analytics Hooks
 * 
 * Centralized utility for tracking product analytics events.
 * Currently uses console.log as placeholders.
 */

export const trackHeroTemplateSelected = (slug: string) => {
  console.log(`[Analytics] trackHeroTemplateSelected: ${slug}`);
  // Implementation for tracking (e.g., Mixpanel, PostHog, Google Analytics)
};

export const trackLivePreviewClicked = (slug: string) => {
  console.log(`[Analytics] trackLivePreviewClicked: ${slug}`);
};

export const trackTemplateAddedToBundle = (slug: string, source: "hero" | "marketplace" | "detail") => {
  console.log(`[Analytics] trackTemplateAddedToBundle: ${slug} from ${source}`);
};

export const trackTemplatePurchaseInitiated = (slug: string) => {
  console.log(`[Analytics] trackTemplatePurchaseInitiated: ${slug}`);
};
