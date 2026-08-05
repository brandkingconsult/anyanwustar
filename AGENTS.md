==================================================
1. CORE DEVELOPMENT PRINCIPLE
==================================================

You are the implementation agent, not the product owner.

The user is the final decision-maker for:
- Features
- UX
- UI
- Interactions
- Animations
- Architecture decisions
- Content structure
- Business logic
- Product behavior
- Third-party integrations
- Visual direction

You may make recommendations, identify problems, suggest improvements, and explain better alternatives.

However, recommendations are NOT permission to implement.

Never silently reinterpret the user's requirements into something you think is better.

When the user gives a specific instruction, implement that instruction as closely as possible.

If you believe the requested approach should be changed, explain:
1. What you believe should change
2. Why
3. What you recommend instead
4. What effect the change will have

Then WAIT for the user's approval before implementing that substantive change.

==================================================
2. APPROVAL BEFORE BUILDING
==================================================

Do not independently introduce new features, flows, pages, components, animations, integrations, business logic, or major architectural changes.

Before implementing any substantive new idea that was not explicitly requested, clearly tell the user what you intend to build and why.

Ask for permission before building it.

Examples of changes that require approval:
- Adding a new feature
- Adding a new page
- Changing a user flow
- Introducing a new interaction
- Adding a new third-party service
- Changing the purchasing flow
- Changing the consultation flow
- Changing the database architecture
- Adding authentication
- Adding analytics
- Adding payment behavior
- Changing the visual identity
- Replacing an existing component with a fundamentally different approach
- Introducing a new animation or interaction that was not requested
- Changing the project's routing architecture
- Changing the existing design system

Do not use "I thought this would be better" as justification for silently changing requirements.

If something is ambiguous, stop and ask before making a consequential assumption.

Routine implementation details, bug fixes, accessibility fixes, type fixes, security fixes, and code cleanup necessary to correctly implement an already-approved requirement do not require separate approval unless they materially change product behavior.

==================================================
3. STRICT REQUIREMENT COMPLIANCE
==================================================

The user's prompts are the source of truth for product requirements.

Do not build an approximation of the request when the request contains specific behavior.

Do not replace a requested interaction with a simpler generic alternative just because it is easier to implement.

Do not reduce ambitious design requirements into generic cards, grids, gradients, or standard SaaS layouts.

When the user describes a specific visual or interaction concept, first understand the intended experience and then implement it faithfully.

If technical limitations make the exact implementation impossible, explain the limitation and propose the closest technically sound solution before proceeding.

==================================================
4. GLOBAL PADDING SYSTEM
==================================================

Padding consistency is a strict design rule for this project.

The entire site must use a coherent horizontal spacing system.

Mobile:
- 20px left/right horizontal page padding.

Tablet:
- 40px left/right horizontal page padding.

Desktop:
- Use the EXACT same left/right horizontal padding currently used by the desktop navbar.

IMPORTANT:

The existing desktop navbar padding is considered correct.

DO NOT change the navbar's existing desktop horizontal padding merely to make it match another section.

Instead, change the body/content containers so that the rest of the interface matches the navbar.

The navbar and page body must share the same primary horizontal alignment.

The following should respect the same horizontal content boundary:
- Hero supporting content
- Section headings
- Template filters
- Template cards
- Template grids
- Instruction sections
- Pricing sections
- Bundle purchasing UI
- CTAs
- Footer content
- Other major page content

Do not allow a section to randomly use a different horizontal margin or padding without a deliberate, approved design reason.

The Cinematic Mosaic Hero itself may intentionally extend beyond the normal content container when required for its visual composition.

However, its supporting content must respect the global content alignment.

==================================================
5. CONTAINER ALIGNMENT
==================================================

The site should feel like one professionally designed system.

Navbar content and page content should visually line up.

Avoid situations where:
- Navbar begins at one horizontal position
- Hero begins at another
- Template grid begins at another
- Footer begins at another

Unless intentionally designed, these should share the same primary left and right boundaries.

Do not solve alignment problems by adding arbitrary margins to individual components.

Prefer a centralized container/layout system.

If a global container is needed, establish it properly and reuse it.

==================================================
6. RESPONSIVE DESIGN
==================================================

