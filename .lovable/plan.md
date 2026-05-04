## Overview

A premium, dark-mode personal portfolio for Star — UI/UX Designer, Founder, Product Builder, Digital Business Strategist. High-end Webflow feel: deep charcoal, refined purple-blue accent, modern sans-serif type, 0px border radius everywhere, smooth scrolling, subtle motion. Includes a hidden /admin dashboard (UI only).

## Design direction

- **Theme:** Dark only. Deep charcoal background (not black), elevated surface, hairline borders. Refined purple-blue accent used sparingly. No neon, no glow, no gradient-heavy decoration.
- **Typography:** Space Grotesk (display) + Inter (body), tight tracking on display sizes, generous body line-height.
- **Layout:** Strict container, generous vertical rhythm, 1px hairline structure. `--radius: 0` globally.
- **Motion:** Site-wide smooth scrolling, fade + slight upward translate on section enter, gentle hover scale on cards, underline-reveal links. Calm easing, no bounce.
- **Imagery:** Flat dark project mockups with a single accent hairline. No AI-style icons or AI branding.

## Public site sections

1. **Global shell** — fixed top nav (wordmark, anchors, email CTA) that condenses on scroll; minimal footer.
2. **Hero** — display headline of Star's four roles, supporting line about designing experiences and shipping real products via AI-assisted (Vibe Coding) development; quiet "See work" + "Book consultation" CTAs.
3. **About** — short founder-tone bio + disciplines list (Design / Build / Strategy).
4. **Selected Work (UI/UX)** — slowly smooth carousel horizontal stack of design case studies, moving from right to left; cards link to `/work/[slug]`.
5. **Built Products** — separate slowly smooth carousel moving horizontal stack of shipped products, moving from righ to left; cards link to `/products/[slug]`.
6. **Project detail pages** — full case-study scroll narrative (context, approach, visuals, outcome, other projects) driven by typed local data so admin edits map cleanly later.
7. **Process** — numbered editorial section on systems thinking, business outcomes, design↔build loop.
8. **Services** — three concise cards: UI/UX Design, Product Build (Vibe Coding), Digital Strategy.
9. **Consultation** — pitch + what's included + CTA that opens contact prefilled.
10. **Testimonials** — quiet editorial quote strip (placeholders).
11. **FAQ** — accordion of 6–8 common questions, including what Vibe Coding means.
12. **Contact** — large "Let's talk", prominent mailto, simple form that opens mail client via mailto.
13. **404** — on-brand minimal not-found.

## Hidden /admin dashboard (UI only, no backend)

- Sidebar layout, unlinked from public nav.
- **Overview** — mock stats (projects, inquiries this month, profile views).
- **Projects** — table with add/edit/delete dialogs for Work and Products.
- **Inquiries** — mock list with status.
- **Settings** — profile, bio, email, social links.
- All state local; no auth gate (simply hidden by not being linked).

## Interactions

- Smooth scrolling site-wide; anchor links offset for fixed nav.
- IntersectionObserver-based reveal on sections and cards.
- Subtle hover states only — no aggressive motion.

## Out of scope (for this pass)

- Real backend / CMS / auth for /admin.
- Real form submission (uses mailto).
- Blog/writing section.  
  
There should be no cloud service on this site, make sure of that