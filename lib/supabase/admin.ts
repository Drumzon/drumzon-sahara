// Service-role Supabase client — bypasses RLS.
// USE ONLY IN SERVER-SIDE WEBHOOK HANDLERS AND BACKGROUND JOBS.
// Never expose this key to the browser; never use in route handlers
// that read user input without strict validation.

import { createClient as createSupabaseClient } from "@supabase/supabase-js";

export function createAdminClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  );
}