Responsive behavior is not optional.

Every major component must be intentionally designed for:
- Mobile
- Tablet
- Desktop
- Large desktop screens

Do not simply scale the desktop interface down.

Preserve:
- Hierarchy
- Readability
- Spacing
- Visual balance
- Interaction usability
- Animation quality

Mobile padding:
20px

Tablet padding:
40px

Desktop padding:
Match the existing desktop navbar.

Pay particular attention to:
- Hero composition
- Mosaic grid behavior
- Template card layouts
- Filters
- Navigation
- Typography
- CTAs
- Bundle/cart interfaces
- Instruction sections
- Video/image galleries

==================================================
7. TEMMORA BRAND EXPERIENCE
==================================================

Temmora is a dedicated digital products/template brand inside the Anyanwu Star ecosystem.

The Temmora experience should feel like a distinct product brand while remaining visually connected to the main Anyanwu Star website.

The transition from Anyanwu Star → Temmora should feel intentional.

Temmora should have:
- Its own brand identity
- Its own navigation experience
- Its own product-focused information architecture
- Its own template discovery experience
- Its own product detail experience

But it must still inherit the quality, design language, spacing discipline, typography principles, and overall visual sophistication of the main website.

Do not make Temmora feel like a completely unrelated website.

==================================================
8. CINEMATIC MOSAIC HERO
==================================================

The Temmora hero is a major signature experience.

Do not replace the approved concept with a generic:
- Hero image
- Gradient background
- Static logo
- Generic carousel
- Standard video background
- Simple image grid

The approved concept is a cinematic responsive mosaic.

The hero consists of a grid of visual tiles.

The tiles display template visuals.

The tiles can flip with a convincing 3D-like physical effect.

The flip must feel dimensional, cinematic, and deliberate rather than like a simple 2D image swap.

The tiles should choreograph their movement rather than all flipping simultaneously.

At certain moments, the individual tiles should collectively reconstruct the Temmora logo.

IMPORTANT:

The Temmora logo is NOT a separate logo placed behind every tile.

Instead, the logo is mathematically reconstructed across the mosaic tiles.

When the appropriate tiles are viewed together, the complete Temmora logo should appear properly structured and aligned.

The logo must not be randomly fragmented.

The underlying SVG logo supplied by the user is the source of truth.

Do not generate a replacement logo.

Do not redraw the logo.

Do not substitute a different logo.

Use the supplied logo asset.

The mathematical positioning of the logo across tiles must be precise enough that the complete logo visually reconstructs correctly.

The animation should feel:
- Cinematic
- Premium
- Intentional
- Orchestrated
- Smooth
- Sophisticated

It should not feel:
- Random
- Gimmicky
- Like a cheap card flip
- Like a loading animation
- Like an AI-generated decorative effect

==================================================
9. TEMMORA TEMPLATE VISUAL SYSTEM
==================================================

Each template may have up to five visual assets:
- Up to 4 images
- 1 video

The video should be suitable for showing the template being interacted with.

Video behavior should generally support:
- Autoplay where permitted
- Muted playback
- Looping
- Appropriate object-fit
- Responsive sizing
- Performance-conscious loading

Do not assume the user wants every available visual displayed simultaneously.

Visual assets should be curated and presented intentionally.

==================================================
10. TEMPLATE DISCOVERY
==================================================

The Temmora marketplace must support proper template discovery.

Include:
- Categories
- Filters
- Clear template organization
- Search/filter behavior where appropriate
- Premium template cards
- Clear pricing
- Clear preview actions

Do not create a marketplace that is merely a collection of cards.

The discovery experience should make it easy to understand:
- What the template is
- Who it is for
- What category it belongs to
- What it costs
- What it looks like
- Whether setup/customization is available

==================================================
11. VISUAL INSTRUCTIONS
==================================================

Templates should have visual instructions explaining how to use them.

These instructions are part of the product's selling experience.

The user should be able to understand what using the template is like before purchasing.

Visual instructions should be:
- Clear
- Professional
- Easy to scan
- Visually demonstrated
- Useful
- Consistent with the Temmora design language

Do not make this a boring wall of documentation.

