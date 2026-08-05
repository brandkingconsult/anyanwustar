-- ============================================================
-- TEMMORA — Seed Data (run AFTER supabase_schema.sql)
-- ============================================================

INSERT INTO public.templates
  (slug, name, description, price, original_price, setup_price, discount_label, categories, creator, published_at, status, live_preview_url)
VALUES
  (
    'sitepad',
    'SitePad',
    'An experience-first website builder template that lets users feel the product before they sign up. Features scroll-based perspective reveals and immersive hero sections.',
    179, 358, 70, 'August Launch Discount',
    ARRAY['SaaS', 'Website Builder', 'Motion'],
    'Anyanwu Star', '2025-03-01T10:00:00Z', 'Published',
    'https://sitepad.vercel.app/'
  ),
  (
    'paytext',
    'Paytext',
    'A conversational fintech template that allows users to manage their finances by simply chatting. Perfect for AI-driven financial applications.',
    149, 298, 70, 'August Launch Discount',
    ARRAY['Fintech', 'AI', 'Mobile'],
    'Anyanwu Star', '2025-02-15T10:00:00Z', 'Published',
    'https://paytext2.vercel.app/'
  ),
  (
    'prevu-hotels',
    'Prévu Hotels',
    'A modern hotel experience platform designed to help users understand their stay before booking. Introduces room-level exploration and immersive video heroes.',
    199, 398, 70, 'August Launch Discount',
    ARRAY['Travel', 'Booking', 'Experience'],
    'Anyanwu Star', '2024-11-20T10:00:00Z', 'Published',
    'https://prevuhotels.vercel.app/'
  ),
  (
    'dwellr',
    'Dwellr',
    'A modern real estate platform combining structured listings with agent-recorded walkthrough videos. Built to shift property discovery from imagination to experience.',
    129, 258, 70, 'August Launch Discount',
    ARRAY['Real Estate', 'Video', 'Trust'],
    'Anyanwu Star', '2024-09-05T10:00:00Z', 'Published',
    'https://dwellre.vercel.app/'
  );
