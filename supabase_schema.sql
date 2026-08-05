-- ============================================================
-- TEMMORA — Full Database Reset & Schema
-- ============================================================
-- This is the ONLY schema file you need to run.
-- It drops everything cleanly and rebuilds from scratch.
-- Safe to run multiple times.
-- ============================================================

-- Step 0: Drop all existing Temmora tables (clean slate)
DROP TABLE IF EXISTS public.consultation_requests CASCADE;
DROP TABLE IF EXISTS public.licenses             CASCADE;
DROP TABLE IF EXISTS public.bundles              CASCADE;
DROP TABLE IF EXISTS public.purchases            CASCADE;
DROP TABLE IF EXISTS public.templates            CASCADE;
DROP TABLE IF EXISTS public.users                CASCADE;

-- Step 1: Enable UUID support
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- TABLE 1: users
-- ============================================================
CREATE TABLE public.users (
    id         UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
    email      TEXT        UNIQUE NOT NULL,
    name       TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- TABLE 2: templates
-- ============================================================
CREATE TABLE public.templates (
    id               UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug             TEXT        UNIQUE NOT NULL,
    name             TEXT        NOT NULL,
    description      TEXT,
    price            NUMERIC     NOT NULL,
    original_price   NUMERIC,
    setup_price      NUMERIC     NOT NULL DEFAULT 0,
    discount_label   TEXT,
    categories       TEXT[],
    creator          TEXT,
    published_at     TIMESTAMPTZ,
    status           TEXT        DEFAULT 'Published',
    thumbnail_url    TEXT,
    live_preview_url TEXT,
    created_at       TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- TABLE 3: purchases
-- ============================================================
CREATE TABLE public.purchases (
    id                     UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id                UUID        REFERENCES public.users(id)     ON DELETE SET NULL,
    template_id            UUID        REFERENCES public.templates(id) ON DELETE SET NULL,
    purchase_type          TEXT        NOT NULL,
    amount                 NUMERIC     NOT NULL,
    payment_status         TEXT        NOT NULL DEFAULT 'pending',
    lemon_squeezy_order_id TEXT        UNIQUE,
    created_at             TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- TABLE 4: bundles
-- ============================================================
CREATE TABLE public.bundles (
    id           UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id      UUID        REFERENCES public.users(id) ON DELETE SET NULL,
    discount     NUMERIC     NOT NULL DEFAULT 0,
    total_amount NUMERIC     NOT NULL,
    created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- TABLE 5: licenses
-- ============================================================
CREATE TABLE public.licenses (
    id             UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
    purchase_id    UUID        REFERENCES public.purchases(id) ON DELETE CASCADE,
    license_type   TEXT        NOT NULL DEFAULT 'Standard',
    commercial_use BOOLEAN     DEFAULT TRUE,
    resale_allowed BOOLEAN     DEFAULT FALSE,
    created_at     TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- TABLE 6: consultation_requests
-- ============================================================
CREATE TABLE public.consultation_requests (
    id          UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
    purchase_id UUID        REFERENCES public.purchases(id) ON DELETE CASCADE,
    user_id     UUID        REFERENCES public.users(id)     ON DELETE SET NULL,
    status      TEXT        NOT NULL DEFAULT 'pending',
    notes       TEXT,
    created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- ROW LEVEL SECURITY
-- templates = public read
-- everything else = service role only (no browser access)
-- ============================================================
ALTER TABLE public.templates             ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.users                 ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.purchases             ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bundles               ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.licenses              ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.consultation_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Templates are public"
    ON public.templates FOR SELECT
    USING (true);
