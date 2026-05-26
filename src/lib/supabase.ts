import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.'
  );
}

const createSupabaseClient = () => createClient(supabaseUrl, supabaseAnonKey);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var __supabase: ReturnType<typeof createSupabaseClient> | undefined;
}

export const supabase = globalThis.__supabase ?? createSupabaseClient();

if (!globalThis.__supabase) {
  globalThis.__supabase = supabase;
}
