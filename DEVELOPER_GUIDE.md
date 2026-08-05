# Temmora Developer Guide

Welcome to the Temmora project. This guide is designed to help you quickly understand the frontend architecture, how to add new templates, and how the state management flows.

## 1. Project Structure

The project relies on Vite, React, TailwindCSS, and Framer Motion. 
Important directories:

- **`src/components/temmora/`**: Contains all UI components specific to the Temmora platform (Nav, Footer, BundleCartUI, CheckoutModal, etc).
- **`src/components/temmora/instructions/`**: Contains the interactive React components used for the premium instruction UI walkthroughs (e.g., ContentEditDemo, ColorThemeDemo).
- **`src/pages/temmora/`**: The route-level views (e.g., `TemmoraHome.tsx`, `Templates.tsx`, `TemplateDetail.tsx`).
- **`src/data/`**: Holds the static data architectures. Crucially, `temmoraTemplates.ts` is the single source of truth for the marketplace templates before Supabase integration.
- **`src/utils/`**: Helper functions, notably `pricing.ts` which handles all cart calculation logic.
- **`src/` (Contexts)**: State management lives mostly in Context APIs, particularly `BundleContext.tsx` in the temmora components directory.

## 2. Template Architecture

### Where data lives
Currently, template data lives in `src/data/temmoraTemplates.ts`.
This file exports an array of `TemmoraTemplate` objects.

### How to add a new template
1. Open `temmoraTemplates.ts`.
2. Append a new object to `TEMMORA_TEMPLATES` matching the `TemmoraTemplate` interface.
3. Ensure it has a unique `slug`. The UI will automatically generate the template details page dynamically at `/temmora/templates/:slug`.

### Pricing & Categories
- Pricing logic is decoupled from the UI. `calculateOrder()` in `src/utils/pricing.ts` determines totals, setup costs, and bundle discounts.
- Categories are defined as an array of strings in the template data model. The UI maps over them automatically.

### Galleries & Instructions
- `TemplateVisualGallery.tsx` handles the main hero video and thumbnail images.
- `TemplateVisualInstructions.tsx` loops through the `instructions` array defined in the template model and renders interactive UI components based on the `visualType`.

## 3. Developer Handoff & State Management

If you are continuing development:

**Technology Stack:**
- React 18
- Vite
- TailwindCSS (Utility classes)
- Framer Motion (Animations, AnimatePresence, layout)
- React Router DOM (Routing)

**State Management:**
We do not use Redux. All state is managed locally via hooks or globally via React Context. 
The most complex state is the Cart system, managed inside `BundleContext.tsx`. 
- `cart` holds `CartItem` objects: `{ slug, purchaseType }`.
- `addTemplate`, `removeTemplate`, `updatePurchaseType` handle mutations.

**Backend Integration Points:**
- **Checkout**: `CheckoutModal.tsx` currently displays the UI. In the future, the "Confirm Payment" button will hit a serverless endpoint to generate a Lemon Squeezy checkout session.
- **Database**: The static data in `temmoraTemplates.ts` should eventually be replaced by a `fetch` from Supabase on load.

## 4. Design Guidelines (AGENTS.md)
This project strictly enforces responsive spacing and premium aesthetics. 
- Do not use arbitrary padding values for major sections.
- Ensure all body content aligns with the left/right boundaries of the Navigation bar.
- Prefer elegant, minimalist micro-animations over large disruptive transitions.