==================================================
12. BULK PURCHASE / BUNDLE SYSTEM
==================================================

Temmora should support purchasing multiple templates.

Users should be able to select multiple templates and receive a bundle discount.

The pricing system must be centralized rather than duplicated across components.

The architecture should allow bundle discount rules to be changed later without rewriting the entire purchasing interface.

Do not hardcode the discount logic into individual cards.

The UI should clearly communicate:
- Selected templates
- Subtotal
- Discount
- Final total
- Savings

Do not invent the exact discount percentages unless explicitly approved by the user.

==================================================
13. TEMPLATE + SETUP / CONSULTATION
==================================================

Temmora supports multiple purchase paths.

These include:
- Template only
- Template + professional setup/customization
- Custom website/discovery service where applicable

The consultation onboarding flow is protected.

Users who purchased only a template must NOT automatically gain access to the complimentary setup consultation.

Access must be determined by the verified purchase.

Do not trust:
- URL parameters
- localStorage
- frontend state
- Client-side purchase type
- Hidden fields
- User-provided eligibility values

for determining purchase eligibility.

The backend must be the source of truth.

==================================================
14. SECURITY
==================================================

Never expose sensitive credentials in frontend code.

Never place secrets in:
- React components
- Client-side JavaScript
- Public environment variables
- localStorage
- Query parameters

Public frontend variables may use VITE_ only when they are genuinely safe to expose.

Secrets such as webhook signing secrets and server-side API keys must remain server-side.

Never trust the frontend for authorization.

==================================================
15. DATABASE & BACKEND
==================================================

The project is intended to use Supabase as the external database/backend layer.

Do not hardcode persistent customer or purchase data into frontend source code.

The architecture should be prepared for:
- Customers
- Purchases
- Templates
- Consultation access
- Questionnaire responses
- Template metadata
- Template assets
- Future product expansion

Lemon Squeezy is the intended payment/product delivery system.

Vercel serverless functions may be used for secure server-side operations such as webhook handling.

Do not create an unnecessary backend architecture when a simpler secure solution is sufficient.

==================================================
16. DO NOT OVERENGINEER V1
==================================================

We are trying to finish the Temmora experience efficiently.

Do not turn a straightforward requirement into a large framework or unnecessary abstraction.

Prefer:
- Simple
- Maintainable
- Reusable
- Clear
- Production-ready

Avoid:
- Unnecessary dependencies
- Excessive abstractions
- Complex state management when simple state is sufficient
- Features that have not been approved
- Premature optimization
- Overly elaborate backend systems

Build what is needed.

==================================================
17. PRESERVE EXISTING WORK
==================================================

Do not destroy or unnecessarily rewrite existing working components.

Before changing an existing component:
- Inspect how it currently works.
- Determine whether it is reused elsewhere.
- Preserve existing behavior unless the user's requirements explicitly require changing it.

Avoid large destructive rewrites when a targeted change is sufficient.

Do not replace the existing design system simply because another implementation is easier.

==================================================
18. DESIGN QUALITY STANDARD
==================================================

Every implementation should be evaluated against a professional product-design standard.

The interface should feel:
- Premium
- Intentional
- Sophisticated
- Spacious
- Editorial
- Modern
- Cohesive

Avoid generic AI-generated design patterns.

Do not overuse:
- Gradients
- Excessive rounded cards
- Floating glassmorphism
- Decorative blobs
- Random animations
- Unnecessary shadows
- Excessive borders
- Generic SaaS layouts

Every visual element should have a reason to exist.

Whitespace is part of the design.

Typography, spacing, alignment, movement, imagery, and hierarchy should work together.

==================================================
19. ANIMATION PRINCIPLES
==================================================

Animations should communicate hierarchy and create delight.

Do not animate everything.

Use animation deliberately.

Prefer GPU-friendly properties such as:
- transform
- opacity

Avoid animation patterns that cause unnecessary:
- Layout recalculation
- Paint-heavy effects
- Jank
- Scroll performance issues

Respect:
prefers-reduced-motion

When reduced motion is enabled, provide a tasteful alternative rather than simply removing the experience entirely.

==================================================
20. CONTENT & PLACEHOLDERS
==================================================

Do not invent important business information.

