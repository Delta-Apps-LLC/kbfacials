import { createClient } from '@supabase/supabase-js'
const SUPABASE_KEY = process.env.NUXT_ENV_SUPABASE_ANON_KEY;
const SUPABASE_URL = process.env.NUXT_ENV_SUPABASE_URL;
export const SUPABASE = createClient(SUPABASE_URL, SUPABASE_KEY);
