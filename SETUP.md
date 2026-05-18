# Drumzon Pro — Setup Runbook

Step-by-step to get from this repo → live subscription site.
Total time: ~90 min if you have the accounts already; ~3h fresh.

## Stack at a glance

| Layer | Service | Free tier limit | When you'll pay |
|---|---|---|---|
| Hosting + edge | Vercel | 100GB bandwidth/mo (Hobby) | When commercial use kicks in → Pro €20/mo |
| Database + auth | Supabase | 500MB DB, 5GB egress, 50k MAU | After ~1000 members → Pro €25/mo |
| File storage | Cloudflare R2 | 10GB storage, **zero egress fees** | After ~10GB of drops total |
| Payments | Stripe | No monthly fee | Per-tx: 1.5% + €0.25 EU cards |
| Email | Kit (ConvertKit) | 1000 subs free | After 1000 → ~$29/mo |

**Estimated cost at 100 Founding + 200 Standard active (~€2,500 MRR):**
- Vercel Pro: €20/mo
- Supabase Pro: €25/mo
- R2: €0 (under 10GB)
- Kit free tier (under 1000): €0
- Stripe fees: ~€60/mo (~2.5%)
- **Total: ~€105/mo against €2,500 MRR = 4.2% infra cost**

---

## 1. Supabase setup (15 min)

1. Go to https://supabase.com → create new project
   - Name: `drumzon-pro`
   - Region: `West EU (Ireland)` for lowest latency from Spain
   - Password: generate strong, store in 1Password
2. Wait ~2 min for project provisioning.
3. **Apply migrations:** Dashboard → SQL Editor → New query → paste contents of:
   - `supabase/migrations/0001_initial_schema.sql` → Run
   - `supabase/migrations/0002_reserve_founding_slot.sql` → Run
4. **Get env vars:** Dashboard → Settings → API
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key (⚠ keep secret) → `SUPABASE_SERVICE_ROLE_KEY`
5. Verify migration worked: SQL Editor → run `SELECT * FROM founding_counter;` → should return `1 row: id=1, slots_claimed=0, max_slots=100`.

## 2. Cloudflare R2 setup (10 min, can skip until M8 portal)

