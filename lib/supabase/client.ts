// Browser Supabase client. For client components that need to read
// member-specific data (e.g. /portal). Uses anon key — RLS enforces
// per-user access on the server.

import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