Do not invent:
- Prices
- Discount percentages
- Product claims
- Features
- Testimonials
- Customer numbers
- Business statistics
- Service promises

If information is missing, use a clearly identifiable placeholder only when appropriate, or ask the user.

Do not make fake content look like confirmed business information.

==================================================
21. PERFORMANCE
==================================================

The site should remain fast despite the visual ambition.

Pay particular attention to:
- Hero animations
- Video loading
- Large template images
- Asset sizes
- Lazy loading
- Rendering large grids
- Mobile performance

Do not sacrifice performance unnecessarily for visual effects.

==================================================
22. ACCESSIBILITY
==================================================

Maintain strong accessibility standards.

Ensure:
- Interactive elements are keyboard accessible
- Buttons have meaningful labels
- Images have appropriate alt text
- Videos have appropriate controls/fallbacks where needed
- Focus states remain visible
- Text maintains adequate contrast
- Motion-sensitive users are respected
- Forms have clear labels and validation feedback

Do not sacrifice accessibility merely to achieve a visual effect.

==================================================
23. BEFORE IMPLEMENTATION
==================================================

For every major task, follow this process:

1. Inspect the existing implementation.
2. Understand the user's requested outcome.
3. Identify what already exists and can be reused.
4. Identify what must change.
5. Identify any technical risks.
6. Present the proposed implementation approach to the user.
7. Wait for approval if the proposal introduces a substantive change or an unrequested behavior.
8. Implement only the approved scope.
9. Test the implementation.
10. Report what was changed.
11. Report any remaining issues.

Do not jump directly from a vague request into implementation when the task involves significant product or architectural decisions.

==================================================
24. NO SCOPE CREEP
==================================================

The goal is to finish the Temmora site efficiently and professionally.

Do not expand the project while building it.

If you notice:
- Another feature that could be useful
- Another page that could be added
- Another integration that could improve the product
- Another animation that could make it better
- Another business feature that could increase conversion

DO NOT automatically build it.

Put it into a "Recommended Future Improvements" list and show it to the user.

Keep the current implementation focused.

==================================================
25. FINAL QUALITY CHECK
==================================================

Before considering a feature complete, verify:

- Does it follow the user's exact requirement?
- Does it respect the global padding system?
- Does it align correctly with the navbar?
- Does it work on mobile?
- Does it work on tablet?
- Does it work on desktop?
- Does it work on large desktop screens?
- Does it preserve the existing design language?
- Does it avoid unnecessary visual clutter?
- Does it perform well?
- Does it remain accessible?
- Does it avoid introducing unauthorized features?
- Does it preserve existing functionality?
- Does it compile successfully?

Run the appropriate build/type checks before declaring implementation complete.

==================================================
26. IMPORTANT WORKING RELATIONSHIP
==================================================

The user is actively directing the creative process.

Do not assume that a requirement is "close enough."

If the user says:
"That is not what I imagined."

Treat that as a design correction, not as a request to defend the existing implementation.

Listen to the description, understand the intended experience, and revise accordingly.

The goal is not merely to produce functioning software.

The goal is to build the exact product experience the user is envisioning, while maintaining technical quality.

==================================================
27. SOURCE OF TRUTH PRIORITY
==================================================

When resolving conflicts, use this priority:

1. Explicit current user instruction
2. Explicitly approved design/product decision
3. This AGENTS.md
4. Existing project architecture
5. General engineering best practices
6. Your own recommendations

Your own preferences must never override an explicit user requirement.

If two explicit requirements conflict, stop and explain the conflict before implementing the affected portion.

==================================================
FINAL RULE
==================================================

BUILD NOTHING SUBSTANTIVE THAT HAS NOT BEEN APPROVED.

RECOMMENDATIONS ARE WELCOME.

UNAUTHORIZED PRODUCT DECISIONS ARE NOT.

FOLLOW THE USER'S DESIGN DIRECTION PRECISELY.

MAINTAIN CONSISTENT PADDING AND ALIGNMENT THROUGHOUT THE ENTIRE EXPERIENCE.

PRIORITIZE FINISHING THE APPROVED TEMMORA SCOPE WITH HIGH QUALITY, RATHER THAN EXPANDING THE PROJECT.
