-- ============================================================
-- Full reset of the templates table
-- Safe to run because the table has no data yet.
-- ============================================================

DROP TABLE IF EXISTS public.templates CASCADE;

CREATE TABLE public.templates (
    id               UUID    PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug             TEXT    UNIQUE NOT NULL,
    name             TEXT    NOT NULL,
    description      TEXT,
    price            NUMERIC NOT NULL,
    original_price   NUMERIC,
    setup_price      NUMERIC NOT NULL DEFAULT 0,
    discount_label   TEXT,
    categories       TEXT[],
    creator          TEXT,
    published_at     TIMESTAMPTZ,
    status           TEXT    DEFAULT 'Published',
    thumbnail_url    TEXT,
    live_preview_url TEXT,
    created_at       TIMESTAMPTZ DEFAULT NOW()
);

-- Re-apply public read policy
ALTER TABLE public.templates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Templates are public"
    ON public.templates FOR SELECT
    USING (true);
