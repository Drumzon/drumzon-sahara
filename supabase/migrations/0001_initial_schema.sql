-- ─── Drumzon Pro — initial schema ─── --
-- Apply via Supabase Dashboard → SQL Editor, or `supabase db push` if you've
-- installed Supabase CLI. Idempotent: safe to re-run thanks to IF NOT EXISTS.

-- 1. Founding counter (single-row atomic counter)
CREATE TABLE IF NOT EXISTS founding_counter (
  id INT PRIMARY KEY DEFAULT 1,
  slots_claimed INT NOT NULL DEFAULT 0,
  max_slots INT NOT NULL DEFAULT 100,
  closed_at TIMESTAMPTZ,
  CONSTRAINT single_row CHECK (id = 1)
);

-- Seed single row (no-op if already exists)
INSERT INTO founding_counter (id, slots_claimed, max_slots)
VALUES (1, 0, 100)
ON CONFLICT (id) DO NOTHING;

-- 2. Members
CREATE TABLE IF NOT EXISTS members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stripe_customer_id TEXT UNIQUE NOT NULL,
  stripe_subscription_id TEXT UNIQUE NOT NULL,
  email TEXT NOT NULL,
  tier TEXT NOT NULL CHECK (tier IN ('founding', 'standard')),
  status TEXT NOT NULL CHECK (status IN ('active', 'past_due', 'canceled', 'paused')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  canceled_at TIMESTAMPTZ,
  join_month TEXT NOT NULL,           -- format: '2026-05'
  sahara_access BOOLEAN NOT NULL DEFAULT FALSE,
  last_payment_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_members_email ON members(email);
CREATE INDEX IF NOT EXISTS idx_members_status ON members(status);
CREATE INDEX IF NOT EXISTS idx_members_tier ON members(tier);

-- 3. Drops catalog
CREATE TABLE IF NOT EXISTS drops (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,           -- e.g. 'sahara', 'lagos', 'midnight'
  release_month TEXT NOT NULL,          -- '2026-05'
  release_date DATE NOT NULL,
  expiration_date DATE,                 -- set only for Sahara; NULL = regular
  title TEXT NOT NULL,
  description TEXT,
  cover_path TEXT,                      -- /images/sahara-cover.png or R2 URL
  storage_path TEXT NOT NULL            -- R2 bucket key or Supabase storage path
);

CREATE INDEX IF NOT EXISTS idx_drops_release_month ON drops(release_month);

-- 4. Member ↔ Drop access (computed but cached for speed)
CREATE TABLE IF NOT EXISTS member_drops (
  member_id UUID REFERENCES members(id) ON DELETE CASCADE,
  drop_id UUID REFERENCES drops(id) ON DELETE CASCADE,
  granted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (member_id, drop_id)
);

CREATE INDEX IF NOT EXISTS idx_member_drops_member ON member_drops(member_id);

-- 5. Seed the first drop — Sahara (May 2026)
INSERT INTO drops (slug, release_month, release_date, expiration_date, title, description, cover_path, storage_path)
VALUES (
  'sahara',
  '2026-05',
  '2026-05-31',
  '2026-06-30',  -- Sahara expires for NEW subs after this date
  'Sahara · Month 1',
  'The opening drop. Four full construction kits — drums, percussion, marimba leads, atmospheric pads — pre-mixed, key-compatible. Drag into your DAW, you''re inside the track.',
  '/images/sahara-cover.png',
  'drops/sahara'
)
ON CONFLICT (slug) DO NOTHING;

-- 6. Row Level Security (RLS) policies — members can read only their own data
ALTER TABLE members ENABLE ROW LEVEL SECURITY;
ALTER TABLE member_drops ENABLE ROW LEVEL SECURITY;

-- Allow service role full access (webhooks use service role key)
-- Anon role can read founding_counter (for live landing display)
ALTER TABLE founding_counter ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "founding_counter_read_all" ON founding_counter;
CREATE POLICY "founding_counter_read_all"
  ON founding_counter
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Drops are publicly readable (their existence isn't secret; access enforced via member_drops)
ALTER TABLE drops ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "drops_read_all" ON drops;
CREATE POLICY "drops_read_all"
  ON drops
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Members can read only their own row (auth.email() matches members.email)
DROP POLICY IF EXISTS "members_read_own" ON members;
CREATE POLICY "members_read_own"
  ON members
  FOR SELECT
  TO authenticated
  USING (email = auth.email());

-- Members can read only their own drop access rows
DROP POLICY IF EXISTS "member_drops_read_own" ON member_drops;
CREATE POLICY "member_drops_read_own"
  ON member_drops
  FOR SELECT
  TO authenticated
  USING (
    member_id IN (SELECT id FROM members WHERE email = auth.email())
  );