1. Cloudflare Dashboard → R2 → Enable R2 (requires payment method on file even for free tier — they won't charge under limits).
2. Create bucket: `drumzon-drops` (public access via dev URL is fine for MVP).
3. Settings → Public Access → enable → copy the `pub-xxxxx.r2.dev` URL.
4. R2 → Manage API tokens → Create Account API token with R2 read/write.
5. Store credentials for later:
   - `R2_ACCOUNT_ID` (Cloudflare dashboard sidebar)
   - `R2_ACCESS_KEY_ID`
   - `R2_SECRET_ACCESS_KEY`
   - `R2_BUCKET=drumzon-drops`
   - `R2_PUBLIC_URL=https://pub-xxxxx.r2.dev`
6. **Upload Sahara demo audio:** `drumzon-drops/sahara/demo.mp3` → public URL becomes `${R2_PUBLIC_URL}/sahara/demo.mp3` → set as `NEXT_PUBLIC_SAHARA_DEMO_URL`.

## 3. Stripe setup (20 min)

### 3a. Account + tax
1. Stripe Dashboard → register as Spanish autónomo/empresa.
2. Settings → Tax → Stripe Tax → **Enable** for EU. Confirms VAT IDs.
3. Stay in **Test mode** for dev (top-right toggle).

### 3b. Product + 4 prices
1. Product catalog → + Add product
   - Name: `Drumzon Pro`
   - Description: paste from `lib/pricing.ts` description constant
   - Image: upload Sahara cover
2. Add **4 recurring prices** to the same product:
   - €19.00 EUR / Monthly recurring → **Founding monthly** → copy price ID → `STRIPE_PRICE_FOUNDING_MONTHLY`
   - €190.00 EUR / Yearly recurring → **Founding yearly** → `STRIPE_PRICE_FOUNDING_YEARLY`
   - €29.00 EUR / Monthly recurring → **Standard monthly** → `STRIPE_PRICE_STANDARD_MONTHLY`
   - €290.00 EUR / Yearly recurring → **Standard yearly** → `STRIPE_PRICE_STANDARD_YEARLY`

### 3c. Customer Portal
Settings → Billing → Customer portal:
- Enable: Update payment method, View billing history, Cancel subscription
- Disable: Change plan
- Cancel behavior: end of billing period (recommended)

### 3d. Webhook endpoint
Developers → Webhooks → + Add endpoint
- Endpoint URL (local dev): use `stripe listen --forward-to localhost:3000/api/webhooks/stripe` via Stripe CLI
- Endpoint URL (prod): `https://drumzon.com/api/webhooks/stripe`
- Events to listen for:
  - `customer.subscription.created`
  - `customer.subscription.updated`
  - `customer.subscription.deleted`
  - `invoice.payment_failed`
  - `invoice.payment_succeeded`
- Copy the **Signing secret** → `STRIPE_WEBHOOK_SECRET`

### 3e. Get API key
Developers → API keys → reveal `Secret key` → `STRIPE_SECRET_KEY` (use test key in dev, live in prod).

## 4. Kit (ConvertKit) setup (10 min)

1. Kit Dashboard → Account Settings → Account → API → copy `API Secret` → `KIT_API_SECRET`.
2. Subscribers → Tags → Create two tags:
   - `drumzon-founding`
   - `drumzon-standard`
3. Click each tag → URL contains `tags/12345` → that's the tag ID → `KIT_TAG_FOUNDING` and `KIT_TAG_STANDARD`.
4. **Set up automations:**
   - When tag `drumzon-founding` added → send Welcome email (Founding template — includes portal access + Sahara timeline + bonus list).
   - When tag `drumzon-standard` added → send Welcome email (Standard template).
   - When tag `drumzon-founding` added → start "Founding monthly drop sequence" (each 1st of month: drop announcement + download link).
   - Same for Standard.

## 5. Vercel deployment (10 min)

1. Push repo to GitHub: `git push origin main` (and tags: `git push --tags`).
2. Vercel Dashboard → Add new project → import the GitHub repo.
3. Framework preset: Next.js (auto-detected).
4. Environment Variables → add all from `.env.example` (production values).
5. Deploy.
6. After first deploy: Settings → Domains → add `drumzon.com`.
7. **Update Stripe webhook URL** to `https://drumzon.com/api/webhooks/stripe`.

## 6. Test the full flow (15 min)

### In Test mode:
1. Open `https://drumzon.com` → click "Claim Founding spot — €19/month"
2. Stripe checkout opens → use test card `4242 4242 4242 4242`, any future date, any CVC, any postal.
3. Complete payment → redirected to `/welcome?session_id=...`
4. Verify:
   - Supabase Dashboard → Table editor → `members` → new row exists with tier='founding', status='active', sahara_access=true (if you're in the May 31 – Jun 30 window).
   - Supabase → `founding_counter` → slots_claimed incremented by 1.
   - Kit → Subscribers → your test email is tagged `drumzon-founding`.
   - Stripe Dashboard → Customers → new customer + active subscription.

### Stress test the cap:
1. Manually set `founding_counter.slots_claimed = 99` in Supabase SQL Editor.
2. Buy as Founding → success → slots_claimed becomes 100, closed_at set.
3. Refresh landing → entire pricing block now shows Standard tier €29.
4. Try to buy Founding via direct API call (should 409 with "Founding tier is closed").

### Sahara window test:
1. In Supabase SQL Editor, manually insert a member with `created_at = '2026-07-01'` → should have `sahara_access=false`.
2. Insert a member with `created_at = '2026-06-15'` → should have `sahara_access=true`.

## 7. Go live (after thorough testing)

1. Stripe Dashboard → top-right toggle to **Live mode**.
2. Repeat steps 3b (Product + Prices in Live mode) — get new live `price_xxx` IDs.
3. Repeat step 3d (Webhook in Live mode) — get new live webhook secret.
4. Update Vercel env vars with live values.
5. Redeploy.
6. Smoke test with a real €19 purchase (refund yourself afterward via Stripe Dashboard).

---

## Operational ops (post-launch)

### Monthly drop release (1st of month):
1. Upload drop files to R2: `drops/{slug}/` (full kit zip + samples zip + presets zip + MIDIs zip).
2. Insert row in Supabase `drops` table.
3. Run a one-shot SQL to grant access:
   ```sql
   INSERT INTO member_drops (member_id, drop_id)
   SELECT m.id, '{drop_id}'::uuid
   FROM members m
   WHERE m.status = 'active' AND m.created_at <= '{drop_release_date}'::timestamptz
   ON CONFLICT DO NOTHING;
   ```
4. Send Kit broadcast to `drumzon-founding` + `drumzon-standard` tags with portal link.

### Founding bonuses (manual ops):
- **Quarterly track feedback** (months 3/6/9/12): Kit broadcast to `drumzon-founding` with link to a Tally form → submissions go to your email → review + reply within 7 days.
- **Vault drop** (yearly, month 6 or 12): same as monthly drop release but Kit segment = `drumzon-founding` only.
- **Yearly Compilation** (month 12): credit all current Founding members in the booklet PDF + release the comp on streaming platforms.

### When a member emails about issues:
- Check Stripe customer + Supabase members row.
- For refund-policy edge cases (legit issues, not buyer's remorse): refund via Stripe Dashboard → also `release_founding_slot()` if Founding.

### Founding reactivation logic (manual for now):
If someone canceled and emails wanting back in at Founding €19:
- Check Supabase: `SELECT canceled_at FROM members WHERE email = '...'` → if within 90 days, create a new Founding subscription manually via Stripe → tag in Kit.
- If past 90 days, point them to standard subscription URL.

---

## Files Carlos should never edit by hand

- `lib/pricing.ts` constants (FOUNDING_MAX_SLOTS especially) — if changed, breaks the atomic counter assumption.
- `supabase/migrations/*.sql` after they're applied — modifying requires a new migration.

## Files Carlos can safely edit

- All copy in `components/blocks/*.tsx`
- All CSS tokens in `app/globals.css`
- All text in `app/{privacy,terms,refund-policy}/page.tsx`
